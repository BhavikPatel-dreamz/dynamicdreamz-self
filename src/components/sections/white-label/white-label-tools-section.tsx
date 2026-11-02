import Image from "next/image";
import { useId } from "react";

import { ClientAfterViewport } from "@/components/ui/client-after-viewport";
import { whiteLabelShopifySectionCopy, whiteLabelShopifyToolRows } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import type { WhiteLabelTool } from "@/types/white-label-service";

import styles from "./white-label-tools-section.module.css";

type ToolRowProps = {
  className?: string;
  direction: "forward" | "reverse";
  row: readonly WhiteLabelTool[];
};

function ToolGroup({ duplicate = false, row }: { duplicate?: boolean; row: ToolRowProps["row"] }) {
  return (
    <div aria-hidden={duplicate || undefined} className="flex shrink-0 items-center">
      {row.map((item) => (
        <div
          className="our_partners_logo_item relative mx-1.5 h-[94px] w-[202px] shrink-0 max-[1200px]:w-[200px] max-[992px]:w-[180px] max-[768px]:w-[170px]"
          key={item.name}
        >
          <Image
            className="object-contain"
            src={item.image}
            alt={duplicate ? "" : item.name}
            fill
            sizes="(max-width: 767px) 170px, (max-width: 991px) 180px, (max-width: 1199px) 200px, 202px"
          />
        </div>
      ))}
    </div>
  );
}

function ToolRow({ className, direction, row }: ToolRowProps) {
  const trackId = useId();

  return (
    <div id={trackId} className={cn("track", styles.track, className)}>
      <div
        className={cn("logo_holder", styles.group, direction === "forward" ? styles.forward : styles.reverse)}
      >
        <ToolGroup row={row} />
      </div>
      <ClientAfterViewport rootId={trackId}>
        <div
          data-tool-track-clone
          className={cn("logo_holder", styles.group, direction === "forward" ? styles.forward : styles.reverse)}
        >
          <ToolGroup duplicate row={row} />
        </div>
      </ClientAfterViewport>
    </div>
  );
}

type WhiteLabelToolsSectionProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  ariaLabel?: string;
  rows?: readonly (readonly WhiteLabelTool[])[];
};

export function WhiteLabelToolsSection({
  className,
  eyebrow,
  title = whiteLabelShopifySectionCopy.toolsTitle,
  description = whiteLabelShopifySectionCopy.toolsDescription,
  ariaLabel = whiteLabelShopifySectionCopy.toolsAriaLabel,
  rows = whiteLabelShopifyToolRows,
}: WhiteLabelToolsSectionProps) {
  return (
    <section
      className={cn(
        "white_label_wide_range_technologies_section overflow-hidden bg-[#fafaf7] py-[70px] max-[1200px]:py-[60px] max-[992px]:py-10 max-[768px]:py-[30px]",
        className,
      )}
    >
      <div
        data-aos="fade-up"
        className="wide_range_technologies_top_part mb-10 px-4 text-center max-[1200px]:mb-[35px] max-[992px]:mb-[30px] max-[768px]:mb-5"
      >
        {eyebrow ? (
          <div className="title mb-5 text-[13px] font-bold uppercase tracking-[1.5px] text-[#e33d37]">
            <span>{eyebrow}</span>
          </div>
        ) : null}
        <div className="wide_range_technologies_heading">
          <h2 className="mx-auto mb-6 max-w-[1000px] font-montreal-medium text-[35px] leading-[48.475px] font-normal tracking-normal text-ink max-[1200px]:mb-[22px] max-[992px]:mb-5 max-[992px]:text-[30px] max-[992px]:leading-10 max-[768px]:mb-[15px] max-[768px]:text-2xl max-[768px]:leading-[33.24px]">
            {title}
          </h2>
        </div>
        <div className="wide_range_technologies_para mx-auto max-w-[1000px]">
          <p className="text-base leading-[30.4px] font-medium text-muted max-[1200px]:leading-[26px] max-[768px]:text-sm max-[768px]:leading-5">
            {description}
          </p>
        </div>
      </div>
      <div aria-label={ariaLabel} className="wide_range_technologies_bottom_part">
        <div data-aos="fade-up" className="our_partners_logo_wrap">
          <ToolRow className="logos_partner_top" direction="forward" row={rows[0]} />
          <ToolRow className="logos_partner_bottom" direction="reverse" row={rows[1]} />
        </div>
      </div>
    </section>
  );
}
