import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText, ModelMessage } from "ai";

import { SYSTEM_PROMPT } from "@/data/prompt";

const googleGenerativeAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

export const POST = async (req: Request) => {
  try {
    const { messages }: { messages: ModelMessage[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      console.error("Invalid messages received:", messages);
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 },
      );
    }

    const { text } = await generateText({
      system: SYSTEM_PROMPT,
      model: googleGenerativeAI("gemini-3.1-flash-lite-preview"),
      prompt: messages,
      temperature: 0.7,
      providerOptions: {
        google: {
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_NONE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_NONE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_NONE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_NONE",
            },
          ],
        },
      },
    });

    return Response.json(
      {
        message: {
          role: "assistant",
          content: text,
        },
        success: true,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Streaming error:", error.message);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
