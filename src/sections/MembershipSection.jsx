import { Check } from "lucide-react";

import { SURFACE_BONE } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { RegisterButton } from "@/components/shared/RegisterButton";
import { membershipTiers } from "@/data/content";

/* UHI Start, UHI Improve and UHI Pro.

   No prices anywhere: none has been set, and a card with an empty price slot
   or a "TBC" in it is worse than a card that doesn't mention money. The line
   under the heading handles the question honestly instead, and the FAQ on this
   page answers it directly. */
function TierCard({ tier }) {
  return (
    <article
      className={`flex flex-col gap-6 p-8 sm:p-10 ${
        tier.highlighted ? "bg-ember-tint" : "bg-cream"
      }`}
    >
      <div>
        {tier.highlighted && (
          <p className="type-label mb-4 text-ember-deep">Most popular</p>
        )}
        <h3 className="type-h2 text-ink" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)" }}>
          {tier.name}
        </h3>
        <p className="type-lead mt-3 text-ember-deep">{tier.tagline}</p>
      </div>

      <p className="type-body text-ink-70">{tier.summary}</p>

      <div>
        <p className="type-label text-ink-50">{tier.includesNote || "Includes"}</p>
        <ul className="mt-5 list-none p-0">
          {tier.points.map((point) => (
            <li key={point} className="flex items-start gap-3.5 py-2">
              <Check className="mt-1 h-4 w-4 shrink-0 text-ember" strokeWidth={2.5} />
              <span className="text-[16px] leading-6 text-ink-70">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4">
        <p className="text-[15px] leading-6 text-ink-50">
          <span className="font-bold text-ink-70">Best for: </span>
          {tier.bestFor}
        </p>
        <div className="mt-7">
          <RegisterButton size="sm" label={tier.cta} className="w-full" />
        </div>
      </div>
    </article>
  );
}

export default function MembershipSection({ surface = SURFACE_BONE }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Membership levels"
          heading="Choose how far you want to go"
          lead="Three levels, so you can start simply and go deeper when you want to."
        />

        <p className="type-body mt-8 max-w-2xl text-ink-50">
          Pricing hasn't been set yet. Register your interest and we'll tell you before
          anyone else.
        </p>

        <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
