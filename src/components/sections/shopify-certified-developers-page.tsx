import { CertifiedAgencySupportSection } from "@/components/sections/shopify-certified-developers/certified-agency-support-section";
import { CertifiedServicesSection } from "@/components/sections/shopify-certified-developers/certified-services-section";
import { CredentialEvidenceSection } from "@/components/sections/shopify-certified-developers/credential-evidence-section";
import { CredentialTabsSection } from "@/components/sections/shopify-certified-developers/credential-tabs-section";
import { PartnerDirectoryProofSection } from "@/components/sections/shopify-certified-developers/partner-directory-proof-section";
import { VerifiedKnowledgeSection } from "@/components/sections/shopify-certified-developers/verified-knowledge-section";
import {
  WhiteLabelFaqSection,
  WhiteLabelFinalCtaSection,
} from "@/components/sections/white-label/white-label-closing-sections";
import { WhiteLabelHeroSection } from "@/components/sections/white-label/white-label-hero-section";
import {
  shopifyCertifiedDevelopersFaqs,
  shopifyCertifiedDevelopersFinalCta,
  shopifyCertifiedDevelopersHero,
} from "@/content/shopify-certified-developers";

export function ShopifyCertifiedDevelopersPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <WhiteLabelHeroSection
        hero={shopifyCertifiedDevelopersHero}
        variant="certifiedDevelopers"
      />
      <VerifiedKnowledgeSection />
      <CredentialEvidenceSection />
      <CredentialTabsSection />
      <CertifiedAgencySupportSection />
      <CertifiedServicesSection />
      <PartnerDirectoryProofSection />
      <WhiteLabelFaqSection
        faqs={shopifyCertifiedDevelopersFaqs}
        idPrefix="shopify-certified-developers-faq"
      />
      <WhiteLabelFinalCtaSection
        cta={shopifyCertifiedDevelopersFinalCta}
        variant="certifiedDevelopers"
      />
    </div>
  );
}
