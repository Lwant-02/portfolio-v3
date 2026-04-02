"use client";

import { motion } from "framer-motion";

import { containerVariants, itemVariants } from "@/constant";
import { Timeline } from "../timeline";
import { certifications } from "@/data/certification";

export const Certifications = () => {
  return (
    <section className="min-h-screen w-full py-20" id="certifications">
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
          Certifications & Awards
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          Key achievements and recognized milestones in my career
        </motion.p>

        {/* Timeline */}
        <Timeline data={certifications} />
      </motion.div>
    </section>
  );
};
