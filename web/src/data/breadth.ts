// Bank/sender coverage as listed in the planning doc (checked against messageParser.js).
export const BANKS: string[] = [
  "HDFC", "ICICI", "SBI", "Axis", "Kotak", "IDFC",
  "PNB", "Canara", "Federal", "RBL", "IndusInd", "Amex",
];

export const CATEGORIES: string[] = [
  "Food", "Travel", "Bills", "Subscriptions", "EMI", "Groceries",
  "Shopping", "Rent", "Health", "Entertainment",
];

export const CHECKLIST: string[] = [
  "Auto-captured transactions from bank SMS — nothing typed",
  "Unified accounts: bank, debit and credit card, net worth included",
  "Bills and reminders, before the due date, not after",
  "Category budgets, set on the categories that matter",
  "Goals funded from salary allocation or auto-fund rules",
  "Spend insights: trend, recurring leaks, subscriptions",
  "Shareable weekly and monthly recap",
  "Group expenses and settle-up",
  "Lent & borrowed, kept out of your spend total",
  "App Lock and on-device data — nothing leaves your phone",
];
