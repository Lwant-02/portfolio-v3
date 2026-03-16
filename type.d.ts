import type { StaticImageData } from "next/image";

interface ShowcaseCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  link?: string;
  extraLink?: string;
  date: string;
}

interface TimelineData {
  year: string;
  roles: {
    title: string;
    organization: string;
    dateRange: string;
    description: string;
  }[];
}

interface TimelineProps {
  data: TimelineData[];
}

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface MessageType {
  role: "user" | "assistant";
  content: string;
}

interface DailyLimit {
  date: string;
  count: number;
}

interface ProjectData {
  slug: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  link: string;
  date: string;
  tags: string[];
}

interface AchievementData {
  slug: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  link: string;
  date: string;
  category: string;
}
