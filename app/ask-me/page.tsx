"use client";

import { Command } from "@/components/ask-me/command";
import { ChatList } from "@/components/ask-me/chat-list";

// Mock messages for demonstration
const mockMessages = [
  {
    role: "assistant" as const,
    content:
      "Hello! I'm Lwant's personal assistant. Feel free to ask me anything about Lwant's experience, skills, or projects!",
  },
  {
    role: "user" as const,
    content: "What technologies does Lwant work with?",
  },
  {
    role: "assistant" as const,
    content:
      "Lwant specializes in modern web development with Next.js, React, TypeScript, and Tailwind CSS. He has experience building component libraries, PDF editors, and conversational AI applications. Currently, he's working on Pica Chat, an AI assistant built with Next.js.",
  },
  {
    role: "user" as const,
    content: "Tell me about his experience at Pico Innovation",
  },
  {
    role: "assistant" as const,
    content:
      "Lwant has been with Pico Innovation since May 2024. He started as an intern researching editor tools like Tiptap and Lexical. From January to September 2025, he built and documented a shared library of 25+ reusable components and worked on their in-house PDF editor with features like rich-text editing. Currently, he's in a part-time role focusing on building Pica Chat.",
  },
];

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto overflow-y-scroll">
      {/* Chat Messages */}
      <ChatList messages={mockMessages} />

      {/* Command Input - Stays at Bottom */}
      <div className="mt-auto relative">
        <Command />
      </div>
    </div>
  );
}
