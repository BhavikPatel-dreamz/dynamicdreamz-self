# Career Apply Now Page Visual Capture

Live URL: `https://www.dynamicdreamz.com/career-apply-now/`  
Local route: `/career-apply-now`  
Date checked: 2026-09-07  
Browser: Microsoft Edge (Chromium, headless visual capture)  

## Viewports & Screenshots

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `scratch/live-1440.png` | `scratch/local-1440.png` | passed; exact layout, colors, typography, and button matching |
| 768x1024 | `scratch/live-768.png` | `scratch/local-768.png` | passed; centered heading, 2-col contact list, responsive form grid |
| 390x844 | `scratch/live-390.png` | `scratch/local-390.png` | passed; single-column stacked layout, full-width inputs and CTA |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| `https://www.dynamicdreamz.com/career-apply-now/` | View Page Source, SEO metadata, canonical, Open Graph, BreadcrumbList schema, heading structure, form fields, and layout geometry. |
| `job-apply-now/main.css` | `.apply-interivew-sec`, `.apply-interivew-main` gradient border (178.87deg, #15c064 11.23%, rgba(0,209,255,0.66) 33.98%, rgba(0,209,255,0) 78.28%), `.wrapper` (white, radius 30px, padding 78px), `.left-col` (31%), `.right-col` (61%), form row grid, field groups, input styles, upload button, `.btn-red` keyframe/hover transition. |
| `job-apply-now/media.css` | Breakpoints at 1299px (padding 78px 60px, h1 30px), 1199px (padding 60px 40px, left-col 40%, right-col 55%), 991px (column flex, left-col 100%, right-col 100%, left-col mb 60px, h1 text-center), 767px (padding 40px 20px, col-md-6 to 100%, btn-red full width, h1 27px), 320px (padding 40px 10px, h1 23px). |
| `header-two.css` | HeaderTwo minimal chrome with Dynamic Dreamz logo on the left and "Go back" button on the right with custom back arrow. |

## Layout Structure & Styling Details

- **Header**: Minimal `HeaderTwo` (reused from `src/components/sections/request-quote/header-two.tsx` and `go-back-button.tsx`).
- **Section**: `.apply-interivew-sec` with padding `40px 0 10px 0`, max-width 1354px on `min-[1300px]`.
- **Card Container**: `.apply-interivew-main` has a gradient border with 2px padding, radius 30px, enclosing `.wrapper` with `#ffffff` background and 30px radius.
- **Left Column** (31% desktop, 40% at 1199px, 100% stacked below 992px):
  - Heading: `Apply and Schedule an Interview` (35px bold, line-height 46px, letter-spacing -0.7px, pb-32px, mb-32px, border-b #efefef).
  - Phone Contact:
    - 46px circular icon badge with linear gradient (97.18deg, #15c064 28.5% to #00d1ff 91.82%) and white phone SVG.
    - Title: `CALL US ON OUR {HR}` (16px uppercase, font-semibold #090909, mb 15px).
    - Link: `+91 63520 11266` (`tel:+916352011266`, 16px medium #535353, hover #AD5151).
  - Email Contact:
    - 46px circular icon badge with linear gradient (97.18deg, #15c064 to #00d1ff) and white envelope SVG.
    - Title: `DROP YOUR RESUME AT :` (16px uppercase, font-semibold #090909, mb 15px).
    - Link: `hr@dynamicdreamz.com` (`mailto:hr@dynamicdreamz.com`, 16px medium #535353, hover #AD5151).
- **Right Column** (61% desktop, 55% at 1199px, 100% stacked below 992px):
  - Form grid: 2-column on desktop (`col-md-6` 50% width, 7px gutter), 1-column on mobile (`<768px`).
  - Fields:
    1. `Position Applying For` (Select dropdown with custom arrow from `public/assets/request-quote/icons/select-arrow.svg`). Pre-selected when `PositionAppliedFor` query param is present.
    2. `Location` (Select dropdown: Surat, Ahmedabad). Pre-selected when `Location` query param is present.
    3. `Name *` (Text input, placeholder "Enter Your Name", required).
    4. `Email *` (Email input, placeholder "info@email.com", required).
    5. `Mobile phone` (Tel input with Indian tricolor flag badge, country code `+91`, dropdown arrow indicator, and border divider).
    6. `Years of Exp` (Text input, placeholder "1.5 Exp").
    7. `Your Message` (Textarea, 10 rows, placeholder "Enter Your Message", full width).
    8. `Upload Your Resume Here` (File upload input with button `Upload a File` + icon, allowed extensions `.pdf, .doc, .docx, .txt`, helper text `(Only doc, docx and pdf file format allow. Max file upload limit: 5MB)`, and filename status text defaulting to `No file choosen`).
    9. Submit button: Canonical `ButtonLink` component (`variant="primary"`, `type="submit"`) with text `apply now` (renders uppercase bold `APPLY NOW`), red fill `#ad5151`, animated sliding background on hover, and full width on mobile (`max-[767px]:w-full`).
- **Footer**: Full site-wide footer (`SiteFooter`).

## Interaction States

- **Hover**:
  - Phone and Email links transition to `#AD5151`.
  - Submit button `.btn-red` slides red background out to reveal transparent background with light border and text color transition.
  - "Go back" button transitions text and SVG arrow to `#AD5151`.
  - File upload label changes background/border on hover.
- **Focus**: Inputs and selects transition border to `#090909`.
- **Pre-fill behavior**: URL query parameters `?PositionAppliedFor=...&Location=...` from `/career` job cards pre-select the appropriate options on mount.
