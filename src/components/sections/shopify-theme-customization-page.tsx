import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import {
  ShopifyAdvantagesSection,
  ShopifyReasonsSection,
} from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { HiringHeroSection } from "@/components/sections/hiring-hero-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { ShopifyThemeProcessSection } from "@/components/sections/shopify-theme-customization/shopify-theme-process-section";
import { ShopifyThemeTechSection } from "@/components/sections/shopify-theme-customization/shopify-theme-tech-section";
import { ShopifyThemesGridSection } from "@/components/sections/shopify-theme-customization/shopify-themes-grid-section";
import { shopifyThemeCustomizationContent } from "@/content/shopify-theme-customization";

export function ShopifyThemeCustomizationPage() {
  const heroContent = {
    title: shopifyThemeCustomizationContent.hero.title,
    description: shopifyThemeCustomizationContent.hero.description,
    ctaLabel: shopifyThemeCustomizationContent.hero.ctaText,
    ctaHref: shopifyThemeCustomizationContent.hero.ctaHref,
    stats: shopifyThemeCustomizationContent.hero.stats,
  };

  const brandsContent = {
    heading: shopifyThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for Shopify theme customization",
    slug: "shopify-theme-customization",
  };

  const servicesContent = {
    heading: shopifyThemeCustomizationContent.services.title,
    description: shopifyThemeCustomizationContent.services.subtitle,
    items: shopifyThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
  };

  const whyNeedContent = {
    heading: shopifyThemeCustomizationContent.whyNeed.title,
    description: shopifyThemeCustomizationContent.whyNeed.subtitle,
    items: shopifyThemeCustomizationContent.whyNeed.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
    hideCta: true,
  };

  const benefitsContent = {
    heading: shopifyThemeCustomizationContent.benefits.title,
    description: shopifyThemeCustomizationContent.benefits.subtitle ?? "",
    items: shopifyThemeCustomizationContent.benefits.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
  };

  const whyChooseContent = {
    heading: shopifyThemeCustomizationContent.whyChoose.title,
    description: shopifyThemeCustomizationContent.whyChoose.subtitle,
    items: shopifyThemeCustomizationContent.whyChoose.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
    hideCta: true,
  };

  const portfolioContent = {
    heading: shopifyThemeCustomizationContent.portfolio.title,
    description: shopifyThemeCustomizationContent.portfolio.subtitle,
    items: shopifyThemeCustomizationContent.portfolio.items.map((item) => ({
      name: item.title,
      href: item.href,
      image: item.image,
      imageAlt: item.title,
      category: item.category,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <HiringHeroSection content={heroContent} hideReview />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyThemeCustomizationContent.brands.title}
      />
      <ShopifyServicesSection content={servicesContent} />
      <ShopifyAdvantagesSection
        columns={2}
        content={whyNeedContent}
        id="why-need-customization"
      />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyThemeProcessSection content={shopifyThemeCustomizationContent.process} />
      <ShopifyThemeTechSection content={shopifyThemeCustomizationContent.technologies} />
      <ShopifyThemesGridSection content={shopifyThemeCustomizationContent.themes} />
      <ShopifyAdvantagesSection
        className="bg-[#fafaf7] py-20 max-[767px]:py-[60px]"
        columns={2}
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection content={portfolioContent} />
      <div id="shopify-testimonials">
        <HappyClientSection
          description="Our clients' success speaks for itself. Read testimonials from satisfied clients who have benefited from our Shopify theme customization services."
          heading="Don't Just Take Our Word For It"
        />
      </div>
      <FaqSection
        idPrefix="shopify-theme-customization-faq"
        items={shopifyThemeCustomizationContent.faqs.items}
      />
    </div>
  );
}
