import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const googleGenerativeAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

export const POST = async (req: Request) => {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      console.error("Invalid messages received:", messages);
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Stream the response using AI SDK
    const result = streamText({
      system: "You are a helpful assistant and your name is Lwant.",
      model: googleGenerativeAI("gemini-2.5-flash"),
      messages: await convertToModelMessages(messages),
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
    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("Streaming error:", error.message);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
