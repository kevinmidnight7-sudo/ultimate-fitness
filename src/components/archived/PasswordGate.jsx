/*
 * ARCHIVED — the password gate is no longer used.
 *
 * Removed (Aug 2026) at Kevin's request so the site is publicly accessible.
 * Kept here in case a gated preview is wanted again.
 *
 * Note this was only ever a client-side gate: the password shipped in the
 * JavaScript bundle, so it deterred casual visitors but was not real security.
 * If the site genuinely needs restricting, use hosting-level authentication.
 *
 * To restore: re-add SITE_PASSWORD, import this component, and gate <App/> on
 * an `unlocked` state as before.
 */

import { useState } from "react";

const SITE_PASSWORD = "U00TLHU8MAN";

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const attempt = (e) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === SITE_PASSWORD.toLowerCase()) {
      try { localStorage.setItem("uh_unlocked", "1"); } catch {}
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 520);
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)" }}
    >

      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(132,204,22,0.18) 0%, transparent 68%)",
        }}
      />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative flex w-full max-w-[360px] flex-col items-center text-center">

        {/* Logo */}
        <img
          src="/images/coloured.png"
          alt="Ultimate Human Index"
          className="mb-10 h-20 w-auto object-contain md:h-28"
          style={{
            maxWidth: "320px",
            filter: "drop-shadow(0 2px 18px rgba(255,255,255,0.10))",
          }}
        />

        {/* Headline */}
        <h1
          className="text-metallic uppercase"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 5.2rem)",
            lineHeight: 0.96,
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Coming
          <br />
          Soon
        </h1>

        {/* Slogan */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-8 shrink-0 bg-lime-400/45" />
          <p
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400/70"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Measure. Train. Compete. Evolve.
          </p>
          <div className="h-px w-8 shrink-0 bg-lime-400/45" />
        </div>

        {/* Divider */}
        <div className="my-10 w-full border-t border-white/[0.07]" />

        {/* Label */}
        <p
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-neutral-500"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Enter access code to preview
        </p>

        {/* Form */}
        <form onSubmit={attempt} className={`w-full${shake ? " uh-shake" : ""}`}>
          <label htmlFor="uh-access-code" className="sr-only">Access code</label>
          <input
            id="uh-access-code"
            type="password"
            value={value}
            autoComplete="off"
            placeholder="Access code"
            aria-invalid={error}
            aria-describedby={error ? "uh-access-error" : undefined}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            className={`uh-code-input${error ? " is-error" : ""} w-full bg-white/[0.03] px-5 py-4 text-center text-[16px] font-semibold uppercase tracking-[0.24em] text-white placeholder-neutral-800`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          />
          {error && (
            <p
              id="uh-access-error"
              role="alert"
              className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-red-400/75"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Incorrect access code
            </p>
          )}
          <button
            type="submit"
            className="btn-lime-glow mt-3 w-full bg-lime-400 py-4 text-[15px] font-black uppercase tracking-[0.22em] text-black transition-colors hover:bg-lime-300"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Unlock Preview
          </button>
        </form>
      </div>
    </div>
  );
}
