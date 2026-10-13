# Payload CMS Content Seeding Plan (Approach 3: 100% Modular Block Architecture)

## 1. Executive Summary & Core Objective

The objective of this plan is to transition 100% of website content management to Payload CMS under **Approach 3 (High-Fidelity Modular Blocks)** across all routes and collections, **strictly eliminating direct/raw HTML in CMS content**, **enforcing 100% visual and layout parity with the live site via dedicated blocks for unique sections**, and **utilizing Payload's native upload media feature everywhere with local asset fallback for future-ready CDN migration**.

### Strict Zero Direct HTML & Zero Rich Text (WYSIWYG) Policy
- **No direct HTML strings or textareas**: Content fields across all collections (`pages`, `posts`, `case-studies`, `testimonials`, etc.) must **never** store raw HTML markup (such as `<p>`, `<div class="...">`, `<span>`, `<strong>`, `<a>`, `<img src="...">`, `<ul>`, `<li>`, etc.).
- **No Rich Text (`type: 'richText'`) or Lexical WYSIWYG in page blocks**: Rich Text fields are functionally equivalent to direct HTML (they model an HTML document tree, render as a browser-like WYSIWYG preview in CMS Admin, and require HTML serialization / `dangerouslySetInnerHTML` on the frontend). To maintain 100% clean headless architecture, **Rich Text fields are strictly prohibited across all page blocks**.
- **100% Pure Structured Scalar & Array Modeling**: All page content—including long-form legal agreements (`terms-of-service`, `privacy-policy`), site map trees (`site-map`), and editorial sections—must be decomposed into discrete, typed scalar fields (`text`, `textarea` for unformatted plain text, `select`, `checkbox`, `number`) and structured arrays (`paragraphs: array of { text: string }`, `items: array of { text: string }`, `links: array of { label: string, href: string }`).
- **No `dangerouslySetInnerHTML` for CMS body content**: Content rendering must flow through typed, semantic React components using standard JSX tags (`<p>`, `<h2>`, `<ul>`, `<li>`, `<a>`).
- **Universal Modular Block Structure**: Just as the home page is assembled from modular, strongly-typed Payload CMS blocks (`HeroBlock`, `BrandPartnersBlock`, `ProofCountersBlock`, etc.), **all marketing pages, legal policies, blog posts, and case studies must be decomposed into explicit, typed blocks**.
- **Editor-Friendly & Type-Safe**: Content managers add, edit, reorder, and remove discrete blocks in Payload Admin with clean, labeled form inputs—never touching raw HTML markup or confusing WYSIWYG document windows.

### 100% Live-Site Visual Parity & Dedicated Unique Blocks Policy
- **Visual Parity Trumps Forced Block Reuse**: Achieving 100% visual, layout, and responsive parity with the live site is NON-NEGOTIABLE.
- **Unique Blocks for Unique Sections**: If a live-site section has a bespoke visual layout, unique cards, tabbed interactions, specialized counters, or distinct structural hierarchy (e.g., `EvaluationFrameworkSection`, `ShopifyStageServicesSection`, `PortfolioShowcaseSection`, `CaseStudyCardsSection`, `WhiteLabelPartnerSection`), agents **MUST create a dedicated, unique block in `src/blocks/`** and map it 1:1 in `src/components/blocks/block-renderer.tsx`.
- **Zero Shoehorning into Common Blocks**: Agents must **NEVER** force-fit bespoke sections into generic common blocks (`features-grid`, `proof-counters`, `process-timeline`) by modifying common blocks with awkward conditional props, flags, or CSS compromises. Modifying common blocks to handle radically different layouts creates bloated "Frankenstein components", damages visual parity, and risks breaking other routes.
- **Common Blocks strictly for genuinely shared layouts**: Common blocks (`HeroBlock`, `FaqAccordionBlock`, `BrandPartnersBlock`, `CtaBannerBlock`, etc.) are reserved exclusively for sections whose visual design, cards, and structure match 100% across routes.

