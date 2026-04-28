'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ConfirmModal from '@/components/ConfirmModal'
import NumberPad from '@/components/NumberPad'
import BarGraph from '@/components/BarGraph'
import { MATH_TOPICS, MathTopicSlug, MathQuestion, MathSession, MathAnswer, Profile } from '@/lib/types'
import {
  loadMathSession, saveMathSession, clearMathSession, saveMathResult,
  loadProfile, saveProfile, awardXP, checkBadges, touchDailyStreak, shuffle,
} from '@/lib/storage'

const DrawingCanvas = dynamic(() => import('@/components/DrawingCanvas'), { ssr: false })

const OPTION_LABELS = ['A', 'B', 'C', 'D']
type Phase = 'answering' | 'revealed' | 'finished'

function isCorrectAnswer(stored: MathAnswer, q: MathQuestion): boolean {
  if (q.isMCQ) return stored === q.answer
  if (q.remainder !== undefined) {
    const ans = stored as { q: number; r: number }
    return ans.q === q.answer && ans.r === q.remainder
  }
  return stored === q.answer
}

function formatAnswer(stored: MathAnswer, q: MathQuestion): string {
  if (q.isMCQ && q.options) return q.options[stored as number] ?? String(stored)
  if (q.remainder !== undefined) {
    const ans = stored as { q: number; r: number }
    return `${ans.q} R${ans.r}`
  }
  return String(stored)
}

