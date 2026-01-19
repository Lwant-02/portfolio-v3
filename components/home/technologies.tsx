"use client";

import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiJest,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandRadixUi } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { containerVariants, itemVariants } from "@/constant";
import { Technology } from "@/type";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-blue-300/30 bg-foreground hover:bg-foreground/90 cursor-pointer hover:border-blue-300/50 transition-color duration-300"
    >
      <div style={{ color: technology.color }}>{technology.icon}</div>
      <p className="text-base font-medium ">{technology.name}</p>
    </motion.div>
  );
};

export const Technologies = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const frontendTechnologies: Technology[] = [
    {
      name: "HTML",
      icon: <SiHtml5 className="size-6" />,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="size-6" />,
      color: "#1572B6",
    },
    {
      name: "React",
      icon: <SiReact className="w-6 h-6" />,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-6 h-6" />,
      color: theme === "dark" ? "#ffffff" : "#000000",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="size-6" />,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-6 h-6" />,
      color: "#3178C6",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="w-6 h-6" />,
      color: "#06B6D4",
    },
    {
      name: "Radix UI",
      icon: <TbBrandRadixUi className="w-6 h-6" />,
      color: theme === "dark" ? "#ffffff" : "#161618",
    },
    {
      name: "Shadcn UI",
      icon: <SiShadcnui className="w-6 h-6" />,
      color: theme === "dark" ? "#ffffff" : "#161618",
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="w-6 h-6" />,
      color: "#FF0055",
    },
    {
      name: "Redux",
      icon: <SiRedux className="w-6 h-6" />,
      color: "#764ABC",
    },
    {
      name: "Zustand",
      icon: (
        <div className="w-6 h-6 flex items-center justify-center text-xl font-bold">
          🐻
        </div>
      ),
      color: "#FFD700",
    },
  ];

  const backendTechnologies: Technology[] = [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-6 h-6" />,
      color: "#3ECF8E",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="w-6 h-6" />,
      color: "#3772FF",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-6 h-6" />,
      color: "#3ECF8E",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-6 h-6" />,
      color: "#00758F",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-6 h-6" />,
      color: "#336791",
    },
    {
      name: "Supabase",
      icon: <RiSupabaseFill className="w-6 h-6" />,
      color: "#3ECF8E",
    },
    {
      name: "Redis",
      icon: <SiRedis className="w-6 h-6" />,
      color: "#D00000",
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="w-6 h-6" />,
      color: "#2D3748",
    },
    {
      name: "Jest",
      icon: <SiJest className="w-6 h-6" />,
      color: "#C21325",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      className="min-h-screen w-full flex justify-center items-center pb-20 sm:pb-0"
      id="technologies"
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
          Technologies
        </motion.h2>

        {/* Technology Grid */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          Frontend Stacks
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {frontendTechnologies.map((tech, index) => (
            <TechnologyCard key={index} technology={tech} />
          ))}
        </motion.div>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          Backend Stacks
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {backendTechnologies.map((tech, index) => (
            <TechnologyCard key={index} technology={tech} />
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg italic md:text-xl text-muted-foreground w-full border-t border-blue-300/30 py-5 font-jetbrains-mono"
          variants={itemVariants}
        >
          "The stacks behind the{" "}
          <span className="text-primary font-medium">
            clean, high-performance
          </span>{" "}
          web experiences I build."
        </motion.p>
      </motion.div>
    </section>
  );
};
