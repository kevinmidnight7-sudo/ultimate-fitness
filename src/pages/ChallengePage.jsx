import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { GRADIENT_LIME } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import ChallengeOverviewSection from "@/sections/ChallengeOverviewSection";
import EventStructureSection from "@/sections/EventStructureSection";
import SplitFeatureScene from "@/sections/SplitFeatureScene";
import NextPageBand from "@/components/NextPageBand";

export default function ChallengePage() {
  const page = routesByPath["/challenge"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <ChallengeOverviewSection />
      <EventStructureSection gradient={GRADIENT_LIME} />
      <SplitFeatureScene
        file="converge-right.png"
        side="right"
        eyebrow="Runners · Lifters · Fighters"
        title={<>The Complete<br />Athlete Wins.</>}
        body="Every discipline gets exposed somewhere. The most complete human — not the most specialised — takes the win."
      />
      <NextPageBand from="/challenge" />
    </>
  );
}
