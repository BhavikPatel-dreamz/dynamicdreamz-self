import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { CommerceSolutionsSection } from "@/components/sections/home/commerce-solutions-section";
import { HomeHeroSection } from "@/components/sections/home/home-hero-section";
import { HomeFaqSection } from "@/components/sections/home/home-faq-section";
import { InsightsSection } from "@/components/sections/home/insights-section";
import { IntegrationsSection } from "@/components/sections/home/integrations-section";
import { SelectedWorkSection } from "@/components/sections/home/selected-work-section";
import { ShopifyPlusAgencySection } from "@/components/sections/home/shopify-plus-agency-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { WhiteLabelPartnerSection } from "@/components/sections/home/white-label-partner-section";
import { homeSectionCopy, projects, shopifyPlusAgencyContent } from "@/content/home";
import { getPayloadAdaptedTestimonials, getPayloadMediaUrlMap } from "@/lib/payload";
import { getMediaFilename } from "@/lib/video";

function resolveMediaServerVideo(
  fallbackSrc: string,
  videoUrlMap: Record<string, string>,
): string {
  const filename = getMediaFilename(fallbackSrc);
  return (filename && videoUrlMap[filename]) || fallbackSrc;
}

export async function HomePage() {
  const videoFilenames = [
    getMediaFilename(shopifyPlusAgencyContent.videoSrc),
    ...projects
      .filter((project) => project.media.type === "video")
      .map((project) => getMediaFilename(project.media.src)),
  ].filter(Boolean);

  const [testimonials, videoUrlMap] = await Promise.all([
    getPayloadAdaptedTestimonials(),
    getPayloadMediaUrlMap(videoFilenames),
  ]);

  const resolvedProjects = projects.map((project) =>
    project.media.type === "video"
      ? {
          ...project,
          media: {
            ...project.media,
            src: resolveMediaServerVideo(project.media.src, videoUrlMap),
          },
        }
      : project,
  );

  return (
    <>
      <HomeHeroSection />
      <BrandPartnersSection />
      <ShopifyPlusAgencySection
        content={{
          videoSrc: resolveMediaServerVideo(
            shopifyPlusAgencyContent.videoSrc,
            videoUrlMap,
          ),
        }}
      />
      <WhiteLabelPartnerSection />
      <CommerceSolutionsSection />
      <SelectedWorkSection projects={resolvedProjects} />
      <HappyClientSection
        description={homeSectionCopy.testimonialsDescription}
        hasTopPadding={true}
        heading={homeSectionCopy.testimonialsTitle}
        items={testimonials.length > 0 ? testimonials : undefined}
      />
      <IntegrationsSection />
      <InsightsSection />
      <HomeFaqSection />
    </>
  );
}
