# Shopify Apps Archive Page

Live URL: `https://www.dynamicdreamz.com/shopify-apps/`
Local route: `/shopify-apps`
Date checked: 2026-08-18
Browser/source: Google Chrome headless screenshots (stored for evidence),
rendered live page + View Page Source, live page-specific CSS
(`blogs/main.css`, `blogs/media.css`, `style.css`), live JS,
and local component/asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/shopify-apps/live-desktop-1440x900.png` | `docs/visual-captures/source/shopify-apps/local-desktop-1440x900.png` | captured |
| 768x1024 | `docs/visual-captures/source/shopify-apps/live-tablet-768x1024.png` | `docs/visual-captures/source/shopify-apps/local-tablet-768x1024.png` | captured |
| 390x844 | `docs/visual-captures/source/shopify-apps/live-mobile-390x844.png` | `docs/visual-captures/source/shopify-apps/local-mobile-390x844.png` | captured |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, Open Graph, Yoast CollectionPage JSON-LD, H1 `Shopify App`, 5 public apps listed in grid (`Smart B2B`, `Dynamic PayHide`, `Dynamic Quote Request`, `Dynamic Checkout Upsell`, `Easy Shipping Rate Manager`) with app store icons, pricing/trial badges, and descriptions |
| Live CSS (`blogs/main.css`, `blogs/media.css`, `style.css`) | Hero padding (pt 160px, pb 85px desktop; pt 140px, pb 46px mobile/tablet), hero gradient `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`, heading typography (50px / 66px Montserrat bold, 30px / 60px on tablet, 40px line-height on mobile), section padding (80px desktop, 50px mobile/tablet), grid layout (4-col desktop 25% width, 2-col tablet 50% width, 1-col mobile 100% width), card styling (52x52 icon rounded 8px border rgba(0,0,0,0.1), text container padding-left 10px, title 14px font-weight 600, info & description 12px #56524e) |
| Local Assets | `smart-b2b.png`, `dynamic-payhide.png`, `dynamic-quote-request.jpeg`, `dynamic-checkout-upsell.jpeg`, `easy-shipping-rate-manager.png` stored in `public/assets/shopify-apps/` |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| 1. Hero | `.inner-hero-sec`: H1 `Shopify App` centered in 770px max-width container, background gradient #e8f9ef → #e6fafd | `ShopifyAppsPage` (inner-hero-sec) |
| 2. Apps List | `.shopify-apps-list`: 4-column responsive card grid (4-col on desktop >1200px, 2-col on 768-1199px, 1-col on <768px). Each card has 52px app icon, title, pricing/trial badge, and description with external link to Shopify App Store (`target="_blank" rel="noopener noreferrer"`) | `ShopifyAppsPage` (shopify-apps-list) |

## Verification Details

- **Visual Match**: Exact match of hero gradient, padding scales, Montserrat typography, card widths (4-col / 2-col / 1-col), 52px icon dimensions, borders, and hover color transitions.
- **Asset Integrity**: 5 canonical app icons saved in `public/assets/shopify-apps/` with zero duplication across the codebase.
- **SEO & Schema**: Emits `CollectionPage`, `ItemList` (5 SoftwareApplication items), `BreadcrumbList`, `Organization`, and `WebSite`.
- **URL Policy**: Verified slashless `/shopify-apps`.
