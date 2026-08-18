import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { HireWordPressHeroSection } from "@/components/sections/hire-wordpress-developers/hire-wordpress-hero-section";
import { HiringProcessSection } from "@/components/sections/hire-wordpress-developers/hiring-process-section";
import {
  WordPressAdvantagesSection,
  WordPressReasonsSection,
} from "@/components/sections/hire-wordpress-developers/wordpress-proof-sections";
import { WordPressPortfolioSection } from "@/components/sections/hire-wordpress-developers/wordpress-portfolio-section";
import { WordPressFaqSection } from "@/components/sections/hire-wordpress-developers/wordpress-faq-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { hireWordPressTestimonials } from "@/content/hire-wordpress-developers";

const brandSection = {
  slug: "hire-wordpress-developers",
  brands: {
    ariaLabel: "Brands that trust Dynamic Dreamz for web development",
  },
} as const;

export function HireWordPressDevelopersPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <HireWordPressHeroSection />
      <IndustryBrandsSection content={brandSection} />
      <HiringProcessSection />
      <WordPressReasonsSection />
      <WordPressAdvantagesSection />
      <WordPressPortfolioSection />
      <HappyClientSection
        alignDesktopToContentEdge
        description={hireWordPressTestimonials.description}
        heading={hireWordPressTestimonials.heading}
      />
      <WordPressFaqSection />
    </div>
  );
}
