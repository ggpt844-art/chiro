/**
 * Plain, large-label spine diagram.
 * Designed for an audience that includes older patients:
 *  - big sans-serif labels
 *  - high contrast
 *  - no fiddly anatomical detail
 *  - decorative only (semantic title + role="img")
 */

type Spot = {
  y: number;
  side: "left" | "right";
  label: string;
  sub: string;
};

const spots: Spot[] = [
  { y: 70, side: "right", label: "Neck", sub: "Headaches, tension" },
  { y: 200, side: "left", label: "Upper back", sub: "Posture, desk pain" },
  { y: 320, side: "right", label: "Lower back", sub: "Sciatica, disc pain" },
  { y: 430, side: "left", label: "Hips", sub: "Mobility, alignment" },
];

export default function SpineDiagram({ className = "" }: { className?: string }) {
  // 12 vertebra dots distributed along the spine path
  const dots = Array.from({ length: 14 }).map((_, i) => {
    const t = i / 13;
    const y = 40 + t * 460;
    // subtle S-curve along the centerline
    const x = 300 + Math.sin(t * Math.PI * 1.6 - 0.4) * 12;
    return { x, y };
  });

  return (
    <svg
      viewBox="0 0 600 540"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-labelledby="spine-title spine-desc"
    >
      <title id="spine-title">
        Areas of the body Powerflow Chiropractic helps with
      </title>
      <desc id="spine-desc">
        A simple line drawing of a spine with four labels: neck, upper back,
        lower back, and hips.
      </desc>

      {/* Spine */}
      <path
        d="M300 30 C 280 130, 320 220, 300 310 C 280 380, 318 450, 300 510"
        stroke="#b73026"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Vertebra dots */}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r="9"
          fill="#fdfaf4"
          stroke="#b73026"
          strokeWidth="2.5"
        />
      ))}

      {/* Labels */}
      {spots.map((s) => {
        const startX = s.side === "right" ? 320 : 280;
        const endX = s.side === "right" ? 460 : 140;
        const textX = s.side === "right" ? endX + 8 : endX - 8;
        const anchor = s.side === "right" ? "start" : "end";
        return (
          <g key={s.label}>
            <line
              x1={startX}
              y1={s.y}
              x2={endX}
              y2={s.y}
              stroke="#1a1a1a"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle cx={endX} cy={s.y} r="3" fill="#b73026" />
            <text
              x={textX}
              y={s.y - 4}
              textAnchor={anchor}
              fill="#1a1a1a"
              fontSize="22"
              fontWeight={800}
              fontFamily="var(--font-fraunces), Georgia, serif"
            >
              {s.label}
            </text>
            <text
              x={textX}
              y={s.y + 18}
              textAnchor={anchor}
              fill="#2c2c2c"
              fontSize="13"
              fontWeight={500}
            >
              {s.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
