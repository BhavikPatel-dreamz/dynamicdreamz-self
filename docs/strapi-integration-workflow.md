# Dynamic Dreamz 100% Full-Site Strapi CMS Integration Workflow

Use this workflow to make **100% of website content, pages, media, and navigation** manageable by non-technical team members via **[Strapi Headless CMS](https://github.com/strapi/strapi)**.

No code edits, developer intervention, or Git commits will be required for non-IT staff to:
- Edit the Header, Footer, and Navigation menus.
- Update company contact info, phones, emails, and office addresses.
- Build and edit any Service Page, Landing Page, or About Page using a **Drag-and-Drop Modular Page Builder**.
- Add, update, and publish Blogs and Case Studies.
- Upload, replace, and manage all images, logos, banners, and icons in the Media Library using **Local Server Storage** (or optional Cloud CDN).
- Update SEO metadata (Meta Titles, Descriptions, OG Images) for every page.

---

## Architectural Policy: Legacy Design Freeze & Next.js-First Section Development

> **Effective Strategy Decision**:
> 1. **Legacy Design Freeze**: The legacy WordPress live site is under an official **Design Freeze**. No new designs, layout overhauls, or custom section templates are to be built on the legacy WordPress site.
> 2. **Next.js & Strapi First**: All new section designs and layout requirements are built directly in **Next.js** (`src/components/sections/`) and registered in **Strapi Dynamic Zones** (`cms/src/components/sections/` + `src/components/cms/BlockRenderer.tsx`).
> 3. **Single Direction Progress**: This prevents the "moving target trap" and eliminates double-work. Non-IT staff will visually manage and assemble these new sections directly inside Strapi.

---

## Workspace Directory Map for AI Agents

This project consists of two independent directories located side-by-side:

| Role | Workspace Name | Absolute Path | Working Directory (`Cwd`) |
|---|---|---|---|
| **Frontend** | Next.js App Router | `/home/ubuntu/Vatsal/DD/dynamicdreamz-self` | `/home/ubuntu/Vatsal/DD/dynamicdreamz-self` |
| **Backend CMS** | Strapi Headless CMS (TS + Neon) | `/home/ubuntu/Vatsal/DD/cms` | `/home/ubuntu/Vatsal/DD/cms` |

```text
/home/ubuntu/Vatsal/DD/
├── cms/                                 # Strapi Headless CMS (TypeScript + Neon PostgreSQL)
│   ├── config/                          # Database, plugins, server, and admin configs
│   │   ├── database.ts                  # Neon PostgreSQL connection via pg
│   │   └── plugins.ts                   # Upload provider & security settings
│   ├── src/
│   │   ├── api/                         # Collection & Single Type schemas
│   │   │   ├── article/content-types/   # Blog post schema
│   │   │   ├── case-study/content-types/# Case study schema
│   │   │   ├── page/content-types/      # Modular Page Builder schema
│   │   │   └── global/content-types/    # Header, footer & company schema
│   │   └── components/                  # Dynamic Zone reusable blocks (hero, faq, cta...)
│   └── public/uploads/                  # Persistent local media storage
│
└── dynamicdreamz-self/                  # Next.js 16 App Router (Frontend)
    ├── src/app/                         # Routes, layouts, and API endpoints
    │   ├── api/revalidate/route.ts      # Webhook instant cache purge
    │   └── api/preview/route.ts         # Draft Mode preview handler
    ├── src/components/blocks/           # Universal Block Renderer
    ├── src/content/                     # Local source JSON & TS content (fallback)
    ├── src/lib/strapi.ts                # Typed Strapi API fetch client & image normalizer
    ├── scripts/                         # Automated migration scripts
    └── next.config.ts                   # Remote image allowlist for Strapi uploads
```

---

## One-Prompt Agent Kickoff

Use this prompt to execute any phase of this migration with an AI agent:

```text
Read AGENTS.md, docs/agent-workflow.md, and docs/strapi-integration-workflow.md.
Notice that the project consists of two workspaces:
- Frontend: /home/ubuntu/Vatsal/DD/dynamicdreamz-self
- Backend CMS: /home/ubuntu/Vatsal/DD/cms
Implement <Phase Name or Task> production-ready, executing backend CMS tasks in /home/ubuntu/Vatsal/DD/cms and frontend Next.js tasks in /home/ubuntu/Vatsal/DD/dynamicdreamz-self.
```

---

## Architecture of a 100% Strapi-Managed Site

```mermaid
flowchart TD
    subgraph NonIT["Non-IT Staff (Strapi Admin Panel)"]
        NavEditor["1. Header / Footer Menus & Company Info"]
        PageBuilder["2. Modular Page Builder (Dynamic Zones)"]
        BlogEditor["3. Blogs, Case Studies & Reviews"]
        MediaLib["4. Media Library (Drag & Drop Upload)"]
    end

    subgraph Strapi["Strapi Backend: /home/ubuntu/Vatsal/DD/cms"]
        AdminUI["Strapi Admin Web UI"]
        DB[("Neon PostgreSQL Database")]
        LocalStorage["Local Server Disk<br/>(public/uploads/ - Persistent Volume)"]
        Webhook["Webhook Dispatcher"]
    end

    subgraph NextJS["Next.js App: /home/ubuntu/Vatsal/DD/dynamicdreamz-self"]
        GlobalLayout["Root Layout (Header & Footer from Strapi)"]
        BlockRenderer["Universal Block Renderer (maps Strapi blocks to UI)"]
        RevalAPI["/api/revalidate (Instant Cache Purge)"]
        PreviewAPI["/api/preview (Draft Mode for Unsaved Edits)"]
        ImageOptimizer["Next.js &lt;Image /&gt; (Auto WebP/AVIF Converter)"]
    end

    NonIT --> AdminUI
    AdminUI --> DB
    AdminUI --> LocalStorage
    AdminUI -->|"Clicks Publish"| Webhook
    Webhook -->|"POST instant cache purge"| RevalAPI
    DB -->|"REST / GraphQL API"| NextJS
    LocalStorage -->|"Served via /uploads/..."| ImageOptimizer
    ImageOptimizer -->|"Optimized Fast Images"| Visitor["Website Visitor"]
```

---

## The 3 Pillars of 100% Site Content in Strapi

To control **every single word, image, metric, button, and layout across the entire site without code**, all site content is categorized into 3 pillars:

| Pillar | Strapi Content Type | What It Controls | Scope |
|---|---|---|---|
| **1. Global Site Chrome** | Single Types (`global`) | Header navigation, footer columns, contact details (phone, email, WhatsApp, address), social links, legal links | App-wide |
| **2. Dynamic Content Collections** | Collection Types (`articles`, `authors`, `categories`, `case-studies`, `testimonials`) | 84 Blog Posts, 58 Case Studies, 11+ Client Testimonials, Authors, Categories | High-frequency editorial content |
| **3. Modular Dynamic Zone Pages** | Dynamic Zones (`pages` Collection) | 130+ Service Pages, Theme Customization Pages, Platform Migration Pages, Regional/City Pages, Company Pages (About Us, Life at DD, Career, Contact) | 100% of all marketing and landing pages |

---

## Migration Master Roadmap & Status Tracker

| Phase | Title | Scope & Workspaces Involved | Status |
|---|---|---|---|
| **Phase 0** | Strapi Infrastructure & Local Environment | Neon DB setup, local uploads, API token, environment sync | ✅ Completed |
| **Phase 1** | Content Modeling in Strapi | Schemas for Global, Article, Case Study, Author, Category, Testimonial, Page & 8 Section components | ✅ Completed |
| **Phase 2** | Next.js Strapi Client & Media Normalizer | `src/lib/strapi.ts` typed fetch client, image normalizer, adapters | ✅ Completed |
| **Phase 3** | Universal Block Renderer Component | `BlockRenderer` mapping Strapi dynamic zone blocks to UI components | ✅ Completed |
| **Phase 4** | Global Header & Footer Navigation Sync | Strapi `api::global.global` bootstrap seeding, RootLayout integration | ✅ Completed |
| **Phase 5** | Catch-all Dynamic Page Route & Revalidation | `src/app/[...slug]/page.tsx`, `/api/revalidate` webhook with tag/path purging | ✅ Completed |
| **Phase 6** | Live Draft Preview Mode | `/api/preview`, `/api/exit-preview`, Strapi `admin.preview` handler, draft indicator | ✅ Completed |
| **Phase 7** | Automated Blog Posts Migration | 84 blog posts migrated into Strapi with categories, authors, FAQs, SEO (`scripts/migrate-blogs-to-strapi.mjs`) | ✅ Completed |
| **Phase 8** | 100% Case Studies Migration | 58 case studies migrated into Strapi (`api::case-study.case-study`) with metrics, hero, narrative sections, tags, SEO | 📋 Ready for Execution |
| **Phase 9** | Client Testimonials & Video Reviews Migration | Client quotes, VideoObject reviews, ratings, client roles (`api::testimonial.testimonial`) | 📋 Ready for Execution |
| **Phase 10** | Full-Site Service & Theme Pages Migration (130+ Pages) | Automated parser & seeder (`scripts/migrate-pages-to-strapi.mjs`) converting all `src/content/*.ts` service pages into Strapi modular pages | 📋 Ready for Execution |
| **Phase 11** | Company, Career & Legal Pages Migration | About Us, Life at DD, Career, Contact Us, Privacy Policy, Terms of Service into Strapi | 📋 Ready for Execution |
| **Phase 12** | Media Asset Library Ingestion | Upload local WebP/SVG images into Strapi Media Library for non-IT visual management (`scripts/migrate-media-to-strapi.mjs`) | 📋 Ready for Execution |
| **Phase 13** | Non-IT Staff Visual CMS Operations & Governance Manual | Complete user manual for non-technical staff (editing pages, building funnels, publishing, drafting) | 📋 Ready for Execution |

---

## Phase 0: Strapi Infrastructure & Local Environment

### 1. Strapi Project Directory
The Strapi project is located at:
```text
/home/ubuntu/Vatsal/DD/cms
```

To run the development server:
```bash
cd /home/ubuntu/Vatsal/DD/cms
npm run develop
```
- Open `http://localhost:1337/admin` in your browser.
- Create the **Super Admin** account on first launch.

### 2. Neon PostgreSQL Configuration (`/home/ubuntu/Vatsal/DD/cms/.env`)
Strapi is configured with Neon DB in `/home/ubuntu/Vatsal/DD/cms/.env`:
```env
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://user:password@ep-xyz.aws.neon.tech/neondb?sslmode=require
DATABASE_SSL=true
```

### 3. Media Storage: Local Disk
Strapi stores uploaded media locally in `/home/ubuntu/Vatsal/DD/cms/public/uploads/` by default:
- **Default Provider**: `@strapi/provider-upload-local` (built directly into Strapi core).
- **Cost**: **$0 / Free** (no AWS S3 or Cloudinary bills).

### 4. Create API Token in Strapi Admin
1. In Strapi Admin (`http://localhost:1337/admin`), go to **Settings → API Tokens**.
2. Click **Create new API Token**.
3. **Name**: `Next.js Full Access Token`.
4. **Token type**: `Full Access` (allows reading content and running automated migration scripts).
5. Copy the generated token string.

### 5. Next.js Environment Variables (`/home/ubuntu/Vatsal/DD/dynamicdreamz-self/.env.local`)
Add to `.env.local` in the Next.js project:
```env
# Strapi CMS Configuration
STRAPI_API_URL="http://localhost:1337"
STRAPI_API_TOKEN="your_strapi_full_access_token_here"
STRAPI_PREVIEW_SECRET="generate_a_random_32_char_preview_secret"
STRAPI_REVALIDATE_SECRET="generate_a_random_32_char_webhook_secret"
```

### 6. Remote Image Allowlist (`/home/ubuntu/Vatsal/DD/dynamicdreamz-self/next.config.ts`)
Next.js is already configured in [`next.config.ts`](file:///home/ubuntu/Vatsal/DD/dynamicdreamz-self/next.config.ts) to automatically allow and optimize images from `http://localhost:1337/uploads/**`, `http://127.0.0.1:1337/uploads/**`, and dynamic `STRAPI_API_URL`.

---

## Phase 1: Content Modeling in Strapi

> **Target Directory for Agent**: `/home/ubuntu/Vatsal/DD/cms/src/api/` and `/home/ubuntu/Vatsal/DD/cms/src/components/`

In Strapi, schemas can be created via the **Admin UI** (`http://localhost:1337/admin` → Content-Type Builder) or programmatically generated on disk by the agent in `/home/ubuntu/Vatsal/DD/cms/src/`.

### Schema File Locations on Disk:

| Content Model | Schema Path in Strapi Workspace |
|---|---|
| **Global Settings** (Single Type) | `/home/ubuntu/Vatsal/DD/cms/src/api/global/content-types/global/schema.json` |
| **Article** (Collection Type) | `/home/ubuntu/Vatsal/DD/cms/src/api/article/content-types/article/schema.json` |
| **Case Study** (Collection Type) | `/home/ubuntu/Vatsal/DD/cms/src/api/case-study/content-types/case-study/schema.json` |
| **Author** (Collection Type) | `/home/ubuntu/Vatsal/DD/cms/src/api/author/content-types/author/schema.json` |
| **Category** (Collection Type) | `/home/ubuntu/Vatsal/DD/cms/src/api/category/content-types/category/schema.json` |
| **Testimonial** (Collection Type) | `/home/ubuntu/Vatsal/DD/cms/src/api/testimonial/content-types/testimonial/schema.json` |
| **Page Builder** (Collection Type) | `/home/ubuntu/Vatsal/DD/cms/src/api/page/content-types/page/schema.json` |
| **Hero Block** (Component) | `/home/ubuntu/Vatsal/DD/cms/src/components/sections/hero.json` |
| **Proof Counters Block** (Component) | `/home/ubuntu/Vatsal/DD/cms/src/components/sections/proof-counters.json` |
| **FAQ Accordion Block** (Component) | `/home/ubuntu/Vatsal/DD/cms/src/components/sections/faq-accordion.json` |
| **CTA Banner Block** (Component) | `/home/ubuntu/Vatsal/DD/cms/src/components/sections/cta-banner.json` |
| **Features Grid Block** (Component) | `/home/ubuntu/Vatsal/DD/cms/src/components/sections/features-grid.json` |
| **Process Timeline Block** (Component) | `/home/ubuntu/Vatsal/DD/cms/src/components/sections/process-timeline.json` |

---

## Phase 2: Next.js Strapi Client & Local Media URL Normalizer

> **Target Directory for Agent**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/lib/`

Create typed adapters in Next.js so that fetched Strapi data cleanly converts into existing application models.

### Create `src/lib/strapi.ts`
```ts
const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiFetchOptions {
  params?: Record<string, string>;
  tags?: string[];
  revalidate?: number;
  preview?: boolean;
}

export async function fetchFromStrapi<T>(
  endpoint: string,
  options: StrapiFetchOptions = {}
): Promise<T> {
  const url = new URL(`/api/${endpoint}`, STRAPI_URL);

  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  if (options.preview) {
    url.searchParams.append("publicationState", "preview");
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: {
      tags: options.tags || [],
      revalidate: options.revalidate !== undefined ? options.revalidate : 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch error [${res.status}]: ${res.statusText}`);
  }

  return res.json();
}

/**
 * Normalizes local Strapi image paths (/uploads/image.png)
 * to fully qualified URLs (http://localhost:1337/uploads/image.png)
 */
export function normalizeStrapiImageUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${STRAPI_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}
```

---

## Phase 3: Next.js Universal Block Renderer

> **Target Directory for Agent**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/components/blocks/`

Create `src/components/blocks/block-renderer.tsx` to dynamically translate Strapi Dynamic Zone blocks into your existing React components.

```tsx
import React from "react";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ProofCounterSection } from "@/components/sections/proof-counter-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";

interface BlockRendererProps {
  sections: Array<{
    __component: string;
    id: number | string;
    [key: string]: any;
  }>;
}

export function BlockRenderer({ sections }: BlockRendererProps) {
  if (!sections || !Array.isArray(sections)) return null;

  return (
    <>
      {sections.map((block) => {
        switch (block.__component) {
          case "sections.hero":
            return <ServiceHeroSection key={block.id} {...block} />;

          case "sections.proof-counters":
            return <ProofCounterSection key={block.id} counters={block.counters} />;

          case "sections.faq-accordion":
            return <FaqSection key={block.id} title={block.heading} faqs={block.faqs} />;

          case "sections.cta-banner":
            return (
              <CtaBannerSection
                key={block.id}
                title={block.heading}
                description={block.description}
                buttonText={block.btnText}
                buttonUrl={block.btnUrl}
              />
            );

          case "sections.happy-clients":
            return <HappyClientSection key={block.id} testimonials={block.testimonials} />;

          case "sections.case-studies":
            return <ServicesCaseStudiesSection key={block.id} caseStudies={block.caseStudies} />;

          default:
            console.warn(`Unrecognized Strapi block component: ${block.__component}`);
            return null;
        }
      })}
    </>
  );
}
```

---

## Phase 4: Global Settings Integration (Header & Footer)

> **Target Directory for Agent**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/app/`

Update `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/app/layout.tsx`:

```tsx
import { fetchFromStrapi } from "@/lib/strapi";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

async function getGlobalSettings() {
  try {
    const res = await fetchFromStrapi<{ data: any }>("global", {
      params: { populate: "deep" },
      tags: ["global-settings"],
    });
    return res.data?.attributes || null;
  } catch {
    return null; // Graceful fallback to local default data
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const globalData = await getGlobalSettings();

  return (
    <html lang="en">
      <body>
        <Header navigation={globalData?.header?.navigation} logo={globalData?.header?.logo} />
        {children}
        <Footer footerData={globalData?.footer} company={globalData?.company} />
      </body>
    </html>
  );
}
```

---

## Phase 5: Dynamic Page Route & Revalidation

> **Target Directory for Agent**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/app/`

### 1. Catch-All Route: `src/app/[...slug]/page.tsx`
Renders any page created by non-IT staff in Strapi:

```tsx
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import type { Metadata } from "next";

import { fetchFromStrapi } from "@/lib/strapi";
import { BlockRenderer } from "@/components/blocks/block-renderer";
import { createPageMetadata } from "@/data/seo";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

async function getPageBySlug(slug: string, isDraft: boolean) {
  const res = await fetchFromStrapi<{ data: any[] }>("pages", {
    params: {
      "filters[slug][$eq]": slug,
      populate: "deep",
    },
    tags: [`page-${slug}`, "pages"],
    preview: isDraft,
  });

  return res.data?.[0]?.attributes || null;
}

export default async function DynamicPageRoute({ params }: PageProps) {
  const resolved = await params;
  const slug = resolved.slug ? resolved.slug.join("/") : "home";
  const draft = await draftMode();
  const page = await getPageBySlug(slug, draft.isEnabled);

  if (!page) notFound();

  return (
    <main id="main-content">
      {draft.isEnabled && (
        <div className="fixed bottom-4 right-4 z-50 rounded bg-amber-500 px-4 py-2 text-white font-bold">
          Draft Preview &bull; <a href="/api/exit-preview" className="underline">Exit</a>
        </div>
      )}
      <BlockRenderer sections={page.sections} />
    </main>
  );
}
```

### 2. Instant Revalidation Webhook Handler: `src/app/api/revalidate/route.ts`
Purges the cache on publish/unpublish:

```ts
import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.STRAPI_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const payload = await req.json();
  const model = payload.model; // e.g. "page", "article", "global", "case-study"
  const slug = payload.entry?.slug;

  if (model === "global") {
    revalidateTag("global-settings");
    revalidatePath("/", "layout");
  } else if (model === "page") {
    revalidateTag("pages");
    if (slug) revalidateTag(`page-${slug}`);
    revalidatePath(slug === "home" ? "/" : `/${slug}`);
  } else if (model === "article") {
    revalidateTag("blogs");
    if (slug) revalidateTag(`blog-${slug}`);
  }

  return NextResponse.json({ revalidated: true, model, slug, now: Date.now() });
}
```

---

## Phase 6: Live Draft Preview Mode

> **Target Directory for Agent**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/app/api/`

- **Preview Endpoint**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/app/api/preview/route.ts`
- **Exit Preview Endpoint**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/app/api/exit-preview/route.ts`

---

## Phase 7: Automated Migration of Existing Blog Posts (84 Posts) - ✅ Completed

> **Working Directory**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self`

Script reads all 84 existing JSON blog posts from `src/content/blog-posts/posts/` and pushes them to Strapi API at `http://localhost:1337/api/articles`.

### Execution Summary & Results:
- **Categories**: Automatically provisioned `Shopify`, `eCommerce`, `WordPress`, and `Big-Commerce` in Strapi (`api::category.category`).
- **Authors**: Automatically provisioned `Tejal Parekh` (Sr. SEO Expert) and `Rizwan Shaikh` (Content Team Lead) in Strapi (`api::author.author`).
- **Articles Migrated**: **84 of 84 (100% success rate, 0 failures)**.
- **Data Imported**: Title, slug, publication date, display date, excerpt, content before/after TOC, FAQs (`elements.faq-item`), author relations, category relations, and full SEO metadata (`shared.seo`).

### Migration Script: [`scripts/migrate-blogs-to-strapi.mjs`](file:///home/ubuntu/Vatsal/DD/dynamicdreamz-self/scripts/migrate-blogs-to-strapi.mjs)
Run anytime to sync or update blog posts:
```bash
npm run migrate:blogs
```

---

## Phase 8: 100% Case Studies Migration & Dynamic Routing (58 Projects)

> **Goal**: Enable non-IT staff to manage, edit, add, or unpublish any client case study and project portfolio item from Strapi without code.

### 1. Source Data Inventory
- **Location**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/content/case-studies-items.json` and `src/content/case-study-details.json`.
- **Count**: 58 detailed portfolio case studies (e.g., GNC India, Ranavat, Don J, etc.).

### 2. Strapi Schema: `api::case-study.case-study`
File: `/home/ubuntu/Vatsal/DD/cms/src/api/case-study/content-types/case-study/schema.json`

| Field | Type | Description |
|---|---|---|
| `title` | `string` (required) | Project title (e.g. "GNC India: Conversion-Focused Shopify Redesign") |
| `slug` | `uid` (required) | URL slug (`gnc-india`, `/case-studies/gnc-india`) |
| `client` | `string` | Client brand name (e.g. "GNC India", "Ranavat") |
| `industry` | `string` | Industry taxonomy (e.g. "Health & Nutrition", "Beauty & Cosmetics") |
| `technology` | `string` | Tech stack (e.g. "Shopify / Shopify Plus", "WordPress") |
| `location` | `string` | Geographical location (e.g. "India", "USA") |
| `excerpt` | `text` | Card summary for archive index |
| `content` | `richtext` | Editorial overview |
| `heroImage` | `media` (single) | High-res showcase banner |
| `sections` | `json` | Structured narrative sections (Problem, Approach, Delivered Features) |
| `metrics` | `component` (repeatable `elements.counter`) | Key results (e.g. +45% Speed, 2.4x Conversion Lift) |
| `tags` | `json` | Taxonomy tags for filtering |
| `testimonial` | `relation` (`oneToOne` to `api::testimonial.testimonial`) | Client review quote link |
| `seo` | `component` (`shared.seo`) | Meta title, description, keywords, OG image |

### 3. Migration Script: `scripts/migrate-case-studies-to-strapi.mjs`
Automated migration script that:
1. Reads all 58 case study records from `src/content/case-study-details.json` and `src/content/case-studies-items.json`.
2. Checks Strapi for existing entries by `slug` (`GET /api/case-studies?filters[slug][$eq]=slug&status=draft`).
3. Maps client, metrics, narrative sections, hero image paths, and SEO metadata into Strapi format.
4. Inserts new entries via `POST /api/case-studies` or updates via `PUT /api/case-studies/:documentId`.
5. Publishes all records (`publishedAt`).

To run:
```bash
node scripts/migrate-case-studies-to-strapi.mjs
```

### 4. Next.js Route Integration
- Update `src/app/case-studies/page.tsx` to query Strapi's `getCaseStudies()` with fallback to local JSON.
- Update `src/app/case-studies/[slug]/page.tsx` to dynamically query Strapi's `getCaseStudyBySlug(slug)` with `preview: draft.isEnabled`.
- Wire cache tags `case-studies` and `case-study-[slug]` into `/api/revalidate` for instant publishing updates.

---

## Phase 9: Client Testimonials & Video Reviews Migration

> **Goal**: Allow non-technical staff to add new client reviews, video testimonials, quotes, and star ratings directly in Strapi.

### 1. Source Data Inventory
- **Location**: `src/content/home.ts`, `src/content/about-us.ts`, `src/content/shopify-plus-agency.ts`, and `src/content/service-hero-reviews.ts`.
- **Count**: 11+ featured video reviews, 50+ client quotes and star ratings.

### 2. Strapi Schema: `api::testimonial.testimonial`
File: `/home/ubuntu/Vatsal/DD/cms/src/api/testimonial/content-types/testimonial/schema.json`

| Field | Type | Description |
|---|---|---|
| `clientName` | `string` (required) | Client full name (e.g. "Rohan Sharma") |
| `clientRole` | `string` | Role/Title (e.g. "Founder & CEO", "Ecommerce Director") |
| `company` | `string` | Company or Brand name (e.g. "Ranavat", "GNC") |
| `quote` | `text` (required) | Full testimonial text quote |
| `rating` | `integer` (1-5) | Star rating (default 5) |
| `avatar` | `media` (single) | Client photo |
| `videoUrl` | `string` | YouTube/Vimeo video interview URL |
| `videoThumbnail` | `media` (single) | Video thumbnail poster image |
| `platform` | `enumeration` | `clutch`, `shopify_plus`, `google`, `direct` |
| `featured` | `boolean` | Display on homepage hero review rail |

### 3. Migration Script: `scripts/migrate-testimonials-to-strapi.mjs`
- Extracts all testimonials from Next.js content files.
- Creates entries in `api::testimonial.testimonial`.
- Next.js testimonial components (`HappyClientCard`, `ServiceHeroReviews`, video modals) query `getTestimonials()` from Strapi.

---

## Phase 10: Full-Site Service & Theme Pages Migration (130+ Pages)

> **Goal**: Migrate 100% of all marketing, service, theme customization, platform migration, and regional city landing pages into Strapi's **Modular Dynamic Zone Page Builder** (`api::page.page`). Non-IT staff will have full visual control to edit every section, copy, button, and image on all 130+ pages.

### 1. Comprehensive Page Inventory (130+ Pages)

| Page Category | Routes Included | Source Files |
|---|---|---|
| **Core Shopify Services (25+)** | `/shopify-plus-agency`, `/shopify-development-agency`, `/shopify-migration`, `/shopify-cro-agency`, `/shopify-experts`, `/hire-shopify-developers`, `/shopify-certified-developers`, `/shopify-apps`, `/shopify-maintenance-services`, `/shopify-mobile-app-development`, `/upgrade-to-shopify-plus`, `/white-label-shopify-development-services`, etc. | `src/content/shopify-*.ts`, `src/content/hire-*.ts` |
| **Theme Customization (35+)** | `/impulse-theme-customization`, `/prestige-theme-customization`, `/broadcast-theme-customization`, `/dawn-theme-customization`, `/warehouse-theme-customization`, `/refresh-theme-customization`, `/impact-theme-customization`, `/expanse-theme-customization`, `/motion-theme-customization`, etc. | `src/content/*-theme-customization.ts` |
| **Platform Migrations (15+)** | `/magento-to-shopify-migration`, `/magento-to-shopify-plus-migration`, `/woocommerce-to-shopify-migration`, `/bigcommerce-to-shopify-migration`, `/wix-to-shopify-migration`, `/squarespace-to-shopify-migration`, `/prestashop-to-shopify-migration`, `/etsy-to-shopify-migration`, `/salesforce-to-shopify-migration`, etc. | `src/content/*-to-shopify-migration.ts` |
| **Regional & City Pages (15+)** | `/shopify-development-in-texas`, `/shopify-development-in-los-angeles`, `/shopify-development-in-new-york`, `/shopify-development-in-miami`, `/shopify-development-in-mumbai`, `/shopify-development-in-delhi`, `/shopify-development-in-bangalore`, `/shopify-development-in-barcelona-spain`, etc. | `src/content/shopify-development-in-*.ts` |
| **WordPress & Custom Dev (15+)** | `/wordpress-development`, `/wordpress-development-company`, `/wordpress-theme-customization-services`, `/woocommerce-development`, `/php-development`, `/webflow-development`, `/web-design`, `/white-label-wordpress-development-services`, etc. | `src/content/wordpress-*.ts`, `src/content/web-*.ts` |
| **Industry Solutions (10+)** | `/fashion`, `/food-beverages`, `/healthcare`, `/pet-industry`, `/beauty-cosmetics`, etc. | `src/content/fashion.ts`, `src/content/food-beverages.ts`, etc. |
| **Company & Support (10+)** | `/about-us`, `/life-dynamicdreamz`, `/career`, `/career-apply-now`, `/contact-us`, `/request-quote`, `/resources`, `/privacy-policy`, `/terms-of-service`, `/site-map` | `src/content/about-us.ts`, `src/content/career.ts`, etc. |

### 2. Complete Strapi Dynamic Zone Section Library

All 130+ pages are built from reusable, modular section components in `cms/src/components/sections/`:

1. **`sections.hero`**:
   - `title`, `description`, `subheading`, `eyebrow`, `ctaLabel`, `ctaHref`, `variant` (`standard`, `split`, `centered`), `showReviews`, `image`
2. **`sections.proof-counters`**:
   - `heading`, `description`, `counters` list (`value`, `suffix`, `label`, `description`)
3. **`sections.faq-accordion`**:
   - `heading`, `eyebrow`, `description`, `faqs` list (`question`, `answer`)
4. **`sections.cta-banner`**:
   - `heading`, `description`, `btnText`, `btnUrl`
5. **`sections.features-grid`**:
   - `heading`, `description`, `items` (`title`, `description`, `icon`, `link`)
6. **`sections.process-timeline`**:
   - `heading`, `description`, `steps` (`stepNumber`, `title`, `description`)
7. **`sections.happy-clients`**:
   - `heading`, `description`, `clientLogos` list
8. **`sections.case-studies`**:
   - `heading`, `description`, `categoryFilter`, `limit`
9. **`sections.rich-text`**:
   - `heading`, `contentHtml` (WYSIWYG editor for long-form explanatory copy)
10. **`sections.split-content`**:
    - `heading`, `subheading`, `body`, `image`, `imagePosition` (`left` or `right`), `ctaLabel`, `ctaHref`
11. **`sections.comparison-table`**:
    - `heading`, `description`, `headers` list, `rows` list (e.g., Shopify vs WooCommerce, Plus vs Standard)

### 3. Automated Page Migration Script: `scripts/migrate-pages-to-strapi.mjs`

An automated migration script that iterates over all 130+ page data definitions in `src/content/*.ts`:
1. **Dynamic Content Parsing**: Analyzes each page's content export (hero copy, counters, cards, timelines, FAQs, CTA banners, SEO).
2. **Section Normalization**: Transforms the page's structure into Strapi 5 Dynamic Zone blocks matching the component schemas.
3. **Idempotent Seeding**: Queries Strapi by slug; creates new page entries or updates existing ones.
4. **SEO Attributes**: Maps page meta title, meta description, keywords, and canonical paths to `shared.seo`.
5. **Batch Publishing**: Automatically publishes all 130+ pages with `publishedAt` timestamps.

Execution:
```bash
node scripts/migrate-pages-to-strapi.mjs
```

### 4. Next.js Routing Architecture for 100% Strapi-Powered Pages

- **Catch-All Route**: [`src/app/[...slug]/page.tsx`](file:///home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/app/[...slug]/page.tsx) handles all incoming requests dynamically.
- **Priority & Coexistence**:
  1. Next.js queries Strapi via `getPageBySlug(slug, { preview: isDraft })`.
  2. If page exists in Strapi, renders dynamically with [`BlockRenderer`](file:///home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/components/blocks/block-renderer.tsx).
  3. If a legacy static route exists, Strapi CMS overrides it seamlessly once published in CMS.
  4. If draft mode is active, live preview reflects real-time CMS changes immediately.

---

## Phase 11: Company, Career & Legal Pages Migration

> **Goal**: Move core brand and institutional pages into Strapi so HR, recruiting, and operations teams can update job openings, policies, and company culture content without developer assistance.

### 1. Target Pages
- `/about-us` (Our history, mission, leadership, milestones)
- `/life-dynamicdreamz` (Work culture, perks, gallery photos)
- `/career` & `/career-apply-now` (Open roles, job requirements, salary ranges, benefits)
- `/contact-us` & `/request-quote` (Inquiry form content, offices, branch emails)
- `/privacy-policy` & `/terms-of-service` (Legal disclosures, policy updates)

### 2. Implementation
- Model specific career roles in Strapi (`api::job-posting.job-posting`) with department, location, experience, and JD richtext.
- Model company legal/institutional pages in `pages` with `sections.rich-text` and `sections.split-content`.

---

## Phase 12: Media Asset Library Ingestion to Strapi Local Storage

> **Goal**: Ingest all existing project images, logos, banners, and icons from `public/assets/` into Strapi's Media Library so non-technical staff can browse, select, replace, and upload assets visually.

### 1. Ingestion Script: `scripts/migrate-media-to-strapi.mjs`
- Recursively scans `public/assets/` for all WebP, SVG, and PNG assets.
- Uploads assets to Strapi Media Library via `POST /api/upload` multipart API.
- Stores mapping of local asset path (`/assets/...`) to Strapi media file ID/URL.
- Updates references in Strapi pages, articles, and case studies to point to the uploaded Strapi media entities.

### 2. Result for Non-IT Staff:
- Non-IT editors can open the Strapi **Media Library** tab.
- Drag-and-drop new images directly from their desktop.
- Re-use existing media across any page without developer involvement.

---

## Phase 13: Non-IT Staff Visual Operations & Governance Manual

> **Goal**: Provide a clear, visual reference manual for non-technical team members on how to edit and manage every part of the site.

### 1. Content Editing Guide for Non-IT Editors

#### A. Editing Global Navigation & Footer
1. Log in to Strapi Admin (`http://localhost:1337/admin`).
2. Go to **Single Types → Global Settings**.
3. Under **Navigation Groups**, click on any menu (e.g. "Services", "Shopify").
4. Add, edit, or remove menu links, labels, and descriptions.
5. Under **Footer Columns**, adjust footer links or copyright text.
6. Click **Save** → Changes reflect on the live site immediately via instant cache revalidation.

#### B. Editing Existing Service or Landing Pages
1. Go to **Content Manager → Collection Types → Page**.
2. Search or select the page you want to edit (e.g. `shopify-plus-agency`).
3. Under **Sections (Dynamic Zone)**:
   - Expand **Hero Block** to change heading, subheading, CTA text, or banner image.
   - Expand **Proof Counters** to update numbers (e.g. "1200+ Happy Clients").
   - Expand **FAQ Accordion** to add new questions and answers.
   - Drag and drop sections up or down to re-order the visual page layout.
4. Click **Preview** to view your edits in real-time in Next.js Draft Mode.
5. Click **Publish** → Webhook purges Next.js cache; changes go live instantly.

#### C. Creating a Brand New Landing Page or Campaign Funnel
1. Go to **Collection Types → Page → Create New Entry**.
2. Enter **Title** (e.g. `Shopify Headless Launch`) and **Slug** (e.g. `shopify-headless-launch`).
3. Click **Add a component to Sections**:
   - Choose **Hero Block** → Fill in copy and button URL.
   - Choose **Features Grid** → Add 4 feature cards with icons.
   - Choose **Proof Counters** → Add 3 key stats.
   - Choose **CTA Banner** → Add final closing offer.
4. Configure **SEO**: Fill in Meta Title and Description.
5. Click **Preview** to verify the page in Draft Mode.
6. Click **Publish** → The new route `dynamicdreamz.com/shopify-headless-launch` is immediately live!

#### D. Publishing New Blog Articles & Case Studies
1. Go to **Collection Types → Articles** or **Case Studies**.
2. Click **Create new entry**.
3. Write content using the Richtext WYSIWYG editor.
4. Select the Author and Categories from the dropdowns.
5. Upload or choose a cover image from the Media Library.
6. Click **Publish**.

### 2. User Roles & Governance (RBAC)
- **Author**: Can create and edit their own drafts; cannot publish directly to live site.
- **Editor**: Can review drafts, make edits, and trigger Live Preview.
- **Publisher / Admin**: Has full permissions to publish, unpublish, and configure site-wide settings.

