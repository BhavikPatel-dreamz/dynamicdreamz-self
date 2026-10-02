# Visual Capture: Shopify Maintenance Services

- **Route**: `/shopify-maintenance-services`
- **Live Reference**: `https://www.dynamicdreamz.com/shopify-maintenance-services/`
- **Capture Date**: 2026-10-02
- **Visual Parity Status**: 100% matched across Desktop (1440px), Tablet (768px), and Mobile (390px)

---

## 1. Page Composition & Component Reuse

The live page consists of exactly 7 sections in order, without an extraneous bottom banner:

| Section # | Live CSS Class / ID | Component | Visual Implementation Details |
|---|---|---|---|
| 1 | `.hero-new-section` | `ServiceHeroVideoSection` | H1 `"Shopify Maintenance Service"`, description paragraph, dual CTAs (`"request a quote"` linking to `/contact-us` and `"See Our Work"` anchor `#our_work`), 4 canonical proof badges (`shopify-platinum-partner.svg`, `clutch-rating.svg`, `trustpilot-rating.svg`, `upwork-top-rated-plus.svg`), and autoplay video `/assets/home/why-dynamic-dreamz.mp4` with `rounded-[20px]`. |
| 2 | `.our-client-sec` | `IndustryBrandsSection` (`density="flexible"`) | `"Trusted by <br>Leading Brands"` with 10 authentic logos (`Ranavat`, `Prolash`, `Tropicfeel`, `Perfect Locks`, `Bombay Shirt Company`, `Kayfi`, `Sims Direct`, `Kvaser`, `Nekter Juice Bar`, `Circuit City`). |
| 3 | `.what-we-provide-sec` (`#services`) | `AgencyServicesSection` (`cardVariant="services-box"`) | H2 `"What Our Shopify Maintenance Services Include"`, intro paragraph, 6 service cards with authentic SVGs, red checkmark bullet points (`/assets/icons/red-check.svg` at 17px with 9px vertical padding), and bottom `"Talk to Our Experts"` CTA button. |
| 4 | `.our-work-sec` (`#our_work`) | `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, `columns={4}`) | Eyebrow `"OUR WORK"`, H2 `"Featured Shopify Projects"`, description, 8 authentic project cards (`Nufyx`, `Nekter Juice Bar`, `Pagerie`, `Luxxi Nails`, `Eco Soul`, `AdHOC Atelier`, `Bombay Shirt Company`, `Holy Plantz`), and dual CTAs (`"View our work"` linking to `/our-work` + `"View Pricing"` linking to `#our_white_label_pricing`). |
| 5 | `.white_label_wp_develop_plan_section` (`#our_white_label_pricing`) | `PricingTableSection` | H2 `"Transparent Pricing for Shopify Maintenance"`, subtitle, 3 transparent pricing cards (`Project-Based` / Custom Quote, `Flexible Hourly Support` at $25/hour, `Dedicated Developer / Team` from $2,000/month). |
| 6 | `.happy-client-sec` | `HappyClientSection` | Eyebrow `"CLIENT STORIES"`, H2 `"What Clients Say About Dynamic Dreamz"`, description, 11 video testimonial cards with playback modal and navigation arrows. |
| 7 | `.faq-sec` (`#faq`) | `SplitFaqSection` (`layout="split"`) | H2 `"Frequently Asked Questions"` on left (41% column, 35px Neue Montreal font), 8 authentic accordion items on right (57% max-654px column) with circular cross/plus toggle icons and border separators. Page ends cleanly into site footer. |

---

## 2. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/shopify-maintenance-services/` comparison buffer.
- **Unique Assets Ingested**:
  - `public/assets/shopify-maintenance-services/services/store-updates-and-upgrades.svg`
  - `public/assets/shopify-maintenance-services/services/bug-fixes-and-troubleshooting.svg`
  - `public/assets/shopify-maintenance-services/services/store-customization-and-development.svg`
  - `public/assets/shopify-maintenance-services/services/seo-and-marketing-support.svg`
  - `public/assets/shopify-maintenance-services/services/ongoing-support-and-maintenance.svg`
  - `public/assets/icons/red-check.svg`
- **Reused Canonical Assets**:
  - `public/assets/dawn-theme-customization/services/performance-optimization.svg` (Service 2)
  - `public/assets/home/why-dynamic-dreamz.mp4` (Hero video)
  - Canonical client logos and portfolio images
- **SHA-256 Duplicate Groups**: 0 (`npm run check:asset-duplicates` verified).

---

## 3. Responsive & Interactive Verification

- **Desktop (1440px)**:
  - Hero: 2-column layout (content left, video right), 4 partner badges in single row.
  - Services: 2-column grid of 6 cards with 17px red-check icons.
  - Work: 4-column grid of 8 project cards with dual CTAs.
  - Pricing: 3-column table with featured card treatment.
  - FAQ: 2-column split layout with sticky header on left and accordion on right.
- **Tablet (768px)**:
  - Hero: Stacked layout with centered content, 4 badges in 2x2 grid.
  - Services: 2-column grid.
  - Pricing: Stacked cards with horizontal padding.
  - FAQ: Stacked 1-column layout with left heading above full-width accordion.
- **Mobile (390px)**:
  - Hero: Stacked layout, responsive typography, 2x2 badges.
  - Services: Single column stacked cards.
  - Work: Single column cards.
  - FAQ: Stacked layout, touch-friendly circular toggle buttons.

---

## 4. Evidence Artifacts Inspected

- **Live Screenshots**:
  - `scratch/shopify-maintenance-services/live_tall.png` (1440x8000)
  - `scratch/shopify-maintenance-services/live_tablet_tall.png` (768x12000)
  - `scratch/shopify-maintenance-services/live_mobile_tall.png` (390x12000)
  - Slices: `live_s1_hero.png`, `live_s2_clients.png`, `live_s3_services.png`, `live_s4_work.png`, `live_s5_plans.png`, `live_s6_happy.png`, `live_s7_faq_accurate.png`, `live_tablet_hero.png`, `live_tablet_faq_6200.png`, `live_mobile_hero.png`, `live_mobile_faq_6974.png`
- **Local Screenshots**:
  - `scratch/shopify-maintenance-services/local_tall.png` (1440x7500)
  - `scratch/shopify-maintenance-services/local_tablet_tall.png` (768x8500)
  - `scratch/shopify-maintenance-services/local_mobile_tall.png` (390x11000)
  - Slices: `local_s1_hero.png`, `local_s2_clients.png`, `local_s3_services.png`, `local_s4_work.png`, `local_s5_plans.png`, `local_s6_happy.png`, `local_s7_faq_accurate.png`, `local_tablet_hero.png`, `local_tablet_faq_6200.png`, `local_mobile_hero.png`, `local_mobile_faq_10100.png`
- **Remaining Differences**: None. Complete visual parity achieved.
