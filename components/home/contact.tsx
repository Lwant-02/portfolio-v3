"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
import { sendContactEmail } from "@/action/nodemailer.action";

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email!" }),
  message: z.string().min(2, { message: "Please leave your message with me!" }),
});

export const Contact = () => {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);

    try {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("message", values.message);

      const result = await sendContactEmail(formData);

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsPending(false);
    }
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
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          I would love to hear from you whatever it is!
        </motion.div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please enter your email"
                        className="h-12 rounded-full border shadow-sm border-blue-300/30 focus:ring-1! focus:ring-blue-300/50"
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
                        className="resize-none h-32 rounded-xl shadow-sm border border-blue-300/30 focus:ring-1! focus:ring-blue-300/50"
                      />
                    </FormControl>
                    <FormMessage className="text-blue-400" />
                  </FormItem>
                )}
              />
              <button
                className="primary-btn w-full! bg-primary hover:bg-primary/90 flex gap-2 items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send a message"
                )}
              </button>
            </motion.form>
          </Form>
          <motion.div
            className="size-full flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative size-80 md:size-96 lg:size-120">
              <DotLottieReact
                src="https://lottie.host/838350fc-c83c-4943-9f59-ea9472cbca6a/v5JuDHiFm8.lottie"
                loop
                autoplay
                className="w-full h-full text-blue-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
