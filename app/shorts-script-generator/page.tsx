import GeneratorPageTemplate from "@/components/GeneratorPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Shorts Script Generator — AI Viral Script Writer | StoryFlip",
  description:
    "Generate complete YouTube Shorts scripts with hooks, pacing, and retention markers from any story or idea. Free AI script generator for faceless channels.",
};

export default function ShortsScriptGeneratorPage() {
  return (
    <GeneratorPageTemplate
      badge="YouTube Shorts Script Generator"
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
            YouTube Shorts Scripts
          </span>{" "}
          That Actually Retain
        </>
      }
      subtext="Paste a story or idea and get a complete 45-65 second Shorts script with pacing markers, hooks, and a structure built for maximum watch time."
      seoIntro={{
        heading: "Built for the YouTube Shorts algorithm",
        paragraphs: [
          "YouTube Shorts rewards retention above almost everything else — the longer people watch, the more the algorithm pushes your video. StoryFlip's script generator is built around this single goal. Every script follows a strict structure: a scroll-stopping hook in the first 3 seconds, an open loop that creates curiosity, and pacing markers like [PAUSE], [SLOW], and [BEAT] that guide your delivery for maximum emotional impact.",
          "Scripts are capped at 150 words — tight enough to fit the ideal 45 to 65 second Shorts format, with no filler. You also get 4 alternative hook options so you can A/B test different openings, plus a thumbnail concept, caption, and hashtags ready to copy and paste.",
          "Whether you run a faceless storytelling channel, a true crime channel, or a Reddit-reading channel, StoryFlip turns your raw material into a script built to be watched till the end.",
        ],
      }}
    />
  );
}