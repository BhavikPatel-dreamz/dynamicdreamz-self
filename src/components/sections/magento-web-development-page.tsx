import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { MagentoWebHeroSection } from "@/components/sections/magento-web-hero-section";
import { MagentoWebTabs } from "@/components/sections/magento-web-tabs";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  magentoWebContent,
  magentoWebFaqs,
  magentoWebHero,
  magentoWebRequestBanner,
  magentoWebTabsNav,
} from "@/content/magento-web-development";

export function MagentoWebDevelopmentPage() {
  return (
    <>
      <MagentoWebHeroSection content={magentoWebHero} />
      <MagentoWebTabs content={magentoWebContent} navItems={magentoWebTabsNav} />
      <SplitFaqSection
        className="faq-sec pb-20 max-[992px]:pb-12.5"
        idPrefix="magento-web-faq"
        items={magentoWebFaqs}
      />
      <CtaBannerSection
        ctaHref={magentoWebRequestBanner.ctaHref}
        ctaLabel={magentoWebRequestBanner.ctaLabel}
        heading={magentoWebRequestBanner.heading}
      />
    </>
  );
}
