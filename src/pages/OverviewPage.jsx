import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";

import HeroSection from "@/sections/HeroSection";
import WhyDifferentSection from "@/sections/WhyDifferentSection";
import SignupSection from "@/sections/SignupSection";
import NextPageBand from "@/components/NextPageBand";

/* The hero states what this is, the comparison table says why it is not the
   thing you already know, and the sign-up band catches anyone who has decided
   on the strength of those two.

   The six-card map that used to sit between them is archived (Aug 2026): the
   header carries every page already, and the next-page band still hands the
   reader onward, so the page leads with the statement rather than a menu. */
export default function OverviewPage() {
  usePageMeta({ ...routesByPath["/"], path: "/" });

  return (
    <>
      <HeroSection />
      <WhyDifferentSection />
      <SignupSection showLabel={false} />
      <NextPageBand from="/" />
    </>
  );
}
