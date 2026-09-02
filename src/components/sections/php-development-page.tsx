import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppProcessSection } from "@/components/sections/shopify-mobile-app/shopify-app-process-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { phpDevelopmentContent } from "@/content/php-development";

export function PhpDevelopmentPage() {
  const brandsContent = {
    heading: phpDevelopmentContent.brands.title,
    slug: "php-development",
  };

  const servicesContent = {
    heading: phpDevelopmentContent.services.title,
    description: phpDevelopmentContent.services.subtitle,
    items: phpDevelopmentContent.services.items.map((item) => ({
      ...item,
      bullets: [],
    })),
  };

  const portfolioContent = {
    eyebrow: phpDevelopmentContent.portfolio.eyebrow,
    heading: phpDevelopmentContent.portfolio.title,
    description: phpDevelopmentContent.portfolio.subtitle,
    items: phpDevelopmentContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection content={phpDevelopmentContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={phpDevelopmentContent.brands.title}
        items={phpDevelopmentContent.brands.items}
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={servicesContent}
        headerLayout="split"
        hideCta={true}
        id="services"
      />
      <TextBoxSection
        className="single-text-box-sec pb-0"
        heading={phpDevelopmentContent.whyDynamicDreamz.heading}
        text={phpDevelopmentContent.whyDynamicDreamz.text}
      />
      <ShopifyAppProcessSection content={phpDevelopmentContent.process} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        ctaHref={phpDevelopmentContent.portfolio.ctaHref}
        ctaLabel={phpDevelopmentContent.portfolio.ctaLabel}
        eyebrow={phpDevelopmentContent.portfolio.eyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={phpDevelopmentContent.testimonials.description}
        eyebrow={phpDevelopmentContent.testimonials.eyebrow}
        heading={phpDevelopmentContent.testimonials.heading}
      />
      <SplitFaqSection
        heading={phpDevelopmentContent.faqHeading}
        idPrefix="php-faq"
        items={phpDevelopmentContent.faqs}
      />
      <CtaBannerSection
        ctaHref={phpDevelopmentContent.ctaBanner.ctaHref}
        ctaLabel={phpDevelopmentContent.ctaBanner.ctaLabel}
        heading={phpDevelopmentContent.ctaBanner.heading}
      />
    </div>
  );
}
