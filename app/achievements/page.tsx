<<<<<<< HEAD
import { AchievementList } from "@/components/achievements/achievement-list";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Sai Naw Main | Lwant | Achievements",
  description:
    "Key milestones and accomplishments from my development journey.",
=======
export const metadata = {
  title: "Sai Naw Main | Lwant | Achievements",
  description: "Achievements Page",
>>>>>>> d8c45104db3169f836c789470fd3d938766f8ade
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
