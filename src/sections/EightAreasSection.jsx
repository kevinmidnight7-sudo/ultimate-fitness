import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { fitnessAreas } from "@/data/content";

/* The eight areas of fitness, laid out plainly.

   The old site made this an interactive selector with one panel of detail at a
   time — good for ten capabilities squeezed into a phone screen, wrong here:
   the whole point of the rebrand is that all eight are visible at once. */
export default function EightAreasSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="The framework"
          heading="Eight areas of all-round fitness"
          lead="Each one tells you something the others don't. Together they describe what your body can actually do."
        />

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {fitnessAreas.map(({ name, icon: Icon, detail, evidence }) => (
            <article key={name} className="flex flex-col gap-5 bg-cream p-8">
              <Icon className="h-7 w-7 text-ember" strokeWidth={1.5} />
              <div>
                <h3 className="type-h3 text-ink">{name}</h3>
                <p className="mt-3 text-[16px] leading-6 text-ink-70">{detail}</p>
              </div>
              <p className="mt-auto border-t border-line pt-4 text-[15px] leading-6 text-ink-50">
                <span className="font-bold uppercase tracking-[0.14em] text-ink-70">
                  Where it shows up:{" "}
                </span>
                {evidence}
              </p>
            </article>
          ))}
        </div>

        {/* Honest about what has and hasn't been published: the eight areas are
            defined, the exercise-to-area mapping is framework detail we do not
            have and will not invent. */}
        <p className="type-body mt-10 max-w-3xl text-ink-50">
          Most activities inform more than one area at once. Exactly how each recognised
          exercise maps across the eight is part of the UHI Capability Framework.
        </p>
      </div>
    </section>
  );
}
