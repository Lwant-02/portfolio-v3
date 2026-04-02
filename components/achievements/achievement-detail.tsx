"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Calendar } from "lucide-react";

import { containerVariants, itemVariants } from "@/constant";
import { Button } from "../ui/button";
import { AchievementData } from "@/type";

interface AchievementDetailProps {
  achievement: AchievementData;
}

export const AchievementDetail = ({ achievement }: AchievementDetailProps) => {
  return (
    <section className="w-full pt-10 pb-32" id="achievement-detail">
      <motion.div
        className="w-full mx-auto space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <motion.div variants={itemVariants}>
          <Button asChild variant="outline" className="outline-btn group w-72">
            <Link href="/achievements" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              All Achievements
            </Link>
          </Button>
        </motion.div>

        {/* Category Badge */}
        <motion.div variants={itemVariants}>
          <span className="text-xs font-jetbrains-mono px-3 py-1.5 rounded-full bg-foreground text-blue-400 border border-blue-300/30">
            {achievement.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
          variants={itemVariants}
        >
          {achievement.title}
        </motion.h1>

        {/* Date */}
        <motion.div
          className="flex items-center gap-2 text-muted-foreground"
          variants={itemVariants}
        >
          <Calendar className="size-4 text-blue-400" />
          <span className="text-base font-jetbrains-mono">
            {achievement.date}
          </span>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full aspect-video rounded-md overflow-hidden border border-foreground shadow-sm"
          variants={itemVariants}
        >
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            loading="eager"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Description & Details */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            About This Achievement
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-jetbrains-mono">
            {achievement.description}
          </p>
          {achievement.details && achievement.details.length > 0 && (
            <ul className="space-y-4 pt-4">
              {achievement.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-muted-foreground text-sm space-y-1 md:text-lg font-jetbrains-mono"
                >
                  <span className="text-blue-400 mt-1.5 shrink-0">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};
