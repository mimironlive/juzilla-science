'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import ConfirmModal from '@/components/ConfirmModal'
import { TOPICS, TopicSlug, Question, PracticeSession } from '@/lib/types'
import {
  loadPracticeSession,
  savePracticeSession,
  clearPracticeSession,
  savePracticeResult,
  shuffle,
} from '@/lib/storage'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

type Phase = 'answering' | 'revealed' | 'finished'

export default function PracticePage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.topic as TopicSlug

  const topicMeta = TOPICS.find((t) => t.slug === slug)
  const [questions, setQuestions] = useState<Question[]>([])
  const [session, setSession] = useState<PracticeSession | null>(null)
  const [phase, setPhase] = useState<Phase>('answering')
  const [pendingAnswer, setPendingAnswer] = useState<number | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Derived state
  const currentQIdx = session ? session.questionOrder[session.currentIndex] : 0
  const currentQ: Question | null = questions[currentQIdx] ?? null
  const confirmedAnswer: number | undefined =
    session && currentQ ? session.answers[currentQIdx] : undefined

  // Load questions for this topic
  useEffect(() => {
    async function load() {
      let qs: Question[] = []
      if (slug === 'diversity-living') {
        const m = await import('@/data/practice-diversity-living')
        qs = m.default
      } else if (slug === 'classification') {
        const m = await import('@/data/practice-classification')
        qs = m.default
      } else if (slug === 'diversity-materials') {
        const m = await import('@/data/practice-diversity-materials')
        qs = m.default
      }
      setQuestions(qs)

      // Load or create session
      let sess = loadPracticeSession(slug)
      if (!sess || sess.questionOrder.length !== qs.length) {
        // New session
        sess = {
          topic: slug,
          questionOrder: shuffle(qs.map((_, i) => i)),
          currentIndex: 0,
          answers: {},
          startedAt: Date.now(),
        }
        savePracticeSession(slug, sess)
      }
      setSession(sess)

      // If already answered this question in a previous partial run, show revealed
      const qIdx = sess.questionOrder[sess.currentIndex]
      if (sess.answers[qIdx] !== undefined) {
        setPhase('revealed')
      } else {
        setPhase('answering')
      }

      setMounted(true)
    }
    load()
  }, [slug])

  const handleOptionSelect = (idx: number) => {
    if (phase !== 'answering') return
    setPendingAnswer(idx)
    setShowConfirm(true)
  }

  const handleConfirm = useCallback(() => {
    if (!session || pendingAnswer === null || !currentQ) return
    setShowConfirm(false)

    const qIdx = session.questionOrder[session.currentIndex]
    const updated: PracticeSession = {
      ...session,
      answers: { ...session.answers, [qIdx]: pendingAnswer },
    }
    setSession(updated)
    savePracticeSession(slug, updated)
    setPhase('revealed')
    setPendingAnswer(null)
  }, [session, pendingAnswer, currentQ, slug])

  const handleNext = useCallback(() => {
    if (!session) return
    const nextIndex = session.currentIndex + 1
    if (nextIndex >= session.questionOrder.length) {
      // Calculate score
      const score = session.questionOrder.reduce((acc, qIdx) => {
        const q = questions[qIdx]
        return acc + (session.answers[qIdx] === q.answer ? 1 : 0)
      }, 0)
      savePracticeResult(slug, score, questions.length)
      clearPracticeSession(slug)
      setPhase('finished')
    } else {
      const updated: PracticeSession = { ...session, currentIndex: nextIndex }
      setSession(updated)
      savePracticeSession(slug, updated)
      setPhase('answering')
    }
  }, [session, questions, slug])

  const handleRestart = () => {
    if (!questions.length) return
    const sess: PracticeSession = {
      topic: slug,
      questionOrder: shuffle(questions.map((_, i) => i)),
      currentIndex: 0,
      answers: {},
      startedAt: Date.now(),
    }
    savePracticeSession(slug, sess)
    setSession(sess)
    setPhase('answering')
  }

  if (!mounted || !topicMeta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-violet-400 text-lg animate-pulse">Loading...</div>
      </div>
    )
  }

  // ── Finished Screen ──────────────────────────────────────────────────────────
  if (phase === 'finished' && session) {
    const total = questions.length
    const score = session.questionOrder.reduce((acc, qIdx) => {
      const q = questions[qIdx]
      return acc + (session.answers[qIdx] === q.answer ? 1 : 0)
    }, 0)
    const pct = Math.round((score / total) * 100)
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '💪'
    const msg =
      pct === 100
        ? 'Perfect score! Amazing work!'
        : pct >= 80
        ? 'Excellent! Keep it up!'
        : pct >= 60
        ? 'Good effort! Review the ones you missed.'
        : 'Keep practising — you will get there!'

    return (
      <div className="min-h-screen bg-violet-50 flex flex-col">
        <header className={`${topicMeta.colour} text-white px-4 py-4`}>
          <Link href="/" className="text-white/80 text-sm hover:text-white">
            ← Home
          </Link>
        </header>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-8 text-center">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-2xl font-black text-violet-900 mb-1">Practice Complete!</h2>
            <p className={`text-sm font-medium ${topicMeta.colourText} mb-6`}>{topicMeta.label}</p>
            <div className="bg-violet-50 rounded-2xl py-6 px-4 mb-6">
              <p className="text-5xl font-black text-violet-700 mb-1">
                {score}/{total}
              </p>
              <p className="text-2xl font-bold text-violet-500">{pct}%</p>
            </div>
            <p className="text-gray-600 mb-8">{msg}</p>
            <div className="space-y-3">
              <button
                onClick={handleRestart}
                className={`w-full py-3 rounded-xl ${topicMeta.colour} text-white font-bold hover:opacity-90 transition-opacity`}
              >
                Try Again (New Order)
              </button>
              <Link
                href="/"
                className="block w-full py-3 rounded-xl border-2 border-violet-200 text-violet-600 font-semibold hover:bg-violet-50 transition-colors text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!session || !currentQ) return null

  const progress = ((session.currentIndex + 1) / session.questionOrder.length) * 100

  return (
    <div className="min-h-screen bg-violet-50 flex flex-col">
      {/* Header */}
      <header className={`${topicMeta.colour} text-white shadow`}>
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <Link href="/" className="text-white/80 text-sm hover:text-white">
              ← Home
            </Link>
            <span className="text-sm font-semibold text-white/90">
              {session.currentIndex + 1} / {session.questionOrder.length}
            </span>
          </div>
          <p className="text-white/80 text-xs mb-2 font-medium">{topicMeta.label}</p>
          {/* Progress bar */}
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Question */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-5">
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Question {session.currentIndex + 1}
          </p>
          <p className="text-base font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
            {currentQ.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-4">
          {currentQ.options.map((opt, i) => {
            let cls =
              'w-full text-left rounded-xl border-2 p-4 transition-all font-medium text-sm'
            if (phase === 'answering') {
              cls +=
                pendingAnswer === i
                  ? ' border-violet-500 bg-violet-50 text-violet-800'
                  : ' border-gray-200 bg-white text-gray-700 hover:border-violet-300 hover:bg-violet-50 cursor-pointer'
            } else {
              // revealed
              if (i === currentQ.answer) {
                cls += ' border-emerald-500 bg-emerald-50 text-emerald-800'
              } else if (i === confirmedAnswer && i !== currentQ.answer) {
                cls += ' border-red-400 bg-red-50 text-red-700'
              } else {
                cls += ' border-gray-200 bg-gray-50 text-gray-500'
              }
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleOptionSelect(i)}
                disabled={phase !== 'answering'}
              >
                <span className="inline-flex items-center gap-3">
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 ${
                      phase === 'revealed'
                        ? i === currentQ.answer
                          ? 'bg-emerald-500 text-white'
                          : i === confirmedAnswer
                          ? 'bg-red-400 text-white'
                          : 'bg-gray-200 text-gray-500'
                        : pendingAnswer === i
                        ? 'bg-violet-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {OPTION_LABELS[i]}
                  </span>
                  <span className="flex-1 text-left leading-snug">{opt}</span>
                  {phase === 'revealed' && i === currentQ.answer && (
                    <span className="text-emerald-500 text-lg shrink-0">✓</span>
                  )}
                  {phase === 'revealed' &&
                    i === confirmedAnswer &&
                    i !== currentQ.answer && (
                      <span className="text-red-400 text-lg shrink-0">✗</span>
                    )}
                </span>
              </button>
            )
          })}
        </div>

        {/* Explanation (shown after reveal) */}
        {phase === 'revealed' && (
          <div
            className={`rounded-xl border-2 p-4 mb-4 ${
              confirmedAnswer === currentQ.answer
                ? 'border-emerald-300 bg-emerald-50'
                : 'border-amber-300 bg-amber-50'
            }`}
          >
            <div className="flex items-start gap-2">
              <span className="text-xl shrink-0">
                {confirmedAnswer === currentQ.answer ? '🌟' : '💡'}
              </span>
              <div>
                <p
                  className={`font-bold text-sm mb-1 ${
                    confirmedAnswer === currentQ.answer
                      ? 'text-emerald-700'
                      : 'text-amber-700'
                  }`}
                >
                  {confirmedAnswer === currentQ.answer ? 'Correct!' : 'Not quite!'}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next button */}
        {phase === 'revealed' && (
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-xl bg-violet-600 text-white font-bold text-base hover:bg-violet-700 transition-colors shadow-sm"
          >
            {session.currentIndex + 1 < session.questionOrder.length
              ? 'Next Question →'
              : 'See Results 🏆'}
          </button>
        )}

        {phase === 'answering' && (
          <p className="text-center text-xs text-gray-400 mt-2">
            Tap an option to choose your answer
          </p>
        )}
      </main>

      {/* Confirm Modal */}
      {showConfirm && pendingAnswer !== null && (
        <ConfirmModal
          selectedLabel={`${OPTION_LABELS[pendingAnswer]}) ${currentQ.options[pendingAnswer]}`}
          onConfirm={handleConfirm}
          onCancel={() => {
            setShowConfirm(false)
            setPendingAnswer(null)
          }}
        />
      )}
    </div>
  )
}
