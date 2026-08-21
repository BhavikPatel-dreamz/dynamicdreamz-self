# Case Study Detail Pages

Live route family: `https://www.dynamicdreamz.com/case-studies/{slug}/`
Local route family: `/case-studies/{slug}`
Date checked: 2026-08-21
Browser/source: Google Chrome headless screenshots, rendered live pages, View Page
Source, shared detail CSS/JS, live sitemap, and local component/asset audit.

## Representative Viewports

The `sleepycat` route represents the full optional-module template. The
`evrgreen` route represents the lean text-only template.

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| SleepyCat 1440x900 | `docs/visual-captures/case-study-details/live-sleepycat-desktop-1440x900.png` | `docs/visual-captures/case-study-details/local-sleepycat-desktop-1440x900.png` | verified |
| SleepyCat 768x1024 | `docs/visual-captures/case-study-details/live-sleepycat-tablet-768x1024.png` | `docs/visual-captures/case-study-details/local-sleepycat-tablet-768x1024.png` | verified |
| SleepyCat 390x844 | `docs/visual-captures/case-study-details/live-sleepycat-mobile-390x844.png` | `docs/visual-captures/case-study-details/local-sleepycat-mobile-390x844.png` | verified |
| Evrgreen 1440x900 | `docs/visual-captures/case-study-details/live-evrgreen-desktop-1440x900.png` | `docs/visual-captures/case-study-details/local-evrgreen-desktop-1440x900.png` | verified |
| Ayusunless carousel 1440x900 | live rendered page and source | `docs/visual-captures/case-study-details/local-ayusunless-carousel-desktop-1440x900.png` | verified after horizontal-scroll interaction |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| `case-study-sitemap.xml` | Current live inventory: 35 detail URLs plus the archive. The stale local Banchharams card was excluded because its former live detail URL now resolves to the archive and is absent from the sitemap. |
| Rendered pages and View Page Source | Sampled Evrgreen, Tankbar, ConsciousPoker, SleepyCat, Don J, Beauti Software, Bombay Shirt Company, and D Shop. Recorded hero order, exact visible copy, taxonomy facts, heading hierarchy, image alternatives, metadata intent, source links, and optional section variants. |
| Live `assets/css/case-study-details/main.css` | Desktop hero starts below the shared header, uses a 47/50 split, 38/48 hero title, a pale green/cyan block behind the image, 120/90 narrative wrapper spacing, 32/68 text rows, gradient heading rule, optional palette/typeface/design treatments, and the shared gradient quote banner. |
| Live `assets/css/case-study-details/media.css` | Breakpoints at 1399, 1299, 1199, 991, 767, and 575px. At 991px the hero becomes image-first and narrative rows stack; at 767px facts become full-width and section spacing/type scale compress; at 575px horizontal padding becomes 20px. |
| Live case-study detail JavaScript | The shared file initializes optional card carousels and the legacy back control. The migrated template uses a normal `/case-studies` link and adds client JavaScript only for Ayusunless, the sole current entry containing a carousel. |
| Local components | Audited shared header/footer, `Container`, `ButtonLink`, `CtaBannerSection`, archive components, `HorizontalDragScroll`, and existing section patterns before creating detail UI. The detail narrative/palette/typeface/design composition has no existing reusable equivalent. |

## Section Inventory

| Section | Live behavior | Migration contract |
| --- | --- | --- |
| Header and back link | Shared header followed by `Go back` | Reuse shared header and a server-rendered slashless link to `/case-studies`. |
| Case study hero | Desktop text left/image right; tablet/mobile image first; title, summary, Industry, Technology, Location | One typed hero component using project-owned local media and stable image dimensions. |
| Narrative rows | Optional About/Custom Logic, Challenges, Solution, Results/Impact, and Services Provided rows in a 32/68 split | Render ordered typed sections so live heading and copy order can be preserved per entry. |
| Supporting media | Some narrative rows begin with a full-width image | Optional local image on a narrative section with intentional alt text. |
| Wireframes | Optional title plus full-width wireframe image | Optional server-rendered module. |
| Colors | Optional two- or four-card color palette | Optional typed palette with visible labels and CSS colors. |
| Typefaces | Optional text specimens or typeface images | Optional typed module; preserve a text fallback when the specimen is content-bearing. |
| Design | Optional pale background and large design showcase image | Optional typed design module with local media. |
| Request quote banner | Gradient CTA near page end | Reuse `CtaBannerSection` with the live detail-page wording and existing button primitive. |

## Interaction and Motion

- Header and CTA states follow the shared site components.
- Live back-link hover changes the arrow color over 300ms; the local route
  preserves an equivalent hover and visible keyboard-focus state.
- Hero and content imagery is static; no entrance animation is required.
- Ayusunless is the only current route with solution cards. Its small client
  boundary preserves the live no-nav/no-dot behavior, two-card desktop view,
  one-card narrow view, native keyboard scrolling, and pointer drag. The final
  interaction audit confirmed four items, a focusable labelled region, no fake
  pagination controls, and the full reachable scroll distance at 1440px and
  390px widths.

## Verification and Remaining Differences

- Representative screenshot comparison is complete for the full and lean page
  variants. Hero image placement is within approximately 6-9px vertically of
  the live captures; widths, horizontal alignment, ordering, title wrapping,
  section starts, and responsive stacking match the recorded contract.
- The complete local SleepyCat page was reviewed through
  `local-sleepycat-full.pdf` and the ten corresponding page images, covering
  narrative rows, bullet treatments, services, wireframes, colors, typefaces,
  design media, CTA, and footer.
- Shared migrated header/navigation styling differs from the current WordPress
  header in small ways and is outside this route-template change. The Next.js
  development indicator shown in local captures is development-only.
- All 35 generated routes returned their expected H1 and JSON-LD; an unknown
  slug returned 404; the legacy singular route returned the shared 308 redirect.
- Thirty-five existing hero assets were reused by hash/role. Thirty-eight unique
  supporting assets were optimized and ingested locally. Final validation covers
  73 case-study asset references, and the full 1,145-file public asset tree has
  zero duplicate SHA-256 groups.
- Production validation completed on 2026-08-21: URL policy, case-study content
  and asset validation, TypeScript, lint, static generation of all 35 routes,
  sitemap/robots output, metadata/schema source checks, and production build.
