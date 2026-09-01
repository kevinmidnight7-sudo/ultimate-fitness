import { SURFACE_SAND } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { inDevelopment } from "@/data/content";

/* What is genuinely still being built.

   A public page, not an internal note: it names the things a visitor might
   otherwise assume are already running, and commits to no dates. */
export default function InDevelopmentSection({ surface = SURFACE_SAND }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-28" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Being honest"
          heading="What we're still building"
          lead="UHI is being built in the open. These are the parts that aren't finished yet."
        />

        <ul className="mt-14 grid list-none gap-px border border-ink/12 bg-ink/12 p-0 md:grid-cols-2">
          {inDevelopment.map((item) => (
            <li key={item} className="bg-bone p-7 sm:p-8">
              <p className="type-body text-ink">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
