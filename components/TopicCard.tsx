'use client'

import Link from 'next/link'
import { TopicMeta } from '@/lib/types'
import { PracticeHistoryEntry } from '@/lib/types'

interface Props {
  topic: TopicMeta
  history: PracticeHistoryEntry[]
  inProgress: boolean
}

export default function TopicCard({ topic, history, inProgress }: Props) {
  const best = history.length
    ? Math.max(...history.map((h) => Math.round((h.score / h.total) * 100)))
    : null
  const attempts = history.length

  return (
    <Link
      href={`/practice/${topic.slug}`}
      className={`block rounded-2xl border-2 ${topic.colourBorder} ${topic.colourLight} p-5 hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0`}
    >
      <div className="flex items-start gap-3">
        <span className="text-4xl leading-none">{topic.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h2 className={`font-bold text-base ${topic.colourText} leading-tight`}>
              {topic.label}
            </h2>
            {inProgress && (
              <span className="text-xs bg-amber-100 text-amber-700 border border-amber-300 px-2 py-0.5 rounded-full font-medium shrink-0">
                In Progress
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mb-3">30 questions • MOE P3 Syllabus</p>
          <div className="flex gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Attempts</p>
              <p className={`font-bold text-lg ${topic.colourText}`}>{attempts}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Best Score</p>
              <p className={`font-bold text-lg ${topic.colourText}`}>
                {best !== null ? `${best}%` : '—'}
              </p>
            </div>
          </div>
        </div>
        <span className={`text-2xl ${topic.colourText}`}>→</span>
      </div>
      {best !== null && (
        <div className="mt-3">
          <div className="h-2 bg-white rounded-full overflow-hidden border border-gray-100">
            <div
              className={`h-full rounded-full ${topic.colour} transition-all`}
              style={{ width: `${best}%` }}
            />
          </div>
        </div>
      )}
    </Link>
  )
}
