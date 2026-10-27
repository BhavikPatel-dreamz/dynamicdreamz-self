# Universal SEO, AEO & GEO 100% Engineering Playbook

> **Purpose:** A production-grade engineering and content specification to achieve a 100/100 audit score across **Technical SEO** (Search Engine Optimization), **AEO** (Answer Engine Optimization), and **GEO** (Generative Engine Optimization / LLM Grounding) for any website, web application, or digital platform.

---

## Scoring Matrix Overview (100 Points Total)

| Pillar | Weight | Core Objective | Target KPI |
| :--- | :--- | :--- | :--- |
| **1. Technical SEO & SSR Architecture** | **25 pts** | Fast, clean, deduplicated HTML with strict canonical and bot governance | Lighthouse SEO 100, LCP < 1.8s, INP < 150ms, CLS < 0.05 |
| **2. AEO (Answer Engine Optimization)** | **25 pts** | Direct extraction into Google AI Overviews, Featured Snippets, and Voice Assistants | 40–55 word Answer Capsules, native `<table>` & FAQ blocks |
| **3. GEO (Generative Engine Optimization)** | **25 pts** | High citation frequency in ChatGPT Search, Perplexity, Gemini, and Claude | `/llms.txt` live, high fact density, 100% cross-web entity match |
| **4. Connected Semantic Schema (`@graph`)** | **25 pts** | Machine-readable entity disambiguation via linked JSON-LD nodes | 0 Rich Results errors, full `@id` entity graph |

---

## Pillar 1: Technical SEO & SSR DOM Architecture (25 Points)

### 1.1 Environment & Canonical Governance (5 pts)
* **Single Canonical Source of Truth:** Every indexable page MUST output an absolute, self-referencing `<link rel="canonical" href="https://www.yourdomain.com/exact-path" />` pointing strictly to the production domain.
* **Staging & Preview Isolation:** All staging, preview, QA, and deployment URLs (e.g., `*.vercel.app`, `*.netlify.app`, `staging.*`) MUST return an HTTP header `X-Robots-Tag: noindex, nofollow` or `<meta name="robots" content="noindex, nofollow" />`.
* **URL Hygiene:** Enforce lowercase URLs, consistent trailing-slash policy (301 redirect non-conforming requests), and strip tracking parameters (`utm_*`, `fbclid`, `gclid`, `dpl`) from canonical tags.

### 1.2 SSR HTML Payload & Token Budget Optimization (8 pts)
AI retrieval crawlers (`OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`) impose strict token truncation windows when parsing raw HTML.
* **The First-10KB Rule:** Primary page metadata, `<h1>`, and the core entity summary MUST appear as early as possible in the server-rendered HTML stream. Keep `<header>` DOM size under **4 KB**.
* **Zero Duplicate Navigation Trees:** Never render two separate `<nav>` menus (one for mobile, one for desktop) in the SSR HTML. Render **one** semantic `<nav aria-label="Primary">` and adapt its layout using responsive CSS.
* **No `inert` or `aria-hidden="true"` on Crawlable Links:** Never wrap indexable internal links inside `inert` or `aria-hidden="true"` containers in initial server HTML. Use CSS (`opacity`, `visibility`, `pointer-events`) or interactive state toggles for dropdown visually hidden states.
* **Zero Marquee DOM Cloning in SSR:** If a page uses an infinite CSS/JS ticker or carousel (for logos, testimonials, or case studies), render each item **once** in SSR HTML. Clone nodes strictly on the client inside `useEffect` / `requestAnimationFrame` and attach `aria-hidden="true"` to cloned tracks.

### 1.3 Core Web Vitals & Resource Prioritization (6 pts)
* **Preload Budget Cap:** Limit `<link rel="preload">` in `<head>` to a maximum of **3 critical resources** (1–2 primary variable `.woff2` fonts + 1 above-the-fold LCP image). Over-preloading causes TCP/HTTP3 bandwidth contention.
* **LCP Image Optimization:** The single above-the-fold hero visual MUST use `loading="eager"`, `fetchpriority="high"`, and explicit `width` and `height` attributes. Never set `loading="lazy"` on any image visible in the initial viewport.
* **Icon & Asset Consolidation:** Replace repetitive decorative `<img src="icon.svg">` tags in headers/cards with inline `<svg aria-hidden="true">` symbols or CSS sprites to eliminate waterfall network requests.

