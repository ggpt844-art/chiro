type Props = {
  title: string;
  year: string;
  region: string;
  category: string;
  variant?: "gold" | "red" | "sage";
};

const palettes = {
  gold: { ring: "#f2a93b", bg: "#fff8ec", ink: "#7a4a00", accent: "#b06a00" },
  red: { ring: "#b73026", bg: "#fff1f0", ink: "#8e1f17", accent: "#b73026" },
  sage: { ring: "#7d9070", bg: "#f1f4ed", ink: "#3f5236", accent: "#5a7050" },
};

/**
 * Original ribbon-seal award badge. Describes the award factually without
 * reproducing any official trademarked badge artwork.
 */
export default function AwardBadge({
  title,
  year,
  region,
  category,
  variant = "gold",
}: Props) {
  const p = palettes[variant];
  return (
    <div
      className="award-shimmer group relative shrink-0 w-[160px] h-[180px] grid place-items-center rounded-2xl ring-1 ring-black/5 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
      role="img"
      aria-label={`${title} ${year} — ${region} — ${category}`}
    >
      <div
        className="relative w-[120px] h-[140px] grid place-items-center"
        style={{ color: p.accent }}
      >
        {/* Outer scalloped seal */}
        <svg
          viewBox="0 0 120 140"
          className="absolute inset-0"
          aria-hidden
          fill="none"
        >
          <defs>
            <radialGradient id={`g-${variant}`} cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor={p.bg} />
              <stop offset="100%" stopColor="white" />
            </radialGradient>
          </defs>
          {/* scalloped circle (16 points) */}
          <g transform="translate(60 60)">
            {Array.from({ length: 32 }).map((_, i) => {
              const a = (i / 32) * Math.PI * 2;
              const r = i % 2 === 0 ? 44 : 38;
              const x = Math.cos(a) * r;
              const y = Math.sin(a) * r;
              return i === 0 ? (
                <path
                  key={i}
                  d={`M${x} ${y} ${Array.from({ length: 32 })
                    .map((__, j) => {
                      const aa = ((j + 1) / 32) * Math.PI * 2;
                      const rr = (j + 1) % 2 === 0 ? 44 : 38;
                      return `L${Math.cos(aa) * rr} ${Math.sin(aa) * rr}`;
                    })
                    .join(" ")} Z`}
                  fill={`url(#g-${variant})`}
                  stroke={p.ring}
                  strokeWidth="1.5"
                />
              ) : null;
            })}
            <circle r="32" fill="white" stroke={p.ring} strokeWidth="1" />
          </g>
          {/* Two ribbon tails */}
          <path
            d="M44 102 L36 138 L52 128 L60 138 L60 110 Z"
            fill={p.ring}
          />
          <path
            d="M76 102 L84 138 L68 128 L60 138 L60 110 Z"
            fill={p.accent}
          />
        </svg>
        {/* Centered text */}
        <div className="relative z-10 text-center px-2 leading-tight">
          <div
            className="text-[7.5px] tracking-[0.18em] font-bold uppercase"
            style={{ color: p.ink }}
          >
            {category}
          </div>
          <div
            className="text-[12.5px] font-black uppercase mt-1 leading-tight"
            style={{ color: p.accent }}
          >
            {title}
          </div>
          <div
            className="mt-1.5 text-[10px] font-bold tracking-wider"
            style={{ color: p.ink }}
          >
            {year}
          </div>
          <div
            className="text-[7.5px] font-semibold tracking-wider uppercase opacity-80"
            style={{ color: p.ink }}
          >
            {region}
          </div>
        </div>
      </div>
    </div>
  );
}
