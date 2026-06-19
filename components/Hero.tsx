"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

function FloatingCard({
  style,
  delay,
  depth,
  mouseX,
  mouseY,
  children,
}: {
  style: React.CSSProperties;
  delay: number;
  depth: number;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
  children: React.ReactNode;
}) {
  const translateX = useTransform(mouseX, (v) => v * depth);
  const translateY = useTransform(mouseY, (v) => v * depth);

  return (
    <motion.div
      className="absolute hidden md:block"
      style={{
        ...style,
        x: translateX,
        y: translateY,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotateZ: [0, 2, 0],
        }}
        transition={{ duration: 6 + depth, repeat: Infinity, ease: "easeInOut", delay }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div
          style={{
            transform: `rotateX(8deg) rotateY(-12deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

function MiniScriptCard({ accent, label, lines }: { accent: string; label: string; lines: string[] }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        width: "180px",
        background: "rgba(28,25,23,0.75)",
        border: `1px solid ${accent}33`,
        backdropFilter: "blur(12px)",
        boxShadow: `0 20px 60px -10px ${accent}40, 0 0 0 1px rgba(255,255,255,0.03)`,
      }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ borderBottom: `1px solid ${accent}22`, background: "rgba(255,255,255,0.02)" }}
      >
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(239,68,68,0.6)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(245,158,11,0.6)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(34,197,94,0.6)" }} />
        </div>
        <span style={{ color: accent, fontSize: "9px", fontWeight: 700, letterSpacing: "0.05em" }}>
          {label}
        </span>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              height: "5px",
              borderRadius: "3px",
              width: line,
              background: i === 0 ? `${accent}55` : "rgba(255,255,255,0.08)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      rawMouseX.set(x);
      rawMouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  const glowX = useTransform(mouseX, (v) => v * -30);
  const glowY = useTransform(mouseY, (v) => v * -30);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden" style={{ perspective: "1500px" }}>
      {/* Deep background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.10, 0.18, 0.10],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            x: glowX,
            y: glowY,
            position: "absolute",
            top: "25%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,1) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.13, 0.06],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            x: useTransform(mouseX, (v) => v * 20),
            y: useTransform(mouseY, (v) => v * 20),
            position: "absolute",
            top: "33%",
            left: "25%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(220,38,38,1) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{
            x: useTransform(mouseX, (v) => v * -15),
            y: useTransform(mouseY, (v) => v * -15),
            position: "absolute",
            bottom: "33%",
            right: "25%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(180,83,9,1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 3D Floating Script Cards */}
      {mounted && (
        <>
          <FloatingCard
            style={{ left: "5%", top: "18%" }}
            delay={0.3}
            depth={-25}
            mouseX={mouseX}
            mouseY={mouseY}
          >
            <MiniScriptCard accent="#fbbf24" label="HORROR.SCRIPT" lines={["70%", "100%", "85%", "40%"]} />
          </FloatingCard>

          <FloatingCard
            style={{ right: "4%", top: "14%" }}
            delay={0.5}
            depth={30}
            mouseX={mouseX}
            mouseY={mouseY}
          >
            <MiniScriptCard accent="#ef4444" label="REVENGE.SCRIPT" lines={["90%", "60%", "100%", "75%"]} />
          </FloatingCard>

          <FloatingCard
            style={{ left: "7%", bottom: "16%" }}
            delay={0.7}
            depth={20}
            mouseX={mouseX}
            mouseY={mouseY}
          >
            <MiniScriptCard accent="#dc2626" label="TRUE CRIME.SCRIPT" lines={["100%", "80%", "55%", "90%"]} />
          </FloatingCard>

          <FloatingCard
            style={{ right: "6%", bottom: "20%" }}
            delay={0.9}
            depth={-20}
            mouseX={mouseX}
            mouseY={mouseY}
          >
            <MiniScriptCard accent="#fb923c" label="FUNNY.SCRIPT" lines={["65%", "100%", "70%", "50%"]} />
          </FloatingCard>
        </>
      )}

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 mb-8"
      >
        <motion.div
          animate={{ boxShadow: ["0 0 20px rgba(245,158,11,0.2)", "0 0 40px rgba(245,158,11,0.4)", "0 0 20px rgba(245,158,11,0.2)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full"
          style={{
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.25)",
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full"
            style={{ background: "#fbbf24" }}
          />
          <span style={{ color: "#fcd34d", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em" }}>
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
        style={{
          maxWidth: "900px",
          x: useTransform(mouseX, (v) => v * 8),
          y: useTransform(mouseY, (v) => v * 8),
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            fontWeight: 900,
            color: "#fafaf9",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Turn Raw Stories Into{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #dc2626 100%)",
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
            background: "linear-gradient(90deg, transparent, #fbbf24, #f59e0b, #dc2626, transparent)",
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
          color: "#a8a29e",
          fontSize: "clamp(15px, 2vw, 19px)",
          maxWidth: "600px",
          lineHeight: 1.7,
        }}
      >
        Paste any Reddit story, confession, or emotional experience and our AI
        transforms it into a{" "}
        <span style={{ color: "#e7e5e4", fontWeight: 600 }}>
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
          { target: 16, suffix: "", label: "Story Categories" },
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
                background: "linear-gradient(135deg, #fafaf9, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {mounted && <AnimatedCounter target={stat.target} suffix={stat.suffix} />}
            </div>
            <div style={{ color: "#78716c", fontSize: "12px", marginTop: "4px", fontWeight: 500 }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ color: "#57534e", fontSize: "11px", letterSpacing: "0.1em" }}>
          SCROLL TO CREATE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1px solid rgba(87,83,78,0.8)" }}
        >
          <motion.div
            animate={{ height: ["4px", "8px", "4px"], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "2px", background: "#f59e0b", borderRadius: "999px" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}