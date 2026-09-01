import { SURFACE_CREAM } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { aboutStory } from "@/data/content";

export default function AboutStorySection({ surface = SURFACE_CREAM }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <SectionHeading label="Why we built it" heading="A simple question, badly answered" />
          <div className="lg:pt-3">
            {aboutStory.map((para) => (
              <p key={para} className="type-lead mb-7 text-ink-70 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
