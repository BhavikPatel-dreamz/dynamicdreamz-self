import type { ServicePageEntry } from "./types";
import { ThankYouPage } from "@/components/sections/thank-you-page";
import { thankYouForApplyingContent } from "@/content/thank-you-for-applying";
import { thankYouForEnquiryContent } from "@/content/thank-you-for-enquiry";
import { pageMetadata } from "@/data/seo";
import {
  createThankYouForApplyingPageSchema,
  createThankYouForEnquiryPageSchema,
  createThankYouForShopifyPlusEnquiryPageSchema,
} from "@/lib/schema";

export const thankYouRegistry: readonly ServicePageEntry[] = [
  {
    slug: "thank-you-for-applying",
    metadata: pageMetadata.thankYouForApplying,
    getSchema: createThankYouForApplyingPageSchema,
    render: () => (
      <ThankYouPage
        buttonPlacement="below-contact"
        content={thankYouForApplyingContent}
      />
    ),
  },
  {
    slug: "thank-you-for-enquiry",
    metadata: pageMetadata.thankYouForEnquiry,
    getSchema: createThankYouForEnquiryPageSchema,
    render: () => (
      <ThankYouPage
        buttonPlacement="above-contact"
        content={thankYouForEnquiryContent}
      />
    ),
  },
  {
    slug: "thank-you-for-shopify-plus-enquiry",
    metadata: pageMetadata.thankYouForShopifyPlusEnquiry,
    getSchema: createThankYouForShopifyPlusEnquiryPageSchema,
    render: () => (
      <ThankYouPage
        buttonPlacement="above-contact"
        content={thankYouForEnquiryContent}
      />
    ),
  },
];
