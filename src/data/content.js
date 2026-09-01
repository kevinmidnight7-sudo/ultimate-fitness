/* All site copy and data, kept apart from the components so content can be
   edited without touching layout.

   Written from Ken's "UHI website based on Index model" document (Sep 2026),
   which repositions UHI as an ongoing fitness measurement and improvement
   platform rather than as an event. British English throughout.

   Two standing rules for anyone editing this file:

   1. Nothing here states a price, a launch date, a scoring formula, a named
      gym partner or a confirmed integration. None of those has been decided,
      and inventing one on a public page is worse than saying less.
   2. Anything not yet built stays in future tense — "is being designed to",
      "as the platform develops". The `future` flag on a list item is what the
      sections use to render that distinction visibly.

   The pre-rebrand, event-first copy is in src/data/archived/eventContent.js. */

import {
  Activity,
  Award,
  BarChart3,
  Building2,
  ClipboardCheck,
  Compass,
  Dumbbell,
  Gauge,
  Heart,
  Link2,
  ListChecks,
  MapPin,
  Repeat,
  RotateCcw,
  Ruler,
  ScanLine,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Video,
  Watch,
  Zap,
} from "lucide-react";

/* ── The eight areas of fitness ─────────────────────────────────────────
   The core framework. Resilience and Mental Fortitude were part of the old
   ten-capability model and are deliberately not here.

   `evidence` is illustrative, not a scoring rule: the document defines the
   eight areas and gives worked examples for a 5K run, a deadlift and a
   farmers carry, but the full exercise-to-area mapping sits in the Capability
   Framework and has not been published. Sections that render `evidence` say
   so alongside it. */
export const fitnessAreas = [
  {
    name: "Endurance",
    icon: Heart,
    detail: "Sustaining effort over time without a significant drop in performance.",
    evidence: "Runs, rows, rides and longer efforts on the machines.",
  },
  {
    name: "Strength",
    icon: Dumbbell,
    detail: "Generating force to move, lift or control resistance.",
    evidence: "Deadlifts, squats, presses and heavy carries.",
  },
  {
    name: "Power",
    icon: Zap,
    detail: "Producing force quickly and explosively.",
    evidence: "Jumps, throws and fast lifts from the ground.",
  },
  {
    name: "Speed",
    icon: Gauge,
    detail: "Moving your body, or part of it, as quickly as possible.",
    evidence: "Short runs, sprints and fast repeated movements.",
  },
  {
    name: "Agility",
    icon: Activity,
    detail: "Changing direction or body position quickly while staying in control.",
    evidence: "Shuttles, crawls and anything that makes you turn and reset.",
  },
  {
    name: "Balance",
    icon: Target,
    detail: "Staying stable and in control, whether still or moving.",
    evidence: "Balance tests, single-leg work and uneven loads.",
  },
  {
    name: "Coordination",
    icon: Link2,
    detail: "Working different parts of the body together smoothly and accurately.",
    evidence: "Loaded carries, complex lifts and skill-based movements.",
  },
  {
    name: "Mobility",
    icon: RotateCcw,
    detail: "Moving your joints through their full range with control.",
    evidence: "Mobility tests, deep squats and overhead positions.",
  },
];

/* The worked example from Ken's document, used wherever the site shows what a
   profile actually looks like. Ordered to match `fitnessAreas`. Every section
   that renders it labels it as an example. */
export const sampleProfile = {
  overall: 684,
  areas: [
    { name: "Endurance", value: 782 },
    { name: "Strength", value: 716 },
    { name: "Power", value: 695 },
    { name: "Speed", value: 672 },
    { name: "Agility", value: 648 },
    { name: "Balance", value: 612 },
    { name: "Coordination", value: 701 },
    { name: "Mobility", value: 548 },
  ],
  strongest: "Endurance",
  opportunity: "Mobility",
};

/* ── Home ──────────────────────────────────────────────────────────── */

export const homeHero = {
  eyebrow: "The Ultimate Human Index",
  headline: "How fit are you — really?",
  standfirst:
    "One number. Every aspect of your fitness. The Ultimate Human Index brings together strength, endurance, speed, power, mobility, balance, agility and coordination, and turns them into a single score out of 1,000.",
  cta: "Discover Your Index",
  secondary: "See how it works",
  benchmark:
    "Think of it a little like a golf handicap for your fitness: a number that benchmarks you today, and moves as you improve.",
};

/* The "fitness is more than how fast you run" argument, verbatim in spirit
   from the document's three examples. */
