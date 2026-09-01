import { SURFACE_EMBER } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { benchmark, homeHero } from "@/data/content";

/* "Your fitness. Your benchmark." — plus the golf handicap comparison, which
   is the single most useful line in Ken's document for explaining what kind of
   number this is, so it gets pulled out as a quote rather than buried in the
   hero standfirst. */
export default function BenchmarkSection({ surface = SURFACE_EMBER }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div>
            <SectionHeading label="Not a leaderboard" heading={benchmark.heading} />
            {benchmark.body.map((para) => (
              <p key={para} className="type-body mt-7 max-w-2xl text-ink-70">
                {para}
              </p>
            ))}

            <p className="type-h3 mt-10 text-ember-deep">
              {benchmark.refrain.join(" ")}
            </p>
          </div>

          <figure className="m-0 self-start border-l-2 border-ember pl-8 sm:pl-10">
            <blockquote className="m-0">
              <p className="type-h3 text-ink" style={{ fontWeight: 500 }}>
                {homeHero.benchmark}
              </p>
            </blockquote>
            <figcaption className="type-label mt-7 text-ink-50">
              What kind of number it is
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
