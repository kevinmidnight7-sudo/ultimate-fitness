import { Mail } from "lucide-react";

import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { GRADIENT_TIDE } from "@/lib/gradients";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import PageHeader from "@/components/PageHeader";
import FoundersSection from "@/sections/FoundersSection";
import WhyEnterSection from "@/sections/WhyEnterSection";
import PreLaunchSection from "@/sections/PreLaunchSection";

/* Last page in the running order, so there is no next-page band to close on.
   This does that job instead — and an address is the right way to end the page
   that introduces the people building it. */
function ContactBand() {
  return (
    <section className="uh-divide px-6 py-24" style={{ background: GRADIENT_TIDE }}>
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Get in Touch</SectionLabel>

        <Reveal className="mt-2 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className="uppercase leading-none text-white"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3.6vw, 3rem)",
              }}
            >
              Talk to Us.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-neutral-400">
              Questions about the Index, bringing a gym or team, or partnering on an
              event — the same address reaches all of us.
            </p>
          </div>

          <a
            href="mailto:hello@theultimatehuman.fitness"
            className="group inline-flex shrink-0 items-center gap-3 border border-lime-400/45 bg-lime-400/[0.04] px-7 py-5 no-underline transition-colors duration-300 hover:border-lime-400 hover:bg-lime-400/[0.09]"
          >
            <Mail className="h-5 w-5 shrink-0 text-lime-400" strokeWidth={1.5} />
            <span
              className="text-[15px] font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-lime-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              hello@theultimatehuman.fitness
            </span>
          </a>
        </Reveal>
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
      <FoundersSection />
      <WhyEnterSection />
      <PreLaunchSection />
      <ContactBand />
    </>
  );
}
