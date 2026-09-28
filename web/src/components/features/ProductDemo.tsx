"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Wordmark from "@/components/Wordmark";
import { demo as initialDemo, categoriesAfterReview, spending, budgetUsed, netWorth, money, budgetStatus } from "@/data/productDemo";

const TABS = ["Home", "Review", "Budget", "Insights", "Lent", "Accounts"] as const;
type DemoTab = typeof TABS[number];
const CATEGORY_OPTIONS = ["Food & Dining", "Travel & Cabs", "Groceries", "Shopping", "Other"];

function Metric({ label, value, detail, tone = "neutral" }: { label: string; value: string; detail?: string; tone?: "neutral" | "positive" | "borrow" }) {
  return <div className={`demo-metric demo-metric--${tone}`}><span>{label}</span><strong>{value}</strong>{detail && <small>{detail}</small>}</div>;
}

export default function ProductDemo() {
  const [tab, setTab] = useState<DemoTab>("Home");
  const [reviewed, setReviewed] = useState<string[]>([]);
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [announcement, setAnnouncement] = useState("");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const demo = { ...initialDemo, categories: categoriesAfterReview(categories) };
  const biggest = demo.categories.reduce((largest, category) => category.amount > largest.amount ? category : largest);
  const pending = demo.activity.filter(row => !reviewed.includes(row.id));

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = { ArrowRight: (index + 1) % TABS.length, ArrowLeft: (index - 1 + TABS.length) % TABS.length, Home: 0, End: TABS.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setTab(TABS[next]);
    tabRefs.current[next]?.focus();
  }

  function confirm(id: string, merchant: string, category: string) {
    setReviewed(current => [...current, id]);
    setAnnouncement(`${merchant} reviewed as ${category}. ${pending.length - 1} remaining.`);
  }

  return (
    <section id="demo" className="feature-section product-demo container" aria-labelledby="demo-title">
      <div className="feature-heading"><p className="eyebrow">Take a look inside</p><h2 id="demo-title">Your money makes more sense<br />when you can see it.</h2><p className="feature-heading__description">Explore a sample month. Switch views, review a transaction and see how the pieces fit together.</p></div>
      <div className="product-demo__shell">
        <div className="product-demo__top"><Wordmark className="product-demo__wordmark" /><span className="product-demo__sample">Interactive tour · fictional data</span></div>
        <div className="product-demo__tabs" role="tablist" aria-label="Explore the ePurse demo">
          {TABS.map((name, index) => <button type="button" role="tab" key={name} id={`demo-tab-${name}`} aria-controls="demo-panel" aria-selected={tab === name} tabIndex={tab === name ? 0 : -1} ref={element => { tabRefs.current[index] = element; }} onKeyDown={event => navigate(event, index)} onClick={() => setTab(name)}>{name}{name === "Review" && <span className="product-demo__count">{pending.length}</span>}</button>)}
        </div>
        <div className="product-demo__panel" id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${tab}`} tabIndex={0}>
          <div className="product-demo__panel-head"><div><p className="eyebrow">{demo.month} · sample month</p><h3>{({ Home: "Your financial snapshot", Review: "Keep your records accurate", Budget: "Progress, with perspective", Insights: "Where did it go?", Lent: "People, balances and repayments", Accounts: "One view across your accounts" })[tab]}</h3></div><span className="product-demo__local">Demo only · no login</span></div>

          {tab === "Home" && <>
            <div className="demo-metrics"><Metric label="Spent this month" value={money(spending)} detail="Across your recorded expenses" /><Metric label="Income" value={money(demo.income)} tone="positive" /><Metric label="Budget remaining" value={money(demo.budget - spending)} detail={`${budgetUsed}% of your monthly budget used`} /></div>
            <div className="demo-columns"><div className="demo-surface"><p className="eyebrow">Biggest slice</p><h4>{biggest.name}</h4><strong className="demo-big">{money(biggest.amount)}</strong><p>{Math.round(biggest.amount / spending * 100)}% of this month’s spending.</p><button className="demo-text-button" type="button" onClick={() => setTab("Insights")}>See category breakdown <span aria-hidden="true">→</span></button></div><div className="demo-surface"><p className="eyebrow">Your next small step</p><h4>{pending.length ? `${pending.length} transactions to review` : "Your Review Queue is clear"}</h4><p>Check the details behind your financial picture.</p><button className="demo-text-button" type="button" onClick={() => setTab("Review")}>Open Review Queue <span aria-hidden="true">→</span></button></div></div>
            <h4 className="demo-list-title">Recent transactions</h4>
            <ul className="demo-ledger">{demo.activity.map(row => <li key={row.id}><span><b>{row.merchant}</b><small>{categories[row.id] ?? row.category} · {row.account}</small></span><strong>−{money(row.amount)}</strong></li>)}</ul>
          </>}

          {tab === "Review" && <>
            <p className="demo-intro">Review the suggested category, change it if needed, then confirm. This only updates the sample tour.</p>
            <ul className="demo-review-list">{demo.activity.map(row => <li key={row.id} className={reviewed.includes(row.id) ? "is-reviewed" : ""}><div><b>{row.merchant}</b><small>{money(row.amount)} · Detected transaction</small></div><label htmlFor={`category-${row.id}`}>Category<select id={`category-${row.id}`} value={categories[row.id] ?? row.category} disabled={reviewed.includes(row.id)} onChange={event => setCategories(current => ({ ...current, [row.id]: event.target.value }))}>{CATEGORY_OPTIONS.map(category => <option key={category}>{category}</option>)}</select></label><button type="button" disabled={reviewed.includes(row.id)} onClick={() => confirm(row.id, row.merchant, categories[row.id] ?? row.category)}>{reviewed.includes(row.id) ? "Reviewed ✓" : "Confirm"}</button></li>)}</ul>
            {!pending.length && <p className="demo-success">All three sample transactions are reviewed. A clearer picture starts with accurate records.</p>}
            <button className="demo-text-button" type="button" onClick={() => { setReviewed([]); setCategories({}); setAnnouncement("Sample Review Queue reset. Three transactions ready for review."); }}>Reset sample transactions ↺</button>
          </>}

          {tab === "Budget" && <>
            <div className="demo-metrics"><Metric label="Spent / monthly budget" value={`${money(spending)} / ${money(demo.budget)}`} /><Metric label="Budget used" value={`${budgetUsed}%`} detail="Usage, not a prediction of spending pace" /><Metric label="Remaining" value={money(demo.budget - spending)} tone="positive" /></div>
            <div className="demo-budget-list">{[demo.categories[0], demo.categories[1], demo.categories[4]].map(category => { const status = budgetStatus(category.amount, category.limit); return <div className={`demo-budget demo-budget--${status}`} key={category.name}><div><b>{category.name}</b><span>{money(category.amount)} / {money(category.limit)}</span></div><progress max={category.limit} value={Math.min(category.amount, category.limit)} aria-label={`${category.name}: ${money(category.amount)} spent of ${money(category.limit)}`} /><div><small>{category.amount > category.limit ? `${money(category.amount - category.limit)} over budget` : `${money(category.limit - category.amount)} remaining`}</small><span className="demo-budget__status">{status === "exceeded" ? "Exceeded" : status === "attention" ? "Near limit" : "Within budget"}</span></div></div>; })}</div>
            <p className="demo-footnote">Amber marks a category near its limit. Red marks spending that has actually exceeded its budget.</p>
          </>}

          {tab === "Insights" && <>
            <div className="demo-metrics"><Metric label="Income" value={money(demo.income)} tone="positive" /><Metric label="Expenses" value={money(spending)} /><Metric label="Income less expenses" value={money(demo.income - spending)} detail="Based on recorded income and expenses" /></div>
            <div className="demo-breakdown">{demo.categories.map(category => <div key={category.name}><div><b>{category.name}</b><span>{money(category.amount)} · {Math.round(category.amount / spending * 100)}%</span></div><span className="demo-breakdown__track"><span style={{ width: `${category.amount / spending * 100}%` }} /></span></div>)}</div>
            <p className="demo-footnote">You spent {money(demo.previousSpending - spending)} less than the previous sample month — a decrease of 8%.</p>
          </>}

          {tab === "Lent" && <>
            <div className="demo-metrics demo-metrics--two"><Metric label="You lent · expected back" value={money(demo.lent)} tone="positive" /><Metric label="You borrowed · to return" value={money(demo.borrowed)} tone="borrow" /></div>
            <ul className="demo-ledger"><li><span><b>Rohit</b><small>Lent ₹1,750 · received back ₹500</small></span><strong className="demo-positive">They owe you ₹1,250</strong></li><li><span><b>Aditi</b><small>Lent ₹500 · no repayments yet</small></span><strong className="demo-positive">They owe you ₹500</strong></li><li><span><b>Amit</b><small>Borrowed ₹850 · no repayments yet</small></span><strong className="demo-borrow">You owe ₹850</strong></li></ul>
            <p className="demo-footnote">These are your private records. Recording a settlement does not send money or give anyone else access.</p>
          </>}

          {tab === "Accounts" && <>
            <div className="demo-metrics demo-metrics--two"><Metric label="Recorded net worth" value={money(netWorth)} detail="Assets less credit card outstanding" /><Metric label="Credit card outstanding" value="₹9,534" detail="ICICI ••5004" /></div>
            <ul className="demo-ledger">{demo.accounts.map(account => <li key={account.name}><span><b>{account.name}</b><small>{account.type}</small></span><strong>{account.balance < 0 ? "−" : ""}{money(account.balance)}</strong></li>)}</ul>
            <p className="demo-footnote">An overview of recorded balances. This is not a live connection to your bank.</p>
          </>}
        </div>
        <p className="product-demo__notice">Illustrative web tour, not a live account. Sample changes stay in this page and reset when you reload.</p>
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
    </section>
  );
}
