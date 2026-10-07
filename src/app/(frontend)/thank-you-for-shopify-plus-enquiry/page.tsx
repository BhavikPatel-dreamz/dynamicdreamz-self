import { ThankYouForEnquiryPage } from "@/components/sections/thank-you-for-enquiry-page";
import { pageMetadata } from "@/data/seo";
import { createThankYouForShopifyPlusEnquiryPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.thankYouForShopifyPlusEnquiry;

export default function ThankYouForShopifyPlusEnquiryRoute() {
  return (
    <main id="main-content" data-page="thank-you-for-shopify-plus-enquiry">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createThankYouForShopifyPlusEnquiryPageSchema()),
        }}
      />
      <ThankYouForEnquiryPage />
    </main>
  );
}
