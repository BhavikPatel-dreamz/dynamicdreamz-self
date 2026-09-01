import { ecwidFaqs, ecwidProcessContent } from "@/content/ecwid-to-shopify-migration";
import { migratingThemeToOnlineStore20Content } from "@/content/migrating-a-theme-to-online-store-2-0";
import { plusAgencyFaqs, plusAgencyProcessContent } from "@/content/shopify-plus-migration-agency";
import { magentoPlusFaqs, magentoPlusProcessContent } from "@/content/magento-to-shopify-plus-migration";
import { magentoFaqs, magentoProcessContent } from "@/content/magento-to-shopify-migration";
import { woocommerceFaqs, woocommerceProcessContent } from "@/content/woocommerce-to-shopify-migration";
import { squarespaceFaqs, squarespaceProcessContent } from "@/content/squarespace-to-shopify-migration";
import { salesforceFaqs, salesforceProcessContent } from "@/content/salesforce-to-shopify-migration";
import { etsyFaqs, etsyProcessContent } from "@/content/etsy-to-shopify-migration";
import { wixFaqs, wixProcessContent } from "@/content/wix-to-shopify-migration";
import { founders } from "@/content/about";
import { beautyIndustryPage } from "@/content/beauty-cosmetics";
import { contactPageContent } from "@/content/contact";
import { fashionIndustryPage } from "@/content/fashion";
import { foodBeveragesIndustryPage } from "@/content/food-beverages";
import {
  foodBeverageShopifyPlusFaqs,
  foodBeverageServices,
} from "@/content/food-beverage-shopify-plus-agency";
import { healthcareIndustryPage } from "@/content/healthcare";
import { hireWordPressFaqs } from "@/content/hire-wordpress-developers";
import { hireShopifyFaqs, hireShopifyServices } from "@/content/hire-shopify-developers";
import {
  certifiedDeveloperServices,
  shopifyCertifiedDeveloperSchemaFaqs,
} from "@/content/shopify-certified-developers";
import {
  shopifyHoursFaqs,
  shopifyHoursPackages,
} from "@/content/buy-shopify-development-hours";
import { petIndustryPage } from "@/content/pet-industry";
import { homeFaqs, organizationAnswerSummary, testimonials } from "@/content/home";
import { ourWorkCaseStudies, ourWorkProjects } from "@/content/our-work";
import {
  careerApplicationPath,
  careerJobs,
  careerLocations,
} from "@/content/career";
import { lifeFaqSection } from "@/content/life-dynamicdreamz";
import { resourceArticles } from "@/content/resources";
import { blogArchiveArticles, type BlogArchiveArticle } from "@/content/blogs";
import {
  shopifyPlusAgencyFaqs,
  shopifyPlusAgencyServices,
  shopifyPlusAgencyTestimonials,
} from "@/content/shopify-plus-agency";
import { whiteLabelShopifyFaqs } from "@/content/white-label-shopify-development";
import {
  whiteLabelWordPressFaqs,
  whiteLabelWordPressServices,
} from "@/content/white-label-wordpress-development";
import {
  whiteLabelWebsiteDesignFaqs,
  whiteLabelWebsiteDesignServices,
} from "@/content/white-label-website-design";
import { caseStudiesContent } from "@/content/case-studies";
import { shopifyAppsContent } from "@/content/shopify-apps";
import {
  shopifyCroFaqs,
  shopifyCroServices,
} from "@/content/shopify-cro-agency";
import {
  shopifyDevelopmentAgencyFaqs,
  shopifyDevelopmentAgencyServices,
} from "@/content/shopify-development-agency";
import { shopifyExpertsContent } from "@/content/shopify-experts";
import {
  magentoDevelopmentFaqs,
  magentoDevelopmentServices,
} from "@/content/magento-development";
import {
  shopifyMigrationFaqs,
  shopifyMigrationServices,
} from "@/content/shopify-migration";
import {
  prestashopBenefitsContent,
  prestashopFaqs,
  prestashopWhyChooseContent,
} from "@/content/prestashop-to-shopify-migration";
import {
  squareFaqs,
  squareProcessContent,
} from "@/content/square-to-shopify-migration";
import { shopifyThemeCustomizationContent } from "@/content/shopify-theme-customization";
import { prestigeThemeCustomizationContent } from "@/content/prestige-theme-customization";
import { impulseThemeCustomizationContent } from "@/content/impulse-theme-customization";
import { senseThemeCustomizationContent } from "@/content/sense-theme-customization";
import { beYoursThemeCustomizationContent } from "@/content/be-yours-theme-customization";
import { fabricThemeCustomizationContent } from "@/content/fabric-theme-customization";
import { savorThemeCustomizationContent } from "@/content/savor-theme-customization";
import { dawnThemeCustomizationContent } from "@/content/dawn-theme-customization";
import { studioThemeCustomizationContent } from "@/content/studio-theme-customization";
import { dwellThemeCustomizationContent } from "@/content/dwell-theme-customization";
import { tinkerThemeCustomizationContent } from "@/content/tinker-theme-customization";
import { pitchThemeCustomizationContent } from "@/content/pitch-theme-customization";
import { atelierThemeCustomizationContent } from "@/content/atelier-theme-customization";
import { heritageThemeCustomizationContent } from "@/content/heritage-theme-customization";
import { ritualThemeCustomizationContent } from "@/content/ritual-theme-customization";
import { publisherThemeCustomizationContent } from "@/content/publisher-theme-customization";
import { tradeThemeCustomizationContent } from "@/content/trade-theme-customization";
import { spotlightThemeCustomizationContent } from "@/content/spotlight-theme-customization";
import { refreshThemeCustomizationContent } from "@/content/refresh-theme-customization";
import { woodstockThemeCustomizationContent } from "@/content/woodstock-theme-customization";
import { originThemeCustomizationContent } from "@/content/origin-theme-customization";
import { stilettoThemeCustomizationContent } from "@/content/stiletto-theme-customization";
import { colorblockThemeCustomizationContent } from "@/content/colorblock-theme-customization";
import { pipelineThemeCustomizationContent } from "@/content/pipeline-theme-customization";
import { visionThemeCustomizationContent } from "@/content/vision-theme-customization";
import { craftThemeCustomizationContent } from "@/content/craft-theme-customization";
import { broadcastThemeCustomizationContent } from "@/content/broadcast-theme-customization";
import { warehouseThemeCustomizationContent } from "@/content/warehouse-theme-customization";
import { startupThemeCustomizationContent } from "@/content/startup-theme-customization";
import { impactThemeCustomizationContent } from "@/content/impact-theme-customization";
import { astraThemeCustomizationContent } from "@/content/astra-theme-customization";
import { kadenceThemeCustomizationContent } from "@/content/kadence-theme-customization";
import { helloElementorThemeCustomizationContent } from "@/content/hello-elementor-theme-customization";
import { royalElementorKitThemeCustomizationContent } from "@/content/royal-elementor-kit-theme-customization";
import { popularfxThemeCustomizationContent } from "@/content/popularfx-theme-customization";
import { bloghashThemeCustomizationContent } from "@/content/bloghash-theme-customization";
import { goThemeCustomizationContent } from "@/content/go-theme-customization";
import { newsbloggerThemeCustomizationContent } from "@/content/newsblogger-theme-customization";
import { helloBizThemeCustomizationContent } from "@/content/hello-biz-theme-customization";
import { generatepressThemeCustomizationContent } from "@/content/generatepress-theme-customization";
import { oceanwpThemeCustomizationContent } from "@/content/oceanwp-theme-customization";
import { neveThemeCustomizationContent } from "@/content/neve-theme-customization";
import { blocksyThemeCustomizationContent } from "@/content/blocksy-theme-customization";
import { extendableThemeCustomizationContent } from "@/content/extendable-theme-customization";
import { kubioThemeCustomizationContent } from "@/content/kubio-theme-customization";
import { shopifyDevelopmentBarcelonaContent } from "@/content/shopify-development-in-barcelona-spain";
import {
  woocommerceDevelopmentFaqs,
  woocommerceDevelopmentServices,
} from "@/content/woocommerce-development";
import {
  wordpressDevelopmentFaqs,
  wordpressDevelopmentServices,
} from "@/content/wordpress-development";
import {
  wordpressDevelopmentCompanyFaqs,
  wordpressDevelopmentCompanyServices,
} from "@/content/wordpress-development-company";
import {
  wordPressThemeCustomizationContent,
  wordPressThemeCustomizationFaqs,
} from "@/content/wordpress-theme-customization";
import {
  androidAppDevelopmentFaqs,
  androidAppDevelopmentServices,
} from "@/content/android-app-development";
import {
  iosAppDevelopmentFaqs,
  iosAppDevelopmentServices,
} from "@/content/ios-app-development";
import {
  crossPlatformAppDevelopmentFaqs,
  crossPlatformAppDevelopmentServices,
} from "@/content/cross-platform-app-development";
import { shopifyDevelopmentChennaiContent } from "@/content/shopify-development-company-in-chennai";
import { shopifyMaintenanceServicesContent } from "@/content/shopify-maintenance-services";
import { dentalClinicWebsiteDevelopmentCompanyContent } from "@/content/dental-clinic-website-development-company";
import { shopifyDevelopmentDelhiContent } from "@/content/shopify-development-in-delhi";
import { shopifyDevelopmentHyderabadContent } from "@/content/shopify-development-in-hyderabad";
import { wordpressDevelopmentDelhiContent } from "@/content/wordpress-development-in-delhi";
import { wordpressDevelopmentNoidaContent } from "@/content/wordpress-development-in-noida";
import { wordpressDevelopmentPuneContent } from "@/content/wordpress-development-in-pune";
import { wordpressDevelopmentAhmedabadContent } from "@/content/wordpress-development-in-ahmedabad";
import {
  shopifyMobileAppBenefits,
  shopifyMobileAppDevelopmentFaqs,
  shopifyMobileAppFeatures,
} from "@/content/shopify-mobile-app-development";
import {
  mobileApplicationDevelopmentOffers,
  mobileApplicationDevelopmentSchemaFaqs,
} from "@/content/mobile-application-development";
import {
  bigCommerceDevelopmentFaqs,
  bigCommerceDevelopmentServices,
} from "@/content/bigcommerce-development";
import {
  webDesignFaqs,
  webDesignServices,
} from "@/content/web-design";
import { companyFacts } from "@/data/company";
import { pageSeo, type PageSeoConfig } from "@/data/seo";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import type { CaseStudyDetail } from "@/types/case-study";
import type { BlogPostDetail } from "@/types/blog-post";

