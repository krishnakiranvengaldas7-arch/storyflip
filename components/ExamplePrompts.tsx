"use client";

import { motion } from "framer-motion";
import { examplePrompts } from "@/lib/data";
import { Category } from "@/types";

const categoryColors: Record<Category, string> = {
  Cheating: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  Horror: "text-red-400 border-red-500/30 bg-red-500/10",
  Emotional: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  Revenge: "text-orange-400 border-orange-500/30 bg-orange-500/10",
  "True Crime": "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  Funny: "text-green-400 border-green-500/30 bg-green-500/10",
};

interface ExamplePromptsProps {
  onSelectExample: (story: string, category: Category) => void;
}

export default function ExamplePrompts({ onSelectExample }: ExamplePromptsProps) {
  return (
    <section className="relative px-6 md:px-12 py-16 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Try These Stories
        </h2>
        <p className="text-zinc-500 text-base md:text-lg">
          Click any card to instantly load it into the generator
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {examplePrompts.map((prompt, index) => (
          <motion.div
            key={prompt.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectExample(prompt.fullStory, prompt.category)}
            className="group relative rounded-2xl p-5 cursor-pointer transition-all duration-300 overflow-hidden"
            style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(63,63,70,1)" }}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/5 group-hover:to-fuchsia-600/5 transition-all duration-300 pointer-events-none rounded-2xl" />

            {/* Category Badge */}
            <div className="relative z-10 mb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                  categoryColors[prompt.category]
                }`}
              >
                {prompt.category}
              </span>
            </div>

            {/* Preview Text */}
            <p className="relative z-10 text-zinc-300 text-sm leading-relaxed font-medium mb-4 line-clamp-3">
              {prompt.preview}
            </p>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-zinc-600 text-xs">
                Click to use this story
              </span>
              <motion.span
                className="text-violet-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={false}
              >
                Use this →
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}