### Upload Media Feature Everywhere with Local Asset Fallback (Future-Ready CDN Architecture)
- **Universal Native Media Upload Relationship**: Across all collections (`pages`, `posts`, `case-studies`, `testimonials`, `authors`), globals (`site-settings`, `navigation`), and all modular blocks (`src/blocks/**`), all image, icon, logo, avatar, and banner fields must be modeled using Payload's native upload feature:
  `{ name: "image" | "logo" | "icon" | "avatar", type: "upload", relationTo: "media" }`.
  Direct plain-text path strings (e.g., `{ name: "src", type: "text" }`) in CMS content schemas are strictly prohibited.
- **Why (Future CDN Migration Readiness)**: When external object storage / CDN (AWS S3, Cloudflare R2, Cloudinary) is connected in the future via a Payload cloud storage plugin, all media files will migrate to and be served from CDN automatically via Payload's central `media` collection. Modeling media as native uploads today prevents costly database rewrites, schema breaking changes, and regex content string replacements later.
- **Local Asset Fallback Strategy**: During migration and initial seeding before external CDN activation:
  - UI components and block renderers resolve media using dual-resolution helpers (`resolveMediaUrl()`, `resolveMediaAlt()`). If the `media` field is populated from Payload (as an uploaded media object with `url`, `alt`, etc.), render that URL.
  - If the media relation is null, unpopulated, or a fallback string, cleanly fall back to the canonical local static asset path in `/assets/...`.
  - Seeding scripts can seed or reference media records while preserving local asset fallbacks, ensuring zero layout shift, zero broken images, and 100% future-readiness.

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
| **`pages`** (Marketing & Legal Routes) | Raw HTML strings, `type: 'richText'` (Lexical WYSIWYG), or monolithic markup blobs | `sections` blocks array (`HeroBlock`, `BrandPartnersBlock`, `ProofCountersBlock`, `FeaturesGridBlock`, `ProcessTimelineBlock`, `LegalContentBlock`, `SiteMapDirectoryBlock`, etc.) rendered via `BlockRenderer` using 100% scalar inputs and typed arrays. |
| **`posts`** (Blog Articles) | Direct HTML strings (`contentHtml`) or unparsed raw HTML dumped into `content: richText` | `content` blocks array (`blog-heading`, `blog-paragraph`, `blog-list`, `blog-image`, `blog-table`, `blog-quote`, `blog-callout`, `blog-divider`) matching `BlogContentBlock` and rendered via `BlogContentRenderer`. Structured fields for `toc`, `faqs`, `featuredImage`, `author`, `category`, and `seo`. |
| **`case-studies`** (Case Studies) | Raw textareas / unformatted HTML for `challenge`, `solution`, `overview` | Structured section blocks / groups: `hero`, `overview`, `keyMetrics` (counters), `challenge` (numbered items), `solutions` (lead + items), `keyFeatures` (feature grid), `projectDelivery` (deliverable badges), `customSections` (modular subsections), `relatedCaseStudies`, and `seo`. Rendered via `CaseStudyDetailPage`. |
| **`testimonials`** (Client Reviews) | Inline unstructured quotes in page copy or raw HTML embeds | Structured collection: `clientName`, `company`, `quote`, `videoId`, `avatar`, `companyLogo`, `tags`. Referenced via relationships in pages and case studies. |

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
   - `image`: `upload` (relationTo: `"media"`, with local asset fallback)
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
- `featuredImage`: `upload` (relationTo: `"media"`, with local asset fallback)
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
   - `heroImage`: `upload` (relationTo: `"media"`, with local asset fallback)
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
- `LegalContentBlock` (`eyebrow`, `heading`, `containerWidth`, `sections`: array of `{ title, level, paragraphs: array of { text }, items: array of { text, boldPrefix } }`, `contactInfo`: group of `{ name, email, phone, address }` — **100% scalar inputs, zero richText, zero HTML**)
- `SiteMapDirectoryBlock` (`heading`, `description`, `groups`: array of `{ title, links: array of { label, href } }` — **100% scalar inputs, zero HTML**)
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
Step 4: Resolve Payload Block Schema & Media Uploads
  └── Match content to an existing block in src/blocks/ ONLY if visual layout & structure match 100%
  └── If the live section has a unique layout or cards, define a dedicated unique block in src/blocks/
  └── Ensure all media fields use { type: "upload", relationTo: "media" } with local fallback
       │
