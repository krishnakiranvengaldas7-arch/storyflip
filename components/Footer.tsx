"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-12 px-6 md:px-12"
      style={{ borderTop: "1px solid rgba(39,39,42,0.6)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom center, rgba(124,58,237,0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ maxWidth: "1152px", margin: "0 auto" }}
      >
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a21caf)",
                boxShadow: "0 0 12px rgba(124,58,237,0.3)",
              }}
            >
              <span style={{ color: "white", fontWeight: 900, fontSize: "12px" }}>S</span>
            </div>
            <span
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: "18px",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Story
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #f0abfc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Flip
              </span>
            </span>
          </div>
          <p style={{ color: "#3f3f46", fontSize: "13px", maxWidth: "260px", textAlign: "left" }}>
            Turn raw human stories into viral short-form scripts with the power of AI.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6">
            {["Features", "Privacy", "Terms", "Contact"].map((link) => (
              <motion.a
                key={link}
                whileHover={{ color: "#a78bfa" }}
                href="#"
                style={{ color: "#3f3f46", fontSize: "13px", textDecoration: "none" }}
              >
                {link}
              </motion.a>
            ))}
          </div>
          <p style={{ color: "#27272a", fontSize: "12px" }}>
            © 2025 StoryFlip. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8"
        style={{
          borderTop: "1px solid rgba(39,39,42,0.4)",
          maxWidth: "1152px",
          margin: "32px auto 0",
        }}
      >
        <p style={{ color: "#27272a", fontSize: "12px" }}>
          Powered by OpenRouter AI • Built for creators who feel everything
        </p>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }}
          />
          <span style={{ color: "#27272a", fontSize: "12px" }}>All systems operational</span>
        </div>
      </div>
    </motion.footer>
  );
}