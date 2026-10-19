# Dynamic Dreamz: Local Data to Payload CMS 3.x Master Seeding Plan

## 1. Mission & Strategic Objective

This plan defines the production-grade, idempotent data and media ingestion pipeline that migrates all verified local data (**140 Pages**, **124 Blog Posts**, **56 Case Studies**, **Taxonomies**, and **Globals**) from the Next.js codebase into **Payload CMS 3.x** on **PostgreSQL (Neon)** and the dedicated **Media Server (`https://media.dynamicdreamz.net`)**.

### Shift to CMS as Single Source of Truth
During earlier migration phases, the website's content, metadata, images, and page structures were extracted from WordPress, cleaned, and codified locally into TypeScript modules (`src/content/**`), JSON datasets (`src/content/blog-posts/posts/*.json`, `src/content/case-study-details.json`), and layout registries (`src/lib/registry/**`).

Now, the site transitions to **Payload CMS as the primary Single Source of Truth**:
1. **CMS Primary**: All routes (`[[...slug]]`, `blogs/[slug]`, `case-studies/[slug]`, layout header/footer) fetch content directly from Payload CMS collections and globals via the Payload Local API.
2. **Resilient Local Fallback**: Local content files in `src/content/**` and registries in `src/lib/registry/**` are retained strictly as offline backups and zero-downtime fallbacks if the database is temporarily unreachable.
3. **Zero Runtime WordPress Dependency**: No live asset fetching or API calls to legacy WordPress or `dynamicdreamz.com`.

---

## 2. Strict Architectural Rules

1. **CMS Role (Payload 3.x):** Stores structured content, SEO metadata, media relations, taxonomies, globals, and modular page layouts. Page documents use the **`sections`** blocks field (rendered via `RenderBlocks` in `src/components/RenderBlocks.tsx`). Blocks contain **zero styling/CSS controls**—only semantic data fields.
2. **Frontend Role (Next.js App Router):** Serves **React Server Components** styled with **Tailwind CSS 4** and **AOS (`data-aos`)** attributes, plus isolated `'use client'` islands for browser interactivity. Frontend components contain **zero hardcoded page/business copy**.
3. **URL Policy (Strictly No Trailing Slashes):** Public page URLs use the no-trailing-slash form everywhere (e.g. `/about-us`, `/case-studies/daniel-walters`, `/industries/pet-industry`). The homepage `/` is the only structural route exception. `next.config.ts` maintains `trailingSlash: false`. All internal links, canonical URLs, OG URLs, and sitemap entries must follow this policy. Automated verification is enforced by `npm run check:urls`.
4. **Media Storage (Dedicated Media Server):** All uploaded media assets are stored on and served from our dedicated media server at `https://media.dynamicdreamz.net` under `uploads/` via `@payloadcms/plugin-cloud-storage` and `adapter/src/index.ts`. Direct hotlinking to legacy `wp-content/uploads` in final code or database records is strictly forbidden.
5. **Local Asset Dual-Resolution:** In UI components and block renderers, dual resolution is enforced: resolve uploaded media (`media.url`, `media.alt`), and if null or unpopulated, fall back to the canonical local project asset (`/assets/...`).
6. **Zero Temporary Seeding Scripts in Repository:** In accordance with `AGENTS.md`, seeding scripts must **never** be committed to `scripts/` or `src/scripts/`, and seed commands must **never** be registered in `package.json`. Seeding operations are executed ephemerally via scratch scripts in `scratch/seed/` (outside git tracking), verified against the database, and discarded immediately.
7. **Total Site Inventory to Ingest:**
   - **140 Pages**: Ingested into `pages` collection using bespoke modular blocks in `page.sections`.
   - **124 Blog Posts**: Ingested into `posts` collection from `src/content/blog-posts/posts/*.json` using structured `blogContentBlocks`.
   - **56 Case Studies**: Ingested into `case-studies` collection from `src/content/case-study-details.json`.
   - **2 Hub Pages**: `/blogs` and `/case-studies` listings dynamic feeds.
   - **Taxonomies**: `categories` (~10 categories), `authors` (~15 authors), `testimonials` (~50+ client quotes).
   - **2 Globals**: `navigation` (Header & Footer menus) and `site-settings` (Company info, office locations, social links).
   - **Media**: ~774 deduplicated canonical assets in `public/assets/`.

---

## 3. Dedicated Media Server & Media Map Cache

The project uses a dedicated high-performance media server configured in `adapter/src/index.ts` and registered in `payload.config.ts`.

### How Media Ingestion & ID Resolution Works
When local data references static paths (e.g. `"/assets/clients/supertails.svg"` or `"/assets/case-studies/daniel-walters-hero.webp"`):
1. **Phase 1 Pre-seeding**: Systematically scans all assets referenced in `src/content/**`, `src/data/**`, and `public/assets/`.
2. **Sharp & Derivative Generation**: Payload processes the binary buffer through `sharp` (WebP derivatives: `thumbnail`: 400x300, `card`: 768x512, `hero`: 1920x1080). SVGs (`image/svg+xml`) are uploaded directly without raster resizing.
3. **HTTP Upload**: Files are sent via HTTP `PUT` to `https://media.dynamicdreamz.net/api/objects/uploads/<filename>`.
4. **Bidirectional Media Map Cache**: The seeder stores a JSON lookup map in `scratch/seed/seed-cache/media-map.json`:
   ```json
   {
     "/assets/clients/supertails.svg": 12,
     "supertails.svg": 12,
     "/assets/team/sheetal.webp": 45,
     "sheetal.webp": 45
   }
   ```
5. **Relationship Resolution**: Subsequent phases (Taxonomies, Case Studies, Posts, Pages) resolve any local asset path against `mediaMap` to assign the proper Payload relationship ID `{ image: payloadMediaId }`.

---

## 4. Ephemeral Seeding Architecture (`scratch/seed/`)

All seeding scripts run ephemerally inside `scratch/seed/` and are never committed to git:

```text
scratch/seed/                         # Temporary directory (git-ignored, ephemeral)
├── run-seed.ts                       # Master CLI orchestrator (executes Phases 1 -> 6 sequentially)
├── seed-cache/                       # Persistent JSON caches preventing re-work on restart
│   ├── media-map.json                # Cache: asset path / filename -> payloadMediaId
│   ├── category-map.json             # Cache: category slug -> payloadCategoryId
│   ├── author-map.json               # Cache: author slug/name -> payloadAuthorId
│   ├── testimonial-map.json          # Cache: client name + company -> payloadTestimonialId
│   ├── case-study-map.json           # Cache: case study slug -> payloadCaseStudyId
│   └── post-map.json                 # Cache: blog post slug -> payloadPostId
├── seeders/
│   ├── 01-seed-media.ts              # Ingests canonical assets from public/assets/ into Payload media
│   ├── 02-seed-taxonomies.ts         # Ingests categories, authors, testimonials from local datasets
│   ├── 03-seed-globals.ts            # Ingests navigation & site-settings globals from src/data/
│   ├── 04-seed-case-studies.ts       # Ingests 56 case studies from src/content/case-study-details.json
│   ├── 05-seed-posts.ts              # Ingests 124 blog posts from src/content/blog-posts/posts/*.json
│   └── 06-seed-pages.ts              # Ingests 140 pages mapped to modular blocks in page.sections
└── utils/
    ├── batch-runner.ts               # Concurrency limiter & Neon connection pool protector
    └── block-transformers.ts         # Converts local content objects into typed Payload block objects
```

### Execution Command
Run using Node's native flag or `tsx` directly without adding npm scripts:
```bash
node --env-file-if-exists=.env --import tsx scratch/seed/run-seed.ts
```

---

## 5. Strict 6-Phase Dependency Execution Order

Because collections reference foreign keys (`id`) from `media`, `categories`, `authors`, and `testimonials`, seeding must execute in this exact sequence:

```text
[Phase 1: Media Collection]
       ↓ (Outputs mediaMap: { assetPath -> payloadMediaId })
[Phase 2: Relational Taxonomies (Categories, Authors, Testimonials)]
       ↓ (Outputs categoryMap, authorMap, testimonialMap)
[Phase 3: Globals (Navigation & SiteSettings)]
       ↓
[Phase 4: Case Studies Collection (56 Docs from src/content/case-study-details.json)]
       ↓ (Outputs caseStudyMap: { slug -> payloadCaseStudyId })
[Phase 5: Posts Collection (124 Docs from src/content/blog-posts/ using blogContentBlocks)]
       ↓ (Outputs postMap: { slug -> payloadPostId })
[Phase 6: Pages Collection (140 Pages mapped to modular blocks in page.sections)]
```

---

## 6. Detailed Phase Implementations & Local Data Sources

