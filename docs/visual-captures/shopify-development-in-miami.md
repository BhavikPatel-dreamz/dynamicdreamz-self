# Visual Parity Capture: Shopify Development in Miami

- **Route**: `/shopify-development-in-miami`
- **Live URL Reference**: `https://www.dynamicdreamz.com/shopify-development-in-miami/`
- **Capture Date**: 2026-09-02
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/hero_section.css`
  - `.inner-hero-sec.single-full-img` (hero layout, 50%/50% split, review badges for Clutch, Upwork, GoodFirms with 5.0 rating, red CTA button "get in touch")
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (trusted brand partner logo marquee/slider with 10 client logos)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/text_content_section.css`
  - `.single-text-box-sec.pb-0` (centered text container with 3 narrative paragraphs, an H3 subtitle "Have a look at our numbers:", and a 5-item bulleted proof list)
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.benefit_box_sec.four-column-text-with-icon-sec.pb-0` (5 platform benefit cards with icons, titles, and descriptions tailored to Miami / LATAM commerce)
  - `.what-we-provide-sec` (2-column services grid, 8 cards with hover gradient border, icons, descriptions, and arrow links)
  - `.our-process-sec.inner-process-sec` (4-step wave process layout with SVG connector and numbered cards)
  - `.shopify-customization-services-sec` (6 reasons carousel cards with gradient background)
  - `.our-work-sec` (4-column Shopify portfolio project grid with 8 projects)
  - `.happy-client-sec` (video testimonial carousel with modal playback)
  - `.book-intro-call-section.pt-0` (split layout with inquiry contact form "Let's Build Something Great Together" on left and "Book an Intro Call" card on right)
  - `.faq-sec` (8 accordion FAQ items with active states)
  - `.request-banner` (bottom full-width red gradient CTA banner with white button)
- `/wp-content/themes/dynamicdreamz/assets/css/services/media.css`
  - Breakpoints: desktop (>=1200px), tablet (768px-1199px / <=991px), mobile (<=767px / <=575px).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Shopify Development in Miami That Moves as Fast as the City`) | `ServiceHeroSection` | Reused |
| 2 | Trusted by Leading Brands (10 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Why Dynamic Dreamz? (3 paragraphs + H3 + 5 bullet points) | `TextBoxSection` | Reused |
| 4 | Why Shopify is the Right Platform for Miami Businesses? (5 cards) | `ShopifyAppBenefitsSection` | Reused |
| 5 | Shopify Development Services in Miami (8 service cards) | `AgencyServicesSection` | Reused |
| 6 | How We Work: Our Shopify Development Process (4 steps with wave SVG) | `ProcessWaveSection` | Reused |
| 7 | Why Choose Dynamic Dreamz for Shopify Development in Miami? (6 cards) | `ShopifyReasonsSection` | Reused |
| 8 | Our Work (8 Shopify portfolio project cards) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 9 | Don't Just Take Our Word For It (Client Stories video slider) | `HappyClientSection` | Reused |
| 10 | Let's Build Something Great Together & Book an Intro Call | `BookIntroCallSection` | Reused |
| 11 | Frequently Asked Questions (8 accordion items) | `SplitFaqSection` & `FaqAccordion` | Reused |
| 12 | Want us to help you with your online store? | `CtaBannerSection` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: Graphic `shopify-development-company-chennai-img.webp` (520x480).
- **Brand Colors**: Light gradient `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`, red primary CTA `#df4644` / `#cd3735`.

---

## 4. Asset Deduplication & Integrity

- 10 brand partner logos reused directly from `public/assets/clients/`:
  - `ranavat.svg`, `prolash.svg`, `tropicfeel.svg`, `perfect-locks.svg`, `bombay-shirt-company.svg`, `kayfi.svg`, `simsdirect.svg`, `kvaser.svg`, `nelter.svg`, `circuit-city.svg`
- Benefit icons reused directly from canonical paths:
  - `/assets/shopify-development-company-in-chennai/benefits/user-friendly.svg`
  - `/assets/shopify-theme-customization/services/responsive-design.svg`
  - `/assets/shopify-development-company-in-chennai/benefits/scalable.svg`
  - `/assets/etsy-to-shopify-migration/marketing-integration.svg`
  - `/assets/shopify-development-company-in-chennai/benefits/secure.svg`
- Service icons reused from canonical paths across `public/assets/`:
  - `/assets/shopify-plus-agency/icons/shopify-plus-icon.svg`
  - `/assets/services/wordpress/wordpress-custom-theme-development.svg`
  - `/assets/services/shopify-development-agency/figma-conversion-icon.svg`
  - `/assets/services/shopify-development-agency/app-integration-icon.svg`
  - `/assets/hire-shopify-developers/icons/shopify-migration.svg`
  - `/assets/services/wordpress/wordpress-maintenance.svg`
  - `/assets/services/shopify-development-agency/shopify-upgrading-icon.svg`
  - `/assets/services/wordpress/wordpress-white-label-development.svg`
- Process icons reused from `/assets/services/bigcommerce-development/process/`:
  - `initial-consultation.svg`, `planning-and-strategy.svg`, `development-and-implementation.svg`, `testing-launch-support.svg`
- 6 reasons carousel icons reused from canonical paths:
  - `/assets/shopify-plus-agency/icons/shopify-plus-icon.svg`
  - `/assets/services/shopify-mobile-app-development/benefits/enhance-experience-icon.svg`
  - `/assets/services/shopify-development-in-new-york/fixed-price-projects.svg`
  - `/assets/impulse-theme-customization/features/customizable-sections.svg`
  - `/assets/services/bigcommerce-development/advantages/timely-delivery.svg`
  - `/assets/shopify-development-company-in-chennai/benefits/user-friendly.svg`
- 8 portfolio project cards reused from canonical paths:
  - `nufyx-protein-products.webp`, `nekter-juice-bar.webp`, `pagerie-dog-accessories.webp`, `luxxi-nails.webp`, `eco-soul.webp`, `adhoc-atler.webp`, `bombay-shirt-company-model.webp`, `holy-plantz.webp`
- Total duplicate hash groups across `public/assets/`: 0.
