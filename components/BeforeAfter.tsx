"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const beforeText = `So my wife and I have been married for 6 years. Last week I found receipts in her bag for a hotel I've never been to. When I asked her about it she said it was a work trip but I checked with her office and they said there was no work trip that week. She's been distant for months and always on her phone. I don't know what to do. I feel sick. We have two kids together. I thought everything was fine.`;

const afterText = `She said it was a work trip.
Her office said she never left.

6 years. Two kids. One receipt.

I found it at the bottom of her bag — a hotel I'd never heard of, a date I remembered clearly because I was home alone with our kids that night.

When I asked her, she didn't even flinch.

That's when I knew.

The worst part wasn't the lie.
It was how easily she told it.`;

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderX(Math.min(Math.max(x, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative w-full py-20">
      <div
        className="relative w-full px-4 sm:px-6"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.2)",
              color: "#8b5cf6",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            See The Difference
          </motion.span>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 900,
              color: "white",
              marginBottom: "12px",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Raw Story vs{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Viral Script
            </span>
          </h2>
          <p style={{ color: "#52525b", fontSize: "16px" }}>
            Drag the slider to see what StoryFlip does to your story
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden select-none"
          style={{
            height: "420px",
            border: "1px solid rgba(63,63,70,1)",
            background: "rgba(24,24,27,0.95)",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* BEFORE side — full width background */}
          <div
            className="absolute inset-0 p-8 flex flex-col"
            style={{ background: "rgba(24,24,27,0.95)" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start"
              style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.2)",
                color: "#f87171",
              }}
            >
              ❌ Before — Raw Story
            </div>
            <p
              style={{
                color: "#52525b",
                fontSize: "14px",
                lineHeight: 1.8,
                fontFamily: "monospace",
              }}
            >
              {beforeText}
            </p>
          </div>

          {/* AFTER side — clipped by slider */}
          <div
            className="absolute inset-0 p-8 flex flex-col"
            style={{
              clipPath: `inset(0 0 0 ${sliderX}%)`,
              background: "rgba(18,18,22,1)",
              borderLeft: "none",
            }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start"
              style={{
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#c4b5fd",
              }}
            >
              ✨ After — Viral Script
            </div>
            <p
              style={{
                color: "#d4d4d8",
                fontSize: "14px",
                lineHeight: 2,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                fontWeight: 500,
              }}
            >
              {afterText}
            </p>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 flex flex-col items-center justify-center"
            style={{
              left: `${sliderX}%`,
              transform: "translateX(-50%)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            {/* Line */}
            <div
              className="absolute inset-y-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(139,92,246,0.8), rgba(217,70,239,0.8), transparent)",
              }}
            />
            {/* Handle circle */}
            <motion.div
              animate={{ scale: isDragging ? 1.15 : 1 }}
              className="relative w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a21caf)",
                boxShadow: "0 0 20px rgba(139,92,246,0.5)",
                border: "2px solid rgba(255,255,255,0.15)",
              }}
            >
              <span style={{ color: "white", fontSize: "14px", fontWeight: 700 }}>
                ⇔
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-4 text-xs"
          style={{ color: "#3f3f46" }}
        >
          ← drag to compare →
        </motion.p>
      </div>
    </section>
  );
}