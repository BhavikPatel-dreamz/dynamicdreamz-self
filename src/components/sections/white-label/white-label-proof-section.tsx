import Image from "next/image";

import { Container } from "@/components/ui/container";
import {
  whiteLabelShopifyReasons,
  whiteLabelShopifyStats,
  whiteLabelShopifySectionCopy,
} from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import type { WhiteLabelCard, WhiteLabelStat } from "@/types/white-label-service";

type WhiteLabelStatsSectionProps = {
  stats?: readonly WhiteLabelStat[];
};

export function WhiteLabelStatsSection({
  stats = whiteLabelShopifyStats,
}: WhiteLabelStatsSectionProps) {
  return (
    <section className="py-20 max-[992px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <ul className="flex items-center justify-between max-[992px]:flex-wrap max-[992px]:gap-y-[30px] max-[767px]:gap-y-5">
          {stats.map((stat, index) => (
            <li
              className={cn(
                "w-1/4 border-r border-ink/10 last:border-r-0 max-[992px]:w-1/2 max-[767px]:w-full max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:pb-5 max-[767px]:last:border-b-0 max-[767px]:last:pb-0",
                index === 1 && "max-[992px]:border-r-0",
              )}
              key={stat.label}
            >
              <div className="mx-auto w-fit max-[992px]:relative max-[992px]:w-full max-[992px]:max-w-[205px] max-[992px]:pl-[45px]">
                <div className="mb-3 max-[992px]:absolute max-[992px]:top-[5px] max-[992px]:left-0 max-[992px]:mb-0">
                  <Image
                    className="size-[42px] object-contain max-[1199px]:size-[38px] max-[992px]:size-[34px] max-[767px]:size-[30px]"
                    src={stat.icon}
                    alt=""
                    width={42}
                    height={42}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className="flex items-center font-sans text-[40px] leading-[50.2px] font-bold tracking-[1.2px] text-black max-[1199px]:text-[36px] max-[1199px]:leading-[46px] max-[992px]:text-[32px] max-[992px]:leading-[42px]"
                  aria-label={stat.value}
                >
                  {stat.value}
                </div>
                <p className="font-sans text-base leading-[1.24] font-medium text-black">
                  {stat.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

type WhiteLabelWhySectionProps = {
  eyebrow?: string;
  title?: string;
  reasons?: readonly (WhiteLabelCard | null)[];
};

const whyBottomBorderClasses = [
  "before:bg-[linear-gradient(90deg,rgba(40,40,40,0)_0%,rgba(40,40,40,0.5)_50%,#333_100%)]",
  "before:bg-[linear-gradient(90deg,#333_0%,#333_50%,#333_100%)]",
  "before:bg-[linear-gradient(90deg,#333_0%,rgba(40,40,40,0.5)_50%,rgba(40,40,40,0)_100%)]",
] as const;

const whyRightBorderClasses: Record<number, string> = {
  0: "after:bg-[linear-gradient(180deg,rgba(40,40,40,0)_0%,rgba(40,40,40,0.5)_50%,#333_100%)]",
  1: "after:bg-[linear-gradient(180deg,rgba(40,40,40,0)_0%,rgba(40,40,40,0.5)_50%,#333_100%)]",
  3: "after:bg-[linear-gradient(90deg,rgba(40,40,40,0)_0%,#333_51.2%,rgba(51,51,51,0)_102.4%)]",
  4: "after:bg-[linear-gradient(90deg,rgba(40,40,40,0)_0%,#333_51.2%,rgba(51,51,51,0)_102.4%)]",
  6: "after:bg-[linear-gradient(0deg,rgba(40,40,40,0)_0%,rgba(40,40,40,0.5)_50%,#333_100%)]",
  7: "after:bg-[linear-gradient(0deg,rgba(40,40,40,0)_0%,rgba(40,40,40,0.5)_50%,#333_100%)]",
};

export function WhiteLabelWhySection({
  eyebrow,
  title = whiteLabelShopifySectionCopy.whyTitle,
  reasons = whiteLabelShopifyReasons,
}: WhiteLabelWhySectionProps) {
  const lastVisibleIndex = reasons.reduce(
    (lastIndex, reason, index) => (reason ? index : lastIndex),
    -1,
  );
  const lastRowIndex = Math.ceil(reasons.length / 3) - 1;

  return (
    <section className="bg-[#fafaf7] pt-[70px] pb-[82px] max-[1199px]:py-20 max-[992px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        {eyebrow ? (
          <div className="mb-2.5 text-center text-[13px] font-bold uppercase tracking-[1.5px] text-[#e33d37]">
            <span>{eyebrow}</span>
          </div>
        ) : null}
        <h2 className="mb-5 text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[1199px]:mb-[60px] max-[992px]:mb-10 max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
          {title}
        </h2>
        <div className="grid grid-cols-3 max-[767px]:grid-cols-1 max-[767px]:gap-5">
          {reasons.map((reason, index) => {
            const isEmpty = reason === null;
            const isLastVisible = index === lastVisibleIndex;
            const column = index % 3;
            const row = Math.floor(index / 3);

            return (
              <article
                className={cn(
                  "relative px-[25px] py-10 text-center max-[1199px]:px-5 max-[1199px]:py-[30px] max-[992px]:py-5",
                  column !== 2 &&
                    "after:absolute after:top-0 after:right-0 after:h-full after:w-px after:opacity-20",
                  column !== 2 && whyRightBorderClasses[index],
                  row < lastRowIndex &&
                    "before:absolute before:right-0 before:bottom-0 before:left-0 before:h-px before:opacity-20",
                  row < lastRowIndex && whyBottomBorderClasses[column],
                  column === 0 && "pl-0 max-[1199px]:pl-0",
                  column === 2 && "pr-0 max-[1199px]:pr-0",
                  isEmpty && "max-[767px]:hidden",
                  !isEmpty &&
                    !isLastVisible &&
                    "max-[767px]:px-0 max-[767px]:pt-0 max-[767px]:pb-5 max-[767px]:after:hidden max-[767px]:before:absolute max-[767px]:before:right-0 max-[767px]:before:bottom-0 max-[767px]:before:left-0 max-[767px]:before:h-px max-[767px]:before:bg-[linear-gradient(90deg,transparent,rgba(51,51,51,0.2),transparent)]",
                  isLastVisible &&
                    "max-[767px]:px-0 max-[767px]:pt-0 max-[767px]:pb-5 max-[767px]:after:hidden max-[767px]:before:hidden",
                )}
                aria-hidden={isEmpty || undefined}
                key={reason?.title ?? `empty-${index}`}
              >
                {reason ? (
                  <>
                    <h3 className="mb-3.5 font-sans text-lg leading-[1.28] font-bold text-brand-red max-[992px]:mb-2.5">
                      {reason.title}
                    </h3>
                    <p className="font-sans text-base leading-[30.4px] font-medium text-muted max-[1199px]:leading-[26px] max-[992px]:text-[15px] max-[992px]:leading-[22px]">
                      {reason.description}
                    </p>
                  </>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
