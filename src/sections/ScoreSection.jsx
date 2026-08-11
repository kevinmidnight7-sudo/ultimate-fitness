import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, CheckCircle2 } from "lucide-react";

import { GRADIENT_LIME } from "@/lib/gradients";
import CountUp from "@/components/motion/CountUp";
import SectionLabel from "@/components/shared/SectionLabel";
import { domains, scoreTabs, uhsReveals } from "@/data/content";

/* `gradient` lets the page it sits on override the default band, so two
   sections that never used to meet do not now stack the same recipe. */
export default function ScoreSection({ gradient = GRADIENT_LIME }) {
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
        <div
          key={d.title}
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
        </div>
      ))}
    </div>
  );

  const pathPanel = (
    <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2">
      {uhsReveals.map((item) => (
        <div
          key={item.title}
          className="flex gap-3 bg-[#0d0d0d] p-6"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" strokeWidth={2} />
          <div>
            <p className="text-[16px] font-bold uppercase tracking-[0.12em] text-white">
              {item.title}
            </p>
            <p className="mt-1.5 text-base leading-6 text-neutral-400">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const tabContent = { overview: overviewPanel, breakdown: breakdownPanel, path: pathPanel };

  return (
    <section
      id="score"
      className="uh-divide relative px-6 py-28"
      style={{ background: gradient }}
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
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Leave with More
            <br />
            Than a Medal.
          </h2>
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
