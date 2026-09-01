/* Copy and data for the pre-rebrand, event-first site (to Sep 2026).

   UHI is now positioned as an ongoing fitness measurement and improvement
   platform rather than as a race, so none of this is rendered: the live copy
   is in src/data/content.js. It is kept intact — alongside the sections that
   consumed it in src/sections/archived/ — so the ten-capability model, the
   event structure, the working weights and the founding-athlete pricing can
   all be restored if events are ever brought back to the front.

   Nothing outside src/sections/archived/ should import from this file. */

import {
  Activity,
  BarChart3,
  Brain,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Compass,
  Dumbbell,
  Film,
  Gauge,
  Heart,
  Link2,
  RotateCcw,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Upload,
  UserCheck,
  Zap,
} from "lucide-react";

export const uhciPrinciples = [
  {
    title: "Objective",
    text: "Based on measurable performance data rather than subjective opinion.",
  },
  {
    title: "Age-adjusted",
    text: "Allowing fair comparison across different stages of life.",
  },
  {
    title: "Standardised",
    text: "Using consistent movement standards and competition rules.",
  },
  {
    title: "Progressive",
    text: "Enabling athletes to track long-term improvement rather than a single race result.",
  },
  {
    title: "Actionable",
    text: "Identifying strengths and opportunities for development across multiple areas of human capability.",
  },
];

export const capabilities = [
  {
    label: "ENDURANCE",
    icon: Heart,
    detail: "Sustaining physical effort over an extended period without a significant drop in performance.",
    example: "Maintaining a consistent pace and technique across all ten runs and exercise stations.",
  },
  {
    label: "STRENGTH",
    icon: Dumbbell,
    detail: "Generating force to move, lift or control resistance.",
    example: "Lifting and carrying heavy equipment, such as the dumbbells or sled, efficiently.",
  },
  {
    label: "POWER",
    icon: Zap,
    detail: "Producing maximum force quickly and explosively.",
    example: "Driving explosively into a hoop shot or accelerating from a standing start.",
  },
  {
    label: "SPEED",
    icon: Gauge,
    detail: "Moving the body or a body part as quickly as possible.",
    example: "Completing the running sections and fast movement exercises in the shortest possible time.",
  },
  {
    label: "AGILITY",
    icon: Activity,
    detail: "Changing direction or body position quickly while maintaining control.",
    example: "Moving efficiently through shuttle runs, bear crawls or any station requiring rapid changes of direction.",
  },
  {
    label: "BALANCE",
    icon: Target,
    detail: "Maintaining stability and control while stationary or moving.",
    example: "Remaining stable during single-leg movements or while carrying uneven loads without losing control.",
  },
  {
    label: "COORDINATION",
    icon: Link2,
    detail: "Performing smooth, accurate and efficient movements by working different parts of the body together.",
    example: "Executing technically demanding movements such as the hoop shot with consistent rhythm and accuracy.",
  },
  {
    label: "RESILIENCE",
    icon: Shield,
    detail: "Ability to recover and perform again after exertion.",
    example: "How quickly you're ready for the next challenge.",
  },
  {
    label: "MOBILITY",
    icon: RotateCcw,
    detail: "Moving joints through their full range of motion with control.",
    example: "Performing deep squats, lunges and overhead movements with good technique and unrestricted movement.",
  },
  {
    label: "MENTAL FORTITUDE",
    icon: Brain,
    detail: "Ability to maintain performance while under physical or mental stress.",
    example: "Holding your pace through the final stations.",
  },
];

export const capabilityScores = [
  { capability: "ENDURANCE", value: 820 },
  { capability: "STRENGTH", value: 760 },
  { capability: "POWER", value: 730 },
  { capability: "SPEED", value: 880 },
  { capability: "AGILITY", value: 650 },
  { capability: "BALANCE", value: 640 },
  { capability: "COORDINATION", value: 700 },
  { capability: "RESILIENCE", value: 670 },
  { capability: "MOBILITY", value: 580 },
  { capability: "MENTAL", value: 720 },
];

