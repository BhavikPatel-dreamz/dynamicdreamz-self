# Visual Parity Capture: Shopify Development in New York

## Target URL
- Live Reference: `https://www.dynamicdreamz.com/shopify-development-in-new-york/`
- Local Route: `/shopify-development-in-new-york`

## Capture Information
- Date: 2026-09-23
- Status: Fully remigrated to exact live site visual parity with 11 sections
- Viewports Inspected:
  - Desktop: 1440px
  - Tablet: 768px
  - Mobile: 390px
- Live Source Reference: `scratch/live-new-york-page.html`
- Canonical Stylesheets & Media Inspected:
  - `services/main.css` (`.city-page-hero-sec`, `.city-page-counter`, `.city-page-why-choose-boxes`, `.what-we-provide-sec`, `.our-development-process`, `.city-page-why-choose-dynamic`, `.our-work-sec`, `.happy-client-sec`, `.faq-sec`, `.request-banner`)
  - `services/media.css` (Breakpoints for 1199px, 991px, 767px, 575px)
  - `flexible-css/faqs_section.css` (`.faq-sec`, `.accrodion-item`)
  - `flexible-css/hero_section.css`

## Live vs Rebuilt Section Hierarchy (Exact 11 Sections)
1. **Hero Section** (`CityPageHeroSection`):
   - Eyebrows: "Shopify Development" • "New York" with live red-dash divider.
   - H1: `Shopify Development in New York That Drives Real Results`
   - Description: `Finding a trusted Shopify development company in New York? Get to the Dynamic Dreamz...`
   - CTAs: Primary "Get In Touch" (`/request-quote`), Secondary "Explore Shopify Services" (`#services`).
   - Badges: 4 verified badges (Shopify Partner, 18+ Years Experience, 5-Star Clutch, 100% Job Success Upwork).
   - Graphic: Interactive 7-slide tablet frame slider (`CityHeroTabletSlider`) featuring Bella Vita, Bombay Shirt Company, Kalki Fashion, Nokt-1, Ranavat, Rare Rabbit, Renee Cosmetics.
2. **Brands Slider** (`IndustryBrandsSection`):
   - Heading: `Trusted by Leading Brands`
   - 12 verified brand logos matching live page.
3. **Counter Section** (`CityPageCounterSection`):
   - Eyebrow: `Shopify Development Company in New York`
   - Heading: `Choose Dynamic Dreamz as the Best Shopify Development Company in New York`
   - Description: `As a premier Shopify development company in New York, we specialize in delivering tailored, high-performance eCommerce stores...`
   - 4 Stats Counters: `20+` (YEARS OF EXPERIENCE), `150+` (IN-HOUSE WEB DEVELOPERS), `5,000+` (PROJECTS DELIVERED WORLDWIDE), `2500+` (SATISFIED GLOBAL CLIENTS) with sublabel layout.
4. **Platform Benefits** (`CityWhyChooseBoxesSection`):
   - Eyebrow: `Why Shopify`
   - Heading: `Why Choose Shopify for Your Business?`
   - Description: `Shopify is the world's most powerful eCommerce platform, which is built for businesses that mean business.`
   - 5 Benefit Cards: Ease of Use, Customizable Themes, Scalability, Integrated Marketing Tools, Secure and Reliable with canonical 24x24 icons.
5. **Shopify Development Services** (`AgencyServicesSection`):
   - Eyebrow: `Shopify Services in New York`
   - Heading: `Our Shopify Development Services`
   - Description: `From store setup to advanced customization, we offer end-to-end Shopify solutions built around your business goals.`
   - 8 Two-Column Service Cards with canonical icons and `READ MORE` links: Shopify Plus Store Development, Shopify Theme Customization, Figma / XD to Shopify Conversion, Shopify App Integration, Shopify Migration, Shopify Maintenance & Support, Shopify 2.0 Migration, White Label Shopify Development.
