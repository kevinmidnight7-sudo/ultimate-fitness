import { Mail } from "lucide-react";

import SectionLabel from "@/components/shared/SectionLabel";
import { RegisterButton } from "@/components/shared/RegisterButton";

export default function SignupSection() {
  return (
    <section
      id="signup"
      className="uh-divide relative px-6 py-24"
      style={{ background: "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)" }}
    >
      {/* Branded UH arena-floor asset, low opacity behind the form */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/images/uh-hero-arena-floor-no-text-2400x1400.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-[0.28]"
          loading="lazy"
        />
      </div>
      {/* Section ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(132,204,22,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="relative overflow-hidden border border-white/[0.09] bg-[#070707] p-10 text-center md:p-16">

          {/* Corner accent marks */}
          <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-lime-400/40" />
          <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-lime-400/40" />
          <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-lime-400/22" />
          <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-lime-400/22" />

          {/* Top glow + accent line */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(132,204,22,0.20) 0%, transparent 52%)",
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/55 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

          <div className="relative">
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center border border-lime-400/30 bg-lime-400/[0.06]">
                <Mail className="h-6 w-6 text-lime-400" strokeWidth={1.5} />
              </div>
            </div>

            <SectionLabel>Founding Athlete Registration</SectionLabel>

            <h2
              className="text-metallic uppercase tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", lineHeight: 1.06, fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
            >
              Become One of the
              <br />
              First Ultimate Humans
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-7 text-neutral-400">
              Get early access to launch events, training plans, founding athlete pricing, rankings
              and exclusive first-release places.
            </p>

            {/* Scarcity line */}
            <div className="mt-5 flex items-center justify-center gap-4">
              <div className="h-px w-10 shrink-0 bg-lime-400/35" />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.26em] text-lime-400/65"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Limited founding places — pricing increases at launch
              </p>
              <div className="h-px w-10 shrink-0 bg-lime-400/35" />
            </div>

            {/* On-site form parked for now — registrations go through the
                Google Form instead. WaitlistForm is kept below, working and
                tested, ready to switch back on by restoring this line. */}
            <div className="mt-9 flex justify-center">
              <RegisterButton className="w-full max-w-xl" />
            </div>

            <p className="mt-6 text-center text-[16px] text-neutral-400">
              Bringing a gym or team?{" "}
              <a
                href="mailto:hello@theultimatehuman.fitness"
                className="font-bold text-lime-400 underline-offset-4 hover:underline"
              >
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