const organizationId = `${siteConfig.url}#organization`;
const websiteId = `${siteConfig.url}#website`;
const webPageId = `${siteConfig.url}#home-page`;
const breadcrumbId = `${siteConfig.url}#breadcrumb`;
const homeFaqId = `${siteConfig.url}#faq`;
// The homepage is emitted as the bare origin; every non-root page URL is
// slashless. `absoluteUrl` keeps all schema identifiers on that same policy.
// Every emitted `url`/breadcrumb item resolves through the shared helper so
// schema never disagrees with the page's canonical URL form.
// (The `#`-suffixed @id values above stay bare — they are opaque identifiers,
// not page URLs, and must remain byte-stable across pages.)
const homeUrl = absoluteUrl("/");
const aboutPageUrl = absoluteUrl(pageSeo.about.path);
const aboutPageId = `${aboutPageUrl}#webpage`;
const aboutBreadcrumbId = `${aboutPageUrl}#breadcrumb`;
const careerPageUrl = absoluteUrl(pageSeo.career.path);
const careerPageId = `${careerPageUrl}#webpage`;
const careerBreadcrumbId = `${careerPageUrl}#breadcrumb`;
const lifePageUrl = absoluteUrl(pageSeo.life.path);
const lifePageId = `${lifePageUrl}#webpage`;
const lifeBreadcrumbId = `${lifePageUrl}#breadcrumb`;
const lifeFaqId = `${lifePageUrl}#faq`;
const resourcesPageUrl = absoluteUrl(pageSeo.resources.path);
const resourcesPageId = `${resourcesPageUrl}#webpage`;
const resourcesBreadcrumbId = `${resourcesPageUrl}#breadcrumb`;
const resourcesItemListId = `${resourcesPageUrl}#articles`;
const contactPageUrl = absoluteUrl(pageSeo.contact.path);
const contactPageId = `${contactPageUrl}#webpage`;
const contactBreadcrumbId = `${contactPageUrl}#breadcrumb`;
const privacyPolicyPageUrl = absoluteUrl(pageSeo.privacyPolicy.path);
const privacyPolicyPageId = `${privacyPolicyPageUrl}#webpage`;
const privacyPolicyBreadcrumbId = `${privacyPolicyPageUrl}#breadcrumb`;
const requestQuotePageUrl = absoluteUrl(pageSeo.requestQuote.path);
const requestQuotePageId = `${requestQuotePageUrl}#webpage`;
const requestQuoteBreadcrumbId = `${requestQuotePageUrl}#breadcrumb`;
const ourWorkPageUrl = absoluteUrl(pageSeo.ourWork.path);
const ourWorkPageId = `${ourWorkPageUrl}#webpage`;
const ourWorkBreadcrumbId = `${ourWorkPageUrl}#breadcrumb`;
const ourWorkItemListId = `${ourWorkPageUrl}#projects`;
const ourWorkCaseStudyListId = `${ourWorkPageUrl}#case-studies`;
const beautyPageUrl = absoluteUrl(pageSeo.beautyCosmetics.path);
const beautyPageId = `${beautyPageUrl}#webpage`;
const beautyBreadcrumbId = `${beautyPageUrl}#breadcrumb`;
const beautyServiceId = `${beautyPageUrl}#service`;
const fashionPageUrl = absoluteUrl(pageSeo.fashion.path);
const fashionPageId = `${fashionPageUrl}#webpage`;
const fashionBreadcrumbId = `${fashionPageUrl}#breadcrumb`;
const fashionServiceId = `${fashionPageUrl}#service`;
const foodBeveragesPageUrl = absoluteUrl(pageSeo.foodBeverages.path);
const foodBeveragesPageId = `${foodBeveragesPageUrl}#webpage`;
const foodBeveragesBreadcrumbId = `${foodBeveragesPageUrl}#breadcrumb`;
const foodBeveragesServiceId = `${foodBeveragesPageUrl}#service`;
const foodBeverageShopifyPlusAgencyPageUrl = absoluteUrl(pageSeo.foodBeverageShopifyPlusAgency.path);
const foodBeverageShopifyPlusAgencyPageId = `${foodBeverageShopifyPlusAgencyPageUrl}#webpage`;
const foodBeverageShopifyPlusAgencyBreadcrumbId = `${foodBeverageShopifyPlusAgencyPageUrl}#breadcrumb`;
const foodBeverageShopifyPlusAgencyServiceId = `${foodBeverageShopifyPlusAgencyPageUrl}#service`;
const foodBeverageShopifyPlusAgencyFaqId = `${foodBeverageShopifyPlusAgencyPageUrl}#faq`;
const healthcarePageUrl = absoluteUrl(pageSeo.healthcare.path);
const healthcarePageId = `${healthcarePageUrl}#webpage`;
const healthcareBreadcrumbId = `${healthcarePageUrl}#breadcrumb`;
const healthcareServiceId = `${healthcarePageUrl}#service`;
const petIndustryPageUrl = absoluteUrl(pageSeo.petIndustry.path);
const petIndustryPageId = `${petIndustryPageUrl}#webpage`;
const petIndustryBreadcrumbId = `${petIndustryPageUrl}#breadcrumb`;
const petIndustryServiceId = `${petIndustryPageUrl}#service`;
const wordpressDevelopmentPageUrl = absoluteUrl(pageSeo.wordpressDevelopment.path);
const wordpressDevelopmentPageId = `${wordpressDevelopmentPageUrl}#webpage`;
const wordpressDevelopmentServiceId = `${wordpressDevelopmentPageUrl}#service`;
const wordpressDevelopmentFaqId = `${wordpressDevelopmentPageUrl}#faq`;
const wordpressDevelopmentBreadcrumbId = `${wordpressDevelopmentPageUrl}#breadcrumb`;
const wordpressDevelopmentCompanyPageUrl = absoluteUrl(
  pageSeo.wordpressDevelopmentCompany.path,
);
const wordpressDevelopmentCompanyPageId = `${wordpressDevelopmentCompanyPageUrl}#webpage`;
const wordpressDevelopmentCompanyServiceId = `${wordpressDevelopmentCompanyPageUrl}#service`;
const wordpressDevelopmentCompanyFaqId = `${wordpressDevelopmentCompanyPageUrl}#faq`;
const wordpressDevelopmentCompanyBreadcrumbId = `${wordpressDevelopmentCompanyPageUrl}#breadcrumb`;
const hireWordPressDevelopersPageUrl = absoluteUrl(pageSeo.hireWordPressDevelopers.path);
const hireWordPressDevelopersPageId = `${hireWordPressDevelopersPageUrl}#webpage`;
const hireWordPressDevelopersServiceId = `${hireWordPressDevelopersPageUrl}#service`;
const hireWordPressDevelopersFaqId = `${hireWordPressDevelopersPageUrl}#faq`;
const hireWordPressDevelopersBreadcrumbId = `${hireWordPressDevelopersPageUrl}#breadcrumb`;
const hireShopifyDevelopersPageUrl = absoluteUrl(pageSeo.hireShopifyDevelopers.path);
const hireShopifyDevelopersPageId = `${hireShopifyDevelopersPageUrl}#webpage`;
const hireShopifyDevelopersServiceId = `${hireShopifyDevelopersPageUrl}#service`;
const hireShopifyDevelopersFaqId = `${hireShopifyDevelopersPageUrl}#faq`;
const hireShopifyDevelopersBreadcrumbId = `${hireShopifyDevelopersPageUrl}#breadcrumb`;
const shopifyCertifiedDevelopersPageUrl = absoluteUrl(
  pageSeo.shopifyCertifiedDevelopers.path,
);
const shopifyCertifiedDevelopersPageId = `${shopifyCertifiedDevelopersPageUrl}#webpage`;
const shopifyCertifiedDevelopersServiceId = `${shopifyCertifiedDevelopersPageUrl}#service`;
const shopifyCertifiedDevelopersFaqId = `${shopifyCertifiedDevelopersPageUrl}#faq`;
const shopifyCertifiedDevelopersBreadcrumbId = `${shopifyCertifiedDevelopersPageUrl}#breadcrumb`;
const buyShopifyDevelopmentHoursPageUrl = absoluteUrl(
  pageSeo.buyShopifyDevelopmentHours.path,
);
const buyShopifyDevelopmentHoursPageId = `${buyShopifyDevelopmentHoursPageUrl}#webpage`;
const buyShopifyDevelopmentHoursServiceId = `${buyShopifyDevelopmentHoursPageUrl}#service`;
const buyShopifyDevelopmentHoursFaqId = `${buyShopifyDevelopmentHoursPageUrl}#faq`;
const buyShopifyDevelopmentHoursBreadcrumbId = `${buyShopifyDevelopmentHoursPageUrl}#breadcrumb`;
const shopifyExpertsPageUrl = absoluteUrl(pageSeo.shopifyExperts.path);
const shopifyExpertsPageId = `${shopifyExpertsPageUrl}#webpage`;
const shopifyExpertsServiceId = `${shopifyExpertsPageUrl}#service`;
const shopifyExpertsFaqId = `${shopifyExpertsPageUrl}#faq`;
const shopifyExpertsBreadcrumbId = `${shopifyExpertsPageUrl}#breadcrumb`;
const whiteLabelShopifyPageUrl = absoluteUrl(pageSeo.whiteLabelShopify.path);
const whiteLabelShopifyPageId = `${whiteLabelShopifyPageUrl}#webpage`;
const whiteLabelShopifyServiceId = `${whiteLabelShopifyPageUrl}#service`;
const whiteLabelShopifyFaqId = `${whiteLabelShopifyPageUrl}#faq`;
const whiteLabelShopifyBreadcrumbId = `${whiteLabelShopifyPageUrl}#breadcrumb`;
const whiteLabelWordPressPageUrl = absoluteUrl(pageSeo.whiteLabelWordPress.path);
const whiteLabelWordPressPageId = `${whiteLabelWordPressPageUrl}#webpage`;
const whiteLabelWordPressServiceId = `${whiteLabelWordPressPageUrl}#service`;
const whiteLabelWordPressFaqId = `${whiteLabelWordPressPageUrl}#faq`;
const whiteLabelWordPressBreadcrumbId = `${whiteLabelWordPressPageUrl}#breadcrumb`;
const whiteLabelWebsiteDesignPageUrl = absoluteUrl(pageSeo.whiteLabelWebsiteDesign.path);
const whiteLabelWebsiteDesignPageId = `${whiteLabelWebsiteDesignPageUrl}#webpage`;
const whiteLabelWebsiteDesignServiceId = `${whiteLabelWebsiteDesignPageUrl}#service`;
const whiteLabelWebsiteDesignFaqId = `${whiteLabelWebsiteDesignPageUrl}#faq`;
const whiteLabelWebsiteDesignBreadcrumbId = `${whiteLabelWebsiteDesignPageUrl}#breadcrumb`;
const shopifyPlusPageUrl = absoluteUrl(pageSeo.shopifyPlus.path);
const shopifyPlusPageId = `${shopifyPlusPageUrl}#webpage`;
const shopifyPlusServiceId = `${shopifyPlusPageUrl}#service`;
const shopifyPlusFaqId = `${shopifyPlusPageUrl}#faq`;
const shopifyPlusBreadcrumbId = `${shopifyPlusPageUrl}#breadcrumb`;
const shopifyMigrationPageUrl = absoluteUrl(pageSeo.shopifyMigration.path);
const shopifyMigrationPageId = `${shopifyMigrationPageUrl}#webpage`;
const shopifyMigrationServiceId = `${shopifyMigrationPageUrl}#service`;
const shopifyMigrationFaqId = `${shopifyMigrationPageUrl}#faq`;
const shopifyMigrationBreadcrumbId = `${shopifyMigrationPageUrl}#breadcrumb`;
const prestashopToShopifyMigrationPageUrl = absoluteUrl(pageSeo.prestashopToShopifyMigration.path);
const prestashopToShopifyMigrationPageId = `${prestashopToShopifyMigrationPageUrl}#webpage`;
const prestashopToShopifyMigrationServiceId = `${prestashopToShopifyMigrationPageUrl}#service`;
const prestashopToShopifyMigrationFaqId = `${prestashopToShopifyMigrationPageUrl}#faq`;
const prestashopToShopifyMigrationBreadcrumbId = `${prestashopToShopifyMigrationPageUrl}#breadcrumb`;
const squareToShopifyMigrationPageUrl = absoluteUrl(pageSeo.squareToShopifyMigration.path);
const squareToShopifyMigrationPageId = `${squareToShopifyMigrationPageUrl}#webpage`;
const squareToShopifyMigrationServiceId = `${squareToShopifyMigrationPageUrl}#service`;
const squareToShopifyMigrationFaqId = `${squareToShopifyMigrationPageUrl}#faq`;
const squareToShopifyMigrationBreadcrumbId = `${squareToShopifyMigrationPageUrl}#breadcrumb`;
const ecwidToShopifyMigrationPageUrl = absoluteUrl(pageSeo.ecwidToShopifyMigration.path);
const ecwidToShopifyMigrationPageId = `${ecwidToShopifyMigrationPageUrl}#webpage`;
const ecwidToShopifyMigrationServiceId = `${ecwidToShopifyMigrationPageUrl}#service`;
const ecwidToShopifyMigrationFaqId = `${ecwidToShopifyMigrationPageUrl}#faq`;
const ecwidToShopifyMigrationBreadcrumbId = `${ecwidToShopifyMigrationPageUrl}#breadcrumb`;
const migratingThemeToOnlineStore20PageUrl = absoluteUrl(pageSeo.migratingThemeToOnlineStore20.path);
const migratingThemeToOnlineStore20PageId = `${migratingThemeToOnlineStore20PageUrl}#webpage`;
const migratingThemeToOnlineStore20ServiceId = `${migratingThemeToOnlineStore20PageUrl}#service`;
const migratingThemeToOnlineStore20BreadcrumbId = `${migratingThemeToOnlineStore20PageUrl}#breadcrumb`;
const shopifyPlusMigrationAgencyPageUrl = absoluteUrl(pageSeo.shopifyPlusMigrationAgency.path);
const shopifyPlusMigrationAgencyPageId = `${shopifyPlusMigrationAgencyPageUrl}#webpage`;
const shopifyPlusMigrationAgencyServiceId = `${shopifyPlusMigrationAgencyPageUrl}#service`;
const shopifyPlusMigrationAgencyFaqId = `${shopifyPlusMigrationAgencyPageUrl}#faq`;
const shopifyPlusMigrationAgencyBreadcrumbId = `${shopifyPlusMigrationAgencyPageUrl}#breadcrumb`;
const magentoToShopifyPlusMigrationPageUrl = absoluteUrl(pageSeo.magentoToShopifyPlusMigration.path);
const magentoToShopifyPlusMigrationPageId = `${magentoToShopifyPlusMigrationPageUrl}#webpage`;
const magentoToShopifyPlusMigrationServiceId = `${magentoToShopifyPlusMigrationPageUrl}#service`;
const magentoToShopifyPlusMigrationFaqId = `${magentoToShopifyPlusMigrationPageUrl}#faq`;
const magentoToShopifyPlusMigrationBreadcrumbId = `${magentoToShopifyPlusMigrationPageUrl}#breadcrumb`;
const magentoToShopifyMigrationPageUrl = absoluteUrl(pageSeo.magentoToShopifyMigration.path);
const magentoToShopifyMigrationPageId = `${magentoToShopifyMigrationPageUrl}#webpage`;
const magentoToShopifyMigrationServiceId = `${magentoToShopifyMigrationPageUrl}#service`;
const magentoToShopifyMigrationFaqId = `${magentoToShopifyMigrationPageUrl}#faq`;
const magentoToShopifyMigrationBreadcrumbId = `${magentoToShopifyMigrationPageUrl}#breadcrumb`;
const woocommerceToShopifyMigrationPageUrl = absoluteUrl(pageSeo.woocommerceToShopifyMigration.path);
const woocommerceToShopifyMigrationPageId = `${woocommerceToShopifyMigrationPageUrl}#webpage`;
const woocommerceToShopifyMigrationServiceId = `${woocommerceToShopifyMigrationPageUrl}#service`;
const woocommerceToShopifyMigrationFaqId = `${woocommerceToShopifyMigrationPageUrl}#faq`;
const woocommerceToShopifyMigrationBreadcrumbId = `${woocommerceToShopifyMigrationPageUrl}#breadcrumb`;
const squarespaceToShopifyMigrationPageUrl = absoluteUrl(pageSeo.squarespaceToShopifyMigration.path);
const squarespaceToShopifyMigrationPageId = `${squarespaceToShopifyMigrationPageUrl}#webpage`;
const squarespaceToShopifyMigrationServiceId = `${squarespaceToShopifyMigrationPageUrl}#service`;
const squarespaceToShopifyMigrationFaqId = `${squarespaceToShopifyMigrationPageUrl}#faq`;
const squarespaceToShopifyMigrationBreadcrumbId = `${squarespaceToShopifyMigrationPageUrl}#breadcrumb`;
const salesforceToShopifyMigrationPageUrl = absoluteUrl(pageSeo.salesforceToShopifyMigration.path);
const salesforceToShopifyMigrationPageId = `${salesforceToShopifyMigrationPageUrl}#webpage`;
const salesforceToShopifyMigrationServiceId = `${salesforceToShopifyMigrationPageUrl}#service`;
const salesforceToShopifyMigrationFaqId = `${salesforceToShopifyMigrationPageUrl}#faq`;
const salesforceToShopifyMigrationBreadcrumbId = `${salesforceToShopifyMigrationPageUrl}#breadcrumb`;
const etsyToShopifyMigrationPageUrl = absoluteUrl(pageSeo.etsyToShopifyMigration.path);
const etsyToShopifyMigrationPageId = `${etsyToShopifyMigrationPageUrl}#webpage`;
const etsyToShopifyMigrationServiceId = `${etsyToShopifyMigrationPageUrl}#service`;
const etsyToShopifyMigrationFaqId = `${etsyToShopifyMigrationPageUrl}#faq`;
const etsyToShopifyMigrationBreadcrumbId = `${etsyToShopifyMigrationPageUrl}#breadcrumb`;
const wixToShopifyMigrationPageUrl = absoluteUrl(pageSeo.wixToShopifyMigration.path);
const wixToShopifyMigrationPageId = `${wixToShopifyMigrationPageUrl}#webpage`;
const wixToShopifyMigrationServiceId = `${wixToShopifyMigrationPageUrl}#service`;
const wixToShopifyMigrationFaqId = `${wixToShopifyMigrationPageUrl}#faq`;
const wixToShopifyMigrationBreadcrumbId = `${wixToShopifyMigrationPageUrl}#breadcrumb`;
const shopifyCroPageUrl = absoluteUrl(pageSeo.shopifyCro.path);
const shopifyCroPageId = `${shopifyCroPageUrl}#webpage`;
const shopifyCroServiceId = `${shopifyCroPageUrl}#service`;
const shopifyCroFaqId = `${shopifyCroPageUrl}#faq`;
const shopifyCroBreadcrumbId = `${shopifyCroPageUrl}#breadcrumb`;
const caseStudiesPageUrl = absoluteUrl(pageSeo.caseStudies.path);
const caseStudiesPageId = `${caseStudiesPageUrl}#webpage`;
const caseStudiesBreadcrumbId = `${caseStudiesPageUrl}#breadcrumb`;
const caseStudiesItemListId = `${caseStudiesPageUrl}#case-studies`;
const shopifyAppsPageUrl = absoluteUrl(pageSeo.shopifyApps.path);
const shopifyAppsPageId = `${shopifyAppsPageUrl}#webpage`;
const shopifyAppsBreadcrumbId = `${shopifyAppsPageUrl}#breadcrumb`;
const shopifyAppsItemListId = `${shopifyAppsPageUrl}#apps`;
const shopifyThemeCustomizationPageUrl = absoluteUrl(pageSeo.shopifyThemeCustomization.path);
const shopifyThemeCustomizationPageId = `${shopifyThemeCustomizationPageUrl}#webpage`;
const shopifyThemeCustomizationServiceId = `${shopifyThemeCustomizationPageUrl}#service`;
const shopifyThemeCustomizationFaqId = `${shopifyThemeCustomizationPageUrl}#faq`;
const shopifyThemeCustomizationBreadcrumbId = `${shopifyThemeCustomizationPageUrl}#breadcrumb`;
const prestigeThemeCustomizationPageUrl = absoluteUrl(pageSeo.prestigeThemeCustomization.path);
const prestigeThemeCustomizationPageId = `${prestigeThemeCustomizationPageUrl}#webpage`;
const prestigeThemeCustomizationServiceId = `${prestigeThemeCustomizationPageUrl}#service`;
const prestigeThemeCustomizationFaqId = `${prestigeThemeCustomizationPageUrl}#faq`;
const prestigeThemeCustomizationBreadcrumbId = `${prestigeThemeCustomizationPageUrl}#breadcrumb`;
const astraThemeCustomizationPageUrl = absoluteUrl(pageSeo.astraThemeCustomization.path);
const astraThemeCustomizationPageId = `${astraThemeCustomizationPageUrl}#webpage`;
const astraThemeCustomizationServiceId = `${astraThemeCustomizationPageUrl}#service`;
const astraThemeCustomizationFaqId = `${astraThemeCustomizationPageUrl}#faq`;
const astraThemeCustomizationBreadcrumbId = `${astraThemeCustomizationPageUrl}#breadcrumb`;
const kadenceThemeCustomizationPageUrl = absoluteUrl(pageSeo.kadenceThemeCustomization.path);
const kadenceThemeCustomizationPageId = `${kadenceThemeCustomizationPageUrl}#webpage`;
const kadenceThemeCustomizationServiceId = `${kadenceThemeCustomizationPageUrl}#service`;
const kadenceThemeCustomizationFaqId = `${kadenceThemeCustomizationPageUrl}#faq`;
const kadenceThemeCustomizationBreadcrumbId = `${kadenceThemeCustomizationPageUrl}#breadcrumb`;
const helloElementorThemeCustomizationPageUrl = absoluteUrl(pageSeo.helloElementorThemeCustomization.path);
const helloElementorThemeCustomizationPageId = `${helloElementorThemeCustomizationPageUrl}#webpage`;
const helloElementorThemeCustomizationServiceId = `${helloElementorThemeCustomizationPageUrl}#service`;
const helloElementorThemeCustomizationFaqId = `${helloElementorThemeCustomizationPageUrl}#faq`;
const helloElementorThemeCustomizationBreadcrumbId = `${helloElementorThemeCustomizationPageUrl}#breadcrumb`;
const royalElementorKitThemeCustomizationPageUrl = absoluteUrl(pageSeo.royalElementorKitThemeCustomization.path);
const royalElementorKitThemeCustomizationPageId = `${royalElementorKitThemeCustomizationPageUrl}#webpage`;
const royalElementorKitThemeCustomizationServiceId = `${royalElementorKitThemeCustomizationPageUrl}#service`;
const royalElementorKitThemeCustomizationFaqId = `${royalElementorKitThemeCustomizationPageUrl}#faq`;
const royalElementorKitThemeCustomizationBreadcrumbId = `${royalElementorKitThemeCustomizationPageUrl}#breadcrumb`;
const popularfxThemeCustomizationPageUrl = absoluteUrl(pageSeo.popularfxThemeCustomization.path);
const popularfxThemeCustomizationPageId = `${popularfxThemeCustomizationPageUrl}#webpage`;
const popularfxThemeCustomizationServiceId = `${popularfxThemeCustomizationPageUrl}#service`;
const popularfxThemeCustomizationFaqId = `${popularfxThemeCustomizationPageUrl}#faq`;
const popularfxThemeCustomizationBreadcrumbId = `${popularfxThemeCustomizationPageUrl}#breadcrumb`;
const bloghashThemeCustomizationPageUrl = absoluteUrl(pageSeo.bloghashThemeCustomization.path);
const bloghashThemeCustomizationPageId = `${bloghashThemeCustomizationPageUrl}#webpage`;
const bloghashThemeCustomizationServiceId = `${bloghashThemeCustomizationPageUrl}#service`;
const bloghashThemeCustomizationFaqId = `${bloghashThemeCustomizationPageUrl}#faq`;
const bloghashThemeCustomizationBreadcrumbId = `${bloghashThemeCustomizationPageUrl}#breadcrumb`;
const goThemeCustomizationPageUrl = absoluteUrl(pageSeo.goThemeCustomization.path);
const goThemeCustomizationPageId = `${goThemeCustomizationPageUrl}#webpage`;
const goThemeCustomizationServiceId = `${goThemeCustomizationPageUrl}#service`;
const goThemeCustomizationFaqId = `${goThemeCustomizationPageUrl}#faq`;
const goThemeCustomizationBreadcrumbId = `${goThemeCustomizationPageUrl}#breadcrumb`;
const newsbloggerThemeCustomizationPageUrl = absoluteUrl(pageSeo.newsbloggerThemeCustomization.path);
const newsbloggerThemeCustomizationPageId = `${newsbloggerThemeCustomizationPageUrl}#webpage`;
const newsbloggerThemeCustomizationServiceId = `${newsbloggerThemeCustomizationPageUrl}#service`;
const newsbloggerThemeCustomizationFaqId = `${newsbloggerThemeCustomizationPageUrl}#faq`;
const newsbloggerThemeCustomizationBreadcrumbId = `${newsbloggerThemeCustomizationPageUrl}#breadcrumb`;
const helloBizThemeCustomizationPageUrl = absoluteUrl(pageSeo.helloBizThemeCustomization.path);
const helloBizThemeCustomizationPageId = `${helloBizThemeCustomizationPageUrl}#webpage`;
const helloBizThemeCustomizationServiceId = `${helloBizThemeCustomizationPageUrl}#service`;
const helloBizThemeCustomizationFaqId = `${helloBizThemeCustomizationPageUrl}#faq`;
const helloBizThemeCustomizationBreadcrumbId = `${helloBizThemeCustomizationPageUrl}#breadcrumb`;
const generatepressThemeCustomizationPageUrl = absoluteUrl(pageSeo.generatepressThemeCustomization.path);
const generatepressThemeCustomizationPageId = `${generatepressThemeCustomizationPageUrl}#webpage`;
const generatepressThemeCustomizationServiceId = `${generatepressThemeCustomizationPageUrl}#service`;
const generatepressThemeCustomizationFaqId = `${generatepressThemeCustomizationPageUrl}#faq`;
const generatepressThemeCustomizationBreadcrumbId = `${generatepressThemeCustomizationPageUrl}#breadcrumb`;
const oceanwpThemeCustomizationPageUrl = absoluteUrl(pageSeo.oceanwpThemeCustomization.path);
const oceanwpThemeCustomizationPageId = `${oceanwpThemeCustomizationPageUrl}#webpage`;
const oceanwpThemeCustomizationServiceId = `${oceanwpThemeCustomizationPageUrl}#service`;
const oceanwpThemeCustomizationFaqId = `${oceanwpThemeCustomizationPageUrl}#faq`;
const oceanwpThemeCustomizationBreadcrumbId = `${oceanwpThemeCustomizationPageUrl}#breadcrumb`;
const neveThemeCustomizationPageUrl = absoluteUrl(pageSeo.neveThemeCustomization.path);
const neveThemeCustomizationPageId = `${neveThemeCustomizationPageUrl}#webpage`;
const neveThemeCustomizationServiceId = `${neveThemeCustomizationPageUrl}#service`;
const neveThemeCustomizationFaqId = `${neveThemeCustomizationPageUrl}#faq`;
const neveThemeCustomizationBreadcrumbId = `${neveThemeCustomizationPageUrl}#breadcrumb`;
const blocksyThemeCustomizationPageUrl = absoluteUrl(pageSeo.blocksyThemeCustomization.path);
const blocksyThemeCustomizationPageId = `${blocksyThemeCustomizationPageUrl}#webpage`;
const blocksyThemeCustomizationServiceId = `${blocksyThemeCustomizationPageUrl}#service`;
const blocksyThemeCustomizationFaqId = `${blocksyThemeCustomizationPageUrl}#faq`;
const blocksyThemeCustomizationBreadcrumbId = `${blocksyThemeCustomizationPageUrl}#breadcrumb`;
const extendableThemeCustomizationPageUrl = absoluteUrl(pageSeo.extendableThemeCustomization.path);
const extendableThemeCustomizationPageId = `${extendableThemeCustomizationPageUrl}#webpage`;
const extendableThemeCustomizationServiceId = `${extendableThemeCustomizationPageUrl}#service`;
const extendableThemeCustomizationFaqId = `${extendableThemeCustomizationPageUrl}#faq`;
const extendableThemeCustomizationBreadcrumbId = `${extendableThemeCustomizationPageUrl}#breadcrumb`;
const kubioThemeCustomizationPageUrl = absoluteUrl(pageSeo.kubioThemeCustomization.path);
const kubioThemeCustomizationPageId = `${kubioThemeCustomizationPageUrl}#webpage`;
const kubioThemeCustomizationServiceId = `${kubioThemeCustomizationPageUrl}#service`;
const kubioThemeCustomizationFaqId = `${kubioThemeCustomizationPageUrl}#faq`;
const kubioThemeCustomizationBreadcrumbId = `${kubioThemeCustomizationPageUrl}#breadcrumb`;
const impulseThemeCustomizationPageUrl = absoluteUrl(pageSeo.impulseThemeCustomization.path);
const impulseThemeCustomizationPageId = `${impulseThemeCustomizationPageUrl}#webpage`;
const impulseThemeCustomizationServiceId = `${impulseThemeCustomizationPageUrl}#service`;
const impulseThemeCustomizationFaqId = `${impulseThemeCustomizationPageUrl}#faq`;
const impulseThemeCustomizationBreadcrumbId = `${impulseThemeCustomizationPageUrl}#breadcrumb`;
const senseThemeCustomizationPageUrl = absoluteUrl(pageSeo.senseThemeCustomization.path);
const senseThemeCustomizationPageId = `${senseThemeCustomizationPageUrl}#webpage`;
const senseThemeCustomizationServiceId = `${senseThemeCustomizationPageUrl}#service`;
const senseThemeCustomizationFaqId = `${senseThemeCustomizationPageUrl}#faq`;
const senseThemeCustomizationBreadcrumbId = `${senseThemeCustomizationPageUrl}#breadcrumb`;
const beYoursThemeCustomizationPageUrl = absoluteUrl(pageSeo.beYoursThemeCustomization.path);
const beYoursThemeCustomizationPageId = `${beYoursThemeCustomizationPageUrl}#webpage`;
const beYoursThemeCustomizationServiceId = `${beYoursThemeCustomizationPageUrl}#service`;
const beYoursThemeCustomizationFaqId = `${beYoursThemeCustomizationPageUrl}#faq`;
const beYoursThemeCustomizationBreadcrumbId = `${beYoursThemeCustomizationPageUrl}#breadcrumb`;
const fabricThemeCustomizationPageUrl = absoluteUrl(pageSeo.fabricThemeCustomization.path);
const fabricThemeCustomizationPageId = `${fabricThemeCustomizationPageUrl}#webpage`;
const fabricThemeCustomizationServiceId = `${fabricThemeCustomizationPageUrl}#service`;
const fabricThemeCustomizationFaqId = `${fabricThemeCustomizationPageUrl}#faq`;
const fabricThemeCustomizationBreadcrumbId = `${fabricThemeCustomizationPageUrl}#breadcrumb`;
const savorThemeCustomizationPageUrl = absoluteUrl(pageSeo.savorThemeCustomization.path);
const savorThemeCustomizationPageId = `${savorThemeCustomizationPageUrl}#webpage`;
const savorThemeCustomizationServiceId = `${savorThemeCustomizationPageUrl}#service`;
const savorThemeCustomizationFaqId = `${savorThemeCustomizationPageUrl}#faq`;
const savorThemeCustomizationBreadcrumbId = `${savorThemeCustomizationPageUrl}#breadcrumb`;
const dawnThemeCustomizationPageUrl = absoluteUrl(pageSeo.dawnThemeCustomization.path);
const dawnThemeCustomizationPageId = `${dawnThemeCustomizationPageUrl}#webpage`;
const dawnThemeCustomizationServiceId = `${dawnThemeCustomizationPageUrl}#service`;
const dawnThemeCustomizationFaqId = `${dawnThemeCustomizationPageUrl}#faq`;
const dawnThemeCustomizationBreadcrumbId = `${dawnThemeCustomizationPageUrl}#breadcrumb`;
const studioThemeCustomizationPageUrl = absoluteUrl(pageSeo.studioThemeCustomization.path);
const studioThemeCustomizationPageId = `${studioThemeCustomizationPageUrl}#webpage`;
const studioThemeCustomizationServiceId = `${studioThemeCustomizationPageUrl}#service`;
const studioThemeCustomizationFaqId = `${studioThemeCustomizationPageUrl}#faq`;
const studioThemeCustomizationBreadcrumbId = `${studioThemeCustomizationPageUrl}#breadcrumb`;
const dwellThemeCustomizationPageUrl = absoluteUrl(pageSeo.dwellThemeCustomization.path);
const dwellThemeCustomizationPageId = `${dwellThemeCustomizationPageUrl}#webpage`;
const dwellThemeCustomizationServiceId = `${dwellThemeCustomizationPageUrl}#service`;
const dwellThemeCustomizationFaqId = `${dwellThemeCustomizationPageUrl}#faq`;
const dwellThemeCustomizationBreadcrumbId = `${dwellThemeCustomizationPageUrl}#breadcrumb`;
const tinkerThemeCustomizationPageUrl = absoluteUrl(pageSeo.tinkerThemeCustomization.path);
const tinkerThemeCustomizationPageId = `${tinkerThemeCustomizationPageUrl}#webpage`;
const tinkerThemeCustomizationServiceId = `${tinkerThemeCustomizationPageUrl}#service`;
const tinkerThemeCustomizationFaqId = `${tinkerThemeCustomizationPageUrl}#faq`;
const tinkerThemeCustomizationBreadcrumbId = `${tinkerThemeCustomizationPageUrl}#breadcrumb`;
const pitchThemeCustomizationPageUrl = absoluteUrl(pageSeo.pitchThemeCustomization.path);
const pitchThemeCustomizationPageId = `${pitchThemeCustomizationPageUrl}#webpage`;
const pitchThemeCustomizationServiceId = `${pitchThemeCustomizationPageUrl}#service`;
const pitchThemeCustomizationFaqId = `${pitchThemeCustomizationPageUrl}#faq`;
const pitchThemeCustomizationBreadcrumbId = `${pitchThemeCustomizationPageUrl}#breadcrumb`;
const atelierThemeCustomizationPageUrl = absoluteUrl(pageSeo.atelierThemeCustomization.path);
const atelierThemeCustomizationPageId = `${atelierThemeCustomizationPageUrl}#webpage`;
const atelierThemeCustomizationServiceId = `${atelierThemeCustomizationPageUrl}#service`;
const atelierThemeCustomizationFaqId = `${atelierThemeCustomizationPageUrl}#faq`;
const atelierThemeCustomizationBreadcrumbId = `${atelierThemeCustomizationPageUrl}#breadcrumb`;
const heritageThemeCustomizationPageUrl = absoluteUrl(pageSeo.heritageThemeCustomization.path);
const heritageThemeCustomizationPageId = `${heritageThemeCustomizationPageUrl}#webpage`;
const heritageThemeCustomizationServiceId = `${heritageThemeCustomizationPageUrl}#service`;
const heritageThemeCustomizationFaqId = `${heritageThemeCustomizationPageUrl}#faq`;
const heritageThemeCustomizationBreadcrumbId = `${heritageThemeCustomizationPageUrl}#breadcrumb`;
const ritualThemeCustomizationPageUrl = absoluteUrl(pageSeo.ritualThemeCustomization.path);
const ritualThemeCustomizationPageId = `${ritualThemeCustomizationPageUrl}#webpage`;
const ritualThemeCustomizationServiceId = `${ritualThemeCustomizationPageUrl}#service`;
const ritualThemeCustomizationFaqId = `${ritualThemeCustomizationPageUrl}#faq`;
const ritualThemeCustomizationBreadcrumbId = `${ritualThemeCustomizationPageUrl}#breadcrumb`;
const publisherThemeCustomizationPageUrl = absoluteUrl(pageSeo.publisherThemeCustomization.path);
const publisherThemeCustomizationPageId = `${publisherThemeCustomizationPageUrl}#webpage`;
const publisherThemeCustomizationServiceId = `${publisherThemeCustomizationPageUrl}#service`;
const publisherThemeCustomizationFaqId = `${publisherThemeCustomizationPageUrl}#faq`;
const publisherThemeCustomizationBreadcrumbId = `${publisherThemeCustomizationPageUrl}#breadcrumb`;
const tradeThemeCustomizationPageUrl = absoluteUrl(pageSeo.tradeThemeCustomization.path);
const tradeThemeCustomizationPageId = `${tradeThemeCustomizationPageUrl}#webpage`;
const tradeThemeCustomizationServiceId = `${tradeThemeCustomizationPageUrl}#service`;
const tradeThemeCustomizationFaqId = `${tradeThemeCustomizationPageUrl}#faq`;
const tradeThemeCustomizationBreadcrumbId = `${tradeThemeCustomizationPageUrl}#breadcrumb`;
const spotlightThemeCustomizationPageUrl = absoluteUrl(pageSeo.spotlightThemeCustomization.path);
const spotlightThemeCustomizationPageId = `${spotlightThemeCustomizationPageUrl}#webpage`;
const spotlightThemeCustomizationServiceId = `${spotlightThemeCustomizationPageUrl}#service`;
const spotlightThemeCustomizationFaqId = `${spotlightThemeCustomizationPageUrl}#faq`;
const spotlightThemeCustomizationBreadcrumbId = `${spotlightThemeCustomizationPageUrl}#breadcrumb`;
const refreshThemeCustomizationPageUrl = absoluteUrl(pageSeo.refreshThemeCustomization.path);
const refreshThemeCustomizationPageId = `${refreshThemeCustomizationPageUrl}#webpage`;
const refreshThemeCustomizationServiceId = `${refreshThemeCustomizationPageUrl}#service`;
const refreshThemeCustomizationFaqId = `${refreshThemeCustomizationPageUrl}#faq`;
const refreshThemeCustomizationBreadcrumbId = `${refreshThemeCustomizationPageUrl}#breadcrumb`;
const woodstockThemeCustomizationPageUrl = absoluteUrl(pageSeo.woodstockThemeCustomization.path);
const woodstockThemeCustomizationPageId = `${woodstockThemeCustomizationPageUrl}#webpage`;
const woodstockThemeCustomizationServiceId = `${woodstockThemeCustomizationPageUrl}#service`;
const woodstockThemeCustomizationFaqId = `${woodstockThemeCustomizationPageUrl}#faq`;
const woodstockThemeCustomizationBreadcrumbId = `${woodstockThemeCustomizationPageUrl}#breadcrumb`;
const originThemeCustomizationPageUrl = absoluteUrl(pageSeo.originThemeCustomization.path);
const originThemeCustomizationPageId = `${originThemeCustomizationPageUrl}#webpage`;
const originThemeCustomizationServiceId = `${originThemeCustomizationPageUrl}#service`;
const originThemeCustomizationFaqId = `${originThemeCustomizationPageUrl}#faq`;
const originThemeCustomizationBreadcrumbId = `${originThemeCustomizationPageUrl}#breadcrumb`;
const stilettoThemeCustomizationPageUrl = absoluteUrl(pageSeo.stilettoThemeCustomization.path);
const stilettoThemeCustomizationPageId = `${stilettoThemeCustomizationPageUrl}#webpage`;
const stilettoThemeCustomizationServiceId = `${stilettoThemeCustomizationPageUrl}#service`;
const stilettoThemeCustomizationFaqId = `${stilettoThemeCustomizationPageUrl}#faq`;
const stilettoThemeCustomizationBreadcrumbId = `${stilettoThemeCustomizationPageUrl}#breadcrumb`;
const colorblockThemeCustomizationPageUrl = absoluteUrl(pageSeo.colorblockThemeCustomization.path);
const colorblockThemeCustomizationPageId = `${colorblockThemeCustomizationPageUrl}#webpage`;
const colorblockThemeCustomizationServiceId = `${colorblockThemeCustomizationPageUrl}#service`;
const colorblockThemeCustomizationFaqId = `${colorblockThemeCustomizationPageUrl}#faq`;
const colorblockThemeCustomizationBreadcrumbId = `${colorblockThemeCustomizationPageUrl}#breadcrumb`;
const pipelineThemeCustomizationPageUrl = absoluteUrl(pageSeo.pipelineThemeCustomization.path);
const pipelineThemeCustomizationPageId = `${pipelineThemeCustomizationPageUrl}#webpage`;
const pipelineThemeCustomizationServiceId = `${pipelineThemeCustomizationPageUrl}#service`;
const pipelineThemeCustomizationFaqId = `${pipelineThemeCustomizationPageUrl}#faq`;
const pipelineThemeCustomizationBreadcrumbId = `${pipelineThemeCustomizationPageUrl}#breadcrumb`;
const visionThemeCustomizationPageUrl = absoluteUrl(pageSeo.visionThemeCustomization.path);
const visionThemeCustomizationPageId = `${visionThemeCustomizationPageUrl}#webpage`;
const visionThemeCustomizationServiceId = `${visionThemeCustomizationPageUrl}#service`;
const visionThemeCustomizationFaqId = `${visionThemeCustomizationPageUrl}#faq`;
const visionThemeCustomizationBreadcrumbId = `${visionThemeCustomizationPageUrl}#breadcrumb`;
const craftThemeCustomizationPageUrl = absoluteUrl(pageSeo.craftThemeCustomization.path);
const craftThemeCustomizationPageId = `${craftThemeCustomizationPageUrl}#webpage`;
const craftThemeCustomizationServiceId = `${craftThemeCustomizationPageUrl}#service`;
const craftThemeCustomizationFaqId = `${craftThemeCustomizationPageUrl}#faq`;
const craftThemeCustomizationBreadcrumbId = `${craftThemeCustomizationPageUrl}#breadcrumb`;
const broadcastThemeCustomizationPageUrl = absoluteUrl(pageSeo.broadcastThemeCustomization.path);
const broadcastThemeCustomizationPageId = `${broadcastThemeCustomizationPageUrl}#webpage`;
const broadcastThemeCustomizationServiceId = `${broadcastThemeCustomizationPageUrl}#service`;
const broadcastThemeCustomizationFaqId = `${broadcastThemeCustomizationPageUrl}#faq`;
const broadcastThemeCustomizationBreadcrumbId = `${broadcastThemeCustomizationPageUrl}#breadcrumb`;
const warehouseThemeCustomizationPageUrl = absoluteUrl(pageSeo.warehouseThemeCustomization.path);
const warehouseThemeCustomizationPageId = `${warehouseThemeCustomizationPageUrl}#webpage`;
const warehouseThemeCustomizationServiceId = `${warehouseThemeCustomizationPageUrl}#service`;
const warehouseThemeCustomizationFaqId = `${warehouseThemeCustomizationPageUrl}#faq`;
const warehouseThemeCustomizationBreadcrumbId = `${warehouseThemeCustomizationPageUrl}#breadcrumb`;
const startupThemeCustomizationPageUrl = absoluteUrl(pageSeo.startupThemeCustomization.path);
const startupThemeCustomizationPageId = `${startupThemeCustomizationPageUrl}#webpage`;
const startupThemeCustomizationServiceId = `${startupThemeCustomizationPageUrl}#service`;
const startupThemeCustomizationFaqId = `${startupThemeCustomizationPageUrl}#faq`;
const startupThemeCustomizationBreadcrumbId = `${startupThemeCustomizationPageUrl}#breadcrumb`;
const impactThemeCustomizationPageUrl = absoluteUrl(pageSeo.impactThemeCustomization.path);
const impactThemeCustomizationPageId = `${impactThemeCustomizationPageUrl}#webpage`;
const impactThemeCustomizationServiceId = `${impactThemeCustomizationPageUrl}#service`;
const impactThemeCustomizationFaqId = `${impactThemeCustomizationPageUrl}#faq`;
const impactThemeCustomizationBreadcrumbId = `${impactThemeCustomizationPageUrl}#breadcrumb`;
const shopifyDevelopmentAgencyPageUrl = absoluteUrl(pageSeo.shopifyDevelopmentAgency.path);
const shopifyDevelopmentAgencyPageId = `${shopifyDevelopmentAgencyPageUrl}#webpage`;
const shopifyDevelopmentAgencyServiceId = `${shopifyDevelopmentAgencyPageUrl}#service`;
const shopifyDevelopmentAgencyFaqId = `${shopifyDevelopmentAgencyPageUrl}#faq`;
const shopifyDevelopmentAgencyBreadcrumbId = `${shopifyDevelopmentAgencyPageUrl}#breadcrumb`;
const woocommerceDevelopmentPageUrl = absoluteUrl(pageSeo.woocommerceDevelopment.path);
const woocommerceDevelopmentPageId = `${woocommerceDevelopmentPageUrl}#webpage`;
const woocommerceDevelopmentServiceId = `${woocommerceDevelopmentPageUrl}#service`;
const woocommerceDevelopmentFaqId = `${woocommerceDevelopmentPageUrl}#faq`;
const woocommerceDevelopmentBreadcrumbId = `${woocommerceDevelopmentPageUrl}#breadcrumb`;
const magentoDevelopmentPageUrl = absoluteUrl(pageSeo.magentoDevelopment.path);
const magentoDevelopmentPageId = `${magentoDevelopmentPageUrl}#webpage`;
const magentoDevelopmentServiceId = `${magentoDevelopmentPageUrl}#service`;
const magentoDevelopmentFaqId = `${magentoDevelopmentPageUrl}#faq`;
const magentoDevelopmentBreadcrumbId = `${magentoDevelopmentPageUrl}#breadcrumb`;
const wordPressThemeCustomizationPageUrl = absoluteUrl(pageSeo.wordPressThemeCustomization.path);
const wordPressThemeCustomizationPageId = `${wordPressThemeCustomizationPageUrl}#webpage`;
const wordPressThemeCustomizationServiceId = `${wordPressThemeCustomizationPageUrl}#service`;
const wordPressThemeCustomizationFaqId = `${wordPressThemeCustomizationPageUrl}#faq`;
const wordPressThemeCustomizationBreadcrumbId = `${wordPressThemeCustomizationPageUrl}#breadcrumb`;
const mobileApplicationDevelopmentPageUrl = absoluteUrl(
  pageSeo.mobileApplicationDevelopment.path,
);
const mobileApplicationDevelopmentPageId = `${mobileApplicationDevelopmentPageUrl}#webpage`;
const mobileApplicationDevelopmentServiceId = `${mobileApplicationDevelopmentPageUrl}#service`;
const mobileApplicationDevelopmentFaqId = `${mobileApplicationDevelopmentPageUrl}#faq`;
const mobileApplicationDevelopmentBreadcrumbId = `${mobileApplicationDevelopmentPageUrl}#breadcrumb`;
const androidAppDevelopmentPageUrl = absoluteUrl(pageSeo.androidAppDevelopment.path);
const androidAppDevelopmentPageId = `${androidAppDevelopmentPageUrl}#webpage`;
const androidAppDevelopmentServiceId = `${androidAppDevelopmentPageUrl}#service`;
const androidAppDevelopmentFaqId = `${androidAppDevelopmentPageUrl}#faq`;
const androidAppDevelopmentBreadcrumbId = `${androidAppDevelopmentPageUrl}#breadcrumb`;
const iosAppDevelopmentPageUrl = absoluteUrl(pageSeo.iosAppDevelopment.path);
const iosAppDevelopmentPageId = `${iosAppDevelopmentPageUrl}#webpage`;
const iosAppDevelopmentServiceId = `${iosAppDevelopmentPageUrl}#service`;
const iosAppDevelopmentFaqId = `${iosAppDevelopmentPageUrl}#faq`;
const iosAppDevelopmentBreadcrumbId = `${iosAppDevelopmentPageUrl}#breadcrumb`;
const crossPlatformAppDevelopmentPageUrl = absoluteUrl(pageSeo.crossPlatformAppDevelopment.path);
const crossPlatformAppDevelopmentPageId = `${crossPlatformAppDevelopmentPageUrl}#webpage`;
const crossPlatformAppDevelopmentServiceId = `${crossPlatformAppDevelopmentPageUrl}#service`;
const crossPlatformAppDevelopmentFaqId = `${crossPlatformAppDevelopmentPageUrl}#faq`;
const crossPlatformAppDevelopmentBreadcrumbId = `${crossPlatformAppDevelopmentPageUrl}#breadcrumb`;
const shopifyMobileAppDevelopmentPageUrl = absoluteUrl(pageSeo.shopifyMobileAppDevelopment.path);
const shopifyMobileAppDevelopmentPageId = `${shopifyMobileAppDevelopmentPageUrl}#webpage`;
const shopifyMobileAppDevelopmentServiceId = `${shopifyMobileAppDevelopmentPageUrl}#service`;
const shopifyMobileAppDevelopmentFaqId = `${shopifyMobileAppDevelopmentPageUrl}#faq`;
const shopifyMobileAppDevelopmentBreadcrumbId = `${shopifyMobileAppDevelopmentPageUrl}#breadcrumb`;
const bigCommerceDevelopmentPageUrl = absoluteUrl(pageSeo.bigCommerceDevelopment.path);
const bigCommerceDevelopmentPageId = `${bigCommerceDevelopmentPageUrl}#webpage`;
const bigCommerceDevelopmentServiceId = `${bigCommerceDevelopmentPageUrl}#service`;
const bigCommerceDevelopmentFaqId = `${bigCommerceDevelopmentPageUrl}#faq`;
const bigCommerceDevelopmentBreadcrumbId = `${bigCommerceDevelopmentPageUrl}#breadcrumb`;
const siteMapPageUrl = absoluteUrl(pageSeo.siteMap.path);
const siteMapPageId = `${siteMapPageUrl}#webpage`;
const siteMapBreadcrumbId = `${siteMapPageUrl}#breadcrumb`;
const thankYouForEnquiryPageUrl = absoluteUrl(pageSeo.thankYouForEnquiry.path);
const thankYouForEnquiryPageId = `${thankYouForEnquiryPageUrl}#webpage`;
const thankYouForEnquiryBreadcrumbId = `${thankYouForEnquiryPageUrl}#breadcrumb`;
const webDesignPageUrl = absoluteUrl(pageSeo.webDesign.path);
const webDesignPageId = `${webDesignPageUrl}#webpage`;
const webDesignServiceId = `${webDesignPageUrl}#service`;
const webDesignFaqId = `${webDesignPageUrl}#faq`;
const webDesignBreadcrumbId = `${webDesignPageUrl}#breadcrumb`;
const termsOfServicePageUrl = absoluteUrl(pageSeo.termsOfService.path);
const termsOfServicePageId = `${termsOfServicePageUrl}#webpage`;
const termsOfServiceBreadcrumbId = `${termsOfServicePageUrl}#breadcrumb`;
const shopifyDevelopmentBarcelonaPageUrl = absoluteUrl(pageSeo.shopifyDevelopmentBarcelona.path);
const shopifyDevelopmentBarcelonaPageId = `${shopifyDevelopmentBarcelonaPageUrl}#webpage`;
const shopifyDevelopmentBarcelonaServiceId = `${shopifyDevelopmentBarcelonaPageUrl}#service`;
const shopifyDevelopmentBarcelonaBreadcrumbId = `${shopifyDevelopmentBarcelonaPageUrl}#breadcrumb`;
const shopifyDevelopmentChennaiPageUrl = absoluteUrl(pageSeo.shopifyDevelopmentCompanyInChennai.path);
const shopifyDevelopmentChennaiPageId = `${shopifyDevelopmentChennaiPageUrl}#webpage`;
const shopifyDevelopmentChennaiServiceId = `${shopifyDevelopmentChennaiPageUrl}#service`;
const shopifyDevelopmentChennaiFaqId = `${shopifyDevelopmentChennaiPageUrl}#faq`;
const shopifyDevelopmentChennaiBreadcrumbId = `${shopifyDevelopmentChennaiPageUrl}#breadcrumb`;
const shopifyMaintenanceServicesPageUrl = absoluteUrl(pageSeo.shopifyMaintenanceServices.path);
const shopifyMaintenanceServicesPageId = `${shopifyMaintenanceServicesPageUrl}#webpage`;
const shopifyMaintenanceServicesServiceId = `${shopifyMaintenanceServicesPageUrl}#service`;
const shopifyMaintenanceServicesFaqId = `${shopifyMaintenanceServicesPageUrl}#faq`;
const shopifyMaintenanceServicesBreadcrumbId = `${shopifyMaintenanceServicesPageUrl}#breadcrumb`;
const dentalClinicWebsiteDevelopmentPageUrl = absoluteUrl(pageSeo.dentalClinicWebsiteDevelopmentCompany.path);
const dentalClinicWebsiteDevelopmentPageId = `${dentalClinicWebsiteDevelopmentPageUrl}#webpage`;
const dentalClinicWebsiteDevelopmentServiceId = `${dentalClinicWebsiteDevelopmentPageUrl}#service`;
const dentalClinicWebsiteDevelopmentFaqId = `${dentalClinicWebsiteDevelopmentPageUrl}#faq`;
const dentalClinicWebsiteDevelopmentBreadcrumbId = `${dentalClinicWebsiteDevelopmentPageUrl}#breadcrumb`;
const shopifyDevelopmentDelhiPageUrl = absoluteUrl(pageSeo.shopifyDevelopmentInDelhi.path);
const shopifyDevelopmentDelhiPageId = `${shopifyDevelopmentDelhiPageUrl}#webpage`;
const shopifyDevelopmentDelhiServiceId = `${shopifyDevelopmentDelhiPageUrl}#service`;
const shopifyDevelopmentDelhiFaqId = `${shopifyDevelopmentDelhiPageUrl}#faq`;
const shopifyDevelopmentDelhiBreadcrumbId = `${shopifyDevelopmentDelhiPageUrl}#breadcrumb`;
const shopifyDevelopmentHyderabadPageUrl = absoluteUrl(pageSeo.shopifyDevelopmentInHyderabad.path);
const shopifyDevelopmentHyderabadPageId = `${shopifyDevelopmentHyderabadPageUrl}#webpage`;
const shopifyDevelopmentHyderabadServiceId = `${shopifyDevelopmentHyderabadPageUrl}#service`;
const shopifyDevelopmentHyderabadFaqId = `${shopifyDevelopmentHyderabadPageUrl}#faq`;
const shopifyDevelopmentHyderabadBreadcrumbId = `${shopifyDevelopmentHyderabadPageUrl}#breadcrumb`;
const wordpressDevelopmentDelhiPageUrl = absoluteUrl(pageSeo.wordpressDevelopmentInDelhi.path);
const wordpressDevelopmentDelhiPageId = `${wordpressDevelopmentDelhiPageUrl}#webpage`;
const wordpressDevelopmentDelhiServiceId = `${wordpressDevelopmentDelhiPageUrl}#service`;
const wordpressDevelopmentDelhiFaqId = `${wordpressDevelopmentDelhiPageUrl}#faq`;
const wordpressDevelopmentDelhiBreadcrumbId = `${wordpressDevelopmentDelhiPageUrl}#breadcrumb`;
const wordpressDevelopmentNoidaPageUrl = absoluteUrl(pageSeo.wordpressDevelopmentInNoida.path);
const wordpressDevelopmentNoidaPageId = `${wordpressDevelopmentNoidaPageUrl}#webpage`;
const wordpressDevelopmentNoidaServiceId = `${wordpressDevelopmentNoidaPageUrl}#service`;
const wordpressDevelopmentNoidaFaqId = `${wordpressDevelopmentNoidaPageUrl}#faq`;
const wordpressDevelopmentNoidaBreadcrumbId = `${wordpressDevelopmentNoidaPageUrl}#breadcrumb`;
const wordpressDevelopmentPunePageUrl = absoluteUrl(pageSeo.wordpressDevelopmentInPune.path);
const wordpressDevelopmentPunePageId = `${wordpressDevelopmentPunePageUrl}#webpage`;
const wordpressDevelopmentPuneServiceId = `${wordpressDevelopmentPunePageUrl}#service`;
const wordpressDevelopmentPuneFaqId = `${wordpressDevelopmentPunePageUrl}#faq`;
const wordpressDevelopmentPuneBreadcrumbId = `${wordpressDevelopmentPunePageUrl}#breadcrumb`;
const wordpressDevelopmentAhmedabadPageUrl = absoluteUrl(pageSeo.wordpressDevelopmentInAhmedabad.path);
const wordpressDevelopmentAhmedabadPageId = `${wordpressDevelopmentAhmedabadPageUrl}#webpage`;
const wordpressDevelopmentAhmedabadServiceId = `${wordpressDevelopmentAhmedabadPageUrl}#service`;
const wordpressDevelopmentAhmedabadFaqId = `${wordpressDevelopmentAhmedabadPageUrl}#faq`;
const wordpressDevelopmentAhmedabadBreadcrumbId = `${wordpressDevelopmentAhmedabadPageUrl}#breadcrumb`;

