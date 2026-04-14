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
    question: 'A fern reproduces using spores. This means a fern is a:',
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
    question: 'Which of the following is NOT a characteristic of birds?',
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
    question: 'A bat is classified as a mammal because it:',
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
    question: 'Which of the following correctly classifies the animal?',
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
    question: 'Which of the following is NOT a characteristic of reptiles?',
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
    question: 'Which group do penguins belong to, and why?',
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
    question: 'Which of the following shows the correct classification?',
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

  // ── NEW QUESTIONS cls-31 through cls-90 ────────────────────────────────────

  // Insects: characteristics
  {
    id: 'cls-31',
    question: 'How many legs does an insect have?',
    options: ['Four legs', 'Six legs', 'Eight legs', 'Ten legs'],
    answer: 1,
    explanation:
      'All insects have exactly six legs. This is one of the most important characteristics of insects. Spiders have eight legs, which is why they are not insects.',
  },
  {
    id: 'cls-32',
    question: 'An insect\'s body is divided into how many main parts?',
    options: ['Two parts', 'Three parts', 'Four parts', 'Five parts'],
    answer: 1,
    explanation:
      'An insect\'s body is divided into three main parts: the head, the thorax and the abdomen. This three-part body is one of the key features that makes an animal an insect.',
  },
  {
    id: 'cls-33',
    question: 'Which of the following is an insect?',
    options: ['Spider', 'Scorpion', 'Grasshopper', 'Crab'],
    answer: 2,
    explanation:
      'A grasshopper is an insect. It has six legs, three body parts and a pair of antennae. Spiders and scorpions have eight legs, and crabs have ten legs — none of them are insects.',
  },
  {
    id: 'cls-34',
    question:
      'A student examines a small animal. It has six legs, two antennae, wings and three body parts. What type of animal is it?',
    options: ['Spider', 'Insect', 'Crab', 'Worm'],
    answer: 1,
    explanation:
      'The animal is an insect. Insects have six legs, two antennae and three body parts. Many insects also have wings. Spiders have eight legs, crabs have ten legs, and worms have no legs.',
  },
  {
    id: 'cls-35',
    question:
      'Which of the following is NOT a characteristic of insects?',
    options: [
      'They have six legs.',
      'They have three body parts.',
      'They have a backbone.',
      'They have two antennae.',
    ],
    answer: 2,
    explanation:
      'Insects do not have a backbone — they are invertebrates. All insects have six legs, three body parts and two antennae. These are the key features of insects.',
  },

  // Spiders and other invertebrates
  {
    id: 'cls-36',
    question: 'How many legs does a spider have?',
    options: ['Four legs', 'Six legs', 'Eight legs', 'Ten legs'],
    answer: 2,
    explanation:
      'Spiders have eight legs. This is different from insects, which have only six legs. Because spiders have eight legs, they are not classified as insects.',
  },
  {
    id: 'cls-37',
    question:
      'A spider and a grasshopper are both invertebrates. What is one way they are DIFFERENT?',
    options: [
      'Only the grasshopper has a hard outer covering.',
      'The spider has eight legs, but the grasshopper has six legs.',
      'Only the spider is an invertebrate.',
      'The grasshopper has a backbone, but the spider does not.',
    ],
    answer: 1,
    explanation:
      'Spiders have eight legs while grasshoppers have six legs. Both are invertebrates without backbones. This difference in the number of legs means spiders are not insects, even though both animals look similar.',
  },
  {
    id: 'cls-38',
    question:
      'A snail has a soft body and no backbone. It belongs to which group?',
    options: ['Vertebrate', 'Insect', 'Invertebrate', 'Mammal'],
    answer: 2,
    explanation:
      'A snail is an invertebrate because it does not have a backbone. Snails are not insects either, as they do not have six legs or three body parts. Any animal without a backbone is called an invertebrate.',
  },
  {
    id: 'cls-39',
    question:
      'Which of the following animals is an invertebrate?',
    options: ['Toad', 'Turtle', 'Crab', 'Sparrow'],
    answer: 2,
    explanation:
      'A crab is an invertebrate — it does not have a backbone inside its body. Instead, it has a hard outer shell. Toads (amphibians), turtles (reptiles) and sparrows (birds) are all vertebrates with backbones.',
  },
  {
    id: 'cls-40',
    question:
      'An earthworm has a long, soft body with no legs and no backbone. Which group does it belong to?',
    options: ['Fish', 'Insect', 'Reptile', 'Invertebrate'],
    answer: 3,
    explanation:
      'An earthworm is an invertebrate because it does not have a backbone. It is also not an insect (insects have six legs and three body parts), not a fish and not a reptile.',
  },

  // Warm-blooded vs cold-blooded
  {
    id: 'cls-41',
    question:
      'Which of the following animals is warm-blooded?',
    options: ['Goldfish', 'Gecko', 'Pigeon', 'Frog'],
    answer: 2,
    explanation:
      'A pigeon is a bird, and birds are warm-blooded. This means their body temperature stays the same no matter how hot or cold the environment is. Fish, reptiles and amphibians are cold-blooded.',
  },
  {
    id: 'cls-42',
    question:
      'What does it mean for an animal to be "cold-blooded"?',
    options: [
      'The animal always feels cold when you touch it.',
      'The animal\'s body temperature changes with the temperature of its surroundings.',
      'The animal lives only in cold places like the Arctic.',
      'The animal has cold blood inside its body.',
    ],
    answer: 1,
    explanation:
      'A cold-blooded animal\'s body temperature goes up or down depending on how warm or cold its surroundings are. This is different from warm-blooded animals, which keep the same body temperature all the time.',
  },
  {
    id: 'cls-43',
    question:
      'Which two animals below are BOTH warm-blooded?',
    options: [
      'Crocodile and eagle',
      'Cat and parrot',
      'Toad and shark',
      'Lizard and rabbit',
    ],
    answer: 1,
    explanation:
      'Cats are mammals and parrots are birds — both groups are warm-blooded. Crocodiles and lizards are reptiles (cold-blooded), toads are amphibians (cold-blooded), and sharks are fish (cold-blooded).',
  },
  {
    id: 'cls-44',
    question:
      'Which two animals are BOTH cold-blooded?',
    options: [
      'Dog and pigeon',
      'Horse and dolphin',
      'Snake and clownfish',
      'Eagle and cat',
    ],
    answer: 2,
    explanation:
      'Snakes are reptiles and clownfish are fish — both groups are cold-blooded. Dogs, horses and dolphins are mammals (warm-blooded), and pigeons and eagles are birds (warm-blooded).',
  },

  // Egg-laying vs live birth
  {
    id: 'cls-45',
    question:
      'Which of the following animals gives birth to live young instead of laying eggs?',
    options: ['Crocodile', 'Pigeon', 'Cat', 'Frog'],
    answer: 2,
    explanation:
      'Cats are mammals, and most mammals give birth to live young rather than laying eggs. Crocodiles (reptiles), pigeons (birds) and frogs (amphibians) all lay eggs.',
  },
  {
    id: 'cls-46',
    question:
      'A platypus is an unusual mammal because it:',
    options: [
      'Has no fur on its body.',
      'Cannot feed its young with milk.',
      'Lays eggs instead of giving birth to live young.',
      'Breathes using gills.',
    ],
    answer: 2,
    explanation:
      'The platypus is unusual because it is a mammal that lays eggs — most other mammals give birth to live young. However, it is still a mammal because it has fur and feeds its young with milk.',
  },
  {
    id: 'cls-47',
    question:
      'A platypus lays eggs, yet it is still classified as a mammal. Which characteristic proves it is a mammal?',
    options: [
      'It lays eggs with a leathery shell.',
      'It lives near rivers and streams.',
      'It has fur and feeds its young with milk.',
      'It has a flat tail like a beaver.',
    ],
    answer: 2,
    explanation:
      'Even though the platypus lays eggs, it is a mammal because it has fur on its body and the mother feeds her young with milk. Having fur and feeding young with milk are the key mammal characteristics.',
  },
  {
    id: 'cls-48',
    question:
      'Which group of vertebrates ALWAYS lays eggs?',
    options: ['Mammals', 'Birds', 'Amphibians', 'Reptiles'],
    answer: 1,
    explanation:
      'All birds lay eggs — this is a characteristic that applies to every single bird species. While most reptiles and many amphibians also lay eggs, birds are the only group where every species lays eggs.',
  },

  // More specific mammal characteristics
  {
    id: 'cls-49',
    question:
      'Which of the following animals is a mammal?',
    options: ['Gecko', 'Tuna', 'Hamster', 'Parrot'],
    answer: 2,
    explanation:
      'A hamster is a mammal. It has fur, gives birth to live young and feeds its young with milk. Geckos are reptiles, tuna are fish and parrots are birds.',
  },
  {
    id: 'cls-50',
    question:
      'All mammals breathe using:',
    options: ['Gills', 'Their skin', 'Lungs', 'Both gills and lungs'],
    answer: 2,
    explanation:
      'All mammals breathe using lungs, even those that live in water like whales and dolphins. They must come to the surface to breathe air. Fish use gills and amphibians can breathe through their skin.',
  },
  {
    id: 'cls-51',
    question:
      'Which of the following is the ODD ONE OUT among these mammals?',
    options: ['Cat', 'Dog', 'Rabbit', 'Cobra'],
    answer: 3,
    explanation:
      'A cobra is the odd one out because it is a reptile, not a mammal. Cats, dogs and rabbits are all mammals — they have fur and feed their young with milk. A cobra has dry, scaly skin and is cold-blooded.',
  },

  // More specific bird characteristics
  {
    id: 'cls-52',
    question:
      'Which of the following is a characteristic that ALL birds share?',
    options: [
      'They can all fly.',
      'They all live near water.',
      'They all have feathers.',
      'They are all warm-blooded and cold-blooded.',
    ],
    answer: 2,
    explanation:
      'All birds have feathers — this is the one feature shared by every bird. Not all birds can fly (penguins and ostriches cannot), and not all birds live near water. All birds are warm-blooded.',
  },
  {
    id: 'cls-53',
    question:
      'An ostrich is a very large bird that cannot fly. It is still classified as a bird because it:',
    options: [
      'Is very fast on its feet.',
      'Has feathers, a beak and lays eggs.',
      'Lives on land.',
      'Has two legs.',
    ],
    answer: 1,
    explanation:
      'An ostrich is a bird because it has feathers, a beak and lays eggs. The ability to fly is not required for an animal to be classified as a bird. Penguins are another example of flightless birds.',
  },
  {
    id: 'cls-54',
    question:
      'Which of the following is the ODD ONE OUT?',
    options: ['Eagle', 'Owl', 'Bat', 'Parrot'],
    answer: 2,
    explanation:
      'A bat is the odd one out because it is a mammal, not a bird. Eagles, owls and parrots are all birds — they have feathers and lay eggs. A bat has fur and feeds its young with milk.',
  },

  // More specific reptile characteristics
  {
    id: 'cls-55',
    question:
      'Which of the following animals is a reptile?',
    options: ['Salamander', 'Tortoise', 'Clownfish', 'Hedgehog'],
    answer: 1,
    explanation:
      'A tortoise is a reptile. It has dry, scaly skin and is cold-blooded. Salamanders are amphibians, clownfish are fish, and hedgehogs are mammals.',
  },
  {
    id: 'cls-56',
    question:
      'What type of skin do reptiles have?',
    options: [
      'Moist, smooth skin',
      'Wet skin covered in slime',
      'Dry, scaly skin',
      'Skin covered in feathers',
    ],
    answer: 2,
    explanation:
      'Reptiles have dry, scaly skin. This is different from amphibians, which have moist skin. The dry, scaly skin of reptiles helps prevent them from losing water from their bodies.',
  },
  {
    id: 'cls-57',
    question:
      'Which of these is the ODD ONE OUT among reptiles?',
    options: ['Crocodile', 'Gecko', 'Toad', 'Iguana'],
    answer: 2,
    explanation:
      'A toad is the odd one out because it is an amphibian, not a reptile. Crocodiles, geckos and iguanas are all reptiles with dry, scaly skin. Toads have moist skin and are cold-blooded amphibians.',
  },

  // More specific amphibian characteristics
  {
    id: 'cls-58',
    question:
      'Which of the following is an amphibian?',
    options: ['Chameleon', 'Salamander', 'Piranha', 'Porcupine'],
    answer: 1,
    explanation:
      'A salamander is an amphibian. Like frogs and toads, it has moist skin, lays eggs in water and can live both in water and on land. Chameleons are reptiles, piranhas are fish and porcupines are mammals.',
  },
  {
    id: 'cls-59',
    question:
      'Young amphibians like tadpoles live in water. When they grow up, they can also live on land. What body part do they develop that allows them to breathe on land?',
    options: ['Gills', 'Scales', 'Lungs', 'Fins'],
    answer: 2,
    explanation:
      'Young amphibians breathe with gills in water, but as they grow up they develop lungs that allow them to breathe air on land. This is why adult frogs and toads can live both in water and on land.',
  },
  {
    id: 'cls-60',
    question:
      'Where do most amphibians lay their eggs?',
    options: [
      'On dry land, buried in soil',
      'In water or near water',
      'Inside nests built from leaves',
      'Inside the mother\'s body',
    ],
    answer: 1,
    explanation:
      'Most amphibians lay their eggs in water or near water. This is because their eggs do not have a tough shell and would dry out on land. Their young (like tadpoles) also need water to survive.',
  },

  // More specific fish characteristics
  {
    id: 'cls-61',
    question:
      'Which of the following animals is correctly described as a fish?',
    options: [
      'Seahorse — has scales and breathes with gills',
      'Whale — lives in the ocean and is very large',
      'Seal — has flippers and swims in the sea',
      'Penguin — swims underwater to catch food',
    ],
    answer: 0,
    explanation:
      'A seahorse is a fish because it has scales and breathes with gills. Whales and seals are mammals, and penguins are birds. Living in the ocean does not make an animal a fish.',
  },
  {
    id: 'cls-62',
    question:
      'Fish use fins to help them swim. What do fish use to breathe?',
    options: ['Lungs', 'Their skin', 'Gills', 'A blowhole'],
    answer: 2,
    explanation:
      'Fish breathe using gills, which take in oxygen from the water. Mammals that live in water (like whales and dolphins) breathe using lungs. Fish cannot survive out of water for long because they need gills to breathe.',
  },
  {
    id: 'cls-63',
    question:
      'Which of the following is the ODD ONE OUT?',
    options: ['Goldfish', 'Clownfish', 'Shark', 'Dolphin'],
    answer: 3,
    explanation:
      'A dolphin is the odd one out because it is a mammal, not a fish. Goldfish, clownfish and sharks are all fish — they have scales and breathe with gills. A dolphin breathes using lungs and feeds its young with milk.',
  },

  // Flowering vs non-flowering plants: specific examples
  {
    id: 'cls-64',
    question:
      'An orchid produces beautiful flowers and makes seeds. What type of plant is it?',
    options: [
      'Non-flowering plant',
      'Flowering plant',
      'Fern',
      'Moss',
    ],
    answer: 1,
    explanation:
      'An orchid is a flowering plant because it produces flowers and seeds. Ferns and mosses are examples of non-flowering plants that reproduce using spores instead of seeds.',
  },
  {
    id: 'cls-65',
    question:
      'A bougainvillea plant has bright, colourful flowers on its branches. What can you conclude about the bougainvillea?',
    options: [
      'It is a non-flowering plant.',
      'It is a flowering plant.',
      'It reproduces using spores.',
      'It is not a plant.',
    ],
    answer: 1,
    explanation:
      'Because a bougainvillea produces flowers, it is a flowering plant. Flowering plants reproduce by making seeds. Non-flowering plants like ferns and mosses do not produce flowers at all.',
  },
  {
    id: 'cls-66',
    question:
      'A liverwort is a small, flat, green plant that lives in damp places. It reproduces using spores and never produces flowers. What type of plant is it?',
    options: [
      'Flowering plant',
      'Non-flowering plant',
      'Fruit tree',
      'It is not a plant.',
    ],
    answer: 1,
    explanation:
      'A liverwort is a non-flowering plant because it reproduces using spores and never produces flowers or seeds. Like mosses and ferns, it grows in damp, shady places.',
  },
  {
    id: 'cls-67',
    question:
      'Which of the following is a flowering plant?',
    options: ['Horsetail', 'Fern', 'Papaya tree', 'Liverwort'],
    answer: 2,
    explanation:
      'A papaya tree is a flowering plant — it produces flowers and fruits containing seeds. Horsetails, ferns and liverworts are all non-flowering plants that reproduce using spores.',
  },
  {
    id: 'cls-68',
    question:
      'Which of the following is the ODD ONE OUT?',
    options: ['Rose bush', 'Sunflower', 'Orchid', 'Horsetail'],
    answer: 3,
    explanation:
      'A horsetail is the odd one out because it is a non-flowering plant that reproduces using spores. Rose bushes, sunflowers and orchids are all flowering plants that produce flowers and seeds.',
  },
  {
    id: 'cls-69',
    question:
      'A papaya tree and a fern are both plants. What is one important difference between them?',
    options: [
      'Only the papaya tree needs sunlight to grow.',
      'The papaya tree is a flowering plant, but the fern is a non-flowering plant.',
      'Only the fern is a living thing.',
      'The fern is taller than the papaya tree.',
    ],
    answer: 1,
    explanation:
      'A papaya tree is a flowering plant that produces flowers, fruits and seeds. A fern is a non-flowering plant that reproduces using spores and never produces flowers or seeds.',
  },

  // Sorting multiple animals / odd one out
  {
    id: 'cls-70',
    question:
      'A student sorts these animals into groups. Which animal does NOT belong with fish?',
    options: ['Goldfish', 'Sardine', 'Shark', 'Frog'],
    answer: 3,
    explanation:
      'A frog does not belong with fish. Frogs are amphibians, not fish. Goldfish, sardines and sharks are all fish — they have scales and breathe using gills.',
  },
  {
    id: 'cls-71',
    question:
      'Which animal is the ODD ONE OUT in this group: cat, dog, wolf, eagle?',
    options: ['Cat', 'Dog', 'Wolf', 'Eagle'],
    answer: 3,
    explanation:
      'An eagle is the odd one out because it is a bird, not a mammal. Cats, dogs and wolves are all mammals — they have fur and feed their young with milk. An eagle has feathers and lays eggs.',
  },
  {
    id: 'cls-72',
    question:
      'Which of the following groups contains ONLY vertebrates?',
    options: [
      'Frog, earthworm, sparrow',
      'Butterfly, shark, cat',
      'Lizard, eagle, salmon',
      'Snail, dog, turtle',
    ],
    answer: 2,
    explanation:
      'Lizards (reptiles), eagles (birds) and salmon (fish) are all vertebrates with backbones. Earthworms, butterflies and snails are invertebrates without backbones. This makes option C the only group that contains only vertebrates.',
  },
  {
    id: 'cls-73',
    question:
      'Which of the following groups contains ONLY invertebrates?',
    options: [
      'Spider, bee, snail',
      'Frog, crab, worm',
      'Ant, lizard, butterfly',
      'Jellyfish, eagle, slug',
    ],
    answer: 0,
    explanation:
      'Spiders, bees and snails are all invertebrates — none of them have a backbone. Frogs are vertebrates (amphibians), lizards are vertebrates (reptiles), and eagles are vertebrates (birds).',
  },
  {
    id: 'cls-74',
    question:
      'Which two animals below are BOTH mammals?',
    options: [
      'Turtle and cat',
      'Cow and whale',
      'Penguin and horse',
      'Frog and lion',
    ],
    answer: 1,
    explanation:
      'Cows and whales are both mammals — they both have fur or hair and feed their young with milk. Turtles are reptiles, penguins are birds, and frogs are amphibians.',
  },
  {
    id: 'cls-75',
    question:
      'Which two animals below are BOTH reptiles?',
    options: [
      'Frog and lizard',
      'Toad and snake',
      'Tortoise and crocodile',
      'Salamander and turtle',
    ],
    answer: 2,
    explanation:
      'Tortoises and crocodiles are both reptiles — they both have dry, scaly skin and are cold-blooded. Frogs, toads and salamanders are amphibians, not reptiles.',
  },
  {
    id: 'cls-76',
    question:
      'Which two animals below are BOTH amphibians?',
    options: [
      'Frog and toad',
      'Lizard and frog',
      'Salamander and snake',
      'Toad and turtle',
    ],
    answer: 0,
    explanation:
      'Frogs and toads are both amphibians. They both have moist skin, lay their eggs in water and can live both in water and on land. Lizards, snakes and turtles are reptiles.',
  },
  {
    id: 'cls-77',
    question:
      'Which two plants below are BOTH non-flowering plants?',
    options: [
      'Rose and fern',
      'Moss and fern',
      'Orchid and moss',
      'Sunflower and liverwort',
    ],
    answer: 1,
    explanation:
      'Moss and fern are both non-flowering plants — they reproduce using spores and do not produce flowers or seeds. Roses, orchids and sunflowers are all flowering plants.',
  },

  // Reasoning and classification
  {
    id: 'cls-78',
    question:
      'A student says, "A dolphin is a fish because it lives in the sea and has a smooth, streamlined body." Is the student correct?',
    options: [
      'Yes, because it lives in the sea.',
      'Yes, because it has a streamlined body like a fish.',
      'No, because a dolphin is a mammal — it feeds its young with milk and breathes using lungs.',
      'No, because a dolphin is a bird.',
    ],
    answer: 2,
    explanation:
      'The student is wrong. A dolphin is a mammal, not a fish. Where an animal lives does not decide its group. A dolphin breathes using lungs (not gills) and feeds its young with milk — these are mammal characteristics.',
  },
  {
    id: 'cls-79',
    question:
      'Why do scientists classify living things into groups?',
    options: [
      'To make living things easier to name and study.',
      'To count how many animals live in a forest.',
      'To decide which animals are more important.',
      'To find out which animals are the fastest.',
    ],
    answer: 0,
    explanation:
      'Scientists classify living things into groups to make them easier to identify, name and study. When we know which group an animal or plant belongs to, we can predict many things about it, such as how it breathes and how it reproduces.',
  },
  {
    id: 'cls-80',
    question:
      'A student finds an animal with feathers and a beak, but it cannot fly. Which group does it most likely belong to?',
    options: ['Mammals', 'Reptiles', 'Fish', 'Birds'],
    answer: 3,
    explanation:
      'Having feathers and a beak are the key characteristics of birds. The ability to fly is NOT required for an animal to be a bird. Penguins and ostriches are examples of birds that cannot fly.',
  },
  {
    id: 'cls-81',
    question:
      'A student is given an unknown plant. It has green leaves but the teacher says it reproduces by releasing tiny spores into the air. What type of plant is it?',
    options: [
      'A flowering plant, because it has green leaves.',
      'A non-flowering plant, because it reproduces using spores.',
      'A mammal, because it is a living thing.',
      'A fungus, because it releases spores.',
    ],
    answer: 1,
    explanation:
      'Because the plant reproduces using spores, it is a non-flowering plant. Non-flowering plants like ferns and mosses reproduce using spores instead of seeds. Having green leaves alone does not tell us if a plant is flowering or non-flowering.',
  },
  {
    id: 'cls-82',
    question:
      'Which characteristic would you use to decide if an unknown animal is a mammal?',
    options: [
      'Whether it has four legs.',
      'Whether it feeds its young with milk.',
      'Whether it lives on land.',
      'Whether it is large.',
    ],
    answer: 1,
    explanation:
      'Feeding young with milk is the most important characteristic for identifying a mammal. Mammals also have fur or hair. The number of legs, where it lives and its size are not reliable ways to identify a mammal.',
  },
  {
    id: 'cls-83',
    question:
      'A crab lives in the sea and has a hard outer shell but no backbone inside. It should be classified as:',
    options: ['A fish', 'A reptile', 'An invertebrate', 'A mammal'],
    answer: 2,
    explanation:
      'A crab is an invertebrate because it has no backbone. Even though it lives in the sea like fish, it does not have the characteristics of a fish (no gills or scales inside). Any animal without a backbone is an invertebrate.',
  },

  // Common misconceptions
  {
    id: 'cls-84',
    question:
      'A student says a spider is an insect. Which statement correctly explains why the student is WRONG?',
    options: [
      'Spiders do not have eyes, but insects do.',
      'Spiders have eight legs and two body parts, but insects have six legs and three body parts.',
      'Spiders are vertebrates, but insects are invertebrates.',
      'Spiders cannot fly, but all insects can fly.',
    ],
    answer: 1,
    explanation:
      'Spiders are not insects because spiders have eight legs and two body parts (the head-thorax joined together and the abdomen), while insects have six legs and three body parts. Both spiders and insects are invertebrates.',
  },
  {
    id: 'cls-85',
    question:
      'A student says a shark is a mammal because it is very large and lives in the sea. Which statement best explains why the student is WRONG?',
    options: [
      'Sharks are too dangerous to be mammals.',
      'Sharks have scales and breathe using gills, which means they are fish.',
      'Sharks are birds because they lay eggs.',
      'Sharks are reptiles because they are cold-blooded.',
    ],
    answer: 1,
    explanation:
      'A shark is a fish, not a mammal. Sharks have scales and breathe using gills — these are characteristics of fish. The size of an animal or where it lives does not determine its group.',
  },
  {
    id: 'cls-86',
    question:
      'A student thinks a crocodile is an amphibian because it can live both in water and on land. Why is the student WRONG?',
    options: [
      'Crocodiles cannot swim, so they are not amphibians.',
      'Crocodiles are reptiles — they have dry, scaly skin and are cold-blooded, unlike amphibians which have moist skin.',
      'Crocodiles are fish because they live in water.',
      'Crocodiles are mammals because they are large animals.',
    ],
    answer: 1,
    explanation:
      'A crocodile is a reptile, not an amphibian. Crocodiles have dry, scaly skin, while amphibians have moist skin without scales. The ability to live in water and on land is not enough to make an animal an amphibian.',
  },

  // Mixed classification / broader sorting
  {
    id: 'cls-87',
    question:
      'A class draws a table with two columns: "Plants" and "Animals". Where should a mushroom be placed?',
    options: [
      'In the "Plants" column, because it grows in the ground.',
      'In the "Animals" column, because it moves.',
      'In neither column, because mushrooms are not plants or animals.',
      'In both columns, because it shares features of both.',
    ],
    answer: 2,
    explanation:
      'Mushrooms are neither plants nor animals — they belong to a separate group called fungi. Unlike plants, mushrooms cannot make their own food using sunlight. Unlike animals, they do not move around or eat other things.',
  },
  {
    id: 'cls-88',
    question:
      'Which of the following lists contains ONLY flowering plants?',
    options: [
      'Rose, fern, sunflower',
      'Moss, orchid, mango tree',
      'Hibiscus, papaya tree, bougainvillea',
      'Fern, liverwort, horsetail',
    ],
    answer: 2,
    explanation:
      'Hibiscus, papaya trees and bougainvillea are all flowering plants — they all produce flowers and seeds. Ferns, mosses, liverworts and horsetails are non-flowering plants that reproduce with spores.',
  },
  {
    id: 'cls-89',
    question:
      'A teacher asks pupils to group these animals: eagle, salmon, frog, rabbit, lizard. Which group below is correctly named?',
    options: [
      'Eagle and rabbit are both mammals.',
      'Salmon and frog are both fish.',
      'Eagle and salmon are both vertebrates.',
      'Frog and lizard are both amphibians.',
    ],
    answer: 2,
    explanation:
      'Eagles (birds) and salmon (fish) are both vertebrates — they both have a backbone. Rabbits are mammals (not birds). Frogs are amphibians and lizards are reptiles — they are not the same group. Salmon are fish but frogs are amphibians.',
  },
  {
    id: 'cls-90',
    question:
      'Look at these four animals: cat, parrot, gecko, tuna. Which statement about them is CORRECT?',
    options: [
      'The cat and gecko are both cold-blooded.',
      'The parrot and tuna are both fish.',
      'The cat is the only mammal in the group.',
      'The gecko and parrot are both reptiles.',
    ],
    answer: 2,
    explanation:
      'The cat is the only mammal in the group — it has fur and feeds its young with milk. A parrot is a bird, a gecko is a reptile and a tuna is a fish. The gecko is cold-blooded but the cat is warm-blooded.',
  },
]

export default questions
