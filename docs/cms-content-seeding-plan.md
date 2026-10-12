# Payload CMS Content Seeding Plan (Approach 3: 100% Modular Block Architecture)

## 1. Executive Summary & Core Objective

The objective of this plan is to transition 100% of website content management to Payload CMS under **Approach 3 (High-Fidelity Modular Blocks)** across all routes and collections, **strictly eliminating direct/raw HTML in CMS content** and **operating without external CDN storage or file upload dependencies**.

### Strict Zero Direct HTML Policy
- **No direct HTML strings or textareas**: Content fields across all collections (`pages`, `posts`, `case-studies`, `testimonials`, etc.) must **never** store raw HTML markup (such as `<p>`, `<div class="...">`, `<span>`, `<strong>`, `<a>`, `<img src="...">`, `<ul>`, `<li>`, etc.).
- **No `dangerouslySetInnerHTML` for CMS body content**: Content rendering must flow through typed, semantic React components.
- **Universal Modular Block Structure**: Just as the home page is assembled from modular, strongly-typed Payload CMS blocks (`HeroBlock`, `BrandPartnersBlock`, `ProofCountersBlock`, etc.), **all blog post content, case study sections, and marketing pages must be decomposed into explicit, typed blocks**.
- **Editor-Friendly & Type-Safe**: Content managers add, edit, reorder, and remove discrete blocks in Payload Admin without needing to write or touch raw HTML markup.

### Asset Handling Policy (No CDN / Storage Requirement)
Because object storage (e.g., AWS S3, Cloudflare R2, Cloudinary) has not yet been configured:
- **No binary files are uploaded** to the Payload `media` collection during this process.
- All image, video, and icon references continue using their canonical static paths (`/assets/...`) stored as structured string properties or string-based media references (`src`, `alt`, `width`, `height`).
- Static assets remain safely served from the Next.js `public/assets/` directory with zero database binary bloat.

### Seeding Policy: One-Time Process Only (Zero Temporary Scripts Rule)
- **Seeding is strictly a one-time migration process**: Once pages, blocks, collections, or globals are populated in Payload CMS / Neon PostgreSQL, the data lives permanently in the database and is managed via Payload Admin (`/admin`).
- **No temporary seeding scripts in `scripts/`**: Agents must **never** create or commit temporary seeding scripts (such as `scripts/seed-home.mjs`, `scripts/seed-phase-*.mjs`, `scripts/seed-<page>.mjs`) into `scripts/`.
- **No seed commands in `package.json`**: Do not add `"seed:phase-*"`, `"seed:<page>"`, or other one-off seed commands to `package.json`.
- **Ephemeral execution via `scratch/` buffer**: If an agent must execute a one-time script to populate initial page data into the CMS, the script must be placed strictly in `scratch/` (e.g. `scratch/seed-<slug>.mjs`), run once, verified against the database, and deleted immediately before completing the task. No seeding script is useful in the future once the database is seeded.

---

## 2. The Home Page Benchmark: Canonical Block Architecture

The home page (`src/collections/Pages.ts`, slug: `"home"`) represents the architectural blueprint for the entire project:

```
Payload CMS Document ("home")
  └── sections: [
        { blockType: "hero", variant: "home", title: "...", ... },
        { blockType: "brand-partners", logos: [...] },
        { blockType: "shopify-plus-agency-overview", counters: [...], ... },
        { blockType: "white-label-partner-banner", bullets: [...], ... },
        { blockType: "commerce-solutions", solutions: [...], ... },
        { blockType: "selected-work-marquee", ... },
        { blockType: "testimonials-carousel", ... },
        { blockType: "integrations-partners", ... },
        { blockType: "latest-insights", ... },
        { blockType: "faq-accordion", faqs: [...], ... }
      ]
        │
        ▼
BlockRenderer (src/components/blocks/block-renderer.tsx)
  └── Maps each blockType 1:1 to production-ready React Server Components:
        ├── HomeHeroSection
        ├── BrandPartnersSection
        ├── ShopifyPlusAgencySection
        ├── WhiteLabelPartnerSection
        ├── CommerceSolutionsSection
        ├── SelectedWorkSection
        ├── TestimonialsSection
        ├── IntegrationsSection
        ├── InsightsSection
        └── SplitFaqSection
```

