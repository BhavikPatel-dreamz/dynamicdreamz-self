# Health & Nutrition Page

Live URL: `https://www.dynamicdreamz.com/healthcare/`
Local route: `/healthcare`
Date checked: 2026-08-13
Local implementation verified: 2026-08-14
Browser: Microsoft Edge (Chromium, headless screenshots and DevTools computed audit)

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `%TEMP%/dd-healthcare-audit-20260813/live-healthcare-desktop-top.png` | `%TEMP%/dd-healthcare-audit-20260813/local-healthcare-desktop-top.png` | verified |
| 768x1024 | `%TEMP%/dd-healthcare-audit-20260813/live-healthcare-tablet-top.png` | `%TEMP%/dd-healthcare-audit-20260813/local-healthcare-tablet-cdp-768.png` | verified |
| 390x844 | `%TEMP%/dd-healthcare-audit-20260813/live-healthcare-mobile-top.png` | `%TEMP%/dd-healthcare-audit-20260813/local-healthcare-mobile-cdp-390.png` | verified |

Full-height live captures are stored beside the first-view screenshots as
`live-healthcare-desktop-1440.png`, `live-healthcare-tablet-768.png`, and
`live-healthcare-mobile-390.png`. The same temporary audit folder contains the
rendered source, inspected CSS/JavaScript, and original media downloads used for
duplicate checking. Local implementation captures are stored as
`local-healthcare-desktop-1440.png`, `local-healthcare-tablet-768.png`,
`local-healthcare-mobile-390.png`, and the DevTools viewport captures listed
above.

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Metadata, canonical, publish/modify dates, heading order, exact copy, CTA labels/paths, 12 brand links, two solution rows, five deliverables, six portfolio links, image dimensions/alts, external-link attributes, and JSON-LD |
| `style.css`, `default-media.css` | Montserrat typography, container widths, shared button motion, section rhythm, and the 1199/991/767px breakpoints |
| `assets/css/industries/main.css`, `assets/css/industries/media.css` | Hero gradient and image offset, brand strip, alternating 49.6/45.3 solution rows, 80/50px inter-row spacing, deliverable cards, portfolio grid/hover overlays, and responsive stacking |
| `assets/js/industries.js`, Slick, Owl, and `custom.js` | Brand autoplay, 4/3/2 visible logos, 3/2/1 deliverable rail, mobile dots, header behavior, and shared contact widget behavior |
| Edge screenshots | Desktop, tablet, and mobile first viewport plus full-page section order, image crops, responsive wrapping, and intentional carousel overflow |
| Local asset tree, SHA-256 inventory, and 16x16 perceptual comparison | Existing exact matches and confirmation that the nine Healthcare raster images are visually distinct from existing local media |

## Live Section Inventory

| Section | Captured behavior and styling |
| --- | --- |
| Hero | 97.18-degree mint/cyan gradient, 190px desktop and 150px tablet/mobile top padding, 50/40/30px H1, red pill CTA, and an 840x434 storefront collage offset 80px below the section (70px on mobile) |
| Trusted brands | Warm `#fbf7ed` background; heading beside the rail on desktop and above it below 992px; infinite 2-second carousel with 4/3/2 logos |
| Health & Nutrition solutions | Text-first desktop row with a 49.6/45.3 split, 516x434 image in an 84% ratio frame, 10px radius, and text then image below 992px |
| Dental solutions | Image-first alternating desktop row 80px below the first solution; text includes two paragraphs and a Read More CTA; below 992px it stacks image then text with a 50px row gap |
| What We Deliver | Heading/copy split on desktop and centered stack below 992px; five-card non-looping drag rail with 3/2/1 cards, 16/10px gaps, 50/25px edge padding, and five mobile dots |
| Deliverable hover | Three-pixel green/cyan outer gradient transitions over 300ms while the faint inner wash appears immediately |
| Portfolio | Centered intro, six cards in a 3/2/1 grid, 15px columns, 60/30px rows, 115% media ratio, category/name labels, and final View our work CTA |
| Portfolio hover | 40% black overlay appears over 300ms; View Project rises to 30px; platform mark fades and translates into place over 500ms |
| Shared chrome | Existing desktop/mobile header, footer, and fixed WhatsApp contact widget match the already-migrated site chrome |

