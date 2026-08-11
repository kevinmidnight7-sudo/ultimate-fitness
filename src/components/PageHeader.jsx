import { motion, useReducedMotion } from "framer-motion";

/* The opening construct on every inner page: eyebrow, page title, one or two
   lines of orientation copy, thin lime rule.

   Sized deliberately below the home hero — the hero runs to 5.2rem, this tops
   out at 3.6rem — so arriving on an inner page still reads as arriving one
   level down rather than at a second front door.

   This is the page's one guaranteed reveal, so it is written directly rather
   than wrapped in <Reveal>: it fires on mount instead of on intersection,
   because it is already in view when the page loads and waiting for a scroll
   that may never come would leave the page looking empty. */
export default function PageHeader({ eyebrow, heading, lead }) {
  const reducedMotion = useReducedMotion();

  const rise = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section
      className="uh-divide relative px-6 pb-14 pt-16 sm:pt-20"
      style={{ background: "linear-gradient(180deg, #070707 0%, #0a0a0a 100%)" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div {...rise}>
          {eyebrow && (
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 shrink-0 bg-lime-400" />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {eyebrow}
              </p>
            </div>
          )}

          <h1
            className="uppercase text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.6rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
            }}
          >
            {heading}
          </h1>

          {lead && (
            <p className="mt-5 max-w-2xl text-[17px] leading-7 text-neutral-400">{lead}</p>
          )}

          <div className="mt-8 h-px w-full max-w-xs bg-gradient-to-r from-lime-400/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
