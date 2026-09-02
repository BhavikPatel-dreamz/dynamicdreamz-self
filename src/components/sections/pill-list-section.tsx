import Image from "next/image";

import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type PillListContent = {
  heading: string;
  items: readonly string[];
  description: string;
};

export type PillListSectionProps = {
  content: PillListContent;
  className?: string;
  id?: string;
};

export function PillListSection({
  content,
  className = "why_choose_seo_service bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[992px]:py-[50px]",
  id,
}: PillListSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="heading-text only-text mb-[50px] text-center max-[992px]:mb-[30px]">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading)}
          </h2>
        </div>
        <div className="seo_service_list text-center">
          <ul className="m-0 flex list-none flex-wrap items-center justify-center p-0">
            {content.items.map((item, idx) => (
              <li
                className="relative mb-6 mr-3.5 inline-flex items-center rounded-[50px] bg-white py-1.5 pr-6 pl-11 text-base font-medium leading-[30.4px] text-[#535353] shadow-sm max-[767px]:mb-3 max-[767px]:mr-0 max-[767px]:w-full max-[767px]:text-left"
                key={idx}
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Image
                    alt="Bullet point icon"
                    className="h-[22px] w-[22px] shrink-0"
                    height={22}
                    src="/assets/icons/bullets-icon.svg"
                    width={22}
                  />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-4 max-w-[850px] text-base font-normal leading-[30.4px] text-[#535353]">
            {formatBrText(content.description)}
          </p>
        </div>
      </Container>
    </section>
  );
}
