import { SURFACE_SAND } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import Photograph from "@/components/shared/Photograph";
import { trainYourWay } from "@/data/content";

/* "You don't need to change how you train."

   One of the two or three things the site most needs a visitor to believe, so
   it gets a section of its own rather than a bullet inside another one.

   The photograph is doing argument, not decoration: a woman in her fifties
   carrying a sandbag outdoors at dawn is the clearest possible answer to "is
   this for people like me?" — no event, no arena, no twenty-five-year-old.
   It sits beside the copy rather than behind it, so nothing is read over a
   photograph. */
export default function TrainYourWaySection({ surface = SURFACE_SAND }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              label="Start where you are"
              heading={trainYourWay.heading}
              lead={trainYourWay.lead}
            />

            <p className="type-label mt-12 text-ink-50">Anything here builds your Index</p>
            <ul className="mt-6 list-none border-t border-ink/12 p-0">
              {trainYourWay.examples.map((example) => (
                <li
                  key={example}
                  className="border-b border-ink/12 py-4 text-[22px] leading-tight text-ink"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  {example}
                </li>
              ))}
            </ul>
            <p className="type-body mt-7 text-ink-70">{trainYourWay.closer}</p>
          </div>

          {/* Portrait original (864x1821), shown at 4:5 and anchored high so the
              crop keeps her head and the load on her shoulder rather than
              centring on her knees. Given a column of its own rather than
              squeezed between two blocks of copy — at a third of the width it
              read as a thumbnail, which is not what an image making an argument
              should look like. */}
          <Photograph
            file="why-enter-lifestyle.jpg"
            alt="A woman in her fifties carrying a sandbag on her shoulder, training outdoors on a frosty morning."
            ratio="aspect-[4/5]"
            position="52% 24%"
            width={864}
            height={1821}
          />
        </div>
      </div>
    </section>
  );
}
