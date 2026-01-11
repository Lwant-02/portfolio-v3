"use client";

import { motion } from "framer-motion";

import { containerVariants, itemVariants } from "@/constant";

export const MoreAbout = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden sm:py-0 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-5 mb-7">
          <motion.h2
            className="text-3xl md:text-6xl font-bold tracking-tight"
            initial="hidden"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            More About <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
          >
            Sometimes I can be a bit lazy
          </motion.p>
        </div>

        <div className="space-y-8 max-w-3xl">
          <motion.p
            className="text-lg text-muted-foreground font-jetbrains-mono leading-relaxed"
            variants={itemVariants}
          >
            I started my coding journey in 2023 with a simple curiosity—how do
            things on the internet actually work? That curiosity led me to
            freelancing on Upwork, where I learned to build real things for real
            people.
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground font-jetbrains-mono leading-relaxed"
            variants={itemVariants}
          >
            In 2024, I joined Pico Innovation as an intern, and that's when
            everything clicked. I went from experimenting with code to building
            actual products—component libraries, design systems, and tools that
            people use every day.
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground font-jetbrains-mono leading-relaxed"
            variants={itemVariants}
          >
            Now I'm focused on Pica Chat, an AI assistant I'm building with
            Next.js. It's the kind of project that pushes me to think
            differently about how we interact with technology.
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground font-jetbrains-mono leading-relaxed"
            variants={itemVariants}
          >
            When I'm not coding, you'll find me exploring new tech, playing
            games, or just looking for the next thing to build. I believe the
            best ideas come from staying curious.
          </motion.p>
        </div>
      </motion.div>
      <div>Will be added some later</div>
    </section>
  );
};
