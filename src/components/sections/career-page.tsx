import { CareerBenefitsSection } from "@/components/sections/career/career-benefits-section";
import { CareerGallerySection } from "@/components/sections/career/career-gallery-section";
import { CareerHeroSection } from "@/components/sections/career/career-hero-section";
import { CareerOpportunitiesSection } from "@/components/sections/career/career-opportunities-section";

export function CareerPage() {
  return (
    <div className="font-sans [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans">
      <CareerHeroSection />
      <CareerOpportunitiesSection />
      <CareerBenefitsSection />
      <CareerGallerySection />
    </div>
  );
}
