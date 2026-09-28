import type { CSSProperties } from "react";
import SectionHeading from "./SectionHeading";
import type { FeatureItem, SectionProps } from "./types";

export default function StackedFeatureCards({ items, ...heading }: SectionProps & { items: FeatureItem[] }) {
  return (
    <section id={heading.id} className="feature-section feature-stack" aria-labelledby={`${heading.id}-title`}>
      <div className="container">
        <SectionHeading {...heading} />
        <div className="feature-stack__cards">
          {items.map((item, index) => (
            <article key={item.id} className={`feature-stack__card tone-${item.tone ?? "lavender"}`} style={{ "--card-index": index, zIndex: index + 1 } as CSSProperties}>
              <header><h3>{item.title}</h3></header>
              <div className="feature-stack__body"><p>{item.description}</p><div className="feature-stack__visual">{item.visual}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
