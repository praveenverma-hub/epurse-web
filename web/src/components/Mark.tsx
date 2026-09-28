import Image from "next/image";

interface MarkProps {
  size?: number;
  glow?: boolean;
  className?: string;
}

export default function Mark({ size = 40, glow = false, className = "" }: MarkProps) {
  return (
    <Image
      src="/epurse-icon.png"
      alt=""
      width={size}
      height={size}
      className={className}
      style={{
        borderRadius: "22%",
        ...(glow ? { filter: "drop-shadow(0 0 34px rgba(91, 60, 196, 0.4))" } : {}),
      }}
      aria-hidden="true"
    />
  );
}
