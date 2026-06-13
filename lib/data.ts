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
  {
    id: "7",
    category: "Cheating",
    mode: "transform",
    preview: "He started taking his phone into the bathroom. Every time. Even to brush his teeth...",
    fullStory:
      "He started taking his phone into the bathroom. Every time. Even to brush his teeth. I told myself he just liked podcasts. Then his sister got married and he gave a speech about how he 'finally found someone who understood him' two years ago. We've been together for nine. I smiled the whole reception. I found her name in his recently played voicemails — six hundred and forty-seven minutes total. We got married the same year he met her.",
  },
  {
    id: "8",
    category: "Cheating",
    mode: "generate",
    preview: "My husband's coworker added me on every platform within a week of starting her job...",
    fullStory:
      "My husband's coworker added me on every platform within a week of starting her job. I thought it was sweet, friendly even. Then I noticed she liked every single photo of him, going back four years, before they ever worked together.",
  },
  {
    id: "9",
    category: "Horror",
    mode: "transform",
    preview: "The smoke detector started chirping at 3:14am. Every night. The same time...",
    fullStory:
      "The smoke detector started chirping at 3:14am. Every night. The same time. I changed the battery twice. An electrician checked the wiring and found nothing wrong. On the fifth night I stayed awake to watch it happen. At 3:13, my daughter's bedroom door — which she always keeps shut — opened by itself. At 3:14, the detector chirped once. Then her door closed again. She has slept through it every single time.",
  },
  {
    id: "10",
    category: "Horror",
    mode: "generate",
    preview: "Every house on our street has the porch light on except ours, and we never turned ours off...",
    fullStory:
      "Every house on our street has the porch light on except ours, and we never turned ours off. My husband checked the bulb, the switch, the breaker — everything works. Last night I looked out the window and watched our neighbor's porch light turn off too, just for a second, exactly when a car slowed down in front of our house.",
  },
  {
    id: "11",
    category: "Emotional",
    mode: "transform",
    preview: "My dad taught me to drive in an empty parking lot every Sunday for two months...",
    fullStory:
      "My dad taught me to drive in an empty parking lot every Sunday for two months. He never once raised his voice, even when I drove over a curb and nearly hit a shopping cart. The day I passed my test, he cried in the car — the first time I'd ever seen him cry. Three months later he was diagnosed. He spent his last good weeks teaching my younger sister the same way, in the same parking lot. I drove them both there. I didn't go in. I just watched from the car, the way he used to watch me.",
  },
  {
    id: "12",
    category: "Emotional",
    mode: "generate",
    preview: "My grandmother saved every birthday card I ever gave her in a shoebox under her bed...",
    fullStory:
      "My grandmother saved every birthday card I ever gave her in a shoebox under her bed, including the ones I made in kindergarten with crooked letters and too much glitter. After she passed, I found the box. The most recent card was from three years ago — the year I got too busy and stopped sending them.",
  },
  {
    id: "13",
    category: "Revenge",
    mode: "transform",
    preview: "My landlord kept our security deposit claiming 'extensive damage' and sent photos of someone else's apartment...",
    fullStory:
      "My landlord kept our security deposit claiming 'extensive damage' and sent us photos as proof. The problem was the photos showed a different apartment — wrong paint color, wrong layout, even a cat we never owned. I requested the full move-in and move-out inspection records under our state's tenant law. He ignored three emails. So I filed with the state attorney general's tenant fraud division and attached his own photos as evidence of fraudulent documentation. Six weeks later we got our full deposit back, plus the statutory penalty — triple the original amount.",
  },
  {
    id: "14",
    category: "Revenge",
    mode: "generate",
    preview: "My coworker kept 'forgetting' to invite me to client meetings I was supposed to lead...",
    fullStory:
      "My coworker kept 'forgetting' to invite me to client meetings I was supposed to lead, then presenting my work as his own ideas. I started cc'ing our director on every project email, politely, as 'just keeping everyone looped in.' Three weeks later, the director asked why my name wasn't on any of the meeting invites for projects I had clearly built from scratch.",
  },
  {
    id: "15",
    category: "True Crime",
    mode: "transform",
    preview: "The library records showed she checked out the same book forty-one times in two years...",
    fullStory:
      "The library records showed she checked out the same book forty-one times in two years before she disappeared. It was a guide to hiking trails in a national park three hundred miles away. Her car was found in that park's parking lot eleven days after she was reported missing. Inside, investigators found the book — open to a chapter about a trail that had been closed to the public since 1987 due to unstable terrain. Her phone's last location ping was from that exact trail. She has never been found.",
  },
  {
    id: "16",
    category: "True Crime",
    mode: "generate",
    preview: "The town's water tower had a padlock that nobody could explain who installed...",
    fullStory:
      "The town's water tower had a padlock that nobody could explain who installed. Maintenance records showed no work order. When they finally cut it off in 2019, they found a metal box welded to the inside ladder, containing photographs of a house three streets away — taken over what appeared to be a span of six years.",
  },
  {
    id: "17",
    category: "Funny",
    mode: "transform",
    preview: "I told my new coworkers I 'didn't really drink' and then accidentally ordered five shots...",
    fullStory:
      "I told my new coworkers I 'didn't really drink' at the work happy hour, trying to seem responsible on my first week. The bartender misheard my order and brought five tequila shots instead of the one virgin mojito I asked for. Everyone was watching. I panicked and said 'oh these are for the table, cheers!' and distributed them like a generous host. Then I had to drink my actual virgin mojito while four coworkers got tipsy off shots I 'bought' on day three of my new job.",
  },
  {
    id: "18",
    category: "Funny",
    mode: "generate",
    preview: "I practiced my resignation speech in the shower for a week and then my boss quit first...",
    fullStory:
      "I practiced my resignation speech in the shower for a week, perfecting every line about 'pursuing new opportunities' and 'growth.' I walked in Monday morning ready to deliver it with quiet dignity. My boss called an emergency meeting first. He was resigning. To pursue new opportunities. And growth.",
  },
  {
    id: "19",
    category: "Missing Person",
    mode: "transform",
    preview: "She texted 'almost home' at 11:47pm. Her phone has been off ever since...",
    fullStory:
      "She texted 'almost home' at 11:47pm. Her phone has been off ever since. The drive from her friend's apartment to ours takes eighteen minutes — she sent that message at the halfway point, near the old grain elevator on Route 9. Her car was found two days later, parked correctly, doors locked, keys in the ignition, half a mile past where she would have needed to turn for our street. The gas tank was full. She had less than a quarter tank when she left her friend's place.",
  },
  {
    id: "20",
    category: "Missing Person",
    mode: "generate",
    preview: "He left for his morning run like always, same route, same time, same playlist...",
    fullStory:
      "He left for his morning run like always — same route, same time, same playlist starting on shuffle. His smartwatch tracked the run perfectly for the first 2.3 miles. Then the data simply stops. No crash detection, no fall alert, nothing. Just a route that ends in the middle of a residential street, with no further movement ever recorded.",
  },
  {
    id: "21",
    category: "Family Secrets",
    mode: "transform",
    preview: "My mom's 'cousin' visited every Christmas for thirty years. I found out at her funeral she wasn't a cousin...",
    fullStory:
      "My mom's 'cousin' visited every Christmas for thirty years. She brought the same gift every year — a hand-knitted scarf, slightly different color. At my mom's funeral, this woman approached me, crying harder than anyone else in the room. She held my hand and said, 'I'm so sorry, I should have told you sooner. I'm not your mom's cousin. I'm her sister. We were separated as kids and found each other when we were adults, but our families never knew how to explain it, so we just... didn't.' She had been at every birthday, every holiday, for thirty years. My aunt.",
  },
  {
    id: "22",
    category: "Family Secrets",
    mode: "generate",
    preview: "My dad kept a storage unit he paid for in cash every month, and never told anyone about it...",
    fullStory:
      "My dad kept a storage unit he paid for in cash every month for eleven years, and never told anyone about it. After he passed, we found the key taped inside an old wallet. Inside the unit were boxes labeled with names none of us recognized — and a filing cabinet full of court documents dated from before he met my mom.",
  },
  {
    id: "23",
    category: "Workplace Drama",
    mode: "transform",
    preview: "My manager took credit for my project in front of the entire leadership team...",
    fullStory:
      "My manager took credit for my project in front of the entire leadership team, presenting my slides as 'his vision for the quarter.' I had built every chart, written every recommendation, and stayed late for three weeks to finish it. I said nothing in the meeting. That night, I emailed the VP a thank-you note for 'the opportunity to support this initiative,' with the original file attached — timestamped six weeks before the presentation, shared only with my manager. The VP replied to all, asking my manager to 'loop me in directly going forward.' My manager never took credit for my work again.",
  },
  {
    id: "24",
    category: "Workplace Drama",
    mode: "generate",
    preview: "My coworker reported me to HR for 'creating a hostile environment' the same week I reported him...",
    fullStory:
      "My coworker reported me to HR for 'creating a hostile environment' the same week I reported him for repeatedly taking credit for my work in meetings. HR scheduled both complaints for the same meeting, with both of us present, and asked us to 'work it out professionally' in front of each other.",
  },
  {
    id: "25",
    category: "Supernatural",
    mode: "transform",
    preview: "I don't believe in ghosts. But my grandmother's clock stopped at the exact minute she passed, three states away...",
    fullStory:
      "I don't believe in ghosts. I want to say that first. My grandmother's antique clock — the one she wound every single night for forty years — stopped working the week she went into hospice, three states away from our house. We didn't know. My mom called to check on it out of habit, and found it had stopped at 4:17. When she called the hospice an hour later, they told her grandma had passed that morning. At 4:17. We had the clock repaired twice since. It works perfectly. It has never stopped again.",
  },
  {
    id: "26",
    category: "Supernatural",
    mode: "generate",
    preview: "Every photo taken in my late grandfather's workshop has a faint shape near his old chair...",
    fullStory:
      "Every photo taken in my late grandfather's workshop has a faint shape near his old chair — every single one, across different phones, different cameras, different years. We thought it was a lens flare until my cousin took a photo on a brand new phone, in a different lighting setup, and the same shape appeared in the same spot.",
  },
  {
    id: "27",
    category: "AITA",
    mode: "transform",
    preview: "AITA for telling my sister her 'dream wedding' venue was actually my late mom's favorite restaurant, that closed?...",
    fullStory:
      "AITA for telling my sister the venue she's obsessed with for her wedding was actually the restaurant where our mom worked for twenty years before she passed, and that it closed down and got renovated into something else entirely? My sister was twelve when mom passed and barely remembers those years. She found this 'hidden gem' online and has been planning her whole wedding around it for months. I recognized it immediately from old photos. I haven't said anything yet because I don't know if telling her would ruin something she's excited about, or if she'd want to know what it used to be.",
  },
  {
    id: "28",
    category: "AITA",
    mode: "generate",
    preview: "AITA for not telling my best friend her boyfriend has been liking my photos since 2019?...",
    fullStory:
      "AITA for not telling my best friend that her boyfriend has been liking every single one of my photos since 2019 — three years before they even started dating? I noticed it when we got together as a group recently and he seemed nervous around me. I went back and checked. Every post. Every single one.",
  },
  {
    id: "29",
    category: "Stalker",
    mode: "transform",
    preview: "He knew my coffee order before I'd ever spoken to him. He worked two buildings away...",
    fullStory:
      "He knew my coffee order before I'd ever spoken to him. We'd never met — he worked in a building two blocks from mine. The first time we were introduced at a networking event, he said 'oh, the oat milk latte, extra shot, right?' and laughed like it was a charming icebreaker. I'd never told him that. I'd never told anyone that, except the barista, every morning, for the past year. I started taking a different route to work. He started showing up on that route too.",
  },
  {
    id: "30",
    category: "Stalker",
    mode: "generate",
    preview: "My new apartment's previous tenant kept getting flowers delivered to my address for three months...",
    fullStory:
      "My new apartment's previous tenant kept getting flowers delivered to my address for three months after I moved in — same sender, no name, just initials. I assumed it was an old admirer who didn't know she'd moved. Then one delivery arrived addressed to me, by my actual name, with the same handwriting.",
  },
  {
    id: "31",
    category: "Gaslighting",
    mode: "transform",
    preview: "He told me I was 'remembering wrong' so often that I started recording our conversations...",
    fullStory:
      "He told me I was 'remembering wrong' so often that I started recording our conversations, just to check my own memory. For two years, every disagreement ended the same way — 'that's not what I said,' 'you're being too sensitive,' 'everyone agrees with me, ask anyone.' I started doubting things I knew were true. Then one night I played back a recording from three weeks earlier. He had said the exact thing he swore he never said, word for word. I sat in my car for an hour. Not angry. Just quiet. I finally had proof of something I already knew.",
  },
  {
    id: "32",
    category: "Gaslighting",
    mode: "generate",
    preview: "My roommate insisted I never paid my share of rent, until I found three years of bank transfers...",
    fullStory:
      "My roommate insisted I had never paid my share of rent on time, calling me 'irresponsible' in front of our friends. I started doubting myself — maybe I really had been late as often as she said. Then I went through my bank statements. Three years. Every payment, on time, every single month, with timestamps.",
  },
  {
    id: "33",
    category: "Confession",
    mode: "transform",
    preview: "I let my best friend take the blame for something I did in college. Fifteen years ago...",
    fullStory:
      "I let my best friend take the blame for something I did in college. Fifteen years ago. It cost her a scholarship. She never said anything — she just quietly transferred schools the next semester, and we lost touch over the years that followed. I've thought about telling her almost every week since. I found her on social media last month. She has a good life now, kids, a career she seems to love. I don't know if telling her would help her, or if it would just be me finally putting down something I should never have made her carry.",
  },
  {
    id: "34",
    category: "Confession",
    mode: "generate",
    preview: "I've been pretending to like my husband's cooking for nine years because of how proud he was the first time...",
    fullStory:
      "I've been pretending to like my husband's cooking for nine years. The first time he made dinner for me, before we were married, he was so proud — it was genuinely not good, but he looked so happy that I said it was amazing. I've said that every time since. He's never stopped cooking for me because of it.",
  },
  {
    id: "35",
    category: "Neighbor Drama",
    mode: "transform",
    preview: "Our neighbor installed a security camera pointed directly at our bedroom window, 'for his safety'...",
    fullStory:
      "Our neighbor installed a security camera pointed directly at our bedroom window, claiming it was 'for his safety' after a package theft two streets over. We asked him to angle it away. He refused, said it was his property and his right. So we requested the footage through a public records request, since he'd also pointed it at the shared driveway — technically recording us on our own property without consent. The footage request revealed his camera had been recording our house, at that angle, for fourteen months — long before the 'package theft' he cited. We're now in mediation, and the footage is evidence.",
  },
  {
    id: "36",
    category: "Neighbor Drama",
    mode: "generate",
    preview: "My neighbor moves our trash cans onto our lawn every single week, exactly six inches from the door...",
    fullStory:
      "My neighbor moves our trash cans onto our lawn every single week, exactly six inches from our front door, claiming they're 'too close to the property line.' We measured. They are, and have always been, on our side. We installed a camera. He does it every Tuesday at 6am, wearing gloves, like he's done this a hundred times.",
  },
  {
    id: "37",
    category: "Friend Betrayal",
    mode: "transform",
    preview: "I told my best friend about my business idea. She started the exact same business two months later...",
    fullStory:
      "I told my best friend about my business idea over coffee — every detail, the name, the supplier I'd found, the pricing model I'd spent months working out. She seemed excited for me. Two months later, she launched a business with the same name, the same supplier, the same pricing, in the same city. When I asked her about it, she said she'd 'been thinking about something similar for a while' and didn't realize it was 'that similar' to mine. We had been best friends for thirteen years. I found out from a mutual friend, not from her.",
  },
  {
    id: "38",
    category: "Friend Betrayal",
    mode: "generate",
    preview: "My friend told our whole group chat a secret I only told her, framing it as 'concern' for me...",
    fullStory:
      "My friend told our entire group chat something deeply personal that I had only ever told her, in private, years ago. She framed it as being 'worried about me' and wanting the group to 'check in.' Within an hour, three people I barely talk to had messaged me asking if I was okay.",
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