import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
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
    <div>
      <ServiceHeroVideoSection content={phpDevelopmentContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={phpDevelopmentContent.brands.title}
        items={phpDevelopmentContent.brands.items}
      />
      <EvaluationFrameworkSection
        content={phpDevelopmentContent.whyChoose}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        headerLayout="split"
        hideCta={true}
        id="services"
      />
      <OurDevelopmentProcessSection content={phpDevelopmentContent.process} />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
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
        description={phpDevelopmentContent.testimonials.description}
        eyebrow={phpDevelopmentContent.testimonials.eyebrow}
        heading={phpDevelopmentContent.testimonials.heading}
      />
      <SplitFaqSection
        heading={phpDevelopmentContent.faqHeading}
        idPrefix="php-faq"
        items={phpDevelopmentContent.faqs}
        sectionId="php-faq-section"
      />
    </div>
  );
}
