import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import Photograph from "@/components/shared/Photograph";
import FutureTag from "@/components/shared/FutureTag";
import { coachingIntro, coachingStages } from "@/data/content";

/* How the Index turns into a plan.

   Most of what is described here is in development, and the page says so with
   a tag on each stage rather than a single disclaimer at the top that a
   visitor scrolls straight past.

   The photograph is a single-leg balance reach, which is one of the four
   worked examples the site uses when it explains what an area score is built
   from — so it belongs on the page that is about acting on those scores. It
   takes the left column here, where Home and How It Works both put their image
   on the right: the pages are read one after another often enough that three
   identical splits in a row would read as a template. */
export default function CoachingSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        {/* Copy first in the DOM so the section still reads heading-then-image
            when it stacks and to a screen reader; the photograph is moved to
            the left column only once there are two of them. */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.66fr)_minmax(0,1.34fr)] lg:items-center lg:gap-16">
          <SectionHeading
            label="From score to plan"
            heading="Knowing how to improve is the valuable part"
            lead={coachingIntro.lead}
          />

          {/* Native 4:5 shown at 4:5. The reach only reads as balance if the
              raised leg, the standing leg and the cone are all in frame, and
              every one of them is close to an edge, so this one is not cropped
              at any width. */}
          <Photograph
            set="uhi-improve-balance"
            widths={[480, 960]}
            sizes="(min-width: 1024px) 29vw, calc(100vw - 3rem)"
            alt="Someone balancing on one leg and reaching down towards a marker cone, the other leg extended behind them."
            ratio="aspect-[4/5]"
            grade="none"
            width={960}
            height={1200}
            className="lg:order-first"
          />
        </div>

        {/* Separately bordered cards: five stages leave an empty cell in a
            two- or three-column hairline grid. */}
        <ol className="mt-16 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {coachingStages.map(({ title, icon: Icon, text, future }) => (
            <li key={title} className="flex flex-col gap-5 border border-line bg-cream p-8 sm:p-9">
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
