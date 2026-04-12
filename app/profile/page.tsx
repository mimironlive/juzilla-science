'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Profile, BADGES, BadgeDef } from '@/lib/types'
import { loadProfile, saveProfile } from '@/lib/storage'
import XPBar from '@/components/XPBar'

export default function ProfilePage() {
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const p = loadProfile()
    if (!p) { router.replace('/setup'); return }
    setProfile(p)
    setMounted(true)
  }, [router])

  const handleReset = () => {
    if (!confirm('Reset your profile? This clears all progress, XP and badges.')) return
    localStorage.clear()
    router.replace('/setup')
  }

  if (!mounted || !profile) return null

  const earned = new Set(profile.badges)
  const accuracy = profile.totalAnswered > 0
    ? Math.round((profile.totalCorrect / profile.totalAnswered) * 100)
    : 0

  return (
    <div className="min-h-screen bg-juz-purple-bg">
      {/* Header */}
      <div className="gradient-purple px-4 pt-6 pb-12">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="text-white/80 text-sm font-medium hover:text-white">← Home</Link>
            <button onClick={handleReset} className="text-white/60 text-xs hover:text-white">Reset</button>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-6xl bg-white/20 rounded-3xl w-20 h-20 flex items-center justify-center">
              {profile.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-black text-white leading-tight">{profile.name}</h1>
              <p className="text-white/70 text-sm">Science & Maths Explorer</p>
            </div>
          </div>
          <div className="mt-4">
            <XPBar xp={profile.xp} level={profile.level} compact />
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 -mt-6 pb-10 space-y-4">
        {/* Stats */}
        <div className="bg-white rounded-3xl shadow-card p-5">
          <h2 className="font-black text-juz-navy mb-4">My Stats</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Total XP', value: profile.xp.toLocaleString(), icon: '⭐' },
              { label: 'Level', value: profile.level, icon: '🏅' },
              { label: 'Accuracy', value: `${accuracy}%`, icon: '🎯' },
              { label: 'Correct', value: profile.totalCorrect, icon: '✅' },
              { label: 'Streak', value: `${profile.dailyStreak}d`, icon: '🔥' },
              { label: 'Best Streak', value: `${profile.longestStreak}d`, icon: '📅' },
            ].map(s => (
              <div key={s.label} className="bg-juz-purple-bg rounded-2xl p-3 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-black text-juz-navy text-lg leading-none">{s.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* XP details */}
        <div className="bg-white rounded-3xl shadow-card p-5">
          <h2 className="font-black text-juz-navy mb-3">XP Progress</h2>
          <XPBar xp={profile.xp} level={profile.level} />
        </div>

        {/* Badges */}
        <div className="bg-white rounded-3xl shadow-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-juz-navy">Badges</h2>
            <span className="text-sm text-juz-purple font-bold">
              {profile.badges.length} / {BADGES.length}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {BADGES.map((b: BadgeDef) => {
              const unlocked = earned.has(b.id)
              return (
                <div
                  key={b.id}
                  className={`flex items-center gap-3 rounded-2xl p-3 border-2 transition-all ${
                    unlocked
                      ? 'border-juz-purple-light bg-juz-purple-bg'
                      : 'border-gray-100 bg-gray-50 opacity-50'
                  }`}
                >
                  <span className="text-2xl">{unlocked ? b.icon : '🔒'}</span>
                  <div className="min-w-0">
                    <p className={`font-bold text-sm leading-tight ${unlocked ? 'text-juz-navy' : 'text-gray-400'}`}>
                      {b.label}
                    </p>
                    <p className="text-xs text-gray-400 leading-tight mt-0.5">{b.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
