import { MathQuestion } from '@/lib/types'

// 90 questions — mixed tables of 6, 7, 8 and 9
// Variety: direct recall, missing factor, word form, reverse, division, comparison, word problems
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

  // --- Division (reversing a times table fact) ---
  { id: 'mt-31', question: '48 ÷ 6 = ?',  answer: 8,  hint: 'Think: 6 × ? = 48.' },
  { id: 'mt-32', question: '63 ÷ 7 = ?',  answer: 9,  hint: 'Think: 7 × ? = 63.' },
  { id: 'mt-33', question: '72 ÷ 8 = ?',  answer: 9,  hint: 'Think: 8 × ? = 72.' },
  { id: 'mt-34', question: '81 ÷ 9 = ?',  answer: 9,  hint: 'Think: 9 × ? = 81.' },
  { id: 'mt-35', question: '42 ÷ 6 = ?',  answer: 7,  hint: 'Think: 6 × ? = 42.' },
  { id: 'mt-36', question: '56 ÷ 7 = ?',  answer: 8,  hint: 'Think: 7 × ? = 56.' },
  { id: 'mt-37', question: '64 ÷ 8 = ?',  answer: 8,  hint: 'Think: 8 × ? = 64.' },
  { id: 'mt-38', question: '54 ÷ 9 = ?',  answer: 6,  hint: 'Think: 9 × ? = 54.' },
  { id: 'mt-39', question: '36 ÷ 6 = ?',  answer: 6,  hint: 'Think: 6 × ? = 36.' },
  { id: 'mt-40', question: '28 ÷ 7 = ?',  answer: 4,  hint: 'Think: 7 × ? = 28.' },
  { id: 'mt-41', question: '40 ÷ 8 = ?',  answer: 5,  hint: 'Think: 8 × ? = 40.' },
  { id: 'mt-42', question: '45 ÷ 9 = ?',  answer: 5,  hint: 'Think: 9 × ? = 45.' },
  { id: 'mt-43', question: '60 ÷ 6 = ?',  answer: 10, hint: 'Think: 6 × 10 = ?' },
  { id: 'mt-44', question: '70 ÷ 7 = ?',  answer: 10, hint: 'Think: 7 × 10 = ?' },
  { id: 'mt-45', question: '80 ÷ 8 = ?',  answer: 10, hint: 'Think: 8 × 10 = ?' },
  { id: 'mt-46', question: '90 ÷ 9 = ?',  answer: 10, hint: 'Think: 9 × 10 = ?' },

  // --- "How many groups of" ---
  { id: 'mt-47', question: 'How many groups of 6 are in 54?',  answer: 9,  hint: 'Think: 6 × ? = 54.' },
  { id: 'mt-48', question: 'How many groups of 7 are in 42?',  answer: 6,  hint: 'Think: 7 × ? = 42.' },
  { id: 'mt-49', question: 'How many groups of 8 are in 48?',  answer: 6,  hint: 'Think: 8 × ? = 48.' },
  { id: 'mt-50', question: 'How many groups of 9 are in 63?',  answer: 7,  hint: 'Think: 9 × ? = 63.' },
  { id: 'mt-51', question: 'How many groups of 6 are in 30?',  answer: 5,  hint: 'Think: 6 × ? = 30.' },
  { id: 'mt-52', question: 'How many groups of 7 are in 35?',  answer: 5,  hint: 'Think: 7 × ? = 35.' },
  { id: 'mt-53', question: 'How many groups of 8 are in 32?',  answer: 4,  hint: 'Think: 8 × ? = 32.' },
  { id: 'mt-54', question: 'How many groups of 9 are in 36?',  answer: 4,  hint: 'Think: 9 × ? = 36.' },

  // --- "What is the product of" ---
  { id: 'mt-55', question: 'What is the product of 6 and 4?',  answer: 24, hint: 'Product means multiply: 6 × 4.' },
  { id: 'mt-56', question: 'What is the product of 7 and 5?',  answer: 35, hint: 'Product means multiply: 7 × 5.' },
  { id: 'mt-57', question: 'What is the product of 8 and 3?',  answer: 24, hint: 'Product means multiply: 8 × 3.' },
  { id: 'mt-58', question: 'What is the product of 9 and 4?',  answer: 36, hint: 'Product means multiply: 9 × 4.' },
  { id: 'mt-59', question: 'What is the product of 7 and 10?', answer: 70, hint: 'Product means multiply: 7 × 10.' },
  { id: 'mt-60', question: 'What is the product of 8 and 8?',  answer: 64, hint: 'Product means multiply: 8 × 8.' },

  // --- Missing number (new facts not in mt-1 to mt-30) ---
  { id: 'mt-61', question: '6 × ? = 24\nWhat is the missing number?',  answer: 4,  hint: 'Think: how many 6s make 24?' },
  { id: 'mt-62', question: '7 × ? = 21\nWhat is the missing number?',  answer: 3,  hint: 'Think: how many 7s make 21?' },
  { id: 'mt-63', question: '8 × ? = 72\nWhat is the missing number?',  answer: 9,  hint: 'Think: 8 × 9 = ?' },
  { id: 'mt-64', question: '9 × ? = 27\nWhat is the missing number?',  answer: 3,  hint: 'Think: how many 9s make 27?' },
  { id: 'mt-65', question: '? × 6 = 48\nWhat is the missing number?',  answer: 8,  hint: 'Think: 8 × 6 = ?' },
  { id: 'mt-66', question: '? × 7 = 56\nWhat is the missing number?',  answer: 8,  hint: 'Think: 8 × 7 = ?' },
  { id: 'mt-67', question: '? × 8 = 80\nWhat is the missing number?',  answer: 10, hint: 'Think: 10 × 8 = ?' },
  { id: 'mt-68', question: '? × 9 = 45\nWhat is the missing number?',  answer: 5,  hint: 'Think: 5 × 9 = ?' },

  // --- Comparison ---
  { id: 'mt-69', question: 'Which is greater: 8 × 7 or 9 × 6?\nWrite the larger value.',  answer: 56, hint: '8 × 7 = 56 and 9 × 6 = 54. Which is bigger?' },
  { id: 'mt-70', question: 'Which is greater: 7 × 9 or 8 × 8?\nWrite the larger value.',  answer: 64, hint: '7 × 9 = 63 and 8 × 8 = 64. Which is bigger?' },
  { id: 'mt-71', question: 'Which is smaller: 6 × 9 or 7 × 8?\nWrite the smaller value.', answer: 54, hint: '6 × 9 = 54 and 7 × 8 = 56. Which is smaller?' },

  // --- Additional multiplication facts ---
  { id: 'mt-72', question: '6 × 1 = ?',  answer: 6,  hint: 'Any number times 1 stays the same.' },
  { id: 'mt-73', question: '7 × 1 = ?',  answer: 7,  hint: 'Any number times 1 stays the same.' },
  { id: 'mt-74', question: '8 × 1 = ?',  answer: 8,  hint: 'Any number times 1 stays the same.' },
  { id: 'mt-75', question: '9 × 1 = ?',  answer: 9,  hint: 'Any number times 1 stays the same.' },
  { id: 'mt-76', question: '6 × 4 = ?',  answer: 24, hint: '6 × 2 = 12, then double it.' },
  { id: 'mt-77', question: '7 × 3 = ?',  answer: 21, hint: 'Count up in 7s three times.' },
  { id: 'mt-78', question: '8 × 4 = ?',  answer: 32, hint: '8 × 2 = 16, then double it.' },
  { id: 'mt-79', question: '9 × 3 = ?',  answer: 27, hint: 'Count up in 9s three times.' },
  { id: 'mt-80', question: '8 × 10 = ?', answer: 80, hint: 'Multiply 8 by 10.' },
  { id: 'mt-81', question: '9 × 10 = ?', answer: 90, hint: 'Multiply 9 by 10.' },
  { id: 'mt-82', question: '9 × 9 = ?',  answer: 81, hint: '9 × 10 = 90, then subtract 9.' },

  // --- Word problems ---
  { id: 'mt-83', question: 'There are 6 rows of chairs.\nEach row has 8 chairs.\nHow many chairs are there in all?', answer: 48, hint: 'Multiply the number of rows by the chairs in each row.' },
  { id: 'mt-84', question: 'A pack has 9 stickers.\nLi Ming buys 7 packs.\nHow many stickers does he have in all?', answer: 63, hint: 'Multiply the number of packs by the stickers in each pack.' },
  { id: 'mt-85', question: 'A baker puts 6 cookies on each tray.\nShe has 9 trays.\nHow many cookies are there altogether?', answer: 54, hint: 'Multiply the number of trays by the cookies on each tray.' },
  { id: 'mt-86', question: 'There are 8 tables in a classroom.\nEach table has 7 pencils.\nHow many pencils are there in total?', answer: 56, hint: 'Multiply the number of tables by the pencils on each table.' },
  { id: 'mt-87', question: 'Siti has 63 beads.\nShe puts them equally into 9 bags.\nHow many beads are in each bag?', answer: 7, hint: 'Divide the total number of beads by the number of bags.' },
  { id: 'mt-88', question: 'A teacher has 48 stickers.\nShe gives 6 stickers to each pupil.\nHow many pupils receive stickers?', answer: 8, hint: 'Divide the total stickers by how many each pupil gets.' },
  { id: 'mt-89', question: 'There are 7 shelves in a library.\nEach shelf holds 8 books.\nHow many books are there in all?', answer: 56, hint: 'Multiply the number of shelves by the books on each shelf.' },
  { id: 'mt-90', question: 'A florist puts 9 flowers in each vase.\nThere are 6 vases.\nHow many flowers are there altogether?', answer: 54, hint: 'Multiply the number of vases by the flowers in each vase.' },
]

export default questions
