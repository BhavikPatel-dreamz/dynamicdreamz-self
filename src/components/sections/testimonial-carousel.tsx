"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/content/home";

function DirectionArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path
        d={direction === "previous" ? "m15 5-7 7 7 7M8 12h12" : "m9 5 7 7-7 7M4 12h12"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="25" height="25">
      <path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" />
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
    <article className="testimonial-slide" aria-hidden={!isActive}>
      <div className="testimonial-content">
        <div className={`testimonial-logo${testimonial.logo ? "" : " is-empty"}`}>
          {testimonial.logo ? (
            <Image
              src={testimonial.logo}
              alt={testimonial.logoAlt ?? ""}
              width={225}
              height={53}
            />
          ) : null}
        </div>
        <h3>{testimonial.title}</h3>
        <p>{testimonial.quote}</p>
        <div className="testimonial-author-row">
          <div className="testimonial-author">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name}, ${testimonial.company}`}
              width={60}
              height={60}
            />
            <div>
              <strong>{testimonial.name}</strong>
              {testimonial.companyHref ? (
                <a
                  href={testimonial.companyHref}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  tabIndex={isActive ? undefined : -1}
                >
                  {testimonial.company}
                </a>
              ) : (
                <span>{testimonial.company}</span>
              )}
            </div>
          </div>
          <button
            className="testimonial-play"
            type="button"
            aria-label={`Play video testimonial from ${testimonial.name} at ${testimonial.company}`}
            tabIndex={isActive ? undefined : -1}
            onClick={() => onPlay(testimonial.videoId)}
          >
            <PlayIcon />
          </button>
        </div>
      </div>
      <div className="testimonial-portrait">
        <Image
          src={testimonial.portrait}
          alt={`${testimonial.name}, ${testimonial.company}`}
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), 50vw"
        />
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
      <div className="testimonial-carousel" aria-live="polite">
        <div className="testimonial-viewport">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialSlide
                testimonial={testimonial}
                isActive={activeIndex === index}
                onPlay={setVideoId}
                key={testimonial.name}
              />
            ))}
          </div>
        </div>
        <div className="testimonial-navigation" aria-label="Testimonial navigation">
          <button
            type="button"
            aria-label="Previous testimonial"
            disabled={activeIndex === 0}
            onClick={() => moveTo(activeIndex - 1)}
          >
            <DirectionArrow direction="previous" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            disabled={activeIndex === testimonials.length - 1}
            onClick={() => moveTo(activeIndex + 1)}
          >
            <DirectionArrow direction="next" />
          </button>
        </div>
      </div>

      <dialog
        className="testimonial-video-dialog"
        ref={dialogRef}
        aria-label="Video testimonial"
        onCancel={() => setVideoId(null)}
        onClose={() => setVideoId(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setVideoId(null);
        }}
      >
        <button
          className="testimonial-video-close"
          type="button"
          aria-label="Close video"
          onClick={() => setVideoId(null)}
        >
          ×
        </button>
        <div className="testimonial-video-frame">
          {videoId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Dynamic Dreamz client video testimonial"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </div>
      </dialog>
    </>
  );
}
