# Thank You For Applying Page

Live URL: `https://www.dynamicdreamz.com/thank-you-for-applying/`
Local route: `/thank-you-for-applying`
Date checked: 2026-09-07
Browser/source: Rendered live page, View Page Source, live CSS (`style.css?ver=7.1`, `default-media.css`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Full-screen viewport container (`min-h-screen`, `pt-[90px]`, flex centered) with light mint-to-blue gradient background (`linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`), centered content card, Montserrat 700 35px heading (`Thank you for applying to Dynamic Dreamz`), 16px/500 text (`#535353`), `.get-in-touch-wrap` with top border (`border-top: 1px solid rgba(0, 0, 0, .13); margin-top: 32px; padding-top: 32px; max-width: 552px;`), rounded pill border box (`border: 1px solid rgba(0, 0, 0, .12); border-radius: 20px; padding: 23px 0;`) containing HR contact phone (`+91 63520 11266`) and HR email (`hr@dynamicdreamz.com`) links with 33x32 icons, followed by red button (`back home`) with `margin-top: 32px;`. |
| 768x1024 (Tablet) | Verified responsive spacing (`pt-[70px]`), centered flex alignment, proper line-height and max-width (`max-w-[552px]`), and touch-friendly target padding. |
| 390x844 (Mobile) | Verified single-column stacked layout (`min-w-[268px]` on contact pill items, line break hidden on description paragraph via `.thankyou-content p br { display: none }`), responsive heading size (`28px`-`30px`), full-width text wrapping with container padding (16px), and readable typography across all screen sizes. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Document title (`Thank you - Dynamic Dreamz`), meta description (`Thank you - Dynamic Dreamz`), meta robots (`noindex, nofollow`), canonical URL (`https://www.dynamicdreamz.com/thank-you-for-applying/`), H1 heading (`Thank you for applying to Dynamic Dreamz`), paragraph copy (`We appreciate your interest and have received your job application. <br> We will get back to you via email or phone as soon as possible.`), get-in-touch wrapper with phone (`+91 63520 11266`) and email (`hr@dynamicdreamz.com`), and back home button link (`https://www.dynamicdreamz.com`). |
| Live `style.css?ver=7.1` | `.thankyou-sec` (`height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%); padding-top: 90px;`), `.thankyou-content` (`text-align: center;`), `.thankyou-content h2` / `.h2` (`font-size: 35px; font-weight: 700; line-height: 48.475px; letter-spacing: -.7px; color: #000;`), `.get-in-touch-wrap` (`max-width: 552px; margin: 32px auto 0; border-top: 1px solid rgba(0, 0, 0, .13); padding-top: 32px;`), `.page-template-thank-you .get-in-touch-wrap .btn-red` (`margin-top: 32px;`), `.thankyou-content ul` (`border: 1px solid rgba(0, 0, 0, .12); border-radius: 20px; padding: 23px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: center;`), `.thankyou-content ul li:not(:last-child)` (`margin-right: 38px;`), `.thankyou-content ul li a` (`font-family: Montserrat; font-size: 16px; font-weight: 700; line-height: 23.28px; color: #000;`). |
| Media queries | `@media (max-width: 991px)`: `.thankyou-sec { padding-top: 70px }`; `@media (max-width: 767px)`: `.thankyou-content p br { display: none }`, `.thankyou-content ul li { min-width: 268px }`, `.thankyou-content ul li:not(:last-child) { margin: 0 0 10px 0 }`; `@media (max-width: 320px)`: `.thankyou-content ul li { min-width: 250px }`, `.thankyou-content ul li a { font-size: 14px }`. |
| Assets | Phone icon (`/assets/thank-you/call-icon.svg`) and Mail icon (`/assets/thank-you/mail-icon.svg`) verified and reused canonically from existing local assets with 0 duplicates. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Thank You Hero Container | `.thankyou-sec` with gradient background, flex-centered content, H1 heading, description paragraph with responsive `<br>`, `.get-in-touch-wrap` container with top border, contact pill box (`ul`), and ButtonLink (`back home`) to `/`. | Reused/extended generalized `ThankYouPage` component in `src/components/sections/thank-you-page.tsx` with `buttonPlacement="below-contact"`, consuming typed data from `src/content/thank-you-for-applying.ts`. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial load | Full viewport height gradient section with centered card | Fully server-rendered with zero client JS | verified |
| Back Home button hover | Button background wipe effect on red button | Reused `ButtonLink` with standard project red/primary variant | verified |
| Contact links hover | Phone and email link text color transitions to red | `transition-colors hover:text-brand-red focus-visible:text-brand-red` | verified |
| Responsive | Header offset and font sizes scale smoothly across desktop, tablet, and mobile | Responsive Tailwind utility classes matching live media queries | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical has trailing slash | Slashless `/thank-you-for-applying` per repo URL policy | implemented |
| Live robots meta is `noindex, nofollow` | Preserved `robots: { index: false, follow: false }` matching live job application confirmation screen behavior | implemented |
| Live Back Home button points to `https://www.dynamicdreamz.com` | Localized to slashless homepage `/` using `ButtonLink` | implemented |
| Button placement relative to contact pill box | Placed after contact pill box inside `.get-in-touch-wrap` with `margin-top: 32px` to exactly match live `page-template-thank-you` structure | implemented |
| Title and description length budget | Title formatted as `Thank You For Applying \| Dynamic Dreamz` (39 chars, within 15-60 char budget); description expanded to 122 chars to satisfy strict 70-160 char length budget | implemented in metadata |
