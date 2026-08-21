import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, X } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { differenceTable } from "@/data/content";

function WhyDifferentExplainer() {
  /* Open on load — the full explanation is the point of the section, not an
     optional extra, so it should not need a click to be read. */
  const [open, setOpen] = useState(true);

  return (
    <div className="mt-px bg-[#0a0a0a] p-9 md:p-11">
      <p className="max-w-3xl text-lg leading-8 text-neutral-300">
        One score. Ten capabilities. The complete picture of how capable you really are.
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

export default function WhyDifferentSection() {
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
            <span className="font-bold text-white">UHI tests the whole human.</span>
          </p>
        </div>

        {/* Comparison table */}
        <div
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
                <tr
                  key={dim}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <WhyDifferentExplainer />
      </div>
    </section>
  );
}
