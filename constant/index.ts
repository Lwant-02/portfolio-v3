import selectedProject from "@/assets/images/pica_ai.png";
import profile from "@/assets/images/profile.jpg";
import hamster from "@/assets/images/hamster.png";

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const github = {
  username: "Lwant-02",
  link: "https://github.com/Lwant-02",
};

export const linkedin = "https://www.linkedin.com/in/sai-naw-main-03b655281/";

export const email = "jaimain671@gmail.com";

export const SAMPLE_QUESTIONS = [
  {
    question: "What are your tech stacks?",
  },
  {
    question: "Are you available for hire?",
  },
  {
    question: "How many years of experience do you have?",
  },
  {
    question: "What projects have you worked on?",
  },
  {
    question: "How can I contact you?",
  },
];

export const testProject = {
  image: selectedProject,
  title: "LikDai (Shan Typing Tutor)",
  description:
    "LikDai – A modern and interactive typing tutor with support for Shan and English languages. Built for accuracy tracking, real-time feedback, and a smooth user experience.",
  extraLink: "/projects",
  date: "Mar 2024 - Present",
};

export const images = { selectedProject, profile, hamster };
