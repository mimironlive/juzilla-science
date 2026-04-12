import {
  PracticeSession, PracticeHistoryEntry,
  TestSession, TestHistoryEntry,
  MathSession, MathHistoryEntry,
  Profile, TopicSlug, MathTopicSlug,
  xpToLevel,
} from './types'

// ── Helpers ───────────────────────────────────────────────────────────────────

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString('en-SG', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

export function formatSeconds(secs: number): string {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

// ── Profile ───────────────────────────────────────────────────────────────────

const PROFILE_KEY = 'juzilla-profile'

export function loadProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    return raw ? (JSON.parse(raw) as Profile) : null
  } catch { return null }
}

export function saveProfile(profile: Profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
}

export function defaultProfile(name: string, avatar: string): Profile {
  return {
    name, avatar,
    xp: 0, level: 1,
    badges: [],
    dailyStreak: 0, longestStreak: 0,
    lastActiveDate: '',
    totalCorrect: 0, totalAnswered: 0,
  }
}

/** Call after any session — updates streak and returns updated profile */
export function touchDailyStreak(profile: Profile): Profile {
  const today = todayStr()
  if (profile.lastActiveDate === today) return profile

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yStr = yesterday.toISOString().slice(0, 10)

  const newStreak = profile.lastActiveDate === yStr
    ? profile.dailyStreak + 1
    : 1

  return {
    ...profile,
    dailyStreak: newStreak,
    longestStreak: Math.max(profile.longestStreak, newStreak),
    lastActiveDate: today,
  }
}

// ── Gamification ──────────────────────────────────────────────────────────────

export interface XPGain {
  amount: number
  reason: string
}

export function awardXP(
  profile: Profile,
  correct: boolean,
  isPerfectSession?: boolean,
  streakCount?: number,
): { profile: Profile; gains: XPGain[] } {
  const gains: XPGain[] = []

  if (correct) {
    gains.push({ amount: 10, reason: 'Correct answer' })
    if (streakCount && streakCount > 0 && streakCount % 5 === 0) {
      gains.push({ amount: 15, reason: `${streakCount} in a row! 🔥` })
    }
  } else {
    gains.push({ amount: 3, reason: 'Nice try!' })
  }

  if (isPerfectSession) {
    gains.push({ amount: 50, reason: 'Perfect session! 🌟' })
  }

  const totalXP = gains.reduce((s, g) => s + g.amount, 0)
  const newXP = profile.xp + totalXP
  const newLevel = xpToLevel(newXP)

  return {
    profile: {
      ...profile,
      xp: newXP,
      level: newLevel,
      totalCorrect: profile.totalCorrect + (correct ? 1 : 0),
      totalAnswered: profile.totalAnswered + 1,
    },
    gains,
  }
}

export function checkBadges(
  profile: Profile,
  opts: {
    answerStreak?: number
    isPerfect?: boolean
    completedScienceTopics?: string[]
    completedMathTopic?: MathTopicSlug
    perfectMockTest?: boolean
  },
): { profile: Profile; newBadges: string[] } {
  const earned = new Set(profile.badges)
  const newBadges: string[] = []

  const award = (id: string) => {
    if (!earned.has(id)) { earned.add(id); newBadges.push(id) }
  }

  if (profile.totalCorrect >= 1) award('first-steps')
  if ((opts.answerStreak ?? 0) >= 5) award('on-fire')
  if ((opts.answerStreak ?? 0) >= 10) award('lightning')
  if (opts.isPerfect) award('perfect')
  if (opts.perfectMockTest) award('juzilla-champion')
  if (profile.dailyStreak >= 7) award('hot-streak')
  if (profile.level >= 5) award('juzilla-legend')

  if (opts.completedScienceTopics) {
    const needed = ['diversity-living', 'classification', 'diversity-materials']
    if (needed.every(t => opts.completedScienceTopics!.includes(t))) {
      award('science-explorer')
    }
  }
  if (opts.completedMathTopic === 'tables-6789') award('tables-ace')
  if (opts.completedMathTopic === 'mult-div') award('division-master')

  return { profile: { ...profile, badges: Array.from(earned) }, newBadges }
}

// ── Science Practice ──────────────────────────────────────────────────────────

const practiceSessionKey = (t: TopicSlug) => `juzilla-practice-session-${t}`
const practiceHistoryKey = (t: TopicSlug) => `juzilla-practice-history-${t}`

export function savePracticeSession(topic: TopicSlug, s: PracticeSession) {
  localStorage.setItem(practiceSessionKey(topic), JSON.stringify(s))
}
export function loadPracticeSession(topic: TopicSlug): PracticeSession | null {
  try {
    const raw = localStorage.getItem(practiceSessionKey(topic))
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}
export function clearPracticeSession(topic: TopicSlug) {
  localStorage.removeItem(practiceSessionKey(topic))
}
export function savePracticeResult(topic: TopicSlug, score: number, total: number) {
  const h = loadPracticeHistory(topic)
  h.unshift({ topic, score, total, completedAt: Date.now() })
  localStorage.setItem(practiceHistoryKey(topic), JSON.stringify(h.slice(0, 20)))
}
export function loadPracticeHistory(topic: TopicSlug): PracticeHistoryEntry[] {
  try {
    const raw = localStorage.getItem(practiceHistoryKey(topic))
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

// ── Science Test ──────────────────────────────────────────────────────────────

const TEST_SESSION_KEY = 'juzilla-test-session'
const TEST_HISTORY_KEY = 'juzilla-test-history'

export function saveTestSession(s: TestSession) {
  localStorage.setItem(TEST_SESSION_KEY, JSON.stringify(s))
}
export function loadTestSession(): TestSession | null {
  try {
    const raw = localStorage.getItem(TEST_SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}
export function clearTestSession() {
  localStorage.removeItem(TEST_SESSION_KEY)
}
export function saveTestResult(score: number, total: number, timeTaken: number) {
  const h = loadTestHistory()
  h.unshift({ score, total, completedAt: Date.now(), timeTaken })
  localStorage.setItem(TEST_HISTORY_KEY, JSON.stringify(h.slice(0, 20)))
}
export function loadTestHistory(): TestHistoryEntry[] {
  try {
    const raw = localStorage.getItem(TEST_HISTORY_KEY)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

// ── Math ──────────────────────────────────────────────────────────────────────

const mathSessionKey = (t: MathTopicSlug) => `juzilla-math-session-${t}`
const mathHistoryKey = (t: MathTopicSlug) => `juzilla-math-history-${t}`

export function saveMathSession(topic: MathTopicSlug, s: MathSession) {
  localStorage.setItem(mathSessionKey(topic), JSON.stringify(s))
}
export function loadMathSession(topic: MathTopicSlug): MathSession | null {
  try {
    const raw = localStorage.getItem(mathSessionKey(topic))
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}
export function clearMathSession(topic: MathTopicSlug) {
  localStorage.removeItem(mathSessionKey(topic))
}
export function saveMathResult(topic: MathTopicSlug, score: number, total: number) {
  const h = loadMathHistory(topic)
  h.unshift({ topic, score, total, completedAt: Date.now() })
  localStorage.setItem(mathHistoryKey(topic), JSON.stringify(h.slice(0, 20)))
}
export function loadMathHistory(topic: MathTopicSlug): MathHistoryEntry[] {
  try {
    const raw = localStorage.getItem(mathHistoryKey(topic))
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}
