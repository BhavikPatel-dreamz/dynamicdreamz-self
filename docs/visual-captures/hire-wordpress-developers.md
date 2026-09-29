# Hire WordPress Developers Visual Capture

- Live URL: https://www.dynamicdreamz.com/hire-wordpress-developers/
- Local route: `/hire-wordpress-developers`
- Date checked: 2026-09-29
- Modernization audit: Verified against `scratch/live-hire-wordpress-developers.html` and live inspection. The live site updated from the legacy 2024 hiring layout to the modern Agency/City layout with tablet showcase hero, counter strip, dual yellow/green feature sections, 4-step process, 3-card pricing table, 8-item live work showcase, 11-slide client review carousel, and 8-item FAQ accordion.
- Viewports verified: 1440x900 (desktop), 768x1024 (tablet), 390x844 (mobile)
- Local screenshots captured: `scratch/local_hire_wp_1440.png`, `scratch/local_hire_wp_768.png`, `scratch/local_hire_wp_390.png`

## Section Breakdown & Visual Parity

1. **Hero (`hero-new-section hide-logo`)**:
   - Layout: Split 2-column layout on desktop (`w-[51%]` text column and `w-[43.182%]` tablet slider showcase); stacked on tablet/mobile.
   - Background: Cream `#f7f4e9`.
   - Eyebrows: "Established in 2006" • "Wordpress Development Agency" with red bar accent.
   - H1: "Hire WordPress Developers" (50px/60px font-heading on desktop, 30px/40px on mobile).
   - Description: Preserves live paragraph with 2 CTAs: primary "hire WordPress developers" (`/request-quote`) and outline "See Pricing" (`#our_white_label_pricing`).
   - Badges: 4 partner/review badges (Shopify Platinum Partner, Clutch 4.9 rating, Trustpilot 4.9 TrustScore, Upwork Top Rated Plus).
   - Tablet Slider: 7 animated showcase slides with floating top badge ("WooCommerce Agency Partner") and bottom badge ("WordPress Logo").

2. **Counter Strip (`white_label_counter_section`)**:
   - 4 stats: `50+ Agencies` (Supported Worldwide), `20+ Years` (Web & Ecommerce Experience), `150+ Experts` (Commerce & Technology), `5000+` (Projects Delivered).
   - Borders: Internal vertical borders on desktop/tablet, horizontal divider at tablet/mobile.

3. **Why Hire Dynamic Dreamz (`theme-customization-services yellow`)**:
   - Eyebrow: "Why Hire Dynamic Dreamz", H2: "Why Hire WordPress Developers from Dynamic Dreamz?".
   - Background: `#fafaf7` (yellow variant).
   - 6 boxes in 3-col grid (desktop), 2-col (tablet), 1-col (mobile) with red `#AD5151` vector SVG icons:
     1. Proven Track Record
     2. Skilled WordPress Experts
     3. Dedicated Development Team
     4. End-to-End Support
     5. Industry-Wide Experience
     6. No Hidden Commitments

4. **Benefits of Hiring Dedicated Developers (`theme-customization-services green`)**:
   - Eyebrow: "Advantage", H2: "Benefits of Hiring Dedicated WordPress Developers".
   - Background: `#eff4ef` (green variant).
   - 6 boxes with red `#AD5151` vector SVG icons and bold titles (no description paragraph, matching live DOM):
     1. Easy and fair hiring process with no hidden cost
     2. Flexible engagement models to manage development costs
     3. Our developer can work as per local time zone
     4. Your strategic data is secure and confidential.
     5. Focus on your business, we'll handle all HR needs
     6. Ongoing post-launch WordPress support

5. **Hiring Process (`our-development-process bg-transparent`)**:
   - Eyebrow: "Hiring Process", H2: "How to Hire WordPress Developers from Dynamic Dreamz".
   - Description: "Let Dynamic Dreamz help you find the right WordPress developer for your project."
   - 4 steps in 4-column connected grid (Step 01 Share Requirements, Step 02 Expert Talent Selection, Step 03 Matching Business Talent, Step 04 Project Kickstart Phase).

6. **Pricing / Engagements (`white_label_wp_develop_plan_section shopify-plus-engagement mb-0#our_white_label_pricing`)**:
   - Eyebrow: "Flexible WordPress Engagements", H2: "Choose the Right Wordpress Development Engagement.".
   - Description: "Choose project-based development, flexible WordPress support starting from $20/hour, or a dedicated developer/team for ongoing requirements."
   - Background: `#edf2ee`.
   - 3 pricing cards:
     1. Project-Based: "Have One Project?", "Custom Quote", CTA "Send Brief — Get a Quote in 24 Hours".
     2. Flexible Hourly Support: "Need Extra Wordpress Capacity?", "$20/hour", CTA "Buy Wordpress Development Hours".
     3. Dedicated Developer / Team: "Need Ongoing Capacity?", "From $2,000/month", CTA "Discuss a Dedicated Team".

7. **Work Showcase (`our-work-sec#our_work`)**:
   - Eyebrow: "Portfolio", H2: "WordPress Projects Built by Dynamic Dreamz".
   - Description: "Explore selected WordPress projects delivered by Dynamic Dreamz across business websites, ecommerce, events and custom development requirements."
   - 8 projects in 4-column grid (Quite Events, Les Etoiles, Valents, Get Sunsights, Lipari Design, Nexventur, Awaken Media, Budget Maids).
   - `hideCta` matches live (no redundant bottom CTA).

8. **Client Testimonials (`happy-client-sec`)**:
   - Eyebrow: "Client Stories", H2: "What Clients Say About Dynamic Dreamz".
   - Description: "At Dynamic Dreamz, we pride ourselves on delivering top notch WordPress development services that exceed our clients' expectations."
   - 11 client review items with video preview, rating stars, and author badges.

9. **FAQ Section (`faq-sec`)**:
   - H2: "Frequently Asked Questions".
   - 8 live FAQs in accordion format with live question/answer text.

## Verification Checklist

- [x] Responsive layout verified at 1440px, 768px, and 390px.
- [x] Zero trailing slashes on all internal links and canonical URL.
- [x] Content boundary strictly maintained (`npm run check:component-content` passes).
- [x] Zero duplicate assets (`npm run check:asset-duplicates` passes).
- [x] SEO length budget adhered to (description exactly 160 chars).
- [x] Full production build passes with 0 errors (`npm run build`).
