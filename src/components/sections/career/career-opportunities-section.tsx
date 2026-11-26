import { CareerJobCard } from "@/components/sections/career/career-job-card";
import { CareerLocationFilter } from "@/components/sections/career/career-location-filter";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import {
  careerJobs,
  careerLocations,
  currentOpportunities,
  type CareerJob,
  type CareerLocation,
} from "@/content/career";

export type CareerOpportunitiesSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  locations?: readonly CareerLocation[];
  jobs?: readonly CareerJob[];
};

export function CareerOpportunitiesSection({
  eyebrow = currentOpportunities.eyebrow,
  title = currentOpportunities.title,
  description = currentOpportunities.description,
  locations: customLocations,
  jobs: customJobs,
}: CareerOpportunitiesSectionProps = {}) {
  const activeLocations =
    customLocations && customLocations.length > 0 ? customLocations : careerLocations;
  const activeJobs = customJobs && customJobs.length > 0 ? customJobs : careerJobs;

  const jobLists = activeLocations.map((location) => ({
    location,
    content: (
      <div className="space-y-[37px]" data-job-location={location.slug}>
        {activeJobs
          .filter((job) => job.locations.includes(location.slug))
          .map((job) => (
            <CareerJobCard
              job={job}
              key={`${location.slug}-${job.slug}`}
              location={location}
            />
          ))}
      </div>
    ),
  }));

  return (
    <section
      aria-labelledby="career-opportunities-title"
      className="current-openings-sec py-20 max-[992px]:py-15 max-[768px]:py-10"
      data-career="opportunities"
      id="current-opportunities"
    >
      <Container>
        <SplitSectionHeading
          description={description}
          eyebrow={eyebrow}
          heading={title}
          headingId="career-opportunities-title"
          variant="left"
        />
        <CareerLocationFilter jobLists={jobLists} locations={activeLocations} />
      </Container>
    </section>
  );
}
