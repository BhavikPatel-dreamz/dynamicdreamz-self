# Live Site vs. Migrated Next.js Site: Comprehensive Difference & Migration Audit

> **Audit Date**: September 21, 2026  
> **Live Site Reference**: https://www.dynamicdreamz.com/ (Inspected live via XML sitemaps, robots.txt, HTML/CSS sources, and computed layouts)  
> **Migrated Next.js Workspace**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self`  
> **Target Strapi CMS Workspace**: `/home/ubuntu/Vatsal/DD/cms`  
> **Purpose**: This document provides an exhaustive, page-by-page and section-by-section breakdown of all actionable discrepancies, newly added live pages, missing routes, recent design updates, and content divergence between the current live site and the migrated Next.js codebase. Use this as the definitive blueprint for migrating all new live changes into the Next.js and Strapi project.

---

## 1. Executive Summary

A comprehensive live crawl of `https://www.dynamicdreamz.com/` on September 21, 2026 revealed that **the live site was actively updated in September 2026** (including blog articles published literally today, September 21, 2026).

### Migration Differences & Targets:

| Audit Category | Live Production Site | Migrated Next.js Site | Discrepancy Status | Migration Action |
|---|---|---|---|---|
| **Total Blog Articles** | **104 articles** (`post-sitemap.xml`) | **84 articles** | **20 blog posts missing** (published Aug 11 – Sept 21, 2026). | **MIGRATE**: Scrape & import 20 missing articles into Next.js & Strapi. |
| **Theme Customization Pages** | 33 pages (includes `/horizon-theme-customization`) | 32 pages | **1 theme page missing** (`/horizon-theme-customization`). | **MIGRATE**: Create `/horizon-theme-customization`. |
| **Mobile App Sub-Pages** | Includes `/appmaker-shopify-mobile-app-development` | Not present | **1 landing page missing**. | **MIGRATE**: Create partnership landing page. |
| **Shopify Plus Conversion** | Includes `/thank-you-for-shopify-plus-enquiry` | Not present | **1 confirmation page missing**. | **MIGRATE**: Create high-intent confirmation page. |
| **Recent Page Redesigns** | Key pages updated Sept 16–21, 2026 | Based on August 2026 capture | Section layouts & proof points updated on live. | **UPDATE**: Align sections on Homepage, About Us, Web Design, and Mobile. |

---

## 2. Missing Pages & Routes to Migrate

The following **3 standalone routes** are active, high-value, and present in the live sitemap (`page-sitemap.xml`) but do NOT currently exist in `src/app/`:

### 1. `/horizon-theme-customization/`
- **Live URL**: `https://www.dynamicdreamz.com/horizon-theme-customization/`
- **Last Modified on Live**: 2026-09-10
- **Page Intent**: Dedicated service page for customizing Shopify's newest "Horizon" theme.
- **Action Required**: Create `src/app/horizon-theme-customization/page.tsx` and content module `src/content/horizon-theme-customization.ts`.

### 2. `/appmaker-shopify-mobile-app-development/`
- **Live URL**: `https://www.dynamicdreamz.com/appmaker-shopify-mobile-app-development/`
- **Last Modified on Live**: 2026-09-03
- **Page Intent**: Strategic partnership landing page for building Shopify native mobile apps via Appmaker.
- **Action Required**: Create `src/app/appmaker-shopify-mobile-app-development/page.tsx` and content module `src/content/appmaker-shopify-mobile-app-development.ts`.

### 3. `/thank-you-for-shopify-plus-enquiry/`
- **Live URL**: `https://www.dynamicdreamz.com/thank-you-for-shopify-plus-enquiry/`
- **Page Intent**: Dedicated high-intent conversion confirmation page for Shopify Plus leads (with tracking event triggers).
- **Action Required**: Create `src/app/thank-you-for-shopify-plus-enquiry/page.tsx`.

---

## 3. Blog Content Divergence (20 Missing Articles)

The live site contains **104 articles** in `https://www.dynamicdreamz.com/post-sitemap.xml`, whereas the Next.js project has **84 JSON files** in `src/content/blog-posts/posts/`.

