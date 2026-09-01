
import SectionLabel from "@/components/shared/SectionLabel";
import { MarketingImage } from "@/components/shared/MarketingImage";
import { whyEnter } from "@/data/archived/eventContent";

export default function WhyEnterSection() {
  return (
    <section
      className="relative uh-divide"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 8% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      {/* Two-column: image left, list right */}
      <div className="relative flex flex-col lg:flex-row">
        {/* Left — lifestyle image */}
        <div className="lg:w-[42%] lg:shrink-0">
          <MarketingImage
            file="why-enter-lifestyle.jpg"
            aspectRatio="4/5"
            searchTerms="person training outdoors early morning determination"
            treatment="Duotone matching hero · right-edge gradient fade"
            className="h-full min-h-[360px] w-full"
            filter="grayscale(100%) contrast(1.05) brightness(0.9)"
            overlay={
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 52%, rgba(10,13,16,0.9) 100%)",
                }}
              />
            }
          />
        </div>

        {/* Right — stacked list */}
        <div className="flex flex-1 flex-col justify-center px-8 py-16 lg:px-14 lg:py-24">
          <SectionLabel>Why Enter?</SectionLabel>
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Because Fitness
            <br />
            Should Mean Capability.
          </h2>

          <div className="mt-10 space-y-0">
            {whyEnter.map((item) => (
              <div
                key={item.title}
                className="uh-divide py-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400/50" />
                  <div>
                    <p className="text-[16px] font-bold uppercase tracking-wide text-white">{item.title}</p>
                    <p className="mt-1.5 text-[16px] leading-6 text-neutral-400">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
