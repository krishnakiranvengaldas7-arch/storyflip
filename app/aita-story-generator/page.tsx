import GeneratorPageTemplate from "@/components/GeneratorPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AITA Story Generator — Viral AITA Scripts for Shorts & TikTok | StoryFlip",
  description:
    "Generate viral AITA (Am I The Asshole) scripts from any story or idea. Perfect for faceless YouTube Shorts and TikTok creators in the AITA niche.",
};

export default function AitaStoryGeneratorPage() {
  return (
    <GeneratorPageTemplate
      badge="AITA Story Generator"
      headline={
        <>
          Generate Viral{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AITA Scripts
          </span>{" "}
          in Seconds
        </>
      }
      subtext="Turn any moral dilemma or AITA story into a script that sparks debate, keeps viewers hooked, and drives comments — built for Shorts, TikTok, and Reels."
      seoIntro={{
        heading: "Why AITA content performs so well on short-form video",
        paragraphs: [
          "AITA (Am I The Asshole) content thrives because it activates the audience's moral judgment instantly — viewers pick a side within seconds and stay until the end to see if their judgment was right. StoryFlip's AITA story generator is built specifically around this psychology, using our AITA category framework that creates genuine moral complexity rather than obvious right-or-wrong scenarios.",
          "Simply paste a real AITA story or describe a moral dilemma idea, and StoryFlip builds a complete script with a strong hook, full context, the reaction from others, and a genuinely unresolved ending that drives comments and debate — exactly what the algorithm rewards.",
          "Every script comes with four hook variations, a suggested title, thumbnail idea, caption, and hashtags — so you can go from idea to published video in minutes.",
        ],
      }}
    />
  );
}