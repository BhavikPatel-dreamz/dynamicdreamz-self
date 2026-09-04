import Image from "next/image";

import { VideoDialog } from "@/components/ui/video-dialog";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type HappyClientTestimonialItem = {
  name: string;
  company: string;
  quote: string;
  videoId: string;
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export type HappyClientCardProps = {
  testimonial: HappyClientTestimonialItem;
  variant?: "classic" | "client-stories";
};

export function HappyClientCard({
  testimonial,
  variant = "classic",
}: HappyClientCardProps) {
  const clientStories = variant === "client-stories";

  return (
    <div
      className={cn(
        "happy-client-col h-full overflow-hidden rounded-[15px]",
        clientStories
          ? "flex grow flex-col border-0 bg-white shadow-[0_4px_18px_rgb(0_0_0/8%)]"
          : "border border-[#d9d9d9] bg-white",
      )}
    >
      <div className={cn("card-item relative", clientStories ? "min-h-[285px] shrink-0" : "min-h-[324px] max-[1199px]:min-h-[240px]")}>
        <VideoDialog
          className={cn("!rounded-none", clientStories ? "min-h-[285px]" : "min-h-[324px] max-[1199px]:min-h-[240px]")}
          overlay="/assets/request-quote/icons/quote-icon.svg"
          overlayClassName="hidden"
          overlayHeight={40}
          overlayWidth={46}
          poster={testimonial.image}
          posterAlt={testimonial.imageAlt}
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) calc((100vw - 115px)/2), 527px"
          title={`${testimonial.name} testimonial video`}
          videoId={testimonial.videoId}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-black/30"
        />
        {clientStories && testimonial.logo ? (
          <span className="pointer-events-none absolute top-5 right-5 z-20 flex h-[70px] w-[140px] items-center justify-end max-[1199px]:top-4 max-[1199px]:right-4 max-[1199px]:h-[50px] max-[1199px]:w-[120px] max-[767px]:top-3 max-[767px]:right-3 max-[767px]:h-[45px] max-[767px]:w-[90px]">
            <Image
              alt={testimonial.logoAlt ?? `${testimonial.company} logo`}
              className="h-auto max-h-full w-auto max-w-full object-contain"
              height={testimonial.logoHeight ?? 70}
              src={testimonial.logo}
              width={testimonial.logoWidth ?? 140}
            />
          </span>
        ) : null}
        <h3 className={cn("pointer-events-none font-montserrat absolute z-20 m-0 inline-block text-[15px] font-semibold leading-[21px] max-[1199px]:text-sm max-[1199px]:leading-[21px]", clientStories ? "bottom-[15px] left-[15px] rounded-[4px] border-l-[3px] border-brand-red bg-black/80 px-[14px] py-[10px] text-left text-white" : "bottom-[22px] left-[36px] rounded-[30px] bg-white px-4 py-[10px] text-center text-ink max-[1199px]:bottom-5 max-[1199px]:left-5 max-[1199px]:px-3.5 max-[1199px]:py-[7px]")}>
          {testimonial.name}
          <span className={cn("font-medium", clientStories ? "mt-1 block text-[15px] leading-5" : "ml-[11px] border-l border-[#dbdbdb] pr-0 pl-[11px] text-base leading-[21px] max-[1199px]:ml-[7px] max-[1199px]:pl-[7px] max-[1199px]:text-xs")}>
            {testimonial.company}
          </span>
        </h3>
        {!clientStories ? (
          <Image
            aria-hidden="true"
            className="pointer-events-none absolute top-[26px] right-[26px] z-20 h-10 w-[46px]"
            src="/assets/request-quote/icons/quote-icon.svg"
            alt=""
            width={46}
            height={40}
          />
        ) : null}
      </div>
      <div className={cn(clientStories ? "client-review-text min-h-[184px] h-full grow px-5 py-[18px]" : "p-[33px_36px_39px] max-[1199px]:p-5")}>
        <p className={cn("text-sm font-medium text-[#535353]", clientStories ? "mb-0 leading-6 before:mr-2 before:inline-block before:h-[15px] before:w-[20px] before:align-top before:bg-[url('/assets/testimonials/quote-mark.svg')] before:bg-contain before:bg-no-repeat before:content-['']" : "mb-6 leading-[28.64px]")}>
          {formatBrText(testimonial.quote)}
        </p>
      </div>
    </div>
  );
}
