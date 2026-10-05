import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ShopifyTeamBoxesSection } from "@/components/sections/shopify-team-boxes-section";
import { ShopifyThemesGridSection } from "@/components/sections/shopify-theme-customization/shopify-themes-grid-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  WordPressThemeCustomizationBenefitIcon,
  WordPressThemeCustomizationServiceIcon,
} from "@/components/sections/wordpress-theme-customization/wordpress-theme-customization-icons";
import {
  wordPressThemeCustomizationContent,
  wordPressThemeCustomizationFaqs,
} from "@/content/wordpress-theme-customization";

export function WordPressThemeCustomizationPage() {
  const brandsContent = {
    heading: wordPressThemeCustomizationContent.brands.heading,
    slug: wordPressThemeCustomizationContent.brands.slug,
  };

  const servicesContent = {
    eyebrow: wordPressThemeCustomizationContent.services.eyebrow,
    heading: wordPressThemeCustomizationContent.services.heading,
    description: wordPressThemeCustomizationContent.services.description,
    boxes: wordPressThemeCustomizationContent.services.items.map((box) => ({
      icon: <WordPressThemeCustomizationServiceIcon name={box.iconName} />,
      title: box.title,
      description: box.description,
    })),
  };

  const whyNeedContent = {
    eyebrow: wordPressThemeCustomizationContent.whyNeed.eyebrow,
    heading: wordPressThemeCustomizationContent.whyNeed.heading,
    description: wordPressThemeCustomizationContent.whyNeed.description,
    items: wordPressThemeCustomizationContent.whyNeed.items,
  };

  const benefitsContent = {
    eyebrow: wordPressThemeCustomizationContent.benefits.eyebrow,
    heading: wordPressThemeCustomizationContent.benefits.heading,
    description: wordPressThemeCustomizationContent.benefits.description,
    boxes: wordPressThemeCustomizationContent.benefits.items.map((box) => ({
      icon: <WordPressThemeCustomizationBenefitIcon name={box.iconName} />,
      title: box.title,
      description: box.description,
    })),
  };

  const processContent = {
    eyebrow: wordPressThemeCustomizationContent.process.eyebrow,
    heading: wordPressThemeCustomizationContent.process.heading,
    description: wordPressThemeCustomizationContent.process.description,
    steps: wordPressThemeCustomizationContent.process.steps,
  };

  const themesContent = {
    eyebrow: wordPressThemeCustomizationContent.themes.eyebrow,
    title: wordPressThemeCustomizationContent.themes.title,
    subtitle: wordPressThemeCustomizationContent.themes.subtitle,
    items: wordPressThemeCustomizationContent.themes.items,
  };

  const whyChooseContent = {
    eyebrow: wordPressThemeCustomizationContent.whyChoose.eyebrow,
    heading: wordPressThemeCustomizationContent.whyChoose.heading,
    description: wordPressThemeCustomizationContent.whyChoose.description,
    items: wordPressThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: wordPressThemeCustomizationContent.portfolio.eyebrow,
    heading: wordPressThemeCustomizationContent.portfolio.heading,
    description: wordPressThemeCustomizationContent.portfolio.description,
    category: wordPressThemeCustomizationContent.portfolio.category,
    ctaLabel: wordPressThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: wordPressThemeCustomizationContent.portfolio.ctaHref,
    items: wordPressThemeCustomizationContent.portfolio.items.map((item) => ({
      name: item.name,
      title: item.title,
      image: item.image,
      imageAlt: item.imageAlt,
      href: item.href,
      category: item.category,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero with tablet slider & trust badges */}
      <CityPageHeroSection
        className="hide-logo"
        content={wordPressThemeCustomizationContent.hero}
        paddingClassName="pt-[91px] pb-0 max-[991px]:pt-16 max-[991px]:pb-0"
      />

      {/* 2. Trusted by Leading Brands slider */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordPressThemeCustomizationContent.brands.heading}
        items={wordPressThemeCustomizationContent.brands.items}
      />

      {/* 3. Our WordPress Theme Customization Services (Yellow) */}
      <ThemeCustomizationServicesSection
        content={servicesContent}
        id="services"
        variant="yellow"
      />

      {/* 4. Why do you need to customize WordPress Theme? (Dark Dev Team) */}
      <ShopifyTeamBoxesSection
        content={whyNeedContent}
        id="why-need-customization"
      />

      {/* 5. Benefits of the WordPress Theme Customization Service (Transparent) */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        id="benefits"
        variant="transparent"
      />

      {/* 6. Process of WordPress Theme Customization Services */}
      <OurDevelopmentProcessSection
        columns={3}
        content={processContent}
        id="our-process"
      />

      {/* 7. WordPress Themes We Customize */}
      <ShopifyThemesGridSection
        className="mt-80 max-[992px]:mt-10"
        content={themesContent}
        id="themes"
        variant="pista"
      />

      {/* 8. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />

      {/* 9. Snippets of WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        columns={4}
        content={portfolioContent}
        sectionId="our_work"
        variant="liveGrid"
      />

      {/* 10. Don't Just Take Our Word For It */}
      <HappyClientSection
        description={wordPressThemeCustomizationContent.testimonials.description}
        eyebrow={wordPressThemeCustomizationContent.testimonials.eyebrow}
        heading={wordPressThemeCustomizationContent.testimonials.heading}
        items={wordPressThemeCustomizationContent.testimonials.items}
      />

      {/* 11. FAQs on WordPress Theme Customization Services */}
      <SplitFaqSection
        heading={wordPressThemeCustomizationContent.faqHeading}
        idPrefix="wordpress-theme-customization-faq"
        items={wordPressThemeCustomizationFaqs}
        layout="split"
      />
    </div>
  );
}
