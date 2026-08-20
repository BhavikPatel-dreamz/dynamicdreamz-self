# Visual Capture: PrestaShop to Shopify Migration (`/prestashop-to-shopify-migration`)

- **Live URL**: `https://www.dynamicdreamz.com/prestashop-to-shopify-migration/`
- **Local Route**: `/prestashop-to-shopify-migration`
- **Date Checked**: 2026-08-20
- **Viewports Inspected**: Desktop (1440x900), Tablet (768x1024), Mobile (390x844)

---

## 1. Structure and Section Sequence (Exact Live Match)

1. **Header**: Site header with navigation and "Get a Quote" button (`site-header dd-new`).
2. **Hero Section (`inner-hero-sec woocommerce-to-shopify`)**:
   - Reused shared component: `ServiceHeroSection` with `variant="split"`.
   - Left column (58% desktop, 100% mobile): H1 (`PrestaShop to Shopify Migration`), description paragraph, "Request a Quote" CTA button (`/request-quote`).
   - Right column (40% desktop, 100% mobile): Service hero illustration (`prestashop-to-shopify-migration-hero.svg`) + `review-wrap` featuring Clutch (132 reviews, 5.0 rating), Upwork (2000+ reviews, 5.0 rating), and GoodFirms (72 reviews, 5.0 rating) with star ratings and gradient borders (`linear-gradient(to right, #15c064, #00d1ff)`).
