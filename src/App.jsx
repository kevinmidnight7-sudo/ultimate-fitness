import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  { title: "Speed", text: "React fast. Move sharply. Change direction under pressure.", value: 88 },
  { title: "Stamina", text: "Keep going when your lungs and legs want a vote.", value: 82 },
  { title: "Strength", text: "Carry, lift, crawl and move with real-world power.", value: 76 },
  { title: "Coordination", text: "Stay composed when fatigue makes simple things hard.", value: 70 },
  { title: "Balance", text: "Control your body when everyone else starts falling apart.", value: 64 },
  { title: "Mobility", text: "Move well, not just hard.", value: 58 },
];

const exercises = [
  "Reactive Shuttle Sprint",
  "Bear Crawl Grid",
  "Sandbag Carry Circuit",
  "Balance Traverse",
  "Burpee Broad Jump Ladder",
  "Med Ball Accuracy Throws",
  "Single-Leg Movement Flow",
  "Shuttle Carry Relay",
  "Ground-to-Overhead Complex",
  "The Ultimate Flow",
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
    text: "A personal performance score across speed, stamina, strength, coordination, balance and mobility.",
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

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-8 bg-lime-400 shrink-0" />
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-lime-400">{children}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center border border-lime-400/40 bg-black">
              <div className="absolute inset-0 border border-white/5" />
              <div className="flex items-baseline">
                <span className="text-xl font-black leading-none text-white">U</span>
                <span className="text-xl font-black leading-none text-lime-400">H</span>
              </div>
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-lime-400/60 leading-none">The</p>
              <p className="text-base font-black uppercase tracking-wide text-white leading-tight">Ultimate Human</p>
            </div>
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
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 no-underline transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#signup"
            className="border border-lime-400 bg-lime-400 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] text-black no-underline transition-colors hover:bg-lime-300"
          >
            Join the Waitlist
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]">
          {/* Stadium atmosphere layers */}
          <div className="pointer-events-none absolute inset-0">
            {/* Ceiling spotlight */}
            <div
              className="absolute left-1/2 top-0 h-[65%] w-[70%] -translate-x-1/2"
              style={{ background: "radial-gradient(ellipse at top, rgba(255,255,255,0.055) 0%, transparent 65%)" }}
            />
            {/* Left beam */}
            <div
              className="absolute left-0 top-0 h-full w-1/2"
              style={{ background: "radial-gradient(ellipse at left top, rgba(255,255,255,0.03) 0%, transparent 55%)" }}
            />
            {/* Right beam */}
            <div
              className="absolute right-0 top-0 h-full w-1/2"
              style={{ background: "radial-gradient(ellipse at right top, rgba(255,255,255,0.03) 0%, transparent 55%)" }}
            />
            {/* Floor lime glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[45%]"
              style={{ background: "radial-gradient(ellipse at bottom, rgba(132,204,22,0.09) 0%, transparent 70%)" }}
            />
            {/* Top lime accent line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/35 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-5xl"
            >
              {/* Live badge */}
              <div className="mb-10 inline-flex items-center gap-3 border border-lime-400/20 bg-lime-400/[0.05] px-4 py-2">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400">
                  theultimatehuman.fitness · Founding Athlete Waitlist Now Open
                </span>
              </div>

              {/* UH lockup */}
              <div className="mb-6 flex items-baseline gap-3">
                <span
                  className="text-7xl font-black leading-none tracking-tighter text-white md:text-9xl"
                  style={{ textShadow: "0 0 80px rgba(255,255,255,0.08)" }}
                >
                  UH
                </span>
                <span className="mb-2 self-end text-base font-bold uppercase tracking-[0.35em] text-neutral-500 md:text-lg">
                  / ULTIMATE HUMAN
                </span>
              </div>

              {/* Main headline */}
              <h1
                className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl lg:text-8xl"
                style={{
                  background: "linear-gradient(175deg, #ffffff 0%, #d4d4d4 35%, #8a8a8a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                THE AI-POWERED
                <br />
                OPERATING SYSTEM
                <br />
                FOR HUMAN
                <br className="hidden sm:block" />
                PERFORMANCE
              </h1>

              {/* Slogan */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-lime-400 shrink-0" />
                <p className="text-sm font-bold uppercase tracking-[0.45em] text-lime-400">
                  MEASURE. TRAIN. COMPETE. EVOLVE.
                </p>
              </div>

              {/* Sub-copy */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
                The Ultimate Human is a next-generation indoor fitness competition designed to measure complete human capability. Speed, stamina, strength, coordination, balance and mobility — combined into one adaptive performance score.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#signup"
                  className="inline-flex items-center justify-center bg-lime-400 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-black no-underline transition-colors hover:bg-lime-300"
                >
                  Join the Founding Athlete Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#challenge"
                  className="inline-flex items-center justify-center border border-white/20 bg-white/[0.03] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white no-underline transition-colors hover:bg-white/[0.07]"
                >
                  Explore the Challenge
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Stats row */}
              <div className="mt-12 flex flex-wrap gap-8">
                {[
                  ["Indoor Events", "All Venues"],
                  ["All Abilities", "Every Level"],
                  ["Personal Score", "Your Benchmark"],
                ].map(([label, sub]) => (
                  <div key={label} className="border-l border-lime-400/30 pl-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white">{label}</p>
                    <p className="mt-0.5 text-xs text-neutral-600">{sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CAPABILITY PILLARS ── */}
        <section className="border-y border-white/[0.06] bg-[#080808] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionLabel>The 10 Pillars of Human Performance</SectionLabel>
              <h2
                className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl"
                style={{
                  background: "linear-gradient(180deg, #ffffff 0%, #aaaaaa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Every Dimension. Measured.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/[0.05] sm:grid-cols-5">
              {capabilities.map(({ label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex flex-col items-center gap-4 bg-[#0d0d0d] p-7 transition-all hover:bg-[#111]"
                >
                  <Icon
                    className="h-6 w-6 text-neutral-600 transition-colors group-hover:text-lime-400"
                    strokeWidth={1.5}
                  />
                  <p className="text-center text-[10px] font-black uppercase tracking-[0.25em] text-neutral-500 transition-colors group-hover:text-white">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
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
                  title: "HARD, BUT NOT STUPID",
                  text: "You will work hard, but this is not designed to destroy you. It is designed to reveal how well you move, adapt and recover.",
                },
                {
                  icon: Timer,
                  title: "45–70 MINUTES",
                  text: "Long enough to matter. Short enough to be repeatable. Designed for high energy, fast transitions and visible competition.",
                },
                {
                  icon: Zap,
                  title: "ADAPT UNDER FATIGUE",
                  text: "The signature test is not one movement. It is how quickly you can switch between speed, control, strength and coordination.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-[#0a0a0a] p-10">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center border border-lime-400/20 bg-lime-400/[0.04]">
                    <Icon className="h-5 w-5 text-lime-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-wider text-white">{title}</h3>
                  <p className="mt-4 leading-7 text-neutral-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHALLENGE ZONES ── */}
        <section id="format" className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionLabel>The Event Format</SectionLabel>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                10 Challenge Zones.
                <br />
                One Complete Test.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
                Each zone is simple to understand, hard to master and designed to expose a different part of your athletic capability. Minimal equipment. Maximum variety.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-5">
              {exercises.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group relative bg-[#0d0d0d] p-6 transition-colors hover:bg-[#111]"
                >
                  <div className="absolute left-0 top-0 h-0 w-px bg-lime-400 transition-all duration-500 group-hover:h-full" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-lime-400/50">
                    Zone {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm font-black uppercase tracking-wide text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCORE DASHBOARD ── */}
        <section id="score" className="border-t border-white/[0.06] bg-[#050505] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_1.1fr] md:items-start">

            {/* Left col */}
            <div>
              <SectionLabel>Your Personal Benchmark</SectionLabel>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Leave with More
                <br />
                Than a Medal.
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-400">
                Every participant receives an Ultimate Human Score showing performance across six areas. You will know what you are good at, what is holding you back and how to train for your next attempt.
              </p>
              <p className="mt-4 text-lg leading-8 text-neutral-400">The aim is simple: come back better.</p>

              <div className="mt-10 border border-white/[0.07] bg-[#0d0d0d] p-7">
                <SectionLabel>How Is It Calculated?</SectionLabel>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  Your Ultimate Human Score
                </h3>
                <p className="mt-4 leading-7 text-neutral-400">
                  Your Ultimate Human Score is calculated using our proprietary algorithm, which weights your performance across multiple capability areas including speed, stamina, strength, coordination, balance and mobility.
                </p>
                <p className="mt-4 leading-7 text-neutral-400">
                  The scoring model also takes into account factors such as your age category and previous athletic experience to create a more meaningful and balanced assessment of your overall human capability.
                </p>
              </div>

              {/* Domain description cards */}
              <div className="mt-6 grid gap-px bg-white/[0.05] sm:grid-cols-2">
                {domains.map((d) => (
                  <div key={d.title} className="bg-[#0d0d0d] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white">{d.title}</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">{d.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right col — performance dashboard */}
            <div className="border border-white/[0.08] bg-[#0d0d0d]">
              <div className="border-b border-white/[0.06] p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-neutral-600">
                      Performance Dashboard
                    </p>
                    <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
                      Ultimate Human Score
                    </h3>
                  </div>
                  <Gauge className="h-10 w-10 text-neutral-700" strokeWidth={1} />
                </div>
              </div>

              <div className="space-y-px bg-white/[0.04] p-0">
                {domains.map((d, i) => (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="bg-[#0d0d0d] p-5"
                  >
                    <div className="mb-2.5 flex items-center justify-between">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-300">{d.title}</p>
                      <p className="text-xs font-bold text-lime-400">{d.value}</p>
                    </div>
                    <div className="h-1 w-full bg-white/[0.06]">
                      <motion.div
                        className="h-1 bg-lime-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${d.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.07 + 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] p-7">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600">
                    Overall Score
                  </p>
                  <p className="text-3xl font-black text-white">
                    78
                    <span className="ml-1 text-sm font-normal text-neutral-600">/100</span>
                  </p>
                </div>
                <div className="mt-3 h-1.5 w-full bg-white/[0.06]">
                  <div className="h-1.5 w-[78%] bg-gradient-to-r from-lime-400 to-lime-600" />
                </div>
                <p className="mt-3 text-xs text-neutral-600">
                  Sample score — your result is generated on event day
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section id="categories" className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionLabel>Ways to Compete</SectionLabel>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Go Solo, Pair Up
                <br />
                or Bring a Team.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
                The Ultimate Human is designed for serious competitors, first-time challengers, gym communities and workplace teams.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((label) => (
                <div
                  key={label}
                  className="group flex items-center gap-5 bg-[#0d0d0d] p-7 transition-colors hover:bg-[#111]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-lime-400/20 bg-lime-400/[0.04] transition-colors group-hover:border-lime-400/40 group-hover:bg-lime-400/[0.08]">
                    <Trophy className="h-4 w-4 text-lime-400" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.15em] text-white">{label}</p>
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
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Because Fitness
                <br />
                Should Mean Capability.
              </h2>
            </div>

            <div className="grid gap-px bg-white/[0.05] md:grid-cols-2">
              {whyEnter.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#0d0d0d] p-9"
                >
                  <div className="mb-5 h-px w-8 bg-lime-400" />
                  <h3 className="text-xl font-black uppercase tracking-wide text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI FEATURES ── */}
        <section className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionLabel>AI-Powered Performance Intelligence</SectionLabel>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Discover the Athlete
                <br />
                You Really Are.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
                The Ultimate Human combines competition with AI-powered capability analysis to help you understand how you move, perform and improve.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] lg:grid-cols-2">
              {aiFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-[#0d0d0d]"
                >
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-lime-400 to-transparent" />
                  <div className="p-9">
                    <div className="mb-7 flex h-12 w-12 items-center justify-center border border-lime-400/20 bg-lime-400/[0.04]">
                      <BarChart3 className="h-5 w-5 text-lime-400" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">{feature.title}</h3>
                    <p className="mt-4 leading-7 text-neutral-400">{feature.text}</p>

                    <div className="mt-8 space-y-px bg-white/[0.04]">
                      {feature.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-4 bg-[#0d0d0d] px-5 py-4"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-lime-400" strokeWidth={2} />
                          <p className="text-sm text-neutral-300">{point}</p>
                        </div>
                      ))}
                    </div>

                    <button className="mt-8 border border-lime-400 bg-transparent px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-lime-400 transition-colors hover:bg-lime-400 hover:text-black">
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
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Get in Early.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
                Early launch pricing for the first Ultimate Human events. Founding athlete places will be limited and pricing will increase after launch release.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] md:grid-cols-2 lg:grid-cols-4">
              {foundingPricing.map((item, i) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative bg-[#0d0d0d]"
                >
                  <div className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-lime-400/60 to-transparent" />
                  <div className="p-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600">
                      {item.category}
                    </p>
                    <p className="text-metallic-price mt-5 text-5xl font-black">{item.price}</p>
                    <p className="mt-2 text-sm text-neutral-500">{item.detail}</p>
                    <a
                      href="#signup"
                      className="mt-8 block border border-lime-400 bg-lime-400 px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.15em] text-black no-underline transition-colors hover:bg-lime-300"
                    >
                      Join Waitlist
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-px bg-[#0a0a0a] p-8">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
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
                    <p className="text-sm text-neutral-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUNDERS ── */}
        <section className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionLabel>The People Behind The Ultimate Human</SectionLabel>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Built by People Obsessed
                <br />
                with Human Performance.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
                The Ultimate Human combines elite coaching, combat sport experience, movement science and a slightly unhealthy enthusiasm for fitness racing.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] md:grid-cols-2 lg:grid-cols-4">
              <FounderCard
                initials="AH"
                name="Andie Heath"
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
                role="Founder · Businessman · Fitness Race Enthusiast"
                quote="I am probably old enough to know better, but not quite sensible enough to stop chasing the idea that becoming fitter, stronger and more adaptable makes every part of life better."
              />
            </div>
          </div>
        </section>

        {/* ── PRE-LAUNCH NOTICE ── */}
        <section className="border-t border-white/[0.06] bg-[#050505] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-3 border border-amber-400/20 bg-amber-400/[0.04] px-4 py-2">
              <AlertTriangle className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
                Pre-Launch Notice
              </span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              What Is Still Being Finalised?
            </h2>

            <div className="mt-8 grid gap-px bg-white/[0.05] md:grid-cols-2">
              {workToDo.map((item) => (
                <div key={item} className="flex gap-4 bg-[#0d0d0d] p-6">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center border border-lime-400/30">
                    <div className="h-1.5 w-1.5 bg-lime-400" />
                  </div>
                  <p className="text-sm leading-6 text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIGNUP / WAITLIST ── */}
        <section id="signup" className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden border border-white/[0.08] bg-[#0a0a0a] p-12 text-center">
              {/* Glow effects */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center top, rgba(132,204,22,0.07) 0%, transparent 60%)",
                }}
              />
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

              <div className="relative">
                <div className="mb-7 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center border border-lime-400/30 bg-lime-400/[0.05]">
                    <Mail className="h-6 w-6 text-lime-400" strokeWidth={1.5} />
                  </div>
                </div>

                <SectionLabel>Founding Athlete Registration</SectionLabel>

                <h2
                  className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl"
                  style={{
                    background: "linear-gradient(175deg, #ffffff 0%, #d0d0d0 50%, #888 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Become One of the
                  <br />
                  First Ultimate Humans
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
                  Get early access to launch events, training plans, founding athlete pricing, rankings and exclusive first-release places.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://theultimatehuman.fitness"
                    className="inline-flex items-center bg-lime-400 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-black no-underline transition-colors hover:bg-lime-300"
                  >
                    Join at theultimatehuman.fitness
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="mailto:hello@theultimatehuman.fitness"
                    className="inline-flex items-center border border-white/20 bg-white/[0.03] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white no-underline transition-colors hover:bg-white/[0.07]"
                  >
                    Invite Your Gym
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] bg-[#050505] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex items-baseline">
              <span className="text-lg font-black text-white">U</span>
              <span className="text-lg font-black text-lime-400">H</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-700">
              / Ultimate Human
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-700">
            MEASURE. TRAIN. COMPETE. EVOLVE.
          </p>
          <p className="text-xs text-neutral-700">
            © 2027 The Ultimate Human · theultimatehuman.fitness
          </p>
        </div>
      </footer>
    </div>
  );
}

function FounderCard({ initials, name, role, quote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-[#0d0d0d]"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
      <div className="p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center border border-white/10 bg-[#111] text-xl font-black text-white">
          {initials}
        </div>
        <h3 className="text-xl font-black uppercase tracking-wide text-white">{name}</h3>
        <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-lime-400/70">{role}</p>
        <p className="mt-5 text-sm leading-7 text-neutral-500">"{quote}"</p>
      </div>
    </motion.div>
  );
}