### Key Characteristics of this Model
1. **Zero Raw HTML**: Every headline, paragraph, bullet point, link, counter, and media item is a typed string, number, or array in the block schema.
2. **Component Mapping**: Every block maps 1:1 to an established, production-tested React component through `BlockRenderer` (`src/components/blocks/block-renderer.tsx`) or a dedicated route renderer.
3. **Fail-Safe Fallbacks**: Section components accept optional dynamic CMS props with strict fallbacks to local data modules (`src/content/**`). If a field is omitted or the database is unreachable, the page renders identically to the migrated baseline.
4. **Strict Content Boundary**: No visible copy in components; all copy is supplied via CMS block props or fallback content files (`npm run check:component-content` must always pass).

---

## 3. Universal Content Architecture: Zero Direct HTML Standard

Every collection in Payload CMS must adopt this block-first architecture. The table below outlines the transformation:

| Collection | Legacy / Anti-Pattern (FORBIDDEN) | Production Standard: 100% Block Structure (MANDATORY) |
| :--- | :--- | :--- |
| **`pages`** (Marketing Routes) | Unstructured HTML / monolithic rich text fields | `sections` blocks array (`HeroBlock`, `BrandPartnersBlock`, `ProofCountersBlock`, `FeaturesGridBlock`, `ProcessTimelineBlock`, etc.) rendered via `BlockRenderer`. |
| **`posts`** (Blog Articles) | Direct HTML string (`contentHtml`) or unparsed raw HTML dumped into `content: richText` | `content` blocks array (`blog-heading`, `blog-paragraph`, `blog-list`, `blog-image`, `blog-table`, `blog-quote`, `blog-callout`, `blog-divider`) matching `BlogContentBlock` and rendered via `BlogContentRenderer`. Structured fields for `toc`, `faqs`, `featuredImage`, `author`, `category`, and `seo`. |
| **`case-studies`** (Case Studies) | Raw textareas / unformatted HTML for `challenge`, `solution`, `overview` | Structured section blocks / groups: `hero`, `overview`, `keyMetrics` (counters), `challenge` (numbered items), `solutions` (lead + items), `keyFeatures` (feature grid), `projectDelivery` (deliverable badges), `customSections` (modular subsections), `relatedCaseStudies`, and `seo`. Rendered via `CaseStudyDetailPage`. |
| **`testimonials`** (Client Reviews) | Inline unstructured quotes in page copy | Structured collection: `clientName`, `company`, `quote`, `videoId`, `avatar`, `companyLogo`, `tags`. Referenced via relationships in pages and case studies. |

---

## 4. Collection Schema Specifications

### 4.1. Blog Posts (`posts` Collection)
Blog articles must be composed entirely of discrete editorial blocks, matching the existing `BlogContentBlock` interface in `src/types/blog-post.ts` and rendered via `BlogContentRenderer` in `src/components/sections/blog-details/blog-content-renderer.tsx`.

#### Editorial Blocks Array (`content` field)
The `content` field is a Payload `blocks` array containing the following blocks:

1. **`blog-heading`**:
   - `level`: `select` (`["2", "3", "4", "5"]`, default: `"2"`)
   - `text`: `text` (required)
   - `id`: `text` (optional, used for anchor links & TOC generation)
2. **`blog-paragraph`**:
   - `text`: `textarea` (plain text content for simple paragraphs)
   - `inlineNodes`: `array` (optional, for paragraphs with rich inline links, bold, italic text without writing HTML):
     - `type`: `select` (`["text", "link", "break"]`)
     - `text`: `text`
     - `bold`: `checkbox`
     - `italic`: `checkbox`
     - `href`: `text` (for links, root-relative or external)
     - `target`: `select` (`["_self", "_blank"]`)
