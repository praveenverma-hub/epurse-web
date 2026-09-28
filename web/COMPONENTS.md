# ePurse website feature components

The homepage uses the six patterns with ePurse product copy grounded in the supplied brief and the mobile implementation. Screens remain illustrative until sanitized app screenshots are supplied.

## Product content and tour

`src/data/featureShowcase.tsx` contains homepage features and FAQs. `src/data/productDemo.ts` holds a consistent fictional month shared by the illustrated screens and interactive tour. `ProductDemo.tsx` adds Home, Review, Budget, Insights, Lent and Accounts views. Category changes update the demo’s breakdown and budgets; confirming marks a sample transaction reviewed. Reset restores the original sample state. Nothing is persisted or sent to a backend.

Privacy and security copy distinguishes local financial records from Google sign-in, optional encrypted Drive backup, configuration requests and crash reporting. Local deletion does not delete Drive backups. The privacy policy remains a draft pending a complete service-data and retention review.

The public store link is not configured; Get ePurse leads to the coming-soon section. This website does not implement the proposed full browser finance application or future rewards shop.

| Component | Reference pattern | Configuration |
| --- | --- | --- |
| `CardCarousel` | Angled, horizontally scrolling cards | `items`, tone and visual per item; swipe, arrow buttons, Left/Right/Home/End keys |
| `StickyFeatureSection` | Pinned visual beside scrolling points | `imageSide="left"` or `"right"`, `visual`, `items` |
| `ScreenshotGrid` | Feature tiles with app screenshots | `items` with `visual` slots |
| `FeatureList` | Grouped feature pointers | `groups` with headings and text items |
| `FeatureMarquee` | Opposing continuous feature rows | `rows` of labelled symbols; pause/resume button |
| `StackedFeatureCards` | Cards stacking below earlier headings | Ordered `items`, tone and visual slots |

All components live in `src/components/features/`. Every section accepts a unique `id`, `title`, optional `eyebrow`, and optional `description`. Shared contracts are in `types.ts`; presentation is in `features.css`. Draft homepage content is in `src/data/featureShowcase.tsx`.

## Real screenshots

Put approved captures in `public/screens/`, then use:

```tsx
<AppPreview screenshot={{
  src: "/screens/activity.webp",
  alt: "ePurse Activity showing categorized transactions",
  width: 1080,
  height: 2400,
}} />
```

Or pass any React node into a `visual` slot. Illustrations are display-only, with no simulated signup or financial actions.

## Layout and accessibility

- Sticky visual can be on either side without changing content order.
- Sticky sections become normal flow on narrow or short viewports.
- Stacking cards use 76px heading offsets under the fixed navigation. For longer headings or larger stacks, adjust the offset and viewport breakpoint together.
- Reduced motion disables marquee movement and card stacking. Marquee duplicates are hidden from assistive technology; the original items wrap so none disappear.
- Carousel never auto-advances; native scroll snap supports touch and keyboard navigation.
- Do not put `overflow: hidden/auto` on sticky ancestors. Overflow is contained locally at the carousel, marquee and preview tiles.
- Static layouts remain server components; only carousel and marquee are client components.

## Cleanup

The prior Hero, Breadth, ModuleGrid, Checklist, Stack, and local-only signup sections, their unused styles/data, and old phone mock components were replaced by this system. Legal routes and footer links are retained. No backend or publishing changes are included.

## Checks

Run `npm run lint` and `npm run build` from `web/`.
