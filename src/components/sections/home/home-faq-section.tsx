import { FaqSection } from "@/components/sections/faq-section";
import { homeFaqs, homeSectionCopy } from "@/content/home";

export function HomeFaqSection() {
  return (
    <FaqSection
      items={homeFaqs}
      idPrefix="home-faq"
      heading={homeSectionCopy.homeFaqTitle}
      description={homeSectionCopy.homeFaqDescription}
      className="bg-[#fafaf7] py-[60px] max-[767px]:py-10"
      contentClassName="flex justify-between gap-[105px] max-[991px]:flex-col max-[991px]:gap-2.5"
      headerClassName="mb-0 flex w-[41%] flex-col items-start text-left max-[991px]:w-full"
      titleClassName="mb-[15px] text-[43px] leading-[1.2] font-medium max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]"
      descriptionClassName="max-w-[518px] text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.8]"
      accordionItemClassName="!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent last:!border-b-0"
      accordionTriggerClassName="!px-0 !py-6 !pr-12 max-[767px]:!py-5"
      accordionPanelContentClassName="!px-0 !pb-6 max-[767px]:!pb-5"
      accordionIconClassName="right-0 size-[30px] max-[767px]:top-1/2 max-[767px]:right-0 max-[767px]:size-[26px] max-[767px]:-translate-y-1/2"
      accordionIconVariant="circle-cross"
      accordionQuestionClassName="!text-xl !leading-[1.2] !font-medium max-[1199px]:!text-lg max-[1199px]:!leading-[26px] max-[767px]:!text-base"
      accordionAnswerClassName="!text-sm !leading-[1.8] !font-medium"
    />
  );
}
