import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, ChevronDown } from "lucide-react";

import SectionLabel from "@/components/shared/SectionLabel";

function FounderCard({ photo, ratio, name, role, quote }) {
  const [open, setOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(!photo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="lime-glow-hover group relative overflow-hidden bg-[#0d0d0d] transition-colors hover:bg-[#0f0f0f]"
    >
      <div className="absolute left-0 top-0 z-10 h-px w-full bg-gradient-to-r from-lime-400/40 via-white/[0.08] to-transparent" />
      <div className="uh-img-glow-target relative overflow-hidden bg-[#050505]" style={{ aspectRatio: ratio }}>
        {photoFailed ? (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center"
            style={{ border: "1.5px dashed rgba(163,230,53,0.18)", background: "rgba(163,230,53,0.025)" }}
          >
            <UserCheck className="h-7 w-7 text-lime-400/35" strokeWidth={1.5} />
            <p
              className="text-[10px] font-bold uppercase tracking-[0.24em] text-lime-400/40"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Photo to follow
            </p>
          </div>
        ) : (
          <img
            src={photo}
            alt={name}
            onError={() => setPhotoFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <h3 className="text-lg uppercase tracking-wide text-white">{name}</h3>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lime-400/30 text-lime-400 transition-colors group-hover:border-lime-400/60">
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="flex items-center gap-2">
                <div className="h-px w-5 shrink-0 bg-lime-400/50" />
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-lime-400/75"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {role}
                </p>
              </div>
              <p className="mt-4 text-base leading-7 text-neutral-400">"{quote}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FoundersSection() {
  return (
    <section
      className="relative uh-divide px-6 py-24"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 12% 0%, rgba(163,230,53,0.28) 0%, transparent 62%), radial-gradient(ellipse 55% 45% at 100% 100%, rgba(163,230,53,0.1) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionLabel>The People Behind The Ultimate Human Index</SectionLabel>
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            Built by People Obsessed
            <br />
            with Human Performance.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-neutral-400">
            The Ultimate Human Index combines elite coaching, combat sport experience, movement science
            and a slightly unhealthy enthusiasm for fitness racing.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] md:grid-cols-2 lg:grid-cols-5">
          <FounderCard
            photo="/images/founders/andie.png"
            ratio="1 / 1"
            name="Andie Stoneham"
            role="Founder · Performance Coach · Programme Designer"
            quote="Most fitness events reward one dominant attribute. We wanted to build something that rewards adaptability, composure and complete human capability."
          />
          <FounderCard
            photo="/images/founders/laura.png"
            ratio="1 / 1"
            name="Laura Hathaway"
            role="Performance Coach · Qualified Osteopath"
            quote="Real performance is not just strength or endurance. It is how efficiently and intelligently your body moves under pressure and fatigue."
          />
          <FounderCard
            photo="/images/founders/john.png"
            ratio="1 / 1"
            name="John 'The Hitman' Hathaway"
            role="Champion UFC Fighter · Coach"
            quote="The people who stay calm, adaptable and explosive when tired are usually the hardest people to beat. That is what this competition is designed to expose."
          />
          <FounderCard
            photo="/images/founders/ken.png"
            ratio="1 / 1"
            name="Ken Brotherston"
            role="Founder · Entrepreneur · Fitness Race Enthusiast"
            quote="I am probably old enough to know better, but not quite sensible enough to stop chasing the idea that becoming fitter, stronger and more adaptable makes every part of life better."
          />
          {/* Falls back to a 'photo to follow' placeholder until the file exists */}
          <FounderCard
            photo="/images/founders/camilla.png"
            ratio="1 / 1"
            name="Dr. Camilla Drew"
            role="Event Adviser · Capabilities Adviser · Fitness Enthusiast"
            quote="Fitness and good-quality, all-round movement are key to a happier and more productive life, regardless of how old you actually are."
          />
        </div>
      </div>
    </section>
  );
}
