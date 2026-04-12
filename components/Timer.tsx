'use client'

import { useEffect, useRef } from 'react'
import { formatSeconds } from '@/lib/storage'

interface Props {
  timeLeft: number          // seconds
  onTick: (secs: number) => void
  onExpire: () => void
  paused?: boolean
}

export default function Timer({ timeLeft, onTick, onExpire, paused }: Props) {
  const ref = useRef(timeLeft)
  ref.current = timeLeft

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      const next = ref.current - 1
      if (next <= 0) {
        clearInterval(id)
        onTick(0)
        onExpire()
      } else {
        onTick(next)
      }
    }, 1000)
    return () => clearInterval(id)
  }, [paused, onTick, onExpire])

  const pct = Math.min(100, (timeLeft / (45 * 60)) * 100)
  const urgent = timeLeft <= 300 // 5 minutes
  const critical = timeLeft <= 60 // 1 minute

  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-xl border-2 ${
      critical
        ? 'border-red-400 bg-red-50'
        : urgent
        ? 'border-amber-400 bg-amber-50'
        : 'border-violet-200 bg-violet-50'
    }`}>
      <span className="text-xl">{critical ? '⏰' : urgent ? '⌛' : '🕐'}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-500">Time Left</span>
          <span className={`font-bold text-lg tabular-nums ${
            critical ? 'text-red-600' : urgent ? 'text-amber-600' : 'text-violet-700'
          }`}>
            {formatSeconds(timeLeft)}
          </span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${
              critical ? 'bg-red-500' : urgent ? 'bg-amber-500' : 'bg-violet-500'
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  )
}
