import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM, SURFACE_SAND } from "@/lib/gradients";
import { faqFramework } from "@/data/content";

import PageHeader from "@/components/PageHeader";
import FrameworkSection from "@/sections/FrameworkSection";
import ExerciseLibrarySection from "@/sections/ExerciseLibrarySection";
import MovementStandardSection from "@/sections/MovementStandardSection";
import JourneySection from "@/sections/JourneySection";
import FaqSection from "@/sections/FaqSection";
import CtaBand from "@/components/shared/CtaBand";
import NextPageBand from "@/components/NextPageBand";

/* The mechanics: what counts, how it is recognised, and to what standard. The
   Test → Score → Understand → Improve loop closes the page, because by this
   point a reader knows enough for it to mean something concrete. */
export default function HowItWorksPage() {
  const page = routesByPath["/how-it-works"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <FrameworkSection surface={SURFACE_CREAM} />
      <ExerciseLibrarySection surface={SURFACE_SAND} />
      <MovementStandardSection surface={SURFACE_BONE} />
      <JourneySection surface={SURFACE_CREAM} label="Putting it together" />
      <FaqSection items={faqFramework} surface={SURFACE_BONE} />
      <CtaBand
        heading="Start with what you already do"
        lead="Run, lift, row, ride, move, compete. Every result you add makes the picture more complete."
      />
      <NextPageBand from="/how-it-works" />
    </>
  );
}
