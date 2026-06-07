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

  relatedEventSlugs: string[];
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
    relatedEventSlugs: [
      "american-revolution",
      "industrial-revolution",
      "russian-revolution",
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
    relatedEventSlugs: [],
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
      "In 1757, tensions between the British East India Company and the Nawab of Bengal reached a breaking point. Robert Clive formed secret alliances with dissatisfied nobles, including Mir Jafar. During the Battle of Plassey, betrayal within the Nawab's camp weakened his army and allowed the British to achieve a decisive victory. The battle transformed a trading company into a political power and marked the beginning of British dominance in India.",

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
    relatedEventSlugs: [],
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
      "Desire for self-government",
    ],

    consequences: [
      "Independence of the United States",
      "Weakening of British authority in America",
      "Inspiration for future revolutions",
    ],

    keyFigures: ["George Washington", "Thomas Jefferson", "King George III"],

    significance:
      "Created the United States and inspired democratic movements worldwide.",

    interestingFacts: [
      "The Declaration of Independence was signed in 1776.",
      "France helped the colonies defeat Britain.",
    ],
    relatedEventSlugs: ["french-revolution", "american-civil-war"],

    heroImage: "/images/american-revolution.png",
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
      "Growing global trade",
    ],

    consequences: ["Urbanization", "Factory system", "Economic growth"],

    keyFigures: ["James Watt", "Richard Arkwright"],

    significance: "Changed the way humans work, live, and produce goods.",

    interestingFacts: [
      "The steam engine transformed transportation.",
      "Factories replaced many traditional workshops.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/industrial-revolution.png",
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

    causes: ["World War I losses", "Economic crisis", "Political repression"],

    consequences: [
      "End of the Romanov dynasty",
      "Creation of the Soviet Union",
      "Spread of communism",
    ],

    keyFigures: ["Vladimir Lenin", "Nicholas II", "Leon Trotsky"],

    significance:
      "One of the most influential political revolutions in modern history.",

    interestingFacts: [
      "The Soviet Union emerged after the revolution.",
      "The Romanov family was executed in 1918.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/russian-revolution.png",
  },
  {
    id: 7,
    slug: "world-war-i",
    title: "World War I",
    continent: "Europe",
    country: "Multiple Nations",
    year: 1914,
    category: "War",

    summary: "A global conflict that reshaped Europe and the modern world.",

    story:
      "Triggered by the assassination of Archduke Franz Ferdinand, World War I involved major powers across Europe and beyond, resulting in unprecedented destruction.",

    causes: ["Alliance systems", "Militarism", "Nationalism"],

    consequences: [
      "Collapse of empires",
      "Treaty of Versailles",
      "Political instability",
    ],

    keyFigures: ["Franz Ferdinand", "Kaiser Wilhelm II", "Woodrow Wilson"],

    significance:
      "Redrew political boundaries and set the stage for World War II.",

    interestingFacts: [
      "More than 16 million people died.",
      "Trench warfare became a defining feature.",
    ],
    relatedEventSlugs: ["world-war-ii", "russian-revolution"],

    heroImage: "/images/world-war-1.png",
  },
  {
    id: 8,
    slug: "world-war-ii",
    title: "World War II",
    continent: "Europe",
    country: "Multiple Nations",
    year: 1939,
    category: "War",

    summary: "The deadliest conflict in human history.",

    story:
      "World War II began when Germany invaded Poland. The conflict spread across continents and ended with the defeat of the Axis powers.",

    causes: [
      "Treaty of Versailles",
      "Rise of fascism",
      "Expansionist policies",
    ],

    consequences: [
      "United Nations formation",
      "Cold War",
      "Decolonization movements",
    ],

    keyFigures: ["Winston Churchill", "Adolf Hitler", "Franklin D. Roosevelt"],

    significance: "Reshaped global politics and international relations.",

    interestingFacts: [
      "Over 60 million people died.",
      "The war ended in 1945.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/world-war-2.png",
  },
  {
    id: 9,
    slug: "mongol-conquests",
    title: "Mongol Conquests",
    continent: "Asia",
    country: "Mongol Empire",
    year: 1206,
    category: "War",

    summary:
      "The military campaigns that created the largest contiguous land empire in history.",

    story:
      "Genghis Khan united the Mongol tribes and launched a series of conquests that stretched from China to Eastern Europe. Mongol armies used speed, discipline, and psychological warfare to defeat larger forces.",

    causes: ["Tribal unification", "Need for expansion", "Military innovation"],

    consequences: [
      "Creation of the Mongol Empire",
      "Expansion of trade",
      "Cultural exchange",
    ],

    keyFigures: ["Genghis Khan", "Kublai Khan"],

    significance: "Connected Europe and Asia through trade and conquest.",

    interestingFacts: [
      "The Mongol Empire became the largest contiguous empire in history.",
      "Messages could travel rapidly through a relay system.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/mongol-conquests.png",
  },
  {
    id: 10,
    slug: "meiji-restoration",
    title: "Meiji Restoration",
    continent: "Asia",
    country: "Japan",
    year: 1868,
    category: "Political",

    summary: "The transformation of Japan into a modern industrial state.",

    story:
      "The Meiji government ended feudal rule and rapidly modernized Japan through industrialization, military reforms, and education.",

    causes: [
      "Western pressure",
      "Weak Tokugawa rule",
      "Need for modernization",
    ],

    consequences: [
      "Industrial growth",
      "Modern military",
      "Economic transformation",
    ],

    keyFigures: ["Emperor Meiji", "Saigo Takamori"],

    significance: "Laid the foundation of modern Japan.",

    interestingFacts: [
      "The samurai class lost many traditional privileges.",
      "Japan industrialized in only a few decades.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/meiji-restoration.png",
  },
  {
    id: 11,
    slug: "partition-of-india",
    title: "Partition of India",
    continent: "Asia",
    country: "India",
    year: 1947,
    category: "Political",

    summary: "The division of British India into India and Pakistan.",

    story:
      "As British rule ended, India was partitioned into two independent states. Massive migrations and communal violence followed.",

    causes: [
      "Religious tensions",
      "British withdrawal",
      "Political disagreements",
    ],

    consequences: [
      "Mass migration",
      "Creation of India and Pakistan",
      "Long-term regional tensions",
    ],

    keyFigures: ["Mahatma Gandhi", "Jawaharlal Nehru", "Muhammad Ali Jinnah"],

    significance: "One of the largest population movements in history.",

    interestingFacts: [
      "More than 10 million people migrated.",
      "The partition occurred in the same year as independence.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/partition-of-india.png",
  },
  {
    id: 12,
    slug: "opium-wars",
    title: "Opium Wars",
    continent: "Asia",
    country: "China",
    year: 1839,
    category: "War",

    summary: "Conflicts between China and Britain over trade and opium.",

    story:
      "Britain's opium trade in China led to conflict with the Qing government. The wars exposed China's military weakness and increased foreign influence.",

    causes: ["Opium trade", "Trade disputes", "Imperial ambitions"],

    consequences: [
      "Unequal treaties",
      "Loss of Hong Kong",
      "Foreign influence in China",
    ],

    keyFigures: ["Lin Zexu", "Queen Victoria"],

    significance: "Marked the beginning of China's 'Century of Humiliation'.",

    interestingFacts: [
      "Hong Kong was ceded to Britain.",
      "The wars changed East Asian politics.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/opium-wars.png",
  },
  {
    id: 13,
    slug: "korean-war",
    title: "Korean War",
    continent: "Asia",
    country: "Korea",
    year: 1950,
    category: "War",

    summary: "A Cold War conflict between North and South Korea.",

    story:
      "North Korea invaded South Korea in 1950. United Nations forces and China became involved, creating a major Cold War confrontation.",

    causes: ["Division of Korea", "Cold War tensions", "Political rivalry"],

    consequences: [
      "Millions of casualties",
      "Continued division of Korea",
      "Military buildup in East Asia",
    ],

    keyFigures: ["Kim Il-sung", "Douglas MacArthur"],

    significance: "One of the first major conflicts of the Cold War.",

    interestingFacts: [
      "The war technically never ended with a peace treaty.",
      "The Demilitarized Zone still exists today.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/korean-war.png",
  },
  {
    id: 14,
    slug: "apollo-11-moon-landing",
    title: "Apollo 11 Moon Landing",
    continent: "Global",
    country: "United States",
    year: 1969,
    category: "Exploration",

    summary: "The first successful human landing on the Moon.",

    story:
      "Apollo 11 fulfilled President Kennedy's goal of landing a man on the Moon. Neil Armstrong and Buzz Aldrin landed while Michael Collins remained in lunar orbit.",

    causes: ["Space Race", "Cold War competition", "Scientific ambition"],

    consequences: [
      "Advances in space technology",
      "National prestige",
      "Future space missions",
    ],

    keyFigures: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"],

    significance: "One of humanity's greatest technological achievements.",

    interestingFacts: [
      "Armstrong's first step was broadcast worldwide.",
      "Apollo 11 landed on July 20, 1969.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/apollo-11-moon-landing.png",
  },
  {
    id: 15,
    slug: "cold-war",
    title: "Cold War",
    continent: "Global",
    country: "United States & Soviet Union",
    year: 1947,
    category: "Political",

    summary:
      "A decades-long rivalry between the United States and the Soviet Union.",

    story:
      "Following World War II, the world's two superpowers competed through military alliances, espionage, economic influence, and proxy wars.",

    causes: [
      "Ideological differences",
      "Post-war tensions",
      "Power competition",
    ],

    consequences: ["Nuclear arms race", "Space Race", "Proxy wars"],

    keyFigures: ["Joseph Stalin", "Harry Truman", "Ronald Reagan"],

    significance: "Defined global politics for nearly half a century.",

    interestingFacts: [
      "The superpowers never fought directly.",
      "The conflict lasted over 40 years.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/cold-war.png",
  },
  {
    id: 16,
    slug: "cuban-missile-crisis",
    title: "Cuban Missile Crisis",
    continent: "North America",
    country: "Cuba",
    year: 1962,
    category: "Political",

    summary: "The closest the world came to nuclear war.",

    story:
      "The Soviet Union secretly deployed nuclear missiles to Cuba. The United States responded with a naval blockade, leading to a tense standoff.",

    causes: [
      "Cold War tensions",
      "Nuclear competition",
      "Cuban alliance with USSR",
    ],

    consequences: [
      "Removal of missiles",
      "Improved communication channels",
      "Reduced nuclear tensions",
    ],

    keyFigures: ["John F. Kennedy", "Nikita Khrushchev", "Fidel Castro"],

    significance: "Prevented a potential nuclear conflict.",

    interestingFacts: [
      "The crisis lasted 13 days.",
      "Many historians consider it the most dangerous moment of the Cold War.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/cuban-missile-crisis.png",
  },
  {
    id: 17,
    slug: "fall-of-berlin-wall",
    title: "Fall of the Berlin Wall",
    continent: "Europe",
    country: "Germany",
    year: 1989,
    category: "Political",

    summary: "The symbolic end of Cold War divisions in Europe.",

    story:
      "Mass protests and political reforms led East Germany to open border crossings, allowing Berliners to dismantle the wall.",

    causes: ["Public protests", "Political reforms", "Economic pressures"],

    consequences: [
      "German reunification",
      "Collapse of communist regimes",
      "End of Cold War tensions",
    ],

    keyFigures: ["Mikhail Gorbachev", "Helmut Kohl"],

    significance: "A symbol of freedom and political change.",

    interestingFacts: [
      "Thousands gathered at the wall on the night it opened.",
      "Pieces of the wall are displayed worldwide.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/fall-of-berlin-wall.png",
  },
  {
    id: 18,
    slug: "internet-revolution",
    title: "Internet Revolution",
    continent: "Global",
    country: "Global",
    year: 1990,
    category: "Technology",

    summary:
      "The rise of the internet transformed communication and information sharing.",

    story:
      "The development of the World Wide Web and widespread internet access reshaped business, education, entertainment, and everyday life.",

    causes: [
      "Advances in computing",
      "Networking technology",
      "Research collaboration",
    ],

    consequences: [
      "Global connectivity",
      "Digital economy",
      "Information revolution",
    ],

    keyFigures: ["Tim Berners-Lee", "Vint Cerf"],

    significance: "Changed nearly every aspect of modern life.",

    interestingFacts: [
      "The World Wide Web launched in 1991.",
      "Billions of people now use the internet.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/internet-revolution.png",
  },
  {
    id: 19,

    slug: "american-civil-war",

    title: "American Civil War",

    continent: "North America",

    country: "United States",

    year: 1861,

    category: "War",

    summary:
      "A devastating conflict between the Northern and Southern states that determined the future of the United States.",

    story:
      "The American Civil War began in 1861 after several Southern states seceded from the United States following the election of Abraham Lincoln. The Confederacy sought to preserve slavery and states' rights, while the Union fought to maintain the nation. Over four years, massive battles such as Gettysburg and Antietam caused enormous casualties. The war ended in 1865 with the defeat of the Confederacy, preserving the Union and leading to the abolition of slavery.",

    causes: [
      "Slavery",
      "States' rights disputes",
      "Economic differences between North and South",
      "Election of Abraham Lincoln",
    ],

    consequences: [
      "Abolition of slavery",
      "Preservation of the United States",
      "Economic destruction in the South",
      "Beginning of Reconstruction",
    ],

    keyFigures: [
      "Abraham Lincoln",
      "Ulysses S. Grant",
      "Robert E. Lee",
      "Jefferson Davis",
    ],

    significance:
      "The war preserved the United States as a single nation and ended legal slavery, fundamentally reshaping American society.",

    interestingFacts: [
      "More Americans died in the Civil War than in any other U.S. war.",
      "The Battle of Gettysburg is often considered the turning point of the conflict.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/american-civil-war.png",
  },
  {
    id: 20,
    slug: "chernobyl-disaster",
    title: "Chernobyl Disaster",
    continent: "Europe",
    country: "Ukraine",
    year: 1986,
    category: "Disaster",

    summary: "The worst nuclear power plant accident in history.",

    story:
      "A reactor explosion released radioactive material across Europe and forced the evacuation of thousands of people.",

    causes: ["Reactor design flaws", "Human error", "Failed safety test"],

    consequences: ["Evacuations", "Health concerns", "Nuclear policy changes"],

    keyFigures: ["Valery Legasov", "Mikhail Gorbachev"],

    significance: "Changed public attitudes toward nuclear power.",

    interestingFacts: [
      "The exclusion zone remains largely uninhabited.",
      "The disaster affected multiple countries.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/chernobyl-disaster.png",
  },
  {
    id: 21,

    slug: "chinese-communist-revolution",

    title: "Chinese Communist Revolution",

    continent: "Asia",

    country: "China",

    year: 1949,

    category: "Revolution",

    summary:
      "The victory of the Chinese Communist Party that led to the creation of the People's Republic of China.",

    story:
      "After decades of civil war, Mao Zedong's Communist forces defeated Chiang Kai-shek's Nationalists. On October 1, 1949, Mao proclaimed the People's Republic of China in Beijing, fundamentally transforming Chinese society and politics.",

    causes: [
      "Chinese Civil War",
      "Weak Nationalist government",
      "Peasant support for Communists",
    ],

    consequences: [
      "Creation of the People's Republic of China",
      "Nationalist retreat to Taiwan",
      "Rise of communist rule",
    ],

    keyFigures: ["Mao Zedong", "Chiang Kai-shek", "Zhou Enlai"],

    significance:
      "Created modern China and changed the global balance of power.",

    interestingFacts: [
      "China became the world's most populous communist state.",
      "The Nationalist government relocated to Taiwan.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/chinese-communist-revolution.png",
  },
  {
    id: 22,

    slug: "sepoy-mutiny",

    title: "Indian Rebellion of 1857",

    continent: "Asia",

    country: "India",

    year: 1857,

    category: "Revolution",

    summary: "A major uprising against British East India Company rule.",

    story:
      "Indian soldiers known as sepoys rebelled against the East India Company. The uprising spread across northern India and became one of the most significant challenges to British rule before being suppressed.",

    causes: [
      "Political annexations",
      "Religious concerns",
      "Military grievances",
    ],

    consequences: [
      "End of East India Company rule",
      "Direct British Crown control",
      "Military reforms",
    ],

    keyFigures: ["Rani Lakshmibai", "Bahadur Shah II", "Mangal Pandey"],

    significance: "Widely regarded as the First War of Indian Independence.",

    interestingFacts: [
      "The rebellion began in Meerut.",
      "The Mughal Empire formally ended afterward.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/sepoy-mutiny.png",
  },
  {
    id: 23,

    slug: "foundation-of-mughal-empire",

    title: "Foundation of the Mughal Empire",

    continent: "Asia",

    country: "India",

    year: 1526,

    category: "Empire",

    summary:
      "Babur established the Mughal Empire after the First Battle of Panipat.",

    story:
      "Babur defeated Ibrahim Lodi at Panipat and established Mughal rule in India. The empire later became one of the richest and most influential states in world history.",

    causes: ["Babur's ambitions", "Weak Lodi rule", "Military superiority"],

    consequences: [
      "Beginning of Mughal rule",
      "Political unification",
      "Cultural achievements",
    ],

    keyFigures: ["Babur", "Ibrahim Lodi"],

    significance: "Laid the foundation for one of India's greatest empires.",

    interestingFacts: [
      "Babur used field artillery effectively.",
      "The Mughal Empire lasted more than 300 years.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/foundation-of-mughal-empire.png",
  },
  {
    id: 24,

    slug: "protestant-reformation",

    title: "Protestant Reformation",

    continent: "Europe",

    country: "Holy Roman Empire",

    year: 1517,

    category: "Religious",

    summary: "A religious movement that transformed Christianity in Europe.",

    story:
      "Martin Luther challenged Church practices by publishing his Ninety-Five Theses. The movement spread rapidly and led to the formation of Protestant churches.",

    causes: [
      "Church corruption",
      "Religious reform movements",
      "Printing press",
    ],

    consequences: ["Rise of Protestantism", "Religious wars", "Church reforms"],

    keyFigures: ["Martin Luther", "John Calvin"],

    significance: "One of the most influential religious movements in history.",

    interestingFacts: [
      "The Ninety-Five Theses were published in 1517.",
      "The printing press helped spread reform ideas.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/protestant-reformation.png",
  },
  {
    id: 25,

    slug: "civil-rights-movement",

    title: "American Civil Rights Movement",

    continent: "North America",

    country: "United States",

    year: 1954,

    category: "Political",

    summary: "A movement to end racial segregation and discrimination.",

    story:
      "Through protests, court cases, and civil disobedience, activists challenged racial segregation in the United States. The movement achieved major legal and social changes.",

    causes: [
      "Racial segregation",
      "Voting discrimination",
      "Civil rights activism",
    ],

    consequences: [
      "Civil Rights Act",
      "Voting Rights Act",
      "Expanded equality",
    ],

    keyFigures: ["Martin Luther King Jr.", "Rosa Parks", "Malcolm X"],

    significance: "Transformed civil rights and equality in the United States.",

    interestingFacts: [
      "The Montgomery Bus Boycott lasted over a year.",
      "The movement inspired human rights campaigns worldwide.",
    ],
    relatedEventSlugs: [],
    heroImage: "/images/civil-rights-movement.png",
  },
];