3. **`blog-list`**:
   - `ordered`: `checkbox` (true for `<ol>`, false for `<ul>` with checkmark icons)
   - `items`: `array` of `{ text: string, boldPrefix?: string, linkText?: string, linkHref?: string }`
4. **`blog-image`**:
   - `src`: `text` (canonical path, e.g. `/assets/blogs/...`)
   - `alt`: `text` (required, intentional alt text)
   - `width`: `number` (default: 750)
   - `height`: `number` (default: 400)
   - `caption`: `text` (optional caption)
5. **`blog-table`**:
   - `headers`: `array` of `{ headerText: string }`
   - `rows`: `array` of `{ cells: array of { cellText: string } }`
6. **`blog-quote`**:
   - `quote`: `textarea` (quote text)
   - `citation`: `text` (author or publication name)
7. **`blog-callout`**:
   - `type`: `select` (`["info", "tip", "warning"]`)
   - `title`: `text`
   - `content`: `textarea`
8. **`blog-divider`**:
   - `style`: `select` (`["standard", "subtle"]`)

#### Structured Document Fields
- `title`: `text` (required)
- `slug`: `text` (required, unique)
- `date`: `date` (required)
- `displayDate`: `text`
- `featuredImage`: `group` (`src`, `alt`, `width`, `height`)
- `excerpt`: `textarea` (plain text summary)
- `author`: `relationship` (relationTo: `"authors"`)
- `categories`: `relationship` (relationTo: `"categories"`, hasMany: true)
- `toc`: `array` of `{ label: string, href: string, level: number }`
- `faqs`: `array` of `{ question: string, answer: string }`
- `seo`: `group` (`metaTitle`, `metaDescription`, `canonicalUrl`, `metaImage`)

---

### 4.2. Case Studies (`case-studies` Collection)
Case studies must be modeled as structured section blocks matching the `CaseStudyDetail` interface in `src/types/case-study.ts` and rendered via `CaseStudyDetailPage` in `src/components/sections/case-study-details/case-study-detail-page.tsx`.

#### Structured Section Fields
1. **Metadata & Hero**:
   - `title`: `text` (required)
   - `slug`: `text` (required, unique)
   - `clientName`: `text` (required)
   - `projectTitle`: `text`
   - `industry`: `text`
   - `technology`: `text` (e.g., "Shopify Plus")
   - `location`: `text` (e.g., "Los Angeles, CA")
   - `websiteUrl`: `text`
   - `summary`: `textarea`
   - `heroImage`: `group` (`src`, `alt`, `width`, `height`)
   - `heroEyebrows`: `array` of `{ text: string }`
2. **Archive Content (Listing Card)**:
   - `archiveTitle`: `text`
   - `archiveExcerpt`: `textarea`
   - `archiveTags`: `array` of `{ tag: string }`
3. **Key Metrics (`keyMetrics`)**:
   - `heading`: `text` (e.g., "Key Results & Impact")
   - `items`: `array` of `{ stat: string, label: string }` (e.g., `stat: "+142%"`, `label: "Revenue Growth"`)
4. **The Challenge (`challenge`)**:
   - `eyebrow`: `text`
   - `heading`: `text`
   - `description`: `textarea`
   - `items`: `array` of `{ number: string, title: string, description: string }`
5. **The Solution (`solutions`)**:
   - `eyebrow`: `text`
   - `heading`: `text`
   - `lead`: `textarea`
   - `items`: `array` of `{ number: string, text: string }`
6. **Key Features (`keyFeatures`)**:
   - `eyebrow`: `text`
   - `heading`: `text`
   - `isTwoColumn`: `checkbox`
   - `items`: `array` of `{ number: string, title: string, description: string }`
7. **Project Delivery (`projectDelivery`)**:
   - `eyebrow`: `text`
   - `heading`: `text`
   - `items`: `array` of `{ category: string, name: string }`
