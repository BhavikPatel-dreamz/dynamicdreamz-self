# Page Content Improvements

Use this file to track visible page-copy changes that can improve SEO, content
quality, clarity, conversion, or schema consistency while migrating the live
Dynamic Dreamz site.

This is for UI/content changes such as headings, descriptions, section copy,
CTA labels, FAQ wording, proof text, image alt text, and internal-link anchor
text. Keep metadata-only fixes in the relevant code/content files, but record
the visible copy changes here when they affect page quality.

## Relationship To The AEO/GEO Strategy

`docs/aeo-geo-strategy.md` is the permanent source of truth for AEO/GEO
findings, priorities, target prompts, evidence gaps, entity work, crawler work,
schema work, and measurement actions. Keep those recommendations in that file
as new pages are built.

Use this file only for exact visible-copy changes that need content approval or
implementation. When an AEO/GEO recommendation produces a copy change, keep the
original recommendation in the strategy and add the implementation-ready copy
here under the same route. Do not move or delete the strategy item.

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

Status: implemented
Last reviewed: 2026-08-11
Primary SEO intent: Shopify Plus agency, Shopify Platinum Partner, ecommerce
and mobile development company.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Review/rating proof copy | Visible badges and schema rating may not describe the same rating source. | Removed the ambiguous Organization `aggregateRating`; visible source-specific badge copy remains unchanged. | Prevents mismatch between visible review claims and structured data. | High | implemented |
| Video testimonial descriptions | Video carousel has strong testimonials, but schema-ready descriptions may not be visible for every video. | Added VideoObject schema from the visible testimonial title, client, company, quote, YouTube URL, embed URL, and thumbnail URL. | Supports video discovery and improves E-E-A-T without inventing new UI claims. | Medium | implemented |
| Internal-link anchor text | Many navigation/service links are migration pending. | As pages ship, use descriptive anchors such as "Shopify Plus agency", "Shopify migration services", and "white label Shopify development" instead of generic labels where natural. | Improves internal-link context after routes are built. Broken planned routes are excluded from local SEO scoring until launch. | Medium | deferred |

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

## Career (`/career`)

Status: deferred
Last reviewed: 2026-08-11
Primary SEO intent: Dynamic Dreamz careers, IT jobs in Surat and Ahmedabad,
digital marketing roles, and ecommerce technology opportunities.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| H1 | Explore rewarding career in IT, where your talents thrive and possibilities flourish. | Explore a rewarding career in IT, where your talents thrive and possibilities flourish. | Corrects the missing article while preserving the live page's recruitment message. | Medium | deferred for live visual/content parity |
| Workplace benefit | Ample of Employee Engagement Activities | Ample Employee Engagement Activities | Improves grammar without changing the benefit claim. | Low | deferred for live visual/content parity |
| Job CTA destination | Apply now links point to `/career-apply-now/`, which is not yet migrated. | Build the application route with the selected position and location prefilled. | Completes the recruitment conversion flow without losing the live query parameters. | High | migration pending |

## Life @ Dynamic Dreamz (`/life-dynamicdreamz`)

Status: deferred
Last reviewed: 2026-08-11
Primary SEO intent: Dynamic Dreamz work culture, professional growth,
work-life balance, inclusive workplace, and employee experience.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Meta title | Discover Our Work Culture \| Maintain Work-Life Balance \| Equal Opportunity Employer | Life at Dynamic Dreamz \| Culture & Work-Life Balance | Live title is 83 characters and truncates in search results, burying the brand and "Equal Opportunity Employer" tail. Shortened to 52 characters, keeping the page identity plus the two highest-intent topics; equal-opportunity remains in the meta description. Intentional divergence from live. | High | implemented |
| Hero description | Dynamic Dreamz gives ample of opportunities to amplify your potential and let you maintain work life balance. | Dynamic Dreamz provides ample opportunities to amplify your potential while maintaining a healthy work-life balance. | Corrects grammar and improves the primary work-culture message. | Medium | deferred for live content parity |
| Hiring paragraph | Your future is full of possibilities, and at Dynamic Dreramz, we provide the tools and opportunities to explore them. | Your future is full of possibilities, and at Dynamic Dreamz, we provide the tools and opportunities to explore them. | Corrects the company-name typo in conversion copy. | High | deferred for live content parity |
| Professional-development FAQ | There are ample of opportunities for the professional development and growth... | There are ample opportunities for professional development and growth because our clients span a broad range of industries and our teams use cutting-edge technologies. | Improves clarity and grammar while preserving the approved claim. | Medium | deferred for live content parity |
| Health and wellbeing FAQ | We have setup a recreational zone... Fuss ball... For health point of view... | We have set up a recreation zone with indoor games such as carrom, foosball, darts and cards, along with a treadmill and Android TV to help employees recharge. | Corrects grammar, spelling and readability without changing the facilities described. | Low | deferred for live content parity |

## Add New Page Suggestions Below

## Resources (`/resources`)

Status: deferred
Last reviewed: 2026-08-11
Primary SEO intent: Shopify resources, ecommerce growth guidance, migration
guides, performance, SEO, and white-label development insights.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Resource-hub introduction | Uses informal phrases such as "you're gonna find," inconsistent Shopify capitalization, and several long sentences. | Replace with concise professional copy addressing Shopify merchants, ecommerce founders, and agency partners while preserving the same migration, performance, design, marketing, and growth topics. | Improves readability and enterprise credibility without changing search intent. | Medium | deferred for live content parity |
| Story proof copy | Says the team empowers "hundreds and thousands of brands" while separately citing 1,000+ stores. | Use the approved, specific proof point: "helping brands build, scale and optimise more than 1,000 Shopify stores." | Removes ambiguous claim language and strengthens trust. | High | deferred pending claim approval |
| Category link | The live story category uses a non-functional `#` destination. | Link "Shopify" to `/blogs/category/shopify/`. | Restores useful navigation and descriptive internal-link context. | High | implemented |
| Article image alt text | Several live WordPress image alts repeat filenames with underscores and punctuation. | Use each visible article title as its thumbnail alt text. | Gives every content image meaningful, page-specific alternative text. | Medium | implemented |
| Heading hierarchy | The live page uses a second `h1` for "Our Dynamic Story,". | Keep the visual treatment but render the story title as an `h2`. | Produces one clear primary heading and a logical page outline. | High | implemented |
