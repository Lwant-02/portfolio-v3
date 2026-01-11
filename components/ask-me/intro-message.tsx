"use client";

import { motion } from "motion/react";

import { SAMPLE_QUESTIONS } from "@/constant";

interface IntroMessageProps {
  onQuestionClick: (question: string) => void;
}

export const IntroMessage = ({ onQuestionClick }: IntroMessageProps) => {
  const handleQuestionClick = (question: string) => {
    onQuestionClick(question);
  };

  return (
    <div className="flex flex-col w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-start mb-10"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ask Me Anything
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 w-full gap-2"
      >
        {SAMPLE_QUESTIONS.map((item, index) => {
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              onClick={() => handleQuestionClick(item.question)}
              className={`relative hover:bg-foreground cursor-pointer border rounded-md p-5 border-blue-300/30  text-left `}
            >
              <p className="text-primary font-medium leading-relaxed font-jetbrains-mono">
                {item.question}
              </p>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};
