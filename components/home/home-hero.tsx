"use client";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import { Button } from "../ui/button";
import { FlipWords } from "./flip-words";

export const HomeHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
      id="home"
    >
      {/* Content container */}
      <div className="text-center space-y-6 z-10">
        {/* Top label */}
        <div className="inline-block bg-foreground py-2 px-6 rounded-full shadow-sm">
          <span className="text-base font-medium tracking-wide">
            Hi, It's me Full Stack Developer
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
          Sai Naw Main
        </h1>
        <div className="text-3xl md:text-6xl font-bold">
          I love{" "}
          <FlipWords
            words={["creating", "building", "designing", "crafting"]}
            duration={3000}
            className="text-blue-400!"
          />{" "}
          amazing experiences
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mx-auto leading-relaxed">
          I'm a developer passionate about creating beautiful, functional web
          applications.
          <br />
          Let's bring your ideas to life together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
        <div className="flex justify-center items-center gap-4">
          <IconBrandGithub className="size-6 hover-effect" />
          <IconBrandLinkedin className="size-6 hover-effect" />
        </div>
      </div>
    </section>
  );
};
