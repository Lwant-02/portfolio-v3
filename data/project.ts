import { images } from "@/constant";
import { ProjectData } from "@/type";

export const projects: ProjectData[] = [
  {
    slug: "likdai",
    image: images.selectedProject,
    title: "LikDai (Shan Typing Tutor)",
    description:
      "A modern and interactive typing tutor with support for Shan and English languages. Built for accuracy tracking, real-time feedback, and a smooth user experience.",
    link: "/projects/likdai",
    date: "Mar 2024 - Present",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "pica-chat",
    image: images.selectedProject,
    title: "Pica Chat",
    description:
      "A conversational AI assistant built with Next.js. Designed to feel simple, fast, and intuitive with a clean frontend and real-time AI responses.",
    link: "/projects/pica-chat",
    date: "Oct 2025 - Present",
    tags: ["Next.js", "AI SDK", "TypeScript"],
  },
  {
    slug: "mijnui-design-system",
    image: images.selectedProject,
    title: "MijnUI Design System",
    description:
      "A shared library of 25+ reusable components with full documentation. Built to streamline design workflows and ensure consistent UI across projects.",
    link: "/projects/mijnui-design-system",
    date: "Jan 2025 - Sep 2025",
    tags: ["React", "Storybook", "TypeScript"],
  },
  {
    slug: "pdf-editor",
    image: images.selectedProject,
    title: "PDF Editor",
    description:
      "An in-house PDF editor featuring rich-text editing with Tiptap, annotation tools, and document management capabilities.",
    link: "/projects/pdf-editor",
    date: "2025",
    tags: ["React", "Tiptap", "PDF.js"],
  },
];
