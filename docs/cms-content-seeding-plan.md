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

## 7. Phase 6: Pages Ingestion & Template Transformers (140 Pages)

In `06-seed-pages.ts`, all 140 pages are ingested into the `pages` collection.
Each page document requires:
- `title`: Page Title
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

### The 8 Canonical Template-to-Block Transformers

To translate the local TypeScript content files into Payload CMS `sections` arrays, the seeder uses 8 standardized transformer functions:

#### 1. Shopify City Landing Transformer (13 Pages)
- **Routes**: `/shopify-development-in-mumbai`, `/delhi`, `/bangalore`, `/hyderabad`, `/pune`, `/chennai`, `/new-york`, `/los-angeles`, `/miami`, `/texas`, `/barcelona-spain`, etc.
- **Local Source**: `src/content/shopify-development-in-*.ts`
- **Output Blocks in `sections`**:
  1. `city-page-hero`: `title`, `description`, `ctaText`, `ctaHref`, `rating`, `reviewCount`, `platform`, `videoSrc`
  2. `brand-partners`: `title`, `items` (linked logos via `mediaMap`)
  3. `city-page-counter`: `title`, `subtitle`, `statItems`
  4. `city-why-choose-boxes`: `title`, `subtitle`, `boxes`
  5. `pricing-models`: `title`, `subtitle`, `models`
  6. `case-studies-block`: `heading`, `eyebrow`, `studies` (related case study IDs)
  7. `testimonials-carousel`: `heading`, `eyebrow`, `testimonials` (related testimonial IDs)
  8. `faq-accordion`: `heading`, `items` (`{ question, answer }`)
  9. `cta-banner`: `heading`, `ctaLabel`, `ctaHref`

#### 2. WordPress City Landing Transformer (6 Pages)
- **Routes**: `/wordpress-development-in-mumbai`, `/delhi`, `/bangalore`, `/pune`, `/noida`, `/ahmedabad`
- **Local Source**: `src/content/wordpress-development-in-*.ts`
- **Output Blocks in `sections`**:
  `city-page-hero` → `brand-partners` → `city-page-counter` → `process-timeline` → `city-why-choose-boxes` → `agency-services` → `testimonials-carousel` → `faq-accordion` → `cta-banner`

#### 3. Shopify Theme Customization Transformer (23 Pages)
- **Routes**: `/dawn-theme-customization`, `/impulse-theme-customization`, `/prestige-theme-customization`, `/warehouse-theme-customization`, `/expanse-theme-customization`, `/pipeline-theme-customization`, `/craft-theme-customization`, `/sense-theme-customization`, `/spotlight-theme-customization`, `/studio-theme-customization`, `/colorblock-theme-customization`, `/refresh-theme-customization`, `/origin-theme-customization`, `/broadcast-theme-customization`, `/be-yours-theme-customization`, `/stiletto-theme-customization`, `/vision-theme-customization`, `/vessel-theme-customization`, `/savor-theme-customization`, `/trade-theme-customization`, `/atelier-theme-customization`, `/dwell-theme-customization`, `/fabric-theme-customization`
- **Local Source**: `src/content/*-theme-customization.ts`
- **Output Blocks in `sections`**:
  1. `hero` (variant: split): `title`, `subtitle`, `description`, `ctaText`, `ctaHref`, `badges`
  2. `brand-partners`: `title`, `items`
  3. `shopify-themes-grid`: `heading`, `eyebrow`, `themes`
  4. `theme-customization-services`: `heading`, `eyebrow`, `services`
  5. `theme-customization-approach`: `heading`, `eyebrow`, `steps`
  6. `theme-why-choose`: `heading`, `eyebrow`, `reasons`
  7. `portfolio-showcase`: `heading`, `eyebrow`, `projects`
  8. `faq-accordion`: `heading`, `items`
  9. `cta-banner`: `heading`, `ctaLabel`, `ctaHref`

#### 4. WordPress Theme Customization Transformer (20 Pages)
- **Routes**: `/astra-theme-customization`, `/generatepress-theme-customization`, `/kadence-theme-customization`, `/oceanwp-theme-customization`, `/neve-theme-customization`, `/blocksy-theme-customization`, `/hello-elementor-theme-customization`, `/popularfx-theme-customization`, `/go-theme-customization`, `/kubio-theme-customization`, `/inspiro-theme-customization`, `/woodstock-theme-customization`, `/bloghash-theme-customization`, `/hello-biz-theme-customization`, `/newsblogger-theme-customization`, `/publisher-theme-customization`, `/royal-elementor-kit-theme-customization`, `/yith-wonder-theme-customization`, `/extendable-theme-customization`, `/tinker-theme-customization`
- **Local Source**: `src/content/*-theme-customization.ts`
- **Output Blocks in `sections`**:
  `hero` → `brand-partners` → `theme-customization-services` → `theme-customization-approach` → `theme-why-choose` → `portfolio-showcase` → `faq-accordion` → `cta-banner`