8. **Custom Subsections (`customSections`)**:
   - `array` of `{ eyebrow?: string, heading: string, lead?: string, description?: string, items?: array of { title?: string, description?: string, number?: string }, takeaways?: array of { text: string } }`
9. **Relationships & SEO**:
   - `relatedCaseStudies`: `relationship` (relationTo: `"case-studies"`, hasMany: true)
   - `testimonial`: `relationship` (relationTo: `"testimonials"`)
   - `seo`: `group` (`metaTitle`, `metaDescription`, `canonicalUrl`, `metaImage`)

---

### 4.3. Marketing & Service Pages (`pages` Collection)
All marketing and service routes continue using the established `sections` blocks array in `src/collections/Pages.ts`:

- `HeroBlock` (`title`, `subheading`, `description`, `ctaLabel`, `ctaHref`, `variant`, `eyebrows`, `image`)
- `ProofCountersBlock` (`heading`, `description`, `counters`: array of `{ label, value, display, suffix }`)
- `BrandPartnersBlock` (`heading`, `description`, `variant`, `logos`: array of `{ name, logo, url }`)
- `FeaturesGridBlock` (`eyebrow`, `heading`, `description`, `features`: array of `{ title, description, icon, linkText, linkUrl }`)
- `ProcessTimelineBlock` (`eyebrow`, `heading`, `steps`: array of `{ stepNumber, title, description }`)
- `PricingModelsBlock` (`eyebrow`, `heading`, `description`, `models`: array of `{ label, badge, price, description, bullets, ctaLabel, ctaHref }`)
- `TechnologiesGridBlock` (`eyebrow`, `heading`, `description`, `categories`: array of `{ category, technologies }`)
- `TwoColImageWithTextBlock` (`heading`, `description`, `image`, `imagePosition`, `bullets`, `ctaLabel`, `ctaHref`)
- `IndustriesGridBlock` (`eyebrow`, `heading`, `description`, `variant`, `industries`: array of `{ title, eyebrow, description, image, href }`)
- `RichTextBlock` (`heading`, `eyebrow`, `containerWidth`, structured paragraphs & headings for legal/terms pages — **zero raw HTML**)
- `HappyClientsBlock` (`eyebrow`, `heading`, `description`, `testimonials`: relationship or structured items)
- `CaseStudiesBlock` (`eyebrow`, `heading`, `description`, `caseStudies`: relationship or structured items)
- `CtaBannerBlock` (`heading`, `description`, `btnText`, `btnUrl`)
- `FaqAccordionBlock` (`eyebrow`, `heading`, `description`, `faqs`: array of `{ question, answer }`)

---

## 5. Agent Discovery Methodology (How Any Agent Maps Any Content / Page)

When implementing or seeding any page or collection, the agent must **never** guess data structures or dump arbitrary HTML. Instead, execute this discovery cycle:

```
Step 1: Inspect Target Route & Types
  └── Read route page.tsx (e.g. src/app/(frontend)/[...slug]/page.tsx or blogs/[slug]/page.tsx)
  └── Read corresponding TypeScript types in src/types/** to verify block interfaces
       │
Step 2: Inspect Section / Content Renderer Components
  └── Check src/components/sections/** and block renderers (BlockRenderer, BlogContentRenderer)
  └── Confirm exactly how each block type is unpacked and rendered into JSX
       │
Step 3: Source Structured Content
  └── Read corresponding src/content/<name>.ts, src/content/<name>.json, or src/data/<name>.ts
  └── Decompose content into discrete typed block items (no raw HTML tags)
       │
Step 4: Resolve Payload Block Schema
  └── Match each content element to an existing block definition in src/blocks/
  └── If a new block is genuinely required, define it cleanly in src/blocks/ and register it
       │
Step 5: Ephemeral Seeding & Verification
  └── Create temporary script in scratch/ (outside scripts/), run once against Neon DB
  └── Verify database persistence and delete the scratch script immediately
```

