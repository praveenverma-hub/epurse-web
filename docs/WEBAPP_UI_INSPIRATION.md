# Web App — Feature Inventory & UI Inspiration Map

Status of this document: **plan, nothing implemented yet.** Written 2026-09-20
against the mobile app's current module set (`app.json` v1.5.0). Purpose: before
touching a web build, decide *what* ships and *which reference app's visual
language* each section borrows — PhonePe, Groww, or Splitwise — and why.

---

## 0. Read this first — the three-zone framing

Don't map screen-by-screen. ePurse's modules split cleanly into three zones,
and each zone has an obvious, honest match to one of the three references —
because each reference app is *actually solving that zone's problem* for
someone else's product:

| Zone | What it's for | Borrow from | Because |
|---|---|---|---|
| **Track** (daily money in/out) | transactions, accounts, bills, reminders | **PhonePe** | dense, colorful, utility-app home; a transaction feed with logos and bright category glyphs is PhonePe's whole home screen |
| **Grow** (goals, budgets, insights) | goals, budgets, analytics/behavioral insights | **Groww** | hero number + chart, progress-toward-target visual language, clean data-dense lists — Groww's entire portfolio/SIP UI *is* "progress toward a target" |
| **Share** (money between people) | groups, split expenses, lent/borrowed | **Splitwise** | colored owe/owed balance as the ONE number that matters, avatar stacks, settle-up flow — Splitwise has spent a decade refining exactly this |

**One zone has no honest match, and forcing one would be dishonest: privacy/security positioning** (no backend, on-device SMS parsing, local-only data, App Lock). PhonePe and Groww are backend-heavy fintech that *want* your data server-side; Splitwise syncs everything to its servers. None of the three have a UI language for "nothing leaves your device" because none of them make that claim. This section gets original design, not a borrowed pattern — flagged explicitly in §7 rather than force-fitted.

---

## 1. Module inventory (from the current mobile app)

| # | Module | Mobile screens/components | Zone |
|---|---|---|---|
| 1 | Dashboard / home | `DashboardScreen`, `HomeCarousel`, `homeCards.js` (6 urgency-ranked cards) | Track |
| 2 | Transactions & auto-SMS capture | `TransactionsScreen`, `AddTransactionScreen`, `TransactionItem`, `MonthDivider` | Track |
| 3 | Accounts & net worth | `AccountsScreen`, `AccountDetailsScreen`, `AccountCard`, account unification (DC↔Bank merge, CC liability) | Track |
| 4 | Bills & reminders | `RemindersScreen`, `ReminderFormScreen`, `ReminderBanner`, CC bill reconciliation | Track |
| 5 | Budgets | `BudgetScreen`, `BudgetPlanScreen`, `BudgetSummary`, `DailyBudgetLiquidWave` | Grow |
| 6 | Goals (savings) | `GoalsScreen`, `GoalDetailScreen`, `GoalFormScreen`, `GoalFundModal`, `CrystalPiggyVault` | Grow |
| 7 | Insights & analytics | `InsightsScreen`, `AnalyticsScreen`, `GhostLineChart`, `HabitLeakMatrix`, `SubscriptionHeartbeat`, `ConcentricSpendingRings` | Grow |
| 8 | Weekly / monthly recap | `WeeklySummaryCard`, `MonthlyRecapCard`, `MonthlyRecapModal` (shareable, downloadable PDF) | Grow |
| 9 | Groups & split expenses | `GroupsScreen`, `AddGroupExpenseScreen`, `GroupExpenseForm`, `GroupInsightCarousel` | Share |
| 10 | Lent / borrowed | `LentBorrowedScreen`, `LbPersonScreen`, `LbEntryForm`, `LentBorrowedWidget` | Share |
| 11 | WhatsApp reminder / banner share | `WhatsAppReminderScreen` | Share |
| 12 | Security & privacy | `SecuritySettingsScreen`, `AppLockGate`, FLAG_SECURE, delete-account flow | *(none — original)* |
| 13 | Backup & restore | `BackupScreen` (Drive, encrypted, parsed-values-only) | *(none — original, trust-adjacent)* |
| 14 | Rewards / streaks (MVP: disabled) | `ShopScreen`, `WelcomeStreakModal`, `StreakFlameEmitter` | Track (future) |
| 15 | Settings / profile | `SettingsScreen`, `ProfileScreen`, `MyProfileScreen`, `CategoriesScreen`, `SpendRulesScreen` | *(chrome, not a marketing zone)* |
| 16 | Onboarding | `OnboardingExperience` | *(chrome)* |

