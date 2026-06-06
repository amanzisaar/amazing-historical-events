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
];
