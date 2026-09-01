import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import { nextRoute } from "@/lib/routes";

/* ARCHIVED (Sep 2026). Not rendered anywhere.

   This was the closing band on every page: one forward link to the next page
   in a fixed running order. Ken asked for it to go — it pushed people through
   the site as a sequence when the top menu should be doing the navigating, and
   it meant the foot of every page was a navigation control rather than
   something worth doing. Kept here rather than deleted, with the rest of the
   replaced work.

   It depends on `nextRoute()`, which was removed from src/lib/routes.js along
   with the idea of a running order, so restoring it means restoring that too.

   The original note follows.

   The closing band on every page: one forward link to the next page in the
   running order.

   Splitting a site into pages removes the sense of a path that a single long
   scroll gives you for free, and without a replacement each page just stops.
   This is the replacement: one destination, named, with the same one-liner the
   menu and the 404 index use for it, so the path stays legible.

   Give it the page it is sitting on and it works out what follows. Renders
   nothing on the last page in the chain, which closes on its own contact block
   instead. */
export default function NextPageBand({ from }) {
  const target = nextRoute(from);

  if (!target) return null;

  return (
    <section className="uh-rule bg-bone px-6 py-16 sm:px-8 sm:py-20">
      <Reveal className="mx-auto max-w-7xl">
        <Link
          to={target.path}
          className="uh-card group flex flex-col gap-6 border border-line bg-cream px-7 py-9 no-underline sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-11"
        >
          <div className="min-w-0">
            <p className="type-label text-ember">Next</p>
            <p className="type-h2 mt-4 text-ink transition-colors duration-300 group-hover:text-ember">
              {target.label}
            </p>
            <p className="type-body mt-4 max-w-xl text-ink-70">{target.blurb}</p>
          </div>

          <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-line text-ember transition-colors duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-cream">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
