import { ResourcesBlogSection } from "@/components/sections/resources/resources-blog-section";
import { ResourcesBrandStrip } from "@/components/sections/resources/resources-brand-strip";
import { ResourcesCtaSection } from "@/components/sections/resources/resources-cta-section";
import { ResourcesHeroSection } from "@/components/sections/resources/resources-hero-section";
import { ResourcesHubSection } from "@/components/sections/resources/resources-hub-section";
import { ResourcesStorySection } from "@/components/sections/resources/resources-story-section";
import { ResourcesTrustSection } from "@/components/sections/resources/resources-trust-section";

export function ResourcesPage() {
  return (
    <div className="font-sans [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans">
      <ResourcesHeroSection />
      <ResourcesHubSection />
      <ResourcesBlogSection />
      <ResourcesStorySection />
      <ResourcesBrandStrip />
      <ResourcesTrustSection />
      <ResourcesCtaSection />
    </div>
  );
}
