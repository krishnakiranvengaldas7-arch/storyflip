"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
}

interface UseTypewriterReturn {
  displayedText: string;
  isTyping: boolean;
  isDone: boolean;
  skip: () => void;
}

export function useTypewriter({
  text,
  speed = 18,
  startDelay = 400,
  enabled = true,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const skip = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (startTimerRef.current) clearTimeout(startTimerRef.current);
    setDisplayedText(text);
    setIsTyping(false);
    setIsDone(true);
    indexRef.current = text.length;
  };

  useEffect(() => {
    if (!enabled || !text) {
      setDisplayedText(text);
      setIsDone(true);
      return;
    }

    setDisplayedText("");
    setIsTyping(false);
    setIsDone(false);
    indexRef.current = 0;

    startTimerRef.current = setTimeout(() => {
      setIsTyping(true);

      const typeNextChar = () => {
        if (indexRef.current < text.length) {
          const nextIndex = indexRef.current + 1;
          setDisplayedText(text.slice(0, nextIndex));
          indexRef.current = nextIndex;

          const currentChar = text[indexRef.current - 1];
          let delay = speed;

          if (currentChar === "." || currentChar === "!" || currentChar === "?") {
            delay = speed * 8;
          } else if (currentChar === ",") {
            delay = speed * 4;
          } else if (currentChar === "\n") {
            delay = speed * 6;
          }

          timerRef.current = setTimeout(typeNextChar, delay);
        } else {
          setIsTyping(false);
          setIsDone(true);
        }
      };

      typeNextChar();
    }, startDelay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (startTimerRef.current) clearTimeout(startTimerRef.current);
    };
  }, [text, speed, startDelay, enabled]);

  return { displayedText, isTyping, isDone, skip };
}