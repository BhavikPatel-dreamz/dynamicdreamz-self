# Hire Shopify Developers Visual Parity Capture

Route: `/hire-shopify-developers`
Live reference: `https://www.dynamicdreamz.com/hire-shopify-developers/`
Capture date: 2026-09-23
Status: implementation and live/local visual verification complete

## Screenshots

- Live desktop, 1440 × 900: `docs/visual-captures/hire-shopify-developers/live-desktop-1440.png`
- Live tablet, 768 × 1024: `docs/visual-captures/hire-shopify-developers/live-tablet-768.png`
- Live mobile, 390 × 844: `docs/visual-captures/hire-shopify-developers/live-mobile-390.png`
- Local desktop, 1440 × 900: `docs/visual-captures/hire-shopify-developers/local-desktop-1440.png`
- Local tablet, 768 × 1024: `docs/visual-captures/hire-shopify-developers/local-tablet-768.png`
- Local mobile, 390 × 844: `docs/visual-captures/hire-shopify-developers/local-mobile-390.png`
- Full-page captures were compared in 700px vertical increments from 0000 to 9500 across 1440px, 768px, and 390px viewports.

## Sources Inspected

- Live DOM inspection (`scratch/hire-shopify-developers/live.html`) & live screenshots.
- Live flexible CSS modules:
  - `hero_new_section.css`
  - `trusted_by_leading_brands_section.css`
  - `shopify_theme_customization_services.css`
  - `our_development_process.css`
  - `delivery_section.css`
  - `projects_section.css`
  - `client_review_section.css`
  - `faqs_section.css`
- Live Yoast SEO metadata and JSON-LD schema graph.

## 9-Section Architecture (1:1 Live Parity)

1. **Section 1: Hero (`hero-new-section`)**
   - Dual eyebrow spans: `["Established in 2006", "Shopify Platinum Partner"]`
   - Title: `Hire Shopify Developers`
   - Lead paragraph: `Are you looking to expand your brand fast? Hire Shopify developers from Dynamic Dreamz to create, customize, and optimize your online Shopify store. Our experienced Shopify developers can help you achieve high quality, scalable solutions based on your business requirements. Let us handle the technicalities while you concentrate on developing your brand.`
   - Primary CTA button: `Hire Shopify Developers` -> `/request-quote`
   - 4 partner proof badges:
     - Shopify Platinum Partner (`/assets/proof/shopify-platinum-partner.svg`, 136x44)
     - Clutch 4.9 rating (`/assets/proof/clutch-rating.svg`, 111x44)
     - Trustpilot 4.9 TrustScore (`/assets/proof/trustpilot-rating.svg`, 148x50)
     - Upwork Top Rated Plus (`/assets/proof/upwork-top-rated-plus.svg`, 126x54)
   - Right-side video preview: `/assets/home/why-dynamic-dreamz.mp4` with autoplay, loop, muted, playsInline.

2. **Section 2: Trusted Brands (`our-client-sec`)**
   - Warm background `#fbeed5`.
   - Heading: `Trusted by Leading Brands`.
   - Infinite animated logo carousel with 12 client brand logos.

3. **Section 3: Why Choose Dynamic Dreamz (`theme-customization-services yellow`)**
   - Light cream background `#fafaf7`.
   - Eyebrow: `Why Dynamic Dreamz`
   - Heading: `Why Choose Dynamic Dreamz for Shopify Development`
   - Description: `Our Shopify developers have the ideal balance of expertise in eCommerce business and Shopify technology. For your online business, we can act as a powerful catalyst.`
   - 3 white card boxes with red SVG icons:
     1. `Experience says it all`
     2. `Extensive Shopify development in different verticals`
     3. `Talented Pool of Shopify Developer`

4. **Section 4: Hiring Process (`our-development-process bg-transparent`)**
   - Transparent background.
   - Eyebrow: `Hiring Process`
   - Heading: `Hassle free Hiring Process to Hire Shopify Developers`
   - Description: `Hiring Shopify developers from Dynamic Dreamz is like smooth sailing. With a practical pricing structure, we provide hiring at competitive prices.`
   - 4 numbered steps with top/bottom/side border grid layout:
     - Step 01: `Share Requirements`
     - Step 02: `Expert Talent Selection`
     - Step 03: `Select the Developer`
     - Step 04: `Project Initiation`

