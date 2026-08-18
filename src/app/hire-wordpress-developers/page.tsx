import { HireWordPressDevelopersPage } from "@/components/sections/hire-wordpress-developers-page";
import { pageMetadata } from "@/data/seo";
import {
  createHireWordPressDevelopersPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.hireWordPressDevelopers;

export default function HireWordPressDevelopersRoute() {
  return (
    <main id="main-content" data-page="hire-wordpress-developers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHireWordPressDevelopersPageSchema()),
        }}
      />
      <HireWordPressDevelopersPage />
    </main>
  );
}
