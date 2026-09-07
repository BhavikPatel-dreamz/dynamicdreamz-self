import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { MagentoWebHeroSection } from "@/components/sections/magento-web-hero-section";
import { MagentoWebTabs } from "@/components/sections/magento-web-tabs";
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
      <FaqSection
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
