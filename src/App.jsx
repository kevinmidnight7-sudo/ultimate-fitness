import React, { useRef, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Gauge,
  Trophy,
  AlertTriangle,
  BarChart3,
  Mail,
  CheckCircle2,
  Flame,
  Timer,
  Zap,
  Heart,
  Dumbbell,
  Activity,
  Target,
  Link2,
  Shield,
  RotateCcw,
  Brain,
  ChevronRight,
  Mountain,
  Sparkles,
  Upload,
  MessageCircle,
  Users,
  Building2,
  TrendingUp,
  UserCheck,
  ChevronDown,
  Weight,
  PlayCircle,
  X,
  Compass,
  ClipboardList,
  Calculator,
  Film,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────────────
   PASSWORD — change this to whatever you want
───────────────────────────────────────────────────────────────── */

const SITE_PASSWORD = "U00TLHU8MAN";

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */

const capabilities = [
  { label: "ENDURANCE", icon: Heart },
  { label: "STRENGTH", icon: Dumbbell },
  { label: "POWER", icon: Zap },
  { label: "SPEED", icon: Gauge },
  { label: "AGILITY", icon: Activity },
  { label: "BALANCE", icon: Target },
  { label: "COORDINATION", icon: Link2 },
  { label: "RESILIENCE", icon: Shield },
  { label: "MOBILITY", icon: RotateCcw },
  { label: "MENTAL FORTITUDE", icon: Brain },
];

const domains = [
  { title: "Strength", text: "Carry, lift, crawl and move with real-world power.", value: 76 },
  { title: "Power", text: "Convert strength into explosive output when it matters.", value: 73 },
  { title: "Endurance", text: "Keep going when your lungs and legs want a vote.", value: 82 },
  { title: "Speed", text: "React fast. Move sharply. Change direction under pressure.", value: 88 },
  { title: "Mobility", text: "Move well, not just hard.", value: 58 },
  { title: "Coordination", text: "Stay composed when fatigue makes simple things hard.", value: 70 },
  { title: "Resilience", text: "Absorb fatigue and setbacks without falling apart.", value: 67 },
  { title: "Balance", text: "Control your body when everyone else starts falling apart.", value: 64 },
  { title: "Recovery", text: "Bounce back between efforts and across the whole event.", value: 61 },
  { title: "Control Under Pressure", text: "Keep technique and decisions sharp when it's hard.", value: 72 },
];

const uhsReveals = [
  { title: "What You're Strongest At", text: "The capabilities carrying your score today." },
  { title: "What's Limiting You", text: "The weak link holding your overall result back." },
  { title: "Where You Can Improve", text: "Specific, trainable targets — not vague advice." },
  { title: "How You Evolve Over Time", text: "A profile that updates every time you compete." },
];

const comparisonRaces = [
  {
    name: "HYROX",
    tagline: "Tests hybrid racing.",
    text: "Built for endurance-paced functional racing against the clock.",
    icon: Timer,
  },
  {
    name: "Spartan",
    tagline: "Tests obstacle grit.",
    text: "Built to test grit, obstacle problem-solving and raw toughness.",
    icon: Mountain,
  },
  {
    name: "CrossFit",
    tagline: "Tests high-intensity fitness.",
    text: "Built to test varied, high-intensity functional fitness.",
    icon: Dumbbell,
  },
];

const uhComparison = {
  name: "Ultimate Human",
  tagline: "Tests the whole human.",
  text: "Built to measure every dimension of human capability, together, under fatigue.",
  icon: Sparkles,
};

const divisions = [
  {
    key: "foundation",
    label: "Foundation",
    runDistance: "400m",
    finalRun: "400m",
    totalRunning: "4.0km",
  },
  {
    key: "intermediate",
    label: "Intermediate",
    runDistance: "600m",
    finalRun: "600m",
    totalRunning: "6.0km",
  },
  {
    key: "elite",
    label: "Elite",
    runDistance: "800m",
    finalRun: "800m",
    totalRunning: "8.0km",
  },
];

const labours = [
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
    name: "Rope Load Drag",
    reps: { foundation: "50m", intermediate: "80m", elite: "120m" },
    tests: "Pulling strength, grip endurance and power output.",
    coachingNote: "Drive backwards through your legs — let your bodyweight do the work, not just your arms.",
    weightKey: "Rope Load Drag",
  },
  {
    number: 5,
    name: "Hoop Shot",
    reps: {
      foundation: "50 attempts · 3:00 cap",
      intermediate: "80 attempts · 4:00 cap",
      elite: "120 attempts · 5:00 cap",
    },
    tests: "Accuracy, composure and fine motor control under fatigue.",
    coachingNote: "Slow your breathing before each attempt — accuracy beats speed here.",
  },
  {
    number: 6,
    name: "Sandbag Get-Ups",
    reps: { foundation: "20 reps", intermediate: "35 reps", elite: "50 reps" },
    tests: "Total-body strength, coordination and resilience.",
    coachingNote: "Drive up through your legs on the way up — protect your lower back.",
    weightKey: "Sandbag Get-Ups",
  },
  {
    number: 7,
    name: "Devil's Advance",
    reps: { foundation: "50m", intermediate: "80m", elite: "120m" },
    tests: "Loaded carry endurance, grip and postural control.",
    coachingNote: "Keep your shoulders back and core braced — don't let the load round your spine.",
    weightKey: "Devil's Advance",
  },
  {
    number: 8,
    name: "Step-Ups",
    reps: { foundation: "50 reps", intermediate: "80 reps", elite: "120 reps" },
    tests: "Leg power, muscular endurance and balance.",
    coachingNote: "Drive through the full foot, not just your toes, and control the descent.",
    weightKey: "Step-Ups",
  },
  {
    number: 9,
    name: "Ground-to-Overhead",
    reps: { foundation: "50 reps", intermediate: "80 reps", elite: "120 reps" },
    tests: "Full-body power, coordination and strength under fatigue.",
    coachingNote: "Use your legs and hips to generate power — don't rely on your shoulders alone.",
    weightKey: "Ground-to-Overhead",
  },
];

const workingWeights = [
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
    name: "Rope Load Drag",
    foundation: { women: "30kg", men: "45kg" },
    intermediate: { women: "45kg", men: "65kg" },
    elite: { women: "60kg", men: "85kg" },
  },
  {
    name: "Sandbag Get-Ups",
    foundation: { women: "10kg", men: "15kg" },
    intermediate: { women: "15kg", men: "25kg" },
    elite: { women: "20kg", men: "35kg" },
  },
  {
    name: "Devil's Advance",
    foundation: { women: "10kg bag", men: "15kg bag" },
    intermediate: { women: "15kg bag", men: "25kg bag" },
    elite: { women: "20kg bag", men: "35kg bag" },
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

const weightsByName = Object.fromEntries(workingWeights.map((w) => [w.name, w]));

const finalCircuit = {
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
    ["Final Run", "600m"],
  ],
  elite: [
    ["Ground-to-Shoulder", "15 reps"],
    ["Step-Ups", "30 reps"],
    ["Bear Crawl Push", "30m"],
    ["Hero Load Carry", "60m"],
    ["Final Run", "800m"],
  ],
};

const aiScoreBars = [
  { label: "Speed", value: 75 },
  { label: "Stamina", value: 78 },
  { label: "Strength", value: 73 },
  { label: "Coordination", value: 81 },
  { label: "Balance", value: 69 },
  { label: "Mobility", value: 77 },
];

const aiTrainingFocus = [
  "Improve bear crawl hip control under fatigue.",
  "Build rope drag power endurance.",
  "Improve hoop shot accuracy after running.",
];

const aiScoreGains = [
  { label: "Lunges", from: 72, to: 79 },
  { label: "Bear Crawl", from: 65, to: 74 },
  { label: "Wall Balls", from: 68, to: 76 },
];

const aiAnalysisCategories = [
  "Movement Efficiency",
  "Body Position",
  "Stability",
  "Coordination",
  "Rhythm",
  "Fatigue Breakdown",
  "Movement Consistency",
];

const aiSampleVideos = ["Bear Crawl Push", "Lunges", "Wall Balls / Hoop Shot"];

const aiFeedbackQuotes = [
  "Your stride length is reducing glute engagement and increasing quad fatigue.",
  "Your hips rise under fatigue, making your bear crawl less efficient.",
  "You're initiating the throw too early with your arms, reducing power from the legs.",
];

