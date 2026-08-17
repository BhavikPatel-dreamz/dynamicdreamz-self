# Fashion & Apparel Page

Live URL: `https://www.dynamicdreamz.com/fashion/`
Local route: `/fashion`
Date checked: 2026-08-13
Browser: Microsoft Edge (Chromium, headless screenshots and DevTools Protocol computed-style audit)

## 2026-08-17 Portfolio Platform-Mark Motion Correction

The current live `assets/css/industries/main.css` was rechecked against the
shared local portfolio card. Live `.project-cate` starts at
`translateY(10px)`/opacity `0` and transitions `all .5s ease-in-out` to
`translateY(0)`/opacity `1`. The local values and timing matched, but Tailwind 4
emits `translate-y-*` through the individual CSS `translate` property while the
component transitioned only `opacity, transform`. Opacity therefore eased but
the position could jump. The platform mark now transitions all changing
properties for the same smooth 500ms live motion; keyboard focus behavior is
retained.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `%TEMP%/dd-fashion-audit-20260813/live-desktop-top.png` | `%TEMP%/dd-fashion-audit-20260813/local-desktop-top.png` | verified |
| 768x1024 | `%TEMP%/dd-fashion-audit-20260813/live-tablet-top.png` | `%TEMP%/dd-fashion-audit-20260813/local-tablet-top-clean.png` | verified |
| 390x844 | `%TEMP%/dd-fashion-audit-20260813/live-mobile-top.png` | `%TEMP%/dd-fashion-audit-20260813/local-mobile-top.png` | verified |

The temporary audit folder also contains matching `live-*-full.png` and
`local-*-full.png` captures, corrected scrollbar-free tablet captures, rendered
source, inspected CSS/JavaScript, computed-style JSON, and the original asset
downloads used for duplicate checking.

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Metadata, canonical, publish/modify dates, heading order, exact copy, CTA labels/paths, 12 brand links, five deliverables, six portfolio links, image dimensions/alts, external-link attributes, and JSON-LD |
| `style.css`, `default-media.css` | Montserrat typography, container widths, shared button motion, 80/50px section rhythm, and the 1199/991/767px breakpoints |
| `assets/css/industries/main.css`, `assets/css/industries/media.css` | Hero gradient and image offsets, brand strip, 49.6/45.3 solution split, deliverable-card geometry, portfolio grid/hover overlays, and responsive stacking |
| `assets/js/industries.js`, Slick, Owl, and `custom.js` | Brand autoplay, 4/3/2 visible logos, 3/2/1 deliverable rail, mobile dots, header behavior, and shared contact widget behavior |
| Edge screenshots | Desktop, tablet, and mobile first viewport plus full-page section order, responsive wrapping, image crops, and intentional carousel overflow |
| Edge computed-style audit | Live/local section rectangles, viewport overflow, typography, card dimensions, slide counts, dot counts, hover pseudo-states, transition timings, schema types, and runtime asset requests at desktop, 768px, and true 390px widths |
| Local asset tree, SHA-256 inventory, and 16x16 perceptual comparison | Reuse of brand/platform/solution assets and confirmation that all eight Fashion raster images are visually distinct from existing local media |

## Live Section Inventory

| Section | Captured behavior and styling |
| --- | --- |
| Hero | 97.18-degree mint/cyan gradient, 190px desktop and 150px tablet/mobile top padding, 50/40/30px H1, red pill CTA, and an 840x434 collage offset 80px below the section (70px on mobile) |
| Trusted brands | Warm `#fbf7ed` background; heading beside the rail on desktop and above it below 992px; infinite 2-second carousel with 4/3/2 logos |
| IT solutions | 49.6/45.3 desktop split, 516x434 image in an 84% ratio frame, 10px radius, and content before image below 992px | Shared solution data now declares `mobileOrder: "content-first"` explicitly instead of deriving responsive order from desktop position |
| What We Deliver | Heading/copy split on desktop and centered stack below 992px; five-card non-looping drag rail with 3/2/1 cards, 16/10px gaps, 50/25px edge padding, and five mobile dots |
| Deliverable hover | Three-pixel green/cyan outer gradient transitions over 300ms while the faint inner wash appears immediately, matching computed live CSS |
| Portfolio | Centered intro, six cards in a 3/2/1 grid, 15px columns, 60/30px rows, 115% media ratio, category/name labels, and final View our work CTA |
| Portfolio hover | 40% black overlay appears over 300ms; View Project rises to 30px; platform mark fades and translates into place over 500ms |
| Shared chrome | Existing desktop/mobile header, footer, and fixed WhatsApp contact widget match the already-migrated site chrome |

