import { Mail } from "lucide-react";

import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM, SURFACE_SAND } from "@/lib/gradients";
import { CONTACT_EMAIL } from "@/lib/constants";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import AboutStorySection from "@/sections/AboutStorySection";
import FoundersSection from "@/sections/FoundersSection";
import InDevelopmentSection from "@/sections/InDevelopmentSection";

/* Last page in the running order, so there is no next-page band to close on.
   This does that job instead — and an address is the right way to end the page
   that introduces the people building it. */
function ContactBand() {
  return (
    <section
      className="on-ink uh-rule uh-rule-ink px-6 py-24 sm:px-8 sm:py-28"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            tone="ink"
            label="Get in touch"
            heading="Talk to us"
            lead="Questions about the Index, bringing a gym or team, or partnering on an event — the same address reaches all of us."
          />

          {/* The address is a 30-character unbreakable string, so it sets the
              floor on how narrow this band can go. Below sm it drops to full
              width and is allowed to break, rather than pushing the page
              sideways on a 320px screen. */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group inline-flex w-full min-w-0 items-center gap-3.5 border border-bone/25 px-6 py-5 no-underline transition-colors duration-300 hover:border-ember-light hover:bg-bone/[0.04] sm:w-auto sm:shrink-0 sm:px-8"
          >
            <Mail className="h-5 w-5 shrink-0 text-ember-light" strokeWidth={1.5} />
            <span
              className="break-all text-[14px] font-bold tracking-wide text-bone transition-colors duration-300 group-hover:text-ember-light sm:text-[16px]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {CONTACT_EMAIL}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const page = routesByPath["/about"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <AboutStorySection surface={SURFACE_CREAM} />
      <FoundersSection surface={SURFACE_BONE} />
      <InDevelopmentSection surface={SURFACE_SAND} />
      <ContactBand />
    </>
  );
}
