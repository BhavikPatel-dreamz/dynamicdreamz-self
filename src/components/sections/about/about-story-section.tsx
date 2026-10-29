import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
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
        <SplitSectionHeading
          heading={title}
          description={description}
        />

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
