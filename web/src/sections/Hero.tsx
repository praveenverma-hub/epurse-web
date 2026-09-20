"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Mark from "@/components/Mark";
import "./Hero.css";

interface Feature {
  label: string;
  angle: number;
  radius: 1 | 2;
  start: number;
}

const FEATURES: Feature[] = [
  { label: "Auto-SMS capture", angle: -100, radius: 1, start: 0.08 },
  { label: "Budgets", angle: -35, radius: 2, start: 0.2 },
  { label: "Goals", angle: 35, radius: 1, start: 0.32 },
  { label: "Split & settle", angle: 100, radius: 2, start: 0.44 },
  { label: "On-device privacy", angle: 165, radius: 1, start: 0.56 },
];

function FeatureNode({ feature, progress }: { feature: Feature; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [feature.start, feature.start + 0.1], [0, 1]);
  const scale = useTransform(progress, [feature.start, feature.start + 0.1], [0.6, 1]);
  const rad = (feature.angle * Math.PI) / 180;
  const distance = feature.radius === 1 ? 150 : 230;
  const x = Math.cos(rad) * distance;
  const y = Math.sin(rad) * distance;

  return (
    <motion.div className="hero__node" style={{ opacity, scale, x, y }}>
      {feature.label}
    </motion.div>
  );
}

export default function Hero() {
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  return (
    <section className="hero" ref={trackRef}>
      <div className="hero__sticky">
        <p className="hero__eyebrow eyebrow">Money, tracked without typing</p>
        <h1 className="hero__headline">
          Your bank SMS,<br />turned into a budget.
        </h1>
        <p className="hero__sub">
          ePurse reads your bank&apos;s transaction SMS on-device and turns it into
          accounts, budgets, goals and split expenses — nothing ever leaves your phone.
        </p>

        <div className="hero__rings">
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
          <div className="hero__center">
            <div className="hero__mark-frame">
              <Mark size={40} />
            </div>
            <div className="hero__center-label">Scan to get notified</div>
          </div>
          {FEATURES.map((f) => (
            <FeatureNode key={f.label} feature={f} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
