"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { Toast } from "@/hooks/useToast";

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

function getToastStyle(type: string) {
  if (type === "success") return { color: "#4ade80", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)" };
  if (type === "error") return { color: "#f87171", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)" };
  if (type === "warning") return { color: "#fbbf24", bg: "rgba(234,179,8,0.08)", border: "rgba(234,179,8,0.2)" };
  return { color: "#60a5fa", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)" };
}

function getToastIcon(type: string) {
  if (type === "success") return <CheckCircle className="w-4 h-4" />;
  if (type === "error") return <AlertCircle className="w-4 h-4" />;
  if (type === "warning") return <AlertTriangle className="w-4 h-4" />;
  return <Info className="w-4 h-4" />;
}

export default function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "360px",
        width: "calc(100vw - 48px)",
      }}
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          const toastStyle = getToastStyle(toast.type);
          const toastIcon = getToastIcon(toast.type);
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 16px",
                borderRadius: "14px",
                background: "rgba(18,18,20,0.98)",
                border: `1px solid ${toastStyle.border}`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.4)`,
                backdropFilter: "blur(12px)",
              }}
            >
              <span style={{ color: toastStyle.color, flexShrink: 0 }}>
                {toastIcon}
              </span>
              <p
                style={{
                  color: "#e4e4e7",
                  fontSize: "13px",
                  fontWeight: 500,
                  flex: 1,
                  lineHeight: 1.4,
                }}
              >
                {toast.message}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onRemove(toast.id)}
                style={{
                  color: "#52525b",
                  cursor: "pointer",
                  flexShrink: 0,
                  background: "none",
                  border: "none",
                  padding: "2px",
                }}
              >
                <X className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}