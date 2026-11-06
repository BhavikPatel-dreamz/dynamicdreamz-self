import type { CollectionConfig } from "payload";
import { ContactHeroBlock } from "@/payload/blocks/ContactHeroBlock";
import { ContactFormBlock } from "@/payload/blocks/ContactFormBlock";
import { FormBlock } from "@/payload/blocks/FormBlock";
import { ContactOfficesBlock } from "@/payload/blocks/ContactOfficesBlock";
import { ContactDetailsBlock } from "@/payload/blocks/ContactDetailsBlock";
import { RequestQuoteHeroBlock } from "@/payload/blocks/RequestQuoteHeroBlock";
import { CareerApplyBlock } from "@/payload/blocks/CareerApplyBlock";
import { ServiceHeroBlock } from "@/payload/blocks/ServiceHeroBlock";
import { BrandPartnersBlock } from "@/payload/blocks/BrandPartnersBlock";
import { FaqAccordionBlock } from "@/payload/blocks/FaqAccordionBlock";
import { CtaBannerBlock } from "@/payload/blocks/CtaBannerBlock";
import { TestimonialsCarouselBlock } from "@/payload/blocks/TestimonialsCarouselBlock";
import { ServicesGridBlock } from "@/payload/blocks/ServicesGridBlock";
import { PortfolioShowcaseBlock } from "@/payload/blocks/PortfolioShowcaseBlock";
import { ProofStatsBlock } from "@/payload/blocks/ProofStatsBlock";
import { ProcessTimelineBlock } from "@/payload/blocks/ProcessTimelineBlock";
import { PricingTableBlock } from "@/payload/blocks/PricingTableBlock";
import { AboutTimelineBlock } from "@/payload/blocks/AboutTimelineBlock";
import { AboutFoundersBlock } from "@/payload/blocks/AboutFoundersBlock";
import { LifeGalleryBlock } from "@/payload/blocks/LifeGalleryBlock";
import { OurWorkProjectsBlock } from "@/payload/blocks/OurWorkProjectsBlock";
import { HoursComparisonBlock } from "@/payload/blocks/HoursComparisonBlock";
import { CroBarriersBlock } from "@/payload/blocks/CroBarriersBlock";
import { EvaluationFrameworkBlock } from "@/payload/blocks/EvaluationFrameworkBlock";
import { WhiteLabelDeliveryBlock } from "@/payload/blocks/WhiteLabelDeliveryBlock";
import { B2bArchitectureBlock } from "@/payload/blocks/B2bArchitectureBlock";
import { ResourcesHubBlock } from "@/payload/blocks/ResourcesHubBlock";
import { previewDraftPath } from "@/lib/preview-url";
import { safeRevalidatePath } from "@/lib/revalidate";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data }) => {
        const rawSlug = typeof data?.slug === "string" ? data.slug.trim() : "";
        const slug = rawSlug.replace(/^\/+|\/+$/g, "");
        const path = !slug || slug === "home" || slug === "index" ? "/" : `/${slug}`;
        return previewDraftPath(path, slug || "home");
      },
    },
    preview: (doc) => {
      const rawSlug = typeof doc?.slug === "string" ? doc.slug.trim() : "";
      const slug = rawSlug.replace(/^\/+|\/+$/g, "");
      const path = !slug || slug === "home" || slug === "index" ? "/" : `/${slug}`;
      return previewDraftPath(path, slug || "home");
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
        ServiceHeroBlock,
        BrandPartnersBlock,
        FaqAccordionBlock,
        CtaBannerBlock,
        TestimonialsCarouselBlock,
        ServicesGridBlock,
        PortfolioShowcaseBlock,
        ProofStatsBlock,
        ProcessTimelineBlock,
        PricingTableBlock,
        ContactHeroBlock,
        ContactFormBlock,
        FormBlock,
        ContactOfficesBlock,
        ContactDetailsBlock,
        RequestQuoteHeroBlock,
        CareerApplyBlock,
        AboutTimelineBlock,
        AboutFoundersBlock,
        LifeGalleryBlock,
        OurWorkProjectsBlock,
        HoursComparisonBlock,
        CroBarriersBlock,
        EvaluationFrameworkBlock,
        WhiteLabelDeliveryBlock,
        B2bArchitectureBlock,
        ResourcesHubBlock,
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
