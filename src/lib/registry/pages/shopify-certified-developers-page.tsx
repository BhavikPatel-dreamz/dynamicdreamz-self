import { CertifiedAgencySupportSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { CertifiedServicesSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { CredentialEvidenceSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { CredentialTabsSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { PartnerDirectoryProofSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { VerifiedKnowledgeSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { WhiteLabelFinalCtaSection } from "@/components/blocks/QuoteRequestCTABlock";
import {
  shopifyCertifiedDevelopersBrands,
  shopifyCertifiedDevelopersFaqs,
  shopifyCertifiedDevelopersFinalCta,
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
      <WhiteLabelFinalCtaSection
        cta={shopifyCertifiedDevelopersFinalCta}
        variant="certifiedDevelopers"
      />
    </div>
  );
}