export const fitnessGaps = [
  "You might run 10K comfortably but struggle with strength.",
  "You might be incredibly strong but lack mobility.",
  "You might train four times a week and still not know whether you are getting fitter overall.",
];

/* "You don't need to change how you train." */
export const trainYourWay = {
  heading: "You don't need to change how you train",
  lead: "Already run? Great. Lift weights? Great. Do CrossFit, HYROX or other fitness events? Great. It all helps us understand your performance.",
  examples: [
    "Run a 5K",
    "Hit a new strength PB",
    "Complete a balance test",
    "Improve your mobility",
    "Enter a fitness event",
  ],
  closer: "Everything you do helps build the picture.",
};

/* Test → Score → Understand → Improve. The spine of the whole product, so it
   appears on both the home page and How It Works. */
export const journeySteps = [
  {
    step: "Test",
    icon: ClipboardCheck,
    text: "Add results from the exercises, workouts and challenges you already do.",
  },
  {
    step: "Score",
    icon: BarChart3,
    text: "We translate your performance into your Ultimate Human Index.",
  },
  {
    step: "Understand",
    icon: Compass,
    text: "See your strengths, your gaps, and how your overall fitness is changing.",
  },
  {
    step: "Improve",
    icon: TrendingUp,
    text: "Get guidance on the areas that could make the biggest difference — then test again.",
  },
];

export const benchmark = {
  heading: "Your fitness. Your benchmark.",
  body: [
    "Ultimate Human isn't about being the fittest person in the room, and you don't need to think of yourself as an athlete.",
    "Your Index gives you a starting point from which to understand and improve your own physical capability. Starting out, coming back after a break, training regularly or competing at a high level — the principle is the same.",
  ],
  refrain: ["Find your number.", "Understand it.", "Improve it."],
};

/* ── What feeds the Index ───────────────────────────────────────────── */

export const evidenceSources = [
  {
    title: "Exercise results",
    icon: Ruler,
    text: "Running, strength, power, balance and mobility tests.",
  },
  {
    title: "Training performance",
    icon: Dumbbell,
    text: "The things you already do in the gym or outside it.",
  },
  {
    title: "Fitness events",
    icon: Trophy,
    text: "Results from recognised fitness challenges and competitions.",
  },
  {
    title: "Wearable data",
    icon: Watch,
    text: "As the platform develops, relevant fitness and recovery data can add further insight.",
    future: true,
  },
  {
    title: "Movement analysis",
    icon: Video,
    text: "Video and AI-assisted analysis can help us understand not only what you can do, but how you move.",
    future: true,
  },
];

export const indexLevels = [
  {
    name: "UHI Estimated",
    icon: Compass,
    summary: "Built from the results and fitness information you provide.",
    text: "The easiest way to establish your starting point and begin tracking progress. You tell us what you have done; we turn it into a score.",
  },
  {
    name: "UHI Verified",
    icon: Award,
    summary: "Built from standardised assessments and validated results.",
    text: "We are developing standardised Ultimate Human assessments, to be offered through UHI assessment partners, alongside officially validated scores from other fitness challenges.",
    future: true,
  },
];

/* ── Capability Framework ───────────────────────────────────────────── */

export const frameworkIntro = {
  lead: "There isn't one exercise that tells you how fit you are. So we've built the UHI Capability Framework — a growing library of recognised exercises, tests and fitness challenges that each tell us something different about what you can do.",
  mapping:
    "Every recognised activity is mapped against the eight areas of all-round fitness. Add a result and it contributes to the areas it genuinely informs — often more than one.",
};

/* Each of these is stated explicitly in Ken's document. Anything beyond them
   would be inventing a mapping, so this list stays short on purpose. */
export const multiAreaExamples = [
  { activity: "A 5K run", areas: ["Endurance", "Speed"], note: "Tells us a lot about how long you can hold a pace, and how quick that pace is." },
  { activity: "A deadlift", areas: ["Strength"], note: "A clean read on how much force you can produce against a load." },
  { activity: "A farmers carry", areas: ["Strength", "Endurance", "Coordination"], note: "Three areas at once — load, distance and staying organised while you move." },
  { activity: "A balance test", areas: ["Balance"], note: "Something none of the above touches, which is exactly why it is in the library." },
];

/* The exercises currently in the Capability Framework, from the document.

   Grouped by movement family for readability. The groups are ours: the source
   table's area columns arrived empty, so this deliberately does not claim
   which areas each exercise feeds — that mapping belongs to the framework and
   has not been supplied. */
