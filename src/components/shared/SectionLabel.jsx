import Reveal from "@/components/motion/Reveal";

export default function SectionLabel({ children }) {
  return (
    <Reveal className="mb-5 flex items-center gap-3">
      <div className="h-px w-8 shrink-0 bg-lime-400" />
      <p
        className="text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {children}
      </p>
    </Reveal>
  );
}
