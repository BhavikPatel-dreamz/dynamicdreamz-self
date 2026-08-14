# Pet Industry Page

Live URL: `https://www.dynamicdreamz.com/industries/pet-industry/`
Requested local route: `/pet-industry`
Legacy redirect: `/industries/pet-industry` to `/pet-industry`
Date checked: 2026-08-14
Browser/source: Microsoft Edge headless capture, rendered live page, View Page
Source, live industry CSS/JavaScript, and local asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/pet-industry/live-desktop-1440x900.png` | `docs/visual-captures/source/pet-industry/local-desktop-cdp-full-loaded.png` | verified |
| 768x1024 | `docs/visual-captures/source/pet-industry/live-tablet-768x1024.png` | `docs/visual-captures/source/pet-industry/local-tablet-768x1024.png` | verified |
| 390x844 | `docs/visual-captures/source/pet-industry/live-mobile-390x844.png` | `docs/visual-captures/source/pet-industry/local-mobile-cdp-390x844.png` | verified with DevTools emulation |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, dates, Open Graph, JSON-LD, H1, section order, exact visible copy, CTA labels/paths, portfolio links, image URLs/dimensions/alts, header, footer, and contact widget |
| Live `assets/css/industries/main.css` and `assets/css/industries/media.css` | Hero gradient and media offset, brand strip, 49.6/45.3 solution split, 84% image ratio, deliverable cards, portfolio grid/hover states, and 1199/991/767px behavior |
| Live `assets/js/industries.js` | Three-second brand-slider initialization, 2000ms autoplay, 4/3/2 visible logos, non-looping 3/2/1 deliverable rail, 50/25px stage padding, and mobile dots |
| Existing local industry routes and components | Reuse of `IndustryPage`, hero, brands, solutions, deliverables, portfolio, `ButtonLink`, `Container`, client logo slider, platform mark, and drag-scroll behavior |
| Full local asset tree and downloaded live media | SHA-256 duplicate audit for the two page images, five deliverable icons, six portfolio rasters, and Shopify platform mark |

## Live Section Inventory

| Section | Captured behavior and styling |
| --- | --- |
| Hero | Mint/cyan gradient, `industries` eyebrow, Pet Industry H1, two-line desktop copy, Request a quote CTA, and an 840x434 three-storefront collage offset into the brand band |
| Trusted brands | Warm `#fbf7ed` band with the shared 12-logo rail and 4/3/2 visible logos |
| Pet solution | Text-first desktop row with H2, H3, paragraph, Get started CTA, and a 516x434 puppy image; below 992px the image stacks before the text |
| What We Deliver | Five-card rail: Pet centric custom web design, CMS Development, Responsive Layouts, Interactive Features, and Social Media Integration |
| Portfolio | Six Shopify cards in a 3/2/1 grid: Kentaur Australia, Paw Labs, My Pet Frame, Neater Pets, Supertails, and Pagerie |
| Shared chrome | Existing desktop/mobile header, footer, and fixed WhatsApp contact widget remain unchanged |

## Interaction and Animation Capture

- Brand rail initializes after three seconds, advances every two seconds,
  loops infinitely, shows 4/3/2 items, and does not pause on hover.
- Deliverables use a non-looping drag/swipe rail with 3/2/1 cards, 16/10px
  gaps, 50/25px stage padding, and dots only below 767px.
- Deliverable hover exposes a three-pixel green/cyan border and faint inner
  wash over 300ms.
- Portfolio hover applies a 40% black overlay over 300ms; View Project rises to
  bottom 30px and the Shopify mark fades/translates into place over 500ms.
- Shared local CTA, keyboard-focus, and reduced-motion behavior remains in use.

## Asset Map and Duplicate Audit

