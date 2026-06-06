type HistoricalEvent = {
  id: number;
  slug: string;
  title: string;
  continent: string;
  country: string;
  year: number;
  category: string;

  summary: string;
  story: string;

  causes: string[];
  consequences: string[];
  keyFigures: string[];

  significance: string;
  interestingFacts: string[];

  heroImage: string;
};
export const events: HistoricalEvent[] = [
  {
    id: 1,

    slug: "french-revolution",

    title: "French Revolution",

    continent: "Europe",

    country: "France",

    year: 1789,

    category: "Revolution",

    summary:
      "A political and social revolution that transformed France and Europe.",

    story:
      "The French Revolution began in 1789 and dramatically changed the political structure of France.",

    keyFigures: [
      "Louis XVI",
      "Marie Antoinette",
      "Maximilien Robespierre",
      "Napoleon Bonaparte",
    ],

    causes: [
      "Financial crisis",
      "Heavy taxation",
      "Social inequality",
      "Enlightenment ideas",
    ],

    consequences: [
      "End of monarchy",
      "Rise of republicanism",
      "Political instability",
      "Rise of Napoleon",
    ],
    significance:
      "The French Revolution inspired democratic movements across Europe and permanently changed political history.",

    interestingFacts: [
      "The revolution introduced the metric system.",
      "The guillotine became a symbol of the Reign of Terror.",
    ],

    heroImage: "/images/french-revolution.png",
  },

  {
    id: 2,

    slug: "fall-of-constantinople",

    title: "Fall of Constantinople",

    continent: "Europe",

    country: "Ottoman Empire",

    year: 1453,

    category: "War",

    summary:
      "The capture of Constantinople marked the end of the Byzantine Empire.",

    story:
      "In 1453 Sultan Mehmed II captured Constantinople and ended the Byzantine Empire.",

    keyFigures: ["Mehmed II", "Constantine XI"],

    causes: [
      "Ottoman expansion",
      "Weak Byzantine Empire",
      "Strategic importance of Constantinople",
    ],

    consequences: [
      "End of Byzantine Empire",
      "Ottoman dominance",
      "Shift in trade routes",
    ],
    significance:
      "The fall of Constantinople marked the end of the medieval era and strengthened Ottoman power.",

    interestingFacts: [
      "The Ottomans used massive cannons during the siege.",
      "Constantinople later became Istanbul.",
    ],

    heroImage: "/images/constantinople.png",
  },

  {
    id: 3,

    slug: "battle-of-plassey",

    title: "Battle of Plassey",

    continent: "Asia",

    country: "India",

    year: 1757,

    category: "Battle",

    summary: "A decisive battle that established British influence in India.",

    story:
      "The Battle of Plassey was fought between the British East India Company and Siraj-ud-Daulah.",

    keyFigures: ["Robert Clive", "Siraj-ud-Daulah", "Mir Jafar"],

    causes: [
      "Trade disputes",
      "Political rivalry",
      "East India Company ambitions",
    ],

    consequences: [
      "British control in Bengal",
      "Expansion of British influence",
      "Beginning of colonial rule",
    ],
    significance:
      "The battle laid the foundation of British rule in India for nearly 200 years.",

    interestingFacts: [
      "The battle lasted less than a day.",
      "Mir Jafar's betrayal played a crucial role in the British victory.",
    ],

    heroImage: "/images/plassey.png",
  },
  {
  id: 4,
  slug: "american-revolution",
  title: "American Revolution",
  continent: "North America",
  country: "United States",
  year: 1775,
  category: "Revolution",

  summary:
    "The struggle through which the American colonies gained independence from Britain.",

  story:
    "The American Revolution began after growing tensions between Britain and its thirteen colonies. Colonists opposed taxation without representation and demanded greater self-government. The war eventually led to the creation of the United States.",

  causes: [
    "Taxation without representation",
    "British control over colonies",
    "Desire for self-government"
  ],

  consequences: [
    "Independence of the United States",
    "Weakening of British authority in America",
    "Inspiration for future revolutions"
  ],

  keyFigures: [
    "George Washington",
    "Thomas Jefferson",
    "King George III"
  ],

  significance:
    "Created the United States and inspired democratic movements worldwide.",

  interestingFacts: [
    "The Declaration of Independence was signed in 1776.",
    "France helped the colonies defeat Britain."
  ],

  heroImage: "/images/american-revolution.jpg"
},
{
  id: 5,
  slug: "industrial-revolution",
  title: "Industrial Revolution",
  continent: "Europe",
  country: "United Kingdom",
  year: 1760,
  category: "Economic",

  summary:
    "A period of rapid industrial growth that transformed economies and societies.",

  story:
    "Beginning in Britain, new machines and factories revolutionized production. Industries expanded rapidly, cities grew, and transportation improved dramatically.",

  causes: [
    "Technological innovation",
    "Access to coal and iron",
    "Growing global trade"
  ],

  consequences: [
    "Urbanization",
    "Factory system",
    "Economic growth"
  ],

  keyFigures: [
    "James Watt",
    "Richard Arkwright"
  ],

  significance:
    "Changed the way humans work, live, and produce goods.",

  interestingFacts: [
    "The steam engine transformed transportation.",
    "Factories replaced many traditional workshops."
  ],

  heroImage: "/images/industrial-revolution.jpg"
},
{
  id: 6,
  slug: "russian-revolution",
  title: "Russian Revolution",
  continent: "Europe",
  country: "Russia",
  year: 1917,
  category: "Revolution",

  summary:
    "The revolution that overthrew the Russian monarchy and established communist rule.",

  story:
    "Economic hardship, military failures, and public dissatisfaction led to the collapse of the Romanov dynasty. The Bolsheviks seized power and created the Soviet Union.",

  causes: [
    "World War I losses",
    "Economic crisis",
    "Political repression"
  ],

  consequences: [
    "End of the Romanov dynasty",
    "Creation of the Soviet Union",
    "Spread of communism"
  ],

  keyFigures: [
    "Vladimir Lenin",
    "Nicholas II",
    "Leon Trotsky"
  ],

  significance:
    "One of the most influential political revolutions in modern history.",

  interestingFacts: [
    "The Soviet Union emerged after the revolution.",
    "The Romanov family was executed in 1918."
  ],

  heroImage: "/images/russian-revolution.jpg"
},
{
  id: 7,
  slug: "world-war-i",
  title: "World War I",
  continent: "Europe",
  country: "Multiple Nations",
  year: 1914,
  category: "War",

  summary:
    "A global conflict that reshaped Europe and the modern world.",

  story:
    "Triggered by the assassination of Archduke Franz Ferdinand, World War I involved major powers across Europe and beyond, resulting in unprecedented destruction.",

  causes: [
    "Alliance systems",
    "Militarism",
    "Nationalism"
  ],

  consequences: [
    "Collapse of empires",
    "Treaty of Versailles",
    "Political instability"
  ],

  keyFigures: [
    "Franz Ferdinand",
    "Kaiser Wilhelm II",
    "Woodrow Wilson"
  ],

  significance:
    "Redrew political boundaries and set the stage for World War II.",

  interestingFacts: [
    "More than 16 million people died.",
    "Trench warfare became a defining feature."
  ],

  heroImage: "/images/world-war-1.jpg"
},
{
  id: 8,
  slug: "world-war-ii",
  title: "World War II",
  continent: "Europe",
  country: "Multiple Nations",
  year: 1939,
  category: "War",

  summary:
    "The deadliest conflict in human history.",

  story:
    "World War II began when Germany invaded Poland. The conflict spread across continents and ended with the defeat of the Axis powers.",

  causes: [
    "Treaty of Versailles",
    "Rise of fascism",
    "Expansionist policies"
  ],

  consequences: [
    "United Nations formation",
    "Cold War",
    "Decolonization movements"
  ],

  keyFigures: [
    "Winston Churchill",
    "Adolf Hitler",
    "Franklin D. Roosevelt"
  ],

  significance:
    "Reshaped global politics and international relations.",

  interestingFacts: [
    "Over 60 million people died.",
    "The war ended in 1945."
  ],

  heroImage: "/images/world-war-2.jpg"
},
];