export const differenceTable = {
  dimensions: [
    "Endurance & Running",
    "Loaded Strength",
    "Speed & Agility",
    "Coordination & Skill",
    "10-Capability Human Index",
    "Adapts Over Time",
  ],
  brands: [
    { name: "HYROX",          ratings: ["full","partial","none","none","none","none"] },
    { name: "Spartan",        ratings: ["full","full","full","partial","none","none"] },
    { name: "CrossFit",       ratings: ["full","full","full","full","partial","none"] },
    { name: "ULTIMATE HUMAN INDEX", ratings: ["full","full","full","full","full","full"], highlighted: true },
  ],
};

export const domains = [
  { title: "Strength", text: "Carry, lift, crawl and move with real-world power.", value: 760, pct: 76 },
  { title: "Power", text: "Convert strength into explosive output when it matters.", value: 730, pct: 73 },
  { title: "Endurance", text: "Keep going when your lungs and legs want a vote.", value: 820, pct: 82 },
  { title: "Speed", text: "React fast. Move sharply. Change direction under pressure.", value: 880, pct: 88 },
  { title: "Mobility", text: "Move well, not just hard.", value: 580, pct: 58 },
  { title: "Coordination", text: "Stay composed when fatigue makes simple things hard.", value: 700, pct: 70 },
  { title: "Resilience", text: "Absorb fatigue and setbacks without falling apart.", value: 670, pct: 67 },
  { title: "Balance", text: "Control your body when everyone else starts falling apart.", value: 640, pct: 64 },
  { title: "Recovery", text: "Bounce back between efforts and across the whole event.", value: 610, pct: 61 },
  { title: "Control Under Pressure", text: "Keep technique and decisions sharp when it's hard.", value: 720, pct: 72 },
];

export const uhsReveals = [
  { title: "What You're Strongest At", text: "The capabilities carrying your score today." },
  { title: "What's Limiting You", text: "The weak link holding your overall result back." },
  { title: "Where You Can Improve", text: "Specific, trainable targets — not vague advice." },
  { title: "How You Evolve Over Time", text: "A profile that updates every time you compete." },
];

export const divisions = [
  {
    key: "foundation",
    label: "Foundation",
    runDistance: "400m",
    finalRun: "400m",
    totalRunning: "4.0km",
    duration: "85–120 min",
  },
  {
    key: "intermediate",
    label: "Intermediate",
    runDistance: "800m",
    finalRun: "800m",
    totalRunning: "8.0km",
    duration: "80–110 min",
  },
  {
    key: "elite",
    label: "Elite",
    runDistance: "800m",
    finalRun: "800m",
    totalRunning: "8.0km",
    duration: "75–90 min",
  },
];

export const capabilities10 = [
  {
    number: 1,
    name: "Prone Shuttle",
    reps: { foundation: "50m", intermediate: "80m", elite: "120m" },
    tests: "Speed, agility and ground-to-feet transitions.",
    coachingNote: "Keep your chest up and drive with short, sharp steps — don't lunge into the ground.",
  },
  {
    number: 2,
    name: "Bear Crawl Push",
    reps: { foundation: "50m", intermediate: "80m", elite: "120m" },
    tests: "Upper-body strength, core stability and coordination.",
    coachingNote: "Keep your hips low and braced — let your legs drive the push, not just your arms.",
    weightKey: "Bear Crawl Push",
  },
  {
    number: 3,
    name: "Carry + Lunge",
    reps: { foundation: "50m", intermediate: "80m", elite: "120m" },
    tests: "Loaded strength, balance and control under fatigue.",
    coachingNote: "Keep the load close to your centre of mass and control the lunge depth.",
    weightKey: "Carry + Lunge",
  },
  {
    number: 4,
    name: "Hoop Shot",
    reps: {
      foundation: "50 attempts",
      intermediate: "80 attempts",
      elite: "120 attempts",
    },
    tests: "Accuracy, composure and fine motor control under fatigue.",
    coachingNote: "Slow your breathing before each attempt — accuracy beats speed here.",
  },
  {
    number: 5,
    name: "Dumbbell End Carry",
    reps: { foundation: "50m", intermediate: "80m", elite: "120m" },
    tests: "Loaded carry strength, grip and core stability under load.",
    coachingNote: "Stand tall and brace your core — take controlled steps and don't let the load pull you off balance.",
    weightKey: "Dumbbell End Carry",
  },
  {
    number: 6,
    name: "Devil's Advance",
    reps: { foundation: "50m", intermediate: "80m", elite: "120m" },
    tests: "Loaded carry endurance, grip and postural control.",
    coachingNote: "Keep your shoulders back and core braced — don't let the load round your spine.",
    weightKey: "Devil's Advance",
  },
  {
    number: 7,
    name: "Step-Ups",
    reps: { foundation: "50 reps", intermediate: "80 reps", elite: "120 reps" },
    tests: "Leg power, muscular endurance and balance.",
    coachingNote: "Drive through the full foot, not just your toes, and control the descent.",
    weightKey: "Step-Ups",
  },
  {
    number: 8,
    name: "Ground-to-Overhead",
    reps: { foundation: "50 reps", intermediate: "80 reps", elite: "120 reps" },
    tests: "Full-body power, coordination and strength under fatigue.",
    coachingNote: "Use your legs and hips to generate power — don't rely on your shoulders alone.",
    weightKey: "Ground-to-Overhead",
  },
];

