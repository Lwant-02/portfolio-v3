"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const Command = () => {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="w-full px-4 pb-4 fixed -bottom-1 left-0 right-0">
      {/* Main Command Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-foreground backdrop-blur-sm rounded-md shadow-sm overflow-hidden max-w-3xl mx-auto"
      >
        <form className="flex items-end gap-3 p-3">
          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask me anything..."
              className={cn(
                "w-full resize-none bg-transparent text-primary text-base placeholder:text-muted-foreground",
                "focus:outline-none border-0 focus:ring-0 outline-none",
                "h-20 py-2 px-1"
              )}
              rows={1}
              style={{ border: "none", outline: "none" }}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="sm"
            disabled={!prompt.trim()}
            className={cn(
              "size-10 p-0 rounded-full shrink-0 transition-all duration-200",
              prompt.trim()
                ? "bg-primary hover:bg-primary/80 text-background cursor-pointer"
                : "bg-muted-foreground text-foreground cursor-not-allowed opacity-50"
            )}
          >
            <ArrowUp className="size-5" />
          </Button>
        </form>
      </motion.div>
    </div>
  );
};
