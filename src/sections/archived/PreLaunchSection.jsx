import { AlertTriangle } from "lucide-react";

import { workToDo } from "@/data/archived/eventContent";

export default function PreLaunchSection() {
  return (
    <section
      className="uh-divide px-6 py-16"
      style={{ background: "linear-gradient(180deg, #09090a 0%, #0a0a0a 100%)" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-3 border border-amber-400/22 bg-amber-400/[0.04] px-4 py-2.5">
          <AlertTriangle className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Pre-Launch Notice
          </span>
        </div>
        <h2 className="text-3xl uppercase tracking-tight text-white md:text-4xl">
          What Is Still Being Finalised?
        </h2>

        <div className="mt-8 grid gap-px bg-white/[0.05] md:grid-cols-2">
          {workToDo.map((item) => (
            <div key={item} className="flex gap-4 bg-[#0d0d0d] p-6 transition-colors hover:bg-[#111]">
              <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center border border-lime-400/30">
                <div className="h-1.5 w-1.5 bg-lime-400" />
              </div>
              <p
                className="text-[16px] leading-6 text-neutral-300"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
