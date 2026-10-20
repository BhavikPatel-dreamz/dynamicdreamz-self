# Dynamic Dreamz: Local Data to Payload CMS 3.x Universal Content Seeding Guide

This guide defines the production-grade, idempotent data and media ingestion pipeline that migrates verified local data (**142 Pages**, **124 Blog Posts**, **56 Case Studies**, **Taxonomies**, and **Globals**) from the Next.js codebase into **Payload CMS 3.x** on **PostgreSQL (Neon)** and the dedicated **Media Server (`https://media.dynamicdreamz.net`)**.

It is designed so that **any AI agent or engineer can read this file and seed any service, marketing, or utility page production-ready** on demand with 100% visual, functional, and schema parity.

---

## One-Prompt Agent Kickoff

Use this command to instruct any AI agent to seed any service page:

```text
Read AGENTS.md, docs/agent-workflow.md, docs/payload-cms-integration-guide.md, and docs/cms-content-seeding-plan.md.
Seed the "<page-slug>" page into Payload CMS production-ready, following the modular block architecture and universal schema guardrails.
Execute ephemerally via scratch/, verify database persistence, discard the scratch script, and verify with npm run check:urls, npm run check:component-content, npm run lint, and next build.
```

---

## 1. Core Architectural Rules

1. **CMS Role (Payload 3.x as Primary Source of Truth):**
   - Stores structured content, SEO metadata, media relations, taxonomies, globals, and modular page layouts.
   - Page documents use the **`sections`** blocks field (rendered via `RenderBlocks` in `src/components/RenderBlocks.tsx`).
   - Blocks contain **zero styling/CSS controls**—only semantic data fields. React and Tailwind CSS own all styling, layout geometry, responsive behavior, and animation (`data-aos`).
2. **Page Titles Must Match Page Identity / Slug:**
   - The CMS `title` field (`useAsTitle: "title"`) must be a clean, human-readable title directly representing the page's slug/identity (e.g. `"About Us"`, `"Shopify Plus Agency"`, `"Hire Shopify Developers"`, `"WooCommerce to Shopify Migration"`), free of redundant marketing taglines or branding clutter like `" | Dynamic Dreamz"`.
   - Complete SEO meta titles are preserved in `seo.metaTitle`.
3. **URL Policy (Strictly No Trailing Slashes):**
   - Public page URLs use the no-trailing-slash form everywhere (e.g. `/about-us`, `/shopify-plus-agency`, `/white-label-shopify-development-services`).
   - The homepage `/` is the only structural route exception. `next.config.ts` maintains `trailingSlash: false`.
   - All internal links, canonical URLs, OG URLs, and sitemap entries must follow this policy. Automated verification is enforced by `npm run check:urls`.
4. **Media Storage (Dedicated Media Server):**
   - All uploaded media assets are stored on and served from our dedicated media server at `https://media.dynamicdreamz.net` under `uploads/` via `@payloadcms/plugin-cloud-storage` and `adapter/src/index.ts`.
   - Direct hotlinking to legacy `wp-content/uploads` or `dynamicdreamz.com` at runtime is strictly forbidden.
5. **Local Asset Dual-Resolution & Fallbacks:**
   - In UI components and block renderers, dual resolution is enforced: resolve uploaded media (`media.url`, `media.alt`), and if null or unpopulated, fall back to the canonical local project asset (`/assets/...`).
6. **Zero Temporary Seeding Scripts in Repository:**
   - In accordance with `AGENTS.md`, seeding scripts must **never** be committed to `scripts/` or `src/scripts/`, and seed commands must **never** be registered in `package.json`.
   - Seeding operations are executed ephemerally via temporary scratch scripts in `scratch/` (outside git tracking), verified against the database, and discarded immediately.
7. **Resilient Local Fallback:**
   - `src/lib/registry/**` and `src/content/**` are kept intact in the repository as offline fallbacks and type boundaries, ensuring zero downtime even if PostgreSQL or external network connections drop.

---

## 2. Dedicated Media Server & Media ID Resolution

The project uses a dedicated high-performance media server configured in `adapter/src/index.ts` and registered in `payload.config.ts`.

