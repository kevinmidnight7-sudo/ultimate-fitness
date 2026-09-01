import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FutureTag from "@/components/shared/FutureTag";
import { gymPitch } from "@/data/content";

/* The partner gym proposition, put twice: once to the member, once to the
   person who owns the place.

   The whole programme is being designed rather than running, so it carries one
   visible tag at the top and keeps every claim in future tense. The list of
   what members would actually be able to do lives in GymBenefitsSection, so
   these two columns stay the same length and read as a pair. */
export default function GymPitchSection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <FutureTag>Partner programme in development</FutureTag>

        <SectionHeading
          className="mt-8"
          label="Why a gym"
          heading="Where an estimate becomes a verified score"
          lead={gymPitch.lead}
        />

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          <article className="bg-cream p-8 sm:p-11">
            <h3 className="type-h3 text-ink">For your members</h3>
            <p className="type-body mt-5 text-ink-70">{gymPitch.forMembers}</p>
            <p className="type-body mt-6 text-ink-70">
              A UHI Verified score is the goal: the same movements, judged to the same
              standard, with someone qualified watching. That is something a member
              cannot produce on their own at home.
            </p>
          </article>

          <article className="bg-cream p-8 sm:p-11">
            <h3 className="type-h3 text-ink">For your gym</h3>
            <p className="type-body mt-5 text-ink-70">{gymPitch.forGyms}</p>
            <p className="type-body mt-6 text-ink-70">
              Supported assessments, shared movement standards, validated results and gym
              leaderboards are all part of what the programme is being built to offer.
              We're talking to gyms now about how it should work in practice.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
