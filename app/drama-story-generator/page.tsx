import GeneratorPageTemplate from "@/components/GeneratorPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drama Story Generator — Viral Drama Scripts for Shorts & TikTok | StoryFlip",
  description:
    "Generate viral drama scripts — cheating, betrayal, family secrets, workplace drama, and more — for YouTube Shorts and TikTok. Free AI drama story generator.",
};

export default function DramaStoryGeneratorPage() {
  return (
    <GeneratorPageTemplate
      badge="Drama Story Generator"
      headline={
        <>
          Turn Real Drama Into{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Viral Scripts
          </span>
        </>
      }
      subtext="Cheating, betrayal, family secrets, workplace drama, neighbor wars — paste any drama story and get a script built to keep viewers hooked till the end."
      seoIntro={{
        heading: "Drama content has never had this much demand",
        paragraphs: [
          "Drama-driven storytime content — cheating confessions, betrayal stories, family secrets, workplace conflicts, and neighbor disputes — taps directly into universal human emotions: anger, vindication, shock, and curiosity. StoryFlip's drama story generator includes dedicated frameworks for Cheating, Revenge, Family Secrets, Workplace Drama, Neighbor Drama, Friend Betrayal, and Gaslighting — each with its own psychological arc designed to maximize tension and payoff.",
          "Paste a real story or a one-line idea, pick your drama category, and get a complete script with an emotional arc structured in clear phases — the setup, the escalation, the reveal, and the ending that lingers. Every script comes with multiple hook options so the first 3 seconds hit as hard as possible.",
          "Whether your channel covers cheating stories, AITA drama, or workplace justice, StoryFlip gives you an unlimited pipeline of scripts ready to record.",
        ],
      }}
    />
  );
}