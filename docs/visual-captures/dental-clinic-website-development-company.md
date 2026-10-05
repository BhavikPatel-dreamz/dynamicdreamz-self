# Visual Capture: Dental Clinic Website Development Company

- **Route**: `/dental-clinic-website-development-company`
- **Live Reference**: `https://www.dynamicdreamz.com/dental-clinic-website-development-company/`
- **Capture Date**: 2026-10-02
- **Viewports Inspected**: Desktop (1440x900), Tablet (768x1024), Mobile (390x844)
- **Live Stylesheets Inspected**: `https://www.dynamicdreamz.com/wp-content/uploads/dd-css/dental-clinic-website-development-company.css`

---

## 1. Page Composition & Component Mapping

| Section # | Live DOM Selector | Live Visual Role | Rebuilt Component | Exact Matching Content & Styling |
|---|---|---|---|---|
| 1 | `.hero-new-section` | 2-Column Hero Banner | `ServiceHeroVideoSection` | Left col: eyebrow ("Website Development Company"), H1, description, CTA "request a quote", 4 trust badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus); Right col: looping video (`why-dynamic-dreamz.mp4`). |
| 2 | `.our-client-sec` | Brand Partners Slider | `IndustryBrandsSection` | "Trusted by Leading Brands" with 10 exact live client logos (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, SimsDirect, Kvaser, Nekter, Circuit City). |
| 3 | `.how-to-choose-spa-sec` | Why Choose Dynamic Dreamz | `EvaluationFrameworkSection` | Eyebrow "Why Dynamic Dreamz", H2 "Why Choose Dynamic Dreamz for Your Dental Clinic Website", intro paragraph, 4 bordered cards with circular 01-04 badges and descriptions. |
| 4 | `.theme-customization-services.green` | What Solutions We Offer | `ThemeCustomizationServicesSection` (`variant="green"`) | Eyebrow "Solutions", H2 "What Solutions We Offer", intro paragraph, pista background (`#eff4ef`), 5 boxed cards with circular 01-05 badges, H3 titles, and descriptions. |
| 5 | `.our-development-process` | Website Development Process | `OurDevelopmentProcessSection` | Eyebrow "Our Process", H2 "Our Website Development Process", intro paragraph, 4 boxed step cards (Step 01 - Step 04) in a 4-col desktop / 2-col tablet / 1-col mobile border grid on `#fafaf7`. |
| 6 | `#our_work.our-work-sec` | Portfolio Showcase | `PortfolioShowcaseSection` (`variant="liveGrid"`, `columns={4}`) | Eyebrow "Portfolio", H2 "Our Development Expertise for Dental Clinic Website's", intro paragraph, 8 WordPress projects (`Quite Events`, `Les Etoiles`, `Valents`, `Get Sunsights`, `Lipari Design`, `Nexventur`, `Awaken Media`, `Budget Maids`), and "View our work" CTA button. |
| 7 | `.happy-client-sec` | Client Stories / Testimonials | `HappyClientSection` | Eyebrow "Client Stories", H2 "Don't Just Take Our Word For It", description matching live site, 11 video testimonial cards. |
| 8 | `.faq-sec` | FAQs Centered Accordion | `SplitFaqSection` (`layout="centered"`) | Centered H2 "FAQs", 8 full-width interactive accordion items matching live site. |

---

## 2. Style & Design Tokens Extracted from Live CSS

- **Background Colors**:
  - Hero: `#f7f4e9` (`--darkcream`)
  - Client Logos: `#FBEED5`
  - Benefits (`how-to-choose-spa-sec`): `#ffffff` with `#2828281c` border lines
  - Solutions (`theme-customization-services.green`): `#eff4ef` (`--pista`) with `#ffffff` cards and `rgba(40,40,40,0.11)` borders
  - Process (`our-development-process`): `#fafaf7` with `rgba(40,40,40,0.11)` borders
  - Portfolio (`our-work-sec`): `#ffffff`
  - FAQs (`faq-sec`): `#fafaf7` with `#ffffff` cards
- **Badge Accents**:
  - Number circles: `#fbefd7` background with `#ad5151` (`--theme-red`) text, 34x34px round.
  - Step labels: uppercase `#ad5151` 12px font-weight 600.
  - Category tags: uppercase `#ad5151` 12px font-weight 600.
- **Typography & Weights**:
  - H1: Montserrat Medium 50px (mobile 30px)
  - H2: Montreal Medium 35px-40px (mobile 24px)
  - Eyebrows: uppercase 12px-14px font-weight 600
  - Body text: `#535353` 14px-16px leading 24px-28px

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**:
  - Hero video: Canonical `/assets/home/why-dynamic-dreamz.mp4` reused.
  - Hero badges: 4 canonical SVG badges in `public/assets/proof/` reused.
  - Client logos: 10 canonical SVGs in `public/assets/clients/` reused.
  - Portfolio cards: 8 canonical WebPs in `public/assets/our-work/projects/` reused.
  - Testimonial thumbnails & videos: Existing canonical assets in `public/assets/` reused.
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Interactive Verification

- **Desktop (>=1200px)**:
  - 2-column hero with video player on right.
  - 10-logo client marquee.
  - 4-column why-choose cards.
  - 3-column solutions cards on pista background.
  - 4-column process step grid.
  - 4-column portfolio showcase grid (8 items).
  - Testimonials carousel with YouTube modal.
  - Centered FAQ accordion.
- **Tablet (768px-1199px)**:
  - Hero video hides gracefully at <=991px matching live site behavior.
  - 2-column why-choose cards.
  - 2-column solutions cards.
  - 2-column process step grid.
  - 2-column portfolio cards.
- **Mobile (<=767px)**:
  - Single-column stacked layouts across all sections.
  - Touch-friendly accordion and slider interactions.
  - No horizontal overflow or text clipping.
