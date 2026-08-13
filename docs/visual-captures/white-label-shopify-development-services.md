# White Label Shopify Development Services Visual Capture

Status: implemented and visually verified against the live reference  
Live URL: `https://www.dynamicdreamz.com/white-label-shopify-development-services/`  
Local route: `/white-label-shopify-development-services/`  
Checked: 2026-08-13  
Browser: Google Chrome headless (desktop, tablet, and mobile emulation)

## Screenshots

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/white-label-live-1440x900.png` | `/tmp/white-label-local-1440x900-final.png` | Compared |
| 768x1024 | `/tmp/white-label-live-768x1024.png` | `/tmp/white-label-local-768x1024-final.png` | Compared |
| 390x844 | `/tmp/white-label-live-390x844.png` | `/tmp/white-label-local-390x844-final.png` | Compared |
| 1440px full page | `/tmp/white-label-live-full-1440.png` | `/tmp/white-label-local-full-1440-final.png` | Compared after lazy-load scroll pass |
| 390px full page | `/tmp/white-label-live-full-390.png` | `/tmp/white-label-local-full-390-final.png` | Compared after lazy-load scroll pass |

The live document has no horizontal content overflow. Chrome reported content
widths of 1425px, 753px, and 375px after accounting for its vertical scrollbar
at the three measured browser widths.

## Sources Inspected

| Source | Evidence captured |
| --- | --- |
| Rendered page and View Page Source | Visible copy, heading order, CTA paths, external review links, media attributes, metadata, Yoast graph, page-specific Service/FAQ graph, header/footer, and default accordion state |
| `style.css?ver=7.0.4` | Montserrat base typography, 1180px container, 50/66 H1, 35/48.475 H2, 80px section rhythm, buttons, FAQ cards, and global breakpoints |
| `assets/css/default-media.css?ver=1.0.0` | 991px and 767px global typography, button, container, and section-spacing changes |
| `assets/css/services/main.css?ver=all` | Hero, counters, comparison grid, AI sections, service accordion, pricing cards, technology marquee, partnership steps, FAQ, CTA, colors, borders, dimensions, and keyframes |
| `assets/css/services/media.css?ver=1.0.0` | 1199px, 991px, 767px, and 575px responsive behavior for every page section |
| `assets/js/services.js?ver=1.0.0` | Single-open FAQ and service accordions, 700ms service-panel transition, jQuery FAQ slide behavior, and the counter observer code |
| Computed styles via Chrome DevTools Protocol | Exact desktop/tablet/mobile section boundaries, typography, backgrounds, padding, active panel dimensions, and document geometry |
| Asset contact sheet | All 42 distinct technology/tool logos were rendered in Chrome and identified before assigning meaningful local filenames |

## Section Inventory And Implementation Map

| Live section | Captured behavior and styling | Local implementation decision |
| --- | --- | --- |
| Hero | Cream `#f7f4e9`; transparent header; 120px top padding; 55/45 split; 50/66 H1; illustration bleeds to the lower/right edge; review marks below CTA | Server-rendered section using shared `Container` and `ButtonLink`; local hero/review SVGs; exact live copy |
| Proof counters | Four equal columns with 42px icons, 40px values, soft dividers; 2x2 at tablet and stacked on mobile | Server-rendered list with local icons and stable dimensions; preserve live numbers and labels |
| Why partner | `#fafaf7`; centered title; three-column rule grid containing seven cards and two empty grid cells | Server-rendered grid; preserve the unusual empty cells and live order for parity |
| Delivered under your brand | Dark green `#171e16`; centered intro; four translucent cards in a 2x2 grid | Server-rendered cards with local AI/automation icons and live pills |
| AI-driven shopping | White; four equal columns with soft dividers; 2x2 tablet and stacked mobile | Server-rendered capability grid |
| Service accordion | Dark green; two columns; first item open; one item open at a time; open item can close; 700ms max-height transition | Small accessible Client Component; buttons, ARIA relationships, keyboard support, live default state and timing |
| Flexible plans | Split heading/copy, then three cream 20px-radius cards and centered CTA | Server-rendered pricing section with exact live prices and wording |
| Technologies and tools | `#fafaf7`; two opposing continuously moving logo rows; 202x94 white cards; 100s linear infinite marquee | Server-rendered duplicated logo sequences and component-scoped keyframes; stop motion for reduced-motion users |
| Partnership steps | Four alternating cream/off-white cards with directional diamonds, dashed-ring numbered badges, and bordered confidentiality note | Server-rendered ordered steps; stack vertically below 992px |
| FAQ | Pale blue `#e6ecf0`; first item open; only one open; 400ms jQuery slide behavior; white rounded cards | Reuse/promote the existing accessible FAQ accordion behavior while retaining the live presentation and copy |
| Final CTA | `#fafaf7`; text and button split on desktop, stacked on mobile | Server-rendered section with shared `ButtonLink` and canonical quote path |
| Site chrome | Transparent initial header, white hide/reveal header while scrolling, contact widget, footer, and mobile menu | Reuse shared root-layout chrome; add a route-aware transparent initial header state without changing other routes |

## Measured Geometry

