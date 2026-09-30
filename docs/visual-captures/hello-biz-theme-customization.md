# Visual Parity Capture: Hello Biz Theme Customization

- **Route**: `/hello-biz-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/hello-biz-theme-customization/`
- **Capture Date**: 2026-09-30
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `theme_customize_hero.css`:
  - `.theme-customize-hero` (hero layout, `#f7f4e9` background, double eyebrow badges `Wordpress Agency` and `Theme Customization`, left text column `51%`, right image column `43.182%`, bottom-aligned image `1202x948`)
- `trusted_by_leading_brands_section.css`:
  - `.our-client-sec` (12 brand logos layout)
- `shopify_theme_customization_services.css`:
  - `.theme-customization-services.yellow` (features section with yellow highlight accents `#ad5151`, 6 feature cards)
  - `.theme-customization-services.green` (benefits section with green highlight accents, 8 benefit cards)
- `delivery_section.css`:
  - `.what-we-provide-sec.only-text` (services section with 2-column grid layout, cards with hover border gradients)
- `how_to_choose_the_right_shopify_plus_agency_sec.css`:
  - `.how-to-choose-spa-sec` (4 numbered framework evaluation cards `01`–`04`)
- `projects_section.css`:
  - `.our-work-sec.pt-0` (4-column portfolio showcase grid with 8 WordPress project cards and "View our work" CTA button)
- `client_review_section.css`:
  - `.happy-client-sec` (client video testimonial stories carousel)
- `faqs_section.css`:
  - `.faq-sec` (5-item split accordion FAQ layout)

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Hello Biz Theme Customization Service`) | `ThemeHeroSection` | Reused (`@/components/sections/theme-customization/theme-hero-section`) |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` | Reused (`@/components/sections/industry/industry-brands-section`) |
| 3 | Features of Hello Biz Theme (6 feature cards) | `ThemeCustomizationServicesSection` (`variant="yellow"`) | Reused (`@/components/sections/theme-customization-services-section`) with helper icons |
| 4 | Our WordPress Theme Customization Services (6 service cards in 2 cols) | `AgencyServicesSection` (`cardVariant="services-box"`, `columns={2}`) | Reused (`@/components/sections/agency-services-section`) |
| 5 | Benefits of Hello Biz Theme Customization (8 benefit cards) | `ThemeCustomizationServicesSection` (`variant="green"`) | Reused (`@/components/sections/theme-customization-services-section`) |
| 6 | Why Choose Dynamic Dreamz (4 numbered cards `01`–`04`) | `EvaluationFrameworkSection` | Reused (`@/components/sections/shopify-plus-agency/evaluation-framework-section`) |
| 7 | Snippets of WordPress Theme Customization Portfolio (8 project cards) | `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, `columns={4}`) | Reused (`@/components/sections/portfolio-showcase-section`) |
| 8 | Client Testimonials (`Don't Just Take Our Word For It`) | `HappyClientSection` | Reused (`@/components/sections/happy-client-section`) |
| 9 | Frequently Asked Questions (5 accordion items) | `SplitFaqSection` | Reused (`@/components/sections/split-faq-section`) |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Hero Eyebrows**: Two badge tags: `Wordpress Agency` and `Theme Customization`.
- **Hero Image**: Bottom-aligned 1202x948 WebP image (`hello-biz-theme-customization-service-img.webp`) matching live `hello-biz-theme.png` with clean transparency and no blend mode.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Features / Benefits Grids**: Yellow and green theme customization card grids with `#ad5151` and green accents.
- **Portfolio Grid**: 4 columns on desktop, 2 columns on tablet/mobile with live project links and canonical project images.

---

## 4. Asset Deduplication & Integrity

- 12 brand partner logos reused directly from `src/content/industries.ts` (`industryBrandLogos`):
  - `ranavat.svg`
  - `prolash.svg`
  - `tropicfeel.svg`
  - `perfect-locks.svg`
  - `bombay-shirt-company.svg`
  - `kayfi.svg`
  - `simsdirect.svg`
  - `kvaser.svg`
  - `nelter.svg`
  - `circuit-city.svg`
  - `silhouette-mirage.svg`
  - `breakout.svg`
- Feature icons rendered via SVG component helper matching live SVG designs:
  - `Clean Layout`
  - `Fast Loading`
  - `SEO Ready`
  - `Gutenberg Compatible`
  - `Mobile Responsive`
  - `Translation Ready`
- Services and benefits icons reused from canonical SVG collections in `@/components/sections/hello-biz-theme-customization/hello-biz-icons`.
- 8 portfolio project card images reused from `public/assets/our-work/projects/`:
  - `quite-events.webp`
  - `les-etoiles.webp`
  - `valents.webp`
  - `get-sunsights.webp`
  - `lipari-design.webp`
  - `nexventur.webp`
  - `awaken-media.webp`
  - `budget-maids.webp`
- Theme hero graphic saved under `public/assets/hello-biz-theme-customization/hero/`:
  - `hello-biz-theme-customization-service-img.webp` (1202x948, WebP)
- Total duplicate hash groups across `public/assets/`: 0.
