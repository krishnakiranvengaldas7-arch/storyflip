import { InputMode, ModeConfig } from "@/types";

// Word count threshold for auto-detection
const GENERATION_MODE_THRESHOLD = 80;

// ============================================
// AUTO DETECT MODE FROM INPUT
// ============================================

export function detectInputMode(input: string): InputMode {
  if (!input || input.trim().length === 0) return "transform";
  const wordCount = input.trim().split(/\s+/).length;
  return wordCount < GENERATION_MODE_THRESHOLD ? "generate" : "transform";
}

// ============================================
// GET WORD COUNT
// ============================================

export function getWordCount(input: string): number {
  if (!input || input.trim().length === 0) return 0;
  return input.trim().split(/\s+/).length;
}

// ============================================
// MODE CONFIGURATIONS
// ============================================

export const MODE_CONFIGS: Record<InputMode, ModeConfig> = {
  generate: {
    id: "generate",
    label: "Generate From Idea",
    description: "Give us one line. We build the whole story.",
    icon: "✨",
    placeholder:
      "Drop a single idea, a starter line, or a dark scenario...\n\nExamples:\n• My wife never let me enter the basement.\n• My brother came home covered in blood and smiling.\n• A kid hears scratching sounds under his bed every night.",
    exampleInput: "My wife never let me enter the basement.",
  },
  transform: {
    id: "transform",
    label: "Transform My Story",
    description: "Paste your story. We make it go viral.",
    icon: "⚡",
    placeholder:
      "Paste your Reddit story, confession, true crime case, or emotional experience here...\n\nThe more detail and raw emotion you give us, the more cinematic and devastating your script will be.",
    exampleInput:
      "I found out my husband of 7 years had been living a double life. He had another woman, another apartment, and another name. I only found out because she called me thinking I was his sister. We talked for 3 hours. Turns out we had the same anniversary date.",
  },
};

// ============================================
// VALIDATE INPUT PER MODE
// ============================================

export function validateInput(
  input: string,
  mode: InputMode
): { isValid: boolean; message: string } {
  if (!input || input.trim().length === 0) {
    return {
      isValid: false,
      message:
        mode === "generate"
          ? "Drop an idea or a starter line to generate a script."
          : "Paste your story to get started.",
    };
  }

  if (mode === "generate") {
    if (input.trim().length < 5) {
      return {
        isValid: false,
        message: "Give us a little more to work with — even one full sentence.",
      };
    }
    if (input.trim().length > 2000) {
      return {
        isValid: false,
        message:
          "This looks like a full story. Switch to Transform mode for better results.",
      };
    }
    return { isValid: true, message: "Ready to generate your script." };
  }

  if (mode === "transform") {
    if (input.trim().length < 50) {
      return {
        isValid: false,
        message:
          "Your story is too short. Add more detail, or switch to Generate mode.",
      };
    }
    if (input.trim().length > 8000) {
      return {
        isValid: false,
        message: "Story is too long. Please keep it under 8000 characters.",
      };
    }
    return { isValid: true, message: "Ready to transform your story." };
  }

  return { isValid: true, message: "Ready." };
}

// ============================================
// GET MODE SUGGESTION MESSAGE
// ============================================

export function getModeSuggestion(
  input: string,
  currentMode: InputMode
): string | null {
  if (!input || input.trim().length < 5) return null;

  const detectedMode = detectInputMode(input);

  if (detectedMode !== currentMode) {
    if (detectedMode === "generate" && currentMode === "transform") {
      return "This looks like a short idea — switch to Generate mode for better results!";
    }
    if (detectedMode === "transform" && currentMode === "generate") {
      return "This looks like a full story — switch to Transform mode for better results!";
    }
  }

  return null;
}