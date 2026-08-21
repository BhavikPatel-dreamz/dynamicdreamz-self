import { FaqSection } from "@/components/sections/faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import {
  ShopifyAdvantagesSection,
  ShopifyReasonsSection,
} from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyThemeProcessSection } from "@/components/sections/shopify-theme-customization/shopify-theme-process-section";
import { ShopifyThemeTechSection } from "@/components/sections/shopify-theme-customization/shopify-theme-tech-section";
import { ShopifyThemesGridSection } from "@/components/sections/shopify-theme-customization/shopify-themes-grid-section";
import {
  wordPressThemeCustomizationContent,
  wordPressThemeCustomizationFaqs,
} from "@/content/wordpress-theme-customization";

export function WordPressThemeCustomizationPage() {
  const brandsContent = {
    heading: wordPressThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for WordPress theme customization",
    slug: "wordpress-theme-customization",
  };

  const servicesContent = {
    heading: wordPressThemeCustomizationContent.services.title,
    description: wordPressThemeCustomizationContent.services.subtitle,
    items: wordPressThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
  };

  const whyNeedContent = {
    heading: wordPressThemeCustomizationContent.whyNeed.title,
    description: wordPressThemeCustomizationContent.whyNeed.subtitle,
    items: wordPressThemeCustomizationContent.whyNeed.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
    hideCta: true,
  };

  const benefitsContent = {
    heading: wordPressThemeCustomizationContent.benefits.title,
    description: wordPressThemeCustomizationContent.benefits.subtitle ?? "",
    items: wordPressThemeCustomizationContent.benefits.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
  };

  const processContent = {
    title: wordPressThemeCustomizationContent.process.title,
    subtitle: wordPressThemeCustomizationContent.process.subtitle,
    centerIllustration: "/assets/shopify-theme-customization/process/process-illustration.svg",
    steps: wordPressThemeCustomizationContent.process.steps,
  };

  const techContent = {
    title: wordPressThemeCustomizationContent.tech.title,
    subtitle: wordPressThemeCustomizationContent.tech.subtitle,
    items: wordPressThemeCustomizationContent.tech.items,
  };

  const themesContent = {
    title: wordPressThemeCustomizationContent.themes.title,
    subtitle: wordPressThemeCustomizationContent.themes.subtitle,
    items: wordPressThemeCustomizationContent.themes.items,
  };

  const whyChooseContent = {
    heading: wordPressThemeCustomizationContent.whyChoose.title,
    description: wordPressThemeCustomizationContent.whyChoose.subtitle,
    items: wordPressThemeCustomizationContent.whyChoose.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
    hideCta: true,
  };

  const portfolioContent = {
    heading: wordPressThemeCustomizationContent.portfolio.title,
    description: wordPressThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: wordPressThemeCustomizationContent.portfolio.items.map((item) => ({
      name: item.title,
      href: item.href,
      image: item.image,
      imageAlt: item.title,
      category: item.category,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        bodyClassName="max-w-[920px] mx-auto text-base font-normal leading-[30.4px] text-muted my-6"
        className="inner-hero-sec full-width-sec hide-review shopify-theme-customization-sec relative overflow-hidden bg-white pt-[190px] pb-20 max-[991px]:pt-[100px] max-[991px]:pb-10"
        content={{
          title: wordPressThemeCustomizationContent.hero.title,
          description: wordPressThemeCustomizationContent.hero.description,
        }}
        leftColClassName="left-col w-full text-center"
        rightColClassName="hidden"
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordPressThemeCustomizationContent.brands.title}
        items={wordPressThemeCustomizationContent.brands.items}
      />
      <ShopifyServicesSection content={servicesContent} />
      <ShopifyAdvantagesSection
        columns={2}
        content={whyNeedContent}
        id="why-need-customization"
      />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyThemeProcessSection content={processContent} />
      <ShopifyThemeTechSection content={techContent} />
      <ShopifyThemesGridSection content={themesContent} />
      <ShopifyAdvantagesSection
        className="why_dynamic_dreamz_sec dev why_dynamic_dreamz_sec dev pb-80 bg-gradient-light two-column-icon-text-bg py-20 max-[767px]:py-[60px] bg-[linear-gradient(180deg,#FAF8F5_0%,#FFFFFF_100%)]"
        columns={2}
        content={whyChooseContent}
        id="why-choose-dynamic-dreamz"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[991px]:pb-[50px]"
        description={wordPressThemeCustomizationContent.testimonials.description}
        heading={wordPressThemeCustomizationContent.testimonials.heading}
        items={wordPressThemeCustomizationContent.testimonials.items}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        heading="FAQs on WordPress Theme Customization Services"
        idPrefix="wordpress-theme-customization-faq"
        items={wordPressThemeCustomizationFaqs}
      />
    </div>
  );
}
