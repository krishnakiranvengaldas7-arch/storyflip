"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "📋",
    title: "Paste Your Story",
    description:
      "Drop in any Reddit post, confession, true crime case, or emotional experience. Raw and unfiltered works best.",
    color: "#fbbf24",
    glow: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    number: "02",
    emoji: "🎭",
    title: "Pick a Category",
    description:
      "Choose from 16 emotional frameworks — Cheating, Horror, Revenge, True Crime, Gaslighting, Stalker and more. Each one hits differently.",
    color: "#dc2626",
    glow: "rgba(220,38,38,0.15)",
    border: "rgba(220,38,38,0.2)",
  },
  {
    number: "03",
    emoji: "🚀",
    title: "Get Your Script",
    description:
      "AI generates a full viral script with hooks, captions, and hashtags — ready to record in under 10 seconds.",
    color: "#10b981",
    glow: "rgba(16,185,129,0.15)",
    border: "rgba(16,185,129,0.2)",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

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
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.2)",
              color: "#fbbf24",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            How It Works
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
            From Story to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fbbf24, #dc2626)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Viral Script
            </span>{" "}
            in 3 Steps
          </h2>
          <p style={{ color: "#52525b", fontSize: "16px", maxWidth: "480px", margin: "0 auto" }}>
            No editing skills needed. No complicated tools. Just paste, pick, and post.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(245,158,11,0.3), rgba(220,38,38,0.3), rgba(16,185,129,0.3))",
              zIndex: 0,
              width: "50%",
              left: "25%",
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl p-6 flex flex-col items-center text-center cursor-default"
              style={{
                background: "rgba(24,24,27,0.8)",
                border: `1px solid ${step.border}`,
                boxShadow: `0 4px 24px ${step.glow}`,
                zIndex: 1,
              }}
            >
              {/* Number badge */}
              <div
                className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full text-xs font-black"
                style={{
                  background: step.glow,
                  border: `1px solid ${step.border}`,
                  color: step.color,
                  letterSpacing: "0.05em",
                }}
              >
                {step.number}
              </div>

              {/* Emoji */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 mt-3"
                style={{
                  background: step.glow,
                  border: `1px solid ${step.border}`,
                }}
              >
                {step.emoji}
              </motion.div>

              {/* Title */}
              <h3
                style={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: "18px",
                  marginBottom: "10px",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#71717a",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}