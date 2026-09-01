import { Check } from "lucide-react";

import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FutureTag from "@/components/shared/FutureTag";
import { gymBenefits, gymPitch } from "@/data/content";

/* The partner gym proposition, for members and for gym owners.

   The whole programme is being designed rather than running, so the section
   carries one visible tag at the top and keeps every claim in future tense. */
export default function GymPitchSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-5">
          <FutureTag>Partner programme in development</FutureTag>
        </div>

        <SectionHeading
          className="mt-8"
          label="Why a gym"
          heading="Where an estimate becomes a verified score"
          lead={gymPitch.lead}
        />

        <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <article className="bg-cream p-8 sm:p-11">
            <h3 className="type-h3 text-ink">For your members</h3>
            <p className="type-body mt-5 text-ink-70">{gymPitch.forMembers}</p>

            <p className="type-label mt-9 text-ink-50">In a partner gym, members may be able to</p>
            <ul className="mt-5 list-none p-0">
              {gymBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3.5 py-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-ember" strokeWidth={2.5} />
                  <span className="text-[16px] leading-6 text-ink-70">{benefit}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-cream p-8 sm:p-11">
            <h3 className="type-h3 text-ink">For your gym</h3>
            <p className="type-body mt-5 text-ink-70">{gymPitch.forGyms}</p>

            <p className="type-body mt-6 text-ink-70">
              Supported assessments, shared movement standards, validated results and gym
              leaderboards are all part of what the partner programme is being built to
              offer. We're talking to gyms now about how it should work in practice.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
