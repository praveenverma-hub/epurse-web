import type { ReactNode } from "react";
import PhoneMockup from "@/components/PhoneMockup";
import TransactionListMock from "@/components/mocks/TransactionListMock";
import GoalCardMock from "@/components/mocks/GoalCardMock";
import GroupBalanceMock from "@/components/mocks/GroupBalanceMock";
import "./Stack.css";

interface StackCardProps {
  index: number;
  tone: "track" | "grow" | "share" | "privacy";
  eyebrow: string;
  heading: string;
  description: string;
  children?: ReactNode;
}

function StackCard({ index, tone, eyebrow, heading, description, children }: StackCardProps) {
  return (
    <div className={`stack-card stack-card--${tone}`} style={{ zIndex: index }}>
      <div className="container stack-card__inner">
        <div className="stack-card__text">
          <p className="eyebrow stack-card__eyebrow">{eyebrow}</p>
          <h2 className="stack-card__heading">{heading}</h2>
          <p className="stack-card__description">{description}</p>
          <a className="stack-card__link" href="#download">Know more →</a>
        </div>
        <div className="stack-card__visual">{children}</div>
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="stack">
      <StackCard
        index={1}
        tone="track"
        eyebrow="Track"
        heading="See every rupee the moment it moves."
        description="ePurse reads the SMS your bank already sends you — no typing, no manual entry — and turns it into a live transaction feed, unified accounts, and bill reminders that surface before they're due."
      >
        <PhoneMockup tone="light">
          <TransactionListMock />
        </PhoneMockup>
      </StackCard>

      <StackCard
        index={2}
        tone="grow"
        eyebrow="Grow"
        heading="Goals that fund themselves."
        description="Set a goal, then let it auto-fund from a spending category — or top it up from your salary allocation. Budgets and insights stay quiet until something needs your attention."
      >
        <PhoneMockup tone="dark">
          <GoalCardMock />
        </PhoneMockup>
      </StackCard>

      <StackCard
        index={3}
        tone="share"
        eyebrow="Share"
        heading="One number, not a spreadsheet."
        description="Split a trip or a flat's bills with a group. Everyone's balance settles into one colored number — owed or owing — and lent/borrowed money stays out of your spend total, because it isn't your money."
      >
        <PhoneMockup tone="light">
          <GroupBalanceMock />
        </PhoneMockup>
      </StackCard>

      <StackCard
        index={4}
        tone="privacy"
        eyebrow="Privacy"
        heading="Nothing leaves your device."
        description="There's no backend. SMS parsing happens on-device, your data lives in local storage, and the only thing that ever leaves your phone is a backup you explicitly start — encrypted, and only the parsed values, never the raw messages. Delete your account and it's actually gone."
      />
    </section>
  );
}
