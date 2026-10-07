import { PhpDevelopmentPage } from "@/components/sections/php-development-page";
import { pageMetadata } from "@/data/seo";
import {
  createPhpDevelopmentPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.phpDevelopment;

export default function PhpDevelopmentRoute() {
  return (
    <main data-page="php-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createPhpDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <PhpDevelopmentPage />
    </main>
  );
}
