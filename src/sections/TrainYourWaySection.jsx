import { SURFACE_SAND } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { trainYourWay } from "@/data/content";

/* "You don't need to change how you train."

   One of the two or three things the site most needs a visitor to believe, so
   it gets a section of its own rather than a bullet inside another one. */
export default function TrainYourWaySection({ surface = SURFACE_SAND }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <SectionHeading
            label="Start where you are"
            heading={trainYourWay.heading}
            lead={trainYourWay.lead}
          />

          <div className="lg:pt-4">
            <p className="type-label text-ink-50">Anything here builds your Index</p>
            <ul className="mt-6 list-none border-t border-ink/12 p-0">
              {trainYourWay.examples.map((example) => (
                <li
                  key={example}
                  className="border-b border-ink/12 py-5 text-[22px] leading-tight text-ink"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  {example}
                </li>
              ))}
            </ul>
            <p className="type-body mt-8 text-ink-70">{trainYourWay.closer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
