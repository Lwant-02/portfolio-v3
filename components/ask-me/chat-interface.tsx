"use client";

import { useRef, useEffect, useState } from "react";
import { ChatMessage } from "./chat-message";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export const ChatInterface = () => {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ parts: [{ type: "text", text: input }] });
    setInput("");
  };

  return (
    <div className="flex-1 overflow-y-auto py-6 mb-36">
      <div className="max-w-5xl mx-auto space-y-4">
        {messages.map((message) => {
          const streamMessage = message.parts
            .map((part) => (part.type === "text" ? part.text : ""))
            .join("");

          return (
            <ChatMessage
              error={status === "error"}
              key={message.id}
              role={message.role}
              status={status}
              content={streamMessage}
            />
          );
        })}
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
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className={cn(
                    "w-full resize-none bg-transparent text-primary text-base placeholder:text-muted-foreground",
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
                disabled={status !== "ready" || !input.trim()}
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
