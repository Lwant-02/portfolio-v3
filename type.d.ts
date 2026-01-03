import type { StaticImageData } from "next/image";

interface ProjectCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  link: string;
  extraLink?: string;
  date: string;
}
