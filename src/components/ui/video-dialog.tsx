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
        className={cn("popup-youtube hero-img-video relative flex h-full w-full cursor-pointer items-end justify-center overflow-hidden rounded-[15px] bg-black text-white", className)}
        aria-label={`Play video: ${title}`}
        onClick={() => setOpen(true)}
      >
        <div className="image absolute top-0 left-0 h-full w-full before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-full before:w-full before:rounded-[15px] before:bg-black/10 before:content-['']">
          <Image className="object-cover w-full h-full rounded-[15px]" src={poster} alt={posterAlt} fill sizes={sizes} />
        </div>
        <div className={cn("image-text min-h-13.5 flex items-center z-10 lg:px-[30px] lg:pt-[30px] lg:pb-[50px] sm:p-7.5 px-5 py-3", overlayClassName)} aria-hidden="true">
          <Image className="aspect-[auto_940/38]" src={overlay} alt="" width={overlayWidth} height={overlayHeight} />
        </div>
        <div className={cn(styles.pulse, "absolute top-1/2 left-1/2 z-10 size-19 -translate-x-1/2 -translate-y-1/2", playClassName)} aria-hidden="true">
          <Image className="h-full w-full" src="/assets/about/play-video.svg" alt="" width={76} height={76} />
        </div>
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
