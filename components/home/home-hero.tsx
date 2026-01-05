"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "../ui/button";
import { FlipWords } from "./flip-words";
import { containerVariants, github, itemVariants, linkedin } from "@/constant";
import { scrollToSection } from "@/lib/utils";
import GithubIcon from "../ui/github-icon";
import LinkedinIcon from "../ui/linkedin-icon";

export const HomeHero = () => {
  return (
    <section
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
      id="home"
    >
      {/* Content container */}
      <motion.div
        className="text-center space-y-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top label */}
        <motion.div
          className="inline-block bg-foreground py-3 px-6 rounded-full shadow-sm"
          variants={itemVariants}
        >
          <span className="text-base font-medium tracking-wide font-jetbrains-mono">
            Hay, It's me{" "}
            <span className="text-blue-400">Full-Stack Developer</span>
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight"
          variants={itemVariants}
        >
          Sai Naw Main
        </motion.h1>
        <motion.div
          className="text-3xl md:text-6xl font-bold"
          variants={itemVariants}
        >
          I love{" "}
          <FlipWords
            words={["creating", "building", "designing", "crafting"]}
            duration={3000}
            className="text-blue-400!"
          />{" "}
          amazing experiences
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground mx-auto leading-relaxed font-jetbrains-mono"
          variants={itemVariants}
        >
          I'm a developer passionate about creating beautiful, functional web
          applications.
          <br />
          Let's bring your ideas to life together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Button
            type="button"
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="primary-btn"
          >
            See My Work
          </Button>
          <Button
            type="button"
            onClick={() => scrollToSection("contact")}
            size="lg"
            variant="outline"
            className="outline-btn"
          >
            Contact
          </Button>
        </motion.div>
        <motion.div
          className="flex justify-center items-center gap-4"
          variants={itemVariants}
        >
          <Link href={github.link} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="size-7 hover-effect cursor-pointer" />
          </Link>
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="size-7 hover-effect cursor-pointer" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
