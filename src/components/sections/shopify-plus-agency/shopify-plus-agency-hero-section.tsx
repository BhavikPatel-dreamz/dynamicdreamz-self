import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { shopifyPlusAgencyHero } from "@/content/shopify-plus-agency";

export function ShopifyPlusAgencyHeroSection() {
  return (
    <ServiceHeroSection
      content={shopifyPlusAgencyHero}
      className="inner-hero-sec shopify-plus-experts relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
    />
  );
}