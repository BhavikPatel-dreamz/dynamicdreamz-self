# Visual Capture: Migrate Theme to Shopify Online Store 2.0

- **Route**: `/migrating-a-theme-to-online-store-2-0`
- **Live Reference**: `https://www.dynamicdreamz.com/migrating-a-theme-to-online-store-2-0/`
- **Capture Date**: 2026-09-24
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Live H1 ("Shopify Online Store 2.0 Theme Migration"), title ("Migrate Theme to Shopify Online Store 2.0 \| Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/migrating-a-theme-to-online-store-2-0/`), 8 content sections, partner/review badges, SVG icons, client logos, testimonials, and FAQs. |
| Live CSS Files | Inspected `hero_new_section.css`, `trusted_by_leading_brands_section.css`, `shopify_theme_customization_services.css`, `how_to_choose_the_right_shopify_plus_agency_sec.css`, `client_review_section.css`, `faqs_section.css`. |
| Local Component Discovery | Reused `ServiceHeroVideoSection` (extended with backward-compatible `image` prop for static illustrations), `IndustryBrandsSection`, `ThemeCustomizationServicesSection` (yellow, transparent, green variants), `EvaluationFrameworkSection`, `HappyClientSection`, `FaqSection`. |
| Local Asset Tree | Reused existing canonical assets across `public/assets/` (`public/assets/clients/`, `public/assets/proof/`, `public/assets/migrating-a-theme-to-online-store-2-0/hero/`). |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Reused / Generalized Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroVideoSection` (with `image` support) | Eyebrows `["Established in 2006", "Shopify Platinum Partner"]`, H1 `Shopify Online Store 2.0 Theme Migration`, Request a Quote CTA button (`/request-quote`), 4 partner/review badges (Shopify Platinum Partner, Clutch, Trustpilot, Upwork), hero illustration (`/assets/migrating-a-theme-to-online-store-2-0/hero/migrate-store-img.svg`) |
| 2 | Brand Partners Slider | `IndustryBrandsSection` | 12 canonical client brand SVGs from `public/assets/clients/` (Supertails, Eleven Eleven, Bellavita, Bombay Shirt Company, Popclub, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit) |
| 3 | Why Upgrade to Shopify 2.0? | `ThemeCustomizationServicesSection` (`variant="yellow"`) | Eyebrow `Why Upgrade`, H2 `Why Upgrade to Shopify 2.0?`, 4 service feature boxes with SVG icons (Lightning Fast Performance, Greater Flexibility, Advanced Developer Tools, Better SEO and Marketing) |
| 4 | Our Shopify Migration Service | `ThemeCustomizationServicesSection` (`variant="transparent"`) | Eyebrow `Our Services`, H2 `Our Shopify Migration Service`, 6 structured phase boxes with SVG icons (Data Migration, Theme Migration and Customization, App Integration, SEO and Redirects, Testing and Quality Assurance, Launch and Post Launch Support) |
| 5 | Benefits of Our Migration Service | `ThemeCustomizationServicesSection` (`variant="green"`) | Eyebrow `Shopify Migration`, H2 `Benefits of Our Migration Service`, 3 benefits boxes with SVG icons (Expertise and Experience, Comprehensive Service, Custom Solutions) |
| 6 | Why Choose Dynamic Dreamz | `EvaluationFrameworkSection` | Eyebrow `Why Dynamic Dreamz`, H2 `Why Choose Dynamic Dreamz for Migration Services?`, 8 numbered framework cards in 4-column responsive grid |
| 7 | Client Stories / Testimonials | `HappyClientSection` | Eyebrow `Client Stories`, H2 `Don't Just Take Our Word For It`, 11 video testimonial cards carousel |
| 8 | FAQs Accordion | `SplitFaqSection` | Two-column split layout with sticky H2 `Frequently Asked Questions`, `#fafaf7` background, 5 borderless accordion Q&A items with circle-cross controls, first item expanded by default matching live site |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: Reused canonical assets across `public/assets/` for 12 brand logos, 4 review/partner badges, and hero SVG.
- **New Assets Ingested**: 0 new files (100% existing canonical assets reused).
- **SHA-256 Duplicate Groups**: 0 duplicates across 1,730 public assets (`npm run check:asset-duplicates`).

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: 2-column hero with badges and illustration, marquee logo slider, 3-column card grids for Theme 2.0 features, 4-column evaluation framework, testimonial carousel, and centered FAQ accordion. Verified via `migrating-a-theme-to-online-store-2-0-local-desktop.png` vs `migrating-a-theme-to-online-store-2-0-live-desktop.png`.
- **Tablet (768px)**: 2-column card layouts, responsive wrapping, centered headlines, and touch-friendly controls. Verified via `migrating-a-theme-to-online-store-2-0-local-tablet.png` vs `migrating-a-theme-to-online-store-2-0-live-tablet.png`.
- **Mobile (390px)**: Single column stacked layout, full-width touch targets, hidden hero illustration on mobile matching live `@media (max-width: 767px)` rule. Verified via `migrating-a-theme-to-online-store-2-0-local-mobile.png` vs `migrating-a-theme-to-online-store-2-0-live-mobile.png`.