### How Media Ingestion & ID Resolution Works
When local data references static paths (e.g. `"/assets/clients/supertails.svg"` or `"/assets/proof/shopify-platinum-partner.svg"`):
1. **Pre-seeded Media Records**: All canonical assets from `public/assets/` have corresponding documents in the `media` collection in PostgreSQL.
2. **Sharp & Derivative Generation**: Payload processes raster assets through `sharp` (WebP derivatives: `thumbnail`: 400x300, `card`: 768x512, `hero`: 1920x1080). SVGs (`image/svg+xml`) are uploaded directly without raster resizing.
3. **Relationship Resolution**: When seeding a page, query the `media` collection (or query PostgreSQL directly) to resolve filenames to their Payload relationship ID `{ image: mediaId }`.

```typescript
// Helper to resolve media ID by asset filename
async function getMediaId(payload: any, filename: string): Promise<number | null> {
  const cleanName = filename.split("/").pop() || filename;
  const res = await payload.find({
    collection: "media",
    where: { filename: { equals: cleanName } },
    limit: 1,
    pagination: false,
  });
  return res.docs[0]?.id || null;
}
```

---

## 3. Page Document Schema (`Pages` Collection)

Every page in Payload CMS belongs to the `pages` collection (`src/payload/collections/Pages.ts`) and has the following schema:

```typescript
interface PageDocument {
  id?: number;
  title: string;       // Clean, human-readable title (e.g. "Shopify Plus Agency")
  slug: string;        // Normalized slashless slug (e.g. "shopify-plus-agency" or "home")
  sections: Block[];   // Array of modular section blocks
  seo?: {
    metaTitle?: string;       // Full SEO title (e.g. "Shopify Plus Agency & Platinum Partner | Dynamic Dreamz")
    metaDescription?: string; // Full SEO description
    canonicalUrl?: string;    // Slashless canonical URL (e.g. "https://www.dynamicdreamz.com/shopify-plus-agency")
    metaImage?: number;       // Relation ID to Media collection
    preventIndexing?: boolean;
  };
}
```

---

## 4. Universal Page Archetypes & Block Recipes

Any page in the repository belongs to one of the following archetypes. To seed any page, identify its archetype and apply the corresponding block recipe:

### Archetype 1: Bespoke Core Service Pages

Pages with unique, high-conversion layouts combining video heroes, stage services, evaluation frameworks, proof badges, and interactive sections.

- **Content Source**: `src/content/<slug>.ts` (e.g. `shopify-plus-agency.ts`, `shopify-cro-agency.ts`, `shopify-development-agency.ts`, `ai-services.ts`, `full-stack-development.ts`)
- **Page Component**: `src/lib/registry/pages/<page-name>.tsx`
- **Typical Block Sequence**:
  1. `service-hero-video` (video hero with rating, badges, and CTA)
  2. `industry-brands` (brand logos marquee)
  3. Bespoke service/proof blocks (e.g. `shopify-plus-proof`, `shopify-stage-services`, `shopify-cro-barriers`, `theme-customization-services`, `ai-services-grid`)
  4. `portfolio-showcase` (case study & client work grid)
  5. `pricing-models` (engagement tiers)
  6. `evaluation-framework` or `city-why-choose-boxes`
  7. `happy-clients` (video/card client testimonials)
  8. `faq-accordion` (page-specific FAQs)
  9. `cta-banner` or `white-label-final-cta`

---

### Archetype 2: White-Label Agency Services

Pages tailored for digital agencies seeking confidential white-label implementation partnerships.

- **Slugs**:
  - `white-label-shopify-development-services` (`src/content/white-label-shopify-development.ts`)
  - `white-label-wordpress-development-services` (`src/content/white-label-wordpress-development.ts`)
  - `white-label-website-design-services` (`src/content/white-label-website-design.ts`)
- **Key Blocks**:
  - `service-hero-video` or `city-page-hero`
  - `white-label-counter` or `white-label-stats`
  - `shopify-support-scenarios` or `white-label-why`
  - `delivery-model-comparison`
  - `white-label-tools` (technology icons marquee/grid)
  - `how-agencies-use` (use cases)
  - `pricing-models`
  - `happy-clients`
  - `faq-accordion`
  - `white-label-final-cta`

---

### Archetype 3: Platform-to-Shopify Migration Landing Pages

