# Visual Capture Note: Shopify Migration

**Route**: `/shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/shopify-migration/`
**Capture Date**: 2026-08-19

## Page Overview & Structure
The `/shopify-migration` page is a core service landing page targeting merchants and enterprises migrating from other platforms (Magento, WooCommerce, BigCommerce, Salesforce, PrestaShop, Squarespace, Wix, Ecwid, Square, Etsy) or Shopify 1.0 themes to Shopify & Shopify Plus.

### Sections (in visual order):
1. **Inner Hero Banner (`.inner-hero-sec`)**:
   - Centered typography: H1 "Seamless Shopify Migration Services", subtext with `<br>` for readability, red CTA button "request a quote" pointing to `/request-quote`.
   - Review animation pill container (`.review_animation_main`) displaying Clutch, Upwork, and GoodFirms 5.0 ratings and reviews counter.
2. **Our Comprehensive Migration Services (`.migration-services-sec`)**:
   - Section heading "Our Comprehensive Migration Services" + subtitle "Bespoke migration services for effortless transition to Shopify platform".
   - 12 migration platform cards (Shopify Theme, Magento to Shopify Plus, Magento, WooCommerce, BigCommerce, Salesforce, PrestaShop, Squarespace, Wix, Ecwid, Square, Etsy).
   - Card layout: SVG platform transition icon (245x92), H3 title, descriptive paragraph, hover animation with border/shadow enhancement.
3. **Built for the Next Era of Shopify Commerce (`.smarter-shopify-store`)**:
   - Dark background (`#171E16`), white typography.
   - Section heading + description.
   - 4-card 2x2 grid with icon, H3, description, and interactive pill tags (e.g. Gorgias, Tidio, Shopify Flow, Zapier, Klaviyo, Make, Shopify Magic, Sidekick, OpenAI).
4. **Preparing Your Store for AI-Driven Shopping (`.preparing-store`)**:
   - Light background, section heading + description.
   - 4 horizontal/vertical column cards with border dividers: AEO, GEO, Agentic Commerce Readiness, Trust Signal Strengthening.
   - Bottom CTA: "Ready to build a Shopify store that performs today and tomorrow?" + "Talk to an Expert" button.
5. **Portfolio of Shopify Migration (`.our-work-sec`)**:
   - Section heading "Portfolio of Shopify Migration".
   - 6 project cards: Capri Bikes, Atolea Jewelry, Black Opal Beauty, Nested Naturals, Mygeeni, Raen.
   - Project preview image, hover state with "View Project" link + diagonal arrow, platform badge ("shopify"), category subtitle and project name.
   - Bottom CTA link "View our work" pointing to `/our-work`.
6. **Don't Just Take Our Word For It (`.happy-client-sec`)**:
   - Section heading + subtitle.
   - Testimonial video slider showcasing real client video stories with YouTube video modal popup, client avatar/poster, quote badge, client name and company.
7. **Frequently Asked Questions (`.faq-sec`)**:
   - Section heading "Frequently Asked Questions".
   - 5 accordion items with expandable answers.
8. **Bottom CTA Banner (`.request-banner`)**:
   - Gradient banner (`linear-gradient(97.18deg, #15c064 28.5%, #00d1ff 91.82%)`).
   - Title "Want us to help you with your online store?" + light CTA button "REQUEST A QUOTE".

## Responsive Breakpoints & Visual Parity
- **Desktop (>=1200px)**:
  - Hero: Centered layout with `pt-[250px] pb-16 border-b-[1.5px] border-[#dfdfdf]`, H1 50px/66px, subtitle 16px/30.4px max-w-[950px], red CTA button, review animation pill.
  - Migration Services: 3-column grid (`w-1/3 px-2 mb-5`), card padding `34px 34px 30px 34px`, hover border gradient `before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff]`, hover lift `translateY(-10px)`.
  - Smarter Shopify Store: 2-column dark grid (`bg-[#171E16]`), card background `rgb(243 243 243 / 10%)`, rounded 15px, padding 30px, pill tags.
  - Preparing Store: 4-column card grid (`w-1/4 px-[15px] mb-[30px]`), card background `#F7F4E9`, border `1px solid #efefef`, padding `40px 15px`, center bottom CTA with red button.
  - Portfolio: 3-column grid (`grid-cols-3 gap-x-[15px] gap-y-[60px]`), project aspect ratio `pb-[115%]`, hover dark overlay + rising "View Project" link + platform badge in top right.
  - Happy Clients: 2-column testimonial card carousel with YouTube video dialog.
  - FAQs: 5 accordion items with `#efefef` border and 10px rounded corners.
  - Bottom Banner: 119px gradient banner with white CTA button.
- **Tablet (768px - 1199px)**:
  - Hero: `pt-[200px]` (down to `pt-[140px] pb-[50px]` on <=991px), H1 46px/36px.
  - Migration Services: 2-column grid (`w-1/2 mb-4`), card padding 20px.
  - Smarter Shopify Store: 2-column grid, margin-top 40px, padding 50px 0.
  - Preparing Store: 2-column grid (`w-1/2`), padding-top 50px.
  - Portfolio: 2-column grid (`grid-cols-2 gap-y-[30px]`).
  - Happy Clients: 2-column carousel.
- **Mobile (<768px)**:
  - Hero: `pt-[140px] pb-[50px]`, H1 30px/40px.
  - Migration Services: 1-column grid (`w-full mb-4`).
  - Smarter Shopify Store: 1-column grid (`w-full`), card padding `30px 15px`.
  - Preparing Store: 1-column grid (`w-full`).
  - Portfolio: 1-column grid (`grid-cols-1`).
  - Happy Clients: 1-slide carousel.

## Assets Used
- 12 platform migration SVGs in `public/assets/shopify-migration/services/`
- AI store & discovery icons in `public/assets/white-label-shopify/ai/`
- Portfolio images in `public/assets/our-work/projects/` and `public/assets/fashion/portfolio/`
- Testimonial video posters in `public/assets/testimonials/`
- Review badges in `public/assets/reviews/`
