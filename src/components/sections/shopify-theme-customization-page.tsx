import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { ShopifyThemeProcessSection } from "@/components/sections/shopify-theme-customization/shopify-theme-process-section";
import { ShopifyThemeTechSection } from "@/components/sections/shopify-theme-customization/shopify-theme-tech-section";
import { ShopifyThemesGridSection } from "@/components/sections/shopify-theme-customization/shopify-themes-grid-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { shopifyThemeCustomizationContent } from "@/content/shopify-theme-customization";
import { wixTestimonials } from "@/content/wix-to-shopify-migration";

export function ShopifyThemeCustomizationPage() {
  const heroContent = {
    title: shopifyThemeCustomizationContent.hero.title,
    description: shopifyThemeCustomizationContent.hero.description,
    ctaLabel: shopifyThemeCustomizationContent.hero.ctaText,
    ctaHref: shopifyThemeCustomizationContent.hero.ctaHref,
  };

  const brandsContent = {
    heading: shopifyThemeCustomizationContent.brands.title,
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
    cta: {
      label: shopifyThemeCustomizationContent.sectionCopy.ctaLabel,
      href: "/request-quote",
    },
  };

  const whyNeedContent = {
    title: shopifyThemeCustomizationContent.whyNeed.title,
    subtitle: shopifyThemeCustomizationContent.whyNeed.subtitle,
    items: shopifyThemeCustomizationContent.whyNeed.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
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
    title: shopifyThemeCustomizationContent.whyChoose.title,
    subtitle: shopifyThemeCustomizationContent.whyChoose.subtitle,
    items: shopifyThemeCustomizationContent.whyChoose.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      iconAlt: item.title,
    })),
  };

  const portfolioContent = {
    eyebrow: shopifyThemeCustomizationContent.sectionCopy.portfolioEyebrow,
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
      <ServiceHeroSection
        className="inner-hero-sec full-width-sec hide-review shopify-theme-customization-sec relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={heroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyThemeCustomizationContent.brands.title}
        items={shopifyThemeCustomizationContent.brands.items}
      />
      <AgencyServicesSection
        className="what-we-provide-sec pt-20 pb-0 max-[992px]:pt-[50px]"
        columns={3}
        content={servicesContent}
        headerLayout="centered"
        hideCta
        id="what-we-provide"
      />
      <ThemeWhyChooseSection
        className="why_dynamic_dreamz_sec dev pt-20 pb-20 max-[767px]:py-[50px]"
        content={whyNeedContent}
        id="why-need-customization"
        variant="left-icon"
      />
      <ShopifyReasonsSection
        className="shopify-customization-services-sec bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[767px]:py-[60px]"
        content={benefitsContent}
        id="benefits-of-customization"
        layout="carousel"
        carouselFullBleed
      />
      <ShopifyThemeProcessSection content={shopifyThemeCustomizationContent.process} />
      <ShopifyThemeTechSection content={shopifyThemeCustomizationContent.technologies} />
      <ShopifyThemesGridSection content={shopifyThemeCustomizationContent.themes} />
      <ThemeWhyChooseSection
        className="why_dynamic_dreamz_sec dev mt-20 pb-20 pt-20 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] two-column-icon-text-bg max-[992px]:mt-12.5 max-[992px]:py-14 max-[767px]:mt-10 max-[767px]:py-10"
        content={whyChooseContent}
        id="why-choose"
        variant="left-icon"
      />
      <PortfolioShowcaseSection content={portfolioContent} />
      <div id="shopify-testimonials">
        <HappyClientSection
          controlsLabels={wixTestimonials.controlsLabels}
          description={shopifyThemeCustomizationContent.sectionCopy.testimonialsDescription}
          eyebrow={wixTestimonials.eyebrow}
          heading={shopifyThemeCustomizationContent.sectionCopy.testimonialsHeading}
          items={wixTestimonials.items}
          variant="client-stories"
        />
      </div>
      <FaqSection
        idPrefix="shopify-theme-customization-faq"
        items={shopifyThemeCustomizationContent.faqs.items}
      />
    </div>
  );
}
