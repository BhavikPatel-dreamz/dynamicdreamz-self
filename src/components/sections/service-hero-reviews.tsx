import Image from "next/image";

import {
  serviceHeroReviewLogos,
  type ServiceHeroReviewPlatform,
} from "@/content/service-hero-reviews";
import { cn } from "@/lib/class-names";

export type ServiceHeroReviewItem = {
  platform: string;
  reviewCount: string;
  rating: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  href: string;
  starsAlt?: string;
};

type ServiceHeroReviewsProps = {
  items: readonly ServiceHeroReviewItem[];
  className?: string;
};

export function ServiceHeroReviews({ items, className }: ServiceHeroReviewsProps) {
  return (
    <div
      className={cn(
        "review-wrap mt-[57px] flex justify-center gap-[15px] max-[991px]:mt-[50px] max-[991px]:flex-col max-[991px]:items-center max-[991px]:gap-4",
        className,
      )}
    >
      {items.map((review) => {
        const sharedLogo =
          review.platform in serviceHeroReviewLogos
            ? serviceHeroReviewLogos[review.platform as ServiceHeroReviewPlatform]
            : null;

        return (
          <a
            className="review-box relative z-0 w-[calc(33.33%-10px)] rounded-lg p-[17px_12px_10px] text-center shadow-sm transition-transform hover:-translate-y-0.5 before:absolute before:-inset-[2px] before:-z-20 before:rounded-[10px] before:bg-linear-to-r before:from-[#15c064] before:to-[#00d1ff] after:absolute after:inset-0 after:-z-10 after:rounded-[10px] after:bg-white max-[991px]:flex max-[991px]:w-full max-[991px]:max-w-[400px] max-[991px]:flex-row-reverse max-[991px]:items-center max-[991px]:justify-between max-[991px]:p-[18px_24px]"
            href={review.href}
            key={review.platform}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <div className="total-review relative -mt-[34px] mb-2.5 rounded-[30px] border-[1.5px] border-[#efefef] bg-white max-[991px]:m-0 max-[991px]:inline-block">
              <span className="block px-2.5 py-1 text-center text-[10px] leading-normal font-semibold text-black">
                {review.reviewCount}
              </span>
            </div>
            <div className="rating-wrap flex flex-col items-center justify-center max-[991px]:items-start">
              <Image
                alt={review.logoAlt}
                className="object-contain"
                height={sharedLogo?.height ?? review.logoHeight}
                src={sharedLogo?.src ?? review.logoSrc}
                width={sharedLogo?.width ?? review.logoWidth}
              />
              <div className="rating flex items-center justify-center gap-[7px]">
                <Image
                  alt={review.starsAlt ?? "Dynamic Dreamz Star Rating"}
                  className="h-3 w-16 object-contain"
                  height={12}
                  src="/assets/reviews/five-stars.svg"
                  width={64}
                />
                <span className="font-sans text-[22px] leading-normal font-bold text-[#252c15] max-[991px]:text-base">
                  {review.rating}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
