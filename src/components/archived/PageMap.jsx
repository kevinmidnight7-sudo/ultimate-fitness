import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { routes } from "@/lib/routes";
import { GRADIENT_TIDE } from "@/lib/gradients";

/* The piece that makes the home page a hub rather than a shortened scroll: one
   card per inner page, in the running order, each with its name and the same
   one-liner the menu items and next-page bands use.

   Reveal is on the grid as a whole rather than per card. Six staggered cards
   would break the five-item cap in CLAUDE.md, and this page already spends a
   reveal on the comparison table above it. */
export default function PageMap() {
  const pages = routes.filter((r) => r.path !== "/");

  return (
    <section className="uh-divide relative px-6 py-24" style={{ background: GRADIENT_TIDE }}>
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Where to Next</SectionLabel>

        <h2
          className="max-w-3xl uppercase leading-none text-white"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.9rem, 3.6vw, 3rem)",
          }}
        >
          Six Ways In.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-7 text-neutral-400">
          Take them in order, or go straight to the part you came for.
        </p>

        <Reveal className="mt-12 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, i) => (
            <Link
              key={page.path}
              to={page.path}
              className="group flex flex-col justify-between gap-8 bg-[#08090a] p-7 no-underline transition-colors duration-300 hover:bg-lime-400/[0.045]"
            >
              <div>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400/70"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="mt-4 uppercase leading-none text-white transition-colors duration-300 group-hover:text-lime-400"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.35rem, 2vw, 1.7rem)",
                  }}
                >
                  {page.label}
                </p>
                <p className="mt-3.5 text-[16px] leading-6 text-neutral-400">{page.blurb}</p>
              </div>

              <span className="flex items-center gap-2 text-lime-400/60 transition-colors duration-300 group-hover:text-lime-400">
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Open
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
