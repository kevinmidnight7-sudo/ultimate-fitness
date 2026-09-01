import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM } from "@/lib/gradients";
import { faqMembership } from "@/data/content";

import PageHeader from "@/components/PageHeader";
import AccessRoutesSection from "@/sections/AccessRoutesSection";
import MembershipSection from "@/sections/MembershipSection";
import ThreeQuestionsSection from "@/sections/ThreeQuestionsSection";
import FaqSection from "@/sections/FaqSection";
import CtaBand from "@/components/shared/CtaBand";
import NextPageBand from "@/components/NextPageBand";

/* How you get in, then how far you can go.

   Event entry pricing used to share this page with membership, on the grounds
   that both cost money. It has gone: the event is no longer the thing being
   sold, and a one-off entry fee sitting next to the tiers made the tiers look
   like a way to buy a race place. */
export default function MembershipPage() {
  const page = routesByPath["/membership"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <AccessRoutesSection surface={SURFACE_CREAM} />
      <MembershipSection surface={SURFACE_BONE} />
      <ThreeQuestionsSection
        label="Whichever level you choose"
        heading="The more you do, the more your Index learns"
      />
      <FaqSection items={faqMembership} surface={SURFACE_CREAM} />
      <CtaBand
        heading="Ready to find your Index?"
        lead="Register your interest and we'll be in touch as membership opens."
      />
      <NextPageBand from="/membership" />
    </>
  );
}
