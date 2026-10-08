# Visual Capture: Global Layout Primitives (Header, Footer, Container, ButtonLink, Section Headings)

## Migration Intent
Act as the Visual Designer Agent to audit and align all global layout primitives across the project with the live Dynamic Dreamz site (`https://www.dynamicdreamz.com/`):
1. **Header & Responsive Navigation** (`SiteHeader`, `DesktopNavigation`, `MobileNavigation`, `HeaderScrollBehavior`)
2. **Footer** (`SiteFooter`)
3. **Container** (`Container`)
4. **ButtonLink** (`ButtonLink`, `Button`)
5. **Section Headings** (`SectionHeading`, `SplitSectionHeading`, `Eyebrow`, `SectionDescription`)

---

## Live Sources & Computed Styles Inspected
- **Stylesheets**:
  - `docs/visual-captures/source/header.css`
  - `docs/visual-captures/source/footer.css`
  - `docs/visual-captures/source/style.css`
  - `docs/visual-captures/source/default-media.css`
  - `docs/visual-captures/source/dynamicdreamz-default-media.css`
  - `docs/visual-captures/source/privacy-policy-header.css`
  - `docs/visual-captures/source/privacy-policy-footer.css`
  - `docs/visual-captures/source/privacy-policy-style.css`
- **Rendered Reference Captures & DOM**:
  - `docs/visual-captures/header.md`
  - `docs/visual-captures/site-footer.md`
  - `docs/visual-captures/sitewide-typography-styling-parity.md`
  - `docs/visual-captures/cross-platform-app-development.md`
  - `docs/visual-captures/source/case-studies-p1.html`
  - `docs/visual-captures/source/contact-us-live-page.html`
  - `docs/visual-captures/source/shopify-development-agency/live-page.html`

---

## Audit Findings & Alignment Specifications

### 1. Container (`src/components/ui/container.tsx`)
- **Live Specification**:
  ```css
  .container {
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
      margin-right: auto;
      margin-left: auto;
  }
  @media (max-width: 767px) {
      .container {
          padding-right: 16px;
          padding-left: 16px;
      }
  }
  @media only screen and (min-width: 576px) { .container { max-width: 540px; } }
  @media only screen and (min-width: 768px) { .container { max-width: 720px; } }
  @media only screen and (min-width: 992px) { .container { max-width: 960px; } }
  @media only screen and (min-width: 1200px) { .container { max-width: 1180px; } }
  @media only screen and (min-width: 1400px) { .container { max-width: 1360px; } }
  ```
- **Audit Result**:
  - Max-widths: Exactly matched at 540px, 720px, 960px, 1180px, 1360px.
  - Paddings: Mobile `< 768px` is 16px (`px-4`); desktop `>= 768px` is 20px (`md:px-5`).
  - Improvement: Support polymorphic `as?: ElementType` prop (defaulting to `"div"`) so sections, navs, and headers can semantically render a Container without breaking backward compatibility.

### 2. ButtonLink (`src/components/ui/button-link.tsx`)
- **Live Specification**:
  ```css
  .btn, input[type=submit] {
      color: var(--light-grey); /* #4F4F4F */
      font-family: var(--font-montserrat);
      font-size: 16px;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      border-radius: 30px;
      padding: 15px 24px;
      position: relative;
      z-index: 1;
      display: inline-block;
      overflow: hidden;
      transition: all .6s;
      text-align: center;
  }
  @media (max-width: 991px) {
      .btn {
          font-size: 14px;
          padding: 12px 24px;
      }
  }
  ```
  - Variant sliding fill behavior:
    - Primary (`.btn.btn-red`): Red fill translated `translateX(0)`, on hover slides out to `translateX(100%)` (right), revealing outline border and dark text.
    - Outline (`.btn`): Empty fill translated `-translateX(100%)` (left), on hover slides in to `translateX(0)`.
    - Dark (`.btn.btn-black`): `#121212` fill translates out on hover.
    - Light (`.btn.btn-white`): White fill translates out on hover, revealing border and text against dark surfaces.
- **Audit Result**:
  - Update responsive breakpoint from `max-[992px]` to `max-[991px]` (`text-[14px] px-6 py-3`) matching `default-media.css` line 27.
  - Added `focus-visible` parity on fill and border for complete keyboard accessibility matching hover animation.
  - Add disabled attributes (`disabled:pointer-events-none disabled:opacity-60`).

