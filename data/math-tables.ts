import { MathQuestion } from '@/lib/types'

// 30 questions — mixed tables of 6, 7, 8 and 9
// Variety: direct recall, missing factor, word form, reverse
const questions: MathQuestion[] = [
  { id: 'mt-1',  question: '6 × 3 = ?',                        answer: 18,  hint: 'Count up in 6s three times.' },
  { id: 'mt-2',  question: '7 × 4 = ?',                        answer: 28,  hint: 'Count up in 7s four times.' },
  { id: 'mt-3',  question: '8 × 5 = ?',                        answer: 40,  hint: 'Count up in 8s five times.' },
  { id: 'mt-4',  question: '9 × 2 = ?',                        answer: 18,  hint: 'Count up in 9s twice.' },
  { id: 'mt-5',  question: '6 × 7 = ?',                        answer: 42,  hint: '6 × 6 = 36, then add 6 more.' },
  { id: 'mt-6',  question: '7 × 8 = ?',                        answer: 56,  hint: '7 × 7 = 49, then add 7 more.' },
  { id: 'mt-7',  question: '8 × 9 = ?',                        answer: 72,  hint: '8 × 8 = 64, then add 8 more.' },
  { id: 'mt-8',  question: '9 × 6 = ?',                        answer: 54,  hint: '9 × 5 = 45, then add 9 more.' },
  { id: 'mt-9',  question: 'What is 6 multiplied by 8?',       answer: 48,  hint: 'Write the multiplication and work it out.' },
  { id: 'mt-10', question: 'What is 7 multiplied by 9?',       answer: 63,  hint: 'Write the multiplication and work it out.' },
  { id: 'mt-11', question: 'What is 8 multiplied by 6?',       answer: 48,  hint: '8 × 6 is the same as 6 × 8.' },
  { id: 'mt-12', question: 'What is 9 multiplied by 7?',       answer: 63,  hint: '9 × 7 is the same as 7 × 9.' },
  { id: 'mt-13', question: '6 × ? = 54\nWhat is the missing number?',  answer: 9,   hint: 'Think: how many 6s make 54?' },
  { id: 'mt-14', question: '7 × ? = 49\nWhat is the missing number?',  answer: 7,   hint: 'Think: 7 × 7 = ?' },
  { id: 'mt-15', question: '8 × ? = 64\nWhat is the missing number?',  answer: 8,   hint: 'Think: 8 × 8 = ?' },
  { id: 'mt-16', question: '9 × ? = 81\nWhat is the missing number?',  answer: 9,   hint: 'Think: 9 × 9 = ?' },
  { id: 'mt-17', question: '? × 6 = 36\nWhat is the missing number?',  answer: 6,   hint: 'Think: how many 6s make 36?' },
  { id: 'mt-18', question: '? × 7 = 42\nWhat is the missing number?',  answer: 6,   hint: 'Think: 6 × 7 = ?' },
  { id: 'mt-19', question: '? × 8 = 56\nWhat is the missing number?',  answer: 7,   hint: 'Think: 7 × 8 = ?' },
  { id: 'mt-20', question: '? × 9 = 72\nWhat is the missing number?',  answer: 8,   hint: 'Think: 8 × 9 = ?' },
  { id: 'mt-21', question: 'What is 6 times 10?',              answer: 60,  hint: 'Multiply 6 by 10.' },
  { id: 'mt-22', question: 'What is 7 times 7?',               answer: 49,  hint: '7 squared.' },
  { id: 'mt-23', question: '9 × 5 = ?',                        answer: 45,  hint: 'Count up in 9s five times.' },
  { id: 'mt-24', question: '6 × 9 = ?',                        answer: 54,  hint: '6 × 9 is the same as 9 × 6.' },
  { id: 'mt-25', question: '7 × 6 = ?',                        answer: 42,  hint: '7 × 6 is the same as 6 × 7.' },
  { id: 'mt-26', question: '8 × 7 = ?',                        answer: 56,  hint: '8 × 7 is the same as 7 × 8.' },
  { id: 'mt-27', question: '9 × 8 = ?',                        answer: 72,  hint: '9 × 8 is the same as 8 × 9.' },
  { id: 'mt-28', question: '6 × 6 = ?',                        answer: 36,  hint: '6 squared.' },
  { id: 'mt-29', question: 'There are 7 bags.\nEach bag has 9 apples.\nHow many apples are there in total?', answer: 63, hint: 'Multiply the number of bags by the number in each bag.' },
  { id: 'mt-30', question: 'A box holds 8 crayons.\nThere are 6 boxes.\nHow many crayons are there altogether?', answer: 48, hint: 'Multiply the number of boxes by the number of crayons in each box.' },
]

export default questions
