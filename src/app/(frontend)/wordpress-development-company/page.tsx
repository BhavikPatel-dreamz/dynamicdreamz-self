import { WordPressDevelopmentCompanyPage } from "@/components/sections/wordpress-development-company-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentCompanyPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordpressDevelopmentCompany;

export default function WordPressDevelopmentCompanyRoute() {
  return (
    <main id="main-content" data-page="wordpress-development-company">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressDevelopmentCompanyPageSchema()),
        }}
      />
      <WordPressDevelopmentCompanyPage />
    </main>
  );
}
