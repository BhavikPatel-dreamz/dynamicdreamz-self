import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyProjectDelivery as DeliveryType } from "@/types/case-study";

type CaseStudyServiceDeliveredProps = {
  projectDelivery?: DeliveryType;
};

export function CaseStudyServiceDelivered({ projectDelivery }: CaseStudyServiceDeliveredProps) {
  if (!projectDelivery || !projectDelivery.items || projectDelivery.items.length === 0) {
    return null;
  }

  const eyebrow = projectDelivery.eyebrow || caseStudiesUiCopy.deliveryEyebrow;
  const heading = projectDelivery.heading || caseStudiesUiCopy.deliveryHeading;

  return (
    <section className="py-20 max-[767px]:py-[50px]" aria-labelledby="delivery-heading">
      <Container>
        <div className="flex flex-wrap overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)] max-[767px]:rounded-[16px]">
          <div className="w-[35%] border-r border-[rgba(40,40,40,0.11)] bg-[#fbefd7] p-[34px] max-[992px]:w-full max-[992px]:border-r-0 max-[992px]:border-b max-[992px]:border-[rgba(40,40,40,0.11)] max-[767px]:p-5">
            <div className="relative mb-3 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#282828] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
              <span>{eyebrow}</span>
            </div>
            <h2
              id="delivery-heading"
              className="m-0 font-montserrat text-[30px] font-bold leading-[1.3] text-[#282828] max-[767px]:text-[22px]"
            >
              {heading}
            </h2>
          </div>

          <div className="flex w-[65%] bg-white max-[992px]:w-full">
            <div className="grid w-full grid-cols-2 max-[767px]:grid-cols-1">
              {projectDelivery.items.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="border-b border-[rgba(40,40,40,0.11)] p-6 max-[767px]:p-4 [&:nth-child(even)]:border-l [&:nth-child(even)]:border-[rgba(40,40,40,0.11)] max-[767px]:[&:nth-child(even)]:border-l-0"
                >
                  <span className="mb-3 block font-montserrat text-[12px] font-medium uppercase leading-none tracking-[0.5px] text-[#535353]">
                    {item.category || caseStudiesUiCopy.serviceDelivered}
                  </span>
                  <h5 className="m-0 font-montserrat text-[16px] font-bold leading-[22px] text-[#282828] max-[767px]:text-[15px]">
                    {item.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
