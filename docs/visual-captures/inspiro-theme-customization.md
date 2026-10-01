# Visual Parity Capture: Inspiro Theme Customization

## Target URL
- Live Reference: `https://www.dynamicdreamz.com/inspiro-theme-customization/`
- Local Route: `/inspiro-theme-customization`

## Capture Information
- Date: 2026-10-01
- Viewports:
  - Desktop: 1440px
  - Tablet: 768px
  - Mobile: 390px
- Live Source Reference: `scratch/inspiro_live.html`

## CSS Sources Inspected
- `flexible-css/hero_section.css` (`.inner-hero-sec.theme-customize-hero`)
- `services/main.css` (`.theme-customization-services.yellow`, `.what-we-provide-sec.only-text`, `.theme-customization-services.green`, `.how-to-choose-spa-sec`, `.our-work-sec`, `.happy-client-sec`, `.faq-sec`)
- `services/media.css` (Responsive grid, flex wraps, and padding overrides)

## Sections Identified
1. **Theme Hero Section** (`ThemeHeroSection`):
   - Eyebrows: `Wordpress Agency`, `Theme Customization`
   - H1: `Inspiro Theme Customization Service`
   - Copy: `The Inspiro theme is a professional, lightweight, stylish WordPress theme created for photographers, videographers, and creative professionals. Its full-screen video backgrounds, gallery options, and stunning designs help users showcase their work effectively. Our Inspiro Theme Customization Services ensure that your WordPress website stands out with a unique design, smooth performance, and optimized user experience tailored to your business or personal brand.`
   - CTA: `request a quote` -> `/request-quote`
   - Hero Mockup: `/assets/inspiro-theme-customization/hero/inspiro-theme-customization-service-img.webp` (1202x948)
2. **Brands Slider** (`IndustryBrandsSection`):
   - Heading: `Trusted by \nLeading Brands`
   - Density: `flexible`
   - 12 client brand logos: Supper Tails, Eleven Eleven, Bellavita, Bombay Shirt Company, Popclub, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit
3. **Features of Inspiro Theme** (`ThemeCustomizationServicesSection` - yellow):
   - Eyebrow: `Features`
   - H2: `Features of Inspiro Theme`
   - Subtitle: `The Inspiro theme offers a range of features to enhance your website's functionality and visual appeal. Here are a few:`
   - 8 cards with `#fafaf7` background, white rounded cards, and `#AD5151` SVGs: Full-Screen Video Backgrounds, Lightweight & Fast Performance, Multiple Gallery Layouts, Gutenberg & Elementor Compatibility, WooCommerce Ready, Mobile & SEO Friendly, Custom Widgets & Sidebars, One-Click Demo Import
4. **Our WordPress Theme Customization Services** (`AgencyServicesSection`):
   - H2: `Our WordPress Theme \nCustomization Services`
   - Subtitle: `We provide top-notch Inspiro theme customization services to help you build a visually appealing and high-performing website.`
   - 6 services in 2-column grid (`cardVariant="services-box"`, preserved linebreaks, `#AD5151` SVGs): Theme Installation, Custom Design and Branding, Responsive Design, Advanced Features Integration, Performance Optimization, Ongoing Support and Maintenance
5. **Benefits of Inspiro Theme Customization** (`ThemeCustomizationServicesSection` - green):
   - Eyebrow: `Benefits`
   - H2: `Benefits of Inspiro Theme Customization`
   - Subtitle: `Customizing the Inspiro theme allows you to enhance your website’s design, performance, and user experience. Explore here:`
   - 7 cards with `#eff4ef` background, white rounded cards, and `#AD5151` SVGs: Fully Customizable Store, Unique Brand Identity, Improved User Experience, Multiple Third-party Plugins, Higher Conversion Rates, Safe and Secure Payments, Minimal Maintenance Cost
6. **Why Choose Dynamic Dreamz** (`EvaluationFrameworkSection`):
   - Eyebrow: `Why Dynamic Dreamz`
   - H2: `Why Choose Dynamic Dreamz`
   - Subtitle: `At Dynamic Dreamz, we specialize in crafting unique, high-performance WordPress websites tailored to your needs.`
   - 4 numbered framework cards (`01`–`04`): Expert Team, Proven Process, Ongoing Support, Client-Focused Approach
7. **WordPress Portfolio Showcase** (`PortfolioShowcaseSection`):
   - Eyebrow: `Portfolio`
   - H2: `Snippets of WordPress Theme Customization Portfolio`
   - Subtitle: `Explore our portfolio, which showcases successful WordPress theme customization projects and highlights how we customize, secure, and enhance stores for peak performance.`
   - 8 WordPress projects (`cardVariant="ourWorkRefresh"`, 4 columns): Quite Events, Les Etoiles, Valents, Get Sunsights, Lipari Design, Nexventur, Awaken Media, Budget Maids
   - CTA: `View our work` -> `/our-work`
8. **Client Testimonials** (`HappyClientSection`):
   - Eyebrow: `Client Stories`
   - H2: `Don't Just Take Our Word For It`
   - Description: `Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.`
   - Owl carousel / client testimonial slider with video popup modal dialog
9. **FAQ Accordion** (`SplitFaqSection`):
   - H2: `Frequently Asked Questions`
   - 5 comprehensive FAQs with split 2-column accordion covering pricing factors, WooCommerce store compatibility, customization scope, SEO optimization, and delivery timeline

## Parity Verification Results
- Section order and IDs match live site DOM hierarchy exactly.
- SVG icons extracted directly from live site and rendered via dedicated type-safe React components in `inspiro-icons.tsx`.
- Client brand list matches live 12-logo roster (`indian_brand` class wrapper).
- Colors, border-radii, backgrounds (`#f7f4e9` hero, `#fafaf7` yellow feature cards, `#eff4ef` green benefit cards) match live site computed values.
- Content boundary rule strictly enforced with zero visible copy in components.
- Zero asset duplicates in `public/assets/`.
- No-trailing-slash policy enforced on all routes and links.
