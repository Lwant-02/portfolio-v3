import { ProjectList } from "@/components/projects/project-list";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Design Systems, AI Apps & More",
  description:
    "Explore my projects — from design systems and AI assistants to typing tutors and PDF tools. Built with Next.js, React, TypeScript, and modern web technologies.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Page() {
  return (
    <div className="w-full h-full">
      {/* Project List */}
      <ProjectList />

      {/* Footer */}
      <Footer />
    </div>
  );
}
