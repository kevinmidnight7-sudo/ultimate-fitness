import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { SURFACE_BONE, SURFACE_CREAM, SURFACE_SAND } from "@/lib/gradients";

import HomeHero from "@/sections/HomeHero";
import FitnessGapsSection from "@/sections/FitnessGapsSection";
import IndexSnapshotSection from "@/sections/IndexSnapshotSection";
import TrainYourWaySection from "@/sections/TrainYourWaySection";
import JourneySection from "@/sections/JourneySection";
import CtaBand from "@/components/shared/CtaBand";

/* Five things, then a way to act on them: what the Index is, why one number is
   worth having, what one looks like, that you don't have to change anything to
   get one, and how the loop works.

   Deliberately short. Ken's brief is a home page someone understands in ten
   seconds — big type, few words — with the depth on the pages the menu leads
   to. The benchmark explanation moved to The Index for exactly that reason.

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
      <CtaBand
        heading="What's your Ultimate Human Index?"
        lead="You don't have to be an ultimate human to start. Whatever your age, whatever your ability, wherever you're starting from."
      />
    </>
  );
}