export const exerciseLibrary = [
  {
    group: "Running and machines",
    icon: Gauge,
    exercises: ["Running", "SkiErg", "RowErg", "BikeErg"],
  },
  {
    group: "Sleds and carries",
    icon: Activity,
    exercises: ["Sled Push", "Sled Pull", "Farmers Carry", "Front Carry", "Overhead Carry"],
  },
  {
    group: "Lifts and presses",
    icon: Dumbbell,
    exercises: [
      "Deadlift",
      "Goblet Squat",
      "Push Press",
      "Clean & Press",
      "Dumbbell Snatch",
      "Ground-to-Overhead",
    ],
  },
  {
    group: "Bodyweight and mixed",
    icon: Zap,
    exercises: ["Lunges", "Burpee Broad Jump", "Wall Balls", "Bear Crawl", "Devil Press"],
  },
];

export const movementStandard = {
  heading: "Every exercise. One consistent standard.",
  lead: "For your Index to mean anything, how you perform an exercise matters as much as what you achieve. Every exercise in the library has a defined UHI Movement Standard, developed with experienced fitness, coaching and performance experts.",
  includes: [
    "The correct starting and finishing position",
    "The required range of movement",
    "What counts as a successful repetition",
    "The equipment, weight and distance where relevant",
    "How the exercise should be timed or measured",
    "Common technique mistakes to avoid",
    "How to adapt the movement for different ability levels",
    "The safety and movement considerations that matter",
  ],
  support:
    "Written instructions are supported by demonstration videos, so you can see what good movement looks like before you attempt it.",
  why: [
    {
      title: "Consistency makes comparison meaningful",
      text: "At home, in your local gym, with a coach or at an event, the standard gives everyone the same reference point for how a movement should be performed.",
    },
    {
      title: "We're interested in how well you move",
      text: "As UHI develops, video analysis can add another layer of validation — assessing whether a movement meets the standard and giving feedback on technique.",
      future: true,
    },
    {
      title: "Improving shouldn't only mean doing more",
      text: "UHI isn't only measuring how fast, how far or how heavy. Performing better counts too.",
    },
  ],
};

/* ── Improve ────────────────────────────────────────────────────────── */

export const coachingIntro = {
  lead: "Your overall Index tells you where you are. Your eight area scores tell you why. That is where UHI becomes more than a fitness score — it becomes a roadmap.",
  refrain: "Measure what you do. Understand what it means. Improve what matters.",
};

export const coachingStages = [
  {
    title: "Understand your profile",
    icon: ListChecks,
    text: "See which areas are carrying your score, and which are holding it back. No jargon, no ranking against strangers — just your own picture.",
  },
  {
    title: "Find your biggest opportunity",
    icon: Target,
    text: "The area with the most room in it is usually the one that moves your overall Index most. UHI is being designed to point straight at it.",
    future: true,
  },
  {
    title: "Get personalised guidance",
    icon: Sparkles,
    text: "AI-powered analysis is being designed to read your performance and suggest what to work on next, based on your profile rather than a generic plan.",
    future: true,
  },
  {
    title: "Look at how you move",
    icon: ScanLine,
    text: "Video and movement analysis is in development, to assess technique against the UHI Movement Standard and feed that back as practical cues.",
    future: true,
  },
  {
    title: "Test again, and watch it change",
    icon: Repeat,
    text: "Add new results and your Index updates. Progress you can see is progress worth chasing.",
  },
];

export const improveQuestions = ["How fit am I?", "Where can I improve?", "What should I do next?"];

/* ── Membership ─────────────────────────────────────────────────────── */

export const accessRoutes = [
  {
    name: "Subscribe directly",
    icon: Users,
    lead: "Train at home, outdoors, at your own gym, or compete in fitness events.",
    text: "Subscribe to UHI and use recognised exercises, workouts and event results to build your Index, discover your strengths and see where you could improve.",
    refrain: "Your training. Your results. Your UHI.",
  },
  {
    name: "Join through your gym",
    icon: Building2,
    lead: "If your gym becomes a UHI Partner, you can access UHI as part of your gym experience.",
    text: "Participating gyms will be able to help you complete UHI assessments, learn the movement standards, validate your performance and coach you towards the areas you want to improve.",
    refrain: "Ask your gym if they offer UHI — or tell us where you train.",
    future: true,
  },
];

/* Three levels. No prices: none has been set, and putting a placeholder on a
   public page would be worse than leaving it out. */
