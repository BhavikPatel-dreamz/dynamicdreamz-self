# Terms of Service Page

Live URL: `https://www.dynamicdreamz.com/terms-of-service/`
Local route: `/terms-of-service`
Date checked: 2026-08-19
Browser/source: Google Chrome inspection, rendered live page + View Page Source, live page-specific CSS (`standard-page/standard-page.css`, `style.css`, `default-media.css`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Hero header with subtle mint-cyan gradient background (`#e8f9ef` to `#e6fafd`), H1 `Terms of Service` centered. Standard text content container with H2 section headings (Services We Provide, Project Onboarding & Communication, Payments & Billing, Cancellation & Refund Policy, Intellectual Property & Ownership, Confidentiality, Third-Party Services & Tools, Quality Assurance & Support, Limitation of Liability, Governing Law, Contact Information), disc bullet lists, and red underlined contact email. |
| 768x1024 (Tablet) | Centered hero with responsive padding (`pt-[140px] pb-[46px]`), comfortable content container padding, responsive heading sizes (`h1` 40px/50px, `h2` 20px/31px). |
| 390x844 (Mobile) | Single-column text layout, touch-friendly line heights, scaled headings (`h1` 30px/40px), bullet list margins adjusted. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Document title (`Terms of Service - Shopify Plus Agency & Shopify Platinum Partner \| Dynamic Dreamz`), meta description, canonical URL (`https://www.dynamicdreamz.com/terms-of-service/`), H1 heading, all 11 policy sections, contact link, and Yoast structured data graph. |
| Live `standard-page/standard-page.css` | `.inner-hero-sec` (pt 160px, pb 85px, gradient bg), `.standard-text-content` (h2 24px/31.2px/700, p 16px/500/30.4px #535353, ul disc with margin-left 20px, li 16px/500/27px mb 18px), `.contacy_us_pp a` (#d92128 underline). |
| Assets | No external image dependencies; standard text layout. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero Section | `.inner-hero-sec` with centered H1 and gradient background | Reused gradient hero container pattern from `PrivacyPolicyPage` |
| Policy Content | `.standard-text-content` containing 11 sections with H2s, paragraphs, disc bullet lists, and contact link | Reused standard text section container with typed `termsOfServiceContent` |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Email link hover | Red text (`#d92128`) underline on hover/focus | Tailwind `text-[#d92128] underline hover:no-underline` | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical has trailing slash | Slashless `/terms-of-service` per repo URL policy | implemented |
| Live meta title is 83 chars (exceeds 60-char budget) | Cleaned title to `Terms of Service \| Dynamic Dreamz` (34 chars) | implemented in metadata |
| Live meta description is 143 chars | Preserved live meta description (143 chars) within 70-160 budget | implemented in metadata |
