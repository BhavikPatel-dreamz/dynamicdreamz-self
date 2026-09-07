import {
  type ThankYouForApplyingContent,
  thankYouForApplyingContent,
} from "@/content/thank-you-for-applying";
import { ThankYouPage } from "@/components/sections/thank-you-page";

export type ThankYouForApplyingPageProps = {
  content?: ThankYouForApplyingContent;
};

export function ThankYouForApplyingPage({
  content = thankYouForApplyingContent,
}: ThankYouForApplyingPageProps) {
  return <ThankYouPage content={content} buttonPlacement="below-contact" />;
}
