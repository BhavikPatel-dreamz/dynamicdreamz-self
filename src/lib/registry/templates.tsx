import type { ReactNode } from "react";
import { CityHeroBlock } from "@/components/blocks/CityHeroBlock";
import { ClientLogoMarqueeBlock } from "@/components/blocks/ClientLogoMarqueeBlock";
import { TrustStatsBarBlock } from "@/components/blocks/TrustStatsBarBlock";
import { KeyBenefitsGridBlock } from "@/components/blocks/KeyBenefitsGridBlock";
import { ServiceOfferingsGridBlock } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ProcessWorkflowBlock } from "@/components/blocks/ProcessWorkflowBlock";
import { PortfolioSnippetsBlock, type PortfolioShowcaseItem } from "@/components/blocks/PortfolioSnippetsBlock";
import { TestimonialsSliderBlock, type HappyClientTestimonialItem } from "@/components/blocks/TestimonialsSliderBlock";
import { FaqSectionBlock } from "@/components/blocks/FaqSectionBlock";
import { QuoteRequestCTABlock } from "@/components/blocks/QuoteRequestCTABlock";
import { ThemeFeatureBreakdownBlock } from "@/components/blocks/ThemeFeatureBreakdownBlock";
import { WhyChooseUsBlock } from "@/components/blocks/WhyChooseUsBlock";
import { ServiceHeroBlock } from "@/components/blocks/ServiceHeroBlock";
import { CaseStudySpotlightBlock, type CaseStudyPreviewItem } from "@/components/blocks/CaseStudySpotlightBlock";
import { PerformanceBenchmarksBlock } from "@/components/blocks/PerformanceBenchmarksBlock";
import { EngagementModelsBlock } from "@/components/blocks/EngagementModelsBlock";
import { MobileAppInteractiveShowcaseBlock } from "@/components/blocks/MobileAppInteractiveShowcaseBlock";

import type { ClientLogoSliderItem } from "@/components/ui/CarouselSliderClient";
import type { FaqAccordionItem } from "@/components/ui/AccordionClient";
import type {
  CityPageHeroContent,
  CityPageCounterContent,
  CityWhyChooseBoxesContent,
  AgencyServicesContent,
  OurDevelopmentProcessContent,
  ThemeHeroContent,
  ThemeFeaturesBannerContent,
  EvaluationFrameworkContent,
  ServiceHeroVideoContent,
  MigrationProcessContent,
  ThemeCustomizationServicesContent,
  IndustryCustomDevelopmentContent,
  WhyChooseMigrationContent,
  AiEmpoweredDeliveryContent,
  NumberedGridItem,
  MobileAppWorkContent,
  PricingEngagementContent,
  MobileAppHeroContent,
} from "@/types/blocks";

// ── 1. Shopify City Landing Template ──
export type ShopifyCityLandingContent = {
  sectionCopy?: {
    faqHeading?: string;
    portfolioCta?: string;
    portfolioEyebrow?: string;
    testimonialsEyebrow?: string;
    [key: string]: any;
  };
  hero: CityPageHeroContent;
  brands?: {
    title?: string;
    heading?: string;
    items: readonly ClientLogoSliderItem[];
  };
  counter?: CityPageCounterContent;
  counters?: CityPageCounterContent;
  whyChoose?: CityWhyChooseBoxesContent;
  whyChooseBoxes?: CityWhyChooseBoxesContent;
  services?: AgencyServicesContent;
  agencyServices?: AgencyServicesContent;
  process?: OurDevelopmentProcessContent;
  whyDynamicDreamz?: CityWhyChooseBoxesContent;
  portfolio?: any;
  testimonials?: any;
  faqs?: readonly FaqAccordionItem[];
  ctaBanner?: any;
  bookIntroCall?: any;
  reasons?: any;
};

export type ShopifyCityLandingTemplateProps = {
  content: ShopifyCityLandingContent;
  slug: string;
  faqIdPrefix: string;
  children?: ReactNode;
};

