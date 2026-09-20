import "./mocks.css";

interface TxnRow {
  name: string;
  cat: string;
  amount: number;
  glyph: string;
}

const ROWS: TxnRow[] = [
  { name: "Zomato", cat: "Food", amount: -428, glyph: "🍔" },
  { name: "Salary", cat: "Income", amount: 68000, glyph: "💰" },
  { name: "HDFC Credit Card", cat: "Bills", amount: -1899, glyph: "💳" },
  { name: "IRCTC", cat: "Travel", amount: -1240, glyph: "🚆" },
  { name: "Netflix", cat: "Subscriptions", amount: -199, glyph: "🎬" },
];

export default function TransactionListMock() {
  return (
    <div className="mock mock--txns">
      <div className="mock__parsed-badge">Parsed from SMS · nothing sent anywhere</div>
      <div className="mock__month">September</div>
      {ROWS.map((r) => (
        <div className="mock__row" key={r.name}>
          <div className="mock__glyph">{r.glyph}</div>
          <div className="mock__row-main">
            <div className="mock__row-name">{r.name}</div>
            <div className="mock__row-cat">{r.cat}</div>
          </div>
          <div className={`mock__row-amount ${r.amount > 0 ? "is-credit" : "is-debit"}`}>
            {r.amount > 0 ? "+" : "−"}₹{Math.abs(r.amount).toLocaleString("en-IN")}
          </div>
        </div>
      ))}
    </div>
  );
}