---

## 2. Section-by-section mapping

For each module: what it needs to *say*, the specific pattern to borrow, and
the concrete UI elements to reuse — not just "inspired by X" but which exact
piece of X's screen.

### Track zone → PhonePe

**2.1 Dashboard / home**
- Borrow: PhonePe's home = a balance/summary strip up top, then a **bento grid
  of colorful icon tiles** as entry points, then a transaction feed below.
- Map: ePurse's spend/income/refund strip → the balance strip. The 6
  `homeCards.js` urgency cards (CC bill due, budget alert, goal nudge, etc.) →
  the bento tiles, but ranked by urgency instead of static menu order — this
  is actually a step past PhonePe (which doesn't personalize tile order).
- Reuse: tile = icon + 1-line label + optional live value, tap-through, no
  chrome. Not a card with shadow — PhonePe's tiles are flat, colored fields.

**2.2 Transactions & auto-SMS capture — the differentiator, needs its own beat**
- This is ePurse's actual pitch ("no typing, read automatically") and PhonePe
  doesn't have an equivalent (its transactions are UPI-native, not
  SMS-parsed). Borrow only the *list craft*: merchant logo/glyph on the left,
  amount right-aligned and color-coded (red spend / green credit), category
  chip, running month divider.
- Add what PhonePe doesn't have: a visible "parsed from SMS, nothing sent
  anywhere" microcopy beat on this exact list — since the auto-capture IS the
  hook, don't bury it in a features page; show it inline on the list mockup
  itself, live, on the marketing page.

**2.3 Accounts & net worth**
- Borrow: PhonePe's linked-bank-account cards (bank logo, masked number,
  balance, small "linked" badge).
- Map: `AccountCard`'s unified DC+Bank+CC model needs one addition PhonePe
  doesn't have — a credit card renders as a *liability* card (red-tinted,
  balance shown as negative), because ePurse's net worth = assets − CC
  liability. Don't flatten this distinction away for a cleaner web mockup;
  it's a real feature (account unification, Sep-2026 work).

**2.4 Bills & reminders**
- Borrow: PhonePe's bill-reminder cards — due-date-forward, amount, one-tap
  "Pay now"/"Mark paid" CTA, red accent as due date nears.
- Map: same shape, but the CTA reads "Mark paid" not "Pay" — ePurse has no
  payment rail, it only tracks. Don't imply a payment feature that doesn't
  exist.

### Grow zone → Groww

**2.5 Budgets**
- Borrow: Groww's holdings list — icon + name + amount + a compact progress
  indicator per row, dense but legible, muted palette until something needs
  attention (over-budget = the one saturated color in an otherwise calm list).
- Map: category rows with `DailyBudgetLiquidWave`-style fill, parent-category
  grouping (budgets are set on PARENTS, not children — Aug-2026 rework).

**2.6 Goals**
- Borrow: Groww's SIP/goal-based-investing UI — hero target amount, progress
  ring or bar, "X% funded", projected completion.
