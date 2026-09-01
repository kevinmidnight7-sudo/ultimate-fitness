import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { challengeFormat } from "@/data/content";

/* What a UHI Challenge is, and the ways to take part.

   This is the useful half of the old event pages, kept rather than dropped —
   but sized as a secondary page, not as the definition of the product. The
   full station-by-station structure, working weights and division timings are
   in src/sections/archived/EventStructureSection.jsx if any of it is wanted
   back. Entry pricing is deliberately not here: it belonged to a founding
   athlete waitlist that no longer exists. */
export default function ChallengeFormatSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="What a challenge looks like"
          heading="Several results, in one supervised session"
          lead={challengeFormat.lead}
        />

        <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-3">
          {challengeFormat.facts.map(({ title, text }) => (
            <article key={title} className="bg-cream p-8 sm:p-10">
              <h3 className="type-h3 text-ink">{title}</h3>
              <p className="mt-4 text-[16px] leading-6 text-ink-70">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <p className="type-label text-ink-50">Ways to take part</p>
          <ul className="mt-6 flex list-none flex-wrap gap-3 p-0">
            {challengeFormat.divisions.map((division) => (
              <li
                key={division}
                className="border border-line bg-cream px-5 py-3 text-[16px] font-bold uppercase tracking-[0.1em] text-ink"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {division}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
