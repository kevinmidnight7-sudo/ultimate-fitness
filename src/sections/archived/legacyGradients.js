/* The four gradient recipes the black-and-lime site ran on.

   They were removed from src/lib/gradients.js in the Sep 2026 rebrand, which
   replaced them with light surfaces. They live on here so the archived
   sections in this folder still compile and render exactly as they did if any
   of them is ever switched back on. Nothing outside this folder should import
   them. */

/* Lime rising out of near-black. The most common band on the old site. */
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
