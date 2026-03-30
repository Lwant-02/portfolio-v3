import { ChatInterface } from "@/components/ask-me/chat-interface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Me – Chat with Lwant's AI Assistant",
  description:
    "Have questions about my work, skills, or projects? Ask my personal AI assistant and get instant answers about Sai Naw Main (Lwant).",
  alternates: {
    canonical: "/ask-me",
  },
};

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto overflow-y-scroll">
      <ChatInterface />
    </div>
  );
}
