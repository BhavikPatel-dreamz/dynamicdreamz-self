import { CertifiedAgencySupportSection } from "@/components/sections/shopify-certified-developers/certified-agency-support-section";
import { CertifiedServicesSection } from "@/components/sections/shopify-certified-developers/certified-services-section";
import { CredentialEvidenceSection } from "@/components/sections/shopify-certified-developers/credential-evidence-section";
import { CredentialTabsSection } from "@/components/sections/shopify-certified-developers/credential-tabs-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PartnerDirectoryProofSection } from "@/components/sections/shopify-certified-developers/partner-directory-proof-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { VerifiedKnowledgeSection } from "@/components/sections/shopify-certified-developers/verified-knowledge-section";
import {
  shopifyCertifiedDevelopersBrands,
  shopifyCertifiedDevelopersFaqs,
  shopifyCertifiedDevelopersHero,
} from "@/content/shopify-certified-developers";

export function ShopifyCertifiedDevelopersPage() {
  return (
    <div>
      <ServiceHeroVideoSection content={shopifyCertifiedDevelopersHero} />
      <IndustryBrandsSection
        content={shopifyCertifiedDevelopersBrands}
        heading={shopifyCertifiedDevelopersBrands.heading}
      />
      <VerifiedKnowledgeSection />
      <CredentialEvidenceSection />
      <CredentialTabsSection />
      <CertifiedAgencySupportSection />
      <CertifiedServicesSection />
      <PartnerDirectoryProofSection />
      <SplitFaqSection
        idPrefix="shopify-certified-developers-faq"
        items={shopifyCertifiedDevelopersFaqs}
      />
    </div>
  );
}
