'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Profile, TOPICS, MATH_TOPICS, TopicSlug, MathTopicSlug } from '@/lib/types'
import {
  loadProfile,
  loadPracticeHistory,
  loadMathHistory,
  loadTestHistory,
  loadPracticeSession,
  loadMathSession,
} from '@/lib/storage'
import XPBar from '@/components/XPBar'

export default function HomePage() {
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [scienceBest, setScienceBest] = useState<Record<string, number | null>>({})
  const [mathBest, setMathBest] = useState<Record<string, number | null>>({})
  const [testBest, setTestBest] = useState<number | null>(null)
  const [inProgress, setInProgress] = useState<Record<string, boolean>>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const p = loadProfile()
    if (!p) { router.replace('/setup'); return }
    setProfile(p)

    const sb: Record<string, number | null> = {}
    const ip: Record<string, boolean> = {}
    TOPICS.forEach(t => {
      const h = loadPracticeHistory(t.slug)
      sb[t.slug] = h.length ? Math.max(...h.map(e => Math.round((e.score / e.total) * 100))) : null
      const sess = loadPracticeSession(t.slug)
      ip[t.slug] = sess !== null && sess.currentIndex < 30
    })
    setScienceBest(sb)

    const mb: Record<string, number | null> = {}
    MATH_TOPICS.forEach(t => {
      const h = loadMathHistory(t.slug)
      mb[t.slug] = h.length ? Math.max(...h.map(e => Math.round((e.score / e.total) * 100))) : null
      const sess = loadMathSession(t.slug)
      ip[t.slug] = sess !== null && sess.currentIndex < 30
    })
    setMathBest(mb)
    setInProgress(ip)

    const th = loadTestHistory()
    if (th.length) setTestBest(Math.max(...th.map(e => Math.round((e.score / e.total) * 100))))

    setMounted(true)
  }, [router])

  if (!mounted || !profile) return null

  return (
    <div className="min-h-screen bg-juz-purple-bg">
      {/* Hero header */}
      <div className="gradient-purple px-4 pt-6 pb-14">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Link href="/profile" className="text-5xl bg-white/20 rounded-2xl w-14 h-14 flex items-center justify-center hover:bg-white/30 transition-colors">
                {profile.avatar}
              </Link>
              <div>
                <p className="text-white/70 text-xs font-medium">Welcome back,</p>
                <h1 className="text-xl font-black text-white leading-tight">{profile.name}!</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/history" className="text-white/70 hover:text-white transition-colors">
                <div className="bg-white/10 rounded-xl px-3 py-2 text-sm font-bold">📊</div>
              </Link>
              <Link href="/profile">
                <div className="bg-white/10 rounded-xl px-3 py-2 text-sm">
                  <span className="text-juz-yellow font-black text-sm">Lv {profile.level}</span>
                </div>
              </Link>
            </div>
          </div>
          <XPBar xp={profile.xp} level={profile.level} compact />

          {/* Streak */}
          {profile.dailyStreak > 0 && (
            <div className="mt-3 flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 w-fit">
              <span>🔥</span>
              <span className="text-white text-sm font-bold">{profile.dailyStreak}-day streak!</span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 -mt-8 pb-10 space-y-5">
        {/* Juzilla banner */}
        <div className="bg-white rounded-3xl shadow-card p-5 flex items-center gap-4">
          <div className="text-5xl">🦖</div>
          <div>
            <h2 className="font-black text-juz-navy text-lg leading-tight">Juzilla the Science Explorer</h2>
            <p className="text-gray-400 text-xs mt-0.5">Primary 3 • MOE Singapore Syllabus</p>
          </div>
        </div>

        {/* Science section */}
        <section>
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-xl">🔬</span>
            <h2 className="font-black text-juz-navy text-base">Science</h2>
          </div>
          <div className="space-y-3">
            {TOPICS.map(t => {
              const best = scienceBest[t.slug]
              return (
                <Link key={t.slug} href={`/science/practice/${t.slug}`}
                  className={`block bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 active:translate-y-0 border-2 ${t.borderColor} overflow-hidden`}>
                  <div className={`h-1.5 w-full bg-gradient-to-r ${t.gradient}`} />
                  <div className="p-4 flex items-center gap-3">
                    <span className="text-3xl">{t.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className={`font-bold text-sm ${t.textColor} leading-tight`}>{t.label}</p>
                        {inProgress[t.slug] && (
                          <span className="text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full font-bold shrink-0">In Progress</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">30 questions</p>
                      {best !== null && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${t.gradient} rounded-full`} style={{ width: `${best}%` }} />
                          </div>
                          <span className={`text-xs font-black ${t.textColor}`}>{best}%</span>
                        </div>
                      )}
                    </div>
                    <span className="text-gray-300 text-lg">›</span>
                  </div>
                </Link>
              )
            })}

            {/* Mock test */}
            <Link href="/science/test"
              className="block bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 border-2 border-indigo-100 overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-purple-600" />
              <div className="p-4 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-indigo-700">Science Mock Test</p>
                  <p className="text-xs text-gray-400 mt-0.5">30 questions • 45 min • All topics</p>
                  {testBest !== null && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" style={{ width: `${testBest}%` }} />
                      </div>
                      <span className="text-xs font-black text-indigo-600">{testBest}%</span>
                    </div>
                  )}
                </div>
                <span className="text-gray-300 text-lg">›</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Math section */}
        <section>
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-xl">🔢</span>
            <h2 className="font-black text-juz-navy text-base">Mathematics</h2>
          </div>
          <div className="space-y-3">
            {MATH_TOPICS.map(t => {
              const best = mathBest[t.slug]
              return (
                <Link key={t.slug} href={`/math/practice/${t.slug}`}
                  className={`block bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 active:translate-y-0 border-2 ${t.borderColor} overflow-hidden`}>
                  <div className={`h-1.5 w-full bg-gradient-to-r ${t.gradient}`} />
                  <div className="p-4 flex items-center gap-3">
                    <span className="text-3xl">{t.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className={`font-bold text-sm ${t.textColor} leading-tight`}>{t.label}</p>
                        {inProgress[t.slug] && (
                          <span className="text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full font-bold shrink-0">In Progress</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{t.description} • 30 questions{t.slug !== 'bar-graphs' ? ' • Canvas working' : ' • Chart + MCQ'}</p>
                      {best !== null && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${t.gradient} rounded-full`} style={{ width: `${best}%` }} />
                          </div>
                          <span className={`text-xs font-black ${t.textColor}`}>{best}%</span>
                        </div>
                      )}
                    </div>
                    <span className="text-gray-300 text-lg">›</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <p className="text-center text-xs text-gray-400 py-6">version 2.2</p>
      </div>
    </div>
  )
}