const careerOfficeAddresses = {
  surat: {
    "@type": "PostalAddress",
    streetAddress:
      "Balaji House, Chamunda Restaurant Lane, Opp. Sub Jail, Near Udhna Darwaja",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395002",
    addressCountry: "IN",
  },
  ahmedabad: {
    "@type": "PostalAddress",
    streetAddress:
      "202 - Iscon Emporio, Pandurang Shashtri Marg, beside Star Bazaar, Satellite",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
} as const;

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: homeUrl,
    logo: absoluteUrl(siteConfig.logo),
    description: organizationAnswerSummary,
    foundingDate: String(companyFacts.foundedYear),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: companyFacts.experts.value,
    },
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: Object.values(careerOfficeAddresses),
    sameAs: [
      siteConfig.social.shopify,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      "https://clutch.co/profile/dynamic-dreamz",
      "https://www.trustpilot.com/review/dynamicdreamz.com",
      "https://www.goodfirms.co/company/dynamic-dreamz",
      "https://www.upwork.com/ag/dynamicdreamz/",
    ],
    areaServed: [
      "United States",
      "United Kingdom",
      "Europe",
      "Canada",
      "Australia",
      "India",
      "United Arab Emirates",
    ],
    knowsAbout: [
      "Shopify Plus",
      "Shopify Plus Development",
      "Shopify Plus Migration",
      "Shopify B2B",
      "Shopify Checkout Extensibility",
      "Shopify Functions",
      "Multi-store Shopify Architecture",
      "Shopify Markets",
      "Shopify Mobile App Development",
      "Enterprise Ecommerce Development",
      "ERP Integration",
      "Shopify",
      "Shopify Migration",
      "Shopify CRO",
      "Shopify App Development",
      "White-Label Shopify Development",
      "Full-Stack Development",
      "WordPress",
      "WooCommerce",
    ],
  };
}

