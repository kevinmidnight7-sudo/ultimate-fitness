import { SURFACE_SAND } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FutureTag from "@/components/shared/FutureTag";
import { evidenceSources } from "@/data/content";

/* "Make your Index smarter" — what can feed the score.

   Two of the five sources are not built yet, and prose alone makes that easy
   to miss, so those carry a visible tag as well as future-tense copy. */
export default function EvidenceSection({ surface = SURFACE_SAND }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Building your Index"
          heading="The more we know, the richer it gets"
          lead="You don't have to do everything. Start with what you know, and build your Index over time — the more relevant evidence you add, the more reliable it becomes."
        />

        <div className="mt-16 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {evidenceSources.map(({ title, icon: Icon, text, future }) => (
            <article key={title} className="flex flex-col gap-5 bg-bone p-8">
              <div className="flex items-start justify-between gap-4">
                <Icon className="h-7 w-7 shrink-0 text-ember" strokeWidth={1.5} />
                {future && <FutureTag />}
              </div>
              <div>
                <h3 className="type-h3 text-ink">{title}</h3>
                <p className="mt-3 text-[16px] leading-6 text-ink-70">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