export default function MathPracticePage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.topic as MathTopicSlug
  const topicMeta = MATH_TOPICS.find(t => t.slug === slug)

  const [questions, setQuestions] = useState<MathQuestion[]>([])
  const [session, setSession] = useState<MathSession | null>(null)
  const [phase, setPhase] = useState<Phase>('answering')
  // Regular / bar-graph numeric input
  const [inputValue, setInputValue] = useState('')
  // Remainder two-field input
  const [inputQ, setInputQ] = useState('')
  const [inputR, setInputR] = useState('')
  const [activeField, setActiveField] = useState<'q' | 'r'>('q')
  // MCQ
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  // Shared
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmedAnswer, setConfirmedAnswer] = useState<MathAnswer | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [xpGained, setXpGained] = useState(0)
  const [newBadges, setNewBadges] = useState<string[]>([])
  const [answerStreak, setAnswerStreak] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const p = loadProfile()
    if (!p) { router.replace('/setup'); return }
    setProfile(p)
    async function load() {
      let qs: MathQuestion[] = []
      if (slug === 'tables-6789') qs = (await import('@/data/math-tables')).default
      else if (slug === 'mult-div') qs = (await import('@/data/math-multdiv')).default
      else if (slug === 'word-problems') qs = (await import('@/data/math-wordproblems')).default
      else if (slug === 'bar-graphs') qs = (await import('@/data/math-bargraphs')).default
      setQuestions(qs)
      let sess = loadMathSession(slug)
      if (!sess || sess.questionOrder.length !== 30) {
        sess = { topic: slug, questionOrder: shuffle(qs.map((_, i) => i)).slice(0, 30), currentIndex: 0, answers: {}, startedAt: Date.now() }
        saveMathSession(slug, sess)
      }
      setSession(sess)
      const qIdx = sess.questionOrder[sess.currentIndex]
      const stored = sess.answers[qIdx]
      if (stored !== undefined && stored !== null) {
        setConfirmedAnswer(stored)
        setPhase('revealed')
      }
      setMounted(true)
    }
    load()
  }, [slug, router])

  // ── Submit handlers ─────────────────────────────────────────────────────────

  const handleSubmitNumeric = () => { if (inputValue) setShowConfirm(true) }
  const handleSubmitRemainder = () => { if (inputQ && inputR) setShowConfirm(true) }
  const handleSubmitMCQ = (idx: number) => { setSelectedOption(idx); setShowConfirm(true) }

  const confirmLabel = (() => {
    if (!session || !questions.length) return ''
    const qIdx = session.questionOrder[session.currentIndex]
    const q = questions[qIdx]
    if (q.isMCQ && q.options) return `${OPTION_LABELS[selectedOption!]}) ${q.options[selectedOption!]}`
    if (q.remainder !== undefined) return `${inputQ} R${inputR}`
    return inputValue
  })()

  const handleConfirm = useCallback(() => {
    if (!session || !profile) return
    setShowConfirm(false)
    const qIdx = session.questionOrder[session.currentIndex]
    const q = questions[qIdx]

    let answered: MathAnswer
    if (q.isMCQ) {
      answered = selectedOption!
    } else if (q.remainder !== undefined) {
      answered = { q: parseInt(inputQ, 10), r: parseInt(inputR, 10) }
    } else {
      answered = parseInt(inputValue, 10)
    }

    const correct = isCorrectAnswer(answered, q)
    const newStreak = correct ? answerStreak + 1 : 0
    setAnswerStreak(newStreak)
    setConfirmedAnswer(answered)

    const { profile: p2, gains } = awardXP(profile, correct, false, newStreak)
    setXpGained(prev => prev + gains.reduce((s, g) => s + g.amount, 0))
    const { profile: p3, newBadges: nb } = checkBadges(p2, {
      answerStreak: newStreak,
      completedMathTopic: correct ? slug : undefined,
    })
    if (nb.length) setNewBadges(prev => [...prev, ...nb])
    const p4 = touchDailyStreak(p3)
    saveProfile(p4)
    setProfile(p4)

    const updated: MathSession = { ...session, answers: { ...session.answers, [qIdx]: answered } }
    setSession(updated)
    saveMathSession(slug, updated)
    setPhase('revealed')
    setInputValue('')
    setInputQ('')
    setInputR('')
    setActiveField('q')
    setSelectedOption(null)
  }, [session, profile, questions, slug, answerStreak, selectedOption, inputQ, inputR, inputValue])

  // ── Next / finished ─────────────────────────────────────────────────────────

  const handleNext = useCallback(() => {
    if (!session || !profile) return
    const nextIndex = session.currentIndex + 1
    if (nextIndex >= session.questionOrder.length) {
      const score = session.questionOrder.reduce((acc, qIdx) => {
        const q = questions[qIdx]
        const ans = session.answers[qIdx]
        return acc + (ans !== null && ans !== undefined && isCorrectAnswer(ans, q) ? 1 : 0)
      }, 0)
      const perfect = score === session.questionOrder.length
      const { profile: p2 } = awardXP(profile, false, perfect)
      const { profile: p3, newBadges: nb } = checkBadges(p2, {
        isPerfect: perfect,
        completedMathTopic: slug,
      })
      if (nb.length) setNewBadges(prev => [...prev, ...nb])
      saveProfile(p3)
      saveMathResult(slug, score, session.questionOrder.length)
      clearMathSession(slug)
      setPhase('finished')
    } else {
      const updated = { ...session, currentIndex: nextIndex }
      setSession(updated)
      saveMathSession(slug, updated)
      setPhase('answering')
      setConfirmedAnswer(null)
    }
  }, [session, questions, slug, profile])

  const handleRestart = () => {
    if (!questions.length) return
    const sess: MathSession = { topic: slug, questionOrder: shuffle(questions.map((_, i) => i)).slice(0, 30), currentIndex: 0, answers: {}, startedAt: Date.now() }
    saveMathSession(slug, sess)
    setSession(sess)
    setPhase('answering')
    setAnswerStreak(0)
    setXpGained(0)
    setConfirmedAnswer(null)
    setInputValue('')
    setInputQ('')
    setInputR('')
    setSelectedOption(null)
  }

  if (!mounted || !topicMeta) return null

  // ── Finished screen ──────────────────────────────────────────────────────────
  if (phase === 'finished' && session) {
    const score = session.questionOrder.reduce((acc, qIdx) => {
      const q = questions[qIdx]
      const ans = session.answers[qIdx]
      return acc + (ans !== null && ans !== undefined && isCorrectAnswer(ans, q) ? 1 : 0)
    }, 0)
    const pct = Math.round((score / session.questionOrder.length) * 100)
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '💪'
    return (
      <div className="min-h-screen bg-juz-purple-bg flex flex-col">
        <div className="gradient-purple px-4 py-4">
          <Link href="/" className="text-white/80 text-sm font-medium">← Home</Link>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-4xl shadow-card max-w-sm w-full p-8 text-center">
            <div className="text-6xl mb-3">{emoji}</div>
            <h2 className="text-2xl font-black text-juz-navy">Practice Complete!</h2>
            <p className={`text-sm font-bold ${topicMeta.textColor} mt-1 mb-5`}>{topicMeta.label}</p>
            <div className={`${topicMeta.cardBg} rounded-3xl py-5 mb-4`}>
              <p className="text-5xl font-black text-juz-navy">{score}/{session.questionOrder.length}</p>
              <p className="text-2xl font-bold text-gray-400 mt-1">{pct}%</p>
            </div>
            {xpGained > 0 && <div className="bg-amber-50 border border-amber-200 rounded-2xl py-2 px-4 mb-3 font-black text-amber-700">⭐ +{xpGained} XP earned!</div>}
            {newBadges.length > 0 && (
              <div className="bg-juz-purple-light rounded-2xl py-2 px-4 mb-4">
                <p className="text-xs font-bold text-juz-purple mb-1">New badges!</p>
                <p className="text-xl">{newBadges.join(' ')}</p>
              </div>
            )}
            <div className="space-y-3">
              <button onClick={handleRestart} className={`w-full py-3 rounded-2xl bg-gradient-to-r ${topicMeta.gradient} text-white font-black hover:opacity-90`}>Try Again 🔄</button>
              <Link href="/" className="block w-full py-3 rounded-2xl border-2 border-gray-100 text-gray-500 font-bold text-center">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!session || !questions.length) return null

  const qIdx = session.questionOrder[session.currentIndex]
  const currentQ = questions[qIdx]
  const progress = ((session.currentIndex + 1) / session.questionOrder.length) * 100

  const isCorrect = confirmedAnswer !== null && isCorrectAnswer(confirmedAnswer, currentQ)
  const correctLabel = currentQ.isMCQ && currentQ.options
    ? currentQ.options[currentQ.answer]
    : currentQ.remainder !== undefined
      ? `${currentQ.answer} R${currentQ.remainder}`
      : String(currentQ.answer)

  const showCanvas = !currentQ.isMCQ

  return (
    <div className="min-h-screen bg-juz-purple-bg flex flex-col">
      {/* Header */}
      <header className="gradient-purple">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-1">
            <Link href="/" className="text-white/80 text-sm font-medium">← Home</Link>
            <div className="flex items-center gap-2">
              {answerStreak >= 3 && <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-bold">🔥 {answerStreak}</span>}
              <span className="text-sm font-bold text-white/90">{session.currentIndex + 1}/{session.questionOrder.length}</span>
            </div>
          </div>
          <p className="text-white/70 text-xs mb-2">{topicMeta.label} — {topicMeta.description}</p>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-4 flex flex-col gap-4">
        {/* Bar graph (if any) */}
        {currentQ.barGraph && <BarGraph data={currentQ.barGraph} />}

        {/* Question */}
        <div className="bg-white rounded-3xl shadow-card p-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Question {session.currentIndex + 1}</p>
          <p className="text-lg font-black text-juz-navy leading-relaxed whitespace-pre-line">{currentQ.question}</p>
          {currentQ.hint && phase === 'answering' && (
            <p className="text-xs text-gray-400 mt-2 italic">Hint: {currentQ.hint}</p>
          )}
        </div>

        {/* Canvas for working (hidden for MCQ) */}
        {showCanvas && <DrawingCanvas key={`canvas-${session.currentIndex}`} />}

        {/* Answer reveal */}
        {phase === 'revealed' && confirmedAnswer !== null && (
          <div className={`rounded-2xl border-2 p-4 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">{isCorrect ? '🌟' : '💡'}</span>
              <div>
                <p className={`font-black text-sm mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isCorrect ? 'Correct! Well done!' : `Not quite! The answer is ${correctLabel}.`}
                </p>
                <p className="text-xs text-gray-500">
                  Your answer: <span className={`font-bold ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                    {formatAnswer(confirmedAnswer, currentQ)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Input area */}
        {phase === 'answering' && (
          <>
            {/* MCQ options */}
            {currentQ.isMCQ && currentQ.options && (
              <div className="space-y-3">
                {currentQ.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSubmitMCQ(i)}
                    className="w-full text-left rounded-2xl border-2 border-gray-100 bg-white p-4 flex items-center gap-3 hover:border-juz-purple hover:bg-juz-purple-light transition-all font-medium text-gray-700"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-black text-gray-500 shrink-0">
                      {OPTION_LABELS[i]}
                    </span>
                    <span className="text-base font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Remainder two-field input */}
            {!currentQ.isMCQ && currentQ.remainder !== undefined && (
              <>
                <div className="bg-white rounded-2xl shadow-card p-4 flex items-center justify-center gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Quotient</span>
                    <button
                      onClick={() => setActiveField('q')}
                      className={`w-24 h-14 rounded-xl border-2 text-2xl font-black text-juz-navy text-center transition-all ${activeField === 'q' ? 'border-juz-purple bg-juz-purple-light' : 'border-gray-200 bg-gray-50'}`}
                    >
                      {inputQ || <span className="text-gray-300">?</span>}
                    </button>
                  </div>
                  <span className="text-2xl font-black text-gray-400 mt-4">R</span>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Remainder</span>
                    <button
                      onClick={() => setActiveField('r')}
                      className={`w-24 h-14 rounded-xl border-2 text-2xl font-black text-juz-navy text-center transition-all ${activeField === 'r' ? 'border-juz-purple bg-juz-purple-light' : 'border-gray-200 bg-gray-50'}`}
                    >
                      {inputR || <span className="text-gray-300">?</span>}
                    </button>
                  </div>
                </div>
                <NumberPad
                  value={activeField === 'q' ? inputQ : inputR}
                  onChange={v => activeField === 'q' ? setInputQ(v) : setInputR(v)}
                  onSubmit={handleSubmitRemainder}
                  disabled={!inputQ || !inputR}
                />
              </>
            )}

            {/* Regular numeric input */}
            {!currentQ.isMCQ && currentQ.remainder === undefined && (
              <NumberPad value={inputValue} onChange={setInputValue} onSubmit={handleSubmitNumeric} />
            )}
          </>
        )}

        {/* Next button */}
        {phase === 'revealed' && (
          <button onClick={handleNext} className="w-full py-4 rounded-2xl gradient-purple text-white font-black text-base hover:opacity-90 shadow-md">
            {session.currentIndex + 1 < session.questionOrder.length ? 'Next Question →' : 'See Results 🏆'}
          </button>
        )}
      </main>

      {showConfirm && (
        <ConfirmModal
          selectedLabel={confirmLabel}
          onConfirm={handleConfirm}
          onCancel={() => { setShowConfirm(false); setSelectedOption(null) }}
          isMath
        />
      )}
    </div>
  )
}
