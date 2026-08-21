# Visual Parity Capture: Shopify Development Company in Chennai

- **Route**: `/shopify-development-company-in-chennai`
- **Live URL Reference**: `https://www.dynamicdreamz.com/shopify-development-company-in-chennai/`
- **Capture Date**: 2026-08-21
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.inner-hero-sec.single-full-img` (hero layout, 50%/50% split, `.review-wrap { display: none; }`, hero graphic `shopify-development-company-chennai-img.svg`, CTA "get in touch" -> `/request-quote`)
  - `.our-client-sec` (trusted brand logos with Indian client brands wrapper)
  - `.single-text-box-sec.pb-0` (introductory single text box section)
  - `.benefit_box_sec.four-column-text-with-icon-sec.pb-0` (4-column benefit icon card grid)
  - `.what-we-provide-sec` (7-card services grid)
  - `.our-process-sec.inner-process-sec.shopify-development-process` (serpentine process wave layout with 4 stages)
  - `.shopify-customization-services-sec` (6 reason cards with gradient background)
  - `.our-work-sec` (Shopify portfolio showcase with 6 project cards: Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier)
  - `.happy-client-sec` (horizontal client video testimonial slider with 11 cards)
  - `.faq-sec` (accordion FAQ items, 6 FAQs)
  - `.request-banner` (CTA banner at bottom)
- `/wp-content/themes/dynamicdreamz/assets/css/services/media.css`
  - Breakpoints: desktop (>=1200px), tablet (768px-1199px / <=991px), mobile (<=767px / <=575px).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Shopify Development Company in Chennai`) | `ThemeHeroSection` / `ServiceHeroSection` | Reused |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Single Text Box (`Choose Dynamic Dreamz as the Best...`) | `TextBoxSection` | Reused |
| 4 | Why Choose Shopify for Your Business (4 benefit cards) | `ShopifyAppBenefitsSection` | Reused |
| 5 | Our Shopify Development Services (7 service cards) | `ShopifyServicesSection` | Reused |
| 6 | Our Shopify Development Process (4 wave process steps) | `ProcessWaveSection` | Reused |
| 7 | Why Choose Us for Your Shopify Development Needs? (6 cards) | `ShopifyReasonsSection` | Reused |
| 8 | Our Work (6 Shopify projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 9 | Customers' Testimonials (11 video testimonials) | `HappyClientSection` | Reused |
| 10 | Frequently Asked Questions (6 accordion items) | `FaqSection` & `FaqAccordion` | Reused |
| 11 | Request a Quote Banner | `CtaBannerSection` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: 535x370 WebP image (`shopify-development-company-chennai-img.webp`).
- **Brand Colors**: Light gradient `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`, red primary CTA `#df4644` / `#cd3735`.

---

## 4. Asset Deduplication & Integrity

- 12 brand partner logos reused directly from `public/assets/clients/`:
  - `supertails.svg`
  - `eleven-eleven.svg`
  - `bella-vita.svg`
  - `bombay-shirt-company.svg`
  - `popclub.svg`
  - `sri-sri-tattva.svg`
  - `tropicfeel.svg`
  - `renee.svg`
  - `royce-chocolate.svg`
  - `tego.svg`
  - `nelter.svg`
  - `rare-rabbit.svg`
- Reused canonical SVGs:
  - `/assets/shopify-theme-customization/services/responsive-design.svg`
  - `/assets/services/shopify-development-agency/figma-conversion-icon.svg`
  - `/assets/services/shopify-development-agency/app-integration-icon.svg`
  - `/assets/hire-shopify-developers/icons/shopify-migration.svg`
  - `/assets/services/shopify-development-agency/shopify-upgrading-icon.svg`
  - `/assets/services/wordpress/wordpress-white-label-development.svg`
  - `/assets/services/bigcommerce-development/advantages/expertise-in-custom-development.svg`
  - `/assets/wix-to-shopify-migration/cs_icon.svg`
  - `/assets/services/wordpress-development-company/benefits/user-friendly-interface.svg`
  - `/assets/services/wordpress-development-company/advantages/ongoing-support-maintenance.svg`
- 6 Shopify portfolio project screenshots reused from canonical paths:
  - `/assets/healthcare/portfolio/nufyx-protein-products.webp`
  - `/assets/food-beverages/portfolio/nekter-juice-bar.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/beauty-cosmetics/portfolio/luxxi-nails.webp`
  - `/assets/our-work/projects/eco-soul.webp`
  - `/assets/hire-shopify-developers/portfolio/adhoc-atler.webp`
- Unique assets ingested under `public/assets/shopify-development-company-in-chennai/`:
  - `hero/shopify-development-company-chennai-img.webp` (535x370 WebP, 11KB)
  - `benefits/user-friendly.svg`
  - `benefits/scalable.svg`
  - `benefits/secure.svg`
  - `services/maintenance.svg`
  - `reasons/seo-optimization.svg`
  - `reasons/comprehensive-services.svg`
- Total duplicate hash groups across `public/assets/`: 0.
