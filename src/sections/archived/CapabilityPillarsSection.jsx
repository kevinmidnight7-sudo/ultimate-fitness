import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GRADIENT_EMBER } from "@/sections/archived/legacyGradients";
import CountUp from "@/components/motion/CountUp";
import SectionLabel from "@/components/shared/SectionLabel";
import { capabilities, capabilityScores } from "@/data/archived/eventContent";

/* `gradient` lets the page it sits on override the default band, so two
   sections that never used to meet do not now stack the same recipe. */
export default function CapabilityPillarsSection({ gradient = GRADIENT_EMBER }) {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  return (
    <section
      className="relative uh-divide px-6 py-20"
      style={{ background: gradient }}
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
          <SectionLabel>The 10 Capabilities of Human Performance</SectionLabel>
          <h2 className="text-3xl uppercase tracking-wide text-white md:text-4xl">
            Every Capability. Measured.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-neutral-400">
            The Ultimate Human Index spans 10 capabilities — not just the ones you train.
            <span className="mt-1 block text-[14px] text-neutral-500">
              Select a capability to see what it measures.
            </span>
          </p>
        </div>

        {/* Capability selector + detail panel */}
        <div className="mx-auto max-w-3xl">
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
                      {capabilityScores[i].value}
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
                    <CountUp key={current.label} to={capabilityScores[active].value} duration={0.9} />
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

          <p
            className="mt-5 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Sample athlete profile · Intermediate division
          </p>
        </div>
      </div>
    </section>
  );
}
