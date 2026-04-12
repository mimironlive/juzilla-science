import {
  PracticeSession,
  PracticeHistoryEntry,
  TestSession,
  TestHistoryEntry,
  TopicSlug,
} from './types'

// ── Practice ──────────────────────────────────────────────────────────────────

const practiceSessionKey = (topic: TopicSlug) => `juzilla-practice-session-${topic}`
const practiceHistoryKey = (topic: TopicSlug) => `juzilla-practice-history-${topic}`

export function savePracticeSession(topic: TopicSlug, session: PracticeSession) {
  localStorage.setItem(practiceSessionKey(topic), JSON.stringify(session))
}

export function loadPracticeSession(topic: TopicSlug): PracticeSession | null {
  try {
    const raw = localStorage.getItem(practiceSessionKey(topic))
    return raw ? (JSON.parse(raw) as PracticeSession) : null
  } catch {
    return null
  }
}

export function clearPracticeSession(topic: TopicSlug) {
  localStorage.removeItem(practiceSessionKey(topic))
}

export function savePracticeResult(topic: TopicSlug, score: number, total: number) {
  const history = loadPracticeHistory(topic)
  const entry: PracticeHistoryEntry = {
    topic,
    score,
    total,
    completedAt: Date.now(),
  }
  history.unshift(entry)
  localStorage.setItem(practiceHistoryKey(topic), JSON.stringify(history.slice(0, 20)))
}

export function loadPracticeHistory(topic: TopicSlug): PracticeHistoryEntry[] {
  try {
    const raw = localStorage.getItem(practiceHistoryKey(topic))
    return raw ? (JSON.parse(raw) as PracticeHistoryEntry[]) : []
  } catch {
    return []
  }
}

// ── Test ──────────────────────────────────────────────────────────────────────

const TEST_SESSION_KEY = 'juzilla-test-session'
const TEST_HISTORY_KEY = 'juzilla-test-history'

export function saveTestSession(session: TestSession) {
  localStorage.setItem(TEST_SESSION_KEY, JSON.stringify(session))
}

export function loadTestSession(): TestSession | null {
  try {
    const raw = localStorage.getItem(TEST_SESSION_KEY)
    return raw ? (JSON.parse(raw) as TestSession) : null
  } catch {
    return null
  }
}

export function clearTestSession() {
  localStorage.removeItem(TEST_SESSION_KEY)
}

export function saveTestResult(score: number, total: number, timeTaken: number) {
  const history = loadTestHistory()
  const entry: TestHistoryEntry = {
    score,
    total,
    completedAt: Date.now(),
    timeTaken,
  }
  history.unshift(entry)
  localStorage.setItem(TEST_HISTORY_KEY, JSON.stringify(history.slice(0, 20)))
}

export function loadTestHistory(): TestHistoryEntry[] {
  try {
    const raw = localStorage.getItem(TEST_HISTORY_KEY)
    return raw ? (JSON.parse(raw) as TestHistoryEntry[]) : []
  } catch {
    return []
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Fisher-Yates shuffle — returns a new shuffled array */
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
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatSeconds(secs: number): string {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${String(s).padStart(2, '0')}`
}
