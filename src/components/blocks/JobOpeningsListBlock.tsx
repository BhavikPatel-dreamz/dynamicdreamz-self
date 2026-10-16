"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  careerApplicationPath,
  careerJobs,
  careerLocations,
  careerSectionCopy,
  currentOpportunities,
  type CareerJob,
  type CareerLocation,
} from "@/content/career";

export type JobOpeningsListBlockProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export type CareerOpportunitiesSectionProps = JobOpeningsListBlockProps;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`absolute top-1/2 right-4 h-1.5 w-2.5 -translate-y-1/2 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      height="6"
      viewBox="0 0 10 6"
      width="10"
    >
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function CareerJobCard({ job, location }: { job: CareerJob; location: CareerLocation }) {
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
            <h4 className="m-0 font-display text-base font-normal leading-6 text-[#090909]">
              {careerSectionCopy.jobDetails[0].label}
            </h4>
            <p className="mt-0 font-montserrat text-base font-medium leading-normal text-[#535353]">
              {job.experience}
            </p>
          </div>

          <div className="job-col ml-[30px] border-l border-[#efefef] pl-[30px] max-[1199px]:ml-5 max-[1199px]:pl-5 max-[991px]:ml-0 max-[991px]:w-full max-[991px]:border-t max-[991px]:border-l-0 max-[991px]:py-5 max-[991px]:pl-0">
            <h4 className="m-0 font-display text-base font-normal leading-6 text-[#090909]">
              {careerSectionCopy.jobDetails[1].label}
            </h4>
            <p className="mt-0 font-montserrat text-base font-medium leading-normal text-[#535353]">
              {job.jobType}
            </p>
          </div>

          <div className="job-col ml-[30px] border-l border-[#efefef] pl-[30px] max-[1199px]:ml-5 max-[1199px]:pl-5 max-[991px]:ml-0 max-[991px]:w-full max-[991px]:border-t max-[991px]:border-l-0 max-[991px]:py-5 max-[991px]:pl-0">
            <h4 className="m-0 font-display text-base font-normal leading-6 text-[#090909]">
              {careerSectionCopy.jobDetails[2].label}
            </h4>
            <p className="mt-0 font-montserrat text-base font-medium leading-normal text-[#535353]">
              {job.postedOn}
            </p>
          </div>
        </div>

        <div className="apply-btn ml-[63px] max-[1199px]:ml-5 max-[991px]:ml-0 max-[991px]:w-full">
          <Link
            className="inline-flex min-h-[46px] items-center justify-center rounded-[30px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-black max-[991px]:w-full max-[991px]:text-center"
            href={careerApplicationPath(job, location)}
          >
            {careerSectionCopy.applyNow}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function JobOpeningsListBlock({
  eyebrow = currentOpportunities.eyebrow,
  title = currentOpportunities.title,
  description = currentOpportunities.description,
}: JobOpeningsListBlockProps = {}) {
  const [selectedSlug, setSelectedSlug] = useState(careerLocations[0]?.slug ?? "surat");
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedLocation =
    careerLocations.find((location) => location.slug === selectedSlug) ?? careerLocations[0];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function openMenu() {
    setIsOpen(true);
    requestAnimationFrame(() => {
      const selectedIndex = careerLocations.findIndex(
        (location) => location.slug === selectedSlug,
      );
      optionRefs.current[Math.max(selectedIndex, 0)]?.focus();
    });
  }

  function handleOptionKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    optionIndex: number,
  ) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (optionIndex + direction + careerLocations.length) % careerLocations.length;
      optionRefs.current[nextIndex]?.focus();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      rootRef.current?.querySelector<HTMLButtonElement>("[data-location-toggle]")?.focus();
    }
  }

  const filteredJobs = careerJobs.filter((job) => job.locations.includes(selectedLocation.slug));

  return (
    <section
      aria-labelledby="career-opportunities-title"
      className="current-openings-sec py-20 max-[991px]:py-[50px]"
      data-career="opportunities"
      id="current-opportunities"
    >
      <Container>
        <div data-aos="fade-up" className="mb-10 flex items-end justify-between gap-10 max-[992px]:mb-[30px] max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-2.5">
          <div className="shrink-0 max-w-[500px]">
            {eyebrow && (
              <div className="mb-4 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-brand-red" />
                <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2 id="career-opportunities-title" className="text-[35px] leading-[1.38] font-medium text-ink max-[992px]:text-[30px] max-[767px]:text-2xl">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-[600px] text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
              {description}
            </p>
          )}
        </div>

        <div className="current-openings-wrap mt-10 max-[767px]:mt-6">
          <div
            data-aos="fade-up"
            className="filter-location relative z-1 pb-7 text-right max-[767px]:pt-[30px] max-[767px]:pb-[43px]"
          >
            <div
              className="dropdown_menu relative inline-block min-w-[149px] text-left max-[767px]:w-full"
              ref={rootRef}
            >
              <button
                aria-controls="career-location-menu"
                aria-expanded={isOpen}
                aria-haspopup="menu"
                className="relative block h-[45px] w-full cursor-pointer rounded-[5px] border border-[#efefef] bg-[rgba(254,254,254,0.93)] py-3 pr-8 pl-4 text-left font-montserrat text-sm font-medium leading-[normal] text-[#090909] capitalize"
                data-location-toggle
                onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
                onKeyDown={(event) => {
                  if (!isOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
                    event.preventDefault();
                    openMenu();
                  }
                }}
                type="button"
              >
                <span>{selectedLocation.label}</span>
                <ChevronIcon open={isOpen} />
              </button>

              <div
                className={`absolute top-[calc(100%+5px)] left-0 z-30 grid w-full transition-[grid-template-rows,opacity,visibility] duration-300 ${
                  isOpen
                    ? "visible grid-rows-[1fr] opacity-100"
                    : "invisible grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul
                    aria-label="Choose job location"
                    className="dropdown_menu_item rounded-[5px] border border-[#efefef] bg-white py-3 shadow-[2px_6px_19px_0_rgba(0,0,0,0.08)]"
                    id="career-location-menu"
                    role="menu"
                  >
                    {careerLocations.map((location, index) => (
                      <li key={location.slug} role="none">
                        <button
                          aria-checked={location.slug === selectedSlug}
                          className="block w-full cursor-pointer border-0 bg-white px-3 py-2 text-left font-montserrat text-base font-medium leading-[normal] text-[#090909] capitalize transition-colors duration-300 hover:bg-[#f4f4f4] focus-visible:bg-[#f4f4f4]"
                          onClick={() => {
                            setSelectedSlug(location.slug);
                            setIsOpen(false);
                          }}
                          onKeyDown={(event) => handleOptionKeyDown(event, index)}
                          ref={(element) => {
                            optionRefs.current[index] = element;
                          }}
                          role="menuitemradio"
                          type="button"
                        >
                          {location.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            aria-label={`${selectedLocation.label} current opportunities`}
            aria-live="polite"
            className="job-listing-main mb-[37px]"
            role="region"
          >
            <div className="space-y-[37px]" data-job-location={selectedLocation.slug}>
              {filteredJobs.map((job) => (
                <CareerJobCard
                  job={job}
                  key={`${selectedLocation.slug}-${job.slug}`}
                  location={selectedLocation}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export const CareerOpportunitiesSection = JobOpeningsListBlock;
