"use client";

import { motion } from "motion/react";

import { containerVariants, images, itemVariants } from "@/constant";
import { ProjectCard } from "../project-card";

const testProject = {
  image: images.selectedProject,
  title: "LikDai (Shan Typing Tutor)",
  description:
    "LikDai – A modern and interactive typing tutor with support for Shan and English languages. Built for accuracy tracking, real-time feedback, and a smooth user experience.",
  link: "/projects",
  extraLink: "/projects",
  date: "Mar 2024 - Present",
};

export const SelectedProject = () => {
  return (
    <section className="min-h-screen w-full pb-32" id="projects">
      <motion.div
        className="w-full mx-auto space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-6xl font-bold tracking-tight"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Selected Project
        </motion.h2>

        {/* Project Showcase */}
        <ProjectCard {...testProject} />
      </motion.div>
    </section>
  );
};
