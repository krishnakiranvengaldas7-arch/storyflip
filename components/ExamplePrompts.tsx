"use client";

import { motion } from "framer-motion";
import { examplePrompts } from "@/lib/data";
import { Category, InputMode } from "@/types";

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

      {/* Cards Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {examplePrompts.map((prompt, index) => {
          const colors = categoryColors[prompt.category];
          const modeLabel = modeLabels[prompt.mode];
          return (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectExample(prompt.fullStory, prompt.category)}
              className="group relative rounded-2xl p-5 cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(18,18,20,0.8)",
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
    </section>
  );
}