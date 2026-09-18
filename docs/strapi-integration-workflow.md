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

To control everything on the site without code, Strapi is divided into 3 pillars:

| Pillar | Strapi Content Type | What It Controls |
|---|---|---|
| **1. Global Settings** | Single Types | Header, Footer, Menus, Phone, Email, Social Links, Announcement Bar |
| **2. Dynamic Collections** | Collection Types | Blogs, Authors, Categories, Case Studies, Testimonials, Team Members |
| **3. Modular Page Builder** | Dynamic Zones (`Page` Collection) | Homepage, About Us, 70+ Service Pages, Theme Pages, City Landing Pages |

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

## Phase 7: Automated Migration of Existing Site Content

> **Working Directory**: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self`

Script reads existing JSON blog posts from `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/src/content/blog-posts/posts/` and pushes them to Strapi API at `http://localhost:1337/api/articles`.

### Script: `/home/ubuntu/Vatsal/DD/dynamicdreamz-self/scripts/migrate-blogs-to-strapi.mjs`
```javascript
import fs from "node:fs";
import path from "node:path";

const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_ADMIN_TOKEN = process.env.STRAPI_API_TOKEN;

const POSTS_DIR = path.resolve(process.cwd(), "src/content/blog-posts/posts");
const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json"));

async function migrate() {
  console.log(`Starting migration of ${files.length} blog posts to Strapi at ${STRAPI_URL}...`);

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const post = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const payload = {
      data: {
        title: post.title,
        slug: post.slug,
        date: post.date,
        displayDate: post.displayDate,
        excerpt: post.excerpt,
        contentBeforeToc: post.contentBeforeToc,
        contentAfterToc: post.contentAfterToc,
        faqs: post.faqs,
        seo: {
          metaTitle: post.seo?.title || post.title,
          metaDescription: post.seo?.description || post.excerpt,
        },
        publishedAt: new Date().toISOString(),
      },
    };

    try {
      const res = await fetch(`${STRAPI_URL}/api/articles`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${STRAPI_ADMIN_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error(`❌ Failed to migrate ${post.slug}:`, await res.text());
      } else {
        console.log(`✅ Successfully migrated: ${post.slug}`);
      }
    } catch (err) {
      console.error(`❌ Error migrating ${post.slug}:`, err);
    }
  }

  console.log("Migration complete!");
}

migrate();
```

To run the migration from the Next.js workspace:
```bash
cd /home/ubuntu/Vatsal/DD/dynamicdreamz-self
STRAPI_API_URL="http://localhost:1337" STRAPI_API_TOKEN="your_full_access_token" node scripts/migrate-blogs-to-strapi.mjs
```
