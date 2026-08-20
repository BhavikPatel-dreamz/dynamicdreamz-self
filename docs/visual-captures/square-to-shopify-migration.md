# Visual Capture: Square to Shopify Migration (`/square-to-shopify-migration`)

- **Live URL**: `https://www.dynamicdreamz.com/square-to-shopify-migration/`
- **Local Route**: `/square-to-shopify-migration`
- **Date Checked**: 2026-08-20
- **Viewports Inspected**: Desktop (1440x900), Tablet (768x1024), Mobile (390x844)

---

## 1. Structure and Section Sequence (Exact Live Match)

1. **Header**: Site header with navigation and "Get a Quote" button (`site-header dd-new`).
2. **Hero Section (`inner-hero-sec woocommerce-to-shopify`)**:
   - Reused shared component: `ServiceHeroSection` with `variant="split"`.
   - Left column (58% desktop, 100% mobile): H1 (`Square to Shopify Migration Service`), description paragraph, "Request a Quote" CTA button (`/request-quote`).
   - Right column (40% desktop, 100% mobile): Service hero illustration (`square-to-shopify-migration-hero.svg`) + `review-wrap` featuring Clutch (132 reviews, 5.0 rating), Upwork (2000+ reviews, 5.0 rating), and GoodFirms (72 reviews, 5.0 rating) with star ratings and gradient borders.
3. **Client Logos Section (`our-client-sec`)**:
   - Reused shared component: `IndustryBrandsSection`.
   - Heading: `Trusted by Leading Brands`.
   - Infinite brand logo slider with 12 brands (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
4. **Single Text Box Section (`single-text-box-sec`)**:
   - Reused shared component: `TextBoxSection`.
   - Background `#fbf7ed`, rounded 20px, padding 70px 55px (mobile 30px 20px).
   - Heading: `Why do Square to Shopify Migration?`.
   - Text explaining user-friendly interface, customization, app store, and scalability.
5. **Migration Process Section (`migration-process-step-sec px-0`)**:
   - Reused shared component: `MigrationProcessSection`.
   - Heading: `Square to Shopify Migration Process`.
   - 6 sequential steps with gradient `STEP` pill badges, gradient numbers `01`-`06`, titles, and descriptions.
6. **Testimonials Section (`happy-client-sec`)**:
   - Reused shared component: `HappyClientSection`.
   - Heading: `Our Customers' Testimonials`.
   - Description: `We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve.`
   - Video testimonial cards carousel with modal playback.
7. **FAQ Section (`faq-sec`)**:
   - Reused shared component: `FaqSection`.
   - Heading: `Frequently Asked Questions`.
   - 6 accordion FAQ items (FAQ 1 includes bulleted list with bold labels; first item active by default).
8. **Footer (`site-footer`)**: Standard site footer (no extra CTA banner, matching live site).

---

## 2. Typography, Spacing, and Colors

- **Headings**:
  - H1: Montserrat, 50px / 66px bold (mobile: 30px / 40px), color `#282828`.
  - H2: Montserrat, 35px / 48.475px bold, letter-spacing `-0.7px` (mobile: 24px / 33px).
  - H3: Montserrat, 20px / 28px bold, color `#282828`.
- **Body**: Montserrat, 16px / 30.4px or 27.2px, color `#535353` / `#666666`.
- **Backgrounds**:
  - Hero & Process: `#ffffff`
  - Client Logos & Single Text Box: `#fbf7ed`
- **CTAs**:
  - Primary: `#e01936` with hover `#ba132b`, rounded-full, 16px font-bold, padding `15px 35px`.

---

## 3. Responsive Breakpoints

- **Desktop (1440px)**:
  - 2-column hero with 58% left copy and 40% right illustration + review badges.
  - Process steps with 75px left step counter badges and right content.
- **Tablet (768px - 991px)**:
  - Hero stacks illustration below text with centered alignment; review badges adjust to horizontal cards.
- **Mobile (< 768px)**:
  - Hero stacks vertically; review badges wrap into full-width cards.
  - Process step badges and numbers stack cleanly with left-to-right alignment.
  - Zero horizontal overflow.

---

## 4. Asset Mapping & Deduplication

- **Reused Canonical Assets**:
  - `cluth_review_services.svg` -> `/assets/reviews/clutch-wordmark.svg`
  - `upwork_review_services.svg` -> `/assets/reviews/upwork-wordmark.svg`
  - `goodfirms_review_services.svg` -> `/assets/reviews/goodfirms-wordmark.svg`
  - `star_icon_services.svg` -> `/assets/reviews/five-stars.svg`
  - 12 Client logos in `/assets/clients/`
- **Unique Assets Ingested**:
  - `/assets/square-to-shopify-migration/square-to-shopify-migration-hero.svg`
