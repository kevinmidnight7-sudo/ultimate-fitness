import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { GRADIENT_LIME } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import YourJourneyHub from "@/sections/YourJourneyHub";
import AICoachingSection from "@/sections/AICoachingSection";
import NextPageBand from "@/components/NextPageBand";

export default function PersonalCoachPage() {
  const page = routesByPath["/personal-coach"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <YourJourneyHub />
      {/* Both sections default to the ember gradient; this one moves to lime so
          they do not run together as one continuous band. */}
      <AICoachingSection gradient={GRADIENT_LIME} />
      <NextPageBand from="/personal-coach" />
    </>
  );
}
