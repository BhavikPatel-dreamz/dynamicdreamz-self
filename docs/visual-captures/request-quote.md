# Request Quote Page Visual Capture

## Live URL
https://www.dynamicdreamz.com/request-quote/

## Local Route
/request-quote

## Date Checked
2026-10-05

## Browser
Chromium (headless Google Chrome 111+)

## Viewport Sizes
- Desktop: 1440x1200
- Tablet: 768x1200
- Mobile: 390x1400

## Live Screenshots
- Desktop: `docs/visual-captures/source/request-quote/live-desktop-1440x900.png`
- Tablet: `docs/visual-captures/source/request-quote/live-tablet-768x1024.png`
- Mobile: `docs/visual-captures/source/request-quote/live-mobile-390x844.png`

## Local Screenshots
- Desktop: `docs/visual-captures/source/request-quote/local-desktop-1440x900.png`
- Tablet: `docs/visual-captures/source/request-quote/local-tablet-768x1024.png`
- Mobile: `docs/visual-captures/source/request-quote/local-mobile-390x844.png`

## Live Page Structure (from View Page Source and Computed Styles)

### Header (`header.header-two.dd`)
- Logo: `dynamic-dreamz-logo-new.svg` (225x38 on desktop, 180px on 992-1199px, 170px on <=767px, 150px on <=379px)
- "Go back" button with arrow icon (`button.back_btn`)
- Padding: 30px 0 (desktop), 26.5px 0 (mobile)
- Z-index: 1, position: relative

### Main Section (`.request-quote-sec`)
- Margin-top: -111px
- Overflow: hidden
- Container max-width: 1360px at >= 1300px with 40px horizontal padding

### Left Column (`.left-col`)
- Width: 50% (100% on <= 991px)
- Padding: 150px top, 46px right, 140px bottom (reduced on mobile: 50px top, 0 right, 100px bottom)
- Background: `#fbf7ed` (via `::before` pseudo-element extending 100vw to the left)
- H1: "Get a Project Quote" (35px, bold, Montserrat, line-height 48.475px, letter-spacing -0.7px)
- Description: "Please share your project details and our team will get back to you." (16px, medium, 14px on mobile)
- Counters (`.deliver-wrapper`):
  - Experience: 20+ Years
  - Projects: 5000+
  - Experts: 150+
  - Counter text: 35px bold, unit text: 16px semibold, label: 14px uppercase semibold (`color: rgba(9,9,9,0.63)`)
  - Vertical border dividers between counters
