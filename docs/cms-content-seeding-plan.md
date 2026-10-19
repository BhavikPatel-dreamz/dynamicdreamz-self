# Dynamic Dreamz: WordPress to Next.js + Payload CMS 3.x Master Seeding Plan

## 1. Mission & Architecture Rules

This plan defines the production-grade, idempotent data and media seeding pipeline that migrates all **322 URLs** from `https://www.dynamicdreamz.com` (WordPress) into **Next.js (App Router)** + **Payload CMS 3.x** on **PostgreSQL**.

### Strict Architectural Rules
1. **CMS Role (Payload 3.x):** Stores structured content, SEO metadata, media relations, globals, and modular page layouts. Page documents use the **`sections`** blocks field (rendered via `BlockRenderer` in `src/components/RenderBlocks.tsx`). Blocks contain **zero styling/CSS controls**—only semantic data fields.
2. **Frontend Role (Next.js App Router):** Serves **React Server Components** styled with **Tailwind CSS 4** and **AOS (`data-aos`)** attributes, plus isolated `'use client'` islands for browser interactivity. Frontend components contain **zero hardcoded page/business copy**.
3. **URL Policy (Strictly No Trailing Slashes):** Public page URLs use the no-trailing-slash form everywhere (e.g. `/about-us`, `/case-studies/daniel-walters`, `/industries/pet-industry`). The homepage `/` is the only structural route exception. `next.config.ts` maintains `trailingSlash: false`. All internal links, canonical URLs, OG URLs, and sitemap entries must follow this policy. Automated verification is enforced by `npm run check:urls`.
4. **Media Storage (Dedicated Media Server):** All uploaded media assets are stored on and served from our dedicated media server at `https://media.dynamicdreamz.net` under `uploads/` via `@payloadcms/plugin-cloud-storage` and `adapter/src/index.ts`. Direct hotlinking to legacy `wp-content/uploads` in final code or database records is strictly forbidden.
5. **Local Asset Fallback:** In UI components and block renderers, dual resolution is enforced: resolve uploaded media (`media.url`, `media.alt`), and if null or unpopulated, fall back to the canonical local project asset (`/assets/...`).
6. **Zero Temporary Seeding Scripts in Repository:** In accordance with `AGENTS.md`, seeding scripts must **never** be committed to `scripts/` or `src/scripts/`, and seed commands must **never** be registered in `package.json`. Seeding operations are executed ephemerally via scratch scripts in `scratch/` (outside git tracking), verified against the database, and discarded immediately.
7. **Total Site Inventory to Seed (322 URLs):**
   - **140 Pages** (`page-sitemap.xml`): Seeded into `pages` collection using bespoke modular blocks in `page.sections`.
   - **125 Blog URLs** (`post-sitemap.xml`): `1` Hub index (`/blogs`) + `119–124` articles seeded into `posts` collection using structured `blogContentBlocks`.
   - **57 Case Study URLs** (`case-study-sitemap.xml`): `1` Hub index (`/case-studies`) + `56` client case studies seeded into `case-studies` collection from `src/content/case-study-details.json`.
   - **Relational Data & Globals:** `categories`, `authors`, `testimonials`, `media`, and 2 Globals (`navigation`, `site-settings`).

---

## 2. Dedicated Media Server Integration (`media`)

The project uses a dedicated high-performance media server configured in `adapter/src/index.ts` and registered in `payload.config.ts`.

### How the Media Server Adapter Works
When seeding or uploading media via Payload's Local API (`payload.create({ collection: 'media', file: { data: buffer, ... } })`):
1. Payload passes the binary file through `sharp` to generate WebP derivatives and responsive sizes (`thumbnail`: 400x300, `card`: 768x512, `hero`: 1920x1080).
2. The `mediaServerStorage` plugin (`adapter/src/index.ts`) uploads the original file and generated sizes via HTTP `PUT` to `https://media.dynamicdreamz.net/api/objects/uploads/<filename>`.
3. The adapter's `generateURL()` generates public URLs as:
   `https://media.dynamicdreamz.net/files/uploads/<filename>`.
4. The media document is saved in PostgreSQL with its ID, public URL, dimensions, and mandatory `alt` text.

### Media Collection Config (`src/payload/collections/Media.ts`)
```typescript
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'public/uploads',
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 768, height: 512, position: 'centre' },
      { name: 'hero', width: 1920, height: 1080, position: 'centre' },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text (Required for SEO & Accessibility)',
    },
  ],
}
```

---

## 3. Ephemeral Seeding Architecture (`scratch/`)

To comply with the strict project policy (*"Zero temporary seeding scripts in repository"*), all seeding scripts run ephemerally inside `scratch/seed/` and are never committed to the repository:

