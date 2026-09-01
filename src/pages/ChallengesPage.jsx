import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_CREAM, SURFACE_SAND } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import ChallengesSection from "@/sections/ChallengesSection";
import ChallengeFormatSection from "@/sections/ChallengeFormatSection";
import CtaBand from "@/components/shared/CtaBand";
import NextPageBand from "@/components/NextPageBand";

export default function ChallengesPage() {
  const page = routesByPath["/challenges"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <ChallengesSection surface={SURFACE_SAND} />
      <ChallengeFormatSection surface={SURFACE_CREAM} />
      <CtaBand
        heading="You don't need an event to have an Index"
        lead="Build yours from the training you already do — and add an event result if and when you want one."
      />
      <NextPageBand from="/challenges" />
    </>
  );
}
