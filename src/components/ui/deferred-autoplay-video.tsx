"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type DeferredAutoplayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  posterAlt?: string;
  posterClassName?: string;
  posterSizes?: string;
  sourceMedia?: string;
  decorative?: boolean;
  preload?: "none" | "metadata" | "auto";
  loadRootMargin?: string;
};

export function DeferredAutoplayVideo({
  src,
  className,
  poster,
  posterAlt,
  posterClassName,
  posterSizes = "100vw",
  sourceMedia,
  decorative = false,
  preload = "none",
  loadRootMargin = "600px",
}: DeferredAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasSource, setHasSource] = useState(false);
  const hasSourceRef = useRef(false);
  const pendingPlayRef = useRef(false);

  const attachSource = useCallback(() => {
    if (hasSourceRef.current) return;
    hasSourceRef.current = true;
    setHasSource(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (typeof IntersectionObserver === "undefined") {
      const timer = window.setTimeout(attachSource, 0);
      return () => {
        video.pause();
        window.clearTimeout(timer);
      };
    }

    let loadObserver: IntersectionObserver | null = null;
    let playObserver: IntersectionObserver | null = null;

    loadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          attachSource();
          loadObserver?.disconnect();
        });
      },
      { rootMargin: loadRootMargin },
    );
    loadObserver.observe(video);

    playObserver = new IntersectionObserver(
      (entries) => {
        const observedVideo = videoRef.current;
        if (!observedVideo) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (hasSourceRef.current) {
              void observedVideo.play().catch(() => {});
            } else {
              pendingPlayRef.current = true;
              attachSource();
            }
          } else {
            pendingPlayRef.current = false;
            observedVideo.pause();
          }
        });
      },
      { threshold: 0 },
    );
    playObserver.observe(video);

    return () => {
      loadObserver?.disconnect();
      playObserver?.disconnect();
      video.pause();
    };
  }, [attachSource, loadRootMargin]);

  useEffect(() => {
    const video = videoRef.current;
    if (!hasSource || !video) return;
    video.load();
    if (pendingPlayRef.current) {
      pendingPlayRef.current = false;
      void video.play().catch(() => {});
    }
  }, [hasSource]);

  return (
    <div className="absolute inset-0">
      {poster ? (
        <Image
          aria-hidden={decorative || undefined}
          className={posterClassName}
          alt={decorative ? "" : (posterAlt ?? "")}
          fill
          sizes={posterSizes}
          src={poster}
        />
      ) : null}
      <video
        className={className}
        muted
        loop
        playsInline
        preload={preload}
        ref={videoRef}
        aria-hidden={decorative || undefined}
        tabIndex={decorative ? -1 : undefined}
      >
        {hasSource ? <source src={src} type="video/mp4" media={sourceMedia} /> : null}
      </video>
    </div>
  );
}