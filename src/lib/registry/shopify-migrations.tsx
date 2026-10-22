import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import type { ServicePageEntry } from "./types";
import { MagentoMigrationIcon } from "@/components/sections/magento-to-shopify/magento-migration-icons";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { ShopifyMigrationLandingTemplate } from "@/components/sections/shopify-migration-landing-template";
import { WooCommerceMigrationIcon } from "@/components/sections/woocommerce-to-shopify/woocommerce-migration-icons";
import { ThemeCustomizationApproachSection } from "@/components/sections/theme-customization-approach-section";
import { pageMetadata } from "@/data/seo";
import {
  createBigCommerceToShopifyMigrationPageSchema,
  createEcwidToShopifyMigrationPageSchema,
  createEtsyToShopifyMigrationPageSchema,
  createMagentoToShopifyMigrationPageSchema,
  createPrestashopToShopifyMigrationPageSchema,
  createSalesforceToShopifyMigrationPageSchema,
  createSquareToShopifyMigrationPageSchema,
  createSquarespaceToShopifyMigrationPageSchema,
  createWixToShopifyMigrationPageSchema,
  createWooCommerceToShopifyMigrationPageSchema,
} from "@/lib/schema";
import {
  bigcommerceBrandLogos,
  bigcommerceDataSecuredContent,
  bigcommerceFaqs,
  bigcommerceHeroContent,
  bigcommerceMigrationSectionCopy,
  bigcommerceProcessContent,
  bigcommerceTestimonials,
  bigcommerceVsShopifyContent,
  bigcommerceWhyChooseContent,
  bigcommerceWhyMigrateContent,
} from "@/content/bigcommerce-to-shopify-migration";
import {
  ecwidBenefitsContent,
  ecwidBrandLogos,
  ecwidFaqs,
  ecwidHeroContent,
  ecwidMigrationSectionCopy,
  ecwidProcessContent,
  ecwidTestimonials,
  ecwidThingsToConsiderContent,
} from "@/content/ecwid-to-shopify-migration";
import {
  etsyBenefitsContent,
  etsyBrandLogos,
  etsyFaqs,
  etsyHeroContent,
  etsyMigrationSectionCopy,
  etsyProcessContent,
  etsyTestimonials,
  etsyThingsToConsiderContent,
  etsyWhyChooseContent,
  etsyWhyMigrateContent,
} from "@/content/etsy-to-shopify-migration";
import {
  magentoBrandLogos,
  magentoFaqs,
  magentoHeroContent,
  magentoMigrationSectionCopy,
  magentoProcessContent,
  magentoTestimonials,
  magentoWhyChooseContent,
  magentoWhyMigrateContent,
} from "@/content/magento-to-shopify-migration";
import {
  prestashopBenefitsContent,
  prestashopBrandLogos,
  prestashopDataMappingContent,
  prestashopFaqs,
  prestashopHeroContent,
  prestashopMigrationSectionCopy,
  prestashopProcessContent,
  prestashopTestimonials,
  prestashopWhyChooseContent,
} from "@/content/prestashop-to-shopify-migration";
import {
  salesforceBenefitsContent,
  salesforceBrandLogos,
  salesforceFaqs,
  salesforceHeroContent,
  salesforceMigrationSectionCopy,
  salesforceProcessContent,
  salesforceTestimonials,
  salesforceThingsToConsiderContent,
  salesforceWhyChooseContent,
  salesforceWhyMigrateContent,
} from "@/content/salesforce-to-shopify-migration";
import {
  squareBrandLogos,
  squareFaqs,
  squareHeroContent,
  squareMigrationSectionCopy,
  squareProcessContent,
  squareTestimonials,
  squareWhyChooseContent,
  squareWhyMigrateContent,
} from "@/content/square-to-shopify-migration";
import {
  squarespaceBenefitsContent,
  squarespaceBrandLogos,
  squarespaceFaqs,
  squarespaceHeroContent,
  squarespaceMigrationSectionCopy,
  squarespaceProcessContent,
  squarespaceTestimonials,
  squarespaceWhatAfterContent,
  squarespaceWhyChooseContent,
  squarespaceWhyMigrateContent,
} from "@/content/squarespace-to-shopify-migration";
import {
  wixBrandLogos,
  wixFaqs,
  wixHeroContent,
  wixMigrationSectionCopy,
  wixProcessContent,
  wixTestimonials,
  wixThingsToConsiderContent,
  wixWhatAfterContent,
  wixWhyChooseContent,
  wixWhyMigrateContent,
} from "@/content/wix-to-shopify-migration";
import {
  woocommerceBrandLogos,
  woocommerceFaqs,
  woocommerceHeroContent,
  woocommerceMigrationSectionCopy,
  woocommerceProcessContent,
  woocommerceTestimonials,
  woocommerceWhyMigrateContent,
} from "@/content/woocommerce-to-shopify-migration";

