import { ExamplePrompt, Feature } from "@/types";

export const examplePrompts: ExamplePrompt[] = [
  {
    id: "1",
    category: "Cheating",
    mode: "transform",
    preview: "She wore the perfume he bought her to our anniversary dinner...",
    fullStory:
      "She wore the perfume he bought her to our anniversary dinner. I didn't know that at the time. I just remember thinking she looked beautiful. We toasted seven years together. She cried when I gave her the necklace. Three weeks later I found the receipt in her coat pocket — same date as our dinner, his name on the card. She had gone to him in the afternoon, then come home and let me hold her all night. I haven't been able to eat at that restaurant since.",
  },
  {
    id: "2",
    category: "Revenge",
    mode: "transform",
    preview: "He fired me the same week I found out I was pregnant...",
    fullStory:
      "He fired me the same week I found out I was pregnant. Said the company was 'restructuring.' I was the only one let go. I had trained him when he first joined. I had covered for him when he missed deadlines. So I spent the next four months quietly. I documented everything — every email, every policy he violated, every conversation I'd saved. Then I contacted the three other women he'd done this to before me. We didn't go to HR. We went to a lawyer. The settlement was enough to cover two years of maternity leave.",
  },
  {
    id: "3",
    category: "Horror",
    mode: "generate",
    preview: "My son has been talking to someone in his room every night...",
    fullStory:
      "My son has been talking to someone in his closet every night for three weeks. He's six. Last night I finally asked him who he talks to. He said it's the man who lives in the dark. He said the man told him not to tell me. He said the man has been there since before we moved in.",
  },
  {
    id: "4",
    category: "Emotional",
    mode: "transform",
    preview: "My brother called me by my name for the last time on a Tuesday...",
    fullStory:
      "My brother called me by my name for the last time on a Tuesday. I didn't know it was the last time. You never do. The dementia had been stealing him slowly for two years — first the small things, then the big ones. By Thursday he looked at me from his hospital bed like I was a kind stranger. He smiled and said 'you have a good face.' I said thank you. I held his hand. He didn't know why I was crying. I didn't explain. Some things you just carry.",
  },
  {
    id: "5",
    category: "True Crime",
    mode: "transform",
    preview: "The Polaroid was taken inside our house. We had never seen her before...",
    fullStory:
      "The Polaroid was taken inside our house. We had never seen the woman in it before. We found it taped behind the mirror in the master bedroom during a renovation — the house we had lived in for six years. The photo was dated four months after we moved in. She was standing in our kitchen, smiling, holding a coffee mug. We called the police. They ran her face. She had been reported missing two years earlier, last seen three miles from our address. The case had gone cold. It isn't cold anymore.",
  },
  {
    id: "6",
    category: "Funny",
    mode: "transform",
    preview: "I told my therapist I was finally setting boundaries. Then I cried at a dog food commercial...",
    fullStory:
      "I told my therapist I was finally setting boundaries. Firm ones. No more people-pleasing. She seemed proud. That same evening I agreed to help my neighbor move furniture because she looked a little sad. Then I cried at a dog food commercial — the one where the old dog can barely walk but still brings the owner the newspaper. Then I apologized to my coffee table after bumping into it. My therapist and I have a lot of work left to do.",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "⚡",
    title: "Instant Script Generation",
    description:
      "Paste your story and get a fully structured viral script in under 10 seconds. No editing required.",
  },
  {
    id: "2",
    icon: "🎯",
    title: "Category-Optimized",
    description:
      "Each category uses a different emotional formula — horror hooks differently than revenge. Your script is built for maximum retention.",
  },
  {
    id: "3",
    icon: "📱",
    title: "Shorts & Reels Ready",
    description:
      "Every script is timed for 45-90 second short-form content with a hook, build, and payoff structure baked in.",
  },
  {
    id: "4",
    icon: "🔥",
    title: "Viral Hook Formula",
    description:
      "The first 3 seconds are everything. Our AI writes hooks that stop the scroll and make viewers watch till the end.",
  },
  {
    id: "5",
    icon: "🎭",
    title: "Emotional Amplification",
    description:
      "Raw stories become cinematic scripts. The AI adds pacing, tension, and emotional beats that make audiences feel everything.",
  },
  {
    id: "6",
    icon: "🚀",
    title: "Multi-Platform Ready",
    description:
      "Works for YouTube Shorts, TikTok, and Instagram Reels. One story, three platforms, infinite views.",
  },
];