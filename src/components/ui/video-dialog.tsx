"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "@/components/ui/video-dialog.module.css";
import { cn } from "@/lib/class-names";

type VideoDialogProps = {
  videoId: string;
  title: string;
  poster: string;
  posterAlt: string;
  overlay: string;
  overlayWidth: number;
  overlayHeight: number;
  className?: string;
  overlayClassName?: string;
  playClassName?: string;
  sizes: string;
};

export function VideoDialog({
  videoId,
  title,
  poster,
  posterAlt,
  overlay,
  overlayWidth,
  overlayHeight,
  className,
  overlayClassName,
  playClassName,
  sizes,
}: VideoDialogProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function closeDialog() {
    dialogRef.current?.close();
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={cn("relative flex h-full w-full cursor-pointer items-end justify-center overflow-hidden rounded-[15px] bg-black text-white", className)}
        aria-label={`Play video: ${title}`}
        onClick={() => setOpen(true)}
      >
        <Image className="object-cover" src={poster} alt={posterAlt} fill sizes={sizes} />
        <span className="absolute inset-0 bg-black/10" aria-hidden="true" />
        <span className={cn("relative z-10 w-full p-7.5 max-w-120.75 max-[991px]:max-w-120.75 h-22.5", overlayClassName)} aria-hidden="true">
          <Image className="h-auto w-full" src={overlay} alt="" width={overlayWidth} height={overlayHeight} />
        </span>
        <span className={cn(styles.pulse, "absolute top-1/2 left-1/2 z-10 size-19 -translate-x-1/2 -translate-y-1/2", playClassName)} aria-hidden="true">
          <Image className="h-full w-full" src="/assets/about/play-video.svg" alt="" width={76} height={76} />
        </span>
      </button>

      {open ? (
        <dialog
          ref={dialogRef}
          aria-label={title}
          className="popup-box m-auto overflow-visible bg-transparent p-0 text-white backdrop:bg-black/80 aspect-video w-[90%] max-w-[800px]"
          onCancel={(event) => {
            event.preventDefault();
            closeDialog();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
          onClose={() => setOpen(false)}
        >
          <div className="relative aspect-video overflow-hidden bg-black shadow-2xl">
            <iframe
              className="h-full w-full border-0"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <button type="button" className="absolute -top-[57px] -right-[7px] z-11111 cursor-pointer border-0 bg-transparent p-0 text-[50px] leading-none text-white outline-0" aria-label="Close video" onClick={closeDialog}>
            <span aria-hidden="true">{"\u00d7"}</span>
          </button>
        </dialog>
      ) : null}
    </>
  );
}
