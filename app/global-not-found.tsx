import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import NotFound from "@/components/not-found/not-found";
import { NotFoundWrapper } from "@/components/not-found/not-found-wrapper";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Naw Main | Lwant | Not Found",
  description: "Sai Naw Main | Lwant | Not Found",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dmSans.variable} antialiased min-h-screen flex items-center justify-center text-foreground overflow-hidden relative`}
      >
        <main className="layout mx-auto h-full">
          <NotFoundWrapper>
            <NotFound />
          </NotFoundWrapper>
        </main>
      </body>
    </html>
  );
}