### 3. Section Headings (`src/components/ui/section-heading.tsx`, `split-section-heading.tsx`, `eyebrow.tsx`, `section-description.tsx`)
- **Live Specification**:
  - H2 / `.h2`:
    - Desktop: 35px font-size, 48.475px line-height, font-medium (`Neue Montreal Medium`), normal tracking (or -0.7px tracking for Montserrat).
    - Tablet (`<= 991px`): 30px font-size, 40px line-height (`leading-10`).
    - Mobile (`<= 767px`): 24px font-size, 33.24px line-height, -0.48px letter-spacing.
  - Base `.section_title_with_eyebrow`:
    - Layout: `flex justify-between items-end` (desktop), `flex-col` (`<= 991px`).
    - Title column width: `44%` (desktop), `100%` (`<= 991px`).
    - Text column width: `48.3%` (desktop), `50%` (`<= 1199px`), `100%` (`<= 991px`).
  - `.eyebrow`:
    - Display: `inline-flex` (span) or `flex` (p), 14px / 1.2 font-semibold uppercase, `#ad5151` line.
    - Line width: 30px desktop, 25px mobile (`<= 767px`) with 10px margin-right matching `default-media.css` line 86.
  - Section description paragraph:
    - 16px / 28px font-medium text `#535353`, scaling to 14px / 24px (`<= 1199px`).
- **Audit Result**:
  - `section-heading.tsx`: Updated line-height from loose `leading-[1.4]` (49px) to exact `leading-[48.475px]`, and added tablet `max-[991px]:text-[30px] max-[991px]:leading-10`.
  - `split-section-heading.tsx`: Replaced scattered `max-[992px]` breakpoint classes with canonical `max-[991px]`, aligned mobile line-height to `leading-[33.24px]`.
  - `eyebrow.tsx`: Updated responsive line width on mobile from `15px` to exact live `25px` (`max-[767px]:before:w-[25px]`) with `max-[767px]:before:mr-2.5` (10px) matching `default-media.css`.

### 4. Header & Navigation (`src/components/layout/site-header.tsx`, `desktop-navigation.tsx`, `mobile-navigation.tsx`)
- **Live Specification**:
  - Fixed, 90px height, `rgba(255,255,255,0.60)`, 25px backdrop blur.
  - Breakpoints:
    - Desktop navigation active: `>= 1200px` (`min-[1200px]:block`).
    - Mobile drawer trigger active: `<= 1199px` (`max-[1199px]:block`).
    - Hamburger button: 30px x 30px with 12px right margin on tablet, `margin-right: 0` on mobile `<= 767px`.
  - CTA Button (`.header-btn a.btn`):
    - Desktop (`> 1399px`): `px-6 py-[15px] text-base`.
    - Desktop compact (`1200px - 1399px`): `px-5 py-3.25 text-[14px]`.
    - Tablet / mobile drawer (`<= 991px`): `px-[14px] py-[9px] text-[13px]`.
    - Small mobile (`<= 379px`): `px-[10px] py-[8px] text-[10px]`.
- **Audit Result**:
  - Removed temporary `---site-header-btn` class name, wrapped button with proper `.header-btn` container.
  - Cleaned up the 1200px transition boundary (`max-[1199px]` across mobile navigation trigger and site-header padding/logo offsets) to eliminate 1px overlapping states.
  - Aligned hamburger toggle right margin to live rule: `mr-3 max-[767px]:mr-0`.
  - Aligned CTA button padding at `<= 991px` to exact `px-[14px] py-[9px] text-[13px]`.

### 5. Site Footer (`src/components/layout/site-footer.tsx`)
- **Live Specification**:
  - Background: `#F7F4E9` (`bg-cream`), text `#282828` (`text-ink`).
  - Desktop 5 columns: 172px, 200/238px, 200/235px, 259px, 220px at `>= 1200px`.
  - Tablet crossover: 3 columns across 2 rows at `992px - 1199px`.
  - Mobile accordion: Collapsed items with 18px vertical padding, 12px plus/minus icon, 200ms transition at `<= 991px`.
  - Proof badges: 6 cards in 1 row desktop, 2 columns on mobile/tablet.
  - Bottom row: Legal row, copyright, and policy links.
- **Audit Result**:
  - Replaced lingering `max-[992px]` classes with `max-[991px]` across mobile accordion, proof badges, and legal rows, ensuring clean non-overlapping crossover with `min-[992px]:max-[1199px]` tablet grid.

---

## Verification Plan
1. `npm run check:urls` -> Verify no URL policy regressions.
2. `npm run check:component-content` -> Ensure zero hardcoded visible strings in layout primitives.
3. `npm run check:asset-duplicates` -> Ensure 0 duplicate assets.
4. `npm run lint` -> Zero lint errors.
5. `npm run build` -> Clean Next.js App Router production build.
