import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { homeFaqs, homeSectionCopy } from "@/content/home";

export function HomeFaqSection() {
  return (
    <SplitFaqSection
      description={homeSectionCopy.homeFaqDescription}
      heading={homeSectionCopy.homeFaqTitle}
      idPrefix="home-faq"
      items={homeFaqs}
      lazyAccordion
    />
  );
}
