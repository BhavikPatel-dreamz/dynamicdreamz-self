import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import {
  ShopifyAdvantagesSection,
  ShopifyReasonsSection,
} from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { HiringHeroSection } from "@/components/sections/hiring-hero-section";
import { HiringProcessSection } from "@/components/sections/hire-wordpress-developers/hiring-process-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ShopifyExpertsAiAutomation } from "@/components/sections/shopify-experts/shopify-experts-ai-automation";
import { ShopifyExpertsAiDiscovery } from "@/components/sections/shopify-experts/shopify-experts-ai-discovery";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { shopifyExpertsContent } from "@/content/shopify-experts";

const industriesContent = {
  heading: shopifyExpertsContent.industries.heading,
  description: shopifyExpertsContent.industries.description,
  items: shopifyExpertsContent.industries.slides.map((slide) => ({
    image: slide.image,
    imageAlt: slide.alt,
    title: slide.title,
    description: slide.description,
  })),
};

const reasonsContent = {
  heading: shopifyExpertsContent.hiringChoice.heading,
  description: shopifyExpertsContent.hiringChoice.description,
  items: shopifyExpertsContent.hiringChoice.items,
};

const advantagesContent = {
  heading: shopifyExpertsContent.advantages.heading,
  description: shopifyExpertsContent.advantages.description,
  items: shopifyExpertsContent.advantages.items,
  ctaLabel: shopifyExpertsContent.advantages.ctaLabel,
  ctaHref: shopifyExpertsContent.advantages.ctaHref,
};

export function ShopifyExpertsPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <HiringHeroSection content={shopifyExpertsContent.hero} />
      <IndustryBrandsSection
        content={shopifyExpertsContent.brands}
        heading={shopifyExpertsContent.brands.heading}
      />
      <HiringProcessSection
        content={shopifyExpertsContent.process}
        showStepNumbers
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <ShopifyAdvantagesSection content={advantagesContent} />
      <ShopifyExpertsAiAutomation />
      <ShopifyExpertsAiDiscovery />
      <IndustriesServedSection content={industriesContent} />
      <PortfolioShowcaseSection content={shopifyExpertsContent.work} />
      <div id="shopify-testimonials" className="pt-20">
        <HappyClientSection
          heading={shopifyExpertsContent.testimonials.heading}
          description={shopifyExpertsContent.testimonials.description}
        />
      </div>
      <FaqSection
        items={shopifyExpertsContent.faqs}
        idPrefix="shopify-experts-faq"
      />
      <CtaBannerSection
        heading={shopifyExpertsContent.ctaBanner.heading}
        ctaLabel={shopifyExpertsContent.ctaBanner.ctaLabel}
        ctaHref={shopifyExpertsContent.ctaBanner.ctaHref}
      />
    </div>
  );
}
