/* The UHI mark, recoloured to the rebrand palette.

   `logo.png` is a white-on-transparent lockup and `coloured.png` is the same
   artwork in the old lime — neither works on bone, and lime is out of the
   design entirely. Rather than ship a redrawn logo we don't have sign-off on,
   this uses the white PNG's alpha channel as a CSS mask and paints it with a
   token colour, so the real artwork survives the rebrand.

   When Ken supplies brand assets, replace this component's mask with a plain
   <img> and nothing else needs to change. */
export default function SiteLogo({ tone = "ink", className = "", style }) {
  const colour = tone === "bone" ? "var(--color-bone)" : "var(--color-ink)";
  const mask = {
    WebkitMaskImage: "url(/images/logo.png)",
    maskImage: "url(/images/logo.png)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "left center",
    maskPosition: "left center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    backgroundColor: colour,
    aspectRatio: "1205 / 508",
  };

  return (
    <span
      role="img"
      aria-label="Ultimate Human Index"
      className={`block ${className}`}
      style={{ ...mask, ...style }}
    />
  );
}
