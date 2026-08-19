import { FaqSection } from "@/components/sections/faq-section";
import { LifeGallerySection } from "@/components/sections/life-dynamicdreamz/life-gallery-section";
import { LifeHeroSection } from "@/components/sections/life-dynamicdreamz/life-hero-section";
import { LifeHiringSection } from "@/components/sections/life-dynamicdreamz/life-hiring-section";
import { WorkCultureSection } from "@/components/sections/life-dynamicdreamz/work-culture-section";
import { lifeFaqSection } from "@/content/life-dynamicdreamz";

export function LifeDynamicDreamzPage() {
  return (
    <div className="font-sans [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans">
      <LifeHeroSection />
      <WorkCultureSection />
      <LifeHiringSection />
      <FaqSection
        className="pt-0 pb-20 max-[991px]:pb-[50px]"
        description={lifeFaqSection.description}
        headerClassName="mx-auto mb-16 max-w-[470px] text-center max-[1199px]:mb-[30px]"
        heading={lifeFaqSection.title}
        idPrefix="life-faq"
        items={lifeFaqSection.items}
        titleClassName="mb-6 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
      />
      <LifeGallerySection />
    </div>
  );
}
