import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ShopifyTeamBehindItSection } from "@/components/sections/white-label-shopify/shopify-team-behind-it-section";
import { WhiteLabelCounterSection } from "@/components/sections/white-label-shopify/white-label-counter-section";
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
    <div className="font-sans leading-[30.4px]">
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
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={upgradeShopifyPlusPortfolio}
        headerLayout="split"
        hideCta={true}
        sectionId="our_work"
        variant="liveGrid"
      />
      <OurDevelopmentProcessSection content={upgradeShopifyPlusProcess} />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic"
        columns={3}
        content={upgradeShopifyPlusWhyChoose}
        eyebrowVariant="dash"
      />
      <SplitFaqSection
        idPrefix="upgrade-shopify-plus-faq"
        items={upgradeShopifyPlusFaqs}
      />
    </div>
  );
}
