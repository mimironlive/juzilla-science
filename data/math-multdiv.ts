import { MathQuestion } from '@/lib/types'

// 30 questions — P3 MOE Singapore
// Multiplication: 2-digit × 1-digit
// Division: 2-digit ÷ 1-digit (no remainders)
const questions: MathQuestion[] = [
  // ── Multiplication ─────────────────────────────────────────────────────────
  { id: 'md-1',  question: '13 × 6 = ?',   answer: 78,  hint: 'Break it up: (10 × 6) + (3 × 6)' },
  { id: 'md-2',  question: '14 × 7 = ?',   answer: 98,  hint: 'Break it up: (10 × 7) + (4 × 7)' },
  { id: 'md-3',  question: '12 × 8 = ?',   answer: 96,  hint: 'Break it up: (10 × 8) + (2 × 8)' },
  { id: 'md-4',  question: '11 × 9 = ?',   answer: 99,  hint: 'Break it up: (10 × 9) + (1 × 9)' },
  { id: 'md-5',  question: '23 × 6 = ?',   answer: 138, hint: 'Break it up: (20 × 6) + (3 × 6)' },
  { id: 'md-6',  question: '15 × 7 = ?',   answer: 105, hint: 'Break it up: (10 × 7) + (5 × 7)' },
  { id: 'md-7',  question: '16 × 8 = ?',   answer: 128, hint: 'Break it up: (10 × 8) + (6 × 8)' },
  { id: 'md-8',  question: '17 × 9 = ?',   answer: 153, hint: 'Break it up: (10 × 9) + (7 × 9)' },
  { id: 'md-9',  question: '24 × 6 = ?',   answer: 144, hint: 'Break it up: (20 × 6) + (4 × 6)' },
  { id: 'md-10', question: '21 × 7 = ?',   answer: 147, hint: 'Break it up: (20 × 7) + (1 × 7)' },
  { id: 'md-11', question: '31 × 8 = ?',   answer: 248, hint: 'Break it up: (30 × 8) + (1 × 8)' },
  { id: 'md-12', question: '22 × 9 = ?',   answer: 198, hint: 'Break it up: (20 × 9) + (2 × 9)' },
  { id: 'md-13', question: '25 × 6 = ?',   answer: 150, hint: 'Break it up: (20 × 6) + (5 × 6)' },
  { id: 'md-14', question: '18 × 7 = ?',   answer: 126, hint: 'Break it up: (10 × 7) + (8 × 7)' },
  { id: 'md-15', question: '19 × 8 = ?',   answer: 152, hint: 'Break it up: (10 × 8) + (9 × 8), or (20 × 8) − (1 × 8)' },
  // ── Division ───────────────────────────────────────────────────────────────
  { id: 'md-16', question: '48 ÷ 6 = ?',   answer: 8,   hint: 'Think: 6 × ? = 48' },
  { id: 'md-17', question: '56 ÷ 7 = ?',   answer: 8,   hint: 'Think: 7 × ? = 56' },
  { id: 'md-18', question: '72 ÷ 8 = ?',   answer: 9,   hint: 'Think: 8 × ? = 72' },
  { id: 'md-19', question: '63 ÷ 9 = ?',   answer: 7,   hint: 'Think: 9 × ? = 63' },
  { id: 'md-20', question: '78 ÷ 6 = ?',   answer: 13,  hint: 'Think: 6 × 10 = 60, then how many more?' },
  { id: 'md-21', question: '84 ÷ 7 = ?',   answer: 12,  hint: 'Think: 7 × 10 = 70, then how many more?' },
  { id: 'md-22', question: '96 ÷ 8 = ?',   answer: 12,  hint: 'Think: 8 × 10 = 80, then how many more?' },
  { id: 'md-23', question: '90 ÷ 9 = ?',   answer: 10,  hint: 'Think: 9 × 10 = 90' },
  { id: 'md-24', question: '66 ÷ 6 = ?',   answer: 11,  hint: 'Think: 6 × 10 = 60, then 6 × 1 = 6' },
  { id: 'md-25', question: '77 ÷ 7 = ?',   answer: 11,  hint: 'Think: 7 × 11 = ?' },
  // ── Word problems ──────────────────────────────────────────────────────────
  { id: 'md-26', question: 'A baker bakes 9 trays of muffins.\nEach tray has 16 muffins.\nHow many muffins does he bake altogether?', answer: 144, hint: 'Multiply the number of trays by the number of muffins on each tray.' },
  { id: 'md-27', question: '72 pupils are split equally into 8 groups.\nHow many pupils are in each group?', answer: 9, hint: 'Divide the total number of pupils by the number of groups.' },
  { id: 'md-28', question: 'A shopkeeper packs 96 oranges equally into bags of 8.\nHow many bags does he use?', answer: 12, hint: 'Divide the total by the number of oranges in each bag.' },
  { id: 'md-29', question: 'Mrs Tan buys 7 packets of stickers.\nEach packet has 18 stickers.\nHow many stickers does she buy in total?', answer: 126, hint: 'Multiply the number of packets by the number of stickers in each packet.' },
  { id: 'md-30', question: 'A library has 84 books.\nThe books are arranged equally on 7 shelves.\nHow many books are on each shelf?', answer: 12, hint: 'Divide the total number of books by the number of shelves.' },
]

export default questions
