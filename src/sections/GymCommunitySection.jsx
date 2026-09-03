import { SURFACE_BONE } from "@/lib/gradients";
import Photograph from "@/components/shared/Photograph";

/* A wide photographic band between the partner-gym pitch and the list of what
   members would be able to do.

   Two long blocks of prose either side of it, and the page needed a breath
   between them. It is the widest photograph on the site — a whole room rather
   than one person — because this is the only page addressed to somebody who
   runs a gym, and a group mid-session is what they are actually being asked to
   picture.

   Contained rather than full-bleed: the Challenges page already has the
   full-bleed break, and repeating that treatment would make the two pages read
   as the same page. There is no text over it. */
export default function GymCommunitySection({ surface = SURFACE_BONE }) {
  /* `alt=""` takes it out of the accessibility tree — the section beneath says
     everything this is illustrating, and a description here would only be read
     out twice. Deliberately not `aria-hidden` on the section, which would
     silently hide anything added alongside it later. */
  return (
    <section className="uh-rule px-6 py-20 sm:px-8 sm:py-24" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        {/* 2.1:1 against a 2.116:1 original is very nearly no crop at all; the
            16:9 below sm trims 8% from each side. The three of them sit between
            17% and 86% of the frame, so all three survive both. Any taller a
            shape on small screens would start cutting the outer two off. */}
        <Photograph
          set="uhi-for-gyms-community"
          widths={[760, 1824]}
          sizes="(min-width: 1360px) 1280px, calc(100vw - 3rem)"
          alt=""
          ratio="aspect-[16/9] sm:aspect-[21/10]"
          grade="none"
          width={1824}
          height={862}
        />
      </div>
    </section>
  );
}
