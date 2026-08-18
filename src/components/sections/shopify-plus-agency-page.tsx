import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ShopifyPlusAgencyHeroSection } from "@/components/sections/shopify-plus-agency/shopify-plus-agency-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { AgencyServicesSection } from "@/components/sections/shopify-plus-agency/agency-services-section";
import { CaseStudyCardsSection } from "@/components/sections/shopify-plus-agency/case-study-cards-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { PortfolioSection } from "@/components/sections/shopify-plus-agency/portfolio-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { FaqSection } from "@/components/sections/shopify-plus-agency/faq-section";

const brandSection = {
  slug: "shopify-plus-agency",
  brands: {
    ariaLabel: "Brands that trust Dynamic Dreamz",
  },
} as const;

export function ShopifyPlusAgencyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ShopifyPlusAgencyHeroSection />
      <IndustryBrandsSection content={brandSection} />
      <TextBoxSection
        className="pt-20 pb-0"
        heading="Why Choose Dynamic Dreamz as Your Shopify Plus Agency"
        text="With over 19 years of experience and 5000+ completed projects, we have helped brands like Gymshark, SKIMS, and Ba&sh build stores that match their business goals. As a Shopify Plus agency, we offer you expertise, support, and a successful partnership. We have delivered 4500+ Shopify stores, generated $1B+ in client revenue, and earned the trust of 1100+ happy clients. From the beginning, we ensure a smooth workflow that helps you get the maximum output from your Shopify Plus store."
      />
      <AgencyServicesSection />
      <CaseStudyCardsSection />
      <TextBoxSection
        className="pt-0 pb-20"
        heading="How to Choose the Right Shopify Plus Agency"
        text="Whether you're a growing ecommerce startup or a big enterprise, finding the right Shopify Plus agency can make or break your online store. A dedicated Shopify Plus agency can offer you custom themes, unique apps, and dedicated support. But what makes a Shopify Plus agency ideal? Make sure they have a proven record, an in-depth understanding of Shopify Plus features, and a solution-driven approach. Dynamic Dreamz has 19+ years of experience in ecommerce development and design. Our certified Shopify experts understand your needs and build tailored solutions that help you scale."
      />
      <PricingTableSection />
      <IndustriesServedSection />
      <PortfolioSection />
      <HappyClientSection />
      <FaqSection />
    </div>
  );
}