Step 5: Ephemeral Seeding & Verification
  └── Create temporary script in scratch/ (outside scripts/), run once against Neon DB
  └── Verify database persistence and delete the scratch script immediately
```

### Discovery Rulebook for Agents
1. **Never dump raw HTML**: Always decompose content into discrete block fields (`heading`, `paragraph`, `list`, `table`, etc.).
2. **Unique Blocks for Unique Sections (100% Live Site Parity Rule)**:
   - Reuse existing blocks ONLY if the live section's visual layout, cards, and structure match 100%.
   - If a live section has a bespoke visual design, unique cards, tabs, or distinct structural hierarchy (e.g. `EvaluationFrameworkSection`, `ShopifyStageServicesSection`, `ShopifyPlusProofSection`, `PortfolioShowcaseSection`, `CaseStudyCardsSection`, etc.), agents **MUST create a dedicated, unique block in `src/blocks/`** and map it 1:1 in `src/components/blocks/block-renderer.tsx`.
   - Modifying common blocks (`features-grid`, `proof-counters`, `process-timeline`) to accommodate unique sections by adding bloated conditional props or CSS hacks is STRICTLY FORBIDDEN. It degrades live-site parity and produces bloated Frankenstein code.
   - Common blocks (`HeroBlock`, `FaqAccordionBlock`, `BrandPartnersBlock`, `CtaBannerBlock`, etc.) are reserved strictly for sections that share identical visual layouts across pages.
3. **Upload Media Feature Everywhere with Local Asset Fallback (Future-Ready CDN Strategy)**:
   - All media, image, logo, and icon fields in block schemas must be defined as `{ type: "upload", relationTo: "media" }`.
   - Never define plain-text image path fields (e.g. `{ name: "src", type: "text" }`) in CMS schemas.
   - UI renderers must resolve media objects dynamically (`media.url`, `media.alt`) with fallback to local static asset paths (`/assets/...`). When external CDN is configured in the future, all assets can be served from CDN seamlessly without database or schema changes.
4. **Respect Postgres Table Name Limits**: Drizzle/Postgres tables have a 63-character limit. Any array fields inside custom blocks must define concise `dbName` values (e.g. `spa_paras`, `cs_items`, `post_blks`).
5. **Preserve Exact URL Equity**: All internal links in CTA and inline link props must be absolute root-relative paths without trailing slashes (e.g., `/shopify-plus-agency`, `/contact-us`).
6. **Never Add or Commit Seeding Scripts**: Do not create or commit temporary seeding scripts in `scripts/`, and never add seed commands to `package.json`. Seeding is strictly one-time execution via disposable files in `scratch/`.

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

### Phase 3: Core Agency & Marketing Pages (100% CMS Managed)
*Target: Primary brand positioning and inquiry conversion pages managed 100% via Payload CMS `pages` collection.*

Every page in Phase 3 is modeled as a document in the Payload CMS `pages` collection using discrete, typed modular blocks in `sections` with zero raw HTML, zero richText WYSIWYG, and 100% visual, layout, and interactive parity with the live site. Interactive islands (forms, Calendly schedulers, multi-step wizards, filters) receive their content, metadata, labels, and options directly from CMS block props.

- **Modular Pages in Payload CMS (`pages` Collection, Seeded & Verified in Neon DB)**:
  - **Home Page (`/`)**:
    - Blocks: `hero` (home variant), `brand-partners`, `shopify-plus-agency-overview`, `white-label-partner-banner`, `commerce-solutions`, `selected-work-marquee`, `testimonials-carousel`, `integrations-partners`, `latest-insights`, `faq-accordion`.
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback to `<HomePage />`.
  - **Terms of Service (`/terms-of-service`)**:
    - Modeled with `LegalContentBlock` (`heading`, `intro`, `containerWidth`, `sections` array with `title`, `level`, `paragraphs`, `items`, `closingParagraphs`, and `contactInfo`).
    - 100% structured scalar & array modeling, zero `richText`, zero raw HTML.
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback to `<TermsOfServicePage />`.
  - **Privacy and Cookies Policy (`/privacy-policy`)**:
    - Modeled with `LegalContentBlock` (`heading`, `containerWidth`, `sections` array with `title`, `level`, `paragraphs`, `items` with `boldPrefix`, and structured `contactInfo` group).
    - 100% structured scalar & array modeling, zero `richText`, zero raw HTML.
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback to `<PrivacyPolicyPage />`.
  - **Site Map Directory (`/site-map`)**:
    - Modeled with `SiteMapDirectoryBlock` (`heading`, `description`, `groups` array with structured `links`).
    - 100% structured scalar & array modeling, zero raw HTML.
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback to `<SiteMapPage />`.
  - **About Us (`/about-us`)**:
    - Dedicated Blocks:
      - `about-hero` (`AboutHeroBlock`): `title`, `description`, `deliveryTitle`, `statistics` array (`label`, `value`).
      - `about-story` (`AboutStoryBlock`): `title`, `description`, `caption`, `videoId`, `videoTitle`.
      - `about-timeline` (`AboutTimelineBlock`): `title`, `description`, `milestones` array (`year`, `description`, `image`, `alt`, `width`, `height`).
      - `about-founders` (`AboutFoundersBlock`): `eyebrow`, `title`, `description`, `founders` array (`name`, `role`, `biography`, `image`, `alt`, `linkedIn`).
      - `about-team` (`AboutTeamBlock`): `eyebrow`, `title`, `keyManagers` array, `departmentLeaders` array (`name`, `role`, `image`, `alt`).
      - `about-values` (`AboutValuesBlock`): `title`, `description`, `values` array (`title`, `description`, `iconName`).
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback.
  - **Our Work (`/our-work`)**:
    - Dedicated Blocks:
      - `our-work-hero` (`OurWorkHeroBlock`): `eyebrow`, `title`, `description`, `primaryCta`, `secondaryCta`.
      - `brand-partners` (`BrandPartnersBlock`): Reused brand partners marquee.
      - `our-work-projects` (`OurWorkProjectsBlock`): `eyebrow`, `title`, `description`, interactive platform filter tabs & work portfolio showcase.
      - `our-work-case-studies` (`OurWorkCaseStudiesBlock`): `eyebrow`, `title`, `description`, case study cards showcase.
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback.
  - **Contact Us (`/contact-us`)**:
    - Dedicated Blocks:
      - `contact-hero` (`ContactHeroBlock`): `eyebrow`, `title`, `description`, `quickLinks` array (`label`, `href`).
      - `contact-form` (`ContactFormBlock`): `eyebrow`, `title`, `description` wrapping the interactive `<ContactForm />` island.
      - `contact-offices` (`ContactOfficesBlock`): `eyebrow`, `title`, `description`, `directionsLabel`, `offices` array (`city`, `address`, `phone`, `phoneHref`, `directionsHref`).
      - `contact-details` (`ContactDetailsBlock`): `eyebrow`, `title`, direct channels and hours.
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback.
  - **Book a Discovery Call (`/book-a-discovery-call`)**:
    - Dedicated Block:
      - `discovery-call` (`DiscoveryCallBlock`): `eyebrow`, `title`, `description`, `host` group (`name`, `role`, `image`, `imageAlt`), `benefits` array (`icon`, `title`, `description`), `calendar` group (`heading`, `details`, `src`, `iframeTitle`).
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback.
  - **Request a Quote (`/request-quote`)**:
    - Dedicated Block:
      - `request-quote-hero` (`RequestQuoteHeroBlock`): `heroTitle`, `heroDescription`, `formTitle`, `counters` array (`label`, `count`, `unit`), `budgetOptions` array wrapping the interactive multi-step `<QuoteForm />` island and `<QuoteLeftColumn />`.
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback.
  - **Career (`/career`)**:
    - Dedicated Blocks:
      - `career-hero` (`CareerHeroBlock`): `eyebrow`, `title`, `description`, badges, scrolling images.
      - `career-opportunities` (`CareerOpportunitiesBlock`): `eyebrow`, `title`, `description`, job openings with location filtering.
      - `career-perks` (`CareerPerksBlock`): `eyebrow`, `heading`, `description`, `perks` array (`title`, `iconName`).
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback.
  - **Career Apply Now (`/career-apply-now`)**:
    - Dedicated Block:
      - `career-apply` (`CareerApplyBlock`): `heading`, `phoneLabel`, `phoneNumber`, `phoneHref`, `emailLabel`, `emailAddress`, `emailHref`, `note` wrapping the interactive application form island.
    - Rendered dynamically via `<BlockRenderer />` with fail-safe local fallback.
- **Status**: 11 pages (Home + 3 legal/directory + 7 marketing/conversion pages) 100% modeled in Payload CMS and rendered via `<BlockRenderer />`. 100% of data, media assets (videos, posters, showcase galleries, review badges, and avatars) are managed via native `{ type: "upload", relationTo: "media" }` relations with dual resolution and local asset fallbacks. Zero hardcoded content, 100% visual and interactive parity. Verified across all quality gates.


---

### Phase 4: Flagship Shopify Solution Pages (17 Pages)
*Target: Primary commercial revenue drivers and Shopify expertise pages.*

- **Pages (100% Modeled, Seeded & Persisted in Neon DB)**:
  1. `/shopify-plus-agency` (11 sections)
  2. `/shopify-development-agency` (10 sections)
  3. `/shopify-certified-developers` (9 sections)
  4. `/shopify-migration` (10 sections)
  5. `/shopify-plus-migration-agency` (10 sections)
  6. `/shopify-theme-customization` (13 sections)
  7. `/shopify-cro-agency` (10 sections)
  8. `/shopify-mobile-app-development` (9 sections)
  9. `/shopify-experts` (11 sections)
  10. `/hire-shopify-developers` (12 sections)
  11. `/shopify-maintenance-services` (7 sections)
  12. `/upgrade-to-shopify-plus` (9 sections)
  13. `/buy-shopify-development-hours` (8 sections)
  14. `/shopify-apps` (2 sections)
  15. `/migrating-a-theme-to-online-store-2-0` (8 sections)
  16. `/appmaker-shopify-mobile-app-development` (7 sections)
  17. `/risks-of-shopify-outsourcing` (5 sections)

- **100% Live Site Architecture (Dedicated Blocks for Bespoke Sections)**:
  - 32 dedicated modular blocks created and registered in `src/blocks/` and `src/collections/Pages.ts`:
    - `IndustryBrandsBlock`, `ShopifyPlusProofBlock`, `PortfolioShowcaseBlock`, `ShopifyStageServicesBlock`, `CaseStudyCardsBlock`, `EvaluationFrameworkBlock`, `ShopifyTeamBoxesBlock`, `ShopifyHorizontalProcessBlock`, `VerifiedKnowledgeBlock`, `CredentialEvidenceBlock`, `CredentialTabsBlock`, `CertifiedAgencySupportBlock`, `CertifiedServicesBlock`, `PartnerDirectoryProofBlock`, `WhiteLabelFinalCtaBlock`, `ShopifyMigrationServicesBlock`, `ShopifyMigrationNumberedGridBlock`, `SeoSafeMigrationBlock`, `WhyChooseShopifyMigrationBlock`, `ThemeCustomizationServicesBlock`, `ThemeCustomizationApproachBlock`, `ShopifyThemesGridBlock`, `AiEmpoweredDeliveryBlock`, `ShopifyCroBarriersBlock`, `ShopifyCroRevenueImpactBlock`, `ShopifyCroServicesBlock`, `ShopifyCroAssessmentBlock`, `ShopifyCroProcessBlock`, `ShopifyCroWhyBlock`, `ShopifyCroEngagementBlock`, `ShopifyMobileAppHeroBlock`, `ShopifyMobileAppDtcBlock`, `ShopifyMobileAppWorkBlock`, `ShopifyMobileAppComparisonBlock`, `ShopifyMobileAppExperienceBlock`, `ShopifyTeamBehindItBlock`, `CityWhyChooseBoxesBlock`, `ShopifyHoursHeroBlock`, `ShopifyHoursComparisonBlock`, `ShopifyHoursTasksBlock`, `NumberedProcessTimelineBlock`, `ShopifyAppsHeroBlock`, `ShopifyAppsGridBlock`, `ShopifyAppBenefitsBlock`, `ShopifyAppFeaturesBlock`, `ShopifyAppProcessBlock`, `RisksShopifyTopicsBlock`.
  - Pure scalar/array modeling across all blocks: zero raw HTML, zero richText WYSIWYG bloat.
  - Media architecture: All media fields defined via `{ type: "upload", relationTo: "media" }` with dual resolution and canonical local static asset fallbacks (`/assets/...`).
  - Fail-safe fallback: All 17 Next.js App Router page routes (`src/app/(frontend)/<slug>/page.tsx`) implement `draftMode()`, `getPayloadPageBySlug()`, dynamic `<BlockRenderer sections={pageSections} />`, and fallback to the original static component when CMS sections are empty.
  - Ephemeral seeding: Executed ephemerally outside repository tracking, verified persistence in Neon DB, and deleted immediately with zero committed seed scripts.
- **Status**: Completed & Verified in Neon DB (28 total pages in `pages` collection: 11 Phase 3 + 17 Phase 4). 100% visual parity, zero broken links, all quality checks passing.

---

### Phase 5: Platform-to-Shopify Migration Sub-Pages (11 Pages)
*Target: SEO-driven migration search queries.*

- **Pages**:
  `/magento-to-shopify-migration`, `/magento-to-shopify-plus-migration`, `/woocommerce-to-shopify-migration`, `/bigcommerce-to-shopify-migration`, `/salesforce-to-shopify-migration`, `/squarespace-to-shopify-migration`, `/wix-to-shopify-migration`, `/prestashop-to-shopify-migration`, `/ecwid-to-shopify-migration`, `/etsy-to-shopify-migration`, `/square-to-shopify-migration`.
- **Block Composition**:
  Inspect live pages: common blocks for shared elements (`faq-accordion`, `cta-banner`, `proof-counters`), plus dedicated blocks for legacy platform comparisons, zero-data-loss matrices, and migration roadmaps where the visual design differs from generic timelines. All media fields use `{ type: "upload", relationTo: "media" }` with local asset fallback.

---

### Phase 6: Technology & White-Label Services Pages (14 Pages)
*Target: Non-Shopify tech stacks and agency partnership offerings.*

- **White-Label Partner Pages**:
  `/white-label-shopify-development-services`, `/white-label-wordpress-development-services`, `/white-label-website-design-services`.
  *Key Blocks*: Inspect live routes. Dedicated blocks for white-label NDA guarantees, partner comms matrix, and specialized proof sections.
- **Engineering & Specialty Stacks**:
  `/wordpress-development-company`, `/wordpress-development`, `/woocommerce-development`, `/magento-development`, `/bigcommerce-development`, `/webflow-development`, `/full-stack-development`, `/php-development`, `/ai-services`, `/mobile-application-development`, `/ios-app-development`, `/android-app-development`, `/cross-platform-app-development`, `/seo-services`, `/hire-wordpress-developers`.
  *Key Blocks*: Inspect live routes for bespoke capability grids, architecture diagrams, and hire-developer rate tables. All media fields use `{ type: "upload", relationTo: "media" }` with local fallback.

---

### Phase 7: Industry Vertical Pages (10 Pages)
*Target: Niche ecommerce sector solutions.*

- **Pages**:
  `/fashion`, `/beauty-cosmetics`, `/food-beverages`, `/food-beverage-shopify-plus-agency`, `/health-nutrition`, `/jewellery-accessories`, `/home-living`, `/sports-outdoors`, `/pet-industry`, `/dental-clinic-website-development-company`.
- **Block Composition**:
  Inspect live vertical pages: shared blocks (`brand-partners`, `faq-accordion`, `cta-banner`) plus dedicated industry showcase blocks (bundles, subscriptions, swatches, wholesale B2B layouts). All media fields use `{ type: "upload", relationTo: "media" }` with local asset fallback.

---

### Phase 8: Theme Customization Pages (50+ Pages)
*Target: 50+ Shopify and WordPress theme customization landing pages.*

- **Shopify Themes**:
  `/dawn-theme-customization`, `/impulse-theme-customization`, `/prestige-theme-customization`, `/warehouse-theme-customization`, `/expanse-theme-customization`, `/pipeline-theme-customization`, `/craft-theme-customization`, `/sense-theme-customization`, `/spotlight-theme-customization`, `/studio-theme-customization`, `/colorblock-theme-customization`, `/refresh-theme-customization`, `/origin-theme-customization`, `/broadcast-theme-customization`, `/be-yours-theme-customization`, `/stiletto-theme-customization`, `/vision-theme-customization`, `/vessel-theme-customization`, `/savor-theme-customization`, `/trade-theme-customization`, etc.
- **WordPress Themes**:
  `/astra-theme-customization`, `/generatepress-theme-customization`, `/kadence-theme-customization`, `/oceanwp-theme-customization`, `/neve-theme-customization`, `/blocksy-theme-customization`, `/hello-elementor-theme-customization`, `/popularfx-theme-customization`, `/go-theme-customization`, `/kubio-theme-customization`, `/inspiro-theme-customization`, `/woodstock-theme-customization`, etc.
- **Block Composition**:
  Inspect live theme customization routes: `ThemeHeroBlock`, theme feature audit blocks, Liquid/PHP custom section showcases, theme-specific case study showcases, and shared FAQ/CTA blocks. All media fields use `{ type: "upload", relationTo: "media" }` with local asset fallback.

---

### Phase 9: Geo & Location Landing Pages (17 Pages)
*Target: City and regional localized landing pages.*

- **India**:
  `/shopify-development-in-mumbai`, `/shopify-development-in-delhi`, `/shopify-development-in-bangalore`, `/shopify-development-in-hyderabad`, `/shopify-development-in-pune`, `/shopify-development-company-in-chennai`, `/wordpress-development-in-mumbai`, `/wordpress-development-in-delhi`, `/wordpress-development-in-bangalore`, `/wordpress-development-in-pune`, `/wordpress-development-in-noida`, `/wordpress-development-in-ahmedabad`.
- **Global**:
  `/shopify-development-in-new-york`, `/shopify-development-in-los-angeles`, `/shopify-development-in-miami`, `/shopify-development-in-texas`, `/shopify-development-in-barcelona-spain`.
- **Block Composition**:
  Inspect live city pages: localized hero, regional client marquees, city counter boxes, timezone/collaboration models, and local FAQs. All media fields use `{ type: "upload", relationTo: "media" }` with local asset fallback.

---

## 7. Verification & Quality Gates for Agents

After seeding any page, collection, or batch, the executing agent must verify against this mandatory quality gate:

1. **Zero Direct HTML & Zero Rich Text Audit**:
   - Verify that no raw HTML markup strings (`<p>`, `<div>`, `<span>`, `<strong>`, `<a>`, `<img`, etc.) exist in seeded CMS records or collection schemas.
   - Verify that no `type: 'richText'` or Lexical WYSIWYG fields are used across page builder blocks.
   - All content must reside in typed scalar block properties (`text`, `number`, `select`) or structured arrays (`paragraphs`, `items`, `links`).
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
