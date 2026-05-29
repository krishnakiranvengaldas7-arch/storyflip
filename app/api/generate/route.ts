import { NextRequest, NextResponse } from "next/server";
import { ScriptGenerationRequest, ScriptGenerationResponse } from "@/types";
import { generateScript } from "@/lib/openrouter";
import { validateInput, detectInputMode } from "@/lib/modeDetector";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { story, category, mode: requestedMode } = body as ScriptGenerationRequest;

    // Validate story exists
    if (!story || typeof story !== "string") {
      return NextResponse.json(
        { error: "Story or idea is required." },
        { status: 400 }
      );
    }

    // Validate category
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
    ];

    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: "Invalid category selected." },
        { status: 400 }
      );
    }

    // Determine mode — use requested mode or auto-detect
    const mode = requestedMode || detectInputMode(story);

    // Validate input for the detected mode
    const validation = validateInput(story, mode);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.message },
        { status: 400 }
      );
    }

    // Check API key
    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "API key is not configured. Please check your setup." },
        { status: 500 }
      );
    }

    // Generate the script
    const result = await generateScript({ story, category, mode });

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