"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Rocket } from "lucide-react";

import { Button } from "../ui/button";
import {
  containerVariants,
  itemVariants,
  github,
  linkedin,
  email,
  images,
} from "@/constant";
import GithubIcon from "../ui/github-icon";
import LinkedinIcon from "../ui/linkedin-icon";
import MailFilledIcon from "../ui/mail-filled-icon";

export const AboutHero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden gap-10 sm:py-0 py-10"
      id="about"
    >
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-400/30 rounded-md" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-md" />

              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-md overflow-hidden bg-foreground shadow-2xl">
                {/* Uncomment when you have an actual image */}
                <Image
                  src={images.selectedProject}
                  alt="Sai Naw Main - Lwant"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-background border border-blue-300/30 rounded-full px-4 py-2 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <span className="text-sm font-jetbrains-mono text-blue-400">
                  Open to Work ✨
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Introduction */}
            <div className="space-y-4">
              <motion.p
                className="text-blue-400 font-jetbrains-mono text-lg"
                variants={itemVariants}
              >
                It's me again,
              </motion.p>
              <motion.h1
                className="text-4xl relative sm:text-5xl lg:text-6xl font-black leading-tight"
                variants={itemVariants}
              >
                Sai Naw Main
              </motion.h1>
              <motion.p
                className="text-2xl sm:text-3xl font-semibold text-muted-foreground"
                variants={itemVariants}
              >
                Full-Stack Developer
              </motion.p>
            </div>

            {/* Quick Info */}
            <motion.div
              className="flex flex-wrap gap-4 text-muted-foreground"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 bg-foreground px-4 py-2 rounded-full">
                <MapPin className="size-4 text-blue-400" />
                <span className="text-sm font-jetbrains-mono">Thailand</span>
              </div>
              <div className="flex items-center gap-2 bg-foreground px-4 py-2 rounded-full">
                <Rocket className="size-4 text-blue-400" />
                <span className="text-sm font-jetbrains-mono">
                  2+ Years Exp
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl font-jetbrains-mono"
              variants={itemVariants}
            >
              I'm a passionate developer who loves building beautiful,
              functional web applications. With experience in modern
              technologies like React, Next.js, and TypeScript, I focus on
              creating seamless user experiences and clean, maintainable code.
            </motion.p>

            {/* CTA & Social */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex">
                <Button size="lg" className="primary-btn">
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <span className="text-sm text-muted-foreground font-jetbrains-mono">
                  Find me on
                </span>
                <div className="flex items-center gap-4">
                  <Link
                    href={github.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="size-6 hover-effect cursor-pointer" />
                  </Link>
                  <Link
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="size-6 hover-effect cursor-pointer" />
                  </Link>
                  <Link
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MailFilledIcon className="size-6 hover-effect cursor-pointer" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
