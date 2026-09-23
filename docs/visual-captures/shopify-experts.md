# Shopify Experts Page

Live URL: `https://www.dynamicdreamz.com/shopify-experts/`
Local route: `/shopify-experts`
Date checked: 2026-09-23
Browser/source: Google Chrome headless screenshots (stored for evidence),
rendered live page + View Page Source, live page-specific CSS
(`hero_new_section.css`, `trusted_by_leading_brands_section.css`, `our_development_process.css`,
`why_choose_dynamic_dreamz_for_shopify_migration.css`, `shopify_development_services.css`,
`shopify_theme_customization_services.css`, `seo_safe_shopify_migration_section.css`,
`projects_section.css`, `white_label_flexible_wordpress_development_plans_section.css`,
`client_review_section.css`, `faqs_section.css`), and local component/asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/shopify-experts/live-desktop-1440x900.png` | `docs/visual-captures/source/shopify-experts/local-desktop-1440x900.png` | captured & verified |
| 768x1024 | `docs/visual-captures/source/shopify-experts/live-tablet-768x1024.png` | `docs/visual-captures/source/shopify-experts/local-tablet-768x1024.png` | captured & verified |
| 390x844 | `docs/visual-captures/source/shopify-experts/live-mobile-390x844.png` | `docs/visual-captures/source/shopify-experts/local-mobile-390x844.png` | captured & verified |
| 375x812 | - | `docs/visual-captures/source/shopify-experts/local-mobile-375x812.png` | captured & verified |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, Open Graph, Yoast JSON-LD, H1 `Hire Shopify Experts`, eyebrow spans (`Established in 2006`, `Shopify Platinum Partner`), 2 CTA buttons (`Hire Shopify Experts` -> `/request-quote`, `View Pricing` -> `#our_white_label_pricing`), 4 partner badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus), right-col video (`/assets/home/why-dynamic-dreamz.mp4`), 10 client logos strip on `#FBEED5` (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sim Direct, Kvaser, Nékter, Circuit City), 4-step hiring process cards (`Hassle-Free Hiring Process to Get Started`), dark section `Why Hire Shopify Experts from Dynamic Dreamz?` with 3 feature cards, right card with Platinum Partner logo linking to Shopify directory, `20+ Years of Ecommerce Delivery` heading, 4 stats (`20+`, `150+`, `5k+`, `2.5k+`), and `About Dynamic Dreamz` link to `/about-us`, 6 services under `Complete Shopify Expertise Under One Roof` (`last-col-100`) with eyebrow `Complete Shopify Capability`, 6 numbered cards on pista green (`#eff4ef`) under `Why Brands Choose Our Shopify Experts` with savings note, AI tools container (`#EFF4EF`) under `Shopify experts empowered by modern AI development tools.` with 4 tools and human oversight code callout, 8 portfolio projects under `Explore Our Shopify Work` with 2 CTA buttons, 3 engagement pricing cards under `Choose the Right Shopify Expert Engagement`, 11 video client testimonials with carousel under `Don't Just Take Our Word For It`, 8 accordion FAQs in split layout under `Questions Buyers Ask Before Hiring Shopify Experts`, no bottom CTA banner (matching live site structure) |
| Live CSS (`flexible-css/*`) | Hero layout (left 51%, right 43%), client rail (#FBEED5 background), 4-step process borders, dark background (#171e16) with white cards for why-choose section, services grid (row-span-2, col-span-2, last col-span-2 with mobile app CTA), pista green (#eff4ef) for theme customization services grid, light green (#EFF4EF) for AI tools card container, 4-col portfolio grid with primary + outline CTA buttons, white pricing cards on light green background, testimonial cards with YouTube modal playback, split FAQ layout with sticky left column and circular cross expand/collapse icons |
| Local Assets | Verified zero duplicates across public/assets/; all 54 assets (video, partner logos, 10 client logos, 8 portfolio images, 11 testimonial cards) reuse canonical existing project assets |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| 1. Hero | `.hero-new-section`: H1, eyebrow spans, lead paragraph, 2 CTA buttons, 4 partner badges, right video | `ServiceHeroVideoSection` |
| 2. Client Logos | `.our-client-sec dev` bg #FBEED5: `Trusted by<br>Leading Brands` H2 left (31%), 10-brand logo slider right (69%) | `IndustryBrandsSection` using `ClientLogoSlider` with exact 10 brand items |
| 3. Hiring Process | `.our-development-process last-col-100`: H2, subtitle, 4 `.item` step boxes with border styling | `OurDevelopmentProcessSection` |
| 4. Why Choose DD | `.why_choose_dynamic_dreamz_for_shopify_migration` bg #171e16: Split heading, 3 white feature boxes left with SVG icons, right white card with Platinum Partner badge (linking to directory), `20+ Years of Ecommerce Delivery` heading, 4 stats, `About Dynamic Dreamz` link to `/about-us` | `WhyChooseShopifyMigrationSection` |
| 5. Services | `.shopify-development-services.pt-80.last-col-100`: Split heading, eyebrow `Complete Shopify Capability`, 6 service cards (first row-span-2, fourth col-span-2, last col-span-2 with mobile app CTA link) | `ShopifyStageServicesSection` with `lastColFull` |
| 6. Why Brands Choose | `.theme-customization-services.green` bg #eff4ef: Split heading, 6 numbered card boxes (`01`-`06`), savings disclaimer note | `ThemeCustomizationServicesSection` |
| 7. AI Delivery | `.seo_safe_shopify_migration_section`: Light green `#EFF4EF` container, left text, right 4 AI tool boxes (`Claude`, `Cursor`, `Human Review`, `QA`) + human oversight quote callout | `AiEmpoweredDeliverySection` |
| 8. Selected Work | `.our-work-sec.pt-0`: Split heading, 8 Shopify projects (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier, Bombay Shirt Company, Holy Plantz), 2 bottom CTA buttons (`Explore More Shopify Work` & `View Pricing`) | `PortfolioShowcaseSection` with `ourWorkRefresh` variant |
| 9. Pricing | `.white_label_wp_develop_plan_section.shopify-plus-engagement.mb-0`: Split heading, 3 engagement cards (Project-Based, Flexible Hourly Support, Dedicated Developer / Team) | `PricingTableSection` |
| 10. Testimonials | `.happy-client-sec.pt-80`: Split heading, 11 video testimonial cards with carousel controls | `HappyClientSection` |
| 11. FAQ | `.faq-sec`: Split heading left (sticky), 8 accordion FAQs right with circle-cross icons | `SplitFaqSection` |
| 12. CTA Banner | Omitted on live site | Omitted locally to match live |
