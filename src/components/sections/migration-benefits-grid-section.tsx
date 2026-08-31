import Image from "next/image";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type MigrationBenefitsGridItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export type MigrationBenefitsGridSectionProps = {
  content: {
    heading: string;
    description?: string;
    items: readonly MigrationBenefitsGridItem[];
  };
  className?: string;
  id?: string;
};

export function MigrationBenefitsGridSection({
  content,
  className = "migration-service-sec px-0 py-20 max-[767px]:py-[50px]",
  id = "benefits-of-migration",
}: MigrationBenefitsGridSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="title mb-10 text-center mx-auto max-w-[850px] max-[767px]:mb-6">
          <h2 className="mb-1.5 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </h2>
          {content.description && (
            <p className="mt-2.5 font-sans text-base font-medium leading-[27.2px] text-[#535353] max-[767px]:text-sm">
              {formatBrText(content.description, "max-[1199px]:hidden")}
            </p>
          )}
        </div>

        <div className="wrapper -mx-3 flex flex-wrap justify-center">
          {content.items.map((item, idx) => (
            <div
              className="migration-box mb-6 w-1/3 px-3 transition-all duration-300 max-[992px]:w-1/2 max-[767px]:w-full"
              key={idx}
            >
              <div className="migration-text group relative z-0 h-full rounded-[10px] border-[1.5px] border-[#d9d9d9] bg-white p-[30px_26px] transition-all duration-300 hover:border-transparent before:pointer-events-none before:absolute before:-inset-[3px] before:-z-10 before:rounded-[10px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-[5] after:rounded-[10px] after:bg-white hover:after:bg-gradient-to-b hover:after:from-[#f9feff] hover:after:to-white">
                <div className="icon relative z-10 mb-4 h-[50px] w-[50px]">
                  <Image
                    src={item.icon}
                    alt={item.iconAlt}
                    width={50}
                    height={50}
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="relative z-10 mt-3 mb-2.5 font-sans text-[20px] font-bold leading-[28px] text-ink max-[767px]:text-lg">
                  {item.title}
                </h4>
                <p className="relative z-10 font-sans text-base font-medium leading-[27.2px] tracking-[0.32px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
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
