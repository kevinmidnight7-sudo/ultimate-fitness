import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import CountUp from "@/components/motion/CountUp";
import { sampleProfile } from "@/data/content";

/* One area of fitness: its name, its score, and a bar drawing that score.

   The fill draws from 0 the first time it scrolls into view — a value being
   measured, not a block arriving, so it doesn't count against the page's
   reveal budget. Under prefers-reduced-motion it renders at its final width
   immediately.

   The top rule is suppressed on the first item of each row rather than only on
   the very first item, because the areas are laid out in two columns from `sm`
   up: `first:` alone would leave column two with a stray rule above its top
   entry. The stagger cycles every four so it never runs past the four-step
   maximum in CLAUDE.md, whatever the column count is at that width. */
function AreaBar({ name, value, index, inView, reduced }) {
  return (
    <div className="border-t border-line pt-5 pb-6 first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="type-h3 min-w-0 text-ink">{name}</h3>
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
          <div
            className="h-[6px] bg-ember"
            style={{ width: `${value / 10}%` }}
          />
        ) : (
          <motion.div
            className="h-[6px] bg-ember"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${value / 10}%` : 0 }}
            transition={{
              duration: 0.9,
              delay: 0.07 * (index % 4),
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        )}
      </div>

    </div>
  );
}

/* The Index and the eight scores that produce it.

   Two things are being balanced here. The brief asks for clear visual
   separation between the overall score and its components — so the score sits
   in its own ink panel and the eight sit on the page's own ground beside it,
   one a headline and the others the explanation. But the first version stacked
   all eight in a single column, which ran to roughly twice the height of the
   score panel and left a long drop of empty bone beside it.

   So from `sm` the areas are a two-column grid of four. Four rows come out
   close to the panel's natural height, and the panel then stretches to match
   with `justify-between` — the extra height goes into the gaps between three
   meaningful blocks rather than into one pool of empty black. Below `sm`
   everything returns to a single readable column.

   There used to be a `showDetail` variant that printed each area's one-line
   definition under its bar, used on The Index. It has gone, for two reasons.
   The first is content: on that page `EightAreasSection` renders exactly those
   eight sentences one section further up, so the variant was repeating itself
   half a screen later. The second is layout: the descriptions made the right
   column roughly 200px taller than the panel could fill, and the panel has
   nothing meaningful to put in 200px of black. Removing the duplication fixes
   both, and leaves one balanced component used identically in all three
   places. */
export default function IndexProfile({ className = "" }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className={className}>
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] lg:gap-14">
        {/* The number */}
        <div className="on-ink flex flex-col justify-between gap-10 bg-ink p-8 text-bone sm:p-10">
          <div>
            <p className="type-label text-ember-light">Ultimate Human Index</p>
            <p
              className="type-score mt-6 text-bone"
              style={{ fontSize: "clamp(4rem, 10vw, 6.25rem)" }}
            >
              <CountUp to={sampleProfile.overall} duration={1.4} />
            </p>
            <p className="mt-3 text-[17px] text-bone-70">out of 1,000</p>

            {/* Where that number sits on the scale. This is the same figure again
              rather than anything new, and it earns its place twice over: the
              scale is half of what "684" means, and it gives the panel a third
              block so the height it gains from the taller areas column is
              absorbed by spacing between things rather than by a pool of empty
              black. */}
            <div className="mt-7">
              <div className="h-[6px] w-full bg-bone/15">
                {reduced ? (
                  <div
                    className="h-[6px] bg-ember-light"
                    style={{ width: `${sampleProfile.overall / 10}%` }}
                  />
                ) : (
                  <motion.div
                    className="h-[6px] bg-ember-light"
                    initial={{ width: 0 }}
                    animate={{
                      width: inView ? `${sampleProfile.overall / 10}%` : 0,
                    }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </div>
              <div className="mt-2.5 flex justify-between text-[12px] font-bold uppercase tracking-[0.18em] text-bone-50">
                <span>0</span>
                <span>1,000</span>
              </div>
            </div>
          </div>

          {/* Side by side rather than stacked: it halves the height this block
            needs, which is most of what keeps the panel close to the natural
            height of the four rows of areas beside it. */}
          <dl className="m-0 grid grid-cols-2 gap-6 border-t border-bone/15 pt-7">
            <div>
              <dt className="text-[12px] font-bold uppercase tracking-[0.2em] text-bone-50">
                Strongest
              </dt>
              <dd className="type-h3 m-0 mt-2 text-ember-light">
                {sampleProfile.strongest}
              </dd>
            </div>
            <div>
              <dt className="text-[12px] font-bold uppercase tracking-[0.2em] text-bone-50">
                Biggest opportunity
              </dt>
              <dd className="type-h3 m-0 mt-2 text-bone">
                {sampleProfile.opportunity}
              </dd>
            </div>
          </dl>
        </div>

        {/* The eight it comes from.

          `content-between` on the grid lets the four rows share whatever height
          the panel beside them has that they don't — so neither side is ever
          padded out with dead space, and the two always finish level. Below
          `lg` the two are stacked and there is nothing to match, so it has no
          effect there. */}
        <div className="flex flex-col">
          <p className="type-label text-ink-50">The eight areas behind it</p>
          <div className="mt-6 grid flex-1 gap-x-10 sm:grid-cols-2 lg:content-between lg:gap-x-14">
            {sampleProfile.areas.map((area, i) => (
              <AreaBar
                key={area.name}
                name={area.name}
                value={area.value}
                  index={i}
                inView={inView}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Caption for the whole example, not just the score, so it reads under
          both halves rather than as the last line of the ink panel. */}
      <p className="mt-7 text-[14px] leading-6 text-ink-50">
        An example profile, to show what the Index looks like. Yours is built
        from your own results.
      </p>
    </div>
  );
}
