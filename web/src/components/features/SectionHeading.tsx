import type { SectionProps } from "./types";

export default function SectionHeading({ id, eyebrow, title, description }: SectionProps) {
  return (
    <header className="feature-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={`${id}-title`}>{title}</h2>
      {description && <p className="feature-heading__description">{description}</p>}
    </header>
  );
}
