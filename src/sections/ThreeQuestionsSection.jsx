import SectionHeading from "@/components/shared/SectionHeading";
import { improveQuestions } from "@/data/content";

/* The three questions the whole product exists to answer.

   Ink ground — one of at most two per page — because this is the proposition
   in three lines and it should feel like the site raising its voice. */
export default function ThreeQuestionsSection({
  label = "The proposition",
  heading = "Your Index answers three simple questions",
  lead = "You don't need to complete every exercise, and you don't need to change how you train. Add the things you already do, and the picture starts to build.",
}) {
  return (
    <section
      className="on-ink uh-rule uh-rule-ink px-6 py-24 sm:px-8 sm:py-32"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading tone="ink" label={label} heading={heading} lead={lead} />

        <ol className="mt-16 grid list-none gap-px border border-bone/12 bg-bone/12 p-0 md:grid-cols-3">
          {improveQuestions.map((question, i) => (
            <li key={question} className="bg-ink p-9 sm:p-11">
              <span
                className="text-[15px] font-bold tabular-nums text-ember-light"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                0{i + 1}
              </span>
              <p className="type-h2 mt-6 text-bone" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)" }}>
                {question}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
