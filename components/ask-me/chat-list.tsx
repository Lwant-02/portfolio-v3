"use client";

import { useRef, useEffect } from "react";
import { ChatMessage } from "./chat-message";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatListProps {
  messages: Message[];
}

export const ChatList = ({ messages }: ChatListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
