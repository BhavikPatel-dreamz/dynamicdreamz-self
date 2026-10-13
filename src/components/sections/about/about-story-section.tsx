import { Container } from "@/components/ui/container";
import { VideoDialog } from "@/components/ui/video-dialog";
import { aboutStory } from "@/content/about";

export type AboutStorySectionProps = {
  title?: string;
  description?: string;
  caption?: string;
  videoId?: string;
  videoTitle?: string;
  poster?: string;
  posterAlt?: string;
  overlay?: string;
};

export function AboutStorySection({
  title = aboutStory.title,
  description = aboutStory.description,
  caption = aboutStory.caption,
  videoId = aboutStory.videoId,
  videoTitle = aboutStory.videoTitle,
  poster = aboutStory.poster,
  posterAlt = aboutStory.posterAlt,
  overlay = aboutStory.overlay,
}: AboutStorySectionProps = {}) {
  return (
    <section data-about="story" aria-labelledby="about-story-title" className="we-are-dyanamic-dreamz-sec py-20 max-[992px]:py-[50px]">
      <Container>
        <div
          data-aos="fade-up"
          className="-mx-[15px] flex items-center justify-between max-[992px]:flex-col max-[992px]:text-center"
        >
          <div className="w-[calc(35%-15px)] px-[15px] max-[1199px]:w-[calc(40%-15px)] max-[992px]:w-full max-[575px]:max-w-[290px]">
            <h2 id="about-story-title" className="text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:mb-[15px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
              {title}
            </h2>
          </div>
          <div className="w-[calc(59%-15px)] px-[15px] max-[1199px]:w-[calc(60%-15px)] max-[992px]:w-full">
            <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">{description}</p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="hero-vide-wrap mt-[50px] h-[492px] max-[992px]:h-[350px] max-[767px]:mt-[30px] max-[767px]:h-[200px]"
        >
          <VideoDialog
            overlay={overlay}
            overlayHeight={38}
            overlayWidth={940}
            overlayCaption={caption}
            poster={poster}
            posterAlt={posterAlt}
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) 680px, (max-width: 1399px) 1140px, 1320px"
            title={videoTitle}
            videoId={videoId}
          />
        </div>
      </Container>
    </section>
  );
}
