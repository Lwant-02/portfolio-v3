"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

import { Button } from "../ui/button";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* 404 Text */}
          <div className="relative">
            <h1 className="text-[150px] sm:text-[200px] font-bold leading-none font-inter tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-muted-foreground to-muted-foreground/50 select-none">
              404
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-md mx-auto space-y-4">
            <p className="text-muted-foreground text-lg">
              The page you're looking for seems to have wandered off into the
              digital void.
            </p>
          </div>

          {/* Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="pt-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-md px-8 h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer/Copyright subtle */}
      <div className="absolute bottom-7 left-0 w-full text-sm text-muted-foreground/40 font-inter text-center">
        © {new Date().getFullYear()} Sai Naw Main | Lwant. All rights reserved.
      </div>
    </>
  );
}
