import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SharedScriptView from "@/components/SharedScriptView";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;
async function getScript(slug: string) {
  const { data } = await supabase
    .from("scripts")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const script = await getScript(slug);

  if (!script) {
    return { title: "Script Not Found | StoryFlip" };
  }

  return {
    title: `${script.title} | StoryFlip`,
    description: script.hooks?.[0] || "A viral script created with StoryFlip.",
    openGraph: {
      title: script.title,
      description: script.hooks?.[0] || "A viral script created with StoryFlip.",
      images: [`/api/og?title=${encodeURIComponent(script.title)}&category=${encodeURIComponent(script.category)}`],
    },
  };
}

export default async function SharedScriptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const script = await getScript(slug);

  if (!script) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#09090b",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <ParticleBackground />
      <ScrollProgressBar />
      <Navbar />
      <SharedScriptView script={script} />
      <Footer />
    </main>
  );
}