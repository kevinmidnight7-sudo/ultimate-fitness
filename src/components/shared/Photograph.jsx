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
   - A restrained warm grade, on by default. The three photographs currently on
     the site are cool blue-grey stock and ungraded they read as borrowed from
     somewhere else, so this pulls the saturation down and warms what is left,
     short of a duotone. It is not there to hide anything — none of the images
     used on the site carry the old lime.

     `grade="none"` turns it off. The replacement set specified in
     IMAGE-GENERATION-BRIEF.md is being shot warm and light to suit the bone
     ground, and warming an already-warm image a second time makes it muddy.
     Those images should come in with `grade="none"`.

   `alt` is required and positional in the signature on purpose: an image that
   cannot describe itself does not belong on the page. Pass `alt=""` only for a
   genuinely decorative one. */
export default function Photograph({
  file,
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
  return (
    <div className={`overflow-hidden bg-sand ${ratio} ${className}`}>
      <img
        src={`/images/marketing/${file}`}
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
    </div>
  );
}
