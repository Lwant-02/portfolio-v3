"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { IconSend } from "@tabler/icons-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { containerVariants, itemVariants } from "@/constant";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email!" }),
  message: z.string().min(2, { message: "Please leave your message with me!" }),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center"
      id="contact"
    >
      <motion.div
        className="w-full mx-auto space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-6xl font-bold tracking-tight"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Get in touch
        </motion.h2>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          I would love to hear from you whatever it is!
        </motion.p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please enter your email"
                        className="h-12 rounded-md border shadow-sm border-blue-300/30 focus:ring-1! focus:ring-blue-300/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-blue-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Leave some meaningful message"
                        {...field}
                        className="resize-none h-40 rounded-md shadow-sm border border-blue-300/30 focus:ring-1! focus:ring-blue-300/50"
                      />
                    </FormControl>
                    <FormMessage className="text-blue-400" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="primary-btn group w-full!"
              >
                <span className="flex items-center gap-2 ">
                  Send a message
                  <IconSend className="size-5" />
                </span>
              </Button>
            </form>
          </Form>
          <div className="size-full flex justify-center items-center">
            <div className="relative size-80 md:size-96 lg:size-120">
              <DotLottieReact
                src="https://lottie.host/838350fc-c83c-4943-9f59-ea9472cbca6a/v5JuDHiFm8.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
