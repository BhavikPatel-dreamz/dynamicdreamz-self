# Dynamic Dreamz AEO and GEO Strategy

Status: technical work implemented for five current routes; visible AEO/GEO
recommendations deferred for live-site parity; evidence and policy approvals
remain
Last audited: 2026-08-13
Scope: current Next.js migration and the five implemented indexable routes  
Owners: SEO, content, development, leadership, sales, HR, and client-success teams

## Purpose

This document defines how Dynamic Dreamz should improve visibility in answer
engines and generative search experiences while preserving conventional SEO,
brand accuracy, conversion quality, and the live-site migration intent.

It covers:

- The sitewide AEO and GEO operating model.
- Technical discovery and crawler requirements.
- Entity, evidence, content, structured-data, and measurement standards.
- A prioritized implementation roadmap.
- Page-specific improvements for the routes currently built:
  - `/`
  - `/about-us`
  - `/career`
  - `/life-dynamicdreamz`
  - `/resources`

This is the strategy and implementation record. Visible changes proposed and
temporarily implemented on 2026-08-12 were rejected and reverted to live-site
wording on 2026-08-13. The decision is recorded in
`docs/aeo-geo-migration-approval.md`; exact deferred-copy status is tracked in
`docs/page-content-improvements.md`.

## Migration Live-UI Rule

During the Next.js migration, implement AEO/GEO without changing the current
live site's visible UI or page content by default. A request to audit, improve,
or implement AEO/GEO or SEO is approval for accurate nonvisual work only; it is
not approval for a visible rewrite or redesign.

May be implemented without a separate visible-content approval when accurate:

- Metadata, canonicals, robots, sitemap, crawlability, and real freshness data.
- Stable entity relationships and structured data that match visible content
  and approved facts.
- Server-rendering, semantic markup, and accessibility metadata that preserve
  the default visual result.
- Performance and local-asset improvements that preserve appearance, content,
  behavior, and responsive geometry.

Must remain unchanged without explicit project-owner approval of the exact
difference:

- Visible headings, paragraphs, grammar, capitalization, labels, FAQs, CTA
  text, proof/review values, counters, cards, taxonomy, and link text.
- Section order, layout, spacing, typography, color, imagery, animation,
  responsive behavior, and default interaction states.

Record a recommended visible improvement in
`docs/page-content-improvements.md` as `suggested` or `deferred` and preserve it
in this strategy as an unresolved recommendation. Never use hidden text or
schema to substitute for missing visible evidence, and never let nonvisual
schema contradict the live-visible page. If a valid factual, policy, legal,
accessibility, trust, or search-quality fix requires a visible change, document
the risk and request approval before implementation.

## Executive Direction

Dynamic Dreamz should not treat AEO or GEO as separate collections of hacks.
The practical objective is to build a crawlable, internally consistent,
evidence-rich body of content that search engines can rank and generative
systems can retrieve, understand, quote, and cite accurately.

The highest-value work is:

1. Complete the commercial service, work, case-study, contact, quote, job, and
   article routes referenced by the current UI and structured data before
   launch; their development-stage availability is excluded from the current
   five-page implementation scope.
2. Resolve conflicting facts, URLs, review counts, dates, and service names.
3. Publish answer-first service content backed by project evidence.
4. Convert portfolio items into first-party case studies with approved outcomes.
5. Strengthen authorship, expert review, entity consistency, and independent
   corroboration.
6. Measure citations, qualified visits, and leads instead of treating raw AI
   mentions as the goal.

## AEO and GEO Definitions

### Answer Engine Optimization (AEO)

AEO improves the likelihood that a page supplies a useful direct answer for a
question-based search, featured result, voice result, knowledge experience, or
AI-generated answer.

For this site, AEO means:

- Answering buyer questions clearly and early.
- Using descriptive headings, concise summaries, tables, lists, and genuine
  FAQs where those structures help users.
- Giving enough context for an answer to stand alone without becoming vague.
- Supporting answers with real experience, examples, dates, and evidence.

### Generative Engine Optimization (GEO)

GEO improves the likelihood that generative search systems retrieve, trust,
cite, and accurately describe Dynamic Dreamz content when synthesizing an
answer or recommending a provider.

For this site, GEO means:

- Establishing Dynamic Dreamz as a consistent business entity.
- Publishing specific, non-commodity expertise that adds information not found
  in generic summaries.
- Making claims independently verifiable.
- Providing case-study evidence suitable for citation.
- Maintaining accurate and current content across the site and authoritative
  third-party profiles.

### What AEO and GEO do not mean

- There is no guaranteed AI-ranking schema.
- Structured data does not replace visible content.
- `llms.txt` is not a priority or a Google generative-search requirement.
- Pages do not need to be divided into artificially tiny content fragments.
- Repeating every long-tail query is unnecessary.
- Mass-producing generic articles or location pages is not an authority
  strategy.
- Purchased mentions, manufactured reviews, or unsupported awards must not be
  used.

Google states that generative Search uses foundational SEO practices and does
not require special AI files, special markup, or special schema. The primary
guidance is to publish valuable, non-commodity content, maintain clear technical
structure, and ensure important information is available in crawlable text.

## Authoritative Guidance

