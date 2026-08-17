# Food & Beverages Page

Live URL: `https://www.dynamicdreamz.com/food-beverages/`
Local route: `/food-beverages`
Date checked: 2026-08-14
Browser/source: Microsoft Edge headless capture, rendered live page, View Page
Source, live industry CSS/JS, and local Microsoft Edge DevTools audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `%TEMP%/dd-food-beverages-live-20260814/live-desktop-1440x900.png` | pending final post-implementation capture | live reference captured |
| 768x1024 | `%TEMP%/dd-food-beverages-live-20260814/live-tablet-768x1024.png` | pending final post-implementation capture | live reference captured |
| 390x844 | `%TEMP%/dd-food-beverages-live-20260814/live-mobile-390x844.png` | pending final post-implementation capture | live reference captured |
| 1440x6500 | `%TEMP%/dd-food-beverages-live-20260814/live-desktop-full-1440x6500.png` | pending final post-implementation capture | full page and section order captured |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, Open Graph, dates, JSON-LD, H1, section order, CTA labels/paths, portfolio links, copy, image URLs, dimensions, alts, external-link attributes, header, footer, and fixed contact widget |
| Live `assets/css/industries/main.css` and `assets/css/industries/media.css` | Hero gradient and media offset, brand strip, 49.6/45.3 solution split, 84% image ratio, deliverable cards, portfolio grid/hover overlays, and 1199/991/767px behavior |
| Live `assets/js/industries.js`, Slick, Owl, and shared `custom.js` behavior | Brand autoplay, responsive slide counts, deliverable drag/swipe rail, mobile dots, and shared header/contact-widget behavior |
| Local shared industry components | Reuse of `IndustryPage`, hero, brands, solutions, deliverables, portfolio, `ButtonLink`, `Container`, platform marks, and client logo rail |
| Local asset tree plus live downloads in `%TEMP%` | Full SHA-256 and visual duplicate audit for the hero, solution, six portfolio rasters, five deliverable icons, and platform marks |
| Local Edge audit | Responsive section geometry, overflow, hover/focus endpoints, metadata, schema graph, internal URL policy, and old-domain runtime requests |

## Live Section Inventory

| Section | Captured behavior and styling |
| --- | --- |
| Hero | Shared green/cyan gradient, `industries` eyebrow, Food & Beverages H1, two-line desktop copy, Request a quote CTA, and an 840x434 storefront collage offset into the brand band |
| Trusted brands | Warm `#fbf7ed` band with 12-logo Slick carousel and 4/3/2 visible slides |
| Food & Beverages solution | Text-first desktop row with H2, H3, paragraph, Get started CTA, and 516x434 burger image; the supplied mobile reference keeps content and CTA before the image | Route data explicitly uses `mobileOrder: "content-first"`; no shared component or other industry configuration changed |
| What We Deliver | Five-card rail: Custom Website Design, Responsive Layouts, Online Reservation System, Interactive Features, and Social Media Integration |
| Portfolio | Six cards in a 3/2/1 grid: nekter juice bar, Chinuki, Wine Moments, Deliciou, Joburg Meats, and Banchharams |
| Shared chrome | Existing desktop/mobile header, footer, and fixed WhatsApp contact widget remain unchanged |

## Interaction and Animation Capture

- Brand rail: Slick initializes after a three-second delay, advances one slide
  every two seconds, loops infinitely, shows 4/3/2 slides, and does not pause on
  hover.
- Deliverable rail: Owl uses 3 cards from 1200px, 2 from 767px, and 1 below
  767px; stage padding is 0/25/25px, gaps are 16/16/10px, mobile dots are
  visible, and pointer drag/swipe is enabled.
- Deliverable hover: the three-pixel green/cyan outer border reaches opacity 1
  over 300ms; the inner green/cyan wash becomes visible at the same endpoint.
- Portfolio hover: the 40% black overlay transitions over 300ms; View Project
  rises to bottom 30px and the platform mark fades/translates into place over
  500ms. The local implementation also exposes this state on keyboard focus.
- CTA hover/focus uses the shared local `ButtonLink` treatment already verified
  against the live industry pattern.

## Asset Map and Duplicate Audit

| Live asset | Canonical local destination/decision |
| --- | --- |
| `food-beverage-img.webp` | exact byte/hash match at `public/assets/food-beverages/food-beverages-storefront-collage.webp` |
| `food-industries-img.webp` | exact byte/hash match at `public/assets/food-beverages/food-beverages-burger.webp` |
| Six Food portfolio WebP files | exact byte/hash matches under `public/assets/food-beverages/portfolio/` |
| `custom-design.svg` | no exact or visually identical local copy; add descriptive `public/assets/industry-solutions/custom-website-branding.svg` |
| `responsive-design.svg` | exact match at `public/assets/industry-solutions/responsive-layouts.svg` |
| `reservation-icon.svg` | exact match at `public/assets/industry-solutions/online-reservation-system.svg` |
| `interactive-icon.svg` | exact match at `public/assets/industry-solutions/interactive-features.svg` |
| `integration-icon.svg` | exact match at `public/assets/industry-solutions/social-media-integration.svg` |
| Shopify and Magento marks | reuse the existing local project-owned white platform marks |

## Pre-Implementation Differences

| Difference | Planned correction | Status |
| --- | --- | --- |
| Hero, solution, and portfolio used unrelated Matcha/blog media | Point content and social metadata at the verified exact Food & Beverages assets | in progress |
| Custom Website Design used a different browser/code icon | Add the exact live gear/pencil branding icon under a descriptive local filename | in progress |
| Online Reservation used a similar appointment icon | Use the exact local `online-reservation-system.svg` match | in progress |
| Food page metadata lacked the real live publish timestamp and used a placeholder OG image | Add the real 2024-05-06 timestamp and exact local 840x434 hero image | in progress |
| Live image alts are generic brand-plus-Image labels | Keep exact media while supplying subject-specific local alt text | intentional nonvisual accessibility improvement |
| Live canonical has a trailing slash | Keep the project-wide slashless canonical `/food-beverages` | intentional URL-policy divergence |

## Remaining Verification

- Capture final local desktop, tablet, mobile, and full-page screenshots at the
  same widths.
- Measure section counts, page height, overflow, carousel counts/dots, hover and
  focus endpoints, metadata, JSON-LD, and runtime asset requests.
- Run `npm run check:urls`, `npm run lint`, and `npm run build`, then replace this
  section with final results and any remaining intentional differences.
