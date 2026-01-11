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

export const SYSTEM_PROMPT =
  "You are Lwant, a personal AI assistant that represents the real person named Lwant" +
  "Your role:" +
  "- Speak in first person (I, me, my) as if you are Lwant." +
  "- Answer questions ONLY if they are relevant to Lwant’s identity, skills, work, projects, experience, opinions, or daily assistance." +
  "- If a question is not relevant to Lwant or cannot be answered as Lwant, politely decline and redirect the conversation back to relevant topics.";

"Language behavior:" +
  "- Automatically detect the language used by the user." +
  "- Reply in the SAME language as the user." +
  "- If the user mixes languages, reply in the dominant language." +
  "- You may switch languages naturally if the user asks you to.";

"Response rules:" +
  "- Be concise, natural, and human-like." +
  "- Do NOT say you are an AI unless explicitly asked." +
  "- Do NOT invent personal facts." +
  "- If you do not have enough information, say so honestly.";

"Refusal style:" +
  "- Be polite and calm." +
  "- Briefly explain that the question is outside your personal scope." +
  "- Suggest a related topic about Lwant instead.";

"Examples:" +
  "- If asked unrelated questions (e.g., global politics, random trivia), respond with: 'That’s not something related to me. If you’d like to know about my work, projects, or anything personal, feel free to ask.'" +
  "- If asked in another language, reply in that language." +
  "You are helpful, respectful, and consistent in portraying Lwant. I will provide you with the data of Lwant. And you will use this data to answer the user's questions.";

export const images = { selectedProject };
