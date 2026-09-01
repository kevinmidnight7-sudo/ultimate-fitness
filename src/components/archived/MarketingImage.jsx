import { useRef, useEffect, useState } from "react";

/* Archived with the event-first site (Sep 2026). Only the sections in
   src/sections/archived/ use it.

   It stays out of the live site for two reasons: it is styled in the old lime,
   and its fallback renders a visible "Image Placeholder" block naming a missing
   file — internal scaffolding a visitor should never see. If image support is
   wanted back, restyle it against the tokens in src/index.css and make the
   fallback render nothing rather than a labelled box. */

/* Placeholder block for images not yet sourced — dashed border, labelled */
export function ImageBlock({ id, aspectRatio = "16/9", searchTerms, treatment, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        aspectRatio,
        border: "1.5px dashed rgba(163,230,53,0.2)",
        background: "rgba(163,230,53,0.025)",
      }}
    >
      <div className="px-6 text-center">
        <p
          className="mb-1 text-[10px] font-bold uppercase tracking-[0.4em] text-lime-400/40"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Image Placeholder
        </p>
        <p className="mb-2 text-[16px] font-bold uppercase tracking-wide text-white/40">
          {id}
        </p>
        {searchTerms && (
          <p className="mb-1 text-[13px] italic text-neutral-700">"{searchTerms}"</p>
        )}
        {treatment && (
          <p className="text-[10px] text-neutral-800">Treatment: {treatment}</p>
        )}
        <p
          className="mt-3 text-[10px] text-neutral-800"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          → /images/marketing/{id}
        </p>
      </div>
    </div>
  );
}

/* Shows the real marketing photo once it exists at /images/marketing/<file>,
   otherwise falls back to the labelled ImageBlock placeholder. Drop a file in
   and it appears automatically — no code change needed.

   The photo renders in full colour; moving the cursor over it reveals a
   brighter, more vibrant glow in a soft spotlight that tracks the mouse. */
export function MarketingImage({
  file,
  aspectRatio,
  searchTerms,
  treatment,
  className = "",
  fill = false,
  imgClassName = "",
  opacity,
  overlay,
  onResolved,
}) {
  const [failed, setFailed] = useState(false);
  const wrapRef = useRef(null);
  const colorRef = useRef(null);

  /* Track the cursor at the window level so the colour spotlight works even
     when other layers (hero text/CTAs) sit above the image and swallow events. */
  useEffect(() => {
    const onMove = (e) => {
      const wrap = wrapRef.current;
      const color = colorRef.current;
      if (!wrap || !color) return;
      const r = wrap.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (inside) {
        color.style.setProperty("--mx", `${e.clientX - r.left}px`);
        color.style.setProperty("--my", `${e.clientY - r.top}px`);
        color.style.opacity = "1";
      } else {
        color.style.opacity = "0";
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [failed]);

  if (failed) {
    return (
      <ImageBlock
        id={file}
        aspectRatio={aspectRatio}
        searchTerms={searchTerms}
        treatment={treatment}
        className={className}
      />
    );
  }

  const src = `/images/marketing/${file}`;
  const spotlight =
    "radial-gradient(circle 150px at var(--mx, -999px) var(--my, -999px), #000 0%, #000 42%, transparent 78%)";

  const layers = (
    <>
      {/* full-colour base */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        onLoad={() => onResolved && onResolved(true)}
        onError={() => {
          setFailed(true);
          onResolved && onResolved(false);
        }}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        style={{ filter: "saturate(1.05) contrast(1.02)" }}
      />
      {/* brighter, more vibrant layer revealed in a spotlight under the cursor */}
      <img
        ref={colorRef}
        src={src}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        style={{
          opacity: 0,
          transition: "opacity 0.25s ease-out",
          filter: "saturate(1.7) brightness(1.28) contrast(1.08)",
          WebkitMaskImage: spotlight,
          maskImage: spotlight,
        }}
      />
      {overlay}
    </>
  );

  return (
    <div
      ref={wrapRef}
      className={
        fill
          ? "uh-img-glow pointer-events-auto absolute inset-0 h-full w-full overflow-hidden"
          : `uh-img-glow pointer-events-auto relative overflow-hidden ${className}`
      }
      style={{ aspectRatio: fill ? undefined : aspectRatio, opacity }}
    >
      {layers}
    </div>
  );
}
