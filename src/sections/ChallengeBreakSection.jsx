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

   Contained and centred rather than full-bleed. The frame is 3:2 and she
   stands from 9% to 95% of its height, so the 21:9 band this section used to
   be is arithmetically impossible without cutting her feet off — 1.6:1 is the
   widest shape that keeps her whole. At the full 1,280px content width that
   much sky and river reads as empty; at 1,024 it reads as a photograph. No
   text over it. */
export default function ChallengeBreakSection({ surface = SURFACE_BONE }) {
  /* `alt=""` is what takes it out of the accessibility tree — deliberately not
     `aria-hidden` on the section, which would silently hide anything added
     alongside it later. */
  return (
    <section className="uh-rule px-6 py-20 sm:px-8 sm:py-24" style={{ background: surface }}>
      <div className="mx-auto max-w-5xl">
        <Photograph
          set="uhi-challenges-morning-run"
          widths={[768, 1536]}
          sizes="(min-width: 1072px) 1024px, calc(100vw - 3rem)"
          alt=""
          ratio="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[8/5]"
          position="40% 50%"
          grade="none"
          width={1536}
          height={1024}
        />
      </div>
    </section>
  );
}
