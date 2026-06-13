export type Category =
  | "Cheating"
  | "Horror"
  | "Emotional"
  | "Revenge"
  | "True Crime"
  | "Funny"
  | "Missing Person"
  | "Family Secrets"
  | "Workplace Drama"
  | "Supernatural"
  | "AITA"
  | "Stalker"
  | "Gaslighting"
  | "Confession"
  | "Neighbor Drama"
  | "Friend Betrayal";

export type LoadingState = "idle" | "loading" | "success" | "error";

export type InputMode = "transform" | "generate";

export interface ScriptGenerationRequest {
  story: string;
  category: Category;
  mode: InputMode;
}

export interface ScriptGenerationResponse {
  script: string;
  hooks: string[];
  title: string;
  duration: string;
  thumbnail?: string;
  caption?: string;
  hashtags?: string;
  mode?: InputMode;
  error?: string;
}

export interface ExamplePrompt {
  id: string;
  category: Category;
  preview: string;
  fullStory: string;
  mode: InputMode;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ModeConfig {
  id: InputMode;
  label: string;
  description: string;
  icon: string;
  placeholder: string;
  exampleInput: string;
}