| Live asset | Canonical local destination/decision |
| --- | --- |
| `pet-industry-img.webp` | distinct; add `public/assets/pet-industry/pet-storefront-collage.webp` |
| `pet-img.webp` | distinct; add `public/assets/pet-industry/puppy-pet-solutions.webp` |
| `pet-icon-img.svg` | distinct; add `public/assets/industry-solutions/pet-centric-web-design.svg` |
| `cms_icon.svg` | distinct; add `public/assets/industry-solutions/pet-industry-cms.svg` |
| `responsive-design.svg` | exact SHA-256 match; reuse `public/assets/industry-solutions/responsive-layouts.svg` |
| `interactive-icon.svg` | exact SHA-256 match; reuse `public/assets/industry-solutions/interactive-features.svg` |
| `integration-icon.svg` | exact SHA-256 match; reuse `public/assets/industry-solutions/social-media-integration.svg` |
| Six portfolio WebP files | distinct; add descriptive files under `public/assets/pet-industry/portfolio/` |
| `shopify_img.svg` | reuse `public/assets/platforms/shopify-white.svg` |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical is `/industries/pet-industry/`; requested route is `/pet-industry` | Build `/pet-industry`, keep slashless canonical policy, and permanently redirect the legacy path | planned |
| Live title is 98 characters and exceeds the project 60-character limit | Preserve its ecommerce/pet-industry intent in concise local metadata | planned nonvisual SEO improvement |
| Live source injects an unrelated sitewide FAQPage | Emit only page-relevant Organization, WebSite, WebPage, BreadcrumbList, and Service/OfferCatalog nodes | planned schema correction |
| Live mobile capture has horizontal clipping in header, hero copy, brands, and contact widget | Keep the shared migrated responsive chrome and industry layout, which constrain document overflow | intentional accessibility/responsive improvement |
| Live image alts are generic brand-plus-Image labels | Use subject-specific local alt text without changing visible UI | planned nonvisual accessibility improvement |
| Live first portfolio image links to Kentaur Australia but its text link points to SomewhereCo | Use the visible project identity and image-link destination, `https://kentauraustralia.com/`, consistently | planned link-integrity correction |

## Final Verification

- Desktop and tablet first-viewport captures closely match the live hero,
  media offset, brand band, typography, section rhythm, and shared chrome.
- DevTools device emulation confirmed a true 390x844 CSS viewport with
  `scrollWidth === clientWidth === 390`; the local page has no document-level
  horizontal overflow. The legacy live mobile capture visibly clips header,
  hero, brand, and contact-widget content, so the local containment is an
  intentional responsive/accessibility improvement.
- Rendered counts: one H1, one hero, one brand rail, one solution row, five
  deliverable cards, six portfolio projects, and one JSON-LD block.
- Responsive stacking matches the live industry behavior: solution image
  before text below 992px, five-card horizontal deliverable rail with mobile
  dots, and portfolio grid at 3/2/1 columns.
- Every pet-industry image loaded with nonzero intrinsic dimensions after a
  full-page scroll. No image request used `dynamicdreamz.com`.
- DevTools interaction audit confirmed the deliverable border/wash reaches
  opacity 1 on hover, and the first portfolio card reaches overlay opacity 1,
  View Project bottom 30px, and platform opacity 1 on both pointer hover and
  keyboard-visible focus.
- Metadata audit confirmed the unique concise title, slashless canonical
  `https://www.dynamicdreamz.com/pet-industry`, local Open Graph image, and
  page-relevant JSON-LD only.
- Redirect audit confirmed 308 responses for `/industries/pet-industry` and
  `/pet-industry/`, both resolving to `/pet-industry`.
- `npm run check:urls`, `npm run lint`, TypeScript `--noEmit`, and
  `npm run build` all passed on 2026-08-14.

## Remaining Differences

- The local page uses the shared migrated header/contact-widget containment on
  mobile instead of preserving the live page's horizontal clipping.
- Local image alt text is subject-specific instead of the live generic
  brand-plus-Image values.
- The Kentaur text link is aligned with the card image link rather than the
  unrelated SomewhereCo destination in the live markup.
- The local canonical route follows the requested `/pet-industry` structure;
  the legacy `/industries/pet-industry` URL is preserved through a permanent
  redirect.
