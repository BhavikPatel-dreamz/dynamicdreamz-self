# Visual Capture: Sitewide Typography, Font Weight, Colors, and Styling Parity

## Migration Intent
Audit and align all pages across the site with the live Dynamic Dreamz site (`https://www.dynamicdreamz.com/`) in terms of:
1. **Typography & Font Families**: Proper registration and loading of Neue Montreal font weights (Light 300, Regular 400, Medium 500, Bold 700) and Montserrat (Regular 400 through ExtraBold 800) to ensure authentic glyph rendering across all 145+ pages.
2. **Font Weights & Scale**: Parity with the live site's typography scale:
   - H1: 50px / 66px (or 60px depending on layout), weights 500 / 700, letter-spacing -1px / normal.
   - H2: 35px / 48.475px, weights 500 / 700, letter-spacing -0.7px.
   - H3: 20px / 28.8px, weights 500 / 700.
   - H4 / .h4: 18px / 25.92px, weight 700.
   - H5: 16px / 22.36px, weight 700.
   - H6: 14px / 19.6px, weight 700.
   - Body / Paragraph: 18px / 34.2px (or 16px / 28px in compact sections), color `#535353`, weights 400 / 500.
   - Eyebrows: 14px uppercase, font-weight 600, with 30px `#ad5151` line.
   - Buttons: 16px uppercase, font-weight 700, border-radius 30px, px-6 py-[15px].
3. **Colors**: Exact match with live `:root` color tokens:
   - `--theme-black`: `#282828` (Ink / main headings)
   - `--grey`: `#535353` (Muted / body text)
   - `--dark-green`: `#192019` (Dark green background surfaces and card borders)
   - `--theme-red` / `--txt-red`: `#AD5151` (Brand red accents, eyebrows, buttons)
   - `--bg-theme-color` / `--cream`: `#F7F4E9` / `#FBF7ED` (Cream backgrounds)
   - `--pista`: `#EFF4EF` (Pale green/pista card backgrounds)
4. **Clean DOM & Semantic Markup**:
   - Elimination of WordPress hidden DOM debt (`.hide-logo` / suppressed badges).
   - Unique heading IDs and valid accessibility attributes across sections.

---

## Live Site Inspection Evidence
- **Stylesheet Sources Inspected**:
  - `docs/visual-captures/source/dynamicdreamz-style.css`
  - `docs/visual-captures/source/live-style.css`
  - Case study, theme customization, and service single CSS bundles
- **Key Variables Discovered**:
  ```css
  :root {
    --theme-black: #282828;
    --theme-red: #AD5151;
    --grey: #535353;
    --light-grey: #4F4F4F;
    --dark-grey: #121212;
    --white: #ffffff;
    --black: #000;
    --txt-red: #AD5151;
    --font-montserrat: "Montserrat", sans-serif;
    --link-color: #252C15;
    --bg-theme-color: #fbf7ed;
    --dark-green: #192019;
    --pista: #eff4ef;
    --darkcream: #f7f4e9;
  }
  ```

---

## Discrepancies Identified & Resolved

### 1. Font Family & Weight Registration (`src/app/(frontend)/layout.tsx`)
- **Issue**: Previously, `neueMontreal` in `layout.tsx` was configured with only a single weight (`weight: "500"`), even though `src/app/(frontend)/fonts/` contained all 4 WOFF2 files:
  - `neue--montreal-light-webfont.woff2` (300)
  - `neue--montreal-regular-webfont.woff2` (400)
  - `neue--montreal-medium-webfont.woff2` (500)
  - `neue--montreal-bold-webfont.woff2` (700)
  Consequently, elements specifying `font-normal` (400), `font-semibold` (600), or `font-bold` (700) with Neue Montreal rendered synthesized pseudo-bold/light curves or fell back to system fonts.
- **Resolution**:
  - Updated `neueMontreal` in `layout.tsx` to declare all 4 weights (`300`, `400`, `500`, `700`) as a multi-weight font family with variable `--font-neue-montreal-local`.
  - Maintained `neueMontrealMedium` for `--font-neue-montreal-medium-local`.
  - Added font variables to `<html className="...">` so Tailwind resolves them universally across all pages.

### 2. Global Typography & Base Heading Styles (`src/app/(frontend)/globals.css`)
- **Issue**:
  - `--color-dark-green` was set to `#171e16` instead of the live `:root` value `#192019`.
  - `--font-heading` was missing from `@theme inline`.
  - Headings `h4`, `h5`, and `h6` lacked standardized base typography rules matching the live stylesheet.
- **Resolution**:
  - Updated `--color-dark-green: #192019;`.
  - Added `--font-heading: var(--font-neue-montreal-local), var(--font-neue-montreal-medium-local), Arial, sans-serif;`.
  - Mapped font variables in `@theme inline` to the multi-weight family.
  - Added base heading rules in `@layer base`:
    ```css
    h4, .h4 {
      color: var(--color-ink);
      font-size: 18px;
      font-weight: 700;
      line-height: 25.92px;
    }
    h5 {
      color: var(--color-ink);
      font-size: 16px;
      font-weight: 700;
      line-height: 22.36px;
    }
    h6 {
      color: var(--color-ink);
      font-size: 14px;
      font-weight: 700;
      line-height: 19.6px;
    }
    ```

### 3. Dark Green `#192019` Color Parity Across Components
- **Issue**: 4 components contained `#171e16` instead of `#192019`:
  - `src/components/sections/shopify-certified-developers/certified-agency-support-section.tsx`
  - `src/components/sections/why-choose-shopify-migration-section.tsx`
  - `src/components/sections/white-label/white-label-services-section.tsx`
  - `src/components/sections/home/white-label-partner-section.tsx` (border `#171e161a`)
- **Resolution**: Updated all 4 files to use `#192019` / `#1920191a`. Full codebase search confirms 0 remaining `#171e16` occurrences.

### 4. Hero Section Heading Typography
- **Issue**:
  - `src/components/sections/city-page-hero-section.tsx` had `font-heading font-normal`.
  - `src/components/sections/career/career-hero-section.tsx` had `font-heading font-normal`.
- **Resolution**:
  - Updated both to `font-montreal-medium font-medium`, matching the live site's 50px/60px Neue Montreal Medium H1 styling.

### 5. Elimination of WordPress Hidden DOM Debt (`src/content/career.ts`, `src/components/sections/career/career-hero-section.tsx`)
- **Issue**: `careerHero.badges` contained a Shopify Platinum Partner badge suppressed via `idx === 0 && "hidden"`, which was legacy WordPress template debt (`.hide-logo`).
- **Resolution**:
  - Removed the suppressed badge from `careerHero.badges` in `src/content/career.ts`.
  - Removed `idx === 0 && "hidden"` logic from `career-hero-section.tsx`, ensuring clean, lean DOM output.

### 6. Testimonials Section Heading ID Parity (`src/components/sections/home/testimonials-section.tsx`)
- **Issue**: Section heading inadvertently inherited `id="shopify-plus-agency-title"` from the previous section.
- **Resolution**: Changed to `id="testimonials-title"` and added `aria-labelledby="testimonials-title"` to the `<section>` element.

---

## Verification
- `npm run check:urls` -> PASSED
- `npm run check:component-content` -> PASSED (525 source files checked)
- `npm run check:case-studies` -> PASSED (58 case studies verified)
- `npm run check:blog-posts` -> PASSED (116 blog posts verified)
- `npm run check:asset-duplicates` -> PASSED (0 duplicate assets)
- `npm run lint` -> PASSED
- `npm run build` -> PASSED
