import { ChatInterface } from "@/components/ask-me/chat-interface";

export const metadata = {
  title: "Sai Naw Main | Lwant | Ask Me",
  description: "Ask Me Page",
};

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto overflow-y-scroll">
      {/* Chat Messages */}
      <ChatInterface />
    </div>
  );
}
