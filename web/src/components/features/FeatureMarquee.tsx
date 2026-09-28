import SectionHeading from "./SectionHeading";
import type { SectionProps } from "./types";

export interface MarqueeItem { id: string; label: string; symbol: string }

export default function FeatureMarquee({ rows, ...heading }: SectionProps & { rows: MarqueeItem[][] }) {
  return (
    <section id={heading.id} className="feature-section marquee" aria-labelledby={`${heading.id}-title`}>
      <div className="container">
        <SectionHeading {...heading} />
      </div>
      <div className="marquee__rows">
        {rows.map((row, index) => (
          <div className="marquee__row" key={index}>
            {[false, true].map(copy => (
              <ul className="marquee__group" key={String(copy)} aria-hidden={copy || undefined}>
                {row.map(item => <li className="marquee__pill" key={item.id}><span className="marquee__symbol" aria-hidden="true">{item.symbol}</span>{item.label}<span className="marquee__spark" aria-hidden="true">✦</span></li>)}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
