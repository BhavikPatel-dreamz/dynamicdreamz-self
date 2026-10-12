import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { homeFaqs, homeSectionCopy } from "@/content/home";

export type HomeFaqSectionProps = {
  className?: string;
};

export function HomeFaqSection({ className }: HomeFaqSectionProps = {}) {
  return (
    <SplitFaqSection
      className={className}
      description={homeSectionCopy.homeFaqDescription}
      heading={homeSectionCopy.homeFaqTitle}
      idPrefix="home-faq"
      items={homeFaqs}
      lazyAccordion
    />
  );
}
