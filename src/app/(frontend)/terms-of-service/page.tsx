import { TermsOfServicePage } from "@/components/sections/terms-of-service-page";
import { pageMetadata } from "@/data/seo";
import { createTermsOfServicePageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.termsOfService;

export default function TermsOfService() {
  return (
    <main id="main-content" data-page="terms-of-service">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createTermsOfServicePageSchema()),
        }}
      />
      <TermsOfServicePage />
    </main>
  );
}
