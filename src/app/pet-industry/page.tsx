import { IndustryPage } from "@/components/sections/industry/industry-page";
import { petIndustryPage } from "@/content/pet-industry";
import { pageMetadata } from "@/data/seo";
import { createPetIndustryPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.petIndustry;

export default function PetIndustryRoute() {
  return (
    <main id="main-content" data-page="pet-industry">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createPetIndustryPageSchema()),
        }}
      />
      <IndustryPage content={petIndustryPage} />
    </main>
  );
}
