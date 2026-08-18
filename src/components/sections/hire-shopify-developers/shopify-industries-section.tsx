import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { hireShopifyIndustries } from "@/content/hire-shopify-developers";

const content = {
  heading: "Industries that we have Served",
  description: "Dynamic Dreamz has massive experience across multiple industries,<br> helping businesses like yours succeed online. Our expertise spans sectors such as:",
  items: hireShopifyIndustries,
} as const;

export function ShopifyIndustriesSection() {
  return <div id="shopify-industries"><IndustriesServedSection alignDesktopToContentEdge content={content} /></div>;
}
