import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { SURFACE_BONE } from "@/lib/gradients";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import IndexProfile from "@/components/shared/IndexProfile";

/* "One number. A much bigger picture."

   The one reveal in the body of the home page — everything below the hero and
   above the next-page band renders static, so this is where the budget goes.
   The bar fills inside IndexProfile draw a value rather than announce a block
   arriving, so they don't count against it. */
export default function IndexSnapshotSection({
  surface = SURFACE_BONE,
  showDetail = false,
  label = "Your profile",
  heading = "One number. A much bigger picture.",
  lead = "Your overall Index is only the beginning. Behind it sits your fitness profile: where you're performing strongly, and where you have the most to gain.",
  closer = "Now you don't just know how fit you are. You know what to work on next.",
  link = { to: "/the-index", label: "Explore the Index" },
}) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading label={label} heading={heading} lead={lead} />

        <Reveal className="mt-16">
          <IndexProfile showDetail={showDetail} />
        </Reveal>

        {(closer || link) && (
          <div className="mt-14 flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
            {closer && <p className="type-lead max-w-2xl text-ink">{closer}</p>}
            {link && (
              <Link
                to={link.to}
                className="group inline-flex shrink-0 items-center gap-2.5 border-b border-line pb-1 text-[15px] font-bold uppercase tracking-[0.14em] text-ink no-underline transition-colors hover:border-ember hover:text-ember"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
