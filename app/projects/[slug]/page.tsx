import { redirect } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/data/project";
import { ProjectDetail } from "@/components/projects/project-detail";
import { Footer } from "@/components/footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Lwant`,
      description: project.description,
      type: "article",
      url: `/projects/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    redirect("/not-found");
  }

  return (
    <div className="w-full h-full">
      <ProjectDetail project={project} />
      <Footer />
    </div>
  );
}
