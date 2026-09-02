# Visual Parity Capture: PHP Development

- **Route**: `/php-development`
- **Live URL Reference**: `https://www.dynamicdreamz.com/php-development/`
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
  - `.inner-hero-sec` (split hero with H1, paragraph, "request a quote" CTA button, and right-column animated review badges for Clutch, Upwork, and GoodFirms)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (brand marquee/slider with 10 partner logos)
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.what-we-provide-sec` (12 service cards with icon, title, description, and text arrow link)
  - `.single-text-box-sec.pb-0` (centered highlight card with beige background `#fbf7ed`, rounded corners, H2 and value proposition paragraph)
  - `.how-app-work-sec` (4 process step columns connected by curvy roadmap graphic)
  - `.our-work-sec` (PHP portfolio cards with image hover zoom, category label "PHP", project title, and arrow link)
  - `.happy-client-sec` (video testimonial carousel with client stories)
  - `.faq-sec` (7 accordion FAQ items with expand/collapse states)
  - `.request-banner` (CTA banner with white button pointing to `/request-quote`)
- `/wp-content/themes/dynamicdreamz/assets/css/services/media.css`
  - Breakpoints: desktop (>=1200px), tablet (768px-1199px), mobile (<=767px).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`PHP Development Company in India`) | `ServiceHeroSection` | Reused |
| 2 | Trusted by Leading Brands (10 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Our PHP Web Development Services (12 cards) | `AgencyServicesSection` | Reused |
| 4 | Why Choose Dynamic Dreamz as a PHP Development Company | `TextBoxSection` | Reused |
| 5 | Our PHP Development Process (4 steps) | `ShopifyAppProcessSection` | Reused (generalized) |
| 6 | Glimpses of Our PHP/MySQL Development Services (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 7 | Don't Just Take Our Word For It (Client Stories) | `HappyClientSection` | Reused |
| 8 | Frequently Asked Questions (7 accordion items) | `SplitFaqSection` & `FaqAccordion` | Reused |
| 9 | Want us to help you with your online store? | `CtaBannerSection` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Brand Colors**: Highlight box `#fbf7ed`, red primary CTA `#df4644` / `#cd3735`.

---

## 4. Asset Deduplication & Integrity

- 10 brand partner logos reused directly from `public/assets/clients/`.
- 12 service icons:
  - 3 reused canonicals (`module-icon.svg`, `ongoing-support-icon.svg`, `api-development.svg`).
  - 9 unique service SVGs saved under `public/assets/php-development/services/`.
- 6 PHP portfolio project images:
  - 6 unique project previews saved under `public/assets/php-development/portfolio/` (`kask.webp`, `no-lawyer.webp`, `sims-direct.webp`, `glass-fit.webp`, `intapol.webp`, `go-sport-me.webp`).
- Total duplicate hash groups across `public/assets/`: 0.
