import { Footer } from "@/components/footer";
import { ExperienceTimeline } from "@/components/home/experience-timeline";
import { HomeHero } from "@/components/home/home-hero";
import { SelectedProject } from "@/components/home/selected-project";
import { Technologies } from "@/components/home/technologies";

export default function Page() {
  return (
    <div className="w-full h-full">
      {/* Hero  */}
      <HomeHero />

      {/* Selected Project */}
      <SelectedProject />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Technologies */}
      <Technologies />

      {/* Footer */}
      <Footer />
    </div>
  );
}
