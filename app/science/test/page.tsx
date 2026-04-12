'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import ConfirmModal from '@/components/ConfirmModal'
import Timer from '@/components/Timer'
import { Question, TestSession } from '@/lib/types'
import {
  loadTestSession,
  saveTestSession,
  clearTestSession,
  saveTestResult,
  shuffle,
  formatSeconds,
} from '@/lib/storage'

const OPTION_LABELS = ['A', 'B', 'C', 'D']
const TOTAL_TIME = 45 * 60 // 45 minutes in seconds

type Phase = 'landing' | 'answering' | 'finished'

export default function TestPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [session, setSession] = useState<TestSession | null>(null)
  const [phase, setPhase] = useState<Phase>('landing')
  const [pendingAnswer, setPendingAnswer] = useState<number | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [timerKey, setTimerKey] = useState(0)
  const sessionRef = useRef<TestSession | null>(null)

  useEffect(() => {
    import('@/data/test-questions').then((m) => {
      setQuestions(m.default)

      const existing = loadTestSession()
      if (existing && existing.currentIndex < m.default.length) {
        setSession(existing)
        sessionRef.current = existing
        setPhase('answering')
      }
      setMounted(true)
    })
  }, [])

  const startTest = (fresh: boolean) => {
    if (!questions.length) return
    clearTestSession()
    const sess: TestSession = {
      questionOrder: shuffle(questions.map((_, i) => i)),
      currentIndex: 0,
      answers: {},
      startedAt: Date.now(),
      timeLeft: TOTAL_TIME,
    }
    saveTestSession(sess)
    setSession(sess)
    sessionRef.current = sess
    setTimerKey((k) => k + 1)
    setPhase('answering')
  }

  const handleTick = useCallback((secs: number) => {
    const s = sessionRef.current
    if (!s) return
    const updated = { ...s, timeLeft: secs }
    sessionRef.current = updated
    setSession(updated)
    // Save every 5 seconds to avoid excessive writes
    if (secs % 5 === 0) saveTestSession(updated)
  }, [])

  const handleExpire = useCallback(() => {
    const s = sessionRef.current
    if (!s) return
    const score = calcScore(s, questions)
    const timeTaken = TOTAL_TIME - s.timeLeft
    saveTestResult(score, questions.length, timeTaken)
    clearTestSession()
    const final = { ...s, timeLeft: 0 }
    setSession(final)
    sessionRef.current = final
    setPhase('finished')
  }, [questions])

  const handleOptionSelect = (idx: number) => {
    setPendingAnswer(idx)
    setShowConfirm(true)
  }

  const handleConfirm = useCallback(() => {
    const s = sessionRef.current
    if (!s || pendingAnswer === null) return
    setShowConfirm(false)

    const qIdx = s.questionOrder[s.currentIndex]
    const nextIndex = s.currentIndex + 1
    const updated: TestSession = {
      ...s,
      answers: { ...s.answers, [qIdx]: pendingAnswer },
      currentIndex: nextIndex,
    }
    setPendingAnswer(null)

    if (nextIndex >= s.questionOrder.length) {
      // End of test
      const score = calcScore(updated, questions)
      const timeTaken = TOTAL_TIME - updated.timeLeft
      saveTestResult(score, questions.length, timeTaken)
      clearTestSession()
      sessionRef.current = updated
      setSession(updated)
      setPhase('finished')
    } else {
      saveTestSession(updated)
      sessionRef.current = updated
      setSession(updated)
    }
  }, [pendingAnswer, questions])

  function calcScore(s: TestSession, qs: Question[]) {
    return s.questionOrder.reduce((acc, qIdx) => {
      if (s.answers[qIdx] === undefined) return acc
      return acc + (s.answers[qIdx] === qs[qIdx].answer ? 1 : 0)
    }, 0)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-violet-400 text-lg animate-pulse">Loading...</div>
      </div>
    )
  }

  // ── Landing ──────────────────────────────────────────────────────────────────
  if (phase === 'landing') {
    const hasExisting = session !== null
    return (
      <div className="min-h-screen bg-violet-50 flex flex-col">
        <header className="bg-indigo-700 text-white px-4 py-4">
          <Link href="/" className="text-white/80 text-sm hover:text-white">
            ← Home
          </Link>
        </header>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-8 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-black text-indigo-900 mb-2">Mock Test</h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              30 questions across all 3 topics. You have <strong>45 minutes</strong>.
              Answers are revealed only at the end.
            </p>
            {hasExisting && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 text-sm text-amber-700">
                You have a test in progress. Resume it or start fresh.
              </div>
            )}
            <div className="space-y-3">
              {hasExisting && (
                <button
                  onClick={() => setPhase('answering')}
                  className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors"
                >
                  Resume Test
                </button>
              )}
              <button
                onClick={() => startTest(true)}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors"
              >
                {hasExisting ? 'Start Fresh Test' : 'Start Test'}
              </button>
              <Link
                href="/"
                className="block w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Finished Screen ──────────────────────────────────────────────────────────
  if (phase === 'finished' && session) {
    const score = calcScore(session, questions)
    const total = questions.length
    const pct = Math.round((score / total) * 100)
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '💪'
    const msg =
      pct === 100
        ? 'Perfect score! Incredible!'
        : pct >= 80
        ? 'Excellent work!'
        : pct >= 60
        ? 'Good effort! Review your mistakes.'
        : 'Keep practising — you can do it!'

    return (
      <div className="min-h-screen bg-violet-50">
        <header className="bg-indigo-700 text-white px-4 py-4">
          <Link href="/" className="text-white/80 text-sm hover:text-white">
            ← Home
          </Link>
        </header>

        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Score card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-6">
            <div className="text-6xl mb-3">{emoji}</div>
            <h2 className="text-2xl font-black text-indigo-900 mb-1">Test Complete!</h2>
            <p className="text-gray-500 text-sm mb-6">Here is how you did:</p>
            <div className="bg-indigo-50 rounded-2xl py-6 px-4 mb-4">
              <p className="text-5xl font-black text-indigo-700 mb-1">
                {score}/{total}
              </p>
              <p className="text-2xl font-bold text-indigo-400">{pct}%</p>
            </div>
            <p className="text-gray-600 mb-6">{msg}</p>
            <div className="space-y-3">
              <button
                onClick={() => startTest(true)}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="block w-full py-3 rounded-xl border-2 border-indigo-200 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Question review */}
          <h3 className="text-lg font-bold text-indigo-900 mb-3">Question Review</h3>
          <div className="space-y-4">
            {session.questionOrder.map((qIdx, i) => {
              const q = questions[qIdx]
              const chosen = session.answers[qIdx]
              const correct = q.answer
              const isRight = chosen === correct
              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-xl border-2 p-4 ${
                    isRight ? 'border-emerald-300' : 'border-red-300'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-lg shrink-0">{isRight ? '✅' : '❌'}</span>
                    <p className="text-sm font-semibold text-gray-800 leading-snug whitespace-pre-line">
                      <span className="text-gray-400 font-normal">Q{i + 1}. </span>
                      {q.question}
                    </p>
                  </div>
                  <div className="space-y-1.5 mb-3">
                    {q.options.map((opt, oi) => {
                      let cls = 'flex items-center gap-2 rounded-lg px-3 py-2 text-sm'
                      if (oi === correct) {
                        cls += ' bg-emerald-50 border border-emerald-300 text-emerald-800 font-medium'
                      } else if (oi === chosen && !isRight) {
                        cls += ' bg-red-50 border border-red-300 text-red-700'
                      } else {
                        cls += ' text-gray-500'
                      }
                      return (
                        <div key={oi} className={cls}>
                          <span
                            className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold shrink-0 ${
                              oi === correct
                                ? 'bg-emerald-500 text-white'
                                : oi === chosen && !isRight
                                ? 'bg-red-400 text-white'
                                : 'bg-gray-200 text-gray-500'
                            }`}
                          >
                            {OPTION_LABELS[oi]}
                          </span>
                          <span>{opt}</span>
                          {oi === correct && (
                            <span className="ml-auto text-emerald-500 text-xs font-bold">
                              Correct
                            </span>
                          )}
                          {oi === chosen && !isRight && (
                            <span className="ml-auto text-red-400 text-xs font-bold">
                              Your answer
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  {q.topic && (
                    <p className="text-xs text-indigo-400 font-medium mb-1">
                      Topic: {q.topic}
                    </p>
                  )}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <span className="font-bold">Explanation: </span>
                      {q.explanation}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 pb-8 space-y-3">
            <button
              onClick={() => startTest(true)}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="block w-full py-3 rounded-xl border-2 border-indigo-200 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Answering ────────────────────────────────────────────────────────────────
  if (!session || !questions.length) return null

  const qIdx = session.questionOrder[session.currentIndex]
  const currentQ = questions[qIdx]
  const progress = ((session.currentIndex + 1) / session.questionOrder.length) * 100

  return (
    <div className="min-h-screen bg-violet-50 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-700 text-white shadow">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-white/90">Mock Test</span>
            <span className="text-sm font-semibold text-white/90">
              {session.currentIndex + 1} / {session.questionOrder.length}
            </span>
          </div>
          <div className="mb-2">
            <Timer
              key={timerKey}
              timeLeft={session.timeLeft}
              onTick={handleTick}
              onExpire={handleExpire}
            />
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-5">
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Question {session.currentIndex + 1}
            {currentQ.topic && (
              <span className="ml-2 text-indigo-400 normal-case font-normal">
                — {currentQ.topic}
              </span>
            )}
          </p>
          <p className="text-base font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
            {currentQ.question}
          </p>
        </div>

        <div className="space-y-3">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              className={`w-full text-left rounded-xl border-2 p-4 transition-all font-medium text-sm ${
                pendingAnswer === i
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
              onClick={() => handleOptionSelect(i)}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 ${
                    pendingAnswer === i
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {OPTION_LABELS[i]}
                </span>
                <span className="flex-1 text-left leading-snug">{opt}</span>
              </span>
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Tap an option to choose your answer. Answers are revealed at the end.
        </p>
      </main>

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