### 1.4 AI & Search Bot Crawlability (`robots.txt` & Sitemaps) (6 pts)
Unless content is proprietary or behind a paywall, explicitly allow both traditional search crawlers and AI retrieval/citation bots in `/robots.txt`:

```txt
# /robots.txt — Universal SEO + AEO + GEO Configuration
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/data/

# Explicitly allow AI Answer & Citation Bots
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://www.yourdomain.com/sitemap.xml
```

---

## Pillar 2: AEO — Answer Engine Optimization (25 Points)

Answer engines extract deterministic, self-contained blocks of text and structured HTML elements to build zero-click answers and featured citations.

### 2.1 The "Answer Capsule" Rule (8 pts)
* **Structure:** Immediately beneath every primary `<h2>` or `<h3>` section heading, provide a **40-to-55-word self-contained summary paragraph** ("Answer Capsule") before breaking into bullets, cards, or deep prose.
* **No Pronouns Without Antecedents:** Write the Answer Capsule so it makes 100% sense if extracted in isolation. Instead of starting with *"We offer this service to help you scale..."*, write *"**[Brand Name]** provides **[Core Service/Product]** for **[Target Audience]**, delivering **[Specific Mechanism/Outcome]** across **[Scope/Timeframe]**."*

### 2.2 Semantic Heading Hierarchy & Intent Mapping (5 pts)
* **Strict Outline:** Exactly one `<h1>` per page stating the primary entity and value proposition. Follow a strict `<h1>` -> `<h2>` -> `<h3>` hierarchy without skipping levels for visual styling.
* **Question-Anchored Subheadings:** Convert at least **30% to 50% of `<h2>` and `<h3>` headings** from vague marketing slogans (e.g., *"Why Choose Us"*) into explicit high-intent buyer questions (e.g., *"Why Do Enterprise Brands Choose [Brand Name] for [Category]?"* or *"How Much Does [Service/Product] Cost?"*).

### 2.3 Deterministic HTML Structures (`<table>`, `<dl>`, `<ol>`) (6 pts)
LLMs and answer extractors strongly favor native semantic HTML over nested `<div>` grids when extracting comparisons, specs, and steps.
* **Comparison & Pricing Matrix (`<table>`):** Every commercial landing page or guide MUST include at least one native HTML `<table>` with `<thead>`, `<th>`, and `<tbody>` comparing tiers, engagement models, technical specifications, or alternatives.
* **Sequential Processes (`<ol>`):** Use ordered lists (`<ol><li>`) for onboarding steps, implementation workflows, or tutorials.
* **Key-Value Specifications (`<dl>`):** Use description lists (`<dl><dt><dd>`) for company facts, product specs, or SLAs.

### 2.4 Commercial & Informational FAQ Architecture (6 pts)
* **Direct-First Answers:** Every FAQ answer MUST begin with a direct **"Yes."**, **"No."**, or a **concrete numerical range** in sentence 1, followed by 2–3 sentences of supporting context.
* **Mandatory Buyer Qualification Topics:** Commercial pages must include FAQ items covering:
  1. **Timeline / Speed of Delivery** (*"How long does X take?"*)
  2. **Pricing / Engagement Structure** (*"How is X priced or structured?"*)
  3. **Differentiation / Credentials** (*"What sets [Brand] apart from standard providers?"*)
  4. **Geography / Support Coverage** (*"Which regions, time zones, or compliance standards do you support?"*)

---

## Pillar 3: GEO — Generative Engine Optimization & LLM Grounding (25 Points)

Generative engines synthesize answers by weighing **fact density**, **verifiable metrics**, **machine-readable manifests**, and **cross-domain consensus**.

