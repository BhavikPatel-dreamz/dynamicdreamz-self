import { AiEmpoweredDeliverySection } from "@/components/sections/ai-empowered-delivery-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { ShopifyTeamBoxesSection } from "@/components/sections/shopify-team-boxes-section";
import { ShopifyThemeServiceIcon } from "@/components/sections/shopify-theme-customization/service-icons";
import { ShopifyThemesGridSection } from "@/components/sections/shopify-theme-customization/shopify-themes-grid-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationApproachSection } from "@/components/sections/theme-customization-approach-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import { shopifyThemeCustomizationContent } from "@/content/shopify-theme-customization";

export function ShopifyThemeCustomizationPage() {
  const servicesContent = {
    eyebrow: shopifyThemeCustomizationContent.services.eyebrow,
    heading: shopifyThemeCustomizationContent.services.heading,
    description: shopifyThemeCustomizationContent.services.description,
    boxes: shopifyThemeCustomizationContent.services.items.map((item) => ({
      icon: <ShopifyThemeServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ServiceHeroVideoSection
        content={shopifyThemeCustomizationContent.hero}
      />

      {/* 2. Client Logos */}
      <IndustryBrandsSection
        content={shopifyThemeCustomizationContent.brands}
        heading={shopifyThemeCustomizationContent.brands.heading}
        items={shopifyThemeCustomizationContent.brands.items}
      />

      {/* 3. Services */}
      <ThemeCustomizationServicesSection
        content={servicesContent}
        variant="yellow"
      />

      {/* 4. Dev Team / You like the theme */}
      <ShopifyTeamBoxesSection
        content={shopifyThemeCustomizationContent.devTeam}
      />

      {/* 5. Development Process (6 steps, 3 cols) */}
      <OurDevelopmentProcessSection
        columns={3}
        content={shopifyThemeCustomizationContent.process}
      />

      {/* 6. Choose the Right Approach */}
      <ThemeCustomizationApproachSection
        content={shopifyThemeCustomizationContent.approach}
      />

      {/* 7. Shopify Themes We Customize (32 themes) */}
      <ShopifyThemesGridSection
        content={shopifyThemeCustomizationContent.themes}
        id="customized-theme"
        variant="pista"
      />

      {/* 8. AI-Assisted Delivery */}
      <AiEmpoweredDeliverySection
        content={shopifyThemeCustomizationContent.aiDelivery}
      />

      {/* 9. Why Choose Dynamic Dreamz */}
      <WhyChooseShopifyMigrationSection
        content={shopifyThemeCustomizationContent.whyChoose}
      />

      {/* 10. Portfolio Showcase */}
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={shopifyThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 11. Pricing Engagement */}
      <PricingTableSection
        content={shopifyThemeCustomizationContent.pricing}
      />

      {/* 12. Client Stories / Testimonials */}
      <HappyClientSection
        description={shopifyThemeCustomizationContent.testimonials.description}
        eyebrow={shopifyThemeCustomizationContent.testimonials.eyebrow}
        heading={shopifyThemeCustomizationContent.testimonials.heading}
        items={shopifyThemeCustomizationContent.testimonials.items}
      />

      {/* 13. Frequently Asked Questions */}
      <SplitFaqSection
        answerClassName="!text-base !font-medium !leading-7 !text-[#535353] max-[1199px]:!text-sm max-[1199px]:!leading-6"
        className="faq-sec"
        heading={shopifyThemeCustomizationContent.faqs.heading}
        idPrefix="shopify-theme-customization-faq"
        items={shopifyThemeCustomizationContent.faqs.items}
      />
    </div>
  );
}
