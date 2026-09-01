import { SURFACE_SAND } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FutureTag from "@/components/shared/FutureTag";
import { challengePosition } from "@/data/content";

/* Challenges and events, positioned as one input to the Index rather than as
   the definition of it.

   The event material this replaces — divisions, stations, working weights,
   founding-athlete pricing — is intact in src/sections/archived/ and
   src/data/archived/eventContent.js, so it can be restored quickly if events
   are ever brought back to the front of the site. */
export default function ChallengesSection({ surface = SURFACE_SAND }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="One way in, not the way in"
          heading="Events are a way to test your Index"
          lead={challengePosition.lead}
        />

        <div className="mt-16 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2">
          {challengePosition.points.map(({ title, icon: Icon, text, future }) => (
            <article key={title} className="flex flex-col gap-5 bg-bone p-8 sm:p-10">
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

        <p className="type-body mt-10 max-w-3xl text-ink-50">
          Event formats, dates and entry details are still being finalised. Register your
          interest and we'll be in touch as soon as there's something to enter.
        </p>
      </div>
    </section>
  );
}
