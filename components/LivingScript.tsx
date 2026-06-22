"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const scriptPages = [
  {
    category: "HORROR",
    accent: "#ef4444",
    title: "She Knew My Coffee Order",
    lines: [
      "He knew my coffee order before",
      "I'd ever spoken to him.",
      "[PAUSE]",
      "We'd never met. I'd never told",
      "anyone that order, except the",
      "barista, every morning, for a year.",
    ],
  },
  {
    category: "TRUE CRIME",
    accent: "#fbbf24",
    title: "The Polaroid In The Wall",
    lines: [
      "The Polaroid was taken inside",
      "our house. We had never seen",
      "this woman before.",
      "[BEAT]",
      "We found it taped behind the",
      "mirror during a renovation.",
    ],
  },
  {
    category: "REVENGE",
    accent: "#f59e0b",
    title: "Four Months Of Silence",
    lines: [
      "He fired me the same week I",
      "found out I was pregnant.",
      "[PAUSE]",
      "So I spent the next four months",
      "quietly documenting everything.",
      "Then I called a lawyer.",
    ],
  },
  {
    category: "CONFESSION",
    accent: "#dc2626",
    title: "Fifteen Years Of Silence",
    lines: [
      "I let my best friend take the",
      "blame for something I did.",
      "[BEAT]",
      "Fifteen years ago. It cost her",
      "a scholarship. She never said",
      "a word.",
    ],
  },
];

function TypewriterLine({ text, delay, accent }: { text: string; delay: number; accent: string }) {
  const [displayed, setDisplayed] = useState("");
  const isMarker = text === "[PAUSE]" || text === "[BEAT]";

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    let interval: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 22);
    }, delay);
    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  if (isMarker) {
    return (
      <div
        style={{
          color: accent,
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          opacity: displayed.length > 0 ? 0.8 : 0,
          transition: "opacity 0.3s",
          marginTop: "2px",
          marginBottom: "2px",
        }}
      >
        {displayed}
      </div>
    );
  }

  return (
    <div
      style={{
        color: "#d4d4d4",
        fontSize: "13.5px",
        lineHeight: 1.7,
        fontFamily: "monospace",
        minHeight: "1.7em",
      }}
    >
      {displayed}
      {displayed.length > 0 && displayed.length < text.length && (
        <span style={{ opacity: 0.5 }}>|</span>
      )}
    </div>
  );
}

export default function LivingScript() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isTearing, setIsTearing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 80, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / rect.width;
      const dy = (e.clientY - centerY) / rect.height;
      rawRotateY.set(dx * 18);
      rawRotateX.set(-dy * 14);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawRotateX, rawRotateY]);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsTearing(true);
      setTimeout(() => {
        setPageIndex((p) => (p + 1) % scriptPages.length);
        setIsTearing(false);
      }, 550);
    }, 6500);
    return () => clearInterval(cycle);
  }, []);

  const current = scriptPages[pageIndex];

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block"
      style={{
        width: "340px",
        height: "440px",
        perspective: "1800px",
      }}
    >
      {/* Stack of pages behind for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transformStyle: "preserve-3d",
          transform: "translateZ(-18px) translateX(8px) translateY(8px)",
          borderRadius: "10px",
          background: "rgba(28,25,23,0.5)",
          border: "1px solid rgba(68,64,60,0.4)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          transformStyle: "preserve-3d",
          transform: "translateZ(-9px) translateX(4px) translateY(4px)",
          borderRadius: "10px",
          background: "rgba(28,25,23,0.65)",
          border: "1px solid rgba(68,64,60,0.5)",
        }}
      />

      {/* Main interactive 3D card */}
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <AnimatePresence mode="wait">
          {!isTearing && (
            <motion.div
              key={pageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, rgba(28,25,23,0.97), rgba(18,16,15,0.97))",
                border: `1px solid ${current.accent}33`,
                boxShadow: `0 30px 90px -20px ${current.accent}30, 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
            >
              {/* Film grain texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />

              {/* Top bar - script.txt window */}
              <div
                className="flex items-center gap-2 px-5 py-3"
                style={{
                  borderBottom: `1px solid ${current.accent}22`,
                  background: "rgba(0,0,0,0.2)",
                }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(239,68,68,0.7)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(245,158,11,0.7)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(34,197,94,0.7)" }} />
                </div>
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ color: current.accent, fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em" }}
                >
                  ● {current.category}.SCRIPT
                </motion.span>
              </div>

              {/* Title */}
              <div className="px-5 pt-4 pb-2">
                <p
                  style={{
                    color: "#fafaf9",
                    fontWeight: 800,
                    fontSize: "16px",
                    lineHeight: 1.3,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {current.title}
                </p>
              </div>

              {/* Script body with typewriter */}
              <div className="px-5 pt-2 pb-5">
                {current.lines.map((line, i) => (
                  <TypewriterLine
                    key={`${pageIndex}-${i}`}
                    text={line}
                    delay={i * 380}
                    accent={current.accent}
                  />
                ))}
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${current.accent}, transparent)` }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page tear transition overlay */}
        <AnimatePresence>
          {isTearing && (
            <motion.div
              initial={{ clipPath: "inset(0 0 0 0)" }}
              animate={{ clipPath: "inset(0 0 100% 0)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, rgba(28,25,23,0.97), rgba(18,16,15,0.97))",
                border: `1px solid ${current.accent}33`,
                boxShadow: `0 30px 90px -20px ${current.accent}30`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, rgba(28,25,23,0.97), rgba(18,16,15,0.97))",
                }}
              />
              {/* Torn edge effect */}
              <svg
                className="absolute bottom-0 left-0 right-0"
                width="100%"
                height="12"
                viewBox="0 0 340 12"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 8,10 16,2 24,11 32,3 40,9 48,1 56,10 64,4 72,12 80,2 88,8 96,1 104,11 112,3 120,9 128,1 136,10 144,4 152,12 160,2 168,8 176,1 184,11 192,3 200,9 208,1 216,10 224,4 232,12 240,2 248,8 256,1 264,11 272,3 280,9 288,1 296,10 304,4 312,12 320,2 328,8 336,1 340,5 340,0"
                  fill="#0c0a09"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating accent particles near the card */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -right-3 w-2 h-2 rounded-full"
        style={{ background: current.accent, boxShadow: `0 0 12px ${current.accent}` }}
      />
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full"
        style={{ background: current.accent, boxShadow: `0 0 10px ${current.accent}` }}
      />
    </div>
  );
}