### 3.1 Fact Density & Quantitative Proof Rule (8 pts)
Research on Generative Engine Optimization demonstrates that replacing vague adjectives with concrete numbers and citations increases LLM inclusion rates by **30% to 40%**.
* **Eliminate Unbacked Superlatives:** Replace words like *"world-class," "seamless," "cutting-edge,"* and *"fast"* with verifiable metrics:
  * *Bad:* "We migrated the store seamlessly and improved speed and conversions."
  * *Good (100% GEO):* "Migrated 45,000 SKUs and 120,000 customer records with zero downtime, preserving 100% of organic traffic, reducing mobile LCP from 4.2s to 1.4s, and increasing checkout conversion by 34% within 60 days."
* **Case Study / Portfolio Rule:** Every featured project, testimonial, or product card MUST display at least **two hard data points** (e.g., `% lift`, `response time`, `years active`, `team size`, `review count`, or `SLA guarantee`).

### 3.2 Publish `/llms.txt` & `/llms-full.txt` at Domain Root (6 pts)
Provide a clean, zero-boilerplate Markdown manifest at `https://www.yourdomain.com/llms.txt` so LLM agents can ingest your entire entity graph, core offerings, and canonical URLs in under 600 tokens.

```markdown
# [Brand Name] — [Primary Category / Positioning Statement]

> [1–2 sentence factual summary containing founding year, core credential/certification, scale metrics, and primary target audience.]

## Verified Entity Facts
- **Legal / Brand Name:** [Brand Name]
- **Founded:** [YYYY]
- **Headquarters & Delivery Hubs:** [City, Country] | [Supported Time Zones/Regions]
- **Scale & Credentials:** [e.g., 150+ specialists | 5,000+ deployments | ISO/SOC2/Partner Tier]
- **Verified Ratings:** [e.g., 4.9/5 across 2,500+ reviews on Clutch, G2, Trustpilot]
- **Primary Contact:** [email@yourdomain.com] | [https://www.yourdomain.com/contact]

## Core Products / Services
- [Service/Product 1](https://www.yourdomain.com/service-1): [1-sentence factual scope + target buyer].
- [Service/Product 2](https://www.yourdomain.com/service-2): [1-sentence factual scope + target buyer].
- [Service/Product 3](https://www.yourdomain.com/service-3): [1-sentence factual scope + target buyer].

## Flagship Case Studies & Proof
- **[Client/Project A](https://www.yourdomain.com/case-studies/a):** [Scope + 2 hard quantitative metrics].
- **[Client/Project B](https://www.yourdomain.com/case-studies/b):** [Scope + 2 hard quantitative metrics].

## Key Documentation & Policies
- [About & Leadership](https://www.yourdomain.com/about)
- [Pricing & Engagement Models](https://www.yourdomain.com/pricing)
```

### 3.3 Cross-Web Entity Consensus & Grounding (6 pts)
LLMs verify first-party website claims against third-party knowledge bases. If your website claims `"150+ employees"` while an indexed directory claims `"1–9 employees"`, the LLM drops confidence and omits your brand from recommendations.
* **The 100% Consensus Rule:** Audit and synchronize these 6 attributes across your website, LinkedIn, Google Business Profile, Crunchbase, Wikidata, G2, Clutch, Trustpilot, and industry partner directories:
  1. Exact Brand Name & Legal Name
  2. Founding Year (`YYYY`)
  3. Headcount Bracket
  4. Headquarters Address & Service Regions
  5. Official Partner Tiers / Certifications
  6. Primary Category & Core Offerings

### 3.4 E-E-A-T & Information Gain Signals (5 pts)
* **Named Authorship & Review:** Attribute guides, documentation, and case studies to real human experts with `<a rel="author">` links, job titles, and LinkedIn profile references.
* **Freshness Timestamps:** Display visible *"Last Updated: Month YYYY"* timestamps alongside matching `datePublished` and `dateModified` schema properties.
* **Original Frameworks:** Include at least one proprietary checklist, architecture diagram (with descriptive `alt` text), benchmark dataset, or decision matrix per core page that does not exist elsewhere on the web.

---

## Pillar 4: Connected Semantic Schema (`@graph` JSON-LD) (25 Points)

