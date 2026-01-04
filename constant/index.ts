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

export const github = {
  username: "Lwant-02",
  link: "https://github.com/Lwant-02",
};

export const linkedin = "https://www.linkedin.com/in/sai-naw-main-03b655281/";

export const images = { selectedProject };