## Responsive and Interaction Notes

- Breakpoints affecting this route are 1199px, 991px, and 767px.
- The brand carousel autoplays every 2000ms with a 500ms Slick transition and
  does not pause on hover.
- The deliverable carousel has no autoplay or arrows, does not loop, and shows
  dots only on mobile.
- CTA fill motion uses the shared 600ms sliding treatment.
- Keyboard focus and reduced-motion behavior will retain the accessibility
  improvements already established by the shared migrated components.
- Local DevTools audit at 1440x900 and 390x844 confirmed no document-level
  horizontal overflow, slashless canonical, no internal trailing-slash links,
  one hero, one brand rail, two solution rows, five deliverables, six portfolio
  projects, and JSON-LD limited to Organization, WebSite, WebPage,
  BreadcrumbList, and Service.
- Desktop solution visual order matches live: health text then image, Dental
  image then text. Mobile CSS stacking shows image before text for both rows,
  matching the live responsive behavior.

## Reuse Decisions

| Existing implementation | Decision |
| --- | --- |
| `SiteHeader`, `SiteFooter`, `ContactWidget`, `Container`, `ButtonLink` | Reuse unchanged |
| `ClientLogoSlider` and canonical client-logo records | Reuse the exact same 12-logo industry rail; add no logo copies |
| `HorizontalDragScroll` | Reuse its typed pagination/drag contract for the five deliverables |
| Shared industry hero, brand, deliverable, and portfolio sections | Reuse unchanged |
| `IndustrySolutionsSection` | Extend its typed data contract to support the live alternating Dental row while preserving Beauty and Fashion output |

## Asset Map and Duplicate Audit

| Live asset | Canonical local destination/decision |
| --- | --- |
| `health-nutrition-img.webp` | `public/assets/healthcare/health-nutrition-storefront-collage.webp` (new, distinct) |
| `health-nutrition-industry-img.webp` | `public/assets/healthcare/health-nutrition-supplements.webp` (new, distinct) |
| `dental-industry-img-scaled.webp` | `public/assets/healthcare/dental-clinic-treatment.webp` (new, distinct) |
| `tailored-icon.svg` | `public/assets/industry-solutions/tailored-website-development.svg` (new) |
| `industry-white-label-icon.svg` | `public/assets/industry-solutions/white-label-service.svg` (new) |
| `order-cart-icon.svg` | `public/assets/industry-solutions/online-order-payment.svg` (new) |
| `responsive-design.svg` | Reuse `public/assets/industry-solutions/responsive-layouts.svg` (exact SHA-256 match) |
| `integration-icon.svg` | Reuse `public/assets/industry-solutions/social-media-integration.svg` (exact SHA-256 match) |
| `magento_img.svg` | `public/assets/platforms/magento-white.svg` (new) |
| Six portfolio WebP files | Add six meaningfully named, visually distinct files under `public/assets/healthcare/portfolio/` |

No exact or perceptually near-identical raster copy was found in
`public/assets/**`. Local implementation references only project-owned
`public/assets/**` media for Healthcare page content.

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Live solution image alt says Food & Beverages | The image shows health/nutrition products | implemented intentional accessibility correction |
| Live Dental paragraph styling relies on `:first-child` even though the paragraph is not the first child | Browser styling does not apply that intended emphasis | preserve rendered result |
| Live portfolio copy says Food sector and Health Co category says Shopify while displaying Magento | Visible wording is migration reference; exact visible changes need approval | preserve live copy and record suggestions |
| Metadata and schema | Live title exceeds the project length budget and injects an unrelated sitewide FAQPage | implemented concise metadata and page-relevant schema |
| `/request-quote`, `/dental-clinic-website-development-company`, and `/our-work` | Approved migration-intent routes are not built yet | migration pending; required before launch |
