# IndustryCustomDevelopmentSection - Visual Parity Fix

## Task
Fix styling of `IndustryCustomDevelopmentSection` component to match live site.

## Live Reference
- **Live URL**: `https://www.dynamicdreamz.com/industries/health-nutrition/` (section 6)
- **Live URL**: `https://www.dynamicdreamz.com/industries/sports-outdoors/` (section 5)
- **Date checked**: 2026-10-01
- **CSS Source**: `https://www.dynamicdreamz.com/wp-content/themes/dynamicdreamz/assets/css/flexible-css/industry_custom_development.css` + `style.css` (global variables and base styles)

## Live CSS Analysis

### CSS Variables (from style.css)
```css
:root {
  --theme-red: #ad5151;        /* Eyebrow accent line */
  --dark-green: #192019;       /* Section background */
  --theme-black: #282828;
  --grey: #535353;
  --white: #ffffff;
  --font-montserrat: "Montserrat", sans-serif;
  --montreal-medium: "neue_montrealmedium", sans-serif;
}
```

### Section Styles (from industry_custom_development.css)
```css
.industry-custom-development {
    background-color: var(--dark-green);  /* #192019 */
}
.industry-custom-development .wrapper {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}
.industry-custom-development .title-block * {
    color: #fff;
}
.industry-custom-development .industry-list li {
    color: #fff;
    padding: 16px 0;
    display: flex;
}
.industry-custom-development .industry-list li {
    border-top: 1px solid rgba(255, 255, 255, .16);
}
.industry-custom-development .industry-list li:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, .16);
}
.industry-custom-development .list-wrapper {
    margin-top: 32px;
}
```

### Global Section Padding (from style.css)
```css
section { padding: 80px 0; }  /* 80px top/bottom */
```

### Eyebrow Styles (from style.css)
```css
.eyebrow {
    display: inline-flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    padding-left: 40px;
}
.eyebrow span {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
}
.eyebrow:before {
    content: '';
    width: 30px;
    height: 2px;
    display: inline-block;
    background-color: var(--theme-red);  /* #ad5151 */
    position: absolute;
    left: 0;
    top: 7px;
}
```

### Heading Styles (h2 from style.css)
```css
.h2, h2 {
    color: var(--theme-black);
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    font-family: var(--montreal-medium);
    letter-spacing: 0;
}
```
*Note: In section, `.title-block * { color: #fff; }` overrides to white.*

### Paragraph Styles (from style.css)
```css
body, p {
    color: var(--grey);
    font-size: 14px;
    line-height: 24px;
    font-style: normal;
    font-weight: 400;
    font-family: var(--font-montserrat);
}
```
*Note: In section, `.title-block * { color: #fff; }` overrides to white.*

## Changes Made

### Before (Incorrect)
- Section: `py-20 max-[992px]:py-[50px]` (reduced padding on tablet)
- Eyebrow: `text-[13px] font-bold uppercase tracking-[1.5px] text-white` (no red line, wrong font weight/size)
- H2: `font-sans font-bold text-[35px] leading-[48px] tracking-[-0.7px] text-white` (wrong font family, weight, line-height, tracking)
- Paragraph: `font-sans text-base leading-[30.4px] text-white/90` (wrong font size, line-height, opacity)
- List items: `text-base leading-[28px]` (wrong font size, line-height)

### After (Fixed - Matches Live)
- Section: `py-20` (80px top/bottom, no responsive reduction)
- Eyebrow: Red accent line (`bg-[#AD5151]`), `text-sm font-semibold uppercase tracking-normal text-white` (14px, weight 600, Montserrat)
- H2: `font-display font-medium text-[35px] leading-[1.4] tracking-normal text-white` (Montreal Medium, weight 500, 35px, line-height 1.4)
- Paragraph: `font-sans text-sm leading-6 text-white` (Montserrat, 14px, line-height 24px)
- List items: `text-sm leading-6` (14px, line-height 24px)

## Verification

### Local Rendered HTML (health-nutrition page)
```html
<section class="industry-custom-development bg-[#192019] py-20">
  <div class="container ...">
    <div class="wrapper mx-auto max-w-[900px]" data-aos="fade-up">
      <div class="title-block">
        <div class="eyebrow mb-6 relative pl-10 font-sans">
          <span class="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[2px] bg-[#AD5151]" aria-hidden="true"></span>
          <span class="text-sm font-semibold uppercase tracking-normal text-white">Custom Development</span>
        </div>
        <h2 class="mb-4 font-display font-medium text-[35px] leading-[1.4] tracking-normal text-white max-[992px]:text-[30px] max-[992px]:leading-[1.4] max-[767px]:text-2xl max-[767px]:leading-[1.4]">Custom Health Commerce where Standard Apps Stop</h2>
        <p class="font-sans text-sm leading-6 text-white max-[767px]:text-sm max-[767px]:leading-6">We can build product-selection logic...</p>
      </div>
      <div class="list-wrapper mt-8">
        <ul class="industry-list" role="list">
          <li class="industry-list__item flex border-t border-white/16 py-4 font-sans text-sm leading-6 text-white last:border-b last:border-white/16" data-aos="fade-up">
            <span>Custom ecommerce functionality when standard platform features or apps are not enough.</span>
          </li>
          ...
        </ul>
      </div>
    </div>
  </div>
</section>
```

### Checks Passed
- ✅ `npm run check:component-content` - Content boundary compliance
- ✅ `npm run check:urls` - No trailing slash URLs
- ✅ `npm run check:asset-duplicates` - Zero duplicate assets
- ✅ `npm run lint` - All linting checks pass
- ✅ TypeScript compilation successful

### Pages Using This Component
1. `/health-nutrition` - Section 6: "Custom Health Commerce"
2. `/sports-outdoors` - Section 5: "Custom Development" (note: live site has copy bug with health-nutrition heading)

### Responsive Behavior
- Desktop (≥992px): 35px heading, 30px on tablet (992px), 2xl on mobile (767px)
- All text uses fluid responsive scaling matching live site breakpoints
- Container max-widths match live site: 540px/720px/960px/1180px/1360px

### Known Differences (Preserved from Live)
- Sports-outdoors page uses "Custom Health Commerce where Standard Apps Stop" heading (copy bug on live site) - tracked in `docs/page-content-improvements.md` as `suggested`
- Live site uses global `section{padding:80px 0}`; we replicate with `py-20` on component
- No check icons on list items (live site doesn't have them either - visual capture note was inaccurate)

## Remaining Work
- Visual parity verification via screenshot comparison at 1440px, 768px, 390px viewports
- Animation/interaction state verification (AOS fade-up)