import { ecwidFaqs, ecwidProcessContent } from "@/content/ecwid-to-shopify-migration";
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
import { healthcareIndustryPage } from "@/content/healthcare";
import { hireWordPressFaqs } from "@/content/hire-wordpress-developers";
import { hireShopifyFaqs, hireShopifyServices } from "@/content/hire-shopify-developers";
import { petIndustryPage } from "@/content/pet-industry";
import { organizationAnswerSummary, testimonials } from "@/content/home";
import { ourWorkProjects } from "@/content/our-work";
import {
  careerApplicationPath,
  careerJobs,
  careerLocations,
} from "@/content/career";
import { lifeFaqSection } from "@/content/life-dynamicdreamz";
import { resourceArticles } from "@/content/resources";
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
import {
  shopifyMobileAppBenefits,
  shopifyMobileAppDevelopmentFaqs,
  shopifyMobileAppFeatures,
} from "@/content/shopify-mobile-app-development";
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

const organizationId = `${siteConfig.url}#organization`;
const websiteId = `${siteConfig.url}#website`;
const webPageId = `${siteConfig.url}#home-page`;
const breadcrumbId = `${siteConfig.url}#breadcrumb`;
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
  offers?: readonly { title: string; description: string }[];
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

function shopifyPlusTestimonialVideoSchema() {
  return shopifyPlusAgencyTestimonials.items.map((testimonial) =>
    videoObjectSchema({
      id: `${shopifyPlusPageUrl}#testimonial-video-${testimonial.videoId}`,
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
    videos: shopifyPlusTestimonialVideoSchema(),
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