### Phase 1: Media Collection Ingestion (`01-seed-media.ts`)
- **Data Source**: Canonical assets referenced in `src/content/**`, `src/data/**`, and `public/assets/**` (774 unique assets).
- **Alt Text Sourcing**: Local image metadata, component alt text, or clean title fallback.
- **Idempotency**: Checks if `filename` already exists in `media` collection before uploading.
- **Cache Output**: `scratch/seed/seed-cache/media-map.json`.

```typescript
// scratch/seed/seeders/01-seed-media.ts
import type { Payload } from 'payload';
import fs from 'node:fs';
import path from 'node:path';

export async function seedLocalMedia(
  payload: Payload,
  relativePath: string,
  altText: string,
  cacheMap: Record<string, string | number>
): Promise<string | number | null> {
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  const fullPath = path.join(process.cwd(), 'public', cleanPath);

  if (cacheMap[relativePath]) return cacheMap[relativePath];
  if (!fs.existsSync(fullPath)) return null;

  const filename = path.basename(fullPath);
  if (cacheMap[filename]) {
    cacheMap[relativePath] = cacheMap[filename];
    return cacheMap[filename];
  }

  // 1. Check existing in Payload DB
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    pagination: false,
  });

  if (existing.docs.length > 0) {
    const id = existing.docs[0].id;
    cacheMap[filename] = id;
    cacheMap[relativePath] = id;
    return id;
  }

  // 2. Upload and create media doc
  const buffer = fs.readFileSync(fullPath);
  const ext = path.extname(filename).toLowerCase();
  const mimeType = ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg';

  const created = await payload.create({
    collection: 'media',
    data: { alt: altText || filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') },
    file: { data: buffer, name: filename, mimetype: mimeType, size: buffer.byteLength },
    context: { disableRevalidate: true },
  });

  cacheMap[filename] = created.id;
  cacheMap[relativePath] = created.id;
  return created.id;
}
```

---

### Phase 2: Relational Taxonomies Ingestion (`02-seed-taxonomies.ts`)

#### A. Categories Collection (`src/payload/collections/Categories.ts`)
- **Data Source**: `blogArchiveCategories` from `src/content/blogs.ts` + category entries from `src/content/blog-posts/index.json`.
- **Fields Seeded**: `name`, `slug` (unique), `description`.
- **Idempotency**: Upsert by `slug`.
- **Cache Output**: `categoryMap: { [slug: string]: payloadCategoryId }`.

#### B. Authors Collection (`src/payload/collections/Authors.ts`)
- **Data Source**: Authors in `src/content/blog-posts/posts/*.json` (e.g., "Rizwan Shaikh", "Manish Patel") and leadership members in `src/data/team.ts`.
- **Fields Seeded**: `name`, `slug`, `role`, `avatarUrl`, `avatar` (linked via `mediaMap`), `linkedin`, `bio`.
- **Idempotency**: Upsert by `slug` or `name`.
- **Cache Output**: `authorMap: { [slugOrName: string]: payloadAuthorId }`.

#### C. Testimonials Collection (`src/payload/collections/Testimonials.ts`)
- **Data Source**: Homepage testimonials in `src/content/home.ts`, case study testimonials in `src/content/case-study-details.json`, and service page testimonials in `src/content/hire-shopify-developers.ts`, `src/content/shopify-experts.ts`, `src/content/shopify-theme-customization.ts`.
- **Fields Seeded**: `clientName`, `company`, `quote`, `title`, `role`, `videoId`, `videoUploadDate`, `avatar` (`mediaMap`), `portrait` (`mediaMap`), `companyLogo` (`mediaMap`), `companyLogoAlt`, `companyHref`, `tags`, `rating`.
- **Idempotency**: Upsert by `clientName` + `company`.
- **Cache Output**: `testimonialMap: { [clientName: string]: payloadTestimonialId }`.

---

### Phase 3: Globals Ingestion (`03-seed-globals.ts`)

#### A. Navigation Global (`src/payload/globals/Navigation.ts`)
- **Data Source**: `src/data/navigation.ts`.
- **Header Nav**: Mapped from `primaryNavigation` (`title`, `href`, `subItems` with `label`, `href`, `description`, `badge`).
- **Footer Columns**: Mapped from `footerNavigation` (`title`, `links` with `label`, `href`).
- **Footer Bottom Links**: Mapped from `footerLegalLinks` (`label`, `href`).
- **Copyright**: Mapped from `footerCopyright`.

#### B. SiteSettings Global (`src/payload/globals/SiteSettings.ts`)
- **Data Source**: `src/data/site.ts` and `src/data/company.ts`.
- **Company Info**: `phone` ("+91 9327642007"), `whatsappNumber` ("919327642007"), `email` ("info@dynamicdreamz.com"), `skype` ("live:dynamicdreamz"), `address`.
- **Social Links**: LinkedIn, Twitter/X, Facebook, Instagram, Clutch, Shopify Partner.
- **Office Locations**: Coordinates, addresses, and phone links for `suratOffice` and `ahmedabadOffice`.

---

### Phase 4: Case Studies Ingestion (`04-seed-case-studies.ts`)

- **Data Source**: `src/content/case-study-details.json` (56 fully detailed case studies) + `src/content/case-studies-items.json`.
- **Fields Seeded**:
  - `title`, `slug` (unique, slashless), `clientName`, `projectTitle`, `industry`, `technology`, `location`, `websiteUrl`, `summary`.
  - `heroImage`: Resolved to `payloadMediaId` via `mediaMap[hero.image.src]`.
  - `heroEyebrows`: Array of `{ text }`.
  - `archive`: Group (`title`, `technology`, `industry`, `excerpt`, `tags`).
  - `keyMetrics`: Group (`heading`, `items` with `value`, `label`, `description`).
  - `challenge`: Group (`eyebrow`, `heading`, `description`, `items`).
  - `solutions`: Group (`eyebrow`, `heading`, `lead`, `items`).
  - `keyFeatures`: Group (`eyebrow`, `heading`, `isTwoColumn`, `items`).
  - `projectDelivery`: Group (`eyebrow`, `heading`, `items`).
  - `customSections`: Array of custom sections.
  - `seo`: Group (`metaTitle`, `metaDescription`, `canonicalUrl`: `https://www.dynamicdreamz.com/case-studies/<slug>`, `metaImage`).
- **Idempotency**: Upsert by `slug`.
- **Cache Output**: `caseStudyMap: { [slug: string]: payloadCaseStudyId }`.

---

### Phase 5: Blog Posts Ingestion (`05-seed-posts.ts`)

- **Data Source**: `src/content/blog-posts/posts/*.json` (124 validated blog post files) + `src/content/blog-posts/index.json`.
- **Relationships Resolved**:
  - `author`: `authorMap[post.author.slug || post.author.name]`.
  - `categories`: Array of `categoryMap[cat.slug]`.
  - `featuredImage`: `mediaMap[post.featuredImage.src]`.
- **Content Blocks (`blogContentBlocks`)**:
  - `contentBeforeToc`: Array of blocks (`blog-heading`, `blog-paragraph`, `blog-list`, `blog-image`).
  - `toc`: Array of `{ label, href, level }`.
  - `content`: Array of blocks (`blog-heading`, `blog-paragraph`, `blog-list`, `blog-image`, `blog-table`, `blog-quote`, `blog-callout`, `blog-divider`).
  - `faqs`: Array of `{ question, answer }`.
  - `seo`: Group (`metaTitle`, `metaDescription`, `canonicalUrl`: `https://www.dynamicdreamz.com/blogs/<slug>`, `metaImage`).
- **Idempotency**: Upsert by `slug`.
- **Cache Output**: `postMap: { [slug: string]: payloadPostId }`.

---

## 7. Phase 6: Pages Ingestion & Modular Block Architecture (140 Pages / 1,042 Sections)

In Phase 6, all **140 pages** from the Next.js registry are ingested into Payload CMS’s `pages` collection.
Each page document requires:
- `title`: Page Title (derived from SEO title or page metadata)
- `slug`: Normalized slashless slug (e.g. `home`, `about-us`, `shopify-plus-agency`, `industries/fashion-and-apparel`)
- `sections`: Array of modular blocks mapped 1:1 to `src/payload/blocks/` and rendered via `RenderBlocks.tsx`
- `seo`: Group matching `src/payload/collections/Pages.ts`:
  ```typescript
  seo: {
    metaTitle: string,
    metaDescription: string,
    canonicalUrl: string, // Bare slashless URL: e.g. "https://www.dynamicdreamz.com/about-us"
    metaImage: payloadMediaId,
    preventIndexing: boolean,
  }
  ```

---

### Phase 6 Sub-Phase Master Schedule & Inventory

To prevent database connection timeouts, memory pressure, and partial data loss, Phase 6 is divided into 11 strictly bounded sub-phases (6A through 6K). Every single page of the 140 pages is assigned to exactly one sub-phase:

| Sub-Phase | Domain / Category | Page Count | Section Count | Status | Target Source Files |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **6A** | Core Shopify & Ecommerce Services | 12 | 102 | **COMPLETED & VERIFIED** | `src/content/shopify-*.ts`, `ai-services.ts`, `full-stack-development.ts` |
| **6B** | White-Label Agency Services | 3 | 33 | **READY FOR SEEDING** | `src/content/white-label-*.ts` |
| **6C** | Platform Migration & Upgrade Services | 15 | 126 | Pending | `src/content/*migration*.ts`, `upgrade-to-shopify-plus.ts` |
| **6D** | Dedicated Hiring & Developer Services | 2 | 21 | Pending | `src/content/hire-*.ts` |
| **6E** | Mobile Application Development Services | 6 | 49 | Pending | `src/content/*mobile-app*.ts`, `src/content/*app-development.ts` |
| **6F** | Industry-Specific Commerce Verticals | 10 | 74 | Pending | `src/content/industries.ts`, `src/content/fashion.ts`, etc. |
| **6G** | Other CMS, Frameworks & Tech Services | 10 | 84 | Pending | `src/content/wordpress-*.ts`, `magento-*.ts`, `bigcommerce-*.ts`, etc. |
| **6H** | Shopify Theme Customization Sub-Pages | 32 | 288 | Pending | `src/content/*-theme-customization.ts` (Shopify themes) |
| **6I** | WordPress Theme Customization Sub-Pages | 17 | 136 | Pending | `src/content/*-theme-customization.ts` (WordPress themes) |
| **6J** | City & Geo-Targeted Landing Pages | 17 | 153 | Pending | `src/content/*development-in-*.ts` (Shopify & WP cities) |
| **6K** | Company, Legal, Portfolio & Thank-You | 16 | 76 | Pending | `src/content/home.ts`, `about.ts`, `contact.ts`, `career.ts`, etc. |
| **TOTAL** | **Entire Website Inventory** | **140** | **1,042** | — | **All 140 Registered Routes** |

---

### 7.1 Sub-Phase 6A: Core Shopify & Ecommerce Services (12 Pages, 102 Sections) — COMPLETED & VERIFIED

All 12 core service pages were successfully seeded and verified against Neon PostgreSQL using Payload Local API:

1. **`shopify-plus-agency`** (ID: 28, 11 sections):
   - Blocks: `service-hero-video` → `industry-brands` → `shopify-plus-proof` → `portfolio-showcase` → `shopify-stage-services` → `case-study-cards` → `industries-grid` → `pricing-models` → `happy-clients` → `evaluation-framework` → `faq-accordion`
2. **`shopify-cro-agency`** (ID: 47, 11 sections):
   - Blocks: `service-hero-video` → `industry-brands` → `shopify-cro-barriers` → `shopify-cro-revenue-impact` → `shopify-cro-services` → `shopify-cro-assessment` → `shopify-cro-process` → `shopify-cro-why` → `shopify-cro-engagement` → `portfolio-showcase` → `faq-accordion`
3. **`shopify-certified-developers`** (ID: 25, 10 sections):
   - Blocks: `service-hero-video` → `industry-brands` → `verified-knowledge` → `credential-evidence` → `credential-tabs` → `certified-agency-support` → `certified-services` → `partner-directory-proof` → `faq-accordion` → `white-label-final-cta`
4. **`shopify-experts`** (ID: 27, 11 sections):
   - Blocks: `service-hero-video` → `industry-brands` → `process-timeline` → `why-choose-shopify-migration` → `shopify-stage-services` → `theme-customization-services` → `ai-empowered-delivery` → `portfolio-showcase` → `pricing-models` → `happy-clients` → `faq-accordion`
5. **`buy-shopify-development-hours`** (ID: 26, 8 sections):
   - Blocks: `shopify-hours-hero` → `industry-brands` → `proof-counters` → `shopify-hours-comparison` → `shopify-hours-tasks` → `numbered-process-timeline` → `happy-clients` → `faq-accordion`
6. **`shopify-maintenance-services`** (ID: 122, 7 sections):
   - Blocks: `service-hero-video` → `industry-brands` → `agency-services` → `portfolio-showcase` → `pricing-models` → `happy-clients` → `faq-accordion`
7. **`shopify-development-agency`** (ID: 101, 10 sections):
   - Blocks: `service-hero-video` → `industry-brands` → `shopify-stage-services` → `portfolio-showcase` → `shopify-team-boxes` → `pricing-models` → `shopify-horizontal-process` → `happy-clients` → `faq-accordion` → `cta-banner`
8. **`shopify-apps`** (ID: 54, 3 sections):
   - Blocks: `shopify-apps-hero` → `shopify-apps-grid` → `image-cta`
9. **`risks-of-shopify-outsourcing`** (ID: 102, 5 sections):
   - Blocks: `hero` → `risks-shopify-topics` → `faq-accordion` → `image-cta` → `cta-banner`
10. **`shopify-theme-customization`** (ID: 55, 13 sections):
    - Blocks: `service-hero-video` → `industry-brands` → `theme-customization-services` → `shopify-team-boxes` → `process-timeline` → `theme-customization-approach` → `shopify-themes-grid` → `ai-empowered-delivery` → `why-choose-shopify-migration` → `portfolio-showcase` → `pricing-models` → `happy-clients` → `faq-accordion`
11. **`ai-services`** (ID: 29, 11 sections):
    - Blocks: `service-hero-video` → `industry-brands` → `proof-counters` → `ai-services-grid` → `two-col-image-with-text` → `features-grid` → `recent-architecture-patterns` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion`
12. **`full-stack-development`** (ID: 30, 11 sections):
    - Blocks: `service-hero-video` → `industry-brands` → `two-col-image-with-text` → `agency-services` → `tech-keyword` → `technologies-grid` → `two-col-image-with-text` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion`

---

### 7.2 Sub-Phase 6B: White-Label Agency Services (3 Pages, 33 Sections) — READY FOR SEEDING

#### 1. Page: `white-label-shopify-development-services` (12 Sections)
- **Source File**: `src/content/white-label-shopify-development.ts`
- **Page Component**: `src/lib/registry/pages/white-label-shopify-page.tsx`
- **Metadata**: `pageMetadata.whiteLabelShopifyDevelopmentServices`
- **Sections Sequence**:
  1. `service-hero-video`: `whiteLabelShopifyHero` (`title`, `description`, `ctaText`, `ctaHref`, `badges`, `rating`, `reviewCount`, `platform`, `videoSrc`, `titleAccentTag: "i"`)
  2. `white-label-counter`: `counters: whiteLabelShopifyCounters` (`items: [{ value, label, description }]`)
  3. `shopify-support-scenarios`: `content: whiteLabelShopifyScenarios` (`heading`, `eyebrow`, `scenarios: [{ title, description, features }]`)
  4. `portfolio-showcase`: `content: whiteLabelShopifyPortfolio` (`heading`, `eyebrow`, `description: toStr(whiteLabelShopifyPortfolio.description)`, `items`, `columns: 4`, `variant: "liveGrid"`)
  5. `pricing-models`: `models: (whiteLabelShopifyPricing.models || whiteLabelShopifyPricing.items || []).map(...)`
  6. `delivery-model-comparison`: `content: whiteLabelShopifyDeliveryComparison` (`heading`, `eyebrow`, `models: [{ name, badge, description, features }]`)
  7. `shopify-team-behind-it`: `content: whiteLabelShopifyBrandProtection` (`heading`, `eyebrow`, `description: toStr(whiteLabelShopifyBrandProtection.description)`, `features: [...]`)
  8. `white-label-tools`: `ariaLabel: "Shopify technologies and tools"`, rows of tools
  9. `how-agencies-use`: `heading`, `eyebrow`, `useCases`
  10. `white-label-why`: `eyebrow: whiteLabelShopifySectionCopy.processEyebrow`, `title: whiteLabelShopifySectionCopy.processTitle`, `reasons: whiteLabelShopifyPartnershipSteps`
  11. `happy-clients`: `eyebrow: whiteLabelShopifySectionCopy.testimonialsEyebrow`, video testimonials
  12. `faq-accordion`: `heading: whiteLabelShopifySectionCopy.faqTitle`, `description: whiteLabelShopifySectionCopy.faqDescription`, `items: whiteLabelShopifyFaqs`