export const workingWeights = [
  {
    name: "Bear Crawl Push",
    foundation: { women: "10kg", men: "15kg" },
    intermediate: { women: "15kg", men: "25kg" },
    elite: { women: "20kg", men: "35kg" },
  },
  {
    name: "Carry + Lunge",
    foundation: { women: "10kg", men: "15kg" },
    intermediate: { women: "15kg", men: "25kg" },
    elite: { women: "20kg", men: "35kg" },
  },
  {
    name: "Dumbbell End Carry",
    foundation: { women: "5kg", men: "7.5kg" },
    intermediate: { women: "5kg", men: "7.5kg" },
    elite: { women: "5kg", men: "7.5kg" },
  },
  {
    name: "Devil's Advance",
    foundation: { women: "10kg dumbbells", men: "15kg dumbbells" },
    intermediate: { women: "15kg dumbbells", men: "25kg dumbbells" },
    elite: { women: "20kg dumbbells", men: "35kg dumbbells" },
  },
  {
    name: "Step-Ups",
    foundation: { women: "Bodyweight", men: "Bodyweight" },
    intermediate: { women: "10kg", men: "15kg" },
    elite: { women: "15kg", men: "25kg" },
  },
  {
    name: "Ground-to-Overhead",
    foundation: { women: "10kg", men: "15kg" },
    intermediate: { women: "15kg", men: "25kg" },
    elite: { women: "20kg", men: "35kg" },
  },
  {
    name: "Hero Load Carry",
    foundation: { women: "10kg", men: "15kg" },
    intermediate: { women: "20kg", men: "30kg" },
    elite: { women: "30kg", men: "45kg" },
  },
];

export const weightsByName = Object.fromEntries(workingWeights.map((w) => [w.name, w]));

export const finalCircuit = {
  foundation: [
    ["Ground-to-Shoulder", "6 reps"],
    ["Step-Ups", "12 reps"],
    ["Bear Crawl Push", "10m"],
    ["Hero Load Carry", "20m"],
    ["Final Run", "400m"],
  ],
  intermediate: [
    ["Ground-to-Shoulder", "10 reps"],
    ["Step-Ups", "20 reps"],
    ["Bear Crawl Push", "20m"],
    ["Hero Load Carry", "40m"],
    ["Final Run", "800m"],
  ],
  elite: [
    ["Ground-to-Shoulder", "15 reps"],
    ["Step-Ups", "30 reps"],
    ["Bear Crawl Push", "30m"],
    ["Hero Load Carry", "60m"],
    ["Final Run", "800m"],
  ],
};

export /* Displayed out of 1000; `pct` drives the bar width (value / 10). */
const aiScoreBars = [
  { label: "Speed", value: 755, pct: 75.5 },
  { label: "Stamina", value: 780, pct: 78 },
  { label: "Strength", value: 730, pct: 73 },
  { label: "Coordination", value: 815, pct: 81.5 },
  { label: "Balance", value: 692, pct: 69.2 },
  { label: "Mobility", value: 771, pct: 77.1 },
];

