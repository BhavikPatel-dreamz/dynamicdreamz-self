import {
  CredentialTabs,
  type CredentialTabItem,
} from "@/components/sections/shopify-certified-developers/credential-tabs";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyCredentialTabs } from "@/content/shopify-certified-developers";

export type CredentialTabsContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description: string | readonly string[];
  items: readonly CredentialTabItem[];
};

type CredentialTabsSectionProps = {
  content?: CredentialTabsContent;
};

export function CredentialTabsSection({
  content = shopifyCredentialTabs,
}: CredentialTabsSectionProps) {
  return (
    <section
      className="which_shopify_credential_section py-20 max-[992px]:py-[50px]"
      aria-labelledby="shopify-credential-tabs-title"
    >
      <Container>
        <SplitSectionHeading
          className="mb-[54px]"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          headingId="shopify-credential-tabs-title"
          variant="left"
        />
        <CredentialTabs items={content.items} />
      </Container>
    </section>
  );
}
