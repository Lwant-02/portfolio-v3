"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm bg-foreground text-primary",
          isUser ? "rounded-br-sm" : "rounded-bl-sm"
        )}
      >
        <p className="text-base leading-relaxed whitespace-pre-wrap wrap-break-word">
          {content}
        </p>
      </div>
    </motion.div>
  );
};
