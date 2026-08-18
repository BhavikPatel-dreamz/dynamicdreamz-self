import { PrivacyPolicyPage } from "@/components/sections/privacy-policy-page";
import { pageMetadata } from "@/data/seo";
import { createPrivacyPolicyPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.privacyPolicy;

export default function PrivacyPolicyRoute() {
  return (
    <main id="main-content" data-page="privacy-policy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createPrivacyPolicyPageSchema()) }}
      />
      <PrivacyPolicyPage />
    </main>
  );
}
