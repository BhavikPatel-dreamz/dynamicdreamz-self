import { AboutVideoDialog } from "@/components/sections/about/about-video-dialog";
import { Container } from "@/components/ui/container";
import { aboutStory } from "@/content/about";

export function AboutStorySection() {
  return (
    <section data-about="story" aria-labelledby="about-story-title" className="py-20 max-[991px]:py-[50px]">
      <Container className="min-[1200px]:!max-w-[1180px] min-[1440px]:!max-w-[1180px]">
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

        <div className="mt-[50px] h-[492px] max-[991px]:h-[350px] max-[767px]:mt-[30px] max-[767px]:h-[200px]">
          <AboutVideoDialog videoId={aboutStory.videoId} title={aboutStory.videoTitle} />
        </div>
      </Container>
    </section>
  );
}
