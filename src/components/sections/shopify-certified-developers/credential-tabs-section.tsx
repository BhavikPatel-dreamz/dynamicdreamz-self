import { CredentialTabs } from "@/components/sections/shopify-certified-developers/credential-tabs";
import { Container } from "@/components/ui/container";
import { shopifyCredentialTabs } from "@/content/shopify-certified-developers";

type CredentialTabsSectionProps = {
  content?: typeof shopifyCredentialTabs;
};

export function CredentialTabsSection({
  content = shopifyCredentialTabs,
}: CredentialTabsSectionProps) {
  return (
    <section
      className="py-20 max-[992px]:py-[50px]"
      aria-labelledby="shopify-credential-tabs-title"
    >
      <Container>
        <header className="mx-auto mb-[54px] max-w-[560px] text-center max-[992px]:mb-[30px]">
          <h2
            className="mb-2.5 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
            id="shopify-credential-tabs-title"
          >
            {content.heading}
          </h2>
          <p className="text-base leading-[30.4px] font-medium text-muted">
            {content.description}
          </p>
        </header>
        <CredentialTabs items={content.items} />
      </Container>
    </section>
  );
}
