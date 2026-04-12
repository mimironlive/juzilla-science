import { Question } from '@/lib/types'

const questions: Question[] = [
  {
    id: 'cls-1',
    question:
      'What is the main difference between flowering plants and non-flowering plants?',
    options: [
      'Flowering plants are always taller than non-flowering plants.',
      'Flowering plants produce flowers and seeds, while non-flowering plants do not.',
      'Non-flowering plants need more water than flowering plants.',
      'Flowering plants grow faster than non-flowering plants.',
    ],
    answer: 1,
    explanation:
      'The main difference is that flowering plants produce flowers and seeds, while non-flowering plants like ferns and mosses do not produce flowers or seeds. Non-flowering plants reproduce using spores.',
  },
  {
    id: 'cls-2',
    question:
      'A fern reproduces using spores. This means a fern is a:',
    options: [
      'Flowering plant',
      'Non-flowering plant',
      'Mammal',
      'Vertebrate',
    ],
    answer: 1,
    explanation:
      'Ferns are non-flowering plants. They do not produce flowers or seeds. Instead, they reproduce using spores.',
  },
  {
    id: 'cls-3',
    question: 'Which of the following is a vertebrate?',
    options: ['Butterfly', 'Earthworm', 'Eagle', 'Snail'],
    answer: 2,
    explanation:
      'An eagle is a vertebrate — it has a backbone. Butterflies, earthworms and snails are invertebrates — they do not have a backbone.',
  },
  {
    id: 'cls-4',
    question: 'What do all mammals have in common?',
    options: [
      'They all lay eggs.',
      'They all live in water.',
      'They all have fur or hair on their bodies.',
      'They all have scales.',
    ],
    answer: 2,
    explanation:
      'All mammals have fur or hair on their bodies. This is one of the key characteristics of mammals.',
  },
  {
    id: 'cls-5',
    question:
      'A whale lives in the ocean, but it is classified as a mammal and not a fish. Which characteristic shows that a whale is a mammal?',
    options: [
      'It lives in water.',
      'It has a very large body.',
      'It feeds its young with milk.',
      'It can swim very fast.',
    ],
    answer: 2,
    explanation:
      'A whale is classified as a mammal because it feeds its young with milk, which is a characteristic of mammals. Fish do not feed their young with milk.',
  },
  {
    id: 'cls-6',
    question:
      'Which of the following is NOT a characteristic of birds?',
    options: [
      'They have feathers.',
      'They have a beak.',
      'They breathe using gills.',
      'They lay eggs.',
    ],
    answer: 2,
    explanation:
      'Birds breathe using lungs, not gills. Gills are used by fish to breathe. Having feathers, a beak and laying eggs are all characteristics of birds.',
  },
  {
    id: 'cls-7',
    question: 'Frogs belong to which group of animals?',
    options: ['Reptiles', 'Mammals', 'Amphibians', 'Fish'],
    answer: 2,
    explanation:
      'Frogs are amphibians. They have moist skin without scales, lay their eggs in water, and the young (tadpoles) live in water before growing into adults that can live on land.',
  },
  {
    id: 'cls-8',
    question: 'Which of the following animals is cold-blooded?',
    options: ['Dog', 'Rabbit', 'Lizard', 'Sparrow'],
    answer: 2,
    explanation:
      'Lizards are cold-blooded reptiles. Their body temperature changes with the temperature of their surroundings. Dogs, rabbits and sparrows are warm-blooded animals.',
  },
  {
    id: 'cls-9',
    question:
      'A snake has dry, scaly skin and lays its eggs on land. Which group does it belong to?',
    options: ['Amphibians', 'Fish', 'Reptiles', 'Mammals'],
    answer: 2,
    explanation:
      'Snakes are reptiles. Reptiles have dry, scaly skin and most lay eggs on land. They are cold-blooded animals.',
  },
  {
    id: 'cls-10',
    question: 'Which of the following animals breathes using gills?',
    options: ['Crocodile', 'Toad', 'Salmon', 'Bat'],
    answer: 2,
    explanation:
      'Salmon are fish that breathe using gills, which allow them to take in oxygen from water. Crocodiles, toads and bats all breathe using lungs.',
  },
  {
    id: 'cls-11',
    question: 'What is the correct classification of a spider?',
    options: ['Insect', 'Vertebrate', 'Invertebrate', 'Mammal'],
    answer: 2,
    explanation:
      'A spider is an invertebrate — it does not have a backbone. Spiders are not insects (insects have 6 legs; spiders have 8 legs), and they are not vertebrates or mammals.',
  },
  {
    id: 'cls-12',
    question: 'Which of the following is a non-flowering plant?',
    options: ['Rose', 'Sunflower', 'Moss', 'Mango tree'],
    answer: 2,
    explanation:
      'Moss is a non-flowering plant. It reproduces using spores, not seeds. Roses, sunflowers and mango trees are all flowering plants.',
  },
  {
    id: 'cls-13',
    question: 'What do birds and reptiles have in common?',
    options: [
      'Both are warm-blooded.',
      'Both have feathers.',
      'Both lay eggs.',
      'Both breathe with gills.',
    ],
    answer: 2,
    explanation:
      'Both birds and reptiles lay eggs. Birds are warm-blooded and have feathers, while reptiles are cold-blooded and have scales. Neither group breathes with gills.',
  },
  {
    id: 'cls-14',
    question:
      'Which group of vertebrates has moist skin and can breathe through their skin?',
    options: ['Reptiles', 'Amphibians', 'Mammals', 'Birds'],
    answer: 1,
    explanation:
      'Amphibians have moist skin (no scales) and can breathe through their skin. This is one of the characteristics that distinguishes them from reptiles.',
  },
  {
    id: 'cls-15',
    question:
      'A bat is classified as a mammal because it:',
    options: [
      'Can fly.',
      'Has wings.',
      'Has fur and feeds its young with milk.',
      'Is active at night.',
    ],
    answer: 2,
    explanation:
      'A bat is classified as a mammal because it has fur on its body and feeds its young with milk. Even though bats can fly and have wings, these features alone do not make them birds.',
  },
  {
    id: 'cls-16',
    question: 'Which of the following is a characteristic of fish?',
    options: [
      'They breathe using lungs.',
      'They have moist skin without scales.',
      'They have scales and breathe using gills.',
      'They are warm-blooded.',
    ],
    answer: 2,
    explanation:
      'Fish have scales on their bodies and breathe using gills. They are cold-blooded animals that live in water.',
  },
  {
    id: 'cls-17',
    question:
      'A tadpole lives in water and breathes using gills. As it grows into a frog, it develops lungs. This life cycle is a characteristic of which group?',
    options: ['Fish', 'Reptiles', 'Mammals', 'Amphibians'],
    answer: 3,
    explanation:
      'This describes the life cycle of an amphibian. Amphibians (like frogs) start their lives in water breathing with gills, and develop lungs as they grow into adults.',
  },
  {
    id: 'cls-18',
    question:
      'Which of the following correctly classifies the animal?',
    options: [
      'Penguin — mammal, because it cannot fly.',
      'Dolphin — fish, because it lives in water.',
      'Eagle — bird, because it has feathers and lays eggs.',
      'Turtle — amphibian, because it can swim.',
    ],
    answer: 2,
    explanation:
      'An eagle is correctly classified as a bird because it has feathers and lays eggs. A penguin is a bird (not a mammal). A dolphin is a mammal (not a fish) — it breathes air and feeds its young with milk. A turtle is a reptile (not an amphibian) — it has scales.',
  },
  {
    id: 'cls-19',
    question:
      'What characteristic is used to separate vertebrates from invertebrates?',
    options: [
      'Whether they can fly',
      'Whether they have a backbone',
      'Whether they live in water',
      'Whether they are warm-blooded',
    ],
    answer: 1,
    explanation:
      'Vertebrates are animals with a backbone, while invertebrates are animals without a backbone. This is the key characteristic used to classify animals into these two groups.',
  },
  {
    id: 'cls-20',
    question: 'Which of the following is a flowering plant?',
    options: ['Fern', 'Mushroom', 'Hibiscus', 'Moss'],
    answer: 2,
    explanation:
      'The hibiscus is a flowering plant — it produces flowers and seeds. Ferns and mosses are non-flowering plants. Mushrooms are not plants at all.',
  },
  {
    id: 'cls-21',
    question: 'Which two animals belong to the same group?',
    options: [
      'Frog and lizard',
      'Shark and whale',
      'Penguin and bat',
      'Eagle and parrot',
    ],
    answer: 3,
    explanation:
      'An eagle and a parrot are both birds — they both have feathers, lay eggs and have beaks. A frog is an amphibian and a lizard is a reptile. A shark is a fish and a whale is a mammal. A penguin is a bird and a bat is a mammal.',
  },
  {
    id: 'cls-22',
    question:
      'What is one way that mammals are different from ALL other vertebrates?',
    options: [
      'They are warm-blooded.',
      'They feed their young with milk.',
      'They breathe using lungs.',
      'They lay eggs.',
    ],
    answer: 1,
    explanation:
      'Feeding young with milk is a characteristic unique to mammals. While some other vertebrates are also warm-blooded (birds) or breathe with lungs (birds and reptiles), only mammals feed their young with milk.',
  },
  {
    id: 'cls-23',
    question:
      'A student finds an animal that has no backbone, six legs and three body parts. Which group does this animal belong to?',
    options: ['Spider', 'Insect', 'Vertebrate', 'Mammal'],
    answer: 1,
    explanation:
      'An animal with six legs and three body parts is an insect. Insects are a type of invertebrate — they do not have a backbone. Spiders have eight legs and two body parts.',
  },
  {
    id: 'cls-24',
    question: 'Which of the following plants reproduces using seeds?',
    options: ['Fern', 'Moss', 'Mango tree', 'Mushroom'],
    answer: 2,
    explanation:
      'The mango tree is a flowering plant that reproduces using seeds found inside its fruits. Ferns and mosses are non-flowering plants that reproduce using spores. Mushrooms are not plants.',
  },
  {
    id: 'cls-25',
    question:
      'Both crocodiles and dolphins live near water. A crocodile is a reptile, but a dolphin is a mammal. What is one characteristic that makes a dolphin a mammal?',
    options: [
      'It can swim.',
      'It breathes through a blowhole.',
      'It feeds its young with milk.',
      'It has smooth skin.',
    ],
    answer: 2,
    explanation:
      'A dolphin is a mammal because it feeds its young with milk. Even though both crocodiles and dolphins live near water, only the dolphin has this mammal characteristic.',
  },
  {
    id: 'cls-26',
    question:
      'Which of the following is NOT a characteristic of reptiles?',
    options: [
      'They are cold-blooded.',
      'They have dry, scaly skin.',
      'They feed their young with milk.',
      'Most of them lay eggs.',
    ],
    answer: 2,
    explanation:
      'Feeding young with milk is a characteristic of mammals, not reptiles. Reptiles are cold-blooded, have dry scaly skin and most lay eggs.',
  },
  {
    id: 'cls-27',
    question: 'Why is a mushroom not classified as a plant?',
    options: [
      'It is too small.',
      'It cannot make its own food the way plants can.',
      'It lives on dead wood.',
      'It does not have any leaves.',
    ],
    answer: 1,
    explanation:
      'Mushrooms are not classified as plants because they cannot make their own food. Plants make their own food using sunlight, water and air. Mushrooms absorb nutrients from dead or decaying matter.',
  },
  {
    id: 'cls-28',
    question:
      'Which group do penguins belong to, and why?',
    options: [
      'Mammals, because they live in cold places.',
      'Fish, because they swim in the ocean.',
      'Birds, because they have feathers and lay eggs.',
      'Reptiles, because they have hard shells.',
    ],
    answer: 2,
    explanation:
      'Penguins are birds because they have feathers and lay eggs. Even though penguins cannot fly, they are still classified as birds because of these characteristics.',
  },
  {
    id: 'cls-29',
    question:
      'Which of the following shows the correct classification?',
    options: [
      'Frog — reptile',
      'Bat — bird',
      'Seahorse — fish',
      'Earthworm — vertebrate',
    ],
    answer: 2,
    explanation:
      'A seahorse is correctly classified as a fish. It lives in water, has gills and scales. Frogs are amphibians (not reptiles), bats are mammals (not birds), and earthworms are invertebrates (not vertebrates).',
  },
  {
    id: 'cls-30',
    question:
      'A student sorts animals into two groups: those with a backbone and those without. Which animal would be placed in the group WITHOUT a backbone?',
    options: ['Salmon', 'Crocodile', 'Bee', 'Parrot'],
    answer: 2,
    explanation:
      'A bee is an invertebrate — it does not have a backbone. Salmon (fish), crocodiles (reptiles) and parrots (birds) are all vertebrates with backbones.',
  },
]

export default questions
