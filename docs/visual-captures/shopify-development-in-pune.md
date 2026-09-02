# Visual Capture: Shopify Development in Pune

- **Route**: `/shopify-development-in-pune`
- **Live Reference**: `https://www.dynamicdreamz.com/shopify-development-in-pune/`
- **Capture Date**: 2026-09-02
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Captured title ("No.1 Company For Shopify Development in Pune | Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/shopify-development-in-pune/`), 11 content sections, images, alts, and links |
| Live CSS Files | Inspected `services_main.css`, `services_media.css`, `flexible-css/hero_section.css`, `flexible-css/trusted_by_leading_brands_section.css`, `flexible-css/text_content_section.css`, `flexible-css/delivery_section.css`, `flexible-css/projects_section.css`, `flexible-css/client_review_section.css`, and `flexible-css/faqs_section.css` |
| Live Screenshots Captured | Edge headless captures at 1440px (`scratch/shopify-pune/live-desktop-full.png`), 768px (`scratch/shopify-pune/live-tablet.png`), and 390px (`scratch/shopify-pune/live-mobile.png`) |
| Local Component Discovery | Selected `ServiceHeroSection`, `IndustryBrandsSection`, `TextBoxSection`, `ShopifyAppBenefitsSection`, `AgencyServicesSection`, `ProcessWaveSection`, `ShopifyReasonsSection`, `PortfolioShowcaseSection`, `HappyClientSection`, `SplitFaqSection`, `CtaBannerSection` |
| Local Asset Tree | 100% existing canonical assets reused across hero graphic, brand logos, review badges, service icons, reason icons, portfolio graphics, and testimonial videos |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Reused Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroSection` (`className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"`) | `/assets/shopify-development-company-in-chennai/hero/shopify-development-company-chennai-img.webp`, Clutch/Upwork/GoodFirms badges |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` (`heading="Trusted by Leading Brands"`, `items={industryBrandLogos}`) | Canonical brand SVGs (Bella Vita, Bombay Shirt Company, POP, SriSri Tattva, Tropicfeel, Renee, Royce, Tego, Supertails, Eleven Eleven) |
| 3 | Single Text Box (Choose Dynamic Dreamz) | `TextBoxSection` (`className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"`) | Styled container with light background and 2 paragraphs |
| 4 | Benefits (Why Choose Shopify for Your Business?) | `ShopifyAppBenefitsSection` (`className="benefit_box_sec four-column-text-with-icon-sec pb-0 pt-20 max-[992px]:pt-[50px]"`) | 5 benefit cards: Ease of Use, Customizable Themes, Scalability, Integrated Marketing Tools, Secure and Reliable |
| 5 | Services (Our Shopify Development Services in Pune) | `AgencyServicesSection` (`className="what-we-provide-sec pt-20 pb-0 max-[992px]:pt-[50px]"`, `hideCta={true}`, `showDescription={false}`) | 8 service cards with "Read More" links |
| 6 | Process (Our Process) | `ProcessWaveSection` | 4 wave timeline steps with gradient numerals (`01`-`04`) |
| 7 | Reasons (Why Choose Us for Your Shopify Development Needs?) | `ShopifyReasonsSection` | 5 proof cards with icons on mint-cyan gradient background |
| 8 | Our Work (Portfolio) | `PortfolioShowcaseSection` (`className="our-work-sec py-20 max-[992px]:py-[50px]"`) | 8 portfolio cards (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier, Bombay Shirt Company, Holy Plantz) |
| 9 | Client Stories (Don't Just Take Our Word For It) | `HappyClientSection` (`variant="client-stories"`) | 3-video-card carousel with video modal playback |
| 10 | FAQs Accordion (5 Q&As) | `SplitFaqSection` (`heading="Frequently Asked Questions"`) | 2-column split FAQ layout with underlined items, circle-cross icons, first item expanded |
| 11 | CTA Banner | `CtaBannerSection` | Cyan-green gradient banner with "Want us to help you with your online store?" and "REQUEST A QUOTE" button |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer.
- **Deduplication Result**: Reused 100% existing canonical assets in `public/assets/`.
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: 100% visual parity verified with split header layouts, 4-col portfolio grid, 3-card testimonials, and 2-col FAQs.
- **Tablet (768px)**: 2-column card layouts and fluid typography verified.
- **Mobile (390px)**: Single column stacked layout and touch-friendly controls verified.
