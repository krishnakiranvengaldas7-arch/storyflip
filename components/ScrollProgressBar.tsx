"use client";

import { motion, useScroll, useSpring, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [progressPercent, setProgressPercent] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [tiredness, setTiredness] = useState(0); // 0 = fresh, 1 = tired, 2 = exhausted
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tiredTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const exhaustedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setProgressPercent(v);
      setIsScrolling(true);
      setTiredness(0);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (tiredTimeoutRef.current) clearTimeout(tiredTimeoutRef.current);
      if (exhaustedTimeoutRef.current) clearTimeout(exhaustedTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        tiredTimeoutRef.current = setTimeout(() => {
          setTiredness(1);
          exhaustedTimeoutRef.current = setTimeout(() => {
            setTiredness(2);
          }, 2000);
        }, 800);
      }, 150);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const robotX = `calc(${progressPercent * 100}vw - 20px)`;

  const getRobotEmoji = () => {
    if (isScrolling) return "🤖";
    if (tiredness === 0) return "🤖";
    if (tiredness === 1) return "😓";
    return "😵";
  };

  const getSweatDrops = () => {
    if (tiredness === 1) return "💧";
    if (tiredness === 2) return "💦";
    return "";
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: "6px",
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #7c3aed, #a21caf, #d946ef)",
          transformOrigin: "0%",
          zIndex: 9999,
          boxShadow: "0 0 8px rgba(139,92,246,0.6)",
        }}
      />

      {/* Robot mascot */}
      <motion.div
        style={{
          position: "fixed",
          top: "0px",
          left: robotX,
          zIndex: 10000,
          pointerEvents: "none",
          lineHeight: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        animate={
          isScrolling
            ? {
                y: [0, -4, 0, -2, 0],
                rotate: [-8, 8, -8],
                scale: [1, 1.1, 1],
              }
            : tiredness === 2
            ? {
                y: [0, 2, 0],
                rotate: [0, -15, 0],
                scale: [1, 0.95, 1],
              }
            : tiredness === 1
            ? {
                y: [0, 1, 0],
                rotate: [-3, 3, -3],
              }
            : {
                y: [0, -2, 0],
              }
        }
        transition={{
          duration: isScrolling ? 0.3 : tiredness === 2 ? 1.5 : 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Sweat drops above robot */}
        {tiredness > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: "10px",
              marginBottom: "1px",
              filter: "drop-shadow(0 0 4px rgba(59,130,246,0.6))",
            }}
          >
            {getSweatDrops()}
          </motion.div>
        )}

        {/* Robot body */}
        <div
          style={{
            fontSize: tiredness === 2 ? "22px" : "20px",
            filter: isScrolling
              ? "drop-shadow(0 0 8px rgba(139,92,246,1))"
              : tiredness === 2
              ? "drop-shadow(0 0 4px rgba(239,68,68,0.6)) grayscale(0.3)"
              : "drop-shadow(0 0 6px rgba(139,92,246,0.8))",
            transition: "filter 0.5s ease",
          }}
        >
          {getRobotEmoji()}
        </div>

        {/* Speech bubble when exhausted */}
        {tiredness === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            style={{
              position: "absolute",
              top: "-22px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(24,24,27,0.95)",
              border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: "6px",
              padding: "2px 6px",
              fontSize: "9px",
              color: "#f87171",
              whiteSpace: "nowrap",
              fontWeight: 700,
            }}
          >
            pls scroll 😭
          </motion.div>
        )}
      </motion.div>
    </>
  );
}