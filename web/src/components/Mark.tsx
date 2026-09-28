// ePurse purse glyph, using the violet website palette.
interface MarkProps {
  size?: number;
  glow?: boolean;
  className?: string;
}

export default function Mark({ size = 40, glow = false, className = "" }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={className}
      style={glow ? { filter: "drop-shadow(0 0 34px rgba(91, 60, 196, 0.4))" } : undefined}
      aria-hidden
    >
      <defs>
        <linearGradient id="mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B3CC4" />
          <stop offset="100%" stopColor="#7B4DFF" />
        </linearGradient>
        <linearGradient id="mark-purse" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEE7FB" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" rx="220" fill="url(#mark-bg)" />
      <path
        d="M260 360 Q260 300 320 300 L704 300 Q764 300 764 360 L800 720
           Q800 800 720 800 L304 800 Q224 800 224 720 Z"
        fill="url(#mark-purse)"
      />
      <rect x="450" y="270" width="124" height="60" rx="22" fill="#5B3CC4" />
      <circle cx="512" cy="300" r="14" fill="#FFFFFF" />
      <text
        x="512"
        y="640"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="380"
        fontWeight="900"
        textAnchor="middle"
        fill="#5B3CC4"
        letterSpacing="-12"
      >
        e
      </text>
    </svg>
  );
}
