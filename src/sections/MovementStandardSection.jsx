import { Check } from "lucide-react";

import { SURFACE_BONE } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FutureTag from "@/components/shared/FutureTag";
import { movementStandard } from "@/data/content";

/* UHI Movement Standards — what they cover and why they matter. */
export default function MovementStandardSection({ surface = SURFACE_BONE }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <SectionHeading
              label="Movement standards"
              heading={movementStandard.heading}
              lead={movementStandard.lead}
            />
            <p className="type-body mt-8 max-w-2xl text-ink-70">{movementStandard.support}</p>
          </div>

          <div className="lg:pt-4">
            <p className="type-label text-ink-50">Every standard sets out</p>
            <ul className="mt-6 list-none border-t border-line p-0">
              {movementStandard.includes.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-line py-4">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-ember" strokeWidth={2.5} />
                  <span className="text-[17px] leading-6 text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-px border border-line bg-line lg:grid-cols-3">
          {movementStandard.why.map(({ title, text, future }) => (
            <article key={title} className="flex flex-col gap-5 bg-cream p-8 sm:p-10">
              {future && <FutureTag />}
              <h3 className="type-h3 text-ink">{title}</h3>
              <p className="type-body text-ink-70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