Standardized and bespoke migration landing pages designed to guide merchants replatforming to Shopify.

- **Bespoke Core Migration Pages**:
  - `shopify-migration`: `service-hero-video` → `industry-brands` → `shopify-migration-services` → `shopify-migration-numbered-grid` → `seo-safe-migration` → `why-choose-shopify-migration` → `portfolio-showcase` → `happy-clients` → `services-case-studies` → `faq-accordion`
  - `shopify-plus-migration-agency`: `service-hero-video` → `industry-brands` → `shopify-migration-services` → `shopify-migration-numbered-grid` → `seo-safe-migration` → `evaluation-framework` → `why-choose-shopify-migration` → `pricing-models` → `happy-clients` → `services-case-studies` → `faq-accordion`
  - `upgrade-to-shopify-plus`: `service-hero-video` → `white-label-counter` → `brand-partners` → `city-page-counter` → `shopify-team-behind-it` → `portfolio-showcase` → `process-timeline` → `city-why-choose-boxes` → `faq-accordion`
  - `magento-to-shopify-plus-migration`: `service-hero-video` → `industry-brands` → `theme-customization-services` → `city-why-choose-boxes` → `evaluation-framework` → `happy-clients` → `faq-accordion` → `cta-banner`
  - `migrating-a-theme-to-online-store-2-0`: `service-hero-video` → `industry-brands` → `theme-customization-services` → `evaluation-framework` → `happy-clients` → `faq-accordion` → `cta-banner`

- **Standard Platform-to-Shopify Landings (10 Pages)**:
  - **Slugs**: `bigcommerce-to-shopify-migration`, `ecwid-to-shopify-migration`, `etsy-to-shopify-migration`, `magento-to-shopify-migration`, `prestashop-to-shopify-migration`, `salesforce-to-shopify-migration`, `square-to-shopify-migration`, `squarespace-to-shopify-migration`, `wix-to-shopify-migration`, `woocommerce-to-shopify-migration`
  - **Template**: `ShopifyMigrationLandingTemplate` (`src/lib/registry/templates.tsx`)
  - **Block Sequence**:
    1. `service-hero-video`: `hero: content.hero`
    2. `brand-partners`: `heading: content.brands.heading`, `items: content.brands.items`
    3. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "green"`): `whyMigrate: { eyebrow, heading, description, boxes }`
    4. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "yellow"`): `secondaryServices: { eyebrow, heading, description, boxes }` (if present)
    5. `migration-process`: `content: content.process`
    6. `evaluation-framework`: `content: content.whyChoose`
    7. `happy-clients`: `items: content.testimonials.items`
    8. `faq-accordion`: `heading: content.faq.heading`, `items: content.faq.items`

---

### Archetype 4: Dedicated Hiring & Developer Services

Pages focused on hiring vetted Shopify and WordPress developers on flexible retainer or hourly models.

- **Slugs**:
  - `hire-shopify-developers` (`src/content/hire-shopify-developers.ts`)
  - `hire-wordpress-developers` (`src/content/hire-wordpress-developers.ts`)
- **Block Sequence**:
  1. `service-hero-video` or `city-page-hero`
  2. `industry-brands` or `white-label-counter`
  3. `theme-customization-services` (why hire / advantages)
  4. `process-timeline` (hiring process steps)
  5. `shopify-stage-services` (developer capabilities)
  6. `ai-empowered-delivery` (AI tooling & delivery stack)
  7. `portfolio-showcase` (recent projects delivered)
  8. `pricing-models` (hiring models: Dedicated, Hourly, Retainer)
  9. `happy-clients`
  10. `faq-accordion`

---

### Archetype 5: Mobile Application Development Services

Ecommerce mobile apps connected directly to Shopify, iOS, and Android.

- **Core Shopify Mobile App**:
  - `shopify-mobile-app-development` (`src/content/shopify-mobile-app-development.ts`):
    `shopify-mobile-app-hero` → `white-label-counter` → `shopify-mobile-app-dtc` → `shopify-mobile-app-work` → `shopify-mobile-app-comparison` → `shopify-mobile-app-experience` → `services-case-studies` → `white-label-process` → `faq-accordion` → `cta-banner`
  - `appmaker-shopify-mobile-app-development`: `hero` (centered) → `industry-brands` → `shopify-app-benefits` → `shopify-app-features` → `shopify-app-process` → `faq-accordion` → `cta-banner`

