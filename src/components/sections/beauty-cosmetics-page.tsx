import { BeautyBrandsSection } from "@/components/sections/beauty-cosmetics/beauty-brands-section";
import { BeautyDeliverablesSection } from "@/components/sections/beauty-cosmetics/beauty-deliverables-section";
import { BeautyHeroSection } from "@/components/sections/beauty-cosmetics/beauty-hero-section";
import { BeautyIndustrySolutionsSection } from "@/components/sections/beauty-cosmetics/beauty-industry-solutions-section";
import { BeautyPortfolioSection } from "@/components/sections/beauty-cosmetics/beauty-portfolio-section";

export function BeautyCosmeticsPage() {
  return (
    <div className="font-sans [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans">
      <BeautyHeroSection />
      <BeautyBrandsSection />
      <BeautyIndustrySolutionsSection />
      <BeautyDeliverablesSection />
      <BeautyPortfolioSection />
    </div>
  );
}
