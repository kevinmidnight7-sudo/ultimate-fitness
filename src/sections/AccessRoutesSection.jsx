import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FutureTag from "@/components/shared/FutureTag";
import { accessRoutes } from "@/data/content";

/* The two ways into UHI. Stated before the tiers, because "do I need a gym?"
   is the first question the tier table provokes. */
export default function AccessRoutesSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Getting started"
          heading="Two ways to build your Index"
          lead="Your Ultimate Human Index isn't a one-off fitness score. It's a living measure that develops as you add results, take on new challenges and improve."
        />

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {accessRoutes.map(({ name, icon: Icon, lead, text, refrain, future }) => (
            <article key={name} className="flex flex-col gap-6 bg-cream p-8 sm:p-11">
              <div className="flex items-start justify-between gap-4">
                <Icon className="h-8 w-8 shrink-0 text-ember" strokeWidth={1.5} />
                {future && <FutureTag />}
              </div>
              <h3 className="type-h2 text-ink" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)" }}>
                {name}
              </h3>
              <p className="type-lead text-ink">{lead}</p>
              <p className="type-body text-ink-70">{text}</p>
              <p className="mt-auto border-t border-line pt-6 text-[16px] font-bold uppercase tracking-[0.12em] text-ember-deep"
                 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {refrain}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
