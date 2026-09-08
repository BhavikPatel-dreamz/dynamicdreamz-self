# Visual Capture: Upgrade to Shopify Plus

- **Route**: `/upgrade-to-shopify-plus`
- **Live Reference**: `https://www.dynamicdreamz.com/upgrade-to-shopify-plus-2/`
- **Capture Date**: 2026-09-08
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Captured title ("Upgrade to Shopify Plus - Shopify Plus Agency & Shopify Platinum Partner | Dynamic Dreamz"), canonical (`https://www.dynamicdreamz.com/upgrade-to-shopify-plus-2/`), 9 content sections, images, alts, and links |
| Live CSS Files | Inspected `hero_new_section.css`, `white_label_counter_section.css`, `partnering_with_ambitious_brands.css`, `city_page_counter.css`, `our_shopify_team_behind_it_section.css`, `projects_section.css`, `our_development_process.css`, `city_page_why_choose_dynamic_dreamz.css`, and `faqs_section.css` |
| Live Screenshots Captured | Headless Chrome captures at 1440px (`scratch/upgrade-to-shopify-plus/live-desktop.png`), 768px (`scratch/upgrade-to-shopify-plus/live-tablet.png`), and 390px (`scratch/upgrade-to-shopify-plus/live-mobile.png`) |
| Component Discovery & Extension Plan | Reused `ServiceHeroVideoSection` (with backward-compatible `titleAccentTag="span"`), `WhiteLabelCounterSection`, `BrandPartnersSection`, `CityPageCounterSection`, `ShopifyTeamBehindItSection` (with backward-compatible optional CTAs), `PortfolioShowcaseSection`, `CityWhyChooseBoxesSection` (with backward-compatible `columns={3}`), and `FaqSection`. Created generalized `OurDevelopmentProcessSection` |
| Local Asset Tree | Reused video `/assets/home/why-dynamic-dreamz.mp4`, 4 proof badges, 20 canonical client logos, and all 8 portfolio project images. Ingested 6 clean vector SVGs to `public/assets/services/upgrade-to-shopify-plus/why-choose/` |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Component | Assets Reused / Added |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroVideoSection` (`titleAccentTag="span"`, `titleAccentClassName="text-[#ad5151] font-normal not-italic"`, CTA button, 4 partner badges, background video) | Reused `/assets/home/why-dynamic-dreamz.mp4`, 4 canonical badges: Shopify Platinum Partner, Clutch, Trustpilot, Upwork |
| 2 | Stats Counter Strip | `WhiteLabelCounterSection` (4 stat items: 50+ Agencies, Platinum Partner, 20+ Years, 150+ Experts) | Reused `WhiteLabelCounterSection` directly |
| 3 | Partner Brands | `BrandPartnersSection` (`heading="Partnering with Ambitious Brands"`, `items={clientLogos}`) | 20 canonical client logos with desktop/tablet grid and mobile marquee |
| 4 | Why Upgrade Stats | `CityPageCounterSection` (Eyebrow: "Why Upgrade", Heading: "Why Upgrading to Shopify Plus", 4 bordered stat counters: 34%, 2784%, 15%, 100%) | Modular container with responsive borders |
| 5 | Exclusive Tools | `ShopifyTeamBehindItSection` (Eyebrow: "Exclusive Tools", 8 feature cards: 9 Global Stores, Lower Your Transaction Fees, B2B, ShopifyQL Notebooks, Launchpad, International expansion, Shopify Functions, Priority support) | Extended `ShopifyTeamBehindItSection` with backward-compatible optional CTAs (`hideCtas={true}`) |
| 6 | Portfolio Showcase | `PortfolioShowcaseSection` (`columns={4}`, `cardVariant="ourWorkRefresh"`, `headerLayout="split"`, `hideCta={true}`, `variant="liveGrid"`) | 8 portfolio cards: Ranavat, Atolea Jewelry, Naakbar, Tropicfeel, Sculpt Neon, Headsets, Bella Vita, Renee |
| 7 | Development Process | `OurDevelopmentProcessSection` (Eyebrow: "How We Work", Heading: "Our Development Process", 4 boxed steps: Analyze, Design, Build, Test) | Generalized 4-step process section with responsive border grid matching live CSS |
| 8 | Why Choose Dynamic Dreamz | `CityWhyChooseBoxesSection` (`columns={3}`, `eyebrowVariant="dash"`, 6 boxes with red vector icons) | 6 clean SVGs in `/assets/services/upgrade-to-shopify-plus/why-choose/` |
| 9 | FAQs Split Accordion (5 Q&As) | `SplitFaqSection` (Eyebrow-free, 2-column layout: left-aligned "Frequently Asked Questions", right-aligned borderless accordion with circle-cross icons) | Reused `SplitFaqSection` with `idPrefix="upgrade-shopify-plus-faq"` |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer in `scratch/svgs`.
- **Deduplication Result**: Checked 6 unique SVGs against all 1,748 public assets. Cleaned and saved under `public/assets/services/upgrade-to-shopify-plus/why-choose/`.
- **SHA-256 Duplicate Groups**: 0 (`npm run check:asset-duplicates` verified 1,748 assets with 0 duplicate groups).

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: Captured `local-desktop.png` and `local-full.png` vs `live-desktop.png` and `live-full.png`. Verified exact split hero layout with video on right, 4-col stat counter strip, 5-col partner logos, 4-col why upgrade stats with red dash eyebrow, 3-col exclusive tools grid on `#eef1ed`, 4-col portfolio grid, 4-col boxed process steps, 3-col why choose boxes with red dash eyebrow, and 2-column split FAQ layout.
- **Tablet (768px)**: Captured `local-tablet.png` vs `live-tablet.png`. Verified 2x2 counter grid, centered hero, 4-col logos, responsive 2-col stats and cards.
- **Mobile (390px)**: Captured `local-mobile.png` vs `live-mobile.png`. Verified centered stacked hero, 2x2 badge grid with cross borders, 2x2 counter grid, touch-friendly accordion items, and mobile layout.
- **URL & Redirects**: Permanent 308 redirect verified from `/upgrade-to-shopify-plus-2` to `/upgrade-to-shopify-plus`. No-trailing-slash policy enforced.
