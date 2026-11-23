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
 * Detects whether a CSS class string, style value, or color represents a colored background
 * vs a white/transparent background.
 */
export function detectBackgroundFromClass(classOrColor?: string | null): SectionBackground {
  if (!classOrColor) return "white";

  const str = classOrColor.toLowerCase().trim();

  // Explicit white / transparent checks
  if (
    str === "white" ||
    str === "transparent" ||
    str === "#fff" ||
    str === "#ffffff" ||
    str.includes("bg-white") ||
    str.includes("bg-transparent")
  ) {
    return "white";
  }

  // Matches colored hex codes in Tailwind classes like bg-[#fafaf7], bg-[#eff4ef], bg-[#192019]
  // (excluding white #fff / #ffffff)
  if (/bg-\[#(?!fff\b|ffffff\b)[0-9a-fA-F]+\]/.test(str)) {
    return "colored";
  }

  // Matches colored linear/radial gradients or rgba overlays
  if (
    str.includes("bg-[linear-gradient") ||
    str.includes("bg-[radial-gradient") ||
    str.includes("bg-linear-to") ||
    str.includes("bg-gradient") ||
    str.includes("bg-[rgba")
  ) {
    return "colored";
  }

  // Matches named colored utility classes
  if (
    str.includes("bg-brand-red") ||
    str.includes("bg-dark-green") ||
    str.includes("bg-black") ||
    str.includes("bg-green")
  ) {
    return "colored";
  }

  // Matches semantic color variant / theme keywords
  if (
    str.includes("colored") ||
    str.includes("dark") ||
    str.includes("cream") ||
    str.includes("pista") ||
    str.includes("green") ||
    str.includes("yellow") ||
    str.includes("warm") ||
    str.includes("sky-blue") ||
    str.includes("tiers") ||
    str.includes("hours") ||
    str.includes("client-stories")
  ) {
    return "colored";
  }

  return "white";
}

/**
 * Inherent CSS background classes for known sections when no explicit className / props are provided.
 * This anchors detection in actual CSS classes rather than arbitrary string switches.
 */
const INHERENT_SECTION_BACKGROUND_CLASSES: Record<string, string> = {
  // Sections whose default visual container has a colored background:
  "split-faq": "bg-[#fafaf7]",
  "faq-accordion": "bg-[#fafaf7]",
  "home-faq": "bg-[#fafaf7]",
  "pricing-table": "bg-[#edf2ee]",
  "pricing-models": "bg-[#edf2ee]",
  "shopify-dev-team": "bg-[#eff4ef]",
  "shopify-team-boxes": "bg-[#eff4ef]",
  "testimonials-carousel": "bg-[#eff4ef]",
  "shopify-plus-agency-overview": "bg-[#eff4ef]",
  "why-choose-shopify-migration": "bg-[#eff4ef]",
  "services-case-studies": "bg-[#eff4ef]",
  "case-study-cards": "bg-[#eff4ef]",
  "case-studies-block": "bg-[#eff4ef]",
  "shopify-stage-services": "bg-[#eff4ef]",
  "shopify-themes-grid": "bg-[#eff4ef]",
  "integrations-partners": "bg-[#fafaf7]",
  "recent-architecture-patterns": "bg-[#fafaf7]",
  "architecture-patterns": "bg-[#fafaf7]",
  "tech-keywords": "bg-[#fafaf7]",
  "design-reasons": "bg-[#fafaf7]",
  "text-box": "bg-[#eff4ef]",
  "selected-work-marquee": "bg-dark-green",
  "white-label-services": "bg-[#192019]",
  "industry-custom-dev": "bg-[#192019]",
  "contact-offices": "bg-[#fafaf7]",
  "about-timeline": "bg-[#fbf7ed]",
  "cro-barriers": "bg-[rgba(40,40,40,0.03)]",
  "shopify-hours-comparison": "bg-[#EFF4EF]",
  "hours-comparison": "bg-[#EFF4EF]",
  "shopify-hours-tasks": "bg-[#EFF4EF]",
  "hours-tasks": "bg-[#EFF4EF]",
  "cta-banner": "bg-[#192019]",
};

/**
 * Maps a CMS block object, blockType, className, or section component identifier to its background category.
 * Dynamically detects background from applied styles, classes, and properties before falling back.
 */
export function getBlockBackgroundCategory(
  blockOrType: unknown,
  variantOrTheme?: string,
): SectionBackground {
  if (!blockOrType) return "white";

  // 1. Direct class name string or color string
  if (typeof blockOrType === "string") {
    // If it looks like a class string containing "bg-" or hex
    if (blockOrType.includes("bg-") || blockOrType.startsWith("#")) {
      return detectBackgroundFromClass(blockOrType);
    }

    const norm = blockOrType.toLowerCase().replace(/^sections\./, "");

    // If variantOrTheme passed
    if (variantOrTheme) {
      const fromVariant = detectBackgroundFromClass(variantOrTheme);
      if (fromVariant === "colored") return "colored";
      if (variantOrTheme.toLowerCase() === "white" || variantOrTheme.toLowerCase() === "transparent") {
        return "white";
      }
    }

    // Check inherent background class for the block type
    if (INHERENT_SECTION_BACKGROUND_CLASSES[norm]) {
      return detectBackgroundFromClass(INHERENT_SECTION_BACKGROUND_CLASSES[norm]);
    }

    return "white";
  }

  // 2. Block object inspection
  if (typeof blockOrType === "object" && blockOrType !== null) {
    const obj = blockOrType as {
      blockType?: string;
      __component?: string;
      className?: string;
      classes?: string;
      backgroundColor?: string;
      bg?: string;
      variant?: string;
      cardVariant?: string;
      theme?: string;
      isBgTransparent?: boolean;
      style?: { backgroundColor?: string; background?: string };
    };

    // Explicit transparent / white toggle flag
    if (obj.isBgTransparent === true) {
      return "white";
    }

    // Explicit background color property
    if (obj.backgroundColor) {
      const fromBgColor = detectBackgroundFromClass(obj.backgroundColor);
      if (fromBgColor === "colored") return "colored";
      if (obj.backgroundColor.toLowerCase() === "white" || obj.backgroundColor.toLowerCase() === "transparent") {
        return "white";
      }
    }

    // Explicit className or classes property
    const classProp = obj.className || obj.classes;
    if (classProp) {
      const fromClass = detectBackgroundFromClass(classProp);
      if (fromClass === "colored") return "colored";
      if (classProp.includes("bg-white") || classProp.includes("bg-transparent")) {
        return "white";
      }
    }

    // Explicit bg prop
    if (obj.bg) {
      const fromBg = detectBackgroundFromClass(obj.bg);
      if (fromBg === "colored") return "colored";
    }

    // Inline style backgroundColor
    if (obj.style?.backgroundColor || obj.style?.background) {
      const fromStyle = detectBackgroundFromClass(obj.style.backgroundColor || obj.style.background);
      if (fromStyle === "colored") return "colored";
    }

    // Variant or theme
    const variantProp = variantOrTheme || obj.variant || obj.cardVariant || obj.theme;
    if (variantProp) {
      const fromVariant = detectBackgroundFromClass(variantProp);
      if (fromVariant === "colored") return "colored";
      if (variantProp.toLowerCase() === "white" || variantProp.toLowerCase() === "transparent") {
        return "white";
      }
    }

    // Fall back to inherent component class
    const normType = (obj.blockType || obj.__component || "").toLowerCase().replace(/^sections\./, "");
    if (INHERENT_SECTION_BACKGROUND_CLASSES[normType]) {
      return detectBackgroundFromClass(INHERENT_SECTION_BACKGROUND_CLASSES[normType]);
    }
  }

  return "white";
}
