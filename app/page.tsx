"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import StoryInput from "@/components/StoryInput";
import ScriptOutput from "@/components/ScriptOutput";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import EmptyState from "@/components/EmptyState";
import ExamplePrompts from "@/components/ExamplePrompts";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ToastContainer from "@/components/ToastContainer";
import Confetti from "@/components/Confetti";
import { useToast } from "@/hooks/useToast";
import { Category, InputMode, LoadingState, ScriptGenerationResponse } from "@/types";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  const [loadingState, setLoadingState] = useState<LoadingState>("idle");
  const [inputStory, setInputStory] = useState("");
  const [inputCategory, setInputCategory] = useState<Category>("Emotional");
  const [result, setResult] = useState<ScriptGenerationResponse | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const { toasts, removeToast, success, error, info } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleGenerate = async (
    story: string,
    category: Category,
    mode: InputMode
  ) => {
    setLoadingState("loading");
    setResult(null);

    info(
      mode === "generate"
        ? "Building your story from idea..."
        : "Transforming your story into a viral script..."
    );

    setTimeout(() => {
      outputRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ story, category, mode }),
      });

      const data: ScriptGenerationResponse = await response.json();

      if (!response.ok) {
        setLoadingState("error");
        setResult({
          script: "",
          hooks: [],
          title: "",
          duration: "",
          error: data.error || "Something went wrong. Please try again.",
        });
        error(data.error || "Something went wrong. Please try again.");
        return;
      }

      setLoadingState("success");
      setResult(data);
      success("Your viral script is ready! 🎬");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } catch {
      setLoadingState("error");
      setResult({
        script: "",
        hooks: [],
        title: "",
        duration: "",
        error: "Network error. Please check your connection and try again.",
      });
      error("Network error. Please check your connection.");
    }
  };

  const handleSelectExample = (story: string, category: Category) => {
  setInputStory(story);
  setInputCategory(category);
  inputRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  info("Example loaded! Pick a category and hit Generate.");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#09090b",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <ParticleBackground />
      <ScrollProgressBar />
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      {/* Confetti */}
      <Confetti trigger={showConfetti} />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* How It Works */}
      <HowItWorks />

      {/* Before/After */}
      <BeforeAfter />

      {/* Story Input */}
      <div ref={inputRef}>
        <StoryInput
           onGenerate={handleGenerate}
           loadingState={loadingState}
           externalStory={inputStory}
           externalCategory={inputCategory}
           onStoryChange={setInputStory}
           onCategoryChange={setInputCategory}
/>
      </div>

      {/* Output Area */}
      <div ref={outputRef}>
        {loadingState === "idle" && <EmptyState />}
        {loadingState === "loading" && <LoadingSkeleton />}
        {(loadingState === "success" || loadingState === "error") && (
          <ScriptOutput result={result} />
        )}
      </div>

      {/* Centered wrapper */}
      <div
        style={{
          width: "100%",
          maxWidth: "1152px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <ExamplePrompts onSelectExample={handleSelectExample} />
        <Testimonials />
        <Features />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}