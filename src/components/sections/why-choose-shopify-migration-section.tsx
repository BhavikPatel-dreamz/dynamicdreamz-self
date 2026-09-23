import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type WhyChooseMigrationItem = {
  icon: "certified" | "verticals" | "team" | string;
  title: string;
  description: string;
};

export type WhyChooseMigrationStat = {
  value: string;
  label: string;
};

export type WhyChooseMigrationContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly WhyChooseMigrationItem[];
  partnerLogo: string;
  partnerLogoAlt: string;
  partnerHeading: string;
  partnerDescription: string;
  stats: readonly WhyChooseMigrationStat[];
  partnerLink: {
    label: string;
    href: string;
  };
};

export type WhyChooseShopifyMigrationSectionProps = {
  content: WhyChooseMigrationContent;
  className?: string;
  id?: string;
};

function MigrationFeatureIcon({ icon }: { icon: string }) {
  if (icon === "certified") {
    return (
      <svg
        aria-hidden="true"
        className="size-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M11.8516 18.2637C11.8516 18.086 11.7074 17.9414 11.5293 17.9414C11.3736 17.9416 11.2438 18.0518 11.2139 18.1982L11.208 18.2637C11.2082 18.441 11.3515 18.5848 11.5293 18.585L11.5947 18.5781C11.7413 18.548 11.8514 18.4189 11.8516 18.2637Z"
          stroke="#AD5151"
          strokeWidth="1.5"
        />
        <path
          d="M20.6477 14.4099C20.6477 15.5921 19.6893 16.5508 18.5074 16.5508C17.3256 16.5508 16.3672 15.5921 16.3672 14.4099C16.3672 13.2278 17.3256 12.2691 18.5074 12.2691C19.6893 12.2691 20.6477 13.2278 20.6477 14.4099Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M6.8215 21.6914H1V20.8351C1 18.9434 2.6617 17.4097 4.55283 17.4097C5.70899 17.4097 6.8596 17.9826 7.47941 18.8604"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M15.5811 18.8604C16.2009 17.9826 17.3515 17.4097 18.5076 17.4097C20.3988 17.4097 22.0605 18.9434 22.0605 20.8351V21.6914H16.239"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M6.69262 14.4099C6.69262 15.5921 5.73422 16.5508 4.55237 16.5508C3.37052 16.5508 2.41211 15.5921 2.41211 14.4099C2.41211 13.2278 3.37052 12.2691 4.55237 12.2691C5.73422 12.2691 6.69262 13.2278 6.69262 14.4099Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M14.5269 12.7021C14.5269 14.3573 13.1854 15.6992 11.5305 15.6992C9.87569 15.6992 8.53418 14.3573 8.53418 12.7021C8.53418 11.0468 9.87569 9.70489 11.5305 9.70489C13.1854 9.70489 14.5269 11.0468 14.5269 12.7021Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M11.5145 1.99754L10.5886 3.89132L8.51855 4.19189L10.0167 5.65237L9.66316 7.71484L11.5145 6.74119C12.2101 7.10685 12.6904 7.35947 13.3663 7.71484L13.0122 5.65237L14.5104 4.19189L12.4404 3.89132L11.5145 1.99754Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M18.7756 9.21738L20.0935 9.91016L19.8418 8.4424L20.9081 7.40238L19.4343 7.1883L18.7756 5.85242L18.1164 7.1883L16.6426 7.40238L17.7089 8.4424L17.4572 9.91016L18.7756 9.21738Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M4.22282 9.21738L5.54079 9.91016L5.2891 8.4424L6.35538 7.40238L4.88159 7.1883L4.22282 5.85242L3.56362 7.1883L2.08984 7.40238L3.15612 8.4424L2.90443 9.91016L4.22282 9.21738Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M16.2384 21.6914H6.82129V21.2632C6.82129 20.3855 7.06143 19.5638 7.4792 18.8604C8.30021 17.4791 9.80695 16.5534 11.5299 16.5534C12.8303 16.5534 14.0074 17.0805 14.8592 17.933C15.1362 18.21 15.3789 18.5213 15.5805 18.8604C15.9983 19.5638 16.2384 20.3855 16.2384 21.2632V21.6914Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (icon === "verticals") {
    return (
      <svg
        aria-hidden="true"
        className="size-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55229 3.44772 10 4 10H9C9.55229 10 10 9.55229 10 9V4C10 3.44772 9.55229 3 9 3Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55229 14.4477 10 15 10H20C20.5523 10 21 9.55229 21 9V4C21 3.44772 20.5523 3 20 3Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55229 21 10 20.5523 10 20V15C10 14.4477 9.55229 14 9 14Z"
          stroke="#AD5151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="size-6 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 11.095C10.0272 11.095 8.42219 12.7 8.42219 14.6728C8.42219 16.6457 10.0272 18.2507 12 18.2507C13.9728 18.2507 15.5778 16.6457 15.5778 14.6728C15.5778 12.7 13.9728 11.095 12 11.095ZM12 17.5007C10.4407 17.5007 9.17219 16.2322 9.17219 14.6729C9.17219 13.1136 10.4407 11.845 12 11.845C13.5593 11.845 14.8278 13.1136 14.8278 14.6729C14.8278 16.2322 13.5593 17.5007 12 17.5007Z"
        fill="#AD5151"
      />
      <path
        d="M23.6229 13.4914C23.3936 11.3495 21.9191 9.62559 19.9621 9.0038C20.7177 8.48648 21.2147 7.6178 21.2147 6.63497C21.2147 5.05294 19.9276 3.76584 18.3455 3.76584C16.7634 3.76584 15.4763 5.05294 15.4763 6.63497C15.4763 6.885 15.5086 7.12758 15.569 7.35891C15.0148 6.96389 14.3984 6.66449 13.7453 6.47316C14.6778 5.88947 15.2997 4.85358 15.2997 3.67467C15.2997 1.85522 13.8195 0.375 12.0001 0.375C10.1807 0.375 8.70039 1.85522 8.70039 3.67467C8.70039 4.85358 9.32233 5.88947 10.2549 6.47316C9.60176 6.66448 8.98532 6.96386 8.43114 7.35886C8.49282 7.12251 8.52397 6.87923 8.52381 6.63497C8.52381 5.05294 7.23672 3.76584 5.65464 3.76584C4.07261 3.76584 2.78551 5.05294 2.78551 6.63497C2.78551 7.61775 3.28244 8.48644 4.03797 9.00375C2.08094 9.62555 0.606342 11.3495 0.37717 13.4914C0.365826 13.5973 0.399951 13.7029 0.471107 13.782C0.542264 13.8611 0.643654 13.9063 0.750014 13.9063L5.85198 13.9063C5.83445 14.1825 5.88953 14.4657 6.02242 14.7286L6.4359 15.5467C6.5154 15.7039 6.54156 15.8521 6.52065 16.0271L6.41186 16.9373C6.3272 17.6454 6.71087 18.3099 7.36651 18.5908L7.92592 18.8303L6.5762 21.7294C6.53879 21.8095 6.52411 21.8984 6.53376 21.9862C6.54342 22.0741 6.57704 22.1576 6.63095 22.2277C6.68463 22.2979 6.75655 22.352 6.83886 22.384C6.92118 22.4161 7.01072 22.425 7.09773 22.4097L8.48425 22.1674L9.19159 23.3847C9.23588 23.4611 9.30031 23.5239 9.37785 23.5662C9.45539 23.6085 9.54306 23.6286 9.63128 23.6244C9.71958 23.6206 9.80513 23.5925 9.87857 23.5433C9.95201 23.4941 10.0105 23.4257 10.0477 23.3455L11.353 20.542L11.7561 20.4202C11.9249 20.3692 12.0753 20.3692 12.244 20.4202L12.6472 20.5421L13.9525 23.3454C13.9912 23.4291 14.0531 23.4999 14.1308 23.5495C14.2086 23.599 14.299 23.6252 14.3912 23.625C14.563 23.625 14.7214 23.5343 14.8088 23.3844L15.5159 22.1674L16.9024 22.4096C16.9894 22.425 17.0791 22.4162 17.1614 22.3841C17.2438 22.3519 17.3157 22.2978 17.3694 22.2275C17.4232 22.1574 17.4568 22.0739 17.4664 21.9861C17.476 21.8982 17.4613 21.8094 17.4239 21.7293L16.0742 18.8303L16.6337 18.5907C17.2893 18.3099 17.6729 17.6454 17.5883 16.9373L17.4795 16.0271C17.4586 15.8521 17.4847 15.7039 17.5642 15.5467L17.9777 14.7286C18.1106 14.4657 18.1657 14.1825 18.1482 13.9063H23.25C23.3026 13.9063 23.3546 13.8952 23.4027 13.8738C23.4507 13.8523 23.4937 13.821 23.5289 13.7819C23.5641 13.7428 23.5906 13.6967 23.6068 13.6466C23.623 13.5966 23.6285 13.5437 23.6229 13.4914Z"
        fill="#AD5151"
      />
    </svg>
  );
}

export function WhyChooseShopifyMigrationSection({
  content,
  className,
  id,
}: WhyChooseShopifyMigrationSectionProps) {
  return (
    <section
      className={cn(
        "why_choose_dynamic_dreamz_for_shopify_migration bg-[#171e16] py-20 max-[991px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          dark
          description={content.description}
          eyebrow={content.eyebrow}
          eyebrowClassName="text-white"
          heading={content.heading}
          variant="left"
        />

        <div className="wrapper -mx-2.5 flex flex-wrap max-[991px]:mx-0">
          <div className="left-col flex w-1/2 flex-col px-2.5 max-[991px]:w-full max-[991px]:px-0">
            {content.items.map((item) => (
              <div
                className="item-box mb-3 flex h-full rounded-[20px] border border-[rgba(40,40,40,0.1)] bg-white p-5 last:mb-0 max-[767px]:rounded-[12px] max-[767px]:p-[20px_15px]"
                key={item.title}
              >
                <div className="icon mr-5 flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#EFF4EF] p-2.5 text-sm font-semibold leading-normal max-[767px]:mr-2.5">
                  <MigrationFeatureIcon icon={item.icon} />
                </div>
                <div className="text">
                  <h3 className="mb-[5px] font-montreal-medium text-lg font-medium leading-normal text-ink">
                    {item.title}
                  </h3>
                  <p className="whitespace-pre-line font-sans text-sm font-medium leading-6 text-[#535353]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="right-col flex w-1/2 flex-col px-2.5 max-[991px]:mt-5 max-[991px]:w-full max-[991px]:px-0">
            <div className="text-block flex h-full flex-col justify-between rounded-[20px] bg-white p-[50px_30px_30px_30px] max-[991px]:p-[30px_20px_20px_20px] max-[767px]:rounded-[12px]">
              <div className="content-box text-center">
                <div className="logo-wrapp mb-5 flex justify-center">
                  <a
                    className="flex w-full max-w-[180px] max-[767px]:max-w-[160px]"
                    href={content.partnerLink.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      alt={content.partnerLogoAlt}
                      className="block h-auto w-full"
                      height={44}
                      src={content.partnerLogo}
                      width={180}
                    />
                  </a>
                </div>
                <h3 className="mb-2.5 font-montserrat text-[30px] font-bold leading-[35px] text-ink max-[1199px]:text-[24px] max-[1199px]:leading-[28px] max-[767px]:text-[20px] max-[767px]:leading-[24px]">
                  {content.partnerHeading}
                </h3>
                <p className="mx-auto max-w-[500px] font-sans text-sm font-medium leading-6 text-[#535353]">
                  {content.partnerDescription}
                </p>
                <div className="boxes-wrapper mt-9 grid grid-cols-4 gap-2 max-[1199px]:grid-cols-2 max-[991px]:mt-[30px]">
                  {content.stats.map((stat, idx) => {
                    const bgColors = [
                      "bg-[#EFF4EF]",
                      "bg-[#F4F2EF]",
                      "bg-[#F6EEE5]",
                      "bg-[#F0F6E5]",
                    ];
                    return (
                      <div
                        className={cn(
                          "box rounded-[20px] p-[25px_15px] text-center max-[1399px]:rounded-[16px] max-[1399px]:p-[22px_10px]",
                          bgColors[idx % bgColors.length],
                        )}
                        key={stat.label}
                      >
                        <span className="block font-montserrat text-[32px] font-semibold leading-tight text-ink max-[1399px]:text-[28px]">
                          {stat.value}
                        </span>
                        <p className="mt-1 font-sans text-xs font-medium uppercase leading-[150%] text-[#535353]">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <a
                className="btn-link-arrow mt-[30px] flex items-center justify-center gap-2 border-t border-[rgba(0,0,0,0.1)] pt-5 font-montserrat text-sm font-bold uppercase tracking-[0.32px] text-[#ad5151] transition-colors hover:text-[#282828]"
                href={content.partnerLink.href}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <span>{content.partnerLink.label}</span>
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 shrink-0 fill-current"
                  viewBox="0 0 12 12"
                >
                  <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
