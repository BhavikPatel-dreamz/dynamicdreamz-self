import { ShopifyThemeCustomizationTemplate } from "@/components/sections/shopify-theme-customization-template";
import { pageMetadata } from "@/data/seo";
import type { ServicePageEntry } from "@/lib/registry/types";

import { atelierThemeCustomizationContent } from "@/content/atelier-theme-customization";
import { createAtelierThemeCustomizationPageSchema } from "@/lib/schema";
import { beYoursThemeCustomizationContent } from "@/content/be-yours-theme-customization";
import { createBeYoursThemeCustomizationPageSchema } from "@/lib/schema";
import { broadcastThemeCustomizationContent } from "@/content/broadcast-theme-customization";
import { createBroadcastThemeCustomizationPageSchema } from "@/lib/schema";
import { colorblockThemeCustomizationContent } from "@/content/colorblock-theme-customization";
import { createColorblockThemeCustomizationPageSchema } from "@/lib/schema";
import { craftThemeCustomizationContent } from "@/content/craft-theme-customization";
import { createCraftThemeCustomizationPageSchema } from "@/lib/schema";
import { dawnThemeCustomizationContent } from "@/content/dawn-theme-customization";
import { createDawnThemeCustomizationPageSchema } from "@/lib/schema";
import { dwellThemeCustomizationContent } from "@/content/dwell-theme-customization";
import { createDwellThemeCustomizationPageSchema } from "@/lib/schema";
import { expanseThemeCustomizationContent } from "@/content/expanse-theme-customization";
import { createExpanseThemeCustomizationPageSchema } from "@/lib/schema";
import { fabricThemeCustomizationContent } from "@/content/fabric-theme-customization";
import { createFabricThemeCustomizationPageSchema } from "@/lib/schema";
import { heritageThemeCustomizationContent } from "@/content/heritage-theme-customization";
import { createHeritageThemeCustomizationPageSchema } from "@/lib/schema";
import { horizonThemeCustomizationContent } from "@/content/horizon-theme-customization";
import { createHorizonThemeCustomizationPageSchema } from "@/lib/schema";
import { impactThemeCustomizationContent } from "@/content/impact-theme-customization";
import { createImpactThemeCustomizationPageSchema } from "@/lib/schema";
import { impulseThemeCustomizationContent } from "@/content/impulse-theme-customization";
import { createImpulseThemeCustomizationPageSchema } from "@/lib/schema";
import { originThemeCustomizationContent } from "@/content/origin-theme-customization";
import { createOriginThemeCustomizationPageSchema } from "@/lib/schema";
import { pipelineThemeCustomizationContent } from "@/content/pipeline-theme-customization";
import { createPipelineThemeCustomizationPageSchema } from "@/lib/schema";
import { pitchThemeCustomizationContent } from "@/content/pitch-theme-customization";
import { createPitchThemeCustomizationPageSchema } from "@/lib/schema";
import { prestigeThemeCustomizationContent } from "@/content/prestige-theme-customization";
import { createPrestigeThemeCustomizationPageSchema } from "@/lib/schema";
import { publisherThemeCustomizationContent } from "@/content/publisher-theme-customization";
import { createPublisherThemeCustomizationPageSchema } from "@/lib/schema";
import { refreshThemeCustomizationContent } from "@/content/refresh-theme-customization";
import { createRefreshThemeCustomizationPageSchema } from "@/lib/schema";
import { ritualThemeCustomizationContent } from "@/content/ritual-theme-customization";
import { createRitualThemeCustomizationPageSchema } from "@/lib/schema";
import { savorThemeCustomizationContent } from "@/content/savor-theme-customization";
import { createSavorThemeCustomizationPageSchema } from "@/lib/schema";
import { senseThemeCustomizationContent } from "@/content/sense-theme-customization";
import { createSenseThemeCustomizationPageSchema } from "@/lib/schema";
import { spotlightThemeCustomizationContent } from "@/content/spotlight-theme-customization";
import { createSpotlightThemeCustomizationPageSchema } from "@/lib/schema";
import { startupThemeCustomizationContent } from "@/content/startup-theme-customization";
import { createStartupThemeCustomizationPageSchema } from "@/lib/schema";
import { stilettoThemeCustomizationContent } from "@/content/stiletto-theme-customization";
import { createStilettoThemeCustomizationPageSchema } from "@/lib/schema";
import { studioThemeCustomizationContent } from "@/content/studio-theme-customization";
import { createStudioThemeCustomizationPageSchema } from "@/lib/schema";
import { tinkerThemeCustomizationContent } from "@/content/tinker-theme-customization";
import { createTinkerThemeCustomizationPageSchema } from "@/lib/schema";
import { tradeThemeCustomizationContent } from "@/content/trade-theme-customization";
import { createTradeThemeCustomizationPageSchema } from "@/lib/schema";
import { vesselThemeCustomizationContent } from "@/content/vessel-theme-customization";
import { createVesselThemeCustomizationPageSchema } from "@/lib/schema";
import { visionThemeCustomizationContent } from "@/content/vision-theme-customization";
import { createVisionThemeCustomizationPageSchema } from "@/lib/schema";
import { warehouseThemeCustomizationContent } from "@/content/warehouse-theme-customization";
import { createWarehouseThemeCustomizationPageSchema } from "@/lib/schema";
import { woodstockThemeCustomizationContent } from "@/content/woodstock-theme-customization";
import { createWoodstockThemeCustomizationPageSchema } from "@/lib/schema";

