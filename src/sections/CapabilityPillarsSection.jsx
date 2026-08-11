import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import SectionLabel from "@/components/shared/SectionLabel";
import { capabilities, pillarRadarData } from "@/data/content";

/* Radar chart component for 10 Pillars section */
export default function CapabilityPillarsSection() {
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
