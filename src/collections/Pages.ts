import type { CollectionConfig } from "payload";
import { HeroBlock } from "@/blocks/HeroBlock";
import { ProofCountersBlock } from "@/blocks/ProofCountersBlock";
import { FeaturesGridBlock } from "@/blocks/FeaturesGridBlock";
import { ProcessTimelineBlock } from "@/blocks/ProcessTimelineBlock";
import { FaqAccordionBlock } from "@/blocks/FaqAccordionBlock";
import { HappyClientsBlock } from "@/blocks/HappyClientsBlock";
import { CaseStudiesBlock } from "@/blocks/CaseStudiesBlock";
import { CtaBannerBlock } from "@/blocks/CtaBannerBlock";
import { BrandPartnersBlock } from "@/blocks/BrandPartnersBlock";
import { PricingModelsBlock } from "@/blocks/PricingModelsBlock";
import { TechnologiesGridBlock } from "@/blocks/TechnologiesGridBlock";
import { TwoColImageWithTextBlock } from "@/blocks/TwoColImageWithTextBlock";
import { IndustriesGridBlock } from "@/blocks/IndustriesGridBlock";
import { LegalContentBlock } from "@/blocks/LegalContentBlock";
import { SiteMapDirectoryBlock } from "@/blocks/SiteMapDirectoryBlock";
import { RichTextBlock } from "@/blocks/RichTextBlock";
import { ShopifyPlusAgencyBlock } from "@/blocks/ShopifyPlusAgencyBlock";
import { WhiteLabelPartnerBlock } from "@/blocks/WhiteLabelPartnerBlock";
import { CommerceSolutionsBlock } from "@/blocks/CommerceSolutionsBlock";
import { SelectedWorkBlock } from "@/blocks/SelectedWorkBlock";
import { TestimonialsCarouselBlock } from "@/blocks/TestimonialsCarouselBlock";
import { IntegrationsPartnersBlock } from "@/blocks/IntegrationsPartnersBlock";
import { LatestInsightsBlock } from "@/blocks/LatestInsightsBlock";
import { AboutHeroBlock } from "@/blocks/AboutHeroBlock";
import { AboutStoryBlock } from "@/blocks/AboutStoryBlock";
import { AboutTimelineBlock } from "@/blocks/AboutTimelineBlock";
import { AboutFoundersBlock } from "@/blocks/AboutFoundersBlock";
import { AboutTeamBlock } from "@/blocks/AboutTeamBlock";
import { AboutValuesBlock } from "@/blocks/AboutValuesBlock";
import { OurWorkHeroBlock } from "@/blocks/OurWorkHeroBlock";
import { OurWorkProjectsBlock } from "@/blocks/OurWorkProjectsBlock";
import { OurWorkCaseStudiesBlock } from "@/blocks/OurWorkCaseStudiesBlock";
import { ContactHeroBlock } from "@/blocks/ContactHeroBlock";
import { ContactFormBlock } from "@/blocks/ContactFormBlock";
import { ContactOfficesBlock } from "@/blocks/ContactOfficesBlock";
import { ContactDetailsBlock } from "@/blocks/ContactDetailsBlock";
import { DiscoveryCallBlock } from "@/blocks/DiscoveryCallBlock";
import { RequestQuoteHeroBlock } from "@/blocks/RequestQuoteHeroBlock";
import { CareerHeroBlock } from "@/blocks/CareerHeroBlock";
import { CareerOpportunitiesBlock } from "@/blocks/CareerOpportunitiesBlock";
import { CareerPerksBlock } from "@/blocks/CareerPerksBlock";
import { CareerApplyBlock } from "@/blocks/CareerApplyBlock";
import { safeRevalidatePath } from "@/lib/revalidate";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
        return `${baseUrl}/api/draft?secret=${process.env.PAYLOAD_SECRET || ""}&slug=${data.slug || ""}`;
      },
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc, previousDoc }) => {
        if (doc?.slug) {
          const routePath =
            doc.slug === "home" || doc.slug === "index" ? "/" : `/${doc.slug}`;
          safeRevalidatePath(routePath);
        }
        if (previousDoc?.slug && previousDoc.slug !== doc?.slug) {
          const prevRoutePath =
            previousDoc.slug === "home" || previousDoc.slug === "index"
              ? "/"
              : `/${previousDoc.slug}`;
          safeRevalidatePath(prevRoutePath);
        }
      },
    ],
    afterDelete: [
      ({ doc }) => {
        if (doc?.slug) {
          const routePath =
            doc.slug === "home" || doc.slug === "index" ? "/" : `/${doc.slug}`;
          safeRevalidatePath(routePath);
        }
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "sections",
      type: "blocks",
      label: "Page Layout Sections (Drag & Drop)",
      blocks: [
        HeroBlock,
        ProofCountersBlock,
        FeaturesGridBlock,
        ProcessTimelineBlock,
        FaqAccordionBlock,
        HappyClientsBlock,
        CaseStudiesBlock,
        CtaBannerBlock,
        BrandPartnersBlock,
        PricingModelsBlock,
        TechnologiesGridBlock,
        TwoColImageWithTextBlock,
        IndustriesGridBlock,
        LegalContentBlock,
        SiteMapDirectoryBlock,
        RichTextBlock,
        ShopifyPlusAgencyBlock,
        WhiteLabelPartnerBlock,
        CommerceSolutionsBlock,
        SelectedWorkBlock,
        TestimonialsCarouselBlock,
        IntegrationsPartnersBlock,
        LatestInsightsBlock,
        AboutHeroBlock,
        AboutStoryBlock,
        AboutTimelineBlock,
        AboutFoundersBlock,
        AboutTeamBlock,
        AboutValuesBlock,
        OurWorkHeroBlock,
        OurWorkProjectsBlock,
        OurWorkCaseStudiesBlock,
        ContactHeroBlock,
        ContactFormBlock,
        ContactOfficesBlock,
        ContactDetailsBlock,
        DiscoveryCallBlock,
        RequestQuoteHeroBlock,
        CareerHeroBlock,
        CareerOpportunitiesBlock,
        CareerPerksBlock,
        CareerApplyBlock,
      ],
    },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "metaTitle", type: "text" },
        { name: "metaDescription", type: "textarea" },
        { name: "canonicalUrl", type: "text" },
        { name: "metaImage", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