#### 2. Page: `white-label-wordpress-development-services` (9 Sections)
- **Source File**: `src/content/white-label-wordpress-development.ts`
- **Page Component**: `src/lib/registry/pages/white-label-wordpress-page.tsx`
- **Metadata**: `pageMetadata.whiteLabelWordPressDevelopmentServices`
- **Sections Sequence**:
  1. `city-page-hero`: `content: whiteLabelWordPressHero`
  2. `white-label-stats`: `stats: whiteLabelWordPressStats`, `variant: "minimal"`
  3. `white-label-why`: `title: whiteLabelWordPressSectionCopy.reasonsTitle`, `reasons: whiteLabelWordPressReasons`
  4. `white-label-services`: `title: whiteLabelWordPressSectionCopy.servicesTitle`, `ctaLabel: whiteLabelWordPressSectionCopy.servicesCta`, `services: whiteLabelWordPressServices`
  5. `pricing-models`: `content: whiteLabelWordPressPricing` (`models: (whiteLabelWordPressPricing.models || whiteLabelWordPressPricing.items || []).map(...)`)
  6. `white-label-tools`: `title: whiteLabelWordPressSectionCopy.toolsTitle`, `description: whiteLabelWordPressSectionCopy.toolsDescription`, `rows: whiteLabelWordPressToolRows`
  7. `white-label-process`: `title: whiteLabelWordPressSectionCopy.processTitle`, `note: whiteLabelWordPressSectionCopy.processNote`, `steps: whiteLabelWordPressProcess`
  8. `faq-accordion`: `heading: whiteLabelWordPressSectionCopy.faqHeading`, `items: whiteLabelWordPressFaqs`
  9. `white-label-final-cta`: `cta: whiteLabelWordPressFinalCta`, `variant: "certifiedDevelopers"`

#### 3. Page: `white-label-website-design-services` (11 Sections)
- **Source File**: `src/content/white-label-website-design.ts`
- **Page Component**: `src/lib/registry/pages/white-label-website-design-page.tsx`
- **Metadata**: `pageMetadata.whiteLabelWebsiteDesignServices`
- **Sections Sequence**:
  1. `city-page-hero`: `content: whiteLabelWebsiteDesignHero`
  2. `white-label-counter`: `counters: whiteLabelWebsiteDesignCounters`
  3. `design-reasons-accordion` (or `theme-why-choose`): `title: whiteLabelWebsiteDesignWhyCopy.title`, `description: whiteLabelWebsiteDesignWhyCopy.description`, `items: whiteLabelWebsiteDesignReasons`
  4. `theme-customization-services`: `eyebrow: whiteLabelWebsiteDesignBenefitsContent.eyebrow`, `heading: whiteLabelWebsiteDesignBenefitsContent.heading`, `description: whiteLabelWebsiteDesignBenefitsContent.description`, `boxes: whiteLabelWebsiteDesignBenefitsContent.boxes`, `variant: "green"`
  5. `shopify-stage-services`: `content: whiteLabelWebsiteDesignAiEnginesContent`
  6. `shopify-team-boxes`: `content: whiteLabelWebsiteDesignAiDiscoveryContent`
  7. `process-timeline`: `content: whiteLabelWebsiteDesignProcessContent`
  8. `theme-customization-services`: `eyebrow: whiteLabelWebsiteDesignAdvantagesContent.eyebrow`, `heading: whiteLabelWebsiteDesignAdvantagesContent.heading`, `description: whiteLabelWebsiteDesignAdvantagesContent.description`, `boxes: whiteLabelWebsiteDesignAdvantagesContent.boxes`, `variant: "transparent"`
  9. `white-label-services`: `eyebrow: whiteLabelWebsiteDesignServicesContent.eyebrow`, `title: whiteLabelWebsiteDesignServicesContent.title`, `description: whiteLabelWebsiteDesignServicesContent.description`, `services: whiteLabelWebsiteDesignServices`
  10. `happy-clients`: `eyebrow: "Client Stories"`, video testimonials
  11. `faq-accordion`: `heading: whiteLabelWebsiteDesignFaqCopy.heading`, `description: whiteLabelWebsiteDesignFaqCopy.description`, `items: whiteLabelWebsiteDesignFaqs`

---

### 7.3 Sub-Phase 6C: Platform Migration & Upgrade Services (15 Pages, 126 Sections)

#### Group 1: Bespoke Core Migration & Upgrade Pages (5 Pages)
1. **`shopify-migration`** (10 sections):
   - Source: `src/content/shopify-migration.ts`
   - Component: `src/lib/registry/pages/shopify-migration-page.tsx`
   - Blocks: `service-hero-video` → `industry-brands` → `shopify-migration-services` → `shopify-migration-numbered-grid` → `seo-safe-migration` → `why-choose-shopify-migration` → `portfolio-showcase` → `happy-clients` → `services-case-studies` → `faq-accordion`
2. **`shopify-plus-migration-agency`** (11 sections):
   - Source: `src/content/shopify-plus-migration-agency.ts`
   - Component: `src/lib/registry/pages/shopify-plus-migration-agency-page.tsx`
   - Blocks: `service-hero-video` → `industry-brands` → `shopify-migration-services` → `shopify-migration-numbered-grid` → `seo-safe-migration` → `evaluation-framework` → `why-choose-shopify-migration` → `pricing-models` → `happy-clients` → `services-case-studies` → `faq-accordion`
3. **`magento-to-shopify-plus-migration`** (8 sections):
   - Source: `src/content/magento-to-shopify-plus-migration.ts`
   - Component: `src/lib/registry/pages/magento-to-shopify-plus-migration-page.tsx`
   - Blocks: `service-hero-video` → `industry-brands` → `theme-customization-services` → `city-why-choose-boxes` → `evaluation-framework` → `happy-clients` → `faq-accordion` → `cta-banner`
4. **`migrating-a-theme-to-online-store-2-0`** (7 sections):
   - Source: `src/content/migrating-a-theme-to-online-store-2-0.ts`
   - Component: `src/lib/registry/pages/migrating-theme-to-online-store-2-0-page.tsx`
   - Blocks: `service-hero-video` → `industry-brands` → `theme-customization-services` → `evaluation-framework` → `happy-clients` → `faq-accordion` → `cta-banner`
5. **`upgrade-to-shopify-plus`** (9 sections):
   - Source: `src/content/upgrade-to-shopify-plus.ts`
   - Component: `src/lib/registry/pages/upgrade-to-shopify-plus-page.tsx`
   - Blocks: `service-hero-video` → `white-label-counter` → `brand-partners` → `city-page-counter` → `shopify-team-behind-it` → `portfolio-showcase` → `process-timeline` → `city-why-choose-boxes` → `faq-accordion`

#### Group 2: Platform-to-Shopify Migration Landing Pages (10 Pages, 9 Sections Each)
- **Template**: `ShopifyMigrationLandingTemplate` from `src/lib/registry/templates.tsx`
- **Slugs & Sources**:
  1. `bigcommerce-to-shopify-migration` (`src/content/bigcommerce-to-shopify-migration.ts`)
  2. `ecwid-to-shopify-migration` (`src/content/ecwid-to-shopify-migration.ts`)
  3. `etsy-to-shopify-migration` (`src/content/etsy-to-shopify-migration.ts`)
  4. `magento-to-shopify-migration` (`src/content/magento-to-shopify-migration.ts`)
  5. `prestashop-to-shopify-migration` (`src/content/prestashop-to-shopify-migration.ts`)
  6. `salesforce-to-shopify-migration` (`src/content/salesforce-to-shopify-migration.ts`)
  7. `square-to-shopify-migration` (`src/content/square-to-shopify-migration.ts`)
  8. `squarespace-to-shopify-migration` (`src/content/squarespace-to-shopify-migration.ts`)
  9. `wix-to-shopify-migration` (`src/content/wix-to-shopify-migration.ts`)
  10. `woocommerce-to-shopify-migration` (`src/content/woocommerce-to-shopify-migration.ts`)
- **Block Sequence per Page**:
  1. `service-hero-video`: `hero: content.hero`
  2. `brand-partners`: `heading: content.brands.heading`, `items: content.brands.items`
  3. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "green"`): `whyMigrate: { eyebrow, heading, description, boxes }`
  4. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "yellow"`, optional): `secondaryServices: { eyebrow, heading, description, boxes }`
  5. `migration-process`: `content: content.process`
  6. `evaluation-framework`: `content: content.whyChoose` (if present)
  7. `happy-clients`: `items: content.testimonials.items` (if present)
  8. `faq-accordion`: `heading: content.faq.heading`, `items: content.faq.items`

---

### 7.4 Sub-Phase 6D: Dedicated Hiring & Developer Services (2 Pages, 21 Sections)

