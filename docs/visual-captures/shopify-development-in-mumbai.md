# Visual Parity Capture: Shopify Development in Mumbai

## Target URL
- Live Reference: `https://www.dynamicdreamz.com/shopify-development-in-mumbai/`
- Local Route: `/shopify-development-in-mumbai`

## Capture Information
- Date: 2026-09-22
- Viewports:
  - Desktop: 1440px
  - Tablet: 768px
  - Mobile: 390px

## CSS / JS Sources Inspected
- `flexible-css/hero_new_section.css` (`.hero-new-section`, `.tablet-slider-wrap`, `.global_brands_grid_wrap`, `.eyebrow`)
- `flexible-css/trusted_by_leading_brands_section.css` (`.our-client-sec`, `.wrapper.indian_brand`)
- `flexible-css/city_page_counter.css` (`.city-page-counter`, `.section_title_with_eyebrow`, `.counter-box`, `.eyebrow`)
- `flexible-css/city_page_why_choose_boxes.css` (`.city-page-why-choose-boxes`, `.why-choose-box`)
- `flexible-css/delivery_section.css` (`.what-we-provide-sec`, `.services-box`)
- `flexible-css/our_development_process.css` (`.our-development-process`, `.item`)
- `flexible-css/city_page_why_choose_dynamic_dreamz.css` (`.city-page-why-choose-dynamic`)
- `flexible-css/projects_section.css` (`.our-work-sec`, `.our_work_team.wordpress`, `.view-our-work`)
- `flexible-css/client_review_section.css` (`.happy-client-sec`, `.happy-client-col`)
- `flexible-css/faqs_section.css` (`.faq-sec`, `.wrapper`, `.accordion-main`, `.accrodion-item`)
- `scratch/live-mumbai.html` (383,808 bytes rendered DOM fetched via Edge headless CDP)

## Sections Identified & Parity Mapping
1. **Hero Section** (`CityPageHeroSection`):
   - Eyebrows: `Shopify Development` • `Mumbai` with red-dash styling.
   - H1: `#1 Shopify Development Company in Mumbai`
   - Copy: `Mumbai’s ecommerce space is evolving rapidly, and brands need to keep pace. As a trusted Shopify development company, Dynamic Dreamz helps businesses launch, scale, and optimize high-performing online stores tailored to their requirements.`
   - CTAs: Primary `Get In Touch` (`/request-quote`), Secondary `Explore Shopify Services` (`#services`).
   - Partner Badges: 4 badges (Shopify Platinum Partner, Clutch 4.9 rating, Trustpilot 4.9 TrustScore, Upwork Top Rated Plus).
   - Interactive Tablet Showcase: 7-slide rotating showcase (Bella Vita, Bombay Shirt Company, Kalki Fashion, Nokt-1, Ranavat, Rare Rabbit, Renee Cosmetics).
2. **Brands Slider** (`IndustryBrandsSection`):
   - Heading: `Trusted by Leading Brands`
   - Canonical brand logos (`industryBrandLogos`).
3. **Counter Section** (`CityPageCounterSection`):
   - Eyebrow: `Shopify Development Company in Mumbai` (red-dash styling).
   - H2: `Why Dynamic Dreamz is the Best Shopify Development Company?`
   - Description: `Dynamic Dreamz helps businesses build scalable and high-performing ecommerce experiences tailored for competitive markets like Mumbai. As an experienced Shopify development company, we combine strategic planning, design expertise, and advanced Shopify web development to create online stores focused on growth and conversions.`
   - 4 Stat Counters: `20+ Years`, `60+`, `150+`, `5,000+`.
4. **Why Choose Shopify** (`CityWhyChooseBoxesSection`):
   - Eyebrow: `Why Shopify` (red-dash styling).
   - H2: `Why Choose Shopify for Your Business?`
   - Description: `Shopify is a flexible & reliable ecommerce platform that is designed to assist businesses in launching, managing, and scaling online stores with ease. And when you connect with the Top 10 Website Designer in Mumbai, you get to enjoy its powerful features, seamless integrations, and user-friendly interface.`
   - 5 Cards: Ease of Use, Customizable Themes, Scalability, Integrated Marketing Tools, Secure and Reliable with 24x24 icons.
