import Image from "next/image";

interface MarkProps {
  size?: number;
  glow?: boolean;
  className?: string;
  variant?: "transparent" | "app";
}

export default function Mark({ size = 40, glow = false, className = "", variant = "app" }: MarkProps) {
  return (
    <Image
      src={variant === "app" ? "/epurse-icon.png" : "/epurse-mark-transparent.svg"}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{
        borderRadius: variant === "app" ? "22%" : 0,
        ...(glow ? { filter: "drop-shadow(0 0 34px rgba(91, 60, 196, 0.4))" } : {}),
      }}
      aria-hidden="true"
    />
  );
}
