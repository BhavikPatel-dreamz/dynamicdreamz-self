# Visual Capture: Shopify Development in Delhi

- **Route**: `/shopify-development-in-delhi`
- **Live Reference**: `https://www.dynamicdreamz.com/shopify-development-in-delhi/`
- **Capture Date**: 2026-08-21
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Page Composition & Component Reuse

| Section # | Visual Role | Reused / Generalized Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroSection` | Hero illustration, 3 review badges (Clutch, Upwork, GoodFirms), CTA button (`/request-quote`) |
| 2 | Brand Partners Slider | `IndustryBrandsSection` | 10 client brand SVGs from `public/assets/clients/` (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Simdirect, Kvaser, Nekter, Circuit City) |
| 3 | Single Text Box (Intro) | `TextBoxSection` | Centered text box container with light background (`#fbf7ed`) and rounded corners (`20px`) |
| 4 | Why Choose Shopify (5 Cards) | `ShopifyAppBenefitsSection` | 5 benefit cards with gradient hover borders + icons (`/assets/shopify-development-company-in-chennai/benefits/` & `/assets/shopify-development-in-delhi/benefits/`) |
| 5 | Services (8 Cards Grid) | `AgencyServicesSection` (`headerLayout="centered"`, `showDescription={false}`) | 8 service cards with hover gradient borders, icons, and internal service links |
| 6 | Shopify Development Process (4 Steps Wave) | `ProcessWaveSection` | 4 process icons (`/assets/services/bigcommerce-development/process/`) + SVG connecting wave |
| 7 | Why Choose Us / Reasons (5 Cards) | `ShopifyReasonsSection` | 5 cards on soft gradient background (`linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`) with icons |
| 8 | Snippets of Our Work (6 Projects) | `PortfolioShowcaseSection` | 6 WebP Shopify case studies (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier) + `/our-work` CTA |
| 9 | Client Video Reviews Carousel | `HappyClientSection` | 11 video testimonial cards with YouTube modal dialogs (`VideoDialog`) and horizontal drag scroll |
| 10 | FAQs Accordion (5 Q&As) | `FaqSection` | 5 interactive accordion FAQ items with schema |
| 11 | Bottom CTA Banner | `CtaBannerSection` | Gradient banner with CTA text + `/request-quote` button |

---

## 2. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: Reused canonical assets across `public/assets/` for 34 SVGs, 10 brand logos, and 6 portfolio images.
- **Unique Assets Stored**: 5 unique SVGs in `public/assets/shopify-development-in-delhi/` (customizable-themes, marketing-tools, store-setup, tailored-solutions, proven-results).
- **SHA-256 Duplicate Groups**: 0.

---

## 3. Responsive & Interactive Behavior

- **Desktop (>=1200px)**: 2-column hero with illustration and badges, 4-column benefit cards, 2-column service cards with hover gradient borders, 4-step wave process, 3-column portfolio cards, testimonials carousel with video modals, 5-card reasons section.
- **Tablet (768px-1199px)**: Responsive 2-column card layouts, centered headlines, stacked hero illustration.
- **Mobile (<=767px)**: Stacked single-column layouts, touch-friendly accordion FAQs, vertical step list with step badges.

