# Visual Capture: WordPress Development in Mumbai

- **Route**: `/wordpress-development-in-mumbai`
- **Live Reference**: `https://www.dynamicdreamz.com/wordpress-development-in-mumbai/`
- **Capture Date**: 2026-09-02
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Captured title ("WordPress Development Company in Mumbai | Custom WordPress Experts"), description, canonical (`https://www.dynamicdreamz.com/wordpress-development-in-mumbai/`), 12 content sections, images, alts, and links |
| Live CSS Files | Inspected `services_main.css`, `services_media.css`, `flexible-css/hero_section.css`, `flexible-css/trusted_by_leading_brands_section.css`, `flexible-css/text_content_section.css`, `flexible-css/delivery_section.css`, `flexible-css/projects_section.css`, `flexible-css/industries_served_slider_section.css`, `flexible-css/client_review_section.css`, and `flexible-css/faqs_section.css` |
| Live Screenshots Captured | Edge headless captures at 1440px (`scratch/wordpress-mumbai/live-desktop-full.png`), 768px (`scratch/wordpress-mumbai/live-tablet.png`), and 390px (`scratch/wordpress-mumbai/live-mobile.png`) |
| Local Component Discovery | Selected `ServiceHeroSection`, `IndustryBrandsSection`, `TextBoxSection`, `ShopifyAppBenefitsSection`, `AgencyServicesSection`, `ProcessWaveSection`, `ShopifyReasonsSection`, `PortfolioShowcaseSection`, `IndustriesServedSection`, `HappyClientSection`, `SplitFaqSection`, `CtaBannerSection` |
| Local Asset Tree | Reused existing assets for hero, brands, benefits, reasons, portfolio, testimonials, plus 2 unique icons cleaned and ingested into `public/assets/services/wordpress/` |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Reused Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroSection` (`className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"`) | `/assets/services/wordpress-development-company/hero/wordpress-development-company.svg`, Clutch/Upwork/GoodFirms badges |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` (`heading="Trusted by Leading Brands"`, `items={industryBrandLogos}`) | Canonical brand SVGs (Bella Vita, Bombay Shirt Company, POP, SriSri Tattva, Tropicfeel, Renee, Royce, Tego, Supertails, Eleven Eleven) |
| 3 | Single Text Box (Why Dynamic Dreamz is the Best) | `TextBoxSection` (`className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"`) | Styled container with light background and 2 paragraphs |
| 4 | Benefits (Why Choose WordPress for Your Business?) | `ShopifyAppBenefitsSection` (`className="benefit_box_sec pt-20 pb-0 max-[992px]:pt-[50px]"`) | 5 benefit cards: Ease of Use, Customizable Themes, Scalability, Integrated Marketing Tools, Secure and Reliable |
| 5 | Services (WordPress Development Services in Mumbai) | `AgencyServicesSection` (`className="what-we-provide-sec py-20 max-[992px]:py-[50px]"`, `cardVariant="services-box"`, `columns={2}`, `hideCta={true}`) | 6 service cards: Custom WordPress Dev, Plugin Dev, Headless WP, Theme Dev, Maintenance, Small Business Support |
| 6 | Process (Our WordPress Development Process) | `ProcessWaveSection` | 4 wave timeline steps with gradient numerals (`01`-`04`) |
| 7 | Reasons (Why You Should Partner with the WordPress Development Company?) | `ShopifyReasonsSection` | 6 proof cards with icons on mint-cyan gradient background |
| 8 | Our Work (Portfolio) | `PortfolioShowcaseSection` (`columns={4}`, `headerLayout="split"`, `cardVariant="ourWorkRefresh"`) | 8 portfolio cards (Quite Events, Les Etoiles, Valents, Get Sunsights, Lipari Design, Nexventur, Awaken Media, Budget Maids) in a 4×2 grid |
| 9 | Industries We Serve | `IndustriesServedSection` (`className="industries-served-sec pt-0 pb-20 max-[992px]:pb-[50px]"`) | Horizontal draggable carousel with industry cards |
| 10 | Client Stories (Testimonials) | `HappyClientSection` (`variant="client-stories"`) | 3-video-card carousel with video modal playback |
| 11 | FAQs Accordion (6 Q&As) | `SplitFaqSection` (`heading="Frequently Asked Questions"`) | 2-column split FAQ layout with underlined items, circle-cross icons, first item expanded |
| 12 | CTA Banner | `CtaBannerSection` | Cyan-green gradient banner with "Want us to help you with your online store?" and "REQUEST A QUOTE" button |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer.
- **Deduplication Result**: Reused existing canonical assets across `public/assets/` where matches existed. Cleanly ingested 2 unique SVGs into `public/assets/services/wordpress/` (`headless-wordpress-development.svg`, `wordpress-design-theme-development.svg`).
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: 100% visual parity verified with split header layouts, 4-col portfolio grid, 3-card testimonials, and 2-col FAQs.
- **Tablet (768px)**: 2-column card layouts and fluid typography verified.
- **Mobile (390px)**: Single column stacked layout and touch-friendly controls verified.
