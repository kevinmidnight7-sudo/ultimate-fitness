import React, { useRef, useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
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

  /* Deterministic particles — no Math.random() to keep render stable */
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: ((i * 41 + 13) % 88) + 6,
        y: ((i * 29 + 9) % 82) + 6,
        /* size varies: tiny dust (1px), mid (2px), bright mote (3px) */
        size: i % 7 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
        dur: 10 + ((i * 3) % 13),
        delay: (i * 1.7) % 8,
        opacity: (4 + ((i * 7) % 22)) / 100,
        lime: i % 5 === 0,
        /* larger motes rise higher */
        rise: i % 7 === 0 ? 28 : i % 4 === 0 ? 18 : 11,
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
      mouseGlowRef.current.style.background = `radial-gradient(circle 750px at ${x}% ${y}%, rgba(163,230,53,0.038) 0%, transparent 65%)`;
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, [heroRef, reducedMotion]);

  return (
    <div
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 01 ── Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 02 ── Wide ambient overhead glow — stadium ceiling lights */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 60% -8%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 45%, transparent 75%)",
        }}
      />

      {/* 03 ── Secondary warm ambient — right-side arena depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 90% 30%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* 04 ── Beam 1 — primary right, stronger */}
      <div
        className="uh-beam-1 absolute"
        style={{
          top: 0,
          left: "55%",
          width: "360px",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.055) 38%, rgba(255,255,255,0.012) 65%, transparent 85%)",
          clipPath: "polygon(40% 0%, 60% 0%, 84% 100%, 16% 100%)",
          transformOrigin: "50% 0%",
          animation: reducedMotion ? "none" : "uh-beam-1 11s ease-in-out infinite",
        }}
      />

      {/* 04a ── Lens flare source — beam 1 origin */}
      <div
        className="uh-lens-1 absolute"
        style={{
          top: "0px",
          left: "calc(55% + 160px - 3px)",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 0 12px 5px rgba(255,255,255,0.12)",
          animation: reducedMotion ? "none" : "uh-lens-pulse 11s ease-in-out infinite",
        }}
      />

      {/* 05 ── Beam 2 — secondary centre-left */}
      <div
        className="uh-beam-2 absolute"
        style={{
          top: 0,
          left: "33%",
          width: "240px",
          height: "82%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.022) 48%, transparent 80%)",
          clipPath: "polygon(34% 0%, 66% 0%, 90% 100%, 10% 100%)",
          transformOrigin: "50% 0%",
          animation: reducedMotion ? "none" : "uh-beam-2 15s ease-in-out infinite 1.2s",
        }}
      />

      {/* 05a ── Lens flare source — beam 2 origin */}
      <div
        className="uh-lens-2 absolute"
        style={{
          top: "0px",
          left: "calc(33% + 120px - 2px)",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.8)",
          boxShadow: "0 0 8px 3px rgba(255,255,255,0.08)",
          animation: reducedMotion ? "none" : "uh-lens-pulse-2 15s ease-in-out infinite 1.2s",
        }}
      />

      {/* 06 ── Beam 3 — far-right accent */}
      <div
        className="uh-beam-3 absolute"
        style={{
          top: 0,
          left: "76%",
          width: "180px",
          height: "72%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.015) 50%, transparent 80%)",
          clipPath: "polygon(28% 0%, 72% 0%, 95% 100%, 5% 100%)",
          transformOrigin: "50% 0%",
          animation: reducedMotion ? "none" : "uh-beam-3 19s ease-in-out infinite 3s",
        }}
      />

      {/* 07 ── Stadium arc rings — suggest curved seating tiers */}
      <div
        className="absolute"
        style={{
          top: "2%",
          right: "-8%",
          width: "68%",
          height: "78%",
          pointerEvents: "none",
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
          {/* Outer tiers — white, very faint */}
          <ellipse cx="320" cy="240" rx="580" ry="310" stroke="rgba(255,255,255,0.038)" strokeWidth="1" />
          <ellipse cx="320" cy="252" rx="480" ry="252" stroke="rgba(255,255,255,0.048)" strokeWidth="0.8" />
          <ellipse cx="320" cy="264" rx="380" ry="196" stroke="rgba(255,255,255,0.038)" strokeWidth="0.7" />
          {/* Middle tier — lime accent */}
          <ellipse cx="320" cy="276" rx="280" ry="140" stroke="rgba(163,230,53,0.06)" strokeWidth="0.8" />
          {/* Inner ring — brighter lime, animated */}
          <motion.ellipse
            cx="320"
            cy="288"
            rx="180"
            ry="86"
            stroke="rgba(163,230,53,0.09)"
            strokeWidth="0.7"
            fill="none"
            animate={reducedMotion ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Innermost — hint of a scoreboard or rig */}
          <ellipse cx="320" cy="296" rx="90" ry="38" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          {/* Vertical center rig line */}
          <line x1="320" y1="0" x2="320" y2="290" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" strokeDasharray="4 6" />
        </svg>
      </div>

      {/* 08 ── Perspective arena floor grid */}
      <div
        className="uh-grid absolute"
        style={{
          bottom: 0,
          left: "-60%",
          right: "-60%",
          height: "60%",
          backgroundImage: `
            linear-gradient(rgba(163,230,53,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163,230,53,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          transform: "perspective(520px) rotateX(76deg)",
          transformOrigin: "bottom center",
          animation: reducedMotion ? "none" : "uh-grid-scroll 5s linear infinite",
        }}
      />

      {/* 08a ── Floor grid edge fade — natural floor depth */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "62%",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, transparent 35%, rgba(5,5,5,0.55) 65%, rgba(5,5,5,0.9) 90%)",
        }}
      />

      {/* 09 ── Floor lime ambient glow */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "48%",
          background:
            "radial-gradient(ellipse 80% 70% at 50% 100%, rgba(132,204,22,0.07) 0%, transparent 70%)",
        }}
      />

      {/* 10 ── Arena horizon line — floor / stage edge */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: "36%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent 5%, rgba(163,230,53,0.1) 28%, rgba(163,230,53,0.22) 50%, rgba(163,230,53,0.1) 72%, transparent 95%)",
        }}
      />

      {/* 11 ── Logo watermark — floor reflection bottom-right */}
      <div
        className="absolute"
        style={{
          bottom: "6%",
          right: "4%",
          width: "clamp(170px, 21vw, 300px)",
          opacity: 0.07,
          filter: "grayscale(1) brightness(4) blur(0.5px)",
          pointerEvents: "none",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        <img src="/images/logo.png" alt="" className="w-full" />
      </div>

      {/* 12 ── Floating particles */}
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
              ? `rgba(163,230,53,${Math.min(p.opacity * 3.5, 0.55)})`
              : `rgba(255,255,255,${Math.min(p.opacity * 3, 0.5)})`,
            /* Brighter motes get a subtle halo */
            boxShadow:
              p.size === 3
                ? p.lime
                  ? `0 0 6px 2px rgba(163,230,53,${p.opacity * 2})`
                  : `0 0 6px 2px rgba(255,255,255,${p.opacity})`
                : "none",
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -p.rise, 0],
                  opacity: [p.opacity, p.opacity * 0.15, p.opacity],
                }
          }
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* 13 ── Lime scan line */}
      <div
        className="uh-scanline absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(163,230,53,0.5) 25%, rgba(163,230,53,0.7) 50%, rgba(163,230,53,0.5) 75%, transparent)",
          animation: reducedMotion ? "none" : "uh-scanline 14s linear infinite 2s",
          top: 0,
        }}
      />

      {/* 14 ── Film grain / noise */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.048 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="uh-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#uh-grain)" />
      </svg>

      {/* 15 ── Mouse-reactive lime glow (direct DOM ref) */}
      <div ref={mouseGlowRef} className="absolute inset-0" />

      {/* 16 ── Left readability gradient — deep on far left, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.92) 22%, rgba(5,5,5,0.7) 42%, rgba(5,5,5,0.3) 62%, rgba(5,5,5,0.05) 100%)",
        }}
      />

      {/* 17 ── Bottom site-bg fade */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "130px", background: "linear-gradient(to top, #050505, transparent)" }}
      />

      {/* 18 ── Top lime accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(163,230,53,0.5) 0%, rgba(163,230,53,0.7) 40%, rgba(163,230,53,0.7) 60%, rgba(163,230,53,0.5) 100%)",
        }}
      />
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
   APP
───────────────────────────────────────────────────────────────── */

export default function App() {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050505]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <a href="#" className="shrink-0 no-underline">
            <img
              src="/images/logo.png"
              alt="The Ultimate Human"
              className="h-11 w-auto object-contain md:h-14"
              style={{ maxWidth: "170px" }}
            />
          </a>

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
                className="text-[12px] font-bold uppercase tracking-[0.22em] text-neutral-400 no-underline transition-colors hover:text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#signup"
            className="btn-lime-glow border border-lime-400 bg-lime-400 px-5 py-2.5 text-[12px] font-black uppercase tracking-[0.18em] text-black no-underline hover:bg-lime-300"
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
          className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#050505]"
        >
          <HeroArenaBackground heroRef={heroRef} reducedMotion={reducedMotion} />

          <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-3 border border-lime-400/25 bg-lime-400/[0.07] px-4 py-2.5">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
                <span
                  className="text-[12px] font-bold uppercase tracking-[0.28em] text-lime-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Founding Athlete Waitlist Now Open
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-metallic uppercase leading-none tracking-tight"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4.9rem)",
                  lineHeight: 1.04,
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                }}
              >
                The AI-Powered
                <br />
                Operating System
                <br />
                for Human
                <br />
                Performance
              </h1>

              {/* Decorative separator after headline */}
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-lime-400/60 to-transparent" />
                <p
                  className="text-[12px] font-bold uppercase tracking-[0.48em] text-lime-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Measure. Train. Compete. Evolve.
                </p>
              </div>

              {/* Sub-copy */}
              <p
                className="mt-6 max-w-xl text-[1.05rem] leading-7 text-neutral-300"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
              >
                A next-generation indoor fitness competition that measures complete
                human capability — speed, stamina, strength, coordination, balance
                and mobility — combined into one adaptive performance score.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#signup"
                  className="btn-lime-glow inline-flex items-center justify-center bg-lime-400 px-7 py-4 text-[13px] font-black uppercase tracking-[0.15em] text-black no-underline hover:bg-lime-300"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Join the Founding Athlete Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#challenge"
                  className="inline-flex items-center justify-center border border-white/25 bg-black/40 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/[0.08] hover:border-white/40"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Explore the Challenge
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-8">
                {[
                  ["Indoor Events", "All Venues"],
                  ["All Abilities", "Every Level"],
                  ["Personal Score", "Your Benchmark"],
                ].map(([label, sub]) => (
                  <div key={label} className="border-l-2 border-lime-400/40 pl-4">
                    <p
                      className="text-[12px] font-black uppercase tracking-[0.22em] text-white"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {label}
                    </p>
                    <p
                      className="mt-0.5 text-[11px] uppercase tracking-[0.15em] text-neutral-500"
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

        {/* ── CAPABILITY PILLARS ── */}
        <section className="border-y border-lime-400/[0.08] bg-[#080808] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionLabel>The 10 Pillars of Human Performance</SectionLabel>
              <h2 className="text-3xl uppercase tracking-wide text-white md:text-4xl">
                Every Dimension. Measured.
              </h2>
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
                  {/* Top sweep line on hover */}
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

        {/* ── CHALLENGE OVERVIEW ── */}
        <section id="challenge" className="bg-[#050505] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>The Challenge</SectionLabel>
            <div className="grid gap-px bg-white/[0.05] md:grid-cols-3">
              {[
                {
                  icon: Flame,
                  title: "Hard, But Not Stupid",
                  text: "You will work hard, but this is not designed to destroy you. It is designed to reveal how well you move, adapt and recover.",
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
                <div key={title} className="lime-glow-hover group bg-[#0a0a0a] p-10 transition-colors hover:bg-[#0d0d0d]">
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

        {/* ── CHALLENGE ZONES ── */}
        <section id="format" className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionLabel>The Event Format</SectionLabel>
              <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
                10 Challenge Zones.
                <br />
                One Complete Test.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
                Each zone is simple to understand, hard to master and designed to expose a different
                part of your athletic capability. Minimal equipment. Maximum variety.
              </p>
            </div>

            <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-5">
              {exercises.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="lime-glow-hover group relative bg-[#0d0d0d] p-6 transition-colors hover:bg-[#111]"
                >
                  {/* Left lime border sweeps down */}
                  <div className="absolute left-0 top-0 h-0 w-px bg-lime-400 transition-all duration-500 group-hover:h-full" />
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.38em] text-lime-400/55"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Zone {String(index + 1).padStart(2, "0")}
                  </p>
                  <p
                    className="mt-3 text-sm font-bold uppercase tracking-wide text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCORE DASHBOARD ── */}
        <section id="score" className="border-t border-lime-400/[0.07] bg-[#060606] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <SectionLabel>Your Personal Benchmark</SectionLabel>
              <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
                Leave with More
                <br />
                Than a Medal.
              </h2>
              <p className="mt-6 text-lg leading-7 text-neutral-400">
                Every participant receives an Ultimate Human Score showing performance across six areas.
                You will know what you are good at, what is holding you back and how to train for your
                next attempt.
              </p>
              <p className="mt-4 text-lg leading-7 text-neutral-400">The aim is simple: come back better.</p>

              <div className="mt-10 border border-white/[0.07] bg-[#0d0d0d] p-7">
                <SectionLabel>How Is It Calculated?</SectionLabel>
                <h3 className="text-2xl uppercase tracking-tight text-white">
                  Your Ultimate Human Score
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-400">
                  Your score is calculated using our proprietary algorithm, which weights your performance
                  across multiple capability areas including speed, stamina, strength, coordination,
                  balance and mobility.
                </p>
                <p className="mt-4 text-base leading-7 text-neutral-400">
                  The scoring model also takes into account factors such as your age category and previous
                  athletic experience to create a more meaningful and balanced assessment of your overall
                  human capability.
                </p>
              </div>

              <div className="mt-6 grid gap-px bg-white/[0.05] sm:grid-cols-2">
                {domains.map((d) => (
                  <div key={d.title} className="bg-[#0d0d0d] p-5 transition-colors hover:bg-[#111]">
                    <h3 className="text-base uppercase tracking-wide text-white">{d.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">{d.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/[0.08] bg-[#0d0d0d]">
              <div className="border-b border-white/[0.06] p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.35em] text-neutral-600"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Performance Dashboard
                    </p>
                    <h3 className="mt-2 text-2xl uppercase tracking-tight text-white">
                      Ultimate Human Score
                    </h3>
                  </div>
                  <Gauge className="h-10 w-10 text-neutral-700" strokeWidth={1} />
                </div>
              </div>

              <div className="space-y-px bg-white/[0.04]">
                {domains.map((d, i) => (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="bg-[#0d0d0d] p-5"
                  >
                    <div className="mb-2.5 flex items-center justify-between">
                      <p
                        className="text-[12px] font-bold uppercase tracking-[0.2em] text-neutral-300"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {d.title}
                      </p>
                      <p className="text-[12px] font-bold text-lime-400">{d.value}</p>
                    </div>
                    <div className="h-1 w-full bg-white/[0.06]">
                      <motion.div
                        className="h-1 bg-lime-400"
                        style={{ boxShadow: "0 0 8px rgba(163,230,53,0.45)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${d.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.95, delay: i * 0.07 + 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] p-7">
                <div className="flex items-center justify-between">
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-600"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Overall Score
                  </p>
                  <p
                    className="text-3xl text-white"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    78<span className="ml-1 text-sm font-normal text-neutral-600">/100</span>
                  </p>
                </div>
                <div className="mt-3 h-1.5 w-full bg-white/[0.06]">
                  <div
                    className="h-1.5 w-[78%] bg-gradient-to-r from-lime-400 to-lime-600"
                    style={{ boxShadow: "0 0 10px rgba(163,230,53,0.4)" }}
                  />
                </div>
                <p className="mt-3 text-[11px] text-neutral-600">
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
                      className="btn-lime-glow mt-8 block border border-lime-400 bg-lime-400 px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-black no-underline hover:bg-lime-300"
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

        {/* ── SIGNUP / WAITLIST ── */}
        <section id="signup" className="border-t border-white/[0.06] bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden border border-white/[0.08] bg-[#0a0a0a] p-12 text-center">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center top, rgba(132,204,22,0.08) 0%, transparent 58%)",
                }}
              />
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

              <div className="relative">
                <div className="mb-7 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center border border-lime-400/30 bg-lime-400/[0.06]">
                    <Mail className="h-6 w-6 text-lime-400" strokeWidth={1.5} />
                  </div>
                </div>

                <SectionLabel>Founding Athlete Registration</SectionLabel>

                <h2 className="text-metallic text-4xl uppercase tracking-tight md:text-5xl">
                  Become One of the
                  <br />
                  First Ultimate Humans
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
                  Get early access to launch events, training plans, founding athlete pricing, rankings
                  and exclusive first-release places.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://theultimatehuman.fitness"
                    className="btn-lime-glow inline-flex items-center bg-lime-400 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-black no-underline hover:bg-lime-300"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Join at theultimatehuman.fitness
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="mailto:hello@theultimatehuman.fitness"
                    className="inline-flex items-center border border-white/20 bg-white/[0.04] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-white no-underline transition-colors hover:border-white/35 hover:bg-white/[0.08]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <img
            src="/images/logo.png"
            alt="The Ultimate Human"
            className="h-8 w-auto object-contain opacity-40"
            style={{ maxWidth: "160px" }}
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
