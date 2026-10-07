import { DentalClinicWebsiteDevelopmentCompanyPage } from "@/components/sections/dental-clinic-website-development-company-page";
import { pageMetadata } from "@/data/seo";
import {
  createDentalClinicWebsiteDevelopmentCompanyPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.dentalClinicWebsiteDevelopmentCompany;

export default function DentalClinicWebsiteDevelopmentCompanyRoute() {
  return (
    <main id="main-content" data-page="dental-clinic-website-development-company">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createDentalClinicWebsiteDevelopmentCompanyPageSchema()),
        }}
      />
      <DentalClinicWebsiteDevelopmentCompanyPage />
    </main>
  );
}
