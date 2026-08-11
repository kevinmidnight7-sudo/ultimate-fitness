import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { GRADIENT_TIDE } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import CategoriesSection from "@/sections/CategoriesSection";
import SplitFeatureScene from "@/sections/SplitFeatureScene";
import PricingSection from "@/sections/PricingSection";
import SignupSection from "@/sections/SignupSection";
import NextPageBand from "@/components/NextPageBand";

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
      <PricingSection gradient={GRADIENT_TIDE} />
      <SignupSection />
      <NextPageBand from="/compete" />
    </>
  );
}
