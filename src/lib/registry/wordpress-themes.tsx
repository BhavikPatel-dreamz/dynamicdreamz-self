import { WordPressThemeCustomizationTemplate } from "@/components/sections/wordpress-theme-customization-template";
import { pageMetadata } from "@/data/seo";
import type { ServicePageEntry } from "@/lib/registry/types";

import { AstraBenefitIcon, AstraFeatureIcon } from "@/components/sections/astra-theme-customization/astra-icons";
import { astraThemeCustomizationContent } from "@/content/astra-theme-customization";
import { createAstraThemeCustomizationPageSchema } from "@/lib/schema";
import { BlocksyBenefitIcon, BlocksyFeatureIcon } from "@/components/sections/blocksy-theme-customization/blocksy-icons";
import { blocksyThemeCustomizationContent } from "@/content/blocksy-theme-customization";
import { createBlocksyThemeCustomizationPageSchema } from "@/lib/schema";
import { BloghashBenefitIcon, BloghashFeatureIcon } from "@/components/sections/bloghash-theme-customization/bloghash-icons";
import { bloghashThemeCustomizationContent } from "@/content/bloghash-theme-customization";
import { createBloghashThemeCustomizationPageSchema } from "@/lib/schema";
import { ExtendableBenefitIcon, ExtendableFeatureIcon } from "@/components/sections/extendable-theme-customization/extendable-icons";
import { extendableThemeCustomizationContent } from "@/content/extendable-theme-customization";
import { createExtendableThemeCustomizationPageSchema } from "@/lib/schema";
import { GeneratepressBenefitIcon, GeneratepressFeatureIcon } from "@/components/sections/generatepress-theme-customization/generatepress-icons";
import { generatepressThemeCustomizationContent } from "@/content/generatepress-theme-customization";
import { createGeneratepressThemeCustomizationPageSchema } from "@/lib/schema";
import { GoBenefitIcon, GoFeatureIcon } from "@/components/sections/go-theme-customization/go-icons";
import { goThemeCustomizationContent } from "@/content/go-theme-customization";
import { createGoThemeCustomizationPageSchema } from "@/lib/schema";
import { HelloBizBenefitIcon, HelloBizFeatureIcon } from "@/components/sections/hello-biz-theme-customization/hello-biz-icons";
import { helloBizThemeCustomizationContent } from "@/content/hello-biz-theme-customization";
import { createHelloBizThemeCustomizationPageSchema } from "@/lib/schema";
import { HelloElementorBenefitIcon, HelloElementorFeatureIcon } from "@/components/sections/hello-elementor-theme-customization/hello-elementor-icons";
import { helloElementorThemeCustomizationContent } from "@/content/hello-elementor-theme-customization";
import { createHelloElementorThemeCustomizationPageSchema } from "@/lib/schema";
import { InspiroBenefitIcon, InspiroFeatureIcon } from "@/components/sections/inspiro-theme-customization/inspiro-icons";
import { inspiroThemeCustomizationContent } from "@/content/inspiro-theme-customization";
import { createInspiroThemeCustomizationPageSchema } from "@/lib/schema";
import { KadenceBenefitIcon, KadenceFeatureIcon } from "@/components/sections/kadence-theme-customization/kadence-icons";
import { kadenceThemeCustomizationContent } from "@/content/kadence-theme-customization";
import { createKadenceThemeCustomizationPageSchema } from "@/lib/schema";
import { KubioBenefitIcon, KubioFeatureIcon } from "@/components/sections/kubio-theme-customization/kubio-icons";
import { kubioThemeCustomizationContent } from "@/content/kubio-theme-customization";
import { createKubioThemeCustomizationPageSchema } from "@/lib/schema";
import { NeveBenefitIcon, NeveFeatureIcon } from "@/components/sections/neve-theme-customization/neve-icons";
import { neveThemeCustomizationContent } from "@/content/neve-theme-customization";
import { createNeveThemeCustomizationPageSchema } from "@/lib/schema";
import { NewsbloggerBenefitIcon, NewsbloggerFeatureIcon } from "@/components/sections/newsblogger-theme-customization/newsblogger-icons";
import { newsbloggerThemeCustomizationContent } from "@/content/newsblogger-theme-customization";
import { createNewsbloggerThemeCustomizationPageSchema } from "@/lib/schema";
import { OceanwpBenefitIcon, OceanwpFeatureIcon } from "@/components/sections/oceanwp-theme-customization/oceanwp-icons";
import { oceanwpThemeCustomizationContent } from "@/content/oceanwp-theme-customization";
import { createOceanwpThemeCustomizationPageSchema } from "@/lib/schema";
import { PopularfxBenefitIcon, PopularfxFeatureIcon } from "@/components/sections/popularfx-theme-customization/popularfx-icons";
import { popularfxThemeCustomizationContent } from "@/content/popularfx-theme-customization";
import { createPopularfxThemeCustomizationPageSchema } from "@/lib/schema";
import { RoyalElementorKitBenefitIcon, RoyalElementorKitFeatureIcon } from "@/components/sections/royal-elementor-kit-theme-customization/royal-elementor-kit-icons";
import { royalElementorKitThemeCustomizationContent } from "@/content/royal-elementor-kit-theme-customization";
import { createRoyalElementorKitThemeCustomizationPageSchema } from "@/lib/schema";
import { YithWonderBenefitIcon, YithWonderFeatureIcon } from "@/components/sections/yith-wonder-theme-customization/yith-wonder-icons";
import { yithWonderThemeCustomizationContent } from "@/content/yith-wonder-theme-customization";
import { createYithWonderThemeCustomizationPageSchema } from "@/lib/schema";

