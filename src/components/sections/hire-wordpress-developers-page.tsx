import { FaqSection } from "@/components/sections/faq-section";
import { HiringHeroSection } from "@/components/sections/hiring-hero-section";
import { HiringProcessSection } from "@/components/sections/hire-wordpress-developers/hiring-process-section";
import {
  WordPressAdvantagesSection,
  WordPressReasonsSection,
} from "@/components/sections/hire-wordpress-developers/wordpress-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import {
  hireWordPressFaqs,
  hireWordPressHero,
  hireWordPressPortfolio,
  hireWordPressTestimonials,
} from "@/content/hire-wordpress-developers";
import { wixTestimonials } from "@/content/wix-to-shopify-migration";

const brandSection = {
  slug: "hire-wordpress-developers",
  brands: {
  },
} as const;

const portfolioContent = {
  heading: hireWordPressPortfolio.heading,
  description: hireWordPressPortfolio.description,
  items: hireWordPressPortfolio.items,
  category: "WORDPRESS",
  platformMark: {
    src: "/assets/platforms/wordpress-woocommerce-white.svg",
    width: 113,
    height: 29,
  },
};

export function HireWordPressDevelopersPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <HiringHeroSection content={hireWordPressHero} />
      <IndustryBrandsSection content={brandSection} />
      <HiringProcessSection />
      <WordPressReasonsSection />
      <WordPressAdvantagesSection />
      <PortfolioShowcaseSection content={portfolioContent} />
      <div id="shopify-testimonials">
        <HappyClientSection
          controlsLabels={wixTestimonials.controlsLabels}
          description={hireWordPressTestimonials.description}
          eyebrow={wixTestimonials.eyebrow}
          heading={hireWordPressTestimonials.heading}
          items={wixTestimonials.items}
          variant="client-stories"
        />
      </div>
      <FaqSection
        items={hireWordPressFaqs}
        idPrefix="hire-wordpress-developers-faq"
      />
    </div>
  );
}