export const membershipTiers = [
  {
    name: "UHI Start",
    tagline: "Discover where you are.",
    summary:
      "The easiest way to begin. Create your first Index, add recognised exercise and fitness results, and see what your overall fitness profile actually looks like.",
    cta: "Start my UHI",
    points: [
      "Your starting Ultimate Human Index",
      "Scores across the eight areas of fitness",
      "Add recognised exercise and workout results",
      "Add results from supported fitness events",
      "UHI exercise standards and demonstration videos",
      "Track changes in your Index",
      "Strengths and improvement insights",
    ],
    bestFor: "Anyone curious to find their number and start measuring fitness differently.",
  },
  {
    name: "UHI Improve",
    tagline: "Understand what to work on next.",
    highlighted: true,
    summary:
      "Everything in UHI Start, plus personalised insight designed to help you move your Index. The more performance data you add, the sharper the picture of where your next gain is.",
    cta: "Help me improve",
    includesNote: "Everything in UHI Start, plus:",
    points: [
      "More detailed performance analysis",
      "Personalised improvement priorities",
      "AI-powered coaching recommendations",
      "Training suggestions based on your UHI profile",
      "Progress goals and regular reassessment",
      "Video movement and technique feedback where available",
      "Deeper analysis of your performance over time",
      "UHI challenges and community features",
    ],
    bestFor: "People who want UHI to become part of how they train and improve.",
  },
  {
    name: "UHI Pro",
    tagline: "Turn your Index into your performance coach.",
    summary:
      "Our most comprehensive experience, for people who want to understand and optimise their physical performance. Deeper analysis, advanced coaching and more performance data behind the score.",
    cta: "Optimise my UHI",
    includesNote: "Everything in UHI Improve, plus:",
    points: [
      "Advanced AI performance coaching",
      "Detailed movement and technique analysis",
      "More frequent video assessments",
      "Advanced performance trends and insights",
      "Integration with supported wearable data as available",
      "Personalised training and recovery recommendations",
      "Priority access to new UHI assessments and features",
      "Preferential access to UHI Challenges and experiences",
      "Access to expert-led UHI content and sessions",
    ],
    bestFor: "Committed exercisers and athletes who want the most from their performance.",
  },
];

/* ── For gyms ───────────────────────────────────────────────────────── */

export const gymBenefits = [
  "Complete supported UHI assessments",
  "Have results validated by trained staff",
  "Learn the correct UHI movement standards",
  "Get help interpreting an Index",
  "Receive coaching based on strengths and development areas",
  "Take part in gym UHI challenges and leaderboards",
  "Work towards a UHI Verified score",
];

export const gymPitch = {
  lead: "A gym is where movement standards are taught, effort is supervised and results can be trusted. That makes it the natural place for a UHI to become a verified one.",
  forMembers:
    "Depending on the UHI membership a gym offers, members may be able to complete supported assessments, have results validated, and get coaching built around their own profile rather than a generic programme.",
  forGyms:
    "For a gym, UHI is being designed as a shared language for progress: a measure members can see moving, a reason to come back and re-test, and a structure for coaching conversations that goes beyond weight on the bar.",
};

/* ── Challenges and events ──────────────────────────────────────────── */

export const challengePosition = {
  lead: "Fitness events and UHI Challenges are one way to test yourself, add evidence to your Index and enjoy the competition. They are not what UHI is, and you never have to enter one to have an Index.",
  points: [
    {
      title: "A test, not a requirement",
      icon: ClipboardCheck,
      text: "An event is a controlled, supervised way to produce several results at once. Useful — but a 5K on a Tuesday counts too.",
    },
    {
      title: "Results that can be validated",
      icon: Award,
      text: "Because events are run to a standard and officiated, they are one of the routes we are developing towards a UHI Verified score.",
      future: true,
    },
    {
      title: "Recognised events count",
      icon: Trophy,
      text: "Results from recognised fitness challenges and competitions can be added to your Index alongside your own training.",
    },
    {
      title: "Compete only if you want to",
      icon: MapPin,
      text: "Plenty of members will never enter an event. The Index works exactly the same way either way.",
      future: false,
    },
  ],
};

/* ── About ──────────────────────────────────────────────────────────── */

