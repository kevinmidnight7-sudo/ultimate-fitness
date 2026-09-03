/* A photograph from /public/images/marketing.

   Everything the site's images need in one place, so no section has to
   remember it:

   - The box reserves its own space through `aspectRatio` and the intrinsic
     `width`/`height`, so nothing on the page moves when the file arrives.
   - Lazy by default. Every photograph on the site is below the fold; pass
     `priority` if that ever stops being true. `priority` sets BOTH
     `loading="eager"` and `fetchpriority="high"` — eager alone only stops the
     browser deferring the request, it does not stop it queueing the image
     behind everything else, so on its own the prop did not do what its name
     promised.
   - `position` is the crop anchor. These are tall or wide originals being
     shown in a different shape, and the default centre crop puts a head
     off-frame more often than not.
   - `ratio` is Tailwind aspect classes rather than a single value, because a
     shape has to change with the viewport: a 21:9 banner is 160px tall on a
     375px screen, which crops a person down to a torso. Wide images get a
     taller ratio on small screens and open out as there is room.
   - A restrained warm grade, on by default. The three photographs from the
     original event-first site are cool blue-grey stock and ungraded they read
     as borrowed from somewhere else, so this pulls the saturation down and
     warms what is left, short of a duotone. It is not there to hide anything —
     none of the images used on the site carry the old lime.

     `grade="none"` turns it off, and the four campaign photographs all use it:
     they are shot warm and light to suit the bone ground, and warming an
     already-warm image a second time makes it muddy.

   Two ways to name the file:

   - `file` — one fixed JPEG. What the three original photographs use.
   - `set` — a base name with sized renditions beside it, which is what the
     campaign photography ships as. `set="uhi-improve-balance"` with
     `widths={[480, 960]}` resolves to a <picture> offering AVIF and WebP with
     a JPEG fallback, at every width, and the JPEG at the largest width as the
     `src` for anything that understands none of it.

     `sizes` is only worth writing when the widths actually differ in the
     layout; with a single width the element is a plain <img> per format and
     the browser has no choice to make. Note that `sizes` describes the *box*,
     and object-cover can scale the file well past the box width — an image
     cropped hard sideways is better shipped at one honest width than given a
     srcset the browser will resolve against the wrong number.

   `alt` is required and positional in the signature on purpose: an image that
   cannot describe itself does not belong on the page. Pass `alt=""` only for a
   genuinely decorative one. */

const DIR = "/images/marketing/";
const TYPES = { avif: "image/avif", webp: "image/webp" };

export default function Photograph({
  file,
  set,
  widths = [],
  sizes,
  formats = ["avif", "webp"],
  alt,
  ratio = "aspect-[16/9]",
  position = "50% 50%",
  width,
  height,
  priority = false,
  grade = "warm",
  className = "",
  imgClassName = "",
}) {
  const responsive = set && widths.length > 0;
  const largest = responsive ? widths[widths.length - 1] : null;
  const many = widths.length > 1;

  /* One `w` descriptor per rendition when there is a real choice to make;
     otherwise a bare URL, so a single-width set doesn't ask the browser to
     pick from a list of one. */
  const srcSetFor = (ext) =>
    many
      ? widths.map((w) => `${DIR}${set}-${w}.${ext} ${w}w`).join(", ")
      : `${DIR}${set}-${largest}.${ext}`;

  const src = responsive ? `${DIR}${set}-${largest}.jpg` : `${DIR}${file}`;

  const img = (
    <img
      src={src}
      srcSet={responsive && many ? srcSetFor("jpg") : undefined}
      sizes={responsive && many ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`h-full w-full object-cover ${imgClassName}`}
      style={{
        objectPosition: position,
        filter: grade === "warm" ? "saturate(0.74) sepia(0.14) contrast(1.03)" : undefined,
      }}
    />
  );

  return (
    <div className={`overflow-hidden bg-sand ${ratio} ${className}`}>
      {responsive && formats.length > 0 ? (
        <picture className="block h-full w-full">
          {formats.map((ext) => (
            <source key={ext} type={TYPES[ext]} srcSet={srcSetFor(ext)} sizes={many ? sizes : undefined} />
          ))}
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  );
}
