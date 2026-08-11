import { SITE_VERSION } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="uh-divide bg-[#050505] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <img
          src="/images/coloured.png"
          alt="Ultimate Human Index"
          className="h-10 w-auto object-contain"
          style={{ maxWidth: "180px", opacity: 0.32 }}
        />
        <p
          className="text-[11px] font-bold uppercase tracking-[0.42em] text-neutral-500"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Measure. Train. Compete. Evolve.
        </p>
        <p
          className="text-[14px] text-neutral-500"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          © 2026 Ultimate Human Index · theultimatehuman.fitness
        </p>
      </div>
      <div className="mx-auto mt-6 max-w-7xl text-center">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-800"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {SITE_VERSION}
        </span>
      </div>
    </footer>
  );
}
