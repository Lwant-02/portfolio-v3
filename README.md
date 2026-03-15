# 🚀 Portfolio v3 — Sai Naw Main (Lwant)

A modern, animated personal portfolio built with **Next.js 16**, **React 19**, and **TypeScript**. Features an AI-powered chatbot, dynamic project/achievement pages, GitHub contribution calendar, and a polished dark/light theme.

🔗 **Live:** _coming soon_

---

## ✨ Features

- **Animated Hero Section** — Flip-word animation, social links (GitHub, LinkedIn, Email), and smooth scroll CTAs
- **Project Showcase** — Featured projects with dynamic detail pages (`/projects/[slug]`)
- **Achievement Showcase** — Career milestones with dynamic detail pages (`/achievements/[slug]`)
- **Experience Timeline** — Interactive work history timeline
- **Technology Stack** — Visual display of frontend & backend technologies
- **GitHub Contributions** — Live contribution calendar via `react-github-calendar`
- **Contact Form** — Validated with `react-hook-form` + `zod`, with Lottie animation
- **Ask Me (AI Chatbot)** — Powered by Google Gemini via Vercel AI SDK, with daily message rate limiting
- **Dark / Light Theme** — System-aware toggle using `next-themes`
- **Mobile Responsive** — Drawer navigation with sheet component for smaller screens
- **Toast Notifications** — Via Sonner for user feedback

---

## 🛠 Tech Stack

| Category       | Technologies                                                        |
| -------------- | ------------------------------------------------------------------- |
| **Framework**  | Next.js 16 (App Router), React 19, TypeScript                      |
| **Styling**    | Tailwind CSS v4, tw-animate-css                                    |
| **UI**         | shadcn/ui, Radix UI, Lucide Icons, Tabler Icons, React Icons       |
| **Animation**  | Framer Motion (motion), LottieFiles                                |
| **AI**         | Vercel AI SDK, Google Generative AI (Gemini)                       |
| **Forms**      | React Hook Form, Zod                                               |
| **HTTP**       | Axios                                                              |
| **Fonts**      | JetBrains Mono, Inter (via `next/font`)                            |
| **Other**      | react-github-calendar, react-type-animation, Sonner, next-themes   |

---

## 📁 Project Structure

```
portfolio-v3/
├── app/
│   ├── layout.tsx              # Root layout (fonts, theme, navbar, toaster)
│   ├── page.tsx                # Home page (hero, projects, timeline, etc.)
│   ├── globals.css             # Global styles & CSS variables
│   ├── about/                  # About page
│   ├── projects/
│   │   ├── page.tsx            # Projects listing
│   │   └── [slug]/             # Dynamic project detail pages
│   ├── achievements/
│   │   ├── page.tsx            # Achievements listing
│   │   └── [slug]/             # Dynamic achievement detail pages
│   ├── ask-me/
│   │   └── page.tsx            # AI chatbot page
│   └── api/
│       └── chat/
│           └── route.ts        # AI chat API route (Gemini)
├── components/
│   ├── navbar.tsx              # Desktop navigation bar
│   ├── mobile-drawer.tsx       # Mobile sheet drawer navigation
│   ├── footer.tsx              # Footer
│   ├── showcase-card.tsx       # Reusable project/achievement card
│   ├── timeline.tsx            # Experience timeline component
│   ├── theme-toggle.tsx        # Dark/light theme switcher
│   ├── theme-provider.tsx      # next-themes provider
│   ├── client-provider.tsx     # Client-side provider wrapper
│   ├── home/                   # Home page sections
│   │   ├── home-hero.tsx       # Hero with flip-word animation
│   │   ├── selected-project.tsx
│   │   ├── selected-achievement.tsx
│   │   ├── experience-timeline.tsx
│   │   ├── technologies.tsx    # Frontend & backend stack display
│   │   ├── contribution.tsx    # GitHub contribution calendar
│   │   ├── contact.tsx         # Contact form with validation
│   │   └── flip-words.tsx      # Animated flip-word component
│   ├── ui/                     # shadcn/ui & custom UI primitives
│   ├── about/                  # About page components
│   ├── projects/               # Project page components
│   ├── achievements/           # Achievement page components
│   ├── ask-me/                 # Chat interface components
│   └── not-found/              # 404 page components
├── constant/
│   └── index.ts                # App data (projects, achievements, experiences, prompts)
├── hooks/
│   └── use-auto-scroll.ts      # Auto-scroll hook for chat
├── lib/
│   ├── utils.ts                # Utilities (cn, scroll, daily rate limiter)
│   └── axios.ts                # Axios instance
├── assets/images/              # Static image assets
├── type.d.ts                   # Global TypeScript type definitions
└── image.d.ts                  # Image module declarations
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or yarn / pnpm / bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/Lwant-02/portfolio-v3.git
cd portfolio-v3

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
```

> The AI chatbot ("Ask Me" page) requires a Google Generative AI API key for the Gemini model.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Script          | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Build for production            |
| `npm start`     | Start production server         |
| `npm run lint`  | Run ESLint                      |

---

## 🌐 Pages

| Route                  | Description                              |
| ---------------------- | ---------------------------------------- |
| `/`                    | Home — Hero, projects, timeline, tech, contributions, contact |
| `/about`               | About page                               |
| `/projects`            | All projects                             |
| `/projects/[slug]`     | Individual project detail                |
| `/achievements`        | All achievements                         |
| `/achievements/[slug]` | Individual achievement detail            |
| `/ask-me`              | AI chatbot (Gemini-powered)              |

---

## 📄 License

This project is personal and not currently licensed for redistribution.

---

**Built with ❤️ by [Sai Naw Main (Lwant)](https://github.com/Lwant-02)**