export function ShopifyCityLandingTemplate({
  content,
  slug,
  faqIdPrefix,
  children,
}: ShopifyCityLandingTemplateProps) {
  return (
    <div>
      <CityHeroBlock content={content.hero} />
      {content.brands && (
        <ClientLogoMarqueeBlock
          content={{ heading: content.brands.title || content.brands.heading, slug }}
          heading={content.brands.title || content.brands.heading}
          items={content.brands.items}
        />
      )}
      {content.counter && (
        <TrustStatsBarBlock
          content={content.counter}
          eyebrowVariant="dash"
        />
      )}
      {content.whyChoose && (
        <KeyBenefitsGridBlock
          content={content.whyChoose}
          eyebrowVariant="dash"
        />
      )}
      {content.services && (
        <ServiceOfferingsGridBlock
          cardVariant="services-box"
          columns={2}
          content={content.services}
          eyebrow={content.services?.eyebrow}
          hideCta={true}
          id="services"
          showDescription={true}
        />
      )}
      {content.process && (
        <ProcessWorkflowBlock
          content={content.process}
          eyebrowVariant="dash"
        />
      )}
      {content.whyDynamicDreamz && (
        <KeyBenefitsGridBlock
          columns={3}
          content={content.whyDynamicDreamz}
          eyebrowVariant="dash"
          theme="white"
        />
      )}
      {content.portfolio && (
        <PortfolioSnippetsBlock
          cardVariant="ourWorkRefresh"
          columns={4}
          content={{
            heading: content.portfolio.heading,
            description: content.portfolio.description,
            items: content.portfolio.items,
          }}
          ctaHref={content.portfolio.ctaHref}
          ctaLabel={content.sectionCopy?.portfolioCta}
          eyebrow={content.sectionCopy?.portfolioEyebrow}
          headerLayout="split"
        />
      )}
      {content.testimonials && (
        <TestimonialsSliderBlock
          description={content.testimonials.description}
          eyebrow={content.sectionCopy?.testimonialsEyebrow}
          heading={content.testimonials.heading}
          items={content.testimonials.items}
        />
      )}
      {content.faqs && (
        <FaqSectionBlock
          heading={content.sectionCopy?.faqHeading}
          idPrefix={faqIdPrefix}
          items={content.faqs}
        />
      )}
      {content.ctaBanner && (
        <QuoteRequestCTABlock
          ctaHref={content.ctaBanner.ctaHref}
          ctaLabel={content.ctaBanner.ctaLabel}
          heading={content.ctaBanner.heading}
        />
      )}
      {children}
    </div>
  );
}

// ── 2. WordPress City Landing Template ──
export type WordPressCityLandingContent = {
  sectionCopy?: {
    faqHeading?: string;
    portfolioCta?: string;
    portfolioEyebrow?: string;
    testimonialsEyebrow?: string;
    [key: string]: any;
  };
  hero: CityPageHeroContent;
  brands?: {
    title?: string;
    heading?: string;
    items: readonly ClientLogoSliderItem[];
  };
  counter?: CityPageCounterContent;
  counters?: CityPageCounterContent;
  process?: OurDevelopmentProcessContent;
  whyChooseBoxes?: CityWhyChooseBoxesContent;
  whyDynamicDreamz?: CityWhyChooseBoxesContent;
  agencyServices?: AgencyServicesContent;
  services?: AgencyServicesContent;
  portfolio?: any;
  testimonials?: any;
  faqsHeading?: string;
  faqs?: readonly FaqAccordionItem[];
  ctaBanner?: any;
  reasons?: any;
};

export type WordPressCityLandingTemplateProps = {
  content: WordPressCityLandingContent;
  slug: string;
  faqIdPrefix: string;
  hidePortfolioCta?: boolean;
  children?: ReactNode;
};

export function WordPressCityLandingTemplate({
  content,
  slug,
  faqIdPrefix,
  hidePortfolioCta = false,
  children,
}: WordPressCityLandingTemplateProps) {
  return (
    <div>
      <CityHeroBlock content={content.hero} />
      {content.brands && (
        <ClientLogoMarqueeBlock
          content={{ heading: content.brands.title || content.brands.heading, slug }}
          heading={content.brands.title || content.brands.heading}
          items={content.brands.items}
        />
      )}
      {content.counter && (
        <TrustStatsBarBlock
          content={content.counter}
          eyebrowVariant="dash"
        />
      )}
      {content.process && (
        <ProcessWorkflowBlock
          content={content.process}
          eyebrowVariant="dash"
        />
      )}
      {content.whyDynamicDreamz && (
        <KeyBenefitsGridBlock
          columns={3}
          content={content.whyDynamicDreamz}
          eyebrowVariant="dash"
          theme="white"
        />
      )}
      {content.portfolio && (
        <PortfolioSnippetsBlock
          cardVariant="ourWorkRefresh"
          columns={4}
          content={{
            eyebrow: content.portfolio.eyebrow,
            heading: content.portfolio.heading,
            description: content.portfolio.description,
            items: content.portfolio.items,
          }}
          eyebrow={content.portfolio.eyebrow}
          headerLayout="split"
          hideCta={hidePortfolioCta}
        />
      )}
      {content.testimonials && (
        <TestimonialsSliderBlock
          description={content.testimonials.description}
          eyebrow={content.testimonials.eyebrow}
          heading={content.testimonials.heading}
          items={content.testimonials.items}
          variant="client-stories"
        />
      )}
      {content.faqs && (
        <FaqSectionBlock
          heading={content.sectionCopy?.faqHeading}
          idPrefix={faqIdPrefix}
          items={content.faqs}
        />
      )}
      {content.ctaBanner && (
        <QuoteRequestCTABlock
          ctaHref={content.ctaBanner.ctaHref}
          ctaLabel={content.ctaBanner.ctaLabel}
          heading={content.ctaBanner.heading}
        />
      )}
      {children}
    </div>
  );
}

