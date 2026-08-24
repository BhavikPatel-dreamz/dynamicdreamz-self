import Image from "next/image";

import { Container } from "@/components/ui/container";
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
    <article className="info-box py-10 max-[991px]:py-4">
      <div className="icon mb-2 size-[66px] max-[991px]:size-[50px]">
        <Image
          alt={item.iconAlt}
          className="object-contain"
          height={66}
          src={item.icon}
          width={66}
        />
      </div>
      <h3 className="why-choose-wordpress-title mb-2 font-sans text-[20px] font-bold leading-[28px] text-ink max-[991px]:text-base max-[991px]:leading-[26px]">
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
  className = "why-choose-wordpress-sec two-col-center-img pt-0 pb-0 mb-20 max-[991px]:mb-[50px]",
  id = "things-to-consider",
}: TwoColCenterImageSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="title-with-text mx-auto mb-10 max-w-[850px] text-center max-[767px]:mb-6">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </h2>
          <p className="why-choose-wordpress-sec-desc mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[991px]:text-sm max-[991px]:leading-[30.4px]">
            {formatBrText(content.description, "max-[1199px]:hidden")}
          </p>
        </div>

        <div className="wrapper flex flex-wrap items-center justify-between max-[991px]:block">
          {/* Left Column */}
          <div className="col left-col w-[31%] max-[991px]:w-full">
            {content.leftItems.map((item) => (
              <InfoBox item={item} key={item.title} />
            ))}
          </div>

          {/* Center Column Illustration (Hidden on mobile <992px) */}
          <div className="col center-col flex w-[34%] items-center justify-center px-4 max-[991px]:hidden">
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
          <div className="col right-col w-[31%] max-[991px]:w-full">
            {content.rightItems.map((item) => (
              <InfoBox item={item} key={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
