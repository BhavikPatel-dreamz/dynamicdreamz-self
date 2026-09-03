import Image from "next/image";

import { testimonials, type Testimonial } from "@/content/home-client";
import { cn } from "@/lib/class-names";

function TestimonialSsrSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex w-full shrink-0 basis-full overflow-hidden min-[768px]:max-[992px]:mr-[15px] min-[768px]:max-[992px]:w-[calc(100%-15px)] min-[768px]:max-[992px]:basis-[calc(100%-15px)] max-[992px]:flex-col-reverse max-[767px]:rounded-[20px] max-[992px]:justify-end">
      <div className="col_content flex w-1/2 grow flex-col justify-center overflow-hidden rounded-[30px] border border-soft-line bg-white/50 px-[30px] py-[45px] min-[768px]:max-[992px]:min-h-[460.17px] min-[768px]:max-[992px]:p-4 max-[992px]:w-full max-[992px]:rounded-[0_0_20px_20px] max-[767px]:p-4">
        <div className={cn("mb-[26px] w-full h-[53px] min-[768px]:max-[992px]:mb-4 max-[767px]:mb-4 max-[767px]:h-10 [&_img]:h-auto [&_img]:max-h-[53px] [&_img]:w-auto [&_img]:max-w-[225px] [&_img]:object-contain max-[767px]:[&_img]:max-h-10", !testimonial.logo && "invisible")}>
          {testimonial.logo ? (
            <Image
              className={cn(testimonial.company === "Max Sweets" && "max-[767px]:!h-10 max-[767px]:!w-[54px]")}
              src={testimonial.logo}
              alt={testimonial.logoAlt ?? ""}
              width={225}
              height={53}
            />
          ) : null}
        </div>
        <h3 className="mb-5 max-w-[540px] pr-[78px] text-[26px] leading-[1.4] font-medium min-[768px]:max-[992px]:pr-0 min-[768px]:max-[992px]:text-[22px] max-[767px]:mb-4 max-[767px]:pr-0 max-[767px]:text-lg max-[767px]:leading-[normal] font-montreal-medium">{testimonial.title}</h3>
        <p className="mb-[26px] max-w-[90%] text-sm leading-6 font-normal text-muted max-[767px]:mb-5 max-[767px]:max-w-full max-[767px]:text-sm">{testimonial.quote}</p>
        <div className="flex items-center border-t border-ink/15 pt-[26px] max-[767px]:pt-4">
          <div className="flex flex-1 items-center">
            <Image className="mr-3.5 h-[60px] w-[60px] shrink-0 rounded-full object-cover max-[767px]:h-12 max-[767px]:w-12" src={testimonial.avatar} alt={`${testimonial.name}, ${testimonial.company}`} width={60} height={60} />
            <div className="flex min-w-0 flex-col">
              <strong className="mb-1.5 text-xl leading-[1.295] font-semibold max-[767px]:text-base max-[767px]:leading-[normal]">{testimonial.name}</strong>
              <span className="text-lg leading-[1.295] font-medium text-muted max-[767px]:text-sm">{testimonial.company}</span>
            </div>
          </div>
          <span className="flex h-[74px] w-[74px] shrink-0 cursor-pointer items-center justify-center rounded-[20px] border border-ink/20 bg-white p-0 shadow-[0_3px_10px_rgb(40_40_40/10%)] max-[767px]:h-[50px] max-[767px]:w-[50px] max-[767px]:rounded-[10px] max-[767px]:[&_svg]:h-4 max-[767px]:[&_svg]:w-4" aria-hidden="true">
            <svg aria-hidden="true" viewBox="0 0 22 24" width="25" height="25" fill="none">
              <path d="M19.5 8.33597C22.1667 9.87557 22.1667 13.7246 19.5 15.2642L5.99999 23.0584C3.33333 24.598 0 22.6735 0 19.5943V4.00584C0 0.926634 3.33333 -0.997863 6 0.541738L19.5 8.33597Z" fill="#282828" />
            </svg>
          </span>
        </div>
      </div>
      <div className="relative w-1/2 overflow-hidden rounded-[30px] max-[992px]:h-auto max-[992px]:min-h-0 max-[992px]:w-full max-[992px]:max-h-[346px] max-[992px]:shrink-0 max-[992px]:aspect-square max-[992px]:rounded-[20px_20px_0_0]">
        <Image className="object-cover" src={testimonial.portrait} alt={testimonial.name} fill sizes="(max-width: 767px) calc(100vw - 32px), 50vw" />
      </div>
    </article>
  );
}

export function TestimonialCarouselPlaceholder({
  items = testimonials,
}: {
  items?: readonly Testimonial[];
}) {
  const first = items[0];
  if (!first) return null;
  return (
    <div className="relative flex flex-col">
      <div className="order-2 overflow-hidden rounded-[30px_0_0_30px] max-[992px]:order-1 max-[992px]:rounded-[20px]">
        <div className="flex items-stretch">
          <TestimonialSsrSlide testimonial={first} />
        </div>
      </div>
      <div className="order-1 mb-[19px] flex justify-end gap-3.5 max-[992px]:order-2 max-[992px]:mt-6 max-[992px]:mb-0 max-[992px]:justify-center" aria-hidden="true">
        <span className="flex h-14 w-14 items-center justify-center rounded-[10px] border-0 bg-white opacity-60 max-[767px]:h-[42px] max-[767px]:w-[42px]" />
        <span className="flex h-14 w-14 items-center justify-center rounded-[10px] border-0 bg-white opacity-60 max-[767px]:h-[42px] max-[767px]:w-[42px]" />
      </div>
    </div>
  );
}
