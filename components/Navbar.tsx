"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
          <span className="text-white font-black text-sm">S</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">
          Story<span className="text-violet-400">Flip</span>
        </span>
      </motion.div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#features"
          className="hidden md:block text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
        >
          Features
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors duration-200 shadow-lg shadow-violet-500/20"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}