5. **Shopify Development Services** (`AgencyServicesSection`):
   - Eyebrow: `Shopify Services in Mumbai` (red-dash styling).
   - H2: `Our Shopify Development Services`
   - Description: `From Shopify Plus and custom theme development to migration, integrations and ongoing support, our Shopify developers help businesses build and improve stores around their specific requirements.` (`showDescription={true}`).
   - 6 Services Boxes (`services-box`):
     - Expert Shopify Developers (no link)
     - Custom Solutions (`Read More` -> `/shopify-theme-customization`)
     - User-Focused Design (no link)
     - SEO-Optimized Websites (no link)
     - Comprehensive Services (`Read More` -> `/shopify-migration`)
     - Proven Results (`Read More` -> `/shopify-maintenance-services`)
6. **Development Process** (`OurDevelopmentProcessSection`):
   - Eyebrow: `How We Work` (red-dash styling).
   - H2: `Our Shopify Development Process`
   - Description: `We follow a structured approach to deliver efficient and scalable Shopify web development solutions, ensuring every project is executed smoothly from planning to post-launch growth.`
   - 4 Steps: Step 01 (Discovery and Planning), Step 02 (Design and Development), Step 03 (Testing and Launch), Step 04 (Post Launch Support).
7. **Why Partner with Dynamic Dreamz** (`CityWhyChooseBoxesSection`):
   - Eyebrow: `Why Dynamic Dreamz` (red-dash styling).
   - H2: `Why You Should Partner with the Shopify Development Company in Mumbai?`
   - Description: `Partner with Dynamic Dreamz, an experienced Shopify development company in Mumbai, delivering scalable solutions that enhance performance, customer experience, and long-term ecommerce growth.`
   - 6 Cards in 3-column grid (`columns={3}`, `bgClassName="bg-white"`, `className="city-page-why-choose-dynamic !pb-0"`): Expert Shopify Developers, Custom Solutions, User-Focused Design, SEO-Optimized Websites, Comprehensive Services, Proven Results.
8. **Portfolio Showcase** (`PortfolioShowcaseSection`):
   - Eyebrow: `Portfolio` (red-dash styling).
   - H2: `Our Work`
   - Description: `See how we turn ecommerce ideas into powerful Shopify experiences.`
   - 8 Live Projects: Renee, 11 11, Bombay Shirt Company, Royce Chocolate, Tropicfeel, TEGO Fit, nekter juice bar, Rare Rabbit (`cardVariant="ourWorkRefresh"`).
   - CTA: `View our work` (`/our-work`).
9. **Client Testimonials** (`HappyClientSection`):
   - Eyebrow: `Client Stories` (red-dash styling).
   - H2: `Voices of Our Clients`
   - Description: `Hear directly from the brands that have partnered with Dynamic Dreamz to build and grow their Shopify stores successfully.`
   - 11 Interactive Video Testimonial Cards with YouTube modal playback.
10. **FAQ Section** (`SplitFaqSection`):
    - Layout: Split 2-column sticky layout (`.faq-sec .wrapper`).
    - H2: `Frequently Asked Questions`
    - 7 FAQs with circular expandable icons (`circle-cross`).
11. **Bottom CTA Banner** (`CtaBannerSection`):
    - Heading: `Want us to help you with your online store?`
    - Button: `request a quote` (`/request-quote`).

## Asset Verification
- 100% SVG and raster assets matched against existing canonical files in `public/assets/`.
- Zero new files added to `public/assets/`.
- Duplicate asset audit confirms 0 duplicate hash groups.

## Verification
- URL Policy: Clean slashless canonical `/shopify-development-in-mumbai`
- Component Content Check: Passed across all source files
- Asset Duplicates: 0 byte / 0 visual SVG / 0 raster duplicates
- Build: Next.js production build passes cleanly