#### 1. Page: `hire-shopify-developers` (12 Sections)
- **Source File**: `src/content/hire-shopify-developers.ts`
- **Page Component**: `src/lib/registry/pages/hire-shopify-developers-page.tsx`
- **Metadata**: `pageMetadata.hireShopifyDevelopers`
- **Sections Sequence**:
  1. `service-hero-video`: `content: hireShopifyContent.hero`
  2. `industry-brands`: `content: hireShopifyContent.brands`, `items: hireShopifyContent.brands.items`
  3. `theme-customization-services`: `content: hireShopifyContent.whyChoose`, `variant: "yellow"`
  4. `process-timeline`: `content: hireShopifyContent.process`
  5. `why-choose-shopify-migration`: `content: hireShopifyContent.whyHireExperts`
  6. `shopify-stage-services`: `content: hireShopifyContent.capabilities`, `lastColFull: true`
  7. `theme-customization-services`: `content: hireShopifyContent.advantages`, `variant: "green"`
  8. `ai-empowered-delivery`: `content: hireShopifyContent.aiTools`
  9. `portfolio-showcase`: `content: hireShopifyContent.work`, `columns: 4`, `variant: "liveGrid"`
  10. `pricing-models`: `models: (hireShopifyContent.pricing.models || hireShopifyContent.pricing.items || []).map(...)`
  11. `happy-clients`: `content: hireShopifyContent.testimonials`
  12. `faq-accordion`: `heading: hireShopifyContent.faqs.heading`, `items: hireShopifyContent.faqs.items`

#### 2. Page: `hire-wordpress-developers` (9 Sections)
- **Source File**: `src/content/hire-wordpress-developers.ts`
- **Page Component**: `src/lib/registry/pages/hire-wordpress-developers-page.tsx`
- **Metadata**: `pageMetadata.hireWordPressDevelopers`
- **Sections Sequence**:
  1. `city-page-hero`: `content: hireWordPressHero`
  2. `white-label-counter`: `counters: hireWordPressCounters`
  3. `theme-customization-services`: `content: hireWordPressWhyChoose`, `variant: "yellow"`
  4. `theme-customization-services`: `content: hireWordPressBenefits`, `variant: "green"`
  5. `process-timeline`: `content: hireWordPressProcess`
  6. `pricing-models`: `models: (hireWordPressPricing.models || hireWordPressPricing.items || []).map(...)`
  7. `portfolio-showcase`: `content: hireWordPressPortfolio`, `columns: 4`, `variant: "liveGrid"`
  8. `happy-clients`: `content: hireWordPressTestimonials`
  9. `faq-accordion`: `heading: hireWordPressFaqs.heading`, `items: hireWordPressFaqs`

---

### 7.5 Sub-Phase 6E: Mobile Application Development Services (6 Pages, 49 Sections)

#### Group 1: Core Mobile App Pages (2 Pages)
1. **`shopify-mobile-app-development`** (10 sections):
   - Source: `src/content/shopify-mobile-app-development.ts`
   - Component: `src/lib/registry/pages/shopify-mobile-app-development-page.tsx`
   - Blocks: `shopify-mobile-app-hero` → `white-label-counter` → `shopify-mobile-app-dtc` → `shopify-mobile-app-work` → `shopify-mobile-app-comparison` → `shopify-mobile-app-experience` → `services-case-studies` → `white-label-process` → `faq-accordion` → `cta-banner`
2. **`appmaker-shopify-mobile-app-development`** (7 sections):
   - Source: `src/content/appmaker-shopify-mobile-app-development.ts`
   - Component: `src/lib/registry/pages/appmaker-shopify-mobile-app-page.tsx`
   - Blocks: `hero` (variant: centered) → `industry-brands` → `shopify-app-benefits` → `shopify-app-features` → `shopify-app-process` → `faq-accordion` → `cta-banner`

#### Group 2: Native & Cross-Platform App Landings (4 Pages, 8 Sections Each)
- **Template**: `MobileAppLandingTemplate` from `src/lib/registry/templates.tsx`
- **Slugs & Sources**:
  1. `android-app-development` (`src/content/android-app-development.ts`)
  2. `cross-platform-app-development` (`src/content/cross-platform-app-development.ts`)
  3. `ios-app-development` (`src/content/ios-app-development.ts`)
  4. `mobile-application-development` (`src/content/mobile-application-development.ts`)
- **Block Sequence per Page**:
  1. `shopify-mobile-app-hero`: `content: hero`
  2. `brand-partners`: `heading: brands.heading`, `items: brands.items`
  3. `ai-empowered-delivery`: `content: workflowDelivery`
  4. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "yellow"`): `content: whatWeBuild`
  5. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "green"`): `content: lifecycleServices`
  6. `ai-empowered-delivery`: `content: techStack`
  7. `shopify-migration-numbered-grid` (or `process-timeline`): `content: process`
  8. `portfolio-showcase`: `content: portfolio`
  9. `pricing-models`: `content: pricing`
  10. `why-choose-shopify-migration`: `content: whyChoose`
  11. `happy-clients`: `items: testimonials.items` (if present)
  12. `faq-accordion`: `heading: faq.heading`, `items: faq.items`

---

### 7.6 Sub-Phase 6F: Industry-Specific Commerce Verticals (10 Pages, 74 Sections)

#### Group 1: Bespoke Industry Core Services (2 Pages)
1. **`food-beverage-shopify-plus-agency`** (9 sections):
   - Source: `src/content/food-beverage-shopify-plus-agency.ts`
   - Component: `src/lib/registry/pages/food-beverage-shopify-plus-agency-page.tsx`
   - Blocks: `service-hero-video` → `industry-brands` → `two-col-image-with-text` → `features-grid` → `shopify-stage-services` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
2. **`dental-clinic-website-development-company`** (9 sections):
   - Source: `src/content/dental-clinic-website-development-company.ts`
   - Component: `src/lib/registry/pages/dental-clinic-website-development-company-page.tsx`
   - Blocks: `service-hero-video` → `industry-brands` → `agency-services` → `features-grid` → `process-timeline` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`

#### Group 2: Industry Commerce Verticals (8 Pages, 7 Sections Each)
- **Template**: `IndustryLandingTemplate` from `src/lib/registry/templates.tsx`
- **Slugs & Sources**:
  1. `beauty-cosmetics` (`src/content/beauty-cosmetics.ts`)
  2. `fashion` (`src/content/fashion.ts`)
  3. `food-beverages` (`src/content/food-beverages.ts`)
  4. `health-nutrition` (`src/content/health-nutrition.ts`)
  5. `home-living` (`src/content/home-living.ts`)
  6. `jewellery-accessories` (`src/content/jewellery-accessories.ts`)
  7. `pet-industry` (`src/content/pet-industry.ts`)
  8. `sports-outdoors` (`src/content/sports-outdoors.ts`)
- **Block Sequence per Page**:
  1. `service-hero-video`: `content: hero`
  2. `brand-partners`: `heading: brands.heading`, `items: brands.items`
  3. `services-case-studies` (optional): `items: caseStudies.items`
  4. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "yellow"`): `content: challenges`
  5. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "green"`): `content: solutions`
  6. `migration-process`: `content: process`
  7. `white-label-tools` (optional): `tools: tools.tools`
  8. `two-col-image-with-text`: `content: customDev`
  9. `portfolio-showcase`: `content: portfolio`
  10. `why-choose-shopify-migration`: `content: whyChoose`
  11. `happy-clients` (optional): `items: testimonials.items`
  12. `faq-accordion`: `heading: faq.heading`, `items: faq.items`

---

### 7.7 Sub-Phase 6G: Other CMS, Frameworks & Tech Services (10 Pages, 84 Sections)

#### Group 1: WordPress Core Services & Theme Hub (4 Pages)
1. **`wordpress-development`** (7 sections):
   - Source: `src/content/wordpress-development.ts`
   - Component: `src/lib/registry/pages/wordpress-development-page.tsx`
   - Blocks: `city-page-hero` → `agency-services` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
2. **`wordpress-development-company`** (10 sections):
   - Source: `src/content/wordpress-development-company.ts`
   - Component: `src/lib/registry/pages/wordpress-development-company-page.tsx`
   - Blocks: `city-page-hero` → `industry-brands` → `agency-services` → `theme-customization-services` → `process-timeline` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
3. **`woocommerce-development`** (7 sections):
   - Source: `src/content/woocommerce-development.ts`
   - Component: `src/lib/registry/pages/woocommerce-development-page.tsx`
   - Blocks: `city-page-hero` → `industry-brands` → `agency-services` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
4. **`wordpress-theme-customization-services`** (12 sections):
   - Source: `src/content/wordpress-theme-customization.ts`
   - Component: `src/lib/registry/pages/wordpress-theme-customization-page.tsx`
   - Blocks: `city-page-hero` → `industry-brands` → `theme-customization-services` → `shopify-team-boxes` → `process-timeline` → `shopify-themes-grid` → `evaluation-framework` → `portfolio-showcase` → `happy-clients` → `faq-accordion`

#### Group 2: Other Platforms, Frameworks & Special Tech (6 Pages)
5. **`magento-development`** (10 sections):
   - Source: `src/content/magento-development.ts`
   - Blocks: `city-page-hero` → `industry-brands` → `agency-services` → `evaluation-framework` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
6. **`bigcommerce-development`** (9 sections):
   - Source: `src/content/bigcommerce-development.ts`
   - Blocks: `city-page-hero` → `industry-brands` → `agency-services` → `evaluation-framework` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
7. **`webflow-development`** (9 sections):
   - Source: `src/content/webflow-development.ts`
   - Blocks: `city-page-hero` → `industry-brands` → `shopify-stage-services` → `theme-customization-services` → `portfolio-showcase` → `city-page-counter` → `happy-clients` → `faq-accordion` → `cta-banner`
8. **`php-development`** (8 sections):
   - Source: `src/content/php-development.ts`
   - Blocks: `service-hero-video` → `industry-brands` → `evaluation-framework` → `agency-services` → `process-timeline` → `portfolio-showcase` → `happy-clients` → `faq-accordion`
9. **`web-design`** (7 sections):
   - Source: `src/content/web-design.ts`
   - Blocks: `city-page-hero` → `industry-brands` → `agency-services` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion`
