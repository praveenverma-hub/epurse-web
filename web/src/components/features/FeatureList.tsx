import SectionHeading from "./SectionHeading";
import type { SectionProps } from "./types";

export interface FeatureGroup { id: string; title: string; items: string[] }

export default function FeatureList({ groups, ...heading }: SectionProps & { groups: FeatureGroup[] }) {
  return (
    <section id={heading.id} className="feature-section feature-list container" aria-labelledby={`${heading.id}-title`}>
      <SectionHeading {...heading} />
      <div className="feature-list__groups">
        {groups.map(group => (
          <div key={group.id}>
            <h3>{group.title}</h3>
            <ul>{group.items.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
