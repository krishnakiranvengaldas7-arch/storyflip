"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  Clock,
  Zap,
  Image,
  Hash,
  MessageSquare,
  SkipForward,
} from "lucide-react";
import { useState } from "react";
import { ScriptGenerationResponse } from "@/types";
import { useTypewriter } from "@/hooks/useTypewriter";

interface ScriptOutputProps {
  result: ScriptGenerationResponse | null;
}

function CopyButton({
  text,
  label = "Copy",
  style = "default",
}: {
  text: string;
  label?: string;
  style?: "default" | "violet" | "blue" | "green";
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styleMap = {
    default: {
      background: "rgba(39,39,42,1)",
      border: "1px solid rgba(63,63,70,1)",
      color: "#a1a1aa",
    },
    violet: {
      background: "rgba(139,92,246,0.15)",
      border: "1px solid rgba(139,92,246,0.3)",
      color: "#c4b5fd",
    },
    blue: {
      background: "rgba(59,130,246,0.1)",
      border: "1px solid rgba(59,130,246,0.2)",
      color: "#93c5fd",
    },
    green: {
      background: "rgba(34,197,94,0.1)",
      border: "1px solid rgba(34,197,94,0.2)",
      color: "#86efac",
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer"
      style={styleMap[style]}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-green-400" />
          <span style={{ color: "#4ade80" }}>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          {label}
        </>
      )}
    </motion.button>
  );
}

function OutputCard({
  children,
  delay = 0,
  glowColor = "rgba(139,92,246,0.08)",
}: {
  children: React.ReactNode;
  delay?: number;
  glowColor?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl overflow-hidden mb-4 transition-all duration-300"
      style={{
        background: "rgba(24,24,27,0.95)",
        border: isHovered
          ? "1px solid rgba(139,92,246,0.3)"
          : "1px solid rgba(63,63,70,1)",
        boxShadow: isHovered
          ? `0 0 30px ${glowColor}`
          : "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top, ${glowColor} 0%, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function ScriptCard({ script, delay }: { script: string; delay: number }) {
  const [useTypewriterEffect, setUseTypewriterEffect] = useState(true);
  const { displayedText, isTyping, isDone, skip } = useTypewriter({
    text: script,
    speed: 12,
    startDelay: 600,
    enabled: useTypewriterEffect,
  });

  return (
    <OutputCard delay={delay} glowColor="rgba(139,92,246,0.1)">
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{
          borderBottom: "1px solid rgba(63,63,70,0.8)",
          background: "rgba(18,18,20,0.8)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "rgba(239,68,68,0.8)" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "rgba(234,179,8,0.8)" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "rgba(34,197,94,0.8)" }}
            />
          </div>
          <span style={{ color: "#52525b", fontSize: "13px", fontWeight: 500 }}>
            script.txt
          </span>
          {isTyping && (
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color: "#7c3aed", fontSize: "11px", fontWeight: 600 }}
            >
              ● writing...
            </motion.span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!isDone && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={skip}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
              style={{
                background: "rgba(39,39,42,1)",
                border: "1px solid rgba(63,63,70,1)",
                color: "#71717a",
              }}
            >
              <SkipForward className="w-3 h-3" />
              Skip
            </motion.button>
          )}
          {isDone && <CopyButton text={script} label="Copy Script" style="violet" />}
        </div>
      </div>
      <div className="p-6" style={{ background: "rgba(14,14,16,1)" }}>
        <p
          style={{
            color: "#d4d4d8",
            fontSize: "15px",
            lineHeight: "2",
            fontWeight: 500,
            whiteSpace: "pre-wrap",
            fontFamily: "monospace",
          }}
        >
          {displayedText}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              style={{ color: "#7c3aed", fontWeight: 700 }}
            >
              |
            </motion.span>
          )}
        </p>
      </div>
    </OutputCard>
  );
}

