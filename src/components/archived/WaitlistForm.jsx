/*
 * ARCHIVED — not currently rendered.
 *
 * The on-site waitlist form. Parked (Aug 2026) in favour of sending people to
 * the Google Form; every CTA on the site now points at REGISTER_URL.
 *
 * This is complete and was verified end-to-end: validation, loading/success/
 * error states, and a real submission POSTing JSON to an external form service
 * (Formspree/Web3Forms/Getform/Basin are all compatible).
 *
 * To switch it back on:
 *   1. set WAITLIST_ENDPOINT in App.jsx to your form service URL
 *   2. import this component and render <WaitlistForm /> in the signup section
 */

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const WAITLIST_ENDPOINT = "";
const WAITLIST_EMAIL = "hello@theultimatehuman.fitness";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Athlete");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const inputClass =
    "w-full border border-white/[0.12] bg-white/[0.03] px-4 py-3 text-[16px] text-white placeholder-neutral-600 outline-none transition-colors focus:border-lime-400/60";
  const labelClass =
    "mb-1.5 block text-[12px] font-bold uppercase tracking-[0.16em] text-neutral-400";

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return setError("Please enter a valid email address.");
    if (!consent) return setError("Please agree to be contacted about the launch.");
    setError("");
    setStatus("loading");
    const payload = {
      name: name.trim(),
      email: email.trim(),
      interest,
      _subject: `UHI waitlist — ${name.trim()} (${interest})`,
    };
    try {
      if (WAITLIST_ENDPOINT) {
        const res = await fetch(WAITLIST_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          // Surface the service's own message so misconfiguration is obvious
          const detail = await res.text().catch(() => "");
          throw new Error(detail || `request failed (${res.status})`);
        }
      } else {
        const subject = encodeURIComponent("Founding Athlete Waitlist");
        const body = encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\nInterest: ${payload.interest}`
        );
        window.location.href = `mailto:${WAITLIST_EMAIL}?subject=${subject}&body=${body}`;
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="mx-auto mt-9 max-w-md border border-lime-400/30 bg-lime-400/[0.05] p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <img
          src="/images/coloured.png"
          alt="Ultimate Human Index"
          className="mx-auto h-11 w-auto object-contain"
        />
        <p className="mt-5 text-lg text-white">You're on the list.</p>
        <p className="mt-2 text-[16px] leading-6 text-neutral-400">
          We'll be in touch with founding-athlete access before launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="mx-auto mt-9 max-w-md text-left">
      <div className="grid gap-4">
        <div>
          <label htmlFor="wl-name" className={labelClass}>Name</label>
          <input
            id="wl-name"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="wl-email" className={labelClass}>Email</label>
          <input
            id="wl-email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="wl-interest" className={labelClass}>I'm interested as</label>
          <select
            id="wl-interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className={inputClass}
          >
            <option>Athlete</option>
            <option>Gym</option>
            <option>Corporate Team</option>
          </select>
        </div>
        <label className="flex cursor-pointer items-start gap-3 text-left">
          <input
            type="checkbox"
            checked={consent}
            required
            aria-required="true"
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-lime-400"
          />
          <span className="text-[16px] leading-5 text-neutral-400">
            I agree to be contacted about the Ultimate Human Index launch. We'll only use your
            details for this and you can unsubscribe anytime.
          </span>
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-3 text-[16px] text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-lime-glow mt-6 flex w-full items-center justify-center bg-lime-400 px-8 py-4 text-[16px] font-black uppercase tracking-[0.18em] text-black transition-colors hover:bg-lime-300 disabled:opacity-60"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {status === "loading" ? "Joining…" : "Join the Founding Athlete Waitlist"}
        {status !== "loading" && <ArrowRight className="ml-2 h-4 w-4" />}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-3 text-center text-[16px] text-red-400">
          Something went wrong. Please try again, or email {WAITLIST_EMAIL}.
        </p>
      )}
      <p className="mt-3 text-center text-[13px] text-neutral-400">No spam — just launch updates.</p>
    </form>
  );
}
