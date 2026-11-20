import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { LifeHeroSection } from "@/components/sections/life-dynamicdreamz/life-hero-section";
import { LifeHiringSection } from "@/components/sections/life-dynamicdreamz/life-hiring-section";
import { WorkCultureSection } from "@/components/sections/life-dynamicdreamz/work-culture-section";
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
        eyebrow={lifeFaqSection.eyebrow}
        items={lifeFaqSection.items}
      />
    </div>
  );
}
