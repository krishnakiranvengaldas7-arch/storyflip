"use client";

import { motion } from "framer-motion";
import { InputMode } from "@/types";
import { MODE_CONFIGS } from "@/lib/modeDetector";

interface ModeSelectorProps {
  selectedMode: InputMode;
  onModeChange: (mode: InputMode) => void;
  detectedMode: InputMode | null;
}

export default function ModeSelector({
  selectedMode,
  onModeChange,
  detectedMode,
}: ModeSelectorProps) {
  const modes: InputMode[] = ["transform", "generate"];

  return (
    <div className="w-full flex flex-col items-center gap-3 mb-6">
      {/* Mode Toggle */}
      <div
        className="relative flex items-center p-1 rounded-2xl"
        style={{
          background: "rgba(18,18,20,1)",
          border: "1px solid rgba(63,63,70,1)",
        }}
      >
        {/* Sliding Background */}
        <motion.div
          layoutId="modeBackground"
          className="absolute rounded-xl"
          style={{
            background:
              selectedMode === "transform"
                ? "linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(220,38,38,0.3) 100%)"
                : "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(5,150,105,0.2) 100%)",
            border:
              selectedMode === "transform"
                ? "1px solid rgba(245,158,11,0.4)"
                : "1px solid rgba(16,185,129,0.3)",
            top: "4px",
            bottom: "4px",
            left: selectedMode === "transform" ? "4px" : "50%",
            right: selectedMode === "generate" ? "4px" : "50%",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />

        {modes.map((mode) => {
          const config = MODE_CONFIGS[mode];
          const isSelected = selectedMode === mode;

          return (
            <motion.button
              key={mode}
              whileTap={{ scale: 0.97 }}
              onClick={() => onModeChange(mode)}
              className="relative z-10 flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-200 cursor-pointer"
              style={{ minWidth: "180px", justifyContent: "center" }}
            >
              <span style={{ fontSize: "16px" }}>{config.icon}</span>
              <div className="flex flex-col items-start">
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: isSelected ? "white" : "#71717a",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {config.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Mode Description */}
      <motion.p
        key={selectedMode}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          color: "#52525b",
          fontSize: "13px",
          textAlign: "center",
        }}
      >
        {MODE_CONFIGS[selectedMode].description}
      </motion.p>

      {/* Auto-detection suggestion */}
      {detectedMode && detectedMode !== selectedMode && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer"
          style={{
            background: "rgba(234,179,8,0.08)",
            border: "1px solid rgba(234,179,8,0.2)",
          }}
          onClick={() => onModeChange(detectedMode)}
        >
          <span style={{ fontSize: "12px" }}>💡</span>
          <span style={{ color: "#fbbf24", fontSize: "12px", fontWeight: 500 }}>
            {detectedMode === "generate"
              ? "Short input detected — switch to Generate mode?"
              : "Full story detected — switch to Transform mode?"}
          </span>
          <span
            style={{
              color: "#f59e0b",
              fontSize: "12px",
              fontWeight: 700,
              marginLeft: "4px",
            }}
          >
            Switch →
          </span>
        </motion.div>
      )}
    </div>
  );
}