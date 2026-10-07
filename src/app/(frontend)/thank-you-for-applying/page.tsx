import { ThankYouForApplyingPage } from "@/components/sections/thank-you-for-applying-page";
import { pageMetadata } from "@/data/seo";
import { createThankYouForApplyingPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.thankYouForApplying;

export default function ThankYouForApplying() {
  return (
    <main id="main-content" data-page="thank-you-for-applying">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createThankYouForApplyingPageSchema()),
        }}
      />
      <ThankYouForApplyingPage />
    </main>
  );
}
