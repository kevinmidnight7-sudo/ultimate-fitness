import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { GRADIENT_TIDE } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import CategoriesSection from "@/sections/CategoriesSection";
import SplitFeatureScene from "@/sections/SplitFeatureScene";
import SignupSection from "@/sections/SignupSection";
import NextPageBand from "@/components/NextPageBand";

/* Entry pricing used to sit on this page, under the divisions. Both prices now
   live together on /subscribe, so this page shows the divisions and says where
   the numbers went rather than leaving a reader to hunt for them. */
function PricingPointer() {
  return (
    <section className="uh-divide px-6 py-16" style={{ background: GRADIENT_TIDE }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-l-2 border-lime-400/45 pl-7 md:grid-cols-[1.15fr_1fr] md:gap-14 md:pl-10">
          <p className="text-[19px] leading-8 text-neutral-200">
            Entry pricing for every division — individual, doubles, relay and
            corporate — sits alongside membership on the Subscribe page, so you can
            see what a place costs and what the platform costs in one go.
          </p>
          <div className="flex items-start md:justify-end">
            <Link
              to="/subscribe"
              className="group inline-flex items-center gap-3 border border-white/[0.14] px-6 py-4 text-[12px] font-black uppercase tracking-[0.18em] text-white no-underline transition-colors duration-300 hover:border-lime-400 hover:text-lime-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              See entry pricing
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CompetePage() {
  const page = routesByPath["/compete"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <CategoriesSection />
      <SplitFeatureScene
        file="converge-left.png"
        side="left"
        eyebrow="Every Level of Athlete"
        title={<>Built for<br />Every Body.</>}
        body="This is built to test complete capability — not just how long you can suffer on a run."
      />
      <PricingPointer />
      <SignupSection />
      <NextPageBand from="/compete" />
    </>
  );
}
