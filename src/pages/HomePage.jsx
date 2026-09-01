import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM, SURFACE_EMBER, SURFACE_SAND } from "@/lib/gradients";

import HomeHero from "@/sections/HomeHero";
import FitnessGapsSection from "@/sections/FitnessGapsSection";
import IndexSnapshotSection from "@/sections/IndexSnapshotSection";
import TrainYourWaySection from "@/sections/TrainYourWaySection";
import JourneySection from "@/sections/JourneySection";
import BenchmarkSection from "@/sections/BenchmarkSection";
import CtaBand from "@/components/shared/CtaBand";
import NextPageBand from "@/components/NextPageBand";

/* The home page makes the argument in order and then stops: what the Index is,
   why one number is worth having, what it looks like, that you don't have to
   change anything to get one, how the loop works, and what kind of number it
   is. The full product specification lives on the pages below it.

   Surfaces rotate so no two consecutive sections share a ground. */
export default function HomePage() {
  usePageMeta({ ...routesByPath["/"], path: "/" });

  return (
    <>
      <HomeHero />
      <FitnessGapsSection surface={SURFACE_CREAM} />
      <IndexSnapshotSection surface={SURFACE_BONE} />
      <TrainYourWaySection surface={SURFACE_SAND} />
      <JourneySection surface={SURFACE_CREAM} />
      <BenchmarkSection surface={SURFACE_EMBER} />
      <CtaBand
        heading="What's your Ultimate Human Index?"
        lead="You don't have to be an ultimate human to start. Whatever your age, whatever your ability, wherever you're starting from."
      />
      <NextPageBand from="/" />
    </>
  );
}
