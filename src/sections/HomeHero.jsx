import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { RegisterButton } from "@/components/shared/RegisterButton";
import SectionLabel from "@/components/shared/SectionLabel";
import { REGISTER_NOTE } from "@/lib/constants";
import { fitnessAreas, homeHero } from "@/data/content";

/* The home hero.

   Typographic rather than photographic, and deliberately quiet: the old hero
   was a lime measurement grid with a cursor-tracking glow, three drifting
   pattern layers and a headline that brightened as you scrolled. The rebrand
   asks for whitespace and fewer words, so the only things here are the
   question, the answer, the button and the eight areas.

   This is the page's mount reveal — one of its three — so it animates in
   directly rather than through <Reveal>, which waits on intersection. */
export default function HomeHero() {
  const reduced = useReducedMotion();

  const rise = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section
      className="relative px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
      style={{
        background:
          "linear-gradient(175deg, var(--color-ember-tint) 0%, var(--color-bone) 46%, var(--color-bone) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...rise}>
          <SectionLabel>{homeHero.eyebrow}</SectionLabel>

          <h1 className="type-hero mt-8 max-w-[16ch] text-ink">{homeHero.headline}</h1>

          <p className="type-h3 mt-9 max-w-2xl text-ink" style={{ fontWeight: 400 }}>
            {homeHero.standfirst}{" "}
            <span className="text-ink-50">{homeHero.abbreviation}</span>
          </p>

          <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <RegisterButton />
            <Link
              to="/the-index"
              className="group inline-flex items-center gap-2.5 border-b border-line pb-1 text-[15px] font-bold uppercase tracking-[0.14em] text-ink no-underline transition-colors hover:border-ember hover:text-ember-deep"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {homeHero.secondary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <p className="mt-6 max-w-md text-[14px] leading-6 text-ink-50">{REGISTER_NOTE}</p>
        </motion.div>
      </div>

      {/* The eight areas, stated once at the top of the site, plus the one
          sentence that explains what kind of number this is. Everything else
          about the benchmark now lives on The Index. */}
      <div className="relative mx-auto mt-20 max-w-7xl border-t border-line pt-8 sm:mt-24">
        <p className="type-label text-ink-50">{homeHero.areasIntro}</p>
        <ul className="mt-5 flex list-none flex-wrap gap-x-7 gap-y-3 p-0">
          {fitnessAreas.map((area) => (
            <li
              key={area.name}
              className="text-[13px] font-bold uppercase tracking-[0.2em] text-ink"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {area.name}
            </li>
          ))}
        </ul>
        <p className="type-body mt-8 max-w-2xl text-ink-70">{homeHero.benchmark}</p>
      </div>
    </section>
  );
}
