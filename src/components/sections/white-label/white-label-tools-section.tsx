import Image from "next/image";

import { whiteLabelShopifySectionCopy, whiteLabelShopifyToolRows } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import type { WhiteLabelTool } from "@/types/white-label-service";

import styles from "./white-label-tools-section.module.css";

type ToolRowProps = {
  direction: "forward" | "reverse";
  row: readonly WhiteLabelTool[];
};

function ToolGroup({ duplicate = false, row }: { duplicate?: boolean; row: ToolRowProps["row"] }) {
  return (
    <div aria-hidden={duplicate || undefined} className="flex shrink-0 items-center">
      {row.map((item) => (
        <div
          className="relative mx-1.5 h-[94px] w-[202px] shrink-0 max-[1199px]:w-[200px] max-[991px]:w-[180px] max-[767px]:w-[170px]"
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

function ToolRow({ direction, row }: ToolRowProps) {
  return (
    <div className={styles.track}>
      {[0, 1].map((groupIndex) => (
        <div
          className={cn(styles.group, direction === "forward" ? styles.forward : styles.reverse)}
          key={groupIndex}
        >
          <ToolGroup duplicate={groupIndex === 1} row={row} />
        </div>
      ))}
    </div>
  );
}

type WhiteLabelToolsSectionProps = {
  title?: string;
  description?: string;
  ariaLabel?: string;
  rows?: readonly (readonly WhiteLabelTool[])[];
};

export function WhiteLabelToolsSection({
  title = whiteLabelShopifySectionCopy.toolsTitle,
  description = whiteLabelShopifySectionCopy.toolsDescription,
  ariaLabel = whiteLabelShopifySectionCopy.toolsAriaLabel,
  rows = whiteLabelShopifyToolRows,
}: WhiteLabelToolsSectionProps) {
  return (
    <section className="overflow-hidden bg-[#fafaf7] py-[70px] max-[1199px]:py-[60px] max-[991px]:py-10 max-[767px]:py-[30px]">
      <div className="mb-10 px-4 text-center max-[1199px]:mb-[35px] max-[991px]:mb-[30px] max-[767px]:mb-5">
        <h2 className="mx-auto mb-6 max-w-[600px] font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[1199px]:mb-[22px] max-[991px]:mb-5 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:mb-[15px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
          {title}
        </h2>
        <p className="text-base leading-[30.4px] font-medium text-muted max-[1199px]:leading-[26px] max-[767px]:text-sm max-[767px]:leading-5">
          {description}
        </p>
      </div>
      <div aria-label={ariaLabel}>
        <ToolRow direction="forward" row={rows[0]} />
        <ToolRow direction="reverse" row={rows[1]} />
      </div>
    </section>
  );
}