// ── 3. Shopify Theme Customization Template ──
export type ShopifyThemeCustomizationContent = {
  hero: ThemeHeroContent;
  brands: {
    title: string;
    items: readonly ClientLogoSliderItem[];
  };
  features: ThemeFeaturesBannerContent;
  benefits: CityWhyChooseBoxesContent;
  services: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: AgencyServicesContent["items"];
  };
  whyChoose: EvaluationFrameworkContent;
  portfolio?: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly PortfolioShowcaseItem[];
    ctaLabel?: string;
    ctaHref?: string;
  };
  faqsHeading: string;
  faqs: readonly FaqAccordionItem[];
};

export type ShopifyThemeCustomizationTemplateProps = {
  content: ShopifyThemeCustomizationContent;
  slug: string;
  faqIdPrefix: string;
  brandsDensity?: "standard" | "compact" | "flexible";
  children?: ReactNode;
};

export function ShopifyThemeCustomizationTemplate({
  content,
  slug,
  faqIdPrefix,
  brandsDensity,
  children,
}: ShopifyThemeCustomizationTemplateProps) {
  return (
    <div>
      <ServiceHeroBlock variant="theme" content={content.hero} />
      <ClientLogoMarqueeBlock
        content={{ heading: content.brands.title, slug }}
        density={brandsDensity}
        heading={content.brands.title}
        items={content.brands.items}
      />
      <ThemeFeatureBreakdownBlock content={content.features} />
      <KeyBenefitsGridBlock
        columns={3}
        content={content.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <ServiceOfferingsGridBlock
        cardVariant="services-box"
        columns={2}
        content={{
          heading: content.services.heading,
          description: content.services.description,
          items: content.services.items,
        }}
        eyebrow={content.services.eyebrow}
        id="services"
      />
      <WhyChooseUsBlock
        variant="evaluation"
        content={content.whyChoose}
        id="why-choose"
      />
      {content.portfolio ? (
        <PortfolioSnippetsBlock
          cardVariant="ourWorkRefresh"
          columns={4}
          content={content.portfolio}
          eyebrow={content.portfolio?.eyebrow}
          headerLayout="split"
          hideCta={false}
          sectionId="our_work"
        />
      ) : null}
      <FaqSectionBlock
        heading={content.faqsHeading}
        idPrefix={faqIdPrefix}
        items={content.faqs}
      />
      {children}
    </div>
  );
}

// ── 4. WordPress Theme Customization Template ──
export type WordPressThemeCustomizationContent = {
  hero: ThemeHeroContent;
  brands: {
    heading: string;
    slug?: string;
    items: readonly ClientLogoSliderItem[];
  };
  features: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly {
      iconName: string;
      title: string;
      description: string;
    }[];
  };
  services: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly {
      iconName: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly {
      iconName: string;
      title: string;
      description: string;
    }[];
  };
  whyChoose: EvaluationFrameworkContent;
  portfolio: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly PortfolioShowcaseItem[];
    ctaLabel?: string;
    ctaHref?: string;
  };
  testimonials?: {
    eyebrow?: string;
    heading: string;
    description?: string;
  };
  faqsHeading?: string;
  faqs: readonly FaqAccordionItem[];
};

export type WordPressThemeCustomizationTemplateProps = {
  content: WordPressThemeCustomizationContent;
  renderFeatureIcon: (iconName: string) => ReactNode;
  renderServiceIcon?: (iconName: string) => ReactNode;
  renderBenefitIcon: (iconName: string) => ReactNode;
  slug: string;
  faqIdPrefix: string;
  benefitsVariant?: "yellow" | "green";
  children?: ReactNode;
};

