# Visual Capture: WordPress Development in Pune

- **Route**: `/wordpress-development-in-pune`
- **Live Reference**: `https://www.dynamicdreamz.com/wordpress-development-in-pune/`
- **Capture Date**: 2026-09-01
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Captured title ("#1 Company for WordPress Development in Pune | Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/wordpress-development-in-pune/`), 9 content sections, images, alts, and links |
| Live CSS Files | Inspected `services_main.css`, `services_media.css`, and flexible CSS modules for hero, single-text-box, process (`.our-process-sec`), why-choose-us (`.shopify-customization-services-sec`), portfolio (`.our-work-sec`, `.our_work_team`), happy-client, and split FAQ sections |
| Live Screenshots Captured | Edge headless captures at 1440px (`scratch/wordpress-pune/live-desktop-full.png`), 768px (`scratch/wordpress-pune/live-tablet.png`), and 390px (`scratch/wordpress-pune/live-mobile.png`) |
| Local Component Discovery | Selected `ServiceHeroSection`, `IndustryBrandsSection`, `TextBoxSection`, `ProcessWaveSection`, `ShopifyReasonsSection`, `PortfolioShowcaseSection`, `HappyClientSection`, `SplitFaqSection`, `CtaBannerSection` |
| Local Asset Tree | 100% of images and icons reused from existing canonical assets in `public/assets/` (zero new duplicate files required) |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Reused Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroSection` (`className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"`) | `/assets/services/wordpress-development-company/hero/wordpress-development-company.svg`, Clutch/Upwork/GoodFirms badges |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` (`heading="Trusted by Leading Brands"`, `items={industryBrandLogos}`) | Canonical brand SVGs (Bombay Shirt Company, POP, SriSri Tattva, Tropicfeel, Renee, Royce, Tego, Supertails, Eleven Eleven, Bella Vita) |
| 3 | Single Text Box (Why Choose Dynamic Dreamz) | `TextBoxSection` (`className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"`) | Styled container with light background and 2 paragraphs |
| 4 | Process (Our Development Process) | `ProcessWaveSection` | 4 wave timeline steps with gradient numerals (`01`-`04`) |
| 5 | Why Partner with Us (Reasons) | `ShopifyReasonsSection` | 6 proof cards with icons on mint-cyan gradient background |
| 6 | Our Work (Portfolio) | `PortfolioShowcaseSection` (`columns={4}`, `headerLayout="split"`, `cardVariant="ourWorkRefresh"`) | 8 portfolio cards (Quite Events, Les Etoiles, Valents, Get Sunsights, Lipari Design, Nexventur, Awaken Media, Budget Maids) in a 4×2 grid |
| 7 | Client Stories (Testimonials) | `HappyClientSection` (`variant="client-stories"`) | 3-video-card carousel with video modal playback |
| 8 | FAQs Accordion (7 Q&As) | `SplitFaqSection` (`heading="Frequently Asked Questions"`) | 2-column split FAQ layout with underlined items, circle-cross icons, first item expanded |
| 9 | CTA Banner | `CtaBannerSection` | Cyan-green gradient banner with "Want us to help you with your online store?" and "REQUEST A QUOTE" button |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer.
- **Deduplication Result**: Reused 100% canonical assets across `public/assets/` for hero image, brand logos, process icons, reason icons, portfolio images, and review badges.
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: 100% visual parity verified with split header layouts, 4-col portfolio grid, 3-card testimonials, and 2-col FAQs.
- **Tablet (768px)**: 2-column card layouts and fluid typography verified.
- **Mobile (390px)**: Single column stacked layout and touch-friendly controls verified.
