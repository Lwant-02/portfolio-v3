import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText, ModelMessage } from "ai";

import { initialHistory } from "@/constant";

const googleGenerativeAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    // Validate incoming messages
    const { messages } = body;

    if (!Array.isArray(messages)) {
      return Response.json(
        { error: "Messages must be an array" },
        { status: 400 }
      );
    }

    // Ensure each message has proper structure
    const validatedMessages = messages.map((msg, index) => {
      if (typeof msg !== "object" || !msg.role || msg.content === undefined) {
        throw new Error(`Invalid message format at index ${index}`);
      }

      // Ensure content is a string or array, not spread characters
      if (typeof msg.content !== "string" && !Array.isArray(msg.content)) {
        throw new Error(`Invalid content type at index ${index}`);
      }

      return {
        role: msg.role,
        content: msg.content,
      } as ModelMessage;
    });

    const allMessages = [...initialHistory, ...validatedMessages];

    const { text } = await generateText({
      model: googleGenerativeAI("gemini-2.5-flash"),
      messages: allMessages,
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

    return Response.json(
      {
        message: "Success",
        content: text,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating response:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