- [Google: Guide to optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: General structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [OpenAI: Overview of OpenAI crawlers](https://developers.openai.com/api/docs/bots)
- [Bing: AI Performance in Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Bing: IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby)

## Desired Business Outcomes

AEO and GEO work should support qualified commercial and recruitment outcomes,
not mentions alone.

Primary outcomes:

- More qualified enquiries for Shopify Plus, Shopify migration, Shopify CRO,
  mobile commerce, integrations, maintenance, and white-label delivery.
- More citations for non-branded category and problem-based queries.
- Accurate brand descriptions across AI-generated answers.
- Stronger visibility for proof-led case studies.
- Better discovery of real job openings in Surat and Ahmedabad.
- Higher conversion quality from AI and organic-search referrals.

Secondary outcomes:

- More branded searches.
- More assisted conversions involving service and case-study pages.
- More references to Dynamic Dreamz experts and original research.
- Fewer incorrect or conflicting facts in search and AI answers.

## Audience and Prompt Map

### Enterprise and established ecommerce brands

Typical needs:

- Shopify Plus implementation or replatforming.
- B2B and wholesale commerce.
- ERP, PIM, CRM, fulfillment, subscription, and marketing integrations.
- International storefronts and Shopify Markets.
- Checkout extensibility and custom business workflows.
- Performance, CRO, maintenance, and governance.

Representative prompts:

- Which Shopify Plus agencies can manage an enterprise migration?
- What should a Shopify Plus migration agency handle?
- How do I migrate from Magento to Shopify without losing SEO?
- Which agency can integrate Shopify Plus with an ERP?
- How long does a complex Shopify Plus migration take?

### Growing DTC merchants

Typical needs:

- Store redesigns and theme development.
- Performance and Core Web Vitals.
- CRO and mobile conversion.
- App selection and integrations.
- Ongoing support.

Representative prompts:

- When should a growing brand move to Shopify Plus?
- How much does custom Shopify development cost?
- Should I hire a Shopify agency or a freelancer?
- How can I improve Shopify conversion rate and site speed?

### Digital agencies seeking white-label capacity

Typical needs:

- Confidential delivery.
- Predictable capacity and response times.
- Technical breadth and QA.
- Clear ownership, communication, and escalation.
- Flexible engagement models.

Representative prompts:

- How do I choose a white-label Shopify development partner?
- What should a white-label Shopify agreement include?
- How can an agency scale Shopify delivery without hiring internally?

### Candidates in Surat and Ahmedabad

Typical needs:

- Current roles and exact locations.
- Required experience and responsibilities.
- Work model, hours, benefits, and growth.
- Application process and employer credibility.

Representative prompts:

- Which ecommerce companies are hiring in Surat?
- Are there Shopify developer jobs in Ahmedabad?
- What is the work culture at Dynamic Dreamz?

## Current Repository Baseline

### Strengths

| Area | Current state | AEO/GEO value |
| --- | --- | --- |
| Rendering | Primary content is server-rendered | Content is available without client-side execution |
| Metadata | Unique metadata, canonical, Open Graph, Twitter, and robots directives exist for built pages | Strong conventional search foundation |
| URL policy | No-trailing-slash policy is centralized and build-enforced | Reduces canonical ambiguity and redirect hops |
| Sitemap | Built pages are generated from shared SEO data | Creates a maintainable discovery source |
| Entity schema | Organization and WebSite nodes use stable identifiers | Helps consolidate the Dynamic Dreamz entity |
| Page schema | AboutPage, WebPage, CollectionPage, BreadcrumbList, FAQPage, JobPosting, BlogPosting, and VideoObject are used where intended | Provides machine-readable context when it matches visible content |
| Proof | Shopify, Clutch, Trustpilot, Upwork, GoodFirms, testimonials, clients, and company statistics are visible | Supplies trust and independent corroboration |
| Expertise | Homepage content covers Shopify Plus, migration, B2B, CRO, integrations, white-label work, mobile apps, and support | Establishes broad topical relevance |
| Media | Local images, descriptive alt text, video metadata, and explicit dimensions are present | Supports multimodal search and accessibility |

### Current dependencies and prelaunch migration work

The five built pages retain the approved technical AEO/GEO work. On 2026-08-13,
the project owner requested that visible copy and UI differences be reverted to
the live-site presentation. Those visible recommendations remain in this file
as deferred work rather than being removed. Planned but unbuilt URLs are
intentionally retained and excluded from current route scoring; they remain
mandatory prelaunch dependencies.

| Priority | Status | Issue | Required action |
| --- | --- | --- | --- |
| P0 | migration pending | Only five indexable routes are implemented, while navigation and CTAs reference the larger migration | Complete and validate the intended destinations before launch |
| P0 | migration pending | Homepage `OfferCatalog`, Resources `ItemList`, and Career application URLs reference planned routes | Retain during migration; validate every final canonical destination before launch |
| P0 | migration pending | Homepage uses root article slugs while Resources uses `/blogs` paths | Choose the legacy-compatible canonical pattern and redirects during article migration |
| P0 | blocked by live parity | Review scores, counts, and profile URLs are not governed by one current source | Live Resources ratings and counts were restored on 2026-08-13; verify and centralize them before launch |
| P0 | blocked by live parity | Home displays `4500+` Shopify stores while Resources visible story copy says `1000+` | Keep the live UI during migration, then resolve the definition, provenance, and approved display value before launch |
| P1 | implemented | Sitemap and page schema previously used build time or stale `dateModified` values | All five routes now use explicit content dates from shared SEO records |
| P1 | future route work | Potential Shopify Plus routes have overlapping intent | Create an intent map before building the routes |
| P1 | deferred to article migration | Current article data does not include author or reviewer information | Add approved author, reviewer, biography, evidence, and review-date fields to each article |
| P1 | deferred to case-study migration | Selected work links primarily to external storefronts | Create internal evidence pages with approved scope and outcomes |
| P1 | partially implemented | Major proof claims need definitions and provenance | A typed fact source now centralizes display values and review date; add definitions, source, owner, and formal approval |

## Entity and Fact Governance

Create one typed company-facts source that supplies visible content and schema.
Each fact should have:

- Display value.
- Exact definition.
- Source or internal owner.
- Date last verified.
- Approval status.
- Pages allowed to use it.

Facts requiring central control include:

- Founded in 2006.
- Shopify Platinum Partner status and recognition date.
- Team size.
- Total projects.
- Shopify stores built or launched.
- Clients served.
- Client revenue generated.
- Review platform scores and counts.
- Office addresses.
- Leadership titles.
- Client names and project attribution.
- Case-study results.

### Entity consistency requirements

- Use `Dynamic Dreamz` as the public name and `Dynamic Dreamz Solutions LLP` as
  the legal name where appropriate.
- Use one canonical logo and one canonical production URL.
- Keep addresses, phone, email, founding year, and social URLs consistent.
- Link the Organization entity to genuine official and independent profiles.
- Do not include unverified awards, certifications, ratings, or partners.
- Use the same stable Organization `@id` across all page graphs.
- Avoid defining contradictory partial versions of the same Organization node.

## Technical Discovery and Crawler Strategy

### Google

- Keep pages indexable and eligible to show a snippet.
- Ensure important facts and answers are visible as HTML text.
- Keep internal links descriptive and crawlable.
- Keep canonical URLs, sitemap URLs, structured-data URLs, and navigation URLs
  identical.
- Do not use `nosnippet` or restrictive `max-snippet` rules on content intended
  for generative Search visibility.
- Validate rendered content with URL Inspection and test supported schema with
  the Rich Results Test.

### OpenAI and ChatGPT Search

- Keep `OAI-SearchBot` allowed when ChatGPT Search visibility is desired.
- The current wildcard robots policy allows it unless production infrastructure
  overrides or blocks the request.
- Verify that the CDN, WAF, bot protection, and rate limiting allow OpenAI's
  published search-bot IP ranges.
- Treat `GPTBot` separately: it controls potential model-training use, not
  ChatGPT Search discovery. Leadership should make this policy decision.
- An explicit `OAI-SearchBot` rule is optional if the wildcard rule remains
  permissive, but an explicit policy can make the intent easier to audit.

### Bing and Microsoft AI experiences

- Verify the production property in Bing Webmaster Tools.
- Submit the XML sitemap.
- Implement IndexNow for published, substantially updated, redirected, and
  removed URLs.
- Monitor AI Performance for cited pages, citation volume, and grounding-query
  phrases.

### Robots, sitemap, and dates

- Prefer a clear public-site allow rule rather than generating an allow list
  from the currently implemented pages unless a deliberate deny-by-default
  policy is required.
- Never use robots.txt as the method for removing an indexed page; use the
  correct status, redirect, or `noindex` behavior.
- Include only canonical, indexable, successful URLs in the sitemap.
- Use actual content modification dates, not build or deployment time.
- Notify IndexNow only when a URL was added, materially updated, redirected, or
  deleted.

## Structured-Data Strategy

Structured data should reinforce visible content and entity relationships. It
must not be treated as a substitute for page depth or as a guaranteed GEO
signal.

### Sitewide nodes

- `Organization`
- `WebSite`
- The correct page-type node
- `BreadcrumbList` for non-home routes
- `ImageObject` for the page's primary image

### Page-specific nodes

- `Service` on a fully built service page.
- `Article` or `BlogPosting` on a complete article page.
- `JobPosting` for a real, current, location-specific job.
- `FAQPage` only when the same questions and answers are visible.
- `VideoObject` only with accurate required data and a visible video.
- `ItemList` only for items whose canonical pages exist.
- `Person` only for real approved people with visible supporting information.

### Quality rules

- Every schema URL must resolve successfully to its canonical destination.
- Every schema claim must match visible content.
- Review schema must identify the exact source it represents.
- Do not combine unrelated platform ratings into one aggregate rating.
- Do not invent authors, publish dates, modification dates, outcomes, or review
  counts.
- Use stable `@id` references to connect Organization, WebSite, WebPage,
  Person, Service, Article, and VideoObject nodes.

## Content Architecture

### Commercial service-page template

Each major service page should include the following in a natural page flow:

1. A clear H1 and a direct two- or three-sentence service summary.
2. Who the service is for and when it is not the right fit.
3. Business problems addressed.
4. Deliverables and boundaries.
5. Platform, integration, and architecture capabilities.
6. Process, governance, communication, and QA.
7. Typical timeline or timeline factors.
8. Engagement and pricing model where approved.
9. Relevant case studies with measurable outcomes.
10. Named expert contribution or review.
11. Genuine buyer FAQs.
12. Related service, case-study, resource, and contact links.

### Case-study template

Case studies should be the primary first-party evidence units for commercial
AEO/GEO.

Required fields:

- Client and approved attribution.
- Industry and region.
- Platform before and after.
- Business challenge.
- Technical constraints.
- Scope and deliverables.
- Integrations and architecture.
- Dynamic Dreamz team or specialist role.
- Delivery period.
- Launch date where approved.
- Quantified before-and-after results where approved.
- Qualitative results when measurements are unavailable.
- Client quote and source.
- Screenshots with contextual captions and alt text.
- Related services and resources.

Never manufacture a metric to make a case study appear stronger. A precise,
well-explained qualitative outcome is safer than an unsupported percentage.

### Expert article template

Every article intended to build topical authority should include:

- One clear decision or problem to solve.
- A concise answer or recommendation near the beginning.
- Original practitioner knowledge, examples, checklists, data, or screenshots.
- Assumptions, tradeoffs, limitations, and cases where the advice does not
  apply.
- Named author and relevant role.
- Named reviewer where specialist review occurred.
- Real publish and modification dates.
- Sources for external facts.
- Links to relevant services and case studies.
- A CTA matched to the article's decision stage.

### Content clusters to prioritize

1. Shopify Plus selection and readiness.
2. Magento, WooCommerce, BigCommerce, and custom-platform migrations.
3. Shopify migration data, SEO preservation, redirects, and launch governance.
4. Shopify B2B, wholesale, Markets, checkout, and integration architecture.
5. Shopify performance, Core Web Vitals, and CRO.
6. White-label Shopify delivery and agency operations.
7. Mobile commerce and Shopify-connected apps.
8. Maintenance, support, QA, and incident response.

Do not build several pages that only swap a keyword, platform, or city. Each
page needs a distinct audience, decision, evidence set, and conversion role.

## Independent Authority and Corroboration

Generative recommendations often consider what credible sources say about a
business, not only what the business says about itself.

Priority work:

- Keep the Shopify Partner Directory profile complete and current.
- Keep Clutch, Trustpilot, GoodFirms, Upwork, LinkedIn, and other approved
  profiles consistent.
- Ask for authentic reviews tied to a specific engagement and outcome.
- Pursue client-approved co-marketing and co-authored case studies.
- Contribute expert commentary to reputable Shopify and ecommerce publications,
  events, podcasts, and partner resources.
- Publish original benchmarks or anonymized operational research when the data
  can be documented and approved.
- Earn relevant mentions; do not purchase fake list placements or seed
  inauthentic discussions.

## Measurement Framework

### Baseline prompt set

Maintain a stable set of 25 to 40 prompts across:

- Shopify Plus agency selection.
- Shopify migration.
- Shopify B2B and integrations.
- Shopify CRO and performance.
- White-label development.
- Mobile commerce.
- Branded Dynamic Dreamz facts.
- Dynamic Dreamz careers and work culture.

Run the same prompts monthly in the priority experiences available to the
business. Record:

- Whether Dynamic Dreamz appeared.
- Whether it was cited, listed, or recommended.
- The cited URL.
- The extracted claim.
- Claim accuracy.
- Competing companies and cited pages.
- Query intent.
- Country or locale used for the test.
- Date and model or product surface when visible.

### Search and analytics metrics

- Google Search Console generative AI visibility and standard query/page data.
- Bing AI Performance citations, cited pages, and grounding-query phrases.
- Indexed-page coverage and crawl issues.
- AI referral sessions by source and landing page.
- Qualified enquiries and assisted conversions.
- Consultation bookings.
- Case-study-assisted leads.
- Branded-search growth.
- Conversion rate and engagement quality from AI referrals.

### Reporting principle

Do not report raw prompt mentions as business success. A useful dashboard must
connect visibility to accurate citations, qualified visits, enquiries, and
revenue opportunities.

## Recommended 90-Day Sequence

### Phase 1: Accuracy and eligibility

- Resolve all unbuilt URLs referenced by schema, navigation, articles, jobs,
  and CTAs.
- Standardize article paths.
- Centralize company facts and review data.
- Replace deployment timestamps with content timestamps.
- Verify Google Search Console and Bing Webmaster Tools access.
- Confirm production crawler and WAF behavior.
- Implement IndexNow.

### Phase 2: Commercial coverage

- Complete the priority Shopify service pages.
- Define intent boundaries for overlapping Shopify Plus routes.
- Complete `/our-work`, `/case-study`, `/contact-us`, and `/request-quote`.
- Add internal links from homepage proof and work sections.
- Publish the strongest approved case studies first.

### Phase 3: Citation-worthy expertise

- Migrate the highest-value decision articles rather than the full archive at
  once.
- Add authors, reviewers, dates, sources, and original practitioner insight.
- Add evidence-led service FAQs.
- Begin client co-marketing and expert contribution outreach.
- Establish the monthly prompt and citation baseline.

## Page-Wise Improvements for Currently Built Routes

## Home (`/`)

Status: technical improvements implemented; visible AEO copy deferred and live
UI restored on 2026-08-13

Last reviewed: 2026-08-13

Owner: SEO, content, development, leadership, and client success

### Page role

Primary brand and commercial discovery page for Shopify Plus, Shopify
development, migration, B2B, CRO, mobile commerce, integrations, white-label
delivery, and ongoing support.

### Current strengths

- The live H1 clearly identifies Shopify Plus and enterprise Shopify intent.
- The hero paragraph states DTC, B2B, migration, checkout, integrations, CRO,
  and support capabilities.
- Shopify and independent review proof appears in the first viewport.
- Visible client brands, statistics, testimonials, integrations, selected work,
  and expert topics provide strong entity and trust context.
- Video testimonials already have `VideoObject` data with real upload dates.
- Metadata and the homepage Organization graph are commercially focused.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Verification or remaining dependency |
| --- | --- | --- | --- | --- | --- |
| P0 | deferred | CTA destinations | `/request-quote`, `/our-work`, and `/blog` are not built | Complete the routes before launch or temporarily point only to working destinations | Project owner approved retaining migration-intent destinations while development is in progress. Original CTA labels and paths are restored; re-audit before launch. |
| P0 | deferred | Article paths | Homepage uses root-level article slugs while Resources uses `/blogs` | Adopt one canonical path pattern and update cards, sitemap, schema, and redirects together | Requires a cross-route canonical and redirect decision; deliberately not changed in this homepage-only task. |
| P0 | deferred | Offer schema | The OfferCatalog includes service pages that are still being migrated | Emit only live service offers before launch | Project owner approved retaining the catalog during active migration. The original eight service offers are restored and must be revalidated when route migration is complete. |
| P0 | blocked by live parity | Proof consistency | Review values lack governance and Home's `4500+` Shopify-store count conflicts with Resources' visible `1000+` wording | Use a centralized, verified proof-data source | Core typed facts and schema are centralized, but live Resources proof copy and numeric reviews were restored at the project owner's request. Definitions, provenance, and approved visible values remain required. |
| P1 | deferred | Selected work | Cards link directly to client sites and do not explain Dynamic Dreamz's role | Link to internal case studies containing scope, platform, constraints, and outcomes; retain a secondary client-site link if approved | Internal case-study routes and approved scope/outcome evidence are not available in this homepage-only task. |
| P1 | blocked | Expertise | Sections explain capabilities but contain little direct evidence | Add one relevant case-study result or delivery example to each priority expertise topic | Client attribution, delivery scope, and outcomes require client-success/leadership approval. |
| P1 | deferred | Internal links | Service descriptions are not yet supported by live service pages | Add descriptive links as each service route launches | Service routes are migration pending; no broken service links were added. |
| P1 | implemented | Freshness | Homepage schema uses the build date as `dateModified` | Use the real approved content-review date | `WebPage.datePublished` preserves the live source date and `dateModified` is the explicit 2026-08-13 final parity review, independent of deployments. |
| P2 | deferred | AI-tools paragraph | A list of tools can distract from buyer outcomes and governance | Reframe around delivery speed, human review, security, QA, and where AI assistance is or is not used | Proposed visible copy was reverted to the live wording on 2026-08-13. Reintroduce only after explicit content approval. |
| P2 | partially implemented | Answer summary | The page explains services but lacks a concise reusable company definition outside metadata/schema | Add a short visible “Who we help” or “Why Dynamic Dreamz” statement before the detailed expertise section | The live hero wording is restored; the entity-first description remains nonvisual in Organization schema. Visible adoption is deferred. |

### Suggested visible answer statement

Status: deferred. The proposal was implemented on 2026-08-12, then reverted to
the live hero wording on 2026-08-13 at the project owner's request.

> Dynamic Dreamz is a Shopify Platinum Partner and Shopify Plus agency helping
> established DTC brands, B2B merchants, and digital agencies build, migrate,
> integrate, optimize, and support Shopify commerce experiences.

This statement should be followed by approved proof, not additional unsupported
superlatives.

### Questions this page should answer or route clearly

- What does Dynamic Dreamz specialize in?
- Is Dynamic Dreamz a Shopify Platinum Partner?
- Does Dynamic Dreamz work with Shopify Plus and B2B brands?
- Can Dynamic Dreamz manage migration, integrations, CRO, and maintenance?
- What kinds of brands and agencies has Dynamic Dreamz supported?
- Where can a buyer see relevant Shopify case studies?

### Structured-data actions

- Keep the stable Organization, WebSite, WebPage, BreadcrumbList, and supported
  VideoObject nodes.
- Revalidate service offers before launch and remove any whose final canonical
  pages do not resolve.
- Keep ratings out of Organization schema unless one precise, visible, and
  policy-compliant rating source is selected.
- Replace build-time page modification with a real content date.

### Verification and remaining gaps

- URL-policy review (2026-08-13): `/` remains the sole structural route
  exception, the absolute homepage URL uses the bare origin, all homepage links
  to non-root pages use slashless destinations, and the source/build guard
  passes.
- Checks completed: live rendered page and View Page Source, live CSS/JS,
  1440x900, 768x1024, and 390x844 live/local captures, rendered local metadata,
  rendered JSON-LD, restored migration-intent links, lint, and production build.
- Implemented items: stable Organization description, current live article-card
  synchronization, shared facts, and explicit content dates. Visible hero and
  AI-delivery copy were restored to the live wording.
- Deferred or blocked: all planned-but-unbuilt route checks during development,
  article canonicalization, internal case studies, proof definitions/provenance,
  current review values, and approved case-study evidence.
- Measurement: track the six homepage target questions above, citations to `/`,
  work/blog/quote CTA engagement after their routes ship, and qualified project
  enquiries after deployment. SEO owns monthly prompt checks; development owns
  the prelaunch route/link audit.

## About Us (`/about-us`)

Status: technical improvements implemented; visible copy deferred and live UI
restored on 2026-08-13

Last reviewed: 2026-08-13

Owner: SEO, content, development, and business stakeholders

### Page role

Primary entity, history, leadership, expertise, and organizational trust page.
This page should be the clearest first-party source for factual questions about
Dynamic Dreamz.

### Current strengths

- The page includes founding history from 2006 through Shopify Platinum Partner
  recognition in 2025.
- Leadership and department expertise are visible.
- Founder LinkedIn links and biographies are present.
- The page includes a company video, team size, project/client statistics, and
  values.
- `AboutPage`, Organization, founder Person, breadcrumb, primary image, and
  VideoObject nodes are present.

### Recommended improvements

| Priority | Status | Area | Current issue | Implemented improvement or dependency |
| --- | --- | --- | --- | --- |
| P0 | deferred | H1 clarity | “Agile. Adept. Accurate.” does not identify the page/entity | The entity-first H1 proposal was reverted to the live wording on 2026-08-13; reintroduce only after explicit content approval |
| P0 | blocked | Founder titles | Two founders are listed as Co-Founder & CEO | Existing titles remain unchanged until authoritative confirmation is available |
| P0 | blocked by live parity | Milestone proof | “Top 10 Shopify developers by UpWork” has no approved visible source | The live claim was restored on 2026-08-13; obtain evidence or explicit approval before launch |
| P1 | deferred | Hero description | Introduction is broad and grammatically dated | Entity-first copy was reverted to the live introduction on 2026-08-13; retain the proposal for content approval |
| P1 | partially implemented | Founder biographies | Visible biographies remain brief | Existing biographies, local images, and available LinkedIn profiles now supply Person nodes; deeper expertise needs approved content |
| P1 | implemented | Person schema | Founder nodes contained only name and job title | Three stable Person nodes now include visible biography, image, profile where available, and Organization relationship |
| P1 | partially implemented | Office/entity facts | The page does not contain a dedicated contact-facts block | Shared Organization schema contains both offices; the proposed visible hero facts were reverted and a Contact route remains migration pending |
| P1 | deferred | Timeline copy | Several milestones have grammar problems or vague wording | Edited timeline copy was reverted to live on 2026-08-13; retain as a future content proposal |
| P1 | implemented | Freshness | AboutPage used build time | Schema and sitemap now use the explicit 2026-08-13 final parity-review date |
| P2 | deferred | Department expertise | Leaders are not connected to service authority | Add approved expert authorship/review relationships when service and article pages are migrated |

### Suggested hero copy

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live H1 and introduction on 2026-08-13.

**H1:**

> About Dynamic Dreamz: Agile. Adept. Accurate.

**Introduction:**

> Founded in 2006, Dynamic Dreamz is an ecommerce, web, and mobile development
> company with a team of more than 150 specialists. As a Shopify Platinum
> Partner, we help brands and agencies plan, build, migrate, integrate, and
> support digital commerce experiences.

### Questions this page should answer

- What is Dynamic Dreamz?
- When was Dynamic Dreamz founded?
- Who founded and leads the company?
- Where are the offices located?
- How large is the team?
- What does Shopify Platinum Partner status mean for clients?
- Which technical disciplines and industries does the team cover?

### Structured-data actions

- Completed: linked visible founders to the Organization with stable Person
  identifiers, local images, existing biographies, and available profiles.
- Completed: shared the Organization and core fact source with all built pages.
- Completed: replaced build-time modification with the 2026-08-13 final review date.
- Blocked: confirm founder titles before changing their visible or structured
  representation.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/about-us`; `/about-us/` redirects to `/about-us`, and the
  source/build URL guard passes.
- Rendered output contains one AboutPage, one shared Organization, three Person
  nodes, BreadcrumbList, WebSite, and the visible company VideoObject.
- Desktop, tablet, and mobile screenshots confirm the live heading,
  introduction, story, timeline, and values are restored without clipping or
  horizontal overflow.
- Remaining: founder-title confirmation, richer approved leadership expertise,
  company-fact provenance, and a future contact/company-facts destination.

## Career (`/career`)

Status: schema improvements retained; visible listing presentation restored to
live on 2026-08-13

Last reviewed: 2026-08-13

Owner: HR, SEO, content, and development

### Page role

Current job discovery and recruitment-conversion page for candidates in Surat
and Ahmedabad.

### Current strengths

- Current roles, experience ranges, job type, dates, positions, and job PDFs are
  structured in typed content.
- The live location tabs and complete five-role presentation are preserved in
  the UI.
- JobPosting schema uses the seven role/location combinations supported by the
  local job PDFs.
- Office addresses, hiring organization, date posted, and application URLs are
  represented.
- Workplace benefits and real team imagery add useful candidate context.

### Recommended improvements

| Priority | Status | Area | Current issue | Implemented improvement or dependency |
| --- | --- | --- | --- | --- |
| P0 | migration pending | Application route | Apply CTAs and JobPosting URLs target planned `/career-apply-now` | Retained with role/location parameters; validate the application flow before launch |
| P0 | partially implemented; approval required | Location accuracy | The live UI represents every role in both cities, while local PDFs support seven combinations | PDF-supported locations remain in JobPosting schema, while the visible tabs were restored to live. HR must confirm whether the UI or PDFs are authoritative before launch |
| P0 | partially implemented | Job details | Full descriptions exist in PDFs | Role summaries remain in typed data and JobPosting descriptions, but visible card summaries were removed for live parity; full HTML detail remains future work |
| P0 | blocked | Job freshness | Listings lack a visible review date and approved expiry dates | The proposed visible review date was removed for live parity; establish an HR-owned review and expiry process |
| P1 | deferred | H1 and intent | H1 does not lead with employer/location intent | The entity-first H1 and introduction were reverted to live on 2026-08-13 |
| P1 | deferred | Benefits grammar | “Ample of Employee Engagement Activities” is incorrect | Corrected wording was reverted to live on 2026-08-13 |
| P1 | partially implemented | Job schema description | Visible cards do not include role summaries | JobPosting nodes retain PDF-derived summaries, experience, location, and on-site context; visible adoption is deferred |
| P1 | deferred | Candidate FAQs | Policies live only on Life | The descriptive cross-link was removed for live parity on 2026-08-13 |
| P1 | partially implemented; approval required | Office context | Candidates need accurate location/work-model context | Schema contains both office addresses and PDF-supported posting locations, while visible tabs preserve the live presentation pending HR confirmation |
| P2 | migration pending | JobPage structure | All jobs share one index page | Preserve current index/application model until approved job-detail routes and full HTML descriptions are migrated |

### Suggested hero copy

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live hero and opportunities wording on 2026-08-13.

**H1:**

> Careers at Dynamic Dreamz

**Introduction:**

> Explore ecommerce, technology, design, marketing, and growth opportunities
> with Dynamic Dreamz in Surat and Ahmedabad. Join a multidisciplinary team
> working with global brands and digital agencies.

The existing aspirational sentence can remain as supporting copy after this
direct answer.

### Questions this page should answer

- Which jobs are currently open at Dynamic Dreamz?
- Is each role based in Surat, Ahmedabad, or both?
- What experience is required?
- Is the role full-time, office-based, hybrid, or remote?
- What does the interview and application process involve?
- What benefits and growth opportunities are available?
- When does the role close?

### Structured-data actions

- Completed: emit one JobPosting for each of the seven PDF-supported
  job/location combinations.
- Partially completed: structured summaries, experience, posted date, location,
  and on-site context come from typed data and local PDFs. The live UI does not
  expose all of these fields and location alignment awaits HR approval.
- Migration pending: complete the retained application destinations before
  launch.
- Blocked: add `validThrough` only when real expiry dates are approved; remove
  postings promptly when roles close.
- Factual blocker: resolve the CRO `1–3 years` card versus `2–4 years` PDF
  conflict, then update the card, PDF, and schema together.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/career`; `/career/` redirects to `/career`, and the
  source/build URL guard passes.
- Rendered output contains seven JobPosting nodes rather than ten assumed
  combinations, and each identifier includes the supported city.
- Responsive captures confirm the live hero, opportunities copy, five-role tabs,
  cards, benefits wording, and link presentation are restored without clipping
  or horizontal overflow.
- Remaining: confirm whether PDFs or the live tabs are authoritative for job
  locations, then align UI and JobPosting output; application/job-detail
  migration, expiry governance, full HTML qualifications, hiring-process detail,
  and CRO experience confirmation also remain open.

## Life at Dynamic Dreamz (`/life-dynamicdreamz`)

Status: nonvisual SEO improvements implemented; visible copy deferred and live
UI restored on 2026-08-13

Last reviewed: 2026-08-13

Owner: HR, SEO, content, and development

### Page role

Employer-brand and work-culture evidence page supporting recruitment,
candidate questions, and the Career page.

### Current strengths

- The H1 communicates teamwork and culture.
- The page includes inclusivity, flexibility, teamwork, adaptability,
  collaboration, social connection, and wellbeing topics.
- A substantial gallery provides first-party workplace evidence.
- Visible FAQs answer real candidate questions and match FAQPage schema.
- The page links candidates to current openings.

### Recommended improvements

| Priority | Status | Area | Current issue | Implemented improvement or dependency |
| --- | --- | --- | --- | --- |
| P0 | migration pending | Legacy URL | Project context also identifies `/life-at-dynamic-dreamz` | Confirm the legacy canonical and redirect during prelaunch route work |
| P0 | implemented | Hiring link | CTA used `/career` | Link uses canonical `/career` |
| P0 | deferred | Typo | “Dynamic Dreramz” appears in the live hiring copy | The correction was reverted to live on 2026-08-13; change only with explicit visible-copy approval |
| P1 | deferred | H1 entity clarity | Heading does not identify the page/entity | The entity-first H1 was reverted to the live heading on 2026-08-13 |
| P1 | deferred | Hero grammar and context | First answer uses awkward grammar and lacks office context | Rewritten copy was reverted to live on 2026-08-13; retain as an HR/content proposal |
| P1 | deferred | Culture copy | Value descriptions are fragments or vague | The six revised descriptions were reverted to live on 2026-08-13 |
| P1 | deferred | FAQ grammar | Answers contain grammar and spelling errors | The six edited answers were reverted to live on 2026-08-13 pending HR/content approval |
| P1 | blocked | HR policy accuracy | Work model, hours, late-evening work, pregnancy, and wellbeing language is sensitive | Current wording remains subject to formal policy confirmation |
| P1 | deferred | Gallery context | Gallery lacks approved event names and dates | Add factual captions only when event metadata is available |
| P1 | implemented | Freshness | Schema used an older modification date | Schema and sitemap now use the explicit 2026-08-13 final parity-review date |
| P2 | partially implemented | Career relationship | Recruitment pages need stronger connection | Life uses the canonical `/career` link; the proposed Career-to-Life link was removed for live parity |

### Suggested hero copy

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live hero wording on 2026-08-13; policy language still requires HR review.

**H1:**

> Life at Dynamic Dreamz: Where Teamwork Takes the Lead

**Introduction:**

> Dynamic Dreamz provides opportunities to develop your skills while
> supporting a healthy work-life balance. We are committed to an inclusive
> workplace and equal opportunity regardless of caste, creed, religion, or
> background.

The exact equal-opportunity language should be reviewed by HR before approval.

### Suggested FAQ corrections

Status: deferred. The edited answers were implemented on 2026-08-12 and
reverted to the live wording on 2026-08-13; current policy meaning still
requires confirmation.

- Replace “ample of opportunities” with “ample opportunities.”
- Replace “five-days a week organization” with “five-day workweek.”
- Replace “Fuss ball” with “foosball.”
- Replace “setup a recreational zone” with “set up a recreation zone.”
- Use “work-life balance” consistently.
- State temporary remote-work exceptions only through approved, current HR
  policy language.

### Questions this page should answer

- What is the work culture at Dynamic Dreamz?
- How does the company support professional growth?
- What types of projects do employees work on?
- What are the normal working hours and work model?
- What employee benefits and wellbeing facilities are available?
- Which offices can candidates join?

### Structured-data actions

- Keep FAQPage only while every question and answer remains visible.
- Completed: visible answers and FAQ schema come from the same typed content.
- Update both immediately when approved policy language changes.
- Completed: use the explicit 2026-08-13 final review date.
- Consider adding approved Organization workplace facts, but do not create
  ratings or employment claims that are not visibly substantiated.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/life-dynamicdreamz`; `/life-dynamicdreamz/` redirects to
  `/life-dynamicdreamz`, and the source/build URL guard passes.
- Rendered output contains the same six questions in visible content and
  FAQPage schema.
- Responsive captures confirm the live heading, hero, culture, hiring, and FAQ
  copy are restored at desktop, tablet, and mobile sizes without overflow.
- Remaining: formal policy confirmation, factual event captions, and the
  prelaunch legacy-redirect decision.

## Resources (`/resources`)

Status: technical and semantic improvements implemented; visible copy and
layout restored to live on 2026-08-13

Last reviewed: 2026-08-13

Owner: SEO, content, development, and business stakeholders

### Page role

Shopify and ecommerce knowledge hub for merchants, growth teams, technical
decision-makers, and agency partners.

### Current strengths

- The hub contains a broad Shopify, migration, performance, SEO, AI, B2B,
  white-label, and platform-comparison topic inventory.
- Article cards use titles as descriptive alt text and include real dates.
- The page includes a clear H1, topical navigation, recent articles, brand
  proof, a company video, reviews, and a CTA.
- CollectionPage, ItemList, BlogPosting, BreadcrumbList, Organization,
  WebSite, and VideoObject nodes are modeled.

### Recommended improvements

| Priority | Status | Area | Current issue | Implemented improvement or dependency |
| --- | --- | --- | --- | --- |
| P0 | migration pending | Article availability | Cards and ItemList use planned article routes | Retained under the route exception; migrate and validate priority articles before launch |
| P0 | migration pending | URL consistency | Homepage root paths and Resources `/blogs` paths differ | Decide canonical/redirect policy during article migration |
| P0 | blocked by live parity | Proof consistency | Numeric review values are not governed consistently | Live review counts, ratings, and labels were restored on 2026-08-13; verify and centralize them before launch |
| P0 | blocked by live parity | Shopify-store claim | Resources says `1000+` while Home says `4500+` | The live Resources claim was restored on 2026-08-13; approve one definition and provenance before changing either page |
| P0 | deferred | Unsupported claim | “hundreds and thousands of brands” is vague | The proposed specific-facts copy was reverted to live on 2026-08-13 |
| P1 | deferred | H1 and hero | Heading is conversational and hero relies on rhetorical questions | The direct heading and answer were reverted to live on 2026-08-13 |
| P1 | deferred | Hub copy | Informal phrases and repetition weaken credibility | The concise three-point introduction was reverted to live on 2026-08-13 |
| P1 | deferred | Taxonomy | White-label articles sit under Shopify and Magento is empty | The proposed taxonomy was reverted; the live group names and order are preserved |
| P1 | deferred to article migration | Authorship | Hub data has no approved author or reviewer | Add visible experts, evidence, and dates on each migrated article |
| P1 | deferred to article migration | Commodity content | Several legacy titles use generic list patterns | Add practitioner examples, criteria, limitations, and original evidence when articles migrate |
| P1 | migration pending | Schema depth | ItemList references planned articles and has no article authors | ItemList is intentionally retained now; add full, evidence-matched BlogPosting data on each article page |
| P1 | migration pending | CTA route | `/request-quote` is planned | Retain the CTA and validate before launch |
| P2 | deferred | Trust section | “cutting edge” wording is generic | The concrete capability copy was reverted to live on 2026-08-13 |

### Suggested hero copy

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live heading and introduction on 2026-08-13.

**H1:**

> Shopify and Ecommerce Resources for Growth Teams

**Introduction:**

> Practical guides for merchants, ecommerce leaders, developers, and agency
> partners evaluating Shopify Plus, migrations, performance, CRO,
> integrations, mobile commerce, and white-label delivery.

### Suggested resource-hub introduction

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live hub and story wording on 2026-08-13; fact definitions and
provenance remain pending approval.

> Use this resource hub to make informed Shopify and ecommerce decisions. It
> brings together migration guidance, platform comparisons, performance
> methods, SEO practices, and growth topics in one place.

The proposal would identify the Shopify Platinum Partner team, `150+` experts,
`4500+` Shopify store builds, topic coverage, and visible article dates. The
live UI instead retains its current proof wording; author, reviewer,
assumptions, and evidence remain article-level work.

### Initial article migration priorities

Migrate and improve decision-stage content before importing the entire archive:

1. Shopify development cost.
2. Shopify expert cost.
3. Shopify Plus investment/readiness.
4. Shopify Plus migration process.
5. Shopify migration SEO preservation.
6. Shopify data migration risks.
7. Magento or BigCommerce to Shopify migration.
8. Shopify Core Web Vitals.
9. Agency versus freelancer.
10. Choosing a white-label Shopify partner.

Each migrated article should be materially improved with practitioner insight;
copying an old article into the new shell is not sufficient for AEO/GEO.

### Questions this page should answer or route clearly

- Where can merchants find trustworthy Shopify migration guidance?
- How much does Shopify development or expert support cost?
- When is Shopify Plus the right choice?
- What risks should teams plan for during migration?
- How should an agency evaluate a white-label development partner?
- Which Dynamic Dreamz expert wrote or reviewed each recommendation?

### Structured-data actions

- Keep CollectionPage and BreadcrumbList for the hub.
- Retain the migration-intent ItemList during development and validate every
  article URL before launch.
- Move full Article or BlogPosting detail to the corresponding article page.
- Add author and reviewer data only when those people and roles are visible.
- Completed for the hub: use an explicit 2026-08-13 modification date; use
  actual article dates when those routes are migrated.
- Keep the company VideoObject because the video is visible and its source data
  is known.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/resources`; `/resources/` redirects to `/resources`, and
  the source/build URL guard passes.
- Rendered output contains one CollectionPage, shared Organization, WebSite,
  BreadcrumbList, visible company VideoObject, and the intentionally retained
  64-entry ItemList.
- Responsive captures confirm the live H1, introduction, hub taxonomy, story,
  review cards, counters, and trust copy are restored without new overflow. The
  Resources H1, story title, and blog title now also match the live Montserrat
  700 weight and letter spacing.
- Remaining: resolve the visible `1000+`/`4500+` conflict, approve review values,
  document company-fact provenance, add authorship/evidence on article pages,
  decide article canonicals, and validate routes before launch.

## Beauty & Cosmetics (`/beauty-cosmetics`)

Status: implemented; conversion destinations migration pending
Last reviewed: 2026-08-13
Owner: SEO, content, development, and client success
Primary audience: Beauty, cosmetics, skincare, haircare, salon, and wellness
brand founders; ecommerce leaders; and digital-commerce teams
Decision stage: Solution awareness through agency evaluation

### Page role

Present Dynamic Dreamz's industry-specific ecommerce and web-development
experience for beauty and cosmetics brands. The page should connect common
beauty-commerce needs—visual merchandising, responsive storefronts, booking,
virtual try-on/interactive experiences, and social integration—to relevant
delivery capabilities and attributable portfolio evidence. It differs from a
general Shopify service page by leading with beauty-industry context and work.

### Target prompts

- Which agency builds Shopify stores for beauty and cosmetics brands?
- What ecommerce features help skincare, cosmetics, salon, and haircare brands?
- Can Dynamic Dreamz build appointment booking or virtual try-on experiences?
- Which beauty brands has Dynamic Dreamz supported?
- How can a beauty brand request a Shopify or ecommerce project estimate?

### Current strengths and available evidence

- The live page has a clear Beauty & Cosmetics H1, direct industry framing,
  five visible capabilities, and six externally linked portfolio examples.
- Ranavat, Midnight Cosmetics, Conserving Beauty, Lilac ST., Perfect Locks, and
  Luxxi Nails are visibly named and linked; attribution remains subject to
  ongoing client-permission governance.
- All primary content is suitable for server rendering. The migrated page uses
  the approved slashless canonical and retains real publish/modify dates.
- The shared company entity and independently linked partner/review profiles
  provide broader corroboration without requiring unrelated hidden FAQ copy.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | migration pending | Conversion routes | `/request-quote` and `/our-work` are not built in the current migration | Preserve their slashless canonical intent now; build or redirect and validate both before launch | Route migration |
| P0 | implemented | Schema accuracy | Live source injects unrelated sitewide FAQPage schema that is not visible on this route | Emit only page-relevant Organization, WebSite, WebPage, BreadcrumbList, and Service/OfferCatalog nodes | Rendered schema validated 2026-08-13 |
| P1 | implemented | Metadata | The live title is 157 characters and is likely to truncate | Use a concise Beauty & Cosmetics ecommerce-development title and description while preserving intent | Title, description, canonical, Open Graph, and Twitter metadata validated 2026-08-13 |
| P1 | implemented baseline; case studies migration pending | Evidence | Portfolio proof points route only to external storefronts | Preserve visible external links; add internal case studies as those routes migrate and client attribution is approved | Current links preserved; case-study migration and client approval remain |
| P1 | deferred | Answer copy | Hero and industry paragraph do not directly summarize provider, platform, capabilities, and audience in one answer | Add an entity-first answer only after the exact visible wording is approved | Project-owner copy approval |
| P1 | migration pending | Internal links | Page does not route users to relevant built Shopify capabilities or beauty case studies | Add descriptive service and case-study links when their canonical routes exist | Route coverage |
| P2 | deferred | FAQ coverage | Common evaluation questions are not visibly answered | Add only genuinely useful, owner-approved visible FAQs; mirror exact text in FAQPage schema if added | Content approval and factual sourcing |
| P2 | suggested | Authorship/review | No visible practitioner reviewer or last-reviewed label | Add a qualified reviewer and review date only after ownership and credentials are approved | Leadership/content approval |

### Suggested answer copy

Status: deferred pending exact visible-copy approval.

> Dynamic Dreamz helps beauty and cosmetics brands design, build, and optimize
> ecommerce experiences, including responsive Shopify storefronts, appointment
> booking, interactive product experiences, and social integrations.

The current live hero and IT-solutions copy remains the implementation source
for this migration task.

### Entity, evidence, and authorship actions

- Keep Dynamic Dreamz as the provider and Beauty & Cosmetics Ecommerce
  Development as the page's service subject.
- Keep portfolio names, destinations, and visible platform categories aligned
  with the rendered cards; do not add outcome claims without source approval.
- Add internal beauty case studies only when the routes and attribution are
  validated. Do not convert storefront links into unsupported case-study proof.
- Do not invent an author, reviewer, credential, review value, or project result.

### Internal-link and conversion actions

- Retain the live Request a Quote, Get Started, and View Our Work CTA flow.
- Preserve descriptive portfolio names and external destinations with secure
  new-tab attributes and the live nofollow intent.
- As routes ship, connect this page to Shopify development, Shopify Plus,
  Shopify CRO, mobile commerce, and applicable beauty case studies.

### Structured-data, crawler, and freshness actions

- Emit Organization, WebSite, WebPage, BreadcrumbList, and a page-specific
  Service node whose offers match the five visible deliverables.
- Do not emit FAQPage because no FAQ is visible.
- Use the original 2024-05-06 publish date and the real 2026-08-13 migration
  review/modification date; never substitute build time.
- Keep the page indexable, include it in `sitemap.xml`, and include its local
  primary image in the image sitemap field.

### Measurement plan

- Track landing-page impressions/clicks for beauty ecommerce, cosmetics Shopify,
  salon booking, virtual try-on, and beauty web-development queries.
- Sample the target prompts monthly across Google, Bing/Copilot, ChatGPT Search,
  and relevant answer engines; record whether the page or corroborating sources
  are cited.
- Track Request a Quote, Get Started, portfolio, and View Our Work clicks by
  landing page once analytics governance is configured.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/beauty-cosmetics`; `/beauty-cosmetics/` redirects to
  `/beauty-cosmetics`, and the source/build URL guard passes.
- Checks completed: live rendered/source review, canonical/metadata/date audit,
  heading and CTA inventory, 1440/768/390 visual/computed-style capture,
  animation/hover audit, and asset hash canonicalization.
- Implemented items: server-rendered page content; concise route metadata;
  slashless canonical, Open Graph, and Twitter data; Organization, WebSite,
  WebPage, BreadcrumbList, and page-specific Service/OfferCatalog schema; local
  primary image in the sitemap; meaningful image alts; secure portfolio links;
  and exact live section, copy, and CTA coverage. Rendered HTML checks found one
  H1, no production-asset hotlinks, and all primary answer content before client
  JavaScript.
- Deferred or blocked items: visible answer copy, FAQ, authorship/reviewer,
  internal service/case-study links, and proof outcomes require approval or
  destination-route migration.

## Future Page Maintenance Workflow

This file is the permanent AEO/GEO backlog while the migration grows. Every new
indexable page must receive a page-specific section here during the same task in
which the page is researched or built. Materially updated pages must update
their existing section instead of creating a second entry.

### Required sequence for every new page

1. Add the route section before implementation with the page role, audience,
   intent, target prompts, known proof, and initial risks.
2. Inspect the live page, local page, View Page Source, metadata, links, schema,
   and crawl/indexing behavior.
3. Record recommendations with priority and status. Do not wait until the page
   is otherwise complete.
4. Implement approved nonvisual recommendations that fit the task scope.
   Implement a visible recommendation only when the project owner explicitly
   approved that exact copy/design difference in the current task; a general
   AEO/GEO request is not sufficient approval.
5. After verification, update implemented items with a concise result and leave
   every unresolved item in this file for future work.
6. Update `Last reviewed` even when no new gap is found, and state what was
   checked.
7. Put implementation-ready visible copy in
   `docs/page-content-improvements.md` as `suggested` or `deferred` until exact
   project-owner approval is recorded; keep the originating AEO/GEO
   recommendation here.

### Priority definitions

- `P0`: launch blocker, broken discovery/conversion path, misleading or
  contradictory claim, invalid schema relationship, or material trust risk.
- `P1`: high-value content, evidence, entity, answer, internal-link, or
  measurement improvement that should be handled during or soon after the page
  build.
- `P2`: valuable enhancement that can follow after the page is accurate,
  complete, indexable, and evidence-backed.

### Status definitions

- `suggested`: identified but not approved.
- `approved`: approved for implementation.
- `in progress`: implementation has started but is not verified.
- `implemented`: completed and verified.
- `deferred`: deliberately postponed with a reason.
- `blocked`: cannot proceed without a named fact, asset, approval, route, or
  external dependency.

### Future page template

Copy this section to the page-wise area when beginning a new route:

```md
## Page Name (`/canonical-route`)

Status: suggested | approved | in progress | implemented | deferred | blocked
Last reviewed: YYYY-MM-DD
Owner:
Primary audience:
Decision stage:

### Page role

State the unique job this page performs and how it differs from overlapping
routes.

### Target prompts

- Prompt or question the page should answer.
- Prompt or question the page should answer.

### Current strengths and available evidence

- Existing content, proof, media, expertise, or third-party corroboration.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | suggested |  |  |  |  |

### Suggested answer copy

Add only when a direct answer, definition, summary, comparison, or FAQ would
materially help the user. Keep factual claims subject to approval.

### Entity, evidence, and authorship actions

- Record only applicable actions.

### Internal-link and conversion actions

- Record only applicable actions.

### Structured-data, crawler, and freshness actions

- Record only applicable actions.

### Measurement plan

- Prompts, citations, landing-page queries, conversions, and owner.

### Verification and remaining gaps

- Checks completed:
- Implemented items:
- Deferred or blocked items and reason:
```

Do not remove a route section after launch. Keep it as the audit history and
update its statuses, review date, verification evidence, and remaining gaps.

## Cross-Page Improvement Backlog

| Priority | Status | Improvement | Applies to |
| --- | --- | --- | --- |
| P0 | migration pending | Complete all primary navigation, CTA, schema, and content destinations before launch | All pages |
| P0 | partially implemented; visible conflicts blocked | Core schema facts are centralized; resolve live `1000+`/`4500+` store wording, add definitions/provenance, and centralize approved current review data and leadership titles | Home, About, Resources, schema |
| P0 | migration pending | Standardize article and legacy-route policy | Home, Resources, future Blog |
| P0 | migration pending | Confirm legacy redirect for Life at Dynamic Dreamz | Life |
| P0 | migration pending | Build quote, contact, work, case-study, blog, job-detail/application routes | Home, Career, Resources |
| P0 | blocked | Resolve CRO experience range, Career UI/PDF location differences, and current recruitment/workplace policies | Career, Life |
| P1 | implemented for current routes | Replace deployment dates with real content dates | Sitemap and all five built pages |
| P1 | in progress | Add descriptive internal links as relevant built routes launch | Career, Life, future service pages |
| P1 | deferred to article migration | Add approved authors/reviewers and expert profiles | Resources, future articles/services |
| P1 | deferred to case-study migration | Turn selected work into internal evidence pages | Home, future Work/Case Study |
| P1 | future route work | Define Shopify Plus page intents before implementation | Future service routes |
| P1 | pending operations setup | Establish monthly AI citation and prompt measurement | Sitewide |
| P2 | future content work | Add original research, benchmarks, checklists, and implementation examples | Resources, services, case studies |
| P2 | ongoing | Expand genuine third-party expert and client corroboration | Sitewide entity authority |

## Implementation Acceptance Criteria

A page is AEO/GEO-ready only when:

- Its canonical URL resolves successfully.
- It is indexable and included in the sitemap when appropriate.
- Important content is present in server-rendered text.
- Its H1, introduction, and headings clearly communicate the page purpose.
- It answers the important audience questions for that route.
- Claims are supported, approved, and consistent with the shared fact source.
- Relevant experience or evidence is visible.
- Internal links connect the page to services, proof, resources, and conversion
  destinations.
- Structured data matches visible content and references only live URLs.
- Author, reviewer, publish date, and modification date are accurate where
  applicable.
- Images, video, alt text, captions, and schema describe the same subject.
- Googlebot, Bingbot, and the desired AI search crawlers are not blocked by the
  application or infrastructure.
- The page passes accessibility, SEO, link, schema, lint, and production build
  checks.
- Its target prompts and measurement owner are recorded.

During migration, an unmet criterion that would require an unapproved visible
change is an approval-dependent gap, not permission to alter the UI. Record it
as `suggested`, `deferred`, or `blocked`, preserve the live presentation, and
report it in the task handoff.

During active migration, planned-but-unbuilt destinations may remain in UI and
schema when the project owner explicitly accepts the route exception. That
exception does not waive the full route, redirect, link, and schema validation
required before production launch.

## Governance

- SEO owns search intent, canonical policy, metadata, monitoring, and prompt
  tracking.
- Content owns visible copy, sourcing, authorship, and update schedules.
- Development owns crawlability, rendering, structured data, sitemap, robots,
  redirects, IndexNow, performance, and validation.
- Leadership owns company claims, credentials, positioning, and external
  profiles.
- Client success owns client attribution, testimonials, and outcome approval.
- HR owns job details, work policies, benefits, locations, and expiry status.

Review this strategy quarterly and after major Google, Bing, OpenAI, schema, or
site-architecture changes. Update recommendations when authoritative platform
guidance changes; do not preserve a tactic solely because it is labeled AEO or
GEO.
