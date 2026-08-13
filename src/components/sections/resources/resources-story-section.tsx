import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { VideoDialog } from "@/components/ui/video-dialog";
import { resourcesStory } from "@/content/resources";
import { cn } from "@/lib/class-names";

function StoryReviews() {
  return (
    <ul className="mt-[55px] grid grid-cols-3 gap-4 max-[991px]:grid-cols-1 max-[991px]:gap-2">
      {resourcesStory.reviews.map((review) => (
        <li key={review.name}>
          <a className="review-box relative flex h-full min-h-[104px] flex-col rounded-[15px] px-5 pt-[34px] pb-[18px] before:pointer-events-none before:absolute before:top-0 before:left-0 before:inline-block before:h-full before:w-full before:bg-[url('/assets/reviews/review-card-gradient-border.svg')] before:bg-[length:100%_100%] before:bg-no-repeat before:content-[''] max-[991px]:flex-row-reverse max-[991px]:items-center max-[991px]:justify-between max-[991px]:overflow-hidden max-[991px]:rounded-[10px] max-[991px]:bg-white max-[991px]:px-6 max-[991px]:py-[18px] max-[991px]:before:bg-[url('/assets/reviews/review-card-gradient-border-responsive.svg')] min-h-24" href={review.href} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Read Dynamic Dreamz reviews on ${review.name}`}>
            <span className="total-review absolute -top-4 left-1/2 min-w-33.25 -translate-x-1/2 rounded-[30px] p-px text-center text-[14px] leading-[19.6px] font-bold whitespace-nowrap text-[#535353] before:absolute before:inset-0 before:z-0 before:rounded-[30px] before:bg-[linear-gradient(to_right,#15c064,#00d1ff)] before:content-[''] max-[991px]:relative max-[991px]:top-auto max-[991px]:left-auto max-[991px]:translate-x-0"><span className="relative z-1 block rounded-[29px] bg-[#fbf7ed] px-3 py-1.5 max-[991px]:bg-white">{review.reviews}</span></span>
            <span className="flex flex-col items-start">
              <Image className={cn("mb-2 object-contain", review.logoClassName)} src={review.logo} alt={`${review.name} logo`} width={review.logoWidth} height={review.logoHeight} />
              <span className="flex items-center gap-1.75 min-h-6.75">
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
              <p className="mb-6 text-[18px] leading-[34.2px] font-medium text-muted last:mb-0 max-[991px]:text-[16px] max-[991px]:leading-[30.4px] lg:text-left text-center" key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="right-col w-1/2 max-[991px]:min-h-[949.63px] max-[991px]:w-full max-[767px]:min-h-[809.03px]">
            <div className="mb-7">
              <h2 id="resources-story-title" className="relative pl-5 text-[50px] leading-[66px] font-bold tracking-[-1px] before:absolute before:top-1/2 before:left-0 before:h-[45px] before:w-[5px] before:-translate-y-1/2 before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[991px]:text-[36px] max-[991px]:leading-[55px] max-[767px]:text-[26px] max-[767px]:leading-[47.2px]">{resourcesStory.title}</h2>
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
