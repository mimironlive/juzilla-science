// ── Science ───────────────────────────────────────────────────────────────────

export interface Question {
  id: string
  topic?: string
  question: string
  options: string[]
  answer: number // 0-indexed
  explanation: string
}

export interface PracticeSession {
  topic: string
  questionOrder: number[]
  currentIndex: number
  answers: Record<number, number>
  startedAt: number
}

export interface PracticeHistoryEntry {
  topic: string
  score: number
  total: number
  completedAt: number
}

export interface TestSession {
  questionOrder: number[]
  selectedIds: string[]   // IDs of the 30 picked questions (10 per topic), used to restore on reload
  currentIndex: number
  answers: Record<number, number>
  startedAt: number
  timeLeft: number
}

export interface TestHistoryEntry {
  score: number
  total: number
  completedAt: number
  timeTaken: number
}

export type TopicSlug = 'diversity-living' | 'classification' | 'diversity-materials'

export interface TopicMeta {
  slug: TopicSlug
  label: string
  icon: string
  gradient: string
  cardBg: string
  textColor: string
  borderColor: string
  badgeColor: string
}

export const TOPICS: TopicMeta[] = [
  {
    slug: 'diversity-living',
    label: 'Diversity of Living and Non-Living Things',
    icon: '🌿',
    gradient: 'from-violet-500 to-purple-600',
    cardBg: 'bg-juz-purple-light',
    textColor: 'text-juz-purple',
    borderColor: 'border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    slug: 'classification',
    label: 'Classification of Living Things',
    icon: '🦎',
    gradient: 'from-teal-400 to-cyan-500',
    cardBg: 'bg-juz-teal-light',
    textColor: 'text-teal-700',
    borderColor: 'border-teal-200',
    badgeColor: 'bg-teal-100 text-teal-700',
  },
  {
    slug: 'diversity-materials',
    label: 'Diversity of Materials',
    icon: '🧱',
    gradient: 'from-orange-400 to-amber-500',
    cardBg: 'bg-juz-orange-light',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
]

// ── Math ──────────────────────────────────────────────────────────────────────

export interface MathQuestion {
  id: string
  question: string
  answer: number
  hint?: string
}

export interface MathSession {
  topic: MathTopicSlug
  questionOrder: number[]
  currentIndex: number
  answers: Record<number, number | null> // index → answered number or null (skipped)
  startedAt: number
}

export interface MathHistoryEntry {
  topic: MathTopicSlug
  score: number
  total: number
  completedAt: number
}

export type MathTopicSlug = 'tables-6789' | 'mult-div'

export interface MathTopicMeta {
  slug: MathTopicSlug
  label: string
  icon: string
  gradient: string
  cardBg: string
  textColor: string
  borderColor: string
  description: string
}

export const MATH_TOPICS: MathTopicMeta[] = [
  {
    slug: 'tables-6789',
    label: 'Multiplication Tables',
    icon: '✖️',
    gradient: 'from-pink-400 to-rose-500',
    cardBg: 'bg-juz-pink-light',
    textColor: 'text-pink-700',
    borderColor: 'border-pink-200',
    description: 'Tables of 6, 7, 8 and 9',
  },
  {
    slug: 'mult-div',
    label: 'Multiplication & Division',
    icon: '➗',
    gradient: 'from-yellow-400 to-orange-400',
    cardBg: 'bg-juz-yellow-light',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    description: '2-digit × 1-digit and ÷ problems',
  },
]

// ── Profile & Gamification ────────────────────────────────────────────────────

export interface Profile {
  name: string
  avatar: string // emoji
  xp: number
  level: number
  badges: string[]
  dailyStreak: number
  longestStreak: number
  lastActiveDate: string // YYYY-MM-DD
  totalCorrect: number
  totalAnswered: number
}

export interface BadgeDef {
  id: string
  label: string
  icon: string
  description: string
}

export const BADGES: BadgeDef[] = [
  { id: 'first-steps',       icon: '🌟', label: 'First Steps',       description: 'Answer your first question correctly' },
  { id: 'on-fire',           icon: '🔥', label: 'On Fire',           description: 'Get 5 correct answers in a row' },
  { id: 'lightning',         icon: '⚡', label: 'Lightning',         description: 'Get 10 correct answers in a row' },
  { id: 'perfect',           icon: '💯', label: 'Perfect',           description: 'Score 100% on any session' },
  { id: 'science-explorer',  icon: '🧬', label: 'Science Explorer',  description: 'Complete all 3 science topics at least once' },
  { id: 'tables-ace',        icon: '✖️', label: 'Tables Ace',        description: 'Complete a multiplication tables session' },
  { id: 'division-master',   icon: '➗', label: 'Division Master',   description: 'Complete Multiplication & Division' },
  { id: 'juzilla-champion',  icon: '🏆', label: 'Juzilla Champion',  description: 'Score 100% on the Science Mock Test' },
  { id: 'hot-streak',        icon: '📅', label: 'Hot Streak',        description: 'Keep a 7-day daily streak' },
  { id: 'juzilla-legend',    icon: '🦖', label: 'Juzilla Legend',    description: 'Reach Level 5' },
]

export const AVATARS = ['🦖', '🚀', '🦁', '🐯', '🦊', '🐉', '🦸', '🐼']

export const XP_PER_LEVEL = 200

export function xpToLevel(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1
}

export function xpForNextLevel(xp: number): number {
  const level = xpToLevel(xp)
  return level * XP_PER_LEVEL
}

export function xpProgressInLevel(xp: number): number {
  return xp % XP_PER_LEVEL
}