export function WordPressThemeCustomizationTemplate({
  content,
  renderFeatureIcon,
  renderServiceIcon,
  renderBenefitIcon,
  slug,
  faqIdPrefix,
  benefitsVariant = "green",
  children,
}: WordPressThemeCustomizationTemplateProps) {
  return (
    <div>
      <ServiceHeroBlock variant="theme" content={content.hero} />
      <ClientLogoMarqueeBlock
        content={{ heading: content.brands.heading, slug: content.brands.slug ?? slug }}
        heading={content.brands.heading}
        items={content.brands.items}
      />
      <KeyBenefitsGridBlock
        variant="themeWhyChoose"
        content={{
          eyebrow: content.features.eyebrow,
          heading: content.features.heading,
          description: content.features.description,
          boxes: content.features.items.map((item) => ({
            icon: renderFeatureIcon(item.iconName),
            title: item.title,
            description: item.description,
          })),
        }}
        id="features"
      />
      <KeyBenefitsGridBlock
        variant="themeWhyChoose"
        theme={benefitsVariant}
        content={{
          eyebrow: content.benefits.eyebrow,
          heading: content.benefits.heading,
          description: content.benefits.description,
          boxes: content.benefits.items.map((item) => ({
            icon: renderBenefitIcon(item.iconName),
            title: item.title,
            description: item.description,
          })),
        }}
        id="benefits"
      />
      <KeyBenefitsGridBlock
        variant="themeWhyChoose"
        theme="yellow"
        content={{
          eyebrow: content.services.eyebrow,
          heading: content.services.heading,
          description: content.services.description,
          boxes: content.services.items.map((item) => ({
            icon: renderServiceIcon ? renderServiceIcon(item.iconName) : null,
            title: item.title,
            description: item.description,
          })),
        }}
        id="services"
      />
      <WhyChooseUsBlock
        variant="evaluation"
        content={content.whyChoose}
        id="why-choose"
      />
      <PortfolioSnippetsBlock
        cardVariant="ourWorkRefresh"
        columns={4}
        content={{
          heading: content.portfolio.heading,
          description: content.portfolio.description,
          items: content.portfolio.items,
          ctaLabel: content.portfolio.ctaLabel,
          ctaHref: content.portfolio.ctaHref,
        }}
        eyebrow={content.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
      />
      <FaqSectionBlock
        heading={content.faqsHeading}
        idPrefix={faqIdPrefix}
        items={content.faqs}
      />
      {children}
    </div>
  );
}

// ── 5. Shopify Migration Landing Template ──
export type ShopifyMigrationLandingTemplateProps = {
  hero: ServiceHeroVideoContent;
  brands: {
    heading: string;
    items: readonly ClientLogoSliderItem[];
    slug: string;
  };
  whyMigrate: {
    id?: string;
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    boxes: readonly {
      icon: ReactNode;
      title: string;
      description: string;
    }[];
    variant?: "yellow" | "transparent" | "green";
  };
  secondaryServices?: {
    id?: string;
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    boxes: readonly {
      icon: ReactNode;
      title: string;
      description: string;
    }[];
    variant?: "yellow" | "transparent" | "green";
  };
  process: MigrationProcessContent;
  whyChoose?: EvaluationFrameworkContent;
  whyChooseId?: string;
  testimonials: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items?: readonly HappyClientTestimonialItem[];
  };
  faq: {
    idPrefix: string;
    items: readonly FaqAccordionItem[];
    heading?: string;
  };
  children?: ReactNode;
};

