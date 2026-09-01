import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FutureTag from "@/components/shared/FutureTag";
import { coachingIntro, coachingStages } from "@/data/content";

/* How the Index turns into a plan.

   Most of what is described here is in development, and the page says so with
   a tag on each stage rather than a single disclaimer at the top that a
   visitor scrolls straight past. */
export default function CoachingSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="From score to plan"
          heading="Knowing how to improve is the valuable part"
          lead={coachingIntro.lead}
        />

        <ol className="mt-16 grid list-none gap-px border border-line bg-line p-0 sm:grid-cols-2 lg:grid-cols-3">
          {coachingStages.map(({ title, icon: Icon, text, future }) => (
            <li key={title} className="flex flex-col gap-5 bg-cream p-8 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <Icon className="h-7 w-7 shrink-0 text-ember" strokeWidth={1.5} />
                {future && <FutureTag />}
              </div>
              <div>
                <h3 className="type-h3 text-ink">{title}</h3>
                <p className="mt-3 text-[16px] leading-6 text-ink-70">{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="type-h3 mt-14 text-ember-deep">{coachingIntro.refrain}</p>
      </div>
    </section>
  );
}
