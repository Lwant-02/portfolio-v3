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

const BASE_URL = process.env.BASE_URL || "https://nawmain.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sai Naw Main (Lwant) | Full-Stack Developer Portfolio",
    template: "%s | Lwant",
  },
  description:
    "Full-stack developer passionate about creating beautiful, functional web applications. Experienced in Next.js, React, TypeScript, and AI integration. Explore my projects, achievements, and journey.",
  keywords: [
    "Sai Naw Main",
    "Lwant",
    "full-stack developer",
    "frontend developer",
    "web developer portfolio",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "UI/UX",
    "software engineer",
    "Pico Innovation",
    "MijnUI",
    "LikDai",
    "Pica Chat",
  ],
  authors: [{ name: "Sai Naw Main", url: BASE_URL }],
  creator: "Sai Naw Main (Lwant)",
  publisher: "Sai Naw Main (Lwant)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Lwant Portfolio",
    title: "Sai Naw Main (Lwant) | Full-Stack Developer Portfolio",
    description:
      "Full-Stack developer passionate about creating beautiful, functional web applications. Explore my projects, achievements, and development journey.",
    images: [
      {
        url: `${BASE_URL}/hamster.png`,
        width: 96,
        height: 96,
        alt: "Sai Naw Main (Lwant) – Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sai Naw Main (Lwant) | Full-Stack Developer Portfolio",
    description:
      "Full-Stack developer passionate about creating beautiful, functional web applications. Explore my projects, achievements, and development journey.",
    images: [`${BASE_URL}/hamster.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/hamster.png",
  },
};

// JSON-LD structured data for Person (developer portfolio)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sai Naw Main",
  alternateName: "Lwant",
  description:
    "Full-stack developer passionate about creating beautiful, functional web applications. Experienced in Next.js, React, TypeScript, and AI integration.",
  url: BASE_URL,
  email: "jaimain671@gmail.com",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/Lwant-02",
    "https://www.linkedin.com/in/sai-naw-main-03b655281/",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "AI SDK",
    "UI/UX Design",
    "Web Development",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
