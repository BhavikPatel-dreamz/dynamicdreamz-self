import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { VideoDialog } from "@/components/ui/video-dialog";
import { resourcesStory } from "@/content/resources";

function StoryReviews() {
  return (
    <ul className="mt-[55px] grid grid-cols-3 gap-4 max-[991px]:grid-cols-1 max-[991px]:gap-2">
      {resourcesStory.reviews.map((review) => (
        <li key={review.name}>
          <a className="relative flex min-h-[104px] flex-col rounded-[15px] border border-[#15c064] px-5 pt-[34px] pb-[18px] max-[991px]:min-h-[67px] max-[991px]:flex-row-reverse max-[991px]:items-center max-[991px]:justify-between max-[991px]:overflow-hidden max-[991px]:rounded-[10px] max-[991px]:bg-white max-[991px]:px-6 max-[991px]:py-[18px]" href={review.href} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Read Dynamic Dreamz reviews on ${review.name}`}>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-[30px] border border-[#15c064] bg-[#fbf7ed] px-3 py-[7px] text-center text-[14px] leading-none font-bold text-[#535353] max-[991px]:static max-[991px]:translate-x-0 max-[991px]:text-[12px] whitespace-nowrap">{review.reviews}</span>
            <span className="flex flex-col items-start">
              <Image className="mb-2 h-[23px] w-auto" src={review.logo} alt={`${review.name} logo`} width={review.logoWidth} height={review.logoHeight} />
              <span className="flex items-center gap-[7px]">
                <Image className="h-[14px] w-auto" src="/assets/reviews/five-stars.svg" alt="Five stars" width={78} height={14} />
                <strong className="text-[22px] leading-none font-bold text-[#252c15]">{review.rating}</strong>
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ResourcesStorySection() {
  return (
    <section className="resources-hero-div bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-[60px]" aria-labelledby="resources-story-title">
      <Container className="min-[1440px]:!max-w-[1180px]">
        <div className="hero-wrapper flex flex-row-reverse justify-between max-[991px]:flex-col">
          <div className="left-col w-[44.5%] max-[991px]:mb-[42px] max-[991px]:w-full">
            {resourcesStory.paragraphs.map((paragraph) => (
              <p className="mb-6 text-[18px] leading-[34.2px] font-medium text-muted last:mb-0 max-[991px]:text-[16px] max-[991px]:leading-[30.4px]" key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="right-col w-1/2 max-[991px]:min-h-[949.63px] max-[991px]:w-full max-[767px]:min-h-[809.03px]">
            <div className="mb-7">
              <h2 id="resources-story-title" className="relative pl-5 text-[50px] leading-[66px] font-bold before:absolute before:top-1/2 before:left-0 before:h-[45px] before:w-[5px] before:-translate-y-1/2 before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[991px]:text-[36px] max-[991px]:leading-[55px] max-[767px]:text-[26px] max-[767px]:leading-[47.2px] tracking-[-1px]">{resourcesStory.title}</h2>
              <p className="text-[18px] leading-[1.4] font-bold text-ink">{resourcesStory.subtitle}</p>
            </div>
            <div className="h-[360px] max-[991px]:h-[400px] max-[575px]:h-[300px] max-[480px]:h-[242px]">
              <VideoDialog
                videoId={resourcesStory.videoId}
                title={resourcesStory.videoTitle}
                poster="/assets/about/hero-video-poster.webp"
                posterAlt={resourcesStory.videoPosterAlt}
                overlay="/assets/about/we-are-dynamic-dreamz.svg"
                overlayWidth={940}
                overlayHeight={38}
                overlayClassName="p-[30px]"
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 991px) 680px, 570px"
              />
            </div>
            <StoryReviews />
            <p className="relative mt-[30px] pl-[35px] text-[16px] leading-[1.7] font-bold before:absolute before:top-0.5 before:left-0 before:size-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat">
              <Link className="underline underline-offset-2 hover:text-brand-red focus-visible:text-brand-red" href="/blogs/category/shopify/">Shopify</Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
