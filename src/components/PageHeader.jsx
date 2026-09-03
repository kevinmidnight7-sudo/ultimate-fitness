import { motion, useReducedMotion } from "framer-motion";

import SectionLabel from "@/components/shared/SectionLabel";
import IndexPattern from "@/components/shared/IndexPattern";

/* The opening construct on every inner page: eyebrow, page title, a line or
   two of orientation copy.

   Sized below the home hero — the hero runs to 5.25rem, this tops out at
   3.25rem — so arriving on an inner page still reads as arriving one level
   down rather than at a second front door.

   This is the page's one guaranteed reveal, so it is written directly rather
   than wrapped in <Reveal>: it fires on mount instead of on intersection,
   because it is already in view when the page loads and waiting for a scroll
   that may never come would leave the page looking empty.

   `pattern` names an IndexPattern variant, supplied per page from routes.js.
   It is absolutely positioned in the empty right-hand half, so it cannot move
   anything, and it is not part of the reveal — a background that faded in
   would draw exactly the attention it is meant not to. */
export default function PageHeader({ eyebrow, heading, lead, pattern }) {
  const reducedMotion = useReducedMotion();

  const rise = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section className="relative overflow-hidden bg-bone px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
      {pattern && (
        <IndexPattern
          variant={pattern}
          className="inset-y-0 w-[62%] opacity-40 sm:w-[58%] sm:opacity-60 lg:w-[46%] lg:opacity-100"
        />
      )}

      <div className="relative mx-auto max-w-7xl">
        <motion.div {...rise}>
          {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
          <h1 className="type-h2 mt-7 max-w-4xl text-ink">{heading}</h1>
          {lead && <p className="type-lead mt-7 max-w-2xl text-ink-70">{lead}</p>}
        </motion.div>
      </div>
    </section>
  );
}
