import SectionLabel from "@/components/shared/SectionLabel";

/* Eyebrow, heading and an optional lead — the opening of nearly every section
   on the site, written once so the spacing and type sizes can't drift apart.

   `tone="ink"` switches the text colours for the dark contrast bands.
   `align="center"` centres the stack for the short statement sections. */
export default function SectionHeading({
  label,
  heading,
  lead,
  tone = "light",
  align = "left",
  className = "",
}) {
  const centred = align === "center";
  const headingColour = tone === "ink" ? "text-bone" : "text-ink";
  const leadColour = tone === "ink" ? "text-bone-70" : "text-ink-70";

  return (
    <div className={`${centred ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {label && (
        <SectionLabel tone={tone} className={centred ? "justify-center" : ""}>
          {label}
        </SectionLabel>
      )}
      {heading && <h2 className={`type-h2 mt-6 ${headingColour}`}>{heading}</h2>}
      {lead && <p className={`type-lead mt-6 ${leadColour}`}>{lead}</p>}
    </div>
  );
}
