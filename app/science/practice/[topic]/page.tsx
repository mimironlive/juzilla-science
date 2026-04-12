'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import ConfirmModal from '@/components/ConfirmModal'
import { TOPICS, TopicSlug, Question, PracticeSession, Profile } from '@/lib/types'
import {
  loadPracticeSession, savePracticeSession, clearPracticeSession, savePracticeResult,
  loadProfile, saveProfile, awardXP, checkBadges, touchDailyStreak,
  loadPracticeHistory, shuffle,
} from '@/lib/storage'

const LABELS = ['A', 'B', 'C', 'D']
type Phase = 'answering' | 'revealed' | 'finished'

export default function SciencePracticePage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.topic as TopicSlug
  const topicMeta = TOPICS.find(t => t.slug === slug)

  const [questions, setQuestions] = useState<Question[]>([])
  const [session, setSession] = useState<PracticeSession | null>(null)
  const [phase, setPhase] = useState<Phase>('answering')
  const [pending, setPending] = useState<number | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)
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
      let qs: Question[] = []
      if (slug === 'diversity-living') qs = (await import('@/data/practice-diversity-living')).default
      else if (slug === 'classification') qs = (await import('@/data/practice-classification')).default
      else if (slug === 'diversity-materials') qs = (await import('@/data/practice-diversity-materials')).default
      setQuestions(qs)
      let sess = loadPracticeSession(slug)
      if (!sess || sess.questionOrder.length !== qs.length) {
        sess = { topic: slug, questionOrder: shuffle(qs.map((_, i) => i)), currentIndex: 0, answers: {}, startedAt: Date.now() }
        savePracticeSession(slug, sess)
      }
      setSession(sess)
      const qIdx = sess.questionOrder[sess.currentIndex]
      setPhase(sess.answers[qIdx] !== undefined ? 'revealed' : 'answering')
      setMounted(true)
    }
    load()
  }, [slug, router])

  const handleConfirm = useCallback(() => {
    if (!session || pending === null || !profile) return
    setShowConfirm(false)
    const qIdx = session.questionOrder[session.currentIndex]
    const q = questions[qIdx]
    const correct = pending === q.answer
    const newStreak = correct ? answerStreak + 1 : 0
    setAnswerStreak(newStreak)
    const { profile: p2, gains } = awardXP(profile, correct, false, newStreak)
    setXpGained(prev => prev + gains.reduce((s, g) => s + g.amount, 0))
    const completedTopics = TOPICS.filter(t => loadPracticeHistory(t.slug).length > 0 || t.slug === slug).map(t => t.slug)
    const { profile: p3, newBadges: nb } = checkBadges(p2, { answerStreak: newStreak, completedScienceTopics: completedTopics })
    if (nb.length) setNewBadges(prev => [...prev, ...nb])
    const p4 = touchDailyStreak(p3)
    saveProfile(p4)
    setProfile(p4)
    const updated = { ...session, answers: { ...session.answers, [qIdx]: pending } }
    setSession(updated)
    savePracticeSession(slug, updated)
    setPhase('revealed')
    setPending(null)
  }, [session, pending, profile, questions, slug, answerStreak])

  const handleNext = useCallback(() => {
    if (!session || !profile) return
    const nextIndex = session.currentIndex + 1
    if (nextIndex >= session.questionOrder.length) {
      const score = session.questionOrder.reduce((acc, qIdx) => acc + (session.answers[qIdx] === questions[qIdx].answer ? 1 : 0), 0)
      const perfect = score === questions.length
      const { profile: p2 } = awardXP(profile, false, perfect)
      const { profile: p3, newBadges: nb } = checkBadges(p2, { isPerfect: perfect, completedScienceTopics: TOPICS.map(t => t.slug) })
      if (nb.length) setNewBadges(prev => [...prev, ...nb])
      saveProfile(p3)
      savePracticeResult(slug, score, questions.length)
      clearPracticeSession(slug)
      setPhase('finished')
    } else {
      const updated = { ...session, currentIndex: nextIndex }
      setSession(updated)
      savePracticeSession(slug, updated)
      setPhase('answering')
    }
  }, [session, questions, slug, profile])

  const handleRestart = () => {
    if (!questions.length) return
    const sess: PracticeSession = { topic: slug, questionOrder: shuffle(questions.map((_, i) => i)), currentIndex: 0, answers: {}, startedAt: Date.now() }
    savePracticeSession(slug, sess)
    setSession(sess)
    setPhase('answering')
    setAnswerStreak(0)
    setXpGained(0)
  }

  if (!mounted || !topicMeta) return null

  if (phase === 'finished' && session) {
    const score = session.questionOrder.reduce((acc, qIdx) => acc + (session.answers[qIdx] === questions[qIdx].answer ? 1 : 0), 0)
    const pct = Math.round((score / questions.length) * 100)
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '💪'
    return (
      <div className="min-h-screen bg-juz-purple-bg flex flex-col">
        <div className={`bg-gradient-to-r ${topicMeta.gradient} px-4 py-4`}>
          <Link href="/" className="text-white/80 text-sm font-medium">← Home</Link>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-4xl shadow-card max-w-sm w-full p-8 text-center">
            <div className="text-6xl mb-3">{emoji}</div>
            <h2 className="text-2xl font-black text-juz-navy">Practice Complete!</h2>
            <p className={`text-sm font-bold ${topicMeta.textColor} mt-1 mb-5`}>{topicMeta.label}</p>
            <div className={`${topicMeta.cardBg} rounded-3xl py-5 mb-4`}>
              <p className="text-5xl font-black text-juz-navy">{score}/{questions.length}</p>
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
  const confirmed = session.answers[qIdx]
  const progress = ((session.currentIndex + 1) / session.questionOrder.length) * 100

  return (
    <div className="min-h-screen bg-juz-purple-bg flex flex-col">
      <header className={`bg-gradient-to-r ${topicMeta.gradient}`}>
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-1">
            <Link href="/" className="text-white/80 text-sm font-medium">← Home</Link>
            <div className="flex items-center gap-2">
              {answerStreak >= 3 && <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-bold">🔥 {answerStreak}</span>}
              <span className="text-sm font-bold text-white/90">{session.currentIndex + 1}/{session.questionOrder.length}</span>
            </div>
          </div>
          <p className="text-white/70 text-xs mb-2">{topicMeta.label}</p>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-5">
        <div className="bg-white rounded-3xl shadow-card p-5 mb-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Question {session.currentIndex + 1}</p>
          <p className="text-base font-bold text-juz-navy leading-relaxed whitespace-pre-line">{currentQ.question}</p>
        </div>
        <div className="space-y-3 mb-4">
          {currentQ.options.map((opt, i) => {
            let cls = 'w-full text-left rounded-2xl border-2 p-4 transition-all font-medium text-sm shadow-sm'
            if (phase === 'answering') cls += ' border-gray-100 bg-white text-juz-navy hover:border-juz-purple hover:bg-juz-purple-light cursor-pointer'
            else if (i === currentQ.answer) cls += ' border-green-400 bg-green-50 text-green-800'
            else if (i === confirmed && i !== currentQ.answer) cls += ' border-red-300 bg-red-50 text-red-700'
            else cls += ' border-gray-100 bg-gray-50 text-gray-400'
            return (
              <button key={i} className={cls} onClick={() => { if (phase !== 'answering') return; setPending(i); setShowConfirm(true) }} disabled={phase !== 'answering'}>
                <span className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black shrink-0 ${phase === 'revealed' ? (i === currentQ.answer ? 'bg-green-500 text-white' : i === confirmed ? 'bg-red-400 text-white' : 'bg-gray-200 text-gray-400') : 'bg-juz-purple-light text-juz-purple'}`}>{LABELS[i]}</span>
                  <span className="flex-1 leading-snug">{opt}</span>
                  {phase === 'revealed' && i === currentQ.answer && <span className="text-green-500 text-lg">✓</span>}
                  {phase === 'revealed' && i === confirmed && i !== currentQ.answer && <span className="text-red-400 text-lg">✗</span>}
                </span>
              </button>
            )
          })}
        </div>
        {phase === 'revealed' && (
          <div className={`rounded-2xl border-2 p-4 mb-4 ${confirmed === currentQ.answer ? 'border-green-200 bg-green-50' : 'border-amber-200 bg-amber-50'}`}>
            <div className="flex items-start gap-2">
              <span className="text-xl shrink-0">{confirmed === currentQ.answer ? '🌟' : '💡'}</span>
              <div>
                <p className={`font-black text-sm mb-1 ${confirmed === currentQ.answer ? 'text-green-700' : 'text-amber-700'}`}>{confirmed === currentQ.answer ? 'Correct! Well done!' : 'Not quite — here is why:'}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{currentQ.explanation}</p>
              </div>
            </div>
          </div>
        )}
        {phase === 'revealed' && (
          <button onClick={handleNext} className="w-full py-4 rounded-2xl gradient-purple text-white font-black hover:opacity-90 shadow-md">
            {session.currentIndex + 1 < session.questionOrder.length ? 'Next Question →' : 'See Results 🏆'}
          </button>
        )}
        {phase === 'answering' && <p className="text-center text-xs text-gray-400 mt-2">Tap an option to answer</p>}
      </main>
      {showConfirm && pending !== null && (
        <ConfirmModal selectedLabel={`${LABELS[pending]}) ${currentQ.options[pending]}`} onConfirm={handleConfirm} onCancel={() => { setShowConfirm(false); setPending(null) }} />
      )}
    </div>
  )
}
