import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { GRADIENT_EMBER } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import SubscriptionSection from "@/sections/SubscriptionSection";
import PricingSection from "@/sections/PricingSection";
import NextPageBand from "@/components/NextPageBand";

/* Two things on this site cost money and they are not the same thing: a monthly
   membership and a one-off entry fee per event. Both now sit on this page, so
   this band says up front which is which and in what order they appear —
   otherwise a £14.99/mo tier and a £79 entry read as alternatives. */
function PriceClarifier() {
  return (
    <section className="uh-divide px-6 py-16" style={{ background: GRADIENT_EMBER }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-l-2 border-lime-400/45 pl-7 md:grid-cols-2 md:gap-14 md:pl-10">
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              First — Membership
            </p>
            <p className="mt-4 text-[19px] leading-8 text-neutral-200">
              The platform: your Index, your coaching and your progress, all year
              round. Billed monthly, and it runs whether or not you enter an event.
            </p>
          </div>
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Below — Event Entry
            </p>
            <p className="mt-4 text-[19px] leading-8 text-neutral-200">
              A separate one-off fee, paid per event when you claim a place. You do
              not need a membership to enter, and membership does not include entry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SubscribePage() {
  const page = routesByPath["/subscribe"];
  usePageMeta({ ...page, path: page.path });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heading} lead={page.lead} />
      <PriceClarifier />
      <SubscriptionSection />
      {/* Ember, not the section's own lime — SubscriptionSection sits directly
          above it and opens on the same lime recipe. */}
      <PricingSection gradient={GRADIENT_EMBER} />
      <NextPageBand from="/subscribe" />
    </>
  );
}
