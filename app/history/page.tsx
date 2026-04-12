'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { TOPICS, MATH_TOPICS, TopicSlug, MathTopicSlug, PracticeHistoryEntry, MathHistoryEntry, TestHistoryEntry } from '@/lib/types'
import { loadPracticeHistory, loadMathHistory, loadTestHistory, formatDate, formatSeconds } from '@/lib/storage'

export default function HistoryPage() {
  const router = useRouter()
  const [practiceH, setPracticeH] = useState<Record<TopicSlug, PracticeHistoryEntry[]>>({} as any)
  const [mathH, setMathH] = useState<Record<MathTopicSlug, MathHistoryEntry[]>>({} as any)
  const [testH, setTestH] = useState<TestHistoryEntry[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const ph: any = {}
    TOPICS.forEach(t => { ph[t.slug] = loadPracticeHistory(t.slug) })
    setPracticeH(ph)
    const mh: any = {}
    MATH_TOPICS.forEach(t => { mh[t.slug] = loadMathHistory(t.slug) })
    setMathH(mh)
    setTestH(loadTestHistory())
    setMounted(true)
  }, [])

  if (!mounted) return null

  const ScoreRow = ({ score, total, date, time }: { score: number; total: number; date: number; time?: number }) => {
    const pct = Math.round((score / total) * 100)
    const colour = pct === 100 ? 'text-green-600' : pct >= 80 ? 'text-juz-purple' : pct >= 60 ? 'text-amber-600' : 'text-red-500'
    return (
      <div className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
        <span className={`font-black text-base w-12 ${colour}`}>{pct}%</span>
        <span className="text-gray-500 text-sm flex-1">{score}/{total} correct</span>
        {time !== undefined && <span className="text-xs text-gray-400">⏱ {formatSeconds(time)}</span>}
        <span className="text-xs text-gray-300">{formatDate(date)}</span>
      </div>
    )
  }

  const hasAny = TOPICS.some(t => (practiceH[t.slug] ?? []).length > 0)
    || MATH_TOPICS.some(t => (mathH[t.slug] ?? []).length > 0)
    || testH.length > 0

  return (
    <div className="min-h-screen bg-juz-purple-bg">
      <div className="gradient-purple px-4 pt-6 pb-10">
        <div className="max-w-lg mx-auto">
          <Link href="/" className="text-white/80 text-sm font-medium">← Home</Link>
          <h1 className="text-2xl font-black text-white mt-2">Score History 📊</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 -mt-4 pb-10 space-y-4">
        {!hasAny && (
          <div className="bg-white rounded-3xl shadow-card p-10 text-center">
            <div className="text-5xl mb-3">📭</div>
            <p className="font-bold text-juz-navy">No history yet</p>
            <p className="text-gray-400 text-sm mt-1">Complete a session to see scores here.</p>
            <Link href="/" className="inline-block mt-5 px-6 py-2.5 rounded-2xl gradient-purple text-white font-bold text-sm">Go Practice!</Link>
          </div>
        )}

        {/* Science */}
        {TOPICS.some(t => (practiceH[t.slug] ?? []).length > 0) && (
          <div className="bg-white rounded-3xl shadow-card p-5">
            <h2 className="font-black text-juz-navy mb-4 flex items-center gap-2"><span>🔬</span> Science Practice</h2>
            {TOPICS.map(t => {
              const h = practiceH[t.slug] ?? []
              if (!h.length) return null
              return (
                <div key={t.slug} className="mb-5 last:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{t.icon}</span>
                    <p className={`font-bold text-sm ${t.textColor}`}>{t.label}</p>
                  </div>
                  {h.map((e, i) => <ScoreRow key={i} score={e.score} total={e.total} date={e.completedAt} />)}
                </div>
              )
            })}
          </div>
        )}

        {/* Science mock test */}
        {testH.length > 0 && (
          <div className="bg-white rounded-3xl shadow-card p-5">
            <h2 className="font-black text-juz-navy mb-4 flex items-center gap-2"><span>🏆</span> Science Mock Test</h2>
            {testH.map((e, i) => <ScoreRow key={i} score={e.score} total={e.total} date={e.completedAt} time={e.timeTaken} />)}
          </div>
        )}

        {/* Math */}
        {MATH_TOPICS.some(t => (mathH[t.slug] ?? []).length > 0) && (
          <div className="bg-white rounded-3xl shadow-card p-5">
            <h2 className="font-black text-juz-navy mb-4 flex items-center gap-2"><span>🔢</span> Mathematics Practice</h2>
            {MATH_TOPICS.map(t => {
              const h = mathH[t.slug] ?? []
              if (!h.length) return null
              return (
                <div key={t.slug} className="mb-5 last:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{t.icon}</span>
                    <p className={`font-bold text-sm ${t.textColor}`}>{t.label}</p>
                    <span className="text-xs text-gray-400">— {t.description}</span>
                  </div>
                  {h.map((e, i) => <ScoreRow key={i} score={e.score} total={e.total} date={e.completedAt} />)}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
