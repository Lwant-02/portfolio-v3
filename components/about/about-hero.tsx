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
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative flex justify-center w-full"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-72 border border-blue-300/30 sm:w-80 lg:w-96 rounded-xl overflow-hidden bg-foreground shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Sai Naw Main - Lwant"
                  className="w-full h-auto"
                  priority
                  width={1000}
                  height={1000}
                  loading="eager"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-background border border-blue-300/30 rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-jetbrains-mono text-blue-400">
                  Open to Work ✨
                </span>
              </div>
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
            </div>

            {/* Quick Info */}
            <motion.div
              className="flex flex-wrap gap-4 text-muted-foreground"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 bg-foreground px-4 py-2 rounded-full">
                <MapPin className="size-4 text-blue-400" />
                <span className="text-sm font-jetbrains-mono">
                  Bangkok, Thailand
                </span>
              </div>
              <div className="flex items-center gap-2 bg-foreground px-4 py-2 rounded-full">
                <Rocket className="size-4 text-blue-400" />
                <span className="text-sm font-jetbrains-mono">1 Year Exp</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed w-full font-jetbrains-mono"
              variants={itemVariants}
            >
              Full-Stack Developer with 1 year of experience in the JS/TS
              ecosystem (React, Next.js, Node.js). Recently completed an
              internship building automated chatbots and have a track record of
              award-winning hackathon projects. Actively building scalable,
              cloud-native architectures.
            </motion.p>

            {/* CTA & Social */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex">
                <Button asChild size="lg" className="primary-btn">
                  <a
                    href="/pdf/sai-naw-main-resume.pdf"
                    download="Sai_Naw_Main_Resume.pdf"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-6"
                variants={itemVariants}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