### Discovery Rulebook for Agents
1. **Never dump raw HTML**: Always decompose content into discrete block fields (`heading`, `paragraph`, `list`, `table`, etc.).
2. **Never create redundant blocks**: Inspect `src/blocks/` and `src/components/blocks/block-renderer.tsx` first. Reuse existing blocks with optional fields whenever possible.
3. **Respect Postgres Table Name Limits**: Drizzle/Postgres tables have a 63-character limit. Any array fields inside custom blocks must define concise `dbName` values (e.g. `spa_paras`, `cs_items`, `post_blks`).
4. **Preserve Exact URL Equity**: All internal links in CTA and inline link props must be absolute root-relative paths without trailing slashes (e.g., `/shopify-plus-agency`, `/contact-us`).
5. **Never Add or Commit Seeding Scripts**: Do not create or commit temporary seeding scripts in `scripts/`, and never add seed commands to `package.json`. Seeding is strictly one-time execution via disposable files in `scratch/`.

---

## 6. Phased Content Seeding Roadmap

### Phase 1: Global Site Settings & Taxonomies (COMPLETED & VERIFIED)
- **Globals**:
  - `site-settings`: Phone, email, WhatsApp, address, office coordinates, social URLs (`src/data/site.ts`).
  - `navigation`: Header navigation mega menu groups, sub-items, badges, promo cards, footer columns, copyright (`src/data/navigation.ts`).
- **Collections**:
  - `categories`: Standard ecommerce & tech taxonomy (`shopify`, `wordpress`, `ecommerce`, `big-commerce`, `faqs`).
  - `authors`: Team members, bio snippets, roles (`src/data/team.ts` / blog authors).
- **Status**: Persisted in Neon DB, verified, 0 errors.

---

### Phase 2: Dedicated Content Collections (Case Studies, Blog Posts & Testimonials)
*Target: Independent dynamic collections rendered via dedicated dynamic routes, with 100% block structure.*

- **`testimonials` Collection**:
  - Client video quotes, transcripts, author titles, company names, video IDs (`src/content/home-client.ts`, `src/content/request-quote.ts`).
  - Fields: `clientName`, `company`, `quote`, `videoId`, `avatar`, `companyLogo`, `tags`.
- **`case-studies` Collection (58 Case Studies)**:
  - Structured modular sections from `src/content/case-studies-items.json` and `src/content/case-study-details.ts`.
  - Sections: `hero` (image, client name, eyebrows), `archive` (card summary, tags), `overview` (metadata, website URL, summary), `keyMetrics` (counters), `challenge` (numbered items), `solutions` (numbered items), `keyFeatures` (features grid), `projectDelivery` (deliverables badges), `customSections`, `seo`.
  - Zero raw HTML.
- **`posts` Collection (119 Blog Posts)**:
  - Structured editorial blocks from `src/content/blogs.ts` and `src/content/blog-post-details.ts`.
  - Content: `content` blocks array (`blog-heading`, `blog-paragraph`, `blog-list`, `blog-image`, `blog-table`, `blog-quote`, `blog-callout`, `blog-divider`).
  - Structured metadata: `title`, `slug`, `date`, `displayDate`, `featuredImage`, `excerpt`, `author` (relation), `categories` (relation), `toc` (array of label/href/level), `faqs` (array of question/answer), `seo`.
- **Status**: Persisted in Neon DB (11 testimonials, 58 case studies, 119 blog posts with zero raw HTML and 100% modular block schema), verified, 0 errors.

---

### Phase 3: Core Agency & Marketing Pages
*Target: Primary brand positioning and inquiry conversion pages, assembled via `sections` blocks.*

- **Home Page (`/`)** *(Already seeded & verified in Neon DB)*:
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
  - `/terms-of-service`, `/privacy-policy`, `/site-map`: `hero` (centered), `rich-text-content` (structured headings and paragraphs — no raw HTML).

---

### Phase 4: Flagship Shopify Solution Pages (17 Pages)
*Target: Primary commercial revenue drivers and Shopify expertise pages.*

