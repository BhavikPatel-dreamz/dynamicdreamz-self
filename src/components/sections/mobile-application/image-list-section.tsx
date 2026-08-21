import Image from "next/image";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type ImageListSectionContent = {
  heading: string;
  intro: string;
  items: readonly string[];
  outro?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ImageListSectionProps = {
  content: ImageListSectionContent;
  id: string;
  variant?: "standard" | "reversed" | "panel";
};

function SectionCopy({ content, headingId }: { content: ImageListSectionContent; headingId: string }) {
  return (
    <div>
      <h2
        className="mb-5 font-sans text-[32px] leading-[42px] font-bold tracking-[-0.7px] text-ink max-[1199px]:text-[27px] max-[1199px]:leading-[38px] max-[575px]:text-[22px] max-[575px]:leading-8"
        id={headingId}
      >
        {content.heading}
      </h2>
      <p className="mb-6 text-base leading-[30px] font-medium text-muted">{content.intro}</p>
      <ul className="space-y-5">
        {content.items.map((item) => (
          <li
            className="relative pl-[30px] text-base leading-[30px] font-medium text-muted"
            key={item}
          >
            <Image
              alt=""
              aria-hidden="true"
              className="absolute top-[4px] left-0 size-[22px]"
              height={22}
              src="/assets/icons/gradient-check.svg"
              width={22}
            />
            {item}
          </li>
        ))}
      </ul>
      {content.outro ? (
        <p className="mt-6 text-base leading-[30px] font-medium text-muted">{content.outro}</p>
      ) : null}
    </div>
  );
}

export function ImageListSection({
  content,
  id,
  variant = "standard",
}: ImageListSectionProps) {
  const headingId = `${id}-title`;

  if (variant === "panel") {
    return (
      <section className="py-20" id={id} aria-labelledby={headingId}>
        <Container>
          <div className="flex flex-wrap overflow-hidden rounded-[34px] bg-[#f7f5ef] max-[991px]:flex-col-reverse">
            <div className="flex w-[45%] pr-0 pb-0 pl-10 max-[1199px]:pl-5 max-[991px]:w-full">
              <Image
                alt={content.image.alt}
                className="mt-[33px] -mr-2.5 h-auto w-full self-end object-contain object-bottom max-[1199px]:mt-[25px] max-[991px]:mt-0 max-[991px]:mr-0"
                height={content.image.height}
                sizes="(max-width: 991px) calc(100vw - 52px), 45vw"
                src={content.image.src}
                width={content.image.width}
              />
            </div>
            <div className="flex w-[55%] items-center py-[11%] pr-[7%] pl-0 max-[1199px]:py-[6%] max-[1199px]:pr-[5%] max-[991px]:w-full max-[991px]:p-[30px_20px]">
              <SectionCopy content={content} headingId={headingId} />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const reversed = variant === "reversed";

  return (
    <section className="py-20" id={id} aria-labelledby={headingId}>
      <Container>
        <div
          className={cn(
            "-mx-5 flex flex-wrap max-[991px]:flex-col",
            reversed && "flex-row-reverse max-[991px]:flex-col",
          )}
        >
          <div
            className={cn(
              "px-5 max-[991px]:mb-[30px] max-[991px]:w-full",
              reversed ? "w-[45%]" : "w-1/2",
            )}
          >
            <div className={cn(!reversed && "pr-5 max-[991px]:pr-5")}>
              <Image
                alt={content.image.alt}
                className={cn(
                  "h-auto w-full object-cover",
                  reversed && "rounded-[28px]",
                )}
                height={content.image.height}
                sizes="(max-width: 991px) calc(100vw - 72px), 50vw"
                src={content.image.src}
                width={content.image.width}
              />
            </div>
          </div>
          <div
            className={cn(
              "flex items-center px-5 max-[991px]:w-full",
              reversed ? "w-[55%]" : "w-1/2",
            )}
          >
            <div className={cn(reversed && "pr-5")}>
              <SectionCopy content={content} headingId={headingId} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
