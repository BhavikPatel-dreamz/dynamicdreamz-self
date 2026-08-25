import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import {
  careerApplicationPath,
  careerSectionCopy,
  type CareerJob,
  type CareerLocation,
} from "@/content/career";
import { cn } from "@/lib/class-names";

type CareerJobCardProps = {
  job: CareerJob;
  location: CareerLocation;
};

export function CareerJobCard({ job, location }: CareerJobCardProps) {
  return (
    <article
      className="group/job relative z-0 flex items-center justify-between gap-[15px] rounded-[10px] border border-[#efefef] px-8 py-[22px] transition-all duration-300 max-[1199px]:px-5 max-[1199px]:py-5 max-[991px]:flex-col max-[991px]:items-start max-[991px]:gap-0 max-[991px]:shadow-[0_39px_50px_rgb(74_74_74/5%)]"
      data-career="job-card"
    >
      <span
        className="pointer-events-none absolute -inset-0.5 -z-20 rounded-[10px] bg-linear-to-r from-[#15c064] to-[#00d1ff] opacity-0 transition-opacity duration-300 group-hover/job:opacity-100 max-[991px]:hidden"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-[9px] bg-white transition-colors duration-300 group-hover/job:bg-[#f5fef9] max-[991px]:group-hover/job:bg-white"
        aria-hidden="true"
      />

      <div className="absolute top-[-14px] left-[35px] rounded-[30px] bg-linear-to-r from-[#15c064] to-[#00d1ff] max-[1199px]:left-5">
        <span className="m-px inline-block rounded-[50px] bg-white px-[15px] py-1 text-base leading-[19px] font-medium text-[#090909] max-[991px]:py-1 max-[991px]:leading-[30.4px] max-[767px]:py-0 max-[767px]:text-sm">
          {job.positions} {job.positions === 1 ? careerSectionCopy.position : careerSectionCopy.positions}
        </span>
      </div>

      <div className="w-[32%] max-[991px]:w-full">
        <h3 className="m-0 flex items-center text-[18px] leading-[28.8px] font-semibold text-ink capitalize max-[1199px]:text-base max-[1199px]:leading-6 max-[991px]:my-[10px] max-[991px]:mt-[30px] max-[991px]:text-[18px]">
          <Image
            className="mr-3.5 size-9 shrink-0 object-contain"
            src={job.icon}
            alt=""
            width={36}
            height={36}
          />
          <a
            className="text-[#252c15] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
            href={job.jobDescription}
            aria-label={`View the ${job.title} job description (PDF)`}
          >
            {job.title}
          </a>
        </h3>
      </div>

      <div className="flex w-[68%] items-center justify-end max-[991px]:w-full max-[991px]:flex-col max-[991px]:items-start max-[991px]:justify-start">
        <div className="flex items-center max-[991px]:w-full max-[991px]:flex-col max-[991px]:items-start">
          {careerSectionCopy.jobDetails.map((detail, index) => (
            <div
              className={cn(
                "max-[991px]:w-full max-[991px]:py-5",
                index > 0 &&
                  "ml-[30px] border-l border-[#efefef] pl-[30px] max-[1199px]:ml-5 max-[1199px]:pl-5 max-[991px]:ml-0 max-[991px]:border-t max-[991px]:border-l-0 max-[991px]:pl-0",
              )}
              key={detail.key}
            >
              <h4 className="m-0 text-[18px] leading-[25.92px] font-semibold text-ink max-[1199px]:text-base max-[1199px]:leading-[30.88px]">
                {detail.label}
              </h4>
              <p className="text-base leading-[30.88px] font-medium whitespace-nowrap text-muted">
                {job[detail.key]}
              </p>
            </div>
          ))}
        </div>

        <div className="ml-[63px] h-[54px] shrink-0 max-[1199px]:ml-5 max-[991px]:ml-0 max-[991px]:h-[52.4px] max-[991px]:w-full">
          <ButtonLink
            className="!min-h-[49px] !px-6 !py-[15px] !text-base !leading-[normal] max-[991px]:!min-h-[42px] max-[991px]:w-full max-[991px]:!py-3 max-[991px]:!text-sm"
            href={careerApplicationPath(job, location)}
            variant="primary"
          >
            {careerSectionCopy.applyNow}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
