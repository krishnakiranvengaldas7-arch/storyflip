"use client";

import { motion } from "framer-motion";
import { examplePrompts } from "@/lib/data";
import { Category, InputMode } from "@/types";
import { useState, useEffect } from "react";

const categoryColors: Record<Category, { text: string; bg: string; border: string }> = {
  Cheating: {
    text: "#fda4af",
    bg: "rgba(244,63,94,0.08)",
    border: "rgba(244,63,94,0.2)",
  },
  Horror: {
    text: "#fca5a5",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
  },
  Emotional: {
    text: "#93c5fd",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  Revenge: {
    text: "#fdba74",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
  },
  "True Crime": {
    text: "#fde68a",
    bg: "rgba(234,179,8,0.08)",
    border: "rgba(234,179,8,0.2)",
  },
  Funny: {
    text: "#86efac",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
  },
  "Missing Person": {
    text: "#67e8f9",
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.2)",
  },
  "Family Secrets": {
    text: "#d8b4fe",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
  },
  "Workplace Drama": {
    text: "#fcd34d",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
  Supernatural: {
    text: "#c4b5fd",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  AITA: {
    text: "#7dd3fc",
    bg: "rgba(14,165,233,0.08)",
    border: "rgba(14,165,233,0.2)",
  },
  Stalker: {
    text: "#fca5a5",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
  },
  Gaslighting: {
    text: "#f0abfc",
    bg: "rgba(217,70,239,0.08)",
    border: "rgba(217,70,239,0.2)",
  },
  Confession: {
    text: "#fda4af",
    bg: "rgba(244,63,94,0.08)",
    border: "rgba(244,63,94,0.2)",
  },
  "Neighbor Drama": {
    text: "#bef264",
    bg: "rgba(132,204,22,0.08)",
    border: "rgba(132,204,22,0.2)",
  },
  "Friend Betrayal": {
    text: "#f9a8d4",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
  },
};

const modeLabels: Record<InputMode, { label: string; color: string }> = {
  transform: { label: "Transform", color: "#a78bfa" },
  generate: { label: "Generate", color: "#34d399" },
};

interface ExamplePromptsProps {
  onSelectExample: (story: string, category: Category) => void;
}

export default function ExamplePrompts({ onSelectExample }: ExamplePromptsProps) {
  return (
    <section className="relative py-16 w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-6"
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 900,
            color: "white",
            marginBottom: "8px",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Try These Stories
        </h2>
        <p style={{ color: "#52525b", fontSize: "15px" }}>
          Click any card to instantly load it into the generator
        </p>
      </motion.div>
<div className="marquee-container" style={{ overflow: "hidden", width: "100%", padding: "20px 0" }}>
      {/* Cards Grid */}
        <div
        className="flex gap-4 px-4 sm:px-6 marquee-track"
        style={{ width: "max-content" }}
>
       {[...examplePrompts, ...examplePrompts].map((prompt, index) => {
          const colors = categoryColors[prompt.category];
          const modeLabel = modeLabels[prompt.mode];
          return (
            
            <motion.div
              key={`${prompt.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectExample(prompt.fullStory, prompt.category)}
              className="marquee-card group relative rounded-2xl p-5 cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(18,18,20,0.8)",
                width: "340px", flexShrink: 0,
                border: "1px solid rgba(39,39,42,0.8)",
                backdropFilter: "blur(10px)",
              }}
            >
              
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${colors.bg} 0%, transparent 70%)`,
                  border: `1px solid ${colors.border}`,
                }}
              />

              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.text}, transparent)`,
                }}
              />

              {/* Badges row */}
              <div className="relative z-10 flex items-center gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    color: colors.text,
                  }}
                >
                  {prompt.category}
                </span>
                <span
                  className="px-2 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(39,39,42,0.6)",
                    color: modeLabel.color,
                    fontSize: "10px",
                  }}
                >
                  {modeLabel.label}
                </span>
              </div>

              {/* Preview Text */}
              <p
                className="relative z-10 mb-4 line-clamp-3"
                style={{
                  color: "#a1a1aa",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                {prompt.preview}
              </p>

              {/* Footer */}
              <div className="relative z-10 flex items-center justify-between">
                <span style={{ color: "#3f3f46", fontSize: "12px" }}>
                  Click to use
                </span>
                <motion.span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-bold"
                  style={{ color: colors.text }}
                >
                  Use this →
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>
     </div>
    </section>
  );
}