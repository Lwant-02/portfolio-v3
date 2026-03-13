import { AchievementList } from "@/components/achievements/achievement-list";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Sai Naw Main | Lwant | Achievements",
  description:
    "Key milestones and accomplishments from my development journey.",
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
