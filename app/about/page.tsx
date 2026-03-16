import { AboutHero } from "@/components/about/about-hero";
import { Education } from "@/components/about/education";
import { MoreAbout } from "@/components/about/more-about";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me – Background, Education & Journey",
  description:
    "Learn about Sai Naw Main (Lwant) — a full-stack developer with experience at Pico Innovation, building design systems, AI assistants, and interactive web apps.",
  alternates: {
    canonical: "/about",
  },
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

      <Footer />
    </div>
  );
}
