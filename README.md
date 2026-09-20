# epurse-web

Marketing/landing site for ePurse — a separate repo from the mobile app
(`praveenverma-hub/epurse`), by design (2026-09-20).

**Status: not yet scaffolded.** The full plan — feature inventory, UI
inspiration from PhonePe/Groww/Splitwise, the decided page structure, and the
four scope decisions (marketing site only, real sanitized screenshots, legal
pages hosted here, "coming soon" download CTA) — lives in
[`docs/WEBAPP_UI_INSPIRATION.md`](docs/WEBAPP_UI_INSPIRATION.md), copied
here from the mobile repo (`praveenverma-hub/epurse`) since the two are now
separate repos and can't reference each other live. **The mobile repo's copy
is the original — if the plan changes, update there first, then re-copy
here**, or the two will drift.

Also hosts, once built: `/privacy`, `/terms`, `/delete-account` — required by
Google Play Console before a listing is accepted, so this project sits on the
Android release's critical path, not just marketing.

## Stack (decided, not yet set up)

- Vite + React
- Framer Motion for scroll-linked animation
- Deploy target: TBD, needs a plan that doesn't collide with
  `epurse.co.in`'s existing remote-config JSON route
