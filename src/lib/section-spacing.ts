/**
 * Background-Aware Spacing Architecture
 *
 * Implements clean, production-ready section spacing based on background color transitions:
 *
 * 1. Sections with distinct background colors (e.g. green #EFF4EF, cream #FAFAF7, dark #192019, sky blue)
 *    act as visual container boxes and must maintain internal breathing room (py-20 / py-[60px]).
 *
 * 2. Consecutive sections sharing the same white/transparent background do not have a visual color boundary.
 *    To prevent double spacing (80px + 80px = 160px), the subsequent white section drops its redundant
 *    top padding (pt-0 / max-[991px]:pt-0), maintaining a consistent 80px desktop / 50px mobile gap.
 *
 * 3. Transitions between different backgrounds (White -> Green, Green -> White, Dark -> Light) maintain
 *    full container padding on both sides of the color boundary.
 */

export type SectionBackground = "white" | "transparent" | "colored";

/**
 * Returns the appropriate Tailwind padding classes for a section given its background
 * and the preceding section's background.
 */
export function getSectionSpacingClasses({
  currentBg,
  previousBg,
  isFirst = false,
  hasBottomPadding = true,
}: {
  currentBg: SectionBackground;
  previousBg?: SectionBackground;
  isFirst?: boolean;
  hasBottomPadding?: boolean;
}): string {
  // If the current section is a colored container, it always retains its internal padding
  if (currentBg === "colored") {
    return hasBottomPadding
      ? "py-20 max-[991px]:py-[50px]"
      : "pt-20 pb-0 max-[991px]:pt-[50px] max-[991px]:pb-0";
  }

  // If the current section is white/transparent and follows another white/transparent section:
  // Drop redundant top padding so the combined gap is 80px, not 160px!
  if (!isFirst && (previousBg === "white" || previousBg === "transparent")) {
    return hasBottomPadding
      ? "pt-0 pb-20 max-[991px]:pt-0 max-[991px]:pb-[50px]"
      : "py-0";
  }

  // White section following a colored section or as the first section
  return hasBottomPadding
    ? "py-20 max-[991px]:py-[50px]"
    : "pt-20 pb-0 max-[991px]:pt-[50px] max-[991px]:pb-0";
}

/**
 * Maps a CMS blockType or section component identifier to its background category.
 */
export function getBlockBackgroundCategory(
  blockType: string,
  variantOrTheme?: string,
): SectionBackground {
  const normType = blockType.toLowerCase().replace(/^sections\./, "");
  const normVariant = variantOrTheme?.toLowerCase();

  // Explicit colored variants / themes
  if (
    normVariant === "green" ||
    normVariant === "pista" ||
    normVariant === "yellow" ||
    normVariant === "warm" ||
    normVariant === "light" ||
    normVariant === "dark" ||
    normVariant === "sky-blue"
  ) {
    return "colored";
  }

  if (normVariant === "white" || normVariant === "transparent") {
    return "white";
  }

  // Known colored blocks by blockType
  switch (normType) {
    case "shopify-plus-agency-overview":
    case "selected-work-marquee":
    case "testimonials-carousel":
    case "integrations-partners":
    case "shopify-team-boxes":
    case "shopify-dev-team":
    case "why-choose-shopify-migration":
    case "pricing-models":
    case "pricing-table":
    case "shopify-themes-grid":
    case "shopify-stage-services":
    case "case-study-cards":
    case "case-studies-block":
    case "services-case-studies":
    case "how-agencies-use":
    case "technologies-work-with":
    case "technologies-grid":
    case "recent-architecture-patterns":
    case "faq-accordion":
    case "split-faq":
    case "home-faq":
    case "shopify-hours-comparison":
    case "shopify-hours-tasks":
    case "cta-banner":
      return "colored";

    // Known white / transparent blocks
    case "hero":
    case "agency-hero":
    case "service-hero":
    case "city-hero":
    case "service-hero-video":
    case "proof-counters":
    case "city-page-counter":
    case "white-label-counter":
    case "evaluation-framework":
    case "seo-safe-migration":
    case "industries-grid":
    case "industries-served":
    case "portfolio-showcase":
    case "happy-clients":
    case "latest-insights":
    case "features-grid":
    case "process-timeline":
    case "brand-partners":
    case "industry-brands":
    case "our-development-process":
    default:
      return "white";
  }
}
