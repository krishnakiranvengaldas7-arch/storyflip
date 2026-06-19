"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Category, LoadingState, InputMode } from "@/types";
import { detectInputMode, getWordCount, getModeSuggestion, MODE_CONFIGS } from "@/lib/modeDetector";
import ModeSelector from "@/components/ModeSelector";

const categories: Category[] = [
  "Cheating",
  "Horror",
  "Emotional",
  "Revenge",
  "True Crime",
  "Funny",
  "Missing Person",
  "Family Secrets",
  "Workplace Drama",
  "Supernatural",
  "AITA",
  "Stalker",
  "Gaslighting",
  "Confession",
  "Neighbor Drama",
  "Friend Betrayal",
];

interface CategoryStyle {
  emoji: string;
  selected: string;
  unselected: string;
}

const categoryStyles: { [key: string]: CategoryStyle } = {
  Cheating: {
    emoji: "💔",
    selected: "border-rose-400 bg-rose-500/20 text-rose-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-rose-500/50 hover:text-rose-300",
  },
  Horror: {
    emoji: "👁️",
    selected: "border-red-400 bg-red-500/20 text-red-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-red-500/50 hover:text-red-300",
  },
  Emotional: {
    emoji: "🥀",
    selected: "border-blue-400 bg-blue-500/20 text-blue-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-blue-500/50 hover:text-blue-300",
  },
  Revenge: {
    emoji: "🔥",
    selected: "border-orange-400 bg-orange-500/20 text-orange-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-orange-500/50 hover:text-orange-300",
  },
  "True Crime": {
    emoji: "🕵️",
    selected: "border-yellow-400 bg-yellow-500/20 text-yellow-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-yellow-500/50 hover:text-yellow-300",
  },
  Funny: {
    emoji: "😈",
    selected: "border-green-400 bg-green-500/20 text-green-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-green-500/50 hover:text-green-300",
  },
  "Missing Person": {
    emoji: "🔍",
    selected: "border-cyan-400 bg-cyan-500/20 text-cyan-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-cyan-500/50 hover:text-cyan-300",
  },
  "Family Secrets": {
    emoji: "🤫",
    selected: "border-purple-400 bg-purple-500/20 text-purple-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-purple-500/50 hover:text-purple-300",
  },
  "Workplace Drama": {
    emoji: "💼",
    selected: "border-amber-400 bg-amber-500/20 text-amber-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-amber-500/50 hover:text-amber-300",
  },
  Supernatural: {
    emoji: "👻",
    selected: "border-violet-400 bg-violet-500/20 text-violet-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-violet-500/50 hover:text-violet-300",
  },
  AITA: {
    emoji: "⚖️",
    selected: "border-sky-400 bg-sky-500/20 text-sky-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-sky-500/50 hover:text-sky-300",
  },
  Stalker: {
    emoji: "👁️",
    selected: "border-red-400 bg-red-500/20 text-red-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-red-500/50 hover:text-red-300",
  },
  Gaslighting: {
    emoji: "🌀",
    selected: "border-fuchsia-400 bg-fuchsia-500/20 text-fuchsia-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-fuchsia-500/50 hover:text-fuchsia-300",
  },
  Confession: {
    emoji: "🕯️",
    selected: "border-rose-400 bg-rose-500/20 text-rose-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-rose-500/50 hover:text-rose-300",
  },
  "Neighbor Drama": {
    emoji: "🏠",
    selected: "border-lime-400 bg-lime-500/20 text-lime-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-lime-500/50 hover:text-lime-300",
  },
  "Friend Betrayal": {
    emoji: "🗡️",
    selected: "border-pink-400 bg-pink-500/20 text-pink-300",
    unselected: "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-pink-500/50 hover:text-pink-300",
  },
};

interface StoryInputProps {
  onGenerate: (story: string, category: Category, mode: InputMode) => void;
  loadingState: LoadingState;
  externalStory?: string;
  externalCategory?: Category;
  onStoryChange?: (story: string) => void;
  onCategoryChange?: (category: Category) => void;
}

