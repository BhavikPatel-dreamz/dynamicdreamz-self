import { ThankYouForEnquiryPage } from "@/components/sections/thank-you-for-enquiry-page";
import { pageMetadata } from "@/data/seo";
import { createThankYouForEnquiryPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.thankYouForEnquiry;

export default function ThankYouForEnquiry() {
  return (
    <main id="main-content" data-page="thank-you-for-enquiry">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createThankYouForEnquiryPageSchema()),
        }}
      />
      <ThankYouForEnquiryPage />
    </main>
  );
}
