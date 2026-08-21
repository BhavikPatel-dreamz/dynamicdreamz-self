"use client";

import { useId, useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { CaseStudyItem } from "@/types/case-study";

type CaseStudiesListingProps = {
  content: {
    filter: {
      technologies: readonly string[];
      industries: readonly string[];
    };
    items: readonly CaseStudyItem[];
    sectionTitle: {
      heading: string;
      description: string;
    };
  };
};

const ITEMS_PER_PAGE = 9;

export function CaseStudiesListing({ content }: CaseStudiesListingProps) {
  const { filter, items, sectionTitle } = content;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);

  const techDropdownRef = useRef<HTMLDivElement>(null);
  const industryDropdownRef = useRef<HTMLDivElement>(null);
  const listingTopRef = useRef<HTMLDivElement>(null);

  const searchInputId = useId();
  const techListboxId = useId();
  const industryListboxId = useId();

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        techDropdownRef.current &&
        !techDropdownRef.current.contains(e.target as Node)
      ) {
        setTechDropdownOpen(false);
      }
      if (
        industryDropdownRef.current &&
        !industryDropdownRef.current.contains(e.target as Node)
      ) {
        setIndustryDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter((item: CaseStudyItem) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.technology.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTech =
        !selectedTech ||
        item.technology.toLowerCase() === selectedTech.toLowerCase();

      const matchesIndustry =
        !selectedIndustry ||
        item.industry.toLowerCase() === selectedIndustry.toLowerCase();

      return matchesSearch && matchesTech && matchesIndustry;
    });
  }, [items, searchQuery, selectedTech, selectedIndustry]);

  // Total pages
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
  const activePage = Math.min(currentPage, totalPages);

  // Paginated items
  const paginatedItems = useMemo(() => {
    const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, activePage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleTechSelect = (tech: string) => {
    setSelectedTech(tech);
    setCurrentPage(1);
    setTechDropdownOpen(false);
  };

  const handleIndustrySelect = (ind: string) => {
    setSelectedIndustry(ind);
    setCurrentPage(1);
    setIndustryDropdownOpen(false);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    listingTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="cs-listing-sec !p-0" ref={listingTopRef}>
      {/* Filter Section */}
      <div className="cs-filter-main">
        <Container className="min-[1200px]:max-w-[1140px] min-[1300px]:!max-w-[1240px]">
          <div className="mx-auto max-w-[1170px] py-10 max-[767px]:py-6">
            <div className="cs-filter grid grid-cols-[minmax(260px,1fr)_210px_245px_auto] items-center gap-3 rounded-[16px] border border-[rgba(40,40,40,0.07)] bg-white p-[12px_14px] shadow-[0_8px_30px_rgba(40,40,40,0.035)] max-[991px]:grid-cols-3 max-[991px]:gap-5 max-[767px]:grid-cols-1">
              {/* Search Bar */}
              <div className="cs-search relative w-full max-[991px]:col-span-3 max-[767px]:col-span-1">
                <input
                  id={searchInputId}
                  type="search"
                  className="h-[50px] w-full rounded-[5px] border border-[rgba(40,40,40,0.12)] bg-white pl-11 pr-4 font-sans text-[13px] text-[#090909] placeholder:text-[#777] focus:border-[#090909] focus:outline-none"
                  placeholder="Search case studies…"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  aria-label="Search case studies"
                />
                <svg
                  className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#777]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>
              </div>

              {/* Technology Dropdown */}
              <div ref={techDropdownRef} className="relative min-w-[190px] max-[767px]:w-full">
                <button
                  type="button"
                  className="dropdown_menu flex h-[50px] w-full cursor-pointer items-center justify-between rounded-[5px] border border-[#efefef] bg-[rgba(254,254,254,0.93)] px-4 py-3 font-montserrat text-[13px] font-medium text-[#090909] capitalize select-none focus:outline-none max-[767px]:text-[14px]"
                  onClick={() => {
                    setTechDropdownOpen((prev) => !prev);
                    setIndustryDropdownOpen(false);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={techDropdownOpen}
                  aria-controls={techListboxId}
                  aria-label="Filter by technology"
                >
                  <span className="truncate">
                    {selectedTech || "Technology"}
                  </span>
                  <svg
                    className={`size-3 shrink-0 text-[#090909] transition-transform duration-300 ${
                      techDropdownOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {techDropdownOpen && (
                  <ul
                    id={techListboxId}
                    className="dropdown_menu_item absolute top-[calc(100%+5px)] left-0 z-30 max-h-[300px] w-full overflow-y-auto rounded-[5px] border border-[#efefef] bg-white py-3 shadow-[2px_6px_19px_0_rgba(0,0,0,0.08)]"
                    role="listbox"
                  >
                    <li
                      className={`cursor-pointer px-4 py-2.5 font-sans text-[14px] capitalize transition-colors hover:bg-[#f4f4f4] ${
                        selectedTech === ""
                          ? "bg-[#f4f4f4] font-semibold text-[#090909]"
                          : "font-normal text-[#090909]"
                      }`}
                      onClick={() => handleTechSelect("")}
                      role="option"
                      aria-selected={selectedTech === ""}
                    >
                      Technology
                    </li>
                    {filter.technologies.map((tech) => (
                      <li
                        key={tech}
                        className={`cursor-pointer px-4 py-2.5 font-sans text-[14px] capitalize transition-colors hover:bg-[#f4f4f4] ${
                          selectedTech === tech
                            ? "bg-[#f4f4f4] font-semibold text-[#090909]"
                            : "font-normal text-[#090909]"
                        }`}
                        onClick={() => handleTechSelect(tech)}
                        role="option"
                        aria-selected={selectedTech === tech}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Industry Dropdown */}
              <div ref={industryDropdownRef} className="relative min-w-[190px] max-[767px]:w-full">
                <button
                  type="button"
                  className="dropdown_menu flex h-[50px] w-full cursor-pointer items-center justify-between rounded-[5px] border border-[#efefef] bg-[rgba(254,254,254,0.93)] px-4 py-3 font-montserrat text-[13px] font-medium text-[#090909] capitalize select-none focus:outline-none max-[767px]:text-[14px]"
                  onClick={() => {
                    setIndustryDropdownOpen((prev) => !prev);
                    setTechDropdownOpen(false);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={industryDropdownOpen}
                  aria-controls={industryListboxId}
                  aria-label="Filter by industry"
                >
                  <span className="truncate">
                    {selectedIndustry || "Industry"}
                  </span>
                  <svg
                    className={`size-3 shrink-0 text-[#090909] transition-transform duration-300 ${
                      industryDropdownOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {industryDropdownOpen && (
                  <ul
                    id={industryListboxId}
                    className="dropdown_menu_item absolute top-[calc(100%+5px)] left-0 z-30 max-h-[300px] w-full overflow-y-auto rounded-[5px] border border-[#efefef] bg-white py-3 shadow-[2px_6px_19px_0_rgba(0,0,0,0.08)]"
                    role="listbox"
                  >
                    <li
                      className={`cursor-pointer px-4 py-2.5 font-sans text-[14px] capitalize transition-colors hover:bg-[#f4f4f4] ${
                        selectedIndustry === ""
                          ? "bg-[#f4f4f4] font-semibold text-[#090909]"
                          : "font-normal text-[#090909]"
                      }`}
                      onClick={() => handleIndustrySelect("")}
                      role="option"
                      aria-selected={selectedIndustry === ""}
                    >
                      Industry
                    </li>
                    {filter.industries.map((ind) => (
                      <li
                        key={ind}
                        className={`cursor-pointer px-4 py-2.5 font-sans text-[14px] capitalize transition-colors hover:bg-[#f4f4f4] ${
                          selectedIndustry === ind
                            ? "bg-[#f4f4f4] font-semibold text-[#090909]"
                            : "font-normal text-[#090909]"
                        }`}
                        onClick={() => handleIndustrySelect(ind)}
                        role="option"
                        aria-selected={selectedIndustry === ind}
                      >
                        {ind}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Case Studies Count */}
              <div className="cs-count text-right font-montserrat text-[12px] font-semibold text-[#090909] whitespace-nowrap max-[991px]:col-span-3 max-[991px]:text-center max-[767px]:col-span-1">
                {filteredItems.length} case studies shown
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Listing Section */}
      <div className="cs-main-wrapp bg-[#eff4ef] py-20 max-[991px]:py-[50px]">
        <Container className="min-[1200px]:max-w-[1140px] min-[1300px]:!max-w-[1240px]">
          {/* Section Title */}
          <div className="cs-section-title mb-10 flex flex-wrap items-center justify-between max-[991px]:mb-[30px]">
            <div className="title w-[44%] max-[1399px]:w-[35%] max-[1199px]:w-[36%] max-[991px]:w-full">
              <h2 className="m-0 font-montserrat text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-[#090909] max-[1199px]:text-[28px] max-[1199px]:leading-normal max-[991px]:mb-2.5 max-[767px]:text-[24px] max-[767px]:leading-[32px]">
                {sectionTitle.heading}
              </h2>
            </div>
            <div className="text w-[49%] max-[1399px]:w-[56%] max-[1199px]:w-[51%] max-[991px]:w-full">
              <p className="m-0 font-sans text-base font-medium leading-[30.4px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-[26px]">
                {sectionTitle.description}
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          {paginatedItems.length === 0 ? (
            <div className="rounded-[20px] bg-white p-12 text-center text-lg text-[#535353]">
              No case studies match your search criteria. Try adjusting your
              search or filter.
            </div>
          ) : (
            <div className="cs-listing-main -mb-5 flex flex-wrap justify-between max-[991px]:mb-0">
              {paginatedItems.map((item: CaseStudyItem) => (
                <article
                  key={item.slug}
                  className="cs-listing-row mb-5 flex w-[calc(50%-10px)] flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-[991px]:mb-[30px] max-[991px]:w-full"
                >
                  <div className="cs-wrapper flex h-full flex-col">
                    {/* Image */}
                    <div className="cs-col-left w-full">
                      <div className="cs_list_img relative w-full overflow-hidden pb-[50%]">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 991px) 100vw, (max-width: 1300px) 50vw, 610px"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="cs-col-right flex flex-grow flex-col justify-between p-[30px] max-[1199px]:p-5 max-[767px]:p-[15px]">
                      <div className="cs-text flex h-full flex-col justify-between">
                        <div className="cs-title">
                          <Link href={item.href} className="group/title block">
                            {/* Categories / Tags */}
                            <div className="cs-cate-wrapp mb-2.5 flex flex-wrap items-center">
                              {item.technology && (
                                <span className="relative inline-block font-montserrat text-[10px] font-bold tracking-[0.8px] text-[#d92128] uppercase not-last:mr-2.5 not-last:pr-2.5 not-last:after:absolute not-last:after:top-1/2 not-last:after:right-0 not-last:after:size-[3px] not-last:after:-translate-y-1/2 not-last:after:rounded-full not-last:after:bg-[#d92128] not-last:after:content-['']">
                                  {item.technology}
                                </span>
                              )}
                              {item.industry && (
                                <span className="relative inline-block font-montserrat text-[10px] font-bold tracking-[0.8px] text-[#d92128] uppercase">
                                  {item.industry}
                                </span>
                              )}
                            </div>

                            {/* Title */}
                            <h2 className="mb-2.5 font-montserrat text-[20px] font-semibold leading-[28.8px] text-[#090909] transition-colors duration-200 group-hover/title:text-[#d92128] max-[767px]:text-[20px]">
                              {item.title}
                            </h2>
                          </Link>
                          {/* Excerpt */}
                          <p className="m-0 font-sans text-[13px] font-medium leading-[1.75] text-[#535353] max-[767px]:text-[14px] max-[767px]:leading-[26.6px]">
                            {item.excerpt}
                          </p>
                        </div>

                        {/* CTA Button */}
                        <div className="cs-visit mt-[23px] flex items-center">
                          <Link
                            href={item.href}
                            className="group/btn relative z-1 inline-flex min-h-[52px] min-w-[166px] cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border-2 border-brand-red bg-transparent px-6 py-[13px] text-center font-montserrat text-base font-bold uppercase text-brand-red transition-all duration-600 hover:text-white max-[1199px]:min-w-0 max-[1199px]:px-6 max-[1199px]:py-3.5 max-[1199px]:text-sm max-[767px]:w-full"
                          >
                            <span
                              className="absolute inset-0 -left-full -z-1 block h-full w-full rounded-[30px] bg-brand-red transition-all duration-600 group-hover/btn:left-0"
                              aria-hidden="true"
                            />
                            <span className="relative z-1">Case study</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="cus-pagination mt-[42px] flex w-full items-center justify-center gap-1"
              aria-label="Case studies pagination"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`page-numbers flex size-[34px] cursor-pointer items-center justify-center rounded-[6px] font-montserrat text-[16px] font-medium leading-[21px] tracking-[0.48px] transition-colors ${
                      activePage === pageNum
                        ? "current bg-[#090909] text-white"
                        : "text-[#535353] hover:bg-black/5"
                    }`}
                    aria-current={activePage === pageNum ? "page" : undefined}
                  >
                    {pageNum}
                  </button>
                ),
              )}

              {activePage < totalPages && (
                <button
                  type="button"
                  onClick={() => handlePageChange(activePage + 1)}
                  className="page-numbers next flex size-[34px] cursor-pointer items-center justify-center rounded-[6px] text-[#535353] transition-colors hover:bg-black/5"
                  aria-label="Next page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8.8L3.6 5.2L0 1.6L1.2 0.4L6 5.2L1.2 10L0 8.8Z"
                      fill="#252C15"
                    />
                  </svg>
                </button>
              )}
            </nav>
          )}
        </Container>
      </div>
    </div>
  );
}
