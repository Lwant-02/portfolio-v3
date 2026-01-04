import type { StaticImageData } from "next/image";

interface ShowcaseCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  link: string;
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