- **Pages**:
  `/shopify-plus-agency`, `/shopify-development-agency`, `/shopify-certified-developers`, `/shopify-migration`, `/shopify-plus-migration-agency`, `/shopify-theme-customization`, `/shopify-cro-agency`, `/shopify-mobile-app-development`, `/shopify-experts`, `/hire-shopify-developers`, `/shopify-maintenance-services`, `/upgrade-to-shopify-plus`, `/buy-shopify-development-hours`, `/shopify-apps`, `/migrating-a-theme-to-online-store-2-0`, `/appmaker-shopify-mobile-app-development`, `/risks-of-shopify-outsourcing`.
- **Standard Block Stack**:
  `hero` (split) ➔ `brand-partners` ➔ `proof-counters` ➔ `features-grid` ➔ `process-timeline` ➔ `technologies-grid` ➔ `pricing-models` ➔ `case-studies` ➔ `happy-clients` ➔ `faq-accordion` ➔ `cta-banner`.

---

### Phase 5: Platform-to-Shopify Migration Sub-Pages (11 Pages)
*Target: SEO-driven migration search queries.*

- **Pages**:
  `/magento-to-shopify-migration`, `/magento-to-shopify-plus-migration`, `/woocommerce-to-shopify-migration`, `/bigcommerce-to-shopify-migration`, `/salesforce-to-shopify-migration`, `/squarespace-to-shopify-migration`, `/wix-to-shopify-migration`, `/prestashop-to-shopify-migration`, `/ecwid-to-shopify-migration`, `/etsy-to-shopify-migration`, `/square-to-shopify-migration`.
- **Standard Block Stack**:
  `hero` (split with legacy platform logos) ➔ `proof-counters` (migration stats) ➔ `features-grid` (zero data loss deliverables) ➔ `process-timeline` (audit, staging, delta sync, DNS cutover) ➔ `case-studies` (relevant migrations) ➔ `faq-accordion` (passwords, SEO preservation) ➔ `cta-banner`.

---

### Phase 6: Technology & White-Label Services Pages (14 Pages)
*Target: Non-Shopify tech stacks and agency partnership offerings.*

- **White-Label Partner Pages**:
  `/white-label-shopify-development-services`, `/white-label-wordpress-development-services`, `/white-label-website-design-services`.
  *Key Blocks*: `hero`, `proof-counters`, `features-grid` (NDA, dedicated teams, white-label comms), `process-timeline`, `pricing-models`, `happy-clients`, `faq-accordion`, `cta-banner`.
- **Engineering & Specialty Stacks**:
  `/wordpress-development-company`, `/wordpress-development`, `/woocommerce-development`, `/magento-development`, `/bigcommerce-development`, `/webflow-development`, `/full-stack-development`, `/php-development`, `/ai-services`, `/mobile-application-development`, `/ios-app-development`, `/android-app-development`, `/cross-platform-app-development`, `/seo-services`, `/hire-wordpress-developers`.

---

### Phase 7: Industry Vertical Pages (10 Pages)
*Target: Niche ecommerce sector solutions.*

- **Pages**:
  `/fashion`, `/beauty-cosmetics`, `/food-beverages`, `/food-beverage-shopify-plus-agency`, `/health-nutrition`, `/jewellery-accessories`, `/home-living`, `/sports-outdoors`, `/pet-industry`, `/dental-clinic-website-development-company`.
- **Standard Block Stack**:
  `hero` (industry-specific challenges) ➔ `brand-partners` (vertical brand proof) ➔ `features-grid` (bundles, subscriptions, swatches, wholesale) ➔ `case-studies` (filtered to vertical) ➔ `happy-clients` ➔ `faq-accordion` ➔ `cta-banner`.

---

### Phase 8: Theme Customization Pages (50+ Pages)
*Target: 50+ Shopify and WordPress theme customization landing pages.*

