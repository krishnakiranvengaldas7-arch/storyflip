"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import StoryInput from "@/components/StoryInput";
import ScriptOutput from "@/components/ScriptOutput";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import EmptyState from "@/components/EmptyState";
import ExamplePrompts from "@/components/ExamplePrompts";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import ToastContainer from "@/components/ToastContainer";
import Confetti from "@/components/Confetti";
import { useToast } from "@/hooks/useToast";
import { Category, InputMode, LoadingState, ScriptGenerationResponse } from "@/types";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";

interface GeneratorPageTemplateProps {
  badge: string;
  headline: React.ReactNode;
  subtext: string;
  seoIntro: {
    heading: string;
    paragraphs: string[];
  };
}

export default function GeneratorPageTemplate({
  badge,
  headline,
  subtext,
  seoIntro,
}: GeneratorPageTemplateProps) {
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
       backgroundColor: "#0c0a09",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <ParticleBackground />
      <ScrollProgressBar />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      <Confetti trigger={showConfetti} />
      <Navbar />

      {/* Custom Hero for SEO page */}
      <section className="relative w-full px-4 sm:px-6 pb-12 flex flex-col items-center text-center overflow-hidden" style={{ paddingTop: "140px" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "700px",
              height: "700px",
              background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block px-3 py-1 rounded-full text-xs font-bold mb-5"
          style={{
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.2)",
            color: "#fbbf24",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
          style={{
            fontSize: "clamp(32px, 7vw, 56px)",
            fontWeight: 900,
            fontFamily: "'Syne', sans-serif",
            lineHeight: 1.1,
            maxWidth: "800px",
            marginBottom: "16px",
          }}
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          style={{
            color: "#71717a",
            fontSize: "clamp(15px, 2vw, 18px)",
            maxWidth: "600px",
            lineHeight: 1.7,
          }}
        >
          {subtext}
        </motion.p>
      </section>

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

      {/* How It Works */}
      <HowItWorks />

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

        {/* SEO Content Block */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 sm:p-10"
            style={{
              background: "rgba(24,24,27,0.6)",
              border: "1px solid rgba(63,63,70,0.6)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(22px, 4vw, 32px)",
                fontWeight: 900,
                color: "white",
                marginBottom: "20px",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {seoIntro.heading}
            </h2>
            {seoIntro.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: "#a1a1aa",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  marginBottom: i === seoIntro.paragraphs.length - 1 ? 0 : "16px",
                }}
              >
                {p}
              </p>
            ))}
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}