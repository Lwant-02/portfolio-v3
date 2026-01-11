"use client";

import { useRef, useEffect, useState } from "react";
import { ChatMessage } from "./chat-message";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { clientApi } from "@/lib/axios";
import { MessageType } from "@/type";
import { IntroMessage } from "./intro-message";

export const ChatInterface = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setInput("");
    setError(null);

    // Add user message to chat
    const updatedMessages = [
      ...messages,
      { role: "user" as const, content: input },
    ];
    setMessages(updatedMessages);
    setIsLoading(true);
    try {
      const response = await clientApi.post("/chat", {
        messages: updatedMessages,
      });

      if (response.data.success && response.data.message) {
        setMessages((prev) => [...prev, response.data.message]);
      } else {
        setError("Failed to get response");
      }
    } catch (err: any) {
      console.error("Chat error:", err);
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle clicking on sample questions
  const handleQuestionClick = async (question: string) => {
    if (isLoading) return;

    setError(null);

    // Add user message to chat
    const updatedMessages = [
      ...messages,
      { role: "user" as const, content: question },
    ];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await clientApi.post("/chat", {
        messages: updatedMessages,
      });

      if (response.data.success && response.data.message) {
        setMessages((prev) => [...prev, response.data.message]);
      } else {
        setError("Failed to get response");
      }
    } catch (err: any) {
      console.error("Chat error:", err);
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto py-6 mb-36">
      <div className="max-w-5xl mx-auto space-y-4">
        {messages.length === 0 ? (
          <IntroMessage onQuestionClick={handleQuestionClick} />
        ) : (
          messages.map((message, index) => (
            <ChatMessage
              error={error}
              key={index}
              role={message.role}
              status="ready"
              content={message.content}
            />
          ))
        )}
        {isLoading && (
          <ChatMessage
            error={error}
            role="assistant"
            status="streaming"
            content=""
          />
        )}
        <div ref={messagesEndRef} />
        <div className="w-full px-4 pb-4 fixed bottom-0 left-0 right-0 bg-background z-50">
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
                    "h-20 py-2 px-1"
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
                    : "bg-muted-foreground text-foreground cursor-not-allowed opacity-50"
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
