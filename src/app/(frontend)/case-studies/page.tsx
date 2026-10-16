import { CaseStudiesPage } from "@/components/sections/case-studies-page";
import { caseStudiesContent } from "@/content/case-studies";
import { pageMetadata } from "@/data/seo";
import {
  adaptPayloadCaseStudiesToItems,
  getPayloadCaseStudies,
} from "@/lib/payload";
import { createCaseStudiesPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.caseStudies;

export default async function CaseStudiesRoute() {
  const payloadStudies = await getPayloadCaseStudies();
  const items =
    payloadStudies && payloadStudies.length > 0
      ? adaptPayloadCaseStudiesToItems(payloadStudies)
      : caseStudiesContent.items;

  return (
    <main id="main-content" data-page="case-studies">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCaseStudiesPageSchema(items)),
        }}
      />
      <CaseStudiesPage items={items} />
    </main>
  );
}
