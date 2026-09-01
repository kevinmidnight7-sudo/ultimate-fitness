import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import GymPitchSection from "@/sections/GymPitchSection";
import GymBenefitsSection from "@/sections/GymBenefitsSection";
import CtaBand from "@/components/shared/CtaBand";
import NextPageBand from "@/components/NextPageBand";

export default function ForGymsPage() {
  const page = routesByPath["/for-gyms"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <GymPitchSection surface={SURFACE_CREAM} />
      <GymBenefitsSection surface={SURFACE_BONE} />
      <CtaBand
        heading="Want UHI at your gym?"
        lead="We're talking to gyms now about how the partner programme should work. Tell us where you train, or get in touch if you run the place."
        label="Talk to us about UHI"
      />
      <NextPageBand from="/for-gyms" />
    </>
  );
}
