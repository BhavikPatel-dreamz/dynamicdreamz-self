import { MigratingThemeToOnlineStore20Page } from "@/components/sections/migrating-theme-to-online-store-2-0-page";
import { pageMetadata } from "@/data/seo";
import {
  createMigratingThemeToOnlineStore20PageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.migratingThemeToOnlineStore20;

export default function MigratingThemeToOnlineStore20Route() {
  return (
    <main id="main-content" data-page="migrating-a-theme-to-online-store-2-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createMigratingThemeToOnlineStore20PageSchema()),
        }}
      />
      <MigratingThemeToOnlineStore20Page />
    </main>
  );
}
