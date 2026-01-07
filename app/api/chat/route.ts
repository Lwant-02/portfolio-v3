import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, UserModelMessage } from "ai";

const googleGenerativeAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { messages }: { messages: UserModelMessage[] } = body;

    if (!messages || !Array.isArray(messages)) {
      console.error("Invalid messages received:", messages);
      return Response.json(
        { error: "Messages must be an array" },
        { status: 400 }
      );
    }

    const result = streamText({
      system: "You are a helpful assistant and your name is Lwant.",
      model: googleGenerativeAI("gemini-2.5-flash"),
      messages: messages,
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

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("Streaming error:", error.message);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
