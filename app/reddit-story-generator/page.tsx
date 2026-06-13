import GeneratorPageTemplate from "@/components/GeneratorPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reddit Story Generator — Turn Reddit Posts Into Viral Scripts | StoryFlip",
  description:
    "Free Reddit story generator that transforms any Reddit post, confession, or AITA story into a viral short-form script for YouTube Shorts, TikTok, and Reels in seconds.",
};

export default function RedditStoryGeneratorPage() {
  return (
    <GeneratorPageTemplate
      badge="Reddit Story Generator"
      headline={
        <>
          Turn Any Reddit Post Into a{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Viral Script
          </span>
        </>
      }
      subtext="Paste any Reddit story, confession, or AITA post and get a cinematic short-form script with hooks, captions, and hashtags — ready in 10 seconds."
      seoIntro={{
        heading: "The fastest Reddit story to video script converter",
        paragraphs: [
          "Reddit is one of the richest sources of raw, emotional, and dramatic stories on the internet — but turning a wall of text into a script that actually retains viewers takes skill. StoryFlip's Reddit story generator reads the emotional core of any post and restructures it using proven retention techniques: open loops, pacing markers, and devastating endings.",
          "Whether you're pulling from r/AmItheAsshole, r/relationships, r/TrueCrime, or r/confessions, our AI detects the emotional category of the story and applies the right narrative formula. Paste the post, pick a category, and get a script optimized for YouTube Shorts, TikTok, and Instagram Reels — complete with opening hooks, a thumbnail idea, caption, and hashtags.",
          "Thousands of faceless content creators use StoryFlip to turn their Reddit scrolling into a content pipeline. No writing experience needed — just paste, pick, and post.",
        ],
      }}
    />
  );
}