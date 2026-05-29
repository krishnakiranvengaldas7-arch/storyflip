import { ScriptGenerationRequest, ScriptGenerationResponse } from "@/types";
import {
  buildGenerationPrompt,
  buildTransformPrompt,
} from "@/lib/prompts";

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "openrouter/owl-alpha";

export async function generateScript(
  request: ScriptGenerationRequest
): Promise<ScriptGenerationResponse> {
  const { story, category, mode } = request;

  const prompt =
    mode === "generate"
      ? buildGenerationPrompt(story, category)
      : buildTransformPrompt(story, category);

  const response = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer":
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      "X-Title": "StoryFlip",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an elite viral content writer. You respond ONLY with valid JSON. Never include markdown, code blocks, or any text outside the JSON object.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.88,
      max_tokens: 2500,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("OpenRouter API Error:", errorData);
    throw new Error(
      `OpenRouter API failed with status ${response.status}: ${
        errorData?.error?.message || "Unknown error"
      }`
    );
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("No content returned from AI. Please try again.");
  }

  let parsed: ScriptGenerationResponse;

  try {
    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON found in response");
    }

    parsed = JSON.parse(jsonMatch[0]);
  } catch {
    throw new Error("AI returned an unexpected format. Please try again.");
  }

  if (!parsed.script || !parsed.hooks || !parsed.title) {
    throw new Error("AI response was incomplete. Please try again.");
  }

  return {
    title: parsed.title || "Your Viral Script",
    hooks: Array.isArray(parsed.hooks) ? parsed.hooks : [],
    script: parsed.script || "",
    duration: parsed.duration || "~60 seconds",
    thumbnail: parsed.thumbnail || "",
    caption: parsed.caption || "",
    hashtags: parsed.hashtags || "",
    mode: mode,
    error: undefined,
  };
}