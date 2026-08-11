/* The three section gradient recipes already in use across the site, named so
   pages can rotate between them.

   These were tuned when the site was one long document, where a section only
   ever had to differ from its two neighbours in the scroll. Now that sections
   are grouped onto short pages, two that never used to meet can end up stacked.
   Pages pass one of these to a section to break a repeat — no new gradients. */

/* Lime rising out of near-black. The most common band on the site. */
export const GRADIENT_LIME =
  "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0a0c10 75%, #0a0a0a 100%)";

/* Cold blue into a warm ember. Used for the more editorial sections. */
export const GRADIENT_EMBER =
  "linear-gradient(195deg, #12243a 0%, #0d0f13 42%, #2b1a0a 76%, #101010 100%)";

/* Lime opening that resolves into blue rather than black. */
export const GRADIENT_TIDE =
  "linear-gradient(165deg, #1a2d0a 0%, #08090a 40%, #0d1d30 75%, #0a0a0a 100%)";

/* Near-flat, for quiet closing bands. */
export const GRADIENT_FLAT = "linear-gradient(180deg, #09090a 0%, #0a0a0a 100%)";
