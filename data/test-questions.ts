import { Question } from '@/lib/types'

// 30 brand-new questions — none repeated from practice sets.
// Topics: ~10 Diversity of Living & Non-Living Things (T1),
//          ~10 Classification of Living Things (T2),
//          ~10 Diversity of Materials (T3)

const questions: Question[] = [
  // ── T1: Diversity of Living and Non-Living Things ──────────────────────────
  {
    id: 'test-1',
    topic: 'Diversity of Living and Non-Living Things',
    question:
      'John says that a crystal is a living thing because it can grow bigger over time. Is he correct?',
    options: [
      'Yes, because it grows.',
      'No, because a crystal cannot feed, breathe, reproduce or respond to stimuli the way living things can.',
      'Yes, because it can change shape.',
      'No, because it is found underground.',
    ],
    answer: 1,
    explanation:
      'Although a crystal can grow in size, it does not feed, breathe, reproduce or respond to stimuli the way living things do. To be classified as a living thing, something must show ALL the characteristics of living things.',
  },
  {
    id: 'test-2',
    topic: 'Diversity of Living and Non-Living Things',
    question:
      'A cactus absorbs and stores extra water whenever it rains. This shows that the cactus can:',
    options: [
      'Move from place to place.',
      'Respond to stimuli.',
      'Reproduce.',
      'Shine.',
    ],
    answer: 1,
    explanation:
      'The cactus absorbing water when it rains is an example of responding to a stimulus (the presence of water). Responding to stimuli is a characteristic of living things.',
  },
  {
    id: 'test-3',
    topic: 'Diversity of Living and Non-Living Things',
    question:
      'A hen lays eggs that hatch into chicks. Which characteristic of living things does this show?',
    options: ['Breathe', 'Respond to stimuli', 'Reproduce', 'Feed'],
    answer: 2,
    explanation:
      'Laying eggs that hatch into chicks of the same kind is an example of reproduction. This is one of the characteristics of living things.',
  },
  {
    id: 'test-4',
    topic: 'Diversity of Living and Non-Living Things',
    question: 'Which of the following is an example of a living thing breathing?',
    options: [
      'A fan blowing air around the room.',
      'A dog panting after a run.',
      'Wind moving through the trees.',
      'A vacuum cleaner sucking in air.',
    ],
    answer: 1,
    explanation:
      'A dog panting is an example of a living thing breathing — the dog is taking in oxygen and releasing carbon dioxide. Fans, wind and vacuum cleaners involve moving air but are not examples of living things breathing.',
  },
  {
    id: 'test-5',
    topic: 'Diversity of Living and Non-Living Things',
    question: 'Leather is made from the skin of animals. This means leather is:',
    options: [
      'A living thing.',
      'A non-living thing that was once part of a living thing.',
      'A non-living thing that was never part of a living thing.',
      'Still a living material.',
    ],
    answer: 1,
    explanation:
      'Leather is a non-living thing — it cannot show the characteristics of living things. However, because it comes from animal skin, it was once part of a living thing.',
  },
  {
    id: 'test-6',
    topic: 'Diversity of Living and Non-Living Things',
    question:
      'A Venus flytrap is a plant that closes its leaves to catch insects. Which characteristic does this show?',
    options: ['Move from place to place', 'Reproduce', 'Feed', 'Breathe'],
    answer: 2,
    explanation:
      'A Venus flytrap catching insects is an example of feeding. Living things need to feed to get the energy needed for growth and other activities.',
  },
  {
    id: 'test-7',
    topic: 'Diversity of Living and Non-Living Things',
    question:
      'Which of the following correctly identifies whether the object is living or non-living?',
    options: [
      'A burning candle — living, because it needs air and moves.',
      'A tree — non-living, because it cannot walk.',
      'A bacterium — living, because it can feed, grow and reproduce.',
      'A cloud — living, because it moves and changes shape.',
    ],
    answer: 2,
    explanation:
      'A bacterium is a living thing — it can feed, grow and reproduce. A burning candle needs air and appears to move but cannot reproduce or feed like a living thing. A tree IS living. A cloud is non-living.',
  },
  {
    id: 'test-8',
    topic: 'Diversity of Living and Non-Living Things',
    question:
      "What does it mean when we say a living thing can 'respond to stimuli'?",
    options: [
      'It can make its own food.',
      'It can react to changes in its surroundings.',
      'It can produce young of its own kind.',
      'It can absorb water from the soil.',
    ],
    answer: 1,
    explanation:
      'Responding to stimuli means reacting to changes in the surroundings. For example, a plant growing towards light, or an animal running away from danger, are examples of responding to stimuli.',
  },
  {
    id: 'test-9',
    topic: 'Diversity of Living and Non-Living Things',
    question:
      'Which of the following is NOT a characteristic of all living things?',
    options: ['Feed', 'Reproduce', 'Shine', 'Grow'],
    answer: 2,
    explanation:
      'Shining is not a characteristic of living things. All living things can feed, reproduce and grow. Some non-living things, like stars, shine.',
  },
  {
    id: 'test-10',
    topic: 'Diversity of Living and Non-Living Things',
    question:
      'A student lists these things: iron nail, grass, cloud, sunflower, rock, tadpole. How many of these are living things?',
    options: ['Two', 'Three', 'Four', 'Five'],
    answer: 1,
    explanation:
      'Grass, sunflower and tadpole are living things — three in total. Iron nails, clouds and rocks are non-living things. So three items in the list are living things.',
  },

  // ── T2: Classification of Living Things ───────────────────────────────────
  {
    id: 'test-11',
    topic: 'Classification of Living Things',
    question: 'Which of the following is a non-flowering plant?',
    options: ['Papaya tree', 'Fern', 'Chilli plant', 'Orchid'],
    answer: 1,
    explanation:
      'A fern is a non-flowering plant. It reproduces using spores, not flowers and seeds. Papaya trees, chilli plants and orchids are all flowering plants.',
  },
  {
    id: 'test-12',
    topic: 'Classification of Living Things',
    question:
      'A student finds an animal with dry, scaly skin, four legs and lays eggs on land. Which group does it belong to?',
    options: ['Amphibian', 'Fish', 'Mammal', 'Reptile'],
    answer: 3,
    explanation:
      'An animal with dry, scaly skin that lays eggs on land is a reptile. Amphibians have moist skin without scales, fish live in water and breathe with gills, and mammals do not have scales.',
  },
  {
    id: 'test-13',
    topic: 'Classification of Living Things',
    question: 'Which of the following animals is warm-blooded?',
    options: ['Turtle', 'Frog', 'Snake', 'Pigeon'],
    answer: 3,
    explanation:
      'A pigeon is a bird, and birds are warm-blooded. Their body temperature stays the same regardless of the surrounding temperature. Turtles (reptiles), frogs (amphibians) and snakes (reptiles) are all cold-blooded animals.',
  },
  {
    id: 'test-14',
    topic: 'Classification of Living Things',
    question:
      'A student finds two animals: one has feathers and lays eggs; the other has fur and gives birth to live young. How should they be classified?',
    options: [
      'Both are birds.',
      'Both are mammals.',
      'The first is a bird; the second is a mammal.',
      'The first is a reptile; the second is a mammal.',
    ],
    answer: 2,
    explanation:
      'An animal with feathers that lays eggs is a bird. An animal with fur that gives birth to live young is a mammal. These are key characteristics of each group.',
  },
  {
    id: 'test-15',
    topic: 'Classification of Living Things',
    question:
      'Why is a seahorse classified as a fish even though it does not look like a typical fish?',
    options: [
      'It lives in the sea.',
      'It has scales and breathes using gills.',
      'It can swim.',
      'It is small.',
    ],
    answer: 1,
    explanation:
      'A seahorse is classified as a fish because it has scales and breathes using gills. Classification is based on characteristics, not appearance.',
  },
  {
    id: 'test-16',
    topic: 'Classification of Living Things',
    question: 'Which of the following animals is an invertebrate?',
    options: ['Eagle', 'Salmon', 'Octopus', 'Frog'],
    answer: 2,
    explanation:
      'An octopus is an invertebrate — it does not have a backbone. Eagles (birds), salmon (fish) and frogs (amphibians) are all vertebrates with backbones.',
  },
  {
    id: 'test-17',
    topic: 'Classification of Living Things',
    question: 'What do mammals and birds have in common?',
    options: [
      'Both lay eggs.',
      'Both are warm-blooded.',
      'Both have feathers.',
      'Both have scales.',
    ],
    answer: 1,
    explanation:
      'Both mammals and birds are warm-blooded — their body temperature remains constant regardless of the surrounding temperature. Mammals give birth to live young (most), while birds lay eggs. Only birds have feathers, and neither mammals nor birds have scales.',
  },
  {
    id: 'test-18',
    topic: 'Classification of Living Things',
    question:
      'A student classifies a dolphin as a fish because it lives in the ocean and can swim. Why is this classification incorrect?',
    options: [
      'Dolphins are too big to be fish.',
      'Dolphins are reptiles.',
      'Dolphins are mammals — they breathe air, have hair and feed their young with milk.',
      'Dolphins cannot lay eggs.',
    ],
    answer: 2,
    explanation:
      'Dolphins are mammals, not fish. They breathe air through a blowhole, have hair (though very little), are warm-blooded and feed their young with milk. Classification is based on characteristics, not where an animal lives.',
  },
  {
    id: 'test-19',
    topic: 'Classification of Living Things',
    question:
      'A moss plant and a fern plant both reproduce using spores. Which group do they both belong to?',
    options: [
      'Flowering plants',
      'Non-flowering plants',
      'Vertebrates',
      'Invertebrates',
    ],
    answer: 1,
    explanation:
      'Mosses and ferns are both non-flowering plants. They do not produce flowers or seeds. Instead, they reproduce using spores.',
  },
  {
    id: 'test-20',
    topic: 'Classification of Living Things',
    question:
      'Which of the following correctly matches an animal to its group?',
    options: [
      'Frog — reptile',
      'Bat — bird',
      'Shark — fish',
      'Earthworm — vertebrate',
    ],
    answer: 2,
    explanation:
      'A shark is correctly classified as a fish — it lives in water, has scales and breathes using gills. Frogs are amphibians (not reptiles), bats are mammals (not birds), and earthworms are invertebrates (not vertebrates).',
  },

  // ── T3: Diversity of Materials ─────────────────────────────────────────────
  {
    id: 'test-21',
    topic: 'Diversity of Materials',
    question:
      'A builder needs a material that is strong, waterproof and will not rot for a water pipe. Which material is MOST suitable?',
    options: ['Paper', 'Wood', 'Plastic', 'Rubber'],
    answer: 2,
    explanation:
      'Plastic is strong, waterproof and does not rot when in contact with water. Paper would disintegrate, wood would rot over time, and rubber is too soft and flexible for water pipes.',
  },
  {
    id: 'test-22',
    topic: 'Diversity of Materials',
    question:
      'Which of the following correctly describes the difference between a conductor and an insulator of heat?',
    options: [
      'A conductor lets heat pass through easily; an insulator slows down or blocks the flow of heat.',
      'A conductor blocks heat; an insulator lets heat pass through.',
      'Both conductors and insulators allow heat to pass through equally.',
      'Conductors are only metals; insulators are only plastics.',
    ],
    answer: 0,
    explanation:
      'A conductor of heat allows heat to pass through it easily (like metal). An insulator of heat slows down or blocks the flow of heat (like wood, plastic and rubber). This is why pot handles are made of insulators.',
  },
  {
    id: 'test-23',
    topic: 'Diversity of Materials',
    question:
      'Which property would you test to find out if a material is transparent, translucent or opaque?',
    options: [
      'Whether it sinks or floats in water.',
      'Whether it conducts electricity.',
      'Whether light passes through it.',
      'Whether it is hard or soft.',
    ],
    answer: 2,
    explanation:
      'To find out if a material is transparent, translucent or opaque, you test whether and how much light passes through it. Transparent materials allow all light through, translucent allow some, and opaque allow none.',
  },
  {
    id: 'test-24',
    topic: 'Diversity of Materials',
    question:
      'A glass bottle breaks when dropped on a hard floor, but a plastic bottle does not. What property does this show about plastic compared to glass?',
    options: [
      'Plastic is more transparent than glass.',
      'Plastic is less brittle than glass.',
      'Plastic conducts electricity better than glass.',
      'Plastic is heavier than glass.',
    ],
    answer: 1,
    explanation:
      'Plastic is less brittle than glass — it does not break as easily when dropped. Glass is more brittle and shatters on impact. This is why plastic is often preferred for items that might be dropped.',
  },
  {
    id: 'test-25',
    topic: 'Diversity of Materials',
    question:
      'Which of the following materials can be bent without breaking?',
    options: ['Glass', 'Rock', 'Rubber', 'Iron bar'],
    answer: 2,
    explanation:
      'Rubber can be bent, stretched and twisted without breaking because it is flexible. Glass and rock are brittle and would crack or break. An iron bar is very rigid and hard to bend.',
  },
  {
    id: 'test-26',
    topic: 'Diversity of Materials',
    question:
      'A student lists these properties of a material: transparent, rigid, and a poor conductor of electricity. Which material does this describe?',
    options: ['Metal', 'Rubber', 'Clear glass', 'Wood'],
    answer: 2,
    explanation:
      'Clear glass is transparent (you can see clearly through it), rigid (it cannot be bent) and a poor conductor of electricity (it is an insulator). These three properties together point to clear glass.',
  },
  {
    id: 'test-27',
    topic: 'Diversity of Materials',
    question:
      'Why are cooking pots made of metal, but their handles are made of wood or plastic?',
    options: [
      'Metal is cheaper; wood is more expensive.',
      'Metal is a good conductor of heat for cooking; wood and plastic are poor conductors so the handle stays cool enough to hold.',
      'Metal is transparent; wood is opaque.',
      'Metal floats; wood sinks.',
    ],
    answer: 1,
    explanation:
      'The pot is made of metal because metal conducts heat well, allowing food to be cooked evenly. The handle is made of wood or plastic because they are poor conductors (insulators) of heat, keeping the handle cool enough to hold safely.',
  },
  {
    id: 'test-28',
    topic: 'Diversity of Materials',
    question:
      "A student connects different materials in a simple circuit with a light bulb. The bulb lights up for copper wire but not for a rubber band. What does this tell us?",
    options: [
      'Copper is an insulator and rubber is a conductor.',
      'Copper is a conductor of electricity and rubber is an insulator.',
      'Both copper and rubber conduct electricity equally.',
      'Neither copper nor rubber conducts electricity.',
    ],
    answer: 1,
    explanation:
      'When the bulb lights up, electricity is flowing through the material — the material is a conductor. Copper wire is a good conductor. When the bulb does not light up (rubber band), the material does not allow electricity to flow — it is an insulator.',
  },
  {
    id: 'test-29',
    topic: 'Diversity of Materials',
    question:
      'Which of the following is an example of choosing a material based on its properties?',
    options: [
      'Using glass for a window because glass is cheap.',
      'Using rubber for a car tyre because rubber is flexible and provides grip.',
      'Using wood for a window frame because wood looks nice.',
      'Using metal for a bag because metal is shiny.',
    ],
    answer: 1,
    explanation:
      'Using rubber for a car tyre because of its flexibility and grip is a correct example of choosing a material based on its properties. The choice is directly linked to the properties of rubber that make it suitable for that use.',
  },
  {
    id: 'test-30',
    topic: 'Diversity of Materials',
    question:
      'A student finds a material that is flexible, waterproof and transparent. Which material is this most likely to be?',
    options: ['Wood', 'Metal', 'Clear plastic sheet', 'Glass'],
    answer: 2,
    explanation:
      'A clear plastic sheet is flexible (can be bent), waterproof (does not let water through) and transparent (you can see through it). Wood is opaque and not flexible. Metal is opaque. Glass is transparent but rigid and can crack.',
  },
]

export default questions
