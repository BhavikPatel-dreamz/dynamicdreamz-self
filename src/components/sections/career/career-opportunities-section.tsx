import { CareerJobCard } from "@/components/sections/career/career-job-card";
import { CareerLocationFilter } from "@/components/sections/career/career-location-filter";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import {
  careerJobs,
  careerLocations,
  currentOpportunities,
} from "@/content/career";

export function CareerOpportunitiesSection() {
  const jobLists = careerLocations.map((location) => ({
    location,
    content: (
      <div className="space-y-[37px]" data-job-location={location.slug}>
        {careerJobs
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
      className="current-openings-sec py-20 max-[991px]:py-[50px]"
      data-career="opportunities"
      id="current-opportunities"
    >
      <Container>
        <SplitSectionHeading
          description={currentOpportunities.description}
          eyebrow={currentOpportunities.eyebrow}
          heading={currentOpportunities.title}
          headingId="career-opportunities-title"
          variant="left"
        />
        <CareerLocationFilter jobLists={jobLists} locations={careerLocations} />
      </Container>
    </section>
  );
}
