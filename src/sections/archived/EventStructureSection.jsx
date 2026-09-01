import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, Weight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import { GRADIENT_LIME } from "@/sections/archived/legacyGradients";
import SectionLabel from "@/components/shared/SectionLabel";
import {
  capabilities10,
  divisions,
  finalCircuit,
  weightsByName,
  workingWeights,
} from "@/data/archived/eventContent";

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

function CapabilityAccordionItem({ capability, division, isOpen, onToggle }) {
  const weight = capability.weightKey ? weightsByName[capability.weightKey] : null;

  return (
    <div
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
    </div>
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

/* `gradient` lets the page it sits on override the default band, so two
   sections that never used to meet do not now stack the same recipe. */
export default function EventStructureSection({ gradient = GRADIENT_LIME }) {
  const [division, setDivision] = useState("intermediate");
  const [openCapability, setOpenCapability] = useState(1);
  const [finalOpen, setFinalOpen] = useState(false);
  const current = divisions.find((d) => d.key === division);

  return (
    <section
      id="format"
      className="relative uh-divide px-6 py-28"
      style={{ background: gradient }}
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
          {capabilities10.map((capability) => (
            <CapabilityAccordionItem
              key={capability.number}
              capability={capability}
              division={division}
              isOpen={openCapability === capability.number}
              onToggle={() => setOpenCapability((prev) => (prev === capability.number ? null : capability.number))}
            />
          ))}
        </div>

        {/* Capability 10 — Final Circuit, highlighted */}
        <div
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
        </div>

        {/* Suggested Working Weights — collapsed by default */}
        <WorkingWeightsPanel />
      </div>
    </section>
  );
}