export default function ScriptOutput({ result }: ScriptOutputProps) {
  if (!result) return null;

  if (result.error) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full py-8 flex justify-center px-6"
      >
        <div
          className="w-full rounded-2xl p-6 text-center"
          style={{
            maxWidth: "48rem",
            background: "rgba(239,68,68,0.05)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <p className="text-red-400 font-semibold text-lg mb-2">
            ⚠️ Something went wrong
          </p>
          <p className="text-zinc-500 text-sm">{result.error}</p>
        </div>
      </motion.section>
    );
  }

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full py-8 flex justify-center px-6"
      >
        <div className="w-full" style={{ maxWidth: "48rem" }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(20px, 4vw, 28px)",
                  fontWeight: 900,
                  color: "white",
                  marginBottom: "4px",
                }}
              >
                Your Script is Ready 🎬
              </h2>
              <p style={{ color: "#52525b", fontSize: "13px" }}>
                Optimized for maximum retention and virality
              </p>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
              style={{
                background: "rgba(24,24,27,1)",
                border: "1px solid rgba(63,63,70,1)",
              }}
            >
              <Clock className="w-3.5 h-3.5 text-violet-400" />
              <span style={{ color: "#a1a1aa", fontSize: "12px", fontWeight: 500 }}>
                {result.duration}
              </span>
            </div>
          </motion.div>

          {/* Title Card */}
          <OutputCard delay={0.15} glowColor="rgba(139,92,246,0.1)">
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-violet-400" />
                <span
                  style={{
                    color: "#8b5cf6",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Suggested Title
                </span>
              </div>
              <p
                style={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: "18px",
                  lineHeight: 1.4,
                }}
              >
                {result.title}
              </p>
            </div>
          </OutputCard>

          {/* Hooks Card */}
          <OutputCard delay={0.25} glowColor="rgba(168,85,247,0.08)">
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <span
                  style={{
                    color: "#a1a1aa",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  🎣 Opening Hooks
                </span>
                <span style={{ color: "#3f3f46", fontSize: "11px" }}>
                  Pick your favourite
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {result.hooks.map((hook, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className="group flex items-start justify-between gap-3 p-4 rounded-xl transition-all duration-200"
                    style={{
                      background: "rgba(39,39,42,0.5)",
                      border: "1px solid rgba(63,63,70,0.5)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                        style={{
                          background: "rgba(124,58,237,0.15)",
                          color: "#8b5cf6",
                          border: "1px solid rgba(124,58,237,0.2)",
                        }}
                      >
                        {index + 1}
                      </span>
                      <p
                        style={{
                          color: "#d4d4d8",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          fontWeight: 500,
                        }}
                      >
                        {hook}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                      <CopyButton text={hook} label="" style="default" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </OutputCard>

          {/* Script Card with Typewriter */}
          <ScriptCard script={result.script} delay={0.35} />

          {/* Thumbnail Card */}
          {result.thumbnail && (
            <OutputCard delay={0.45} glowColor="rgba(217,70,239,0.08)">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Image className="w-4 h-4 text-fuchsia-400" />
                    <span
                      style={{
                        color: "#d946ef",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Thumbnail Idea
                    </span>
                  </div>
                  <CopyButton
                    text={result.thumbnail}
                    label="Copy"
                    style="default"
                  />
                </div>
                <p
                  style={{
                    color: "#a1a1aa",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {result.thumbnail}
                </p>
              </div>
            </OutputCard>
          )}

          {/* Caption Card */}
          {result.caption && (
            <OutputCard delay={0.5} glowColor="rgba(59,130,246,0.08)">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <span
                      style={{
                        color: "#60a5fa",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Caption
                    </span>
                  </div>
                  <CopyButton
                    text={result.caption}
                    label="Copy"
                    style="blue"
                  />
                </div>
                <p
                  style={{
                    color: "#d4d4d8",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    fontWeight: 500,
                  }}
                >
                  {result.caption}
                </p>
              </div>
            </OutputCard>
          )}

          {/* Hashtags Card */}
          {result.hashtags && (
            <OutputCard delay={0.55} glowColor="rgba(34,197,94,0.06)">
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-green-400" />
                    <span
                      style={{
                        color: "#4ade80",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Hashtags
                    </span>
                  </div>
                  <CopyButton
                    text={result.hashtags}
                    label="Copy All"
                    style="green"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.hashtags.split(" ").filter(Boolean).map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.04 }}
                      className="px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
                      style={{
                        background: "rgba(34,197,94,0.08)",
                        border: "1px solid rgba(34,197,94,0.15)",
                        color: "#86efac",
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </OutputCard>
          )}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}