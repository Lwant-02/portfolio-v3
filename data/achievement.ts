import { AchievementData } from "@/type";

export const achievements: AchievementData[] = [
  {
    slug: "winner-tuk-heng-hackathon",
    image: "/images/achievements/likdai.JPG",
    title: "Winner - Tuk Heng Hackathon",
    description:
      "Won first place for LikDai, a Shan typing tutor web app that helps language learners practice with real-time feedback and analytics.",
    link: "/achievements/winner-tuk-heng-hackathon",
    date: "Aug 2025",
    category: "Hackathon",
    details: [
      "Won 1st place in a competitive hackathon by addressing a critical language preservation need.",
      "Developed LikDai independently, focusing on building a tool that handles native script efficiently.",
      "Implemented a leaderboard and real-time accuracy tracking to gamify the learning experience.",
      "Received praise for the project's cultural impact and technical execution.",
    ],
  },
  {
    slug: "third-place-cimso-rsu",
    image: "/images/achievements/cimso-rsu.JPG",
    title: "Third Place - Cimso-RSU Hackathon",
    description:
      "Secured 3rd place out of 20+ teams by building a tech solution to improve the hospitality experience using React, Node.js, and LLM APIs.",
    link: "/achievements/third-place-cimso-rsu",
    date: "Mar 2025",
    category: "Hackathon",
    details: [
      "Collaborated in a team to build a hospitality management solution within 48 hours.",
      "Integrated LLM APIs to automate room service requests and staff coordination.",
      "Prototyped a complete dashboard that industry experts recognized for its practical application.",
    ],
  },
];
