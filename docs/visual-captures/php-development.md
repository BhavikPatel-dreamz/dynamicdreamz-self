# Visual Parity Capture: PHP Development

- **Route**: `/php-development`
- **Live URL Reference**: `https://www.dynamicdreamz.com/php-development/`
- **Capture Date**: 2026-10-06
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/uploads/dd-css/php-development-c23643d5c3.css`
  - `.hero-new-section` (video hero with eyebrow `Established in 2006 / PHP Development Company`, H1, paragraph, `request a quote` CTA button, 4 trust badges for Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9, and Upwork Top Rated Plus, right-column looping autoplay video `why-dynamic-dreamz.mp4`)
  - `.our-client-sec` (brand marquee/slider with 12 client logos: Supper Tails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee, Royce, Tego, Nekter, Rare Rabbit)
  - `.how-to-choose-spa-sec` (eyebrow `Why Dynamic Dreamz`, H2 `Why Choose Dynamic Dreamz as a PHP Development Company`, descriptive paragraph, 8 numbered evaluation cards in 4-column desktop / 2-column tablet / 1-column mobile grid with circular number counters)
  - `.what-we-provide-sec.pt-0#services` (12 service cards with 24x24 red `#AD5151` vector SVGs, title, and description)
  - `.our-development-process` (eyebrow `Our Process`, H2 `Our PHP Development Process`, and 4 step boxes with red step labels `Step 01` - `Step 04`)
  - `.our-work-sec#our_work` (PHP portfolio cards with image, category label `PHP`, project title, arrow icon, external links, and `View our work` primary button pointing to `/our-work`)
  - `.happy-client-sec` (video testimonial carousel with client stories)
  - `.faq-sec` (7 accordion FAQ items in split desktop layout with expand/collapse states)

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`PHP Development Company in India`) | `ServiceHeroVideoSection` | Reused |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Why Choose Dynamic Dreamz as a PHP Development Company (8 items) | `EvaluationFrameworkSection` | Reused |
| 4 | Our PHP Web Development Services (12 cards) | `AgencyServicesSection` | Reused |
| 5 | Our PHP Development Process (4 steps) | `OurDevelopmentProcessSection` | Reused |
| 6 | Glimpses of Our PHP/MySQL Development Services (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 7 | Don't Just Take Our Word For It (Client Stories) | `HappyClientSection` | Reused |
| 8 | Frequently Asked Questions (7 accordion items) | `SplitFaqSection` & `FaqAccordion` | Reused |

*Note: The live site does not include a separate bottom CTA banner prior to the site footer; omitting `CtaBannerSection` preserves exact live section count and order.*

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat / Montreal Medium (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[60px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-7 font-normal text-[#535353]`.
- **Card Backgrounds**: `#fafaf7` / `bg-white` borders `rgba(40,40,40,0.08)`.
- **Brand Colors**: Theme red `#ad5151` / `#df4644`, ink text `#282828`.

---

## 4. Asset Deduplication & Integrity

- 12 brand partner logos reused canonicals from `public/assets/clients/`.
- 4 hero trust badges reused canonicals from `public/assets/proof/`.
- Video asset `/assets/home/why-dynamic-dreamz.mp4` reused canonical path.
- 12 unique service SVGs cleanly saved under `public/assets/php-development/services/` with semantic lowercase kebab-case filenames.
- 6 PHP portfolio project images cleanly saved under `public/assets/php-development/portfolio/` (`kask.webp`, `no-lawyer.webp`, `sims-direct.webp`, `glass-fit.webp`, `intapol.webp`, `go-sport-me.webp`).
- Dedicated OG image saved at `public/assets/og/php-development.png` (1200x630).
- Total duplicate hash groups across all 1818 project assets: 0.

---

## 5. Portfolio Section Parity Details

- **Card Variant**: `ourWorkRefresh` in `PortfolioProjectCard`.
- **Card Structure**:
  - Image aspect ratio `pb-[115%]` with smooth 1.05x hover scale transition.
  - Category tag in red uppercase (`text-brand-red text-xs max-[1199px]:text-[10px] tracking-[1px] font-semibold`).
  - Project title in bold Montserrat (`font-sans text-lg font-bold text-ink capitalize`).
  - Circular 34px action button with border (`border-black/20 bg-white group-hover:bg-brand-red`) containing diagonal arrow (`/assets/icons/diagonal-arrow-white.svg`) that turns white on red button background.
- **Responsive Layout**:
  - Desktop (>1199px): 4 columns (`columns={4}`).
  - Tablet / Medium (768px - 991px): 2 columns (`max-[992px]:grid-cols-2`).
  - Mobile (≤767px / 390px): 2 columns (`mobileColumns={2}`, `max-[767px]:grid-cols-2`).
  - Circular arrow button explicitly retained on mobile (`showMobileArrow={true}`).
- **CTA Button**: Centered `View our work` primary button pointing to `/our-work`.

