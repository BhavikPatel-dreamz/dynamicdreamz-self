import { CaseStudiesPage } from "@/components/sections/case-studies-page";
import { pageMetadata } from "@/data/seo";
import { createCaseStudiesPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.caseStudies;

export default function CaseStudiesRoute() {
  return (
    <main id="main-content" data-page="case-studies">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCaseStudiesPageSchema()),
        }}
      />
      <CaseStudiesPage />
    </main>
  );
}
