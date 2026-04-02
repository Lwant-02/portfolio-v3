"use client";

import { Check, Copy, Loader } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatMessageProps {
  role: "user" | "system" | "tool" | "assistant";
  content: string;
  status: "error" | "streaming" | "ready" | "submitted";
}

export const ChatMessage = ({ role, content, status }: ChatMessageProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const isUser = role === "user";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div
      className={cn(
        "flex w-full mb-4 gap-2 sm:gap-5 font-jetbrains-mono",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      {/* Assistant Avatar */}
      {!isUser && (
        <Avatar className="size-7 sm:size-11 border border-blue-300/30">
          <AvatarImage src="/hamster.png" className="object-cover p-1" />
          <AvatarFallback>LW</AvatarFallback>
        </Avatar>
      )}

      {/* Message Content */}
      <div
        className={cn(
          isUser
            ? "max-w-[90%] px-5 py-3 rounded-full shadow-sm bg-foreground text-primary"
            : "max-w-full flex items-center flex-col",
        )}
      >
        {!isUser && (
          <span className="text-xs text-muted-foreground text-left w-full">
            SNM | LWANT
          </span>
        )}
        {!isUser && status === "streaming" ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center"
          >
            <span className="text-primary/60 flex justify-center items-center gap-2">
              <Loader className="size-5 animate-spin" />
              <p className="text-xs animate-pulse">Thinking...</p>
            </span>
          </motion.span>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base leading-relaxed whitespace-pre-wrap wrap-break-word"
            >
              {content}
            </motion.p>
            {!isUser && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex w-full justify-start mt-1"
                onClick={copyToClipboard}
              >
                {isCopied ? (
                  <Check className="size-4 hover-effect cursor-pointer" />
                ) : (
                  <Copy className="size-4 hover-effect cursor-pointer" />
                )}
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