10. **`seo-services`** (9 sections):
    - Source: `src/content/seo-services.ts`
    - Blocks: `hero` → `pill-list` → `agency-services` → `shopify-reasons` → `shopify-theme-tech` → `theme-why-choose` → `industries-grid` → `faq-accordion` → `lets-build`

---

### 7.8 Sub-Phase 6H: Shopify Theme Customization Sub-Pages (32 Pages, 288 Sections)

- **Template**: `ShopifyThemeCustomizationTemplate` from `src/lib/registry/templates.tsx`
- **Total Pages**: 32
- **Standard Block Structure per Page (9 Blocks)**:
  1. `hero` (`variant: "theme"`): `content: content.hero`
  2. `brand-partners`: `heading: content.brands.title`, `items: content.brands.items`
  3. `shopify-theme-tech`: `content: content.features`
  4. `theme-why-choose` (`columns: 3`, `theme: "warm"`, `eyebrowVariant: "dash"`): `content: content.benefits`
  5. `agency-services` (`cardVariant: "services-box"`, `columns: 2`): `content: content.services`
  6. `evaluation-framework` (`variant: "evaluation"`): `content: content.whyChoose`
  7. `portfolio-showcase` (if `content.portfolio` exists): `content: content.portfolio`, `columns: 4`
  8. `faq-accordion`: `heading: content.faqsHeading`, `items: content.faqs`
  9. `cta-banner`: `heading: sharedUiCopy.ctaBanner.heading`, `label: sharedUiCopy.ctaBanner.label`

- **The 32 Slugs & Respective Source Content Files**:
  1. `atelier-theme-customization` (`src/content/atelier-theme-customization.ts`)
  2. `be-yours-theme-customization` (`src/content/be-yours-theme-customization.ts`)
  3. `broadcast-theme-customization` (`src/content/broadcast-theme-customization.ts`)
  4. `colorblock-theme-customization` (`src/content/colorblock-theme-customization.ts`)
  5. `craft-theme-customization` (`src/content/craft-theme-customization.ts`)
  6. `dawn-theme-customization` (`src/content/dawn-theme-customization.ts`)
  7. `dwell-theme-customization` (`src/content/dwell-theme-customization.ts`)
  8. `expanse-theme-customization` (`src/content/expanse-theme-customization.ts`)
  9. `fabric-theme-customization` (`src/content/fabric-theme-customization.ts`)
  10. `heritage-theme-customization` (`src/content/heritage-theme-customization.ts`)
  11. `horizon-theme-customization` (`src/content/horizon-theme-customization.ts`)
  12. `impact-theme-customization` (`src/content/impact-theme-customization.ts`)
  13. `impulse-theme-customization` (`src/content/impulse-theme-customization.ts`)
  14. `origin-theme-customization` (`src/content/origin-theme-customization.ts`)
  15. `pipeline-theme-customization` (`src/content/pipeline-theme-customization.ts`)
  16. `pitch-theme-customization` (`src/content/pitch-theme-customization.ts`)
  17. `prestige-theme-customization` (`src/content/prestige-theme-customization.ts`)
  18. `publisher-theme-customization` (`src/content/publisher-theme-customization.ts`)
  19. `refresh-theme-customization` (`src/content/refresh-theme-customization.ts`)
  20. `ritual-theme-customization` (`src/content/ritual-theme-customization.ts`)
  21. `savor-theme-customization` (`src/content/savor-theme-customization.ts`)
  22. `sense-theme-customization` (`src/content/sense-theme-customization.ts`)
  23. `spotlight-theme-customization` (`src/content/spotlight-theme-customization.ts`)
  24. `startup-theme-customization` (`src/content/startup-theme-customization.ts`)
  25. `stiletto-theme-customization` (`src/content/stiletto-theme-customization.ts`)
  26. `studio-theme-customization` (`src/content/studio-theme-customization.ts`)
  27. `tinker-theme-customization` (`src/content/tinker-theme-customization.ts`)
  28. `trade-theme-customization` (`src/content/trade-theme-customization.ts`)
  29. `vessel-theme-customization` (`src/content/vessel-theme-customization.ts`)
  30. `vision-theme-customization` (`src/content/vision-theme-customization.ts`)
  31. `warehouse-theme-customization` (`src/content/warehouse-theme-customization.ts`)
  32. `woodstock-theme-customization` (`src/content/woodstock-theme-customization.ts`)

---

### 7.9 Sub-Phase 6I: WordPress Theme Customization Sub-Pages (17 Pages, 136 Sections)

- **Template**: `WordPressThemeCustomizationTemplate` from `src/lib/registry/templates.tsx`
- **Total Pages**: 17
- **Standard Block Structure per Page (8 Blocks)**:
  1. `hero` (`variant: "theme"`): `content: content.hero`
  2. `brand-partners`: `heading: content.brands.heading`, `items: content.brands.items`
  3. `theme-why-choose` (`variant: "themeWhyChoose"`): `features: content.features`
  4. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: benefitsVariant`): `benefits: content.benefits`
  5. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "yellow"`): `services: content.services`
  6. `evaluation-framework` (`variant: "evaluation"`): `whyChoose: content.whyChoose`
  7. `portfolio-showcase`: `portfolio: content.portfolio`, `columns: 4`
  8. `faq-accordion`: `heading: content.faqsHeading || "Frequently Asked Questions"`, `items: content.faqs`

- **The 17 Slugs & Respective Source Content Files**:
  1. `astra-theme-customization` (`src/content/astra-theme-customization.ts`)
  2. `blocksy-theme-customization` (`src/content/blocksy-theme-customization.ts`)
  3. `bloghash-theme-customization` (`src/content/bloghash-theme-customization.ts`)
  4. `extendable-theme-customization` (`src/content/extendable-theme-customization.ts`)
  5. `generatepress-theme-customization` (`src/content/generatepress-theme-customization.ts`)
  6. `go-theme-customization` (`src/content/go-theme-customization.ts`)
  7. `hello-biz-theme-customization` (`src/content/hello-biz-theme-customization.ts`)
  8. `hello-elementor-theme-customization` (`src/content/hello-elementor-theme-customization.ts`)
  9. `inspiro-theme-customization` (`src/content/inspiro-theme-customization.ts`)
  10. `kadence-theme-customization` (`src/content/kadence-theme-customization.ts`)
  11. `kubio-theme-customization` (`src/content/kubio-theme-customization.ts`)
  12. `neve-theme-customization` (`src/content/neve-theme-customization.ts`)
  13. `newsblogger-theme-customization` (`src/content/newsblogger-theme-customization.ts`)
  14. `oceanwp-theme-customization` (`src/content/oceanwp-theme-customization.ts`)
  15. `popularfx-theme-customization` (`src/content/popularfx-theme-customization.ts`)
  16. `royal-elementor-kit-theme-customization` (`src/content/royal-elementor-kit-theme-customization.ts`)
  17. `yith-wonder-theme-customization` (`src/content/yith-wonder-theme-customization.ts`)

---

### 7.10 Sub-Phase 6J: City & Geo-Targeted Landing Pages (17 Pages, 153 Sections)

#### Group 1: Shopify City Landing Pages (11 Pages, 9 Sections Each)
- **Template**: `ShopifyCityLandingTemplate` from `src/lib/registry/templates.tsx`
- **Slugs & Content Sources**:
  1. `shopify-development-company-in-chennai` (`src/content/shopify-development-company-in-chennai.ts`)
  2. `shopify-development-in-bangalore` (`src/content/shopify-development-in-bangalore.ts`)
  3. `shopify-development-in-barcelona-spain` (`src/content/shopify-development-in-barcelona-spain.ts`)
  4. `shopify-development-in-delhi` (`src/content/shopify-development-in-delhi.ts`)
  5. `shopify-development-in-hyderabad` (`src/content/shopify-development-in-hyderabad.ts`)
  6. `shopify-development-in-los-angeles` (`src/content/shopify-development-in-los-angeles.ts`)
  7. `shopify-development-in-miami` (`src/content/shopify-development-in-miami.ts`)
  8. `shopify-development-in-mumbai` (`src/content/shopify-development-in-mumbai.ts`)
  9. `shopify-development-in-new-york` (`src/content/shopify-development-in-new-york.ts`)
  10. `shopify-development-in-pune` (`src/content/shopify-development-in-pune.ts`)
  11. `shopify-development-in-texas` (`src/content/shopify-development-in-texas.ts`)
