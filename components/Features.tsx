"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section
      id="features"
      className="relative px-6 md:px-12 py-24 max-w-6xl mx-auto w-full"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6"
        >
          <span className="text-violet-300 text-sm font-medium">
            Why StoryFlip Works
          </span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          Built For Creators Who{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Want Results
          </span>
        </h2>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Every feature is designed around one goal — turning your raw stories
          into scripts that make people stop scrolling and feel something real.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300"
            style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(63,63,70,1)" }}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/5 group-hover:to-fuchsia-600/5 transition-all duration-500 pointer-events-none rounded-2xl" />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/0 group-hover:via-violet-500/50 to-transparent transition-all duration-500" />

            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative z-10 w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-zinc-700/80 flex items-center justify-center text-2xl mb-5 transition-colors duration-300"
            >
              {feature.icon}
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-100 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
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
        className="text-center mt-16"
      >
        <p className="text-zinc-500 text-base mb-6">
          Join thousands of creators already using StoryFlip
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-base shadow-2xl shadow-violet-500/30 transition-all duration-300"
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative z-10">Start Creating For Free →</span>
        </motion.button>
      </motion.div>
    </section>
  );
}