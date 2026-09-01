import { Flame, Timer, Zap } from "lucide-react";

import SectionLabel from "@/components/shared/SectionLabel";
import { MarketingImage } from "@/components/archived/MarketingImage";

export default function ChallengeOverviewSection() {
  return (
    <section
      id="challenge"
      className="uh-divide relative px-6 pb-0 pt-20"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 8% 0%, rgba(163,230,53,0.22) 0%, transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>The Challenge</SectionLabel>
        {/* Slim three-point strip */}
        <div className="mb-12 flex flex-col divide-y divide-white/[0.06] md:flex-row md:divide-x md:divide-y-0">
          {[
            { icon: Flame,  title: "Built for every body. Designed for every challenge.", sub: "Designed to reveal, not destroy" },
            { icon: Timer,  title: "Long enough to test you, fast enough to race", sub: "High energy. Consistent Standards. Visible competition." },
            { icon: Zap,    title: "Discover how you cope Under Fatigue", sub: "Speed → Control → Strength → Coordination" },
          ].map(({ icon: Icon, title, sub }) => (
            <div
              key={title}
              className="flex flex-1 items-center gap-5 px-6 py-7 first:pl-0 last:pr-0 md:px-10"
            >
              <Icon className="h-5 w-5 shrink-0 text-lime-400/60" strokeWidth={1.5} />
              <div>
                <p className="text-[16px] font-bold uppercase tracking-wide text-white">{title}</p>
                <p
                  className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-neutral-500"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Full-width image band with an overlaid statement */}
      <MarketingImage
        file="challenge-fatigue-moment.jpg"
        aspectRatio="21/9"
        searchTerms="athlete exhausted determined mid-workout dramatic shadow"
        treatment="Duotone B&W/lime · dark vignette top + bottom"
        className="max-h-[62vh] w-full"
        imgClassName="object-[center_22%]"
        overlay={
          <>
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(6,6,6,0.9) 0%, rgba(6,6,6,0.45) 38%, transparent 68%), linear-gradient(0deg, rgba(6,6,6,0.7) 0%, transparent 42%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-7xl px-6 pb-8 md:pb-14">
                <div>
                  <p
                    className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    The Signature Test
                  </p>
                  <h3 className="text-3xl uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
                    This Is Where
                    <br />
                    You Find Out.
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-6 text-neutral-300 md:text-base">
                    Speed, strength and composure — every capability exposed under fatigue.
                  </p>
                </div>
              </div>
            </div>
          </>
        }
      />
    </section>
  );
}
