import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";

import HeroSection from "@/sections/HeroSection";
import WhyDifferentSection from "@/sections/WhyDifferentSection";
import PageMap from "@/components/PageMap";
import SignupSection from "@/sections/SignupSection";
import NextPageBand from "@/components/NextPageBand";

/* The hero states what this is, the comparison table says why it is not the
   thing you already know, the map hands you the rest of the site, and the
   sign-up band catches anyone who has decided on the strength of those three. */
export default function OverviewPage() {
  usePageMeta({ ...routesByPath["/"], path: "/" });

  return (
    <>
      <HeroSection />
      <WhyDifferentSection />
      <PageMap />
      <SignupSection />
      <NextPageBand from="/" />
    </>
  );
}
