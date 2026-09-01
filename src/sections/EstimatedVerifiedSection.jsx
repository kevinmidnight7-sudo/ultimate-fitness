import { SURFACE_BONE } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FutureTag from "@/components/shared/FutureTag";
import { indexLevels } from "@/data/content";

/* UHI Estimated and UHI Verified.

   Both are described as being developed, because they are. The section says so
   once at the top rather than hedging every sentence. */
export default function EstimatedVerifiedSection({ surface = SURFACE_BONE }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Two levels"
          heading="Estimate it. Then prove it."
          lead="Not all performance data is equal, so we're developing two levels of Ultimate Human Index."
        />

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {indexLevels.map(({ name, icon: Icon, summary, text, future }) => (
            <article key={name} className="flex flex-col gap-6 bg-cream p-8 sm:p-11">
              <div className="flex items-start justify-between gap-4">
                <Icon className="h-8 w-8 shrink-0 text-ember" strokeWidth={1.5} />
                {future && <FutureTag />}
              </div>
              <h3 className="type-h2 text-ink" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)" }}>
                {name}
              </h3>
              <p className="type-lead text-ink">{summary}</p>
              <p className="type-body text-ink-70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