### 20 Missing Blog Posts to Scrape & Migrate:

| # | Article Slug | Live Publish / Lastmod Date | Focus Topic |
|---|---|---|---|
| 1 | `shopify-pim-integration` | **2026-09-21** (Today!) | PIM (Product Information Management) integration with Shopify |
| 2 | `shopify-api-integration` | 2026-09-18 | Custom Shopify REST & GraphQL API integrations |
| 3 | `how-to-build-a-custom-shopify-app` | 2026-09-18 | Technical guide on building custom Shopify CLI apps |
| 4 | `shopify-custom-app-vs-app-store-app` | 2026-09-18 | Business decision guide: Public App Store vs Custom Private App |
| 5 | `shopify-2-0-theme` | 2026-09-16 | Online Store 2.0 theme architecture & JSON templates |
| 6 | `shopify-metafields-vs-metaobjects` | 2026-09-15 | Data modeling: Metafields vs Metaobjects architecture |
| 7 | `shopify-limits` | 2026-09-14 | Technical limits: API rate limits, variant limits, and Shopify Plus solutions |
| 8 | `white-label-wordpress-outsourcing` | 2026-08-31 | Agency guide to white-label WordPress outsourcing |
| 9 | `shopify-headless-vs-liquid` | 2026-08-28 | Headless Hydrogen vs Liquid Storefront comparison |
| 10 | `shopify-b2b-features` | 2026-08-25 | Native Shopify Plus B2B wholesale features & catalogs |
| 11 | `shopify-checkout-extensibility-guide` | 2026-08-22 | Migrating checkout.liquid to Checkout UI Extensions |
| 12 | `shopify-flow-automation-ecommerce` | 2026-08-20 | Backend automation workflows using Shopify Flow |
| 13 | `shopify-pos-omnichannel-setup` | 2026-08-18 | Retail POS and unified omnichannel inventory |
| 14 | `shopify-functions-discount-logic` | 2026-08-16 | Custom backend discount and cart validation via Rust/Wasm Functions |
| 15 | `ecommerce-site-speed-optimization-2026` | 2026-08-15 | Core Web Vitals and performance tuning guide |
| 16 | `shopify-markets-multi-currency-setup` | 2026-08-14 | Global ecommerce selling with Shopify Markets |
| 17 | `shopify-app-bridge-embedded-apps` | 2026-08-13 | App Bridge v3 for embedded admin apps |
| 18 | `shopify-customer-accounts-new-api` | 2026-08-12 | New Customer Accounts API and custom authentication |
| 19 | `shopify-search-and-discovery-app-guide` | 2026-08-11 | Native search, filter, and product boost configurations |
| 20 | `shopify-analytics-and-pixel-tracking` | 2026-08-11 | Web pixels API and privacy-first tracking |

### Migration Steps for Blogs:
1. Run a node script `scripts/scrape-live-blogs.mjs` to fetch and parse HTML content, headings, featured images, and metadata for these 20 articles from `https://www.dynamicdreamz.com/blog/<slug>/`.
2. Save structured JSON files into `src/content/blog-posts/posts/<slug>.json`.
3. Update `src/content/blog-posts/index.json` with the 20 new entries.
4. Run `npm run check:blog-posts` to ensure 104 valid JSONs exist.
5. Re-run `npm run migrate:blogs` to sync all 20 into the Strapi CMS database (`api::article.article`).

---

## 4. Sitewide Header, Navigation & Chrome Differences

The live site header has been updated with new navigation items and a promotional strip:

### Mega Menu Additions
1. **Under "Shopify Solutions"**:
   - **Shopify Certified Developers**: Links to `/shopify-certified-developers/` with description *"Certified Shopify expertise for complex builds."*
   - **Buy Shopify Development Hours**: Links to `/buy-shopify-development-hours/` with description *"Flexible hours for fixes and ongoing work."*
   - **Shopify Theme Customization**: Links to `/shopify-theme-customization/`.
   - **Promotional Bottom Strip**: Added a banner row across the bottom of the mega menu panel:
     - Text: *"Shopify Platinum Partner · 20+ Years · 150+ Experts · 5,000+ Projects"*
     - CTA Button: *"DISCUSS A PROJECT"* -> `/contact-us/`
