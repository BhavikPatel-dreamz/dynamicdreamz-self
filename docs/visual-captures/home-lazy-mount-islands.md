# Home Lazy-Mount of Below-the-Fold Client Islands

Local route: http://localhost:3000/ (homepage `TestimonialsSection` and `HomeFaqSection`)
Date: 2026-09-03
Type: performance / hydration deferral (no intended visual redesign)

## Goal

Reduce initial homepage client hydration/JavaScript by deferring the
full client-side work of two below-the-fold interactive islands:
`TestimonialCarousel` and the home FAQ `FaqAccordion`.

## Scope

- `TestimonialCarousel` (homepage use; white-label homepage-external use is
  untouched and remains eager).
- `FaqAccordion` inside the homepage `SplitFaqSection` (enabled only via an
  opt-in `lazyAccordion` prop; all other ~82 `SplitFaqSection` sites keep the
  eager `FaqAccordion` path).

## Approach

- New generalized `LazyMount` client primitive (`src/components/ui/lazy-mount.tsx`):
  an `IntersectionObserver` sentinel that swaps a static `fallback` for the
  interactive `children` once the section is ~1200px from the viewport
  (generous `rootMargin` so hydration completes before the user scrolls to it).
  - Observer fires before the section enters view; the mounted child is never
    unmounted while scrolling (no repeated mount/unmount).
  - Falls back to immediate mount if `IntersectionObserver` is unavailable.
- `TestimonialCarousel` -> `LazyTestimonialCarousel` (client) using
  `next/dynamic(..., { ssr: false })`. SSR fallback is
  `TestimonialCarouselPlaceholder` (server) rendering the first slide so the
  section is never empty and height is preserved.
- FAQ -> `LazyFaqAccordion` (client) using `next/dynamic(..., { ssr: false })`.
  SSR fallback is `StaticFaqAccordion` (server) rendering all six Q&A pairs
  (first open, rest collapsed-but-crawlable) so crawlers and no-JS users see the
  full FAQ content. Enabled on the homepage via `SplitFaqSection`'s new opt-in
  `lazyAccordion` prop.

## SSR / SEO preservation (verified in production HTML)

- All six home FAQ questions and all six answers present in initial server HTML.
- First testimonial slide (title/quote/name/company/portrait) present in initial
  server HTML.
- FAQPage schema unchanged; headings/links/alt text unchanged.
- Section headings, descriptions, and surrounding sections remain SSR'd.

## Layout shift prevention

- SSR fallbacks match the interactive output's footprint (first slide, and the
  accordion default open/closed geometry), so no visual jump on hydration.
- Hydration mounts off-screen due to the large `rootMargin`, so any dimensional
  settling happens before the section becomes visible and is not measured as CLS.

## Build / bundle verification

- Homepage client chunk no longer contains the interactive carousel or the
  interactive FAQ accordion (`grep` for `Previous testimonial` and
  `setOpenIndex` returns 0); both are split into on-demand chunks.
- `npm run lint`: 0 errors (4 pre-existing warnings in unrelated files).
- `npm run build`: success; `check:urls`, `check:component-content`,
  `check:case-studies`, `check:blog-posts`, and `check:asset-duplicates` (0
  duplicates) all pass.

## Comparison status

- Intent: no visible change. Verified SSR output matches prior content; visual
  and responsive parity inherits from the unchanged interactive components,
  which now hydrate just before the user reaches them.
- Remaining: a live browser interaction pass at 390px / 768px / 1440px to
  confirm the carousel transition and FAQ toggle behave identically once each
  island hydrates.
