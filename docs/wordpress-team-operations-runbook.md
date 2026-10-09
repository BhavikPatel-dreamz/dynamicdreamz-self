# Dynamic Dreamz WordPress Team Operations Runbook
## Non-Technical CMS Editor & Content Operations Manual (Payload 3.0)

Welcome to the **Dynamic Dreamz Next.js & Payload 3.0** website operations manual. This guide is specifically written for WordPress, Elementor, and marketing team members transitioning to our modern App Router content platform.

With this setup, **100% of website content, pages, media, global navigation, and SEO metadata** can be updated directly from the Admin Panel without writing code or touching Git.

---

## Table of Contents

1. [WordPress to Payload Translation Matrix](#1-wordpress-to-payload-translation-matrix)
2. [Access & Logging In](#2-access--logging-in)
3. [Managing Site-Wide Navigation (Menus)](#3-managing-site-wide-navigation-menus)
4. [Updating Global Company Information & Contact Details](#4-updating-global-company-information--contact-details)
5. [The Drag-and-Drop Modular Page Builder](#5-the-drag-and-drop-modular-page-builder)
6. [Field Guide to the 14 Visual Content Blocks](#6-field-guide-to-the-14-visual-content-blocks)
7. [Publishing Blog Posts](#7-publishing-blog-posts)
8. [Managing Case Studies & Portfolio](#8-managing-case-studies--portfolio)
9. [Managing Client Testimonials & Reviews](#9-managing-client-testimonials--reviews)
10. [Media Library & Asset Upload Guidelines](#10-media-library--asset-upload-guidelines)
11. [SEO & Social Sharing Metadata](#11-seo--social-sharing-metadata)
12. [Live Preview & Draft Mode](#12-live-preview--draft-mode)
13. [Instant Cache Invalidation & Publishing](#13-instant-cache-invalidation--publishing)
14. [Troubleshooting & Common FAQs](#14-troubleshooting--common-faqs)

---

## 1. WordPress to Payload Translation Matrix

| WordPress Concept | Payload CMS Equivalent | How to Operate It |
| :--- | :--- | :--- |
| **Appearance $\rightarrow$ Menus** | **Globals $\rightarrow$ Header & Footer Menus** | Visually edit header links, dropdown columns, footer links, and legal links. |
| **Theme Customizer / Options** | **Globals $\rightarrow$ Company Information** | Update phone numbers, WhatsApp, emails, office address, and social profiles. |
| **Elementor / Gutenberg Builder** | **Collections $\rightarrow$ Pages (Blocks)** | Click **"Add Section"** to insert visual blocks (`Hero`, `FAQs`, `Counters`, `CTA`, etc.). Drag and drop to reorder. |
| **Posts & Categories** | **Collections $\rightarrow$ Posts & Categories** | Write posts with the Lexical Rich Text editor, select categories, assign author, and add FAQs. |
| **Portfolio / Projects (CPT)** | **Collections $\rightarrow$ Case Studies** | Manage client name, metrics, challenges, solutions, image galleries, and review quotes. |
| **Client Testimonials** | **Collections $\rightarrow$ Testimonials** | Add quotes, star ratings, reviewer roles, company logos, and video review links. |
| **Media Library** | **Collections $\rightarrow$ Media** | Drag-and-drop file uploads with automatic WebP conversion and SEO alt attributes. |
| **Yoast / RankMath SEO** | **SEO Field Group (Built-in)** | Edit Meta Title, Meta Description, Canonical URL, and Social Share Image for any page or post. |

---

## 2. Access & Logging In

### Admin Panel URLs
- **Local Development**: `http://localhost:3000/admin`
- **Live Production**: `https://www.dynamicdreamz.com/admin`

### Logging In
1. Navigate to the Admin URL in Google Chrome, Microsoft Edge, Firefox, or Safari.
2. Enter your authorized email address and password.
3. Click **Login**.

> [!NOTE]
> If you forget your password, an administrator can generate a reset token or update your password via the CLI using `npm run user:create <email> <password>`.

---

## 3. Managing Site-Wide Navigation (Menus)

To update navigation across the entire site without touching code:

1. In the left sidebar, navigate to **Globals** $\rightarrow$ **Header & Footer Menus** (`navigation`).
2. You will see three tabs/sections:

### A. Header Navigation Items (`headerNav`)
- Click **Add Header Navigation Item** to add a top-level dropdown menu.
- **Title**: The visible menu label (e.g., `Shopify`, `Services`, `Hire Developers`, `About Us`).
- **Href** (Optional): Direct link destination if the top-level label should be clickable.
- **Dropdown Sub-Links (`subItems`)**:
  - **Label**: Name of the sub-service (e.g., `Shopify Plus Agency`).
  - **Href**: Destination path without trailing slashes (e.g., `/shopify-plus-agency`).
  - **Description** (Optional): Short subtitle appearing in mega-menu dropdowns.
  - **Badge** (Optional): Pill badge such as `Popular`, `New`, or `Hot`.

### B. Footer Navigation Columns (`footerColumns`)
- **Title**: Column heading (e.g., `Shopify Services`, `Hire Experts`, `Company`).
- **Links**: Array of items containing `Label` and `Href`.

### C. Footer Bottom Legal Links (`footerBottomLinks`)
- Manages the horizontal copyright bar links (e.g., `Terms of Service` $\rightarrow$ `/terms-of-service`, `Privacy Policy` $\rightarrow$ `/privacy-policy`).

3. Click **Save** in the top-right corner.
4. Changes automatically clear the Next.js layout cache and reflect site-wide within seconds.

---

## 4. Updating Global Company Information & Contact Details

To update contact numbers, WhatsApp chat, and office locations:

1. In the left sidebar, navigate to **Globals** $\rightarrow$ **Company Information** (`site-settings`).
2. Edit the following fields:
   - **Phone Number**: Formatted display string (e.g., `+91 9327642007`).
   - **WhatsApp Number**: Digits-only with country code (e.g., `919327642007`). This powers the instant WhatsApp click-to-chat buttons.
   - **Contact Email**: Primary lead capture email (e.g., `info@dynamicdreamz.com`).
   - **Skype ID**: Skype click-to-call username (e.g., `live:dynamicdreamz`).
   - **Headquarters Address**: Physical street address displayed in the footer and contact pages.
   - **Social Media Links**: Manage platform URLs for LinkedIn, Twitter / X, Instagram, Facebook, and Clutch.
3. Click **Save**.
4. The header bar, sticky contact widget, footer, and Google Organization schema update immediately across all 324+ pages.

---

## 5. The Drag-and-Drop Modular Page Builder

To create or edit any landing, service, or marketing page:

1. In the left sidebar, click **Collections** $\rightarrow$ **Pages**.
2. Click **Create New** (or click an existing page to edit).
3. **Page Title**: Internal administrative title (e.g., `Shopify Plus Agency in London`).
4. **Slug**: The URL path segment.
   - **Rule**: Always use lower-case letters and hyphens (e.g., `shopify-plus-agency-in-london`).
   - **Important**: Do not include leading or trailing slashes (enter `about-us`, never `/about-us/`).
   - For the Homepage, use slug `home` or `index`.
5. Under **Page Layout Sections (Drag & Drop)**, click **Add Section** to choose from our 14 modular blocks.
6. Drag blocks up and down using the grip icon to change their order on the page.
7. Configure the block settings and click **Publish**.

---

## 6. Field Guide to the 14 Visual Content Blocks

Every block maps directly to our high-performance Next.js component system:

### 1. Hero Section (`hero`)
- **Eyebrow**: Small uppercase label above the title (e.g., `SHOPIFY PLATINUM PARTNER`).
- **Heading**: Primary H1 title of the page.
- **Description**: Compelling introduction paragraph.
- **CTA Label & Href**: Primary conversion button (e.g., `Get a Quote` $\rightarrow$ `/contact-us`).
- **Layout Variant**: Choose between `Split (Text + Media)` or `Centered`.
- **Hero Image / Media**: Upload featured hero photography or illustration.

### 2. Proof Counters (`proof-counters`)
- **Eyebrow & Heading**: Section introduction.
- **Counters**: Array of metric stat cards:
  - **Value**: Bold number with suffix (e.g., `5000+`, `150+`, `1100+`, `1B+`).
  - **Label**: Explanatory text (e.g., `Projects Delivered`, `Experts in House`).

### 3. Features Grid (`features-grid`)
- **Columns**: Choose `3 Columns` or `4 Columns`.
- **Cards**:
  - **Title**: Feature heading.
  - **Description**: Benefit explanation.
  - **Icon**: Uploaded SVG icon from Media Library.
  - **Link (Href)**: Optional destination link.

### 4. Process Timeline (`process-timeline`)
- **Steps**: Numbered roadmap items (01, 02, 03...):
  - **Step Number**: Step index.
  - **Title**: Phase name (e.g., `Discovery & Strategy`, `UI/UX Design`, `Development & Testing`).
  - **Description**: Explanation of what happens during this phase.

### 5. FAQ Accordion (`faq-accordion`)
- **Heading & Eyebrow**: Section headings.
- **FAQs**: Expandable Q&A accordion questions:
  - **Question**: Search-optimized question string.
  - **Answer**: Rich explanation.

### 6. Happy Clients (`happy-clients`)
- **Heading & Eyebrow**: Review section title.
- **Variant**: `Carousel` (swipeable testimonials) or `Grid`.
- **Testimonials**: Pick specific client testimonials from the Testimonials collection.

### 7. Case Studies Grid (`case-studies-grid`)
- **Heading & Eyebrow**: Portfolio intro.
- **Filter by Industry**: Optional filter to show only specific industry case studies (e.g., `Fashion`, `Food & Beverages`).
- **Limit**: Number of cards to display (default: `6`).

### 8. CTA Banner (`cta-banner`)
- **Heading**: High-contrast conversion proposition (e.g., `Want us to help you with your online store?`).
- **Description**: Supporting urgency text.
- **Button Label & Href**: Action button (e.g., `Request a quote` $\rightarrow$ `/contact-us`).
- **Variant**: `Full Width Gradient`, `Dark Blue Box`, or `Minimal`.

### 9. Brand Partners (`brand-partners`)
- **Heading**: Title above the marquee.
- **Logos**: Array of client and partner logos that scroll continuously.

### 10. Pricing Models (`pricing-models`)
- **Tiers**: Package comparison cards:
  - **Label**: Package name (e.g., `Dedicated Developer`, `Fixed Price Project`).
  - **Price**: Pricing figure or rate (e.g., `$25/hr` or `Custom Quote`).
  - **Bullets**: Checklist of included deliverables.
  - **CTA Label & Href**: Package booking link.

### 11. Technologies & Integrations Grid (`technologies-grid`)
- Categorized technology stacks (Shopify, WordPress, BigCommerce, React, Mobile Apps, ERP/CRM).

### 12. Image with Text / Split Content (`image-with-text`)
- **Image Position**: Choose `Image on Left` or `Image on Right`.
- **Heading & Description**: Editorial copy.
- **Feature Checklist (`bullets`)**: Green checkmark bullet points.
- **CTA Button**: Optional button.

### 13. Industries Served Grid (`industries-grid`)
- Vertical industry cards with photography, eyebrow, and direct service landing page links.

### 14. Rich Text Content / Legal (`rich-text-content`)
- Formatted long-form editorial copy using Lexical editor with selectable container width (`Narrow (Legal / Policy)`, `Standard`, or `Full Width`).

---

## 7. Publishing Blog Posts

To write and publish a post in the Blog section:

1. Go to **Collections** $\rightarrow$ **Posts**.
2. Click **Create New**.
3. **Post Title**: Main headline.
4. **Slug**: URL slug under `/blogs/<slug>` (e.g., `shopify-cro-checklist`).
5. **Publish Date (`date`)**: Publication timestamp for chronological ordering.
6. **Display Date**: Formatted string shown to readers (e.g., `October 15, 2026`).
7. **Cover Image**: Upload a high-resolution 16:9 banner image. Provide accurate ALT text.
8. **Excerpt**: 2-3 sentence summary displayed on the blog archive card and search snippet.
9. **Content**: Use the Lexical editor to write the body copy:
   - Use **Heading 2** and **Heading 3** for proper hierarchical structure.
   - Insert bulleted lists, numbered lists, blockquotes, and internal links.
10. **Categories**: Multi-select one or more categories (e.g., `Shopify Plus`, `CRO`, `Migrations`).
11. **Author**: Select the post author.
12. **Post FAQs**: Add post-specific Q&A items. These are automatically converted into Google FAQ Page structured data.
13. **SEO Settings**: Set Meta Title and Meta Description.
14. Click **Publish**.

---

## 8. Managing Case Studies & Portfolio

To showcase client projects and results:

1. Go to **Collections** $\rightarrow$ **Case Studies**.
2. Click **Create New**.
3. Fill in the core project fields:
   - **Project Title**: Case study name.
   - **Slug**: URL under `/case-studies/<slug>` (e.g., `gnc-india`).
   - **Client Name**: Brand or company name.
   - **Industry**: Vertical (e.g., `Health & Nutrition`, `Fashion & Luxury`).
   - **Technology**: Platform used (e.g., `Shopify Plus`, `Hydrogen Headless`).
   - **Live Website URL**: Link to the active client store.
4. Fill in the editorial narrative:
   - **Project Overview**: Executive summary.
   - **Challenge**: The technical or business obstacles the client faced.
   - **Solution**: The engineering and design architecture Dynamic Dreamz implemented.
5. Add **Key Results & Metrics**:
   - Card 1: `+180%` $\rightarrow$ `Organic Conversion Rate`
   - Card 2: `1.2s` $\rightarrow$ `Core Web Vitals LCP`
   - Card 3: `3.5x` $\rightarrow$ `Black Friday GMV Growth`
6. Attach **Thumbnail**, **Hero Image**, and **Gallery Images**.
7. Link a **Client Testimonial** if a client quote is available.
8. Click **Publish**.

---

## 9. Managing Client Testimonials & Reviews

1. Go to **Collections** $\rightarrow$ **Testimonials**.
2. Click **Create New**.
3. **Client Name**: Full name of the reviewer.
4. **Role & Company**: Title and company name (e.g., `VP of Ecommerce, Ranavat`).
5. **Rating**: Star rating (default: `5`).
6. **Review Quote**: Client feedback.
7. **Avatar & Company Logo**: Upload reviewer headshot and brand logo.
8. **Video Review URL** (Optional): Vimeo or YouTube URL for video testimonial popups.
9. Click **Publish**.

---

## 10. Media Library & Asset Upload Guidelines

Our Next.js frontend uses Next.js Image optimization and WebP delivery. Follow these hygiene rules:

- **Format**: Upload high-resolution PNG, JPG, SVG, or WebP files.
- **Alt Text is Mandatory**: Always fill in the **Alternative Text (Alt)** field with descriptive text describing what is pictured (e.g., `Ranavat luxury ayurvedic skincare Shopify Plus homepage design`).
- **File Names**: Use clean kebab-case names before uploading (e.g., `gnc-india-mobile-mockup.webp`, not `IMG_9384_final_v2.png`).
- **Do Not Re-upload Duplicates**: If a logo or icon is already in the Media Library, reuse it from the selection modal instead of uploading a second copy.

---

## 11. SEO & Social Sharing Metadata

Every Page, Post, and Case Study includes an **SEO Settings** group:

1. **Meta Title**:
   - Optimal length: 50–60 characters.
   - Format: `Primary Keyword - Secondary Benefit | Dynamic Dreamz`.
2. **Meta Description**:
   - Optimal length: 145–160 characters.
   - Clear value proposition with a call to action.
3. **Canonical URL**:
   - Leave blank to use the automatic default URL, or specify an explicit absolute URL.
   - Remember the slashless policy: `https://www.dynamicdreamz.com/shopify-plus-agency` (no trailing slash).
4. **Social Share Image (`metaImage`)**:
   - 1200x630 pixel graphic used when the link is shared on LinkedIn, WhatsApp, X, and Facebook.

---

## 12. Live Preview & Draft Mode

Payload 3.0 provides real-time side-by-side Live Preview:

1. While editing any Page, Post, or Case Study, look at the top action bar.
2. Click **Live Preview**.
3. The right-hand pane opens an interactive preview of your draft.
4. Any text, block reordering, or image change in the left panel updates the live preview immediately without needing to hit Save or Publish.
5. In draft mode, the frontend displays an orange **Draft Preview** pill in the lower-right corner with an **Exit** button.

---

## 13. Instant Cache Invalidation & Publishing

Next.js uses Incremental Static Regeneration (ISR) for blistering page speed:

- **Automatic Purging**: When you click **Save** or **Publish** on any page, post, case study, or navigation menu, Payload triggers an automatic background hook (`afterChange` / `afterDelete`) that instantly purges the Next.js cache.
- **Manual Cache Purge**: If you ever need to manually purge a specific URL:
  ```bash
  curl -X POST "https://www.dynamicdreamz.com/api/revalidate?secret=YOUR_PAYLOAD_SECRET" \
    -H "Content-Type: application/json" \
    -d '{"path": "/blogs"}'
  ```

---

## 14. Troubleshooting & Common FAQs

### Q: I updated a navigation link in Globals, but I don't see it on the site.
**A**:
1. Check that you clicked **Save** on the Navigation Global screen.
2. Perform a hard refresh in your browser (`Ctrl + Shift + R` or `Cmd + Shift + R`) to bypass your local browser cache.

### Q: Why shouldn't I add a trailing slash to my slug?
**A**: The Dynamic Dreamz website enforces a strict SEO URL policy where all URLs end cleanly without slashes (e.g., `/case-studies/ranavat`). Adding a trailing slash can create duplicate content warnings in Google Search Console.

### Q: Can I save my work as a draft without making it live?
**A**: Yes! You can save documents as drafts and use the **Live Preview** feature to review them before clicking **Publish**.

### Q: How do I create a new user for an employee?
**A**: From the Admin Panel, navigate to **Collections** $\rightarrow$ **Users** $\rightarrow$ **Create New**, enter their email and temporary password, and click **Save**. Alternatively, an engineer can run `npm run user:create <email> <password>`.
