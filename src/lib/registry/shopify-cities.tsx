import { ShopifyCityLandingTemplate } from "./templates";
import { shopifyDevelopmentChennaiContent } from "@/content/shopify-development-company-in-chennai";
import { shopifyDevelopmentBangaloreContent } from "@/content/shopify-development-in-bangalore";
import { shopifyDevelopmentBarcelonaContent } from "@/content/shopify-development-in-barcelona-spain";
import { shopifyDevelopmentDelhiContent } from "@/content/shopify-development-in-delhi";
import { shopifyDevelopmentHyderabadContent } from "@/content/shopify-development-in-hyderabad";
import { shopifyDevelopmentLosAngelesContent } from "@/content/shopify-development-in-los-angeles";
import { shopifyDevelopmentMiamiContent } from "@/content/shopify-development-in-miami";
import { shopifyDevelopmentMumbaiContent } from "@/content/shopify-development-in-mumbai";
import { shopifyDevelopmentNewYorkContent } from "@/content/shopify-development-in-new-york";
import { shopifyDevelopmentPuneContent } from "@/content/shopify-development-in-pune";
import { shopifyDevelopmentTexasContent } from "@/content/shopify-development-in-texas";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentCompanyInChennaiPageSchema,
  createShopifyDevelopmentInBangalorePageSchema,
  createShopifyDevelopmentBarcelonaPageSchema,
  createShopifyDevelopmentInDelhiPageSchema,
  createShopifyDevelopmentInHyderabadPageSchema,
  createShopifyDevelopmentInLosAngelesPageSchema,
  createShopifyDevelopmentInMiamiPageSchema,
  createShopifyDevelopmentInMumbaiPageSchema,
  createShopifyDevelopmentInNewYorkPageSchema,
  createShopifyDevelopmentInPunePageSchema,
  createShopifyDevelopmentInTexasPageSchema,
} from "@/lib/schema";
import type { ServicePageEntry } from "@/lib/registry/types";

export const shopifyCitiesRegistry: readonly ServicePageEntry[] = [
  {
    slug: "shopify-development-company-in-chennai",
    metadata: pageMetadata.shopifyDevelopmentCompanyInChennai,
    getSchema: createShopifyDevelopmentCompanyInChennaiPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentChennaiContent}
        faqIdPrefix="chennai-faq"
        slug="shopify-development-company-in-chennai"
      />
    ),
  },
  {
    slug: "shopify-development-in-bangalore",
    metadata: pageMetadata.shopifyDevelopmentInBangalore,
    getSchema: createShopifyDevelopmentInBangalorePageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentBangaloreContent}
        faqIdPrefix="bangalore-faq"
        slug="shopify-development-in-bangalore"
      />
    ),
  },
  {
    slug: "shopify-development-in-barcelona-spain",
    metadata: pageMetadata.shopifyDevelopmentBarcelona,
    getSchema: createShopifyDevelopmentBarcelonaPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentBarcelonaContent}
        faqIdPrefix="barcelona-spain-faq"
        slug="shopify-development-in-barcelona-spain"
      />
    ),
  },
  {
    slug: "shopify-development-in-delhi",
    metadata: pageMetadata.shopifyDevelopmentInDelhi,
    getSchema: createShopifyDevelopmentInDelhiPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentDelhiContent}
        faqIdPrefix="delhi-faq"
        slug="shopify-development-in-delhi"
      />
    ),
  },
  {
    slug: "shopify-development-in-hyderabad",
    metadata: pageMetadata.shopifyDevelopmentInHyderabad,
    getSchema: createShopifyDevelopmentInHyderabadPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentHyderabadContent}
        faqIdPrefix="hyderabad-faq"
        slug="shopify-development-in-hyderabad"
      />
    ),
  },
  {
    slug: "shopify-development-in-los-angeles",
    metadata: pageMetadata.shopifyDevelopmentInLosAngeles,
    getSchema: createShopifyDevelopmentInLosAngelesPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentLosAngelesContent}
        faqIdPrefix="los-angeles-faq"
        slug="shopify-development-in-los-angeles"
      />
    ),
  },
  {
    slug: "shopify-development-in-miami",
    metadata: pageMetadata.shopifyDevelopmentInMiami,
    getSchema: createShopifyDevelopmentInMiamiPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentMiamiContent}
        faqIdPrefix="miami-faq"
        slug="shopify-development-in-miami"
      />
    ),
  },
  {
    slug: "shopify-development-in-mumbai",
    metadata: pageMetadata.shopifyDevelopmentInMumbai,
    getSchema: createShopifyDevelopmentInMumbaiPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentMumbaiContent}
        faqIdPrefix="mumbai-faq"
        slug="shopify-development-in-mumbai"
      />
    ),
  },
  {
    slug: "shopify-development-in-new-york",
    metadata: pageMetadata.shopifyDevelopmentInNewYork,
    getSchema: createShopifyDevelopmentInNewYorkPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentNewYorkContent}
        faqIdPrefix="new-york-faq"
        slug="shopify-development-in-new-york"
      />
    ),
  },
  {
    slug: "shopify-development-in-pune",
    metadata: pageMetadata.shopifyDevelopmentInPune,
    getSchema: createShopifyDevelopmentInPunePageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentPuneContent}
        faqIdPrefix="pune-faq"
        slug="shopify-development-in-pune"
      />
    ),
  },
  {
    slug: "shopify-development-in-texas",
    metadata: pageMetadata.shopifyDevelopmentInTexas,
    getSchema: createShopifyDevelopmentInTexasPageSchema,
    render: () => (
      <ShopifyCityLandingTemplate
        content={shopifyDevelopmentTexasContent}
        faqIdPrefix="texas-faq"
        slug="shopify-development-in-texas"
      />
    ),
  },
];
