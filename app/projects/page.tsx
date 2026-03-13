import { ProjectList } from "@/components/projects/project-list";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Sai Naw Main | Lwant | Projects",
  description:
    "Explore my projects — from design systems and AI assistants to typing tutors and PDF tools.",
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
