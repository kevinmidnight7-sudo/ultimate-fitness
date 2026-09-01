/* A photograph from /public/images/marketing.

   Everything the site's images need in one place, so no section has to
   remember it:

   - The box reserves its own space through `aspectRatio` and the intrinsic
     `width`/`height`, so nothing on the page moves when the file arrives.
   - Lazy by default. Every photograph on the site is below the fold; pass
     `priority` if that ever stops being true.
   - `position` is the crop anchor. These are tall or wide originals being
     shown in a different shape, and the default centre crop puts a head
     off-frame more often than not.
   - `ratio` is Tailwind aspect classes rather than a single value, because a
     shape has to change with the viewport: a 21:9 banner is 160px tall on a
     375px screen, which crops a person down to a torso. Wide images get a
     taller ratio on small screens and open out as there is room.
   - A restrained warm grade. The photographs are cool blue-grey and the site
     is warm bone; ungraded they read as borrowed from somewhere else. This
     pulls the saturation down and warms what is left, without going so far as
     a duotone. It is not there to hide anything — none of the images used on
     the site carry the old lime.

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
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        style={{
          objectPosition: position,
          filter: "saturate(0.74) sepia(0.14) contrast(1.03)",
        }}
      />
    </div>
  );
}
