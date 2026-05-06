import { MathQuestion } from '@/lib/types'

// 90 word problems — P3 MOE Singapore
// Multiplication, Division (with and without remainders), Two-step problems
const questions: MathQuestion[] = [

  // ─── GROUP A: Multiplication word problems (wp-1 to wp-25) ───────────────

  {
    id: 'wp-1',
    question: 'There are 8 rows of chairs in the school hall.\nEach row has 24 chairs.\nHow many chairs are there in total?',
    answer: 192,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-2',
    question: 'Ali saves $7 every week.\nHow much money does he save in 9 weeks?',
    answer: 63,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-3',
    question: 'Siti packs 36 cookies into each box.\nShe fills 6 boxes.\nHow many cookies does she pack in total?',
    answer: 216,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-4',
    question: 'A hawker stall sells 48 bowls of noodles each day.\nHow many bowls does it sell in 7 days?',
    answer: 336,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-5',
    question: 'Mr Lim plants 9 rows of flowers.\nEach row has 27 flowers.\nHow many flowers does he plant altogether?',
    answer: 243,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-6',
    question: 'There are 8 shelves in the library.\nEach shelf holds 45 books.\nHow many books are there on all the shelves?',
    answer: 360,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-7',
    question: 'Ravi buys 6 packets of marbles.\nEach packet has 34 marbles.\nHow many marbles does Ravi buy altogether?',
    answer: 204,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-8',
    question: 'A factory packs 125 tins of biscuits each hour.\nHow many tins does it pack in 8 hours?',
    answer: 1000,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-9',
    question: 'Mrs Tan arranges 9 columns of cupcakes on a tray.\nEach column has 16 cupcakes.\nHow many cupcakes are on the tray?',
    answer: 144,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-10',
    question: 'Beng collects 7 stamps every month.\nHow many stamps does he collect in 52 months?',
    answer: 364,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-11',
    question: 'Each MRT train has 6 carriages.\nEach carriage has 58 seats.\nHow many seats does one train have?',
    answer: 348,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-12',
    question: 'A pasar malam stall sells 9 satay sticks for $4.\nA school buys 8 sets of 9 sticks for a party.\nHow many satay sticks are there altogether?',
    answer: 72,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-13',
    question: 'Siti folds 63 origami cranes each week.\nHow many cranes does she fold in 7 weeks?',
    answer: 441,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-14',
    question: 'Ali stacks 8 boxes in each column.\nThere are 32 columns in the storeroom.\nHow many boxes are there in total?',
    answer: 256,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-15',
    question: 'A supermarket receives 9 crates of apples.\nEach crate holds 48 apples.\nHow many apples does the supermarket receive?',
    answer: 432,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-16',
    question: 'Ravi runs 6 km every day.\nHow many kilometres does he run in 35 days?',
    answer: 210,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-17',
    question: 'Mrs Tan buys 7 bags of rice.\nEach bag weighs 25 kg.\nWhat is the total weight of the rice?',
    answer: 175,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-18',
    question: 'A void deck table can seat 8 people.\nThere are 43 tables at the void deck.\nHow many people can be seated in total?',
    answer: 344,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-19',
    question: 'Beng earns $9 an hour helping at a stall.\nHe works for 26 hours in a month.\nHow much does he earn that month?',
    answer: 234,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-20',
    question: 'A printer prints 8 pages every minute.\nHow many pages does it print in 75 minutes?',
    answer: 600,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-21',
    question: 'Mr Lim plants 9 seeds in each pot.\nHe fills 54 pots.\nHow many seeds does he plant in all?',
    answer: 486,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-22',
    question: 'Siti strings 7 beads to make one bracelet.\nShe makes 68 bracelets for a charity sale.\nHow many beads does she use in total?',
    answer: 476,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-23',
    question: 'A bus company has 6 buses.\nEach bus makes 37 trips in a week.\nHow many trips do all the buses make in a week?',
    answer: 222,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-24',
    question: 'Ali packs 8 oranges into each bag.\nHe needs to pack 115 bags for a festive hamper order.\nHow many oranges does he pack altogether?',
    answer: 920,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-25',
    question: 'Each floor of a HDB block has 9 flats.\nThe block has 32 floors.\nHow many flats are there in the block?',
    answer: 288,
    hint: 'What are you trying to find?',
  },

  // ─── GROUP B: Division word problems, no remainder (wp-26 to wp-50) ──────

  {
    id: 'wp-26',
    question: '168 pupils are divided equally into 8 teams for Sports Day.\nHow many pupils are in each team?',
    answer: 21,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-27',
    question: 'A factory makes 144 toys a day.\nThe toys are packed 6 to a box.\nHow many boxes are needed?',
    answer: 24,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-28',
    question: 'Siti has 252 stickers to share equally among 9 friends.\nHow many stickers does each friend get?',
    answer: 28,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-29',
    question: 'A ribbon 192 cm long is cut into 8 equal pieces.\nHow long is each piece?',
    answer: 24,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-30',
    question: 'Mr Lim arranges 315 chairs into rows of 9.\nHow many rows of chairs are there?',
    answer: 35,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-31',
    question: 'Ravi collects 216 cans for a recycling drive.\nHe packs them into bags of 6.\nHow many bags does he fill?',
    answer: 36,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-32',
    question: 'A hawker stall made $392 in one week.\nThe earnings were shared equally among 7 workers.\nHow much did each worker receive?',
    answer: 56,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-33',
    question: 'Ali has 248 stickers.\nHe places 8 stickers on each page of an album.\nHow many pages does he fill?',
    answer: 31,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-34',
    question: 'Mrs Tan bakes 162 cookies.\nShe puts 9 cookies in each tin.\nHow many tins does she fill?',
    answer: 18,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-35',
    question: 'A school orders 336 exercise books.\nThe books are shared equally among 6 classes.\nHow many books does each class receive?',
    answer: 56,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-36',
    question: 'Beng saves $7 every week.\nHe wants to save $224 in total.\nHow many weeks will it take him to reach his goal?',
    answer: 32,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-37',
    question: '504 visitors came to the science centre over 7 days.\nThe same number of visitors came each day.\nHow many visitors came each day?',
    answer: 72,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-38',
    question: 'A fruit seller packs 288 rambutans equally into 9 bags.\nHow many rambutans are in each bag?',
    answer: 32,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-39',
    question: 'Siti ties 6 balloons together to make one bunch.\nShe has 354 balloons for a party.\nHow many bunches can she make?',
    answer: 59,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-40',
    question: 'A printing machine prints 576 flyers in 8 minutes.\nHow many flyers does it print each minute?',
    answer: 72,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-41',
    question: 'Mr Lim has 432 nails to put into boxes of 6.\nHow many boxes does he fill?',
    answer: 72,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-42',
    question: '189 children are split into groups of 9 for a camp activity.\nHow many groups are there?',
    answer: 21,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-43',
    question: 'Ali earns $8 for every hour of work.\nHe wants to earn $312.\nHow many hours must he work?',
    answer: 39,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-44',
    question: 'A rope 264 cm long is cut into 6 equal pieces.\nHow long is each piece?',
    answer: 44,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-45',
    question: '448 bottles of mineral water are packed into crates of 8.\nHow many crates are there?',
    answer: 56,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-46',
    question: 'Ravi types 7 pages of notes each day.\nHe types 343 pages in total.\nHow many days does he take?',
    answer: 49,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-47',
    question: 'A pasar malam seller has 378 keychains.\nHe places 9 keychains on each display hook.\nHow many hooks does he fill?',
    answer: 42,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-48',
    question: 'Mrs Tan divides 480 ml of juice equally into 6 cups.\nHow many ml of juice is in each cup?',
    answer: 80,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-49',
    question: 'Beng runs 8 km every day.\nHe ran a total of 256 km over several days.\nHow many days did he run?',
    answer: 32,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-50',
    question: 'A school canteen serves 630 plates of rice over 9 days.\nThe same number of plates are served each day.\nHow many plates of rice are served each day?',
    answer: 70,
    hint: 'What are you trying to find?',
  },

  // ─── GROUP C: Division WITH remainders (wp-51 to wp-65) ─────────────────

  {
    id: 'wp-51',
    question: '53 pupils need to be seated at tables of 8.\nHow many tables will be completely filled?',
    answer: 6,
    hint: 'Will there be anything left over?',
  },
  {
    id: 'wp-52',
    question: '53 pupils need to be seated at tables of 8.\nEach table seats exactly 8 pupils.\nHow many pupils will be left without a full table?',
    answer: 5,
    hint: 'Will there be anything left over?',
  },
  {
    id: 'wp-53',
    question: 'Siti has 47 beads.\nShe uses 6 beads to make each bracelet.\nHow many complete bracelets can she make?',
    answer: 7,
    hint: 'Will there be anything left over?',
  },
  {
    id: 'wp-54',
    question: 'Siti has 47 beads.\nShe uses 6 beads to make each bracelet.\nAfter making as many bracelets as possible, how many beads are left over?',
    answer: 5,
    hint: 'What is left after you divide as evenly as possible?',
  },
  {
    id: 'wp-55',
    question: 'Ali has 68 stickers to pack into envelopes of 9.\nHow many envelopes will be completely filled?',
    answer: 7,
    hint: 'Will there be anything left over?',
  },
  {
    id: 'wp-56',
    question: 'Ali has 68 stickers to pack into envelopes of 9.\nAfter filling as many envelopes as possible, how many stickers are left over?',
    answer: 5,
    hint: 'What is left after you divide as evenly as possible?',
  },
  {
    id: 'wp-57',
    question: 'Ravi wants to pack 83 oranges into bags of 7.\nHow many bags can he fill completely?',
    answer: 11,
    hint: 'Will there be anything left over?',
  },
  {
    id: 'wp-58',
    question: 'Ravi has 83 oranges and puts 7 in each bag.\nAfter filling as many bags as possible, how many oranges are left over?',
    answer: 6,
    hint: 'What is left after you divide as evenly as possible?',
  },
  {
    id: 'wp-59',
    question: 'Mrs Tan bakes 100 muffins.\nShe packs 9 muffins into each box.\nHow many boxes does she fill completely?',
    answer: 11,
    hint: 'Will there be anything left over?',
  },
  {
    id: 'wp-60',
    question: 'Mrs Tan bakes 100 muffins and packs 9 into each box.\nAfter filling as many boxes as she can, how many muffins are left over?',
    answer: 1,
    hint: 'What is left after you divide as evenly as possible?',
  },
  {
    id: 'wp-61',
    question: 'Beng collects 75 cans for recycling.\nHe ties them in bundles of 8.\nHow many complete bundles can he make?',
    answer: 9,
    hint: 'Will there be anything left over?',
  },
  {
    id: 'wp-62',
    question: 'Beng collects 75 cans and ties them in bundles of 8.\nAfter making as many bundles as possible, how many cans are left over?',
    answer: 3,
    hint: 'What is left after you divide as evenly as possible?',
  },
  {
    id: 'wp-63',
    question: '61 children sign up for a camp activity.\nThey are put into groups of 9.\nHow many complete groups are formed?',
    answer: 6,
    hint: 'Will there be anything left over?',
  },
  {
    id: 'wp-64',
    question: '61 children sign up for a camp activity and are put into groups of 9.\nHow many children are left over after the groups are formed?',
    answer: 7,
    hint: 'What is left after you divide as evenly as possible?',
  },
  {
    id: 'wp-65',
    question: 'A baker has 97 bread rolls to pack into bags of 6.\nAfter filling as many bags as he can, how many rolls are left over?',
    answer: 1,
    hint: 'What is left after you divide as evenly as possible?',
  },

  // ─── GROUP D: Two-step word problems (wp-66 to wp-80) ───────────────────

  {
    id: 'wp-66',
    question: 'Siti has 6 packets of sweets.\nEach packet has 9 sweets.\nShe gives away 18 sweets.\nHow many sweets does she have left?',
    answer: 36,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-67',
    question: 'A bakery makes 7 trays of cookies with 12 cookies each.\nThey sell 43 cookies.\nHow many cookies are left?',
    answer: 41,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-68',
    question: 'Ali buys 8 boxes of pens.\nEach box has 6 pens.\nHe gives 15 pens to his classmates.\nHow many pens does he have left?',
    answer: 33,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-69',
    question: 'Ravi has 96 marbles shared equally among 8 friends.\nHe then gives each friend 5 more marbles.\nHow many marbles does each friend have now?',
    answer: 17,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-70',
    question: 'Mrs Tan buys 9 packets of flour.\nEach packet weighs 7 kg.\nShe uses 18 kg of flour for baking.\nHow many kg of flour does she have left?',
    answer: 45,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-71',
    question: 'Beng collects 144 cans over 9 days.\nHe collects the same number each day.\nHe gives 8 cans to a neighbour.\nHow many cans does he have left?',
    answer: 8,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-72',
    question: 'A pasar malam stall has 7 rows of toys.\nEach row has 25 toys.\nAfter selling 63 toys, how many toys are left?',
    answer: 112,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-73',
    question: 'Siti saves $8 a week for 9 weeks.\nShe spends $34 on a book.\nHow much money does she have left?',
    answer: 38,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-74',
    question: 'Mr Lim has 252 tree saplings.\nHe plants them equally in 9 rows.\nHe then plants 14 more saplings in an extra row.\nHow many saplings are in the extra row together with the remainder?',
    answer: 14,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-75',
    question: 'A hawker sells 6 plates of rice per hour.\nAfter 8 hours, he has earned $336 in total.\nHow much does each plate of rice cost?',
    answer: 7,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-76',
    question: 'Ali packs 8 cans of drink into each bag.\nHe fills 23 bags and has 5 cans left over.\nHow many cans does he have in total?',
    answer: 189,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-77',
    question: 'Ravi buys 9 packs of trading cards.\nEach pack has 12 cards.\nHe trades away 27 cards.\nHow many cards does Ravi have now?',
    answer: 81,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-78',
    question: 'Mrs Tan has 7 bags of rice.\nEach bag holds 15 kg.\nShe uses 35 kg of rice to prepare food.\nHow many kg of rice are left?',
    answer: 70,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-79',
    question: 'Beng places 9 stamps on each page of his album.\nHe fills 16 pages and has 8 stamps left over.\nHow many stamps does he have altogether?',
    answer: 152,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-80',
    question: 'A school bus makes 6 trips to school each morning.\nEach trip carries 48 pupils.\nIn the afternoon, 57 pupils take a different bus home.\nHow many pupils in total use the school bus in the morning?',
    answer: 288,
    hint: 'Read carefully — what is given and what is unknown?',
  },

  // ─── GROUP E: Mixed word problems — money, measurement, time (wp-81 to wp-90) ─

  {
    id: 'wp-81',
    question: 'A ribbon is 96 cm long.\nIt is cut into 8 equal pieces.\nHow long is each piece?',
    answer: 12,
    hint: 'What are you trying to find?',
  },
  {
    id: 'wp-82',
    question: 'Siti buys 9 pens at $7 each.\nHow much does she spend altogether?',
    answer: 63,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-83',
    question: 'A water tank holds 504 litres of water.\nThe water is poured equally into 7 smaller tanks.\nHow many litres does each smaller tank hold?',
    answer: 72,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-84',
    question: 'Mr Lim jogs 8 km every morning.\nHow many kilometres does he jog in 45 days?',
    answer: 360,
    hint: 'Think about what the question is asking for.',
  },
  {
    id: 'wp-85',
    question: 'Ali takes 9 minutes to walk from his flat to the MRT station.\nHow many minutes does he spend walking to the MRT in 28 days?',
    answer: 252,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-86',
    question: 'A bag of rice weighs 6 kg.\nMrs Tan buys 38 bags.\nWhat is the total weight of all the rice?',
    answer: 228,
    hint: 'Which operation do you need?',
  },
  {
    id: 'wp-87',
    question: 'Ravi has $168.\nHe spends the same amount of money at each of 7 shops.\nHow much does he spend at each shop?',
    answer: 24,
    hint: 'Is this a sharing or grouping problem?',
  },
  {
    id: 'wp-88',
    question: 'A school event lasts 6 hours.\nThere are 9 performances of equal length.\nHow many minutes does each performance last?\n(Hint: 1 hour = 60 minutes)',
    answer: 40,
    hint: 'You may need more than one step.',
  },
  {
    id: 'wp-89',
    question: 'Beng buys a bag of 7 oranges for $3.\nHe buys 8 bags altogether.\nHow many oranges does he buy in total?',
    answer: 56,
    hint: 'Read carefully — what is given and what is unknown?',
  },
  {
    id: 'wp-90',
    question: 'A tank contains 432 litres of water.\nWater is pumped out at 9 litres per minute.\nHow many minutes does it take to empty the tank?',
    answer: 48,
    hint: 'Think about what the question is asking for.',
  },

  // ─── GROUP F: More multiplication word problems (wp-91 to wp-100) ────────

  { id: 'wp-91', question: '7 buses each carry 43 pupils on a school trip.\nHow many pupils are there in all?', answer: 301, hint: 'Which operation do you need?' },
  { id: 'wp-92', question: 'Siti buys 6 boxes of chocolates.\nEach box has 18 chocolates.\nHow many chocolates does she buy in total?', answer: 108, hint: 'What are you trying to find?' },
  { id: 'wp-93', question: 'A gardener plants 9 seeds in each pot.\nHe has 56 pots.\nHow many seeds does he plant altogether?', answer: 504, hint: 'Which operation do you need?' },
  { id: 'wp-94', question: 'Ravi strings 8 beads onto each keychain.\nHe makes 47 keychains for a school fair.\nHow many beads does he use in total?', answer: 376, hint: 'Think about what the question is asking for.' },
  { id: 'wp-95', question: 'A train has 9 carriages.\nEach carriage has 68 seats.\nHow many seats does the train have in total?', answer: 612, hint: 'Which operation do you need?' },
  { id: 'wp-96', question: 'Ali earns $7 per hour working at a food stall.\nHe works 38 hours in a month.\nHow much does he earn that month?', answer: 266, hint: 'Read carefully — what is given and what is unknown?' },
  { id: 'wp-97', question: 'Mrs Tan bakes 24 cupcakes on each tray.\nShe bakes 9 trays for a party.\nHow many cupcakes does she bake altogether?', answer: 216, hint: 'What are you trying to find?' },
  { id: 'wp-98', question: 'A machine produces 8 parts every minute.\nHow many parts does it produce in 94 minutes?', answer: 752, hint: 'Which operation do you need?' },
  { id: 'wp-99', question: 'Each desk has 6 drawers.\nThere are 45 desks in the office.\nHow many drawers are there in all?', answer: 270, hint: 'Think about what the question is asking for.' },
  { id: 'wp-100', question: 'A pool is filled at 9 litres per minute.\nHow many litres are in the pool after 54 minutes?', answer: 486, hint: 'Which operation do you need?' },

  // ─── GROUP G: More division word problems, no remainder (wp-101 to wp-110) ─

  { id: 'wp-101', question: '336 sweets are shared equally among 8 children.\nHow many sweets does each child get?', answer: 42, hint: 'Is this a sharing or grouping problem?' },
  { id: 'wp-102', question: 'A shelf holds 7 books.\n294 books need to be placed on shelves.\nHow many shelves are needed?', answer: 42, hint: 'What are you trying to find?' },
  { id: 'wp-103', question: '270 pupils are divided into 9 equal groups.\nHow many pupils are in each group?', answer: 30, hint: 'Which operation do you need?' },
  { id: 'wp-104', question: 'A rope 192 cm long is cut into 6 equal pieces.\nHow long is each piece?', answer: 32, hint: 'Is this a sharing or grouping problem?' },
  { id: 'wp-105', question: 'A factory packs 504 biscuits into boxes of 8.\nHow many boxes are needed?', answer: 63, hint: 'Think about what the question is asking for.' },
  { id: 'wp-106', question: 'Mr Lim drives the same distance for each trip.\nHe drives 318 km over 6 trips.\nHow far is each trip?', answer: 53, hint: 'Read carefully — what is given and what is unknown?' },
  { id: 'wp-107', question: '441 trading cards are shared equally among 7 friends.\nHow many cards does each friend get?', answer: 63, hint: 'Is this a sharing or grouping problem?' },
  { id: 'wp-108', question: '288 chairs are arranged in rows of 9.\nHow many rows are there?', answer: 32, hint: 'What are you trying to find?' },
  { id: 'wp-109', question: 'A carton holds 6 eggs.\n282 eggs need to be packed.\nHow many cartons are needed?', answer: 47, hint: 'Which operation do you need?' },
  { id: 'wp-110', question: '392 pages are printed equally by 8 machines.\nHow many pages does each machine print?', answer: 49, hint: 'Is this a sharing or grouping problem?' },

  // ─── GROUP H: Two-step and remainder problems (wp-111 to wp-120) ─────────

  { id: 'wp-111', question: 'Ravi has 9 packs of stickers.\nEach pack has 14 stickers.\nHe gives 36 stickers to his classmates.\nHow many stickers does he have left?', answer: 90, hint: 'You may need more than one step.' },
  { id: 'wp-112', question: '73 children board minibuses of 9.\nHow many complete minibuses are filled?', answer: 8, hint: 'Will there be anything left over?' },
  { id: 'wp-113', question: '73 children board minibuses of 9.\nAfter filling as many minibuses as possible, how many children are left over?', answer: 1, hint: 'What is left after you divide as evenly as possible?' },
  { id: 'wp-114', question: 'Siti has 86 cookies to pack into bags of 8.\nHow many complete bags can she fill?', answer: 10, hint: 'Will there be anything left over?' },
  { id: 'wp-115', question: 'Siti has 86 cookies and packs them into bags of 8.\nAfter filling as many bags as possible, how many cookies are left over?', answer: 6, hint: 'What is left after you divide as evenly as possible?' },
  { id: 'wp-116', question: 'Ali saves $7 each day.\nAfter 8 days, he spends $29 on a book.\nHow much money does he have left?', answer: 27, hint: 'You may need more than one step.' },
  { id: 'wp-117', question: 'A factory makes 6 items per hour for 9 hours.\n7 items are found to be faulty and are removed.\nHow many good items are there?', answer: 47, hint: 'You may need more than one step.' },
  { id: 'wp-118', question: 'Mr Lim has 95 flowers.\nHe makes bouquets of 8 flowers each.\nHow many complete bouquets can he make?', answer: 11, hint: 'Will there be anything left over?' },
  { id: 'wp-119', question: 'Mr Lim has 95 flowers and makes bouquets of 8 flowers each.\nAfter making as many bouquets as possible, how many flowers are left over?', answer: 7, hint: 'What is left after you divide as evenly as possible?' },
  { id: 'wp-120', question: 'Beng saves $9 a week for 7 weeks.\nHe spends $28 on a game.\nHow much money does he have left?', answer: 35, hint: 'You may need more than one step.' },

]

export default questions