export function ShopifyMigrationLandingTemplate({
  hero,
  brands,
  whyMigrate,
  secondaryServices,
  process,
  whyChoose,
  whyChooseId = "why-choose-dynamic-dreamz",
  testimonials,
  faq,
  children,
}: ShopifyMigrationLandingTemplateProps) {
  return (
    <div>
      <ServiceHeroBlock variant="video" content={hero} />
      <ClientLogoMarqueeBlock
        content={{ slug: brands.slug }}
        heading={brands.heading}
        items={brands.items}
      />
      <KeyBenefitsGridBlock
        variant="themeWhyChoose"
        theme={whyMigrate.variant ?? "green"}
        content={{
          eyebrow: whyMigrate.eyebrow,
          heading: whyMigrate.heading,
          description: whyMigrate.description,
          boxes: whyMigrate.boxes,
        }}
        id={whyMigrate.id}
      />
      {secondaryServices ? (
        <KeyBenefitsGridBlock
          variant="themeWhyChoose"
          theme={secondaryServices.variant ?? "yellow"}
          content={{
            eyebrow: secondaryServices.eyebrow,
            heading: secondaryServices.heading,
            description: secondaryServices.description,
            boxes: secondaryServices.boxes,
          }}
          id={secondaryServices.id}
        />
      ) : null}
      <ProcessWorkflowBlock
        variant="migration"
        content={process}
        id="migration-process"
      />
      {whyChoose ? (
        <WhyChooseUsBlock
          variant="evaluation"
          content={whyChoose}
          id={whyChooseId}
        />
      ) : null}
      {testimonials.items?.length ? (
        <TestimonialsSliderBlock
          description={testimonials.description}
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          items={testimonials.items}
          variant="client-stories"
        />
      ) : null}
      <FaqSectionBlock
        heading={faq.heading}
        idPrefix={faq.idPrefix}
        items={faq.items}
      />
      {children}
    </div>
  );
}

// ── 6. Industry Landing Template ──
export type IndustryLandingTemplateProps = {
  hero: ServiceHeroVideoContent;
  brands: {
    config: {
      slug: string;
      brands?: { ariaLabel?: string };
      ariaLabel?: string;
    };
    heading: string;
    items: readonly ClientLogoSliderItem[];
  };
  caseStudies?: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items: readonly CaseStudyPreviewItem[];
  };
  challenges: ThemeCustomizationServicesContent;
  solutions: ThemeCustomizationServicesContent;
  process?: MigrationProcessContent;
  tools?: {
    eyebrow?: string;
    heading: string;
    description?: string;
    tools: readonly any[];
  };
  technologies?: any;
  customDev?: IndustryCustomDevelopmentContent;
  portfolio: {
    heading: string | readonly string[];
    description?: string | readonly string[];
    eyebrow?: string;
    items: readonly PortfolioShowcaseItem[];
    ctaLabel?: string;
    ctaHref?: string;
  };
  whyChoose: WhyChooseMigrationContent;
  testimonials?: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items?: readonly HappyClientTestimonialItem[];
  };
  faq: {
    idPrefix: string;
    items: readonly FaqAccordionItem[];
    heading?: string | readonly string[];
    eyebrow?: string;
    description?: string | readonly string[];
    sectionId?: string;
  };
  children?: ReactNode;
  [key: string]: any;
};

export function IndustryLandingTemplate({
  hero,
  brands,
  caseStudies,
  challenges,
  solutions,
  process,
  tools,
  customDev,
  portfolio,
  whyChoose,
  testimonials,
  faq,
  children,
}: IndustryLandingTemplateProps) {
  return (
    <div>
      <ServiceHeroBlock variant="video" content={hero} />
      <ClientLogoMarqueeBlock
        content={{ slug: brands.config.slug }}
        heading={brands.heading}
        items={brands.items}
      />
      {caseStudies ? (
        <CaseStudySpotlightBlock
          description={caseStudies.description}
          eyebrow={caseStudies.eyebrow}
          heading={caseStudies.heading}
          items={caseStudies.items}
        />
      ) : null}
      <KeyBenefitsGridBlock
        variant="themeWhyChoose"
        theme="yellow"
        content={challenges}
        id="challenges"
      />
      <KeyBenefitsGridBlock
        variant="themeWhyChoose"
        theme="green"
        content={solutions}
        id="solutions"
      />
      <ProcessWorkflowBlock
        variant="migration"
        content={process}
        id="process"
      />
      {tools ? (
        <TechStackShowcaseBlock
          eyebrow={tools.eyebrow}
          heading={tools.heading}
          description={tools.description}
          tools={tools.tools}
          id="tools"
        />
      ) : null}
      <WhyChooseUsBlock
        variant="twoCol"
        content={customDev}
        id="custom-dev"
      />
      <PortfolioSnippetsBlock
        columns={3}
        content={portfolio}
        eyebrow={portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="portfolio"
      />
      <WhyChooseUsBlock
        content={whyChoose}
        id="why-choose"
      />
      {testimonials?.items?.length ? (
        <TestimonialsSliderBlock
          description={testimonials.description}
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          items={testimonials.items}
          variant="client-stories"
        />
      ) : null}
      <FaqSectionBlock
        heading={faq.heading}
        idPrefix={faq.idPrefix}
        items={faq.items}
      />
      {children}
    </div>
  );
}

// ── 7. Mobile App Landing Template ──
export type MobileAppLandingTemplateProps = {
  hero: MobileAppHeroContent;
  brands: {
    heading: string;
    items: readonly ClientLogoSliderItem[];
    slug: string;
    ariaLabel?: string;
  };
  workflowDelivery: AiEmpoweredDeliveryContent;
  whatWeBuild: ThemeCustomizationServicesContent;
  lifecycleServices: ThemeCustomizationServicesContent;
  techStack: AiEmpoweredDeliveryContent;
  process: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items: readonly NumberedGridItem[];
    variant?: "white" | "pista";
  };
  portfolio: MobileAppWorkContent;
  pricing: PricingEngagementContent;
  whyChoose: WhyChooseMigrationContent;
  testimonials: {
    eyebrow?: string;
    heading: string;
    description?: string | readonly string[];
    items?: readonly HappyClientTestimonialItem[];
  };
  faq: {
    idPrefix: string;
    items: readonly FaqAccordionItem[];
    heading?: string | readonly string[];
    eyebrow?: string;
    description?: string | readonly string[];
    sectionId?: string;
  };
  children?: ReactNode;
  [key: string]: any;
};

