"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    handle: "@alexcreates",
    platform: "YouTube",
    platformColor: "#ff0000",
    platformBg: "rgba(255,0,0,0.1)",
    platformBorder: "rgba(255,0,0,0.2)",
    avatar: "AR",
    avatarBg: "linear-gradient(135deg, #ff0000, #ff6b6b)",
    followers: "124K subscribers",
    quote:
      "I was spending 3 hours writing scripts for my Shorts. StoryFlip does it in 10 seconds and honestly the hooks are better than anything I was writing myself. My last video hit 2.1M views.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    handle: "u/priya_storytells",
    platform: "Reddit",
    platformColor: "#ff4500",
    platformBg: "rgba(255,69,0,0.1)",
    platformBorder: "rgba(255,69,0,0.2)",
    avatar: "PN",
    avatarBg: "linear-gradient(135deg, #ff4500, #ff8c69)",
    followers: "89K karma",
    quote:
      "I post true crime content and the scripts this thing generates are genuinely chilling. The psychological depth it adds to raw stories is insane. My engagement went up 340% in one month.",
    stars: 5,
  },
  {
    name: "Marcus Webb",
    handle: "@marcuswebb.tv",
    platform: "TikTok",
    platformColor: "#69c9d0",
    platformBg: "rgba(105,201,208,0.1)",
    platformBorder: "rgba(105,201,208,0.2)",
    avatar: "MW",
    avatarBg: "linear-gradient(135deg, #010101, #69c9d0)",
    followers: "312K followers",
    quote:
      "The Cheating and Revenge categories are absolutely unhinged in the best way. Every script has this perfect emotional build that keeps people watching till the end. StoryFlip is the unfair advantage.",
    stars: 5,
  },
  {
    name: "Zara Okonkwo",
    handle: "@zaracontentlab",
    platform: "YouTube",
    platformColor: "#ff0000",
    platformBg: "rgba(255,0,0,0.1)",
    platformBorder: "rgba(255,0,0,0.2)",
    avatar: "ZO",
    avatarBg: "linear-gradient(135deg, #7c3aed, #d946ef)",
    followers: "67K subscribers",
    quote:
      "I was about to quit my faceless channel because I had no time to write. StoryFlip saved it. I batch 10 scripts in under an hour now. Three of them went viral last week alone.",
    stars: 5,
  },
];

const platformIcons: Record<string, string> = {
  YouTube: "▶",
  TikTok: "♪",
  Reddit: "👾",
};

export default function Testimonials() {
  return (
    <section className="relative w-full py-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="relative w-full px-4 sm:px-6"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.2)",
              color: "#fbbf24",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Creator Stories
          </motion.span>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 900,
              color: "white",
              marginBottom: "12px",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Creators Are{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fbbf24, #dc2626)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Going Viral
            </span>
          </h2>
          <p style={{ color: "#52525b", fontSize: "16px" }}>
            Join thousands of creators already using StoryFlip
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(24,24,27,0.9)",
                border: "1px solid rgba(63,63,70,1)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontSize: "48px",
                  lineHeight: 1,
                  color: "rgba(245,158,11,0.2)",
                  fontFamily: "Georgia, serif",
                  marginBottom: "-8px",
                }}
              >
                "
              </div>

              {/* Quote text */}
              <p
                style={{
                  color: "#a1a1aa",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "#fbbf24", fontSize: "13px" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(63,63,70,0.5)",
                }}
              />

              {/* Author row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0"
                    style={{ background: t.avatarBg }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                    >
                      {t.name}
                    </p>
                    <p style={{ color: "#52525b", fontSize: "12px" }}>
                      {t.handle} · {t.followers}
                    </p>
                  </div>
                </div>

                {/* Platform badge */}
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shrink-0"
                  style={{
                    background: t.platformBg,
                    border: `1px solid ${t.platformBorder}`,
                    color: t.platformColor,
                  }}
                >
                  <span style={{ fontSize: "10px" }}>
                    {platformIcons[t.platform]}
                  </span>
                  {t.platform}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}