| Viewport | Live section boundaries and key geometry |
| --- | --- |
| Desktop 1440 | Hero 866.41px; counters 284.05px; why 863.33px; delivered 1004.50px; AI shopping 579.80px; services 720.28px; pricing 715.47px; tools 531.34px; process 687.81px; FAQ 874.45px; CTA 247.81px; content before footer 7375.25px |
| Tablet 768 | Hero 1161.23px; counters 273.53px; why 839.33px; delivered 1101.66px; AI shopping 693.66px; services 746.41px; pricing 581.89px; tools 436px; process 1216.69px; FAQ 792px; CTA 240.41px |
| Mobile 390 | Hero 1174.84px; counters 490.22px; why 1095.03px; delivered 1659.23px; AI shopping 1275.38px; services 747.11px; pricing 1126.86px; tools 381.47px; process 1229.53px; FAQ 1130.47px; CTA 316.41px |

Desktop H1 computes to Montserrat 700, 50px/66px, `-1px` tracking and a
627x198px box. It becomes 40px/50px at both measured responsive widths; the
mobile H1 occupies 343x200px. Section spacing is 80px desktop, 50px at 991px
and below, with captured section-specific exceptions for the hero, why, tools,
FAQ, and CTA.

## Interaction And Motion

| State | Live behavior | Local target |
| --- | --- | --- |
| Header initial/scrolled | Transparent over the cream hero; shared hide/reveal scroll behavior | Existing shared header behavior |
| Button hover/focus | Red fill slides out over 600ms and border/text become gray; white variant reverses the treatment | Shared `ButtonLink` behavior plus existing visible focus outline |
| Service accordion | First service open; plus/minus control; all other services close when one opens; current item can close; 700ms transition | Same default and single-open model with semantic buttons and ARIA |
| FAQ accordion | First FAQ open; selecting another closes the first; current item can close; jQuery `slideUp/slideDown` default duration (~400ms) | Same state model and 400ms accessible CSS grid transition |
| Technology marquee | Top row moves left, bottom row moves right, both 100s linear infinite | Same direction and timing; pause animation for reduced motion |
| Counter | Source includes a 2s Odometer transition and observer code, but the live selector is `.stats_sections` while markup is `.stats_section`; rendered values are therefore stable in the inspected page | Preserve the rendered stable final values; no unnecessary client animation |
| Responsive | Hero stacks at 991px; counters 2x2 at tablet and one-column at mobile; AI features 2x2 then one-column; services and process stack at tablet; pricing stacks on mobile | Match captured breakpoints and order |

## Asset Map

- Reuse canonical local brand header, Shopify partner, footer award, and contact
  widget assets already present in `public/assets/**`.
- Added page-owned assets: hero illustration, four proof icons, six service icons,
  eight AI/automation icons, and 42 technology/tool logos.
- Review marks were hash-compared against all existing local assets; the three
  live hero SVGs are distinct and require canonical local copies.
- All source assets are stored locally with descriptive kebab-case names.
  Production code will not reference the live WordPress uploads/theme paths.
- Content images retain the live subject in their alt text. Small card and
  statistic icons are decorative because adjacent text names the same concept.
  Technology logos receive the identified product/company name as alt text.

## Intentional Production Improvements

- Accordion triggers will be real buttons with `aria-expanded`,
  `aria-controls`, labelled regions, keyboard operation, and visible focus.
- The live page has two conflicting FAQ schema blocks, including hidden
  questions not visible in the page. Local `FAQPage` data will describe only
  the five visible FAQs and will share the same typed content as the UI.
- The page will use local optimized assets, Server Components for primary
  content, one small service-accordion client boundary, and the existing small
  FAQ client boundary.
- Reduced-motion users will see static logo rows and near-instant transitions.

## Local Verification Result

- Desktop local section heights match the live measurements exactly for hero,
  delivered-under-brand, AI shopping, tools, process, FAQ, and final CTA. The
  counters and why-partner grid differ by less than 0.05px; pricing differs by
  2px. The live service accordion height changes during its initial jQuery
  slide animation; the local stable open state falls inside the captured live
  range.
- At 768px, every stable section is within 2.02px of the live reference. The
  service accordion again varies only with the live page's load-time animation.
- At 390px, the hero, counters, why grid, delivered cards, pricing, tools,
  process, FAQ, and final CTA are within 0.2px; AI shopping is within 1px. The
  service area is within the live transition range.
- Browser checks confirmed the transparent initial header and white scrolled
  state, first-open/single-open/closable service and FAQ accordions, correct
  ARIA state changes, 100s opposing marquees, and stopped motion under
  `prefers-reduced-motion: reduce`.
- All 155 rendered images have intentional `alt` attributes. No image, script,
  or stylesheet uses a live `dynamicdreamz.com/wp-content` runtime URL.

## Remaining Differences

- Subpixel text rasterization and the live accordion's in-flight load animation
  can produce small screenshot-level differences; section structure, copy,
  default state, breakpoints, and stable geometry are matched.
- Visible factual and copy inconsistencies are intentionally preserved under
  the migration approval gate and recorded in
  `docs/page-content-improvements.md` and `docs/aeo-geo-strategy.md` instead of
  being silently corrected.

## Verification

- `npm run lint`: passed with no errors; the two existing unused-import
  warnings remain in the unrelated Resources section files.
- `npm run build`: passed; Next.js statically prerendered
  `/white-label-shopify-development-services` along with sitemap and robots
  outputs.
- `git diff --check`: passed.
- Local browser audit: metadata/canonical/robots passed; one H1; six expected
  schema nodes; five visible FAQ entities; accordion, header, marquee, and
  reduced-motion states passed; no missing image alt attributes or live
  WordPress asset URLs.
