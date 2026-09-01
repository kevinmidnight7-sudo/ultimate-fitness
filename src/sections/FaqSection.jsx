import { SURFACE_BONE } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import FaqList from "@/components/shared/FaqList";

/* Short answers to the questions the page above obviously provokes. Each page
   passes its own set from src/data/content.js. */
export default function FaqSection({
  items,
  surface = SURFACE_BONE,
  label = "Questions",
  heading = "The things people ask",
}) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-28" style={{ background: surface }}>
      <div className="mx-auto max-w-4xl">
        <SectionHeading label={label} heading={heading} />
        <FaqList items={items} className="mt-12" />
      </div>
    </section>
  );
}
