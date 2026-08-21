import caseStudyDetailsJson from "@/content/case-study-details.json";
import type { CaseStudyDetail } from "@/types/case-study";

const SEO_LIMITS = {
  titleMin: 15,
  titleMax: 60,
  descriptionMin: 70,
  descriptionMax: 160,
} as const;

const localAssetPattern = /^\/assets\/[a-zA-Z0-9._/-]+$/;

function validateCaseStudyDetails(entries: CaseStudyDetail[]) {
  const slugs = new Set<string>();

  function validateImage(entry: CaseStudyDetail, label: string, image: CaseStudyDetail["hero"]["image"] | null) {
    if (!image) return;
    if (!localAssetPattern.test(image.src)) {
      throw new Error(`Case study ${entry.slug} must use a project-owned ${label} image.`);
    }
    if (image.width <= 0 || image.height <= 0) {
      throw new Error(`Case study ${entry.slug} has invalid ${label} image dimensions.`);
    }
    if (!image.alt.trim()) {
      throw new Error(`Case study ${entry.slug} must have intentional ${label} image alt text.`);
    }
  }

  for (const entry of entries) {
    if (slugs.has(entry.slug)) {
      throw new Error(`Duplicate case-study slug: ${entry.slug}`);
    }
    slugs.add(entry.slug);

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug)) {
      throw new Error(`Invalid case-study slug: ${entry.slug}`);
    }
    validateImage(entry, "hero", entry.hero.image);
    entry.sections.forEach((section, sectionIndex) => {
      validateImage(entry, `section ${sectionIndex + 1}`, section.image);
      section.cards.forEach((card, cardIndex) => {
        validateImage(entry, `section ${sectionIndex + 1} card ${cardIndex + 1}`, card.image);
      });
    });
    validateImage(entry, "wireframes", entry.wireframes?.image ?? null);
    entry.typefaces.forEach((typeface, index) => validateImage(entry, `typeface ${index + 1}`, typeface.image));
    validateImage(entry, "design", entry.design?.image ?? null);
    if (entry.design?.backgroundImage && !localAssetPattern.test(entry.design.backgroundImage)) {
      throw new Error(`Case study ${entry.slug} must use a project-owned design background image.`);
    }
    entry.colors.forEach((color, index) => {
      if (!/^#[0-9a-f]{6}$/i.test(color.value)) {
        throw new Error(`Case study ${entry.slug} has an invalid color value at position ${index + 1}.`);
      }
    });
    if (entry.seo.title.length < SEO_LIMITS.titleMin || entry.seo.title.length > SEO_LIMITS.titleMax) {
      throw new Error(`Case study ${entry.slug} has an invalid SEO title length.`);
    }
    if (
      entry.seo.description.length < SEO_LIMITS.descriptionMin ||
      entry.seo.description.length > SEO_LIMITS.descriptionMax
    ) {
      throw new Error(`Case study ${entry.slug} has an invalid SEO description length.`);
    }
  }
}

const entries = caseStudyDetailsJson as CaseStudyDetail[];
validateCaseStudyDetails(entries);

export const caseStudyDetails = entries as readonly CaseStudyDetail[];

const caseStudiesBySlug = new Map(caseStudyDetails.map((entry) => [entry.slug, entry]));

export function getCaseStudyBySlug(slug: string) {
  return caseStudiesBySlug.get(slug);
}
