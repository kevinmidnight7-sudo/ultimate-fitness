import { GRADIENT_LIME } from "@/sections/archived/legacyGradients";
import SectionLabel from "@/components/shared/SectionLabel";
import { foundingPricing } from "@/data/archived/eventContent";
import { REGISTER_URL } from "@/lib/constants";

/* `gradient` lets the page it sits on override the default band, so two
   sections that never used to meet do not now stack the same recipe. */
export default function PricingSection({ gradient = GRADIENT_LIME }) {
  return (
    <section
      className="relative uh-divide px-6 py-24"
      style={{ background: gradient }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 92% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionLabel>Event Entry Pricing</SectionLabel>
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Get in Early.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
            Early launch pricing for the first Ultimate Human Index events. Founding athlete places will
            be limited and pricing will increase after launch release.
          </p>
          {/* The membership tiers sit directly above this section, so proximity
              carries the distinction again and the line no longer needs a link
              out to find them. */}
          <p
            className="mt-3 text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            A one-off fee per event — not the monthly membership above.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] md:grid-cols-2 lg:grid-cols-4">
          {foundingPricing.map((item) => (
            <div
              key={item.category}
              className="lime-glow-hover group relative bg-[#0d0d0d] transition-colors hover:bg-[#0f0f0f]"
            >
              <div className="absolute left-0 top-0 h-px w-2/3 bg-gradient-to-r from-lime-400/70 to-transparent" />
              <div className="p-7">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.category}
                </p>
                <p
                  className="text-metallic-price mt-5 text-5xl"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                >
                  {item.price}
                </p>
                <p
                  className="mt-2 text-[16px] text-neutral-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.detail}
                </p>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime-glow mt-8 block border border-lime-400 bg-lime-400 px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-black no-underline transition-colors hover:bg-lime-300 hover:border-lime-300"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Register Interest
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-px bg-[#0a0a0a] p-8">
          <p
            className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Founding Athlete Benefits Include:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Priority event access",
              "Early leaderboard rankings",
              "Founding athlete digital badge",
              "Exclusive launch training content",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-4">
                <div className="h-px w-6 shrink-0 bg-lime-400" />
                <p
                  className="text-[16px] text-neutral-300"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
