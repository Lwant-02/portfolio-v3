"use client";

import { motion } from "motion/react";

import { containerVariants, itemVariants, projects } from "@/constant";
import { ShowcaseCard } from "../showcase-card";

export const ProjectList = () => {
  return (
    <section className="w-full pb-32 pt-10" id="project-list">
      <motion.div
        className="w-full mx-auto space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div
          className="space-y-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            All Projects
          </h2>
          <p className="text-lg md:text-xl font-medium font-jetbrains-mono text-muted-foreground">
            Everything I've worked on, from personal to professional
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-24 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <ShowcaseCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  date={project.date}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
