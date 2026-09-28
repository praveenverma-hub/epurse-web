import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import type { FeatureItem, SectionProps } from "./types";

export default function StickyFeatureSection({ items, visual, imageSide = "right", ...heading }: SectionProps & {
  items: FeatureItem[];
  visual: ReactNode;
  imageSide?: "left" | "right";
}) {
  return (
    <section id={heading.id} className={`feature-section sticky-feature sticky-feature--${imageSide}`} aria-labelledby={`${heading.id}-title`}>
      <div className="container">
        <SectionHeading {...heading} />
        <div className="sticky-feature__layout">
          <div className="sticky-feature__visual">{visual}</div>
          <div className="sticky-feature__steps">
            {items.map((item, index) => (
              <article key={item.id} className="sticky-feature__step">
                <span className="feature-index">0{index + 1}</span>
                <h3>{item.title}</h3><p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
