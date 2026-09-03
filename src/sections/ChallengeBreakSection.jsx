import { SURFACE_BONE } from "@/lib/gradients";
import Photograph from "@/components/shared/Photograph";

/* A photograph between "events are one way to test your Index" and the
   description of what a challenge actually involves.

   It is a break rather than an illustration: the two sections either side are
   both explanation, and running them together made the page read as one long
   argument. The subject — someone running alone, early, on an ordinary
   riverside path — is deliberately not a start line or a podium, because the
   point of the page is that events are optional.

   It replaced a dark blue-grey gym photograph from the event-first site, which
   was the last image on any live page still shot in the old key and read as
   another brand next to the campaign set.

   A wide band, at the same 1,280px content width as the For Gyms one so the
   two read as the same device.

   5:3 is as wide as this frame goes. Measured off the original rather than
   guessed: her hair starts at 7% of the height and her trailing shoe ends at
   95%, so she occupies 88% of it and any box wider than 1536/901 = 1.70:1 has
   to eat into her. 16:9 takes the top of her head; 2:1 takes all of it; the
   21:9 band this section used to be is not available from this photograph at
   any anchor. If a true letterbox is wanted here it needs a frame shot for
   one, not a crop of this.

   The vertical anchor is 58%, not the middle, so the 102px the crop costs is
   spent mostly on empty sky and leaves her clear of both edges. No text over
   it. */
export default function ChallengeBreakSection({ surface = SURFACE_BONE }) {
  /* `alt=""` is what takes it out of the accessibility tree — deliberately not
     `aria-hidden` on the section, which would silently hide anything added
     alongside it later. */
  return (
    <section className="uh-rule px-6 py-20 sm:px-8 sm:py-24" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <Photograph
          set="uhi-challenges-morning-run"
          widths={[768, 1536]}
          sizes="(min-width: 1360px) 1280px, calc(100vw - 3rem)"
          alt=""
          ratio="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[5/3]"
          position="46% 58%"
          grade="none"
          width={1536}
          height={1024}
        />
      </div>
    </section>
  );
}
