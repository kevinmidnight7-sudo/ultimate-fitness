import { Trophy } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { categories } from "@/data/content";

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 90% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionLabel>Ways to Compete</SectionLabel>
          <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Go Solo, Pair Up
            <br />
            or Bring a Team.
          </Reveal>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
            The Ultimate Human Index is designed for serious competitors, first-time challengers,
            gym communities and workplace teams.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((label) => (
            <div
              key={label}
              className="lime-glow-hover group flex items-center gap-5 bg-[#0d0d0d] p-7 transition-colors hover:bg-[#111]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-lime-400/20 bg-lime-400/[0.04] transition-all group-hover:border-lime-400/50 group-hover:bg-lime-400/[0.10]">
                <Trophy className="h-4 w-4 text-lime-400" strokeWidth={1.5} />
              </div>
              <p
                className="text-[16px] font-bold uppercase tracking-[0.18em] text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
