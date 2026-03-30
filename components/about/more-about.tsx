"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  Code2,
  Music,
  Dumbbell,
  Sparkles,
  Rocket,
  Briefcase,
  FolderGit2,
  Award,
  Trophy,
} from "lucide-react";

import { containerVariants, itemVariants } from "@/constant";
import { cn } from "@/lib/utils";

// Quick stats data - Updated with real achievements
const quickStats = [
  {
    icon: <Briefcase className="size-6" />,
    value: "2+",
    label: "Years Experience",
    color: "text-blue-400",
  },
  {
    icon: <FolderGit2 className="size-6" />,
    value: "10+",
    label: "Projects Completed",
    color: "text-green-400",
  },
  {
    icon: <Award className="size-6" />,
    value: "5+",
    label: "Certificates Earned",
    color: "text-amber-400",
  },
  {
    icon: <Trophy className="size-6" />,
    value: "3+",
    label: "Hackathons Participated",
    color: "text-purple-400",
  },
];

// Personal interests data
const interests = [
  {
    icon: <Gamepad2 className="size-5" />,
    label: "Gaming",
    color: "text-purple-400",
  },
  {
    icon: <Code2 className="size-5" />,
    label: "Coding",
    color: "text-blue-400",
  },
  {
    icon: <Music className="size-5" />,
    label: "Music",
    color: "text-pink-400",
  },
  {
    icon: <Sparkles className="size-5" />,
    label: "New Tech",
    color: "text-cyan-400",
  },
  {
    icon: <Rocket className="size-5" />,
    label: "Building",
    color: "text-orange-400",
  },
  {
    label: "Sports",
    icon: <Dumbbell className="size-5" />,
    color: "text-green-400",
  },
];

export const MoreAbout = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden sm:py-0 py-10 flex flex-col justify-center">
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="flex flex-col gap-5 mb-10">
          <motion.h2
            className="text-3xl md:text-6xl font-bold tracking-tight"
            initial="hidden"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            More About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
          >
            Beyond the code
          </motion.p>
        </div>

        {/* Flex Column Layout: Text → Quick Stats → Things I Enjoy */}
        <div className="flex flex-col gap-16">
          {/* 1. Bio Text */}
          <motion.div
            className="w-full"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-muted-foreground font-jetbrains-mono leading-relaxed">
              Started coding in 2023 out of pure curiosity. Went from
              freelancing on Upwork to building real products at Pico
              Innovation. Now I spend my days crafting AI-powered tools and
              exploring whatever catches my interest—whether it's a new
              framework, a game, or just a random idea worth building.
            </p>
          </motion.div>

          {/* 2. Quick Stats Section */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl md:text-2xl font-semibold"
              variants={itemVariants}
            >
              Quick Stats
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-4 gap-4"
              variants={containerVariants}
            >
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col justify-center items-center gap-3 p-5 rounded-full border border-blue-300/30 bg-foreground"
                >
                  <div>
                    <div className="flex justify-center items-center gap-3">
                      <span className={cn(stat.color)}>{stat.icon}</span>
                      <p className="text-2xl md:text-3xl font-bold text-center">
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground font-jetbrains-mono">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3. Things I Enjoy Section */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl md:text-2xl font-semibold"
              variants={itemVariants}
            >
              Things I Enjoy
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-full border border-blue-300/30 bg-foreground"
                >
                  <span className={interest.color}>{interest.icon}</span>
                  <span className="text-sm font-medium font-jetbrains-mono">
                    {interest.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Quote/Philosophy */}
          <motion.div
            className="pt-8 border-t border-blue-300/30"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-muted-foreground font-jetbrains-mono italic">
              "The best ideas come from staying{" "}
              <span className="text-blue-400 not-italic font-medium">
                curious
              </span>{" "}
              and never stopping to{" "}
              <span className="text-blue-400 not-italic font-medium">
                build
              </span>
              ."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