export const wordpressThemesRegistry: readonly ServicePageEntry[] = [
  {
    slug: "astra-theme-customization",
    metadata: pageMetadata.astraThemeCustomization,
    getSchema: createAstraThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={astraThemeCustomizationContent}
        faqIdPrefix="astra-theme-faq"
        renderBenefitIcon={(name) => (
          <AstraBenefitIcon
            name={name as Parameters<typeof AstraBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <AstraFeatureIcon
            name={name as Parameters<typeof AstraFeatureIcon>[0]["name"]}
          />
        )}
        slug="astra-theme-customization"
      />
    ),
  },
  {
    slug: "blocksy-theme-customization",
    metadata: pageMetadata.blocksyThemeCustomization,
    getSchema: createBlocksyThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={blocksyThemeCustomizationContent}
        faqIdPrefix="blocksy-faq"
        renderBenefitIcon={(name) => (
          <BlocksyBenefitIcon
            name={name as Parameters<typeof BlocksyBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <BlocksyFeatureIcon
            name={name as Parameters<typeof BlocksyFeatureIcon>[0]["name"]}
          />
        )}
        slug="blocksy-theme-customization"
      />
    ),
  },
  {
    slug: "bloghash-theme-customization",
    metadata: pageMetadata.bloghashThemeCustomization,
    getSchema: createBloghashThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={bloghashThemeCustomizationContent}
        faqIdPrefix="bloghash-faq"
        renderBenefitIcon={(name) => (
          <BloghashBenefitIcon
            name={name as Parameters<typeof BloghashBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <BloghashFeatureIcon
            name={name as Parameters<typeof BloghashFeatureIcon>[0]["name"]}
          />
        )}
        slug="bloghash-theme-customization"
      />
    ),
  },
  {
    slug: "extendable-theme-customization",
    metadata: pageMetadata.extendableThemeCustomization,
    getSchema: createExtendableThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={extendableThemeCustomizationContent}
        faqIdPrefix="extendable-faq"
        renderBenefitIcon={(name) => (
          <ExtendableBenefitIcon
            name={name as Parameters<typeof ExtendableBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <ExtendableFeatureIcon
            name={name as Parameters<typeof ExtendableFeatureIcon>[0]["name"]}
          />
        )}
        slug="extendable-theme-customization"
      />
    ),
  },
  {
    slug: "generatepress-theme-customization",
    metadata: pageMetadata.generatepressThemeCustomization,
    getSchema: createGeneratepressThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={generatepressThemeCustomizationContent}
        faqIdPrefix="generatepress-faq"
        renderBenefitIcon={(name) => (
          <GeneratepressBenefitIcon
            name={name as Parameters<typeof GeneratepressBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <GeneratepressFeatureIcon
            name={name as Parameters<typeof GeneratepressFeatureIcon>[0]["name"]}
          />
        )}
        slug="generatepress-theme-customization"
      />
    ),
  },
  {
    slug: "go-theme-customization",
    metadata: pageMetadata.goThemeCustomization,
    getSchema: createGoThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={goThemeCustomizationContent}
        faqIdPrefix="go-theme-faq"
        renderBenefitIcon={(name) => (
          <GoBenefitIcon
            name={name as Parameters<typeof GoBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <GoFeatureIcon
            name={name as Parameters<typeof GoFeatureIcon>[0]["name"]}
          />
        )}
        slug="go-theme-customization"
      />
    ),
  },
  {
    slug: "hello-biz-theme-customization",
    metadata: pageMetadata.helloBizThemeCustomization,
    getSchema: createHelloBizThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={helloBizThemeCustomizationContent}
        faqIdPrefix="hellobiz-faq"
        renderBenefitIcon={(name) => (
          <HelloBizBenefitIcon
            name={name as Parameters<typeof HelloBizBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <HelloBizFeatureIcon
            name={name as Parameters<typeof HelloBizFeatureIcon>[0]["name"]}
          />
        )}
        slug="hello-biz-theme-customization"
      />
    ),
  },
  {
    slug: "hello-elementor-theme-customization",
    metadata: pageMetadata.helloElementorThemeCustomization,
    getSchema: createHelloElementorThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={helloElementorThemeCustomizationContent}
        faqIdPrefix="hello-elementor-faq"
        renderBenefitIcon={(name) => (
          <HelloElementorBenefitIcon
            name={name as Parameters<typeof HelloElementorBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <HelloElementorFeatureIcon
            name={name as Parameters<typeof HelloElementorFeatureIcon>[0]["name"]}
          />
        )}
        slug="hello-elementor-theme-customization"
      />
    ),
  },
  {
    slug: "inspiro-theme-customization",
    metadata: pageMetadata.inspiroThemeCustomization,
    getSchema: createInspiroThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={inspiroThemeCustomizationContent}
        faqIdPrefix="inspiro-theme-faq"
        renderBenefitIcon={(name) => (
          <InspiroBenefitIcon
            name={name as Parameters<typeof InspiroBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <InspiroFeatureIcon
            name={name as Parameters<typeof InspiroFeatureIcon>[0]["name"]}
          />
        )}
        slug="inspiro-theme-customization"
      />
    ),
  },
  {
    slug: "kadence-theme-customization",
    metadata: pageMetadata.kadenceThemeCustomization,
    getSchema: createKadenceThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={kadenceThemeCustomizationContent}
        faqIdPrefix="kadence-theme-faq"
        renderBenefitIcon={(name) => (
          <KadenceBenefitIcon
            name={name as Parameters<typeof KadenceBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <KadenceFeatureIcon
            name={name as Parameters<typeof KadenceFeatureIcon>[0]["name"]}
          />
        )}
        slug="kadence-theme-customization"
      />
    ),
  },
  {
    slug: "kubio-theme-customization",
    metadata: pageMetadata.kubioThemeCustomization,
    getSchema: createKubioThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={kubioThemeCustomizationContent}
        faqIdPrefix="kubio-faq"
        renderBenefitIcon={(name) => (
          <KubioBenefitIcon
            name={name as Parameters<typeof KubioBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <KubioFeatureIcon
            name={name as Parameters<typeof KubioFeatureIcon>[0]["name"]}
          />
        )}
        slug="kubio-theme-customization"
      />
    ),
  },
  {
    slug: "neve-theme-customization",
    metadata: pageMetadata.neveThemeCustomization,
    getSchema: createNeveThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={neveThemeCustomizationContent}
        faqIdPrefix="neve-faq"
        renderBenefitIcon={(name) => (
          <NeveBenefitIcon
            name={name as Parameters<typeof NeveBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <NeveFeatureIcon
            name={name as Parameters<typeof NeveFeatureIcon>[0]["name"]}
          />
        )}
        slug="neve-theme-customization"
      />
    ),
  },
  {
    slug: "newsblogger-theme-customization",
    metadata: pageMetadata.newsbloggerThemeCustomization,
    getSchema: createNewsbloggerThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={newsbloggerThemeCustomizationContent}
        faqIdPrefix="newsblogger-theme-faq"
        renderBenefitIcon={(name) => (
          <NewsbloggerBenefitIcon
            name={name as Parameters<typeof NewsbloggerBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <NewsbloggerFeatureIcon
            name={name as Parameters<typeof NewsbloggerFeatureIcon>[0]["name"]}
          />
        )}
        slug="newsblogger-theme-customization"
      />
    ),
  },
  {
    slug: "oceanwp-theme-customization",
    metadata: pageMetadata.oceanwpThemeCustomization,
    getSchema: createOceanwpThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={oceanwpThemeCustomizationContent}
        faqIdPrefix="oceanwp-faq"
        renderBenefitIcon={(name) => (
          <OceanwpBenefitIcon
            name={name as Parameters<typeof OceanwpBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <OceanwpFeatureIcon
            name={name as Parameters<typeof OceanwpFeatureIcon>[0]["name"]}
          />
        )}
        slug="oceanwp-theme-customization"
      />
    ),
  },
  {
    slug: "popularfx-theme-customization",
    metadata: pageMetadata.popularfxThemeCustomization,
    getSchema: createPopularfxThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={popularfxThemeCustomizationContent}
        faqIdPrefix="popularfx-faq"
        renderBenefitIcon={(name) => (
          <PopularfxBenefitIcon
            name={name as Parameters<typeof PopularfxBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <PopularfxFeatureIcon
            name={name as Parameters<typeof PopularfxFeatureIcon>[0]["name"]}
          />
        )}
        slug="popularfx-theme-customization"
      />
    ),
  },
  {
    slug: "royal-elementor-kit-theme-customization",
    metadata: pageMetadata.royalElementorKitThemeCustomization,
    getSchema: createRoyalElementorKitThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={royalElementorKitThemeCustomizationContent}
        faqIdPrefix="royal-elementor-kit-faq"
        renderBenefitIcon={(name) => (
          <RoyalElementorKitBenefitIcon
            name={name as Parameters<typeof RoyalElementorKitBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <RoyalElementorKitFeatureIcon
            name={name as Parameters<typeof RoyalElementorKitFeatureIcon>[0]["name"]}
          />
        )}
        slug="royal-elementor-kit-theme-customization"
      />
    ),
  },
  {
    slug: "yith-wonder-theme-customization",
    metadata: pageMetadata.yithWonderThemeCustomization,
    getSchema: createYithWonderThemeCustomizationPageSchema,
    render: () => (
      <WordPressThemeCustomizationTemplate
        content={yithWonderThemeCustomizationContent}
        faqIdPrefix="yith-wonder-theme-faq"
        renderBenefitIcon={(name) => (
          <YithWonderBenefitIcon
            name={name as Parameters<typeof YithWonderBenefitIcon>[0]["name"]}
          />
        )}
        renderFeatureIcon={(name) => (
          <YithWonderFeatureIcon
            name={name as Parameters<typeof YithWonderFeatureIcon>[0]["name"]}
          />
        )}
        slug="yith-wonder-theme-customization"
      />
    ),
  },
];
