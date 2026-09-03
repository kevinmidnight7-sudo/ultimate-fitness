import { SURFACE_SAND } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import Photograph from "@/components/shared/Photograph";
import { exerciseLibrary } from "@/data/content";

/* The exercises currently in the Capability Framework.

   The source document holds these in a broken table — one single-row table per
   exercise, with four empty columns where the fitness areas should have been.
   Reproducing that would have printed twenty near-empty rows, so this groups
   them by movement family into a responsive list instead.

   The groups are editorial. Deliberately, no exercise here claims which areas
   it feeds: that mapping is framework detail we were not given.

   The photograph is a farmers carry, which is one of the twenty movements
   listed directly beneath it — that is the whole reason it is here rather than
   a generic gym shot. It illustrates the library; it does not claim anything
   the copy doesn't.

   It sits beside the introduction rather than as a full-width banner over the
   grid. The frame is mostly empty wall to the left of the subject, so pairing
   it with the copy uses that space instead of stretching it across 1,280px
   where the man ends up a small figure at one end of a long strip. Nothing is
   set over the photograph. */
export default function ExerciseLibrarySection({ surface = SURFACE_SAND }) {
  const total = exerciseLibrary.reduce((n, g) => n + g.exercises.length, 0);

  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <SectionHeading
            label="Exercise library"
            heading="The movements we recognise today"
            lead={`${total} exercises are in the framework now, alongside recognised fitness events and workouts. It's a growing library — running, rowing, cycling, lifting, carrying, crawling, and balance and mobility tests.`}
          />

          {/* One honest width rather than a srcset. The original is 2.33:1 and
              the box is never wider than 1.6:1, so object-cover scales the file
              to about 1.46x the box — `sizes` describes the box, and the
              browser would resolve it against a number half the truth. */}
          <Photograph
            set="uhi-how-it-works-farmers-carry"
            widths={[1600]}
            alt="Someone walking the length of a gym floor carrying a heavy kettlebell in each hand — a farmers carry, one of the movements in the library below."
            ratio="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]"
            position="68% 50%"
            grade="none"
            width={1600}
            height={686}
          />
        </div>

        <div className="mt-16 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
          {exerciseLibrary.map(({ group, icon: Icon, exercises }) => (
            <section key={group} className="bg-bone p-8">
              <Icon className="h-7 w-7 text-ember" strokeWidth={1.5} />
              <h3 className="type-h3 mt-5 text-ink">{group}</h3>
              <ul className="mt-6 list-none border-t border-ink/12 p-0">
                {exercises.map((exercise) => (
                  <li
                    key={exercise}
                    className="border-b border-ink/12 py-3.5 text-[17px] leading-tight text-ink-70"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {exercise}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="type-body mt-10 max-w-3xl text-ink-50">
          You don't need to train for a particular event or work through the whole
          library. Run, lift, row, ride, compete, move — start with what you already do.
        </p>
      </div>
    </section>
  );
}
