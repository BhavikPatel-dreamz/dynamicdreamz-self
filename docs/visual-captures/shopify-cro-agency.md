# Visual Capture Note: Shopify CRO Agency

**Route**: `/shopify-cro-agency`  
**Live URL**: `https://www.dynamicdreamz.com/shopify-cro-agency/`  
**Capture Date**: 2026-10-02  
**Status**: 1:1 Live Parity Verified  

## Page Overview & Structure
The `/shopify-cro-agency` landing page is Dynamic Dreamz's conversion rate optimization service page for Shopify and Shopify Plus merchants. It establishes credibility through data-backed proof points, visualizes revenue impact before and after optimization, outlines core conversion barriers and services, and provides flexible engagement models with FAQ accordions.

### Exact 10 Sections (in visual order):
1. **Hero Section (`.hero-new-section`)**:
   - Background: `#FAF8F5` with rounded bottom edge (`rounded-b-[50px] max-[767px]:rounded-b-[30px]`).
   - Eyebrows: "ESTABLISHED IN 2006 • SHOPIFY PLATINUM PARTNER" with red accent line.
   - H1: "<i>Shopify CRO:</i> Increase Revenue Without Increasing Traffic" with italicized font-serif accent at the start.
   - Subheadings: 2 descriptive paragraphs highlighting full-funnel CRO strategy and development under one roof.
   - CTAs: "GET A CRO ASSESSMENT" (Google Doc modal link) and "REQUEST A QUOTE" (`/request-quote`).
   - Proof Badges: Shopify Platinum Partner, Clutch (130+ reviews), Trustpilot (4.9 rating), Upwork Top Rated Plus.
   - Media: MP4 video showcase (`/assets/home/why-dynamic-dreamz.mp4`).

2. **Trusted by Leading Brands (`.our-client-sec`)**:
   - Background: `#FFF6E9`.
   - Heading: "Trusted by Leading Brands".
   - 12 canonical brand logos: Supertails, 11:11, Bella Vita, Bombay Shirt Company, The Loom, Amama, DailyObjects, Rare Rabbit, Fancy Feast, Purely Elizabeth, Suta, Khara Kapas.

3. **Common Conversion Barriers (`.conversion-cro-section`)**:
   - Eyebrow: "Conversion Barriers" with red line.
   - Two-column split header: Title on left, explanatory paragraph on right.
   - 8 barrier cards in responsive grid (4 cols desktop, 2 cols tablet/mobile):
     - Poor Mobile Experience
     - Weak Product Pages
     - Missing Trust Signals
     - Cart Abandonment
     - Confusing Navigation
     - Slow Store Performance
     - Ineffective Calls-to-Action
     - Poor Checkout Experience
   - Card styling: White card, rounded 15px, light border, `#AD51511C` icon badge with custom border radius.

4. **Revenue Impact Comparison (`.revenue-impact-section`)**:
   - Background: Dark `#171E16` with rounded bottom edge (`rounded-b-[50px] max-[767px]:rounded-b-[30px]`).
   - Eyebrow: "Revenue Impact" with red line.
   - Two-column split header: Title on left, subtitle on right in high-contrast light text.
   - 2 comparison cards connected by curved dashed SVG arrow (`/assets/shopify-cro-agency/impact/revenue-arrow.svg`):
     - "Current State": 50,000 Visitors, 1% Conversion Rate, $100 AOV = $50,000 Monthly Revenue.
     - "After Optimization": 50,000 Visitors, 1.5% Conversion Rate, $100 AOV = $75,000 Monthly Revenue (green border, glowing badge, active styling).
   - Bottom highlight box: "Additional Revenue Potential: +$25,000 / month | +$300,000 / year" with green total callout.

5. **Our Shopify CRO Services (`.shopify-cro-services`)**:
   - Eyebrow: "CRO Services" with red line.
   - Two-column split header: Title on left, explanatory text on right.
   - 5 service cards (3 top row, 2 centered bottom row on desktop; 1 col on mobile) with divider lines:
     - Shopify CRO Audit
     - Conversion Funnel Analysis
     - User Behavior Analysis
     - A/B Testing & Experimentation
     - Ongoing CRO Optimization

6. **Get Your Shopify CRO Assessment (`.shopify-cro-assessment`)**:
   - Background: `#E6ECF0` with rounded top edge (`rounded-t-[50px] max-[767px]:rounded-t-[30px]`).
   - Heading: "Get Your Shopify CRO Assessment".
   - Subtitle: "Before recommending any CRO strategy, we evaluate:".
   - 5 pill tags in one horizontal line on desktop: Monthly Revenue, Traffic Volume, Conversion Rate, Average Order Value (AOV), Analytics Setup (with `list-arrow.svg` bullet).
   - CTA button: "COMPLETE CRO ASSESSMENT" (Google Doc form link).

7. **Our Shopify CRO Process (`.white_label_process_step_box_section.column-five`)**:
   - Eyebrow: "CRO Services" with red line.
   - Two-column split header: Title on left, process description on right.
   - 5 numbered process circles: 01 Discover, 02 Analyze, 03 Prioritize, 04 Implement, 05 Measure & Optimize.
   - Desktop/tablet: Connected with subtle curved red dashed line.
   - Mobile: Vertical timeline with red progress indicator dots and line.

8. **Why Dynamic Dreamz (`.shopify-cro-dynamic-dreamz`)**:
   - Background: `#F7F4E9` rounded box (`rounded-[30px]`).
   - Eyebrow: "OUR DIFFERENCE".
   - Left side: Copy detailing strategy, UX, and development under one roof.
   - Right side: White card with 6 credential checkmarks using `list-arrow.svg`:
     - Shopify Platinum Partner
     - 20+ Years Experience
     - 5,000+ Shopify Projects Delivered
     - Team of 150+ Professionals
     - Dedicated Shopify Experts
     - Strategy + Implementation Together
   - Bottom accent banner: `#AD5151` red banner with "One Partner. One Team. One Growth Strategy".

9. **Flexible Shopify CRO Engagements (`.shopify-cro-engagement-section`)**:
   - Background: `#FAFAF7`.
   - Heading: "Flexible Shopify CRO Engagements".
   - 2 pricing/engagement cards with subtle top border and bottom shadow:
     - "Shopify CRO Audit": 6 deliverables with `checkbox-list.svg` checkmarks, "REQUEST AUDIT DETAILS" CTA.
     - "Shopify CRO Growth Partner": 6 deliverables with `checkbox-list.svg` checkmarks, "REQUEST CUSTOM PROPOSAL" CTA.

10. **Frequently Asked Questions (`.faq-sec`)**:
    - Background: `#FAFAF7`, split 2-column layout (41% left header, 57% right accordion).
    - 6 questions matching live site with accessible collapsible items.
    - Icons: Circle-plus icon when closed, circle-cross icon when active (`iconVariant="circle-cross"`).

*(Note: Live site does not have a bottom CTA banner on this page; omitted to maintain 1:1 live parity).*

## Responsive Breakpoints Inspected
- **Desktop (1440px)**: Verified 1:1 visual parity across all 10 sections.
- **Tablet (768px)**: Verified 2-col grids, responsive split headers, curved connectors, and layout scaling.
- **Mobile (390px)**: Verified single-column cards, vertical step timeline, and full-width CTA buttons.

## CSS Sources Inspected
- `scratch/shopify-cro-agency/services_main.css` (lines 8000–9314)
- `scratch/shopify-cro-agency/services_media.css`
- Live HTML dumps: `scratch/shopify-cro-agency/s1_hero.html` through `s10_faq.html`
