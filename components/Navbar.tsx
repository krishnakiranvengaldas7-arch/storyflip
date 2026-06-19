"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(12,10,9,0)", "rgba(12,10,9,0.9)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(39,39,42,0)", "rgba(39,39,42,0.8)"]
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 48px",
        backgroundColor: navBackground as unknown as string,
        borderBottom: `1px solid`,
        borderColor: navBorder as unknown as string,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Logo */}
      <Link href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2.5 cursor-pointer"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px rgba(245,158,11,0.3)",
              "0 0 20px rgba(245,158,11,0.6)",
              "0 0 10px rgba(245,158,11,0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #dc2626)",
          }}
        >

          <span style={{ color: "white", fontWeight: 900, fontSize: "14px" }}>
            S
          </span>
        </motion.div>
        <span
          style={{
            color: "white",
            fontWeight: 800,
            fontSize: "20px",
            letterSpacing: "-0.02em",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Story
          <span
            style={{
              background: "linear-gradient(135deg, #fbbf24, #dc2626)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Flip
          </span>
        </span>
      </motion.div>
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <motion.a
          whileHover={{ color: "#fbbf24" }}
  href="/stories"
  className="hidden md:block text-sm font-medium transition-colors duration-200"
  style={{ color: "#71717a" }}
>
  Gallery
</motion.a>

        <motion.a
          whileHover={{ color: "#fbbf24" }}
          href="#features"
          className="hidden md:block text-sm font-medium transition-colors duration-200"
          style={{ color: "#71717a" }}
        >
          Features
        </motion.a>
        <Link href="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 rounded-xl text-white text-sm font-bold"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #dc2626)",
            boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
          }}
        >
          Get Started
        </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}