import { AchievementList } from "@/components/achievements/achievement-list";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements – Milestones & Accomplishments",
  description:
    "Key milestones and accomplishments from my development journey — from building 25+ reusable components to career growth at Pico Innovation and freelance success.",
  alternates: {
    canonical: "/achievements",
  },
};

export default function Page() {
  return (
    <div className="w-full h-full">
      {/* Achievement List */}
      <AchievementList />

      {/* Footer */}
      <Footer />
    </div>
  );
}
