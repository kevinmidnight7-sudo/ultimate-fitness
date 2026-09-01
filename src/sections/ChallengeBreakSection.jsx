import Photograph from "@/components/shared/Photograph";

/* A full-bleed photograph between "events are one way to test your Index" and
   the description of what a challenge actually involves.

   It is a break rather than an illustration: the two sections either side are
   both explanation, and running them together made the page read as one long
   argument. The subject — a woman recovering between efforts, in a gym, on her
   own — is deliberately not a start line or a podium, because the point of the
   page is that events are optional.

   Full-bleed, so it reads as a breath in the page rather than as a card. No
   text over it. */
export default function ChallengeBreakSection() {
  /* `alt=""` is what takes it out of the accessibility tree — deliberately not
     `aria-hidden` on the section, which would silently hide anything added
     alongside it later. */
  return (
    <section className="uh-rule">
      <Photograph
        file="challenge-fatigue-moment.jpg"
        alt=""
        ratio="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
        position="66% 40%"
        width={1600}
        height={890}
        className="max-h-[62vh] w-full"
      />
    </section>
  );
}