```text
scratch/seed/                         # Temporary directory (git-ignored, discarded after seeding)
├── run-seed.ts                       # Master CLI orchestrator (executes Phases 1 -> 6)
├── seed-cache/
│   ├── media-map.json                # Cache: local asset path / WP URL -> payloadMediaId
│   ├── category-map.json             # Cache: category slug -> payloadCategoryId
│   ├── author-map.json               # Cache: author slug -> payloadAuthorId
│   ├── testimonial-map.json          # Cache: client name -> payloadTestimonialId
│   └── case-study-map.json           # Cache: slug -> payloadCaseStudyId
├── seeders/
│   ├── 01-seed-media.ts              # Seeds media from public/assets/ into Payload media
│   ├── 02-seed-taxonomies.ts         # Seeds categories, authors, testimonials
│   ├── 03-seed-globals.ts            # Seeds navigation & site-settings globals
│   ├── 04-seed-case-studies.ts       # Seeds 56 case studies from src/content/case-study-details.json
│   ├── 05-seed-posts.ts              # Seeds blog posts from src/content/blog-posts/
│   └── 06-seed-pages.ts              # Seeds 140 pages mapped to blocks in page.sections
```

### Execution Command
Run the temporary runner using Node's native flag or `tsx` directly without polluting `package.json`:
```bash
node --env-file-if-exists=.env --import tsx scratch/seed/run-seed.ts
```

---

## 4. Strict 6-Phase Dependency Execution Order

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
[Phase 5: Posts Collection (119+ Docs from src/content/blog-posts/ using blogContentBlocks)]
       ↓ (Outputs postMap: { slug -> payloadPostId })
[Phase 6: Pages Collection (140 Pages mapped to modular blocks in page.sections)]
```

---

## 5. Core Seeding Implementations

### A. Idempotent Media Seeder (`scratch/seed/seeders/01-seed-media.ts`)
Rather than downloading uncompressed, low-quality WordPress images live from the web, the seeder uses the project's vetted canonical assets in `public/assets/` (or fetches required missing images into `scratch/` buffer first per `AGENTS.md`):

```typescript
import type { Payload } from 'payload'
import fs from 'node:fs'
import path from 'node:path'

