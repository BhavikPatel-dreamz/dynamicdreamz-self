import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { VideoModalClient } from "@/components/ui/VideoModalClient";
import { aboutSectionCopy, aboutStory, coreValues } from "@/content/about";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

function AboutValueIcon({ name }: { name: string }): ReactNode {
  switch (name) {
    case "integrity":
      return (
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10.5469 20.4844C11.3235 20.4844 11.9531 19.8548 11.9531 19.0781C11.9531 18.3015 11.3235 17.6719 10.5469 17.6719H9.14062V14.8594H6.32812V16.2656C6.32812 16.6537 6.17062 17.0053 5.91609 17.2598C5.65425 17.5217 5.28975 17.6809 4.88836 17.6715C4.12013 17.6536 3.51562 17.0056 3.51562 16.2372V14.8594H0.703125V23.2969H9.14062V20.4844H10.5469Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M9.14062 14.8594V12.0469H7.73438C6.95766 12.0469 6.32812 11.4173 6.32812 10.6406C6.32812 10.2525 6.48562 9.90094 6.74016 9.64641C6.99469 9.39187 7.34625 9.23438 7.73438 9.23438H9.14062V6.42188H0.703125V14.8594H3.51562V16.2656C3.51562 17.0423 4.14516 17.6719 4.92188 17.6719C5.31 17.6719 5.66156 17.5144 5.91609 17.2598C6.17062 17.0053 6.32812 16.6537 6.32812 16.2656V14.8594H9.14062ZM9.14062 14.8594V17.6719H10.5469C11.3235 17.6719 11.9531 18.3015 11.9531 19.0781C11.9531 19.8548 11.3235 20.4844 10.5469 20.4844H9.14062V23.2969H17.5781V20.4844H18.9844C19.3725 20.4844 19.7241 20.3269 19.9786 20.0723C20.2406 19.8103 20.3995 19.4461 20.3902 19.0444C20.3723 18.2766 19.7245 17.6719 18.9558 17.6719H17.5781V14.8594H14.7656V13.4816C14.7656 12.7132 14.1611 12.0652 13.3929 12.0472C12.9915 12.0379 12.627 12.1971 12.3652 12.4589C12.1106 12.7134 11.9531 13.065 11.9531 13.4531V14.8594H9.14062ZM23.2969 0.703125V9.14062H20.4844V7.73438C20.4844 7.34625 20.3269 6.99469 20.0723 6.74016C19.8178 6.48562 19.4662 6.32812 19.0781 6.32812C18.3014 6.32812 17.6719 6.95766 17.6719 7.73438V9.14062H14.8594V6.32812H13.4531C13.065 6.32812 12.7134 6.17062 12.4589 5.91609C12.2044 5.66156 12.0469 5.31 12.0469 4.92188C12.0469 4.14516 12.6764 3.51562 13.4531 3.51562H14.8594V0.703125H23.2969Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </svg>
      );
    case "adaptability":
      return (
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6.32811 20.4375H0.703125V14.8125H6.32811V20.4375Z" stroke="#AD5151" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M16.375 6.16217C18.8364 7.63601 20.484 10.3287 20.484 13.4063C20.484 13.8863 20.444 14.3568 20.367 14.8149" stroke="#AD5151" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M15.8237 20.9055C14.6644 21.5051 13.3483 21.8438 11.9531 21.8438C9.79208 21.8438 7.82085 21.0314 6.32812 19.6953" stroke="#AD5151" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M3.67969 12C4.25845 8.55057 6.93013 5.81083 10.3443 5.13129" stroke="#AD5151" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M12 7.78125L8.48438 2.15627H15.5156L12 7.78125Z" stroke="#AD5151" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M23.2969 17.625C23.2969 19.1783 22.0377 20.4375 20.4844 20.4375C18.9311 20.4375 17.6719 19.1783 17.6719 17.625C17.6719 16.0717 18.9311 14.8125 20.4844 14.8125C22.0377 14.8125 23.2969 16.0717 23.2969 17.625Z" stroke="#AD5151" strokeMiterlimit="10" strokeWidth="1.5" />
        </svg>
      );
    case "transparency":
      return (
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8.31568 8.68552V23.0571H23.059V8.31396H8.31445" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.8" />
          <path d="M15.6868 8.31412V0.942383H0.943359V15.6857H8.31509" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.8" />
          <path d="M15.6868 0.942383V15.6857H0.943359" stroke="#AD5151" strokeWidth="1.8" />
        </svg>
      );
    case "client-centric-approach":
      return (
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clipRule="evenodd" d="M13.8487 16.2644C16.5208 17.0078 18.5371 19.3235 18.8393 22.1518C18.8449 22.2043 18.8394 22.2575 18.8232 22.3077C18.8069 22.358 18.7803 22.4042 18.7449 22.4435C18.7096 22.4828 18.6665 22.5142 18.6182 22.5357C18.57 22.5572 18.5178 22.5683 18.465 22.5683H5.53638C5.48355 22.5683 5.4313 22.5572 5.38304 22.5357C5.33479 22.5142 5.2916 22.4827 5.25629 22.4434C5.22098 22.4041 5.19434 22.3578 5.1781 22.3075C5.16186 22.2573 5.15638 22.2041 5.16203 22.1516C5.4658 19.3233 7.4825 17.0076 10.1537 16.2643C9.06895 15.627 8.33831 14.447 8.33831 13.1022C8.33831 11.0846 9.98302 9.43813 12.0007 9.43813C14.0202 9.43813 15.6648 11.0847 15.6648 13.1022C15.6648 14.4471 14.9341 15.6271 13.8487 16.2644Z" fill="#AD5151" fillRule="evenodd" stroke="#AD5151" strokeWidth="0.5" />
        </svg>
      );
    case "user-centric-design":
    case "quality-assurance":
    default:
      return (
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="#AD5151" strokeWidth="1.5" />
          <path d="M8 12L11 15L16 9" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
  }
}

export type MissionVisionValuesBlockProps = {
  title?: string;
  description?: string;
  values?: readonly {
    title: string;
    description: string;
    iconName: string;
  }[];
};

export type AboutValuesSectionProps = MissionVisionValuesBlockProps;

export function MissionVisionValuesBlock({
  title = aboutSectionCopy.valuesTitle,
  description = aboutSectionCopy.valuesDescription,
  values: customValues,
}: MissionVisionValuesBlockProps = {}) {
  const activeValues =
    customValues && customValues.length > 0 ? customValues : coreValues;

  return (
    <section className="theme-customization-services transparent bg-transparent pt-0 pb-20 max-[992px]:py-[50px]">
      <Container>
        <div data-aos="fade-up" className="mb-10 flex items-end justify-between gap-10 max-[992px]:mb-[30px] max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-2.5">
          <div className="shrink-0 max-w-[500px]">
            <h2 className="text-[35px] leading-[1.38] font-medium text-ink max-[992px]:text-[30px] max-[767px]:text-2xl">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-[600px] text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
              {description}
            </p>
          )}
        </div>

        <div className="wrapper grid grid-cols-3 gap-4 max-[1199px]:grid-cols-2 max-[767px]:flex max-[767px]:flex-col">
          {activeValues.map((value) => (
            <div
              className="box rounded-[20px] border border-[rgba(40,40,40,0.11)] bg-white p-[25px] max-[991px]:p-5"
              data-aos="fade-up"
              key={value.title}
            >
              <div className="icon mb-[15px] flex font-montserrat text-sm font-medium text-brand-red [&>svg]:size-10">
                <AboutValueIcon name={value.iconName} />
              </div>
              <h3 className="mb-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] text-ink max-[1199px]:text-[18px]">
                {value.title}
              </h3>
              <p className="font-sans text-sm font-normal leading-[24px] text-[#535353]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export const AboutValuesSection = MissionVisionValuesBlock;

export type AboutStorySectionProps = {
  title?: string;
  description?: string;
  caption?: string;
  videoId?: string;
  videoTitle?: string;
  poster?: string;
  posterAlt?: string;
  overlay?: string;
};

export function AboutStorySection({
  title = aboutStory.title,
  description = aboutStory.description,
  caption = aboutStory.caption,
  videoId = aboutStory.videoId,
  videoTitle = aboutStory.videoTitle,
  poster = aboutStory.poster,
  posterAlt = aboutStory.posterAlt,
  overlay = aboutStory.overlay,
}: AboutStorySectionProps = {}) {
  return (
    <section data-about="story" aria-labelledby="about-story-title" className="we-are-dyanamic-dreamz-sec py-20 max-[992px]:py-[50px]">
      <Container>
        <div
          data-aos="fade-up"
          className="-mx-[15px] flex items-center justify-between max-[992px]:flex-col max-[992px]:text-center"
        >
          <div className="w-[calc(35%-15px)] px-[15px] max-[1199px]:w-[calc(40%-15px)] max-[992px]:w-full max-[575px]:max-w-[290px]">
            <h2 id="about-story-title" className="text-[35px] leading-[49px] font-normal tracking-normal text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:mb-[15px] max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
              {title}
            </h2>
          </div>
          <div className="w-[calc(59%-15px)] px-[15px] max-[1199px]:w-[calc(60%-15px)] max-[992px]:w-full">
            <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">{description}</p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="hero-vide-wrap mt-[50px] h-[492px] max-[992px]:h-[350px] max-[767px]:mt-[30px] max-[767px]:h-[200px]"
        >
          <VideoModalClient
            videoId={videoId}
            videoTitle={videoTitle}
            poster={poster}
            posterAlt={posterAlt}
            caption={caption}
          />
        </div>
      </Container>
    </section>
  );
}

export const LifeHeroSection = MissionVisionValuesBlock;
export const LifeHiringSection = MissionVisionValuesBlock;
export const WorkCultureSection = MissionVisionValuesBlock;
export const ResourcesStorySection = MissionVisionValuesBlock;
