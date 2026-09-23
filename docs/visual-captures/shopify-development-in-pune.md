# Visual Parity Capture: Shopify Development in Pune

## Target URL
- Live Reference: `https://www.dynamicdreamz.com/shopify-development-in-pune/`
- Local Route: `/shopify-development-in-pune`

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
- `scratch/live-pune.html` (380,262 bytes rendered DOM fetched via Edge headless CDP)

## Sections Identified & Parity Mapping
1. **Hero Section** (`CityPageHeroSection`):
   - Eyebrows: `Shopify Development` • `Pune` with red-dash styling.
   - H1: `#1 Company For Shopify Development in Pune`
   - Copy: `Dynamic Dreamz is a trustworthy Shopify development company in Pune, offering expert Shopify solutions tailored to your unique needs. From Shopify migration to custom theme design, our Shopify developers ensure your online store performs at its best, enhancing your brand’s reach and driving more growth.`
   - CTAs: Primary `Get In Touch` (`/request-quote`), Secondary `Explore Shopify Services` (`#services`).
   - Partner Badges: 4 badges (Shopify Platinum Partner, Clutch 4.9 rating, Trustpilot 4.9 TrustScore, Upwork Top Rated Plus).
   - Interactive Tablet Showcase: 7-slide rotating showcase (Bella Vita, Bombay Shirt Company, Kalki Fashion, Nokt-1, Ranavat, Rare Rabbit, Renee Cosmetics).
2. **Brands Slider** (`IndustryBrandsSection`):
   - Heading: `Trusted by <br>Leading Brands`
   - Canonical brand logos (`industryBrandLogos`).
3. **Counter Section** (`CityPageCounterSection`):
   - Eyebrow: `Shopify Development Company in Pune` (red-dash styling).
   - H2: `Choose Dynamic Dreamz as the Best Shopify Development Company in Pune`
   - Description: `We are experts in developing custom Shopify stores that help businesses stand out in the competitive digital space. As a Shopify Development Agency in Pune, We focus on delivering visually attractive and sales driven stores, our trained team guarantees that your Shopify store is optimized for success. From Shopify app development to theme customization and white label services, we help you with all your Shopify requirements.`
   - 4 Stat Counters: `20+ Years`, `60+`, `150+`, `5,000+`.
4. **Why Choose Shopify** (`CityWhyChooseBoxesSection`):
   - Eyebrow: `Why Shopify` (red-dash styling).
   - H2: `Why Choose Shopify for Your Business?`
   - Description: `Shopify is a powerful and versatile eCommerce platform trusted by businesses across industries. Its ease of use, scalability, and robust features make it an ideal choice for creating and managing successful online stores. Shopify’s tools and integrations streamline operations, simplify workflows, and drive business growth.`
   - 5 Cards: Ease of Use, Customizable Themes, Scalability, Integrated Marketing Tools, Secure and Reliable with 24x24 icons.
5. **Shopify Development Services** (`AgencyServicesSection`):
   - Eyebrow: `Shopify Services in Bangalore / Bengaluru` (red-dash styling, preserves live wording).
   - H2: `Our Shopify Development Services`
   - Description: `From Shopify Plus and custom theme development to migration, integrations and ongoing support, our Shopify developers help businesses build and improve stores around their specific requirements.` (`showDescription={true}`).
   - 8 Services Boxes (`services-box`):
     - Shopify Plus Store Development
     - Custom Shopify Theme Design & Customization (`Read More` -> `/shopify-theme-customization`)
     - Figma/XD to Shopify Conversion
     - Shopify App Integration & Customization
     - Seamless Shopify Migration (`Read More` -> `/shopify-migration`)
     - Shopify Store Maintenance & Support (`Read More` -> `/shopify-maintenance-services`)
     - Shopify 2.0 Upgrade & Migration (`Read More` -> `/migrating-a-theme-to-online-store-2-0`)
     - White Label Shopify Development (`Read More` -> `/white-label-shopify-development-services`)
6. **Development Process** (`OurDevelopmentProcessSection`):
   - Eyebrow: `How We Work` (red-dash styling).
   - H2: `Our Development Process`
   - Description: `At Dynamic Dreamz, the Shopify Development Partner in Pune, ensures the outcome of high quality Shopify solutions tailored to your needs. From discovery and planning to design & development and testing, we focus on precision and user centric designs.`
   - 4 Steps: Step 01 (Discovery and Planning), Step 02 (Design and Development), Step 03 (Testing and Launch), Step 04 (Post Launch Support).
7. **Why Choose Us** (`CityWhyChooseBoxesSection`):
   - Eyebrow: `Why Dynamic Dreamz` (red-dash styling).
   - H2: `Why Choose Us for Your Shopify Development Needs?`
   - Description: `We are experts in delivering outstanding Shopify solutions that match your business goals. Our dedication to innovation, trustworthiness, and client satisfaction confirms that your store is not just functional but also a strategic investment for growth.`
   - 5 Cards in 5-column grid (`columns={5}`, `bgClassName="bg-white"`, `className="city-page-why-choose-dynamic !pb-0"`): Skilled Shopify Developers, Tailored Solutions, User Centric Design, Comprehensive Services, Proven Success.
8. **Portfolio Showcase** (`PortfolioShowcaseSection`):
   - Eyebrow: `Portfolio` (red-dash styling).
   - H2: `Our Work`
   - Description: `Lots of Shopify stores are precisely crafted and counting. Our expertise accelerates evolution and redefines shopping experiences for customers.`
   - 8 Live Projects: Renee, 11 11, Bombay Shirt Company, Royce Chocolate, Tropicfeel, TEGO Fit, nekter juice bar, Rare Rabbit (`cardVariant="ourWorkRefresh"`).
   - CTA: `View our work` (`/our-work`).
9. **Client Testimonials** (`HappyClientSection`):
   - Eyebrow: `Client Stories` (red-dash styling).
   - H2: `Don't Just Take Our Word For It`
   - Description: `We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories. Check out how our services empower them to evolve.`
   - 11 Interactive Video Testimonial Cards with YouTube modal playback.
10. **FAQ Section** (`SplitFaqSection`):
    - Layout: Split 2-column layout (`.faq-sec .wrapper`).
    - H2: `Frequently Asked Questions`
    - 5 FAQs with circular expandable toggles (`circle-cross`).
11. **Bottom CTA Banner** (`CtaBannerSection`):
    - Heading: `Want us to help you with your online store?`
    - Button: `request a quote` (`/request-quote`).

## Asset Verification
- 100% SVG and raster assets matched against existing canonical files in `public/assets/`.
- Zero new files added to `public/assets/`.
- Duplicate asset audit confirms 0 duplicate hash groups.

## Verification
- URL Policy: Clean slashless canonical `/shopify-development-in-pune`
- Component Content Check: Passed across all source files
- Asset Duplicates: 0 byte / 0 visual SVG / 0 raster duplicates
- Build: Next.js production build passes cleanly
