import { AboutHero } from "@/components/about/about-hero";
import { Education } from "@/components/about/education";
import { MoreAbout } from "@/components/about/more-about";

export const metadata = {
  title: "Sai Naw Main | Lwant | About",
  description: "About Page",
};

export default function Page() {
  return (
    <div className="w-full h-full">
      {/* Hero  */}
      <AboutHero />

      {/* More About Me */}
      <MoreAbout />

      {/* Education */}
      <Education />
    </div>
  );
}