- **Native & Cross-Platform App Landings (4 Pages)**:
  - **Slugs**: `android-app-development`, `cross-platform-app-development`, `ios-app-development`, `mobile-application-development`
  - **Template**: `MobileAppLandingTemplate` (`src/lib/registry/templates.tsx`)
  - **Block Sequence**:
    1. `shopify-mobile-app-hero`: `content: hero`
    2. `brand-partners`: `heading: brands.heading`, `items: brands.items`
    3. `ai-empowered-delivery`: `content: workflowDelivery`
    4. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "yellow"`): `content: whatWeBuild`
    5. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "green"`): `content: lifecycleServices`
    6. `ai-empowered-delivery`: `content: techStack`
    7. `shopify-migration-numbered-grid` or `process-timeline`: `content: process`
    8. `portfolio-showcase`: `content: portfolio`
    9. `pricing-models`: `content: pricing`
    10. `why-choose-shopify-migration`: `content: whyChoose`
    11. `happy-clients`: `items: testimonials.items`
    12. `faq-accordion`: `heading: faq.heading`, `items: faq.items`

---

### Archetype 6: Industry-Specific Commerce Verticals

Pages showcasing domain expertise across specific commerce sectors.

- **Standard Verticals (8 Pages)**:
  - **Slugs**: `beauty-cosmetics`, `fashion`, `food-beverages`, `health-nutrition`, `home-living`, `jewellery-accessories`, `pet-industry`, `sports-outdoors`
  - **Template**: `IndustryLandingTemplate` (`src/lib/registry/templates.tsx`)
  - **Block Sequence**:
    1. `service-hero-video`: `content: hero`
    2. `brand-partners`: `heading: brands.heading`, `items: brands.items`
    3. `services-case-studies`: `items: caseStudies.items` (if present)
    4. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "yellow"`): `content: challenges`
    5. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "green"`): `content: solutions`
    6. `migration-process`: `content: process`
    7. `two-col-image-with-text`: `content: customDev`
    8. `portfolio-showcase`: `content: portfolio`
    9. `why-choose-shopify-migration`: `content: whyChoose`
    10. `happy-clients`: `items: testimonials.items`
    11. `faq-accordion`: `heading: faq.heading`, `items: faq.items`

- **Bespoke Industry Pages**:
  - `food-beverage-shopify-plus-agency`: `service-hero-video` → `industry-brands` → `two-col-image-with-text` → `features-grid` → `shopify-stage-services` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
  - `dental-clinic-website-development-company`: `service-hero-video` → `industry-brands` → `agency-services` → `features-grid` → `process-timeline` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`

---

### Archetype 7: Other CMS, Frameworks & Tech Services

Pages covering WordPress, WooCommerce, BigCommerce, Magento, Webflow, PHP, UI/UX, and SEO services.

- **Slugs**:
  - `wordpress-development`: `city-page-hero` → `agency-services` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
  - `wordpress-development-company`: `city-page-hero` → `industry-brands` → `agency-services` → `theme-customization-services` → `process-timeline` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
  - `woocommerce-development`: `city-page-hero` → `industry-brands` → `agency-services` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
  - `wordpress-theme-customization-services`: `city-page-hero` → `industry-brands` → `theme-customization-services` → `shopify-team-boxes` → `process-timeline` → `shopify-themes-grid` → `evaluation-framework` → `portfolio-showcase` → `happy-clients` → `faq-accordion`
  - `magento-development`: `city-page-hero` → `industry-brands` → `agency-services` → `evaluation-framework` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
  - `bigcommerce-development`: `city-page-hero` → `industry-brands` → `agency-services` → `evaluation-framework` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion` → `cta-banner`
  - `webflow-development`: `city-page-hero` → `industry-brands` → `shopify-stage-services` → `theme-customization-services` → `portfolio-showcase` → `city-page-counter` → `happy-clients` → `faq-accordion` → `cta-banner`
  - `php-development`: `service-hero-video` → `industry-brands` → `evaluation-framework` → `agency-services` → `process-timeline` → `portfolio-showcase` → `happy-clients` → `faq-accordion`
  - `web-design`: `city-page-hero` → `industry-brands` → `agency-services` → `pricing-models` → `portfolio-showcase` → `happy-clients` → `faq-accordion`
  - `seo-services`: `hero` → `pill-list` → `agency-services` → `shopify-reasons` → `shopify-theme-tech` → `theme-why-choose` → `industries-grid` → `faq-accordion` → `lets-build`

