# Split FAQ Project-Wide Rollout

- Date: 2026-09-01
- Owner direction: replace every active `FaqSection` page usage with the newer
  `SplitFaqSection` design and use it for future pages.
- Content preservation: every route keeps its existing FAQ items, heading,
  description, `idPrefix`, and optional section ID.
- Visual contract: warm `#fafaf7` background, 60px desktop / 40px mobile
  vertical padding, split 41%/57% heading-and-accordion layout, borderless
  underlined items, and circle-cross expand controls.
- Responsive contract: the layout stacks below 993px, maintains left-aligned
  content, and uses mobile-sized question text and controls below 768px.
- Interaction contract: first-item state continues to be owned by the shared
  accessible `FaqAccordion`; pointer and keyboard expand/collapse behavior is
  unchanged.
- Migration rule: legacy page-specific FAQ styling props are intentionally
  removed so old centered and boxed designs cannot override the shared design.
- Rollout result: 82 active `SplitFaqSection` render sites and zero active
  `FaqSection` imports or JSX usages across `src/app` and `src/components`.
- Local verification route: `/wordpress-development-company` returned HTTP 200
  on a fresh Next.js 16.3 Turbopack development server.
- Local screenshots:
  - Desktop, 1440px: `/tmp/split-faq-rollout-desktop-full.png`
  - Mobile, 390px: `/tmp/split-faq-rollout-mobile-full.png`
- Visual result: the representative page uses the split heading/accordion
  composition at desktop width and the page remains single-column without
  horizontal overflow at mobile width.
- Automated verification:
  - `npx tsc --noEmit`: passed.
  - `npm run lint`: passed with two unrelated pre-existing unused-import
    warnings.
  - URL, component-content, case-study, and zero-duplicate asset checks: passed.
  - `npm run build`: project checks pass, but Next's webpack phase exits with
    the repository's opaque `Build failed because of webpack errors` message
    and emits no underlying diagnostic. The same updated route compiles and
    responds successfully through Turbopack.
