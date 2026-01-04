import { Footer } from "@/components/footer";
import { Contact } from "@/components/home/contact";
import { Contribution } from "@/components/home/contribution";
import { ExperienceTimeline } from "@/components/home/experience-timeline";
import { HomeHero } from "@/components/home/home-hero";
import { SelectedAchievement } from "@/components/home/selected-achievement";
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

      {/* Selected Achievement */}
      <SelectedAchievement />

      {/* Technologies */}
      <Technologies />

      {/* Contribution */}
      <Contribution />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
