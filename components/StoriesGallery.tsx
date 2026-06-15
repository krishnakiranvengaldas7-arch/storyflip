"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Clock, Zap } from "lucide-react";

interface Script {
  id: string;
  slug: string;
  category: string;
  title: string;
  hooks: string[];
  script: string;
  duration: string;
  created_at: string;
}

interface StoriesGalleryProps {
  scripts: Script[];
}

const categories = [
  "All",
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

export default function StoriesGallery({ scripts }: StoriesGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredScripts =
    activeCategory === "All"
      ? scripts
      : scripts.filter((s) => s.category === activeCategory);

  return (
    <section className="relative w-full px-4 sm:px-6 pb-20" style={{ paddingTop: "140px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.2)",
              color: "#8b5cf6",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Story Gallery
          </span>
          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 900,
              color: "white",
              marginBottom: "12px",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Scripts Created By{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Community
            </span>
          </h1>
          <p style={{ color: "#52525b", fontSize: "15px" }}>
            Real viral scripts generated with StoryFlip. Browse, get inspired, create your own.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const colors = categoryColors[cat];
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                style={
                  isActive
                    ? cat === "All"
                      ? {
                          background: "linear-gradient(135deg, #7c3aed, #a21caf)",
                          color: "white",
                          border: "1px solid transparent",
                        }
                      : {
                          background: colors?.bg || "rgba(139,92,246,0.1)",
                          border: `1px solid ${colors?.border || "rgba(139,92,246,0.3)"}`,
                          color: colors?.text || "#c4b5fd",
                        }
                    : {
                        background: "rgba(39,39,42,0.5)",
                        border: "1px solid rgba(63,63,70,0.5)",
                        color: "#71717a",
                      }
                }
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredScripts.length === 0 && (
          <div className="text-center py-20">
            <p style={{ color: "#52525b", fontSize: "15px" }}>
              No scripts yet in this category. Be the first to generate one!
            </p>
          </div>
        )}

        {/* Scripts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredScripts.map((script, index) => {
            const colors = categoryColors[script.category] || categoryColors.Emotional;
            return (
              <motion.div
                key={script.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 9) * 0.05 }}
              >
                <Link href={`/s/${script.slug}`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="h-full rounded-2xl p-5 cursor-pointer transition-all duration-300"
                    style={{
                      background: "rgba(24,24,27,0.8)",
                      border: "1px solid rgba(63,63,70,0.8)",
                    }}
                  >
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-3">
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
                          <Clock className="w-3 h-3" />
                          {script.duration}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        color: "white",
                        fontWeight: 800,
                        fontSize: "16px",
                        lineHeight: 1.4,
                        marginBottom: "10px",
                      }}
                    >
                      {script.title}
                    </h3>

                    {/* First hook preview */}
                    {script.hooks?.[0] && (
                      <div className="flex items-start gap-2">
                        <Zap className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#8b5cf6" }} />
                        <p
                          style={{
                            color: "#a1a1aa",
                            fontSize: "13px",
                            lineHeight: 1.6,
                          }}
                          className="line-clamp-2"
                        >
                          {script.hooks[0]}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}