const movementCoachCards = [
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

const journeyQuizQuestions = [
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

const aiHowItWorks = [
  {
    icon: Upload,
    title: "Upload Your Video",
    text: "Record or upload a short clip of the movement you want analysed.",
    videos: aiSampleVideos,
  },
  {
    icon: Activity,
    title: "UH AI Analysis",
    text: "The UH AI coaching system is designed to help identify how you move against the Ultimate Human Movement Standard™.",
    categories: aiAnalysisCategories,
  },
  {
    icon: UserCheck,
    title: "Receive Expert Coaching",
    text: "The system will support athletes with clear, practical feedback and a training focus designed to move your score.",
    quotes: aiFeedbackQuotes,
  },
];

const aiImprovementAreas = [
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
    text: "The likely improvement in your Ultimate Human Score if you implement the recommended changes.",
  },
];

const aiProfileEvolution = [
  "Where you're strongest",
  "What is limiting your performance",
  "How your movement is improving",
  "Where your next gains will come from",
];

const subscriptionTiers = [
  {
    name: "Athlete",
    icon: Activity,
    summary: "Track your score, get insights and join events.",
    cta: "Join the Waitlist",
    points: [
      "Track your UHS profile",
      "Access training insights",
      "Upload selected movement videos",
      "Join events and rankings",
    ],
  },
  {
    name: "Pro Athlete",
    icon: TrendingUp,
    highlighted: true,
    summary: "Deeper analysis and priority coaching feedback.",
    cta: "Register Interest",
    points: [
      "More movement analysis",
      "Deeper score improvement tracking",
      "Priority race insights",
      "Advanced coaching feedback",
    ],
  },
  {
    name: "Coach / Gym",
    icon: Users,
    summary: "Manage athletes and run your own leaderboard.",
    cta: "Register Interest",
    points: [
      "Manage athlete profiles",
      "Review movement submissions",
      "Support training groups",
      "Gym leaderboard tools",
    ],
  },
  {
    name: "Corporate Team",
    icon: Building2,
    summary: "Benchmark and challenge your team together.",
    cta: "Coming Soon",
    points: [
      "Team entries",
      "Group capability benchmarking",
      "Workplace challenge formats",
      "Corporate performance reports",
    ],
  },
];

const categories = [
  "Individual",
  "Doubles",
  "Mixed Doubles",
  "Relay Team",
  "Corporate Team",
  "Age Group Rankings",
];

const whyEnter = [
  {
    title: "Not just another fitness race",
    text: "This is built to test complete capability, not just how long you can suffer on a run.",
  },
  {
    title: "You get your Ultimate Human Score",
    text: "A personal performance score across ten capability areas — strength, power, endurance, speed, mobility, coordination, resilience, balance, recovery and control under pressure.",
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

const foundingPricing = [
  { category: "Individual", price: "£79", detail: "Founding athlete launch price" },
  { category: "Doubles", price: "£129", detail: "Per team" },
  { category: "Relay Team", price: "£189", detail: "Team entry" },
  { category: "Corporate Team", price: "From £599", detail: "Includes rankings + team scoring" },
];

const aiFeatures = [
  {
    title: "Discover Your Ultimate Human Profile",
    text: "Answer a few questions about your age, training background, strengths and goals and our AI assessment engine will generate your likely Ultimate Human profile.",
    points: [
      "Identify your strongest capability areas",
      "Reveal your likely weak zones",
      "Understand your athletic archetype",
      "Receive personalised training insights",
    ],
  },
  {
    title: "AI Race Simulator",
    text: "Estimate your likely Ultimate Human Score before race day based on your training history, movement background and current fitness level.",
    points: [
      "Predicted completion score",
      "Likely ranking percentile",
      "Projected strongest events",
      "Performance improvement opportunities",
    ],
  },
];

const workToDo = [
  "First UK event dates and venues will be confirmed soon.",
  "Final scoring standards are being tested before launch.",
  "Founding athlete places will be limited for the first events.",
  "Training plans and gym partner locations are in development.",
];

/* ─────────────────────────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="h-px w-8 shrink-0 bg-lime-400" />
      <p
        className="text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {children}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   HERO ARENA BACKGROUND
───────────────────────────────────────────────────────────────── */

function HeroArenaBackground({ heroRef, reducedMotion }) {
  const mouseGlowRef = useRef(null);

  /* 16 curated particles — fewer, more intentional */
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: ((i * 53 + 17) % 82) + 12,
        y: ((i * 31 + 11) % 76) + 8,
        size: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
        dur: 12 + ((i * 4) % 14),
        delay: (i * 2.1) % 9,
        opacity: (3 + ((i * 5) % 16)) / 100,
        lime: i % 6 === 0,
        rise: i % 8 === 0 ? 24 : i % 3 === 0 ? 15 : 9,
      })),
    []
  );

  /* Direct-DOM mouse glow — zero re-renders */
  useEffect(() => {
    if (reducedMotion) return;
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      if (!mouseGlowRef.current) return;
      const r = hero.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom) return;
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      mouseGlowRef.current.style.background = `radial-gradient(circle 800px at ${x}% ${y}%, rgba(163,230,53,0.03) 0%, transparent 65%)`;
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, [heroRef, reducedMotion]);

  return (
    <div
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 01 Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 02 Overhead ambient — wide stadium ceiling wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 60% -8%, rgba(255,255,255,0.062) 0%, rgba(255,255,255,0.016) 45%, transparent 75%)",
        }}
      />

      {/* 03 Right arena depth glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 92% 28%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      {/* 04 Beam 1 — primary right spotlight */}
      <div
        className="uh-beam-1 absolute"
        style={{
          top: 0,
          left: "55%",
          width: "360px",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 10%, rgba(255,255,255,0.038) 40%, rgba(255,255,255,0.008) 65%, transparent 85%)",
          clipPath: "polygon(49% 0%, 51% 0%, 84% 100%, 16% 100%)",
          transformOrigin: "50% 0%",
          filter: "blur(8px)",
          animation: reducedMotion ? "none" : "uh-beam-1 11s ease-in-out infinite",
        }}
      />

      {/* 04a Lens source dot — beam 1 */}
      <div
        className="uh-lens-1 absolute"
        style={{
          top: "0px",
          left: "calc(55% + 160px - 3px)",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.88)",
          boxShadow: "0 0 9px 4px rgba(255,255,255,0.08)",
          animation: reducedMotion ? "none" : "uh-lens-pulse 11s ease-in-out infinite",
        }}
      />

      {/* 05 Beam 2 — secondary centre-left */}
      <div
        className="uh-beam-2 absolute"
        style={{
          top: 0,
          left: "33%",
          width: "240px",
          height: "82%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 12%, rgba(255,255,255,0.015) 48%, transparent 80%)",
          clipPath: "polygon(49% 0%, 51% 0%, 90% 100%, 10% 100%)",
          transformOrigin: "50% 0%",
          filter: "blur(6px)",
          animation: reducedMotion ? "none" : "uh-beam-2 15s ease-in-out infinite 1.2s",
        }}
      />

      {/* 05a Lens source dot — beam 2 */}
      <div
        className="uh-lens-2 absolute"
        style={{
          top: "0px",
          left: "calc(33% + 120px - 2px)",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.7)",
          boxShadow: "0 0 6px 2px rgba(255,255,255,0.055)",
          animation: reducedMotion ? "none" : "uh-lens-pulse-2 15s ease-in-out infinite 1.2s",
        }}
      />

      {/* 06 Beam 3 — far-right accent */}
      <div
        className="uh-beam-3 absolute"
        style={{
          top: 0,
          left: "76%",
          width: "180px",
          height: "72%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.045) 12%, rgba(255,255,255,0.01) 50%, transparent 80%)",
          clipPath: "polygon(49% 0%, 51% 0%, 95% 100%, 5% 100%)",
          transformOrigin: "50% 0%",
          filter: "blur(5px)",
          animation: reducedMotion ? "none" : "uh-beam-3 19s ease-in-out infinite 3s",
        }}
      />

      {/* 07 Stadium arc rings — seating tiers */}
      <div
        className="absolute"
        style={{
          top: "2%",
          right: "-12%",
          width: "70%",
          height: "78%",
          pointerEvents: "none",
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 42%, black 72%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 42%, black 72%, transparent 100%)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 640 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Only inner rings — outer ellipses read as horizontal lines at this scale */}
          <ellipse cx="320" cy="276" rx="280" ry="140" stroke="rgba(163,230,53,0.042)" strokeWidth="0.8" />
          <motion.ellipse
            cx="320"
            cy="288"
            rx="180"
            ry="86"
            stroke="rgba(163,230,53,0.065)"
            strokeWidth="0.7"
            fill="none"
            animate={reducedMotion ? {} : { opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <ellipse cx="320" cy="296" rx="90" ry="38" stroke="rgba(255,255,255,0.018)" strokeWidth="0.5" />
          <line
            x1="320" y1="0" x2="320" y2="290"
            stroke="rgba(255,255,255,0.016)"
            strokeWidth="0.5"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      {/* 08 Perspective arena floor grid */}
      <div
        className="uh-grid absolute"
        style={{
          bottom: 0,
          left: "-60%",
          right: "-60%",
          height: "60%",
          backgroundImage: `
            linear-gradient(rgba(163,230,53,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163,230,53,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          transform: "perspective(520px) rotateX(76deg)",
          transformOrigin: "bottom center",
          maskImage: "radial-gradient(ellipse 70% 100% at 50% 100%, black 25%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 100% at 50% 100%, black 25%, transparent 85%)",
          animation: reducedMotion ? "none" : "uh-grid-scroll 5s linear infinite",
        }}
      />

      {/* 09 Floor lime ambient glow */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "48%",
          background:
            "radial-gradient(ellipse 80% 70% at 50% 100%, rgba(132,204,22,0.052) 0%, transparent 70%)",
        }}
      />


      {/* 11 Logo watermark — floor right */}
      <div
        className="absolute"
        style={{
          bottom: "6%",
          right: "4%",
          width: "clamp(170px, 21vw, 300px)",
          opacity: 0.06,
          filter: "grayscale(1) brightness(4) blur(0.5px)",
          pointerEvents: "none",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        <img src="/images/logo.png" alt="" className="w-full" />
      </div>

      {/* 12 Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.lime
              ? `rgba(163,230,53,${Math.min(p.opacity * 2.8, 0.42)})`
              : `rgba(255,255,255,${Math.min(p.opacity * 2.4, 0.36)})`,
            boxShadow:
              p.size === 3
                ? p.lime
                  ? `0 0 5px 2px rgba(163,230,53,${p.opacity * 1.3})`
                  : `0 0 5px 2px rgba(255,255,255,${p.opacity * 0.65})`
                : "none",
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -p.rise, 0],
                  opacity: [p.opacity, p.opacity * 0.1, p.opacity],
                }
          }
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* 13 Film grain / noise */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.04 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="uh-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#uh-grain)" />
      </svg>

      {/* 15 Mouse-reactive lime glow */}
      <div ref={mouseGlowRef} className="absolute inset-0" />

      {/* 16 Bottom site-bg fade */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "130px", background: "linear-gradient(to top, #050505, transparent)" }}
      />

      {/* 18 Top accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(163,230,53,0.28) 25%, rgba(163,230,53,0.5) 50%, rgba(163,230,53,0.28) 75%, transparent 100%)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PASSWORD GATE
───────────────────────────────────────────────────────────────── */

function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const attempt = (e) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === SITE_PASSWORD.toLowerCase()) {
      try { localStorage.setItem("uh_unlocked", "1"); } catch {}
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 520);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px-6">

      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(132,204,22,0.055) 0%, transparent 68%)",
        }}
      />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative flex w-full max-w-[360px] flex-col items-center text-center">

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="The Ultimate Human"
          className="mb-10 h-16 w-auto object-contain md:h-[72px]"
          style={{
            maxWidth: "220px",
            filter: "drop-shadow(0 2px 18px rgba(255,255,255,0.10))",
          }}
        />

        {/* Headline */}
        <h1
          className="text-metallic uppercase"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 5.2rem)",
            lineHeight: 0.96,
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Coming
          <br />
          Soon
        </h1>

        {/* Slogan */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-8 shrink-0 bg-lime-400/45" />
          <p
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400/70"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Measure. Train. Compete. Evolve.
          </p>
          <div className="h-px w-8 shrink-0 bg-lime-400/45" />
        </div>

        {/* Divider */}
        <div className="my-10 w-full border-t border-white/[0.07]" />

        {/* Label */}
        <p
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-neutral-600"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Enter access code to preview
        </p>

        {/* Form */}
        <form onSubmit={attempt} className={`w-full${shake ? " uh-shake" : ""}`}>
          <input
            type="password"
            value={value}
            autoComplete="off"
            placeholder="Access code"
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            className={`uh-code-input${error ? " is-error" : ""} w-full bg-white/[0.03] px-5 py-4 text-center text-[14px] font-semibold uppercase tracking-[0.24em] text-white placeholder-neutral-800`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          />
          {error && (
            <p
              className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-red-400/75"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Incorrect access code
            </p>
          )}
          <button
            type="submit"
            className="btn-lime-glow mt-3 w-full bg-lime-400 py-4 text-[12.5px] font-black uppercase tracking-[0.22em] text-black transition-colors hover:bg-lime-300"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Unlock Preview
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FOUNDER CARD
───────────────────────────────────────────────────────────────── */

function FounderCard({ initials, name, role, quote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="lime-glow-hover relative bg-[#0d0d0d] transition-colors hover:bg-[#0f0f0f]"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-white/[0.12] via-white/[0.06] to-transparent" />
      <div className="p-8">
        <div
          className="mb-6 flex h-14 w-14 items-center justify-center border border-white/[0.12] bg-[#111] text-xl font-bold text-white"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {initials}
        </div>
        <h3 className="text-xl uppercase tracking-wide text-white">{name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-px w-5 shrink-0 bg-lime-400/50" />
          <p
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-lime-400/75"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {role}
          </p>
        </div>
        <p className="mt-5 text-sm leading-7 text-neutral-500">"{quote}"</p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   EVENT STRUCTURE — division-aware mission-control event map
───────────────────────────────────────────────────────────────── */

function FlowNode({ label, sub, run, final: isFinal }) {
  return (
    <div
      className={`flex shrink-0 flex-col items-center justify-center border px-4 py-3 text-center ${
        run
          ? "border-white/10 bg-[#0a0a0a]"
          : isFinal
          ? "border-lime-400/50 bg-lime-400/[0.08]"
          : "border-lime-400/20 bg-[#0d0d0d]"
      }`}
      style={{ minWidth: run ? "74px" : "108px" }}
    >
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
          run ? "text-neutral-500" : isFinal ? "text-lime-300" : "text-lime-400/70"
        }`}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {label}
      </span>
      <span
        className={`mt-1 whitespace-nowrap text-[11px] font-bold uppercase ${
          run ? "text-neutral-300" : "text-white"
        }`}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {sub}
      </span>
    </div>
  );
}

function FlowConnector() {
  return <div className="h-px w-5 shrink-0 bg-lime-400/30" />;
}

function LabourAccordionItem({ labour, division, isOpen, onToggle, index }) {
  const weight = labour.weightKey ? weightsByName[labour.weightKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="bg-[#0d0d0d]"
    >
      <button
        onClick={onToggle}
        className="lime-glow-hover group relative flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[#111]"
        aria-expanded={isOpen}
      >
        <div
          className={`absolute left-0 top-0 h-0 w-px bg-lime-400 transition-all duration-500 ${
            isOpen ? "h-full" : "group-hover:h-full"
          }`}
        />
        <div className="min-w-0">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.38em] text-lime-400/50"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Labour {String(labour.number).padStart(2, "0")}
          </p>
          <p
            className="mt-3 truncate text-sm font-bold uppercase tracking-wide text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {labour.name}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={division}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap text-lg"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#a3e635" }}
            >
              {labour.reps[division]}
            </motion.p>
          </AnimatePresence>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-lime-400" : ""
            }`}
            strokeWidth={2}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[0.06] p-6 pt-5">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-600"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What It Tests
              </p>
              <p className="mt-2 text-[13px] leading-6 text-neutral-300">{labour.tests}</p>

              <div className="mt-5 grid grid-cols-3 gap-px bg-white/[0.05]">
                {divisions.map((d) => (
                  <div
                    key={d.key}
                    className={`bg-[#111] p-3 text-center ${d.key === division ? "ring-1 ring-inset ring-lime-400/35" : ""}`}
                  >
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-600"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {d.label}
                    </p>
                    <p className="mt-1 text-[12px] font-bold text-neutral-200">{labour.reps[d.key]}</p>
                  </div>
                ))}
              </div>

              {weight && (
                <div className="mt-5 flex items-start gap-3">
                  <Weight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime-400" strokeWidth={1.5} />
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Suggested Working Weight · {divisions.find((d) => d.key === division).label}
                    </p>
                    <p className="mt-1 text-[13px] text-neutral-300">
                      Women: <span className="font-bold text-white">{weight[division].women}</span>
                      <span className="px-2 text-neutral-600">·</span>
                      Men: <span className="font-bold text-white">{weight[division].men}</span>
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-5 border-l-2 border-lime-400/30 pl-4">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400/70"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Coaching Note
                </p>
                <p className="mt-1.5 text-[13px] leading-5 text-neutral-400">{labour.coachingNote}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function WorkingWeightsPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-px bg-[#0d0d0d]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[#111]"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <Weight className="h-4 w-4 text-lime-400" strokeWidth={1.5} />
          <span
            className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Suggested Working Weights
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-lime-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[0.06] p-6 pt-5">
              <p className="mb-4 text-[12.5px] leading-6 text-neutral-500">
                Indicative loads to guide training. Final event weights will be confirmed
                closer to launch.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th
                        className="py-3 pr-4 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-600"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        Labour
                      </th>
                      {["Foundation", "Intermediate", "Elite"].map((d) => (
                        <th
                          key={d}
                          colSpan={2}
                          className="py-3 pr-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-lime-400/70"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {d}
                        </th>
                      ))}
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <th className="py-2 pr-4" />
                      {["Women", "Men", "Women", "Men", "Women", "Men"].map((g, i) => (
                        <th
                          key={i}
                          className="py-2 pr-4 text-center text-[9.5px] font-bold uppercase tracking-[0.14em] text-neutral-600"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {g}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {workingWeights.map((w) => (
                      <tr key={w.name} className="border-b border-white/[0.05] last:border-0">
                        <td className="py-3 pr-4 text-[12.5px] font-bold text-white">{w.name}</td>
                        <td className="py-3 pr-4 text-center text-[12.5px] text-neutral-300">{w.foundation.women}</td>
                        <td className="py-3 pr-4 text-center text-[12.5px] text-neutral-300">{w.foundation.men}</td>
                        <td className="py-3 pr-4 text-center text-[12.5px] text-neutral-300">{w.intermediate.women}</td>
                        <td className="py-3 pr-4 text-center text-[12.5px] text-neutral-300">{w.intermediate.men}</td>
                        <td className="py-3 pr-4 text-center text-[12.5px] text-neutral-300">{w.elite.women}</td>
                        <td className="py-3 pr-4 text-center text-[12.5px] text-neutral-300">{w.elite.men}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EventStructureSection() {
  const [division, setDivision] = useState("intermediate");
  const [openLabour, setOpenLabour] = useState(1);
  const [finalOpen, setFinalOpen] = useState(false);
  const current = divisions.find((d) => d.key === division);

  return (
    <section id="format" className="border-t border-white/[0.06] bg-[#080808] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>The UHS Event Structure</SectionLabel>
            <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
              10 Labours.
              <br />
              One Continuous Test.
            </h2>
            <p className="mt-5 text-lg leading-7 text-neutral-400">
              A run before every labour. Nine capability tests. One final circuit.
              Choose a division, then open a labour to see exactly what it tests.
            </p>
          </div>

          {/* Division selector */}
          <div className="flex shrink-0 gap-px bg-white/[0.06]">
            {divisions.map((d) => (
              <button
                key={d.key}
                onClick={() => setDivision(d.key)}
                className={`px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors ${
                  division === d.key
                    ? "bg-lime-400 text-black"
                    : "bg-[#0d0d0d] text-neutral-400 hover:bg-[#151515] hover:text-white"
                }`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Division distance summary */}
        <AnimatePresence mode="wait">
          <motion.div
            key={division}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mb-px grid grid-cols-1 gap-px bg-white/[0.05] sm:grid-cols-3"
          >
            {[
              ["Run Before Each Labour", current.runDistance],
              ["Final Run · Labour 10", current.finalRun],
              ["Total Running Distance", current.totalRunning],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#0d0d0d] p-6 text-center">
                <p
                  className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-neutral-600"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {label}
                </p>
                <p
                  className="mt-3 text-3xl text-lime-400"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                >
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Event flow map — mission-control route */}
        <div className="mt-10 overflow-x-auto pb-4">
          <div className="flex min-w-max items-center gap-1.5 px-1">
            {labours.map((labour) => (
              <React.Fragment key={labour.number}>
                <FlowNode label="Run" sub={current.runDistance} run />
                <FlowConnector />
                <FlowNode label={`L${labour.number}`} sub={labour.name} />
                <FlowConnector />
              </React.Fragment>
            ))}
            <FlowNode label="L10" sub="Final Circuit" final />
          </div>
        </div>

        {/* Labours 1–9 — accordion, one open at a time */}
        <div className="mt-12 space-y-px bg-white/[0.05]">
          {labours.map((labour, index) => (
            <LabourAccordionItem
              key={labour.number}
              labour={labour}
              division={division}
              index={index}
              isOpen={openLabour === labour.number}
              onToggle={() => setOpenLabour((prev) => (prev === labour.number ? null : labour.number))}
            />
          ))}
        </div>

        {/* Labour 10 — Final Circuit, highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative mt-px bg-[#0d0d0d] ring-1 ring-lime-400/40"
        >
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-lime-400 to-transparent" />
          <button
            onClick={() => setFinalOpen((o) => !o)}
            className="flex w-full items-center justify-between gap-4 p-6 text-left"
            aria-expanded={finalOpen}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-lime-400/40 bg-lime-400/[0.08]">
                <Sparkles className="h-4 w-4 text-lime-400" strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.38em] text-lime-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Labour 10 · The Finisher
                </p>
                <p
                  className="mt-1 text-sm font-bold uppercase tracking-wide text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Final Circuit
                </p>
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-lime-400 transition-transform duration-300 ${
                finalOpen ? "rotate-180" : ""
              }`}
              strokeWidth={2}
            />
          </button>

          <AnimatePresence initial={false}>
            {finalOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-lime-400/20 p-6 pt-5">
                  <p className="mb-4 text-[13px] leading-6 text-neutral-400">
                    Five back-to-back elements with no rest. Everything you've tested across
                    the previous nine labours, compressed into one final push.
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={division}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2"
                    >
                      {finalCircuit[division].map(([name, value]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between border-b border-white/[0.06] pb-2 last:border-0 last:pb-0"
                        >
                          <span
                            className="text-[12.5px] text-neutral-400"
                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                          >
                            {name}
                          </span>
                          <span
                            className="text-[12.5px] font-bold text-lime-400"
                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Suggested Working Weights — collapsed by default */}
        <WorkingWeightsPanel />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   AI COACHING DASHBOARD
───────────────────────────────────────────────────────────────── */

const aiTabs = [
  { key: "profile", label: "Profile" },
  { key: "movement", label: "Movement Analysis" },
  { key: "gains", label: "Score Gains" },
  { key: "coaching", label: "Coaching Output" },
];

function HowItWorksCard({ step, index }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quotesOpen, setQuotesOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-[#0d0d0d] p-8"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center border border-lime-400/20 bg-lime-400/[0.04]">
        <step.icon className="h-5 w-5 text-lime-400" strokeWidth={1.5} />
      </div>
      <p
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400/60"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Step {index + 1}
      </p>
      <h3 className="mt-2 text-xl uppercase tracking-wide text-white">{step.title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-400">{step.text}</p>

      {step.videos && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {step.videos.map((label) => (
            <div
              key={label}
              className="group relative flex aspect-square flex-col items-center justify-center gap-1.5 border border-white/[0.08] bg-[#111] px-1.5 text-center transition-colors hover:border-lime-400/30"
            >
              <PlayCircle
                className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-lime-400"
                strokeWidth={1.5}
              />
              <p className="text-[9.5px] font-bold uppercase leading-tight tracking-[0.06em] text-neutral-400">
                {label}
              </p>
              <span className="absolute left-1 top-1 text-[8px] font-bold uppercase tracking-[0.1em] text-neutral-600">
                Sample
              </span>
            </div>
          ))}
        </div>
      )}

      {step.categories && (
        <>
          <button
            onClick={() => setDrawerOpen((o) => !o)}
            className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-lime-400/80 transition-colors hover:text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            aria-expanded={drawerOpen}
          >
            What UH Analyses
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${drawerOpen ? "rotate-180" : ""}`}
              strokeWidth={2}
            />
          </button>
          <AnimatePresence initial={false}>
            {drawerOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.categories.map((cat) => (
                    <span
                      key={cat}
                      className="cursor-default border border-lime-400/20 bg-lime-400/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-lime-400/80 transition-colors hover:border-lime-400/45 hover:bg-lime-400/[0.09] hover:text-lime-300"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {step.quotes && (
        <>
          <button
            onClick={() => setQuotesOpen((o) => !o)}
            className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-lime-400/80 transition-colors hover:text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            aria-expanded={quotesOpen}
          >
            See Example Feedback
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${quotesOpen ? "rotate-180" : ""}`}
              strokeWidth={2}
            />
          </button>
          <AnimatePresence initial={false}>
            {quotesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-2">
                  {step.quotes.map((quote) => (
                    <p
                      key={quote}
                      className="border-l-2 border-lime-400/40 bg-lime-400/[0.04] py-1.5 pl-3 text-[12.5px] italic leading-5 text-neutral-300"
                    >
                      "{quote}"
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
}

function ImprovementAreasPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12 border border-white/[0.08] bg-[#0a0a0a]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-7 text-left transition-colors hover:bg-[#0d0d0d]"
      >
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400/70"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Every Assessment Includes
          </p>
          <h3 className="mt-2 text-xl uppercase tracking-wide text-white md:text-2xl">
            See Exactly Where You Can Improve
          </h3>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-px bg-white/[0.06] border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
              {aiImprovementAreas.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-[#0d0d0d] p-6">
                  <Icon className="h-5 w-5 text-lime-400" strokeWidth={1.5} />
                  <h4 className="mt-4 text-[13px] font-bold uppercase leading-tight tracking-[0.06em] text-white">
                    {title}
                  </h4>
                  <p className="mt-2 text-[12.5px] leading-5 text-neutral-500">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PersonalCapabilityCoach() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 border border-lime-400/[0.15] bg-lime-400/[0.03] p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-lime-400/30 bg-lime-400/[0.08]">
          <Sparkles className="h-4 w-4 text-lime-400" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h4 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
            Your Personal Capability Coach
          </h4>
          <p className="mt-2 text-[13px] leading-5 text-neutral-400">
            As athletes upload more videos and complete more challenges, their UH
            profile evolves over time — revealing strengths, limitations, movement
            improvements and the next best training focus.
          </p>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-3 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime-400/80 transition-colors hover:text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What Your Profile Tracks
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              strokeWidth={2}
            />
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {aiProfileEvolution.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime-400" strokeWidth={2} />
                      <p className="text-[12.5px] leading-5 text-neutral-400">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MOVEMENT COACH PREVIEW (inside AI Coaching section)
───────────────────────────────────────────────────────────────── */

function MovementCoachPreview() {
  const [openCard, setOpenCard] = useState(movementCoachCards[0].title);

  return (
    <div className="mt-12">
      <div className="mb-5 flex items-center gap-3">
        <Film className="h-4 w-4 text-lime-400" strokeWidth={1.5} />
        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
          Movement Coach Preview
        </h3>
      </div>
      <div className="grid gap-px bg-white/[0.05] md:grid-cols-3">
        {movementCoachCards.map((card) => {
          const isOpen = openCard === card.title;
          return (
            <div key={card.title} className="bg-[#0d0d0d] p-6 transition-colors hover:bg-[#111]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold uppercase tracking-wide text-white">{card.title}</p>
                <span className="flex shrink-0 items-center gap-1.5 border border-lime-400/30 bg-lime-400/[0.08] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-lime-400">
                  <CheckCircle2 className="h-3 w-3" strokeWidth={2} />
                  Analysed
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpenCard(isOpen ? null : card.title)}
                aria-expanded={isOpen}
                className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-lime-400/80 transition-colors hover:text-lime-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {isOpen ? "Hide Analysis" : "Show Analysis"}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  strokeWidth={2}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3.5">
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          What UH Sees
                        </p>
                        <p className="mt-1.5 text-[13px] leading-5 text-neutral-300">{card.sees}</p>
                      </div>
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          Coaching Cue
                        </p>
                        <p className="mt-1.5 text-[13px] leading-5 text-lime-300">{card.cue}</p>
                      </div>
                      <div className="flex items-center justify-between border border-white/[0.08] bg-[#111] px-3 py-2.5">
                        <span
                          className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          Est. Score Gain
                        </span>
                        <span
                          className="text-[12px] font-bold text-white"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {card.from} <span className="text-neutral-600">→</span>{" "}
                          <span className="text-lime-400">{card.to}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   YOUR JOURNEY HUB
───────────────────────────────────────────────────────────────── */

function JourneyModal({ title, onClose, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto border border-white/[0.1] bg-[#0b0b0b] p-7"
      >
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/55 to-transparent" />
        <div className="flex items-center justify-between">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {title}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center border border-white/[0.1] text-neutral-400 transition-colors hover:border-white/25 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </motion.div>
    </motion.div>
  );
}

function AthleteTypeQuiz({ onClose }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState({});
  const total = journeyQuizQuestions.length;
  const isResult = step >= total;

  const choose = (qIndex, option) => {
    setSelected((prev) => ({ ...prev, [qIndex]: option }));
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  if (isResult) {
    return (
      <div>
        <div className="mb-5 h-1 w-full bg-lime-400" />
        <p
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Your Snapshot Result
        </p>
        <h3 className="mt-2 text-3xl uppercase tracking-tight text-white">The Hybrid</h3>
        <div className="mt-6 space-y-px bg-white/[0.05]">
          {[
            ["Likely Strengths", "Stamina + Coordination"],
            ["Limiting Factor", "Strength under fatigue"],
            ["Recommended Entry", "Intermediate"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between bg-[#111] px-4 py-3">
              <span
                className="text-[12px] text-neutral-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </span>
              <span className="text-[12px] font-bold text-lime-400">{value}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12.5px] leading-5 text-neutral-500">
          This is a quick preview — your full UHS Report breaks this down across all 10 capability
          pillars.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#score"
            onClick={onClose}
            className="btn-lime-glow flex-1 border border-lime-400 bg-lime-400 px-5 py-3 text-center text-[12px] font-black uppercase tracking-[0.16em] text-black no-underline transition-colors hover:bg-lime-300"
          >
            See Full Score Breakdown
          </a>
          <a
            href="#signup"
            onClick={onClose}
            className="flex-1 border border-white/20 bg-white/[0.04] px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.16em] text-white no-underline transition-colors hover:border-white/35 hover:bg-white/[0.08]"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    );
  }

  const question = journeyQuizQuestions[step];

  return (
    <div>
      <div className="mb-5 h-1 w-full bg-white/[0.06]">
        <motion.div
          className="h-1 bg-lime-400"
          initial={{ width: 0 }}
          animate={{ width: `${(step / total) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Question {step + 1} of {total}
      </p>
      <h3 className="mt-2 text-xl leading-7 text-white">{question.q}</h3>
      <div className="mt-5 space-y-2.5">
        {question.options.map((option) => {
          const isSelected = selected[step] === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(step, option)}
              className={`block w-full border px-4 py-3 text-left text-[13.5px] transition-colors ${
                isSelected
                  ? "border-lime-400 bg-lime-400/[0.12] text-lime-300"
                  : "border-white/[0.1] bg-white/[0.02] text-neutral-300 hover:border-lime-400/30 hover:bg-white/[0.05]"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FullAssessmentPreview({ onClose }) {
  return (
    <div>
      <p className="text-[13px] leading-5 text-neutral-400">
        The full Human Context assessment captures the inputs behind your UHS Report — training
        history, movement confidence and goals.
      </p>
      <div className="mt-5 space-y-px bg-white/[0.05]">
        {[
          ["Training Frequency", "3–4 sessions / week"],
          ["Strength Background", "Regular gym training"],
          ["Movement Confidence", "Good"],
          ["Biggest Concern", "Fatigue & form loss"],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between bg-[#111] px-4 py-3">
            <span
              className="text-[12px] text-neutral-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {label}
            </span>
            <span
              className="text-[12px] font-bold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[12.5px] leading-5 text-neutral-500">
        This feeds your UHS Score, your Athlete Type and your AI training focus.
      </p>
      <a
        href="#coaching"
        onClick={onClose}
        className="btn-lime-glow mt-6 flex items-center justify-center border border-lime-400 bg-lime-400 px-5 py-3 text-center text-[12px] font-black uppercase tracking-[0.16em] text-black no-underline transition-colors hover:bg-lime-300"
      >
        See the Full AI Dashboard
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}

const journeyCards = [
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
    text: "Preview the Human Context inputs behind your UHS Report.",
    cta: "Preview Assessment",
    action: "modal",
  },
  {
    key: "score",
    icon: Calculator,
    title: "Score Simulator",
    text: "See how the Ultimate Human Score is calculated.",
    cta: "Open Score Dashboard",
    action: "scroll",
    href: "#score",
  },
  {
    key: "train",
    icon: Dumbbell,
    title: "Train to Improve",
    text: "Explore the event structure, labours and working weights.",
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

function YourJourneyHub() {
  const [modal, setModal] = useState(null);

  return (
    <section className="border-t border-white/[0.06] bg-[#070707] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionLabel>Start Here</SectionLabel>
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Your Journey to
            <br />
            The Ultimate Human.
          </h2>
          <p className="mt-5 text-lg leading-7 text-neutral-400">
            Five steps. One profile that gets sharper every time you use it.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-5">
          {journeyCards.map((card, i) => {
            const Icon = card.icon;
            const cardBody = (
              <>
                <div className="absolute left-0 top-0 h-px w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />
                <div className="flex h-11 w-11 items-center justify-center border border-white/[0.1] bg-white/[0.03] transition-colors group-hover:border-lime-400/40 group-hover:bg-lime-400/[0.08]">
                  <Icon
                    className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-lime-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-neutral-500">{card.text}</p>
                <span
                  className="mt-5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-lime-400/80 transition-colors group-hover:text-lime-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {card.cta}
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </>
            );

            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                {card.action === "scroll" ? (
                  <a
                    href={card.href}
                    className="group relative flex flex-col items-start overflow-hidden bg-[#0d0d0d] p-6 text-left no-underline transition-colors hover:bg-[#111]"
                  >
                    {cardBody}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setModal(card.key)}
                    className="group relative flex w-full flex-col items-start overflow-hidden bg-[#0d0d0d] p-6 text-left transition-colors hover:bg-[#111]"
                  >
                    {cardBody}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {modal === "quiz" && (
          <JourneyModal title="Discover Your Type" onClose={() => setModal(null)}>
            <AthleteTypeQuiz onClose={() => setModal(null)} />
          </JourneyModal>
        )}
        {modal === "assessment" && (
          <JourneyModal title="Full Assessment Preview" onClose={() => setModal(null)}>
            <FullAssessmentPreview onClose={() => setModal(null)} />
          </JourneyModal>
        )}
      </AnimatePresence>
    </section>
  );
}

const scoreTabs = [
  { key: "overview", label: "Overview" },
  { key: "breakdown", label: "Capability Breakdown" },
  { key: "path", label: "Improvement Path" },
];

function ScoreSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const overviewPanel = (
    <div className="grid gap-px bg-white/[0.05] md:grid-cols-[1fr_1.1fr]">
      <div className="bg-[#0d0d0d] p-7 md:p-8">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-600"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          What It Means
        </p>
        <p className="mt-4 text-base leading-7 text-neutral-400">
          Your score is calculated using our proprietary algorithm, which weights your
          performance across ten capability areas: strength, power, endurance, speed,
          mobility, coordination, resilience, balance, recovery and control under
          pressure.
        </p>
        <p className="mt-4 text-base leading-7 text-neutral-400">
          The scoring model also takes into account factors such as your age category and
          previous athletic experience to create a more meaningful and balanced assessment
          of your overall human capability.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#0d0d0d] p-9">
        <Gauge className="h-10 w-10 text-neutral-700" strokeWidth={1} />
        <p
          className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-600"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Overall Score
        </p>
        <p
          className="mt-2 text-5xl text-white"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          71<span className="ml-1 text-lg font-normal text-neutral-600">/100</span>
        </p>
        <div className="mt-5 h-1.5 w-full max-w-xs bg-white/[0.06]">
          <motion.div
            className="h-1.5 bg-gradient-to-r from-lime-400 to-lime-600"
            style={{ boxShadow: "0 0 10px rgba(163,230,53,0.4)" }}
            initial={{ width: 0 }}
            whileInView={{ width: "71%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
        <p className="mt-3 text-[11px] text-neutral-600">
          Sample score — your result is generated on event day
        </p>
      </div>
    </div>
  );

  const breakdownPanel = (
    <div className="space-y-px bg-white/[0.05]">
      {domains.map((d, i) => (
        <motion.div
          key={d.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
          className="bg-[#0d0d0d] p-6"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base uppercase tracking-wide text-white">{d.title}</h3>
            <p className="text-[13px] font-bold text-lime-400">{d.value}<span className="text-neutral-600">/100</span></p>
          </div>
          <p className="mt-1.5 text-sm leading-6 text-neutral-500">{d.text}</p>
          <div className="mt-3 h-1 w-full bg-white/[0.06]">
            <motion.div
              className="h-1 bg-lime-400"
              style={{ boxShadow: "0 0 8px rgba(163,230,53,0.45)" }}
              initial={{ width: 0 }}
              whileInView={{ width: `${d.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 + 0.15, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const pathPanel = (
    <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2">
      {uhsReveals.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.06 }}
          className="flex gap-3 bg-[#0d0d0d] p-6"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" strokeWidth={2} />
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-white">
              {item.title}
            </p>
            <p className="mt-1.5 text-sm leading-6 text-neutral-500">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const tabContent = { overview: overviewPanel, breakdown: breakdownPanel, path: pathPanel };

  return (
    <section id="score" className="relative border-t border-lime-400/[0.07] bg-[#060606] px-6 py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(255,255,255,0.016) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionLabel>Your Personal Benchmark</SectionLabel>
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Leave with More
            <br />
            Than a Medal.
          </h2>
          <p className="mt-6 text-lg leading-7 text-neutral-400">
            Every participant receives an Ultimate Human Score showing performance across
            ten capability areas — the whole human, not just the parts that are easy to
            measure. The aim is simple: come back better.
          </p>
        </div>

        <div className="mb-px flex gap-px overflow-x-auto bg-white/[0.05]">
          {scoreTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 shrink-0 whitespace-nowrap px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors ${
                activeTab === tab.key
                  ? "bg-lime-400 text-black"
                  : "bg-[#0d0d0d] text-neutral-400 hover:bg-[#141414] hover:text-white"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function AICoachingSection() {
  const [tick, setTick] = useState(0);
  const [activeTab, setActiveTab] = useState("profile");

  const profilePanel = (
    <div className="bg-[#0d0d0d] p-7">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-600"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        01 Athlete Inputs
      </p>
      <div className="mt-6 space-y-4">
        {[
          ["Name", "Sarah"],
          ["Age", "42"],
          ["Division", "Intermediate"],
          ["Training Frequency", "3–4 sessions / week"],
          ["Strength Background", "Regular gym training"],
          ["Movement Confidence", "Good"],
          ["Biggest Concern", "Fatigue & form loss"],
        ].map(([label, value]) => (
          <div key={label}>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-600"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {label}
            </p>
            <div
              className="mt-1.5 border border-white/[0.08] bg-[#111] px-3 py-2.5 text-[13px] text-neutral-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setTick((t) => t + 1)}
        className="btn-lime-glow mt-7 w-full border border-lime-400 bg-lime-400 px-5 py-3.5 text-[12px] font-black uppercase tracking-[0.18em] text-black transition-colors hover:bg-lime-300"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Generate Race Prediction
      </button>
    </div>
  );

  const movementPanel = (
    <motion.div
      key={`movement-${tick}`}
      initial={{ boxShadow: "0 0 0px rgba(163,230,53,0)" }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(163,230,53,0)",
          "0 0 26px rgba(163,230,53,0.28)",
          "0 0 0px rgba(163,230,53,0)",
        ],
      }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="bg-[#0d0d0d] p-7"
    >
      <p
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-600"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        02 Predicted UHS
      </p>
      <div className="mt-6 flex items-end gap-5">
        <p
          className="text-6xl text-lime-400"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          77
        </p>
        <div className="pb-2">
          <p
            className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Athlete Type
          </p>
          <p
            className="text-xl uppercase tracking-wide text-white"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            The Hybrid
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-px bg-white/[0.05]">
        <div className="bg-[#111] p-4">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-600"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Predicted Completion
          </p>
          <p className="mt-1.5 text-base font-bold text-white">108–110 min</p>
        </div>
        <div className="bg-[#111] p-4">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-600"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Recommended Entry
          </p>
          <p className="mt-1.5 text-base font-bold text-lime-400">Intermediate</p>
        </div>
      </div>

      <div className="mt-7 space-y-3.5">
        {aiScoreBars.map((bar, i) => (
          <div key={bar.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {bar.label}
              </span>
              <span className="text-[11px] font-bold text-lime-400">{bar.value}</span>
            </div>
            <div className="h-1.5 w-full bg-white/[0.06]">
              <motion.div
                key={tick}
                className="h-1.5 bg-lime-400"
                style={{ boxShadow: "0 0 8px rgba(163,230,53,0.45)" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.value}%` }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const gainsPanel = (
    <motion.div
      key={`gains-${tick}`}
      initial={{ boxShadow: "0 0 0px rgba(163,230,53,0)" }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(163,230,53,0)",
          "0 0 26px rgba(163,230,53,0.28)",
          "0 0 0px rgba(163,230,53,0)",
        ],
      }}
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
    >
      <h4 className="text-sm font-bold uppercase tracking-wide text-white">
        Estimated Score Gain
      </h4>
      <div className="mt-3 space-y-px bg-white/[0.05]">
        {aiScoreGains.map((g) => (
          <div key={g.label} className="flex items-center justify-between bg-[#111] px-4 py-3">
            <span
              className="text-[12px] text-neutral-300"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {g.label}
            </span>
            <span
              className="text-[12px] font-bold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {g.from} <span className="text-neutral-600">→</span>{" "}
              <span className="text-lime-400">{g.to}</span>
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const coachingPanel = (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wide text-white">
        Training Focus
      </h4>
      <div className="mt-3 space-y-2.5">
        {aiTrainingFocus.map((point, i) => (
          <div key={point} className="flex gap-3">
            <span className="text-[12px] font-bold text-lime-400">{i + 1}</span>
            <p className="text-[13px] leading-5 text-neutral-300">{point}</p>
          </div>
        ))}
      </div>

      <a
        href="#signup"
        className="group mt-7 flex items-center gap-4 border border-lime-400/25 bg-lime-400/[0.05] p-4 no-underline transition-colors hover:border-lime-400/50 hover:bg-lime-400/[0.09]"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-lime-400/30 bg-lime-400/[0.08]">
          <MessageCircle className="h-4 w-4 text-lime-400" strokeWidth={1.5} />
        </div>
        <div>
          <p
            className="text-[12px] font-bold uppercase tracking-[0.16em] text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ask a Coach
          </p>
          <p className="mt-0.5 text-[12px] text-neutral-400">
            Need help interpreting your score? Ask a coach.
          </p>
        </div>
        <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-lime-400 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );

  const tabContent = {
    profile: profilePanel,
    movement: movementPanel,
    gains: <div className="bg-[#0d0d0d] p-7">{gainsPanel}</div>,
    coaching: <div className="bg-[#0d0d0d] p-7">{coachingPanel}</div>,
  };

  return (
    <section id="coaching" className="border-t border-lime-400/[0.07] bg-[#060606] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <SectionLabel>Built by Coaches. Powered by AI.</SectionLabel>
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Improve Your Movement.
            <br />
            Improve Your Score.
          </h2>
          <p className="mt-5 text-lg leading-7 text-neutral-400">
            Most fitness platforms tell you to work harder. Ultimate Human helps you
            move better. Upload a video of your exercise and the UH AI coaching
            platform is being built to analyse your movement against the Ultimate
            Human Movement Standard™ — developed by coaches, athletes and movement
            specialists.
          </p>

          <p
            className="mt-7 text-[12px] font-bold uppercase tracking-[0.26em] text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Form Beats Speed. Technique Beats Weight.
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {[
              "Moving more efficiently",
              "Better balance & coordination",
              "More power from technique",
              "Reducing energy leaks",
              "Managing fatigue",
            ].map((tag) => (
              <span
                key={tag}
                className="cursor-default border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 text-[11px] text-neutral-400 transition-colors hover:border-lime-400/30 hover:text-lime-300"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile / tablet — tabbed dashboard */}
        <div className="lg:hidden">
          <div className="flex gap-px overflow-x-auto bg-white/[0.06]">
            {aiTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                  activeTab === tab.key
                    ? "bg-lime-400 text-black"
                    : "bg-[#0d0d0d] text-neutral-400 hover:bg-[#151515] hover:text-white"
                }`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mt-px"
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop — full 3-column dashboard */}
        <div className="hidden gap-px bg-white/[0.06] lg:grid lg:grid-cols-3">
          {profilePanel}
          {movementPanel}
          <div className="space-y-7 bg-[#0d0d0d] p-7">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-600"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              03 Coaching Output
            </p>
            {coachingPanel}
            {gainsPanel}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12 grid gap-px bg-white/[0.05] md:grid-cols-3">
          {aiHowItWorks.map((step, i) => (
            <HowItWorksCard key={step.title} step={step} index={i} />
          ))}
        </div>

        <MovementCoachPreview />
        <ImprovementAreasPanel />
        <PersonalCapabilityCoach />

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-7 text-neutral-300">
          The AI is not replacing coaches. It is making expert coaching accessible to
          every athlete, every day.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SUBSCRIPTIONS
───────────────────────────────────────────────────────────────── */

function WhyDifferentExplainer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-px bg-[#0a0a0a] p-9 md:p-11">
      <p className="max-w-3xl text-lg leading-8 text-neutral-300">
        One score. Ten capabilities. The complete picture of how human you really are.
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-lime-400"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {open ? "Hide Full Explanation" : "Show Full Explanation"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <p className="max-w-3xl text-base leading-7 text-neutral-400">
                To achieve complete optimisation, full fitness and longevity, we need
                to measure everything that makes the Ultimate Human.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Strength",
                  "Power",
                  "Endurance",
                  "Speed",
                  "Mobility",
                  "Coordination",
                  "Resilience",
                  "Balance",
                  "Recovery",
                  "Control Under Pressure",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-lime-400/25 bg-lime-400/[0.05] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-lime-400"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TierCard({ tier, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative flex flex-col bg-[#0d0d0d] p-7 transition-colors ${
        tier.highlighted ? "ring-1 ring-lime-400/40" : "hover:bg-[#111]"
      }`}
    >
      {tier.highlighted && (
        <>
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-lime-400 to-transparent" />
          <span
            className="absolute right-6 top-6 text-[9.5px] font-bold uppercase tracking-[0.2em] text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Most Capability
          </span>
        </>
      )}
      <div
        className={`flex h-11 w-11 items-center justify-center border ${
          tier.highlighted
            ? "border-lime-400/40 bg-lime-400/[0.08]"
            : "border-white/[0.12] bg-white/[0.03]"
        }`}
      >
        <tier.icon
          className={`h-5 w-5 ${tier.highlighted ? "text-lime-400" : "text-neutral-500"}`}
          strokeWidth={1.5}
        />
      </div>
      <h3 className="mt-6 text-xl uppercase tracking-wide text-white">{tier.name}</h3>
      <p className="mt-2 text-[13px] leading-5 text-neutral-400">{tier.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-lime-400"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {open ? "Hide Details" : "View Details"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3 pb-1">
              {tier.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                      tier.highlighted ? "text-lime-400" : "text-neutral-600"
                    }`}
                    strokeWidth={2}
                  />
                  <p className="text-[13px] leading-5 text-neutral-400">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1" />
      <a
        href="#signup"
        className={`mt-7 block px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.18em] no-underline transition-colors ${
          tier.highlighted
            ? "btn-lime-glow border border-lime-400 bg-lime-400 text-black hover:bg-lime-300"
            : "border border-white/20 bg-white/[0.03] text-white hover:border-white/40 hover:bg-white/[0.08]"
        }`}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {tier.cta}
      </a>
    </motion.div>
  );
}

function SubscriptionSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#050505] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 inline-flex items-center gap-2.5 border border-amber-400/15 bg-amber-400/[0.03] px-3.5 py-1.5">
          <AlertTriangle className="h-3 w-3 text-amber-400/80" strokeWidth={1.5} />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-400/80"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Pre-Launch · Details Subject to Change
          </span>
        </div>

        <div className="mb-14 max-w-2xl">
          <SectionLabel>Membership</SectionLabel>
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            One Platform.
            <br />
            Every Level of Athlete.
          </h2>
          <p className="mt-5 text-lg leading-7 text-neutral-400">
            The Ultimate Human is being built as an ongoing platform, not just an
            event. Subscriptions will give athletes, coaches, gyms and teams
            continuous access to scoring, training insight and AI-assisted coaching.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-4">
          {subscriptionTiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <div className="mt-px flex flex-wrap items-center justify-between gap-4 bg-[#0a0a0a] p-6">
          <p className="text-[13px] text-neutral-400">
            Questions about subscriptions, scoring or training focus?
          </p>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 border border-lime-400/30 bg-lime-400/[0.05] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-lime-400 no-underline transition-colors hover:border-lime-400/55 hover:bg-lime-400/[0.1]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <MessageCircle className="h-3.5 w-3.5" /> Ask a Coach
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────────── */

export default function App() {
  /* Gate — all hooks must come before any conditional return */
  const [unlocked, setUnlocked] = useState(() => {
    try { return localStorage.getItem("uh_unlocked") === "1"; } catch { return false; }
  });
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();

  /* Headline glow — grey-to-white metallic gradient brightens as the user scrolls */
  const { scrollY } = useScroll();
  const headlineGlow = useTransform(scrollY, [0, 320], [0, 1]);
  const headlineBackground = useTransform(
    headlineGlow,
    [0, 1],
    [
      "linear-gradient(170deg, #ffffff 0%, #e0e0e0 30%, #a0a0a0 65%, #707070 100%)",
      "linear-gradient(170deg, #ffffff 0%, #ffffff 30%, #ffffff 65%, #ffffff 100%)",
    ]
  );
  const headlineFilter = useTransform(
    headlineGlow,
    [0, 1],
    [
      "drop-shadow(0 0 0px rgba(255,255,255,0)) drop-shadow(0 0 0px rgba(163,230,53,0))",
      "drop-shadow(0 0 10px rgba(255,255,255,0.65)) drop-shadow(0 0 26px rgba(163,230,53,0.4))",
    ]
  );

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050505]/94 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          {/* Logo + separator */}
          <div className="flex items-center gap-6 shrink-0">
            <a href="#" className="shrink-0 no-underline">
              <img
                src="/images/logo.png"
                alt="The Ultimate Human"
                className="h-10 w-auto object-contain md:h-12"
                style={{
                  maxWidth: "160px",
                  filter: "drop-shadow(0 1px 10px rgba(255,255,255,0.08))",
                }}
              />
            </a>
            <div className="hidden md:block h-6 w-px shrink-0 bg-white/[0.09]" />
          </div>

          <nav className="hidden gap-8 md:flex">
            {[
              { label: "The Challenge", href: "#challenge" },
              { label: "Format", href: "#format" },
              { label: "Score", href: "#score" },
              { label: "Categories", href: "#categories" },
              { label: "Sign Up", href: "#signup" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[11.5px] font-bold uppercase tracking-[0.22em] text-neutral-500 no-underline transition-colors hover:text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#signup"
            className="btn-lime-glow border border-lime-400 bg-lime-400 px-5 py-2.5 text-[11.5px] font-black uppercase tracking-[0.18em] text-black no-underline transition-colors hover:bg-lime-300 hover:border-lime-300"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Join the Waitlist
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="uh-hero-overlay relative flex min-h-[92vh] items-center overflow-hidden bg-[#050505]"
        >
          <HeroArenaBackground heroRef={heroRef} reducedMotion={reducedMotion} />

          <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-[640px]"
            >
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-3 border border-lime-400/25 bg-lime-400/[0.06] px-4 py-2.5">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
                <span
                  className="text-[11.5px] font-bold uppercase tracking-[0.26em] text-lime-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Founding Athlete Waitlist Now Open
                </span>
              </div>

              {/* Headline with vertical left accent */}
              <div className="relative pl-5 md:pl-6">
                {/* Vertical lime bar — fades into the arena graphics below */}
                <div
                  className="absolute left-0 top-0 w-[2px]"
                  style={{
                    height: "115%",
                    background:
                      "linear-gradient(to bottom, rgba(163,230,53,0.9) 0%, rgba(163,230,53,0.7) 38%, rgba(163,230,53,0.25) 70%, transparent 100%)",
                  }}
                />
                <motion.h1
                  className="text-metallic uppercase leading-none tracking-tight"
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 5rem)",
                    lineHeight: 1.03,
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    backgroundImage: reducedMotion ? undefined : headlineBackground,
                    filter: reducedMotion ? undefined : headlineFilter,
                  }}
                >
                  The AI-Powered
                  <br />
                  Operating System
                  <br />
                  for Human
                  <br />
                  Performance
                </motion.h1>

                {/* Slogan — indented to sit flush with headline text */}
                <p
                  className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400/75"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Measure. Train. Compete. Evolve.
                </p>
              </div>

              {/* Sub-copy */}
              <p
                className="mt-5 max-w-xl text-base leading-7 text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
              >
                Most races only measure one or two aspects of capability.{" "}
                <span className="text-lime-400">UH goes further.</span>
              </p>
              <p
                className="mt-3 max-w-xl text-base leading-7 text-neutral-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
              >
                A next-generation fitness competition that measures complete
                human capability — speed, stamina, strength, coordination, balance
                and mobility — combined into one adaptive performance score.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#signup"
                  className="btn-lime-glow inline-flex items-center justify-center bg-lime-400 px-7 py-4 text-[12.5px] font-black uppercase tracking-[0.15em] text-black no-underline hover:bg-lime-300"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Join the Founding Athlete Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#challenge"
                  className="inline-flex items-center justify-center border border-white/22 bg-black/35 px-7 py-4 text-[12.5px] font-bold uppercase tracking-[0.15em] text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/[0.07] hover:border-white/38"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Explore the Challenge
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-7">
                {[
                  ["Live Events", "All Venues"],
                  ["All Abilities", "Every Level"],
                  ["Personal Score", "Your Benchmark"],
                ].map(([label, sub]) => (
                  <div key={label} className="border-l-2 border-lime-400/35 pl-4">
                    <p
                      className="text-[11.5px] font-black uppercase tracking-[0.22em] text-white"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {label}
                    </p>
                    <p
                      className="mt-0.5 text-[10.5px] uppercase tracking-[0.15em] text-neutral-600"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <YourJourneyHub />

        {/* ── CAPABILITY PILLARS ── */}
        <section className="border-y border-lime-400/[0.07] bg-[#080808] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <SectionLabel>The 10 Pillars of Human Performance</SectionLabel>
              <h2 className="text-3xl uppercase tracking-wide text-white md:text-4xl">
                Every Dimension. Measured.
              </h2>
            </div>

            {/* Technical divider before grid */}
            <div className="mb-px flex items-center gap-4">
              <div className="h-px flex-1 bg-white/[0.04]" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.35em] text-neutral-800"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                10 Pillars
              </span>
              <div className="h-px flex-1 bg-white/[0.04]" />
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/[0.05] sm:grid-cols-5">
              {capabilities.map(({ label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group relative flex flex-col items-center gap-4 overflow-hidden bg-[#0d0d0d] p-7 transition-colors hover:bg-[#111]"
                >
                  <div className="absolute left-0 top-0 h-px w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />
                  <Icon
                    className="h-6 w-6 text-neutral-600 transition-colors group-hover:text-lime-400"
                    strokeWidth={1.5}
                  />
                  <p
                    className="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors group-hover:text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UH TESTS THE WHOLE HUMAN ── */}
        <section className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>Why UH Is Different</SectionLabel>
              <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
                Most Races Test One Thing.
                <br />
                UH Tests the Whole Human.
              </h2>
              <p className="mt-5 text-lg leading-7 text-neutral-400">
                Most races only measure one or two aspects of capability. They tell
                you if you can run, lift, endure or suffer.{" "}
                <span className="font-bold text-white">UH goes further.</span>
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-4">
              {comparisonRaces.map((race, i) => (
                <motion.div
                  key={race.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group bg-[#0d0d0d] p-8 transition-colors hover:bg-[#111]"
                >
                  <race.icon
                    className="h-6 w-6 text-neutral-600 transition-colors group-hover:text-neutral-300"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 text-lg uppercase tracking-wide text-neutral-300">
                    {race.name}
                  </h3>
                  <p
                    className="mt-1 text-[12px] font-bold uppercase tracking-[0.2em] text-neutral-600"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {race.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-neutral-500">{race.text}</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: comparisonRaces.length * 0.08 }}
                whileHover={{ y: -5 }}
                className="lime-glow-hover relative bg-[#0d0d0d] p-8 ring-1 ring-lime-400/40"
              >
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-lime-400 to-transparent" />
                <uhComparison.icon className="h-6 w-6 text-lime-400" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg uppercase tracking-wide text-white">
                  {uhComparison.name}
                </h3>
                <p
                  className="mt-1 text-[12px] font-bold uppercase tracking-[0.2em] text-lime-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {uhComparison.tagline}
                </p>
                <p className="mt-4 text-sm leading-6 text-neutral-300">{uhComparison.text}</p>
              </motion.div>
            </div>

            <WhyDifferentExplainer />
          </div>
        </section>

        {/* ── CHALLENGE OVERVIEW ── */}
        <section id="challenge" className="bg-[#050505] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>The Challenge</SectionLabel>
            <div className="grid gap-px bg-white/[0.05] md:grid-cols-3">
              {[
                {
                  icon: Flame,
                  title: "Hard, But Not Stupid",
                  text: "UH is designed to challenge the whole human without reducing fitness to punishment. The goal is not to destroy you. It is to reveal what you're capable of, expose what needs work, and give you a clear path to get stronger, fitter and more durable for life.",
                },
                {
                  icon: Timer,
                  title: "45–70 Minutes",
                  text: "Long enough to matter. Short enough to be repeatable. Designed for high energy, fast transitions and visible competition.",
                },
                {
                  icon: Zap,
                  title: "Adapt Under Fatigue",
                  text: "The signature test is not one movement. It is how quickly you can switch between speed, control, strength and coordination.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="lime-glow-hover group bg-[#0a0a0a] p-10 transition-colors hover:bg-[#0d0d0d]"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center border border-lime-400/20 bg-lime-400/[0.04] transition-colors group-hover:border-lime-400/40 group-hover:bg-lime-400/[0.07]">
                    <Icon className="h-5 w-5 text-lime-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl uppercase tracking-wide text-white">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-neutral-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EventStructureSection />

        <ScoreSection />

        <AICoachingSection />

        {/* ── CATEGORIES ── */}
        <section id="categories" className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionLabel>Ways to Compete</SectionLabel>
              <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
                Go Solo, Pair Up
                <br />
                or Bring a Team.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
                The Ultimate Human is designed for serious competitors, first-time challengers,
                gym communities and workplace teams.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((label) => (
                <div
                  key={label}
                  className="lime-glow-hover group flex items-center gap-5 bg-[#0d0d0d] p-7 transition-colors hover:bg-[#111]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-lime-400/20 bg-lime-400/[0.04] transition-all group-hover:border-lime-400/50 group-hover:bg-lime-400/[0.10]">
                    <Trophy className="h-4 w-4 text-lime-400" strokeWidth={1.5} />
                  </div>
                  <p
                    className="text-[13px] font-bold uppercase tracking-[0.18em] text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ENTER ── */}
        <section className="border-t border-white/[0.06] bg-[#050505] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionLabel>Why Enter?</SectionLabel>
              <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
                Because Fitness
                <br />
                Should Mean Capability.
              </h2>
            </div>

            <div className="grid gap-px bg-white/[0.05] md:grid-cols-2">
              {whyEnter.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="lime-glow-hover group bg-[#0d0d0d] p-9 transition-colors hover:bg-[#0f0f0f]"
                >
                  <div className="mb-5 h-px w-8 bg-lime-400 transition-all duration-300 group-hover:w-14" />
                  <h3 className="text-xl uppercase tracking-wide text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-neutral-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI FEATURES ── */}
        <section className="border-t border-lime-400/[0.07] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionLabel>AI-Powered Performance Intelligence</SectionLabel>
              <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
                Discover the Athlete
                <br />
                You Really Are.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
                The Ultimate Human combines competition with AI-powered capability analysis to help
                you understand how you move, perform and improve.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] lg:grid-cols-2">
              {aiFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative bg-[#0d0d0d]"
                >
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-lime-400 to-transparent" />
                  <div className="p-9">
                    <div className="mb-7 flex h-12 w-12 items-center justify-center border border-lime-400/20 bg-lime-400/[0.04]">
                      <BarChart3 className="h-5 w-5 text-lime-400" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl uppercase tracking-tight text-white">{feature.title}</h3>
                    <p className="mt-4 text-base leading-7 text-neutral-400">{feature.text}</p>

                    <div className="mt-8 space-y-px bg-white/[0.04]">
                      {feature.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-4 bg-[#0d0d0d] px-5 py-4 transition-colors hover:bg-[#111]"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-lime-400" strokeWidth={2} />
                          <p
                            className="text-[13px] text-neutral-300"
                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                          >
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <button
                      className="mt-8 border border-lime-400/60 bg-transparent px-6 py-3 text-[12px] font-bold uppercase tracking-[0.22em] text-lime-400 transition-all hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Try the AI Assessment
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="border-t border-white/[0.06] bg-[#050505] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionLabel>Founding Athlete Pricing</SectionLabel>
              <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
                Get in Early.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
                Early launch pricing for the first Ultimate Human events. Founding athlete places will
                be limited and pricing will increase after launch release.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] md:grid-cols-2 lg:grid-cols-4">
              {foundingPricing.map((item, i) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="lime-glow-hover group relative bg-[#0d0d0d] transition-colors hover:bg-[#0f0f0f]"
                >
                  <div className="absolute left-0 top-0 h-px w-2/3 bg-gradient-to-r from-lime-400/70 to-transparent" />
                  <div className="p-7">
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-600"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.category}
                    </p>
                    <p
                      className="text-metallic-price mt-5 text-5xl"
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                    >
                      {item.price}
                    </p>
                    <p
                      className="mt-2 text-[13px] text-neutral-500"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.detail}
                    </p>
                    <a
                      href="#signup"
                      className="btn-lime-glow mt-8 block border border-lime-400 bg-lime-400 px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-black no-underline transition-colors hover:bg-lime-300 hover:border-lime-300"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Join Waitlist
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-px bg-[#0a0a0a] p-8">
              <p
                className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Founding Athlete Benefits Include:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Priority event access",
                  "Early leaderboard rankings",
                  "Founding athlete digital badge",
                  "Exclusive launch training content",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4">
                    <div className="h-px w-6 shrink-0 bg-lime-400" />
                    <p
                      className="text-[13px] text-neutral-300"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SubscriptionSection />

        {/* ── FOUNDERS ── */}
        <section className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionLabel>The People Behind The Ultimate Human</SectionLabel>
              <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
                Built by People Obsessed
                <br />
                with Human Performance.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
                The Ultimate Human combines elite coaching, combat sport experience, movement science
                and a slightly unhealthy enthusiasm for fitness racing.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] md:grid-cols-2 lg:grid-cols-4">
              <FounderCard
                initials="AS"
                name="Andie Stoneham"
                role="Founder · Performance Coach · Programme Designer"
                quote="Most fitness events reward one dominant attribute. We wanted to build something that rewards adaptability, composure and complete human capability."
              />
              <FounderCard
                initials="LH"
                name="Laura Hathaway"
                role="Performance Coach · Qualified Osteopath"
                quote="Real performance is not just strength or endurance. It is how efficiently and intelligently your body moves under pressure and fatigue."
              />
              <FounderCard
                initials="JH"
                name="John 'The Hitman' Hathaway"
                role="Champion UFC Fighter · Coach"
                quote="The people who stay calm, adaptable and explosive when tired are usually the hardest people to beat. That is what this competition is designed to expose."
              />
              <FounderCard
                initials="KB"
                name="Ken Brotherston"
                role="Founder · Entrepreneur · Fitness Race Enthusiast"
                quote="I am probably old enough to know better, but not quite sensible enough to stop chasing the idea that becoming fitter, stronger and more adaptable makes every part of life better."
              />
            </div>
          </div>
        </section>

        {/* ── SIGNUP / WAITLIST ── */}
        <section id="signup" className="relative border-t border-lime-400/[0.07] bg-[#060606] px-6 py-24">
          {/* Section ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(132,204,22,0.038) 0%, transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-5xl">
            <div className="relative overflow-hidden border border-white/[0.09] bg-[#070707] p-10 text-center md:p-16">

              {/* Corner accent marks */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-lime-400/40" />
              <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-lime-400/40" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-lime-400/22" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-lime-400/22" />

              {/* Top glow + accent line */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center top, rgba(132,204,22,0.10) 0%, transparent 52%)",
                }}
              />
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/55 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center border border-lime-400/30 bg-lime-400/[0.06]">
                    <Mail className="h-6 w-6 text-lime-400" strokeWidth={1.5} />
                  </div>
                </div>

                <SectionLabel>Founding Athlete Registration</SectionLabel>

                <h2
                  className="text-metallic uppercase tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", lineHeight: 1.06, fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                >
                  Become One of the
                  <br />
                  First Ultimate Humans
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-lg leading-7 text-neutral-400">
                  Get early access to launch events, training plans, founding athlete pricing, rankings
                  and exclusive first-release places.
                </p>

                {/* Scarcity line */}
                <div className="mt-5 flex items-center justify-center gap-4">
                  <div className="h-px w-10 shrink-0 bg-lime-400/35" />
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.26em] text-lime-400/65"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Limited founding places — pricing increases at launch
                  </p>
                  <div className="h-px w-10 shrink-0 bg-lime-400/35" />
                </div>

                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://theultimatehuman.fitness"
                    className="btn-lime-glow inline-flex items-center bg-lime-400 px-9 py-5 text-[13px] font-black uppercase tracking-[0.18em] text-black no-underline transition-colors hover:bg-lime-300"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Join at theultimatehuman.fitness
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="mailto:hello@theultimatehuman.fitness"
                    className="inline-flex items-center border border-white/20 bg-white/[0.04] px-8 py-5 text-[13px] font-bold uppercase tracking-[0.18em] text-white no-underline transition-colors hover:border-white/35 hover:bg-white/[0.08]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Invite Your Gym
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRE-LAUNCH NOTICE ── */}
        <section className="border-t border-white/[0.06] bg-[#060606] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-3 border border-amber-400/22 bg-amber-400/[0.04] px-4 py-2.5">
              <AlertTriangle className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
              <span
                className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Pre-Launch Notice
              </span>
            </div>
            <h2 className="text-3xl uppercase tracking-tight text-white md:text-4xl">
              What Is Still Being Finalised?
            </h2>

            <div className="mt-8 grid gap-px bg-white/[0.05] md:grid-cols-2">
              {workToDo.map((item) => (
                <div key={item} className="flex gap-4 bg-[#0d0d0d] p-6 transition-colors hover:bg-[#111]">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center border border-lime-400/30">
                    <div className="h-1.5 w-1.5 bg-lime-400" />
                  </div>
                  <p
                    className="text-[13px] leading-6 text-neutral-300"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] bg-[#050505] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <img
            src="/images/logo.png"
            alt="The Ultimate Human"
            className="h-8 w-auto object-contain"
            style={{ maxWidth: "150px", opacity: 0.32 }}
          />
          <p
            className="text-[11px] font-bold uppercase tracking-[0.42em] text-neutral-700"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Measure. Train. Compete. Evolve.
          </p>
          <p
            className="text-[12px] text-neutral-700"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            © 2027 The Ultimate Human · theultimatehuman.fitness
          </p>
        </div>
      </footer>
    </div>
  );
}
