import Image from "next/image";

import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type DifferenceCardItem = {
  label: string;
  value: string;
  ratingImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export type DifferenceCard = {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  items: readonly DifferenceCardItem[];
};

export type DifferenceCardContent = {
  heading: string;
  description?: string;
  cards: readonly DifferenceCard[];
};

export type DifferenceCardSectionProps = {
  content: DifferenceCardContent;
  className?: string;
  id?: string;
};

export function DifferenceCardSection({
  content,
  className = "difference_card_section mb-20 max-[992px]:mb-[50px]",
  id,
}: DifferenceCardSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="title text-center">
          <h2 className="mb-[50px] font-montreal-medium text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:mb-[30px] max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading)}
          </h2>
          {content.description && (
            <p className="mx-auto mt-2.5 max-w-[850px] font-sans text-sm font-normal leading-[27.2px] text-[#535353]">
              {formatBrText(content.description)}
            </p>
          )}
        </div>

        <div className="difference_card_wrapper -mx-[30px] flex flex-wrap max-[992px]:-mx-[10px] max-[767px]:mx-0">
          {content.cards.map((card, idx) => (
            <div
              className="card-col w-1/2 px-[30px] max-[992px]:px-[10px] max-[767px]:mb-[30px] max-[767px]:w-full max-[767px]:px-0 max-[767px]:last:mb-0"
              key={idx}
            >
              <article className="difference_card h-full rounded-[20px] bg-[linear-gradient(to_right,#15c064,#00d1ff)] p-[2px_2px_8px_2px]">
                <div className="difference_card_inner relative h-full rounded-[20px] bg-white p-[30px_30px_50px_30px] max-[992px]:p-[30px_20px_18px_20px]">
                  <div className="logo mb-5 max-[992px]:mb-2.5">
                    <Image
                      alt={card.logo.alt}
                      className="h-10 w-auto object-contain"
                      height={card.logo.height}
                      src={card.logo.src}
                      width={card.logo.width}
                    />
                  </div>
                  <ul>
                    {card.items.map((item, itemIdx) => (
                      <li
                        className={`py-3 text-base font-medium leading-6 text-[#202020] not-last:border-b not-last:border-[#efefef] ${
                          item.ratingImage ? "flex flex-wrap items-center" : ""
                        }`}
                        key={itemIdx}
                      >
                        <span className="mr-1 text-base font-normal leading-[28.8px] text-[#202020]">
                          {item.label}
                        </span>
                        {item.ratingImage && (
                          <span className="rating-img mx-2.5 my-0 inline-block max-[992px]:mx-0 max-[992px]:my-[5px]">
                            <Image
                              alt={item.ratingImage.alt}
                              className="block"
                              height={item.ratingImage.height ?? 20}
                              src={item.ratingImage.src}
                              width={item.ratingImage.width ?? 108}
                            />
                          </span>
                        )}
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
