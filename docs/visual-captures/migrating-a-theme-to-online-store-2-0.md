# Visual Capture: Migrate Theme to Shopify Online Store 2.0

- **Route**: `/migrating-a-theme-to-online-store-2-0`
- **Live Reference**: `https://www.dynamicdreamz.com/migrating-a-theme-to-online-store-2-0/`
- **Capture Date**: 2026-08-21
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Page Composition & Component Reuse

| Section # | Visual Role | Reused / Generalized Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroSection` (`variant="split"`) | Hero SVG illustration (`/assets/migrating-a-theme-to-online-store-2-0/hero/migrate-store-img.svg`), 3 review badges (Clutch, Upwork, GoodFirms), CTA button (`/request-quote`) |
| 2 | Brand Partners Slider | `IndustryBrandsSection` | 10 canonical client brand SVGs from `public/assets/clients/` (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Simdirect, Kvaser, Nekter, Circuit City) |
| 3 | Single Text Box (Intro) | `TextBoxSection` | Centered text box container with light background (`#fbf7ed`) and rounded corners (`20px`) |
| 4 | Why Upgrade to Shopify 2.0? | `MigrationBulletFeaturesSection` | 4 feature points with bullet checkmark icons (`/assets/icons/bullets-icon.svg`), titles, and descriptions |
| 5 | Our Shopify Migration Service | `MigrationChecklistSection` | 7 structured phases with phase descriptions and nested bullet checklists |
| 6 | Benefits of Our Migration Service | `MigrationBenefitsGridSection` | 3 cards in 3-column grid with unique SVGs (`/assets/migrating-a-theme-to-online-store-2-0/benefits/`), gradient hover borders, and gradient background transitions |
| 7 | Conclusion / CTA Box | `ConclusionSection` | Full-width container with conclusion summary and inline CTA link to `/request-quote` |

---

## 2. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: Reused canonical assets across `public/assets/` for 10 brand logos, 3 review badges, and bullet icons.
- **Unique Assets Stored**: 4 unique SVGs in `public/assets/migrating-a-theme-to-online-store-2-0/`:
  - `hero/migrate-store-img.svg`
  - `benefits/expertise-and-experience.svg`
  - `benefits/comprehensive-service.svg`
  - `benefits/custom-solutions.svg`
- **SHA-256 Duplicate Groups**: 0.

---

## 3. Responsive & Interactive Behavior

- **Desktop (>=1200px)**: 2-column split hero with illustration and badges, logo marquee slider, centered introduction card, 4 bullet features with divider lines, 7-phase detailed checklist, 3-column benefits grid with hover glow, full-width conclusion text block.
- **Tablet (768px-1199px)**: Responsive 2-column card layouts, centered headlines, stacked hero illustration.
- **Mobile (<=767px)**: Stacked single-column layouts, touch-friendly bullet items, compact margins, clean typography.
