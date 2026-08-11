import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform, useInView } from "framer-motion";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import {
  ArrowRight,
  Gauge,
  Trophy,
  AlertTriangle,
  Mail,
  CheckCircle2,
  Flame,
  Timer,
  Zap,
  ChevronRight,
  Sparkles,
  MessageCircle,
  UserCheck,
  ChevronDown,
  Weight,
  PlayCircle,
  X,
  Film,
  Menu,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import StickyScene from "@/components/motion/StickyScene";
import CountUp from "@/components/motion/CountUp";
import {
  uhciPrinciples,
  capabilities,
  pillarRadarData,
  differenceTable,
  domains,
  uhsReveals,
  divisions,
  capabilities10,
  workingWeights,
  weightsByName,
  finalCircuit,
  aiScoreBars,
  aiTrainingFocus,
  aiScoreGains,
  movementCoachCards,
  journeyQuizQuestions,
  aiHowItWorks,
  aiImprovementAreas,
  aiProfileEvolution,
  subscriptionTiers,
  categories,
  whyEnter,
  foundingPricing,
  workToDo,
  aiTabs,
  journeyCards,
  scoreTabs,
} from "@/data/content";
import { SITE_VERSION, REGISTER_URL, REGISTER_LABEL } from "@/lib/constants";

/* ─────────────────────────────────────────────────────────────────
   PASSWORD — change this to whatever you want
───────────────────────────────────────────────────────────────── */


/* Bump this on every update/push so the footer marker shows what's deployed. */


/* While the on-site form is parked, every call to action points at the Google
   Form instead. Change this one value to repoint every button on the site. */

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */





























/* ─────────────────────────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────────────────────────── */

/* The site's primary call to action. Opens the Google Form in a new tab.
   size="lg" for hero/signup, "sm" for the header and tier cards. */
function RegisterButton({ size = "lg", className = "", label = REGISTER_LABEL, shortLabel }) {
  const sizing =
    size === "sm"
      ? "px-4 py-2.5 text-[11px] tracking-[0.12em] sm:px-5 sm:text-[12px]"
      : "px-7 py-4 text-[13px] tracking-[0.14em] sm:px-9 sm:py-5 sm:text-[15px]";
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`uh-cta inline-flex max-w-full items-center justify-center gap-2 bg-lime-400 text-center font-black uppercase leading-tight text-black no-underline hover:bg-lime-300 ${sizing} ${className}`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <span className="relative z-10">
        {shortLabel ? (
          <>
            <span className="sm:hidden">{shortLabel}</span>
            <span className="hidden sm:inline">{label}</span>
          </>
        ) : (
          label
        )}
      </span>
      <ArrowRight className="relative z-10 h-4 w-4 shrink-0" />
    </a>
  );
}

/* Header variant: reads "Register Interest", and on hover drops open to
   reveal "& Provide Feedback". Absolutely-positioned drop, so expanding never
   changes the header's height. */
function RegisterButtonHeader() {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={REGISTER_LABEL}
      className="uh-cta-header group relative block shrink-0 bg-lime-400 text-black no-underline hover:bg-lime-300"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <span className="uh-cta-sheen-wrap" aria-hidden="true" />
      <span className="relative z-10 flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-black uppercase leading-none tracking-[0.14em] sm:px-5 sm:text-[12px] sm:tracking-[0.16em]">
        Register Interest
        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
      <span className="uh-cta-drop z-10 block bg-lime-400 shadow-[0_10px_22px_rgba(0,0,0,0.35)] group-hover:bg-lime-300" aria-hidden="true">
        <span className="block border-t border-black/15 px-4 pb-2.5 pt-2 text-center text-[10.5px] font-black uppercase leading-none tracking-[0.14em] sm:px-5 sm:text-[11px]">
          &amp; Provide Feedback
        </span>
      </span>
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <Reveal className="mb-5 flex items-center gap-3">
      <div className="h-px w-8 shrink-0 bg-lime-400" />
      <p
        className="text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {children}
      </p>
    </Reveal>
  );
}

/* Placeholder block for images not yet sourced — dashed border, labelled */
function ImageBlock({ id, aspectRatio = "16/9", searchTerms, treatment, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        aspectRatio,
        border: "1.5px dashed rgba(163,230,53,0.2)",
        background: "rgba(163,230,53,0.025)",
      }}
    >
      <div className="px-6 text-center">
        <p
          className="mb-1 text-[10px] font-bold uppercase tracking-[0.4em] text-lime-400/40"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Image Placeholder
        </p>
        <p className="mb-2 text-[16px] font-bold uppercase tracking-wide text-white/40">
          {id}
        </p>
        {searchTerms && (
          <p className="mb-1 text-[13px] italic text-neutral-700">"{searchTerms}"</p>
        )}
        {treatment && (
          <p className="text-[10px] text-neutral-800">Treatment: {treatment}</p>
        )}
        <p
          className="mt-3 text-[10px] text-neutral-800"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          → /images/marketing/{id}
        </p>
      </div>
    </div>
  );
}

/* Shows the real marketing photo once it exists at /images/marketing/<file>,
   otherwise falls back to the labelled ImageBlock placeholder. Drop a file in
   and it appears automatically — no code change needed.

   The photo renders in full colour; moving the cursor over it reveals a
   brighter, more vibrant glow in a soft spotlight that tracks the mouse. */