// Shared company/brand video (used on About and Resources). Same YouTube source,
// so keep its id and real publish date in one place.
const companyVideoId = "0GEJ928rBnM";
const companyVideoUploadDate = "2024-10-17";

/**
 * Required shape for every VideoObject on the site. `uploadDate` is deliberately
 * mandatory: Google treats it as a required property for video structured data,
 * and a missing value silently disqualifies the video from rich results. Because
 * this field is required here, `npm run build` (type-check) fails if any caller
 * omits it — a VideoObject can never ship without an upload date again. Always
 * pass an ISO 8601 date taken from the actual video's real publish date; never
 * invent one.
 */
type VideoObjectInput = {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl: string;
};

function youTubeUrls(videoId: string) {
  return {
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
  };
}

function videoObjectSchema(video: VideoObjectInput) {
  return {
    "@type": "VideoObject",
    "@id": video.id,
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
  };
}

function testimonialVideoDescription(testimonial: (typeof testimonials)[number]) {
  return `${testimonial.name}, ${testimonial.company} client testimonial for Dynamic Dreamz. ${testimonial.quote}`;
}

function testimonialVideoSchema() {
  return testimonials.map((testimonial) =>
    videoObjectSchema({
      id: `${siteConfig.url}#testimonial-video-${testimonial.videoId}`,
      name: testimonial.title,
      description: testimonialVideoDescription(testimonial),
      thumbnailUrl: `https://i.ytimg.com/vi/${testimonial.videoId}/hqdefault.jpg`,
      uploadDate: testimonial.videoUploadDate,
      ...youTubeUrls(testimonial.videoId),
    }),
  );
}

export function createHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema(),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dynamic Dreamz Services",
          itemListElement: [
            { name: "Shopify Plus Development", path: "/shopify-plus-agency" },
            { name: "Shopify Plus Migration", path: "/shopify-plus-migration-agency" },
            { name: "Shopify Development", path: "/shopify-development-agency" },
            { name: "Shopify Migration", path: "/shopify-migration" },
            { name: "Shopify CRO and Performance", path: "/shopify-cro-agency" },
            { name: "Shopify Mobile App Development", path: "/shopify-mobile-app-development" },
            { name: "White-Label Shopify Development", path: "/white-label-shopify-development-services" },
            { name: "Shopify Maintenance", path: "/shopify-maintenance-services" },
          ].map(({ name, path }) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name, url: absoluteUrl(path) },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: homeUrl,
        name: pageSeo.home.title,
        datePublished: pageSeo.home.publishedTime,
        dateModified: pageSeo.home.modifiedTime,
        description: pageSeo.home.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.home.image.path),
          width: pageSeo.home.image.width,
          height: pageSeo.home.image.height,
        },
        mainEntity: { "@id": homeFaqId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": homeFaqId,
        mainEntity: homeFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      ...testimonialVideoSchema(),
    ],
  };
}

export function createAboutPageSchema() {
  const founderNodes = founders.map((founder) => {
    const personId = `${aboutPageUrl}#person-${founder.name.toLowerCase().replaceAll(" ", "-")}`;

    return {
      "@type": "Person",
      "@id": personId,
      name: founder.name,
      jobTitle: founder.role,
      description: founder.biography,
      image: absoluteUrl(founder.image),
      ...(founder.linkedIn ? { sameAs: [founder.linkedIn] } : {}),
      worksFor: { "@id": organizationId },
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema(),
        founder: founderNodes.map((founder) => ({ "@id": founder["@id"] })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "AboutPage",
        "@id": aboutPageId,
        url: aboutPageUrl,
        name: pageSeo.about.title,
        description: pageSeo.about.description,
        datePublished: pageSeo.about.publishedTime,
        dateModified: pageSeo.about.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": aboutBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/og/dynamic-dreamz-company.png"),
          width: 1200,
          height: 630,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": aboutBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: aboutPageUrl,
          },
        ],
      },
      ...founderNodes,
      videoObjectSchema({
        id: `${aboutPageUrl}#company-video`,
        name: "Meet the team at Dynamic Dreamz",
        description:
          "An introduction to the Dynamic Dreamz ecommerce, web development and digital solutions team.",
        thumbnailUrl: absoluteUrl("/assets/about/hero-video-poster.webp"),
        uploadDate: companyVideoUploadDate,
        ...youTubeUrls(companyVideoId),
      }),
    ],
  };
}

export function createCareerPageSchema() {
  const jobPostings = careerJobs.flatMap((job) =>
    careerLocations.filter((location) => job.locations.includes(location.slug)).map((location) => {
      const id = `${careerPageUrl}#${job.slug}-${location.slug}`;

      return {
        "@type": "JobPosting",
        "@id": id,
        title: job.title,
        description: `${job.summary} This is a ${job.jobType.toLowerCase()} onsite opportunity at Dynamic Dreamz in ${location.label}, requiring ${job.experience} of relevant work experience.`,
        datePosted: job.postedDate,
        employmentType: "FULL_TIME",
        experienceRequirements: job.experience,
        hiringOrganization: { "@id": organizationId },
        jobLocation: {
          "@type": "Place",
          address: careerOfficeAddresses[location.slug],
        },
        url: absoluteUrl(careerApplicationPath(job, location)),
      };
    }),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": careerPageId,
        url: careerPageUrl,
        name: pageSeo.career.title,
        description: pageSeo.career.description,
        datePublished: pageSeo.career.publishedTime,
        dateModified: pageSeo.career.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": careerBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/og/dynamic-dreamz-company.png"),
          width: 1200,
          height: 630,
        },
        mainEntity: jobPostings.map((job) => ({ "@id": job["@id"] })),
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": careerBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Careers",
            item: careerPageUrl,
          },
        ],
      },
      ...jobPostings,
    ],
  };
}

export function createLifePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": lifePageId,
        url: lifePageUrl,
        name: pageSeo.life.title,
        description: pageSeo.life.description,
        datePublished: pageSeo.life.publishedTime,
        dateModified: pageSeo.life.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": lifeBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/og/dynamic-dreamz-company.png"),
          width: 1200,
          height: 630,
        },
        mainEntity: { "@id": lifeFaqId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": lifeBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Life @ Dynamic Dreamz",
            item: lifePageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": lifeFaqId,
        mainEntity: lifeFaqSection.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function createResourcesPageSchema() {
  const articleItems = resourceArticles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "BlogPosting",
      "@id": absoluteUrl(article.href),
      url: absoluteUrl(article.href),
      headline: article.title,
      datePublished: article.date,
      image: absoluteUrl(article.image),
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "CollectionPage",
        "@id": resourcesPageId,
        url: resourcesPageUrl,
        name: pageSeo.resources.title,
        description: pageSeo.resources.description,
        datePublished: pageSeo.resources.publishedTime,
        dateModified: pageSeo.resources.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": resourcesBreadcrumbId },
        mainEntity: { "@id": resourcesItemListId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/og/dynamic-dreamz-company.png"),
          width: 1200,
          height: 630,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": resourcesBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: resourcesPageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": resourcesItemListId,
        name: "Shopify Blogs",
        numberOfItems: resourceArticles.length,
        itemListElement: articleItems,
      },
      videoObjectSchema({
        id: `${resourcesPageUrl}#company-video`,
        name: "The Dynamic Dreamz story and Shopify resource guide",
        description:
          "Meet the Dynamic Dreamz Shopify Platinum Partner team behind this ecommerce resource hub.",
        thumbnailUrl: absoluteUrl("/assets/about/hero-video-poster.webp"),
        uploadDate: companyVideoUploadDate,
        ...youTubeUrls(companyVideoId),
      }),
    ],
  };
}

type BlogsPageSchemaOptions = {
  pagePath?: string;
  itemOffset?: number;
};

export function createBlogsPageSchema(
  articles: readonly BlogArchiveArticle[] = blogArchiveArticles,
  options: BlogsPageSchemaOptions = {},
) {
  const pagePath = options.pagePath ?? pageSeo.blogs.path;
  const pageUrl = absoluteUrl(pagePath);
  const pageId = pageUrl + "#webpage";
  const breadcrumbId = pageUrl + "#breadcrumb";
  const itemListId = pageUrl + "#articles";
  const itemOffset = options.itemOffset ?? 0;
  const articleItems = articles.map((article, index) => ({
    "@type": "ListItem",
    position: itemOffset + index + 1,
    item: {
      "@type": "BlogPosting",
      "@id": absoluteUrl(article.href),
      url: absoluteUrl(article.href),
      headline: article.title,
      datePublished: article.date,
      image: absoluteUrl(article.image),
      articleSection: article.category,
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "CollectionPage",
        "@id": pageId,
        url: pageUrl,
        name: pageSeo.blogs.title,
        description: pageSeo.blogs.description,
        datePublished: pageSeo.blogs.publishedTime,
        dateModified: pageSeo.blogs.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": itemListId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.blogs.image.path),
          width: pageSeo.blogs.image.width,
          height: pageSeo.blogs.image.height,
          caption: pageSeo.blogs.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          { "@type": "ListItem", position: 2, name: "Blogs", item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": itemListId,
        name: pageSeo.blogs.title,
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: articles.length,
        itemListElement: articleItems,
      },
    ],
  };
}

export function createContactPageSchema() {
  const { jobs, sales } = contactPageContent.contacts;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema(),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: sales.phone,
            email: sales.email,
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            contactType: "human resources",
            telephone: jobs.phone,
            email: jobs.email,
            availableLanguage: "English",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "ContactPage",
        "@id": contactPageId,
        url: contactPageUrl,
        name: pageSeo.contact.title,
        description: pageSeo.contact.description,
        datePublished: pageSeo.contact.publishedTime,
        dateModified: pageSeo.contact.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        breadcrumb: { "@id": contactBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.contact.image.path),
          width: pageSeo.contact.image.width,
          height: pageSeo.contact.image.height,
          caption: pageSeo.contact.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": contactBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: contactPageUrl,
          },
        ],
      },
    ],
  };
}

export function createPrivacyPolicyPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": privacyPolicyPageId,
        url: privacyPolicyPageUrl,
        name: pageSeo.privacyPolicy.title,
        description: pageSeo.privacyPolicy.description,
        datePublished: pageSeo.privacyPolicy.publishedTime,
        dateModified: pageSeo.privacyPolicy.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": privacyPolicyBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.privacyPolicy.image.path),
          width: pageSeo.privacyPolicy.image.width,
          height: pageSeo.privacyPolicy.image.height,
          caption: pageSeo.privacyPolicy.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": privacyPolicyBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy and Cookies Policy",
            item: privacyPolicyPageUrl,
          },
        ],
      },
    ],
  };
}

export function createTermsOfServicePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": termsOfServicePageId,
        url: termsOfServicePageUrl,
        name: pageSeo.termsOfService.title,
        description: pageSeo.termsOfService.description,
        datePublished: pageSeo.termsOfService.publishedTime,
        dateModified: pageSeo.termsOfService.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": termsOfServiceBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.termsOfService.image.path),
          width: pageSeo.termsOfService.image.width,
          height: pageSeo.termsOfService.image.height,
          caption: pageSeo.termsOfService.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": termsOfServiceBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Terms of Service",
            item: termsOfServicePageUrl,
          },
        ],
      },
    ],
  };
}

export function createRequestQuotePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "ContactPage",
        "@id": requestQuotePageId,
        url: requestQuotePageUrl,
        name: pageSeo.requestQuote.title,
        description: pageSeo.requestQuote.description,
        datePublished: pageSeo.requestQuote.publishedTime,
        dateModified: pageSeo.requestQuote.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        breadcrumb: { "@id": requestQuoteBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.requestQuote.image.path),
          width: pageSeo.requestQuote.image.width,
          height: pageSeo.requestQuote.image.height,
          caption: pageSeo.requestQuote.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": requestQuoteBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Request a Quote",
            item: requestQuotePageUrl,
          },
        ],
      },
    ],
  };
}

export function createOurWorkPageSchema() {
  const projectItems = ourWorkProjects.map((project, index) => {
    const destinations = project.href
      ? [project.href]
      : (project.appLinks?.map((link) => link.href) ?? []);

    return {
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        image: absoluteUrl(project.image),
        genre: project.category,
        ...(destinations[0] ? { url: destinations[0] } : {}),
        ...(destinations.length > 1 ? { sameAs: destinations.slice(1) } : {}),
      },
    };
  });
  const caseStudyItems = ourWorkCaseStudies.map((caseStudy, index) => ({
    "@type": "ListItem",
    position: ourWorkProjects.length + index + 1,
    item: {
      "@type": "Article",
      "@id": absoluteUrl(`/case-studies/${caseStudy.slug}`),
      url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
      headline: caseStudy.title,
      description: caseStudy.excerpt,
      image: absoluteUrl(caseStudy.image),
      about: caseStudy.industry,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "CollectionPage",
        "@id": ourWorkPageId,
        url: ourWorkPageUrl,
        name: pageSeo.ourWork.title,
        description: pageSeo.ourWork.description,
        datePublished: pageSeo.ourWork.publishedTime,
        dateModified: pageSeo.ourWork.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": ourWorkBreadcrumbId },
        mainEntity: { "@id": ourWorkItemListId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.ourWork.image.path),
          width: pageSeo.ourWork.image.width,
          height: pageSeo.ourWork.image.height,
          caption: pageSeo.ourWork.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": ourWorkBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          { "@type": "ListItem", position: 2, name: "Our Work", item: ourWorkPageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": ourWorkItemListId,
        name: "Dynamic Dreamz portfolio projects",
        numberOfItems: ourWorkProjects.length,
        itemListElement: projectItems,
      },
      {
        "@type": "ItemList",
        "@id": ourWorkCaseStudyListId,
        name: "Dynamic Dreamz selected case studies",
        numberOfItems: ourWorkCaseStudies.length,
        itemListElement: caseStudyItems.map((item) => ({
          ...item,
          position: (item.position as number) - ourWorkProjects.length,
        })),
      },
    ],
  };
}

type IndustryPageSchemaConfig = {
  seo: PageSeoConfig;
  pageUrl: string;
  pageId: string;
  breadcrumbId: string;
  breadcrumbName: string;
  serviceId: string;
  serviceName: string;
  serviceType: string;
  audienceType: string;
  offerCatalog: {
    title: string;
    items: readonly { title: string; description: string }[];
  };
};

function createIndustryPageSchema(config: IndustryPageSchemaConfig) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": config.pageId,
        url: config.pageUrl,
        name: config.seo.title,
        description: config.seo.description,
        datePublished: config.seo.publishedTime,
        dateModified: config.seo.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": config.serviceId },
        mainEntity: { "@id": config.serviceId },
        breadcrumb: { "@id": config.breadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(config.seo.image.path),
          width: config.seo.image.width,
          height: config.seo.image.height,
          caption: config.seo.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": config.breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: config.breadcrumbName,
            item: config.pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": config.serviceId,
        name: config.serviceName,
        serviceType: config.serviceType,
        url: config.pageUrl,
        description: config.seo.description,
        provider: { "@id": organizationId },
        audience: {
          "@type": "BusinessAudience",
          audienceType: config.audienceType,
        },
        areaServed: [
          "United States",
          "United Kingdom",
          "Europe",
          "Canada",
          "Australia",
          "India",
          "United Arab Emirates",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: config.offerCatalog.title,
          itemListElement: config.offerCatalog.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.description,
            },
          })),
        },
      },
    ],
  };
}

type ServicePageSchemaInput = {
  page: PageSeoConfig;
  pageUrl: string;
  pageId: string;
  serviceId: string;
  faqId: string;
  breadcrumbId: string;
  serviceName: string;
  serviceType: string;
  breadcrumbName: string;
  audienceType: string;
  faqs: readonly { question: string; answer: string }[];
  offers?: readonly {
    title: string;
    description: string;
    price?: number | string;
    priceCurrency?: string;
    url?: string;
  }[];
  videos?: ReturnType<typeof videoObjectSchema>[];
};

