'use client'

import { xpProgressInLevel, XP_PER_LEVEL } from '@/lib/types'

interface Props {
  xp: number
  level: number
  compact?: boolean
}

export default function XPBar({ xp, level, compact }: Props) {
  const progress = xpProgressInLevel(xp)
  const pct = Math.round((progress / XP_PER_LEVEL) * 100)

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-juz-yellow bg-juz-purple-dark px-2 py-0.5 rounded-full">
          Lv {level}
        </span>
        <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-juz-yellow rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-xs text-white/70 tabular-nums">{progress}/{XP_PER_LEVEL}</span>
      </div>
    )
  }

  return (
    <div className="bg-juz-purple-light rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <div>
            <p className="text-xs text-juz-purple font-medium">Total XP</p>
            <p className="text-xl font-black text-juz-navy">{xp.toLocaleString()}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Level</p>
          <p className="text-3xl font-black text-juz-purple">{level}</p>
        </div>
      </div>
      <div className="h-3 bg-white rounded-full overflow-hidden">
        <div
          className="h-full gradient-purple rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1.5 text-right">{progress} / {XP_PER_LEVEL} XP to Level {level + 1}</p>
    </div>
  )
}
