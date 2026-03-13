"use client";

import { useRef, useEffect, useState } from "react";
import { ChatMessage } from "./chat-message";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import { Button } from "../ui/button";
import {
  canSendMessageToday,
  cn,
  getTotalMessageCountToday,
  incrementMessageCountToday,
  MAX_MESSAGES_PER_DAY,
} from "@/lib/utils";
import { clientApi } from "@/lib/axios";
import { MessageType } from "@/type";
import { IntroMessage } from "./intro-message";
import { useAutoScroll } from "@/hooks/use-auto-scroll";

export const ChatInterface = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [todayLimit, setTodayLimit] = useState<number>(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { containerRef, bottomRef } = useAutoScroll([...messages, isLoading]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");

    // Add user message to chat
    const updatedMessages = [
      ...messages,
      { role: "user" as const, content: userMessage },
    ];
    setMessages(updatedMessages);

    // Check limit AFTER showing user message
    if (!canSendMessageToday()) {
      // Show limit message as assistant response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content:
            "You have reached the daily limit of messages. Please come back tomorrow!",
        },
      ]);
      return;
    }

    incrementMessageCountToday();
    setIsLoading(true);

    try {
      const response = await clientApi.post("/chat", {
        messages: updatedMessages,
      });

      if (response.data.success && response.data.message) {
        setMessages((prev) => [...prev, response.data.message]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Failed to get response! Please try again later.",
          },
        ]);
      }
    } catch (err: any) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Failed to get response! Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle clicking on sample questions
  const handleQuestionClick = async (question: string) => {
    if (isLoading) return;

    // Add user message to chat
    const updatedMessages = [
      ...messages,
      { role: "user" as const, content: question },
    ];
    setMessages(updatedMessages);

    // Check limit AFTER showing user message
    if (!canSendMessageToday()) {
      // Show limit message as assistant response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content:
            "You have reached the daily limit of messages. Please come back tomorrow!",
        },
      ]);
      return;
    }

    incrementMessageCountToday();
    setIsLoading(true);

    try {
      const response = await clientApi.post("/chat", {
        messages: updatedMessages,
      });

      if (response.data.success && response.data.message) {
        setMessages((prev) => [...prev, response.data.message]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Failed to get response! Please try again later.",
          },
        ]);
      }
    } catch (err: any) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Failed to get response! Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Get today's message count from localStorage (client-side only)
  useEffect(() => {
    setTodayLimit(getTotalMessageCountToday());
  }, [messages]);

  //Get input focus when mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto py-6 pb-36" ref={containerRef}>
      {messages.length > 0 && (
        <p className="w-full text-xs font-jetbrains-mono text-center text-muted-foreground mb-5">
          You can ask{" "}
          <span className="text-blue-300">
            {MAX_MESSAGES_PER_DAY - todayLimit}
          </span>{" "}
          more questions today!
        </p>
      )}
      <div className="max-w-5xl mx-auto space-y-4">
        {messages.length === 0 ? (
          <IntroMessage onQuestionClick={handleQuestionClick} />
        ) : (
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              status="ready"
              content={message.content}
            />
          ))
        )}
        {isLoading && (
          <ChatMessage role="assistant" status="streaming" content="" />
        )}
        <div ref={bottomRef} />

        <div className="w-full px-6 sm:px-10 xl:px-0 pb-4 fixed bottom-0 left-0 right-0 bg-background z-50">
          {/* Main Command Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-foreground backdrop-blur-md rounded-md shadow-sm overflow-hidden max-w-5xl mx-auto"
          >
            <form className="flex items-end gap-3 p-3" onSubmit={handleSubmit}>
              {/* Text Input */}
              <div className="flex-1 relative">
                {input.length === 0 && (
                  <div className="pointer-events-none absolute top-2 left-1 text-muted-foreground text-base">
                    <TypeAnimation
                      sequence={[
                        "Ask me anything...",
                        1000,
                        "What are your tech stacks...",
                        1000,
                        "Are you available for hire...",
                        1000,
                        "How many years of experience do you have...",
                        1000,
                      ]}
                      speed={50}
                      className="font-jetbrains-mono"
                      repeat={Infinity}
                    />
                  </div>
                )}
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={cn(
                    "w-full resize-none font-jetbrains-mono bg-transparent text-primary text-base placeholder:text-muted-foreground",
                    "focus:outline-none border-0 focus:ring-0 outline-none",
                    "h-20 py-2 px-1",
                  )}
                  rows={1}
                  style={{ border: "none", outline: "none" }}
                  onKeyDown={(e: any) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="sm"
                disabled={!input.trim() || isLoading}
                className={cn(
                  "size-10 p-0 rounded-full shrink-0 transition-all duration-200",
                  input.trim()
                    ? "bg-primary hover:bg-primary/80 text-background cursor-pointer"
                    : "bg-muted-foreground text-foreground cursor-not-allowed opacity-50",
                )}
              >
                <ArrowUp className="size-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
