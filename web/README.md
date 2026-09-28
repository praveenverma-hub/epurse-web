# ePurse web

Next.js App Router + TypeScript marketing website, configured for static export.

The homepage uses six reusable feature patterns with ePurse product copy, an interactive sample tour, FAQs, and privacy/security information. The copy is grounded in the supplied product brief and current mobile code. App illustrations use fictional data; sanitized device screenshots remain to be supplied.

See [COMPONENTS.md](COMPONENTS.md) for component props, screenshot integration, responsive behavior and cleanup details.

```sh
npm ci
npm run dev
```

Validation: `npm run lint` and `npm run build`. The existing `next/font` setup downloads Inter and Fraunces during builds, so first builds need access to Google Fonts.

The privacy, terms, and account-deletion routes are retained. This is a local design preview, not a published release.
