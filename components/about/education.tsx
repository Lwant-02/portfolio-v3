"use client";

import { motion } from "framer-motion";

import { containerVariants, experiences, itemVariants } from "@/constant";
import { Timeline } from "../timeline";

export const Education = () => {
  return (
    <section
      className="min-h-screen w-full pb-32 sm:pb-10 pt-10"
      id="experience"
    >
      <motion.div
        className="w-full mx-auto space-y-7"
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
          Education Journey
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          My education journey over the years
        </motion.p>

        {/* Timeline */}
        <Timeline data={experiences} />
      </motion.div>
    </section>
  );
};
