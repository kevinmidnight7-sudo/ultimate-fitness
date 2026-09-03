import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM, SURFACE_SAND } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import GymPitchSection from "@/sections/GymPitchSection";
import GymCommunitySection from "@/sections/GymCommunitySection";
import GymBenefitsSection from "@/sections/GymBenefitsSection";
import CtaBand from "@/components/shared/CtaBand";

export default function ForGymsPage() {
  const page = routesByPath["/for-gyms"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader
        eyebrow={page.eyebrow}
        heading={page.heading}
        lead={page.lead}
        pattern={page.pattern}
      />
      <GymPitchSection surface={SURFACE_CREAM} />
      <GymCommunitySection surface={SURFACE_BONE} />
      {/* Sand, not bone: the photographic band above it is already bone, and
          no two consecutive sections share a surface. */}
      <GymBenefitsSection surface={SURFACE_SAND} />
      <CtaBand
        heading="Want UHI at your gym?"
        lead="We're talking to gyms now about how the partner programme should work. Tell us where you train, or get in touch if you run the place."
        label="Talk to us about UHI"
      />
    </>
  );
}
