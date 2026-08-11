import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import usePageMeta from "@/hooks/usePageMeta";
import { routesByPath } from "@/lib/routes";
import { GRADIENT_EMBER } from "@/lib/gradients";

import PageHeader from "@/components/PageHeader";
import SubscriptionSection from "@/sections/SubscriptionSection";
import NextPageBand from "@/components/NextPageBand";

/* Two things on this site cost money and they are not the same thing. On one
   long page that was obvious from proximity — the tiers and the entry fees sat
   a couple of screens apart. Split across two pages it stops being obvious, so
   each page now says which one it is and points at the other. */
function MembershipClarifier() {
  return (
    <section className="uh-divide px-6 py-16" style={{ background: GRADIENT_EMBER }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-l-2 border-lime-400/45 pl-7 md:grid-cols-[1.15fr_1fr] md:gap-14 md:pl-10">
          <p className="text-[19px] leading-8 text-neutral-200">
            Membership is the platform: your Index, your coaching and your progress,
            all year round. It is separate from entering an event, which is paid for
            per event when you claim a place.
          </p>
          <div className="flex items-start md:justify-end">
            <Link
              to="/compete"
              className="group inline-flex items-center gap-3 border border-white/[0.14] px-6 py-4 text-[12px] font-black uppercase tracking-[0.18em] text-white no-underline transition-colors duration-300 hover:border-lime-400 hover:text-lime-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Looking for event entry?
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
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
      <MembershipClarifier />
      <SubscriptionSection />
      <NextPageBand from="/subscribe" />
    </>
  );
}
