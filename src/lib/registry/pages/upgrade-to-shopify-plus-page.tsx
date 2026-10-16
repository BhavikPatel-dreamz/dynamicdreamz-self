import { BrandPartnersSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { CityPageCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { CityWhyChooseBoxesSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { ShopifyTeamBehindItSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { WhiteLabelCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import {
  upgradeShopifyPlusBrands,
  upgradeShopifyPlusCounters,
  upgradeShopifyPlusExclusiveTools,
  upgradeShopifyPlusFaqs,
  upgradeShopifyPlusHero,
  upgradeShopifyPlusPortfolio,
  upgradeShopifyPlusProcess,
  upgradeShopifyPlusWhyChoose,
  upgradeShopifyPlusWhyUpgrade,
} from "@/content/upgrade-to-shopify-plus";

export function UpgradeToShopifyPlusPage() {
  return (
    <div>
      <ServiceHeroVideoSection
        content={upgradeShopifyPlusHero}
        titleAccentTag="span"
        titleAccentClassName="text-[#ad5151] font-normal not-italic"
      />
      <WhiteLabelCounterSection counters={upgradeShopifyPlusCounters} />
      <BrandPartnersSection
        description={upgradeShopifyPlusBrands.description}
        heading={upgradeShopifyPlusBrands.heading}
        items={upgradeShopifyPlusBrands.items}
      />
      <CityPageCounterSection
        content={upgradeShopifyPlusWhyUpgrade}
        eyebrowVariant="dash"
      />
      <ShopifyTeamBehindItSection
        content={upgradeShopifyPlusExclusiveTools}
        hideCtas={true}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={upgradeShopifyPlusPortfolio}
        headerLayout="split"
        hideCta={true}
        sectionId="our_work"
        variant="liveGrid"
      />
      <OurDevelopmentProcessSection content={upgradeShopifyPlusProcess} />
      <CityWhyChooseBoxesSection
        columns={3}
        content={upgradeShopifyPlusWhyChoose}
        eyebrowVariant="dash"
        theme="white"
      />
      <SplitFaqSection
        idPrefix="upgrade-shopify-plus-faq"
        items={upgradeShopifyPlusFaqs}
      />
    </div>
  );
}