---

### Archetype 8: Shopify Theme Customization Sub-Pages (32 Pages)

Pages dedicated to customizing specific Shopify themes.

- **Slugs (32 Themes)**: `atelier`, `be-yours`, `broadcast`, `colorblock`, `craft`, `dawn`, `dwell`, `expanse`, `fabric`, `heritage`, `horizon`, `impact`, `impulse`, `origin`, `pipeline`, `pitch`, `prestige`, `publisher`, `refresh`, `ritual`, `savor`, `sense`, `spotlight`, `startup`, `stiletto`, `studio`, `tinker`, `trade`, `vessel`, `vision`, `warehouse`, `woodstock` + `-theme-customization`.
- **Template**: `ShopifyThemeCustomizationTemplate` (`src/lib/registry/templates.tsx`)
- **Block Sequence (9 Blocks)**:
  1. `hero` (`variant: "theme"`): `content: content.hero`
  2. `brand-partners`: `heading: content.brands.title`, `items: content.brands.items`
  3. `shopify-theme-tech`: `content: content.features`
  4. `theme-why-choose` (`columns: 3`, `theme: "warm"`, `eyebrowVariant: "dash"`): `content: content.benefits`
  5. `agency-services` (`cardVariant: "services-box"`, `columns: 2`): `content: content.services`
  6. `evaluation-framework` (`variant: "evaluation"`): `content: content.whyChoose`
  7. `portfolio-showcase`: `content: content.portfolio`, `columns: 4`
  8. `faq-accordion`: `heading: content.faqsHeading`, `items: content.faqs`
  9. `cta-banner`: `heading: sharedUiCopy.ctaBanner.heading`, `label: sharedUiCopy.ctaBanner.label`

---

### Archetype 9: WordPress Theme Customization Sub-Pages (17 Pages)

Pages dedicated to customizing specific WordPress & WooCommerce themes.

