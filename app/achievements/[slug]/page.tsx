import { redirect } from "next/navigation";
import type { Metadata } from "next";

import { achievements } from "@/constant";
import { AchievementDetail } from "@/components/achievements/achievement-detail";
import { Footer } from "@/components/footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return achievements.map((achievement) => ({
    slug: achievement.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const achievement = achievements.find((a) => a.slug === slug);

  if (!achievement) {
    return {
      title: "Achievement Not Found | Lwant",
    };
  }

  return {
    title: `${achievement.title} | Sai Naw Main | Lwant`,
    description: achievement.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const achievement = achievements.find((a) => a.slug === slug);

  if (!achievement) {
    redirect("/not-found");
  }

  return (
    <div className="w-full h-full">
      <AchievementDetail achievement={achievement} />
      <Footer />
    </div>
  );
}