5. **Section 5: Advantages (`theme-customization-services green`)**
   - Pista background `#eff4ef`.
   - Eyebrow: `Advantages of Dynamic Dreamz`
   - Heading: `Our Advantages of Choosing Dynamic Dreamz as a Shopify Developer`
   - Description: `Get connected with us, and you will witness the difference from day one!`
   - 6 white card boxes with red SVG icons:
     1. `The easy and fair hiring process`
     2. `Save 50% on your development cost`
     3. `Integrity is our core value`
     4. `We handle your HR needs`
     5. `We work as per your time zone`
     6. `Unmatched post production support`

6. **Section 6: End to End Development Services (`what-we-provide-sec` id="services")**
   - Heading: `Get Started with Shopify Developers for End to End Development Services`
   - Description: `Are you looking for a professional team to help you create and expand your online store? Our Shopify developers offer complete services, from setup to ongoing support. Let us handle the technical side so you can focus on your core business.`
   - 2-column grid of 4 service cards with red vector SVG icons and light cream background `#fafaf7`:
     1. `Shopify Store Setup & Configuration`
     2. `Third party App Integration`
     3. `Shopify Migration`
     4. `Shopify Post launch Maintenance & Support`

7. **Section 7: Portfolio Work (`our-work-sec pt-0` id="our_work")**
   - Eyebrow: `Portfolio`
   - Heading: `Work of our Shopify Developers that show our Expertise`
   - Description: `We are sure you would like to hear to what our clients says about our Shopify development.`
   - 4-column desktop grid (2-column tablet/mobile) with 8 Shopify portfolio projects:
     1. Nufyx
     2. Nekter Juice Bar
     3. Pagerie
     4. Luxxi Nails
     5. Eco Soul
     6. AdHOC Atelier
     7. Bombay Shirt Company
     8. Holy Plantz
   - Primary CTA: `View our work` -> `/our-work`.

8. **Section 8: Customer Testimonials (`happy-client-sec`)**
   - Eyebrow: `Client Stories`
   - Heading: `Our Customers' Testimonials`
   - Description: `We have faith in our work, but what truly matters is the outcomes we serve our clients.`
   - 11 video testimonial cards carousel with company logos and YouTube popup triggers.

9. **Section 9: FAQs (`faq-sec`)**
   - Split layout (`#fafaf7`) with sticky left heading column (`w-[41%]`) and right accordion (`w-[57%]`, max-width 654px).
   - 5 comprehensive questions covering developer roles, hiring costs, ROI, process, and services offered.
   - Circle-cross expand/collapse icons.

- **Bottom CTA Banner**: Explicitly omitted to match the live site layout.

## Responsive Behavior and Breakpoints

- `1199px`: desktop typography and column gutters tighten; portfolio grid transitions to tablet spacing.
- `991px`: hero video hides; split section headings stack and center; FAQ becomes single column; brand logo carousel adjusts item width.
- `767px`: shared section padding and heading sizes reduce; hero buttons stack full-width; mobile navigation active.
- `575px`: service and advantage cards stack into single column.
- `390px`: mobile hero H1 is 30px/40px; badges render in 2x2 grid with subtle divider lines matching live.

## Verification Checklist

- [x] Exact 9-section architecture matching live site.
- [x] Hero badges match live (Shopify Platinum Partner, Clutch, Trustpilot, Upwork Top Rated Plus).
- [x] No bottom CTA banner (matches live).
- [x] Zero duplicate assets in `public/assets/` (`check:asset-duplicates` passes).
- [x] Strict content boundary preserved (`check:component-content` passes).
- [x] No-trailing-slash URL policy enforced (`check:urls` passes).
- [x] Production build and TypeScript compilation pass (`npm run build`).
- [x] ESLint passes with zero warnings or errors (`npm run lint`).
