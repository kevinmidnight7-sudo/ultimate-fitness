import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, X } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { journeyCards, journeyQuizQuestions } from "@/data/content";
import { REGISTER_URL } from "@/lib/constants";

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

export default function YourJourneyHub() {
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
