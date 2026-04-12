import { Question } from '@/lib/types'

const questions: Question[] = [
  {
    id: 'dm-1',
    question:
      'Which property of glass makes it suitable for use as a window pane?',
    options: [
      'It is flexible.',
      'It is transparent.',
      'It is soft.',
      'It floats in water.',
    ],
    answer: 1,
    explanation:
      'Glass is transparent — light can pass through it and we can see clearly through it. This makes it suitable for windows, which allow us to see outside while keeping out wind and rain.',
  },
  {
    id: 'dm-2',
    question:
      'A rubber band can be stretched and then returns to its original shape. This shows that rubber is:',
    options: ['Hard', 'Flexible', 'Transparent', 'Rigid'],
    answer: 1,
    explanation:
      'Rubber is flexible — it can be bent and stretched without breaking. When released, it returns to its original shape. This is different from rigid materials which cannot be bent or stretched easily.',
  },
  {
    id: 'dm-3',
    question:
      'Which of the following materials is a good conductor of heat?',
    options: ['Wood', 'Plastic', 'Metal', 'Rubber'],
    answer: 2,
    explanation:
      'Metal is a good conductor of heat — heat passes through it easily. This is why metal pots and pans are used for cooking. Wood, plastic and rubber are poor conductors (insulators) of heat.',
  },
  {
    id: 'dm-4',
    question:
      'Why are electrical wires made of metal on the inside with a plastic coating on the outside?',
    options: [
      'Metal conducts electricity; plastic insulates and makes the wire safe to touch.',
      'Plastic conducts electricity; metal makes the wire strong.',
      'Both metal and plastic conduct electricity equally.',
      'Plastic is transparent so we can see the metal inside.',
    ],
    answer: 0,
    explanation:
      'Metal is used inside the wire because it is a good conductor of electricity, allowing electricity to flow through. Plastic is wrapped around the metal as it is an insulator — it does not conduct electricity, making the wire safe to handle.',
  },
  {
    id: 'dm-5',
    question:
      'Which material would be MOST suitable for making a raincoat?',
    options: [
      'Cotton fabric',
      'Paper',
      'Waterproof plastic',
      'Wood',
    ],
    answer: 2,
    explanation:
      'Waterproof plastic is suitable for a raincoat because it does not allow water to pass through it. Cotton fabric and paper can absorb water and get wet, making them unsuitable for raincoats.',
  },
  {
    id: 'dm-6',
    question:
      'Which of the following correctly describes a translucent material?',
    options: [
      'Light cannot pass through it at all.',
      'Light passes through it and we can see clearly through it.',
      'Some light passes through it but we cannot see clearly through it.',
      'It reflects all light that hits it.',
    ],
    answer: 2,
    explanation:
      'A translucent material allows some light to pass through, but we cannot see clearly through it. Frosted glass and greaseproof paper are examples of translucent materials. Transparent materials allow clear vision through them, while opaque materials block all light.',
  },
  {
    id: 'dm-7',
    question: 'Which of the following materials is opaque?',
    options: ['Clear glass', 'Frosted glass', 'Wood', 'Clear plastic'],
    answer: 2,
    explanation:
      'Wood is opaque — no light can pass through it. Clear glass and clear plastic are transparent. Frosted glass is translucent.',
  },
  {
    id: 'dm-8',
    question:
      'Why is rubber used to make the soles of shoes?',
    options: [
      'It is transparent and looks nice.',
      'It is hard and rigid.',
      'It is flexible and provides good grip.',
      'It floats on water.',
    ],
    answer: 2,
    explanation:
      'Rubber is used for shoe soles because it is flexible and provides good grip on surfaces. Its flexibility also makes walking comfortable.',
  },
  {
    id: 'dm-9',
    question:
      'A metal spoon becomes hot when left in a bowl of hot soup. What property of metal does this show?',
    options: [
      'Metal is hard.',
      'Metal is a good conductor of heat.',
      'Metal is opaque.',
      'Metal is rigid.',
    ],
    answer: 1,
    explanation:
      'The metal spoon becomes hot because metal is a good conductor of heat. Heat from the soup passes through the metal spoon easily.',
  },
  {
    id: 'dm-10',
    question:
      'Which material would be BEST for making a cutting board?',
    options: ['Rubber', 'Hard wood or hard plastic', 'Glass', 'Paper'],
    answer: 1,
    explanation:
      'Hard wood or hard plastic are good materials for a cutting board because they are hard and durable. Glass could break, rubber would be cut by knives, and paper is too soft and weak.',
  },
  {
    id: 'dm-11',
    question:
      'What property allows plastic wrap to be used to cover food containers?',
    options: [
      'It is hard and rigid.',
      'It is flexible and can stretch to cover different shapes.',
      'It is a good conductor of heat.',
      'It is opaque.',
    ],
    answer: 1,
    explanation:
      'Plastic wrap is flexible and can stretch, which allows it to cover containers of different shapes and sizes tightly. This is the property that makes it useful for covering food.',
  },
  {
    id: 'dm-12',
    question:
      'Which of the following materials SINKS in water?',
    options: ['Wood', 'Rubber', 'Iron', 'Plastic foam'],
    answer: 2,
    explanation:
      'Iron (a metal) sinks in water because it is denser than water. Wood, rubber and plastic foam float in water because they are less dense than water.',
  },
  {
    id: 'dm-13',
    question:
      'Why is glass used to make spectacle lenses?',
    options: [
      'It is flexible.',
      'It is opaque.',
      'It is transparent.',
      'It is very light.',
    ],
    answer: 2,
    explanation:
      'Glass is transparent — light passes through it clearly. This allows people to see through spectacle lenses. The transparency of glass makes it suitable for lenses, windows and bottles.',
  },
  {
    id: 'dm-14',
    question:
      'Which property makes metal suitable for making bridges and buildings?',
    options: [
      'It is flexible.',
      'It is transparent.',
      'It is strong and hard.',
      'It is very light.',
    ],
    answer: 2,
    explanation:
      'Metal is strong and hard, which makes it suitable for building structures like bridges and buildings that need to support heavy loads.',
  },
  {
    id: 'dm-15',
    question:
      'The handle of a metal pot becomes very hot on the stove. What material should the handle be made of instead, and why?',
    options: [
      'Glass, because it is transparent.',
      'Wood or plastic, because they are poor conductors of heat.',
      'Rubber, because it floats on water.',
      'More metal, because it is strong.',
    ],
    answer: 1,
    explanation:
      'The handle should be made of wood or plastic because these materials are poor conductors (insulators) of heat. Heat does not pass through them easily, so the handle will not become too hot to touch safely.',
  },
  {
    id: 'dm-16',
    question:
      'Which of the following correctly describes wood?',
    options: [
      'Wood is transparent and flexible.',
      'Wood is opaque, hard and a poor conductor of heat.',
      'Wood is opaque and a good conductor of electricity.',
      'Wood is translucent and rigid.',
    ],
    answer: 1,
    explanation:
      'Wood is opaque (light cannot pass through it), hard (it maintains its shape) and a poor conductor of heat (heat does not pass through it easily). This is why wood is used for furniture and handles of cooking utensils.',
  },
  {
    id: 'dm-17',
    question:
      'A window is made of frosted glass. What does this tell us about frosted glass?',
    options: ['It is opaque.', 'It is transparent.', 'It is translucent.', 'It is flexible.'],
    answer: 2,
    explanation:
      'Frosted glass is translucent — it allows some light to pass through but you cannot see clearly through it. This provides privacy while still letting light into a room.',
  },
  {
    id: 'dm-18',
    question:
      'Which material is MOST suitable for making a frying pan?',
    options: ['Paper', 'Rubber', 'Metal', 'Plastic'],
    answer: 2,
    explanation:
      'Metal is suitable for making a frying pan because it is a good conductor of heat, allowing heat to spread evenly across the pan to cook food. Paper and rubber would burn, and plastic would melt at high temperatures.',
  },
  {
    id: 'dm-19',
    question:
      'What property of rubber makes it useful for making erasers?',
    options: [
      'It is transparent.',
      'It is hard and rigid.',
      'It is soft and flexible.',
      'It is a good conductor of electricity.',
    ],
    answer: 2,
    explanation:
      'Rubber is soft and flexible, which allows it to rub off pencil marks from paper without tearing the paper. This makes rubber suitable for erasers.',
  },
  {
    id: 'dm-20',
    question:
      'Which of the following is an insulator of electricity?',
    options: ['Copper wire', 'Iron rod', 'Plastic ruler', 'Metal spoon'],
    answer: 2,
    explanation:
      'A plastic ruler is an insulator of electricity — electricity cannot pass through it. Copper, iron and metal are all good conductors of electricity.',
  },
  {
    id: 'dm-21',
    question:
      'Why is cotton fabric used to make towels?',
    options: [
      'It is waterproof.',
      'It is hard and rigid.',
      'It is soft and can absorb water.',
      'It is transparent.',
    ],
    answer: 2,
    explanation:
      'Cotton fabric is used for towels because it is soft (comfortable on skin) and can absorb water well (soaks up water when drying). These properties make it ideal for towels.',
  },
  {
    id: 'dm-22',
    question:
      'A student lists these properties of a material: it is hard, shiny, conducts heat and electricity, and sinks in water. What material is this most likely?',
    options: ['Wood', 'Plastic', 'Rubber', 'Metal'],
    answer: 3,
    explanation:
      'Metal is hard, shiny, conducts both heat and electricity well, and sinks in water. These properties together identify the material as metal.',
  },
  {
    id: 'dm-23',
    question:
      'Which material would be MOST suitable for making a bottle to hold drinks?',
    options: [
      'Paper',
      'Plastic or glass',
      'Rubber',
      'Fabric',
    ],
    answer: 1,
    explanation:
      'Plastic or glass are suitable for drink bottles because they can hold their shape, are waterproof and are safe for holding food and drinks. Paper would get soggy, rubber is too flexible, and fabric cannot hold liquids.',
  },
  {
    id: 'dm-24',
    question:
      'Which of the following materials floats in water?',
    options: ['Iron', 'Glass', 'Wood', 'Rock'],
    answer: 2,
    explanation:
      'Wood floats in water because it is less dense than water. Iron, glass and rock sink in water because they are denser than water.',
  },
  {
    id: 'dm-25',
    question:
      'A student wants to make a kite. She needs a material that is light, flexible and waterproof. Which material is MOST suitable?',
    options: ['Wood', 'Metal', 'Plastic sheet', 'Cotton fabric'],
    answer: 2,
    explanation:
      'A plastic sheet is light, flexible and waterproof — all the properties needed for a kite. Wood and metal are too heavy and rigid, while cotton fabric absorbs water and is not waterproof.',
  },
  {
    id: 'dm-26',
    question:
      'Which of the following correctly matches a material to its property?',
    options: [
      'Glass — flexible',
      'Metal — transparent',
      'Rubber — insulator of electricity',
      'Wood — good conductor of heat',
    ],
    answer: 2,
    explanation:
      'Rubber is an insulator of electricity — electricity does not pass through rubber. Glass is rigid (not flexible), metal is opaque (not transparent), and wood is a poor conductor of heat (not a good conductor).',
  },
  {
    id: 'dm-27',
    question:
      'Why is metal used to make coins?',
    options: [
      'It is transparent.',
      'It is light and flexible.',
      'It is hard, durable and keeps its shape.',
      'It is a good insulator of heat.',
    ],
    answer: 2,
    explanation:
      'Metal is used for coins because it is hard, durable (does not wear out easily) and keeps its shape. Coins need to last a long time and withstand being handled repeatedly.',
  },
  {
    id: 'dm-28',
    question:
      'A student tests which materials block all light. She tests wood, clear glass, frosted glass and metal. Which two materials would block ALL light?',
    options: [
      'Clear glass and frosted glass',
      'Wood and frosted glass',
      'Wood and metal',
      'Frosted glass and metal',
    ],
    answer: 2,
    explanation:
      'Wood and metal are both opaque materials — they block all light. Clear glass is transparent (allows all light through) and frosted glass is translucent (allows some light through).',
  },
  {
    id: 'dm-29',
    question:
      'Which of the following is a property of paper?',
    options: [
      'It is waterproof.',
      'It is hard and rigid like metal.',
      'It is light, flexible and can absorb water.',
      'It is a good conductor of electricity.',
    ],
    answer: 2,
    explanation:
      'Paper is light, flexible (can be folded and bent) and can absorb water (which is why paper gets soggy when wet). Paper is not waterproof, not as hard as metal, and does not conduct electricity.',
  },
  {
    id: 'dm-30',
    question:
      'A teacher asks students to find a material that is transparent, rigid and does not conduct electricity. Which material fits all three properties?',
    options: ['Copper', 'Rubber', 'Clear glass', 'Cotton fabric'],
    answer: 2,
    explanation:
      'Clear glass is transparent (allows light to pass through clearly), rigid (maintains its shape and cannot be bent easily) and does not conduct electricity (it is an insulator). This is why glass is used for light bulbs and electrical fittings where transparency and insulation are needed.',
  },
]

export default questions
