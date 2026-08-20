import Image from "next/image";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type WhatDataTransferItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export type WhatDataTransferSectionProps = {
  content: {
    heading: string;
    description: string;
    items: readonly WhatDataTransferItem[];
  };
  className?: string;
  id?: string;
};

export function WhatDataTransferSection({
  content,
  className = "what-during-migration-sec mb-20 max-[767px]:mb-[50px]",
  id = "what-data-we-transfer",
}: WhatDataTransferSectionProps) {
  return (
    <section
      className={`${className} bg-[linear-gradient(97deg,#E8F9EF_28.5%,#E6FAFD_91.82%)] py-20 max-[767px]:py-[50px]`}
      data-section="what-data-we-transfer"
      id={id}
    >
      <Container>
        <div className="title mb-11 text-center max-[767px]:mb-[30px]">
          <h2 className="mb-4 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {formatBrText(content.heading)}
          </h2>
          <p className="mx-auto max-w-[850px] font-sans text-base font-medium leading-[27.2px] text-[#535353] max-[767px]:text-sm">
            {formatBrText(content.description)}
          </p>
        </div>
        <div className="wrapper -mx-[15px] flex flex-wrap justify-center max-[767px]:mx-0">
          {content.items.map((item, index) => (
            <div
              className="col mb-[30px] w-1/5 px-[15px] max-[991px]:w-1/3 max-[767px]:w-full max-[767px]:px-0 max-[767px]:mb-5 max-[767px]:pb-5 min-[992px]:[&:not(:last-child)]:border-r min-[992px]:[&:not(:last-child)]:border-black/5 max-[991px]:min-[768px]:[&:not(:nth-child(3n))]:border-r max-[991px]:min-[768px]:[&:not(:nth-child(3n))]:border-black/5 max-[767px]:[&:not(:last-child)]:border-b max-[767px]:[&:not(:last-child)]:border-black/5 max-[767px]:last:mb-0 max-[767px]:last:pb-0"
              key={item.title || index}
            >
              <div className="item text-center">
                <div className="icon mb-2.5 flex h-[50px] items-center justify-center">
                  <Image
                    alt={item.iconAlt}
                    className="size-[50px] object-contain"
                    height={50}
                    src={item.icon}
                    width={50}
                  />
                </div>
                <h3 className="my-2.5 font-sans text-[16px] font-bold leading-[27px] tracking-[0.32px] text-[#282828] max-[767px]:my-0 max-[767px]:mb-2.5">
                  {item.title}
                </h3>
                <p className="font-sans text-[16px] font-medium leading-[27px] tracking-[0.32px] text-[#535353]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
