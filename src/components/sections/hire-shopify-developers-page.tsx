import { HiringHeroSection } from "@/components/sections/hire-wordpress-developers/hire-wordpress-hero-section";
import { HiringProcessSection } from "@/components/sections/hire-wordpress-developers/hiring-process-section";
import { ShopifyFaqSection } from "@/components/sections/hire-shopify-developers/shopify-faq-section";
import { ShopifyIndustriesSection } from "@/components/sections/hire-shopify-developers/shopify-industries-section";
import { ShopifyPortfolioSection } from "@/components/sections/hire-shopify-developers/shopify-portfolio-section";
import { ShopifyAdvantagesSection, ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { hireShopifyHero, hireShopifyProcess, hireShopifyTestimonials } from "@/content/hire-shopify-developers";

const brandSection = { slug: "hire-shopify-developers", brands: { ariaLabel: "Brands that trust Dynamic Dreamz for Shopify development" } } as const;

export function HireShopifyDevelopersPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <HiringHeroSection content={hireShopifyHero} />
      <IndustryBrandsSection content={brandSection} />
      <HiringProcessSection content={hireShopifyProcess} showStepNumbers />
      <ShopifyServicesSection />
      <ShopifyReasonsSection />
      <ShopifyAdvantagesSection />
      <ShopifyIndustriesSection />
      <ShopifyPortfolioSection />
      <div id="shopify-testimonials"><HappyClientSection alignDesktopToContentEdge description={hireShopifyTestimonials.description} heading={hireShopifyTestimonials.heading} /></div>
      <ShopifyFaqSection />
    </div>
  );
}
