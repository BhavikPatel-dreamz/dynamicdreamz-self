# Page Content Improvements

Use this file to track visible page-copy changes that can improve SEO, content
quality, clarity, conversion, or schema consistency while migrating the live
Dynamic Dreamz site.

This is for UI/content changes such as headings, descriptions, section copy,
CTA labels, FAQ wording, proof text, image alt text, and internal-link anchor
text. Keep metadata-only fixes in the relevant code/content files, but record
the visible copy changes here when they affect page quality.

## How To Use

For every page build or one-page SEO audit:

1. Add or update a section for the page name and route.
2. Compare live-site copy, local UI copy, SEO audit findings, and search intent.
3. Record exact recommended replacement copy when content should change.
4. Mark status as `suggested`, `approved`, `implemented`, or `deferred`.
5. Do not invent claims, ratings, awards, client names, dates, or metrics.
6. Preserve live-site intent unless the change improves clarity, accessibility,
   conversion, or SEO.

## Suggestion Template

```md
## Page Name (`/route`)

Status: suggested | approved | implemented | deferred
Last reviewed: YYYY-MM-DD
Primary SEO intent:

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| H1 |  |  |  | High | suggested |
| Hero description |  |  |  | High | suggested |
| Section heading |  |  |  | Medium | suggested |
| CTA label |  |  |  | Medium | suggested |
| FAQ |  |  |  | Low | suggested |
| Image alt text |  |  |  | Medium | suggested |
```

## Home (`/`)

Status: suggested
Last reviewed: 2026-08-10
Primary SEO intent: Shopify Plus agency, Shopify Platinum Partner, ecommerce
and mobile development company.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Review/rating proof copy | Visible badges and schema rating may not describe the same rating source. | Keep visible rating claims source-specific, for example "Clutch 4.9 rating" and "Trustpilot 4.9 rating", or remove aggregate-style wording unless it matches schema exactly. | Prevent mismatch between visible review claims and structured data. | High | suggested |
| Video testimonial descriptions | Video carousel has strong testimonials, but schema-ready descriptions may not be visible for every video. | Add concise visible testimonial captions with client name, company, and value outcome where approved. | Supports VideoObject schema and improves E-E-A-T. | Medium | suggested |
| Internal-link anchor text | Many navigation/service links are migration pending. | As pages ship, use descriptive anchors such as "Shopify Plus agency", "Shopify migration services", and "white label Shopify development" instead of generic labels where natural. | Improves internal-link context after routes are built. | Medium | suggested |

## About Us (`/about-us`)

Status: suggested
Last reviewed: 2026-08-10
Primary SEO intent: company credibility, leadership, history, values, and
Shopify/ecommerce agency trust.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| H1 | Match live page unless audit finds weak clarity. | Use a clear company-focused H1 such as "About Dynamic Dreamz" only if it improves over the live H1 while preserving brand intent. | Keeps page topic explicit for users and crawlers. | High | suggested |
| Hero description | Match live page unless too vague. | Add or preserve a concise intro covering "ecommerce development company since 2006", team size, and Shopify Platinum Partner credibility. | Strengthens E-E-A-T and first-viewport relevance. | High | suggested |
| Timeline copy | Match live timeline facts. | Keep dates factual and concise; do not invent new milestones. | Prevents trust issues from unsupported claims. | Medium | suggested |

## Add New Page Suggestions Below
