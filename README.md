# epurse-web

Marketing/landing site for ePurse — a separate repo from the mobile app
(`praveenverma-hub/epurse`), by design (2026-09-20).

**Status: scaffolded, first pass built (2026-09-20).** The full plan —
feature inventory, UI inspiration from PhonePe/Groww/Splitwise, the decided
page structure, and the four scope decisions (marketing site only, real
sanitized screenshots, legal pages hosted here, "coming soon" download CTA)
— lives in [`docs/WEBAPP_UI_INSPIRATION.md`](docs/WEBAPP_UI_INSPIRATION.md),
copied here from the mobile repo (`praveenverma-hub/epurse`) since the two
are now separate repos and can't reference each other live. **The mobile
repo's copy is the original — if the plan changes, update there first, then
re-copy here**, or the two will drift.

The app lives in [`web/`](web/). It hosts `/privacy`, `/terms`,
`/delete-account` — required by Google Play Console before a listing is
accepted, so this project sits on the Android release's critical path, not
just marketing.

## What's built

All sections from the doc's §10 final page structure: hero (concentric-ring
backdrop, §9.8), bank/category breadth honeycomb (§9.9), module bento grid
(§9.2/9.5), the Track→Grow→Share→Privacy sticky card stack (§9.10, the
page's spine), the free-checklist (§9.6), and the "coming soon" email-capture
CTA (§9.7/§11.4). Plus `/privacy`, `/terms`, `/delete-account` as real routes.

**Known gaps, deliberately left open:**
- Phone mockups use built-in HTML/CSS placeholders, not real sanitized
  device screenshots — doc §11.2 flags that as a separate asset-capture
  task (needs an actual build run to capture and sanitize).
- The email-capture form is UI-only (local state, no backend/Formspree
  wired up yet) — needs a real endpoint before launch.
- `/privacy` and `/terms` copy is a first draft grounded in what the doc
  confirms is true (no backend, on-device parsing, encrypted Drive backup of
  parsed values only) but hasn't had legal review. `/delete-account` needs
  reconciling with the mobile repo's actual `delete-account.html`, which
  this project doesn't have access to.

## Stack (decided 2026-09-20)

- **Next.js (App Router) + TypeScript**, static export (`output: "export"`
  in `next.config.ts`) — no backend, deploys as static HTML/CSS/JS. Chosen
  over the doc's original Vite+React call because the site now has real
  crawlable routes (`/privacy`, `/terms`, `/delete-account`) that matter for
  Play Store review.
- Framer Motion for scroll-linked animation
- Deploy target: TBD, needs a plan that doesn't collide with
  `epurse.co.in`'s existing remote-config JSON route
