import AppPreview from "@/components/features/AppPreview";
import type { FeatureItem } from "@/components/features/types";
import type { FeatureGroup } from "@/components/features/FeatureList";
import type { MarqueeItem } from "@/components/features/FeatureMarquee";

// Sanitized captures of the current Android app. Values and account labels are demo data.
export const appScreens = {
  accounts: { src: "/screens/accounts-sanitized.png", alt: "ePurse Accounts screen with a private net-worth summary and account list", width: 843, height: 1866, priority: true },
  accountDetail: { src: "/screens/account-detail-sanitized.png", alt: "ePurse credit-card details with utilization, payment dates and current bill cycle", width: 843, height: 1866 },
  insights: { src: "/screens/insights-sanitized.png", alt: "ePurse Insights screen showing spend by account and a monthly spending pace chart", width: 843, height: 1866 },
  budget: { src: "/screens/budget.png", alt: "ePurse monthly budget with remaining amount and category progress", width: 722, height: 1600 },
  budgetBreakdown: { src: "/screens/budget-breakdown.png", alt: "ePurse budget category detail with subcategory spending and month comparison", width: 722, height: 1600 },
  borrow: { src: "/screens/borrow-sanitized.png", alt: "ePurse Borrowed screen with a repayment total, entry form and settled records", width: 843, height: 1866 },
  groups: { src: "/screens/group-sanitized.png", alt: "ePurse private group ledger with six-month spending and top categories", width: 843, height: 1866 },
  goals: { src: "/screens/goals-sanitized.png", alt: "ePurse Goals screen with progress for four savings goals", width: 843, height: 1866 },
  review: { src: "/screens/review-sanitized.png", alt: "ePurse Review Queue with transaction category management open", width: 843, height: 1866 },
} as const;

