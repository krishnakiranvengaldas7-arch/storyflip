import { NextRequest, NextResponse } from "next/server";
import { ScriptGenerationRequest, ScriptGenerationResponse } from "@/types";
import { generateScript } from "@/lib/openrouter";
import { supabase } from "@/lib/supabase";
import { validateInput, detectInputMode } from "@/lib/modeDetector";

function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 50);
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `${base}-${randomSuffix}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { story, category, mode: requestedMode } = body as ScriptGenerationRequest;

    if (!story || typeof story !== "string") {
      return NextResponse.json(
        { error: "Story or idea is required." },
        { status: 400 }
      );
    }

    if (!category || typeof category !== "string") {
      return NextResponse.json(
        { error: "Category is required." },
        { status: 400 }
      );
    }

    const validCategories = [
      "Cheating",
      "Horror",
      "Emotional",
      "Revenge",
      "True Crime",
      "Funny",
      "Missing Person",
      "Family Secrets",
      "Workplace Drama",
      "Supernatural",
      "AITA",
      "Stalker",
      "Gaslighting",
      "Confession",
      "Neighbor Drama",
      "Friend Betrayal",
    ];

    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: "Invalid category selected." },
        { status: 400 }
      );
    }

    const mode = requestedMode || detectInputMode(story);

    const validation = validateInput(story, mode);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.message },
        { status: 400 }
      );
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "API key is not configured. Please check your setup." },
        { status: 500 }
      );
    }

    const result = await generateScript({ story, category, mode });

    try {
      const slug = generateSlug(result.title);
      await supabase.from("scripts").insert({
        slug,
        category,
        title: result.title,
        hooks: result.hooks,
        script: result.script,
        duration: result.duration,
        thumbnail: result.thumbnail,
        caption: result.caption,
        hashtags: result.hashtags,
      });
    } catch (dbError) {
      console.error("Failed to save script to database:", dbError);
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while generating your script. Please try again.",
      },
      { status: 500 }
    );
  }
}