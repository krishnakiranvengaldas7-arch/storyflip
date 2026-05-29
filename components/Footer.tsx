"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative px-6 md:px-12 py-12 border-t border-zinc-900"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-violet-600/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-black text-xs">S</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Story<span className="text-violet-400">Flip</span>
              </span>
            </div>
            <p className="text-zinc-600 text-sm text-center md:text-left max-w-xs">
              Turn raw human stories into viral short-form scripts with the
              power of AI.
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
                  className="text-zinc-600 hover:text-violet-400 text-sm transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <p className="text-zinc-700 text-xs">
              © 2025 StoryFlip. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Divider and Credit */}
        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-700 text-xs text-center md:text-left">
            Powered by OpenRouter AI • Built for creators who feel everything
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-zinc-700 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}