## Responsive and Interaction Notes

- Breakpoints affecting this route are 1199px, 991px, and 767px.
- Both live and local computed audits report zero page-level horizontal
  overflow at 768px and 390px. The shared header and rails retain their
  intentional clipped/carousel viewports.
- The brand carousel autoplays every 2000ms with a 500ms Slick transition and
  does not pause on hover.
- The deliverable carousel has no autoplay or arrows, does not loop, and shows
  dots only on mobile.
- CTA fill motion uses the shared 600ms sliding treatment.
- Keyboard focus and reduced-motion handling will retain the accessibility
  improvements already established by the shared migrated components.

## Reuse Decisions

| Existing implementation | Decision |
| --- | --- |
| `SiteHeader`, `SiteFooter`, `ContactWidget`, `Container`, `ButtonLink` | Reuse unchanged |
| `ClientLogoSlider` and the canonical client-logo records | Reuse the exact same 12-logo industry rail; add no logo copies |
| `HorizontalDragScroll` | Reuse its typed pagination/drag contract for the five deliverables |
| Beauty industry section components | Generalize to shared typed industry sections because layout, semantics, motion, and responsive contracts are identical; preserve Beauty output while adding Fashion data |
| Homepage selected-work cards | Do not reuse: the video marquee, dark shell, aspect ratio, and semantics differ materially from the live industry portfolio grid |

## Asset Map and Duplicate Audit

| Live asset | Canonical local destination/decision |
| --- | --- |
| `fashion-apparel-img.webp` | `public/assets/fashion/fashion-storefront-collage.webp` (new, distinct) |
| `fashion-apparel-Industry-img.webp` | `public/assets/fashion/fashion-industry-model.webp` (new, distinct) |
| `tailored-icon.svg` | `public/assets/industry-solutions/fashion-website-design.svg` (new) |
| `responsive-design.svg` | Reuse `public/assets/industry-solutions/responsive-layouts.svg` (exact SHA-256 match) |
| `leverage-tech-icon.svg` | `public/assets/industry-solutions/fashion-technology.svg` (new) |
| `interactive-icon.svg` | Reuse `public/assets/industry-solutions/interactive-features.svg` (exact SHA-256 match) |
| `integration-icon.svg` | Reuse `public/assets/industry-solutions/social-media-integration.svg` (exact SHA-256 match) |
| `shopify_img.svg`, `shopify-plus-white.svg` | Reuse the exact matches in `public/assets/platforms/` |
| `wordpress-img.svg` | `public/assets/platforms/wordpress-woocommerce-white.svg` (new) |
| Six portfolio WebP files | Add six meaningfully named, visually distinct files under `public/assets/fashion/portfolio/` |

No exact or perceptually near-identical raster copy was found in
`public/assets/**`. The rendered local route makes zero requests to live-site
production assets.

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Measured geometry | Desktop section rectangles match exactly; 768px section heights match exactly; 390px hero, brands, solutions, and deliverables match exactly, with a 0.2px aggregate portfolio subpixel difference | verified |
| Accurate local image alt text replaces incorrect live labels such as “Sambazon Image” and “The Huddle Sports Grill Image” | Production accessibility/SEO correction with no visual change | implemented intentional improvement |
| Focus and reduced-motion behavior | Live controls provide weaker keyboard/motion-preference support | implemented intentional accessibility improvement |
| Metadata and schema | Concise 155-character description replaces the live 170-character description; unrelated hidden sitewide FAQ schema is omitted | implemented intentional SEO correction |
| Visible grammar and unsupported outcome wording | Exact visible-copy changes require project-owner approval | live copy will be preserved; proposals tracked separately |
| `/request-quote` and `/our-work` | Approved migration-intent routes are not built yet | migration pending; required before launch |
