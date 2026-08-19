import { Container } from "@/components/ui/container";
import { VideoDialog } from "@/components/ui/video-dialog";
import { aboutStory } from "@/content/about";

export function AboutStorySection() {
  return (
    <section data-about="story" aria-labelledby="about-story-title" className="we-are-dyanamic-dreamz-sec py-20 max-[991px]:py-[50px]">
      <Container>
        <div className="-mx-[15px] flex items-center justify-between max-[991px]:flex-col max-[991px]:text-center">
          <div className="w-[calc(35%-15px)] px-[15px] max-[1199px]:w-[calc(40%-15px)] max-[991px]:w-full max-[575px]:max-w-[290px]">
            <h2 id="about-story-title" className="text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:mb-[15px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
              {aboutStory.title}
            </h2>
          </div>
          <div className="w-[calc(59%-15px)] px-[15px] max-[1199px]:w-[calc(60%-15px)] max-[991px]:w-full">
            <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">{aboutStory.description}</p>
          </div>
        </div>

        <div className="hero-vide-wrap mt-[50px] h-[492px] max-[991px]:h-[350px] max-[767px]:mt-[30px] max-[767px]:h-[200px]">
          <VideoDialog
            overlay="/assets/about/we-are-dynamic-dreamz.svg"
            overlayHeight={38}
            overlayWidth={940}
            poster="/assets/about/hero-video-poster.webp"
            posterAlt="Dynamic Dreamz team collaborating in the Surat office"
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) 680px, (max-width: 1399px) 1140px, 1320px"
            title={aboutStory.videoTitle}
            videoId={aboutStory.videoId}
          />
        </div>
      </Container>
    </section>
  );
}
