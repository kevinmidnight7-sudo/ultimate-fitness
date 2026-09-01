import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { frameworkIntro, multiAreaExamples } from "@/data/content";

/* The Capability Framework, and the point that one activity can inform several
   areas at once.

   Only the four worked examples Ken's document actually states appear here.
   The source table's area columns arrived empty, so anything beyond these four
   would be a mapping we invented, which is exactly what a framework page must
   not do. */
export default function FrameworkSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="The Capability Framework"
          heading="Each activity tells us something different"
          lead={frameworkIntro.lead}
        />

        <p className="type-body mt-8 max-w-3xl text-ink-70">{frameworkIntro.mapping}</p>

        <ul className="mt-16 grid list-none gap-px border border-line bg-line p-0 sm:grid-cols-2">
          {multiAreaExamples.map(({ activity, areas, note }) => (
            <li key={activity} className="bg-cream p-8 sm:p-10">
              <h3 className="type-h3 text-ink">{activity}</h3>
              <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                {areas.map((area) => (
                  <li
                    key={area}
                    className="border border-ember/40 px-3 py-1.5 text-[12px] font-bold uppercase leading-none tracking-[0.16em] text-ember-deep"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[16px] leading-6 text-ink-70">{note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