export const shopifyThemesRegistry: readonly ServicePageEntry[] = [
  {
    slug: "atelier-theme-customization",
    metadata: pageMetadata.atelierThemeCustomization,
    getSchema: createAtelierThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={atelierThemeCustomizationContent}
        faqIdPrefix="atelier-faq"
        slug="atelier-theme-customization"
        brandsDensity="compact"
      />
    ),
  },
  {
    slug: "be-yours-theme-customization",
    metadata: pageMetadata.beYoursThemeCustomization,
    getSchema: createBeYoursThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={beYoursThemeCustomizationContent}
        faqIdPrefix="beyours-faq"
        slug="be-yours-theme-customization"
      />
    ),
  },
  {
    slug: "broadcast-theme-customization",
    metadata: pageMetadata.broadcastThemeCustomization,
    getSchema: createBroadcastThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={broadcastThemeCustomizationContent}
        faqIdPrefix="broadcast-faq"
        slug="broadcast-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "colorblock-theme-customization",
    metadata: pageMetadata.colorblockThemeCustomization,
    getSchema: createColorblockThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={colorblockThemeCustomizationContent}
        faqIdPrefix="colorblock-faq"
        slug="colorblock-theme-customization"
      />
    ),
  },
  {
    slug: "craft-theme-customization",
    metadata: pageMetadata.craftThemeCustomization,
    getSchema: createCraftThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={craftThemeCustomizationContent}
        faqIdPrefix="craft-faq"
        slug="craft-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "dawn-theme-customization",
    metadata: pageMetadata.dawnThemeCustomization,
    getSchema: createDawnThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={dawnThemeCustomizationContent}
        faqIdPrefix="dawn-faq"
        slug="dawn-theme-customization"
      />
    ),
  },
  {
    slug: "dwell-theme-customization",
    metadata: pageMetadata.dwellThemeCustomization,
    getSchema: createDwellThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={dwellThemeCustomizationContent}
        faqIdPrefix="dwell-faq"
        slug="dwell-theme-customization"
        brandsDensity="compact"
      />
    ),
  },
  {
    slug: "expanse-theme-customization",
    metadata: pageMetadata.expanseThemeCustomization,
    getSchema: createExpanseThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={expanseThemeCustomizationContent}
        faqIdPrefix="expanse-faq"
        slug="expanse-theme-customization"
      />
    ),
  },
  {
    slug: "fabric-theme-customization",
    metadata: pageMetadata.fabricThemeCustomization,
    getSchema: createFabricThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={fabricThemeCustomizationContent}
        faqIdPrefix="fabric-faq"
        slug="fabric-theme-customization"
      />
    ),
  },
  {
    slug: "heritage-theme-customization",
    metadata: pageMetadata.heritageThemeCustomization,
    getSchema: createHeritageThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={heritageThemeCustomizationContent}
        faqIdPrefix="heritage-faq"
        slug="heritage-theme-customization"
        brandsDensity="compact"
      />
    ),
  },
  {
    slug: "horizon-theme-customization",
    metadata: pageMetadata.horizonThemeCustomization,
    getSchema: createHorizonThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={horizonThemeCustomizationContent}
        faqIdPrefix="horizon-faq"
        slug="horizon-theme-customization"
      />
    ),
  },
  {
    slug: "impact-theme-customization",
    metadata: pageMetadata.impactThemeCustomization,
    getSchema: createImpactThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={impactThemeCustomizationContent}
        faqIdPrefix="impact-faq"
        slug="impact-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "impulse-theme-customization",
    metadata: pageMetadata.impulseThemeCustomization,
    getSchema: createImpulseThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={impulseThemeCustomizationContent}
        faqIdPrefix="impulse-faq"
        slug="impulse-theme-customization"
      />
    ),
  },
  {
    slug: "origin-theme-customization",
    metadata: pageMetadata.originThemeCustomization,
    getSchema: createOriginThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={originThemeCustomizationContent}
        faqIdPrefix="origin-faq"
        slug="origin-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "pipeline-theme-customization",
    metadata: pageMetadata.pipelineThemeCustomization,
    getSchema: createPipelineThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={pipelineThemeCustomizationContent}
        faqIdPrefix="pipeline-faq"
        slug="pipeline-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "pitch-theme-customization",
    metadata: pageMetadata.pitchThemeCustomization,
    getSchema: createPitchThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={pitchThemeCustomizationContent}
        faqIdPrefix="pitch-faq"
        slug="pitch-theme-customization"
        brandsDensity="compact"
      />
    ),
  },
  {
    slug: "prestige-theme-customization",
    metadata: pageMetadata.prestigeThemeCustomization,
    getSchema: createPrestigeThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={prestigeThemeCustomizationContent}
        faqIdPrefix="prestige-faq"
        slug="prestige-theme-customization"
      />
    ),
  },
  {
    slug: "publisher-theme-customization",
    metadata: pageMetadata.publisherThemeCustomization,
    getSchema: createPublisherThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={publisherThemeCustomizationContent}
        faqIdPrefix="publisher-faq"
        slug="publisher-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "refresh-theme-customization",
    metadata: pageMetadata.refreshThemeCustomization,
    getSchema: createRefreshThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={refreshThemeCustomizationContent}
        faqIdPrefix="refresh-faq"
        slug="refresh-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "ritual-theme-customization",
    metadata: pageMetadata.ritualThemeCustomization,
    getSchema: createRitualThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={ritualThemeCustomizationContent}
        faqIdPrefix="ritual-faq"
        slug="ritual-theme-customization"
        brandsDensity="compact"
      />
    ),
  },
  {
    slug: "savor-theme-customization",
    metadata: pageMetadata.savorThemeCustomization,
    getSchema: createSavorThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={savorThemeCustomizationContent}
        faqIdPrefix="savor-faq"
        slug="savor-theme-customization"
      />
    ),
  },
  {
    slug: "sense-theme-customization",
    metadata: pageMetadata.senseThemeCustomization,
    getSchema: createSenseThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={senseThemeCustomizationContent}
        faqIdPrefix="sense-faq"
        slug="sense-theme-customization"
      />
    ),
  },
  {
    slug: "spotlight-theme-customization",
    metadata: pageMetadata.spotlightThemeCustomization,
    getSchema: createSpotlightThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={spotlightThemeCustomizationContent}
        faqIdPrefix="spotlight-faq"
        slug="spotlight-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "startup-theme-customization",
    metadata: pageMetadata.startupThemeCustomization,
    getSchema: createStartupThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={startupThemeCustomizationContent}
        faqIdPrefix="startup-faq"
        slug="startup-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "stiletto-theme-customization",
    metadata: pageMetadata.stilettoThemeCustomization,
    getSchema: createStilettoThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={stilettoThemeCustomizationContent}
        faqIdPrefix="stiletto-faq"
        slug="stiletto-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "studio-theme-customization",
    metadata: pageMetadata.studioThemeCustomization,
    getSchema: createStudioThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={studioThemeCustomizationContent}
        faqIdPrefix="studio-faq"
        slug="studio-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "tinker-theme-customization",
    metadata: pageMetadata.tinkerThemeCustomization,
    getSchema: createTinkerThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={tinkerThemeCustomizationContent}
        faqIdPrefix="tinker-faq"
        slug="tinker-theme-customization"
        brandsDensity="compact"
      />
    ),
  },
  {
    slug: "trade-theme-customization",
    metadata: pageMetadata.tradeThemeCustomization,
    getSchema: createTradeThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={tradeThemeCustomizationContent}
        faqIdPrefix="trade-faq"
        slug="trade-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "vessel-theme-customization",
    metadata: pageMetadata.vesselThemeCustomization,
    getSchema: createVesselThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={vesselThemeCustomizationContent}
        faqIdPrefix="vessel-faq"
        slug="vessel-theme-customization"
      />
    ),
  },
  {
    slug: "vision-theme-customization",
    metadata: pageMetadata.visionThemeCustomization,
    getSchema: createVisionThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={visionThemeCustomizationContent}
        faqIdPrefix="vision-faq"
        slug="vision-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "warehouse-theme-customization",
    metadata: pageMetadata.warehouseThemeCustomization,
    getSchema: createWarehouseThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={warehouseThemeCustomizationContent}
        faqIdPrefix="warehouse-faq"
        slug="warehouse-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
  {
    slug: "woodstock-theme-customization",
    metadata: pageMetadata.woodstockThemeCustomization,
    getSchema: createWoodstockThemeCustomizationPageSchema,
    render: () => (
      <ShopifyThemeCustomizationTemplate
        content={woodstockThemeCustomizationContent}
        faqIdPrefix="woodstock-faq"
        slug="woodstock-theme-customization"
        brandsDensity="compact"
        portfolioItemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      />
    ),
  },
];
