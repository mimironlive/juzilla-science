import { MathQuestion } from '@/lib/types'

// 90 questions — P3 MOE Singapore
// Multiplication: 2-digit × 1-digit, 3-digit × 1-digit
// Division: 2-digit ÷ 1-digit (no remainders and with remainders, plain + MCQ)
// Word problems: multiplication, division, division with remainders
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

  // ── GROUP A: More 2-digit × 1-digit multiplication (whole answers) ──────────
  { id: 'md-31', question: '26 × 6 = ?',   answer: 156, hint: 'Break it up: (20 × 6) + (6 × 6)' },
  { id: 'md-32', question: '27 × 7 = ?',   answer: 189, hint: 'Break it up: (20 × 7) + (7 × 7)' },
  { id: 'md-33', question: '28 × 8 = ?',   answer: 224, hint: 'Break it up: (20 × 8) + (8 × 8)' },
  { id: 'md-34', question: '29 × 9 = ?',   answer: 261, hint: 'Break it up: (20 × 9) + (9 × 9)' },
  { id: 'md-35', question: '32 × 6 = ?',   answer: 192, hint: 'Break it up: (30 × 6) + (2 × 6)' },
  { id: 'md-36', question: '33 × 7 = ?',   answer: 231, hint: 'Break it up: (30 × 7) + (3 × 7)' },
  { id: 'md-37', question: '34 × 8 = ?',   answer: 272, hint: 'Break it up: (30 × 8) + (4 × 8)' },
  { id: 'md-38', question: '35 × 9 = ?',   answer: 315, hint: 'Break it up: (30 × 9) + (5 × 9)' },
  { id: 'md-39', question: '36 × 6 = ?',   answer: 216, hint: 'Break it up: (30 × 6) + (6 × 6)' },
  { id: 'md-40', question: '37 × 7 = ?',   answer: 259, hint: 'Break it up: (30 × 7) + (7 × 7)' },
  { id: 'md-41', question: '38 × 8 = ?',   answer: 304, hint: 'Break it up: (30 × 8) + (8 × 8)' },
  { id: 'md-42', question: '39 × 9 = ?',   answer: 351, hint: 'Break it up: (30 × 9) + (9 × 9)' },
  { id: 'md-43', question: '41 × 6 = ?',   answer: 246, hint: 'Break it up: (40 × 6) + (1 × 6)' },
  { id: 'md-44', question: '42 × 7 = ?',   answer: 294, hint: 'Break it up: (40 × 7) + (2 × 7)' },
  { id: 'md-45', question: '43 × 8 = ?',   answer: 344, hint: 'Break it up: (40 × 8) + (3 × 8)' },

  // ── GROUP B: Division with remainders — non-MCQ ────────────────────────────
  { id: 'md-46', question: '79 ÷ 7 = ? R ?', answer: 11, remainder: 2, hint: 'Think: 7 × 11 = 77, so remainder is 79 − 77 = 2.' },
  { id: 'md-47', question: '83 ÷ 6 = ? R ?', answer: 13, remainder: 5, hint: 'Think: 6 × 13 = 78, so remainder is 83 − 78 = 5.' },
  { id: 'md-48', question: '47 ÷ 9 = ? R ?', answer: 5,  remainder: 2, hint: 'Think: 9 × 5 = 45, so remainder is 47 − 45 = 2.' },
  { id: 'md-49', question: '65 ÷ 8 = ? R ?', answer: 8,  remainder: 1, hint: 'Think: 8 × 8 = 64, so remainder is 65 − 64 = 1.' },
  { id: 'md-50', question: '53 ÷ 7 = ? R ?', answer: 7,  remainder: 4, hint: 'Think: 7 × 7 = 49, so remainder is 53 − 49 = 4.' },
  { id: 'md-51', question: '74 ÷ 9 = ? R ?', answer: 8,  remainder: 2, hint: 'Think: 9 × 8 = 72, so remainder is 74 − 72 = 2.' },
  { id: 'md-52', question: '61 ÷ 6 = ? R ?', answer: 10, remainder: 1, hint: 'Think: 6 × 10 = 60, so remainder is 61 − 60 = 1.' },
  { id: 'md-53', question: '85 ÷ 8 = ? R ?', answer: 10, remainder: 5, hint: 'Think: 8 × 10 = 80, so remainder is 85 − 80 = 5.' },
  { id: 'md-54', question: '71 ÷ 7 = ? R ?', answer: 10, remainder: 1, hint: 'Think: 7 × 10 = 70, so remainder is 71 − 70 = 1.' },
  { id: 'md-55', question: '59 ÷ 9 = ? R ?', answer: 6,  remainder: 5, hint: 'Think: 9 × 6 = 54, so remainder is 59 − 54 = 5.' },
  { id: 'md-56', question: '94 ÷ 6 = ? R ?', answer: 15, remainder: 4, hint: 'Think: 6 × 15 = 90, so remainder is 94 − 90 = 4.' },
  { id: 'md-57', question: '67 ÷ 8 = ? R ?', answer: 8,  remainder: 3, hint: 'Think: 8 × 8 = 64, so remainder is 67 − 64 = 3.' },
  { id: 'md-58', question: '43 ÷ 9 = ? R ?', answer: 4,  remainder: 7, hint: 'Think: 9 × 4 = 36, so remainder is 43 − 36 = 7.' },
  { id: 'md-59', question: '77 ÷ 6 = ? R ?', answer: 12, remainder: 5, hint: 'Think: 6 × 12 = 72, so remainder is 77 − 72 = 5.' },
  { id: 'md-60', question: '88 ÷ 9 = ? R ?', answer: 9,  remainder: 7, hint: 'Think: 9 × 9 = 81, so remainder is 88 − 81 = 7.' },

  // ── GROUP C: Division with remainders — MCQ ────────────────────────────────
  // answer is the index (0-based) of the correct option
  { id: 'md-61', question: 'What is 53 ÷ 4?',  isMCQ: true, options: ['13 R1', '13 R2', '12 R5', '14 R0'], answer: 0, hint: 'Think: 4 × 13 = 52, so remainder is 1.' },
  { id: 'md-62', question: 'What is 47 ÷ 3?',  isMCQ: true, options: ['15 R1', '16 R0', '15 R2', '14 R5'], answer: 2, hint: 'Think: 3 × 15 = 45, so remainder is 2.' },
  { id: 'md-63', question: 'What is 65 ÷ 4?',  isMCQ: true, options: ['16 R0', '15 R5', '16 R1', '17 R0'], answer: 2, hint: 'Think: 4 × 16 = 64, so remainder is 1.' },
  { id: 'md-64', question: 'What is 83 ÷ 5?',  isMCQ: true, options: ['17 R3', '16 R3', '16 R2', '17 R1'], answer: 1, hint: 'Think: 5 × 16 = 80, so remainder is 3.' },
  { id: 'md-65', question: 'What is 74 ÷ 3?',  isMCQ: true, options: ['24 R1', '25 R0', '23 R5', '24 R2'], answer: 3, hint: 'Think: 3 × 24 = 72, so remainder is 2.' },
  { id: 'md-66', question: 'What is 91 ÷ 6?',  isMCQ: true, options: ['15 R0', '15 R1', '14 R7', '16 R1'], answer: 1, hint: 'Think: 6 × 15 = 90, so remainder is 1.' },
  { id: 'md-67', question: 'What is 58 ÷ 4?',  isMCQ: true, options: ['14 R3', '15 R2', '14 R2', '13 R6'], answer: 2, hint: 'Think: 4 × 14 = 56, so remainder is 2.' },
  { id: 'md-68', question: 'What is 67 ÷ 5?',  isMCQ: true, options: ['13 R2', '13 R3', '14 R3', '12 R7'], answer: 0, hint: 'Think: 5 × 13 = 65, so remainder is 2.' },
  { id: 'md-69', question: 'What is 79 ÷ 4?',  isMCQ: true, options: ['20 R3', '19 R2', '19 R3', '18 R7'], answer: 2, hint: 'Think: 4 × 19 = 76, so remainder is 3.' },
  { id: 'md-70', question: 'What is 86 ÷ 3?',  isMCQ: true, options: ['29 R1', '28 R1', '28 R2', '27 R5'], answer: 3, hint: 'Think: 3 × 28 = 84, so remainder is 2.' },

  // ── GROUP D: Word problems with remainders ─────────────────────────────────
  { id: 'md-71', question: '46 children need to be split into groups of 9.\nHow many complete groups can be formed?', answer: 5, hint: 'Divide 46 by 9. The quotient tells you how many complete groups.' },
  { id: 'md-72', question: '46 children are split into groups of 9.\nAfter forming the groups, how many children are left over?', answer: 1, hint: 'Think: 9 × 5 = 45. Subtract from 46 to find the remainder.' },
  { id: 'md-73', question: 'A baker has 65 cookies.\nHe packs them in boxes of 8.\nHow many boxes can he fill completely?', answer: 8, hint: 'Divide 65 by 8. The quotient (ignoring the remainder) is the number of full boxes.' },
  { id: 'md-74', question: 'A baker has 65 cookies.\nHe packs them in boxes of 8.\nHow many cookies are left over?', answer: 1, hint: 'Think: 8 × 8 = 64. Subtract from 65 to find the leftover.' },
  { id: 'md-75', question: 'A teacher has 50 stickers to share equally among 6 pupils.\nHow many stickers does each pupil get?', answer: 8, hint: 'Divide 50 by 6. The quotient is the number each pupil receives.' },
  { id: 'md-76', question: 'A teacher has 50 stickers to share equally among 6 pupils.\nHow many stickers are left over?', answer: 2, hint: 'Think: 6 × 8 = 48. Subtract from 50 to find the remainder.' },
  { id: 'md-77', question: 'A florist has 73 flowers.\nShe makes bouquets of 8 flowers each.\nHow many complete bouquets can she make?', answer: 9, hint: 'Divide 73 by 8. The quotient is the number of complete bouquets.' },
  { id: 'md-78', question: 'A florist has 73 flowers.\nShe makes bouquets of 8 flowers each.\nHow many flowers are left over after making the bouquets?', answer: 1, hint: 'Think: 8 × 9 = 72. Subtract from 73 to find the remainder.' },
  { id: 'md-79', question: 'A box holds 7 cans.\nA shopkeeper has 60 cans.\nHow many boxes can he fill completely?', answer: 8, hint: 'Divide 60 by 7. The quotient is the number of full boxes.' },
  { id: 'md-80', question: 'A box holds 7 cans.\nA shopkeeper has 60 cans and fills as many boxes as he can.\nHow many cans are left over?', answer: 4, hint: 'Think: 7 × 8 = 56. Subtract from 60 to find the leftover.' },

  // ── GROUP E: 3-digit × 1-digit multiplication ──────────────────────────────
  { id: 'md-81', question: '124 × 6 = ?',  answer: 744,  hint: 'Break it up: (100 × 6) + (20 × 6) + (4 × 6)' },
  { id: 'md-82', question: '213 × 7 = ?',  answer: 1491, hint: 'Break it up: (200 × 7) + (10 × 7) + (3 × 7)' },
  { id: 'md-83', question: '312 × 8 = ?',  answer: 2496, hint: 'Break it up: (300 × 8) + (10 × 8) + (2 × 8)' },
  { id: 'md-84', question: '421 × 9 = ?',  answer: 3789, hint: 'Break it up: (400 × 9) + (20 × 9) + (1 × 9)' },
  { id: 'md-85', question: '132 × 6 = ?',  answer: 792,  hint: 'Break it up: (100 × 6) + (30 × 6) + (2 × 6)' },
  { id: 'md-86', question: '211 × 7 = ?',  answer: 1477, hint: 'Break it up: (200 × 7) + (10 × 7) + (1 × 7)' },
  { id: 'md-87', question: '123 × 8 = ?',  answer: 984,  hint: 'Break it up: (100 × 8) + (20 × 8) + (3 × 8)' },
  { id: 'md-88', question: '314 × 9 = ?',  answer: 2826, hint: 'Break it up: (300 × 9) + (10 × 9) + (4 × 9)' },
  { id: 'md-89', question: '221 × 6 = ?',  answer: 1326, hint: 'Break it up: (200 × 6) + (20 × 6) + (1 × 6)' },
  { id: 'md-90', question: '412 × 7 = ?',  answer: 2884, hint: 'Break it up: (400 × 7) + (10 × 7) + (2 × 7)' },
]

export default questions
