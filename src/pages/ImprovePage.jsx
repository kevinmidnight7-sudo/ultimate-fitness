import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import CoachingSection from "@/sections/CoachingSection";
import IndexSnapshotSection from "@/sections/IndexSnapshotSection";
import ThreeQuestionsSection from "@/sections/ThreeQuestionsSection";
import CtaBand from "@/components/shared/CtaBand";
import NextPageBand from "@/components/NextPageBand";

/* Reading the profile, then acting on it. The profile is shown again here
   rather than linked to: this page is about interpreting it, and asking a
   reader to hold eight numbers in their head from two pages ago doesn't work. */
export default function ImprovePage() {
  const page = routesByPath["/improve"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <CoachingSection surface={SURFACE_CREAM} />
      <IndexSnapshotSection
        surface={SURFACE_BONE}
        label="Reading a profile"
        heading="Where would you start with this one?"
        lead="Strong endurance, weakest mobility. That gap is the most useful thing on the page — it's a specific, trainable target rather than a vague instruction to do more."
        closer="Improve one area and the overall Index moves. Then you test again."
        link={{ to: "/membership", label: "See membership" }}
      />
      <ThreeQuestionsSection
        label="What it's for"
        heading="Your Index becomes your roadmap"
        lead="Not a score to admire. A structure for deciding what to do next, that updates every time you add a result."
      />
      <CtaBand
        heading="Find out what to work on"
        lead="Build your Index, see where the room is, and get guidance built around your own profile."
      />
      <NextPageBand from="/improve" />
    </>
  );
}
