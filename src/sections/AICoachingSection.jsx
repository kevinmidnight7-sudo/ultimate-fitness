import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  Sparkles,
  MessageCircle,
  ChevronDown,
  PlayCircle,
  Film,
} from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import { GRADIENT_EMBER } from "@/lib/gradients";
import CountUp from "@/components/motion/CountUp";
import SectionLabel from "@/components/shared/SectionLabel";
import { MarketingImage } from "@/components/shared/MarketingImage";
import {
  aiHowItWorks,
  aiImprovementAreas,
  aiProfileEvolution,
  aiScoreBars,
  aiScoreGains,
  aiTabs,
  aiTrainingFocus,
  movementCoachCards,
} from "@/data/content";
import { REGISTER_URL } from "@/lib/constants";

function HowItWorksCard({ step, index }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quotesOpen, setQuotesOpen] = useState(false);

  return (
    <div
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
    </div>
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

/* `gradient` lets the page it sits on override the default band, so two
   sections that never used to meet do not now stack the same recipe. */
export default function AICoachingSection({ gradient = GRADIENT_EMBER }) {
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
      style={{ background: gradient }}
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
