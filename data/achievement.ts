import { images } from "@/constant";
import { AchievementData } from "@/type";

export const achievements: AchievementData[] = [
  {
    slug: "reusable-components",
    image: images.selectedProject,
    title: "Built 25+ Reusable Components",
    description:
      "Designed and documented a shared library of 25+ reusable UI components at Pico Innovation, improving code consistency and accelerating development across the team.",
    link: "/achievements/reusable-components",
    date: "2025",
    category: "Engineering",
  },
  {
    slug: "intern-to-part-time",
    image: images.selectedProject,
    title: "Promoted from Intern to Part-Time",
    description:
      "Recognized for strong contributions during internship and promoted to a part-time developer role at Pico Innovation, continuing to lead frontend development efforts.",
    link: "/achievements/intern-to-part-time",
    date: "2025",
    category: "Career",
  },
  {
    slug: "freelance-upwork",
    image: images.selectedProject,
    title: "Freelance Projects on Upwork",
    description:
      "Successfully completed multiple freelance frontend projects on Upwork and with local clients, building responsive layouts and clean interfaces from real client requirements.",
    link: "/achievements/freelance-upwork",
    date: "2023",
    category: "Freelancing",
  },
];
