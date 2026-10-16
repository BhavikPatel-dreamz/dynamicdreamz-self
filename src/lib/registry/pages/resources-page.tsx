import { CtaBannerSection } from "@/components/blocks/QuoteRequestCTABlock";
import { ResourcesBlogSection } from "@/components/blocks/ResourceHubFeedBlock";
import { ResourcesBrandStrip } from "@/components/blocks/ClientLogoMarqueeBlock";
import { ResourcesHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { ResourcesHubSection } from "@/components/blocks/ResourceHubFeedBlock";
import { ResourcesStorySection } from "@/components/blocks/MissionVisionValuesBlock";
import { ResourcesTrustSection } from "@/components/blocks/TrustStatsBarBlock";

export function ResourcesPage() {
  return (
    <div>
      <ResourcesHeroSection />
      <ResourcesHubSection />
      <ResourcesBlogSection />
      <ResourcesStorySection />
      <ResourcesBrandStrip />
      <ResourcesTrustSection />
      <CtaBannerSection />
    </div>
  );
}