6. **Development Process** (`OurDevelopmentProcessSection`):
   - Eyebrow: `How We Work`
   - Heading: `Our Shopify Development Process`
   - Description: `We follow a streamlined and results-driven Shopify development process to ensure your store is built for success:`
   - 4 Process Steps: Discovery & Planning, Design and Development, Testing & Launch, Post-Launch Support with circular step numbers and clean borders.
7. **Why Dynamic Dreamz Grid** (`CityWhyChooseBoxesSection` with `whyChooseGrid` 3-column layout):
   - Eyebrow: `Why Dynamic Dreamz`
   - Heading: `Why Choose Us for Your Shopify Development Needs?`
   - Description: `Dynamic Dreamz is committed to delivering top-quality Shopify development, with the results to prove it.`
   - 6 Cards in 3-column grid: Shopify Platinum Partner, 150+ Expert Developers, 5000+ Projects Delivered, Custom-First Approach, On-Time. Every Time., Long-Term Partnership with canonical icons.
8. **Portfolio Showcase** (`PortfolioShowcaseSection`):
   - Eyebrow: `Portfolio`
   - Heading: `Our Work`
   - Description: `Thousands of Shopify stores crafted with precision, each one built to perform, convert, and grow.`
   - 8 Live Portfolio Cards: Ranavat, Supertails, Atolea Jewelry, Matcha Republic, Sims Direct, Luxxi nails, Holy Plantz, Nufyx.
   - CTA: `View our work` -> `/portfolio`.
9. **Client Testimonials** (`HappyClientSection`):
   - Eyebrow: `Client Stories`
   - Heading: `Don't Just Take Our Word For It`
   - Description: `We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories. Check out how our services empower them to evolve.`
   - 11 Video Testimonial Cards starting with Shari Leidich (`Vc9FH6ZeoXY`) with interactive video modal.
10. **FAQ Section** (`SplitFaqSection`):
    - Layout: Two-column split layout matching live `services_main.css` / `faqs_section.css`. Left sticky column (41% width) with `<h2>Frequently Asked Questions</h2>`, right column (57% width) with accordion.
    - Background: `bg-[#fafaf7]` (`rgba(250, 250, 247, 1)`).
    - Accordion items: Transparent background, bottom border (`border-b border-ink/10`), first item open by default (`openIndex = 0`), circle-cross 30px toggle icon (`iconVariant="circle-cross"`).
    - Typography: Question 20px font-weight 500, answer 16px/28px on desktop and 14px/24px on tablet/mobile.
    - 6 Accordion Items:
      1. What is a Shopify development agency?
      2. How do I find the best Shopify development company in New York?
      3. How much does it cost to hire a Shopify developer in New York?
      4. How long does it take to build a Shopify store?
      5. Do you provide support after the store goes live?
      6. How do I get started with Shopify development in New York?
11. **Bottom CTA Banner** (`CtaBannerSection`):
    - Heading: `Want us to help you with your online store?`
    - Button: `request a quote` -> `/request-quote`.

## Discarded / Corrected Items (Non-Live Artifacts Removed)
- REMOVED `BookIntroCallSection` (form + call out card) which was erroneously present in the old migration but does not exist on the live page.
- REPLACED `TextBoxSection` with the exact live `CityPageCounterSection` (4 red-accented counter boxes).
- REPLACED generic portfolio items with the exact 8 live portfolio projects (Ranavat, Supertails, Atolea Jewelry, etc.).
- REPLACED generic horizontal slider with the exact 3-column `CityWhyChooseBoxesSection` (`whyChooseGrid`).

## Verification Results
- URL Policy: Clean slashless canonical `/shopify-development-in-new-york` (`check:urls` passed).
- Component Content Boundary: Passed (0 violations across 514 files).
- Asset Duplication Audit: Checked 1707 assets; 0 byte duplicates, 0 SVG duplicates, 0 raster duplicates.
- Responsive Parity: Verified on 1440px desktop, 768px tablet, 390px mobile.
- Schema: Validated JSON-LD with `createShopifyDevelopmentInNewYorkPageSchema()` including Service, WebPage, BreadcrumbList, FAQPage, and Organization graphs.
