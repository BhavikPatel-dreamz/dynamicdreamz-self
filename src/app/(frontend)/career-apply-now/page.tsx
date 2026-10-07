import { CareerApplyNowPage } from "@/components/sections/career-apply-now/career-apply-now-page";
import { pageMetadata } from "@/data/seo";
import { createCareerApplyNowPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.careerApplyNow;

export default function CareerApplyNowRoute() {
  return (
    <main id="main-content" data-page="career-apply-now">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCareerApplyNowPageSchema()),
        }}
      />
      <CareerApplyNowPage />
    </main>
  );
}
