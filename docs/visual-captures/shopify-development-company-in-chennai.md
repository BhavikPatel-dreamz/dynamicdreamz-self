# Visual Parity Capture: Shopify Development Company in Chennai

- **Route**: `/shopify-development-company-in-chennai`
- **Live URL Reference**: `https://www.dynamicdreamz.com/shopify-development-company-in-chennai/`
- **Capture Date**: 2026-09-22
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.hero-new-section.city-page-hero` (hero layout, 50%/50% split on desktop, tablet slider with 3 slides: Custom Shopify Development, Shopify Migration Solutions, Shopify Store Design; CTA "Talk to Our Experts" -> `/contact-us`)
  - `.our-client-sec` (trusted brand logos: 12 Indian client brands)
  - `.city-page-counter` (4-stat counter: 20+ Years, 150+ Full-Time Experts, 5,000+ Projects Completed, 2500+ Shopify Stores Built)
  - `.city-page-why-choose-boxes` (5-column benefit icon card grid: User-Friendly, Flexible and Scalable, Highly Secure, High Speed and Performance, Built-in SEO Tools)
  - `.what-we-provide-sec` (8-card services grid in 2 columns with links to respective service pages)
  - `.our-development-process` (4-step agile process cards)
  - `.city-page-why-choose-dynamic` (6 reason cards in 3 columns with white background)
  - `.our-work-sec` (Shopify portfolio showcase with 8 project cards: Renee Cosmetics, 11 11, Bombay Shirt Company, Royce Chocolate, Tropicfeel, TEGO Fit, Nekter, Rare Rabbit; CTA "View All Projects" -> `/our-work`)
  - `.happy-client-sec` (horizontal client video testimonial slider with 11 video cards)
  - `.faq-sec` (accordion FAQ items, 6 FAQs with link to `/how-to-hire-shopify-development-agency`)
  - `.request-banner` (CTA banner at bottom: "Ready to Scale Your E-Commerce Business?", "Request a Quote" -> `/contact-us`)
- `/wp-content/themes/dynamicdreamz/assets/css/services/media.css`
  - Breakpoints: desktop (>=1200px), tablet (768px-1199px / <=991px), mobile (<=767px / <=575px).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Shopify Development Company In Chennai` + Tablet Slider) | `CityPageHeroSection` with `CityHeroTabletSlider` | Reused |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Powering E-Commerce Success Globally (4 stat counters) | `CityPageCounterSection` | Reused |
| 4 | Why Choose Shopify for Your Business? (5 benefit cards) | `CityWhyChooseBoxesSection` | Reused |
| 5 | Our Shopify Development Services in Chennai (8 service cards, 2 cols) | `AgencyServicesSection` (`cardVariant="services-box"`) | Reused |
| 6 | Our Shopify Development Process (4 agile steps) | `OurDevelopmentProcessSection` | Reused |
| 7 | Why Choose Dynamic Dreamz for Shopify Development in Chennai? (6 cards, 3 cols) | `CityWhyChooseBoxesSection` (`columns={3}`, white bg) | Reused |
| 8 | Our Work (8 Shopify projects, 4 cols) | `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`) | Reused |
| 9 | Happy Client (11 video testimonials) | `HappyClientSection` | Reused |
| 10 | Frequently Asked Questions (6 accordion items) | `FaqSection` | Reused |
| 11 | Request a Quote Banner (`Ready to Scale Your E-Commerce Business?`) | `CtaBannerSection` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Tablet Slider**: 3 rotating slides (`custom-shopify-development.webp`, `shopify-migration-solutions.webp`, `shopify-store-design.webp`) within responsive tablet device frame.
- **Brand Colors**: Light gradient `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`, primary button `#0f172a` / `#df4644`, border `#dbe4eb`.

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
- Hero tablet slider assets reused from `public/assets/city-pages/`:
  - `custom-shopify-development.webp`
  - `shopify-migration-solutions.webp`
  - `shopify-store-design.webp`
- Reused canonical SVGs:
  - `/assets/shopify-development-company-in-chennai/benefits/user-friendly.svg`
  - `/assets/shopify-development-company-in-chennai/benefits/scalable.svg`
  - `/assets/shopify-development-company-in-chennai/benefits/secure.svg`
  - `/assets/shopify-theme-customization/services/responsive-design.svg`
  - `/assets/city-pages/seo.svg`
  - `/assets/services/shopify-development-agency/figma-conversion-icon.svg`
  - `/assets/services/shopify-development-agency/app-integration-icon.svg`
  - `/assets/hire-shopify-developers/icons/shopify-migration.svg`
  - `/assets/services/shopify-development-agency/shopify-upgrading-icon.svg`
  - `/assets/city-pages/expertise.svg`
  - `/assets/city-pages/experience.svg`
  - `/assets/city-pages/tailored.svg`
  - `/assets/city-pages/end-to-end.svg`
  - `/assets/city-pages/growth.svg`
  - `/assets/city-pages/support.svg`
- 8 Shopify portfolio project screenshots reused from canonical paths:
  - `/assets/beauty-cosmetics/portfolio/renee.webp`
  - `/assets/fashion/portfolio/eleven-eleven.webp`
  - `/assets/fashion/portfolio/bombay-shirt-company.webp`
  - `/assets/food-beverages/portfolio/royce.webp`
  - `/assets/fashion/portfolio/tropicfeel.webp`
  - `/assets/fashion/portfolio/tego.webp`
  - `/assets/food-beverages/portfolio/nekter.webp`
  - `/assets/fashion/portfolio/rare-rabbit.webp`
- Total duplicate hash groups across `public/assets/`: 0.

