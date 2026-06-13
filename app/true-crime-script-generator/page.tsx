import GeneratorPageTemplate from "@/components/GeneratorPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "True Crime Script Generator — Viral True Crime Scripts | StoryFlip",
  description:
    "Generate gripping true crime scripts for YouTube Shorts and TikTok from any case, story, or idea. Free AI true crime script generator with hooks and pacing.",
};

export default function TrueCrimeScriptGeneratorPage() {
  return (
    <GeneratorPageTemplate
      badge="True Crime Script Generator"
      headline={
        <>
          Write{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            True Crime Scripts
          </span>{" "}
          That Hook Instantly
        </>
      }
      subtext="Paste a case, a story, or a single chilling detail and get a complete true crime script with a clinical hook, pacing, and a haunting ending."
      seoIntro={{
        heading: "The true crime formula that keeps viewers watching",
        paragraphs: [
          "True crime content grips audiences through a careful balance of clinical fact-delivery and emotional weight. StoryFlip's true crime script generator follows a proven six-phase structure: the hook fact, the surface normalcy, the crack in the case, the revelation, the human cost, and an ending that either resolves or haunts. This structure mirrors what makes the best true crime documentaries and podcasts so compelling.",
          "Paste details from a real case, a Reddit true crime post, or even a single unsettling fact, and StoryFlip builds a complete 150-word script optimized for 45-65 second delivery — including four hook variations, a thumbnail concept, caption, and hashtags.",
          "We also support related categories like Missing Person and Stalker stories, giving true crime creators an entire suite of tools to keep their content pipeline full without sacrificing the depth that makes this genre so addictive.",
        ],
      }}
    />
  );
}