2. **Under "Agency Partnerships"**:
   - **White Label Shopify Development**: `/white-label-shopify-development-services/`
   - **White Label WordPress Development**: `/white-label-wordpress-development-services/`
   - **White Label Website Design Services**: `/white-label-website-design-services/`

---

## 5. Page-by-Page Visual & Section Updates

### 1. Homepage (`/`)
- **Partnering Brands**: Ensure all 14 brand logos render in monochrome SVG (Royce Chocolate, Jacadi Paris, Rare Rabbit, Bella Vita, Sri Sri Tattva, Renee, Nelter, Tropicfeel, Ranavat, Perfect Locks, Bombay Shirt Company, Kalki, Kvaser, Tego).
- **Why Dynamic Dreamz**: Verify 4 proof counters (1,100+ Happy Clients, 150+ Experts, 5,000+ Projects, $1B+ Client Revenue) and showcase video.
- **Testimonials Carousel**: Ensure desktop carousel arrows are right-aligned in normal-flow below the section description.

### 2. Shopify Plus Agency Page (`/shopify-plus-agency`)
- **Hero Review Rail**: Displays Clutch 4.9 rating and Shopify Partner badges with quote snippets.
- **Pillars & Proof**: 4 key pillars: Enterprise Architecture, B2B Capabilities, Seamless Migrations, Dedicated Teams.

### 3. About Us Page (`/about-us`) (Updated Sept 18, 2026)
- **Executive Leadership**: Sync updated roster of leadership and technical leads from live page.
- **Company Timeline**: Ensure 2025–2026 milestones include Platinum Partner status.

### 4. Web Design Page (`/web-design`) (Updated Sept 21, 2026)
- **Hero & Tool Stack**: Prominently highlights Figma, Design Systems, and Conversion-First UI/UX.
- **Design Process Steps**: 5-phase process: Discovery → Wireframing → High-Fidelity UI → Prototyping → Handover.

### 5. Mobile App Development Pages (`/mobile-application-development`, `/ios-app-development`, `/android-app-development`)
- **Shopify Mobile Integration Focus**: Emphasis on Shopify-connected native mobile apps (push notifications, customer account sync, one-click checkout, Appmaker badge).

---

## 6. Migration Action Checklist for the Agent

Execute remaining migration tasks in this exact sequence:

### Phase A: Scrape & Ingest 20 Missing Blog Posts
- [x] Write scraping script `scripts/scrape-live-blogs.mjs` for the 20 posts listed in Section 3.
- [x] Save JSON files to `src/content/blog-posts/posts/<slug>.json` and update `src/content/blog-posts/index.json`.
- [x] Run `npm run check:blog-posts` (must validate all 104 articles).
- [x] Run `npm run migrate:blogs` to push all 104 posts to Strapi CMS.

### Phase B: Create 3 Missing Standalone Routes
- [x] Create `/horizon-theme-customization` page and content.
- [x] Create `/appmaker-shopify-mobile-app-development` page and content.
- [x] Create `/thank-you-for-shopify-plus-enquiry` confirmation page.

### Phase C: Header Mega Menu & Section Polish
- [x] Add the bottom promotional strip to the mega menu in `src/data/navigation.ts` and `Header.tsx`.
- [x] Sync updated 2026 leadership team on `/about-us`.
- [x] Update mobile app service cards to feature Shopify-connected apps and Appmaker badge.

### Phase D: Full Quality Verification
- [x] Run `npm run check:urls`
- [x] Run `npm run check:component-content`
- [x] Run `npm run check:blog-posts`
- [x] Run `npm run check:case-studies`
- [x] Run `npm run check:asset-duplicates`
- [x] Run `npx tsc --noEmit`
- [x] Run `npm run lint`
- [x] Run `npm run build`
