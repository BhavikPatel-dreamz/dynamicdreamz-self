import { ConclusionSection } from "@/components/sections/conclusion-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationBenefitsGridSection } from "@/components/sections/migration-benefits-grid-section";
import { MigrationBulletFeaturesSection } from "@/components/sections/migration-bullet-features-section";
import { MigrationChecklistSection } from "@/components/sections/migration-checklist-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { migratingThemeToOnlineStore20Content } from "@/content/migrating-a-theme-to-online-store-2-0";

export function MigratingThemeToOnlineStore20Page() {
  const brandsContent = {
    heading: migratingThemeToOnlineStore20Content.brands.title,
    ariaLabel: migratingThemeToOnlineStore20Content.brands.ariaLabel,
    slug: "migrating-a-theme-to-online-store-2-0",
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec migrate-shopify-store relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={migratingThemeToOnlineStore20Content.hero}
        variant="split"
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={migratingThemeToOnlineStore20Content.brands.title}
        items={migratingThemeToOnlineStore20Content.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[992px]:py-[50px]"
        heading={migratingThemeToOnlineStore20Content.intro.heading}
        text={migratingThemeToOnlineStore20Content.intro.text}
      />
      <MigrationBulletFeaturesSection
        content={migratingThemeToOnlineStore20Content.whyUpgrade}
      />
      <MigrationChecklistSection
        content={migratingThemeToOnlineStore20Content.migrationService}
      />
      <MigrationBenefitsGridSection
        content={migratingThemeToOnlineStore20Content.benefits}
      />
      <ConclusionSection
        content={migratingThemeToOnlineStore20Content.conclusion}
      />
    </div>
  );
}
