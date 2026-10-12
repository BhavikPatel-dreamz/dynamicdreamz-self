# Payload CMS Content Seeding Plan (Approach 3)

## 1. Executive Summary & Core Objective

The objective of this plan is to transition 100% of website content management to Payload CMS under **Approach 3 (High-Fidelity Modular Blocks)** across all routes, **without depending on external CDN storage or file upload adapters**.

### Asset Handling Policy (No CDN / Storage Requirement)
Because object storage (e.g., AWS S3, Cloudflare R2, Cloudinary) has not yet been configured:
- **No binary files are uploaded** to the Payload `media` collection during this process.
- All image, video, and icon references must continue using their canonical static paths (`/assets/...`) stored as string properties or string-based media references.
- Static assets remain safely served from the Next.js `public/assets/` directory with zero database binary bloat.

---

## 2. Approach 3 Architectural Principles

1. **Modular Page Assembly**:
   - Every marketing route corresponds to a document in the `pages` collection identified by its unique `slug`.
   - The page layout is defined by the `sections` blocks array, enabling non-technical teams to add, edit, reorder, and remove sections freely in Payload Admin.
2. **Component Discovery Over Duplication**:
   - Every block slug in Payload (`blockType`) maps 1:1 to an established, production-tested React component through `BlockRenderer` (`src/components/blocks/block-renderer.tsx`).
   - Styling, animations (`data-aos`), responsive CSS, and interactive client components are 100% preserved.
3. **Fail-Safe Fallbacks**:
   - Section components support optional dynamic CMS props with strict fallbacks to local data modules (`src/content/**`). If a field is omitted or the database is unreachable, the page renders identically to the migrated baseline.
4. **Strict Content Boundary**:
   - All visible headings, paragraphs, bullet points, CTA labels, and metadata must come from CMS fields or typed content files. No hardcoded business copy in components or page wrappers (`npm run check:component-content` must always pass).

---

## 3. Agent Discovery Methodology (How Any Agent Maps a Page)

When implementing or seeding a page, the agent must **not** guess data structures or write rigid ad-hoc scripts. Instead, the agent must execute this discovery cycle:

```
Step 1: Inspect Target Route
  └── Read src/app/(frontend)/<route>/page.tsx to find rendered sections
       │
Step 2: Inspect Section Components
  └── Check src/components/sections/** to view DOM hierarchy & prop types
       │
Step 3: Source Raw Content
  └── Read corresponding src/content/<name>.ts and src/data/<name>.ts
       │
Step 4: Resolve Block Mapping
  └── Match each section to an existing block in src/blocks/ and BlockRenderer
       │
Step 5: Generate & Verify Payload
  └── Seed document into Neon PostgreSQL pages collection with slug and sections array
```

### Discovery Rulebook for Agents
1. **Never create redundant blocks**: Before defining a new block, inspect `src/blocks/` and `src/components/blocks/block-renderer.tsx`. If an existing block (`features-grid`, `hero`, `faq-accordion`, etc.) fulfills the requirement with optional fields, reuse it.
2. **Respect Postgres Table Name Limits**: Drizzle/Postgres tables have a 63-character limit. Any array fields inside custom blocks must define concise `dbName` values (e.g. `spa_paras`, `cs_items`).
3. **Preserve Exact URL Equity**: All internal links in CTA props must be absolute root-relative paths without trailing slashes (e.g., `/shopify-plus-agency`, `/contact-us`).

---

## 4. Phased Content Seeding Roadmap

### Phase 1: Global Site Settings & Taxonomies
*Target: Global singleton documents and relational taxonomies.*
- **Globals**:
  - `site-settings`: Phone, email, WhatsApp, address, office coordinates, social URLs (`src/data/site.ts`).
  - `navigation`: Header navigation mega menu groups, sub-items, badges, promo cards, footer columns, copyright (`src/data/navigation.ts`).
- **Collections**:
  - `categories`: Standard ecommerce & tech taxonomy (`shopify`, `wordpress`, `ecommerce`, `big-commerce`, `faqs`).
  - `authors`: Team members, bio snippets, roles (`src/data/team.ts` / blog authors).

---

### Phase 2: Dedicated Content Collections (Case Studies & Blog Posts)
*Target: Independent dynamic collections rendered via dedicated dynamic routes.*
- **`case-studies` Collection**:
  - 58 detailed ecommerce case studies (`src/content/case-studies-items.json`, `src/content/case-study-details.ts`).
  - Fields: `title`, `slug`, `client`, `service`, `industry`, `metrics`, `challenge`, `solution`, `results`, `technologies`, `canonicalUrl`.
- **`posts` Collection**:
  - 119 in-depth thought leadership blog posts (`src/content/blogs.ts`).
  - Fields: `title`, `slug`, `publishedDate`, `readingTime`, `excerpt`, `content` (lexical or parsed HTML blocks), `category`, `author`, `seo`.
