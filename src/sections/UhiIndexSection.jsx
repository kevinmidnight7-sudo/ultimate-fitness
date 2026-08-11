import { motion } from "framer-motion";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { uhciPrinciples } from "@/data/content";

export default function UhiIndexSection() {
  return (
    <section
      id="uhci"
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0d1d30 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 12% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel>Ultimate Human Index™ (UHI)</SectionLabel>
            <Reveal as="h2" delay={0.08} className="text-4xl uppercase tracking-tight text-white md:text-5xl">
              A New Standard for
              <br />
              Human Capability.
            </Reveal>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
              Rather than simply measuring how quickly an athlete finishes a race, the{" "}
              <span className="font-bold text-white">UHI</span> provides an objective assessment
              of overall human capability. It is designed to measure not only performance, but how
              efficiently and consistently that performance is achieved.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400">
              Unlike traditional race results, which only recognise finishing position, the UHI
              rewards complete human performance by combining physical capability with movement
              quality and technical execution. It provides athletes with a meaningful benchmark
              that evolves as they train, improve and age.
            </p>

            {/* 0–1000 scale callout */}
            <div className="mt-8 flex items-center gap-5 border border-lime-400/25 bg-lime-400/[0.05] px-6 py-5">
              <p
                className="shrink-0 text-3xl text-lime-400 md:text-4xl"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
              >
                0–1000
              </p>
              <p className="text-[16px] leading-6 text-neutral-300">
                The Index is calculated on a scale of 0–1000, creating a lifelong benchmark that
                athletes can improve over time — regardless of age or competitive level.
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-[16px] leading-6 text-neutral-400">
              As UHI evolves, the Ultimate Human Index will be supported by advanced AI movement
              analysis and scientifically validated performance standards. This will enable the
              Index to assess not only whether an athlete completed each capability, but how
              effectively and consistently it was performed.
            </p>
          </div>

          {/* Design principles */}
          <div>
            <p
              className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              The UHI has been designed to be
            </p>
            <div className="flex flex-col">
              {uhciPrinciples.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-white/[0.07] py-4"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-lime-400" />
                    <div>
                      <p className="text-[16px] font-bold uppercase tracking-wide text-white">
                        {p.title}
                      </p>
                      <p className="mt-1 text-[16px] leading-6 text-neutral-400">{p.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