export const shopifyMigrationsRegistry: readonly ServicePageEntry[] = [
  {
    slug: "bigcommerce-to-shopify-migration",
    metadata: pageMetadata.bigcommerceToShopifyMigration,
    getSchema: createBigCommerceToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: bigcommerceMigrationSectionCopy.brandsHeading,
            items: bigcommerceBrandLogos,
            slug: "bigcommerce-to-shopify-migration",
          }}
          faq={{
            idPrefix: "bigcommerce-migration-faq",
            items: bigcommerceFaqs,
          }}
          hero={bigcommerceHeroContent}
          comparison={
            <ThemeCustomizationApproachSection
              content={bigcommerceVsShopifyContent}
            />
          }
          process={bigcommerceProcessContent}
          secondaryServices={{
            boxes: bigcommerceDataSecuredContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: bigcommerceDataSecuredContent.description,
            eyebrow: bigcommerceDataSecuredContent.eyebrow,
            heading: bigcommerceDataSecuredContent.heading,
            id: "data-security",
            variant: "green",
          }}
          testimonials={bigcommerceTestimonials}
          whyChoose={bigcommerceWhyChooseContent}
          whyMigrate={{
            boxes: bigcommerceWhyMigrateContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: bigcommerceWhyMigrateContent.description,
            eyebrow: bigcommerceWhyMigrateContent.eyebrow,
            heading: bigcommerceWhyMigrateContent.heading,
            id: "why-migrate",
            variant: "yellow",
          }}
        />
    ),
  },
  {
    slug: "ecwid-to-shopify-migration",
    metadata: pageMetadata.ecwidToShopifyMigration,
    getSchema: createEcwidToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: ecwidMigrationSectionCopy.brandsHeading,
            items: ecwidBrandLogos,
            slug: "ecwid-to-shopify-migration",
          }}
          faq={{
            idPrefix: "ecwid-migration-faq",
            items: ecwidFaqs,
          }}
          hero={ecwidHeroContent}
          process={ecwidProcessContent}
          beforeProcess={
            <CityWhyChooseBoxesSection
              columns={4}
              content={{
                eyebrow: ecwidThingsToConsiderContent.eyebrow,
                heading: ecwidThingsToConsiderContent.heading,
                description: ecwidThingsToConsiderContent.description,
                items: ecwidThingsToConsiderContent.boxes.map((box) => ({
                  title: box.title,
                  description: box.description,
                  iconNode: <MigrationPlatformIcon name={box.iconName} />,
                })),
              }}
              id="things-to-consider"
              theme="light"
            />
          }
          testimonials={ecwidTestimonials}
          whyMigrate={{
            boxes: ecwidBenefitsContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: ecwidBenefitsContent.description,
            eyebrow: ecwidBenefitsContent.eyebrow,
            heading: ecwidBenefitsContent.heading,
            id: "benefits",
            variant: "yellow",
          }}
        />
    ),
  },
  {
    slug: "etsy-to-shopify-migration",
    metadata: pageMetadata.etsyToShopifyMigration,
    getSchema: createEtsyToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: etsyMigrationSectionCopy.brandsHeading,
            items: etsyBrandLogos,
            slug: "etsy-to-shopify-migration",
          }}
          faq={{
            idPrefix: "etsy-migration-faq",
            items: etsyFaqs,
          }}
          hero={etsyHeroContent}
          process={etsyProcessContent}
          secondaryServices={{
            boxes: etsyBenefitsContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: etsyBenefitsContent.description,
            eyebrow: etsyBenefitsContent.eyebrow,
            heading: etsyBenefitsContent.heading,
            id: "benefits",
            variant: "transparent",
          }}
          beforeProcess={
            <CityWhyChooseBoxesSection
              columns={4}
              content={{
                eyebrow: etsyThingsToConsiderContent.eyebrow,
                heading: etsyThingsToConsiderContent.heading,
                description: etsyThingsToConsiderContent.description,
                items: etsyThingsToConsiderContent.boxes.map((box) => ({
                  title: box.title,
                  description: box.description,
                  iconNode: <MigrationPlatformIcon name={box.iconName} />,
                })),
              }}
              id="things-to-consider"
              theme="light"
            />
          }
          testimonials={etsyTestimonials}
          whyChoose={etsyWhyChooseContent}
          whyMigrate={{
            boxes: etsyWhyMigrateContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: etsyWhyMigrateContent.description,
            eyebrow: etsyWhyMigrateContent.eyebrow,
            heading: etsyWhyMigrateContent.heading,
            id: "why-migrate",
            variant: "yellow",
          }}
        />
    ),
  },
  {
    slug: "magento-to-shopify-migration",
    metadata: pageMetadata.magentoToShopifyMigration,
    getSchema: createMagentoToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: magentoMigrationSectionCopy.brandsHeading,
            items: magentoBrandLogos,
            slug: "magento-to-shopify-migration",
          }}
          faq={{
            idPrefix: "magento-migration-faq",
            items: magentoFaqs,
          }}
          hero={magentoHeroContent}
          process={magentoProcessContent}
          testimonials={magentoTestimonials}
          whyChoose={magentoWhyChooseContent}
          whyChooseId="why-choose-dynamic-dreamz"
          whyMigrate={{
            boxes: magentoWhyMigrateContent.items.map((item) => ({
              description: item.description,
              icon: <MagentoMigrationIcon name={item.iconName} />,
              title: item.title,
            })),
            description: magentoWhyMigrateContent.description,
            eyebrow: magentoWhyMigrateContent.eyebrow,
            heading: magentoWhyMigrateContent.heading,
            id: "why-migrate",
            variant: "yellow",
          }}
        />
    ),
  },
  {
    slug: "prestashop-to-shopify-migration",
    metadata: pageMetadata.prestashopToShopifyMigration,
    getSchema: createPrestashopToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: prestashopMigrationSectionCopy.brandsHeading,
            items: prestashopBrandLogos,
            slug: "prestashop-to-shopify-migration",
          }}
          faq={{
            idPrefix: "prestashop-migration-faq",
            items: prestashopFaqs,
          }}
          hero={prestashopHeroContent}
          process={prestashopProcessContent}
          beforeProcess={
            <CityWhyChooseBoxesSection
              columns={4}
              content={{
                eyebrow: prestashopDataMappingContent.eyebrow,
                heading: prestashopDataMappingContent.heading,
                description: prestashopDataMappingContent.description,
                items: prestashopDataMappingContent.boxes.map((box) => ({
                  title: box.title,
                  description: box.description,
                  iconNode: <MigrationPlatformIcon name={box.iconName} />,
                })),
              }}
              id="data-mapping"
              theme="light"
            />
          }
          testimonials={prestashopTestimonials}
          whyChoose={prestashopWhyChooseContent}
          whyMigrate={{
            boxes: prestashopBenefitsContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: prestashopBenefitsContent.description,
            eyebrow: prestashopBenefitsContent.eyebrow,
            heading: prestashopBenefitsContent.heading,
            id: "benefits",
            variant: "transparent",
          }}
        />
    ),
  },
  {
    slug: "salesforce-to-shopify-migration",
    metadata: pageMetadata.salesforceToShopifyMigration,
    getSchema: createSalesforceToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: salesforceMigrationSectionCopy.brandsHeading,
            items: salesforceBrandLogos,
            slug: "salesforce-to-shopify-migration",
          }}
          faq={{
            idPrefix: "salesforce-migration-faq",
            items: salesforceFaqs,
          }}
          hero={salesforceHeroContent}
          process={salesforceProcessContent}
          secondaryServices={{
            boxes: salesforceBenefitsContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: salesforceBenefitsContent.description,
            eyebrow: salesforceBenefitsContent.eyebrow,
            heading: salesforceBenefitsContent.heading,
            id: "benefits",
            variant: "transparent",
          }}
          beforeProcess={
            <CityWhyChooseBoxesSection
              columns={4}
              content={{
                eyebrow: salesforceThingsToConsiderContent.eyebrow,
                heading: salesforceThingsToConsiderContent.heading,
                description: salesforceThingsToConsiderContent.description,
                items: salesforceThingsToConsiderContent.boxes.map((box) => ({
                  title: box.title,
                  description: box.description,
                  iconNode: <MigrationPlatformIcon name={box.iconName} />,
                })),
              }}
              id="things-to-consider"
              theme="light"
            />
          }
          testimonials={salesforceTestimonials}
          whyChoose={salesforceWhyChooseContent}
          whyMigrate={{
            boxes: salesforceWhyMigrateContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: salesforceWhyMigrateContent.description,
            eyebrow: salesforceWhyMigrateContent.eyebrow,
            heading: salesforceWhyMigrateContent.heading,
            id: "why-migrate",
            variant: "yellow",
          }}
        />
    ),
  },
  {
    slug: "square-to-shopify-migration",
    metadata: pageMetadata.squareToShopifyMigration,
    getSchema: createSquareToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: squareMigrationSectionCopy.brandsHeading,
            items: squareBrandLogos,
            slug: "square-to-shopify-migration",
          }}
          faq={{
            idPrefix: "square-migration-faq",
            items: squareFaqs,
          }}
          hero={squareHeroContent}
          process={squareProcessContent}
          testimonials={squareTestimonials}
          whyChoose={squareWhyChooseContent}
          whyMigrate={{
            boxes: squareWhyMigrateContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: squareWhyMigrateContent.description,
            eyebrow: squareWhyMigrateContent.eyebrow,
            heading: squareWhyMigrateContent.heading,
            id: "why-migrate",
            variant: "yellow",
          }}
        />
    ),
  },
    {
    slug: "squarespace-to-shopify-migration",
    metadata: pageMetadata.squarespaceToShopifyMigration,
    getSchema: createSquarespaceToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: squarespaceMigrationSectionCopy.brandsHeading,
            items: squarespaceBrandLogos,
            slug: "squarespace-to-shopify-migration",
          }}
          faq={{
            idPrefix: "squarespace-migration-faq",
            items: squarespaceFaqs,
          }}
          hero={squarespaceHeroContent}
          process={squarespaceProcessContent}
          secondaryServices={{
            boxes: squarespaceBenefitsContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: squarespaceBenefitsContent.description,
            eyebrow: squarespaceBenefitsContent.eyebrow,
            heading: squarespaceBenefitsContent.heading,
            id: "benefits",
            variant: "transparent",
          }}
          beforeProcess={
            <CityWhyChooseBoxesSection
              columns={4}
              content={{
                eyebrow: squarespaceWhatAfterContent.eyebrow,
                heading: squarespaceWhatAfterContent.heading,
                description: squarespaceWhatAfterContent.description,
                items: squarespaceWhatAfterContent.boxes.map((box) => ({
                  title: box.title,
                  description: box.description,
                  iconNode: <MigrationPlatformIcon name={box.iconName} />,
                })),
              }}
              id="after-migration"
              theme="light"
            />
          }
          testimonials={squarespaceTestimonials}
          whyChoose={squarespaceWhyChooseContent}
          whyMigrate={{
            boxes: squarespaceWhyMigrateContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: squarespaceWhyMigrateContent.description,
            eyebrow: squarespaceWhyMigrateContent.eyebrow,
            heading: squarespaceWhyMigrateContent.heading,
            id: "why-migrate",
            variant: "yellow",
          }}
        />
    ),
  },
  {
    slug: "wix-to-shopify-migration",
    metadata: pageMetadata.wixToShopifyMigration,
    getSchema: createWixToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: wixMigrationSectionCopy.brandsHeading,
            items: wixBrandLogos,
            slug: "wix-to-shopify-migration",
          }}
          faq={{
            idPrefix: "wix-migration-faq",
            items: wixFaqs,
          }}
          hero={wixHeroContent}
          process={wixProcessContent}
          beforeProcess={
            <CityWhyChooseBoxesSection
              columns={4}
              content={{
                eyebrow: wixThingsToConsiderContent.eyebrow,
                heading: wixThingsToConsiderContent.heading,
                description: wixThingsToConsiderContent.description,
                items: wixThingsToConsiderContent.boxes.map((box) => ({
                  title: box.title,
                  description: box.description,
                  iconNode: <MigrationPlatformIcon name={box.iconName} />,
                })),
              }}
              id="things-to-consider"
              theme="light"
            />
          }
          afterProcess={
            <CityWhyChooseBoxesSection
              columns={4}
              content={{
                eyebrow: wixWhatAfterContent.eyebrow,
                heading: wixWhatAfterContent.heading,
                description: wixWhatAfterContent.description,
                items: wixWhatAfterContent.boxes.map((box) => ({
                  title: box.title,
                  description: box.description,
                  iconNode: <MigrationPlatformIcon name={box.iconName} />,
                })),
              }}
              id="after-migration"
              theme="light"
            />
          }
          testimonials={wixTestimonials}
          whyChoose={wixWhyChooseContent}
          whyMigrate={{
            boxes: wixWhyMigrateContent.boxes.map((box) => ({
              description: box.description,
              icon: <MigrationPlatformIcon name={box.iconName} />,
              title: box.title,
            })),
            description: wixWhyMigrateContent.description,
            eyebrow: wixWhyMigrateContent.eyebrow,
            heading: wixWhyMigrateContent.heading,
            id: "why-migrate",
            variant: "yellow",
          }}
        />
    ),
  },
  {
    slug: "woocommerce-to-shopify-migration",
    metadata: pageMetadata.woocommerceToShopifyMigration,
    getSchema: createWooCommerceToShopifyMigrationPageSchema,
    render: () => (
      <ShopifyMigrationLandingTemplate
          brands={{
            heading: woocommerceMigrationSectionCopy.brandsHeading,
            items: woocommerceBrandLogos,
            slug: "woocommerce-to-shopify-migration",
          }}
          faq={{
            idPrefix: "woocommerce-migration-faq",
            items: woocommerceFaqs,
          }}
          hero={woocommerceHeroContent}
          process={woocommerceProcessContent}
          testimonials={woocommerceTestimonials}
          whyMigrate={{
            boxes: woocommerceWhyMigrateContent.items.map((item) => ({
              description: item.description,
              icon: <WooCommerceMigrationIcon name={item.iconName} />,
              title: item.title,
            })),
            description: woocommerceWhyMigrateContent.description,
            eyebrow: woocommerceWhyMigrateContent.eyebrow,
            heading: woocommerceWhyMigrateContent.heading,
            id: "why-migrate",
            variant: "yellow",
          }}
        />
    ),
  },
];