function createServicePageSchema({
  page,
  pageUrl,
  pageId,
  serviceId,
  faqId,
  breadcrumbId,
  serviceName,
  serviceType,
  breadcrumbName,
  audienceType,
  faqs,
  offers,
  videos,
}: ServicePageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: page.title,
        description: page.description,
        datePublished: page.publishedTime,
        dateModified: page.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: [
          { "@id": serviceId },
          { "@id": faqId },
          ...(videos ? videos.map((v) => ({ "@id": v["@id"] })) : []),
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(page.image.path),
          width: page.image.width,
          height: page.image.height,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: serviceName,
        serviceType,
        url: pageUrl,
        description: page.description,
        provider: { "@id": organizationId },
        audience: {
          "@type": "BusinessAudience",
          audienceType,
        },
        areaServed: [
          "United States",
          "United Kingdom",
          "Europe",
          "Canada",
          "Australia",
          "India",
          "United Arab Emirates",
        ],
        ...(offers
          ? {
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${serviceName} capabilities`,
              itemListElement: offers.map((offer) => ({
                "@type": "Offer",
                ...(offer.price !== undefined ? { price: offer.price } : {}),
                ...(offer.priceCurrency
                  ? { priceCurrency: offer.priceCurrency }
                  : {}),
                ...(offer.url ? { url: offer.url } : {}),
                itemOffered: {
                  "@type": "Service",
                  name: offer.title,
                  description: offer.description,
                },
              })),
            },
          }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbName,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
          },
        })),
      },
      ...(videos ?? []),
    ],
  };
}

export function createBeautyCosmeticsPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.beautyCosmetics,
    pageUrl: beautyPageUrl,
    pageId: beautyPageId,
    breadcrumbId: beautyBreadcrumbId,
    breadcrumbName: "Beauty & Cosmetics",
    serviceId: beautyServiceId,
    serviceName: "Beauty & Cosmetics Ecommerce Development",
    serviceType: "Beauty and cosmetics ecommerce development",
    audienceType:
      "Beauty, cosmetics, skincare, haircare, salon and wellness brands",
    offerCatalog: beautyIndustryPage.deliverables,
  });
}

export function createFashionPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.fashion,
    pageUrl: fashionPageUrl,
    pageId: fashionPageId,
    breadcrumbId: fashionBreadcrumbId,
    breadcrumbName: "Fashion & Apparel",
    serviceId: fashionServiceId,
    serviceName: "Fashion & Apparel Ecommerce Development",
    serviceType: "Fashion and apparel ecommerce development",
    audienceType:
      "Fashion, apparel, jewelry, footwear, accessories and lifestyle brands",
    offerCatalog: fashionIndustryPage.deliverables,
  });
}

export function createHealthcarePageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.healthcare,
    pageUrl: healthcarePageUrl,
    pageId: healthcarePageId,
    breadcrumbId: healthcareBreadcrumbId,
    breadcrumbName: "Health & Nutrition",
    serviceId: healthcareServiceId,
    serviceName: "Health & Nutrition Ecommerce and Website Development",
    serviceType: "Health, nutrition, wellness and dental web development",
    audienceType:
      "Health, nutrition, supplement, wellness, healthcare product and dental organizations",
    offerCatalog: healthcareIndustryPage.deliverables,
  });
}

export function createFoodBeveragesPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.foodBeverages,
    pageUrl: foodBeveragesPageUrl,
    pageId: foodBeveragesPageId,
    breadcrumbId: foodBeveragesBreadcrumbId,
    breadcrumbName: "Food & Beverages",
    serviceId: foodBeveragesServiceId,
    serviceName: "Food & Beverages Ecommerce Development",
    serviceType: "Food and beverage ecommerce and website development",
    audienceType:
      "Food, beverage, restaurant, cafe, bar, grocery and consumer packaged goods brands",
    offerCatalog: foodBeveragesIndustryPage.deliverables,
  });
}

export function createFoodBeverageShopifyPlusAgencyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.foodBeverageShopifyPlusAgency,
    pageUrl: foodBeverageShopifyPlusAgencyPageUrl,
    pageId: foodBeverageShopifyPlusAgencyPageId,
    serviceId: foodBeverageShopifyPlusAgencyServiceId,
    faqId: foodBeverageShopifyPlusAgencyFaqId,
    breadcrumbId: foodBeverageShopifyPlusAgencyBreadcrumbId,
    serviceName: "Food & Beverage Shopify Plus Agency Services",
    serviceType: "Shopify Plus Development, Migration, Customization & Support for Food & Beverage Brands",
    breadcrumbName: "Food & Beverage Shopify Plus Agency",
    audienceType: "Food and beverage brands, ecommerce merchants, and digital agencies",
    faqs: foodBeverageShopifyPlusFaqs,
    offers: foodBeverageServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createPetIndustryPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.petIndustry,
    pageUrl: petIndustryPageUrl,
    pageId: petIndustryPageId,
    breadcrumbId: petIndustryBreadcrumbId,
    breadcrumbName: "Pet Industry",
    serviceId: petIndustryServiceId,
    serviceName: "Pet Industry Ecommerce Development",
    serviceType: "Pet industry ecommerce and website development",
    audienceType:
      "Pet retailers, pet food and accessory brands, equestrian brands and pet-service businesses",
    offerCatalog: petIndustryPage.deliverables,
  });
}

export function createWhiteLabelShopifyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.whiteLabelShopify,
    pageUrl: whiteLabelShopifyPageUrl,
    pageId: whiteLabelShopifyPageId,
    serviceId: whiteLabelShopifyServiceId,
    faqId: whiteLabelShopifyFaqId,
    breadcrumbId: whiteLabelShopifyBreadcrumbId,
    serviceName: "White Label Shopify Development Services",
    serviceType: "White label Shopify and Shopify Plus development",
    breadcrumbName: "White Label Shopify Development Services",
    audienceType: "Digital agencies and ecommerce agencies",
    faqs: whiteLabelShopifyFaqs,
  });
}

export function createWhiteLabelWordPressPageSchema() {
  return createServicePageSchema({
    page: pageSeo.whiteLabelWordPress,
    pageUrl: whiteLabelWordPressPageUrl,
    pageId: whiteLabelWordPressPageId,
    serviceId: whiteLabelWordPressServiceId,
    faqId: whiteLabelWordPressFaqId,
    breadcrumbId: whiteLabelWordPressBreadcrumbId,
    serviceName: "White Label WordPress Development Services",
    serviceType: "White label WordPress and WooCommerce development",
    breadcrumbName: "White Label WordPress Development Services",
    audienceType: "Digital, web design, ecommerce, branding, and marketing agencies",
    faqs: whiteLabelWordPressFaqs,
    offers: whiteLabelWordPressServices,
  });
}

export function createWhiteLabelWebsiteDesignPageSchema() {
  return createServicePageSchema({
    page: pageSeo.whiteLabelWebsiteDesign,
    pageUrl: whiteLabelWebsiteDesignPageUrl,
    pageId: whiteLabelWebsiteDesignPageId,
    serviceId: whiteLabelWebsiteDesignServiceId,
    faqId: whiteLabelWebsiteDesignFaqId,
    breadcrumbId: whiteLabelWebsiteDesignBreadcrumbId,
    serviceName: "White Label Website Design Services",
    serviceType: "White label website design and web development",
    breadcrumbName: "White Label Website Design Services",
    audienceType: "Digital, web design, ecommerce, branding, and marketing agencies",
    faqs: whiteLabelWebsiteDesignFaqs,
    offers: whiteLabelWebsiteDesignServices,
  });
}

const shopifyPlusTestimonialUploadDates: Record<string, string> = {
  "o4JnTGEH-Yk": "2024-05-15",
  "B3KnREB4Bro": "2024-05-15",
  "-IpNUAco1OA": "2024-05-15",
  "oNDPBGO83G4": "2024-05-15",
  "AoglCZQC0RU": "2024-05-15",
  "Vc9FH6ZeoXY": "2024-08-16",
  "_ay_egf5GKw": "2025-11-13",
  "_9uT-dRcQvo": "2025-11-28",
  "6Ni9tlZ7HKE": "2025-12-03",
  "_rQeMWcz_gA": "2026-02-10",
  "WQWG2niydpE": "2026-06-03",
};

function shopifyPlusTestimonialVideoSchema(pageUrl = shopifyPlusPageUrl) {
  return shopifyPlusAgencyTestimonials.items.map((testimonial) =>
    videoObjectSchema({
      id: `${pageUrl}#testimonial-video-${testimonial.videoId}`,
      name: `${testimonial.name} client testimonial for Dynamic Dreamz`,
      description: `${testimonial.name}, ${testimonial.company} client testimonial for Dynamic Dreamz. ${testimonial.quote}`,
      thumbnailUrl: `https://i.ytimg.com/vi/${testimonial.videoId}/hqdefault.jpg`,
      uploadDate: shopifyPlusTestimonialUploadDates[testimonial.videoId] ?? "2024-05-15",
      ...youTubeUrls(testimonial.videoId),
    }),
  );
}

export function createShopifyPlusAgencyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyPlus,
    pageUrl: shopifyPlusPageUrl,
    pageId: shopifyPlusPageId,
    serviceId: shopifyPlusServiceId,
    faqId: shopifyPlusFaqId,
    breadcrumbId: shopifyPlusBreadcrumbId,
    serviceName: "Shopify Plus Agency Services",
    serviceType: "Shopify Plus agency and Shopify development services",
    breadcrumbName: "Shopify Plus Agency",
    audienceType:
      "High-growth eCommerce brands, B2B merchants, and businesses scaling on Shopify Plus",
    faqs: shopifyPlusAgencyFaqs,
    offers: shopifyPlusAgencyServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWordPressDevelopmentCompanyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.wordpressDevelopmentCompany,
    pageUrl: wordpressDevelopmentCompanyPageUrl,
    pageId: wordpressDevelopmentCompanyPageId,
    serviceId: wordpressDevelopmentCompanyServiceId,
    faqId: wordpressDevelopmentCompanyFaqId,
    breadcrumbId: wordpressDevelopmentCompanyBreadcrumbId,
    serviceName: "WordPress Development Company in India",
    serviceType:
      "Custom WordPress website, theme, plugin, WooCommerce, migration, optimization, and maintenance services",
    breadcrumbName: "WordPress Development Company in India",
    audienceType:
      "Businesses, ecommerce brands, and digital agencies seeking WordPress development services in India",
    faqs: wordpressDevelopmentCompanyFaqs,
    offers: wordpressDevelopmentCompanyServices.items,
    videos: shopifyPlusTestimonialVideoSchema(wordpressDevelopmentCompanyPageUrl),
  });
}

export function createWordPressDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.wordpressDevelopment,
    pageUrl: wordpressDevelopmentPageUrl,
    pageId: wordpressDevelopmentPageId,
    serviceId: wordpressDevelopmentServiceId,
    faqId: wordpressDevelopmentFaqId,
    breadcrumbId: wordpressDevelopmentBreadcrumbId,
    serviceName: "WordPress Web Development Services",
    serviceType: "Custom WordPress website development, theme customization, and plugin development",
    breadcrumbName: "WordPress Web Development Services",
    audienceType:
      "Businesses, ecommerce brands, and digital agencies seeking custom WordPress web development services",
    faqs: wordpressDevelopmentFaqs,
    offers: wordpressDevelopmentServices.items,
    videos: shopifyPlusTestimonialVideoSchema(wordpressDevelopmentPageUrl),
  });
}

export function createHireWordPressDevelopersPageSchema() {
  return createServicePageSchema({
    page: pageSeo.hireWordPressDevelopers,
    pageUrl: hireWordPressDevelopersPageUrl,
    pageId: hireWordPressDevelopersPageId,
    serviceId: hireWordPressDevelopersServiceId,
    faqId: hireWordPressDevelopersFaqId,
    breadcrumbId: hireWordPressDevelopersBreadcrumbId,
    serviceName: "Dedicated WordPress Development Services",
    serviceType: "Dedicated WordPress developer and WordPress team hiring",
    breadcrumbName: "Hire WordPress Developers",
    audienceType:
      "Businesses and agencies seeking dedicated WordPress developers or WordPress development teams",
    faqs: hireWordPressFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ].join(" "),
    })),
  });
}

export function createHireShopifyDevelopersPageSchema() {
  return createServicePageSchema({
    page: pageSeo.hireShopifyDevelopers,
    pageUrl: hireShopifyDevelopersPageUrl,
    pageId: hireShopifyDevelopersPageId,
    serviceId: hireShopifyDevelopersServiceId,
    faqId: hireShopifyDevelopersFaqId,
    breadcrumbId: hireShopifyDevelopersBreadcrumbId,
    serviceName: "Dedicated Shopify Development Services",
    serviceType: "Dedicated Shopify developer and Shopify team hiring",
    breadcrumbName: "Hire Shopify Developers",
    audienceType:
      "Businesses and agencies seeking dedicated Shopify developers or Shopify development teams",
    faqs: hireShopifyFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ].join(" "),
    })),
    offers: hireShopifyServices.items,
  });
}

export function createShopifyCertifiedDevelopersPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyCertifiedDevelopers,
    pageUrl: shopifyCertifiedDevelopersPageUrl,
    pageId: shopifyCertifiedDevelopersPageId,
    serviceId: shopifyCertifiedDevelopersServiceId,
    faqId: shopifyCertifiedDevelopersFaqId,
    breadcrumbId: shopifyCertifiedDevelopersBreadcrumbId,
    serviceName: "Shopify Certified Development Services",
    serviceType:
      "Shopify development delivered by developers holding official Shopify credentials across development fundamentals, Liquid storefronts, and Shopify B2B",
    breadcrumbName: "Shopify Certified Developers",
    audienceType:
      "Shopify and Shopify Plus merchants seeking credentialed storefront, Liquid, B2B, integration, and ongoing development expertise",
    faqs: shopifyCertifiedDeveloperSchemaFaqs,
    offers: certifiedDeveloperServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createBuyShopifyDevelopmentHoursPageSchema() {
  return createServicePageSchema({
    page: pageSeo.buyShopifyDevelopmentHours,
    pageUrl: buyShopifyDevelopmentHoursPageUrl,
    pageId: buyShopifyDevelopmentHoursPageId,
    serviceId: buyShopifyDevelopmentHoursServiceId,
    faqId: buyShopifyDevelopmentHoursFaqId,
    breadcrumbId: buyShopifyDevelopmentHoursBreadcrumbId,
    serviceName: "Flexible Shopify Development Hours",
    serviceType:
      "Prepaid Shopify design and development hours for ongoing store improvements",
    breadcrumbName: "Buy Shopify Development Hours",
    audienceType:
      "Shopify and Shopify Plus brands, ecommerce teams, founders, and agencies seeking flexible development support",
    faqs: shopifyHoursFaqs,
    offers: shopifyHoursPackages.map((item) => ({
      title: `${item.hours} Shopify development hours`,
      description: `${item.hours} prepaid Shopify development hours at $${item.rate} per hour`,
      price: item.cost,
      priceCurrency: "USD",
      url: item.purchaseHref,
    })),
  });
}

export function createShopifyExpertsPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyExperts,
    pageUrl: shopifyExpertsPageUrl,
    pageId: shopifyExpertsPageId,
    serviceId: shopifyExpertsServiceId,
    faqId: shopifyExpertsFaqId,
    breadcrumbId: shopifyExpertsBreadcrumbId,
    serviceName: "Dedicated Shopify Expert Services",
    serviceType: "Certified Shopify experts, developers, and eCommerce consultants",
    breadcrumbName: "Shopify Experts",
    audienceType:
      "eCommerce brands, direct-to-consumer businesses, and digital agencies seeking certified Shopify experts",
    faqs: shopifyExpertsContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyExpertsContent.aiAutomation.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyMigration,
    pageUrl: shopifyMigrationPageUrl,
    pageId: shopifyMigrationPageId,
    serviceId: shopifyMigrationServiceId,
    faqId: shopifyMigrationFaqId,
    breadcrumbId: shopifyMigrationBreadcrumbId,
    serviceName: "Shopify Store Migration Services",
    serviceType:
      "End-to-end platform migration to Shopify & Shopify Plus with zero downtime and full data integrity",
    breadcrumbName: "Shopify Migration",
    audienceType:
      "eCommerce brands, direct-to-consumer businesses, and digital agencies migrating from Magento, WooCommerce, BigCommerce, Salesforce, PrestaShop, Squarespace, Wix, or Shopify 1.0",
    faqs: shopifyMigrationFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyMigrationServices.map((item) => ({
      title: item.title,
      description: item.description ?? "",
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createPrestashopToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.prestashopToShopifyMigration,
    pageUrl: prestashopToShopifyMigrationPageUrl,
    pageId: prestashopToShopifyMigrationPageId,
    serviceId: prestashopToShopifyMigrationServiceId,
    faqId: prestashopToShopifyMigrationFaqId,
    breadcrumbId: prestashopToShopifyMigrationBreadcrumbId,
    serviceName: "PrestaShop to Shopify Migration Services",
    serviceType:
      "End-to-end PrestaShop store migration to Shopify with zero downtime and full data integrity",
    breadcrumbName: "PrestaShop to Shopify Migration",
    audienceType:
      "PrestaShop merchants, ecommerce brands, and direct-to-consumer businesses migrating to Shopify or Shopify Plus",
    faqs: prestashopFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    })),
    offers: [
      ...prestashopBenefitsContent.items.map((item) => ({
        title: item.title,
        description: item.description,
      })),
      ...prestashopWhyChooseContent.items.map((item) => ({
        title: item.title,
        description: item.description,
      })),
    ],
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createSquareToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.squareToShopifyMigration,
    pageUrl: squareToShopifyMigrationPageUrl,
    pageId: squareToShopifyMigrationPageId,
    serviceId: squareToShopifyMigrationServiceId,
    faqId: squareToShopifyMigrationFaqId,
    breadcrumbId: squareToShopifyMigrationBreadcrumbId,
    serviceName: "Square to Shopify Migration Services",
    serviceType:
      "End-to-end Square store migration to Shopify with zero downtime and full data integrity",
    breadcrumbName: "Square to Shopify Migration",
    audienceType:
      "Square merchants, ecommerce brands, and direct-to-consumer businesses migrating to Shopify or Shopify Plus",
    faqs: squareFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    })),
    offers: squareProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createShopifyCroPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyCro,
    pageUrl: shopifyCroPageUrl,
    pageId: shopifyCroPageId,
    serviceId: shopifyCroServiceId,
    faqId: shopifyCroFaqId,
    breadcrumbId: shopifyCroBreadcrumbId,
    serviceName: "Shopify Conversion Rate Optimization (CRO) Services",
    serviceType:
      "Data-driven Shopify CRO audits, funnel analysis, A/B testing, user behavior insights, and UX implementation",
    breadcrumbName: "Shopify CRO Agency",
    audienceType:
      "Shopify and Shopify Plus merchants looking to increase store conversions, average order value (AOV), and customer retention",
    faqs: shopifyCroFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyCroServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createCaseStudiesPageSchema() {
  const caseStudyItems = caseStudiesContent.items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: item.title,
      headline: item.title,
      description: item.excerpt,
      image: absoluteUrl(item.image),
      genre: item.technology || item.industry,
      about: [item.technology, item.industry].filter(Boolean),
      url: absoluteUrl(item.href),
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "CollectionPage",
        "@id": caseStudiesPageId,
        url: caseStudiesPageUrl,
        name: pageSeo.caseStudies.title,
        description: pageSeo.caseStudies.description,
        datePublished: pageSeo.caseStudies.publishedTime,
        dateModified: pageSeo.caseStudies.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": caseStudiesBreadcrumbId },
        mainEntity: {
          "@type": "ItemList",
          "@id": caseStudiesItemListId,
          name: "Client Case Studies",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: caseStudiesContent.items.length,
          itemListElement: caseStudyItems,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.caseStudies.image.path),
          width: pageSeo.caseStudies.image.width,
          height: pageSeo.caseStudies.image.height,
          caption: pageSeo.caseStudies.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": caseStudiesBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: caseStudiesPageUrl,
          },
        ],
      },
    ],
  };
}

