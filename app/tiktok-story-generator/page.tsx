import GeneratorPageTemplate from "@/components/GeneratorPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Story Generator — Viral TikTok Scripts from Any Story | StoryFlip",
  description:
    "Turn any story, confession, or idea into a viral TikTok script with hooks, captions, and hashtags. Free AI story generator built for TikTok creators.",
};

export default function TikTokStoryGeneratorPage() {
  return (
    <GeneratorPageTemplate
      badge="TikTok Story Generator"
      headline={
        <>
          Create{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Viral TikTok Scripts
          </span>{" "}
          From Any Story
        </>
      }
      subtext="Paste a story, confession, or one-line idea and get a complete TikTok script with a scroll-stopping hook, pacing, caption, and hashtags."
      seoIntro={{
        heading: "Storytelling content is dominating TikTok — here's how to keep up",
        paragraphs: [
          "Storytime content — confessions, drama, true crime, relationship stories — consistently performs among the highest-retention formats on TikTok. The challenge for creators is volume: writing a genuinely gripping script takes time, and TikTok rewards consistency. StoryFlip solves this by generating a complete, retention-optimized script from any raw story or idea in about 10 seconds.",
          "Each script is built using category-specific psychological frameworks — whether it's the quiet devastation of an Emotional story, the escalating dread of Horror, or the satisfying payoff of Revenge. You get four hook variations, a tight 150-word script with pacing markers, a thumbnail concept, caption, and ready-to-use hashtags.",
          "Pick from 16 categories including Cheating, Horror, True Crime, AITA, Gaslighting, and Stalker — each tuned for the emotional response that keeps TikTok viewers watching to the end and coming back for more.",
        ],
      }}
    />
  );
}