import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2, MessageCircle, ChevronDown } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { subscriptionTiers } from "@/data/archived/eventContent";
import { REGISTER_URL } from "@/lib/constants";

function TierCard({ tier, index }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal
      delay={index * 0.08}
      className={`group relative flex flex-col bg-[#0d0d0d] p-7 transition-colors ${
        tier.highlighted
          ? "ring-1 ring-lime-400/55 md:-translate-y-2 md:shadow-[0_0_48px_rgba(163,230,53,0.1)]"
          : "hover:bg-[#111]"
      }`}
    >
      {tier.highlighted && (
        <>
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-lime-400 via-lime-400/60 to-transparent" />
          {/* Ribbon badge */}
          <div
            className="absolute right-0 top-0 overflow-hidden"
            style={{ width: 72, height: 72 }}
          >
            <div
              className="absolute flex items-center justify-center bg-lime-400 text-[10px] font-black uppercase tracking-[0.18em] text-black"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                width: 100,
                top: 18,
                right: -22,
                transform: "rotate(45deg)",
                transformOrigin: "center",
              }}
            >
              Popular
            </div>
          </div>
        </>
      )}
      <div
        className={`flex h-11 w-11 items-center justify-center border ${
          tier.highlighted
            ? "border-lime-400/40 bg-lime-400/[0.08]"
            : "border-white/[0.12] bg-white/[0.03]"
        }`}
      >
        <tier.icon
          className={`h-5 w-5 ${tier.highlighted ? "text-lime-400" : "text-neutral-400"}`}
          strokeWidth={1.5}
        />
      </div>
      <h3 className="mt-6 text-xl uppercase tracking-wide text-white">{tier.name}</h3>
      {tier.price && (
        <p
          className={`mt-1.5 text-2xl ${tier.highlighted ? "text-lime-400" : "text-white"}`}
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          {tier.price}
        </p>
      )}
      <p className="mt-2 text-[16px] leading-5 text-neutral-400">{tier.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-lime-400"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {open ? "Hide Details" : "View Details"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3 pb-1">
              {tier.includesNote && (
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {tier.includesNote}
                </p>
              )}
              {tier.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                      tier.highlighted ? "text-lime-400" : "text-neutral-400"
                    }`}
                    strokeWidth={2}
                  />
                  <p className="text-[16px] leading-5 text-neutral-400">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1" />
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 block px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.18em] no-underline transition-colors ${
          tier.highlighted
            ? "btn-lime-glow border border-lime-400 bg-lime-400 text-black hover:bg-lime-300"
            : "border border-white/20 bg-white/[0.03] text-white hover:border-white/40 hover:bg-white/[0.08]"
        }`}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Register Interest
      </a>
    </Reveal>
  );
}

export default function SubscriptionSection() {
  return (
    <section
      id="membership"
      className="relative uh-divide px-6 py-28"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 0%, rgba(163,230,53,0.22) 0%, transparent 62%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(163,230,53,0.13) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 inline-flex items-center gap-2.5 border border-amber-400/15 bg-amber-400/[0.03] px-3.5 py-1.5">
          <AlertTriangle className="h-3 w-3 text-amber-400/80" strokeWidth={1.5} />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-400/80"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Pre-Launch · Details Subject to Change
          </span>
        </div>

        <div className="mb-14 max-w-2xl">
          <SectionLabel>Membership & Coaching Platform</SectionLabel>
          <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
            One Platform.
            <br />
            Every Level of Athlete.
          </h2>
          <p className="mt-5 text-lg leading-7 text-neutral-400">
            An Ultimate Human Index subscription is designed to keep you progressing long
            after race day. Members get ongoing AI-powered coaching, personalised
            training recommendations, performance tracking and recovery insights —
            plus exclusive event discounts, priority race entries and member-only
            challenges. Your Ultimate Human Index evolves with you, giving a clear
            measure of progress across strength, endurance, mobility and overall
            performance.
          </p>
          <p
            className="mt-3 text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            This is your ongoing platform access — separate from event entry.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.05] md:grid-cols-3">
          {subscriptionTiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <div className="mt-px flex flex-wrap items-center justify-between gap-4 bg-[#0a0a0a] p-6">
          <p className="text-[16px] text-neutral-400">
            Questions about subscriptions, scoring or training focus?
          </p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-lime-400/30 bg-lime-400/[0.05] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-lime-400 no-underline transition-colors hover:border-lime-400/55 hover:bg-lime-400/[0.1]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <MessageCircle className="h-3.5 w-3.5" /> Ask a Coach
          </a>
        </div>
      </div>
    </section>
  );
}