function MarketingImage({
  file,
  aspectRatio,
  searchTerms,
  treatment,
  className = "",
  fill = false,
  imgClassName = "",
  opacity,
  overlay,
  onResolved,
}) {
  const [failed, setFailed] = useState(false);
  const wrapRef = useRef(null);
  const colorRef = useRef(null);

  /* Track the cursor at the window level so the colour spotlight works even
     when other layers (hero text/CTAs) sit above the image and swallow events. */
  useEffect(() => {
    const onMove = (e) => {
      const wrap = wrapRef.current;
      const color = colorRef.current;
      if (!wrap || !color) return;
      const r = wrap.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (inside) {
        color.style.setProperty("--mx", `${e.clientX - r.left}px`);
        color.style.setProperty("--my", `${e.clientY - r.top}px`);
        color.style.opacity = "1";
      } else {
        color.style.opacity = "0";
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [failed]);

  if (failed) {
    return (
      <ImageBlock
        id={file}
        aspectRatio={aspectRatio}
        searchTerms={searchTerms}
        treatment={treatment}
        className={className}
      />
    );
  }

  const src = `/images/marketing/${file}`;
  const spotlight =
    "radial-gradient(circle 150px at var(--mx, -999px) var(--my, -999px), #000 0%, #000 42%, transparent 78%)";

  const layers = (
    <>
      {/* full-colour base */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        onLoad={() => onResolved && onResolved(true)}
        onError={() => {
          setFailed(true);
          onResolved && onResolved(false);
        }}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        style={{ filter: "saturate(1.05) contrast(1.02)" }}
      />
      {/* brighter, more vibrant layer revealed in a spotlight under the cursor */}
      <img
        ref={colorRef}
        src={src}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        style={{
          opacity: 0,
          transition: "opacity 0.25s ease-out",
          filter: "saturate(1.7) brightness(1.28) contrast(1.08)",
          WebkitMaskImage: spotlight,
          maskImage: spotlight,
        }}
      />
      {overlay}
    </>
  );

  return (
    <div
      ref={wrapRef}
      className={
        fill
          ? "uh-img-glow pointer-events-auto absolute inset-0 h-full w-full overflow-hidden"
          : `uh-img-glow pointer-events-auto relative overflow-hidden ${className}`
      }
      style={{ aspectRatio: fill ? undefined : aspectRatio, opacity }}
    >
      {layers}
    </div>
  );
}

/* Radar chart component for 10 Pillars section */
function CapabilityPillarsSection() {
  const radarRef = useRef(null);
  const isInView = useInView(radarRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  /* Highlight the selected axis label on the radar so the chart and the
     selector stay visually linked. */
  const renderTick = ({ payload, x, y, textAnchor }) => {
    const isActive = pillarRadarData[active]?.pillar === payload.value;
    return (
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill={isActive ? "#a3e635" : "rgba(255,255,255,0.28)"}
        style={{
          fontSize: isActive ? 11 : 9.5,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.18em",
          transition: "fill 0.25s ease",
        }}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <section
      className="relative uh-divide px-6 py-20"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(163,230,53,0.22) 0%, transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionLabel>The 10 Pillars of Human Performance</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-3xl uppercase tracking-wide text-white md:text-4xl">
            Every Dimension. Measured.
          </Reveal>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-neutral-400">
            The Ultimate Human Index spans all 10 axes simultaneously — not just the ones you train.
            <span className="mt-1 block text-[14px] text-neutral-500">
              Select a capability to see what it measures.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Radar chart */}
          <div
            ref={radarRef}
            className="w-full shrink-0 lg:w-[500px]"
            role="img"
            aria-label="Radar chart of a sample athlete's Ultimate Human Index across ten capabilities: endurance 820, strength 760, power 730, speed 880, agility 650, balance 640, coordination 700, resilience 670, mobility 580 and mental 720 out of 1000."
          >
            <ResponsiveContainer width="100%" height={430}>
              <RadarChart
                key={isInView ? "active" : "idle"}
                data={pillarRadarData}
                cx="50%"
                cy="50%"
                outerRadius="68%"
              >
                <PolarGrid stroke="rgba(255,255,255,0.05)" gridType="polygon" />
                <PolarAngleAxis dataKey="pillar" tick={renderTick} />
                <Radar
                  dataKey="value"
                  stroke="rgba(163,230,53,0.7)"
                  fill="rgba(163,230,53,0.08)"
                  strokeWidth={1.5}
                  dot={{ fill: "rgba(163,230,53,0.6)", r: 2.5, strokeWidth: 0 }}
                  isAnimationActive={isInView}
                  animationDuration={1400}
                  animationEasing="ease-out"
                />
              </RadarChart>
            </ResponsiveContainer>
            <p
              className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Sample athlete profile · Intermediate division
            </p>
          </div>

          {/* Selector + detail panel */}
          <div className="w-full">
            {/* Compact capability chips */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
              {capabilities.map(({ label, icon: Icon }, i) => {
                const on = i === active;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`flex items-center gap-2.5 px-3.5 py-3 text-left transition-colors ${
                      on ? "bg-lime-400/[0.12]" : "bg-[#0c0c0c] hover:bg-[#141414]"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-colors ${on ? "text-lime-400" : "text-neutral-500"}`}
                      strokeWidth={1.5}
                    />
                    <span className="min-w-0">
                      <span
                        className={`block truncate text-[11.5px] font-bold uppercase tracking-[0.16em] transition-colors ${
                          on ? "text-white" : "text-neutral-400"
                        }`}
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {label}
                      </span>
                      <span className={`block text-[13px] font-bold ${on ? "text-lime-400" : "text-neutral-500"}`}>
                        {pillarRadarData[i].value}
                        <span className="text-neutral-600">/1000</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail for the selected capability */}
            <div className="mt-6 min-h-[190px] border border-lime-400/20 bg-lime-400/[0.03] p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl uppercase tracking-wide text-white">{current.label}</h3>
                    <p className="shrink-0 text-2xl text-lime-400" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
                      <CountUp key={current.label} to={pillarRadarData[active].value} duration={0.9} />
                      <span className="text-[15px] text-neutral-400">/1000</span>
                    </p>
                  </div>
                  <p className="mt-4 text-[16px] leading-7 text-neutral-300">{current.detail}</p>
                  {current.example && (
                    <div className="mt-4 flex gap-3 border-t border-white/[0.07] pt-4">
                      <span
                        className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-lime-400/70"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        In UHI
                      </span>
                      <p className="text-[15px] leading-6 text-neutral-400">{current.example}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   HERO ARENA BACKGROUND
───────────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────────
   HERO THEME PATTERN — branded "measurement" backdrop. Pure CSS: a fine
   technical grid, heavier lime measure-lines, a drifting diagonal hatch,
   corner ticks and the UH watermark. No image assets, no network cost.
───────────────────────────────────────────────────────────────── */

function HeroPatternBackground({ heroRef, reducedMotion }) {
  const gridRef = useRef(null);
  const measureRef = useRef(null);
  const hatchRef = useRef(null);
  const glowRef = useRef(null);

  /* Cursor-reactive parallax — layers shift by different amounts for depth.
     Written straight to the DOM (rAF-throttled) so there are zero re-renders. */
  useEffect(() => {
    if (reducedMotion) return;
    let frame = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      frame = 0;
      if (gridRef.current) gridRef.current.style.transform = `translate3d(${tx * 8}px, ${ty * 8}px, 0)`;
      if (measureRef.current) measureRef.current.style.transform = `translate3d(${tx * 20}px, ${ty * 20}px, 0)`;
      if (hatchRef.current) hatchRef.current.style.transform = `translate3d(${tx * 36}px, ${ty * 36}px, 0)`;
      if (glowRef.current) {
        glowRef.current.style.background =
          `radial-gradient(ellipse 60% 55% at ${78 + tx * 12}% ${18 + ty * 12}%, rgba(163,230,53,0.30) 0%, transparent 64%),` +
          `radial-gradient(ellipse 50% 45% at ${20 + tx * 8}% ${90 + ty * 8}%, rgba(163,230,53,0.16) 0%, transparent 66%)`;
      }
    };
    const onMove = (e) => {
      // -0.5 … 0.5 relative to the viewport
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  /* Scroll-linked drift — the pattern glides as you scroll through the hero. */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const measureY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const hatchY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const patternFade = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <div
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Base tone */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(165deg, #16240d 0%, #0b1010 45%, #0d1420 100%)" }}
      />

      {/* Fine technical grid */}
      <motion.div className="absolute inset-0" style={{ y: reducedMotion ? 0 : gridY, opacity: patternFade }}>
        <div
          ref={gridRef}
          className="absolute inset-[-10%] will-change-transform"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0 1px, transparent 1px 48px)," +
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0 1px, transparent 1px 48px)",
          }}
        />
      </motion.div>

      {/* Heavier lime measure-lines every 240px */}
      <motion.div className="absolute inset-0" style={{ y: reducedMotion ? 0 : measureY, opacity: patternFade }}>
        <div
          ref={measureRef}
          className="absolute inset-[-10%] will-change-transform"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(163,230,53,0.05) 0 1px, transparent 1px 240px)," +
              "repeating-linear-gradient(90deg, rgba(163,230,53,0.05) 0 1px, transparent 1px 240px)",
          }}
        />
      </motion.div>

      {/* Drifting diagonal hatch */}
      <motion.div className="absolute inset-0" style={{ y: reducedMotion ? 0 : hatchY, opacity: patternFade }}>
        <div
          ref={hatchRef}
          className="uh-pattern-hatch absolute inset-[-40%] will-change-transform"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(163,230,53,0.018) 0 2px, transparent 2px 16px)",
          }}
        />
      </motion.div>

      {/* Lime glow bloom — follows the cursor */}
      <div
        ref={glowRef}
        className="absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 78% 18%, rgba(163,230,53,0.30) 0%, transparent 64%)," +
            "radial-gradient(ellipse 50% 45% at 20% 90%, rgba(163,230,53,0.16) 0%, transparent 66%)",
        }}
      />

      {/* Corner measure ticks — technical framing */}
      {[
        "left-8 top-24 border-l border-t",
        "right-8 top-24 border-r border-t",
        "left-8 bottom-10 border-b border-l",
        "right-8 bottom-10 border-b border-r",
      ].map((pos) => (
        <div key={pos} className={`absolute hidden h-10 w-10 border-lime-400/10 md:block ${pos}`} />
      ))}

      {/* UH watermark — floor right */}
      <div
        className="absolute"
        style={{
          bottom: "6%",
          right: "4%",
          width: "clamp(200px, 26vw, 380px)",
          opacity: 0.06,
          filter: "grayscale(1) brightness(4) blur(0.5px)",
        }}
      >
        <img src="/images/logo.png" alt="" className="w-full" />
      </div>
    </div>
  );
}



/* ─────────────────────────────────────────────────────────────────
   FOUNDER CARD
───────────────────────────────────────────────────────────────── */

function FounderCard({ photo, ratio, name, role, quote }) {
  const [open, setOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(!photo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="lime-glow-hover group relative overflow-hidden bg-[#0d0d0d] transition-colors hover:bg-[#0f0f0f]"
    >
      <div className="absolute left-0 top-0 z-10 h-px w-full bg-gradient-to-r from-lime-400/40 via-white/[0.08] to-transparent" />
      <div className="uh-img-glow-target relative overflow-hidden bg-[#050505]" style={{ aspectRatio: ratio }}>
        {photoFailed ? (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center"
            style={{ border: "1.5px dashed rgba(163,230,53,0.18)", background: "rgba(163,230,53,0.025)" }}
          >
            <UserCheck className="h-7 w-7 text-lime-400/35" strokeWidth={1.5} />
            <p
              className="text-[10px] font-bold uppercase tracking-[0.24em] text-lime-400/40"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Photo to follow
            </p>
          </div>
        ) : (
          <img
            src={photo}
            alt={name}
            onError={() => setPhotoFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <h3 className="text-lg uppercase tracking-wide text-white">{name}</h3>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lime-400/30 text-lime-400 transition-colors group-hover:border-lime-400/60">
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </span>
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
            <div className="px-6 pb-6">
              <div className="flex items-center gap-2">
                <div className="h-px w-5 shrink-0 bg-lime-400/50" />
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-lime-400/75"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {role}
                </p>
              </div>
              <p className="mt-4 text-base leading-7 text-neutral-400">"{quote}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
          run ? "text-neutral-400" : isFinal ? "text-lime-300" : "text-lime-400/70"
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

function CapabilityAccordionItem({ capability, division, isOpen, onToggle, index }) {
  const weight = capability.weightKey ? weightsByName[capability.weightKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
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
            Capability {String(capability.number).padStart(2, "0")}
          </p>
          <p
            className="mt-3 truncate text-base font-bold uppercase tracking-wide text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {capability.name}
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
              {capability.reps[division]}
            </motion.p>
          </AnimatePresence>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 ${
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
            <div className="uh-divide p-6 pt-5">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What It Tests
              </p>
              <p className="mt-2 text-[16px] leading-6 text-neutral-300">{capability.tests}</p>

              <div className="mt-5 grid grid-cols-3 gap-px bg-white/[0.05]">
                {divisions.map((d) => (
                  <div
                    key={d.key}
                    className={`bg-[#111] p-3 text-center ${d.key === division ? "ring-1 ring-inset ring-lime-400/35" : ""}`}
                  >
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {d.label}
                    </p>
                    <p className="mt-1 text-[13px] font-bold text-neutral-200">{capability.reps[d.key]}</p>
                  </div>
                ))}
              </div>

              {weight && (
                <div className="mt-5 flex items-start gap-3">
                  <Weight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime-400" strokeWidth={1.5} />
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Suggested Working Weight · {divisions.find((d) => d.key === division).label}
                    </p>
                    <p className="mt-1 text-[16px] text-neutral-300">
                      Women: <span className="font-bold text-white">{weight[division].women}</span>
                      <span className="px-2 text-neutral-400">·</span>
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
                <p className="mt-1.5 text-[16px] leading-5 text-neutral-400">{capability.coachingNote}</p>
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
            className="text-[15px] font-bold uppercase tracking-[0.2em] text-white"
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
            <div className="uh-divide p-6 pt-5">
              <p className="mb-4 text-[15px] leading-6 text-neutral-400">
                Indicative loads to guide training. Final event weights will be confirmed
                closer to launch.
              </p>
              <div className="uh-scroll-dark overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th
                        className="py-3 pr-4 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        Capability
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
                          className="py-2 pr-4 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500"
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
                        <td className="py-3 pr-4 text-[15px] font-bold text-white">{w.name}</td>
                        <td className="py-3 pr-4 text-center text-[15px] text-neutral-300">{w.foundation.women}</td>
                        <td className="py-3 pr-4 text-center text-[15px] text-neutral-300">{w.foundation.men}</td>
                        <td className="py-3 pr-4 text-center text-[15px] text-neutral-300">{w.intermediate.women}</td>
                        <td className="py-3 pr-4 text-center text-[15px] text-neutral-300">{w.intermediate.men}</td>
                        <td className="py-3 pr-4 text-center text-[15px] text-neutral-300">{w.elite.women}</td>
                        <td className="py-3 pr-4 text-center text-[15px] text-neutral-300">{w.elite.men}</td>
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
  const [openCapability, setOpenCapability] = useState(1);
  const [finalOpen, setFinalOpen] = useState(false);
  const current = divisions.find((d) => d.key === division);

  return (
    <section
      id="format"
      className="relative uh-divide px-6 py-28"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 90% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>The UHI Event Structure</SectionLabel>
            <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
              9 Capabilities.
              <br />
              One Continuous Test.
            </Reveal>
            <p className="mt-5 text-lg leading-7 text-neutral-400">
              A run before every capability. Eight capability tests. One final circuit.
              Choose a division, then open a capability to see exactly what it tests.
            </p>
          </div>

          {/* Division selector */}
          <div className="flex w-full shrink-0 gap-px bg-white/[0.06] sm:w-auto">
            {divisions.map((d) => (
              <button
                key={d.key}
                onClick={() => setDivision(d.key)}
                className={`flex-1 px-3 py-3 text-[11px] tracking-[0.1em] sm:flex-none sm:px-5 sm:text-[12px] sm:tracking-[0.18em] font-bold uppercase transition-colors ${
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
            className="mb-px grid grid-cols-1 gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              ["Run Before Each Capability", current.runDistance],
              ["Final Run · Capability 9", current.finalRun],
              ["Total Running Distance", current.totalRunning],
              ["Estimated Time", current.duration],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#0d0d0d] p-6 text-center">
                <p
                  className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-neutral-500"
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
        <div className="relative mt-10">
          <div className="uh-scroll-dark overflow-x-auto pb-4">
            <div className="flex min-w-max items-center gap-1.5 px-1">
              {capabilities10.map((capability) => (
                <React.Fragment key={capability.number}>
                  <FlowNode label="Run" sub={current.runDistance} run />
                  <FlowConnector />
                  <FlowNode label={`C${capability.number}`} sub={capability.name} />
                  <FlowConnector />
                </React.Fragment>
              ))}
              <FlowNode label="L10" sub="Final Circuit" final />
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-4 right-0 top-0 w-10 bg-gradient-to-l from-[#080808] to-transparent sm:hidden" />
          <p
            className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 sm:hidden"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Swipe to see the full route →
          </p>
        </div>

        {/* Capabilities 1–9 — accordion, one open at a time */}
        <div className="mt-12 space-y-px bg-white/[0.05]">
          {capabilities10.map((capability, index) => (
            <CapabilityAccordionItem
              key={capability.number}
              capability={capability}
              division={division}
              index={index}
              isOpen={openCapability === capability.number}
              onToggle={() => setOpenCapability((prev) => (prev === capability.number ? null : capability.number))}
            />
          ))}
        </div>

        {/* Capability 10 — Final Circuit, highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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
                  Capability 9 · The Finisher
                </p>
                <p
                  className="mt-1 text-base font-bold uppercase tracking-wide text-white"
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
                  <p className="mb-4 text-[16px] leading-6 text-neutral-400">
                    Five back-to-back elements with no rest. Everything you've tested across
                    the previous eight capabilities, compressed into one final push.
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
                            className="text-[15px] text-neutral-400"
                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                          >
                            {name}
                          </span>
                          <span
                            className="text-[15px] font-bold text-lime-400"
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


function HowItWorksCard({ step, index }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quotesOpen, setQuotesOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
      <p className="mt-3 text-base leading-6 text-neutral-400">{step.text}</p>

      {step.videos && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {step.videos.map((label) => (
            <div
              key={label}
              className="group relative flex aspect-square flex-col items-center justify-center gap-1.5 border border-white/[0.08] bg-[#111] px-1.5 text-center transition-colors hover:border-lime-400/30"
            >
              <PlayCircle
                className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-lime-400"
                strokeWidth={1.5}
              />
              <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.06em] text-neutral-400">
                {label}
              </p>
              <span className="absolute left-1 top-1 text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500">
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
            What UHI Analyses
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
                      className="border-l-2 border-lime-400/40 bg-lime-400/[0.04] py-1.5 pl-3 text-[15px] italic leading-5 text-neutral-300"
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
          className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`}
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
                  <h4 className="mt-4 text-[16px] font-bold uppercase leading-tight tracking-[0.06em] text-white">
                    {title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-5 text-neutral-400">{text}</p>
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
          <h4 className="text-[16px] font-bold uppercase tracking-[0.16em] text-white">
            Your Personal Capability Coach
          </h4>
          <p className="mt-2 text-[16px] leading-5 text-neutral-400">
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
                      <p className="text-[15px] leading-5 text-neutral-400">{point}</p>
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
        <h3 className="text-base font-bold uppercase tracking-[0.16em] text-white">
          Movement Coach Preview
        </h3>
      </div>
      {/* AI movement-analysis still — sells the pose-tracking product */}
      <MarketingImage
        file="movement-analysis-still.jpg"
        aspectRatio="16/9"
        className="mb-px w-full"
        overlay={
          <>
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(0deg, rgba(6,6,6,0.72) 0%, transparent 42%)" }}
            />
            <div className="pointer-events-none absolute bottom-0 left-0 flex items-center gap-2.5 p-5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
              <p
                className="text-[10px] font-bold uppercase tracking-[0.28em] text-lime-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                AI Movement Analysis · Live
              </p>
            </div>
          </>
        }
      />
      <div className="grid gap-px bg-white/[0.05] md:grid-cols-3">
        {movementCoachCards.map((card) => {
          const isOpen = openCard === card.title;
          return (
            <div key={card.title} className="bg-[#0d0d0d] p-6 transition-colors hover:bg-[#111]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-bold uppercase tracking-wide text-white">{card.title}</p>
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
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          What UHI Sees
                        </p>
                        <p className="mt-1.5 text-[16px] leading-5 text-neutral-300">{card.sees}</p>
                      </div>
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          Coaching Cue
                        </p>
                        <p className="mt-1.5 text-[16px] leading-5 text-lime-300">{card.cue}</p>
                      </div>
                      <div className="flex items-center justify-between border border-white/[0.08] bg-[#111] px-3 py-2.5">
                        <span
                          className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-400"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          Est. Score Gain
                        </span>
                        <span
                          className="text-[13px] font-bold text-white"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {card.from} <span className="text-neutral-400">→</span>{" "}
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
  const dialogRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const node = dialogRef.current;
    const focusableSel =
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    // Move focus into the dialog
    const first = node?.querySelector(focusableSel);
    (first || node)?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && node) {
        const f = node.querySelectorAll(focusableSel);
        if (!f.length) return;
        const firstEl = f[0];
        const lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, [onClose]);

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
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto border border-white/[0.1] bg-[#0b0b0b] p-7 outline-none"
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
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400"
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
                className="text-[13px] text-neutral-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </span>
              <span className="text-[13px] font-bold text-lime-400">{value}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[15px] leading-5 text-neutral-400">
          This is a quick preview — your full UHI Report breaks this down across all 10 capability
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
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
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
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400"
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
              className={`block w-full border px-4 py-3 text-left text-[15px] transition-colors ${
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
      <p className="text-[16px] leading-5 text-neutral-400">
        The full Human Context assessment captures the inputs behind your UHI Report — training
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
              className="text-[13px] text-neutral-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {label}
            </span>
            <span
              className="text-[13px] font-bold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[15px] leading-5 text-neutral-400">
        This feeds your UHI, your Athlete Type and your AI training focus.
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


function YourJourneyHub() {
  const [modal, setModal] = useState(null);

  return (
    <section
      id="journey"
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 8% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-5xl">
          <SectionLabel>Start Here</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl lg:whitespace-nowrap">
            Your Journey to The Ultimate Human.
          </Reveal>
          <p className="mt-5 text-lg leading-7 text-neutral-400">
            Five steps. One profile that gets sharper every time you use it.
          </p>
        </div>

        {/* Horizontal path / timeline */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-white/[0.07] lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-7">
            {journeyCards.map((card, i) => {
              const Icon = card.icon;
              const inner = (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-start px-0"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 mb-5 flex h-[2.75rem] w-[2.75rem] shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-[#0d0d0d] transition-colors group-hover:border-lime-400/50 group-hover:bg-lime-400/[0.07]">
                    <span
                      className="text-[13px] font-bold tabular-nums text-neutral-400 transition-colors group-hover:text-lime-400"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <Icon
                    className="mb-3 h-5 w-5 text-neutral-400 transition-colors group-hover:text-lime-400/70"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-[16px] font-bold uppercase tracking-wide text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-6 text-neutral-400">{card.text}</p>
                  <span
                    className="mt-4 flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-lime-400/60 transition-colors group-hover:text-lime-400"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {card.cta}
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </motion.div>
              );

              return card.action === "scroll" ? (
                <a key={card.key} href={card.href} className="no-underline">
                  {inner}
                </a>
              ) : (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setModal(card.key)}
                  className="w-full text-left"
                >
                  {inner}
                </button>
              );
            })}
          </div>
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


function ScoreSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const overviewPanel = (
    <div className="grid gap-px bg-white/[0.05] md:grid-cols-[1fr_1.1fr]">
      <div className="bg-[#0d0d0d] p-7 md:p-8">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
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
          className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-500"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Overall Index
        </p>
        <p
          className="mt-2 text-5xl text-white"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          <CountUp to={710} duration={1.6} /><span className="ml-1 text-lg font-normal text-neutral-400">/1000</span>
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
        <p className="mt-3 text-[13px] text-neutral-400">
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
          transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0d0d0d] p-6"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base uppercase tracking-wide text-white">{d.title}</h3>
            <p className="text-[16px] font-bold text-lime-400"><CountUp to={d.value} /><span className="text-neutral-400">/1000</span></p>
          </div>
          <p className="mt-1.5 text-base leading-6 text-neutral-400">{d.text}</p>
          <div className="mt-3 h-1 w-full bg-white/[0.06]">
            <motion.div
              className="h-1 bg-lime-400"
              style={{ boxShadow: "0 0 8px rgba(163,230,53,0.45)" }}
              initial={{ width: 0 }}
              whileInView={{ width: `${d.pct}%` }}
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
          transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-3 bg-[#0d0d0d] p-6"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" strokeWidth={2} />
          <div>
            <p className="text-[16px] font-bold uppercase tracking-[0.12em] text-white">
              {item.title}
            </p>
            <p className="mt-1.5 text-base leading-6 text-neutral-400">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const tabContent = { overview: overviewPanel, breakdown: breakdownPanel, path: pathPanel };

  return (
    <section
      id="score"
      className="uh-divide relative px-6 py-28"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(255,255,255,0.016) 0%, transparent 70%), radial-gradient(ellipse 55% 45% at 100% 100%, rgba(163,230,53,0.18) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionLabel>Your Personal Benchmark</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Leave with More
            <br />
            Than a Medal.
          </Reveal>
          <p className="mt-6 text-lg leading-7 text-neutral-400">
            Every participant receives an Ultimate Human Index showing performance across
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
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
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
              className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {label}
            </p>
            <div
              className="mt-1.5 border border-white/[0.08] bg-[#111] px-3 py-2.5 text-[16px] text-neutral-200"
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
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        02 Predicted UHI
      </p>
      <div className="mt-6 flex items-end gap-5">
        <p
          className="text-6xl text-lime-400"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          770
        </p>
        <div className="pb-2">
          <p
            className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-neutral-400"
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
            className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Predicted Completion
          </p>
          <p className="mt-1.5 text-base font-bold text-white">108–110 min</p>
        </div>
        <div className="bg-[#111] p-4">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
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
              <span className="text-[13px] font-bold text-lime-400"><CountUp to={bar.value} /></span>
            </div>
            <div className="h-1.5 w-full bg-white/[0.06]">
              <motion.div
                key={tick}
                className="h-1.5 bg-lime-400"
                style={{ boxShadow: "0 0 8px rgba(163,230,53,0.45)" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.pct}%` }}
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
      <h4 className="text-base font-bold uppercase tracking-wide text-white">
        Estimated Score Gain
      </h4>
      <div className="mt-3 space-y-px bg-white/[0.05]">
        {aiScoreGains.map((g) => (
          <div key={g.label} className="flex items-center justify-between bg-[#111] px-4 py-3">
            <span
              className="text-[13px] text-neutral-300"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {g.label}
            </span>
            <span
              className="text-[13px] font-bold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {g.from} <span className="text-neutral-400">→</span>{" "}
              <span className="text-lime-400">{g.to}</span>
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const coachingPanel = (
    <div>
      <h4 className="text-base font-bold uppercase tracking-wide text-white">
        Training Focus
      </h4>
      <div className="mt-3 space-y-2.5">
        {aiTrainingFocus.map((point, i) => (
          <div key={point} className="flex gap-3">
            <span className="text-[13px] font-bold text-lime-400">{i + 1}</span>
            <p className="text-[16px] leading-5 text-neutral-300">{point}</p>
          </div>
        ))}
      </div>

      <a
        href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
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
          <p className="mt-0.5 text-[13px] text-neutral-400">
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
    <section
      id="coaching"
      className="uh-divide relative px-6 py-28"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 92% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <SectionLabel>Built by Coaches. Powered by AI.</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Improve Your Movement.
            <br />
            Improve Your Index.
          </Reveal>
          <p className="mt-5 text-lg leading-7 text-neutral-400">
            Most fitness platforms measure effort. Ultimate Human Index measures
            capability, then shows you how to improve it. Upload a video of your
            exercise and the UHI AI coaching platform is being built to analyse your
            movement against the UHI Movement Standard™ — developed by
            coaches, athletes and movement specialists.
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
                className="cursor-default border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-neutral-400 transition-colors hover:border-lime-400/30 hover:text-lime-300"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p
          className="mb-6 max-w-3xl text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-500"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Based on your profile, training background and movement confidence,
          Ultimate Human Index estimates your likely event performance and recommends
          the right entry level.
        </p>

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
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
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
        className="mt-5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-lime-400"
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
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col bg-[#0d0d0d] p-7 transition-colors ${
        tier.highlighted
          ? "ring-1 ring-lime-400/55 md:-translate-y-2 md:shadow-[0_0_48px_rgba(163,230,53,0.1)]"
          : "hover:bg-[#111]"
      }`}
    >
      {tier.highlighted && (
        <>
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-lime-400 via-lime-400/60 to-transparent" />
          {/* Ribbon badge */}
          <div
            className="absolute right-0 top-0 overflow-hidden"
            style={{ width: 72, height: 72 }}
          >
            <div
              className="absolute flex items-center justify-center bg-lime-400 text-[10px] font-black uppercase tracking-[0.18em] text-black"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                width: 100,
                top: 18,
                right: -22,
                transform: "rotate(45deg)",
                transformOrigin: "center",
              }}
            >
              Popular
            </div>
          </div>
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
          className={`h-5 w-5 ${tier.highlighted ? "text-lime-400" : "text-neutral-400"}`}
          strokeWidth={1.5}
        />
      </div>
      <h3 className="mt-6 text-xl uppercase tracking-wide text-white">{tier.name}</h3>
      {tier.price && (
        <p
          className={`mt-1.5 text-2xl ${tier.highlighted ? "text-lime-400" : "text-white"}`}
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          {tier.price}
        </p>
      )}
      <p className="mt-2 text-[16px] leading-5 text-neutral-400">{tier.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-lime-400"
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
              {tier.includesNote && (
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {tier.includesNote}
                </p>
              )}
              {tier.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                      tier.highlighted ? "text-lime-400" : "text-neutral-400"
                    }`}
                    strokeWidth={2}
                  />
                  <p className="text-[16px] leading-5 text-neutral-400">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1" />
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 block px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.18em] no-underline transition-colors ${
          tier.highlighted
            ? "btn-lime-glow border border-lime-400 bg-lime-400 text-black hover:bg-lime-300"
            : "border border-white/20 bg-white/[0.03] text-white hover:border-white/40 hover:bg-white/[0.08]"
        }`}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Register Interest
      </a>
    </motion.div>
  );
}

function SubscriptionSection() {
  return (
    <section
      id="membership"
      className="relative uh-divide px-6 py-28"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
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
          <SectionLabel>Membership & Coaching Platform</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            One Platform.
            <br />
            Every Level of Athlete.
          </Reveal>
          <p className="mt-5 text-lg leading-7 text-neutral-400">
            An Ultimate Human Index subscription is designed to keep you progressing long
            after race day. Members get ongoing AI-powered coaching, personalised
            training recommendations, performance tracking and recovery insights —
            plus exclusive event discounts, priority race entries and member-only
            challenges. Your Ultimate Human Index evolves with you, giving a clear
            measure of progress across strength, endurance, mobility and overall
            performance.
          </p>
          <p
            className="mt-3 text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            This is your ongoing platform access — separate from event entry.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] md:grid-cols-3">
          {subscriptionTiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <div className="mt-px flex flex-wrap items-center justify-between gap-4 bg-[#0a0a0a] p-6">
          <p className="text-[16px] text-neutral-400">
            Questions about subscriptions, scoring or training focus?
          </p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
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
   PINNED STATEMENT SCENE — Apple-style: section pins while scroll scrubs a
   timeline (backdrop zooms, headline scales + fades in, then out).
───────────────────────────────────────────────────────────────── */

function WholeHumanScene() {
  return (
    <StickyScene heightVh={165} className="relative bg-[#050505]">
      {(progress) => <WholeHumanContent progress={progress} />}
    </StickyScene>
  );
}

function WholeHumanContent({ progress }) {
  const reduced = useReducedMotion();

  // Scrubbed timeline — all transform/opacity, compositor-friendly.
  const bgScale = useTransform(progress, [0, 1], [1.06, 1.22]);
  const bgOpacity = useTransform(progress, [0, 0.3, 0.8, 1], [0.1, 0.26, 0.26, 0.1]);
  const titleScale = useTransform(progress, [0, 0.5], [0.8, 1]);
  const titleY = useTransform(progress, [0, 0.5], [40, 0]);
  const titleOpacity = useTransform(progress, [0, 0.14, 0.86, 1], [0, 1, 1, 0]);
  const subOpacity = useTransform(progress, [0.14, 0.32, 0.86, 1], [0, 1, 1, 0]);
  const subY = useTransform(progress, [0.22, 0.52], [22, 0]);
  // AirPods-style side rules that converge on the text as it forms.
  const leftX = useTransform(progress, [0.1, 0.5], [-120, 0]);
  const rightX = useTransform(progress, [0.1, 0.5], [120, 0]);
  const ruleOpacity = useTransform(progress, [0.1, 0.4, 0.75, 0.96], [0, 1, 1, 0]);

  const Title = (
    <>
      Measure the
      <br />
      Whole Human.
    </>
  );

  if (reduced) {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden px-6">
        <div className="relative z-10 text-center">
          <h2 className="text-5xl uppercase tracking-tight text-white md:text-7xl">{Title}</h2>
          <p
            className="mt-5 text-base font-bold uppercase tracking-[0.3em] text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ten capabilities. One score.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full items-center justify-center overflow-hidden px-6"
      style={{ background: "linear-gradient(165deg, #0d130a 0%, #060708 50%, #0a0c10 100%)" }}
    >
      {/* Backdrop that slowly zooms across the scene */}
      <motion.img
        src="/images/uh-hero-arena-floor-no-text-2400x1400.jpg"
        alt=""
        aria-hidden="true"
        style={{ scale: bgScale, opacity: bgOpacity, willChange: "transform" }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, rgba(5,5,5,0.65) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h2
          style={{ scale: titleScale, y: titleY, opacity: titleOpacity, willChange: "transform" }}
          className="text-metallic text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          {Title}
        </motion.h2>

        {/* Converging lime rules + sub-line */}
        <motion.div style={{ opacity: subOpacity, y: subY }} className="mt-7 flex items-center gap-4">
          <motion.div style={{ x: leftX, opacity: ruleOpacity }} className="h-px w-10 bg-lime-400/70" />
          <p
            className="text-[16px] font-bold uppercase tracking-[0.34em] text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ten Capabilities. One Score.
          </p>
          <motion.div style={{ x: rightX, opacity: ruleOpacity }} className="h-px w-10 bg-lime-400/70" />
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CONVERGE SCENE — AirPods-style: two cut-out subjects slide in from the
   sides and converge on centred text as the pinned section is scrolled.
   Cut-outs are transparent PNGs in /images/marketing/; placeholder until then.
───────────────────────────────────────────────────────────────── */

function CutoutImage({ file }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="flex h-full w-[34vw] max-w-[460px] items-end justify-center"
        style={{ border: "1.5px dashed rgba(163,230,53,0.2)", background: "rgba(163,230,53,0.02)" }}
      >
        <span
          className="mb-8 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400/40"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Cut-out (transparent PNG)
          <br />
          {file}
        </span>
      </div>
    );
  }
  return (
    <img
      src={`/images/marketing/${file}`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-auto object-contain"
    />
  );
}

function SplitFeatureScene({ file, side = "right", eyebrow, title, body }) {
  return (
    <StickyScene heightVh={165} className="relative bg-[#050505]">
      {(progress) => (
        <SplitFeatureContent
          progress={progress}
          file={file}
          side={side}
          eyebrow={eyebrow}
          title={title}
          body={body}
        />
      )}
    </StickyScene>
  );
}

function SplitFeatureContent({ progress, file, side, eyebrow, title, body }) {
  const reduced = useReducedMotion();
  const figureRight = side === "right";

  const figureY = useTransform(progress, [0, 1], ["6%", "-6%"]);
  const figureScale = useTransform(progress, [0, 1], [1.03, 1.12]);
  // Starts part-visible so arriving on this scene shows the athlete rather
  // than an empty black frame; the headline is what animates in.
  const figureOpacity = useTransform(progress, [0, 0.14, 0.92, 1], [0.7, 1, 1, 0.85]);
  const textX = useTransform(progress, [0, 0.5], [figureRight ? -48 : 48, 0]);
  const textOpacity = useTransform(progress, [0.04, 0.2, 0.86, 1], [0, 1, 1, 0]);

  const align = figureRight ? "text-left" : "text-right";
  const Statement = (
    <>
      <p
        className="mb-4 text-[11px] font-bold uppercase tracking-[0.34em] text-lime-400"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {eyebrow}
      </p>
      <h2 className="text-metallic text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
        {title}
      </h2>
      <p className={`mt-6 max-w-md text-base leading-7 text-neutral-400 ${figureRight ? "" : "ml-auto"}`}>
        {body}
      </p>
      <div className={`mt-7 h-px w-16 bg-lime-400/70 ${figureRight ? "" : "ml-auto"}`} />
    </>
  );

  if (reduced) {
    return (
      <div className="relative flex h-full items-center overflow-hidden px-6">
        <div className={`relative z-10 mx-auto w-full max-w-7xl ${align}`}>
          <div className={`max-w-xl ${figureRight ? "" : "ml-auto"}`}>{Statement}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full items-center overflow-hidden"
      style={{
        background: figureRight
          ? "linear-gradient(100deg, #060708 0%, #090b0c 45%, #0d1408 100%)"
          : "linear-gradient(260deg, #060708 0%, #090b0c 45%, #0d1408 100%)",
      }}
    >
      {/* Spotlight behind the figure so it emerges from the dark, not pasted on it */}
      <div
        className={`pointer-events-none absolute top-0 h-full w-2/3 ${figureRight ? "right-0" : "left-0"}`}
        style={{
          background: `radial-gradient(ellipse 55% 70% at ${figureRight ? "72%" : "28%"} 45%, rgba(163,230,53,0.14) 0%, rgba(255,255,255,0.045) 35%, transparent 68%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: "linear-gradient(0deg, rgba(163,230,53,0.05) 0%, transparent 100%)" }}
      />

      {/* Big figure, cropped by the frame at the bottom so it's grounded, not floating */}
      <motion.div
        style={{ y: figureY, scale: figureScale, opacity: figureOpacity, willChange: "transform" }}
        className={`uh-img-glow pointer-events-auto absolute top-[2%] z-0 h-[126%] ${figureRight ? "right-[1vw]" : "left-[1vw]"}`}
      >
        <CutoutImage file={file} />
      </motion.div>

      {/* Scrim keeps the text crisp on the opposite side (desktop) */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background: figureRight
            ? "linear-gradient(90deg, rgba(6,7,8,0.92) 0%, rgba(6,7,8,0.6) 35%, transparent 62%)"
            : "linear-gradient(270deg, rgba(6,7,8,0.92) 0%, rgba(6,7,8,0.6) 35%, transparent 62%)",
        }}
      />
      {/* Mobile: figure and text share the column, so darken it more so text stays primary */}
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{ background: "linear-gradient(180deg, rgba(6,7,8,0.72) 0%, rgba(6,7,8,0.55) 45%, rgba(6,7,8,0.82) 100%)" }}
      />

      {/* Text stack on the opposite side to the figure */}
      <motion.div
        style={{ x: textX, opacity: textOpacity, willChange: "transform" }}
        className={`relative z-10 mx-auto w-full max-w-7xl px-6 ${align}`}
      >
        <div className={`max-w-xl ${figureRight ? "" : "ml-auto"}`}>{Statement}</div>
      </motion.div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────────
   SECTION TOUR — animated down-arrow that walks the visitor through the
   page one section at a time with a long, eased "cinematic" scroll, so each
   section's reveal animations play as it arrives.
───────────────────────────────────────────────────────────────── */

function SectionTourButton() {
  const reducedMotion = useReducedMotion();
  const [atEnd, setAtEnd] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [busy, setBusy] = useState(false);
  const [overForm, setOverForm] = useState(false);
  const animRef = useRef(0);

  /* Hide the button while the visitor is scrolling manually, and flag the end
     of the page so the arrow can flip to "back to top". */
  useEffect(() => {
    let idle;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setAtEnd(y > max - 120);
      // Only auto-hide on genuine user scrolling, not our own animation
      if (!animRef.current) {
        setHidden(true);
        clearTimeout(idle);
        idle = setTimeout(() => setHidden(false), 700);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(idle);
    };
  }, []);

  /* Step aside when the sign-up form is on screen — the button sits bottom
     centre and would otherwise cover the submit button. */
  /* Step aside when a primary CTA or the sign-up form would sit under the
     button. A direct geometric test rather than IntersectionObserver: the
     button lives in the bottom-centre band, which rootMargin can't express. */
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const targets = document.querySelectorAll("#signup, [data-tour-avoid]");
      const bandTop = window.innerHeight - 110; // button zone height
      const bandLeft = window.innerWidth / 2 - 130;
      const bandRight = window.innerWidth / 2 + 130;
      let clash = false;
      targets.forEach((t) => {
        const r = t.getBoundingClientRect();
        if (r.bottom > bandTop && r.top < window.innerHeight && r.right > bandLeft && r.left < bandRight) {
          clash = true;
        }
      });
      setOverForm(clash);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* Eased scroll — deliberate enough to feel cinematic, but it starts moving
     immediately. easeInOutQuad is used rather than cubic: cubic's very flat
     start read as a ~700ms "nothing happening" delay on long jumps. Duration
     is capped so long jumps travel faster instead of taking longer. */
  const glideTo = (targetY) => {
    if (reducedMotion) {
      window.scrollTo({ top: targetY, behavior: "instant" });
      return;
    }
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (!distance) return;
    const duration = Math.min(1250, Math.max(750, Math.abs(distance) * 0.5));
    const startedAt = performance.now();
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    setBusy(true);
    const step = (now) => {
      const t = Math.min(1, (now - startedAt) / duration);
      // "instant" is essential: the global `scroll-behavior: smooth` would
      // otherwise re-animate every frame of our own easing and lag it badly.
      window.scrollTo({ top: startY + distance * ease(t), behavior: "instant" });
      if (t < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        animRef.current = 0;
        // Settle before re-enabling so a trailing scroll event can't hide the
        // button or let a stray press interrupt the landing.
        setTimeout(() => setBusy(false), 120);
      }
    };
    cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(step);
  };

  /* Build the beat list for the tour.
     A single stop per section isn't enough: sections taller than the viewport
     would get skipped past, and a pinned scene would land on its opening
     (blank) frame and then jump over its whole timeline. So:
       · pinned scenes get an extra beat where their animation has played in
       · tall sections are paged through so nothing is missed */
  const buildStops = () => {
    const vh = window.innerHeight;
    const maxY = document.body.scrollHeight - vh;
    const stops = [];

    for (const el of document.querySelectorAll("main section, main [data-tour-stop]")) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      const height = el.offsetHeight;
      stops.push(top);

      if (el.hasAttribute("data-tour-stop")) {
        // Pinned scene: scrollYProgress runs 0→1 across (height - vh).
        // Add the beat where the headline has flown in and is held.
        const travel = height - vh;
        if (travel > 80) stops.push(top + travel * 0.58);
      } else if (height > vh * 1.5) {
        // Tall section: prefer landing on real sub-headings so each beat shows
        // something meaningful; fall back to paging a screen at a time.
        const lastUsable = top + height - vh * 0.55;
        const anchors = [...el.querySelectorAll("h3, h4, [data-tour-beat]")]
          .map((h) => h.getBoundingClientRect().top + window.scrollY - 110)
          .filter((y) => y > top + vh * 0.6 && y < lastUsable)
          .sort((a, b) => a - b)
          .filter((y, i, arr) => i === 0 || y - arr[i - 1] > vh * 0.6);

        if (anchors.length) {
          stops.push(...anchors);
        } else {
          const stride = vh * 0.85;
          for (let y = top + stride; y < lastUsable; y += stride) stops.push(y);
        }
      }
    }

    // Sort, clamp, and drop beats that sit almost on top of each other.
    const sorted = stops
      .map(Math.round)
      .filter((y) => y >= 0 && y <= maxY)
      .sort((a, b) => a - b);
    return sorted.filter((y, i) => i === 0 || y - sorted[i - 1] > 140);
  };

  const advance = () => {
    if (busy) return; // locked while a glide is running
    const max = document.body.scrollHeight - window.innerHeight;
    if (atEnd) {
      glideTo(0);
      return;
    }
    // Ignore beats within 120px of where we already are, so the first press
    // from the very top doesn't just nudge past the sticky header.
    const next = buildStops().find((y) => y > window.scrollY + 120);
    glideTo(Math.min(next ?? max, max));
  };

  return (
    <motion.button
      type="button"
      onClick={advance}
      disabled={busy}
      aria-label={atEnd ? "Back to top" : "Go to next section"}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: hidden && !overForm ? 0.35 : 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.94 }}
      style={{ boxShadow: "0 0 22px rgba(163,230,53,0.18)" }}
      /* Steps aside to the right over the sign-up form so it never covers the
         submit button, instead of disappearing and stranding the tour. */
      className={`group fixed bottom-7 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-lime-400/40 bg-[#0a0a0a]/80 text-lime-400 backdrop-blur-md transition-all duration-500 hover:border-lime-400 hover:bg-lime-400/10 ${overForm ? "right-6 left-auto translate-x-0" : "left-1/2 -translate-x-1/2"}`}
    >
      {/* Pulsing halo */}
      {!reducedMotion && !hidden && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full border border-lime-400/50"
          animate={{ scale: [1, 1.45], opacity: [0.55, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <motion.span
        animate={reducedMotion ? {} : { y: atEnd ? [0, -3, 0] : [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        <ChevronDown className={`h-5 w-5 transition-transform ${atEnd ? "rotate-180" : ""}`} strokeWidth={2} />
      </motion.span>
    </motion.button>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SIDE QUICK NAV — hover the right edge to reveal a poppy jump menu
───────────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "Journey", href: "#journey" },
  { label: "Event", href: "#format" },
  { label: "Score", href: "#score" },
  { label: "AI Coach", href: "#coaching" },
  { label: "Membership", href: "#membership" },
  { label: "Sign Up", href: "#signup" },
];

const quickNavLinks = [
  { label: "Top", target: "top" },
  { label: "Journey", target: "journey" },
  { label: "Challenge", target: "challenge" },
  { label: "Event", target: "format" },
  { label: "Score", target: "score" },
  { label: "AI Coach", target: "coaching" },
  { label: "Compete", target: "categories" },
  { label: "Membership", target: "membership" },
  { label: "Sign Up", target: "signup" },
];

function SideQuickNav() {
  const [open, setOpen] = useState(false);

  const go = (target) => {
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.035 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 520, damping: 26 },
    },
  };

  return (
    <div
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 md:flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Collapsed hover target — stacked tick marks */}
      <div className="flex flex-col items-end justify-center gap-2.5 py-4 pl-10 pr-5">
        {!open &&
          quickNavLinks.map((l) => (
            <span
              key={l.target}
              className="block h-px w-5 bg-white/25 transition-colors"
            />
          ))}
      </div>

      {/* Expanded menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col items-end gap-1 border-r-2 border-lime-400/60 bg-gradient-to-l from-[#080808]/95 to-[#080808]/70 py-4 pl-16 pr-6 backdrop-blur-md"
          >
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="flex list-none flex-col items-end gap-1"
            >
              {quickNavLinks.map((l) => (
                <motion.li key={l.target} variants={itemVariants} className="origin-right">
                  <motion.button
                    type="button"
                    onClick={() => go(l.target)}
                    whileHover={{ scale: 1.18, x: -6, color: "#a3e635" }}
                    whileTap={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    className="block origin-right cursor-pointer whitespace-nowrap py-1 text-right text-[16px] font-bold uppercase tracking-[0.16em] text-neutral-300"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {l.label}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────────── */

function HeroSection() {
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

  return (
    <section
      ref={heroRef}
      className="uh-hero-overlay relative flex min-h-[92vh] items-center overflow-hidden bg-[#050505]"
    >
      {/* Hero athlete photo removed at Ken's request (27 Jul) — replaced with a
          branded theme pattern (technical measurement grid + lime accents).
          The asset is still at /images/marketing/hero-athlete-primary.jpg if we
          want to reinstate it. */}
      <HeroPatternBackground heroRef={heroRef} reducedMotion={reducedMotion} />

      <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 pb-28 pt-10 md:pb-32 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
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

          {/* Headline — centred, with a lime rule instead of the old left bar */}
          <div className="relative w-full">
            <div className="mx-auto mb-7 h-px w-24 bg-gradient-to-r from-transparent via-lime-400/70 to-transparent" />
            <motion.h1
              className="text-metallic uppercase leading-none tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 5.2rem)",
                lineHeight: 1.03,
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                backgroundImage: reducedMotion ? undefined : headlineBackground,
                filter: reducedMotion ? undefined : headlineFilter,
              }}
            >
              The Ultimate Operating System
              <br />
              for Human Performance
            </motion.h1>

            {/* Positioning copy — Ken, 1 Aug */}
            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-7 text-neutral-200">
              Ultimate Human Index is a complete fitness challenge for every body,
              every age and every starting point.
            </p>
            <p className="mx-auto mt-2.5 max-w-3xl text-[16px] leading-7 text-neutral-400">
              You don't have to be an elite athlete to take part. You simply need to be
              ready to test yourself.
            </p>

            {/* Slogan — indented to sit flush with headline text */}
            <p
              className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400/75"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Measure. Train. Compete. Evolve.
            </p>
          </div>

          {/* CTAs */}
          <div data-tour-avoid className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <RegisterButton />
            <a
              href="#challenge"
              className="inline-flex items-center justify-center border border-white/22 bg-black/35 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.15em] text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/[0.07] hover:border-white/38"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Explore the Challenge
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {[
              ["Live Events", "All Venues"],
              ["All Abilities", "Every Level"],
              ["Personal Score", "Your Benchmark"],
            ].map(([label, sub]) => (
              <div key={label} className="border-t-2 border-lime-400/35 px-2 pt-3 text-center">
                <p
                  className="text-[11.5px] font-black uppercase tracking-[0.22em] text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {label}
                </p>
                <p
                  className="mt-0.5 text-[10.5px] uppercase tracking-[0.15em] text-neutral-500"
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
  );
}


function UhiIndexSection() {
  return (
    <section
      id="uhci"
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0d1d30 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 12% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel>Ultimate Human Index™ (UHI)</SectionLabel>
            <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
              A New Standard for
              <br />
              Human Capability.
            </Reveal>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
              Rather than simply measuring how quickly an athlete finishes a race, the{" "}
              <span className="font-bold text-white">UHI</span> provides an objective assessment
              of overall human capability. It is designed to measure not only performance, but how
              efficiently and consistently that performance is achieved.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400">
              Unlike traditional race results, which only recognise finishing position, the UHI
              rewards complete human performance by combining physical capability with movement
              quality and technical execution. It provides athletes with a meaningful benchmark
              that evolves as they train, improve and age.
            </p>

            {/* 0–1000 scale callout */}
            <div className="mt-8 flex items-center gap-5 border border-lime-400/25 bg-lime-400/[0.05] px-6 py-5">
              <p
                className="shrink-0 text-3xl text-lime-400 md:text-4xl"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
              >
                0–1000
              </p>
              <p className="text-[16px] leading-6 text-neutral-300">
                The Index is calculated on a scale of 0–1000, creating a lifelong benchmark that
                athletes can improve over time — regardless of age or competitive level.
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-[16px] leading-6 text-neutral-400">
              As UHI evolves, the Ultimate Human Index will be supported by advanced AI movement
              analysis and scientifically validated performance standards. This will enable the
              Index to assess not only whether an athlete completed each capability, but how
              effectively and consistently it was performed.
            </p>
          </div>

          {/* Design principles */}
          <div>
            <p
              className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              The UHI has been designed to be
            </p>
            <div className="flex flex-col">
              {uhciPrinciples.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-white/[0.07] py-4"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-lime-400" />
                    <div>
                      <p className="text-[16px] font-bold uppercase tracking-wide text-white">
                        {p.title}
                      </p>
                      <p className="mt-1 text-[16px] leading-6 text-neutral-400">{p.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function WhyDifferentSection() {
  return (
    <section
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 92% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Why UHI Is Different</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Most Races Test One Thing.
            <br />
            UHI Tests the Whole Human.
          </Reveal>
          <p className="mt-5 text-lg leading-7 text-neutral-400">
            Most programs only measure one or two aspects of capability. They tell
            you if you can run, lift, endure or suffer.{" "}
            <span className="font-bold text-white">UHI goes further.</span>
          </p>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="uh-scroll-dark overflow-x-auto"
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="w-44 py-4 pr-6 text-left">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Capability
                  </span>
                </th>
                {differenceTable.brands.map((brand) => (
                  <th
                    key={brand.name}
                    className={`px-6 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] ${
                      brand.highlighted ? "text-lime-400" : "text-neutral-400"
                    }`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {brand.name}
                    {brand.highlighted && (
                      <div className="mx-auto mt-1 h-px w-8 bg-lime-400/50" />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {differenceTable.dimensions.map((dim, rowIdx) => (
                <motion.tr
                  key={dim}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: rowIdx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-white/[0.05]"
                >
                  <td className="py-4 pr-6 text-[16px] text-neutral-400">{dim}</td>
                  {differenceTable.brands.map((brand) => {
                    const rating = brand.ratings[rowIdx];
                    return (
                      <td key={brand.name} className={`px-6 py-4 text-center ${brand.highlighted ? "bg-lime-400/[0.03]" : ""}`}>
                        {rating === "full" && (
                          <CheckCircle2 className="mx-auto h-4 w-4 text-lime-400/80" strokeWidth={2} />
                        )}
                        {rating === "partial" && (
                          <div className="mx-auto h-px w-4 bg-neutral-600" />
                        )}
                        {rating === "none" && (
                          <X className="mx-auto h-4 w-4 text-neutral-800" strokeWidth={2} />
                        )}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <WhyDifferentExplainer />
      </div>
    </section>
  );
}


function ChallengeOverviewSection() {
  return (
    <section
      id="challenge"
      className="uh-divide relative px-6 pb-0 pt-20"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 8% 0%, rgba(163,230,53,0.22) 0%, transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>The Challenge</SectionLabel>
        {/* Slim three-point strip */}
        <div className="mb-12 flex flex-col divide-y divide-white/[0.06] md:flex-row md:divide-x md:divide-y-0">
          {[
            { icon: Flame,  title: "Built for every body. Designed for every challenge.", sub: "Designed to reveal, not destroy" },
            { icon: Timer,  title: "Long enough to test you, fast enough to race", sub: "High energy. Consistent Standards. Visible competition." },
            { icon: Zap,    title: "Discover how you cope Under Fatigue", sub: "Speed → Control → Strength → Coordination" },
          ].map(({ icon: Icon, title, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-1 items-center gap-5 px-6 py-7 first:pl-0 last:pr-0 md:px-10"
            >
              <Icon className="h-5 w-5 shrink-0 text-lime-400/60" strokeWidth={1.5} />
              <div>
                <p className="text-[16px] font-bold uppercase tracking-wide text-white">{title}</p>
                <p
                  className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-neutral-500"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Full-width image band with an overlaid statement */}
      <MarketingImage
        file="challenge-fatigue-moment.jpg"
        aspectRatio="21/9"
        searchTerms="athlete exhausted determined mid-workout dramatic shadow"
        treatment="Duotone B&W/lime · dark vignette top + bottom"
        className="max-h-[62vh] w-full"
        imgClassName="object-[center_22%]"
        overlay={
          <>
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(6,6,6,0.9) 0%, rgba(6,6,6,0.45) 38%, transparent 68%), linear-gradient(0deg, rgba(6,6,6,0.7) 0%, transparent 42%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-7xl px-6 pb-8 md:pb-14">
                <Reveal>
                  <p
                    className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    The Signature Test
                  </p>
                  <h3 className="text-3xl uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
                    This Is Where
                    <br />
                    You Find Out.
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-6 text-neutral-300 md:text-base">
                    Speed, strength and composure — every capability exposed under fatigue.
                  </p>
                </Reveal>
              </div>
            </div>
          </>
        }
      />
    </section>
  );
}


function CategoriesSection() {
  return (
    <section
      id="categories"
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 90% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionLabel>Ways to Compete</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Go Solo, Pair Up
            <br />
            or Bring a Team.
          </Reveal>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
            The Ultimate Human Index is designed for serious competitors, first-time challengers,
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
                className="text-[16px] font-bold uppercase tracking-[0.18em] text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function WhyEnterSection() {
  return (
    <section
      className="relative uh-divide"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 8% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      {/* Two-column: image left, list right */}
      <div className="relative flex flex-col lg:flex-row">
        {/* Left — lifestyle image */}
        <div className="lg:w-[42%] lg:shrink-0">
          <MarketingImage
            file="why-enter-lifestyle.jpg"
            aspectRatio="4/5"
            searchTerms="person training outdoors early morning determination"
            treatment="Duotone matching hero · right-edge gradient fade"
            className="h-full min-h-[360px] w-full"
            filter="grayscale(100%) contrast(1.05) brightness(0.9)"
            overlay={
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 52%, rgba(10,13,16,0.9) 100%)",
                }}
              />
            }
          />
        </div>

        {/* Right — stacked list */}
        <div className="flex flex-1 flex-col justify-center px-8 py-16 lg:px-14 lg:py-24">
          <SectionLabel>Why Enter?</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Because Fitness
            <br />
            Should Mean Capability.
          </Reveal>

          <div className="mt-10 space-y-0">
            {whyEnter.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="uh-divide py-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400/50" />
                  <div>
                    <p className="text-[16px] font-bold uppercase tracking-wide text-white">{item.title}</p>
                    <p className="mt-1.5 text-[16px] leading-6 text-neutral-400">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function PricingSection() {
  return (
    <section
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 92% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionLabel>Event Entry Pricing</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Get in Early.
          </Reveal>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
            Early launch pricing for the first Ultimate Human Index events. Founding athlete places will
            be limited and pricing will increase after launch release.
          </p>
          <p
            className="mt-3 text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            This is your event entry fee — not your platform membership.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] md:grid-cols-2 lg:grid-cols-4">
          {foundingPricing.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lime-glow-hover group relative bg-[#0d0d0d] transition-colors hover:bg-[#0f0f0f]"
            >
              <div className="absolute left-0 top-0 h-px w-2/3 bg-gradient-to-r from-lime-400/70 to-transparent" />
              <div className="p-7">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
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
                  className="mt-2 text-[16px] text-neutral-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.detail}
                </p>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime-glow mt-8 block border border-lime-400 bg-lime-400 px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-black no-underline transition-colors hover:bg-lime-300 hover:border-lime-300"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Register Interest
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-px bg-[#0a0a0a] p-8">
          <p
            className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400"
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
                  className="text-[16px] text-neutral-300"
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
  );
}


function FoundersSection() {
  return (
    <section
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 12% 0%, rgba(163,230,53,0.28) 0%, transparent 62%), radial-gradient(ellipse 55% 45% at 100% 100%, rgba(163,230,53,0.1) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionLabel>The People Behind The Ultimate Human Index</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Built by People Obsessed
            <br />
            with Human Performance.
          </Reveal>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
            The Ultimate Human Index combines elite coaching, combat sport experience, movement science
            and a slightly unhealthy enthusiasm for fitness racing.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] md:grid-cols-2 lg:grid-cols-5">
          <FounderCard
            photo="/images/founders/andie.png"
            ratio="1 / 1"
            name="Andie Stoneham"
            role="Founder · Performance Coach · Programme Designer"
            quote="Most fitness events reward one dominant attribute. We wanted to build something that rewards adaptability, composure and complete human capability."
          />
          <FounderCard
            photo="/images/founders/laura.png"
            ratio="1 / 1"
            name="Laura Hathaway"
            role="Performance Coach · Qualified Osteopath"
            quote="Real performance is not just strength or endurance. It is how efficiently and intelligently your body moves under pressure and fatigue."
          />
          <FounderCard
            photo="/images/founders/john.png"
            ratio="1 / 1"
            name="John 'The Hitman' Hathaway"
            role="Champion UFC Fighter · Coach"
            quote="The people who stay calm, adaptable and explosive when tired are usually the hardest people to beat. That is what this competition is designed to expose."
          />
          <FounderCard
            photo="/images/founders/ken.png"
            ratio="1 / 1"
            name="Ken Brotherston"
            role="Founder · Entrepreneur · Fitness Race Enthusiast"
            quote="I am probably old enough to know better, but not quite sensible enough to stop chasing the idea that becoming fitter, stronger and more adaptable makes every part of life better."
          />
          {/* Falls back to a 'photo to follow' placeholder until the file exists */}
          <FounderCard
            photo="/images/founders/camilla.png"
            ratio="1 / 1"
            name="Dr. Camilla Drew"
            role="Event Adviser · Capabilities Adviser · Fitness Enthusiast"
            quote="Fitness and good-quality, all-round movement are key to a happier and more productive life, regardless of how old you actually are."
          />
        </div>
      </div>
    </section>
  );
}


function SignupSection() {
  return (
    <section
      id="signup"
      className="uh-divide relative px-6 py-24"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      {/* Branded UH arena-floor asset, low opacity behind the form */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/images/uh-hero-arena-floor-no-text-2400x1400.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-[0.28]"
          loading="lazy"
        />
      </div>
      {/* Section ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(132,204,22,0.16) 0%, transparent 70%)",
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
                "radial-gradient(ellipse at center top, rgba(132,204,22,0.20) 0%, transparent 52%)",
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

            <Reveal
              as="h2"
              delay={0.08}
              className="text-metallic uppercase tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", lineHeight: 1.06, fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
            >
              Become One of the
              <br />
              First Ultimate Humans
            </Reveal>

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

            {/* On-site form parked for now — registrations go through the
                Google Form instead. WaitlistForm is kept below, working and
                tested, ready to switch back on by restoring this line. */}
            <div className="mt-9 flex justify-center">
              <RegisterButton className="w-full max-w-xl" />
            </div>

            <p className="mt-6 text-center text-[16px] text-neutral-400">
              Bringing a gym or team?{" "}
              <a
                href="mailto:hello@theultimatehuman.fitness"
                className="font-bold text-lime-400 underline-offset-4 hover:underline"
              >
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function PreLaunchSection() {
  return (
    <section
      className="uh-divide px-6 py-16"
      style={{ background: "linear-gradient(180deg, #09090a 0%, #0a0a0a 100%)" }}
    >
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
        <Reveal as="h2" delay={0.08} className="text-3xl uppercase tracking-tight text-white md:text-4xl">
          What Is Still Being Finalised?
        </Reveal>

        <div className="mt-8 grid gap-px bg-white/[0.05] md:grid-cols-2">
          {workToDo.map((item) => (
            <div key={item} className="flex gap-4 bg-[#0d0d0d] p-6 transition-colors hover:bg-[#111]">
              <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center border border-lime-400/30">
                <div className="h-1.5 w-1.5 bg-lime-400" />
              </div>
              <p
                className="text-[16px] leading-6 text-neutral-300"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const { scrollY: navScrollY } = useScroll();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    return navScrollY.on("change", (v) => setNavScrolled(v > 60));
  }, [navScrollY]);


  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <SideQuickNav />
      <SectionTourButton />

      {/* ── HEADER ── */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${navScrolled ? "border-white/[0.06] bg-[#050505]/95" : "border-transparent bg-[#050505]/40"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          {/* Logo + separator */}
          <div className="flex items-center gap-6 shrink-0">
            <a href="#" className="shrink-0 no-underline">
              <img
                src="/images/coloured.png"
                alt="Ultimate Human Index"
                className="h-11 w-auto object-contain md:h-14"
                style={{
                  maxWidth: "200px",
                  filter: "drop-shadow(0 1px 10px rgba(255,255,255,0.08))",
                }}
              />
            </a>
            <div className="hidden md:block h-6 w-px shrink-0 bg-white/[0.09]" />
          </div>

          <nav aria-label="Primary" className="hidden gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[11.5px] font-bold uppercase tracking-[0.22em] text-neutral-400 no-underline transition-colors hover:text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <RegisterButtonHeader />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center border border-white/[0.12] text-white transition-colors hover:border-white/30 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden uh-divide bg-[#050505]/98 md:hidden"
            >
              <div className="flex flex-col px-6 py-2">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-white/[0.05] py-4 text-[16px] font-bold uppercase tracking-[0.22em] text-neutral-300 no-underline transition-colors hover:text-lime-400"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>

        <HeroSection />

        <UhiIndexSection />

        <YourJourneyHub />

        <CapabilityPillarsSection />

        <WhyDifferentSection />

        <ChallengeOverviewSection />

        <EventStructureSection />

        <WholeHumanScene />

        <ScoreSection />

        <AICoachingSection />

        <SplitFeatureScene
          file="converge-right.png"
          side="right"
          eyebrow="Runners · Lifters · Fighters"
          title={<>The Complete<br />Athlete Wins.</>}
          body="Every discipline gets exposed somewhere. The most complete human — not the most specialised — takes the win."
        />

        <CategoriesSection />

        <SplitFeatureScene
          file="converge-left.png"
          side="left"
          eyebrow="Every Level of Athlete"
          title={<>Built for<br />Every Body.</>}
          body="This is built to test complete capability — not just how long you can suffer on a run."
        />

        <WhyEnterSection />

        <SubscriptionSection />

        <PricingSection />

        <FoundersSection />

        <SignupSection />

        <PreLaunchSection />
      </main>

      {/* ── FOOTER ── */}
      <footer className="uh-divide bg-[#050505] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <img
            src="/images/coloured.png"
            alt="Ultimate Human Index"
            className="h-10 w-auto object-contain"
            style={{ maxWidth: "180px", opacity: 0.32 }}
          />
          <p
            className="text-[11px] font-bold uppercase tracking-[0.42em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Measure. Train. Compete. Evolve.
          </p>
          <p
            className="text-[14px] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            © 2026 Ultimate Human Index · theultimatehuman.fitness
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-7xl text-center">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-800"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {SITE_VERSION}
          </span>
        </div>
      </footer>
    </div>
  );
}
