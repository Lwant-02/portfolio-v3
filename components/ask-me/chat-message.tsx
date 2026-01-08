"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatMessageProps {
  role: "user" | "assistant" | "system";
  content: string;
  error: boolean;
  status: "error" | "streaming" | "ready" | "submitted";
}

export const ChatMessage = ({
  role,
  content,
  error,
  status,
}: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex w-full mb-4 gap-2 sm:gap-5",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {/* Error Banner */}
      {error && (
        <div className="w-full px-4 py-3 rounded-md bg-red-500/10 border border-red-500/20">
          <div className="flex items-center gap-2">
            <svg
              className="size-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-red-500 font-medium">
              Error: Failed to get response. Please try again.
            </span>
          </div>
        </div>
      )}

      {/* Assistant Avatar */}
      {!isUser && !error && (
        <Avatar className="size-7 sm:size-11">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>LW</AvatarFallback>
        </Avatar>
      )}

      {/* Message Content */}
      {!error && (
        <div
          className={cn(
            isUser
              ? "max-w-[90%] px-4 py-3 rounded-md shadow-sm bg-foreground text-primary"
              : "max-w-full"
          )}
        >
          <p className="text-base leading-relaxed whitespace-pre-wrap wrap-break-word">
            {content}
            {/* Streaming indicator for assistant messages */}
            {!isUser && status === "streaming" && (
              <span className="inline-flex items-center ml-1">
                <span className="animate-pulse text-primary/60">▊</span>
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};
