"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import SectionHeading from "./SectionHeading";
import type { FeatureItem, SectionProps } from "./types";

export default function CardCarousel({ items, ...heading }: SectionProps & { items: FeatureItem[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(Math.floor(items.length / 2));

  useEffect(() => {
    const rail = track.current;
    const card = rail?.children[Math.floor(items.length / 2)] as HTMLElement | undefined;
    if (rail && card) rail.scrollLeft = card.offsetLeft - rail.offsetLeft - (rail.clientWidth - card.clientWidth) / 2;
  }, [items.length]);

  function goTo(index: number) {
    const rail = track.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;
    rail.scrollTo({
      left: card.offsetLeft - rail.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  function updateActive() {
    const rail = track.current;
    if (!rail) return;
    const center = rail.getBoundingClientRect().left + rail.clientWidth / 2;
    let nearest = 0;
    let distance = Infinity;
    Array.from(rail.children).forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const nextDistance = Math.abs(rect.left + rect.width / 2 - center);
      if (nextDistance < distance) { nearest = index; distance = nextDistance; }
    });
    setActive(nearest);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const next = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: items.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    goTo(Math.max(0, Math.min(items.length - 1, next)));
  }

  if (!items.length) return null;
  return (
    <section id={heading.id} className="feature-section carousel" aria-labelledby={`${heading.id}-title`} aria-roledescription="carousel">
      <div className="container"><SectionHeading {...heading} /></div>
      <div ref={track} id={`${heading.id}-track`} className="carousel__track" onScroll={updateActive} onKeyDown={onKeyDown} tabIndex={0} role="group" aria-label="Feature cards. Use left and right arrow keys to browse.">
        {items.map((item, index) => (
          <article key={item.id} className={`carousel__card tone-${item.tone ?? "lavender"}`} aria-roledescription="slide" aria-label={`${index + 1} of ${items.length}: ${item.title}`}>
            <span className="carousel__number" aria-hidden="true">0{index + 1} <span>↗</span></span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="carousel__visual">{item.visual}</div>
          </article>
        ))}
      </div>
      <div className="carousel__controls">
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous feature" aria-controls={`${heading.id}-track`}>←</button>
        <span aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} <span className="muted">/ {String(items.length).padStart(2, "0")}</span></span>
        <button type="button" onClick={() => goTo(active + 1)} disabled={active === items.length - 1} aria-label="Next feature" aria-controls={`${heading.id}-track`}>→</button>
      </div>
    </section>
  );
}
