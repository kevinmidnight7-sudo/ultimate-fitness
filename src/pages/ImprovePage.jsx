import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import CoachingSection from "@/sections/CoachingSection";
import IndexSnapshotSection from "@/sections/IndexSnapshotSection";
import ThreeQuestionsSection from "@/sections/ThreeQuestionsSection";
import CtaBand from "@/components/shared/CtaBand";

/* Reading the profile, then acting on it. The profile is shown again here
   rather than linked to: this page is about interpreting it, and asking a
   reader to hold eight numbers in their head from two pages ago doesn't work.

   The three-questions band sits above the profile rather than below it because
   it and the closing CTA are both ink, and stacked they read as one very long
   dark block. */
export default function ImprovePage() {
  const page = routesByPath["/improve"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader
        eyebrow={page.eyebrow}
        heading={page.heading}
        lead={page.lead}
        pattern={page.pattern}
      />
      <CoachingSection surface={SURFACE_CREAM} />
      <ThreeQuestionsSection
        label="What it's for"
        heading="Your Index becomes your roadmap"
        lead="Not a score to admire. A structure for deciding what to do next, that updates every time you add a result."
      />
      <IndexSnapshotSection
        surface={SURFACE_BONE}
        label="Reading a profile"
        heading="Where would you start with this one?"
        lead="Strong endurance, weakest mobility. That gap is the most useful thing on the page — it's a specific, trainable target rather than a vague instruction to do more."
        closer="Improve one area and the overall Index moves. Then you test again."
        link={null}
      />
      <CtaBand
        heading="Find out what to work on"
        lead="Build your Index, see where the room is, and get guidance built around your own profile."
      />
    </>
  );
}