- **Block Sequence per Page**:
  1. `city-page-hero`: `content: content.hero`
  2. `brand-partners`: `heading: content.brands.title`, `items: content.brands.items`
  3. `city-page-counter`: `content: content.counter`
  4. `city-why-choose-boxes`: `boxes: (content.whyChoose.boxes || content.whyChoose.items || []).map(...)`
  5. `agency-services`: `content: content.services` (if present)
  6. `process-timeline`: `content: content.process` (if present)
  7. `portfolio-showcase`: `content: content.portfolio`, `columns: 4`
  8. `testimonials-carousel`: `items: content.testimonials.items`
  9. `faq-accordion`: `heading: content.sectionCopy?.faqHeading`, `items: content.faqs`
  10. `cta-banner`: `content: content.ctaBanner`

#### Group 2: WordPress City Landing Pages (6 Pages, 9 Sections Each)
- **Template**: `WordPressCityLandingTemplate` from `src/lib/registry/templates.tsx`
- **Slugs & Content Sources**:
  1. `wordpress-development-in-ahmedabad` (`src/content/wordpress-development-in-ahmedabad.ts`)
  2. `wordpress-development-in-bangalore` (`src/content/wordpress-development-in-bangalore.ts`)
  3. `wordpress-development-in-delhi` (`src/content/wordpress-development-in-delhi.ts`)
  4. `wordpress-development-in-mumbai` (`src/content/wordpress-development-in-mumbai.ts`)
  5. `wordpress-development-in-noida` (`src/content/wordpress-development-in-noida.ts`)
  6. `wordpress-development-in-pune` (`src/content/wordpress-development-in-pune.ts`)
- **Block Sequence per Page**:
  1. `city-page-hero`: `content: content.hero`
  2. `brand-partners`: `heading: content.brands.title || content.brands.heading`, `items: content.brands.items`
  3. `city-page-counter`: `content: content.counter`
  4. `process-timeline`: `content: content.process`
  5. `theme-why-choose` (`columns: 3`, `theme: "white"`): `content: content.whyDynamicDreamz`
  6. `portfolio-showcase`: `content: content.portfolio`, `columns: 4`
  7. `testimonials-carousel`: `items: content.testimonials.items`
  8. `faq-accordion`: `heading: content.sectionCopy?.faqHeading`, `items: content.faqs`
  9. `cta-banner`: `content: content.ctaBanner`

---

### 7.11 Sub-Phase 6K: Company, Legal, Portfolio & Thank-You Pages (16 Pages, 76 Sections)

#### Group 1: Core Company & Brand Pages (10 Pages)
1. **`home`** (10 sections):
   - Source: `src/content/home.ts`
   - Component: `src/lib/registry/pages/home-page.tsx`
   - Blocks: `hero` (home) → `brand-partners` → `shopify-plus-agency-overview` → `white-label-partner-banner` → `commerce-solutions` → `selected-work-marquee` → `testimonials-carousel` → `integrations-partners` → `latest-insights` → `home-faq`
2. **`about-us`** (7 sections):
   - Source: `src/content/about.ts`
   - Component: `src/lib/registry/pages/about-page.tsx`
   - Blocks: `about-hero` → `about-story` → `about-timeline` → `about-founders` → `about-team` → `about-values` → `cta-banner`
3. **`contact-us`** (5 sections):
   - Source: `src/content/contact.ts`
   - Component: `src/lib/registry/pages/contact-page.tsx`
   - Blocks: `contact-hero` → `contact-form` → `contact-offices` → `contact-details` → `faq-accordion`
4. **`career`** (4 sections):
   - Source: `src/content/career.ts`
   - Component: `src/lib/registry/pages/career-page.tsx`
   - Blocks: `career-hero` → `career-opportunities` → `career-perks` → `culture-bento-gallery`
5. **`career-apply-now`** (1 section):
   - Source: `src/content/career-apply-now.ts`
   - Component: `src/lib/registry/pages/career-apply-now.tsx`
   - Blocks: `career-apply`
6. **`life-dynamicdreamz`** (5 sections):
   - Source: `src/content/life-dynamicdreamz.ts`
   - Component: `src/lib/registry/pages/life-dynamicdreamz-page.tsx`
   - Blocks: `life-hero` → `work-culture` → `life-hiring` → `faq-accordion` → `life-gallery`
7. **`our-work`** (4 sections):
   - Source: `src/content/our-work.ts`
   - Component: `src/lib/registry/pages/our-work-page.tsx`
   - Blocks: `our-work-hero` → `industry-brands` → `our-work-projects` → `our-work-case-studies`
8. **`request-quote`** (3 sections):
   - Source: `src/content/request-quote.ts`
   - Blocks: `request-quote-hero` → `brand-partners` → `testimonials-carousel`
9. **`book-a-discovery-call`** (3 sections):
   - Source: `src/content/book-a-discovery-call.ts`
   - Blocks: `discovery-call` → `proof-counters` → `testimonials-carousel`
10. **`resources`** (7 sections):
    - Source: `src/content/resources.ts`
    - Component: `src/lib/registry/pages/resources-page.tsx`
    - Blocks: `resources-hero` → `resources-hub` → `resources-blog` → `resources-story` → `resources-brand-strip` → `resources-trust` → `cta-banner`

#### Group 2: Legal & Directory Pages (3 Pages)
11. **`site-map`** (1 section):
    - Source: `src/content/site-map.ts`
    - Blocks: `sitemap-directory`
12. **`privacy-policy`** (1 section):
    - Source: `src/content/privacy-policy.ts`
    - Blocks: `legal-content` (`content: privacyPolicyContent`)
13. **`terms-of-service`** (1 section):
    - Source: `src/content/terms-of-service.ts`
    - Blocks: `legal-content` (`content: termsOfServiceContent`)

#### Group 3: Form Confirmation / Thank-You Pages (3 Pages)
- **Template**: `src/lib/registry/thank-you.tsx`
- **Block**: `thank-you-confirmation`
14. **`thank-you-for-applying`** (`src/content/thank-you-for-applying.ts`)
15. **`thank-you-for-enquiry`** (`src/content/thank-you-for-enquiry.ts`)
16. **`thank-you-for-shopify-plus-enquiry`** (`src/content/thank-you-for-enquiry.ts`)

---

### 7.12 Universal Field Transformers, Schema Gotchas & Data Mapping Safeguards

When writing scratch seeders for any sub-phase, agents must adhere to these 10 verified schema guardrails:

1. **Pricing Models (`pricing-models` block)**:
   - Content often provides `.items` (array of pricing tiers), but Payload schema expects `models: [...]`.
   - **Guard**: `models: (pricing.models || pricing.items || []).map(...)`.
2. **Why Choose Boxes (`city-why-choose-boxes` block)**:
   - Content files declare `.items` (type `CityWhyChooseBoxItem[]`), while Payload expects `boxes: [...]`.
   - **Guard**: `boxes: (content.boxes || content.items || []).map(...)`.
3. **Array vs String Sanitization (`toStr` helper)**:
   - Many content files declare descriptions as `readonly string[]` (e.g. `teamBehindIt.description`, `portfolio.description`, `whyMigrate.description`).
   - Payload `type: "text"` or `type: "textarea"` throws validation errors if an array is supplied.
   - **Guard**:
     ```typescript
     function toStr(val: any): string {
       if (Array.isArray(val)) return val.join("\n\n");
       return typeof val === "string" ? val : "";
     }
     ```
4. **FAQ Rich Text vs Plain String**:
   - In some content modules, `faq.answer` is empty and answers are stored in `faq.answerParts` (array of formatted segments).
   - **Guard**: `answer: f.answer || (f.answerParts || []).map((p: any) => p.text).join("")`.
5. **AI Delivery Tools (`ai-empowered-delivery` block)**:
   - Payload schema strictly requires `name` (required) and `description` (required).
   - Content often supplies `category` or `benefit`.
   - **Guard**: `description: item.benefit || item.description || item.category || ""`.
6. **Theme Customization Approach (`theme-customization-approach` block)**:
   - Schema field name is `approaches: [...]` with `{ title, description, step }`. Do NOT map to `cards` or `steps`.
7. **Themes Grid (`shopify-themes-grid` block)**:
   - Schema expects `items: [...]` with `{ name, title, href, image, imageSrc, alt }`. Do NOT pass `themes: [...]`.
