'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { TOPICS, TopicSlug, PracticeHistoryEntry, TestHistoryEntry } from '@/lib/types'
import {
  loadPracticeHistory,
  loadTestHistory,
  formatDate,
  formatSeconds,
} from '@/lib/storage'

export default function HistoryPage() {
  const [practiceHistories, setPracticeHistories] = useState<
    Record<TopicSlug, PracticeHistoryEntry[]>
  >({} as Record<TopicSlug, PracticeHistoryEntry[]>)
  const [testHistory, setTestHistory] = useState<TestHistoryEntry[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const ph: Record<string, PracticeHistoryEntry[]> = {}
    TOPICS.forEach((t) => {
      ph[t.slug] = loadPracticeHistory(t.slug)
    })
    setPracticeHistories(ph as Record<TopicSlug, PracticeHistoryEntry[]>)
    setTestHistory(loadTestHistory())
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-violet-400 text-lg animate-pulse">Loading...</div>
      </div>
    )
  }

  const hasAnyHistory =
    TOPICS.some((t) => (practiceHistories[t.slug] ?? []).length > 0) ||
    testHistory.length > 0

  return (
    <div className="min-h-screen bg-violet-50">
      <header className="bg-violet-700 text-white shadow">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <Link href="/" className="text-white/80 text-sm hover:text-white">
            ← Home
          </Link>
          <h1 className="text-xl font-black mt-1">Score History</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-8 pb-12">
        {!hasAnyHistory && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-gray-500 font-medium">No history yet.</p>
            <p className="text-gray-400 text-sm">Complete a practice or test to see your scores here.</p>
          </div>
        )}

        {/* Practice History */}
        {TOPICS.map((topic) => {
          const history = practiceHistories[topic.slug] ?? []
          if (!history.length) return null
          return (
            <section key={topic.slug}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{topic.icon}</span>
                <h2 className={`font-bold text-base ${topic.colourText}`}>
                  {topic.label}
                </h2>
              </div>
              <div className="space-y-2">
                {history.map((entry, i) => {
                  const pct = Math.round((entry.score / entry.total) * 100)
                  return (
                    <div
                      key={i}
                      className={`bg-white rounded-xl border ${topic.colourBorder} p-4 flex items-center gap-4`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full ${topic.colourLight} border-2 ${topic.colourBorder} flex items-center justify-center shrink-0`}
                      >
                        <span className={`font-black text-sm ${topic.colourText}`}>
                          {pct}%
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className={`font-bold text-base ${topic.colourText}`}>
                            {entry.score} / {entry.total}
                          </p>
                          <p className="text-xs text-gray-400 shrink-0">
                            #{history.length - i}
                          </p>
                        </div>
                        <div className="mt-1.5 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${topic.colour}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {formatDate(entry.completedAt)}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}

        {/* Test History */}
        {testHistory.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏆</span>
              <h2 className="font-bold text-base text-indigo-700">Mock Test</h2>
            </div>
            <div className="space-y-2">
              {testHistory.map((entry, i) => {
                const pct = Math.round((entry.score / entry.total) * 100)
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-indigo-200 p-4 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-50 border-2 border-indigo-300 flex items-center justify-center shrink-0">
                      <span className="font-black text-sm text-indigo-700">
                        {pct}%
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-bold text-base text-indigo-700">
                          {entry.score} / {entry.total}
                        </p>
                        <p className="text-xs text-gray-400 shrink-0">
                          #{testHistory.length - i}
                        </p>
                      </div>
                      <div className="mt-1.5 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-indigo-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-xs text-gray-400">
                          {formatDate(entry.completedAt)}
                        </p>
                        {entry.timeTaken > 0 && (
                          <p className="text-xs text-gray-400">
                            ⏱ {formatSeconds(entry.timeTaken)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
