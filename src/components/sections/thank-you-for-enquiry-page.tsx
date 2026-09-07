import {
  type ThankYouForEnquiryContent,
  thankYouForEnquiryContent,
} from "@/content/thank-you-for-enquiry";
import { ThankYouPage } from "@/components/sections/thank-you-page";

export type ThankYouForEnquiryPageProps = {
  content?: ThankYouForEnquiryContent;
};

export function ThankYouForEnquiryPage({
  content = thankYouForEnquiryContent,
}: ThankYouForEnquiryPageProps) {
  return <ThankYouPage content={content} buttonPlacement="above-contact" />;
}