- **Slugs (17 Themes)**: `astra`, `blocksy`, `bloghash`, `extendable`, `generatepress`, `go`, `hello-biz`, `hello-elementor`, `inspiro`, `kadence`, `kubio`, `neve`, `newsblogger`, `oceanwp`, `popularfx`, `royal-elementor-kit`, `yith-wonder` + `-theme-customization`.
- **Template**: `WordPressThemeCustomizationTemplate` (`src/lib/registry/templates.tsx`)
- **Block Sequence (8 Blocks)**:
  1. `hero` (`variant: "theme"`): `content: content.hero`
  2. `brand-partners`: `heading: content.brands.heading`, `items: content.brands.items`
  3. `theme-why-choose` (`variant: "themeWhyChoose"`): `features: content.features`
  4. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: benefitsVariant`): `benefits: content.benefits`
  5. `theme-why-choose` (`variant: "themeWhyChoose"`, `theme: "yellow"`): `services: content.services`
  6. `evaluation-framework` (`variant: "evaluation"`): `whyChoose: content.whyChoose`
  7. `portfolio-showcase`: `portfolio: content.portfolio`, `columns: 4`
  8. `faq-accordion`: `heading: content.faqsHeading || "Frequently Asked Questions"`, `items: content.faqs`

---

### Archetype 10: Geo & City-Targeted Landing Pages (17 Pages)

Localized service landing pages targeting specific ecommerce hubs.

- **Shopify Cities (11 Pages)**:
  - `shopify-development-company-in-chennai`, `shopify-development-in-bangalore`, `shopify-development-in-barcelona-spain`, `shopify-development-in-delhi`, `shopify-development-in-hyderabad`, `shopify-development-in-los-angeles`, `shopify-development-in-miami`, `shopify-development-in-mumbai`, `shopify-development-in-new-york`, `shopify-development-in-pune`, `shopify-development-in-texas`
  - **Template**: `ShopifyCityLandingTemplate` (`src/lib/registry/templates.tsx`)
  - **Block Sequence**: `city-page-hero` → `brand-partners` → `city-page-counter` → `city-why-choose-boxes` → `agency-services` → `process-timeline` → `portfolio-showcase` → `testimonials-carousel` → `faq-accordion` → `cta-banner`

- **WordPress Cities (6 Pages)**:
  - `wordpress-development-in-ahmedabad`, `wordpress-development-in-bangalore`, `wordpress-development-in-delhi`, `wordpress-development-in-mumbai`, `wordpress-development-in-noida`, `wordpress-development-in-pune`
  - **Template**: `WordPressCityLandingTemplate` (`src/lib/registry/templates.tsx`)
  - **Block Sequence**: `city-page-hero` → `brand-partners` → `city-page-counter` → `process-timeline` → `theme-why-choose` → `portfolio-showcase` → `testimonials-carousel` → `faq-accordion` → `cta-banner`

---

### Archetype 11: Company, Legal & Utility Pages

- **`home`** (10 sections): `hero` (home) → `brand-partners` → `shopify-plus-agency-overview` → `white-label-partner-banner` → `commerce-solutions` → `selected-work-marquee` → `testimonials-carousel` → `integrations-partners` → `latest-insights` → `faq-accordion`
- **`about-us`** (7 sections): `about-hero` → `about-story` → `about-timeline` → `about-founders` → `about-team` → `about-values` → `cta-banner`
- **`contact-us`** (5 sections): `contact-hero` → `contact-form` → `contact-offices` → `contact-details` → `faq-accordion`
- **`career`** (4 sections): `career-hero` → `career-opportunities` → `career-perks` → `career-apply`
- **`our-work`** (4 sections): `our-work-hero` → `industry-brands` → `our-work-projects` → `our-work-case-studies`
- **`privacy-policy`** / **`terms-of-service`**: `legal-content`
- **`site-map`**: `sitemap-directory`
- **`thank-you-*`**: confirmation templates

---

## 5. Universal Schema Guardrails & Transformation Rules

When seeding any page, apply these 10 verified data transformation rules to avoid validation errors, runtime crashes, or visual regressions:

1. **Array vs String Sanitization (`toStr` helper)**:
   - Many content modules provide descriptions as `readonly string[]` (e.g. `teamBehindIt.description`, `portfolio.description`, `whyMigrate.description`).
   - Payload `type: "text"` or `type: "textarea"` throws validation errors if an array is passed.
   - **Rule**:
     ```typescript
     function toStr(val: any): string {
       if (Array.isArray(val)) return val.join("\n\n");
       return typeof val === "string" ? val : "";
     }
     ```
2. **Pricing Models (`pricing-models` block)**:
   - Content often provides `.items` (array of tiers), but Payload schema strictly expects `models: [...]`.
   - **Rule**: `models: (pricing.models || pricing.items || []).map(...)`.
3. **Why Choose Boxes (`city-why-choose-boxes` block)**:
   - Content declares `.items`, while Payload schema expects `boxes: [...]`.
   - **Rule**: `boxes: (content.boxes || content.items || []).map(...)`.
4. **FAQ Rich Text vs Plain String**:
   - In some content modules, `faq.answer` is empty and answers are in `faq.answerParts` (array of text segments).
   - **Rule**: `answer: f.answer || (f.answerParts || []).map((p: any) => p.text).join("")`.
5. **AI Delivery Tools (`ai-empowered-delivery` block)**:
   - Payload schema strictly requires `name` (required) and `description` (required). Content often supplies `category` or `benefit`.
   - **Rule**: `description: item.benefit || item.description || item.category || ""`.
6. **Theme Customization Approach (`theme-customization-approach` block)**:
   - Schema field name is `approaches: [...]` with `{ title, description, step }`. Do NOT pass `cards` or `steps`.
7. **Themes Grid (`shopify-themes-grid` block)**:
   - Schema field is `items: [...]` with `{ name, title, href, image, imageSrc, alt }`. Do NOT pass `themes: [...]`.
8. **Brand Partners Logo Fallbacks**:
   - If a page declares only `{ slug, heading, ariaLabel }` without explicit brand item arrays, fall back to canonical `industryBrandLogos` from `src/content/industries` to avoid empty brand strips.
9. **Media ID Lookup vs Path Fallback**:
   - For every image or logo, search the `media` collection for the filename. If found, pass `{ image: mediaId }`. Also pass the canonical local path `{ imageSrc: assetPath }` to ensure seamless dual resolution.
10. **Drizzle Table Collision Safeguards**:
    - Relational block fields use dedicated database names (e.g. `ServicesCaseStudiesBlock` uses `svcs_items`, `ShopifyCroServicesBlock` uses `scros_items`, `ShopifyStageServicesBlock` uses `sstg_items`). Always use typed Payload Local API (`payload.update` / `payload.create`) so Payload handles Drizzle table mappings automatically.

---

## 6. Step-by-Step Seeding Playbook for Autonomous Agents

When assigned to seed **any** page, execute this 5-step operational protocol:

```text
[Step 1: Identify Page Metadata & Content Sources]
       │ Inspect src/content/<slug>.ts and src/lib/registry/** for the page's sections
       ▼
[Step 2: Check Existing Page Document in Payload CMS]
       │ Query Payload Local API for doc id, slug, and current sections count
       ▼
[Step 3: Generate Ephemeral Scratch Seeder Script]
       │ Create scratch/seed-<slug>.mjs (Outside git tracking, never committed)
       ▼
[Step 4: Execute Seeder & Commit to PostgreSQL]
       │ Run: node --env-file-if-exists=.env --import tsx scratch/seed-<slug>.mjs
       ▼
[Step 5: Verify Persistence, Run Quality Gates & Cleanup]
       │ Verify in DB -> Discard scratch script -> Run lint & build checks
```

---

## 7. Universal Production-Ready Seeding Script Template

Any agent can copy, customize, and execute this template for any service page:

```javascript
// scratch/seed-page.mjs (EPHEMERAL ONLY - NEVER COMMIT TO REPO)
import { getPayload } from "payload";
import config from "@payload-config";

// 1. Import your target page's content module
// e.g. import { ... } from "../src/content/<slug>";

async function main() {
  console.log("Initializing Payload Local API...");
  const payload = await getPayload({ config });

  const targetSlug = "<page-slug>"; // e.g. "shopify-plus-agency"
  const cleanTitle = "<Clean Human-Readable Title>"; // e.g. "Shopify Plus Agency"

  // 2. Build the structured sections array
  const sections = [
    // Add modular blocks matching the page archetype
  ];

  // 3. Upsert into Payload CMS
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: targetSlug } },
    limit: 1,
  });

  if (existing.docs.length > 0) {
    const pageId = existing.docs[0].id;
    console.log(`Updating existing page id=${pageId} (slug: ${targetSlug})...`);
    await payload.update({
      collection: "pages",
      id: pageId,
      data: {
        title: cleanTitle,
        slug: targetSlug,
        sections,
      },
    });
    console.log(`✅ Successfully updated ${targetSlug} with ${sections.length} sections!`);
  } else {
    console.log(`Creating new page document for slug: ${targetSlug}...`);
    await payload.create({
      collection: "pages",
      data: {
        title: cleanTitle,
        slug: targetSlug,
        sections,
      },
    });
    console.log(`✅ Successfully created ${targetSlug} with ${sections.length} sections!`);
  }

  process.exit(0);
}

main().catch((err) => {
  console.error("Seeding error:", err);
  process.exit(1);
});
```

---

## 8. Verification & Quality Gates

After seeding any page:

1. **Verify Database Persistence**:
   - Query the `pages` collection via Payload Local API or PostgreSQL directly.
   - Confirm `sections.length > 0`, all blocks contain populated fields, and `title` matches the clean slug name.
2. **Discard Ephemeral Scratch Scripts**:
   - Remove any temporary scripts from `scratch/`. The repository working tree must remain clean.
3. **Automated Quality Checks**:
   ```bash
   npm run check:urls
   npm run check:component-content
   npm run check:case-studies
   npm run check:blog-posts
   npm run check:asset-duplicates
   npm run lint
   npx next build --webpack
   ```
   All checks must pass with **0 errors**.
4. **Visual & Parity Verification**:
   - Confirm the page renders identically via `RenderBlocks.tsx` compared to the static React baseline.
