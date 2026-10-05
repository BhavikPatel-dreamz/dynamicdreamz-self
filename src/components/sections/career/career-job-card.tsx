import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import {
  careerApplicationPath,
  careerSectionCopy,
  type CareerJob,
  type CareerLocation,
} from "@/content/career";

type CareerJobCardProps = {
  job: CareerJob;
  location: CareerLocation;
};

export function CareerJobCard({ job, location }: CareerJobCardProps) {
  return (
    <div
      className="job-list-col relative z-0 flex items-center justify-between gap-[15px] rounded-[10px] border border-[#efefef] bg-white px-8 py-[22px] transition-all duration-300 hover:border-[#AD5151] hover:bg-[rgba(173,81,81,0.05)] max-[1199px]:px-5 max-[1199px]:py-5 max-[991px]:flex-col max-[991px]:items-start max-[991px]:gap-0 max-[991px]:shadow-[0_39px_50px_0_rgba(74,74,74,0.05)] max-[991px]:hover:bg-transparent"
      data-career="job-card"
    >
      <div className="job-vacancy absolute -top-3.5 left-[35px] rounded-[30px] bg-transparent max-[1199px]:left-5">
        <span className="m-px inline-block rounded-[50px] border border-[#AD5151] bg-[#AD5151] px-[15px] py-1 text-sm font-medium leading-normal text-white max-[767px]:py-0">
          {job.positions} {job.positions === 1 ? careerSectionCopy.position : careerSectionCopy.positions}
        </span>
      </div>

      <div className="job-position w-[32%] max-[991px]:w-full">
        <h3 className="m-0 flex items-center text-[18px] font-normal capitalize text-ink max-[1199px]:text-base max-[1199px]:leading-6 max-[991px]:mt-[30px] max-[991px]:mb-2.5 max-[991px]:text-[18px]">
          <Image
            alt={job.iconAlt ?? ""}
            className="mr-3.5 size-9 shrink-0 object-contain max-[991px]:min-w-0"
            height={36}
            src={job.icon}
            width={36}
          />
          <a
            aria-label={`View the ${job.title} job description (PDF)`}
            className="text-[#090909] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
            href={job.jobDescription}
            rel="noopener noreferrer"
            target="_blank"
          >
            {job.title}
          </a>
        </h3>
      </div>

      <div className="job-details-wrap flex w-[68%] items-center justify-end max-[991px]:w-full max-[991px]:flex-col max-[991px]:items-start max-[991px]:justify-start">
        <div className="job-details flex items-center max-[991px]:w-full max-[991px]:flex-col max-[991px]:items-start">
          <div className="job-col max-[991px]:w-full max-[991px]:py-5">
            <h4 className="m-0 font-montserrat text-base font-normal leading-6 text-[#090909]">
              {careerSectionCopy.jobDetails[0].label}
            </h4>
            <p className="mt-0 font-montserrat text-base font-medium leading-normal text-[#535353]">
              {job.experience}
            </p>
          </div>

          <div className="job-col ml-[30px] border-l border-[#efefef] pl-[30px] max-[1199px]:ml-5 max-[1199px]:pl-5 max-[991px]:ml-0 max-[991px]:w-full max-[991px]:border-t max-[991px]:border-l-0 max-[991px]:py-5 max-[991px]:pl-0">
            <h4 className="m-0 font-montserrat text-base font-normal leading-6 text-[#090909]">
              {careerSectionCopy.jobDetails[1].label}
            </h4>
            <p className="mt-0 font-montserrat text-base font-medium leading-normal text-[#535353]">
              {job.jobType}
            </p>
          </div>

          <div className="job-col ml-[30px] border-l border-[#efefef] pl-[30px] max-[1199px]:ml-5 max-[1199px]:pl-5 max-[991px]:ml-0 max-[991px]:w-full max-[991px]:border-t max-[991px]:border-l-0 max-[991px]:py-5 max-[991px]:pl-0">
            <h4 className="m-0 font-montserrat text-base font-normal leading-6 text-[#090909]">
              {careerSectionCopy.jobDetails[2].label}
            </h4>
            <p className="mt-0 font-montserrat text-base font-medium leading-normal text-[#535353]">
              {job.postedOn}
            </p>
          </div>
        </div>

        <div className="apply-btn ml-[63px] max-[1199px]:ml-5 max-[991px]:ml-0 max-[991px]:w-full">
          <ButtonLink
            className="max-[991px]:w-full max-[991px]:text-center"
            href={careerApplicationPath(job, location)}
            variant="primary"
          >
            {careerSectionCopy.applyNow}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
