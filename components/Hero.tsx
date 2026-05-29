"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-indigo-600/8 blur-[80px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 mb-6"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-violet-300 text-sm font-medium">
            AI-Powered Script Generator
          </span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 text-center max-w-4xl mx-auto mb-6"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
          Turn Raw Stories Into{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Viral Scripts
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </span>
        </h1>
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 text-zinc-400 text-lg md:text-xl text-center max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Paste any Reddit story, confession, or emotional experience and our AI
        transforms it into a{" "}
        <span className="text-zinc-200 font-medium">
          cinematic short-form script
        </span>{" "}
        built for YouTube Shorts, TikTok, and Reels.
      </motion.p>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 flex items-center gap-8 md:gap-12"
      >
        {[
          { value: "10s", label: "Generation Time" },
          { value: "6", label: "Story Categories" },
          { value: "100%", label: "AI Powered" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl md:text-3xl font-black text-white">
              {stat.value}
            </div>
            <div className="text-zinc-500 text-xs md:text-sm mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs">Scroll to create</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}