# Android App Development Page

Live URL: `https://www.dynamicdreamz.com/android-app-development/`
Local route: `/android-app-development`
Date checked: 2026-09-30
Browser/source: Google Chrome headless inspection of the rendered live page and the local production build, View Page Source, live page CSS (`assets/css/flexible-css/hero_new_section.css`, `assets/css/flexible-css/white_label_flexible_wordpress_development_plans_section.css`, `assets/css/flexible-css/our_shopify_team_behind_it_section.css`, `assets/css/flexible-css/seo_safe_shopify_migration_section.css`, `assets/css/flexible-css/shopify_theme_customization_services.css`, `assets/css/flexible-css/why_choose_dynamic_dreamz_for_shopify_migration.css`, `assets/css/flexible-css/faqs_section.css`, `assets/css/flexible-css/projects_section.css`, `assets/css/flexible-css/client_review_section.css`, `assets/css/flexible-css/trusted_by_leading_brands_section.css`, `assets/css/services/main.css`, `assets/css/default-media.css`, `style.css`), live JS (AOS reveals), and a local component/asset audit.

## Status

The live page was fully redesigned after the previous local capture (2026-08-19). The
old capture described a 2-column hero with a review wheel, 9 service cards and 11
video testimonials; none of that survives on live today. The page is now a 12-section
architecture that is structurally identical to the already-migrated
`/cross-platform-app-development` and `/mobile-application-development` routes, so this
page was rebuilt from those established section components rather than new markup.

Live UI is preserved. No visible copy, label, counter, CTA or section order was
changed. Copy-level observations that would require owner approval are queued in
`docs/page-content-improvements.md` instead of being applied.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified 12-section architecture in live order: 2-column hero with 3-phone mockup slider, 12-logo brand strip, dark "Custom Android Development" section, 6-box "What We Build" grid, 8-box "Android App Development Services" grid, dark "Architecture & Technology" section, 6-step process grid, 4-card portfolio showcase, 3-tier pricing table, 4-item "Why Dynamic Dreamz" section with Shopify Platinum logo, "Client Stories" slider, and 8-item split FAQ. Section geometry measured against live: max drift 12px over a 9047px document (0.19%). |
| 768x1024 (Tablet) | Verified responsive stacking: centered hero text with the phone mockup still hidden, brand strip at full width, 3-column service and process grids (live holds 3 columns to 767px), single-column pricing cards. Section geometry measured against live: max drift 113px over a 11896px document (0.81%). |
| 390x844 (Mobile) | Verified mobile layout: centered hero, 3 rating badges in a single equal-width row with vertical rules between them and no cross divider, stacked single-column service/process/pricing grids. Section geometry measured against live: max drift 146px over a 13739px document (0.34%). |

Live and local screenshots for all three viewports are stored in
`docs/visual-captures/android-app-development/`.

## Section Order and Live Sources

| # | Live wrapper | Local component | Notes |
| --- | --- | --- | --- |
| 1 | `hero-new-section hide-logo` | `ShopifyMobileAppHeroSection` | `hide-logo` hides `.global_brands_item:first-child`, so only 3 of the 4 shipped badges render. Local passes exactly those 3, so the visible result matches without needing the hidden node. |
| 2 | `our-client-sec` | `IndustryBrandsSection` (`density="flexible"`) | 12 client logos. |
| 3 | `seo_safe_shopify_migration_section box-bg-green` | `AiEmpoweredDeliverySection` (`variant="dark-green"`) | 4 tool items plus "Discuss Your App Requirement" CTA. |
| 4 | `theme-customization-services yellow` | `ThemeCustomizationServicesSection` (`variant="yellow"`) | 6 "What We Build" boxes. |
| 5 | `theme-customization-services green` | `ThemeCustomizationServicesSection` (`variant="green"`) | 8 "Android App Development Services" boxes. |
| 6 | `seo_safe_shopify_migration_section box-bg-green` | `AiEmpoweredDeliverySection` (`variant="dark-green"`) | Architecture & Technology; no CTA on live, and none locally. |
| 7 | `our_shopify_team_behind_it_section` | `ShopifyMigrationNumberedGridSection` | Steps 01-06. |
| 8 | `our-work-sec#our_work` | `ShopifyMobileAppWorkSection` (`className="pt-0"`) | Portfolio + "VIEW OUR WORK" + "View Pricing". |
| 9 | `#our_white_label_pricing` | `PricingTableSection` | Project-Based / Dedicated Developer / Team / Post-Launch. |
| 10 | `why_choose_dynamic_dreamz_for_shopify_migration` | `WhyChooseShopifyMigrationSection` | 4 item boxes, Shopify Platinum logo, "20+ Years of Ecommerce Delivery", 4 stats. |
| 11 | `happy-client-sec pt-80` | `HappyClientSection` (`variant="client-stories"`) | "Don't Just Take Our Word For It". |
| 12 | `faq-sec` | `SplitFaqSection` (`layout="split"`, `iconVariant="circle-cross"`) | 8 items, no trailing CTA banner. |