export const carouselFeatures: FeatureItem[] = [
  { id: "spending", title: "Know where it goes.", description: "Bring transactions, accounts and spending into one clear picture.", tone: "lavender", visual: <AppPreview screenshot={appScreens.insights} /> },
  { id: "review", title: "Keep the details right.", description: "Review detected transactions and correct their categories.", tone: "cream", visual: <AppPreview screenshot={appScreens.review} /> },
  { id: "budgets", title: "Plan with perspective.", description: "Track category budgets and understand your spending patterns.", tone: "peach", visual: <AppPreview screenshot={appScreens.budget} /> },
  { id: "lent", title: "Know who owes what.", description: "Keep lending, borrowing and repayments in a personal ledger.", tone: "mint", visual: <AppPreview screenshot={appScreens.borrow} /> },
  { id: "groups", title: "Shared costs. Private records.", description: "Organize trips, home and family expenses in your own ledger.", tone: "lavender", visual: <AppPreview screenshot={appScreens.groups} /> },
  { id: "goals", title: "Give your goals a plan.", description: "See what you’ve saved and what’s left to reach your target.", tone: "cream", visual: <AppPreview screenshot={appScreens.goals} /> },
];
export const storyFeatures: FeatureItem[] = [
  { id: "capture", title: "Capture the everyday.", description: "Add transactions yourself, or allow on-device SMS detection on Android. Your records begin on your device." },
  { id: "review", title: "Review before you rely on it.", description: "Use the Review Queue to check detected transactions, confirm the details and correct categories. Better records make your financial picture more useful." },
  { id: "understand", title: "Turn records into understanding.", description: "Bring categories, accounts and budgets together. See where your money went, what changed and where you want to go next." },
];
export const screenshotFeatures: FeatureItem[] = [
  { id: "lent", title: "Lending has a history.", description: "Track what you lent, what you borrowed and each repayment, person by person. Record settlements and keep reminders close.", tone: "mint", visual: <AppPreview screenshot={appScreens.borrow} /> },
  { id: "groups", title: "Your group. Your private ledger.", description: "Keep track of trips, home and shared costs. Adding a person does not give them access or automatically share your records.", tone: "lavender", visual: <AppPreview screenshot={appScreens.groups} /> },
  { id: "budget-detail", title: "See what sits inside the total.", description: "Open a budget category to compare subcategories, check your pace and move straight to the transactions behind it.", tone: "cream", visual: <AppPreview screenshot={appScreens.budgetBreakdown} /> },
];
export const featureGroups: FeatureGroup[] = [
  { id: "organize", title: "Capture & organize", items: ["Manual transaction entry", "On-device SMS detection on Android", "Transaction Review Queue", "Accounts & credit card records", "Categories & subcategories", "Private group-expense ledgers"] },
  { id: "understand", title: "Understand & act", items: ["Spending trends & category insights", "Income and expense summaries", "Weekly & monthly recaps", "Person-wise Lent & Borrow records", "Repayment & settlement tracking", "Transaction search & filters"] },
  { id: "plan", title: "Plan & maintain", items: ["Monthly & category budgets", "Goals & savings progress", "Bill & repayment reminders", "App Lock", "Optional encrypted Drive backup", "User-initiated backup & restore"] },
];
export const marqueeRows: MarqueeItem[][] = [
  [{ id: "budget", label: "Category budgets", symbol: "◔" }, { id: "travel", label: "Trip ledgers", symbol: "↗" }, { id: "bills", label: "Bill reminders", symbol: "▤" }, { id: "spending", label: "Spending insights", symbol: "▥" }],
  [{ id: "groups", label: "Private groups", symbol: "◎" }, { id: "goals", label: "Savings goals", symbol: "⚑" }, { id: "review", label: "Review Queue", symbol: "✓" }, { id: "accounts", label: "Account overview", symbol: "▣" }],
  [{ id: "categories", label: "Your categories", symbol: "✧" }, { id: "recaps", label: "Monthly recaps", symbol: "▦" }, { id: "lent", label: "Lent & Borrow", symbol: "⇄" }, { id: "backup", label: "Optional backup", symbol: "⌑" }],
];
export const stackFeatures: FeatureItem[] = [
  { id: "understand", title: "Understand the whole picture.", description: "See your spending across accounts and categories. Spot your biggest slice, compare income and expenses, and make sense of the month with recaps.", tone: "lavender", visual: <AppPreview screenshot={appScreens.insights} /> },
  { id: "plan", title: "Give every plan a starting point.", description: "Set category budgets and savings goals. Separate the progress you’ve made from the room you have left, so your next step is clear.", tone: "peach", visual: <AppPreview screenshot={appScreens.goals} /> },
  { id: "maintain", title: "Keep every account understandable.", description: "See outstanding balance, available credit, utilization, payment dates and the current bill cycle together, without losing the transaction history behind them.", tone: "mint", visual: <AppPreview screenshot={appScreens.accountDetail} /> },
];
export const faqs = [
  { question: "Is ePurse a bank or a payment app?", answer: "No. ePurse helps you record and understand your finances. It does not connect directly to your bank to move money. A repayment or settlement records what happened; it does not send a payment." },
  { question: "Can other people see my Groups or Lent & Borrow records?", answer: "No. These are personal ledgers on your device. Adding a person to a group does not invite them to a shared workspace, notify them automatically or grant access to your records." },
  { question: "How does transaction capture work?", answer: "You can add transactions manually. On Android, with SMS permission, ePurse can detect transactions from bank messages on your device. Check detected entries in the Review Queue and correct their categories when needed." },
  { question: "Does Google sign-in sync my financial data?", answer: "No. Google sign-in identifies your app session; it does not create a shared cloud ledger. Optional encrypted Google Drive backup is a separate action, and restoring a backup is not continuous device-to-device sync." },
  { question: "What happens if I change or lose my phone?", answer: "If you made an encrypted Drive backup, you can restore it using the same Google account and your backup password or recovery key. Keep those credentials safe. Without a usable backup, local records may be lost with the device." },
  { question: "Does deleting my account remove my Drive backups?", answer: "No. Settings → Delete Account clears local app data and disconnects your Google account. Previously created Drive backups must be deleted separately. The Delete account page explains both steps." },
];
