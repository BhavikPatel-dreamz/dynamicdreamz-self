import Image from "next/image";

import { VideoDialog } from "@/components/ui/video-dialog";
import { formatBrText } from "@/lib/text-formatting";

export type HappyClientTestimonialItem = {
  name: string;
  company: string;
  quote: string | readonly string[];
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
}: HappyClientCardProps) {
  return (
    <div className="happy-client-col flex h-full grow flex-col overflow-hidden rounded-[15px] border-0 bg-white shadow-[0_4px_18px_rgb(0_0_0/8%)]">
      <div className="card-item relative min-h-[285px] shrink-0">
        <VideoDialog
          className="!rounded-none min-h-[285px]"
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
        {testimonial.logo ? (
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
        <h3 className="pointer-events-none font-montserrat absolute bottom-[15px] left-[15px] z-20 m-0 inline-block rounded-[4px] border-l-[3px] border-brand-red bg-black/80 px-[14px] py-[10px] text-left text-[15px] font-semibold leading-[21px] text-white max-[1199px]:text-sm max-[1199px]:leading-[21px]">
          {testimonial.name}
          <span className="mt-1 block text-[15px] font-medium leading-5">
            {testimonial.company}
          </span>
        </h3>
      </div>
      <div className="client-review-text min-h-[184px] h-full grow px-5 py-[18px]">
        <p className="mb-0 text-sm font-medium leading-6 text-[#535353] before:mr-2 before:inline-block before:h-[15px] before:w-[20px] before:align-top before:bg-[url('/assets/testimonials/quote-mark.svg')] before:bg-contain before:bg-no-repeat before:content-['']">
          {formatBrText(testimonial.quote)}
        </p>
      </div>
    </div>
  );
}
