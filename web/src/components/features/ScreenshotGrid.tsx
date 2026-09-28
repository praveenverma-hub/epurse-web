import SectionHeading from "./SectionHeading";
import type { FeatureItem, SectionProps } from "./types";

export default function ScreenshotGrid({ items, ...heading }: SectionProps & { items: FeatureItem[] }) {
  return (
    <section id={heading.id} className="feature-section container" aria-labelledby={`${heading.id}-title`}>
      <SectionHeading {...heading} />
      <div className="screenshot-grid">
        {items.map(item => (
          <article key={item.id} className={`screenshot-grid__card tone-${item.tone ?? "lavender"}`}>
            <h3>{item.title}</h3><p>{item.description}</p>
            <div className="screenshot-grid__visual">{item.visual}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