export const aiTrainingFocus = [
  "Improve bear crawl hip control under fatigue.",
  "Build rope drag power endurance.",
  "Improve hoop shot accuracy after running.",
];

export const aiScoreGains = [
  { label: "Lunges", from: 723, to: 795 },
  { label: "Bear Crawl", from: 653, to: 742 },
  { label: "Wall Balls", from: 687, to: 766 },
];

export const aiAnalysisCategories = [
  "Movement Efficiency",
  "Body Position",
  "Stability",
  "Coordination",
  "Rhythm",
  "Fatigue Breakdown",
  "Movement Consistency",
];

export const aiSampleVideos = ["Back Squat", "Overhead Press", "Overhead Carry"];

export const aiFeedbackQuotes = [
  "Your stride length is reducing glute engagement and increasing quad fatigue.",
  "Your hips rise under fatigue, making your bear crawl less efficient.",
  "You're initiating the throw too early with your arms, reducing power from the legs.",
];

export const movementCoachCards = [
  {
    title: "Bear Crawl Push",
    sees: "Your hips rise under fatigue, making your bear crawl less efficient.",
    cue: "Brace your core and keep your hips low through the full rep.",
    from: 65,
    to: 74,
  },
  {
    title: "Lunges",
    sees: "Your stride length is reducing glute engagement and increasing quad fatigue.",
    cue: "Shorten your stride slightly and drive through the full foot.",
    from: 72,
    to: 79,
  },
  {
    title: "Hoop Shot",
    sees: "You're initiating the throw too early with your arms, reducing power from the legs.",
    cue: "Load through your legs first, then release with your arms.",
    from: 68,
    to: 76,
  },
];

export const journeyQuizQuestions = [
  {
    q: "Where are you in your training journey?",
    options: ["Just starting out", "Training consistently", "Competing or racing", "Highly experienced"],
  },
  {
    q: "What do you most want to improve?",
    options: ["Strength", "Endurance & stamina", "Mobility & coordination", "Mental resilience"],
  },
  {
    q: "What limits your performance most?",
    options: ["Fatigue under pressure", "Technique breakdown", "Lack of structured training", "Recovery & consistency"],
  },
];

export const aiHowItWorks = [
  {
    icon: Upload,
    title: "Upload Your Video",
    text: "Record or upload a short clip of the movement you want analysed.",
    videos: aiSampleVideos,
  },
  {
    icon: Activity,
    title: "UHI AI Analysis",
    text: "The UHI AI coaching system is designed to help identify how you move against the UHI Movement Standard™.",
    categories: aiAnalysisCategories,
  },
  {
    icon: UserCheck,
    title: "Receive Expert Coaching",
    text: "The system will support athletes with clear, practical feedback and a training focus designed to move your score.",
    quotes: aiFeedbackQuotes,
  },
];

export const aiImprovementAreas = [
  {
    icon: CheckCircle2,
    title: "What You're Doing Well",
    text: "The strengths you should continue to develop.",
  },
  {
    icon: TrendingUp,
    title: "Biggest Improvement Opportunities",
    text: "The one or two changes that will have the greatest impact on performance.",
  },
  {
    icon: Target,
    title: "Personalised Coaching Drills",
    text: "Simple exercises and movement cues designed to improve technique.",
  },
  {
    icon: BarChart3,
    title: "Estimated Score Gain",
    text: "The likely improvement in your Ultimate Human Index if you implement the recommended changes.",
  },
];

export const aiProfileEvolution = [
  "Where you're strongest",
  "What is limiting your performance",
  "How your movement is improving",
  "Where your next gains will come from",
];

