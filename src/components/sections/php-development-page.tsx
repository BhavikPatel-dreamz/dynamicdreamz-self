import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { phpDevelopmentContent } from "@/content/php-development";

export function PhpDevelopmentPage() {
  const brandsContent = {
    heading: phpDevelopmentContent.brands.title,
    slug: phpDevelopmentContent.brands.slug,
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
      <ServiceHeroVideoSection content={phpDevelopmentContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={phpDevelopmentContent.brands.title}
        items={phpDevelopmentContent.brands.items}
      />
      <EvaluationFrameworkSection
        className="how-to-choose-spa-sec bg-white py-20 max-[992px]:py-[50px]"
        content={phpDevelopmentContent.whyChoose}
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        columns={2}
        content={servicesContent}
        headerLayout="split"
        hideCta={true}
        id="services"
      />
      <OurDevelopmentProcessSection content={phpDevelopmentContent.process} />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={phpDevelopmentContent.portfolio.ctaHref}
        ctaLabel={phpDevelopmentContent.portfolio.ctaLabel}
        eyebrow={phpDevelopmentContent.portfolio.eyebrow}
        headerLayout="split"
        mobileColumns={2}
        sectionId="our_work"
        showMobileArrow={true}
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
        variant="liveGrid"
      />
      <HappyClientSection
        className="pt-0"
        description={phpDevelopmentContent.testimonials.description}
        eyebrow={phpDevelopmentContent.testimonials.eyebrow}
        heading={phpDevelopmentContent.testimonials.heading}
      />
      <SplitFaqSection
        className="faq-sec bg-[#fafaf7] py-[60px] max-[991px]:py-10"
        heading={phpDevelopmentContent.faqHeading}
        idPrefix="php-faq"
        items={phpDevelopmentContent.faqs}
        sectionId="php-faq-section"
      />
    </div>
  );
}
