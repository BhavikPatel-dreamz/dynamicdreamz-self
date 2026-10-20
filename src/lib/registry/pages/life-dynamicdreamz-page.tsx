import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { LifeGallerySection } from "@/components/blocks/CultureBentoGalleryBlock";
import { LifeHeroSection } from "@/components/blocks/LifeHeroBlock";
import { LifeHiringSection } from "@/components/blocks/LifeHiringBlock";
import { WorkCultureSection } from "@/components/blocks/WorkCultureBlock";
import { lifeFaqSection } from "@/content/life-dynamicdreamz";

export function LifeDynamicDreamzPage() {
  return (
    <div>
      <LifeHeroSection />
      <WorkCultureSection />
      <LifeHiringSection />
      <SplitFaqSection
        description={lifeFaqSection.description}
        heading={lifeFaqSection.title}
        idPrefix="life-faq"
        items={lifeFaqSection.items}
      />
      <LifeGallerySection />
    </div>
  );
}
