# Career Page

Live URL: `https://www.dynamicdreamz.com/career/`
Local route: `/career`
Date checked: 2026-10-05
Browser: Google Chrome / Edge (Chromium live parity audit)

## 2026-10-05 Live Migration Parity

The Career page has been remigrated to exactly match the current live site structure, styling, content, assets, and metadata:

1. **Exact 3-Section Live Architecture**:
   - The live page contains strictly 3 sections. The former 4-column `.workkplace-benifits-sec` and the `.image-slider-sec` life gallery have been retired on the live site and are completely removed.
   - Section 1: Hero (`.hero-new-section.hide-logo`) with vertical infinite marquee of 7 team images on desktop, horizontal on mobile. The `.hide-logo` class hides the Shopify Platinum Partner badge, displaying Clutch, Trustpilot, and Upwork badges.
   - Section 2: Current Opportunities (`.current-openings-sec`) with `SplitSectionHeading` ("Open Positions" / "Current Opportunities"), custom location dropdown (Surat / Ahmedabad), and live job listings.
   - Section 3: Workplace Benefits (`.theme-customization-services.yellow`) with `SplitSectionHeading` ("Employee Benefits" / "Workplace Benefits") and 8 benefit cards with custom red SVG icons and `#fafaf7` background.

2. **Current Live Openings**:
   - **Jr. CRE (Client Relationship Executive) / Project Coordinator** (Surat only)
   - **SEO, AEO and GEO Specialist** (Surat & Ahmedabad)
   - **Conversion Rate Optimization (CRO)** (Surat & Ahmedabad)
   - All legacy expired positions (Shopify Developer, Business Development Executive, etc.) removed to match live DOM.

3. **Asset Deduplication & Optimization**:
   - 7 hero team photos converted to canonical WebPs: `public/assets/career/hero/career-team-1.webp` through `7.webp`.
   - Unique job icon `public/assets/career/jobs/job-cre.svg` and JD PDF `public/assets/career/jobs/cre-project-coordinator.pdf` ingested.
   - Zero asset duplicates in `public/assets/` verified across 1805 files.

4. **SEO & Schema Parity**:
   - Yoast meta title: `Join Our Team for Exciting Opportunities | Dynamic Dreamz` (59 characters).
   - Yoast meta description: `Explore best career opportunities at Dynamic Dreamz! Join a our team offering roles in web development, design, and more. Apply now!` (133 characters).
   - Canonical URL: `https://www.dynamicdreamz.com/career`.
   - Structured Data: `JobPosting` schemas for all 5 location-specific job listings with exact addresses, requirements, and hiring organization reference.

## Section Inventory

| Section | Live Element / Class | Component | Notes |
| --- | --- | --- | --- |
| Hero | `.hero-new-section.hide-logo` | `CareerHeroSection` | Infinite team image marquee (vertical desktop, horizontal mobile), 3 proof badges, live copy |
| Current Openings | `.current-openings-sec` | `CareerOpportunitiesSection` | `SplitSectionHeading` (left-aligned), accessible `CareerLocationFilter`, red `#AD5151` vacancy tag |
| Workplace Benefits | `.theme-customization-services.yellow` | `ThemeCustomizationServicesSection` (variant="yellow") | Reusable 3-col/2-col/1-col card grid with 8 exact live SVG icons rendered via `CareerBenefitIcon` |

## Verification Gates
- `npm run check:urls`: Passed (slashless policy enforced).
- `npm run check:component-content`: Passed (552 source files checked, 0 boundary violations).
- `npm run check:asset-duplicates`: Passed (1805 public assets checked, 0 duplicates).
- `npm run lint`: Passed.
- `npx next build --webpack`: Production build verified.
