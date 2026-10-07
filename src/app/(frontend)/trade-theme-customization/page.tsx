import { TradeThemeCustomizationPage } from "@/components/sections/trade-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createTradeThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.tradeThemeCustomization;

export default function TradeThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="trade-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createTradeThemeCustomizationPageSchema()),
        }}
      />
      <TradeThemeCustomizationPage />
    </main>
  );
}