8. **Brand Partners Logo Fallbacks**:
   - Several pages declare only `{ slug, heading, ariaLabel }` without explicit brand item arrays.
   - **Guard**: Fall back to canonical `industryBrandLogos` from `src/content/industries` to avoid empty brand strips.
9. **Media ID Lookup vs Path Fallback**:
   - For every image or logo, query `mediaMap[assetPath]` or `mediaMap[path.basename(assetPath)]`. If found, store the relational ID `{ image: mediaId }`. Also provide the fallback string `imageSrc: assetPath` so local dual resolution works smoothly.
10. **Drizzle Table Collision Safeguards**:
    - `ServicesCaseStudiesBlock` uses `dbName: "svcs_items"` and `dbName: "svcs_tags"`.
    - `ShopifyCroServicesBlock` uses `dbName: "scros_items"` and `dbName: "scros_deliv"`.
    - `ShopifyStageServicesBlock` uses `dbName: "sstg_items"` and `dbName: "sstg_pills"`.

---

### 7.13 Step-by-Step Sub-Phase Seeding Playbook for Autonomous Agents

When an agent is assigned to execute any sub-phase (e.g. 6B, 6C, etc.), it must execute the following 5-step operational protocol:

```text
[Step 1: Check Database State]
       │ Query Payload Local API for current count and target page slugs in this sub-phase
       ▼
[Step 2: Generate Ephemeral Scratch Seeder]
       │ Write script to scratch/seed/seeders/06-seed-pages-6x.ts (Outside git tracking)
       ▼
[Step 3: Execute Scratch Seeder via tsx]
       │ Run: node --env-file-if-exists=.env --import tsx scratch/seed/seeders/06-seed-pages-6x.ts
       ▼
[Step 4: Verify Database Persistence & Sections Count]
       │ Query Payload Local API: verify doc.id, sections.length > 0, and non-empty blockTypes
       ▼
[Step 5: Discard Scratch Script & Run Quality Gates]
       │ Discard ephemeral script; run npm run check:urls, check:component-content, npm run lint
```

#### Verification Query Template
```typescript
import { getPayload } from "payload";
import configPromise from "../../payload.config";

async function verifySubPhase(targetSlugs: string[]) {
  const payload = await getPayload({ config: configPromise });
  for (const slug of targetSlugs) {
    const res = await payload.find({
      collection: "pages",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs.length === 0) {
      console.error(`❌ Missing page: ${slug}`);
    } else {
      const page = res.docs[0];
      console.log(`✅ Page [${slug}] (ID: ${page.id}) -> ${page.sections?.length || 0} sections`);
    }
  }
}
```

---

## 8. Neon PostgreSQL Concurrency & Connection Pool Safeguards

Bulk inserting 140 complex page documents (each with 8–12 blocks) into Neon PostgreSQL can trigger connection pool exhaustion or transaction timeout errors if executed via unconstrained `Promise.all`.

### Batch Runner Pattern (`scratch/seed/utils/batch-runner.ts`)
```typescript
export async function runInBatches<T, R>(
  items: T[],
  batchSize: number,
  task: (item: T, index: number) => Promise<R>
): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(items.length / batchSize)} (${batch.length} items)...`);
    const batchResults = await Promise.all(
      batch.map((item, idx) => task(item, i + idx))
    );
    results.push(...batchResults);
  }
  return results;
}
```

- **Batch Size**: 5 pages per batch for `06-seed-pages.ts`.
- **Sequential Phases**: Each phase (Media → Taxonomies → Globals → Case Studies → Posts → Pages) finishes completely and flushes its cache before the next phase begins.
- **Idempotent UPSERT Logic**: Every seeder searches for existing records by `slug` (or `filename` / `name` / `clientName`). If found, it updates the record; if not, it creates it. This allows the master seeder to resume seamlessly after any network interruption.

---

## 9. Master Scratch Seed Runner (`scratch/seed/run-seed.ts`)

```typescript
import 'dotenv/config';
import { getPayload } from 'payload';
import configPromise from '../../payload.config';
import { seedMedia } from './seeders/01-seed-media';
import { seedTaxonomies } from './seeders/02-seed-taxonomies';
import { seedGlobals } from './seeders/03-seed-globals';
import { seedCaseStudies } from './seeders/04-seed-case-studies';
import { seedBlogPosts } from './seeders/05-seed-posts';
import { seedPages } from './seeders/06-seed-pages';

async function runMasterSeed() {
  console.log('🚀 Starting Payload 3.x Local-to-CMS Migration Pipeline...\n');

  const payload = await getPayload({ config: configPromise });

  console.log('--- Phase 1/6: Seeding Canonical Media to Media Server & Payload ---');
  const mediaMap = await seedMedia(payload);

  console.log('\n--- Phase 2/6: Seeding Categories, Authors & Testimonials ---');
  const taxonomyMap = await seedTaxonomies(payload, mediaMap);

  console.log('\n--- Phase 3/6: Seeding Globals (Navigation & SiteSettings) ---');
  await seedGlobals(payload, mediaMap);

  console.log('\n--- Phase 4/6: Seeding 56 Case Studies from JSON ---');
  const caseStudyMap = await seedCaseStudies(payload, mediaMap, taxonomyMap);

  console.log('\n--- Phase 5/6: Seeding 124 Blog Posts from JSON ---');
  const postMap = await seedBlogPosts(payload, mediaMap, taxonomyMap);

  console.log('\n--- Phase 6/6: Seeding 140 Pages into Modular Sections ---');
  await seedPages(payload, {
    mediaMap,
    taxonomyMap,
    caseStudyMap,
    postMap,
  });

  console.log('\n✅ Seeding Complete! All local data successfully migrated to Neon PostgreSQL & Media Server.');
  process.exit(0);
}

runMasterSeed().catch((error) => {
  console.error('❌ Fatal Seeding Error:', error);
  process.exit(1);
});
```

---

## 10. Cutover & Dual-Resolution Safety Net

### Runtime Request Resolution Flow
When a user or search bot requests `/about-us` or `/shopify-plus-agency`:
```text
App Router: src/app/(frontend)/[[...slug]]/page.tsx
       │
       ▼
1. Query Payload CMS: getPayloadPageBySlug(pageSlug)
       │
       ├─► [Found in CMS with sections.length > 0]
       │       │
       │       ▼
       │   Render CMS Page via <RenderBlocks sections={pageSections} />
       │   (Primary Production Flow)
       │
       └─► [Not found in CMS / DB unreachable]
               │
               ▼
           Fall back to getServicePageEntry(pageSlug).render()
           (Resilient Zero-Downtime Safety Net)
```

1. **CMS-First Operation**: As soon as a page is populated in Payload CMS, `pageSections.length > 0` activates and renders `<RenderBlocks sections={pageSections} />`.
2. **Local Fallback Retained**: `src/lib/registry/**` and `src/content/**` are kept intact in the repository as an offline fallback and type boundary, ensuring zero downtime even if PostgreSQL or external network connections drop.
3. **Draft Preview Mode**: Live editing in Payload Admin `/admin` automatically updates `/api/draft` previews in real time without waiting for static revalidation.

---

## 11. Verification & Quality Gates

After executing the ephemeral scratch seeder, perform these mandatory verification checks:

1. **Zero Seeding Scripts in Repo**:
   - Verify `scripts/` contains only static quality checkers (`check-url-policy.mjs`, `check-component-content.mjs`, `check-blog-posts.mjs`, `check-case-studies.mjs`, `check-asset-duplicates.mjs`).
   - Verify `package.json` has zero seed commands.
   - Verify `scratch/seed/` is discarded or git-ignored.
2. **Media Server Audit**:
   - Query `payload.find({ collection: 'media', limit: 10 })`.
   - Confirm URLs resolve to `https://media.dynamicdreamz.net/files/uploads/...`.
3. **Database Document Counts**:
   - `pages` collection: **140** published documents with populated `sections` and `seo`.
   - `posts` collection: **124** published documents with `contentBeforeToc` and `content` blocks.
   - `case-studies` collection: **56** published documents.
   - `categories`, `authors`, `testimonials` fully populated.
   - `navigation` and `site-settings` globals fully populated.
4. **Automated Quality Checks**:
   ```bash
   npm run check:urls
   npm run check:component-content
   npm run check:blog-posts
   npm run check:case-studies
   npm run check:asset-duplicates
   npm run lint
   npm run build
   ```
   All 7 commands must pass with **0 errors and 0 warnings**.
5. **CMS-to-React Visual Parity Check**:
   - Compare CMS-rendered pages against local coded fallbacks across Desktop (1440px), Tablet (768px), and Mobile (390px).
   - Verify that all blocks render with identical Tailwind styling, animations (`data-aos`), and interactive states.