- **`testimonials` Collection**:
  - Client video quotes, transcripts, author titles, company names, video IDs (`src/content/home-client.ts`, `src/content/request-quote.ts`).

---

### Phase 3: Core Agency & Marketing Pages
*Target: Primary brand positioning and inquiry conversion pages.*
- **Home Page (`/`)**:
  - Blocks: `hero` (home variant), `brand-partners`, `shopify-plus-agency-overview`, `white-label-partner-banner`, `commerce-solutions`, `selected-work-marquee`, `testimonials-carousel`, `integrations-partners`, `latest-insights`, `faq-accordion`.
- **About Us (`/about-us`)**:
  - Blocks: `hero` (split), `proof-counters`, `image-with-text` (Story), `image-with-text` (Founders), `process-timeline` (Milestones), `brand-partners`, `happy-clients`, `cta-banner`.
- **Our Work / Portfolio (`/our-work`)**:
  - Blocks: `hero` (centered), `case-studies`, `happy-clients`, `cta-banner`.
- **Contact Us (`/contact-us`)**:
  - Blocks: `hero` (centered), `image-with-text` (Office contact details), `proof-counters`, `faq-accordion`.
- **Inquiry & Conversion Pages**:
  - `/book-a-discovery-call`: `hero`, `proof-counters`, `happy-clients`.
  - `/request-quote`: `hero`, `testimonials-carousel`.
  - `/career` & `/career-apply-now`: `hero`, `features-grid`, `image-with-text`, `rich-text-content`.
- **Legal & Utility**:
  - `/terms-of-service`, `/privacy-policy`, `/site-map`: `hero` (centered), `rich-text-content` (narrow container).

---

### Phase 4: Flagship Shopify Solution Pages
*Target: Primary commercial revenue drivers and Shopify expertise pages.*
- **Pages**:
  - `/shopify-plus-agency`
  - `/shopify-development-agency`
  - `/shopify-certified-developers`
  - `/shopify-migration`
  - `/shopify-plus-migration-agency`
  - `/shopify-theme-customization`
  - `/shopify-cro-agency`
  - `/shopify-mobile-app-development`
  - `/shopify-experts`
  - `/hire-shopify-developers`
  - `/shopify-maintenance-services`
  - `/upgrade-to-shopify-plus`
  - `/buy-shopify-development-hours`
  - `/shopify-apps`
  - `/migrating-a-theme-to-online-store-2-0`
  - `/appmaker-shopify-mobile-app-development`
  - `/risks-of-shopify-outsourcing`
- **Standard Block Stack**:
  - `hero` (split) ➔ `brand-partners` ➔ `proof-counters` ➔ `features-grid` ➔ `process-timeline` ➔ `technologies-grid` ➔ `pricing-models` ➔ `case-studies` ➔ `happy-clients` ➔ `faq-accordion` ➔ `cta-banner`.

---

### Phase 5: Platform-to-Shopify Migration Sub-Pages
*Target: SEO-driven migration search queries.*
- **Pages**:
  - `/magento-to-shopify-migration`
  - `/magento-to-shopify-plus-migration`
  - `/woocommerce-to-shopify-migration`
  - `/bigcommerce-to-shopify-migration`
  - `/salesforce-to-shopify-migration`
  - `/squarespace-to-shopify-migration`
  - `/wix-to-shopify-migration`
  - `/prestashop-to-shopify-migration`
  - `/ecwid-to-shopify-migration`
  - `/etsy-to-shopify-migration`
  - `/square-to-shopify-migration`
- **Standard Block Stack**:
  - `hero` (split with legacy platform logos) ➔ `proof-counters` (migration stats) ➔ `features-grid` (zero data loss deliverables) ➔ `process-timeline` (audit, staging, delta sync, DNS cutover) ➔ `case-studies` (relevant migrations) ➔ `faq-accordion` (passwords, SEO preservation) ➔ `cta-banner`.

---

### Phase 6: Technology & White-Label Services Pages
*Target: Non-Shopify tech stacks and agency partnership offerings.*
- **White-Label Partner Pages**:
  - `/white-label-shopify-development-services`
  - `/white-label-wordpress-development-services`
  - `/white-label-website-design-services`
  - *Key Blocks*: `hero`, `proof-counters`, `features-grid` (NDA, dedicated teams, white-label comms), `process-timeline`, `pricing-models`, `happy-clients`, `faq-accordion`, `cta-banner`.
