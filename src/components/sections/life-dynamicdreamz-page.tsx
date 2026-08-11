import { LifeFaqSection } from "@/components/sections/life-dynamicdreamz/life-faq-section";
import { LifeGallerySection } from "@/components/sections/life-dynamicdreamz/life-gallery-section";
import { LifeHeroSection } from "@/components/sections/life-dynamicdreamz/life-hero-section";
import { LifeHiringSection } from "@/components/sections/life-dynamicdreamz/life-hiring-section";
import { WorkCultureSection } from "@/components/sections/life-dynamicdreamz/work-culture-section";

export function LifeDynamicDreamzPage() {
  return (
    <div className="font-sans [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans">
      <LifeHeroSection />
      <WorkCultureSection />
      <LifeHiringSection />
      <LifeFaqSection />
      <LifeGallerySection />
    </div>
  );
}
