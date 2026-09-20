// The real ePurse glyph — same shape as the mobile app's assets/icon.svg,
// simplified for reuse at nav/hero sizes. Previously every placeholder mark
// on this site was a blank tinted square with no connection to the actual
// brand; this is the fix. Keep this in sync if the mobile icon ever changes
// (it lives in the OTHER repo now, praveenverma-hub/epurse, so it can't be
// imported directly — see docs/WEBAPP_UI_INSPIRATION.md's note on the split).
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
      style={glow ? { filter: "drop-shadow(0 0 34px rgba(255, 90, 31, 0.55))" } : undefined}
      aria-hidden
    >
      <defs>
        <linearGradient id="mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF5A1F" />
          <stop offset="100%" stopColor="#FC8019" />
        </linearGradient>
        <linearGradient id="mark-purse" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFE3D1" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" rx="220" fill="url(#mark-bg)" />
      <path
        d="M260 360 Q260 300 320 300 L704 300 Q764 300 764 360 L800 720
           Q800 800 720 800 L304 800 Q224 800 224 720 Z"
        fill="url(#mark-purse)"
      />
      <rect x="450" y="270" width="124" height="60" rx="22" fill="#FF5A1F" />
      <circle cx="512" cy="300" r="14" fill="#FFFFFF" />
      <text
        x="512"
        y="640"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="380"
        fontWeight="900"
        textAnchor="middle"
        fill="#FF5A1F"
        letterSpacing="-12"
      >
        e
      </text>
    </svg>
  );
}
