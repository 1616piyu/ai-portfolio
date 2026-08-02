import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

import buildSystemPrompt from "@/prompts/systemPrompt";
import { getRelevantProject } from "@/lib/projectMatcher";
import { classifyQuestion } from "@/lib/questionClassifier";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

type ChatMessage = {
  sender: "user" | "assistant";
  text: string;
};

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    // Detect question type
    const questionType = classifyQuestion(message);

    // Detect project
    const matchedProject =
      getRelevantProject(message);

    console.log("Question Type:", questionType);

    console.log(
      "Matched Project:",
      matchedProject?.title ?? "None"
    );

    // Build prompt
    const systemPrompt =
      buildSystemPrompt(
        matchedProject,
        questionType
      );

    // Call Groq
    const response =
      await client.chat.completions.create({
        model: "llama-3.1-8b-instant",

        temperature: 0.3,

        top_p: 0.9,

        max_tokens: 1200,

        messages: [
          {
            role: "system",
            content: systemPrompt,
          },

          ...(history ?? [])
            .slice(-10)
            .map((msg: ChatMessage) => ({
              role:
                msg.sender === "assistant"
                  ? "assistant"
                  : "user",

              content: msg.text,
            })),

          {
            role: "user",
            content: message,
          },
        ],
      });

    const reply =
      response.choices?.[0]?.message?.content ??
      "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({
      reply,
    });

  } catch (error: any) {

    console.error(
      "========== GROQ ERROR =========="
    );

    console.error(error);

    return NextResponse.json(
      {
        reply:
          error?.message ??
          "Unable to contact AI service.",
      },
      {
        status: 500,
      }
    );
  }
}