## Icon Mapping

All 18 inline SVGs on live map to existing React icon components in
`src/components/sections/mobile-application/mobile-app-icons.tsx`, verified by comparing
`d` path data:

- What We Build: `UtilityBusinessAppsIcon`, `ConsumerMobileAppsIcon`, `BookingServiceAppsIcon`, `MarketplacePlatformAppsIcon`, `EcommerceMobileAppsIcon`, `ShopifyStoreToMobileAppIcon`
- Services: `ProductDiscoveryUiUxIcon`, `IosAppDevelopmentIcon` (live reuses the Apple glyph for native Android), `CrossPlatformAppDevelopmentIcon`, `BackendApisIntegrationsIcon`, `QaMaintenanceAppUpdatesIcon`, `QaLaunchSupportIcon`, `ExistingAppCustomizationIcon`, `ShopifyStoreToMobileAppIcon`
- Why Dynamic Dreamz: `CrossPlatformAppDevelopmentIcon`, `BackendApisIntegrationsIcon`, `TestingShieldIcon`, `LifecycleUpdateIcon`

`ExistingAppCustomizationIcon` (sliders/tune glyph) was the only icon with no existing
equivalent and was added to the shared icon module.

## Interaction States and Animation

- Hero phone mockup is a slider inside a static `frame.png`; on live it is hidden below
  992px, and the local `right-col` uses `max-[991px]:hidden` to match.
- Live uses AOS reveal animations. Headless capture occasionally measured live sections
  before reveals fired (one run reported a collapsed 279px testimonial block against a
  stable 848px), so live geometry numbers in this note are taken from runs where every
  section reported a plausible height.
- `HappyClientSection` already normalizes the live `<br>` in the testimonial intro to a
  single space, so live copy is passed through verbatim.
- No new animation, transition or hover treatment was introduced.

## Shared Component Corrections

Measuring live geometry surfaced three genuine breakpoint bugs in shared components.
All three were fixed from live CSS and verified by re-measurement:

1. `ShopifyMobileAppHeroSection` — live `.hero-new-section.hide-logo .global_brands_item`
   is `width: 33.33%` below 768px with the cross dividers suppressed and
   `border-right` between items. Local hardcoded a 2-column grid with cross dividers,
   which pushed 3 badges onto two rows (+70px). Added an optional
   `mobileBadgeLayout?: "divided" | "row"` content prop defaulting to the previous
   behavior; Android opts into `"row"`. Sibling pages were confirmed unchanged.
2. `PricingTableSection` — local was missing live's `max-width: 1199/991/767px` rules
   for card padding, `pricing_price` sizing/margins, `pricing_badge` margin, and card
   grid gaps. Local also used 2 pricing columns below 992px, whereas live's
   `.shopify-plus-engagement .pricing_card { width: 100% }` collapses to a single column
   at 991px. Tablet pricing section went from -331px to +84px; mobile from +168px to +43px.
3. `ShopifyMigrationNumberedGridSection` — live holds `repeat(3, 1fr)` down to 767px and
   only then stacks. Local dropped to 2 columns at 991px, adding a third row at tablet
   widths. Tablet process section went from +135px to -1px.

These components are shared, so the corrections also move their other consumers toward
their own live counterparts. Every consumer was re-checked for HTTP 200 and for
unchanged badge markup where the default layout applies.

## Remaining Differences

- Hero `left-col` vertical padding is 32px locally against 40px on live below 768px.
  Net hero height is +14px on mobile because local heading/paragraph/button-group
  margins are looser than live's. The two effects partly cancel; no change applied
  because altering the shared margin set would shift every sibling hero.
- Distributed per-section height deltas remain in the 10-28px range at all three
  viewports, from Tailwind approximations of live line-heights. No section is
  structurally different and every section heading matches exactly.
- FAQ section is 101px shorter on mobile than live. Cause not yet isolated.
- Portfolio card category renders as `Android App Development` in the DOM and
  `ANDROID APP DEVELOPMENT` visually, matching live's uppercase result. The casing is
  applied by the shared card's `uppercase` utility rather than baked into the string.

## Asset Work

- Live OG image `android-app-development-dynamic-dreamz.png` (1731x909) was downloaded to
  `scratch/`, SHA-256 checked against all of `public/assets/**` (no match), then resized
  to 1200x630 to match the dominant project convention (6 of 7 existing OG PNGs, including
  both sibling mobile pages) and stored at `public/assets/og/android-app-development.png`.
- All 4 portfolio images, 3 hero slides, hero frame, 12 client logos, 3 rating badges and
  the Shopify Platinum logo already existed in `public/assets/` and were reused by path.
  No new image assets were downloaded into `public/assets/` other than the OG image.
- `npm run check:asset-duplicates` reports 0 exact byte, 0 visual SVG and 0 pixel raster
  duplicate groups across 1760 assets.