export function MobileAppLandingTemplate({
  hero,
  brands,
  workflowDelivery,
  whatWeBuild,
  lifecycleServices,
  techStack,
  process,
  portfolio,
  pricing,
  whyChoose,
  testimonials,
  faq,
  children,
}: MobileAppLandingTemplateProps) {
  return (
    <div>
      <MobileAppInteractiveShowcaseBlock content={hero} />
      <ClientLogoMarqueeBlock
        content={{ slug: brands.slug }}
        heading={brands.heading}
        items={brands.items}
      />
      <PerformanceBenchmarksBlock
        content={workflowDelivery}
        id="workflow-delivery"
      />
      <KeyBenefitsGridBlock
        variant="themeWhyChoose"
        theme="yellow"
        content={whatWeBuild}
        id="what-we-build"
      />
      <KeyBenefitsGridBlock
        variant="themeWhyChoose"
        theme="green"
        content={lifecycleServices}
        id="lifecycle-services"
      />
      <PerformanceBenchmarksBlock
        content={techStack}
        id="tech-stack"
      />
      <ProcessWorkflowBlock
        variant="numberedGrid"
        content={process}
        id="process"
      />
      <PortfolioSnippetsBlock
        content={portfolio}
        id="portfolio"
      />
      <EngagementModelsBlock
        content={pricing}
        id="pricing"
      />
      <WhyChooseUsBlock
        content={whyChoose}
        id="why-choose"
      />
      {testimonials.items?.length ? (
        <TestimonialsSliderBlock
          description={testimonials.description}
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          items={testimonials.items}
          variant="client-stories"
        />
      ) : null}
      <FaqSectionBlock
        heading={faq.heading}
        idPrefix={faq.idPrefix}
        items={faq.items}
        eyebrow={faq.eyebrow}
        description={faq.description}
        sectionId={faq.sectionId}
      />
      {children}
    </div>
  );
}

// ── Shared Helper for TechStackShowcaseBlock ──
function TechStackShowcaseBlock({
  eyebrow,
  heading,
  description,
  tools,
  id,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  tools: readonly any[];
  id?: string;
}) {
  return (
    <section className="bg-white py-20 max-[991px]:py-[50px]" id={id}>
      <div className="mx-auto max-w-[1360px] px-10 max-[767px]:px-4">
        <div data-aos="fade-up" className="mb-10 max-w-[700px]">
          {eyebrow && (
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-brand-red" />
              <span className="text-xs font-bold tracking-widest text-[#535353] uppercase">{eyebrow}</span>
            </div>
          )}
          <h2 className="text-[35px] leading-[1.38] font-medium text-ink max-[992px]:text-[30px] max-[767px]:text-2xl">{heading}</h2>
          {description && <p className="mt-4 text-base leading-7 font-medium text-muted">{description}</p>}
        </div>
        <div className="grid grid-cols-4 gap-4 max-[1199px]:grid-cols-3 max-[991px]:grid-cols-2 max-[575px]:grid-cols-1">
          {tools.map((tool: any, idx: number) => (
            <div key={tool.name || idx} className="rounded-[15px] border border-black/10 p-5 text-center">
              <span className="text-sm font-bold text-ink">{tool.name || tool.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
