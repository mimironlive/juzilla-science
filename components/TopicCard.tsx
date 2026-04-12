'use client'

import Link from 'next/link'
import { TopicMeta, PracticeHistoryEntry } from '@/lib/types'

interface Props {
  topic: TopicMeta
  history: PracticeHistoryEntry[]
  inProgress: boolean
}

export default function TopicCard({ topic, history, inProgress }: Props) {
  const best = history.length
    ? Math.max(...history.map(h => Math.round((h.score / h.total) * 100)))
    : null

  return (
    <Link
      href={`/science/practice/${topic.slug}`}
      className={`block rounded-3xl border-2 ${topic.borderColor} ${topic.cardBg} p-5 hover:shadow-card-hover transition-all hover:-translate-y-0.5 active:translate-y-0 overflow-hidden`}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${topic.gradient} -mx-5 -mt-5 mb-4 w-[calc(100%+2.5rem)]`} />
      <div className="flex items-start gap-3">
        <span className="text-3xl leading-none">{topic.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h2 className={`font-bold text-sm ${topic.textColor} leading-tight`}>{topic.label}</h2>
            {inProgress && (
              <span className="text-xs bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-bold shrink-0">
                In Progress
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 mb-2">30 questions • MOE P3</p>
          {best !== null && (
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${topic.gradient} rounded-full`} style={{ width: `${best}%` }} />
              </div>
              <span className={`text-xs font-black ${topic.textColor}`}>{best}%</span>
            </div>
          )}
        </div>
        <span className="text-gray-300 text-lg">›</span>
      </div>
    </Link>
  )
}
