/* The branded background pattern for page introductions.

   One instrument, drawn seven slightly different ways. The idea is the Index
   itself: a score read off a dial, with a calibrated scale around it. The
   centre of that dial sits off the right edge of the frame, so what a visitor
   sees is a slice of something larger rather than a complete widget — which is
   the difference between "physical capability framework" and "software
   dashboard", and the line this has to stay on the right side of.

   Deliberately absent, because each of them would push it toward a product UI:
   numerals of any kind, labels, legends, a progress arc with a rounded cap,
   anything rectangular enough to read as a button or a card, and any element
   that looks like it reports a real value.

   Everything is inline SVG built from arithmetic — no image, no library, no
   dependency. It is also completely static: there is nothing here for
   `prefers-reduced-motion` to switch off, which is the strongest form of
   honouring it.

   Colour comes only from the tokens. On light grounds the arcs are `ink` at
   6–10% and the markers are `ember`; on ink grounds they invert to `bone` and
   `ember-light`. Nothing is opaque enough to affect the contrast of text in
   front of it — see the measured worst case in the header test. */

/* ── geometry helpers ──────────────────────────────────────────────────── */

/* SVG angles: 0deg points right, 90deg points down. */
const point = (cx, cy, r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
};

const arc = (cx, cy, r, from, to) => {
  const [x0, y0] = point(cx, cy, r, from);
  const [x1, y1] = point(cx, cy, r, to);
  const large = Math.abs(to - from) > 180 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
};

/* The dial. Centre near the right edge of the 600x400 viewBox, so only its
   left-facing arcs enter the frame.

   The radii are deliberately tight. An earlier pass used a much larger dial
   whose arcs were nearly straight by the time they cleared the fade, so all
   that reached the visible band was a couple of faint vertical lines. Keeping
   the instrument small enough to curve inside the band is what makes it read
   as a dial rather than as stray rules. */
const CX = 560;
const CY = 200;
const RADII = [120, 168, 216, 264];
const FROM = 128;
const TO = 232;

/* The calibration scale. Forty-one ticks across the sweep, every fifth one
   long — an engineering scale rather than an evenly-spaced digital one. It is
   what carries the suggestion of a 0-1,000 range without printing a number. */
const TICKS = 41;
const tickAngle = (i) => FROM + ((TO - FROM) * i) / (TICKS - 1);

/* ── variants ──────────────────────────────────────────────────────────────
   One family, seven arrangements. Each varies only rotation, which rings are
   drawn, where the markers sit and where the short ember segment falls. No
   variant introduces a shape the others do not have. */
const VARIANTS = {
  index:      { rotate:  0, rings: [1, 2, 3], dots: [8, 20, 33], segment: [2, 150, 176] },
  framework:  { rotate: -6, rings: [0, 2, 3], dots: [4, 16, 28], segment: [3, 186, 212] },
  improve:    { rotate:  5, rings: [1, 2],    dots: [12, 24, 36], segment: [1, 158, 188] },
  membership: { rotate: -3, rings: [0, 1, 3], dots: [6, 22],      segment: [3, 140, 164] },
  gyms:       { rotate:  8, rings: [1, 3],    dots: [10, 26, 38], segment: [1, 170, 198] },
  challenges: { rotate: -9, rings: [0, 1, 2], dots: [14, 30],     segment: [0, 194, 218] },
  about:      { rotate:  3, rings: [2, 3],    dots: [2, 18, 34],  segment: [2, 138, 160] },
  /* Built and tested for the home hero, and deliberately not used there. The
     hero is nearly three times the height of a page introduction, so even the
     most restrained arrangement resolved to two thin curves and a single dot
     crossing the rule above the eight areas — noise on the one page whose
     strength is its emptiness. Kept because the brief asked for the test, and
     because a future shorter hero could use it. */
  hero:       { rotate:  0, rings: [2, 3],    dots: [20],         segment: null, scale: false },
};