export default function StoryInput({ onGenerate, loadingState, externalStory, externalCategory, onStoryChange, onCategoryChange }: StoryInputProps) {
  const [story, setStory] = useState(externalStory || "");
  const [selectedCategory, setSelectedCategory] = useState<Category>(externalCategory || "Emotional");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedMode, setSelectedMode] = useState<InputMode>("transform");
  const [detectedMode, setDetectedMode] = useState<InputMode | null>(null);
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    if (story.trim().length > 0) {
      const detected = detectInputMode(story);
      setDetectedMode(detected);
      if (!manualOverride) {
        setSelectedMode(detected);
      }
    } else {
      setDetectedMode(null);
    }
  }, [story, manualOverride]);

  useEffect(() => {
    if (externalStory !== undefined && externalStory !== story) {
      setStory(externalStory);
      setManualOverride(false);
    }
  }, [externalStory]);

  useEffect(() => {
    if (externalCategory !== undefined) {
      setSelectedCategory(externalCategory);
    }
  }, [externalCategory]);

  const handleModeChange = (mode: InputMode) => {
    setSelectedMode(mode);
    setManualOverride(true);
  };

  const handleGenerate = () => {
    if (loadingState === "loading") return;
    if (selectedMode === "generate" && story.trim().length < 5) return;
    if (selectedMode === "transform" && story.trim().length < 50) return;
    onGenerate(story, selectedCategory, selectedMode);
  };

  const wordCount = getWordCount(story);
  const modeSuggestion = getModeSuggestion(story, selectedMode);

  const isReady =
    selectedMode === "generate"
      ? story.trim().length >= 5
      : story.trim().length >= 50;

  const currentConfig = MODE_CONFIGS[selectedMode];

  return (
    <section className="relative w-full py-16">
      <div className="w-full px-4 sm:px-6" style={{ maxWidth: "48rem", margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            style={{
              fontSize: "clamp(24px, 5vw, 36px)",
              fontWeight: 900,
              color: "white",
              marginBottom: "8px",
            }}
          >
            Create Your Script
          </h2>
          <p style={{ color: "#52525b", fontSize: "16px" }}>
            Transform a real story or generate one from a single idea
          </p>
        </motion.div>

        {/* Mode Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ModeSelector
            selectedMode={selectedMode}
            onModeChange={handleModeChange}
            detectedMode={manualOverride ? null : detectedMode}
          />
        </motion.div>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            borderColor: isFocused
              ? "rgba(245, 158, 11, 0.5)"
              : "rgba(41, 37, 36, 1)",
            border: isFocused
              ? "1px solid rgba(245, 158, 11, 0.5)"
              : "1px solid rgba(41, 37, 36, 1)",
            background: "rgba(28, 25, 23, 0.9)",
            boxShadow: isFocused
              ? "0 0 40px rgba(245, 158, 11, 0.1)"
              : "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <AnimatePresence>
            {isFocused && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.04) 0%, rgba(220,38,38,0.04) 100%)",
                }}
              />
            )}
          </AnimatePresence>

          {/* Mode Badge inside input */}
          <div
            className="flex items-center gap-2 px-6 pt-4 pb-2"
            style={{ borderBottom: "1px solid rgba(41,37,36,0.5)" }}
          >
            <span style={{ fontSize: "12px" }}>{currentConfig.icon}</span>
            <span
              style={{
                color: selectedMode === "transform" ? "#f59e0b" : "#10b981",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {selectedMode === "transform" ? "Transform Mode" : "Generate Mode"}
            </span>
          </div>

          <textarea
            value={story}
            onChange={(e) => {
              setStory(e.target.value);
              onStoryChange?.(e.target.value);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={currentConfig.placeholder}
            className="relative z-10 w-full bg-transparent text-zinc-200 placeholder-zinc-600 text-base leading-relaxed resize-none outline-none p-6 font-medium"
            style={{ minHeight: selectedMode === "generate" ? "160px" : "220px" }}
          />

          {/* Bottom Bar */}
          <div
            className="relative z-10 flex items-center justify-between px-6 py-3"
            style={{ borderTop: "1px solid rgba(41,37,36,0.8)" }}
          >
            <span style={{ color: "#52525b", fontSize: "13px" }}>
              {wordCount} {wordCount === 1 ? "word" : "words"}
              {selectedMode === "generate" && wordCount > 0 && (
                <span style={{ color: "#3f3f46", marginLeft: "8px" }}>
                  · idea mode
                </span>
              )}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: isReady ? "#10b981" : "#3f3f46",
              }}
            >
              {isReady ? "✓ Ready to generate" : "Keep writing..."}
            </span>
          </div>
        </motion.div>

        {/* Mode-specific hint */}
        <AnimatePresence mode="wait">
          {selectedMode === "generate" && (
            <motion.div
              key="generate-hint"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-3 flex flex-wrap gap-2 justify-center"
            >
              {[
                "My wife never let me enter the basement.",
                "My brother came home covered in blood and smiling.",
                "A kid hears scratching under his bed every night.",
              ].map((example, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setStory(example);
                    onStoryChange?.(example);
                    setManualOverride(true);
                    setSelectedMode("generate");
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200"
                  style={{
                    background: "rgba(16,185,129,0.06)",
                    border: "1px solid rgba(16,185,129,0.15)",
                    color: "#6ee7b7",
                  }}
                >
                  &ldquo;{example}&rdquo;
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          <p
            style={{
              color: "#52525b",
              fontSize: "13px",
              fontWeight: 500,
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            Choose your story category
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const style = categoryStyles[category];
              const isSelected = selectedCategory === category;
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory(category);
                    onCategoryChange?.(category);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected ? style.selected : style.unselected
                  }`}
                >
                  <span>{style.emoji}</span>
                  <span>{category}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Generate Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <motion.button
            whileHover={isReady && loadingState !== "loading" ? { scale: 1.03 } : {}}
            whileTap={isReady && loadingState !== "loading" ? { scale: 0.97 } : {}}
            onClick={handleGenerate}
            disabled={!isReady || loadingState === "loading"}
            className="relative flex items-center gap-3 px-10 py-4 rounded-2xl text-base font-bold transition-all duration-300"
            style={
              isReady && loadingState !== "loading"
                ? {
                    background:
                      selectedMode === "generate"
                        ? "linear-gradient(135deg, #059669 0%, #047857 100%)"
                        : "linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)",
                    color: "white",
                    boxShadow:
                      selectedMode === "generate"
                        ? "0 8px 32px rgba(5,150,105,0.35)"
                        : "0 8px 32px rgba(245,158,11,0.35)",
                    cursor: "pointer",
                  }
                : {
                    background: "#27272a",
                    color: "#71717a",
                    cursor: "not-allowed",
                  }
            }
          >
            {isReady && loadingState !== "loading" && (
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    selectedMode === "generate"
                      ? "linear-gradient(135deg, #059669 0%, #047857 100%)"
                      : "linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)",
                  filter: "blur(16px)",
                  opacity: 0.4,
                  zIndex: -1,
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <span className="relative z-10 flex items-center gap-3">
              {loadingState === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {selectedMode === "generate"
                    ? "Building Your Story..."
                    : "Transforming Your Script..."}
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  {selectedMode === "generate"
                    ? "Generate Story & Script ✨"
                    : "Transform Into Viral Script ⚡"}
                </>
              )}
            </span>
          </motion.button>
        </motion.div>

        {!isReady && story.trim().length > 0 && selectedMode === "transform" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xs mt-3"
            style={{ color: "#3f3f46" }}
          >
            Add a bit more detail for Transform mode, or switch to Generate mode
          </motion.p>
        )}
      </div>
    </section>
  );
}