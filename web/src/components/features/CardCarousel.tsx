"use client";

import { useEffect, useState, type CSSProperties } from "react";
import SectionHeading from "./SectionHeading";
import type { FeatureItem, SectionProps } from "./types";

const HOLD_DELAY = 1900;
const ROTATION_DURATION = 1250;
const CARD_POSITIONS = [-3, -2, -1, 0, 1, 2] as const;
const FIRST_VISIBLE_POSITION = -2;
const LAST_VISIBLE_POSITION = 2;

export default function CardCarousel({ items, ...heading }: SectionProps & { items: FeatureItem[] }) {
  const [active, setActive] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (items.length < 2) return;
    let holdTimer: number;
    let rotationTimer: number;
    let stopped = false;

    const queueRotation = () => {
      holdTimer = window.setTimeout(() => {
        if (stopped) return;
        setIsRotating(true);
        rotationTimer = window.setTimeout(() => {
          if (stopped) return;
          setActive(index => (index - 1 + items.length) % items.length);
          setIsRotating(false);
          queueRotation();
        }, ROTATION_DURATION);
      }, HOLD_DELAY);
    };

    queueRotation();
    return () => {
      stopped = true;
      window.clearTimeout(holdTimer);
      window.clearTimeout(rotationTimer);
    };
  }, [items.length]);

  if (!items.length) return null;
  return (
    <section
      id={heading.id}
      className="feature-section carousel"
      aria-labelledby={`${heading.id}-title`}
      aria-roledescription="carousel"
    >
      <div className="container"><SectionHeading {...heading} /></div>
      <div
        id={`${heading.id}-track`}
        className={`carousel__stage${isRotating ? " is-rotating" : ""}`}
        role="group"
        aria-label="Auto-playing feature carousel"
      >
        {CARD_POSITIONS.slice(0, Math.min(CARD_POSITIONS.length, items.length)).map(offset => {
          const index = (active + offset + items.length) % items.length;
          const item = items[index];
          const distance = Math.abs(offset);
          const scale = Math.max(0.62, 1 - distance * 0.16);
          const lift = distance * 34;
          const opacity = offset < FIRST_VISIBLE_POSITION ? 0 : 1;
          const nextOffset = offset + 1;
          const nextDistance = Math.abs(nextOffset);
          const nextScale = Math.max(0.62, 1 - nextDistance * 0.16);
          const nextLift = nextDistance * 34;
          const nextOpacity = nextOffset > LAST_VISIBLE_POSITION ? 0 : 1;
          const nextZIndex = CARD_POSITIONS.length - nextDistance;
          return (
            <article
              key={item.id}
              className={`carousel__card tone-${item.tone ?? "lavender"}${offset === 0 ? " is-active" : ""}`}
              style={{
                "--offset": offset,
                "--scale": scale,
                "--lift": lift,
                "--rotation": offset * 4,
                "--next-offset": nextOffset,
                "--next-scale": nextScale,
                "--next-lift": nextLift,
                "--next-rotation": nextOffset * 4,
                "--next-opacity": nextOpacity,
                "--next-z-index": nextZIndex,
                opacity,
                zIndex: CARD_POSITIONS.length - distance,
              } as CSSProperties}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}: ${item.title}`}
              aria-hidden={offset !== 0}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="carousel__visual">{item.visual}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
