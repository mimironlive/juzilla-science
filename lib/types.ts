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
  questionOrder: number[] // shuffled indices into the question array
  currentIndex: number    // index into questionOrder
  answers: Record<number, number> // questionOrder[i] -> chosen option index
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
  currentIndex: number
  answers: Record<number, number>
  startedAt: number
  timeLeft: number // seconds
}

export interface TestHistoryEntry {
  score: number
  total: number
  completedAt: number
  timeTaken: number // seconds
}

export type TopicSlug =
  | 'diversity-living'
  | 'classification'
  | 'diversity-materials'

export interface TopicMeta {
  slug: TopicSlug
  label: string
  icon: string
  colour: string // Tailwind bg class
  colourLight: string // Tailwind bg-light class
  colourText: string // Tailwind text class
  colourBorder: string
}

export const TOPICS: TopicMeta[] = [
  {
    slug: 'diversity-living',
    label: 'Diversity of Living and Non-Living Things',
    icon: '🌿',
    colour: 'bg-violet-600',
    colourLight: 'bg-violet-50',
    colourText: 'text-violet-700',
    colourBorder: 'border-violet-300',
  },
  {
    slug: 'classification',
    label: 'Classification of Living Things',
    icon: '🦎',
    colour: 'bg-emerald-600',
    colourLight: 'bg-emerald-50',
    colourText: 'text-emerald-700',
    colourBorder: 'border-emerald-300',
  },
  {
    slug: 'diversity-materials',
    label: 'Diversity of Materials',
    icon: '🧱',
    colour: 'bg-amber-500',
    colourLight: 'bg-amber-50',
    colourText: 'text-amber-700',
    colourBorder: 'border-amber-300',
  },
]
