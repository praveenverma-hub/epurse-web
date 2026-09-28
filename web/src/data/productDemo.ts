/** Fictional, shared data for the website tour. Never connects to a user's ledger. */
export const demo = {
  month: "September",
  income: 28500,
  budget: 14000,
  previousSpending: 13883,
  lent: 1750,
  borrowed: 850,
  goal: { name: "Emergency fund", saved: 82000, target: 150000 },
  categories: [
    { name: "Travel & Cabs", amount: 5840, limit: 6500, symbol: "↗" },
    { name: "Food & Dining", amount: 2480, limit: 4000, symbol: "◉" },
    { name: "Groceries", amount: 1299, limit: 1500, symbol: "⌂" },
    { name: "Bills & Utilities", amount: 1500, limit: 1200, symbol: "▤" },
    { name: "Shopping", amount: 999, limit: 800, symbol: "✧" },
    { name: "Other", amount: 655, limit: 0, symbol: "…" },
  ],
  accounts: [
    { name: "Indian Bank ••9532", type: "Savings", balance: 82500 },
    { name: "Cash", type: "Cash", balance: 15000 },
    { name: "Investments", type: "Investment", balance: 60654 },
    { name: "ICICI ••5004", type: "Credit card outstanding", balance: -9534 },
  ],
  activity: [
    { id: "food", merchant: "Lunch with friends", category: "Food & Dining", account: "ICICI ••5004", amount: 499 },
    { id: "travel", merchant: "Cab ride", category: "Travel & Cabs", account: "Indian Bank ••9532", amount: 320 },
    { id: "groceries", merchant: "Weekly groceries", category: "Groceries", account: "Indian Bank ••9532", amount: 1299 },
  ],
};
export const spending = demo.categories.reduce((total, category) => total + category.amount, 0);
export const budgetUsed = Math.round(spending / demo.budget * 100);
export const netWorth = demo.accounts.reduce((total, account) => total + account.balance, 0);
export const money = (amount: number) => `₹${Math.abs(amount).toLocaleString("en-IN")}`;
export const budgetStatus = (amount: number, limit: number) => amount > limit ? "exceeded" : Math.round(amount / limit * 100) >= 90 ? "attention" : "normal";

export function categoriesAfterReview(overrides: Record<string, string>) {
  return demo.categories.map(category => {
    let amount = category.amount;
    for (const row of demo.activity) {
      const next = overrides[row.id];
      if (!next || next === row.category) continue;
      if (row.category === category.name) amount -= row.amount;
      if (next === category.name) amount += row.amount;
    }
    return { ...category, amount };
  });
}
