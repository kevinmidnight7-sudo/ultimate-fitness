import { Check } from "lucide-react";

import { SURFACE_BONE } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { gymBenefits } from "@/data/content";

/* What a member would be able to do in a partner gym.

   Seven items, which divides evenly into nothing, so these are separately
   bordered cards rather than the hairline-gap grid used where the count fits
   the columns exactly. */
export default function GymBenefitsSection({ surface = SURFACE_BONE }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="In a partner gym"
          heading="What members would be able to do"
          lead="The detail will depend on the UHI membership each gym chooses to offer."
        />

        <ul className="mt-16 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {gymBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-4 border border-line bg-cream p-7">
              <Check className="mt-1 h-5 w-5 shrink-0 text-ember" strokeWidth={2.5} />
              <span className="type-h3 text-ink" style={{ fontWeight: 500 }}>
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
