import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const categoryColors: Record<string, string> = {
  Cheating: "#fda4af",
  Horror: "#fca5a5",
  Emotional: "#93c5fd",
  Revenge: "#fdba74",
  "True Crime": "#fde68a",
  Funny: "#86efac",
  "Missing Person": "#67e8f9",
  "Family Secrets": "#d8b4fe",
  "Workplace Drama": "#fcd34d",
  Supernatural: "#c4b5fd",
  AITA: "#7dd3fc",
  Stalker: "#fca5a5",
  Gaslighting: "#f0abfc",
  Confession: "#fda4af",
  "Neighbor Drama": "#bef264",
  "Friend Betrayal": "#f9a8d4",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "A Viral Script";
  const category = searchParams.get("category") || "Emotional";
  const accent = categoryColors[category] || "#8b5cf6";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          backgroundColor: "#09090b",
        }}
      >
        {/* Top - Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7c3aed, #a21caf)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 900,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", color: "white", fontSize: "32px", fontWeight: 800 }}>
            <span>Story</span>
            <span style={{ color: "#d946ef" }}>Flip</span>
          </div>
        </div>

        {/* Middle - Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 20px",
              borderRadius: "100px",
              background: `${accent}22`,
              border: `1px solid ${accent}55`,
              color: accent,
              fontSize: "20px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.2,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom - Tagline */}
        <div style={{ display: "flex", color: "#71717a", fontSize: "22px" }}>
          Turn raw stories into viral scripts — Free AI script generator
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}