3. **Client Logos Section (`our-client-sec`)**:
   - Reused shared component: `IndustryBrandsSection`.
   - Heading: `Trusted by Leading Brands`.
   - Infinite brand logo slider with 12 brands (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
4. **Single Text Box Section (`single-text-box-sec`)**:
   - Reused shared component: `TextBoxSection`.
   - Background `#fbf7ed`, rounded 20px, padding 70px 55px (mobile 30px 20px).
   - Heading: `Why Migrate from PrestaShop to Shopify?`.
   - Text explaining Shopify benefits and scalability.
5. **Benefits Section (`shopify-customization-services-sec mb-80`)**:
   - Reused shared component: `ShopifyReasonsSection`.
   - Background: `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`.
   - Heading: `Benefits of Moving from <br> PrestaShop to Shopify`.
   - 5 Benefit cards (`User Friendly Interface`, `Better Customization Options`, `App Integrations`, `Enhanced Security`, `Scalable Solutions`) with icon, title, description, and hover gradient border.
6. **Things to Consider Section (`why-choose-wordpress-sec two-col-center-img pt-0 pb-0`)**:
   - Reused shared component: `TwoColCenterImageSection`.
   - Heading: `Things to Consider Before <br> PrestaShop to Shopify Migration`.
   - 3-column layout on desktop (Left 31%, Center 34%, Right 31%):
     - Left column: 2 info boxes (`Data Mapping`, `Design Preferences`).
     - Center column: PrestaShop illustration (`prestashop-illustration.svg`) — hidden on mobile (`<992px`).
     - Right column: 2 info boxes (`SEO Considerations`, `Payment and Shipping`).
7. **Migration Process Section (`migration-process-step-sec`)**:
   - Reused shared component: `MigrationProcessSection`.
   - Heading: `PrestaShop to Shopify Migration Process`.
   - 6 sequential steps with gradient `STEP` pill badges, gradient numbers `01`-`06`, titles, and descriptions.
   - Step 04 contains structured data categories: Products, Product Categories, Customers, Orders, Coupon, Reviews, CMS Pages, Blogs.
   - Step 05 contains testing checklists: Functional Validation, Data Validation, Performance Tests, Go Live Checklist.
8. **Why Choose Dynamic Dreamz Section (`shopify-customization-services-sec mb-80`)**:
   - Reused shared component: `ShopifyReasonsSection`.
   - Background: `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`.
   - Heading: `Why Choose Dynamic Dreamz for <br> PrestaShop to Shopify Migration`.
   - 5 Reason cards with icon, title, description, and hover gradient border.
9. **Testimonials Section (`happy-client-sec`)**:
   - Reused shared component: `HappyClientSection`.
   - Heading: `Our Customers' Testimonials`.
   - Description: `We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve.`
   - Video testimonial cards carousel with play modal.
10. **FAQ Section (`faq-sec`)**:
    - Reused shared component: `FaqSection`.
    - Heading: `Frequently Asked Questions`.
    - 9 accordion FAQ items (FAQ 1 includes bulleted list with bold labels).
11. **Footer (`site-footer`)**: Standard site footer (no extra CTA banner, matching live site).

---

## 2. Style & Typography Values

- **Colors**:
  - Ink / Primary Headings: `#282828` / `#111111`
  - Text / Body: `#535353` / `#666666`
  - Accent / Red CTA: `#d92128` (hover `#b51a20`)
  - Gradient (Step & Badges): `linear-gradient(96.7deg, #15c064 37.46%, #00d1ff 120.9%)`
  - Gradient Backgrounds: `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`
  - Light Backgrounds: `#fbf7ed`, `#fafaf7`, `#ffffff`
  - Borders: `#efefef`, `#dfdfdf`
- **Typography**:
  - H1: Montserrat / Neue Montreal, 50px bold, line-height 66px (mobile: 30px, line-height 40px).
  - H2: Montserrat / Neue Montreal, 35px bold, line-height 48.5px (mobile: 24px, line-height 33px).
  - H3: Montserrat / Neue Montreal, 18px–20px bold.
  - Body: 16px font-medium / regular, line-height 27.2px–30.4px.

---

## 3. Responsive Behavior

- **Desktop (>= 1200px)**:
  - Hero: 2-column layout (58% left, 40% right) with left copy and right illustration + 3 review boxes.
  - Considerations: 3 columns (Left 31%, Center 34%, Right 31%).
  - Process steps: Vertical list with left-aligned step numbers and indented text / nested checklists.
  - Cards (Benefits & Why Choose): 3-column grid.
- **Tablet (768px - 1199px)**:
  - Hero stacks if required or adjusts padding.
  - Considerations middle image scales down or hides under 992px.
  - Process steps numbers adjust to 26px on mobile.
- **Mobile (< 768px)**:
  - Hero stacks vertically with centered alignment; review badges wrap into full-width cards.
  - Considerations middle image is hidden (`display: none`), info boxes stack vertically.
  - Process step badges and numbers stack cleanly with left-to-right alignment.
  - Zero horizontal overflow.

---

## 4. Asset Mapping & Deduplication

- **Reused Canonical Assets**:
  - `cluth_review_services.svg` -> `/assets/reviews/clutch-wordmark.svg`
  - `upwork_review_services.svg` -> `/assets/reviews/upwork-wordmark.svg`
  - `goodfirms_review_services.svg` -> `/assets/reviews/goodfirms-wordmark.svg`
  - `star_icon_services.svg` -> `/assets/reviews/five-stars.svg`
  - `user-friendly-interface-icon.svg` -> `/assets/shopify-theme-customization/benefits/improved-user-experience.svg`
  - `multiple-sales-channels-icon.svg` -> `/assets/shopify-theme-customization/benefits/multiple-third-party-apps.svg`
  - `cost-effective-scalability-img.svg` -> `/assets/shopify-theme-customization/benefits/higher-conversion-rates.svg`
  - `expertise_icon.svg` -> `/assets/services/bigcommerce-development/advantages/expertise-in-custom-development.svg`
  - `timely-delivery-icon.svg` -> `/assets/services/bigcommerce-development/advantages/timely-delivery.svg`
  - `transparent-com-icon.svg` -> `/assets/services/bigcommerce-development/advantages/transparent-communication.svg`
  - `gradient-check.svg` -> `/assets/icons/gradient-check.svg`
  - 12 Client logos in `/assets/clients/`
- **Unique Assets Ingested**:
  - `/assets/prestashop-to-shopify-migration/prestashop-to-shopify-migration-hero.svg`
  - `/assets/prestashop-to-shopify-migration/benefits/better-customization-options.svg`
  - `/assets/prestashop-to-shopify-migration/benefits/enhanced-security.svg`
  - `/assets/prestashop-to-shopify-migration/considerations/data-mapping.svg`
  - `/assets/prestashop-to-shopify-migration/considerations/design-preferences.svg`
  - `/assets/prestashop-to-shopify-migration/considerations/prestashop-illustration.svg`
  - `/assets/prestashop-to-shopify-migration/considerations/seo-considerations.svg`
  - `/assets/prestashop-to-shopify-migration/considerations/payment-and-shipping.svg`
  - `/assets/prestashop-to-shopify-migration/why-choose/custom-shopify-themes.svg`
  - `/assets/prestashop-to-shopify-migration/why-choose/smooth-data-transfer.svg`
