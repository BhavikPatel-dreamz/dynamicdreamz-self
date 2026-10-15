import { AboutFoundersSection } from "@/components/sections/about/about-founders-section";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { AboutStorySection } from "@/components/sections/about/about-story-section";
import { AboutTeamSection } from "@/components/sections/about/about-team-section";
import { AboutTimelineSection } from "@/components/sections/about/about-timeline-section";
import { AboutValuesSection } from "@/components/sections/about/about-values-section";

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
