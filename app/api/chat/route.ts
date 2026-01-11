import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText, ModelMessage } from "ai";

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
        { status: 400 }
      );
    }

    // Stream the response using AI SDK
    const { text } = await generateText({
      system: "You are a helpful assistant and your name is Lwant.",
      model: googleGenerativeAI("gemini-2.5-flash"),
      prompt: messages,
      temperature: 0.7,
      providerOptions: {
        google: {
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_NONE",
            },
          ],
        },
      },
    });

    // Return streaming response for API routes (not RSC)
    return Response.json(
      {
        message: {
          role: "assistant",
          content: text,
        },
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Streaming error:", error.message);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
