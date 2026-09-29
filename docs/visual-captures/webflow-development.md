# Webflow Development Visual Capture

- **Route**: `/webflow-development`
- **Live URL reference**: `https://www.dynamicdreamz.com/webflow-development/`
- **Capture date**: 2026-09-29
- **Status**: Verified
- **Browser**: Google Chrome headless
- **Viewports**: 1440x900, 768x1024, 390x844

## References

- Live source and View Page Source: `scratch/live-webflow.html`
- Live CSS:
  - `hero_new_section.css`
  - `trusted_by_leading_brands_section.css`
  - `shopify_development_services.css`
  - `shopify_theme_customization_services.css`
  - `projects_section.css`
  - `city_page_counter.css`
  - `client_review_section.css`
  - `faqs_section.css`

## Section Architecture & Order

1. **Hero (`hero-new-section hide-logo`)**:
   - Background `#f7f4e9` (cream).
   - Eyebrows: `ESTABLISHED IN 2006` and `Webflow Development Agency`.
   - Title (H1): `Webflow Development Company for Scalable Websites`.
   - Two paragraphs matching live text.
   - Primary CTA: `Request a Quote` -> `/request-quote`.
   - Secondary CTA: `View Our Work` -> `#our_work`.
   - Review badges: Clutch (4.9 rating), Trustpilot (4.9 TrustScore), Upwork (Top Rated Plus). The Shopify Platinum badge is omitted/hidden via `hide-logo` matching live site CSS.
   - Right column: Tablet frame with 6 auto-advancing Webflow project slides (The Gate, Supportninja, Noble, Maui Sheep Milk, Kensite, Hader Institute), decorative background shape, and floating Webflow badges (`webflow-icon.png` at top, `webflow_logo.png` at bottom).

2. **Brands Marquee (`our-client-sec`)**:
   - Background `#FBEED5`.
   - Heading: `Trusted by Leading Brands`.
   - 12 trusted brand partner logos with infinite smooth slider animation.

3. **Services (`shopify-development-services pt-80`)**:
   - Eyebrow: `Our Services`.
   - Heading: `Our Webflow Development Services`.
   - Description matching live text.
   - Asymmetrical 3-column CSS grid with 7 service cards:
     1. Custom Webflow Website Development (row span 2, `#f7f4ea` background)
     2. Figma to Webflow Development
     3. Webflow CMS Development
     4. Webflow Migration & Rebuilds (col span 2, `#eff4ef` background)
     5. Webflow Integrations & Automations
     6. Ongoing Webflow Support & Maintenance
     7. Webflow SEO & Performance Optimization

4. **Growth Cards (`theme-customization-services transparent`)**:
   - Heading: `Webflow Websites Built for Growth`.
   - Description matching live text.
   - 3 white cards with local SVG icons (#AD5151 theme red):
     - Performance-First Development
     - Conversion-Focused Design
     - Future-Ready & Scalable

5. **Recent Projects (`our-work-sec pt-0 pb-0#our_work`)**:
   - Eyebrow: `Portfolio`.
   - Heading: `Recent Projects`.
   - 4-column live grid with 8 real Webflow projects:
     1. My Rezults
     2. Bulletproof
     3. Sprint Innovations
     4. Hader Institute
     5. Support Ninja
     6. Maui Milk
     7. Kensite
     8. Noble Content
   - Rounded cards with hover zoom, arrow icon buttons, and category badges omitted matching live site design.
   - CTA: `View our work` -> `/our-work`.

6. **Milestones Counter (`city-page-counter`)**:
   - Eyebrow: `Why Dynamic Dreamz`.
   - Heading: `Milestones of Excellence`.
   - Description matching live text.
   - 4 counter boxes:
     - 20+ Years / Years of Experience
     - 150+ / Experts
     - 5,000+ / Projects Delivered
     - 2500+ / Verified 5 Star Reviews

7. **Client Stories (`happy-client-sec`)**:
   - Eyebrow: `Client Stories`.
   - Heading: `Our Valued Clients`.
   - Description matching live text.
   - 11 video testimonial cards with client logos, headshots, and video modal launcher.

8. **FAQ (`faq-sec`)**:
   - Heading: `Frequently Asked Questions`.
   - Description: `Questions about Webflow development.`.
   - 8 accordions matching live site Q&A content word-for-word.

9. **Bottom CTA Banner**:
   - None (matches live site; the live page ends after the FAQ section).

## Asset And Source Audit

- Hero slides, floating badges, project cards, and growth SVGs stored under `public/assets/services/webflow-development/`.
- OG image stored at `public/assets/og/webflow-development.png` (1200x630).
- All assets verified via SHA-256 duplicate audit: 0 duplicate hash groups across the repository.
- Content boundary verified: no visible copy hardcoded in `src/components/**`.