/* Vertical placement is the caller's, not the component's. A page
   introduction is short enough to fill edge to edge; the home hero is nearly
   three times as tall, and stretching the dial over that height scaled it up
   so far that all that reached the frame were two stray curves. The caller
   knows how tall its own section is. */
export default function IndexPattern({ variant = "index", tone = "light", className = "" }) {
  const v = VARIANTS[variant] ?? VARIANTS.index;
  const showScale = v.scale !== false;

  const line = tone === "ink" ? "var(--color-bone)" : "var(--color-ink)";
  const mark = tone === "ink" ? "var(--color-ember-light)" : "var(--color-ember)";
  const id = `uhi-pattern-${variant}-${tone}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 select-none ${className}`}
    >
      <svg
        viewBox="0 0 600 400"
        preserveAspectRatio="xMaxYMid slice"
        className="h-full w-full"
        focusable="false"
        role="presentation"
      >
        <defs>
          {/* Dissolves the whole thing to nothing on its left edge, so it can
              never arrive underneath the headline as a hard shape. */}
          <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="36%" stopColor="#fff" stopOpacity="0" />
            <stop offset="66%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
          <mask id={`${id}-mask`}>
            <rect width="600" height="400" fill={`url(#${id}-fade)`} />
          </mask>
        </defs>

        <g mask={`url(#${id}-mask)`} transform={`rotate(${v.rotate} ${CX} ${CY})`}>
          {/* Concentric arcs — the dial. The only layer that survives to the
              narrowest screens, and then only at a whisper. */}
          {v.rings.map((r) => (
            <path
              key={`ring-${r}`}
              d={arc(CX, CY, RADII[r], FROM, TO)}
              fill="none"
              stroke={line}
              strokeOpacity={r % 2 === 0 ? 0.13 : 0.085}
              strokeWidth={r % 2 === 0 ? 1.5 : 1.1}
            />
          ))}

          {/* The calibration scale, sitting just inside the outermost ring.
              Hidden below `sm`, where it would sit under the lead paragraph. */}
          <g className="hidden sm:inline">
          {showScale &&
            Array.from({ length: TICKS }, (_, i) => {
              const major = i % 5 === 0;
              const a = tickAngle(i);
              const outer = RADII[3] - 11;
              const inner = outer - (major ? 14 : 7);
              const [x0, y0] = point(CX, CY, inner, a);
              const [x1, y1] = point(CX, CY, outer, a);
              return (
                <line
                  key={`tick-${i}`}
                  x1={x0.toFixed(2)} y1={y0.toFixed(2)}
                  x2={x1.toFixed(2)} y2={y1.toFixed(2)}
                  stroke={line}
                  strokeOpacity={major ? 0.22 : 0.12}
                  strokeWidth={major ? 1.5 : 1.1}
                />
              );
            })}
          </g>

          {/* The ember layer — the only saturated thing in the pattern, and so
              the only part that can threaten the contrast of text in front of
              it. Desktop only, where it sits in genuinely empty space. */}
          <g className="hidden lg:inline">
          {/* One short ember segment: a reading taken, not a progress bar. No
              cap, no terminator, no filled track behind it. */}
          {v.segment && (
            <path
              d={arc(CX, CY, RADII[v.segment[0]], v.segment[1], v.segment[2])}
              fill="none"
              stroke={mark}
              strokeOpacity="0.55"
              strokeWidth="3"
            />
          )}

          {/* Measurement points. */}
          {v.dots.map((i) => {
            const a = tickAngle(i);
            const r = RADII[v.rings[Math.min(1, v.rings.length - 1)]];
            const [x, y] = point(CX, CY, r, a);
            return (
              <circle
                key={`dot-${i}`}
                cx={x.toFixed(2)} cy={y.toFixed(2)} r="4"
                fill={mark}
                fillOpacity="0.78"
              />
            );
          })}
          </g>
        </g>
      </svg>
    </div>
  );
}
