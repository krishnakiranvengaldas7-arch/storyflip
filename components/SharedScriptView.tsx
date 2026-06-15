"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Image as ImageIcon, Hash, MessageSquare, Copy, Check, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Script {
  id: string;
  slug: string;
  category: string;
  title: string;
  hooks: string[];
  script: string;
  duration: string;
  thumbnail: string;
  caption: string;
  hashtags: string;
  created_at: string;
}

interface SharedScriptViewProps {
  script: Script;
}

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  Cheating: { text: "#fda4af", bg: "rgba(244,63,94,0.08)", border: "rgba(244,63,94,0.2)" },
  Horror: { text: "#fca5a5", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)" },
  Emotional: { text: "#93c5fd", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)" },
  Revenge: { text: "#fdba74", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)" },
  "True Crime": { text: "#fde68a", bg: "rgba(234,179,8,0.08)", border: "rgba(234,179,8,0.2)" },
  Funny: { text: "#86efac", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)" },
  "Missing Person": { text: "#67e8f9", bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.2)" },
  "Family Secrets": { text: "#d8b4fe", bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.2)" },
  "Workplace Drama": { text: "#fcd34d", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
  Supernatural: { text: "#c4b5fd", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
  AITA: { text: "#7dd3fc", bg: "rgba(14,165,233,0.08)", border: "rgba(14,165,233,0.2)" },
  Stalker: { text: "#fca5a5", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)" },
  Gaslighting: { text: "#f0abfc", bg: "rgba(217,70,239,0.08)", border: "rgba(217,70,239,0.2)" },
  Confession: { text: "#fda4af", bg: "rgba(244,63,94,0.08)", border: "rgba(244,63,94,0.2)" },
  "Neighbor Drama": { text: "#bef264", bg: "rgba(132,204,22,0.08)", border: "rgba(132,204,22,0.2)" },
  "Friend Betrayal": { text: "#f9a8d4", bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.2)" },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer"
      style={{
        background: "rgba(139,92,246,0.15)",
        border: "1px solid rgba(139,92,246,0.3)",
        color: "#c4b5fd",
      }}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-green-400" />
          <span style={{ color: "#4ade80" }}>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          Copy
        </>
      )}
    </motion.button>
  );
}

export default function SharedScriptView({ script }: SharedScriptViewProps) {
  const colors = categoryColors[script.category] || categoryColors.Emotional;

  return (
    <section className="relative w-full px-4 sm:px-6 pb-20" style={{ paddingTop: "140px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {/* Back link */}
        <Link href="/stories">
          <motion.div
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 mb-6 cursor-pointer"
            style={{ color: "#71717a", fontSize: "13px" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </motion.div>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-bold"
              style={{
                background: colors.bg,
                border: `1px solid ${colors.border}`,
                color: colors.text,
              }}
            >
              {script.category}
            </span>
            {script.duration && (
              <div className="flex items-center gap-1" style={{ color: "#52525b", fontSize: "12px" }}>
                <Clock className="w-3.5 h-3.5" />
                {script.duration}
              </div>
            )}
          </div>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 36px)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.3,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {script.title}
          </h1>
        </motion.div>

        {/* Hooks Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl p-5 mb-4"
          style={{
            background: "rgba(24,24,27,0.95)",
            border: "1px solid rgba(63,63,70,1)",
          }}
        >
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
          </div>
          <div className="flex flex-col gap-3">
            {script.hooks?.map((hook, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-3 p-4 rounded-xl"
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
                  <p style={{ color: "#d4d4d8", fontSize: "14px", lineHeight: 1.6, fontWeight: 500 }}>
                    {hook}
                  </p>
                </div>
                <div className="shrink-0">
                  <CopyButton text={hook} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Script Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden mb-4"
          style={{
            background: "rgba(24,24,27,0.95)",
            border: "1px solid rgba(63,63,70,1)",
          }}
        >
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{
              borderBottom: "1px solid rgba(63,63,70,0.8)",
              background: "rgba(18,18,20,0.8)",
            }}
          >
            <span style={{ color: "#52525b", fontSize: "13px", fontWeight: 500 }}>
              script.txt
            </span>
            <CopyButton text={script.script} />
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
              {script.script}
            </p>
          </div>
        </motion.div>

        {/* Thumbnail */}
        {script.thumbnail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-5 mb-4"
            style={{
              background: "rgba(24,24,27,0.95)",
              border: "1px solid rgba(63,63,70,1)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-fuchsia-400" />
                <span style={{ color: "#d946ef", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Thumbnail Idea
                </span>
              </div>
              <CopyButton text={script.thumbnail} />
            </div>
            <p style={{ color: "#a1a1aa", fontSize: "14px", lineHeight: 1.7 }}>
              {script.thumbnail}
            </p>
          </motion.div>
        )}

        {/* Caption */}
        {script.caption && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="rounded-2xl p-5 mb-4"
            style={{
              background: "rgba(24,24,27,0.95)",
              border: "1px solid rgba(63,63,70,1)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span style={{ color: "#60a5fa", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Caption
                </span>
              </div>
              <CopyButton text={script.caption} />
            </div>
            <p style={{ color: "#d4d4d8", fontSize: "14px", lineHeight: 1.7, fontWeight: 500 }}>
              {script.caption}
            </p>
          </motion.div>
        )}

        {/* Hashtags */}
        {script.hashtags && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl p-5 mb-4"
            style={{
              background: "rgba(24,24,27,0.95)",
              border: "1px solid rgba(63,63,70,1)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-green-400" />
                <span style={{ color: "#4ade80", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Hashtags
                </span>
              </div>
              <CopyButton text={script.hashtags} />
            </div>
            <div className="flex flex-wrap gap-2">
              {script.hashtags.split(" ").filter(Boolean).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.15)",
                    color: "#86efac",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center mt-10 p-8 rounded-2xl"
          style={{
            background: "rgba(139,92,246,0.06)",
            border: "1px solid rgba(139,92,246,0.15)",
          }}
        >
          <p style={{ color: "white", fontWeight: 800, fontSize: "18px", marginBottom: "8px" }}>
            Want a script like this for your story?
          </p>
          <p style={{ color: "#71717a", fontSize: "14px", marginBottom: "20px" }}>
            Paste your story and get a viral script in 10 seconds.
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-xl text-white text-sm font-bold cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a21caf)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.35)",
              }}
            >
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Try StoryFlip Free
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}