export const subscriptionTiers = [
  {
    name: "Explorer",
    icon: Activity,
    price: "£14.99/mo",
    summary: "For people starting their Ultimate Human Index journey.",
    cta: "Join the Waitlist",
    points: [
      "Ultimate Human Index",
      "Wearable integration",
      "Monthly fitness assessment",
      "AI-powered training recommendations",
      "Performance dashboard",
      "Access to community challenges",
      "10% discount on UHI events",
      "Monthly member newsletter and insights",
    ],
  },
  {
    name: "Adventurer",
    icon: TrendingUp,
    highlighted: true,
    price: "£24.99/mo",
    summary: "For people committed to improving their performance.",
    cta: "Join the Waitlist",
    includesNote: "Everything in Explorer, plus:",
    points: [
      "Weekly Ultimate Human Index updates",
      "Personalised AI coaching",
      "Recovery and readiness insights",
      "Goal setting and progress tracking",
      "Exercise technique analysis from uploaded videos",
      "Priority event booking",
      "20% discount on UHI events",
      "Access to member-only challenges and leaderboards",
    ],
  },
  {
    name: "Ultimate",
    icon: Sparkles,
    price: "£39.99/mo",
    summary: "For those serious about maximising performance and longevity.",
    cta: "Join the Waitlist",
    includesNote: "Everything in Adventurer, plus:",
    points: [
      "Advanced AI Performance Coach",
      "Detailed movement and form analysis",
      "Personalised training and recovery plans",
      "Longevity and healthspan insights",
      "Quarterly expert coaching review",
      "Exclusive webinars and coaching content",
      "VIP event registration",
      "30% discount on UHI events",
      "Founding member rewards and partner benefits",
    ],
  },
];

export const categories = [
  "Individual",
  "Doubles",
  "Mixed Doubles",
  "Relay Team",
  "Corporate Team",
  "Age Group Rankings",
];

export const whyEnter = [
  {
    title: "Not just another fitness race",
    text: "This is built to test complete capability, not just how long you can suffer on a run.",
  },
  {
    title: "You get your Ultimate Human Index",
    text: "A personal performance index across ten capabilities — strength, power, endurance, speed, mobility, coordination, resilience, balance, recovery and control under pressure.",
  },
  {
    title: "Train for it anywhere",
    text: "Minimal equipment, simple movement patterns and clear progressions.",
  },
  {
    title: "It rewards the adaptable",
    text: "Runners, lifters and gym athletes all get exposed somewhere. The most complete athlete wins.",
  },
];

export const foundingPricing = [
  { category: "Individual", price: "£79", detail: "Founding athlete launch price" },
  { category: "Doubles", price: "£129", detail: "Per team" },
  { category: "Relay Team", price: "£189", detail: "Team entry" },
  { category: "Corporate Team", price: "From £599", detail: "Includes rankings + team scoring" },
];

export const workToDo = [
  "First UK event dates and venues will be confirmed soon.",
  "Final scoring standards are being tested before launch.",
  "Founding athlete places will be limited for the first events.",
  "Training plans and gym partner locations are in development.",
];

export const aiTabs = [
  { key: "profile", label: "Profile" },
  { key: "movement", label: "Movement Analysis" },
  { key: "gains", label: "Score Gains" },
  { key: "coaching", label: "Coaching Output" },
];

export const journeyCards = [
  {
    key: "quiz",
    icon: Compass,
    title: "Discover Your Type",
    text: "Answer 3 quick questions to preview your Athlete Type.",
    cta: "Take the Snapshot",
    action: "modal",
  },
  {
    key: "assessment",
    icon: ClipboardList,
    title: "Full Assessment",
    text: "Preview the Human Context inputs behind your UHI Report.",
    cta: "Preview Assessment",
    action: "modal",
  },
  {
    key: "score",
    icon: Calculator,
    title: "Score Simulator",
    text: "See how the Ultimate Human Index is calculated.",
    cta: "Open Score Dashboard",
    action: "scroll",
    href: "#score",
  },
  {
    key: "train",
    icon: Dumbbell,
    title: "Train to Improve",
    text: "Explore the event structure, capabilities and working weights.",
    cta: "View Event Structure",
    action: "scroll",
    href: "#format",
  },
  {
    key: "coach",
    icon: Film,
    title: "Movement Coach",
    text: "Get AI movement analysis and personalised coaching cues.",
    cta: "See AI Coaching",
    action: "scroll",
    href: "#coaching",
  },
];

export const scoreTabs = [
  { key: "overview", label: "Overview" },
  { key: "breakdown", label: "Capability Breakdown" },
  { key: "path", label: "Improvement Path" },
];
