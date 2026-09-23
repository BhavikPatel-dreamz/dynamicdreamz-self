import { CertifiedAgencySupportSection } from "@/components/sections/shopify-certified-developers/certified-agency-support-section";
import { CertifiedServicesSection } from "@/components/sections/shopify-certified-developers/certified-services-section";
import { CredentialEvidenceSection } from "@/components/sections/shopify-certified-developers/credential-evidence-section";
import { CredentialTabsSection } from "@/components/sections/shopify-certified-developers/credential-tabs-section";
import { PartnerDirectoryProofSection } from "@/components/sections/shopify-certified-developers/partner-directory-proof-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { VerifiedKnowledgeSection } from "@/components/sections/shopify-certified-developers/verified-knowledge-section";
import { WhiteLabelFinalCtaSection } from "@/components/sections/white-label/white-label-closing-sections";
import {
  shopifyCertifiedDevelopersFaqs,
  shopifyCertifiedDevelopersFinalCta,
  shopifyCertifiedDevelopersHero,
} from "@/content/shopify-certified-developers";

export function ShopifyCertifiedDevelopersPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroVideoSection content={shopifyCertifiedDevelopersHero} />
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
      <WhiteLabelFinalCtaSection
        cta={shopifyCertifiedDevelopersFinalCta}
        variant="certifiedDevelopers"
      />
    </div>
  );
}