export const founders = [
  {
    photo: "/images/founders/andie.png",
    name: "Andie Stoneham",
    role: "Founder · Performance Coach · Programme Designer",
    quote:
      "Most fitness measures reward one dominant attribute. We wanted to build something that shows you the whole picture — including the parts you have been quietly avoiding.",
  },
  {
    photo: "/images/founders/laura.png",
    name: "Laura Hathaway",
    role: "Performance Coach · Qualified Osteopath",
    quote:
      "Real fitness is not just strength or endurance. It is how efficiently and intelligently your body moves — which is why how you perform a movement matters as much as the number you post.",
  },
  {
    photo: "/images/founders/john.png",
    name: "John 'The Hitman' Hathaway",
    role: "Champion UFC Fighter · Coach",
    quote:
      "The people who stay calm, adaptable and explosive when tired are usually the hardest to beat. A single score across eight areas shows you how close you are to that.",
  },
  {
    photo: "/images/founders/ken.png",
    name: "Ken Brotherston",
    role: "Founder · Entrepreneur · Fitness Enthusiast",
    quote:
      "I am probably old enough to know better, but not quite sensible enough to stop chasing the idea that becoming fitter, stronger and more adaptable makes every part of life better.",
  },
  {
    photo: "/images/founders/camilla.png",
    name: "Dr. Camilla Drew",
    role: "Capabilities Adviser · Fitness Enthusiast",
    quote:
      "Fitness and good-quality, all-round movement are key to a happier and more productive life, regardless of how old you actually are.",
  },
];

export const aboutStory = [
  "Most of us have no reliable answer to a simple question: how fit am I? We have a parkrun time, or a squat number, or a rough sense that we should probably stretch more. What we don't have is one measure that covers all of it.",
  "The Ultimate Human Index exists to give people that measure — and, more importantly, to make it useful. A number on its own is trivia. A number with eight areas underneath it, and clear guidance on which one to work on next, is a plan.",
  "It is being built to be inclusive by design. Whatever your age, whatever your ability, wherever you're starting from: find out what you're capable of today, then find out what you could become.",
];

/* What is genuinely still being built. Kept honest and specific — no dates, no
   commitments we cannot stand behind. */
export const inDevelopment = [
  "Standardised UHI assessments, and the partner network that will deliver them.",
  "Validation routes for UHI Verified, including officially validated scores from other fitness challenges.",
  "AI-powered coaching, and video analysis of movement against the UHI Movement Standard.",
  "Integration with wearable fitness and recovery data.",
  "The partner gym programme, including supported assessments and gym leaderboards.",
  "The Capability Framework continues to grow as more exercises and tests are added.",
];

/* ── FAQs ───────────────────────────────────────────────────────────
   Short answers to the questions the pages above obviously provoke. Each page
   picks the set relevant to it. */

export const faqIndex = [
  {
    q: "Do I need to complete a particular UHI event to get a score?",
    a: "No. Your Index is built from results you already produce — runs, lifts, workouts, tests and any recognised fitness events you happen to enter. There is no single test you have to pass.",
  },
  {
    q: "What is the score out of?",
    a: "1,000. Behind that single number sit eight area scores, on the same scale, which is where the useful detail lives.",
  },
  {
    q: "Do I need to do all eight areas straight away?",
    a: "No. Start with what you know. The Index becomes richer and more reliable as you add more relevant results, so most people's first Index is a starting point rather than a finished picture.",
  },
  {
    q: "What happened to resilience and mental fortitude?",
    a: "They are not part of the core framework. UHI measures eight areas of physical fitness — endurance, strength, power, speed, agility, balance, coordination and mobility.",
  },
];

export const faqFramework = [
  {
    q: "Can one exercise count towards more than one area?",
    a: "Yes, and most do. A farmers carry, for example, says something about strength, endurance and coordination at the same time.",
  },
  {
    q: "What if the exercise I do isn't in the library?",
    a: "The Capability Framework is a growing library. Start with the recognised activities closest to what you do, and expect the list to keep expanding.",
  },
  {
    q: "Why do the movement standards matter?",
    a: "Because a repetition only means something if everyone is doing the same repetition. The standard is the common reference point that makes your score comparable — to other people, and to your own result six months from now.",
  },
];

export const faqMembership = [
  {
    q: "How much does it cost?",
    a: "Pricing has not been set yet. Register your interest and we will tell you as soon as it is.",
  },
  {
    q: "Do I need a gym membership as well?",
    a: "No. You can subscribe directly and build your Index wherever and however you train. A participating gym adds supported assessments and coaching on top — it is not a requirement.",
  },
  {
    q: "Do I have to enter events?",
    a: "No. Events and challenges are one way to add results to your Index. They are optional, and the Index works the same way without them.",
  },
];