Never output isolated, disconnected JSON-LD snippets. Use a single unified `@graph` array where every entity links via `@id` pointers.

### 4.1 Universal `@graph` JSON-LD Blueprint (25 pts)
Inject and customize this validated template inside `<head>` or at the top of `<main>`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.yourdomain.com/#organization",
      "name": "Brand Name",
      "legalName": "Brand Legal Name Pvt. Ltd.",
      "url": "https://www.yourdomain.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.yourdomain.com/#logo",
        "url": "https://www.yourdomain.com/logo.svg",
        "width": 250,
        "height": 40
      },
      "foundingDate": "2006",
      "email": "info@yourdomain.com",
      "description": "Factual 1-sentence entity definition including core specialty, target audience, and verified credentials.",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 150
      },
      "areaServed": ["US", "GB", "EU", "AU", "IN"],
      "knowsAbout": [
        "Core Topic 1",
        "Core Topic 2",
        "Core Topic 3"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/your-brand",
        "https://clutch.co/profile/your-brand",
        "https://www.trustpilot.com/review/yourdomain.com"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "2500"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.yourdomain.com/#website",
      "url": "https://www.yourdomain.com",
      "name": "Brand Name",
      "publisher": {
        "@id": "https://www.yourdomain.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.yourdomain.com/current-page#webpage",
      "url": "https://www.yourdomain.com/current-page",
      "name": "Exact Page Title (50-60 chars)",
      "description": "Exact Meta Description (140-160 chars) with primary entity and quantitative proof.",
      "isPartOf": {
        "@id": "https://www.yourdomain.com/#website"
      },
      "about": {
        "@id": "https://www.yourdomain.com/#organization"
      },
      "datePublished": "2025-01-15T08:00:00+00:00",
      "dateModified": "2026-10-26T08:00:00+00:00"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yourdomain.com/current-page#faq",
      "isPartOf": {
        "@id": "https://www.yourdomain.com/current-page#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "High-intent buyer question 1?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Direct answer starting with Yes/No or hard metric, followed by 2 sentences of factual scope."
          }
        }
      ]
    }
  ]
}
```

---

## Pre-Release 100/100 Audit Checklist

Run every page through these 12 pass/fail gates before deployment:

- [ ] **1. Canonical Gate:** `<link rel="canonical">` points to the exact production `https://` URL (never a staging or `.vercel.app` host).
- [ ] **2. Staging Shield Gate:** Non-production environments emit `noindex, nofollow`.
- [ ] **3. Single-Nav SSR Gate:** Only one primary `<nav>` tree exists in the raw SSR HTML; no crawlable links are wrapped in `inert` or `aria-hidden="true"`.
- [ ] **4. Zero-Clone SSR Gate:** Marquees/carousels do not duplicate items in static HTML.
- [ ] **5. Preload Cap Gate:** `<head>` contains `<= 3` `<link rel="preload">` tags; LCP image uses `loading="eager"` and `fetchpriority="high"`.
- [ ] **6. Bot Access Gate:** `/robots.txt` allows `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, and `Google-Extended`.
- [ ] **7. `/llms.txt` Gate:** `https://www.yourdomain.com/llms.txt` returns HTTP 200 with clean Markdown entity facts and canonical links.
- [ ] **8. Heading & Answer Capsule Gate:** Exactly one `<h1>`; at least 30% of `<h2>`/`<h3>` tags are natural-language questions followed immediately by a 40–55 word Answer Capsule.
- [ ] **9. Semantic Table Gate:** Page includes at least one native HTML `<table>` comparing offerings, specs, timelines, or pricing models.
- [ ] **10. Quantitative Proof Gate:** Every case study, portfolio card, or claim includes specific metrics (`%`, `$`, `time`, `count`) instead of generic adjectives.
- [ ] **11. Schema Graph Gate:** Unified `@graph` JSON-LD validates with 0 errors and links `Organization`, `WebPage`, `Review`, and `FAQPage` via `@id` URIs.
- [ ] **12. Cross-Web Entity Gate:** Founding year, headcount, partner status, and headquarters match 100% across the site and all external directories (`sameAs` links).