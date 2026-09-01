import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import CountUp from "@/components/motion/CountUp";
import { sampleProfile, fitnessAreas } from "@/data/content";

/* One bar per area of fitness. The fill draws from 0 to its value the first
   time it scrolls into view — that is a value being measured, not a block
   arriving, so it doesn't count against the page's reveal budget. Under
   prefers-reduced-motion it renders at its final width immediately. */
function AreaBar({ name, value, detail, index, inView, reduced }) {
  return (
    <div className="border-t border-line py-5 first:border-t-0 sm:py-6">
      <div className="flex items-baseline justify-between gap-4">
        <p className="type-h3 text-ink">{name}</p>
        <p
          className="shrink-0 text-[19px] font-semibold tabular-nums text-ember-deep"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {value}
          <span className="text-[13px] font-normal text-ink-50">/1,000</span>
        </p>
      </div>

      <div className="mt-3 h-[6px] w-full bg-sand">
        {reduced ? (
          <div className="h-[6px] bg-ember" style={{ width: `${value / 10}%` }} />
        ) : (
          <motion.div
            className="h-[6px] bg-ember"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${value / 10}%` : 0 }}
            transition={{ duration: 0.9, delay: 0.06 * index, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </div>

      {detail && <p className="mt-3 text-[15px] leading-6 text-ink-70">{detail}</p>}
    </div>
  );
}

/* The Index and the eight scores that produce it.

   The brief asks for clear visual separation between the two, so they are not
   one list with a total on the end: the overall score sits in its own ink
   panel, and the eight areas sit on the page's own ground beside it. One is a
   headline, the others are the explanation.

   `showDetail` adds each area's one-line definition under its bar — right for
   the Index page, too much for the home page. */
export default function IndexProfile({ showDetail = false, className = "" }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const detailByName = Object.fromEntries(fitnessAreas.map((a) => [a.name, a.detail]));

  return (
    <div ref={ref} className={`grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 ${className}`}>
      {/* The number */}
      <div className="on-ink self-start bg-ink p-8 text-bone sm:p-10">
        <p className="type-label text-ember-light">Ultimate Human Index</p>

        <p className="type-score mt-7 text-bone" style={{ fontSize: "clamp(4.5rem, 13vw, 7.5rem)" }}>
          <CountUp to={sampleProfile.overall} duration={1.4} />
        </p>
        <p className="mt-3 text-[17px] text-bone-70">out of 1,000</p>

        <div className="mt-8 h-px w-full bg-bone/15" />

        <dl className="mt-8 space-y-5">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.2em] text-bone-50">
              Strongest area
            </dt>
            <dd className="type-h3 mt-1.5 text-ember-light">{sampleProfile.strongest}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.2em] text-bone-50">
              Biggest opportunity
            </dt>
            <dd className="type-h3 mt-1.5 text-bone">{sampleProfile.opportunity}</dd>
          </div>
        </dl>

        <p className="mt-8 text-[14px] leading-6 text-bone-50">
          An example profile, to show what the Index looks like. Yours is built from
          your own results.
        </p>
      </div>

      {/* The eight it comes from */}
      <div>
        <p className="type-label text-ink-50">The eight areas behind it</p>
        <div className="mt-6">
          {sampleProfile.areas.map((area, i) => (
            <AreaBar
              key={area.name}
              name={area.name}
              value={area.value}
              detail={showDetail ? detailByName[area.name] : null}
              index={i}
              inView={inView}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
