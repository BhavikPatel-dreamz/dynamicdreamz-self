import { IndustryPage } from "@/components/sections/industry/industry-page";
import { healthcareIndustryPage } from "@/content/healthcare";
import { pageMetadata } from "@/data/seo";
import { createHealthcarePageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.healthcare;

export default function HealthcareRoute() {
  return (
    <main id="main-content" data-page="healthcare">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHealthcarePageSchema()),
        }}
      />
      <IndustryPage content={healthcareIndustryPage} />
    </main>
  );
}
