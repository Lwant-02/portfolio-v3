import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { ClientProvider } from "@/components/client-provider";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Naw Main | Lwant",
  description: "Sai Naw Main | Lwant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${jetBrainsMono.variable} ${inter.variable} antialiased`}
      >
        <ClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="layout min-h-screen">{children}</main>
          </ThemeProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                fontSize: "15px",
              },
            }}
          />
        </ClientProvider>
      </body>
    </html>
  );
}
