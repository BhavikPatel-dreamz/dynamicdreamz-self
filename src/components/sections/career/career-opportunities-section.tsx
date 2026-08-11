import { CareerJobCard } from "@/components/sections/career/career-job-card";
import { CareerLocationFilter } from "@/components/sections/career/career-location-filter";
import { CareerSectionHeading } from "@/components/sections/career/career-section-heading";
import { Container } from "@/components/ui/container";
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
        {careerJobs.map((job) => (
          <CareerJobCard job={job} location={location} key={job.slug} />
        ))}
      </div>
    ),
  }));

  return (
    <section
      className="py-20 max-[991px]:py-[50px]"
      data-career="opportunities"
      aria-labelledby="career-opportunities-title"
    >
      <Container className="min-[1200px]:!max-w-[1180px] min-[1440px]:!max-w-[1180px]">
        <CareerSectionHeading
          id="career-opportunities-title"
          title={currentOpportunities.title}
          description={currentOpportunities.description}
        />
        <CareerLocationFilter locations={careerLocations} jobLists={jobLists} />
      </Container>
    </section>
  );
}