export async function seedLocalMedia(
  payload: Payload,
  relativePath: string, // e.g. "/assets/team/sheetal.webp"
  altText: string
): Promise<string | number | null> {
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath
  const fullPath = path.join(process.cwd(), 'public', cleanPath)

  if (!fs.existsSync(fullPath)) {
    console.warn(`[Media] File does not exist: ${fullPath}`)
    return null
  }

  const filename = path.basename(fullPath)

  // 1. Check if already exists in Payload database
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    pagination: false,
  })

  if (existing.docs.length > 0) {
    return existing.docs[0].id
  }

  // 2. Read local buffer and create media document
  const buffer = fs.readFileSync(fullPath)
  const ext = path.extname(filename).toLowerCase()
  const mimeType = ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg'

  const created = await payload.create({
    collection: 'media',
    data: {
      alt: altText || filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
    },
    file: {
      data: buffer,
      name: filename,
      mimetype: mimeType,
      size: buffer.byteLength,
    },
    context: { disableRevalidate: true },
  })

  return created.id
}
```

### B. Blog Posts Seeder with `blogContentBlocks` (`scratch/seed/seeders/05-seed-posts.ts`)
Blog posts do **not** use raw HTML strings or generic Lexical JSON. The `posts` schema (`src/payload/collections/Posts.ts`) requires structured block components:
- `contentBeforeToc`: Array of `blogContentBlocks`
- `toc`: Array of `{ label, href, level }`
- `content`: Array of `blogContentBlocks` (headings, paragraphs, lists, images, tables, quotes, callouts, dividers)
- `faqs`: Array of `{ question, answer }`
- `author`: Relationship to `authors`
- `categories`: Relationship to `categories` (hasMany)
- `featuredImage`: Relationship to `media`
- `seo`: Group (`metaTitle`, `metaDescription`, `canonicalUrl`, `metaImage`)

Data is seeded directly from the validated JSON files in `src/content/blog-posts/posts/*.json`.

### C. Case Studies Seeder (`scratch/seed/seeders/04-seed-case-studies.ts`)
Case studies are seeded from the validated `src/content/case-study-details.json` dataset (which complies with `scripts/check-case-studies.mjs`):
- `title`, `slug`, `clientName`, `projectTitle`, `industry`, `technology`, `location`, `websiteUrl`, `summary`
- `heroImage`: Relationship to `media`
- `heroEyebrows`: Array of `{ text }`
- `archive`: Group (`title`, `technology`, `industry`, `excerpt`, `tags`)
- `keyMetrics`: Group (`heading`, `items`)
- `challenge`: Group (`eyebrow`, `heading`, `description`, `items`)
- `solutions`: Group (`eyebrow`, `heading`, `lead`, `items`)
- `keyFeatures`: Group (`eyebrow`, `heading`, `isTwoColumn`, `items`)
- `projectDelivery`: Group (`eyebrow`, `heading`, `items`)
- `customSections`: Array of custom sections
- `seo`: Group (`metaTitle`, `metaDescription`, `canonicalUrl`, `metaImage`)

### D. Disabling Next.js Cache Revalidation During Seeding
All Payload hooks utilize `safeRevalidatePath` from `src/lib/revalidate.ts`. During bulk seeding, pass `context: { disableRevalidate: true }` in all `payload.create` calls to avoid unnecessary cache revalidations during data ingestion.

---

## 6. Mapping the 140 Pages to Modular Block Schemas (`page.sections`)

In `06-seed-pages.ts`, each page is created in the `pages` collection with:
- `title`: Page Title
- `slug`: Normalized slashless slug (e.g. `home`, `about-us`, `shopify-plus-agency`, `industries/fashion-and-apparel`)
- `sections`: Array of modular blocks mapped to `src/payload/blocks/`
- `seo`: Custom group matching `src/payload/collections/Pages.ts`:
  ```typescript
  seo: {
    metaTitle: string,
    metaDescription: string,
    canonicalUrl: string, // Bare slashless URL: e.g. "https://www.dynamicdreamz.com/about-us"
    metaImage: payloadMediaId,
  }
  ```

### Assigned Block Mapping in `page.sections`

| Sitemap URL Pattern | Count | Assigned Block Sequence in `page.sections` |
| :--- | :--- | :--- |
| **1. Homepage** (`/` or `home`) | 1 | `hero` (variant: home) → `brand-partners` → `proof-counters` → `features-grid` → `shopify-plus-agency` → `industries-grid` → `technologies-grid` → `testimonials-carousel` → `latest-insights` → `cta-banner` |
| **2. Theme Customization Pages** (`*-theme-customization`) | 43 | `hero` (variant: split) → `brand-partners` → `shopify-themes-grid` → `theme-customization-services` → `theme-customization-approach` → `theme-why-choose` → `portfolio-showcase` → `faq-accordion` → `cta-banner` |
| **3. Geo / City Shopify & WP Pages** (`*-development-in-*`, `*-company-in-chennai`) | 19 | `city-page-hero` → `city-page-counter` → `brand-partners` → `features-grid` → `city-why-choose-boxes` → `pricing-models` → `case-studies-block` → `testimonials-carousel` → `faq-accordion` → `cta-banner` |
| **4. Platform Migration Pages** (`*-to-shopify*-migration`, `migrating-a-theme-to-online-store-2-0`, `shopify-migration`, `shopify-plus-migration-agency`) | 15 | `hero` (variant: split) → `proof-counters` → `shopify-migration-services` → `shopify-migration-numbered-grid` → `seo-safe-migration` → `why-choose-shopify-migration` → `case-studies-block` → `faq-accordion` → `cta-banner` |
| **5. Industry Vertical Pages** (`industries/*`, `food-beverage-shopify-plus-agency`, `dental-clinic-website-development-company`) | 10 | `hero` (variant: split) → `brand-partners` → `features-grid` → `industry-brands` → `case-studies-block` → `testimonials-carousel` → `faq-accordion` → `cta-banner` |
| **6. White Label & Outsourcing Pages** (`white-label-*`, `risks-of-shopify-outsourcing`) | 4 | `hero` (variant: split) → `white-label-stats` → `white-label-partner` → `white-label-services` → `white-label-process` → `white-label-tools` → `white-label-why` → `risks-shopify-topics` → `white-label-final-cta` |
| **7. Hire Developers & Dev Hours** (`hire-*-developers`, `buy-shopify-development-hours`, `shopify-experts`, `shopify-certified-developers`) | 5 | `hero` (variant: split) → `certified-developer-tabs` → `credential-evidence` → `credential-tabs` → `shopify-hours-comparison` → `shopify-hours-tasks` → `pricing-models` → `faq-accordion` → `cta-banner` |
| **8. Core Service & Platform Pages** (`shopify-plus-agency`, `shopify-b2b`, `shopify-cro-agency`, `shopify-apps`, `shopify-mobile-app-development`, `appmaker-*`, `wordpress-development*`, `woocommerce-development`, `magento-*`, `bigcommerce-development`, `webflow-development`, `mobile-application-development`, etc.) | 31 | `hero` (variant: split) → `brand-partners` → `proof-counters` → `shopify-stage-services` → `evaluation-framework` → `shopify-cro-services` → `shopify-cro-barriers` → `shopify-cro-revenue-impact` → `shopify-mobile-app-dtc` → `case-studies-block` → `faq-accordion` → `cta-banner` |
| **9. Company, Portfolio & Utility Pages** | 12 | Mapped individually as listed below |

### Individual Utility & Company Page Mappings (12 URLs)
1. `/about-us` → `about-hero` → `proof-counters` → `about-story` → `about-timeline` → `about-founders` → `about-team` → `about-values` → `cta-banner`
2. `/life-dynamicdreamz` → `hero` → `about-story` → `culture-bento-gallery` → `cta-banner`
3. `/career` → `career-hero` → `career-opportunities` → `career-perks` → `culture-bento-gallery`
4. `/our-work` → `our-work-hero` → `our-work-projects` → `our-work-case-studies` → `cta-banner`
5. `/resources` → `hero` → `latest-insights` → `cta-banner`
6. `/contact-us` → `contact-hero` → `contact-form` → `contact-offices` → `contact-details` → `faq-accordion`
7. `/request-quote` → `request-quote-hero` → `brand-partners` → `testimonials-carousel`
8. `/book-a-discovery-call` → `discovery-call` → `proof-counters` → `testimonials-carousel`
9. `/thank-you-for-shopify-plus-enquiry` → `hero` (thank you confirmation variant)
10. `/privacy-policy` → `legal-content`
11. `/terms-of-service` → `legal-content`
12. `/site-map` → `site-map-directory`

> **URL & Slug Formatting Guidelines:**
> - Slugs must never contain leading or trailing slashes (e.g. `about-us`, `industries/fashion-and-apparel`).
> - Nested industry paths use slashes within the slug string so App Router `[[...slug]]` resolves them seamlessly.
> - URLs are always slashless.

---

## 7. Master Scratch Seed Runner (`scratch/seed/run-seed.ts`)

```typescript
import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../payload.config'
import { seedMedia } from './seeders/01-seed-media'
import { seedTaxonomies } from './seeders/02-seed-taxonomies'
import { seedGlobals } from './seeders/03-seed-globals'
import { seedCaseStudies } from './seeders/04-seed-case-studies'
import { seedBlogPosts } from './seeders/05-seed-posts'
import { seedPages } from './seeders/06-seed-pages'

async function runMasterSeed() {
  console.log('🚀 Starting Payload 3.x Migration Seeding Pipeline...')

  const payload = await getPayload({ config: configPromise })

  console.log('\n--- Phase 1/6: Seeding Media to Media Server & Payload ---')
  const mediaMap = await seedMedia(payload)

  console.log('\n--- Phase 2/6: Seeding Categories, Authors & Testimonials ---')
  const taxonomyMap = await seedTaxonomies(payload, mediaMap)

  console.log('\n--- Phase 3/6: Seeding Globals (Navigation & SiteSettings) ---')
  await seedGlobals(payload, mediaMap)

  console.log('\n--- Phase 4/6: Seeding 56 Case Studies ---')
  const caseStudyMap = await seedCaseStudies(payload, mediaMap, taxonomyMap)

  console.log('\n--- Phase 5/6: Seeding Blog Posts ---')
  const postMap = await seedBlogPosts(payload, mediaMap, taxonomyMap)

  console.log('\n--- Phase 6/6: Seeding 140 Pages into Modular Sections ---')
  await seedPages(payload, {
    mediaMap,
    taxonomyMap,
    caseStudyMap,
    postMap,
  })

  console.log('\n✅ Seeding Complete! All documents persisted to Neon PostgreSQL & Media Server.')
  process.exit(0)
}

runMasterSeed().catch((error) => {
  console.error('❌ Fatal Seeding Error:', error)
  process.exit(1)
})
```

---

## 8. Verification & Audit Checklist

After running the ephemeral scratch seeder, execute the following quality audits:

- [ ] **Zero Seeding Scripts in Repo:** Verify no seeding scripts were left in `scripts/` or `src/scripts/`, and no seed commands exist in `package.json`.
- [ ] **Media Audit:** Query `payload.find({ collection: 'media', limit: 5 })` and confirm `doc.url` resolves to `https://media.dynamicdreamz.net/files/uploads/...`.
- [ ] **Document Counts:**
  - `pages` collection contains **140** published documents with populated `sections` and `seo`.
  - `posts` collection contains **119–124** published documents with `contentBeforeToc` and `content` blocks.
  - `case-studies` collection contains **56** published documents matching `src/content/case-study-details.json`.
  - `testimonials`, `categories`, `authors` collections are fully populated.
  - `navigation` and `site-settings` globals are populated.
- [ ] **SEO & URL Policy Audit:** Run `npm run check:urls` to ensure zero trailing slashes exist across routes, sitemaps, canonicals, and links.
- [ ] **Content & Integrity Audits:** Run:
  - `npm run check:case-studies`
  - `npm run check:blog-posts`
  - `npm run check:component-content`
  - `npm run check:asset-duplicates`
- [ ] **Production Build:** Run `npm run lint` and `npm run build` to confirm clean compilation with zero TypeScript, lint, or URL errors.