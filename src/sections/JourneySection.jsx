import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { journeySteps } from "@/data/content";

/* Test → Score → Understand → Improve.

   The spine of the product, so it appears on both the home page and How It
   Works. Numbered rather than arrowed: on a 320px screen the four cards stack,
   and an arrow pointing down a column is a lie about the layout. */
export default function JourneySection({ surface = SURFACE_CREAM, label = "The journey" }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label={label}
          heading="Test. Score. Understand. Improve."
          lead="Four steps, repeated for as long as you want to keep getting fitter."
        />

        <ol className="mt-16 grid list-none gap-px border border-line bg-line p-0 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map(({ step, icon: Icon, text }, i) => (
            <li key={step} className="flex flex-col gap-6 bg-cream p-8 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <Icon className="h-7 w-7 text-ember" strokeWidth={1.5} />
                <span
                  className="text-[15px] font-bold tabular-nums text-ink-50"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="type-h3 text-ink">{step}</h3>
                <p className="mt-3 text-[16px] leading-6 text-ink-70">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
