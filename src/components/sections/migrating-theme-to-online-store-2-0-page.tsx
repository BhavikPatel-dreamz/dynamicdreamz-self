import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OnlineStore20Icon } from "@/components/sections/migrating-theme-to-online-store-2-0-icons";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { migratingThemeToOnlineStore20Content } from "@/content/migrating-a-theme-to-online-store-2-0";

export function MigratingThemeToOnlineStore20Page() {
  const brandsContent = {
    slug: "migrating-a-theme-to-online-store-2-0",
    brands: {
      ariaLabel: migratingThemeToOnlineStore20Content.brands.ariaLabel,
    },
  };

  const whyUpgradeContent = {
    eyebrow: migratingThemeToOnlineStore20Content.whyUpgrade.eyebrow,
    heading: migratingThemeToOnlineStore20Content.whyUpgrade.heading,
    description: migratingThemeToOnlineStore20Content.whyUpgrade.description,
    boxes: migratingThemeToOnlineStore20Content.whyUpgrade.items.map((item) => ({
      icon: <OnlineStore20Icon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const migrationServiceContent = {
    eyebrow: migratingThemeToOnlineStore20Content.migrationService.eyebrow,
    heading: migratingThemeToOnlineStore20Content.migrationService.heading,
    description: migratingThemeToOnlineStore20Content.migrationService.description,
    boxes: migratingThemeToOnlineStore20Content.migrationService.items.map((item) => ({
      icon: <OnlineStore20Icon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: migratingThemeToOnlineStore20Content.benefits.eyebrow,
    heading: migratingThemeToOnlineStore20Content.benefits.heading,
    description: migratingThemeToOnlineStore20Content.benefits.description,
    boxes: migratingThemeToOnlineStore20Content.benefits.items.map((item) => ({
      icon: <OnlineStore20Icon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ServiceHeroVideoSection
        content={migratingThemeToOnlineStore20Content.hero}
      />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={migratingThemeToOnlineStore20Content.brands.heading}
        items={migratingThemeToOnlineStore20Content.brands.items}
      />

      {/* 3. Why Upgrade to Shopify 2.0? */}
      <ThemeCustomizationServicesSection
        content={whyUpgradeContent}
        variant="yellow"
      />

      {/* 4. Our Shopify Migration Service */}
      <ThemeCustomizationServicesSection
        content={migrationServiceContent}
        variant="transparent"
      />

      {/* 5. Benefits of Our Migration Service */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz for Migration Services? */}
      <EvaluationFrameworkSection
        content={migratingThemeToOnlineStore20Content.whyChoose}
        id="why-choose-dynamic-dreamz"
      />

      {/* 7. Client Stories / Testimonials */}
      <HappyClientSection
        description={migratingThemeToOnlineStore20Content.testimonials.description}
        eyebrow={migratingThemeToOnlineStore20Content.testimonials.eyebrow}
        heading={migratingThemeToOnlineStore20Content.testimonials.heading}
      />

      {/* 8. FAQs */}
      <SplitFaqSection
        answerClassName="!text-sm !font-medium !leading-6 !text-[#535353]"
        className="faq-sec"
        heading={migratingThemeToOnlineStore20Content.faqs.heading}
        idPrefix="theme-20-faq"
        items={migratingThemeToOnlineStore20Content.faqs.items}
      />
    </div>
  );
}
