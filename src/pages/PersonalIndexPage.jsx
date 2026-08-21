import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { GRADIENT_EMBER, GRADIENT_LIME } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import UhiIndexSection from "@/sections/UhiIndexSection";
import WholeHumanScene from "@/sections/WholeHumanScene";
import CapabilityPillarsSection from "@/sections/CapabilityPillarsSection";
import ScoreSection from "@/sections/ScoreSection";
import NextPageBand from "@/components/NextPageBand";

/* The pinned "Measure the Whole Human" scene sits between the principles and
   the capabilities, which is also what keeps two dense explanatory sections from
   running straight into each other. */
export default function PersonalIndexPage() {
  const page = routesByPath["/personal-index"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <UhiIndexSection />
      <WholeHumanScene />
      <CapabilityPillarsSection gradient={GRADIENT_EMBER} />
      <ScoreSection gradient={GRADIENT_LIME} />
      <NextPageBand from="/personal-index" />
    </>
  );
}
