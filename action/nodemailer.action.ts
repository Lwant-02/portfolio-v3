"use server";

import nodemailer from "nodemailer";
import { contactEmailTemplate } from "@/template/template";

const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  const emailHost = process.env.EMAIL_HOST;
  const emailPort = process.env.EMAIL_PORT;
  const emailSecure = process.env.EMAIL_SECURE;

  const isSecure = emailSecure === "true";

  if (
    !emailUser ||
    !emailPassword ||
    !emailHost ||
    !emailPort ||
    !emailSecure
  ) {
    throw new Error("Missing email configuration");
  }

  return nodemailer.createTransport({
    host: emailHost,
    port: Number(emailPort),
    secure: isSecure,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });
};

export const sendContactEmail = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!email || !message) {
    return { error: "Missing required fields" };
  }

  try {
    const transporter = createTransporter();
    const receiverEmail = process.env.RECEIVER_EMAIL;
    const emailUser = process.env.EMAIL_USER;

    if (!receiverEmail || !emailUser) {
      throw new Error("Missing receiver email or sender email");
    }

    const htmlContent = contactEmailTemplate(email, message);

    const mailOptions = {
      from: emailUser,
      to: receiverEmail,
      subject: `New Message from Portfolio Contact`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send email" };
  }
};
