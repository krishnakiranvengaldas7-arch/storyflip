"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      {/* Deep background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,1) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(217,70,239,1) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 mb-8"
      >
        <motion.div
          animate={{ boxShadow: ["0 0 20px rgba(124,58,237,0.2)", "0 0 40px rgba(124,58,237,0.4)", "0 0 20px rgba(124,58,237,0.2)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full"
          style={{
            background: "rgba(124,58,237,0.1)",
            border: "1px solid rgba(124,58,237,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full"
            style={{ background: "#a78bfa" }}
          />
          <span style={{ color: "#c4b5fd", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em" }}>
            AI-Powered Script Generator
          </span>
        </motion.div>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center mb-6"
        style={{ maxWidth: "900px" }}
      >
        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Turn Raw Stories Into{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #f0abfc 50%, #fb7185 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Viral Scripts
          </span>
        </h1>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            height: "3px",
            background: "linear-gradient(90deg, transparent, #a78bfa, #f0abfc, #fb7185, transparent)",
            borderRadius: "999px",
            marginTop: "8px",
          }}
        />
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 text-center mb-12"
        style={{
          color: "#71717a",
          fontSize: "clamp(15px, 2vw, 19px)",
          maxWidth: "600px",
          lineHeight: 1.7,
        }}
      >
        Paste any Reddit story, confession, or emotional experience and our AI
        transforms it into a{" "}
        <span style={{ color: "#a1a1aa", fontWeight: 600 }}>
          cinematic short-form script
        </span>{" "}
        built for YouTube Shorts, TikTok, and Reels.
      </motion.p>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 flex items-center gap-12 md:gap-16"
      >
        {[
          { target: 10, suffix: "s", label: "Generation Time" },
          { target: 6, suffix: "", label: "Story Categories" },
          { target: 100, suffix: "%", label: "AI Powered" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            className="text-center"
          >
            <div
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 900,
                color: "white",
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, #ffffff, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {mounted && <AnimatedCounter target={stat.target} suffix={stat.suffix} />}
            </div>
            <div style={{ color: "#52525b", fontSize: "12px", marginTop: "4px", fontWeight: 500 }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute left-[8%] top-[30%] hidden md:block"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: "28px", filter: "blur(0.5px)" }}
      >
        🎬
      </motion.div>
      <motion.div
        className="absolute right-[8%] top-[25%] hidden md:block"
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ fontSize: "24px", filter: "blur(0.5px)" }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute left-[12%] bottom-[25%] hidden md:block"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ fontSize: "22px", filter: "blur(0.5px)" }}
      >
        🔥
      </motion.div>
      <motion.div
        className="absolute right-[12%] bottom-[30%] hidden md:block"
        animate={{ y: [0, -8, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ fontSize: "20px", filter: "blur(0.5px)" }}
      >
        🎯
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ color: "#3f3f46", fontSize: "11px", letterSpacing: "0.1em" }}>
          SCROLL TO CREATE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1px solid rgba(63,63,70,0.8)" }}
        >
          <motion.div
            animate={{ height: ["4px", "8px", "4px"], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "2px", background: "#7c3aed", borderRadius: "999px" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}