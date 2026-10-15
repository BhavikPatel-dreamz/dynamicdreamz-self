import { draftMode } from "next/headers";
import Link from "next/link";
import { BlockRenderer, type CmsSectionBlock } from "@/components/blocks/block-renderer";
import { SalesforceToShopifyMigrationPage } from "@/components/sections/salesforce-to-shopify-migration-page";
import { draftPreviewCopy } from "@/content/common";
import { pageMetadata } from "@/data/seo";
import { getPayloadPageBySlug } from "@/lib/payload";
import {
  createSalesforceToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.salesforceToShopifyMigration;

export default async function SalesforceToShopifyMigrationRoute() {
  const draft = await draftMode();
  const rawPage = await getPayloadPageBySlug("salesforce-to-shopify-migration", {
    preview: draft.isEnabled,
  });
  const pageSections =
    (rawPage?.sections as readonly CmsSectionBlock[] | undefined) || [];

  return (
    <main id="main-content" data-page="salesforce-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSalesforceToShopifyMigrationPageSchema()),
        }}
      />
      {draft.isEnabled ? (
        <aside
          aria-label="Draft mode indicator"
          className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-white shadow-xl"
        >
          <span>{draftPreviewCopy.badge}</span>
          <span aria-hidden="true">{draftPreviewCopy.separator}</span>
          <Link
            className="underline transition-opacity hover:opacity-80 focus-visible:opacity-80"
            href="/api/exit-preview"
            prefetch={false}
          >
            {draftPreviewCopy.exit}
          </Link>
        </aside>
      ) : null}
      {pageSections.length > 0 ? (
          <BlockRenderer sections={pageSections} />
      ) : (
        <SalesforceToShopifyMigrationPage />
      )}
    </main>
  );
}
