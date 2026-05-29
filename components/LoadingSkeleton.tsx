"use client";

import { motion } from "framer-motion";

function SkeletonBlock({
  width = "100%",
  height = "16px",
  delay = 0,
}: {
  width?: string;
  height?: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        width,
        height,
        borderRadius: "6px",
        background:
          "linear-gradient(90deg, rgba(39,39,42,1) 0%, rgba(63,63,70,0.8) 50%, rgba(39,39,42,1) 100%)",
      }}
    />
  );
}

function SkeletonCard({
  delay = 0,
  children,
}: {
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{
        borderRadius: "16px",
        padding: "20px",
        background: "rgba(24,24,27,0.9)",
        border: "1px solid rgba(63,63,70,1)",
        marginBottom: "16px",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function LoadingSkeleton() {
  return (
    <div
      className="w-full py-8 flex justify-center px-6"
    >
      <div className="w-full" style={{ maxWidth: "48rem" }}>

        {/* Header Skeleton */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex flex-col gap-2">
            <SkeletonBlock width="220px" height="28px" />
            <SkeletonBlock width="160px" height="14px" delay={0.1} />
          </div>
          <SkeletonBlock width="80px" height="28px" />
        </motion.div>

        {/* Title Card Skeleton */}
        <SkeletonCard delay={0.1}>
          <div className="flex items-center gap-2 mb-3">
            <SkeletonBlock width="12px" height="12px" />
            <SkeletonBlock width="120px" height="12px" />
          </div>
          <SkeletonBlock width="80%" height="22px" />
        </SkeletonCard>

        {/* Hooks Skeleton */}
        <SkeletonCard delay={0.2}>
          <SkeletonBlock width="140px" height="14px" delay={0.1} />
          <div className="flex flex-col gap-3 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  borderRadius: "12px",
                  background: "rgba(39,39,42,0.5)",
                }}
              >
                <SkeletonBlock width="24px" height="24px" delay={i * 0.1} />
                <SkeletonBlock
                  width={`${70 + i * 5}%`}
                  height="14px"
                  delay={i * 0.1}
                />
              </div>
            ))}
          </div>
        </SkeletonCard>

        {/* Script Skeleton */}
        <SkeletonCard delay={0.3}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              paddingBottom: "12px",
              borderBottom: "1px solid rgba(63,63,70,0.5)",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <SkeletonBlock width="12px" height="12px" />
              <SkeletonBlock width="12px" height="12px" delay={0.1} />
              <SkeletonBlock width="12px" height="12px" delay={0.2} />
            </div>
            <SkeletonBlock width="100px" height="28px" />
          </div>
          <div className="flex flex-col gap-3">
            {[100, 85, 95, 70, 90, 80, 75, 88].map((w, i) => (
              <SkeletonBlock
                key={i}
                width={`${w}%`}
                height="14px"
                delay={i * 0.05}
              />
            ))}
          </div>
        </SkeletonCard>

        {/* Thumbnail + Caption + Hashtags Skeletons */}
        {[0.4, 0.5, 0.6].map((delay, i) => (
          <SkeletonCard key={i} delay={delay}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
              <SkeletonBlock width="14px" height="14px" />
              <SkeletonBlock width="100px" height="14px" />
            </div>
            <SkeletonBlock width="90%" height="14px" delay={0.1} />
            {i === 2 && (
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "12px",
                  flexWrap: "wrap",
                }}
              >
                {[60, 80, 70, 90, 65, 75].map((w, j) => (
                  <SkeletonBlock
                    key={j}
                    width={`${w}px`}
                    height="26px"
                    delay={j * 0.05}
                  />
                ))}
              </div>
            )}
          </SkeletonCard>
        ))}

        {/* Loading Message */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mt-4"
        >
          <p
            style={{
              color: "#7c3aed",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            ✦ Crafting your viral script...
          </p>
        </motion.div>
      </div>
    </div>
  );
}