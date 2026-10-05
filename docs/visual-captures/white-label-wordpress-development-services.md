# White Label WordPress Development Services Visual Capture

Status: implemented and verified against the live reference  
Live URL: `https://www.dynamicdreamz.com/white-label-wordpress-development-services/`  
Local route: `/white-label-wordpress-development-services`  
Audit / Remigration Date: 2026-10-05  

---

## 1. Section Inventory And Implementation Map

| Section # | Live Visual Role | Implemented Component | Notes & Props |
|---|---|---|---|
| **1** | Hero Banner with Tablet Mockup & Trust Badges | `CityPageHeroSection` | Eyebrow: none, title: `White Label WordPress Development Services` + italic `for Agencies`, subtitle: `<span class="h4">Expand Your Agency's Capabilities with Expert WordPress Developers</span>`, 4 trust badges, 7 tablet slide mockups + 2 platform badges (`hide-logo`). |
| **2** | Minimal Proof Counters | `WhiteLabelStatsSection` | `variant="minimal"`, 4 equal border-divided boxes (`50+ Agencies`, `20+ Years`, `150+ Experts`, `5000+ Projects Delivered`). |
| **3** | Why Dynamic Dreamz (6 Cards) | `WhiteLabelWhySection` | `#fafaf7` background; centered title with line break; 6 cards in a 3x2 gradient-rule grid. |
| **4** | WordPress Services Accordion (6 Services) | `WhiteLabelServicesSection` | Dark green `#171e16`; 2 columns; 6 service rows with canonical SVG icons; first open; single-open expand/collapse; bottom CTA button. |
| **5** | Flexible Engagements & Pricing (3 Cards) | `PricingTableSection` | `section id="our_white_label_pricing"`, `shopify-plus-engagement` layout, split heading with eyebrow `Flexible WordPress Engagements`, 3 pricing cards with badge, price, bullets, arrow button. |
| **6** | Technologies Marquee (23 Tools) | `WhiteLabelToolsSection` | `#fafaf7`; exact 23 live logos (12 in row 1, 11 in row 2); `max-w-[1000px]` single-line desktop heading; `white_label_wide_range_technologies_section` with `logos_partner_top` and `logos_partner_bottom` opposing linear marquees (100s infinite). |
| **7** | Partnership Process (4 Steps) | `WhiteLabelProcessSection` | 4 sequential numbered cards with confidentiality note. |
| **8** | FAQs Accordion (8 Items) | `SplitFaqSection` | `layout="centered"`, `className="bg-sky-blue"` (`rgba(250,250,247,1)`); exact live DOM structure (`.faq-sec.bg-sky-blue`, `.wrapper`, `.header-text.text-center`, `.faq-text`, `.accordion-main`); 8 white rounded cards; single-open and closable; rich schema markup. |
| **9** | Final CTA | `WhiteLabelFinalCtaSection` | `#fafaf7`; split layout desktop, stacked mobile; `CONTACT US TODAY` button linking to `/request-quote`. |

---

## 2. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: All brand logos, service icons, process icons, proof badges, tablet slides, and tool logos reused from canonical paths in `public/assets/**`.
- **Total Files Audited**: 1,791 public assets.
- **SHA-256 Duplicate Groups**: 0 byte duplicates, 0 SVG duplicates, 0 pixel raster duplicates.

---

## 3. Responsive & Interactive Behavior

- **Desktop (>=1200px)**:
  - Hero: 2-column flex layout with left copy/badges and right tablet slider mockup with badges.
  - Counters: 4-column horizontal grid with right borders.
  - Why DD: 3-column grid with subtle gradient borders.
  - Services: 2-column accordion with 700ms max-height animation.
  - Pricing: 3-column white card grid with rounded corners and absolute bottom link arrows.
  - Technologies: 2 rows of continuous opposing marquees.
  - Process: 4-column sequential process card layout.
  - FAQ: Centered container accordion with single-open toggle.
  - Final CTA: Horizontal split between heading/copy and contact button.
- **Tablet (768px-1199px)**:
  - Counters: 2x2 grid with center dividers.
  - Services, process, and pricing stack into responsive 1 or 2 column arrangements.
- **Mobile (<=767px)**:
  - Counters: 2x2 grid with 16px typography.
  - Stacked single-column layouts for all cards and process steps.
  - Touch-friendly full-width accordion items.

---

## 4. Verification

- `npm run check:urls`: Passed.
- `npm run check:component-content`: Passed (550 source files checked).
- `npm run check:asset-duplicates`: Passed (0 duplicates).
- `npm run lint`: Passed (0 errors).
- Production build: Passed.