export function createCaseStudyDetailPageSchema(caseStudy: CaseStudyDetail) {
  const pageUrl = absoluteUrl(`/case-studies/${caseStudy.slug}`);
  const pageId = `${pageUrl}#webpage`;
  const creativeWorkId = `${pageUrl}#case-study`;
  const detailBreadcrumbId = `${pageUrl}#breadcrumb`;
  const imageUrl = absoluteUrl(caseStudy.hero.image.src);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: caseStudy.seo.title,
        description: caseStudy.seo.description,
        dateModified: caseStudy.seo.lastModified,
        isPartOf: { "@id": websiteId },
        about: { "@id": creativeWorkId },
        breadcrumb: { "@id": detailBreadcrumbId },
        mainEntity: { "@id": creativeWorkId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: caseStudy.hero.image.width,
          height: caseStudy.hero.image.height,
          caption: caseStudy.hero.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "CreativeWork",
        "@id": creativeWorkId,
        url: pageUrl,
        name: caseStudy.title,
        headline: caseStudy.title,
        description: caseStudy.summary,
        image: imageUrl,
        genre: caseStudy.technology,
        about: [caseStudy.technology, caseStudy.industry].filter(Boolean),
        spatialCoverage: caseStudy.location,
        creator: { "@id": organizationId },
        isPartOf: { "@id": caseStudiesPageId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": detailBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: caseStudiesPageUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: caseStudy.clientName,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export function createBlogPostDetailPageSchema(post: BlogPostDetail) {
  const pageUrl = absoluteUrl(`/blogs/${post.slug}`);
  const pageId = `${pageUrl}#webpage`;
  const articleId = `${pageUrl}#article`;
  const imageId = `${pageUrl}#primaryimage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const imageUrl = absoluteUrl(post.featuredImage.src);
  const authorId = `${siteConfig.url}#author-${post.author?.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "dynamic-dreamz"}`;
  const graph: Record<string, unknown>[] = [
    organizationSchema(),
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: homeUrl,
      name: siteConfig.name,
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": pageId,
      url: pageUrl,
      name: post.seo.title,
      description: post.seo.description,
      datePublished: `${post.date}T00:00:00+00:00`,
      dateModified: post.modified,
      isPartOf: { "@id": websiteId },
      about: { "@id": articleId },
      mainEntity: { "@id": articleId },
      breadcrumb: { "@id": breadcrumbId },
      primaryImageOfPage: { "@id": imageId },
      inLanguage: "en-US",
    },
    {
      "@type": "BlogPosting",
      "@id": articleId,
      url: pageUrl,
      headline: post.title,
      name: post.title,
      description: post.seo.description,
      image: { "@id": imageId },
      datePublished: `${post.date}T00:00:00+00:00`,
      dateModified: post.modified,
      author: { "@id": authorId },
      publisher: { "@id": organizationId },
      articleSection: post.category,
      wordCount: post.wordCount,
      mainEntityOfPage: { "@id": pageId },
      isPartOf: { "@id": websiteId },
      inLanguage: "en-US",
    },
    {
      "@type": "ImageObject",
      "@id": imageId,
      url: imageUrl,
      contentUrl: imageUrl,
      width: post.featuredImage.width,
      height: post.featuredImage.height,
      caption: post.featuredImage.alt,
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": authorId,
      name: post.author?.name ?? siteConfig.name,
      jobTitle: post.author?.role,
      description: post.author?.bio,
      ...(post.author?.image
        ? { image: { "@type": "ImageObject", url: absoluteUrl(post.author.image) } }
        : {}),
      ...(post.author?.linkedin ? { sameAs: [post.author.linkedin] } : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
        { "@type": "ListItem", position: 2, name: "Blogs", item: absoluteUrl("/blogs") },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ];

  if (post.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      isPartOf: { "@id": pageId },
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function createShopifyAppsPageSchema() {
  const appItems = shopifyAppsContent.apps.map((app, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.title,
      url: app.href,
      description: app.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Shopify",
      image: absoluteUrl(app.image),
      offers: {
        "@type": "Offer",
        price: app.additionalInfo.includes("$20") ? "20" : "0",
        priceCurrency: "USD",
        description: app.additionalInfo,
      },
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "CollectionPage",
        "@id": shopifyAppsPageId,
        url: shopifyAppsPageUrl,
        name: pageSeo.shopifyApps.title,
        description: pageSeo.shopifyApps.description,
        datePublished: pageSeo.shopifyApps.publishedTime,
        dateModified: pageSeo.shopifyApps.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": shopifyAppsBreadcrumbId },
        mainEntity: {
          "@type": "ItemList",
          "@id": shopifyAppsItemListId,
          name: "Shopify Apps",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: shopifyAppsContent.apps.length,
          itemListElement: appItems,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.shopifyApps.image.path),
          width: pageSeo.shopifyApps.image.width,
          height: pageSeo.shopifyApps.image.height,
          caption: pageSeo.shopifyApps.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": shopifyAppsBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Shopify App",
            item: shopifyAppsPageUrl,
          },
        ],
      },
    ],
  };
}

export function createShopifyThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyThemeCustomization,
    pageUrl: shopifyThemeCustomizationPageUrl,
    pageId: shopifyThemeCustomizationPageId,
    serviceId: shopifyThemeCustomizationServiceId,
    faqId: shopifyThemeCustomizationFaqId,
    breadcrumbId: shopifyThemeCustomizationBreadcrumbId,
    serviceName: "Shopify Theme Customization Services",
    serviceType: "Shopify theme customization, store design, Liquid development, and UI/UX optimization",
    breadcrumbName: "Shopify Theme Customization",
    audienceType:
      "eCommerce brands, direct-to-consumer businesses, and digital agencies seeking expert Shopify theme customization",
    faqs: shopifyThemeCustomizationContent.faqs.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createPrestigeThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.prestigeThemeCustomization,
    pageUrl: prestigeThemeCustomizationPageUrl,
    pageId: prestigeThemeCustomizationPageId,
    serviceId: prestigeThemeCustomizationServiceId,
    faqId: prestigeThemeCustomizationFaqId,
    breadcrumbId: prestigeThemeCustomizationBreadcrumbId,
    serviceName: "Prestige Theme Customization Service",
    serviceType: "Prestige Shopify theme customization, luxury store design, Liquid development, feature integration, and speed optimization",
    breadcrumbName: "Prestige Theme Customization Service",
    audienceType:
      "Luxury eCommerce brands, premium Shopify merchants, and digital agencies seeking expert Prestige theme customization",
    faqs: prestigeThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: prestigeThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createAstraThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.astraThemeCustomization,
    pageUrl: astraThemeCustomizationPageUrl,
    pageId: astraThemeCustomizationPageId,
    serviceId: astraThemeCustomizationServiceId,
    faqId: astraThemeCustomizationFaqId,
    breadcrumbId: astraThemeCustomizationBreadcrumbId,
    serviceName: "Astra Theme Customization Services",
    serviceType: "Astra WordPress theme customization, responsive WooCommerce store design, performance optimization, feature integration, and ongoing support",
    breadcrumbName: "Astra Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional Astra theme customization",
    faqs: astraThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: astraThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createKadenceThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.kadenceThemeCustomization,
    pageUrl: kadenceThemeCustomizationPageUrl,
    pageId: kadenceThemeCustomizationPageId,
    serviceId: kadenceThemeCustomizationServiceId,
    faqId: kadenceThemeCustomizationFaqId,
    breadcrumbId: kadenceThemeCustomizationBreadcrumbId,
    serviceName: "Kadence Theme Customization Services",
    serviceType: "Kadence WordPress theme customization, responsive WooCommerce store design, drag-and-drop header/footer layout, speed optimization, and custom hooks/filters integration",
    breadcrumbName: "Kadence Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional Kadence theme customization",
    faqs: kadenceThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: kadenceThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createHelloElementorThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.helloElementorThemeCustomization,
    pageUrl: helloElementorThemeCustomizationPageUrl,
    pageId: helloElementorThemeCustomizationPageId,
    serviceId: helloElementorThemeCustomizationServiceId,
    faqId: helloElementorThemeCustomizationFaqId,
    breadcrumbId: helloElementorThemeCustomizationBreadcrumbId,
    serviceName: "Hello Elementor Theme Customization Services",
    serviceType: "Hello Elementor WordPress theme customization, Elementor page builder design, WooCommerce integration, performance optimization, and custom styling",
    breadcrumbName: "Hello Elementor Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional Hello Elementor theme customization",
    faqs: helloElementorThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: helloElementorThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createRoyalElementorKitThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.royalElementorKitThemeCustomization,
    pageUrl: royalElementorKitThemeCustomizationPageUrl,
    pageId: royalElementorKitThemeCustomizationPageId,
    serviceId: royalElementorKitThemeCustomizationServiceId,
    faqId: royalElementorKitThemeCustomizationFaqId,
    breadcrumbId: royalElementorKitThemeCustomizationBreadcrumbId,
    serviceName: "Royal Elementor Kit Theme Customization Services",
    serviceType: "Royal Elementor Kit WordPress theme customization, Elementor page builder design, pre-designed templates, WooCommerce integration, speed optimization, and custom styling",
    breadcrumbName: "Royal Elementor Kit Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional Royal Elementor Kit theme customization",
    faqs: royalElementorKitThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: royalElementorKitThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createPopularfxThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.popularfxThemeCustomization,
    pageUrl: popularfxThemeCustomizationPageUrl,
    pageId: popularfxThemeCustomizationPageId,
    serviceId: popularfxThemeCustomizationServiceId,
    faqId: popularfxThemeCustomizationFaqId,
    breadcrumbId: popularfxThemeCustomizationBreadcrumbId,
    serviceName: "PopularFX Theme Customization Services",
    serviceType: "PopularFX WordPress theme customization, drag-and-drop page builder design, pre-built templates, WooCommerce integration, speed optimization, and custom styling",
    breadcrumbName: "PopularFX Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional PopularFX theme customization",
    faqs: popularfxThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: popularfxThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createBloghashThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.bloghashThemeCustomization,
    pageUrl: bloghashThemeCustomizationPageUrl,
    pageId: bloghashThemeCustomizationPageId,
    serviceId: bloghashThemeCustomizationServiceId,
    faqId: bloghashThemeCustomizationFaqId,
    breadcrumbId: bloghashThemeCustomizationBreadcrumbId,
    serviceName: "BlogHash Theme Customization Services",
    serviceType: "BlogHash WordPress theme customization, minimal blog design, custom layouts, Gutenberg block editor integration, speed optimization, and custom styling",
    breadcrumbName: "BlogHash Theme Customization Service",
    audienceType:
      "WordPress site owners, bloggers, content creators, publishers, businesses, and digital agencies seeking professional BlogHash theme customization",
    faqs: bloghashThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: bloghashThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createGoThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.goThemeCustomization,
    pageUrl: goThemeCustomizationPageUrl,
    pageId: goThemeCustomizationPageId,
    serviceId: goThemeCustomizationServiceId,
    faqId: goThemeCustomizationFaqId,
    breadcrumbId: goThemeCustomizationBreadcrumbId,
    serviceName: "Go Theme Customization Services",
    serviceType: "Go WordPress theme customization, block editor optimization, custom typography, color styles, WooCommerce integration, speed optimization, and custom styling",
    breadcrumbName: "Go Theme Customization Service",
    audienceType:
      "WordPress site owners, bloggers, businesses, WooCommerce merchants, and digital agencies seeking professional Go theme customization",
    faqs: goThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: goThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createNewsbloggerThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.newsbloggerThemeCustomization,
    pageUrl: newsbloggerThemeCustomizationPageUrl,
    pageId: newsbloggerThemeCustomizationPageId,
    serviceId: newsbloggerThemeCustomizationServiceId,
    faqId: newsbloggerThemeCustomizationFaqId,
    breadcrumbId: newsbloggerThemeCustomizationBreadcrumbId,
    serviceName: "NewsBlogger Theme Customization Services",
    serviceType: "NewsBlogger WordPress theme customization, magazine layouts, custom widgets, sidebar design, speed optimization, and custom styling",
    breadcrumbName: "NewsBlogger Theme Customization Service",
    audienceType:
      "WordPress site owners, news publishers, bloggers, online magazines, content creators, and digital agencies seeking professional NewsBlogger theme customization",
    faqs: newsbloggerThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: newsbloggerThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createHelloBizThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.helloBizThemeCustomization,
    pageUrl: helloBizThemeCustomizationPageUrl,
    pageId: helloBizThemeCustomizationPageId,
    serviceId: helloBizThemeCustomizationServiceId,
    faqId: helloBizThemeCustomizationFaqId,
    breadcrumbId: helloBizThemeCustomizationBreadcrumbId,
    serviceName: "Hello Biz Theme Customization Services",
    serviceType: "Hello Biz WordPress theme customization, business website layouts, custom branding, Gutenberg block builder support, speed optimization, and custom styling",
    breadcrumbName: "Hello Biz Theme Customization Service",
    audienceType:
      "WordPress site owners, startups, small businesses, corporate enterprises, digital agencies, and WooCommerce merchants seeking professional Hello Biz theme customization",
    faqs: helloBizThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: helloBizThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createGeneratepressThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.generatepressThemeCustomization,
    pageUrl: generatepressThemeCustomizationPageUrl,
    pageId: generatepressThemeCustomizationPageId,
    serviceId: generatepressThemeCustomizationServiceId,
    faqId: generatepressThemeCustomizationFaqId,
    breadcrumbId: generatepressThemeCustomizationBreadcrumbId,
    serviceName: "GeneratePress Theme Customization Services",
    serviceType: "GeneratePress WordPress theme customization, responsive WooCommerce store design, modular layout configuration, speed optimization, and custom hook/filter development",
    breadcrumbName: "GeneratePress Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional GeneratePress theme customization",
    faqs: generatepressThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: generatepressThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createOceanwpThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.oceanwpThemeCustomization,
    pageUrl: oceanwpThemeCustomizationPageUrl,
    pageId: oceanwpThemeCustomizationPageId,
    serviceId: oceanwpThemeCustomizationServiceId,
    faqId: oceanwpThemeCustomizationFaqId,
    breadcrumbId: oceanwpThemeCustomizationBreadcrumbId,
    serviceName: "OceanWP Theme Customization Services",
    serviceType: "OceanWP WordPress theme customization, responsive WooCommerce store design, custom styling, speed optimization, and third-party plugin integration",
    breadcrumbName: "OceanWP Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional OceanWP theme customization",
    faqs: oceanwpThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: oceanwpThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createNeveThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.neveThemeCustomization,
    pageUrl: neveThemeCustomizationPageUrl,
    pageId: neveThemeCustomizationPageId,
    serviceId: neveThemeCustomizationServiceId,
    faqId: neveThemeCustomizationFaqId,
    breadcrumbId: neveThemeCustomizationBreadcrumbId,
    serviceName: "Neve Theme Customization Services",
    serviceType: "Neve WordPress theme customization, responsive WooCommerce store design, header and footer builder configuration, AMP optimization, and page builder integration",
    breadcrumbName: "Neve Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional Neve theme customization",
    faqs: neveThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: neveThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createBlocksyThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.blocksyThemeCustomization,
    pageUrl: blocksyThemeCustomizationPageUrl,
    pageId: blocksyThemeCustomizationPageId,
    serviceId: blocksyThemeCustomizationServiceId,
    faqId: blocksyThemeCustomizationFaqId,
    breadcrumbId: blocksyThemeCustomizationBreadcrumbId,
    serviceName: "Blocksy Theme Customization Services",
    serviceType: "Blocksy WordPress theme customization, responsive WooCommerce store design, Gutenberg & page builder integration, header/footer builder, and speed optimization",
    breadcrumbName: "Blocksy Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional Blocksy theme customization",
    faqs: blocksyThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: blocksyThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createExtendableThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.extendableThemeCustomization,
    pageUrl: extendableThemeCustomizationPageUrl,
    pageId: extendableThemeCustomizationPageId,
    serviceId: extendableThemeCustomizationServiceId,
    faqId: extendableThemeCustomizationFaqId,
    breadcrumbId: extendableThemeCustomizationBreadcrumbId,
    serviceName: "Extendable Theme Customization Service",
    serviceType: "Extendable WordPress theme customization, responsive WooCommerce store design, drag-and-drop builder integration, header/footer styles, color & typography customization, and speed optimization",
    breadcrumbName: "Extendable Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional Extendable theme customization",
    faqs: extendableThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: extendableThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createKubioThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.kubioThemeCustomization,
    pageUrl: kubioThemeCustomizationPageUrl,
    pageId: kubioThemeCustomizationPageId,
    serviceId: kubioThemeCustomizationServiceId,
    faqId: kubioThemeCustomizationFaqId,
    breadcrumbId: kubioThemeCustomizationBreadcrumbId,
    serviceName: "Kubio Theme Customization Service",
    serviceType: "Kubio WordPress theme customization, responsive WooCommerce store design, block-based drag-and-drop builder integration, pre-built template customization, custom fonts & colors, and speed optimization",
    breadcrumbName: "Kubio Theme Customization Service",
    audienceType:
      "WordPress site owners, WooCommerce merchants, businesses, and digital agencies seeking professional Kubio theme customization",
    faqs: kubioThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: kubioThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createImpulseThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.impulseThemeCustomization,
    pageUrl: impulseThemeCustomizationPageUrl,
    pageId: impulseThemeCustomizationPageId,
    serviceId: impulseThemeCustomizationServiceId,
    faqId: impulseThemeCustomizationFaqId,
    breadcrumbId: impulseThemeCustomizationBreadcrumbId,
    serviceName: "Impulse Theme Customization Service",
    serviceType: "Impulse Shopify theme customization, responsive store design, Liquid development, feature integration, and speed optimization",
    breadcrumbName: "Impulse Theme Customization Service",
    audienceType:
      "Direct-to-consumer eCommerce brands, high-volume Shopify merchants, and digital agencies seeking expert Impulse theme customization",
    faqs: impulseThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: impulseThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createSenseThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.senseThemeCustomization,
    pageUrl: senseThemeCustomizationPageUrl,
    pageId: senseThemeCustomizationPageId,
    serviceId: senseThemeCustomizationServiceId,
    faqId: senseThemeCustomizationFaqId,
    breadcrumbId: senseThemeCustomizationBreadcrumbId,
    serviceName: "Sense Theme Customization Service",
    serviceType: "Sense Shopify theme customization, modern clean store design, Liquid development, speed optimization, and third-party app integration",
    breadcrumbName: "Sense Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, Shopify merchants, and digital agencies seeking professional Sense theme customization",
    faqs: senseThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: senseThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createBeYoursThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.beYoursThemeCustomization,
    pageUrl: beYoursThemeCustomizationPageUrl,
    pageId: beYoursThemeCustomizationPageId,
    serviceId: beYoursThemeCustomizationServiceId,
    faqId: beYoursThemeCustomizationFaqId,
    breadcrumbId: beYoursThemeCustomizationBreadcrumbId,
    serviceName: "Be Yours Theme Customization Service",
    serviceType: "Be Yours Shopify theme customization, minimalistic store design, Liquid development, promotional banners, product filtering, mega menu support, and third-party app integration",
    breadcrumbName: "Be Yours Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, DTC retailers, Shopify merchants, and digital agencies seeking professional Be Yours theme customization",
    faqs: beYoursThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: beYoursThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createFabricThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.fabricThemeCustomization,
    pageUrl: fabricThemeCustomizationPageUrl,
    pageId: fabricThemeCustomizationPageId,
    serviceId: fabricThemeCustomizationServiceId,
    faqId: fabricThemeCustomizationFaqId,
    breadcrumbId: fabricThemeCustomizationBreadcrumbId,
    serviceName: "Fabric Theme Customization Services",
    serviceType: "Fabric Shopify theme customization, product-forward store design, visual storytelling, enhanced search, Liquid development, mega menu support, and third-party app integration",
    breadcrumbName: "Fabric Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, fashion retailers, DTC merchants, and digital agencies seeking professional Fabric theme customization",
    faqs: fabricThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: fabricThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createSavorThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.savorThemeCustomization,
    pageUrl: savorThemeCustomizationPageUrl,
    pageId: savorThemeCustomizationPageId,
    serviceId: savorThemeCustomizationServiceId,
    faqId: savorThemeCustomizationFaqId,
    breadcrumbId: savorThemeCustomizationBreadcrumbId,
    serviceName: "Savor Theme Customization Service",
    serviceType: "Savor Shopify theme customization, food and beverage store design, visual storytelling, flexible navigation, Liquid development, media-rich product pages, and third-party app integration",
    breadcrumbName: "Savor Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, food and beverage retailers, restaurants, bakeries, and digital agencies seeking professional Savor theme customization",
    faqs: savorThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: savorThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createDawnThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.dawnThemeCustomization,
    pageUrl: dawnThemeCustomizationPageUrl,
    pageId: dawnThemeCustomizationPageId,
    serviceId: dawnThemeCustomizationServiceId,
    faqId: dawnThemeCustomizationFaqId,
    breadcrumbId: dawnThemeCustomizationBreadcrumbId,
    serviceName: "Dawn Theme Customization Service",
    serviceType: "Dawn Shopify theme customization, minimal store design, speed optimization, flexible content sections, Liquid development, media-rich product pages, and third-party app integration",
    breadcrumbName: "Dawn Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, DTC retailers, Shopify merchants, and digital agencies seeking professional Dawn theme customization",
    faqs: dawnThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: dawnThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createStudioThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.studioThemeCustomization,
    pageUrl: studioThemeCustomizationPageUrl,
    pageId: studioThemeCustomizationPageId,
    serviceId: studioThemeCustomizationServiceId,
    faqId: studioThemeCustomizationFaqId,
    breadcrumbId: studioThemeCustomizationBreadcrumbId,
    serviceName: "Studio Theme Customization Service",
    serviceType: "Studio Shopify theme customization, artistic store design, visual storytelling, gallery sections, product discovery tools, Liquid development, media-rich product pages, and third-party app integration",
    breadcrumbName: "Studio Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, artists, creators, boutique retailers, and digital agencies seeking professional Studio theme customization",
    faqs: studioThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: studioThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createDwellThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.dwellThemeCustomization,
    pageUrl: dwellThemeCustomizationPageUrl,
    pageId: dwellThemeCustomizationPageId,
    serviceId: dwellThemeCustomizationServiceId,
    faqId: dwellThemeCustomizationFaqId,
    breadcrumbId: dwellThemeCustomizationBreadcrumbId,
    serviceName: "Dwell Theme Customization Service",
    serviceType: "Dwell Shopify theme customization, warm minimal store design, visual storytelling, intuitive product discovery, slide-out cart setup, Liquid development, and third-party app integration",
    breadcrumbName: "Dwell Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, home and decor retailers, lifestyle stores, fashion brands, and digital agencies seeking professional Dwell theme customization",
    faqs: dwellThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: dwellThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createTinkerThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.tinkerThemeCustomization,
    pageUrl: tinkerThemeCustomizationPageUrl,
    pageId: tinkerThemeCustomizationPageId,
    serviceId: tinkerThemeCustomizationServiceId,
    faqId: tinkerThemeCustomizationFaqId,
    breadcrumbId: tinkerThemeCustomizationBreadcrumbId,
    serviceName: "Tinker Theme Customization Service",
    serviceType: "Tinker Shopify theme customization, creative playful store design, multi-product catalog layout, efficient discovery features, slide-out cart setup, Liquid development, and third-party app integration",
    breadcrumbName: "Tinker Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, creative retail businesses, lifestyle brands, multi-product stores, and digital agencies seeking professional Tinker theme customization",
    faqs: tinkerThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: tinkerThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createPitchThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.pitchThemeCustomization,
    pageUrl: pitchThemeCustomizationPageUrl,
    pageId: pitchThemeCustomizationPageId,
    serviceId: pitchThemeCustomizationServiceId,
    faqId: pitchThemeCustomizationFaqId,
    breadcrumbId: pitchThemeCustomizationBreadcrumbId,
    serviceName: "Pitch Theme Customization Service",
    serviceType: "Pitch Shopify theme customization, bold visual store design, rich brand storytelling, slideshow and video support, quick buy option, Liquid development, and third-party app integration",
    breadcrumbName: "Pitch Theme Customization Service",
    audienceType:
      "Modern eCommerce brands, trendy retailers, lifestyle brands, visual storytelling businesses, and digital agencies seeking professional Pitch theme customization",
    faqs: pitchThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: pitchThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createAtelierThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.atelierThemeCustomization,
    pageUrl: atelierThemeCustomizationPageUrl,
    pageId: atelierThemeCustomizationPageId,
    serviceId: atelierThemeCustomizationServiceId,
    faqId: atelierThemeCustomizationFaqId,
    breadcrumbId: atelierThemeCustomizationBreadcrumbId,
    serviceName: "Atelier Theme Customization Service",
    serviceType: "Atelier Shopify theme customization, elegant negative-space layout, editorial design, high-resolution image galleries, in-menu promo banners, multi-language setup, Liquid development, and third-party app integration",
    breadcrumbName: "Atelier Theme Customization Service",
    audienceType:
      "Luxury fashion brands, boutique retailers, high-end lifestyle labels, home goods stores, and modern eCommerce businesses seeking professional Atelier theme customization",
    faqs: atelierThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: atelierThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createHeritageThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.heritageThemeCustomization,
    pageUrl: heritageThemeCustomizationPageUrl,
    pageId: heritageThemeCustomizationPageId,
    serviceId: heritageThemeCustomizationServiceId,
    faqId: heritageThemeCustomizationFaqId,
    breadcrumbId: heritageThemeCustomizationBreadcrumbId,
    serviceName: "Heritage Theme Customization Service",
    serviceType: "Heritage Shopify theme customization, editorial storytelling, tactile rich product showcases, RTL support, multi-level menus, Liquid development, and third-party app integration",
    breadcrumbName: "Heritage Theme Customization Service",
    audienceType:
      "Traditional and heritage retail brands, artisanal products, luxury health and beauty labels, toy and game brands, and modern eCommerce businesses seeking professional Heritage theme customization",
    faqs: heritageThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: heritageThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createRitualThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.ritualThemeCustomization,
    pageUrl: ritualThemeCustomizationPageUrl,
    pageId: ritualThemeCustomizationPageId,
    serviceId: ritualThemeCustomizationServiceId,
    faqId: ritualThemeCustomizationFaqId,
    breadcrumbId: ritualThemeCustomizationBreadcrumbId,
    serviceName: "Ritual Theme Customization Service",
    serviceType: "Ritual Shopify theme customization, visually rich storytelling layout, product video integration, customizable sections, visual mega menu, optimized checkout, Liquid development, and third-party app integration",
    breadcrumbName: "Ritual Theme Customization Service",
    audienceType:
      "Wellness brands, skincare stores, beauty labels, lifestyle shops, and modern eCommerce businesses seeking professional Ritual theme customization",
    faqs: ritualThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: ritualThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createPublisherThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.publisherThemeCustomization,
    pageUrl: publisherThemeCustomizationPageUrl,
    pageId: publisherThemeCustomizationPageId,
    serviceId: publisherThemeCustomizationServiceId,
    faqId: publisherThemeCustomizationFaqId,
    breadcrumbId: publisherThemeCustomizationBreadcrumbId,
    serviceName: "Publisher Theme Customization Service",
    serviceType: "Publisher Shopify theme customization, content-focused layouts, multiple homepage styles, customizable sections, responsive design, product quick view feature, SEO structure, multi-language support, Liquid development, and third-party app integration",
    breadcrumbName: "Publisher Theme Customization Service",
    audienceType:
      "Content-rich eCommerce stores, editorial retailers, apparel brands, accessories labels, digital publishers, and modern businesses seeking professional Publisher theme customization",
    faqs: publisherThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: publisherThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createTradeThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.tradeThemeCustomization,
    pageUrl: tradeThemeCustomizationPageUrl,
    pageId: tradeThemeCustomizationPageId,
    serviceId: tradeThemeCustomizationServiceId,
    faqId: tradeThemeCustomizationFaqId,
    breadcrumbId: tradeThemeCustomizationBreadcrumbId,
    serviceName: "Trade Theme Customization Service",
    serviceType: "Trade Shopify theme customization, versatile layout options, dynamic product filtering, customizable sections, responsive design, product quick view feature, SEO structure, multi-language support, Liquid development, and third-party app integration",
    breadcrumbName: "Trade Theme Customization Service",
    audienceType:
      "Wholesale businesses, B2B merchants, high-volume retail stores, industrial suppliers, multi-product catalog stores, and modern eCommerce businesses seeking professional Trade theme customization",
    faqs: tradeThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: tradeThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createSpotlightThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.spotlightThemeCustomization,
    pageUrl: spotlightThemeCustomizationPageUrl,
    pageId: spotlightThemeCustomizationPageId,
    serviceId: spotlightThemeCustomizationServiceId,
    faqId: spotlightThemeCustomizationFaqId,
    breadcrumbId: spotlightThemeCustomizationBreadcrumbId,
    serviceName: "Spotlight Theme Customization Service",
    serviceType: "Spotlight Shopify theme customization, minimalist design, high-quality imagery support, customizable sections, mobile optimization, quick buy option, SEO structure, flexible layouts, Liquid development, and third-party app integration",
    breadcrumbName: "Spotlight Theme Customization Service",
    audienceType:
      "Minimalist eCommerce stores, direct-to-consumer brands, boutique retailers, single-product showcases, curated collections, and modern businesses seeking professional Spotlight theme customization",
    faqs: spotlightThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: spotlightThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createRefreshThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.refreshThemeCustomization,
    pageUrl: refreshThemeCustomizationPageUrl,
    pageId: refreshThemeCustomizationPageId,
    serviceId: refreshThemeCustomizationServiceId,
    faqId: refreshThemeCustomizationFaqId,
    breadcrumbId: refreshThemeCustomizationBreadcrumbId,
    serviceName: "Refresh Theme Customization Service",
    serviceType: "Refresh Shopify theme customization, minimalist clean design, fast loading speed optimization, mobile responsive design, customizable sections, SEO best practices, easy navigation, Liquid development, and third-party app integration",
    breadcrumbName: "Refresh Theme Customization Service",
    audienceType:
      "Health and beauty brands, lifestyle retailers, curated product stores, DTC merchants, and modern eCommerce businesses seeking professional Refresh theme customization",
    faqs: refreshThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: refreshThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createWoodstockThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.woodstockThemeCustomization,
    pageUrl: woodstockThemeCustomizationPageUrl,
    pageId: woodstockThemeCustomizationPageId,
    serviceId: woodstockThemeCustomizationServiceId,
    faqId: woodstockThemeCustomizationFaqId,
    breadcrumbId: woodstockThemeCustomizationBreadcrumbId,
    serviceName: "Woodstock Theme Customization Service",
    serviceType: "Woodstock Shopify theme customization, modern minimalist design, fast loading speed, advanced mega menu, flexible customization, product quick view, multi-language support, multi-currency support, SEO structure, mobile-optimized design, Liquid development, and third-party app integration",
    breadcrumbName: "Woodstock Theme Customization Service",
    audienceType:
      "Fashion retailers, electronics stores, lifestyle brands, high-traffic ecommerce businesses, large catalog stores, and modern Shopify merchants seeking professional Woodstock theme customization",
    faqs: woodstockThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: woodstockThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createOriginThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.originThemeCustomization,
    pageUrl: originThemeCustomizationPageUrl,
    pageId: originThemeCustomizationPageId,
    serviceId: originThemeCustomizationServiceId,
    faqId: originThemeCustomizationFaqId,
    breadcrumbId: originThemeCustomizationBreadcrumbId,
    serviceName: "Origin Theme Customization Service",
    serviceType: "Origin Shopify theme customization, minimalist design, fast loading speed optimization, customizable sections, mobile responsive design, product quick view, multi-column menu, SEO structure, Liquid development, and third-party app integration",
    breadcrumbName: "Origin Theme Customization Service",
    audienceType:
      "Artisanal makers, single-product storytellers, boutique lifestyle brands, direct-to-consumer creators, and modern Shopify merchants seeking professional Origin theme customization",
    faqs: originThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: originThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createStilettoThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.stilettoThemeCustomization,
    pageUrl: stilettoThemeCustomizationPageUrl,
    pageId: stilettoThemeCustomizationPageId,
    serviceId: stilettoThemeCustomizationServiceId,
    faqId: stilettoThemeCustomizationFaqId,
    breadcrumbId: stilettoThemeCustomizationBreadcrumbId,
    serviceName: "Stiletto Theme Customization Service",
    serviceType: "Stiletto Shopify theme customization, luxury modern design, advanced product display, multiple layout options, interactive hover effects, mega menu navigation, built-in marketing tools, SEO structure, mobile-first design, Liquid development, and third-party app integration",
    breadcrumbName: "Stiletto Theme Customization Service",
    audienceType:
      "Luxury fashion brands, high-end beauty retailers, boutique lifestyle labels, premium jewelry stores, and modern Shopify merchants seeking professional Stiletto theme customization",
    faqs: stilettoThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: stilettoThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createColorblockThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.colorblockThemeCustomization,
    pageUrl: colorblockThemeCustomizationPageUrl,
    pageId: colorblockThemeCustomizationPageId,
    serviceId: colorblockThemeCustomizationServiceId,
    faqId: colorblockThemeCustomizationFaqId,
    breadcrumbId: colorblockThemeCustomizationBreadcrumbId,
    serviceName: "Colorblock Theme Customization Service",
    serviceType: "Colorblock Shopify theme customization, bold vibrant design, flexible content sections, multiple homepage layouts, high-quality image display, seamless mega menu navigation, promotional banners and pop-ups, SEO structure, mobile-friendly design, Liquid development, and third-party app integration",
    breadcrumbName: "Colorblock Theme Customization Service",
    audienceType:
      "Bold fashion brands, colorful beauty retailers, lifestyle stores, multi-category ecommerce businesses, and modern Shopify merchants seeking professional Colorblock theme customization",
    faqs: colorblockThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: colorblockThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createPipelineThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.pipelineThemeCustomization,
    pageUrl: pipelineThemeCustomizationPageUrl,
    pageId: pipelineThemeCustomizationPageId,
    serviceId: pipelineThemeCustomizationServiceId,
    faqId: pipelineThemeCustomizationFaqId,
    breadcrumbId: pipelineThemeCustomizationBreadcrumbId,
    serviceName: "Pipeline Theme Customization Service",
    serviceType: "Pipeline Shopify theme customization, parallax scrolling, multi-level navigation, customizable homepage sections, large visual banners, SEO optimization, mobile-friendly design, integrated blogging section, social media integration, Liquid development, and third-party app integration",
    breadcrumbName: "Pipeline Theme Customization Service",
    audienceType:
      "Visual brand storytellers, lifestyle and outdoor retailers, fashion houses, art and photography stores, multi-level catalog ecommerce businesses, and modern Shopify merchants seeking professional Pipeline theme customization",
    faqs: pipelineThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: pipelineThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createVisionThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.visionThemeCustomization,
    pageUrl: visionThemeCustomizationPageUrl,
    pageId: visionThemeCustomizationPageId,
    serviceId: visionThemeCustomizationServiceId,
    faqId: visionThemeCustomizationFaqId,
    breadcrumbId: visionThemeCustomizationBreadcrumbId,
    serviceName: "Vision Theme Customization Service",
    serviceType: "Vision Shopify theme customization, high-impact visual design, flexible homepage sections, mega menu support, product image zoom and hover effects, speed optimization, mobile-friendly layout, integrated social media links, built-in SEO tools, Liquid development, and third-party app integration",
    breadcrumbName: "Vision Theme Customization Service",
    audienceType:
      "Stylish fashion retailers, beauty and cosmetics brands, modern tech gadget stores, lifestyle ecommerce businesses, visual catalog brands, and modern Shopify merchants seeking professional Vision theme customization",
    faqs: visionThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: visionThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createCraftThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.craftThemeCustomization,
    pageUrl: craftThemeCustomizationPageUrl,
    pageId: craftThemeCustomizationPageId,
    serviceId: craftThemeCustomizationServiceId,
    faqId: craftThemeCustomizationFaqId,
    breadcrumbId: craftThemeCustomizationBreadcrumbId,
    serviceName: "Craft Theme Customization Service",
    serviceType: "Craft Shopify theme customization, minimalist clean design, flexible sections, large image display, smooth navigation, storytelling features, SEO structure, mobile optimization, customizable typography, Liquid development, and third-party app integration",
    breadcrumbName: "Craft Theme Customization Service",
    audienceType:
      "Artisanal makers, handcrafted goods brands, boutique lifestyle retailers, minimalist aesthetic businesses, storytelling-first ecommerce brands, and modern Shopify merchants seeking professional Craft theme customization",
    faqs: craftThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: craftThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createBroadcastThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.broadcastThemeCustomization,
    pageUrl: broadcastThemeCustomizationPageUrl,
    pageId: broadcastThemeCustomizationPageId,
    serviceId: broadcastThemeCustomizationServiceId,
    faqId: broadcastThemeCustomizationFaqId,
    breadcrumbId: broadcastThemeCustomizationBreadcrumbId,
    serviceName: "Broadcast Theme Customization Service",
    serviceType: "Broadcast Shopify theme customization, built-in lookbook and storytelling, high-quality video support, advanced product filtering, customizable homepage layouts, SEO optimization, one-click add to cart, product quick view, social proof reviews, Liquid development, and third-party app integration",
    breadcrumbName: "Broadcast Theme Customization Service",
    audienceType:
      "Fashion apparel brands, beauty and cosmetics labels, lifestyle stores, multi-category retailers, visual storytelling ecommerce brands, and modern Shopify merchants seeking professional Broadcast theme customization",
    faqs: broadcastThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: broadcastThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createWarehouseThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.warehouseThemeCustomization,
    pageUrl: warehouseThemeCustomizationPageUrl,
    pageId: warehouseThemeCustomizationPageId,
    serviceId: warehouseThemeCustomizationServiceId,
    faqId: warehouseThemeCustomizationFaqId,
    breadcrumbId: warehouseThemeCustomizationBreadcrumbId,
    serviceName: "Warehouse Theme Customization Service",
    serviceType: "Warehouse Shopify theme customization, large catalog support, advanced search and filtering, high-performance design, mobile-friendly layout, customizable homepage sections, built-in product badges, SEO structure, cart and checkout enhancements, Liquid development, and third-party app integration",
    breadcrumbName: "Warehouse Theme Customization Service",
    audienceType:
      "Large inventory stores, high-volume ecommerce retailers, multi-category department stores, electronics and industrial distributors, wholesale B2B merchants, and modern Shopify merchants seeking professional Warehouse theme customization",
    faqs: warehouseThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: warehouseThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createStartupThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.startupThemeCustomization,
    pageUrl: startupThemeCustomizationPageUrl,
    pageId: startupThemeCustomizationPageId,
    serviceId: startupThemeCustomizationServiceId,
    faqId: startupThemeCustomizationFaqId,
    breadcrumbId: startupThemeCustomizationBreadcrumbId,
    serviceName: "Startup Theme Customization Service",
    serviceType: "Startup Shopify theme customization, single-product focus, modern minimalist design, brand storytelling, quick setup, high-speed performance, SEO-optimized structure, integrated marketing sections, Liquid development, and third-party app integration",
    breadcrumbName: "Startup Theme Customization Service",
    audienceType:
      "Direct-to-consumer brands, single-product ecommerce stores, tiny catalog boutique retailers, product launch founders, dropshipping entrepreneurs, and modern Shopify merchants seeking professional Startup theme customization",
    faqs: startupThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: startupThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createImpactThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.impactThemeCustomization,
    pageUrl: impactThemeCustomizationPageUrl,
    pageId: impactThemeCustomizationPageId,
    serviceId: impactThemeCustomizationServiceId,
    faqId: impactThemeCustomizationFaqId,
    breadcrumbId: impactThemeCustomizationBreadcrumbId,
    serviceName: "Impact Theme Customization Service",
    serviceType: "Impact Shopify theme customization, visual storytelling layouts, high-speed performance, advanced product displays, seamless navigation, mobile optimization, conversion-focused elements, marketing integrations, Liquid development, and third-party app integration",
    breadcrumbName: "Impact Theme Customization Service",
    audienceType:
      "Visual storytelling brands, modern tech gadget retailers, bold fashion labels, beauty and lifestyle stores, high-impact ecommerce businesses, and modern Shopify merchants seeking professional Impact theme customization",
    faqs: impactThemeCustomizationContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: impactThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createShopifyDevelopmentAgencyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyDevelopmentAgency,
    pageUrl: shopifyDevelopmentAgencyPageUrl,
    pageId: shopifyDevelopmentAgencyPageId,
    serviceId: shopifyDevelopmentAgencyServiceId,
    faqId: shopifyDevelopmentAgencyFaqId,
    breadcrumbId: shopifyDevelopmentAgencyBreadcrumbId,
    serviceName: "Shopify Development Services",
    serviceType: "Custom Shopify store development, theme customization, migration, app integration, and maintenance",
    breadcrumbName: "Shopify Development Agency",
    audienceType:
      "DTC brands, B2B merchants, store owners, and digital agencies seeking comprehensive Shopify development services",
    faqs: shopifyDevelopmentAgencyFaqs,
    offers: shopifyDevelopmentAgencyServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWooCommerceDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.woocommerceDevelopment,
    pageUrl: woocommerceDevelopmentPageUrl,
    pageId: woocommerceDevelopmentPageId,
    serviceId: woocommerceDevelopmentServiceId,
    faqId: woocommerceDevelopmentFaqId,
    breadcrumbId: woocommerceDevelopmentBreadcrumbId,
    serviceName: "WooCommerce Development Services",
    serviceType: "Custom WooCommerce store design, theme development, plugin development, API development, migration, and maintenance",
    breadcrumbName: "WooCommerce Development",
    audienceType:
      "Store owners, merchants, digital agencies, and businesses seeking custom WooCommerce development services",
    faqs: woocommerceDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ].join(" "),
    })),
    offers: woocommerceDevelopmentServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createMagentoDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.magentoDevelopment,
    pageUrl: magentoDevelopmentPageUrl,
    pageId: magentoDevelopmentPageId,
    serviceId: magentoDevelopmentServiceId,
    faqId: magentoDevelopmentFaqId,
    breadcrumbId: magentoDevelopmentBreadcrumbId,
    serviceName: "Magento Development Services",
    serviceType:
      "Custom Magento store development, theme development, module development, migration, speed optimization, and ongoing support",
    breadcrumbName: "Magento Development",
    audienceType:
      "Enterprise merchants, B2B companies, DTC brands, and digital agencies seeking custom Magento development services",
    faqs: magentoDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ].join(" "),
    })),
    offers: magentoDevelopmentServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWordPressThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.wordPressThemeCustomization,
    pageUrl: wordPressThemeCustomizationPageUrl,
    pageId: wordPressThemeCustomizationPageId,
    serviceId: wordPressThemeCustomizationServiceId,
    faqId: wordPressThemeCustomizationFaqId,
    breadcrumbId: wordPressThemeCustomizationBreadcrumbId,
    serviceName: "WordPress Theme Customization Services",
    serviceType:
      "Custom WordPress theme customization, responsive design, plugin integration, speed optimization, and maintenance",
    breadcrumbName: "WordPress Theme Customization",
    audienceType:
      "Businesses, website owners, and digital agencies seeking expert WordPress theme customization",
    faqs: wordPressThemeCustomizationFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: wordPressThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createAndroidAppDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.androidAppDevelopment,
    pageUrl: androidAppDevelopmentPageUrl,
    pageId: androidAppDevelopmentPageId,
    serviceId: androidAppDevelopmentServiceId,
    faqId: androidAppDevelopmentFaqId,
    breadcrumbId: androidAppDevelopmentBreadcrumbId,
    serviceName: "Android App Development Services",
    serviceType:
      "Custom Android app development, native app development, Material Design implementation, QA testing, Google Play Store deployment, Shopify app development, hybrid app development, maintenance, and support",
    breadcrumbName: "Android App Development",
    audienceType:
      "Digital agencies, web design companies, ecommerce merchants, and businesses looking to build high-performance custom Android applications",
    faqs: androidAppDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: androidAppDevelopmentServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createMobileApplicationDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.mobileApplicationDevelopment,
    pageUrl: mobileApplicationDevelopmentPageUrl,
    pageId: mobileApplicationDevelopmentPageId,
    serviceId: mobileApplicationDevelopmentServiceId,
    faqId: mobileApplicationDevelopmentFaqId,
    breadcrumbId: mobileApplicationDevelopmentBreadcrumbId,
    serviceName: "Mobile Application Development Services",
    serviceType:
      "Custom mobile application development, Shopify add-on applications, store synchronisation, mobile app customisation, testing, and app store launch support",
    breadcrumbName: "Mobile Application Development",
    audienceType:
      "Shopify merchants, ecommerce brands, and store owners looking for a customised mobile application",
    faqs: mobileApplicationDevelopmentSchemaFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: mobileApplicationDevelopmentOffers.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createIosAppDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.iosAppDevelopment,
    pageUrl: iosAppDevelopmentPageUrl,
    pageId: iosAppDevelopmentPageId,
    serviceId: iosAppDevelopmentServiceId,
    faqId: iosAppDevelopmentFaqId,
    breadcrumbId: iosAppDevelopmentBreadcrumbId,
    serviceName: "iOS App Development Services",
    serviceType:
      "Custom iOS mobile app development, native iOS app development, UI/UX design, backend development, QA testing, maintenance, existing app customization, Shopify app development, and hybrid iOS app development",
    breadcrumbName: "iOS App Development",
    audienceType:
      "Web design agencies, ecommerce merchants, and businesses looking to build high-performance custom iOS applications",
    faqs: iosAppDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: iosAppDevelopmentServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createCrossPlatformAppDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.crossPlatformAppDevelopment,
    pageUrl: crossPlatformAppDevelopmentPageUrl,
    pageId: crossPlatformAppDevelopmentPageId,
    serviceId: crossPlatformAppDevelopmentServiceId,
    faqId: crossPlatformAppDevelopmentFaqId,
    breadcrumbId: crossPlatformAppDevelopmentBreadcrumbId,
    serviceName: "Cross-Platform App Development Services",
    serviceType:
      "Custom cross-platform app development, React Native app development, Flutter app development, prototyping & wireframes, backend development, QA testing, maintenance, existing app customization, and Shopify cross-platform app development",
    breadcrumbName: "Cross-Platform App Development",
    audienceType:
      "Web design agencies, ecommerce merchants, and businesses looking to build high-performance cross-platform applications for iOS and Android",
    faqs: crossPlatformAppDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: crossPlatformAppDevelopmentServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createShopifyMobileAppDevelopmentPageSchema() {
  const allOffers = [
    ...shopifyMobileAppBenefits.items,
    ...shopifyMobileAppFeatures.leftFeatures,
    ...shopifyMobileAppFeatures.rightFeatures,
  ];

  return createServicePageSchema({
    page: pageSeo.shopifyMobileAppDevelopment,
    pageUrl: shopifyMobileAppDevelopmentPageUrl,
    pageId: shopifyMobileAppDevelopmentPageId,
    serviceId: shopifyMobileAppDevelopmentServiceId,
    faqId: shopifyMobileAppDevelopmentFaqId,
    breadcrumbId: shopifyMobileAppDevelopmentBreadcrumbId,
    serviceName: "Shopify Mobile App Development Services",
    serviceType:
      "Shopify mobile app development, Shopify AppMaker, turnkey mobile commerce apps, push notifications, customizable mobile themes, seamless mobile checkout, analytics and reporting",
    breadcrumbName: "Shopify Mobile App Development",
    audienceType:
      "Shopify merchants, ecommerce brands, and online store owners looking to transform their Shopify store into a native-like mobile app",
    faqs: shopifyMobileAppDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: allOffers.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createBigCommerceDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.bigCommerceDevelopment,
    pageUrl: bigCommerceDevelopmentPageUrl,
    pageId: bigCommerceDevelopmentPageId,
    serviceId: bigCommerceDevelopmentServiceId,
    faqId: bigCommerceDevelopmentFaqId,
    breadcrumbId: bigCommerceDevelopmentBreadcrumbId,
    serviceName: "BigCommerce Development Services",
    serviceType:
      "Custom BigCommerce store development, theme customization, app integration, private app development, and maintenance",
    breadcrumbName: "BigCommerce Development",
    audienceType:
      "eCommerce merchants, online retailers, and digital agencies seeking expert BigCommerce store development",
    faqs: bigCommerceDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: bigCommerceDevelopmentServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWebDesignPageSchema() {
  return createServicePageSchema({
    page: pageSeo.webDesign,
    pageUrl: webDesignPageUrl,
    pageId: webDesignPageId,
    serviceId: webDesignServiceId,
    faqId: webDesignFaqId,
    breadcrumbId: webDesignBreadcrumbId,
    serviceName: "UI/UX Design Services",
    serviceType:
      "Website design, mobile app design, wireframing, UI/UX strategy development, prototyping, UI design, and UI animation",
    breadcrumbName: "Web Design Company – Contact Us for Web Design Services",
    audienceType:
      "Businesses, eCommerce brands, startups, and enterprises seeking creative and modern UI/UX design and website design services",
    faqs: webDesignFaqs.map((item) => ({
      question: item.question,
      answer: [
        ...(item.listPosition === "before" && item.listItems
          ? item.listItems.map((li) => `${li.label ? `${li.label} ` : ""}${li.text}`)
          : []),
        item.answer,
        ...(item.listPosition !== "before" && item.listItems
          ? item.listItems.map((li) => `${li.label ? `${li.label} ` : ""}${li.text}`)
          : []),
        item.secondaryAnswer,
      ]
        .filter(Boolean)
        .join(" "),
    })),
    offers: webDesignServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createSiteMapPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": siteMapPageId,
        url: siteMapPageUrl,
        name: pageSeo.siteMap.title,
        description: pageSeo.siteMap.description,
        datePublished: pageSeo.siteMap.publishedTime,
        dateModified: pageSeo.siteMap.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": siteMapBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.siteMap.image.path),
          width: pageSeo.siteMap.image.width,
          height: pageSeo.siteMap.image.height,
          caption: pageSeo.siteMap.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": siteMapBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          { "@type": "ListItem", position: 2, name: "Site Map", item: siteMapPageUrl },
        ],
      },
    ],
  };
}

export function createThankYouForEnquiryPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": thankYouForEnquiryPageId,
        url: thankYouForEnquiryPageUrl,
        name: pageSeo.thankYouForEnquiry.title,
        description: pageSeo.thankYouForEnquiry.description,
        datePublished: pageSeo.thankYouForEnquiry.publishedTime,
        dateModified: pageSeo.thankYouForEnquiry.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": thankYouForEnquiryBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.thankYouForEnquiry.image.path),
          width: pageSeo.thankYouForEnquiry.image.width,
          height: pageSeo.thankYouForEnquiry.image.height,
          caption: pageSeo.thankYouForEnquiry.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": thankYouForEnquiryBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          { "@type": "ListItem", position: 2, name: "Thank You For Enquiry", item: thankYouForEnquiryPageUrl },
        ],
      },
    ],
  };
}

export function createShopifyDevelopmentBarcelonaPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.shopifyDevelopmentBarcelona,
    pageUrl: shopifyDevelopmentBarcelonaPageUrl,
    pageId: shopifyDevelopmentBarcelonaPageId,
    breadcrumbId: shopifyDevelopmentBarcelonaBreadcrumbId,
    breadcrumbName: "Shopify Development in Barcelona",
    serviceId: shopifyDevelopmentBarcelonaServiceId,
    serviceName: "Shopify Development in Barcelona",
    serviceType:
      "Shopify store development, Shopify Plus, theme customization, Figma to Shopify, migration, and maintenance in Barcelona, Spain",
    audienceType:
      "eCommerce brands, direct-to-consumer businesses, and digital agencies in Barcelona and Spain seeking expert Shopify development",
    offerCatalog: {
      title: "Our Shopify Development Services",
      items: shopifyDevelopmentBarcelonaContent.services.items.map((item) => ({
        title: item.title,
        description: item.description,
      })),
    },
  });
}

export function createShopifyDevelopmentCompanyInChennaiPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyDevelopmentCompanyInChennai,
    pageUrl: shopifyDevelopmentChennaiPageUrl,
    pageId: shopifyDevelopmentChennaiPageId,
    serviceId: shopifyDevelopmentChennaiServiceId,
    faqId: shopifyDevelopmentChennaiFaqId,
    breadcrumbId: shopifyDevelopmentChennaiBreadcrumbId,
    serviceName: "Shopify Development Company in Chennai",
    serviceType:
      "Shopify development services in Chennai, custom Shopify store design, Shopify Plus development, theme customization, Figma to Shopify conversion, app integrations, Shopify migration, maintenance, and white label Shopify services",
    breadcrumbName: "Shopify Development Company in Chennai",
    audienceType:
      "Businesses, eCommerce retailers, direct-to-consumer brands, and enterprises in Chennai, Tamil Nadu, and across India seeking professional Shopify development",
    faqs: shopifyDevelopmentChennaiContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyDevelopmentChennaiContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  });
}

export function createShopifyMaintenanceServicesPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyMaintenanceServices,
    pageUrl: shopifyMaintenanceServicesPageUrl,
    pageId: shopifyMaintenanceServicesPageId,
    serviceId: shopifyMaintenanceServicesServiceId,
    faqId: shopifyMaintenanceServicesFaqId,
    breadcrumbId: shopifyMaintenanceServicesBreadcrumbId,
    serviceName: "Shopify Maintenance Services",
    serviceType:
      "Shopify store maintenance, regular updates, performance and speed optimization, bug fixes, troubleshooting, custom feature development, SEO support, and dedicated 24/7 technical support",
    breadcrumbName: "Shopify Maintenance Services",
    audienceType:
      "eCommerce businesses, Shopify merchants, direct-to-consumer brands, and online store owners seeking expert ongoing Shopify support and maintenance",
    faqs: shopifyMaintenanceServicesContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyMaintenanceServicesContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createDentalClinicWebsiteDevelopmentCompanyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.dentalClinicWebsiteDevelopmentCompany,
    pageUrl: dentalClinicWebsiteDevelopmentPageUrl,
    pageId: dentalClinicWebsiteDevelopmentPageId,
    serviceId: dentalClinicWebsiteDevelopmentServiceId,
    faqId: dentalClinicWebsiteDevelopmentFaqId,
    breadcrumbId: dentalClinicWebsiteDevelopmentBreadcrumbId,
    serviceName: "Dental Clinic Website Development Company",
    serviceType:
      "Dental clinic website development, dentist website design, custom WordPress development, dental WooCommerce stores, appointment scheduling integrations, speed optimization, and ongoing maintenance for dental practices",
    breadcrumbName: "Dental Clinic Website Development Company",
    audienceType:
      "Dentists, dental clinics, dental health practices, orthodontists, and dental agencies seeking custom dental website development solutions",
    faqs: dentalClinicWebsiteDevelopmentCompanyContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer.replace(/<[^>]+>/g, " "),
    })),
    offers: dentalClinicWebsiteDevelopmentCompanyContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createShopifyDevelopmentInDelhiPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyDevelopmentInDelhi,
    pageUrl: shopifyDevelopmentDelhiPageUrl,
    pageId: shopifyDevelopmentDelhiPageId,
    serviceId: shopifyDevelopmentDelhiServiceId,
    faqId: shopifyDevelopmentDelhiFaqId,
    breadcrumbId: shopifyDevelopmentDelhiBreadcrumbId,
    serviceName: "Shopify Development in Delhi",
    serviceType:
      "Shopify store setup, custom theme development, Figma to Shopify conversion, custom app development, Shopify migration, maintenance, and 2.0 upgrades for eCommerce businesses in Delhi",
    breadcrumbName: "Shopify Development in Delhi",
    audienceType:
      "eCommerce businesses, retail brands, D2C startups, and enterprise merchants in Delhi NCR seeking certified Shopify development services",
    faqs: shopifyDevelopmentDelhiContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer.replace(/<[^>]+>/g, " "),
    })),
    offers: shopifyDevelopmentDelhiContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createShopifyDevelopmentInHyderabadPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyDevelopmentInHyderabad,
    pageUrl: shopifyDevelopmentHyderabadPageUrl,
    pageId: shopifyDevelopmentHyderabadPageId,
    serviceId: shopifyDevelopmentHyderabadServiceId,
    faqId: shopifyDevelopmentHyderabadFaqId,
    breadcrumbId: shopifyDevelopmentHyderabadBreadcrumbId,
    serviceName: "Shopify Development in Hyderabad",
    serviceType:
      "Shopify store setup, custom theme development, Figma to Shopify conversion, custom app development, Shopify migration, maintenance, and 2.0 upgrades for eCommerce businesses in Hyderabad",
    breadcrumbName: "Shopify Development in Hyderabad",
    audienceType:
      "eCommerce businesses, retail brands, D2C startups, and enterprise merchants in Hyderabad seeking certified Shopify development services",
    faqs: shopifyDevelopmentHyderabadContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer.replace(/<[^>]+>/g, " "),
    })),
    offers: shopifyDevelopmentHyderabadContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWordPressDevelopmentInDelhiPageSchema() {
  return createServicePageSchema({
    page: pageSeo.wordpressDevelopmentInDelhi,
    pageUrl: wordpressDevelopmentDelhiPageUrl,
    pageId: wordpressDevelopmentDelhiPageId,
    serviceId: wordpressDevelopmentDelhiServiceId,
    faqId: wordpressDevelopmentDelhiFaqId,
    breadcrumbId: wordpressDevelopmentDelhiBreadcrumbId,
    serviceName: "WordPress Development in Delhi",
    serviceType:
      "Custom WordPress development, theme customization, plugin development, website design, SEO optimization, and ongoing maintenance for businesses in Delhi",
    breadcrumbName: "WordPress Development in Delhi",
    audienceType:
      "Businesses, startups, enterprises, and digital agencies in Delhi seeking custom WordPress development services",
    faqs: wordpressDevelopmentDelhiContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer.replace(/<[^>]+>/g, " "),
    })),
    offers: wordpressDevelopmentDelhiContent.reasons.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWordPressDevelopmentInNoidaPageSchema() {
  return createServicePageSchema({
    page: pageSeo.wordpressDevelopmentInNoida,
    pageUrl: wordpressDevelopmentNoidaPageUrl,
    pageId: wordpressDevelopmentNoidaPageId,
    serviceId: wordpressDevelopmentNoidaServiceId,
    faqId: wordpressDevelopmentNoidaFaqId,
    breadcrumbId: wordpressDevelopmentNoidaBreadcrumbId,
    serviceName: "WordPress Development in Noida",
    serviceType:
      "Custom WordPress development, theme customization, plugin development, website design, SEO optimization, and ongoing maintenance for businesses in Noida",
    breadcrumbName: "WordPress Development in Noida",
    audienceType:
      "Businesses, startups, enterprises, and digital agencies in Noida seeking custom WordPress development services",
    faqs: wordpressDevelopmentNoidaContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer.replace(/<[^>]+>/g, " "),
    })),
    offers: wordpressDevelopmentNoidaContent.reasons.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWordPressDevelopmentInPunePageSchema() {
  return createServicePageSchema({
    page: pageSeo.wordpressDevelopmentInPune,
    pageUrl: wordpressDevelopmentPunePageUrl,
    pageId: wordpressDevelopmentPunePageId,
    serviceId: wordpressDevelopmentPuneServiceId,
    faqId: wordpressDevelopmentPuneFaqId,
    breadcrumbId: wordpressDevelopmentPuneBreadcrumbId,
    serviceName: "WordPress Development in Pune",
    serviceType:
      "Custom WordPress development, theme customization, plugin development, website design, SEO optimization, and ongoing maintenance for businesses in Pune",
    breadcrumbName: "WordPress Development in Pune",
    audienceType:
      "Businesses, startups, enterprises, and digital agencies in Pune seeking custom WordPress development services",
    faqs: wordpressDevelopmentPuneContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer.replace(/<[^>]+>/g, " "),
    })),
    offers: wordpressDevelopmentPuneContent.reasons.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWordPressDevelopmentInAhmedabadPageSchema() {
  return createServicePageSchema({
    page: pageSeo.wordpressDevelopmentInAhmedabad,
    pageUrl: wordpressDevelopmentAhmedabadPageUrl,
    pageId: wordpressDevelopmentAhmedabadPageId,
    serviceId: wordpressDevelopmentAhmedabadServiceId,
    faqId: wordpressDevelopmentAhmedabadFaqId,
    breadcrumbId: wordpressDevelopmentAhmedabadBreadcrumbId,
    serviceName: "WordPress Development in Ahmedabad",
    serviceType:
      "Custom WordPress development, theme customization, plugin development, website design, SEO optimization, and ongoing maintenance for businesses in Ahmedabad",
    breadcrumbName: "WordPress Development in Ahmedabad",
    audienceType:
      "Businesses, startups, enterprises, and digital agencies in Ahmedabad seeking custom WordPress development services",
    faqs: wordpressDevelopmentAhmedabadContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer.replace(/<[^>]+>/g, " "),
    })),
    offers: wordpressDevelopmentAhmedabadContent.reasons.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function createEcwidToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.ecwidToShopifyMigration,
    pageUrl: ecwidToShopifyMigrationPageUrl,
    pageId: ecwidToShopifyMigrationPageId,
    serviceId: ecwidToShopifyMigrationServiceId,
    faqId: ecwidToShopifyMigrationFaqId,
    breadcrumbId: ecwidToShopifyMigrationBreadcrumbId,
    serviceName: "Ecwid to Shopify Migration Service",
    serviceType:
      "Seamless Ecwid store migration to Shopify without downtime and full data integrity",
    breadcrumbName: "Ecwid to Shopify Migration Service",
    audienceType:
      "Ecwid store owners, ecommerce merchants, and brands migrating to Shopify or Shopify Plus",
    faqs: ecwidFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    })),
    offers: ecwidProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createMigratingThemeToOnlineStore20PageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.migratingThemeToOnlineStore20,
    pageUrl: migratingThemeToOnlineStore20PageUrl,
    pageId: migratingThemeToOnlineStore20PageId,
    breadcrumbId: migratingThemeToOnlineStore20BreadcrumbId,
    breadcrumbName: "Migrate Theme to Online Store 2.0",
    serviceId: migratingThemeToOnlineStore20ServiceId,
    serviceName: "Complete Shopify 2.0 Migration Service",
    serviceType:
      "Shopify theme migration to Online Store 2.0, Liquid to JSON template conversion, app integration, SEO preservation, and store optimization",
    audienceType:
      "Shopify merchants, ecommerce businesses, and store owners upgrading to Shopify Online Store 2.0",
    offerCatalog: {
      title: "Our Shopify Migration Service",
      items: migratingThemeToOnlineStore20Content.migrationService.sections.map(
        (section) => ({
          title: section.title,
          description: section.description,
        }),
      ),
    },
  });
}

export function createShopifyPlusMigrationAgencyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyPlusMigrationAgency,
    pageUrl: shopifyPlusMigrationAgencyPageUrl,
    pageId: shopifyPlusMigrationAgencyPageId,
    serviceId: shopifyPlusMigrationAgencyServiceId,
    faqId: shopifyPlusMigrationAgencyFaqId,
    breadcrumbId: shopifyPlusMigrationAgencyBreadcrumbId,
    serviceName: "Shopify Plus Migration Agency Services",
    serviceType:
      "Full-service enterprise store migration to Shopify Plus with zero downtime and seamless platform transition",
    breadcrumbName: "Shopify Plus Migration Agency",
    audienceType:
      "Enterprise merchants, high-growth ecommerce brands, and multi-store businesses migrating to Shopify Plus",
    faqs: plusAgencyFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: plusAgencyProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createMagentoToShopifyPlusMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.magentoToShopifyPlusMigration,
    pageUrl: magentoToShopifyPlusMigrationPageUrl,
    pageId: magentoToShopifyPlusMigrationPageId,
    serviceId: magentoToShopifyPlusMigrationServiceId,
    faqId: magentoToShopifyPlusMigrationFaqId,
    breadcrumbId: magentoToShopifyPlusMigrationBreadcrumbId,
    serviceName: "Magento to Shopify Plus Migration Services",
    serviceType:
      "Enterprise Magento to Shopify Plus migration with zero downtime and seamless B2B integration",
    breadcrumbName: "Magento to Shopify Plus Migration",
    audienceType:
      "Enterprise Magento merchants, high-growth ecommerce brands, and high-volume businesses migrating to Shopify Plus",
    faqs: magentoPlusFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: magentoPlusProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createMagentoToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.magentoToShopifyMigration,
    pageUrl: magentoToShopifyMigrationPageUrl,
    pageId: magentoToShopifyMigrationPageId,
    serviceId: magentoToShopifyMigrationServiceId,
    faqId: magentoToShopifyMigrationFaqId,
    breadcrumbId: magentoToShopifyMigrationBreadcrumbId,
    serviceName: "Magento to Shopify Migration Services",
    serviceType:
      "Seamless Magento 1 store migration to Shopify without downtime and full data integrity",
    breadcrumbName: "Magento to Shopify Migration",
    audienceType:
      "Magento merchants, enterprise ecommerce brands, and growing businesses migrating to Shopify or Shopify Plus",
    faqs: magentoFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: magentoProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWooCommerceToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.woocommerceToShopifyMigration,
    pageUrl: woocommerceToShopifyMigrationPageUrl,
    pageId: woocommerceToShopifyMigrationPageId,
    serviceId: woocommerceToShopifyMigrationServiceId,
    faqId: woocommerceToShopifyMigrationFaqId,
    breadcrumbId: woocommerceToShopifyMigrationBreadcrumbId,
    serviceName: "WooCommerce to Shopify Migration Services",
    serviceType:
      "Seamless WooCommerce store migration to Shopify without downtime and full data integrity",
    breadcrumbName: "WooCommerce to Shopify Migration",
    audienceType:
      "WooCommerce merchants, WordPress store owners, and growing ecommerce businesses migrating to Shopify or Shopify Plus",
    faqs: woocommerceFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    })),
    offers: woocommerceProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createSquarespaceToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.squarespaceToShopifyMigration,
    pageUrl: squarespaceToShopifyMigrationPageUrl,
    pageId: squarespaceToShopifyMigrationPageId,
    serviceId: squarespaceToShopifyMigrationServiceId,
    faqId: squarespaceToShopifyMigrationFaqId,
    breadcrumbId: squarespaceToShopifyMigrationBreadcrumbId,
    serviceName: "Squarespace to Shopify Migration Services",
    serviceType:
      "Seamless Squarespace store migration to Shopify without downtime and full data integrity",
    breadcrumbName: "Squarespace to Shopify Migration",
    audienceType:
      "Squarespace merchants, ecommerce brands, and growing businesses migrating to Shopify or Shopify Plus",
    faqs: squarespaceFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: squarespaceProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createSalesforceToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.salesforceToShopifyMigration,
    pageUrl: salesforceToShopifyMigrationPageUrl,
    pageId: salesforceToShopifyMigrationPageId,
    serviceId: salesforceToShopifyMigrationServiceId,
    faqId: salesforceToShopifyMigrationFaqId,
    breadcrumbId: salesforceToShopifyMigrationBreadcrumbId,
    serviceName: "Salesforce to Shopify Migration Service",
    serviceType:
      "Seamless Salesforce store migration to Shopify without downtime and full data integrity",
    breadcrumbName: "Salesforce to Shopify Migration Service",
    audienceType:
      "Salesforce Commerce Cloud merchants, enterprise brands, and growing ecommerce businesses migrating to Shopify or Shopify Plus",
    faqs: salesforceFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    })),
    offers: salesforceProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createEtsyToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.etsyToShopifyMigration,
    pageUrl: etsyToShopifyMigrationPageUrl,
    pageId: etsyToShopifyMigrationPageId,
    serviceId: etsyToShopifyMigrationServiceId,
    faqId: etsyToShopifyMigrationFaqId,
    breadcrumbId: etsyToShopifyMigrationBreadcrumbId,
    serviceName: "Etsy to Shopify Migration Services",
    serviceType:
      "Seamless Etsy store migration to Shopify without downtime and full data integrity",
    breadcrumbName: "Etsy to Shopify Migration",
    audienceType:
      "Etsy sellers, ecommerce brands, and direct-to-consumer businesses migrating to Shopify or Shopify Plus",
    faqs: etsyFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    })),
    offers: etsyProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}


export function createWixToShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.wixToShopifyMigration,
    pageUrl: wixToShopifyMigrationPageUrl,
    pageId: wixToShopifyMigrationPageId,
    serviceId: wixToShopifyMigrationServiceId,
    faqId: wixToShopifyMigrationFaqId,
    breadcrumbId: wixToShopifyMigrationBreadcrumbId,
    serviceName: "Wix to Shopify Migration Services",
    serviceType:
      "Seamless Wix store migration to Shopify without downtime and full data integrity",
    breadcrumbName: "Wix to Shopify Migration",
    audienceType:
      "Wix sellers, ecommerce brands, and direct-to-consumer businesses migrating to Shopify or Shopify Plus",
    faqs: wixFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: wixProcessContent.steps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}
