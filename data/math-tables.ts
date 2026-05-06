import { MathQuestion } from '@/lib/types'

// 90 questions — mixed tables of 6, 7, 8 and 9
// Variety: direct recall, missing factor, word form, reverse, division, comparison, word problems
const questions: MathQuestion[] = [
  { id: 'mt-1',  question: '6 × 3 = ?',                        answer: 18,  hint: 'Which times table does this belong to?' },
  { id: 'mt-2',  question: '7 × 4 = ?',                        answer: 28,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-3',  question: '8 × 5 = ?',                        answer: 40,  hint: 'Use what you know about this times table.' },
  { id: 'mt-4',  question: '9 × 2 = ?',                        answer: 18,  hint: 'Think about related facts.' },
  { id: 'mt-5',  question: '6 × 7 = ?',                        answer: 42,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-6',  question: '7 × 8 = ?',                        answer: 56,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-7',  question: '8 × 9 = ?',                        answer: 72,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-8',  question: '9 × 6 = ?',                        answer: 54,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-9',  question: 'What is 6 multiplied by 8?',       answer: 48,  hint: 'Use what you know about this times table.' },
  { id: 'mt-10', question: 'What is 7 multiplied by 9?',       answer: 63,  hint: 'Use what you know about this times table.' },
  { id: 'mt-11', question: 'What is 8 multiplied by 6?',       answer: 48,  hint: 'Does the order of the numbers matter?' },
  { id: 'mt-12', question: 'What is 9 multiplied by 7?',       answer: 63,  hint: 'Does the order of the numbers matter?' },
  { id: 'mt-13', question: '6 × ? = 54\nWhat is the missing number?',  answer: 9,   hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-14', question: '7 × ? = 49\nWhat is the missing number?',  answer: 7,   hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-15', question: '8 × ? = 64\nWhat is the missing number?',  answer: 8,   hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-16', question: '9 × ? = 81\nWhat is the missing number?',  answer: 9,   hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-17', question: '? × 6 = 36\nWhat is the missing number?',  answer: 6,   hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-18', question: '? × 7 = 42\nWhat is the missing number?',  answer: 6,   hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-19', question: '? × 8 = 56\nWhat is the missing number?',  answer: 7,   hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-20', question: '? × 9 = 72\nWhat is the missing number?',  answer: 8,   hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-21', question: 'What is 6 times 10?',              answer: 60,  hint: 'Think about what multiplying by 10 does to a number.' },
  { id: 'mt-22', question: 'What is 7 times 7?',               answer: 49,  hint: 'Use what you know about this times table.' },
  { id: 'mt-23', question: '9 × 5 = ?',                        answer: 45,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-24', question: '6 × 9 = ?',                        answer: 54,  hint: 'Does the order of the numbers matter?' },
  { id: 'mt-25', question: '7 × 6 = ?',                        answer: 42,  hint: 'Does the order of the numbers matter?' },
  { id: 'mt-26', question: '8 × 7 = ?',                        answer: 56,  hint: 'Does the order of the numbers matter?' },
  { id: 'mt-27', question: '9 × 8 = ?',                        answer: 72,  hint: 'Does the order of the numbers matter?' },
  { id: 'mt-28', question: '6 × 6 = ?',                        answer: 36,  hint: 'Use what you know about this times table.' },
  { id: 'mt-29', question: 'There are 7 bags.\nEach bag has 9 apples.\nHow many apples are there in total?', answer: 63, hint: 'Which operation do you need?' },
  { id: 'mt-30', question: 'A box holds 8 crayons.\nThere are 6 boxes.\nHow many crayons are there altogether?', answer: 48, hint: 'Which operation do you need?' },

  // --- Division (reversing a times table fact) ---
  { id: 'mt-31', question: '48 ÷ 6 = ?',  answer: 8,  hint: 'Which times table fact can help?' },
  { id: 'mt-32', question: '63 ÷ 7 = ?',  answer: 9,  hint: 'Which times table fact can help?' },
  { id: 'mt-33', question: '72 ÷ 8 = ?',  answer: 9,  hint: 'Which times table fact can help?' },
  { id: 'mt-34', question: '81 ÷ 9 = ?',  answer: 9,  hint: 'Which times table fact can help?' },
  { id: 'mt-35', question: '42 ÷ 6 = ?',  answer: 7,  hint: 'Which times table fact can help?' },
  { id: 'mt-36', question: '56 ÷ 7 = ?',  answer: 8,  hint: 'Which times table fact can help?' },
  { id: 'mt-37', question: '64 ÷ 8 = ?',  answer: 8,  hint: 'Which times table fact can help?' },
  { id: 'mt-38', question: '54 ÷ 9 = ?',  answer: 6,  hint: 'Which times table fact can help?' },
  { id: 'mt-39', question: '36 ÷ 6 = ?',  answer: 6,  hint: 'Which times table fact can help?' },
  { id: 'mt-40', question: '28 ÷ 7 = ?',  answer: 4,  hint: 'Which times table fact can help?' },
  { id: 'mt-41', question: '40 ÷ 8 = ?',  answer: 5,  hint: 'Which times table fact can help?' },
  { id: 'mt-42', question: '45 ÷ 9 = ?',  answer: 5,  hint: 'Which times table fact can help?' },
  { id: 'mt-43', question: '60 ÷ 6 = ?',  answer: 10, hint: 'Which times table fact can help?' },
  { id: 'mt-44', question: '70 ÷ 7 = ?',  answer: 10, hint: 'Which times table fact can help?' },
  { id: 'mt-45', question: '80 ÷ 8 = ?',  answer: 10, hint: 'Which times table fact can help?' },
  { id: 'mt-46', question: '90 ÷ 9 = ?',  answer: 10, hint: 'Which times table fact can help?' },

  // --- "How many groups of" ---
  { id: 'mt-47', question: 'How many groups of 6 are in 54?',  answer: 9,  hint: 'Which operation helps find a missing factor?' },
  { id: 'mt-48', question: 'How many groups of 7 are in 42?',  answer: 6,  hint: 'Which operation helps find a missing factor?' },
  { id: 'mt-49', question: 'How many groups of 8 are in 48?',  answer: 6,  hint: 'Which operation helps find a missing factor?' },
  { id: 'mt-50', question: 'How many groups of 9 are in 63?',  answer: 7,  hint: 'Which operation helps find a missing factor?' },
  { id: 'mt-51', question: 'How many groups of 6 are in 30?',  answer: 5,  hint: 'Which operation helps find a missing factor?' },
  { id: 'mt-52', question: 'How many groups of 7 are in 35?',  answer: 5,  hint: 'Which operation helps find a missing factor?' },
  { id: 'mt-53', question: 'How many groups of 8 are in 32?',  answer: 4,  hint: 'Which operation helps find a missing factor?' },
  { id: 'mt-54', question: 'How many groups of 9 are in 36?',  answer: 4,  hint: 'Which operation helps find a missing factor?' },

  // --- "What is the product of" ---
  { id: 'mt-55', question: 'What is the product of 6 and 4?',  answer: 24, hint: 'What does "product" mean?' },
  { id: 'mt-56', question: 'What is the product of 7 and 5?',  answer: 35, hint: 'What does "product" mean?' },
  { id: 'mt-57', question: 'What is the product of 8 and 3?',  answer: 24, hint: 'What does "product" mean?' },
  { id: 'mt-58', question: 'What is the product of 9 and 4?',  answer: 36, hint: 'What does "product" mean?' },
  { id: 'mt-59', question: 'What is the product of 7 and 10?', answer: 70, hint: 'What does "product" mean?' },
  { id: 'mt-60', question: 'What is the product of 8 and 8?',  answer: 64, hint: 'What does "product" mean?' },

  // --- Missing number (new facts not in mt-1 to mt-30) ---
  { id: 'mt-61', question: '6 × ? = 24\nWhat is the missing number?',  answer: 4,  hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-62', question: '7 × ? = 21\nWhat is the missing number?',  answer: 3,  hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-63', question: '8 × ? = 72\nWhat is the missing number?',  answer: 9,  hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-64', question: '9 × ? = 27\nWhat is the missing number?',  answer: 3,  hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-65', question: '? × 6 = 48\nWhat is the missing number?',  answer: 8,  hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-66', question: '? × 7 = 56\nWhat is the missing number?',  answer: 8,  hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-67', question: '? × 8 = 80\nWhat is the missing number?',  answer: 10, hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-68', question: '? × 9 = 45\nWhat is the missing number?',  answer: 5,  hint: 'Think about the related division or multiplication fact.' },

  // --- Comparison ---
  { id: 'mt-69', question: 'Which is greater: 8 × 7 or 9 × 6?\nWrite the larger value.',  answer: 56, hint: 'Calculate each product separately first.' },
  { id: 'mt-70', question: 'Which is greater: 7 × 9 or 8 × 8?\nWrite the larger value.',  answer: 64, hint: 'Calculate each product separately first.' },
  { id: 'mt-71', question: 'Which is smaller: 6 × 9 or 7 × 8?\nWrite the smaller value.', answer: 54, hint: 'Calculate each product separately first.' },

  // --- Additional multiplication facts ---
  { id: 'mt-72', question: '6 × 1 = ?',  answer: 6,  hint: 'Any number × 1 = ?' },
  { id: 'mt-73', question: '7 × 1 = ?',  answer: 7,  hint: 'Any number × 1 = ?' },
  { id: 'mt-74', question: '8 × 1 = ?',  answer: 8,  hint: 'Any number × 1 = ?' },
  { id: 'mt-75', question: '9 × 1 = ?',  answer: 9,  hint: 'Any number × 1 = ?' },
  { id: 'mt-76', question: '6 × 4 = ?',  answer: 24, hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-77', question: '7 × 3 = ?',  answer: 21, hint: 'Use what you know about this times table.' },
  { id: 'mt-78', question: '8 × 4 = ?',  answer: 32, hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-79', question: '9 × 3 = ?',  answer: 27, hint: 'Use what you know about this times table.' },
  { id: 'mt-80', question: '8 × 10 = ?', answer: 80, hint: 'Think about what multiplying by 10 does to a number.' },
  { id: 'mt-81', question: '9 × 10 = ?', answer: 90, hint: 'Think about what multiplying by 10 does to a number.' },
  { id: 'mt-82', question: '9 × 9 = ?',  answer: 81, hint: 'Can you think of a nearby fact you already know?' },

  // --- Word problems ---
  { id: 'mt-83', question: 'There are 6 rows of chairs.\nEach row has 8 chairs.\nHow many chairs are there in all?', answer: 48, hint: 'Which operation do you need?' },
  { id: 'mt-84', question: 'A pack has 9 stickers.\nLi Ming buys 7 packs.\nHow many stickers does he have in all?', answer: 63, hint: 'Which operation do you need?' },
  { id: 'mt-85', question: 'A baker puts 6 cookies on each tray.\nShe has 9 trays.\nHow many cookies are there altogether?', answer: 54, hint: 'Which operation do you need?' },
  { id: 'mt-86', question: 'There are 8 tables in a classroom.\nEach table has 7 pencils.\nHow many pencils are there in total?', answer: 56, hint: 'Which operation do you need?' },
  { id: 'mt-87', question: 'Siti has 63 beads.\nShe puts them equally into 9 bags.\nHow many beads are in each bag?', answer: 7, hint: 'Which operation do you need?' },
  { id: 'mt-88', question: 'A teacher has 48 stickers.\nShe gives 6 stickers to each pupil.\nHow many pupils receive stickers?', answer: 8, hint: 'Which operation do you need?' },
  { id: 'mt-89', question: 'There are 7 shelves in a library.\nEach shelf holds 8 books.\nHow many books are there in all?', answer: 56, hint: 'Which operation do you need?' },
  { id: 'mt-90', question: 'A florist puts 9 flowers in each vase.\nThere are 6 vases.\nHow many flowers are there altogether?', answer: 54, hint: 'Which operation do you need?' },

  // --- ×11 and ×12 facts ---
  { id: 'mt-91', question: '6 × 11 = ?',  answer: 66,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-92', question: '7 × 11 = ?',  answer: 77,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-93', question: '8 × 11 = ?',  answer: 88,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-94', question: '9 × 11 = ?',  answer: 99,  hint: 'Can you think of a nearby fact you already know?' },
  { id: 'mt-95', question: '6 × 12 = ?',  answer: 72,  hint: 'Try splitting 12 into two parts.' },
  { id: 'mt-96', question: '7 × 12 = ?',  answer: 84,  hint: 'Try splitting 12 into two parts.' },
  { id: 'mt-97', question: '8 × 12 = ?',  answer: 96,  hint: 'Try splitting 12 into two parts.' },
  { id: 'mt-98', question: '9 × 12 = ?',  answer: 108, hint: 'Try splitting 12 into two parts.' },

  // --- Division from ×11 and ×12 facts ---
  { id: 'mt-99',  question: '66 ÷ 6 = ?',  answer: 11, hint: 'Which times table fact can help?' },
  { id: 'mt-100', question: '77 ÷ 7 = ?',  answer: 11, hint: 'Which times table fact can help?' },
  { id: 'mt-101', question: '88 ÷ 8 = ?',  answer: 11, hint: 'Which times table fact can help?' },
  { id: 'mt-102', question: '99 ÷ 9 = ?',  answer: 11, hint: 'Which times table fact can help?' },
  { id: 'mt-103', question: '72 ÷ 6 = ?',  answer: 12, hint: 'Which times table fact can help?' },
  { id: 'mt-104', question: '84 ÷ 7 = ?',  answer: 12, hint: 'Which times table fact can help?' },
  { id: 'mt-105', question: '96 ÷ 8 = ?',  answer: 12, hint: 'Which times table fact can help?' },
  { id: 'mt-106', question: '108 ÷ 9 = ?', answer: 12, hint: 'Which times table fact can help?' },

  // --- Missing number (×11 and ×12) ---
  { id: 'mt-107', question: '6 × ? = 66\nWhat is the missing number?',  answer: 11, hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-108', question: '7 × ? = 77\nWhat is the missing number?',  answer: 11, hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-109', question: '8 × ? = 96\nWhat is the missing number?',  answer: 12, hint: 'Think about the related division or multiplication fact.' },
  { id: 'mt-110', question: '9 × ? = 108\nWhat is the missing number?', answer: 12, hint: 'Think about the related division or multiplication fact.' },

  // --- Word problems (×11 and ×12) ---
  { id: 'mt-111', question: 'There are 9 children.\nEach child has 12 marbles.\nHow many marbles are there in total?',    answer: 108, hint: 'Which operation do you need?' },
  { id: 'mt-112', question: 'A pack has 7 biscuits.\nThere are 12 packs.\nHow many biscuits are there altogether?',       answer: 84,  hint: 'Which operation do you need?' },
  { id: 'mt-113', question: 'There are 8 teams.\nEach team has 11 players.\nHow many players are there in all?',          answer: 88,  hint: 'Which operation do you need?' },
  { id: 'mt-114', question: 'A bag contains 6 sweets.\nThere are 11 bags.\nHow many sweets are there in total?',          answer: 66,  hint: 'Which operation do you need?' },

  // --- Comparison (×11 and ×12) ---
  { id: 'mt-115', question: 'Which is greater: 9 × 11 or 8 × 12?\nWrite the larger value.',  answer: 99,  hint: 'Calculate each product separately first.' },
  { id: 'mt-116', question: 'Which is smaller: 6 × 12 or 7 × 11?\nWrite the smaller value.', answer: 72,  hint: 'Calculate each product separately first.' },

  // --- "How many groups of" (×11 and ×12) ---
  { id: 'mt-117', question: 'How many groups of 6 are in 66?', answer: 11, hint: 'Which operation helps find a missing factor?' },
  { id: 'mt-118', question: 'How many groups of 7 are in 77?', answer: 11, hint: 'Which operation helps find a missing factor?' },

  // --- Product form (×11 and ×12) ---
  { id: 'mt-119', question: 'What is the product of 8 and 11?', answer: 88,  hint: 'What does "product" mean?' },
  { id: 'mt-120', question: 'What is the product of 9 and 12?', answer: 108, hint: 'What does "product" mean?' },
]

export default questions
