import { SplitFaqSection } from "@/components/sections/split-faq-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { homeFaqs, homeSectionCopy } from "@/content/home";

export type HomeFaqSectionProps = {
  eyebrow?: string;
  heading?: string | readonly string[];
  description?: string | readonly string[];
  idPrefix?: string;
  sectionId?: string;
  items?: readonly FaqAccordionItem[];
  iconVariant?: "default" | "circle-cross";
  animateOnReveal?: boolean;
  lazyAccordion?: boolean;
};

export function HomeFaqSection({
  eyebrow,
  heading = homeSectionCopy.homeFaqTitle,
  description = homeSectionCopy.homeFaqDescription,
  idPrefix = "home-faq",
  sectionId,
  items,
  iconVariant,
  animateOnReveal,
  lazyAccordion = true,
}: HomeFaqSectionProps = {}) {
  const activeItems = items && items.length > 0 ? items : homeFaqs;

  return (
    <SplitFaqSection
      animateOnReveal={animateOnReveal}
      description={description}
      eyebrow={eyebrow}
      heading={heading}
      iconVariant={iconVariant}
      idPrefix={idPrefix}
      items={activeItems}
      lazyAccordion={lazyAccordion}
      sectionId={sectionId}
    />
  );
}
