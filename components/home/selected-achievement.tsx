"use client";

import { motion } from "motion/react";

import { containerVariants, itemVariants, testProject } from "@/constant";
import { ShowcaseCard } from "../showcase-card";

export const SelectedAchievement = () => {
  return (
    <section
      className="min-h-screen w-full pb-32 flex justify-center items-center"
      id="projects"
    >
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
          Signature Milestone
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          Some of my achievements on my journey
        </motion.p>

        {/* Project Showcase */}
        <ShowcaseCard {...testProject} />
      </motion.div>
    </section>
  );
};
