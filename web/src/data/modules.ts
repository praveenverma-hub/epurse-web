export type ZoneKey = "track" | "grow" | "share";

export interface ZoneModule {
  name: string;
  blurb: string;
}

export interface Zone {
  key: ZoneKey;
  label: string;
  tagline: string;
  modules: ZoneModule[];
}

export const ZONES: Record<ZoneKey, Zone> = {
  track: {
    key: "track",
    label: "Track",
    tagline: "Daily money, in and out — captured without typing.",
    modules: [
      { name: "Dashboard", blurb: "Spend, income and refund at a glance, ranked by what needs you today." },
      { name: "Transactions", blurb: "Parsed from your bank SMS on-device — nothing typed, nothing sent anywhere." },
      { name: "Accounts", blurb: "Bank, debit and credit unified into one net worth — credit card shown as what it is: a liability." },
      { name: "Bills & reminders", blurb: "Due dates surface before they're late, reddening as the date gets close." },
    ],
  },
  grow: {
    key: "grow",
    label: "Grow",
    tagline: "Goals, budgets and the patterns behind your spending.",
    modules: [
      { name: "Budgets", blurb: "Set on categories that matter, with the one color reserved for over-budget." },
      { name: "Goals", blurb: "Fund a goal from salary allocation, or auto-fund it from a spending category." },
      { name: "Insights", blurb: "Spend trend against your own history, recurring leaks, detected subscriptions." },
      { name: "Recap", blurb: "A weekly and monthly summary you can actually share." },
    ],
  },
  share: {
    key: "share",
    label: "Share",
    tagline: "Money between people — one balance, not a spreadsheet.",
    modules: [
      { name: "Groups", blurb: "Split a trip or a flat's bills with a group. One colored balance, not a ledger." },
      { name: "Lent & borrowed", blurb: "One-to-one balances that stay out of your spend total — it's not your money." },
      { name: "Reminders", blurb: "Nudge someone to settle with a shareable banner — no server push needed." },
    ],
  },
};

export interface GridModule {
  name: string;
  zone: ZoneKey;
  blurb: string;
}

export const MODULE_GRID: GridModule[] = [
  { name: "Goals", zone: "grow", blurb: "Fund a goal from salary or auto-fund it from a category." },
  { name: "Budgets", zone: "grow", blurb: "Category budgets with one saturated color: over-budget." },
  { name: "Groups", zone: "share", blurb: "Split expenses, settle up, one balance that matters." },
  { name: "Insights", zone: "grow", blurb: "Spend trend, recurring leaks, detected subscriptions." },
  { name: "Accounts", zone: "track", blurb: "Bank, card and cash unified into one net worth." },
  { name: "Reminders", zone: "track", blurb: "Bills surface before they're due, not after." },
];
