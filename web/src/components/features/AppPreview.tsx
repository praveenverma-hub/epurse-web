import Image from "next/image";
import { demo, spending, budgetUsed, netWorth, money } from "@/data/productDemo";

export type PreviewScreen = "overview" | "review" | "budget" | "insights" | "lent" | "accounts" | "goals" | "groups";
interface AppPreviewProps {
  screen?: PreviewScreen;
  screenshot?: { src: string; alt: string; width: number; height: number; priority?: boolean };
}
interface PreviewContent {
  title: string;
  label: string;
  amount: string;
  detail: string;
  stats: [string, string][];
  listTitle: string;
  rows: [string, string, string, string][];
}
const previews: Record<PreviewScreen, PreviewContent> = {
  overview: {
    title: "Your financial snapshot", label: "Spent this month", amount: money(spending), detail: "September · monthly view",
    stats: [["Income", money(demo.income)], ["Budget left", money(demo.budget - spending)]], listTitle: "Recent transactions",
    rows: demo.activity.map(row => ["↗", row.merchant, row.category, `−${money(row.amount)}`]),
  },
  review: {
    title: "Review Queue", label: "Ready for your review", amount: "3 transactions", detail: "Check the category. Keep your records accurate.",
    stats: [["Cab ride", "₹320"], ["Category", "Travel & Cabs"]], listTitle: "Unreviewed transactions",
    rows: demo.activity.map(row => ["✓", row.merchant, row.category, money(row.amount)]),
  },
  budget: {
    title: "Your monthly budget", label: "September spending", amount: `${budgetUsed}% used`, detail: `${money(spending)} of ${money(demo.budget)}`,
    stats: [["Remaining", money(demo.budget - spending)], ["Travel used", "90%"]], listTitle: "Category budgets",
    rows: [["↗", "Travel & Cabs", "Near limit · ₹660 left", "90%"], ["◉", "Food & Dining", "₹1,520 remaining", "62%"], ["✧", "Shopping", "₹199 over budget", "125%"]],
  },
  insights: {
    title: "Understand your spending", label: "Your biggest slice", amount: "Travel & Cabs", detail: `${money(5840)} · 46% of this month's spending`,
    stats: [["Income", money(demo.income)], ["Expenses", money(spending)]], listTitle: "Where it went",
    rows: demo.categories.slice(0, 3).map(row => [row.symbol, row.name, `${Math.round(row.amount / spending * 100)}% of spending`, money(row.amount)]),
  },
  lent: {
    title: "Lent & Borrow", label: "You lent", amount: money(demo.lent), detail: "Money you expect back · personal records",
    stats: [["You lent", money(demo.lent)], ["You borrowed", money(demo.borrowed)]], listTitle: "People & balances",
    rows: [["R", "Rohit", "They owe you", "+₹1,250"], ["A", "Aditi", "They owe you", "+₹500"], ["A", "Amit", "You owe them", "−₹850"]],
  },
  accounts: {
    title: "Your accounts, together", label: "Net worth", amount: money(netWorth), detail: "Recorded assets less credit card outstanding",
    stats: [["Savings", "₹82,500"], ["Card outstanding", "₹9,534"]], listTitle: "Your accounts",
    rows: demo.accounts.slice(0, 3).map(row => ["▣", row.name, row.type, money(row.balance)]),
  },
  goals: {
    title: "Goals & Savings", label: demo.goal.name, amount: money(demo.goal.saved), detail: `of ${money(demo.goal.target)} · 55% saved`,
    stats: [["Still to save", "₹68,000"], ["Target", "₹1,50,000"]], listTitle: "A plan for what matters",
    rows: [["◎", "Emergency fund", "Your safety cushion", "55%"], ["↗", "Vacation", "Your next adventure", "₹31,000"], ["✧", "Education", "Invest in yourself", "₹12,500"]],
  },
  groups: {
    title: "Private group ledgers", label: "Goa trip", amount: "₹18,700", detail: "Group spending · recorded by you",
    stats: [["Your share", "₹4,675"], ["You owe", "₹1,250"]], listTitle: "Your personal groups",
    rows: [["↗", "Goa trip", "Your balance", "−₹1,250"], ["⌂", "Home", "Your balance", "Settled"], ["◎", "Family", "Your balance", "+₹850"]],
  },
};

/** Illustrative screens only; supply screenshot to render a sanitized app capture. */
export default function AppPreview({ screen = "overview", screenshot }: AppPreviewProps) {
  if (screenshot) return <figure className="app-preview app-preview--image"><Image {...screenshot} alt={screenshot.alt} sizes="(max-width: 720px) 80vw, 320px" /><figcaption>Current Android app · demo data</figcaption></figure>;
  const content = previews[screen];
  return (
    <figure className={`app-preview app-preview--${screen}`} aria-label={`Illustrative ePurse ${screen} screen with sample data`}>
      <div className="app-preview__status" aria-hidden="true"><span>9:41</span><span>••• ▰</span></div>
      <div className="app-preview__brand"><span>ePurse<span className="app-preview__dot">.</span></span><span className="app-preview__avatar">P</span></div>
      <p className="app-preview__greeting">{content.title}</p>
      <div className="app-preview__balance">
        <span>{content.label}</span><strong>{content.amount}</strong><span>{content.detail}</span>
        {screen === "overview" || screen === "insights" ? <div className="app-preview__bars" aria-hidden="true">{[34, 58, 42, 76, 54, 88, 68, 100, 74, 89, 60, 82].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div> : <div className="app-preview__rule" />}
      </div>
      <div className="app-preview__stats">{content.stats.map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}</div>
      <div className="app-preview__list-head"><b>{content.listTitle}</b></div>
      {content.rows.map(([icon, name, detail, amount]) => <div className="app-preview__row" key={name}><span aria-hidden="true">{icon}</span><span>{name}<small>{detail}</small></span><b>{amount}</b></div>)}
      <div className="app-preview__nav" aria-hidden="true"><span>⌂</span><span>▥</span><span className="app-preview__add">+</span><span>◎</span><span>☷</span></div>
      <figcaption>Illustrative preview · sample data</figcaption>
    </figure>
  );
}
