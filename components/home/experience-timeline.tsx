"use client";

import { motion } from "motion/react";

import { containerVariants, itemVariants } from "@/constant";
import { Timeline } from "../timeline";
import { experiences } from "@/data/experience";

export const ExperienceTimeline = () => {
  return (
    <section
      className="min-h-screen w-full pb-32 flex justify-center items-center"
      id="experience"
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
          initial="hidden"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          Experience Timeline
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          My professional journey over the years
        </motion.p>

        {/* Timeline */}
        <Timeline data={experiences} />
      </motion.div>
    </section>
  );
};
