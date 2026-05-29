import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StoryFlip — Turn Raw Stories Into Viral Scripts",
  description:
    "Paste any Reddit story, confession, or emotional experience and our AI transforms it into a cinematic short-form script built for YouTube Shorts, TikTok, and Reels.",
  keywords: [
    "AI script generator",
    "YouTube Shorts scripts",
    "TikTok scripts",
    "viral content",
    "Reddit stories",
    "short form content",
  ],
  authors: [{ name: "StoryFlip" }],
  openGraph: {
    title: "StoryFlip — Turn Raw Stories Into Viral Scripts",
    description:
      "Paste any Reddit story or emotional experience and get a cinematic viral script in seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}