- **Shopify Themes**:
  `/dawn-theme-customization`, `/impulse-theme-customization`, `/prestige-theme-customization`, `/warehouse-theme-customization`, `/expanse-theme-customization`, `/pipeline-theme-customization`, `/craft-theme-customization`, `/sense-theme-customization`, `/spotlight-theme-customization`, `/studio-theme-customization`, `/colorblock-theme-customization`, `/refresh-theme-customization`, `/origin-theme-customization`, `/broadcast-theme-customization`, `/be-yours-theme-customization`, `/stiletto-theme-customization`, `/vision-theme-customization`, `/vessel-theme-customization`, `/savor-theme-customization`, `/trade-theme-customization`, etc.
- **WordPress Themes**:
  `/astra-theme-customization`, `/generatepress-theme-customization`, `/kadence-theme-customization`, `/oceanwp-theme-customization`, `/neve-theme-customization`, `/blocksy-theme-customization`, `/hello-elementor-theme-customization`, `/popularfx-theme-customization`, `/go-theme-customization`, `/kubio-theme-customization`, `/inspiro-theme-customization`, `/woodstock-theme-customization`, etc.
- **Standard Block Stack**:
  `hero` (theme customization intro) ➔ `features-grid` (custom Liquid/PHP sections, speed tuning, mobile UX) ➔ `process-timeline` (audit, sandbox, deploy) ➔ `case-studies` (stores built with this theme) ➔ `faq-accordion` ➔ `cta-banner`.

---

### Phase 9: Geo & Location Landing Pages (17 Pages)
*Target: City and regional localized landing pages.*

- **India**:
  `/shopify-development-in-mumbai`, `/shopify-development-in-delhi`, `/shopify-development-in-bangalore`, `/shopify-development-in-hyderabad`, `/shopify-development-in-pune`, `/shopify-development-company-in-chennai`, `/wordpress-development-in-mumbai`, `/wordpress-development-in-delhi`, `/wordpress-development-in-bangalore`, `/wordpress-development-in-pune`, `/wordpress-development-in-noida`, `/wordpress-development-in-ahmedabad`.
- **Global**:
  `/shopify-development-in-new-york`, `/shopify-development-in-los-angeles`, `/shopify-development-in-miami`, `/shopify-development-in-texas`, `/shopify-development-in-barcelona-spain`.
- **Standard Block Stack**:
  `hero` (localized city headline) ➔ `proof-counters` ➔ `brand-partners` ➔ `features-grid` ➔ `case-studies` ➔ `happy-clients` ➔ `faq-accordion` (timezone, currency, collaboration model) ➔ `cta-banner`.

---

## 7. Verification & Quality Gates for Agents

After seeding any page, collection, or batch, the executing agent must verify against this mandatory quality gate:

1. **Zero Direct HTML Audit**:
   - Verify that no raw HTML markup strings (`<p>`, `<div>`, `<span>`, `<strong>`, `<a>`, `<img`, etc.) exist in seeded CMS records or collection schemas.
   - All content must reside in typed block properties or structured fields.
2. **Database Persistence Check**:
   - Query Payload API / Neon DB for the seeded `slug` and verify `sections.length > 0` (for pages) or structured blocks exist (for posts and case studies).
3. **Component Content Boundary Check**:
   ```bash
   npm run check:component-content
   ```
   Must pass with 0 hardcoded business copy violations.
4. **URL Policy Check**:
   ```bash
   npm run check:urls
   ```
   Must pass with 0 trailing slash violations.
5. **TypeScript & Static Type Check**:
   ```bash
   npx tsc --noEmit
   ```
   Must complete with 0 errors across collections, blocks, and page props.
6. **Zero Asset Duplication Check**:
   ```bash
   npm run check:asset-duplicates
   ```
   Must verify 0 duplicate images or media files.
7. **Full Production Build Verification**:
   ```bash
   npm run build
   ```
   Must compile all routes cleanly with 100% static/dynamic parity.
8. **Zero Seeding Scripts Check**:
   - Verify that no `seed-*.mjs` or `seed-*.js` files exist in `scripts/` or git status.
   - Verify that no `seed:*` commands exist in `package.json`.
   - Verify that any temporary scratch files created in `scratch/` during one-time execution have been deleted.
