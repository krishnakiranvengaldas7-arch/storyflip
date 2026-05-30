"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 w-full"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <span style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 600 }}>
            Why StoryFlip Works
          </span>
        </motion.div>

        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 900,
            color: "white",
            marginBottom: "16px",
            lineHeight: 1.2,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Built For Creators Who{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa, #f0abfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Want Results
          </span>
        </h2>
        <p style={{ color: "#52525b", fontSize: "17px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          Every feature is designed around one goal — turning your raw stories
          into scripts that make people stop scrolling and feel something real.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-default"
            style={{
              background: "rgba(18,18,20,0.8)",
              border: "1px solid rgba(39,39,42,0.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Hover glow border */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(217,70,239,0.08))",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)",
              }}
            />

            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-all duration-300"
              style={{
                background: "rgba(39,39,42,0.8)",
                border: "1px solid rgba(63,63,70,0.5)",
              }}
            >
              {feature.icon}
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              <h3
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "17px",
                  marginBottom: "8px",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#52525b", fontSize: "14px", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16 px-6"
      >
        <p style={{ color: "#3f3f46", fontSize: "15px", marginBottom: "20px" }}>
          Join thousands of creators already using StoryFlip
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative px-8 py-4 rounded-2xl text-white font-bold text-base"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #a21caf)",
            boxShadow: "0 8px 32px rgba(124,58,237,0.3)",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #a21caf)",
              filter: "blur(16px)",
              opacity: 0.4,
              zIndex: -1,
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Start Creating For Free →
        </motion.button>
      </motion.div>
    </section>
  );
}