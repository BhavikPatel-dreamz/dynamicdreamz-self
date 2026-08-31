import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionDescription } from "@/components/ui/section-description";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatBrText } from "@/lib/text-formatting";

export type TwoColCenterImageItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export type TwoColCenterImageContent = {
  heading: string;
  description: string;
  leftItems: readonly TwoColCenterImageItem[];
  centerImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  rightItems: readonly TwoColCenterImageItem[];
};

export type TwoColCenterImageSectionProps = {
  content: TwoColCenterImageContent;
  className?: string;
  id?: string;
};

function InfoBox({ item }: { item: TwoColCenterImageItem }) {
  return (
    <article className="info-box py-10 max-[992px]:py-4">
      <div className="icon mb-2 size-[66px] max-[992px]:size-[50px]">
        <Image
          alt={item.iconAlt}
          className="object-contain"
          height={66}
          src={item.icon}
          width={66}
        />
      </div>
      <h3 className="why-choose-wordpress-title mb-2 font-montreal-medium text-[16px] font-medium leading-[28px] text-ink max-[992px]:text-base max-[992px]:leading-[26px]">
        {formatBrText(item.title, "max-[767px]:hidden")}
      </h3>
      <p className="text-base font-medium leading-[27.2px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
        {formatBrText(item.description, "max-[767px]:hidden")}
      </p>
    </article>
  );
}

export function TwoColCenterImageSection({
  content,
  className = "why-choose-wordpress-sec two-col-center-img pt-0 pb-0 mb-20 max-[992px]:mb-[50px]",
  id = "things-to-consider",
}: TwoColCenterImageSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="title-with-text mx-auto mb-10 max-w-[850px] text-center max-[767px]:mb-6">
          <SectionHeading>
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </SectionHeading>
          <SectionDescription
            className="why-choose-wordpress-sec-desc mt-2.5 "
            textClassName="leading-[24px] max-[992px]:leading-[24px] font-normal text-sm"
          >
            {formatBrText(content.description, "max-[1199px]:hidden")}
          </SectionDescription>
        </div>

        <div className="wrapper flex flex-wrap items-center justify-between max-[992px]:block">
          {/* Left Column */}
          <div className="col left-col w-[33.33%] max-[992px]:w-full">
            {content.leftItems.map((item) => (
              <InfoBox item={item} key={item.title} />
            ))}
          </div>

          {/* Center Column Illustration (Hidden on mobile <992px) */}
          <div className="col center-col flex w-[33.33%] items-center justify-center px-4 max-[992px]:hidden">
            <div className="main-img w-full max-w-[380px]">
              <Image
                alt={content.centerImage.alt}
                className="h-auto w-full object-contain"
                height={content.centerImage.height}
                src={content.centerImage.src}
                width={content.centerImage.width}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col right-col w-[33.33%] max-[992px]:w-full">
            {content.rightItems.map((item) => (
              <InfoBox item={item} key={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
