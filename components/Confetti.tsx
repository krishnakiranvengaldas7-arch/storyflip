"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
}

interface ConfettiProps {
  trigger: boolean;
}

export default function Confetti({ trigger }: ConfettiProps) {
  const pieces = useRef<ConfettiPiece[]>([]);

  const colors = [
    "#7c3aed", "#a21caf", "#a78bfa", "#f0abfc",
    "#fb7185", "#fbbf24", "#34d399", "#60a5fa",
    "#ffffff", "#f472b6",
  ];

  if (trigger && pieces.current.length === 0) {
    pieces.current = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 0.8,
    }));
  }

  if (!trigger) {
    pieces.current = [];
  }

  return (
    <AnimatePresence>
      {trigger && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 9998,
            overflow: "hidden",
          }}
        >
          {pieces.current.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                x: `${piece.x}vw`,
                y: "-20px",
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: "110vh",
                rotate: piece.rotation * 4,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "easeIn",
              }}
              style={{
                position: "absolute",
                width: piece.size,
                height: piece.size * 0.6,
                background: piece.color,
                borderRadius: "2px",
                top: 0,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}