import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM, SURFACE_EMBER, SURFACE_SAND } from "@/lib/gradients";
import { faqIndex } from "@/data/content";

import PageHeader from "@/components/PageHeader";
import EightAreasSection from "@/sections/EightAreasSection";
import IndexSnapshotSection from "@/sections/IndexSnapshotSection";
import EvidenceSection from "@/sections/EvidenceSection";
import EstimatedVerifiedSection from "@/sections/EstimatedVerifiedSection";
import BenchmarkSection from "@/sections/BenchmarkSection";
import FaqSection from "@/sections/FaqSection";
import CtaBand from "@/components/shared/CtaBand";

/* The Index explained end to end: the eight areas, the profile they produce,
   what feeds it, the difference between an estimated and a verified score, and
   what kind of number it is — a personal benchmark rather than a ranking.

   That last part came off the home page, where it was depth a first-time
   visitor doesn't need in the first ten seconds. */
export default function IndexPage() {
  const page = routesByPath["/the-index"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <EightAreasSection surface={SURFACE_CREAM} />
      <IndexSnapshotSection
        surface={SURFACE_BONE}
        showDetail
        label="An example profile"
        heading="The score, and the eight scores behind it"
        lead="Your overall Index is one number. Underneath it, each area has its own score on the same scale — which is where you find out why the headline reads the way it does."
        closer="The area with the most room in it is usually the one that moves your overall Index most."
        link={{ to: "/improve", label: "See how to improve it" }}
      />
      <EvidenceSection surface={SURFACE_SAND} />
      <EstimatedVerifiedSection surface={SURFACE_BONE} />
      <BenchmarkSection surface={SURFACE_EMBER} />
      <FaqSection items={faqIndex} surface={SURFACE_CREAM} />
      <CtaBand
        heading="Find your number"
        lead="Your first Index isn't a judgement. It's your starting point."
      />
    </>
  );
}
