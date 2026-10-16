import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { LifeGallerySection } from "@/components/blocks/CultureBentoGalleryBlock";
import { LifeHeroSection } from "@/components/blocks/MissionVisionValuesBlock";
import { LifeHiringSection } from "@/components/blocks/MissionVisionValuesBlock";
import { WorkCultureSection } from "@/components/blocks/MissionVisionValuesBlock";
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
