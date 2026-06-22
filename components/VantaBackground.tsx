"use client";

import { useEffect, useRef, useState } from "react";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const loadVanta = async () => {
      const THREE = await import("three");
      const VANTA = await import("vanta/dist/vanta.net.min");

      if (!vantaEffect.current && vantaRef.current) {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 250.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf59e0b,
          backgroundColor: 0x0c0a09,
          points: 10,
          maxDistance: 22,
          spacing: 18,
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [mounted]);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}