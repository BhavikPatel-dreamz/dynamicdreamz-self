"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/content/home";
import { cn } from "@/lib/class-names";

function DirectionArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      className={direction === "previous" ? "rotate-180" : undefined}
      aria-hidden="true"
      viewBox="0 0 20 19"
      width="20"
      height="20"
      fill="none"
    >
      <path d="M1.25 7.95508C0.559644 7.95508 6.03528e-08 8.51472 0 9.20508C-6.03528e-08 9.89543 0.559644 10.4551 1.25 10.4551L1.25 9.20508L1.25 7.95508ZM19.1339 10.089C19.622 9.60081 19.622 8.80935 19.1339 8.3212L11.1789 0.366244C10.6908 -0.121911 9.89932 -0.121911 9.41117 0.366244C8.92301 0.854399 8.92301 1.64586 9.41117 2.13401L16.4822 9.20508L9.41116 16.2761C8.92301 16.7643 8.92301 17.5558 9.41116 18.0439C9.89932 18.5321 10.6908 18.5321 11.1789 18.0439L19.1339 10.089ZM1.25 9.20508L1.25 10.4551L18.25 10.4551L18.25 9.20508L18.25 7.95508L1.25 7.95508L1.25 9.20508Z" fill="#282828" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 22 24" width="25" height="25" fill="none">
      <path d="M19.5 8.33597C22.1667 9.87557 22.1667 13.7246 19.5 15.2642L5.99999 23.0584C3.33333 24.598 0 22.6735 0 19.5943V4.00584C0 0.926634 3.33333 -0.997863 6 0.541738L19.5 8.33597Z" fill="#282828" />
    </svg>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialSlide({
  testimonial,
  isActive,
  onPlay,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  onPlay: (videoId: string) => void;
}) {
  return (
    <article className="flex w-full shrink-0 basis-full overflow-hidden min-[768px]:max-[991px]:mr-[15px] min-[768px]:max-[991px]:w-[calc(100%-15px)] min-[768px]:max-[991px]:basis-[calc(100%-15px)] max-[991px]:flex-col-reverse max-[767px]:rounded-[20px] max-[991px]:justify-end" aria-hidden={!isActive}>
      <div className="flex w-1/2 flex-col justify-center  overflow-hidden rounded-[30px] border border-soft-line bg-white/50 px-[30px] py-[45px] min-[768px]:max-[991px]:min-h-[460.17px] min-[768px]:max-[991px]:p-4 max-[991px]:w-full max-[991px]:rounded-[0_0_20px_20px] max-[767px]:p-4">
        <div className={cn("mb-[26px] flex h-[53px] items-center min-[768px]:max-[991px]:mb-4 max-[767px]:mb-4 max-[767px]:h-10 [&_img]:h-auto [&_img]:max-h-[53px] [&_img]:w-auto [&_img]:max-w-[225px] [&_img]:object-contain max-[767px]:[&_img]:max-h-10", !testimonial.logo && "invisible")}>
          {testimonial.logo ? <Image src={testimonial.logo} alt={testimonial.logoAlt ?? ""} width={225} height={53} /> : null}
        </div>
        <h3 className="mb-5 max-w-[540px] pr-[78px] font-sans text-[26px] leading-[1.4] font-bold min-[768px]:max-[991px]:pr-0 min-[768px]:max-[991px]:text-[22px] max-[767px]:mb-4 max-[767px]:pr-0 max-[767px]:text-lg max-[767px]:leading-[normal]">{testimonial.title}</h3>
        <p className="mb-[26px] max-w-[90%] text-base leading-[1.72] font-medium text-muted max-[767px]:mb-4 max-[767px]:max-w-full max-[767px]:text-sm">{testimonial.quote}</p>
        <div className="flex items-center border-t border-ink/15 pt-[26px] max-[767px]:pt-4">
          <div className="flex flex-1 items-center">
            <Image className="mr-3.5 h-[60px] w-[60px] shrink-0 rounded-full object-cover max-[767px]:h-12 max-[767px]:w-12" src={testimonial.avatar} alt={`${testimonial.name}, ${testimonial.company}`} width={60} height={60} />
            <div className="flex min-w-0 flex-col">
              <strong className="mb-1.5 text-xl leading-[1.295] font-semibold max-[767px]:text-base max-[767px]:leading-[normal]">{testimonial.name}</strong>
              {testimonial.companyHref ? (
                <a className="text-lg leading-[1.295] font-medium text-muted hover:text-brand-red max-[767px]:text-sm" href={testimonial.companyHref} target="_blank" rel="nofollow noopener noreferrer" tabIndex={isActive ? undefined : -1}>
                  {testimonial.company}
                </a>
              ) : (
                <span className="text-lg leading-[1.295] font-medium text-muted max-[767px]:text-sm">{testimonial.company}</span>
              )}
            </div>
          </div>
          <button className="flex h-[74px] w-[74px] shrink-0 cursor-pointer items-center justify-center rounded-[20px] border border-ink/20 bg-white p-0 shadow-[0_3px_10px_rgb(40_40_40/10%)] hover:border-ink/60 max-[767px]:h-[50px] max-[767px]:w-[50px] max-[767px]:rounded-[10px] max-[767px]:[&_svg]:h-4 max-[767px]:[&_svg]:w-4" type="button" aria-label={`Play video testimonial from ${testimonial.name} at ${testimonial.company}`} tabIndex={isActive ? undefined : -1} onClick={() => onPlay(testimonial.videoId)}>
            <PlayIcon />
          </button>
        </div>
      </div>
      <div className="relative w-1/2 overflow-hidden rounded-[30px] max-[991px]:h-auto max-[991px]:min-h-0 max-[991px]:w-full max-[991px]:max-h-[346px] max-[991px]:shrink-0 max-[991px]:aspect-square max-[991px]:rounded-[20px_20px_0_0]">
        <Image className="object-cover" src={testimonial.portrait} alt={`${testimonial.name}, ${testimonial.company}`} fill sizes="(max-width: 767px) calc(100vw - 32px), 50vw" />
      </div>
    </article>
  );
}

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoId, setVideoId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (videoId && !dialog.open) dialog.showModal();
    if (!videoId && dialog.open) dialog.close();
  }, [videoId]);

  function moveTo(index: number) {
    setVideoId(null);
    setActiveIndex(index);
  }

  return (
    <>
      <div className="relative" aria-live="polite">
        <div className="overflow-hidden rounded-[30px_0_0_30px] max-[991px]:rounded-[20px]">
          <div className="flex items-stretch transition-transform duration-600 ease-in-out will-change-transform" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <TestimonialSlide testimonial={testimonial} isActive={activeIndex === index} onPlay={setVideoId} key={testimonial.name} />
            ))}
          </div>
        </div>
        <div className="absolute top-[-96px] right-0 flex gap-3.5 max-[991px]:relative max-[991px]:top-auto max-[991px]:right-auto max-[991px]:mt-6 max-[991px]:justify-center" aria-label="Testimonial navigation">
          <button className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-[10px] border-0 bg-white p-0 transition-colors duration-300 hover:not-disabled:bg-brand-red hover:not-disabled:text-white disabled:cursor-default disabled:opacity-60 max-[767px]:h-[42px] max-[767px]:w-[42px] max-[767px]:rounded-md max-[767px]:[&_svg]:h-[15px] max-[767px]:[&_svg]:w-[15px]" type="button" aria-label="Previous testimonial" disabled={activeIndex === 0} onClick={() => moveTo(activeIndex - 1)}>
            <DirectionArrow direction="previous" />
          </button>
          <button className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-[10px] border-0 bg-white p-0 transition-colors duration-300 hover:not-disabled:bg-brand-red hover:not-disabled:text-white disabled:cursor-default disabled:opacity-60 max-[767px]:h-[42px] max-[767px]:w-[42px] max-[767px]:rounded-md max-[767px]:[&_svg]:h-[15px] max-[767px]:[&_svg]:w-[15px]" type="button" aria-label="Next testimonial" disabled={activeIndex === testimonials.length - 1} onClick={() => moveTo(activeIndex + 1)}>
            <DirectionArrow direction="next" />
          </button>
        </div>
      </div>

      <dialog className="w-[min(960px,calc(100vw-40px))] overflow-visible rounded-2xl border-0 bg-black p-0 backdrop:bg-black/80 backdrop:backdrop-blur-[4px]" ref={dialogRef} aria-label="Video testimonial" onCancel={() => setVideoId(null)} onClose={() => setVideoId(null)} onClick={(event) => { if (event.target === event.currentTarget) setVideoId(null); }}>
        <button className="absolute top-[-42px] right-0 h-9 w-9 cursor-pointer rounded-full border-0 bg-white p-0 text-[28px] leading-none text-black" type="button" aria-label="Close video" onClick={() => setVideoId(null)}>
          ×
        </button>
        <div className="relative pb-[56.25%]">
          {videoId ? <iframe className="absolute inset-0 h-full w-full border-0" src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`} title="Dynamic Dreamz client video testimonial" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : null}
        </div>
      </dialog>
    </>
  );
}
