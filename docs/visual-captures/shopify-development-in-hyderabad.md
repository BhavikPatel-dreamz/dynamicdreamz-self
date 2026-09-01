# Visual Capture: Shopify Development in Hyderabad

- **Route**: `/shopify-development-in-hyderabad`
- **Live Reference**: `https://www.dynamicdreamz.com/shopify-development-in-hyderabad/`
- **Capture Date**: 2026-09-01
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Captured title ("No.1 Company For Shopify Development in Hyderabad | Dynamic Dream"), description, canonical (`https://www.dynamicdreamz.com/shopify-development-in-hyderabad/`), 11 content sections, images, alts, and links |
| Live CSS Files | Inspected `services_main.css`, `services_media.css`, and flexible CSS modules for hero, single-text-box, benefit_box_sec, what-we-provide-sec, process, why-choose-us, portfolio (`.our-work-sec`, `.our_work_team`), happy-client, and split FAQ sections |
| Live Screenshots Captured | Edge headless captures at 1440px (`scratch/hyderabad/live-desktop-full.png`), 768px (`scratch/hyderabad/live-tablet.png`), and 390px (`scratch/hyderabad/live-mobile.png`) |
| Local Component Discovery | Selected and refined `ServiceHeroSection`, `IndustryBrandsSection`, `TextBoxSection`, `ShopifyAppBenefitsSection`, `AgencyServicesSection`, `ProcessWaveSection`, `ShopifyReasonsSection`, `PortfolioShowcaseSection`, `HappyClientSection`, `SplitFaqSection`, `CtaBannerSection` |
| Local Asset Tree | 100% of images and icons reused from existing canonical assets in `public/assets/` (zero new duplicate files required) |

---

## 2. Page Composition & Component Styling Updates

| Section # | Visual Role | Component & Styling Implementation |
|---|---|---|
| 1 | Hero Banner | `ServiceHeroSection` with verified review badges (Clutch, Upwork, GoodFirms) and store graphic |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` with `#fbeed5` background and 12 live brand logos |
| 3 | Single Text Box | `TextBoxSection` with centered `#fdfbf6` rounded card and 2 paragraphs |
| 4 | Benefits | `ShopifyAppBenefitsSection` with 5 benefit cards (4 top, 1 centered bottom) |
| 5 | Services | `AgencyServicesSection` with 8 cards, 1.5px border, icons, and `READ MORE ↗` links |
| 6 | Process | `ProcessWaveSection` with wave timeline and gradient step numbers (`01`-`04`) |
| 7 | Why Choose Us | `ShopifyReasonsSection` with mint-cyan gradient background and 6 proof cards |
| 8 | **Our Work (Portfolio)** | **`PortfolioShowcaseSection`** updated with: <br>• Split header with left-aligned `— PORTFOLIO` eyebrow and description on right <br>• 4×2 grid (8 cards) on desktop, 2-col on tablet, 1-col on mobile <br>• `variant="ourWorkRefresh"` card layout matching live site: image with 1000ms hover zoom, red `SHOPIFY` category, project title, and circular arrow icon button that transitions to red background on card hover <br>• Centered `VIEW OUR WORK` primary button |
| 9 | Client Stories | `HappyClientSection` with `— CLIENT STORIES` eyebrow, 3 video cards visible per slide, and video player modal |
| 10 | FAQs Accordion | `SplitFaqSection` with 2-column layout, circle-cross toggle icons, first item open by default |
| 11 | CTA Banner | `CtaBannerSection` with cyan-to-green gradient and `REQUEST A QUOTE` button |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer.
- **Deduplication Result**: Reused 100% canonical assets across `public/assets/` for hero image, brand logos, benefit icons, service icons, process icons, reason icons, portfolio images, and review badges.
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: 100% visual parity verified via Edge headless capture (`scratch/hyderabad/local-desktop-full.png`).
- **Tablet (768px)**: 2-column card layouts and fluid typography verified (`scratch/hyderabad/local-tablet.png`).
- **Mobile (390px)**: Single column stacked layout and touch-friendly controls verified (`scratch/hyderabad/local-mobile.png`).