- Map: `CrystalPiggyVault` visual → the hero progress element. Goals fund from
  salary allocation (typed, not SMS-read) plus auto-fund rules matching
  transaction categories — worth a small annotated diagram on the marketing
  page since it's a genuinely novel mechanic Groww's own goals don't have
  (Groww's SIPs are scheduled deposits, not "this category auto-funds that
  goal").

**2.7 Insights & analytics**
- Borrow: Groww's chart-heavy screens — clean line/area charts, sparingly
  colored, generous whitespace, one insight per card rather than a dashboard
  crammed with charts.
- Map: `GhostLineChart` (spend trend vs. your own history), `HabitLeakMatrix`
  (small recurring leaks), `SubscriptionHeartbeat` (detected subscriptions) —
  each becomes ONE Groww-style insight card, not a chart wall. These three are
  differentiators worth naming individually on the page, not folded into a
  generic "analytics" bullet.

**2.8 Weekly / monthly recap**
- No direct match in any of the three — closest is Groww's periodic portfolio
  review, but the *shareable, downloadable* framing is closer to a
  Spotify-Wrapped-style card. Treat as original within the Grow zone's visual
  language (same chart style as §2.7), not borrowed wholesale.

### Share zone → Splitwise

**2.9 Groups & split expenses**
- Borrow: Splitwise's group card — group avatar/name, single colored balance
  ("you owe ₹X" red / "you're owed ₹X" green), tap into a simple activity list.
- Map: identical shape. `GroupInsightCarousel` (spend-by-group chart) is an
  addition Splitwise doesn't have — keep it, but as a secondary element below
  the balance, never above it. The ONE number is what Splitwise gets right and
  what must not get buried under a chart.

**2.10 Lent / borrowed**
- Borrow: same Splitwise balance-card language, applied to 1:1 relationships
  instead of groups — this is functionally "Splitwise without the group",
  which is exactly how the mobile app already models it.
- Map: per-person net balance (Sep-2026 refactor), multi-select filters,
  explicit exclusion from spend totals (LB money isn't your spend) — this
  exclusion rule is worth a one-line callout since Splitwise doesn't
  distinguish "your spend" from "money in transit between people" the way
  ePurse does.

**2.11 WhatsApp reminder / banner share**
- Borrow: Splitwise's "remind" flow (nudge a friend to settle) — but ePurse's
  version generates a shareable image/banner rather than an in-app push,
  since there's no backend to push through. Frame this as the offline-first
  answer to the same problem Splitwise solves with server notifications.

---

## 3. The zone with no borrowed pattern — design it, don't force-fit it

**3.1 Security & privacy** (App Lock, FLAG_SECURE, on-device-only, delete
account) and **3.2 Backup** (encrypted Drive backup, parsed-values-only) are
ePurse's actual differentiator versus all three references — PhonePe and
Groww are backend-first by necessity (payments, brokerage); Splitwise syncs
everyone's ledger to its servers by design. Copying any of their trust
patterns here would be borrowing language from apps making the opposite
promise.

Treat this as its own section with its own visual identity: plain statements
("nothing leaves your device except a backup you explicitly start"), no
borrowed iconography, no "bank-grade security" badge cosplay. This is also the
section most likely to be scrutinized (Play's Data Safety form, the privacy
policy, `delete-account.html`) — the web copy must not overclaim beyond what's
literally true in `deleteAllUserData`/`Storage.wipeEverything`.

---

## 4. Recommended page structure for a first pass

1. **Hero** — one line on the actual pitch (auto-captured from SMS, nothing
   leaves the device), backed by a live-feeling mock of §2.2's transaction
   list. Not a generic "manage your money" hero.
2. **Track** (PhonePe language) — dashboard + accounts + bills, as one
   scrolling section with 2-3 mock screens.
3. **Grow** (Groww language) — budgets + goals + insights, same treatment.
4. **Share** (Splitwise language) — groups + lent/borrowed, same treatment.
5. **Privacy** (original) — the no-backend claim, stated plainly, ideally with
   a simple diagram (phone ↔ nothing, vs. the typical phone ↔ cloud) rather
   than borrowed trust-badge visual language.
6. **CTA** — download link(s); this is where the Play Store badge goes once
   the release ships.

---

## 5. Open questions for the next pass (not yet decided)

- **Marketing site vs. real web product?** This document assumes a marketing/
  landing site that *shows* the mobile UI (mockups, not a live web app), since
  ePurse's core mechanic (on-device SMS parsing) has no web equivalent — a
  browser can't read SMS. A full web *product* would need to either drop that
  mechanic entirely for web users or reframe it as manual/CSV import, which is
  a product decision, not a UI one. Flag before building past a landing page.
- Design system / component library for the web build — not chosen yet.
- Whether the "Rewards/streaks" module (disabled for MVP per
  `STATIC_CONFIG.shop.enabled`) appears on the marketing site at all, or waits
  until it actually ships.

---

## 6. Component catalog — the actual named pieces, not just "vibe"

§2 mapped ePurse's MODULES to a reference app's overall visual language. This
section is one level down: the specific, reusable COMPONENTS each reference
app is actually built from, verified against what ePurse already has so
nothing here duplicates existing work.

Verdict key: **HAVE** = ePurse already has this component, reuse as-is —
**ADAPT** = ePurse has something close, needs a specific change — **NEW** =
genuine gap, would need building.

### 6.1 PhonePe's components

| Component | What it actually is | ePurse equivalent | Verdict |
|---|---|---|---|
| Bento icon tile | rounded-square flat-colored field, icon + 1-line label, no shadow | `CategoryIcon` (tinted-bg + emoji square) | **HAVE** — already the right shape, just needs to be the *entry-point* tile, not only a list-row glyph |
| Transaction list row | circular merchant/category glyph left, name + date, amount right-aligned, color-coded red/green | `TransactionItem` | **HAVE** |
| Bill reminder card | due-date-forward card, amount, one CTA, red accent as due date nears | `ReminderBanner` | **ADAPT** — exists, but check it reddens as due date approaches rather than a single static tone |
| Recent-contacts horizontal avatar scroller (quick pay) | small circular avatars in a row, tap to prefill | — | **NEW** — no ePurse equivalent; low priority, ePurse has no "pay a person" action, only *record* an LB/split |
| Scratch-card reveal micro-interaction | tap-to-reveal gamified reward card | `WelcomeStreakModal`, `StreakFlameEmitter` (Shop module, disabled for MVP) | **ADAPT (future)** — don't build for the web marketing site until `shop.enabled` ships in-app |
| Segmented filter chips atop a list (All/Sent/Received/Bills) | pill toggle row | `AwareChip`, category/date filter chips already used in Activity (see [[project_activity_arrange]] / [[project_activity_date_filter]]) | **HAVE** |

### 6.2 Groww's components

| Component | What it actually is | ePurse equivalent | Verdict |
|---|---|---|---|
| Hero value card | big number, colored sub-line (± % ), then a chart directly beneath | `BudgetSummary` / dashboard spend strip | **ADAPT** — the number+chart pairing exists; Groww's specific move is the SIGNED colored sub-line (+2.3%) directly under the number, which ePurse's dashboard doesn't currently do |
| Chart time-range tabs (1D / 1W / 1M / 1Y / ALL) | small pill segmented control above a chart, re-renders the same chart | — (checked: `GhostLineChart`/`InsightsScreen`/`AnalyticsScreen` have none) | **NEW** — genuine gap, and a good one: let a visitor flip ePurse's spend-trend chart between week/month/year on the marketing page itself |
| Dense data row (holdings list) | icon, name+qty (secondary line), price right-aligned, day-change % — color used ONLY for the change figure | `BudgetScreen` category rows | **ADAPT** — budgets already show progress; tighten to Groww's restraint rule: color reserved for the one number that's over/under, everything else neutral |
| Curated horizontal card carousel ("Top Gainers", "Recommended") | card = icon + title + 1-line description, horizontally scrollable | `HomeCarousel` (6 urgency-ranked `homeCards.js`) | **HAVE**, mechanically — but Groww's cards are *editorial* (a human-curated pitch), ePurse's are *rule-ranked urgency*. Keep the ranking, borrow the card's visual richness (bigger icon, short narrative line, not just a label) |
| Progress ring/bar toward a target | circular or linear fill, "X% funded", projected date | `CrystalPiggyVault`, `ProgressRing`, `GaugeProgress` | **HAVE** |
| Order-status stepper (placed → executed → settled) | horizontal step indicator | — | **NEW, low fit** — no ePurse flow has sequential states like this; skip unless a future feature needs it |

### 6.3 Splitwise's components

| Component | What it actually is | ePurse equivalent | Verdict |
|---|---|---|---|
| Group balance card | group avatar/emoji, name, ONE colored balance line ("you owe ₹X" / "you're owed ₹X" / "settled up") | `GroupsScreen`'s inline balance rows (`GroupBalanceRow`, `getPersonBalances`) | **ADAPT** — the DATA is already there (`groupBalances` memo, signed net), it just isn't packaged as a single card-level hero balance the way Splitwise leads with it |
| Overlapping avatar stack | 3-4 small circles overlapping by ~40%, "+N more" if the group is bigger | — (checked: no `AvatarStack` anywhere in `src/`) | **NEW** — real gap, cheap to build, and it's the single most recognizable Splitwise-ism worth borrowing outright for the Share zone |
| Activity feed line | "{Person} added an expense" / "{Person} paid {Person}", icon, amount, relative timestamp | `GroupTxnDetailSheet` (detail view, not a running feed) | **ADAPT** — ePurse shows detail on tap; Splitwise shows the narrative INLINE in the list. Borrow the phrasing pattern for group activity lists |
| "Record a payment" settle sheet | dedicated bottom sheet: amount (editable, not forced to the full balance), date, optional note | checked: `GroupsScreen`'s settle flow is a `CenterModal` **confirm**, not an editable sheet — `settleGroupPersonBalance(groupId, personKey, { accountId })` always settles the FULL balance | **ADAPT** — the settle ACTION exists; a partial/editable settle sheet is a real, scoped gap if partial settle-up ever becomes a product goal (not required for the web mockup, but worth flagging since Splitwise users expect it) |
| Friends list row (1:1, not grouped) | avatar, name, net balance colored | `LentBorrowedScreen` / `LbPersonScreen` | **HAVE**, conceptually — same data (`getPersonBalances`, per-person net), same "one colored number" idea |

### 6.4 New things worth showing that came from looking at their components, not ePurse's

Answering the second half of the ask directly — things to put ON the web app that these apps' components suggested, beyond restyling what already exists:

1. **A live, interactive time-range toggle on the hero spend chart** (from Groww §6.2) — let a visitor on the marketing page tap 1W/1M/1Y and watch the chart animate, using the app's own `GhostLineChart` styling. More convincing than a static screenshot.
2. **An avatar stack on every group card** (from Splitwise §6.3) — even the marketing mockup should show 3-4 overlapping avatars on a group card; it reads as "social" at a glance in a way a text list never does.
3. **A group balance rendered as ONE big colored number, chart secondary** (from Splitwise) — reorders what ePurse's `GroupInsightCarousel` currently does (chart-first) for the web presentation specifically; don't lead with the chart the way the in-app carousel does.
4. **Editorial-style copy on insight cards, not just labels** (from Groww's collections carousel) — "You've spent 18% more on food this month" reads better on a marketing page than a bare card labeled "Food ↑18%".
5. **A bento-tile module launcher on the hero/home mock** (from PhonePe) — show ePurse's modules (Goals, Budget, Groups, Insights) as a colorful tile grid in the hero mock, which doubles as an implicit sitemap for the page itself.

None of these need new IN-APP components to ship the web page — they're presentation choices for the marketing mockups. #1 and #2 are the two cheapest to build for real if the web build ever becomes more than a mockup.

---

## 8. Project shape, decided

- **Separate project, same repo.** New sibling directory at repo root (e.g.
  `web/`), its OWN `package.json`/`node_modules` — it must not share deps with
  the RN app (`react-native` and DOM `react-dom` are incompatible in one
  toolchain). The mobile app's `docs/`, `assets/` source art, and this
  planning doc are the only things it borrows from, by reference, not by
  import.
- **React**, per the user's call. For a marketing/mockup site (§5's still-open
  question — this section assumes that answer stands), **Vite + React** is
  the right default: no SSR need for a page that's mostly scroll-animation
  and mockup imagery, and it keeps the dev loop fast. Revisit only if SEO
  becomes a stated goal (→ Next.js).
- **Animation library: Framer Motion**, not GSAP. React-idiomatic
  (`useScroll`/`useTransform` map scroll position to any CSS property
  declaratively, matching how the rest of §9 below is described), handles
  every pattern in §9 including the hardest two (§9.5 hero morph, §9.7 stacked
  cards). GSAP ScrollTrigger is the industry-standard tool for pinned
  scrollytelling specifically and is worth a second look ONLY if Framer
  Motion's pinning feels janky once §9.7 is actually built — not a blocking
  decision now.

---

## 9. Scroll-interaction patterns from their MARKETING SITES (not their apps)

Different ask from §6 — these are the landing-PAGE techniques the user
specifically named from watching phonepe.com / groww.in / splitwise.com,
identified by their real technical name so they're buildable, each mapped to
what ePurse content would actually go inside them. Two pairs turned out to be
the same underlying component wearing different content — called out where
that happened rather than building four things where two will do.

**Update (2026-09-20): checked against real screenshots the user captured
from all three sites.** Where a screenshot confirmed a guess, it's marked
*(confirmed)* with the exact craft detail added. Where a screenshot showed
something different from what I'd assumed, it's marked *(corrected)* — no
reason to keep a wrong guess in a doc meant to be built from.

| # | Named pattern | Source | Mechanism | ePurse content |
|---|---|---|---|---|
| 9.1 | **Scroll-linked theme shift** | Groww | per-section `IntersectionObserver` (or CSS `animation-timeline: view()`) crossfading the page background between a light and dark palette as different sections enter | *(confirmed — screenshot)* groww.in's own hero (SIP fund card, §9.11) is light; its F&O options-chain/analysis section is full dark. Light = everyday, dark = advanced/serious — exactly the Track-light / Grow-dark split already decided in §10 |
| 9.2 | **Hover-reveal grid** | Groww | `:hover` + Framer Motion spring on transform/opacity per cell | The module bento grid — Goals/Budget/Groups/Insights/Accounts/Reminders; hover shows a one-line pitch. Same component as 9.5, different skin |
| 9.3 | **Sticky-image scrollytelling** | Groww | `position: sticky` image column; text blocks scroll past, each swaps the pinned image via `IntersectionObserver` | Candidate for a WITHIN-zone deep dive (a phone mockup pinned, feature bullets scroll past it) — see §10, this is the one pattern NOT given a home in the top-level page, on purpose |
| 9.4 | **Poster carousel** *(renamed — corrected)* | Groww ("Finance simplified, in your language") | horizontal scroll-snap row of PORTRAIT poster cards (image + title, e.g. "IPO Reviews", "Campus Core", "Market की बात"), slightly fanned/overlapping, not a passive auto-loop | Screenshot showed real content: an educational-video-series carousel in regional languages — bigger cards than I'd assumed, not a thin ticker. ePurse has no video series and no i18n, so no direct content yet — keep the COMPONENT (portrait card row) in reserve; the auto-scroll ticker mechanism (9.9) is the separate, actually-needed one |
| 9.5 | **Brand-themed feature grid** | Splitwise | *(confirmed + detailed — screenshot)* full-bleed color panels (charcoal/teal/orange), each with a subtle geometric triangle texture, one panel per feature ("Track balances", "Organize expenses", "Add expenses easily", "Pay friends back"), phone-screenshot mockup anchored at the panel's BOTTOM edge, peeking upward (not centered) | Module grid — but the "screenshot peeking from the bottom edge" detail is worth lifting directly: more concrete/tactile than my original plain hover-grid guess |
| 9.6 | **Core/Pro checklist** | Splitwise | *(confirmed + detailed — screenshot)* three-column bullet list, tiny colored glyph per row (green parallelogram = Core, purple gem = Pro), a 2-icon legend below the list, and — new detail — a **row of short testimonial quote cards immediately after it** | Re-purposed, not copied — no paid tier, so ships as a single-column "Everything, free" checklist. The testimonial row is worth adopting once real reviews exist (post-launch, not for the first version) |
| 9.7 | **QR download section** | PhonePe | QR code + store badge(s) | Direct reuse, unchanged — final CTA, once the Play listing exists |
| 9.8 | **Radar-circle backdrop with populating chips** *(corrected — screenshot)* | PhonePe | the circle does **not** morph into a rectangle — it stays a fixed concentric-ring backdrop (like a radar/sonar chart) for the whole hero; as you scroll, feature cards (UPI Lite, Credit Line, RuPay CC…) fade/slide INTO fixed positions along the rings, and the QR "scan to download" block sits at the ring's center throughout | ePurse's spiral icon mark sits at the center of the same concentric-ring backdrop; feature cards (auto-SMS capture, budgets, goals, split, privacy) populate onto the rings as the visitor scrolls, QR/download block stays center. My original "shape-morph into a rectangle" guess was wrong — dropped |
| 9.9 | **Auto-scroll marquee / honeycomb chip reveal** | PhonePe ("Convenience at your fingertips") | screenshot shows a STATIC staggered honeycomb of pill chips (icon + label: DTH, Electricity, Insurance, Rent Payment…) with small decorative circles between them, revealed on scroll-into-view — **no confirmed left/right motion in the screenshot**, so the "opposite-direction moving marquee" from the last pass is a design option, not something actually observed on phonepe.com | Content unchanged from the last pass: bank/sender coverage row (HDFC, ICICI, SBI, Axis, Kotak, IDFC, PNB, Canara, Federal, RBL, IndusInd, Amex — checked against `messageParser.js`) + category-tag row (Food, Travel, Bills, Subscriptions, EMI…). Build as a static honeycomb reveal first (simpler, matches what was actually shown); add marquee motion as a later enhancement, not a requirement |
| 9.10 | **Stacked full-screen cards** | PhonePe | *(confirmed + detailed — screenshot)* cream/white rounded-corner cards on a soft gradient background (blue→purple→orange bleeding through at the edges); each card = heading + 1-2 line description + a "Know More →" text link on the left, a phone-mockup product shot on the right; card N+1 slides up and covers card N, leaving N's heading + first line peeking above N+1's rounded top edge | THE flagship section — see §10. The "Know More →" arrow-link (not a filled button) and the phone mockup specifically on the RIGHT of every card are worth matching exactly, not just the stacking mechanic |
| 9.11 | **SIP/fund hero card** *(new — confirmed by screenshot, not in the original ask but the exact detail behind §2's "Grow hero" idea)* | Groww | a single elevated card: icon + fund name + risk tags, a big colored % figure with a sub-label ("16.32% · 3Y annualised", "+0.55% · 1D"), a line chart, then a PILL segmented range-selector (1M / 6M / 1Y / **3Y** / 5Y / All — active pill filled) directly under the chart, then two CTA buttons ("One-time" / "Start SIP") | This is the literal reference for the Grow card's hero content in §10's stack: goal card = icon + goal name, big "% funded" figure, progress chart, a pill range-selector if the chart supports one, two CTAs ("Fund now" / "Edit goal"). Also noted: a faint background grid-of-squares texture behind the card — a cheap, on-brand "data/precision" texture worth reusing for the whole Grow card |

---

## 10. DECIDED — final page structure

**9.3 and 9.10 both want to be "the section that explains each module," and
running both would exhaust a visitor with the same content twice.** Decision:
**9.10 (stacked cards) owns the top level — Track → Grow → Share, three
cards, full stop.** 9.3 (sticky-image scrollytelling) is NOT a separate
section; it's held in reserve as the internal layout of one stacked card if a
specific zone ever needs to go a level deeper than three cards can carry —
build the outer stack first, decide per-zone depth only if the three-card
version feels thin once it's actually on screen.

**9.1 (theme shift) is not standalone either — it's how the stack is skinned:**
Track card = light (daily, bright, PhonePe-register). Grow card = dark
(goals/analytics read as "serious money" — a dark card is the one place this
page borrows Groww's premium-investment feel outright). Share card = light
again (social, friendly). The background crossfades as each card locks in,
using 9.1's mechanism, rather than existing as its own section.

**Final order, top to bottom** (updated 2026-09-20 to match the corrected §9.8
and the confirmed craft detail in 9.5/9.10/9.11):

1. **Hero** — tagline (Groww) at top, then §9.8: the spiral mark sits at the
   center of a fixed concentric-ring backdrop; continued scroll populates
   feature cards onto the rings (auto-SMS capture, budgets, goals, split,
   privacy), QR/download stays centered throughout — no shape morph, per the
   correction above.
2. **Breadth section** — §9.9, a STATIC staggered honeycomb of pill chips on
   first build (real bank coverage + category tags), scroll-revealed; opposite-
   direction marquee motion is a later enhancement, not required for v1.
3. **Module grid** — §9.2/9.5 merged: hover-reveal bento grid, brand-colored,
   panel-with-mockup-peeking-from-the-bottom treatment (9.5's confirmed
   detail), doubling as an implicit sitemap (Goals/Budget/Groups/Insights/
   Accounts/Reminders).
4. **The stack** — §9.10, three full-screen cards, Track → Grow → Share,
   light → dark → light per the theme-shift decision (now confirmed against
   Groww's own site, 9.1). Card layout matches 9.10's confirmed craft: heading
   + description + "Know More →" link on the left, phone mockup on the right.
   The Grow card's hero content is literally 9.11 (SIP-card layout: icon, big
   %-funded figure, chart, pill range-selector, two CTAs). This is the page's
   spine; give it the most design effort.
5. **Privacy** — a fourth card in the SAME stack (reusing the mechanism for
   consistency), going full-bleed as the closing/trust beat. Per §3: original
   visual identity, no borrowed badge iconography, copy stays literally true
   to what `deleteAllUserData`/`Storage.wipeEverything` actually do.
6. **"Everything, free" checklist** — §9.6, re-purposed, single column. A
   reassurance beat after the deep dive, not a sales pitch. (9.6's confirmed
   testimonial-row addition is a post-launch enhancement, not v1 — no real
   reviews to show yet.)
7. **Download CTA** — §9.7, QR + store badge, unchanged.
8. **Footer** — same shape on all three references; not worth over-designing.

Everything in §7's list of 5 ideas from the previous pass still has a
specific home: the time-range chart toggle (now literally 9.11's pill
range-selector) and editorial insight copy belong inside the Grow card (step
4); the avatar stack and "balance as one big number" belong inside the Share
card (step 4); the bento-tile launcher IS step 3. The poster carousel (9.4,
renamed from the original language-row guess) has no content yet and stays
in reserve — no video series, no i18n.

---

## 11. DECIDED — the four scope questions (2026-09-20)

1. **Marketing/landing site**, not a real interactive product. Confirms
   §5's original assumption — no longer open. Consequence: every number on
   the page is illustrative, never live. `STATIC_CONFIG`/store selectors are
   NOT wired into this project.
2. **Mockup visuals = real screenshots, sanitized** — not fresh web
   illustrations. Consequence: needs an actual build run (emulator or
   device) to capture each screen the plan calls for (dashboard, a goal
   detail, a group balance, budgets), then placeholder names/numbers swapped
   in before anything is published. This is an asset-sourcing task, not a
   verification of a code change — [[feedback_dont_self_verify_on_device]]
   doesn't apply here.
3. **Legal pages fold into this same web project** — `/privacy`, `/terms`,
   `/delete-account` become real routes here, not the standalone
   `docs/site/*.html` files. Those static files' CONTENT carries over
   (`delete-account.html` already written, per
   [[project_release_track_c_sep2026]]) but the hosting mechanism changes.
   This also means the web project's launch and the Play submission are now
   coupled: Play needs a live privacy-policy URL before it will accept a
   listing, so this project matters to the Android release timeline, not
   just marketing.
4. **Download CTA ships as "Coming soon" + email capture now**, swapped for
   the real Play link the moment `docs/ANDROID_RELEASE.md`'s Track A closes
   (D-U-N-S / Play developer account / first listing). Needs an email
   capture mechanism — not decided yet: a static form pointing at a
   third-party service (e.g. a Google Form, Formspree) is the cheap option
   for a marketing site with no backend; a real endpoint is unnecessary
   scope for this stage.

**Two smaller things worth resolving explicitly, not asked because they're
mine to call rather than the user's:**
- **No invented traction numbers.** Pre-launch, there is no download count,
  no rating, no user count to cite truthfully — the page must not claim one.
  The bank-coverage list (§9.9) stays the one quantified claim, because it's
  checked against `messageParser.js` and true today.
- **Domain routing**: `epurse.co.in` already serves the remote-config JSON
  (see [[project_remote_config_sep2026]]) and will now also serve this
  React app plus the legal routes. Needs a deploy plan that doesn't collide
  with the existing remote-config path — flagged for the scaffolding step,
  not resolved here.
