import type { ReactNode } from "react";
import "./PhoneMockup.css";

interface PhoneMockupProps {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

// Illustrative phone frame — placeholder for real sanitized device screenshots
// (doc §11.2 flags those as a separate asset-capture task, not yet done).
export default function PhoneMockup({ children, tone = "light", className = "" }: PhoneMockupProps) {
  return (
    <div className={`phone-mockup phone-mockup--${tone} ${className}`}>
      <div className="phone-mockup__notch" />
      <div className="phone-mockup__screen">{children}</div>
    </div>
  );
}
