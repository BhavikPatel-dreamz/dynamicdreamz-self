import { VideoDialog } from "@/components/ui/video-dialog";

type AboutVideoDialogProps = {
  videoId: string;
  title: string;
};

export function AboutVideoDialog({ videoId, title }: AboutVideoDialogProps) {
  return (
    <VideoDialog
      videoId={videoId}
      title={title}
      poster="/assets/about/hero-video-poster.webp"
      posterAlt="Dynamic Dreamz team collaborating in the Surat office"
      overlay="/assets/about/we-are-dynamic-dreamz.svg"
      overlayWidth={940}
      overlayHeight={38}
      sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) 680px, 1140px"
    />
  );
}
