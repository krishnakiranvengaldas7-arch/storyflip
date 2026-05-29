"use client";

import { motion } from "framer-motion";

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full flex justify-center px-6 py-8"
    >
      <div
        className="w-full text-center py-16 px-8 rounded-2xl"
        style={{
          maxWidth: "48rem",
          background: "rgba(18,18,20,0.6)",
          border: "1px solid rgba(39,39,42,0.8)",
        }}
      >
        {/* Animated Icon */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ fontSize: "48px", marginBottom: "16px" }}
        >
          🎬
        </motion.div>

        {/* Heading */}
        <h3
          style={{
            color: "#3f3f46",
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Your script will appear here
        </h3>

        {/* Subtext */}
        <p
          style={{
            color: "#27272a",
            fontSize: "14px",
            lineHeight: 1.6,
            maxWidth: "320px",
            margin: "0 auto",
          }}
        >
          Paste a story or drop a single idea above, pick a category, and hit
          Generate.
        </p>

        {/* Animated dots */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#3f3f46",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}