- **Engineering & Specialty Stacks**:
  - `/wordpress-development-company` & `/wordpress-development`
  - `/woocommerce-development`
  - `/magento-development`
  - `/bigcommerce-development`
  - `/webflow-development`
  - `/full-stack-development`
  - `/php-development`
  - `/ai-services`
  - `/mobile-application-development`, `/ios-app-development`, `/android-app-development`, `/cross-platform-app-development`
  - `/seo-services`
  - `/hire-wordpress-developers`

---

### Phase 7: Industry Vertical Pages
*Target: Niche ecommerce sector solutions.*
- **Pages**:
  - `/fashion`
  - `/beauty-cosmetics`
  - `/food-beverages` & `/food-beverage-shopify-plus-agency`
  - `/health-nutrition`
  - `/jewellery-accessories`
  - `/home-living`
  - `/sports-outdoors`
  - `/pet-industry`
  - `/dental-clinic-website-development-company`
- **Standard Block Stack**:
  - `hero` (industry-specific challenges) ➔ `brand-partners` (vertical brand proof) ➔ `features-grid` (bundles, subscriptions, swatches, wholesale) ➔ `case-studies` (filtered to vertical) ➔ `happy-clients` ➔ `faq-accordion` ➔ `cta-banner`.

---

### Phase 8: Theme Customization Pages
*Target: 50+ Shopify and WordPress theme customization landing pages.*
- **Shopify Themes**:
  - `/dawn-theme-customization`, `/impulse-theme-customization`, `/prestige-theme-customization`, `/warehouse-theme-customization`, `/expanse-theme-customization`, `/pipeline-theme-customization`, `/craft-theme-customization`, `/sense-theme-customization`, `/spotlight-theme-customization`, `/studio-theme-customization`, `/colorblock-theme-customization`, `/refresh-theme-customization`, `/origin-theme-customization`, `/broadcast-theme-customization`, `/be-yours-theme-customization`, `/stiletto-theme-customization`, `/vision-theme-customization`, `/vessel-theme-customization`, `/savor-theme-customization`, `/trade-theme-customization`.
- **WordPress Themes**:
  - `/astra-theme-customization`, `/generatepress-theme-customization`, `/kadence-theme-customization`, `/oceanwp-theme-customization`, `/neve-theme-customization`, `/blocksy-theme-customization`, `/hello-elementor-theme-customization`, `/popularfx-theme-customization`, `/go-theme-customization`, `/kubio-theme-customization`, `/inspiro-theme-customization`, `/woodstock-theme-customization`, etc.
- **Standard Block Stack**:
  - `hero` (theme customization intro) ➔ `features-grid` (custom Liquid/PHP sections, speed tuning, mobile UX) ➔ `process-timeline` (audit, sandbox, deploy) ➔ `case-studies` (stores built with this theme) ➔ `faq-accordion` ➔ `cta-banner`.

---

### Phase 9: Geo & Location Landing Pages
*Target: City and regional localized landing pages.*
- **India**:
  - `/shopify-development-in-mumbai`, `/shopify-development-in-delhi`, `/shopify-development-in-bangalore`, `/shopify-development-in-hyderabad`, `/shopify-development-in-pune`, `/shopify-development-company-in-chennai`
  - `/wordpress-development-in-mumbai`, `/wordpress-development-in-delhi`, `/wordpress-development-in-bangalore`, `/wordpress-development-in-pune`, `/wordpress-development-in-noida`, `/wordpress-development-in-ahmedabad`
- **Global**:
  - `/shopify-development-in-new-york`, `/shopify-development-in-los-angeles`, `/shopify-development-in-miami`, `/shopify-development-in-texas`, `/shopify-development-in-barcelona-spain`
- **Standard Block Stack**:
  - `hero` (localized city headline) ➔ `proof-counters` ➔ `brand-partners` ➔ `features-grid` ➔ `case-studies` ➔ `happy-clients` ➔ `faq-accordion` (timezone, currency, collaboration model) ➔ `cta-banner`.

---

## 5. Verification & Quality Gates for Agents

After seeding any page or batch of pages, the executing agent must verify using this checklist:

1. **Database Persistence Check**:
   - Query Payload API / Neon DB for the seeded `slug` and verify `sections.length > 0`.
2. **Component Content Boundary Check**:
   ```bash
   npm run check:component-content
   ```
   Must pass with 0 hardcoded business copy violations.
3. **URL Policy Check**:
   ```bash
   npm run check:urls
   ```
   Must pass with 0 trailing slash violations.
4. **TypeScript & Static Type Check**:
   ```bash
   npx tsc --noEmit
   ```
   Must complete with 0 errors across collections, blocks, and page props.
5. **Zero Asset Duplication Check**:
   ```bash
   npm run check:asset-duplicates
   ```
   Must verify 0 duplicate images or media files.
6. **Full Production Build Verification**:
   ```bash
   npm run build
   ```
   Must compile all routes cleanly with 100% static/dynamic parity.
