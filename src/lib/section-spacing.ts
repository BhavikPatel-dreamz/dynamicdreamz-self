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
 *    top padding (pt-0 / max-[992px]:pt-0), maintaining a consistent 80px desktop / 50px mobile gap.
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
      ? "py-20 max-[992px]:py-15 max-[768px]:py-10"
      : "pt-20 pb-0 max-[992px]:pt-15 max-[992px]:pb-0 max-[768px]:pt-10 max-[768px]:pb-0";
  }

  // If the current section is white/transparent and follows another white/transparent section:
  // Drop redundant top padding so the combined gap is 80px, not 160px!
  if (!isFirst && (previousBg === "white" || previousBg === "transparent")) {
    return hasBottomPadding
      ? "pt-0 pb-20 max-[992px]:pt-0 max-[992px]:pb-15 max-[768px]:pt-0 max-[768px]:pb-10"
      : "py-0";
  }

  // White section following a colored section or as the first section
  return hasBottomPadding
    ? "py-20 max-[992px]:py-15 max-[768px]:py-10"
    : "pt-20 pb-0 max-[992px]:pt-15 max-[992px]:pb-0 max-[768px]:pt-10 max-[768px]:pb-0";
}

/**
 * Maps a CMS block object, blockType, or section component identifier to its background category.
 */
export function getBlockBackgroundCategory(
  blockOrType: unknown,
  variantOrTheme?: string,
): SectionBackground {
  if (!blockOrType) return "white";

  let normType = "";
  let normVariant = (variantOrTheme || "").toLowerCase();

  if (typeof blockOrType === "string") {
    normType = blockOrType.toLowerCase().replace(/^sections\./, "");
  } else if (typeof blockOrType === "object" && blockOrType !== null) {
    const obj = blockOrType as {
      blockType?: string;
      __component?: string;
      variant?: string;
      cardVariant?: string;
      theme?: string;
    };
    normType = (obj.blockType || obj.__component || "").toLowerCase().replace(/^sections\./, "");
    if (!normVariant) {
      normVariant = (obj.variant || obj.cardVariant || obj.theme || "").toLowerCase();
    }
  }

  // Specific block types with specialized variant checking:
  if (normType === "process-timeline") {
    if (normVariant === "white" || normVariant === "development-process") return "white";
    if (normVariant === "migration-grid") {
      const cardVar =
        typeof blockOrType === "object" && blockOrType !== null
          ? (blockOrType as { cardVariant?: string }).cardVariant
          : "";
      if (cardVar === "white") return "white";
      return "colored"; // default migration-grid cardVariant is pista (colored)
    }
    return "colored";
  }

  if (normType === "services-grid") {
    if (normVariant === "migration-services") return "white";
    if (normVariant === "theme-boxes") {
      const cardVar =
        typeof blockOrType === "object" && blockOrType !== null
          ? (blockOrType as { cardVariant?: string }).cardVariant
          : "";
      if (cardVar === "white" || cardVar === "transparent") return "white";
      return "colored";
    }
    if (
      normVariant === "stage-services" ||
      normVariant === "ai-services" ||
      normVariant === "industries-grid"
    ) {
      return "colored";
    }
    return "white";
  }

  if (normType === "proof-stats") {
    if (
      normVariant === "counters-bar" ||
      normVariant === "city-counters" ||
      normVariant === "white-label-counters"
    ) {
      return "white";
    }
    return "colored";
  }

  if (normType === "portfolio-showcase") {
    if (normVariant === "case-studies-slider" || normVariant === "case-studies-cards") {
      return "colored";
    }
    return "white";
  }

  if (normType === "brand-partners" || normType === "industry-brands") {
    if (normVariant === "integrations") return "colored";
    if (normVariant === "slider") return "colored"; // IndustryBrandsSection has bg-[#FBEED5]
    return "white";
  }

  if (normType === "ai-empowered-delivery" || normType === "seo-safe-migration") {
    // Outer section wrapper has no background color (transparent/white container),
    // inner card has the rounded dark/green box.
    return "white";
  }

  // Explicit colored variants / themes
  if (
    normVariant === "green" ||
    normVariant === "pista" ||
    normVariant === "yellow" ||
    normVariant === "warm" ||
    normVariant === "dark" ||
    normVariant === "sky-blue" ||
    normVariant === "tiers" ||
    normVariant === "hours" ||
    normVariant === "client-stories"
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
    case "architecture-patterns":
    case "faq-accordion":
    case "split-faq":
    case "home-faq":
    case "shopify-hours-comparison":
    case "hours-comparison":
    case "shopify-hours-tasks":
    case "hours-tasks":
    case "cta-banner":
    case "about-timeline":
    case "cro-barriers":
    case "tech-keywords":
    case "design-reasons":
    case "white-label-services":
    case "white-label-why":
    case "contact-offices":
    case "home-selected-work":
    case "industry-custom-dev":
      return "colored";

    // Known white / transparent blocks
    case "hero":
    case "agency-hero":
    case "service-hero":
    case "city-hero":
    case "service-hero-video":
    case "city-page-counter":
    case "white-label-counter":
    case "white-label-stats":
    case "evaluation-framework":
    case "industries-grid":
    case "industries-served":
    case "portfolio-showcase":
    case "mobile-app-work":
    case "our-work-projects":
    case "happy-clients":
    case "latest-insights":
    case "home-insights":
    case "features-grid":
    case "our-development-process":
    case "about-story":
    case "about-founders":
    case "life-gallery":
    case "life-culture-hiring":
    case "career-opportunities":
    case "career-apply":
    case "cro-assessment":
    case "text-box":
    case "contact-hero":
    case "contact-form":
    case "contact-details":
    case "form":
    case "form-block":
    case "home-commerce-solutions":
    case "home-shopify-plus-agency":
    default:
      return "white";
  }
}
