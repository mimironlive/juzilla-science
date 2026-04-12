'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import TopicCard from '@/components/TopicCard'
import { TOPICS, TopicSlug, PracticeHistoryEntry } from '@/lib/types'
import {
  loadPracticeHistory,
  loadPracticeSession,
  loadTestHistory,
  loadTestSession,
} from '@/lib/storage'

export default function HomePage() {
  const [histories, setHistories] = useState<Record<TopicSlug, PracticeHistoryEntry[]>>(
    {} as Record<TopicSlug, PracticeHistoryEntry[]>
  )
  const [inProgress, setInProgress] = useState<Record<TopicSlug, boolean>>(
    {} as Record<TopicSlug, boolean>
  )
  const [testBest, setTestBest] = useState<number | null>(null)
  const [testAttempts, setTestAttempts] = useState(0)
  const [testInProgress, setTestInProgress] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const h: Record<string, PracticeHistoryEntry[]> = {}
    const p: Record<string, boolean> = {}
    TOPICS.forEach((t) => {
      h[t.slug] = loadPracticeHistory(t.slug)
      const sess = loadPracticeSession(t.slug)
      p[t.slug] = sess !== null && sess.currentIndex < 30
    })
    setHistories(h as Record<TopicSlug, PracticeHistoryEntry[]>)
    setInProgress(p as Record<TopicSlug, boolean>)

    const testHist = loadTestHistory()
    setTestAttempts(testHist.length)
    if (testHist.length) {
      setTestBest(Math.max(...testHist.map((e) => Math.round((e.score / e.total) * 100))))
    }

    const testSess = loadTestSession()
    setTestInProgress(testSess !== null && testSess.currentIndex < 30)

    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-violet-400 text-lg animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-violet-50">
      {/* Header */}
      <header className="bg-violet-700 text-white shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <span className="text-5xl">🦖</span>
            <div>
              <h1 className="text-2xl font-black leading-tight">
                Juzilla the Science Explorer
              </h1>
              <p className="text-violet-200 text-sm font-medium mt-0.5">
                Primary 3 Science • MOE Singapore
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">

        {/* Practice Section */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📚</span>
            <h2 className="text-lg font-bold text-violet-900">Practice Topics</h2>
          </div>
          <div className="space-y-3">
            {TOPICS.map((topic) => (
              <TopicCard
                key={topic.slug}
                topic={topic}
                history={histories[topic.slug] ?? []}
                inProgress={inProgress[topic.slug] ?? false}
              />
            ))}
          </div>
        </section>

        {/* Mock Test Card */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📝</span>
            <h2 className="text-lg font-bold text-violet-900">Mock Test</h2>
          </div>
          <Link
            href="/test"
            className="block rounded-2xl border-2 border-indigo-300 bg-indigo-50 p-5 hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="flex items-start gap-3">
              <span className="text-4xl leading-none">🏆</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-bold text-base text-indigo-700 leading-tight">
                    Full Mock Test
                  </h3>
                  {testInProgress && (
                    <span className="text-xs bg-amber-100 text-amber-700 border border-amber-300 px-2 py-0.5 rounded-full font-medium shrink-0">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  30 questions • All 3 topics • 45-min timer • Results at end
                </p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Attempts</p>
                    <p className="font-bold text-lg text-indigo-700">{testAttempts}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Best Score</p>
                    <p className="font-bold text-lg text-indigo-700">
                      {testBest !== null ? `${testBest}%` : '—'}
                    </p>
                  </div>
                </div>
              </div>
              <span className="text-2xl text-indigo-700">→</span>
            </div>
            {testBest !== null && (
              <div className="mt-3">
                <div className="h-2 bg-white rounded-full overflow-hidden border border-gray-100">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all"
                    style={{ width: `${testBest}%` }}
                  />
                </div>
              </div>
            )}
          </Link>
        </section>

        {/* History Link */}
        <section className="pb-8">
          <Link
            href="/history"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-violet-200 text-violet-600 font-semibold hover:bg-violet-100 transition-colors"
          >
            <span>📊</span>
            View Score History
          </Link>
        </section>
      </main>
    </div>
  )
}
