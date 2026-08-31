import Image from "next/image";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type MigrationBulletFeatureItem = {
  title: string;
  description: string;
};

export type MigrationBulletFeaturesSectionProps = {
  content: {
    heading: string;
    description?: string;
    items: readonly MigrationBulletFeatureItem[];
  };
  className?: string;
  id?: string;
};

export function MigrationBulletFeaturesSection({
  content,
  className = "migration-process-step-sec px-0 py-20 max-[767px]:py-[50px]",
  id = "why-upgrade",
}: MigrationBulletFeaturesSectionProps) {
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

        <div className="migration-process-main">
          <div className="migration-process-inner">
            {content.items.map((item, idx) => (
              <div
                className="migration-step-box bullets-step border-b-[1.5px] border-[#efefef] first:border-t-[1.5px] py-8 max-[767px]:py-5"
                key={idx}
              >
                <div className="migration-step-details">
                  <h3 className="mb-2.5 flex items-start gap-3.5 font-sans text-[20px] font-bold leading-[28px] text-ink max-[767px]:text-lg max-[767px]:leading-[26px]">
                    <Image
                      src="/assets/icons/bullets-icon.svg"
                      alt=""
                      width={22}
                      height={22}
                      className="mt-1 size-[22px] shrink-0 object-contain"
                      aria-hidden="true"
                    />
                    <span>{item.title}</span>
                  </h3>
                  <p className="pl-[36px] text-base font-medium leading-[27.2px] tracking-[0.02em] text-[#535353] max-[767px]:pl-0 max-[767px]:text-sm max-[767px]:leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
