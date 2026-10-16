import { AboutFoundersSection } from "@/components/blocks/LeadershipTeamGridBlock";
import { AboutHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { AboutStorySection } from "@/components/blocks/MissionVisionValuesBlock";
import { AboutTeamSection } from "@/components/blocks/LeadershipTeamGridBlock";
import { AboutTimelineSection } from "@/components/blocks/CompanyMilestonesTimelineBlock";
import { AboutValuesSection } from "@/components/blocks/MissionVisionValuesBlock";

export function AboutPage() {
  return (
    <div>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutTimelineSection />
      <AboutFoundersSection />
      <AboutTeamSection />
      <AboutValuesSection />
    </div>
  );
}
