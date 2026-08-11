import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { nextRoute } from "@/lib/routes";

/* The closing band on every page: one forward link to the next page in the
   running order.

   The old single-page site gave a visitor a sense of a path simply by being
   continuous — you always knew there was more below. Splitting it into seven
   pages removes that, and without a replacement each page just stops. This is
   the replacement: one destination, named, with the same one-liner the menu
   and the Overview hub use for it, so the path stays legible.

   Give it the page it is sitting on and it works out what follows. Renders
   nothing on the last page in the chain, which closes on its own contact block
   instead. */
export default function NextPageBand({ from }) {
  const target = nextRoute(from);

  if (!target) return null;

  return (
    <section
      className="uh-divide px-6 py-16"
      style={{ background: "linear-gradient(180deg, #070707 0%, #0a0a0a 100%)" }}
    >
      <Reveal className="mx-auto max-w-7xl">
        <Link
          to={target.path}
          className="group flex flex-col gap-5 border border-white/[0.10] bg-white/[0.015] px-7 py-9 no-underline transition-colors duration-300 hover:border-lime-400/45 hover:bg-lime-400/[0.03] sm:flex-row sm:items-center sm:justify-between sm:px-10"
        >
          <div className="min-w-0">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Next
            </p>
            <p
              className="mt-2.5 uppercase leading-none text-white transition-colors duration-300 group-hover:text-lime-400"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              }}
            >
              {target.label}
            </p>
            <p className="mt-3 max-w-xl text-[16px] leading-6 text-neutral-400">{target.blurb}</p>
          </div>

          <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/[0.14] text-white transition-all duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
