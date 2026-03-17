"use client";

import { motion } from "motion/react";

import { containerVariants, itemVariants } from "@/constant";
import { ShowcaseCard } from "../showcase-card";
import { achievements } from "@/data/achievement";

export const AchievementList = () => {
  return (
    <section className="w-full pb-32 pt-10" id="achievement-list">
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
            All Achievements
          </h2>
          <p className="text-lg md:text-xl font-medium font-jetbrains-mono text-muted-foreground">
            Highlights from my professional journey
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-24 grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <ShowcaseCard
                  image={achievement.image}
                  title={achievement.title}
                  description={achievement.description}
                  link={achievement.link}
                  date={achievement.date}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