- Review Badges (`.review-wraper`):
  - 1: Shopify Platinum Partners (`shopify-platinum-partners.svg`, 145x43)
  - 2: Clutch (`clutch-review.svg`, 150x32)
  - 3: Upwork Top Rated (`upwork-top-rated.svg`, 153x35)
  - 4: TrustPilot (`logo_brand_2_neww.svg`, 145x43)
  - 4 columns on desktop, 2x2 grid on tablet, stacked full-width on mobile
  - Gradient border (#15c064 to #00d1ff) with blur shadow
- Testimonial Slider (`.testimonial-slider`):
  - 7 testimonials (Alec Torelli, William Petz, William ST Baker, Kerri Imarie, Brandon, Shari Leidich, Rebekah Wymer)
  - Each with circular headshot avatar (48x48 rounded-full), name (18px semibold Montserrat), 5-star rating icon (118x20), quote text (14px, line-height 24px, #535353)
  - Quote icon (`.qoute-icon`) is hidden (`display: none` in live CSS)
  - Gradient border cards (#15c064 to #00d1ff)
  - Slick carousel configuration: `infinite: true`, `speed: 1000`, `slidesToShow: 1`, `slidesToScroll: 1`, `autoplay: true`, `autoplaySpeed: 2000`, `arrows: true`
  - Navigation arrow buttons at bottom right: `<` and `>` in white boxes with soft shadow

### Right Column (`.right-col`)
- Width: 50% (100% on <= 991px)
- Padding: 150px top, 46px left, 110px bottom (on <= 991px: 150px top, 0 left, 50px bottom)
- H2: "Tell us about your project :)" (35px, bold, Montserrat, margin-bottom 24px; 40px on mobile)
- Form fields:
  - Full Name * (text input, placeholder: "Enter Your Name")
  - Email * (email input, placeholder: "Enter Your Email")
  - Mobile Phone (tel input with country code selector, flag +91, placeholder: "81234 56789")
  - Company name (text input, placeholder: "Enter Your Company Name")
  - Website URL (text input, placeholder: "Enter Your Website Url")
  - Estimated Budget (in US $) (custom select with chevron arrow, placeholder: "Select your budget")
  - Brief about your project (textarea, placeholder: "Tell us what you want to build, redesign, migrate or improve.")
- Submit button: "SUBMIT INQUIRY" (pill shape, border-radius 30px, background `#AD5151`, hover transition to `#4f4f4f`)

### Footer (`footer.site-footer`)
- Standard multi-column site footer with awards, social links, legal navigation, and copyright
- WhatsApp floating widget in bottom right

## Live CSS Files Inspected
- `request-quote.css` - Full main, responsive, form, and header styles from live CDN
- `custom.js` - intlTelInput configuration (`initialCountry: "auto"`, `separateDialCode: true`)
- `request-quote.js` - Slick carousel configuration (`speed: 1000`, `autoplay: true`, `autoplaySpeed: 2000`)

## Key Style Values
- Font: Montserrat (headings, buttons, counters, inputs) and Neue Montreal
- Theme red: #AD5151 (for buttons, hover states)
- Background theme: #fbf7ed
- Gradient: linear-gradient(to right, #15c064, #00d1ff)
- Border radius: 9px (badges), 10px (testimonials), 30px (submit button), 5px (inputs)
- Form input border: 1.5px solid #dfdfdf
- Form input focus border: #090909
- Placeholder color: #9a9a9a

## Responsive Breakpoints
- >= 1300px: Container max-width 1360px with 40px padding
- 992px - 1199px: Reduced padding, 2-column badges, 29px headings
- <= 991px: Column layout reverses (form first, then hero/proof below), left column bottom padding 100px
- <= 767px: Single column form fields, stacked badges, smaller counters
- <= 575px: Testimonial slider margin adjustment, 12px counter labels
- <= 359px: 24px headings, 24px counter numbers

## Parity Verification Matrix
| Element | Live Site | Local Implementation | Match Status |
| --- | --- | --- | --- |
| Header Logo | Dynamic Dreamz + Shopify Platinum Partner | Shared SVG branded lockup | Exact match |
| "Go back" link | Arrow + "Go back" | Arrow + "Go back" (`useRouter`) | Exact match |
| Section Margin | -mt-[111px] | -mt-[111px] | Exact match |
| Left Column Bg | #fbf7ed extending to left | #fbf7ed pseudo-element | Exact match |
| H1 Copy | "Get a Project Quote" | "Get a Project Quote" | Exact match |
| Description | "Please share your project details and our team will get back to you." | "Please share your project details and our team will get back to you." | Exact match |
| Counters | 20+ Years, 5000+, 150+ | 20+ Years, 5000+, 150+ | Exact match |
| Counter Labels | 14px uppercase semibold | 14px uppercase semibold | Exact match |
| Badges | 4 badges with exact SVG vectors | Canonical `/assets/awards/` SVGs | Exact match |
| Testimonial Avatar | Alec Torelli circular photo | `/assets/testimonials/alec-torelli.webp` | Exact match |
| Testimonial Rating | 5 stars (118x20) | 5 stars (118x20) | Exact match |
| Testimonial Text | 14px, line-height 24px, #535353 | 14px, line-height 24px, #535353 | Exact match |
| Quote Icon | Hidden (`display: none`) | Hidden | Exact match |
| Slider Autoplay | Autoplay enabled, 2s interval | Autoplay enabled, 2s interval | Exact match |
| Slider Speed | 1000ms transition | 1000ms transition | Exact match |
| Slider Arrows | Bottom right `<` and `>` | Bottom right `<` and `>` | Exact match |
| Form H2 | "Tell us about your project :)" | "Tell us about your project :)" | Exact match |
| Form Labels | 16px/600 with red `*` | 16px/600 with red `*` | Exact match |
| Phone Input | Flag +91 + down chevron, placeholder `81234 56789` | Unified container, flag +91 + down chevron, placeholder `81234 56789` | Exact match |
| Field Borders | 1.5px solid #dfdfdf | 1.5px solid #dfdfdf | Exact match |
| Submit Button | Pill `#AD5151` uppercase | Pill `#AD5151` uppercase | Exact match |
| Mobile Order | Form first, Hero below | `flex-col-reverse` on <= 991px | Exact match |
| Site Footer | Standard site footer present | Site footer present via layout | Exact match |
| WhatsApp Widget | Floating widget bottom right | Floating widget present via layout | Exact match |

## Verification Checklist
- [x] Live desktop, tablet, and mobile screenshots captured
- [x] Local desktop, tablet, and mobile screenshots captured at matching viewports
- [x] Side-by-side visual comparison completed
- [x] Form fields, focus states, and input borders matched
- [x] Phone input country selector and placeholder verified
- [x] Badge vector assets verified against canonical files
- [x] Testimonial slider speed, autoplay, and typography verified
- [x] Responsive layout reordering verified
- [x] Component content boundary passed (`npm run check:component-content`)
- [x] URL policy passed (`npm run check:urls`)
- [x] No runtime dependency on dynamicdreamz.com