#### 5. Platform Migration Transformer (15 Pages)
- **Routes**: `/magento-to-shopify-migration`, `/woocommerce-to-shopify-migration`, `/bigcommerce-to-shopify-migration`, `/squarespace-to-shopify-migration`, `/wix-to-shopify-migration`, `/prestashop-to-shopify-migration`, `/salesforce-to-shopify-migration`, `/square-to-shopify-migration`, `/etsy-to-shopify-migration`, `/ecwid-to-shopify-migration`, `/migrating-a-theme-to-online-store-2-0`, `/magento-to-shopify-plus-migration`, `/shopify-migration`, `/shopify-plus-migration-agency`, `/upgrade-to-shopify-plus`
- **Local Source**: `src/content/*-to-shopify*-migration.ts`, `src/content/shopify-migration.ts`, etc.
- **Output Blocks in `sections`**:
  1. `service-hero-video` / `hero` (variant: migration)
  2. `proof-counters`: `stats`
  3. `shopify-migration-services`: `heading`, `eyebrow`, `cards`
  4. `shopify-migration-numbered-grid`: `heading`, `eyebrow`, `numberedItems`
  5. `seo-safe-migration`: `heading`, `checklist`
  6. `why-choose-shopify-migration`: `heading`, `benefits`
  7. `case-studies-block`: `heading`, `studies`
  8. `faq-accordion`: `heading`, `items`
  9. `cta-banner`: `heading`, `ctaLabel`, `ctaHref`

#### 6. Industry Vertical Transformer (10 Pages)
- **Routes**: `/industries/fashion-and-apparel`, `/beauty-and-cosmetics`, `/food-and-beverages`, `/health-and-nutrition`, `/pet-industry`, `/sports-and-outdoors`, `/jewelry-and-accessories`, `/home-and-living`, `/food-beverage-shopify-plus-agency`, `/dental-clinic-website-development-company`
- **Local Source**: `src/content/industries.ts`, `src/content/fashion.ts`, `src/content/beauty-cosmetics.ts`, etc.
- **Output Blocks in `sections`**:
  `hero` (variant: split) → `industry-brands` → `features-grid` → `case-studies-block` → `testimonials-carousel` → `faq-accordion` → `cta-banner`

#### 7. Mobile App Development Transformer (5 Pages)
- **Routes**: `/shopify-mobile-app-development`, `/android-app-development`, `/ios-app-development`, `/cross-platform-app-development`, `/appmaker-shopify-mobile-app-development`
- **Local Source**: `src/content/shopify-mobile-app-development.ts`, `src/content/mobile-application-development.ts`, etc.
- **Output Blocks in `sections`**:
  `shopify-mobile-app-hero` → `white-label-counter` → `shopify-mobile-app-dtc` → `shopify-mobile-app-work` → `shopify-mobile-app-comparison` → `shopify-mobile-app-experience` → `shopify-app-process` → `faq-accordion` → `cta-banner`

#### 8. Core Service, White-Label & Dev Hours Transformer (31 Pages)
- **Routes**: `/shopify-plus-agency`, `/shopify-development-agency`, `/shopify-cro-agency`, `/shopify-experts`, `/shopify-apps`, `/hire-shopify-developers`, `/hire-wordpress-developers`, `/buy-shopify-development-hours`, `/shopify-certified-developers`, `/white-label-shopify-development`, `/white-label-wordpress-development`, `/white-label-website-design`, `/risks-of-shopify-outsourcing`, `/wordpress-development`, `/wordpress-development-company`, `/woocommerce-development`, `/magento-development`, `/bigcommerce-development`, `/webflow-development`, `/php-development`, `/full-stack-development`, `/web-design`, `/seo-services`, `/ai-services`, `/shopify-maintenance-services`, etc.
- **Local Source**: `src/content/shopify-plus-agency.ts`, `src/content/shopify-development-agency.ts`, `src/content/shopify-cro-agency.ts`, etc.
- **Output Blocks in `sections`**:
  Mapped to each route's bespoke blocks (`ShopifyStageServicesBlock`, `EvaluationFrameworkBlock`, `ShopifyCroRevenueImpactBlock`, `WhiteLabelSolutionsBlock`, `CertifiedDeveloperTabsBlock`, `ShopifyHoursComparisonBlock`, etc.).

#### 9. Individual Company, Careers, Portfolio & Legal Pages (17 Pages)
- **Routes**:
  - `/` (or `home`): `hero` (home) → `brand-partners` → `proof-counters` → `features-grid` → `shopify-plus-agency` → `industries-grid` → `technologies-grid` → `testimonials-carousel` → `latest-insights` → `cta-banner`
  - `/about-us`: `about-hero` → `proof-counters` → `about-story` → `about-timeline` → `about-founders` → `about-team` → `about-values` → `cta-banner`
  - `/life-dynamicdreamz`: `hero` → `about-story` → `culture-bento-gallery` → `cta-banner`
  - `/career`: `career-hero` → `career-opportunities` → `career-perks` → `culture-bento-gallery`
  - `/career/apply-now`: `career-apply`
  - `/our-work`: `our-work-hero` → `our-work-projects` → `our-work-case-studies` → `cta-banner`
  - `/resources`: `hero` → `latest-insights` → `cta-banner`
  - `/contact-us`: `contact-hero` → `contact-form` → `contact-offices` → `contact-details` → `faq-accordion`
  - `/request-quote`: `request-quote-hero` → `brand-partners` → `testimonials-carousel`
  - `/book-a-discovery-call`: `discovery-call` → `proof-counters` → `testimonials-carousel`
  - `/privacy-policy`: `legal-content`
  - `/terms-of-service`: `legal-content`
  - `/site-map`: `site-map-directory`
  - Thank-you pages: `/thank-you-for-shopify-plus-enquiry`, `/thank-you-for-applying`, `/thank-you-for-enquiry`

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