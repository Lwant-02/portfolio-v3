import { ModelMessage } from "ai";
import selectedProject from "@/assets/images/pica_ai.png";

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

export const testProject = {
  image: selectedProject,
  title: "LikDai (Shan Typing Tutor)",
  description:
    "LikDai – A modern and interactive typing tutor with support for Shan and English languages. Built for accuracy tracking, real-time feedback, and a smooth user experience.",
  link: "/projects",
  extraLink: "/projects",
  date: "Mar 2024 - Present",
};

export const experiences = [
  {
    year: "2025",
    roles: [
      {
        title: "Building Pica Chat",
        organization: "Pico Innovation (Part-Time)",
        dateRange: "Oct - Present",
        description:
          "After nine months full-time at Pico, I moved to a part-time role to focus on Pica Chat, a conversational AI assistant I'm building with Next.js. I've been researching existing AI chat apps and refining the frontend to feel simple, fast, and intuitive.",
      },
      {
        title: "Component Systems & PDF Tools",
        organization: "Pico Innovation",
        dateRange: "Jan - Sep",
        description:
          "Built and documented a shared library of 25+ reusable components, worked on the in-house PDF editor, and shipped features like rich-text editing with Tiptap, all aimed at cleaner code and smoother design workflows.",
      },
    ],
  },
  {
    year: "2024",
    roles: [
      {
        title: "Started as an Intern",
        organization: "Pico Innovation",
        dateRange: "May - Dec",
        description:
          "Started my journey as an intern, researching editor tools like Tiptap and Lexical. That early research and component work helped set the direction for the MijnUI design system that followed.",
      },
    ],
  },
  {
    year: "2023",
    roles: [
      {
        title: "Freelancing",
        organization: "Upwork & Local Clients",
        dateRange: "Aug - Dec",
        description:
          "Took on small frontend projects to learn from real client work. Focused on clean layouts, responsive design, and understanding how people interact with simple interfaces.",
      },
    ],
  },
];

export const initialHistory: ModelMessage[] = [
  {
    role: "user",
    content:
      "Your name is 'Sai Naw Main or nick name is Lwant'.You are a personal chatbot designed by 'Lwant' specifically for personal assistant. Your main task is to assist user in ther content of personal assistant. Only provide answers relevant to Sai Naw Main or Lwant's personal data and respond directly without additional information. " +
      "And you're capable of responding in various languages. I'll pose questions in different languages, and you can provide answers accordingly." +
      "And I will give you the data of Sai Naw Main or Lwant. And you will use this data to answer the user's questions.",
  },
  {
    role: "assistant",
    content:
      "Greetings, I will remember that. And I will only respond to questions in the concontent of personal assistant. And also I will give straight-to-the-point responses with markdown format. I will give response in any language.",
  },
];

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

export const images = { selectedProject };
