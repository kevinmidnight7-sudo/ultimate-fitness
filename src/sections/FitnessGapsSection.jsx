import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { fitnessGaps } from "@/data/content";

/* "Fitness is more than how fast you run."

   The three examples do the persuading, so they are set as large statements
   rather than as bullet points in a card. Nothing here moves. */
export default function FitnessGapsSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Why one number"
          heading="Fitness is more than how fast you run"
        />

        <ul className="mt-14 grid list-none gap-px border border-line bg-line p-0 md:grid-cols-3">
          {fitnessGaps.map((line) => (
            <li key={line} className="bg-cream p-8 sm:p-10">
              <p className="type-h3 text-ink">{line}</p>
            </li>
          ))}
        </ul>

        <p className="type-lead mt-14 max-w-3xl text-ink-70">
          That's why we created the Ultimate Human Index. It looks beyond individual
          sports and exercises to build a much broader picture of what your body can
          actually do — and turns it into one score out of 1,000.
        </p>
      </div>
    </section>
  );
}
