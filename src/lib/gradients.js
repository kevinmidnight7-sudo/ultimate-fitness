/* The surface recipes a section can sit on.

   The old set was four near-black gradients with lime bleeding into them. The
   rebrand inverts that: bone and cream do the work, sand and a soft ember wash
   break up long runs, and ink is reserved for the one or two moments per page
   that should feel like a change of gear.

   Every recipe reads the tokens in `src/index.css` through `var(--color-…)`,
   so re-skinning the site is a change to that one @theme block.

   Sections take a `surface` prop so a page can rotate between them. Two
   consecutive sections on a page should never share one. Don't invent new
   recipes — add one here if a page genuinely needs it. */

/* The default. Flat bone: most of the site is this. */
export const SURFACE_BONE = "var(--color-bone)";

/* A half-tone lighter, for panels of detail that want to feel lifted. */
export const SURFACE_CREAM =
  "linear-gradient(180deg, var(--color-cream) 0%, var(--color-bone) 100%)";

/* Warmer and heavier — good under grids and tables. */
export const SURFACE_SAND =
  "linear-gradient(180deg, var(--color-bone) 0%, var(--color-sand) 55%, var(--color-sand) 100%)";

/* The lightest possible touch of the accent, for a section that carries an
   idea rather than a list. */
export const SURFACE_EMBER =
  "linear-gradient(170deg, var(--color-ember-tint) 0%, var(--color-cream) 62%, var(--color-bone) 100%)";

/* The contrast section. Text on this must come from the bone-* tokens and the
   accent from ember-light — see the contrast table in src/index.css. Wrap it
   in `on-ink` so focus rings switch to the light variant. */
export const SURFACE_INK =
  "linear-gradient(170deg, var(--color-ink-2) 0%, var(--color-ink) 55%, var(--color-ink) 100%)";
