import { RegisterButton } from "@/components/shared/RegisterButton";
import { REGISTER_NOTE } from "@/lib/constants";

/* The closing invitation. Ink ground, so it reads as the end of the page
   rather than as one more section, and the one place the primary CTA gets to
   be full size below the fold.

   Every page that isn't the last in the running order closes on this and then
   the next-page band. */
export default function CtaBand({
  heading = "What's your number?",
  lead = "You don't have to be an ultimate human to start. That's the whole point.",
  label,
}) {
  return (
    <section
      className="on-ink uh-rule uh-rule-ink px-6 py-24 sm:py-28"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="type-h2 text-bone">{heading}</h2>
        <p className="type-lead mx-auto mt-6 max-w-2xl text-bone-70">{lead}</p>

        <div className="mt-10 flex justify-center">
          <RegisterButton tone="ink" label={label} />
        </div>

        <p className="mx-auto mt-6 max-w-md text-[14px] leading-6 text-bone-50">{REGISTER_NOTE}</p>
      </div>
    </section>
  );
}
