// ══════════════════════════════════════════════════════════════
// COURSE MODULE DATA  — AI For Business Growth Masterclass
// Modules 1–7 with full lesson content + voice scripts
// ══════════════════════════════════════════════════════════════

const MODULES = [

// ─────────────────────────────────────────────────────────────
// MODULE 1 — Introduction to AI in Business
// ─────────────────────────────────────────────────────────────
{
  id: 1, icon: '🤖', color: '#4F46E5',
  title: 'Introduction to AI in Business',
  description: 'Discover what AI really is, bust the myths holding businesses back, and explore the enormous opportunities AI creates right now.',
  estimatedTime: '30 min',
  videoUrl: '', // Paste your Synthesia share URL here e.g. 'https://share.synthesia.io/YOUR-ID'
  lessons: [
    {
      id: '1.1', title: 'What is Artificial Intelligence?', duration: '6 min',
      keyPoints: ['AI simulates human thinking using data and algorithms','Machine learning lets systems improve from experience','You already use AI every day without realising it','Modern AI is accessible to any business, any size'],
      voiceScript: 'Welcome to the AI For Business Growth Masterclass. In this first lesson we break down exactly what artificial intelligence is, in plain English, no jargon required. AI is software that can learn from data, spot patterns, and make decisions — much like a very fast, tireless employee who has read everything on the internet. By the end of this lesson you will understand what AI really is and feel confident talking about it.',
      content: `<h2>What is Artificial Intelligence?</h2>
<p>Artificial Intelligence — or AI — is software that can perform tasks that normally require human intelligence: understanding language, recognising images, writing text, making recommendations, and even holding conversations. At its core, AI learns from enormous amounts of data rather than being manually programmed with every rule.</p>
<h3>The Three Layers You Need to Know</h3>
<ul>
  <li><strong>Artificial Intelligence (AI)</strong> — the broad field of making computers smart.</li>
  <li><strong>Machine Learning (ML)</strong> — AI systems that improve automatically by learning from data, without being explicitly programmed for every situation.</li>
  <li><strong>Large Language Models (LLMs)</strong> — the technology behind ChatGPT, Claude and Gemini. Trained on vast amounts of text, they understand and generate human language with remarkable fluency.</li>
</ul>
<div class="info-box primary"><div class="info-box-title">📌 Real World Context</div><p>When you ask ChatGPT to write a marketing email, an LLM analyses your request, draws on patterns from billions of training examples, and generates a tailored response — in seconds. That same process would take a human copywriter 20–30 minutes.</p></div>
<h3>AI You Already Use Every Day</h3>
<ul>
  <li>Netflix and Spotify recommendations</li>
  <li>Google search results and autocomplete</li>
  <li>Email spam filters</li>
  <li>Bank fraud detection</li>
  <li>Siri, Alexa, and Google Assistant</li>
</ul>
<div class="info-box success"><div class="info-box-title">✅ Key Takeaway</div><p>AI is not magic, and it is not science fiction. It is practical software — and the latest generation is so capable and accessible that any business owner can use it today, for free or at very low cost.</p></div>
<div class="quick-win-box">
  <div class="quick-win-header"><span class="quick-win-icon">⚡</span><span class="quick-win-title">Quick Win — Try This Right Now (2 Minutes)</span></div>
  <p>Open ChatGPT or Claude in a new tab and type this prompt:</p>
  <div class="prompt-example">"I run a [type of business] in [location]. Give me 5 specific ways I could use AI in my business this week to save time or make more money. Keep it practical — no jargon."</div>
  <p class="quick-win-note">Replace the brackets with your own details. You'll have a personalised AI action list in under 30 seconds. That is the power of this technology — and you haven't even finished the first lesson yet.</p>
</div>`
    },
    {
      id: '1.2', title: 'What AI Is NOT', duration: '5 min',
      keyPoints: ['AI is not conscious or self-aware','AI cannot think independently or have opinions','AI makes mistakes — always verify important outputs','AI is a powerful tool, not a silver bullet'],
      voiceScript: 'Before you can use AI effectively in your business, you need to understand what it cannot do. This lesson clears up the most common misunderstandings so you approach AI with realistic expectations and get better results from day one.',
      content: `<h2>What AI Is NOT</h2>
<p>Hollywood has given most people a distorted picture of AI. The reality is far less dramatic — and far more useful. Understanding what AI cannot do is just as important as knowing what it can do, because it stops you trusting it blindly and helps you use it correctly.</p>
<h3>Common Myths — Busted</h3>
<ul>
  <li><strong>AI is NOT conscious.</strong> It has no feelings, no desires, no agenda. It generates outputs based on statistical patterns in training data, not genuine understanding.</li>
  <li><strong>AI does NOT know your business.</strong> Without context you provide, it gives generic answers. The more you tell it about your situation, the better the results.</li>
  <li><strong>AI is NOT always right.</strong> It can confidently state wrong information — a phenomenon called "hallucination." Always verify facts, figures, and legal or financial advice.</li>
  <li><strong>AI cannot replace human judgement.</strong> Strategic decisions, relationship building, creative vision, and ethical reasoning still require humans.</li>
</ul>
<div class="info-box warning"><div class="info-box-title">⚠️ Important</div><p>Never publish AI-generated content without reviewing it. Never use AI-generated legal, medical, or financial advice without consulting a qualified professional. AI is a powerful first draft tool — not the final word.</p></div>
<div class="info-box tip"><div class="info-box-title">💡 The Right Mindset</div><p>Think of AI as a highly capable junior assistant who is extremely fast, works 24/7, never complains, but occasionally makes things up and needs supervision. Your job is to give clear instructions and check the work.</p></div>`
    },
    {
      id: '1.3', title: 'Busting Business Misconceptions', duration: '5 min',
      keyPoints: ['Most powerful AI tools are free or under £30/month','AI augments jobs, it rarely eliminates them entirely','You need zero technical skills to use modern AI','Small businesses often benefit more than large corporations'],
      voiceScript: 'This lesson tackles the four biggest fears and excuses business owners have about AI. By the end you will see that every single one of them is based on a misunderstanding — and that the real risk is not adopting AI, but ignoring it while your competitors embrace it.',
      content: `<h2>Busting Business Misconceptions</h2>
<p>Surveys consistently show that the main reasons business owners avoid AI are fear, cost concerns, and the belief it is too complex. Every single one of these is a misconception worth addressing head-on.</p>
<h3>Misconception 1: "AI Will Take My Employees' Jobs"</h3>
<p>AI automates <em>tasks</em>, not jobs. A receptionist who uses AI to handle routine enquiries can spend more time on complex customer relationships. A marketer who uses AI for first drafts can produce three times the content. AI makes your team more productive — it does not replace them.</p>
<h3>Misconception 2: "AI Is Too Expensive"</h3>
<p>ChatGPT, Claude, and Google Gemini all have free tiers. Even the premium plans cost £15–£25 per month — less than a team lunch. The ROI for most businesses is achieved in the first week of use.</p>
<h3>Misconception 3: "I'm Not Technical Enough"</h3>
<p>Modern AI tools work in plain English. If you can write a text message, you can use ChatGPT. No coding, no IT degree, no technical skills required.</p>
<div class="info-box primary"><div class="info-box-title">📊 The Real Risk</div><p>A 2024 McKinsey study found businesses using AI report 20–30% productivity gains within 90 days of adoption. The businesses that wait will find themselves competing against AI-powered rivals with a significant disadvantage.</p></div>`
    },
    {
      id: '1.4', title: 'The Current AI Landscape', duration: '7 min',
      keyPoints: ['ChatGPT, Claude and Gemini lead general-purpose AI','Specialised AI tools exist for images, voice, video and design','The AI landscape is evolving monthly — stay curious','Free tiers are powerful enough for most business tasks'],
      voiceScript: 'The AI landscape has exploded since 2022 and it can feel overwhelming. This lesson gives you a clear map of the key players, the categories of tools available, and how to think about which tools serve different business needs.',
      content: `<h2>The Current AI Landscape</h2>
<p>Since ChatGPT launched in late 2022, the AI industry has transformed at breathtaking speed. Understanding the landscape helps you choose the right tool for the right job rather than using one tool for everything.</p>
<h3>The Major AI Platforms</h3>
<ul>
  <li><strong>ChatGPT (OpenAI)</strong> — the most widely used AI assistant. Excellent for writing, analysis, coding, and conversation. GPT-4o is the current flagship model.</li>
  <li><strong>Claude (Anthropic)</strong> — known for nuanced writing, long document analysis, and safety. Excellent for business communication and research.</li>
  <li><strong>Gemini (Google)</strong> — deeply integrated with Google Workspace (Docs, Gmail, Sheets). Ideal if your business runs on Google tools.</li>
  <li><strong>Perplexity</strong> — AI-powered search with cited sources. Ideal for research and fact-checking.</li>
</ul>
<h3>Categories of AI Tools</h3>
<ul>
  <li><strong>Text & Writing:</strong> ChatGPT, Claude, Gemini, Jasper</li>
  <li><strong>Image Creation:</strong> Midjourney, DALL-E 3, Adobe Firefly</li>
  <li><strong>Video:</strong> Runway, Sora, HeyGen, Synthesia</li>
  <li><strong>Voice & Audio:</strong> ElevenLabs, Descript, Adobe Podcast</li>
  <li><strong>Design:</strong> Canva AI, Adobe Express</li>
  <li><strong>Automation:</strong> Make, Zapier, n8n</li>
</ul>
<div class="info-box tip"><div class="info-box-title">💡 Strategy Tip</div><p>Start with one general-purpose tool (ChatGPT or Claude) and master it before adding specialist tools. Breadth without depth leads to mediocre results with everything.</p></div>`
    },
    {
      id: '1.5', title: 'Business Opportunities with AI', duration: '7 min',
      keyPoints: ['AI can save the average SME 10–20 hours per week','Marketing content production can increase 5x with AI assistance','AI levels the playing field between small and large businesses','Every business function has AI opportunities waiting to be unlocked'],
      voiceScript: 'This lesson is about opportunity — the tangible, measurable ways AI can transform your business results. We look at real cost savings, revenue growth potential, and competitive advantages available to any business that acts now.',
      content: `<h2>Business Opportunities with AI</h2>
<p>AI is not just a productivity tool — it is a competitive weapon. The businesses that embrace it now are building advantages that will be very difficult for late adopters to overcome. Here is where the opportunities are largest.</p>
<h3>Where AI Creates the Most Value</h3>
<ul>
  <li><strong>Marketing at Scale:</strong> Create a month of social media content in a morning. Generate 20 ad variations to test in an hour. Produce SEO blog posts in minutes.</li>
  <li><strong>Customer Service:</strong> AI chatbots handle 60–80% of routine enquiries instantly, 24/7, at near-zero cost per interaction.</li>
  <li><strong>Sales Efficiency:</strong> Research prospects in seconds, personalise outreach at scale, and never miss a follow-up with automated sequences.</li>
  <li><strong>Operations:</strong> Automate report generation, invoice processing, meeting notes, and internal communications.</li>
  <li><strong>Decision Making:</strong> Analyse your data, summarise market research, and generate strategic options faster than ever.</li>
</ul>
<div class="info-box success"><div class="info-box-title">📈 Real Numbers</div><p>A typical SME using AI effectively saves 2–4 hours per employee per day. At an average UK salary, that is £15,000–£30,000 per employee per year in recaptured productive time. With a £25/month AI subscription, the ROI is extraordinary.</p></div>
<div class="example-box"><div class="example-label">Coffee Shop Example</div><div class="example-prompt">A coffee shop owner used ChatGPT to create 30 days of Instagram content in 90 minutes, set up an automated email welcome sequence for loyalty app sign-ups, and generated 5 variations of a Google ad — all before opening time. Estimated time saving: 8 hours per week.</div></div>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// MODULE 2 — Using ChatGPT Effectively
// ─────────────────────────────────────────────────────────────
{
  id: 2, icon: '💬', color: '#0EA5E9',
  title: 'Using ChatGPT Effectively',
  description: 'Master the skill of prompt engineering and unlock ChatGPT\'s full potential for sales, marketing, customer service, and daily operations.',
  estimatedTime: '47 min',
  videoUrl: '', // Paste your Synthesia share URL here
  lessons: [
    {
      id: '2.1', title: 'Understanding ChatGPT', duration: '5 min',
      keyPoints: ['ChatGPT remembers the conversation within a session','Context is everything — more detail = better output','GPT-4o is available free with usage limits','ChatGPT works best as a collaborative partner, not a command executor'],
      voiceScript: 'ChatGPT is the tool that started the AI revolution for everyday business users. This lesson gives you a solid understanding of how it works, what the different versions mean, and the key principles that determine whether you get brilliant or mediocre results.',
      content: `<h2>Understanding ChatGPT</h2>
<p>ChatGPT is a conversational AI built on OpenAI's GPT-4 family of large language models. It generates responses by predicting the most relevant next words based on your input and its training data. Understanding this helps you write better prompts.</p>
<h3>Key Things to Know</h3>
<ul>
  <li><strong>It works like a conversation.</strong> Each message builds on the previous ones within a session. You can ask it to revise, expand, or change direction at any point.</li>
  <li><strong>Context window.</strong> ChatGPT can only "remember" a certain amount of text in one session. For very long projects, start a new conversation and re-establish context.</li>
  <li><strong>Free vs Paid:</strong> The free tier uses GPT-4o with usage limits. ChatGPT Plus (£20/month) gives unlimited access plus access to newer features and plugins.</li>
  <li><strong>Knowledge cutoff:</strong> ChatGPT's training data has a cutoff date. For real-time information, use Perplexity or enable web browsing in ChatGPT Plus.</li>
</ul>
<div class="info-box tip"><div class="info-box-title">💡 Best Practice</div><p>Start each new project or task in a fresh conversation. Give ChatGPT a role, provide context about your business, then make your request. You will get dramatically better results than just firing a one-line question.</p></div>`
    },
    {
      id: '2.2', title: 'The Art of Prompt Engineering', duration: '8 min',
      keyPoints: ['A great prompt has: Role + Context + Task + Format + Tone','Bad prompts get generic outputs — great prompts get great outputs','You can ask ChatGPT to improve your prompts','Iteration is the key — treat every response as a starting point'],
      voiceScript: 'Prompt engineering is the most valuable skill you can develop with AI. It is the difference between getting a vague, generic response and getting something you can use immediately. This lesson teaches you the CRAFT framework — a simple, memorable system for writing powerful prompts every time.',
      content: `<h2>The Art of Prompt Engineering</h2>
<p>The quality of AI output is directly proportional to the quality of your input. Prompt engineering is the skill of crafting instructions that consistently produce excellent results. The good news: it is simple to learn and immediately valuable.</p>
<h3>The CRAFT Framework</h3>
<ul>
  <li><strong>C — Context:</strong> Tell it about your business, your audience, the situation. ("I run a family-owned plumbing business in Manchester with 8 engineers...")</li>
  <li><strong>R — Role:</strong> Assign it an expert persona. ("Act as an experienced B2B sales copywriter...")</li>
  <li><strong>A — Action:</strong> State exactly what you want it to do. ("Write a follow-up email for a prospect who requested a quote 5 days ago...")</li>
  <li><strong>F — Format:</strong> Specify the output structure. ("Bullet points / 200 words / email format / 3 headline options...")</li>
  <li><strong>T — Tone:</strong> Define the voice. ("Professional but warm / friendly and casual / authoritative...")</li>
</ul>
<div class="example-box">
  <div class="example-label">❌ Weak Prompt</div>
  <div class="example-prompt">Write me a marketing email.</div>
</div>
<div class="example-box">
  <div class="example-label">✅ CRAFT Prompt</div>
  <div class="example-prompt">Act as a direct response copywriter. I run a pet grooming salon in Bristol targeting dog owners aged 30–55. Write a promotional email for our new "Pamper Package" (£65, includes bath, cut, nail trim and bandana). The email should be warm, friendly, and end with a clear call to action to book online. Keep it under 180 words with a compelling subject line.</div>
</div>`
    },
    {
      id: '2.3', title: 'Creating Powerful Prompts', duration: '8 min',
      keyPoints: ['Give ChatGPT examples of what good looks like','Ask it to generate multiple versions for A/B testing','Use "chain of thought" for complex reasoning tasks','Save your best prompts in a prompt library for reuse'],
      voiceScript: 'Now we go deeper into advanced prompting techniques that separate average AI users from power users. These methods help you get more creative, more accurate, and more consistent results — and they work across every AI tool, not just ChatGPT.',
      content: `<h2>Creating Powerful Prompts</h2>
<p>Beyond the CRAFT framework, several advanced techniques dramatically improve output quality. These are the methods used by professional AI practitioners and marketing teams at leading agencies.</p>
<h3>Advanced Techniques</h3>
<ul>
  <li><strong>Few-shot prompting:</strong> Show ChatGPT examples of what you want. Paste in a piece of writing you love and say "Write in this style."</li>
  <li><strong>Chain of thought:</strong> Ask it to think step-by-step before answering. Add "Let's think through this step by step" for analytical tasks.</li>
  <li><strong>Generate variations:</strong> Always ask for 3–5 options. "Give me 5 different subject line options." Test what works best.</li>
  <li><strong>Iterative refinement:</strong> Treat the first response as a draft. "Make it shorter / more conversational / add more urgency / focus on the benefit not the feature."</li>
  <li><strong>Meta-prompting:</strong> Ask ChatGPT to write you a better prompt. "Help me write a better prompt to get [X result]."</li>
</ul>
<div class="info-box primary"><div class="info-box-title">🏆 Power User Move</div><p>Build a Prompt Library. Create a document (Google Doc or Notion page) with your best-performing prompts organised by category: Sales, Marketing, Customer Service, Admin. Share it with your team and watch their productivity multiply.</p></div>
<div class="example-box">
  <div class="example-label">Chain of Thought Example</div>
  <div class="example-prompt">I need to decide whether to hire a part-time social media manager or use AI tools instead. Think through the costs, time investment, quality of output, and scalability for each option. Then give me a recommendation with reasons, assuming I run a small retail shop with a £500/month marketing budget.</div>
</div>`
    },
    {
      id: '2.4', title: 'Sales Prompts That Convert', duration: '7 min',
      keyPoints: ['AI can personalise outreach at scale without it feeling generic','Always include your USP and target customer pain points in sales prompts','Use AI to handle objections you hear repeatedly','Follow-up sequences are one of the highest-ROI uses of AI for sales'],
      voiceScript: 'Sales is where AI delivers some of its most immediate and measurable returns. This lesson gives you plug-and-play prompt templates for every stage of the sales process — from first contact to closing the deal.',
      content: `<h2>Sales Prompts That Convert</h2>
<p>AI will not close deals for you — but it will ensure you always have the right message ready, every follow-up is sent, and every proposal is polished. Here are the most valuable sales prompts for any business.</p>
<h3>Essential Sales Prompt Templates</h3>
<div class="example-box">
  <div class="example-label">Cold Outreach Email</div>
  <div class="example-prompt">Act as an expert B2B sales writer. Write a short cold email (under 120 words) to [target: e.g. restaurant owners in Birmingham]. We offer [your service/product]. The email should open with a relevant observation about their business, identify one key pain point, hint at our solution, and end with a low-friction call to action (reply, not a call). Tone: professional, direct, no buzzwords.</div>
</div>
<div class="example-box">
  <div class="example-label">Objection Handler</div>
  <div class="example-prompt">I sell [product/service] at [price]. A prospect just said "It's too expensive." Give me 5 different responses that acknowledge their concern, reframe the value, and move toward a close. Make each response different in approach — one addresses ROI, one uses comparison, one addresses risk, one uses social proof, one offers a smaller entry point.</div>
</div>
<div class="example-box">
  <div class="example-label">Proposal Introduction</div>
  <div class="example-prompt">Write a compelling 2-paragraph introduction for a business proposal to [prospect name / company]. They are struggling with [pain point]. We are proposing [solution]. Make it empathetic, confident, and focused on their outcome rather than our features. Tone: professional and consultative.</div>
</div>
<div class="info-box success"><div class="info-box-title">✅ Pro Result</div><p>Sales teams using AI-assisted outreach report 40–60% higher response rates when they personalise AI templates with specific company details rather than sending the generic output directly.</p></div>`
    },
    {
      id: '2.5', title: 'Marketing Prompts for Growth', duration: '7 min',
      keyPoints: ['AI can produce a month of content in hours, not weeks','Always brief AI with your brand voice and target customer','Use AI to generate 10 ideas and pick the best 3','Ad copy, blog posts, product descriptions — all ideal for AI'],
      voiceScript: 'Marketing is the number one area where business owners see immediate returns from AI. This lesson gives you battle-tested prompts for ad copy, social content, email marketing, and brand messaging — everything you need to supercharge your marketing output.',
      content: `<h2>Marketing Prompts for Growth</h2>
<p>The average marketing agency charges £500–£2,000 to produce what a well-prompted ChatGPT session can produce in 20 minutes. This lesson gives you the most effective marketing prompts across every channel.</p>
<h3>High-Impact Marketing Prompts</h3>
<div class="example-box">
  <div class="example-label">Facebook/Instagram Ad Copy</div>
  <div class="example-prompt">Write 3 Facebook ad variations for my [business type] targeting [audience]. Product/service: [describe]. Key benefit: [main benefit]. Price: [price]. Include a hook, body copy, and call to action for each. One version should lead with a question, one with a bold statement, one with a customer result. Keep each under 125 words.</div>
</div>
<div class="example-box">
  <div class="example-label">Blog Post Outline</div>
  <div class="example-prompt">Create a detailed outline for a 1,200-word blog post titled "[your topic]" aimed at [target audience]. Include: headline, introduction hook, 5 H2 subheadings with 2-3 bullet points each, and a conclusion with a call to action. Optimise for the keyword "[your keyword]".</div>
</div>
<div class="example-box">
  <div class="example-label">30-Day Social Media Plan</div>
  <div class="example-prompt">Create a 30-day social media content calendar for [business type] targeting [audience]. Mix of content types: educational tips (40%), promotional (20%), behind-the-scenes (20%), engagement questions (20%). Include the post type, topic, and a one-line caption idea for each day. Format as a table.</div>
</div>
<div class="info-box tip"><div class="info-box-title">💡 Brand Voice Tip</div><p>Paste 3–5 examples of your existing best-performing content and tell ChatGPT: "This is my brand voice. Match this style in everything you write for me." This single step dramatically improves consistency.</p></div>`
    },
    {
      id: '2.6', title: 'Customer Service Prompts', duration: '6 min',
      keyPoints: ['AI can draft responses to 80% of customer enquiries in seconds','Create a library of approved response templates with AI','Use AI to turn complaints into retention opportunities','Consistency and speed of response are competitive advantages'],
      voiceScript: 'Exceptional customer service is a major competitive advantage for small businesses, and AI makes it much easier to deliver. This lesson shows you how to use ChatGPT to handle enquiries, resolve complaints, and create consistent, professional customer communication at speed.',
      content: `<h2>Customer Service Prompts</h2>
<p>Response time and quality are the two biggest factors in customer satisfaction. AI allows you to respond faster, more consistently, and more professionally — even when you're busy or understaffed.</p>
<div class="example-box">
  <div class="example-label">Handle a Complaint Professionally</div>
  <div class="example-prompt">Act as a customer service manager. A customer has complained that [describe complaint]. Write a professional, empathetic response that: acknowledges their frustration, takes responsibility where appropriate, explains what went wrong (if known), states exactly what we will do to resolve it, and offers a goodwill gesture. Tone: warm, sincere, not defensive. Keep under 150 words.</div>
</div>
<div class="example-box">
  <div class="example-label">Create FAQ Responses</div>
  <div class="example-prompt">I run a [business type]. Here are the 10 most common questions I receive: [list questions]. Write a professional, friendly answer to each one (3–5 sentences per answer) that I can use on my website FAQ page and as customer service templates.</div>
</div>
<div class="example-box">
  <div class="example-label">Review Response</div>
  <div class="example-prompt">Write 5 different professional responses to a 5-star Google review that mentions [specific thing customer loved]. Each response should feel genuine and personal, thank the customer, and subtly mention one other service we offer. Keep each under 60 words.</div>
</div>
<div class="info-box success"><div class="info-box-title">📈 Business Impact</div><p>Businesses that respond to reviews within 24 hours see a 35% higher review volume and 28% better average rating over time. AI makes consistent, thoughtful responses achievable for any business, even with a team of one.</p></div>`
    },
    {
      id: '2.7', title: 'Administration & Operations Prompts', duration: '6 min',
      keyPoints: ['Meeting summaries and action lists can be generated in seconds','AI can draft job descriptions, SOPs, and contracts in minutes','Use AI to analyse data and produce executive summaries','Administrative AI use frees up hours per week for revenue-generating work'],
      voiceScript: 'The administrative burden on business owners is enormous — and most of it can be dramatically reduced with AI. This lesson covers the most time-saving admin and operations prompts that give you back hours every single week.',
      content: `<h2>Administration & Operations Prompts</h2>
<p>Administration is one of the biggest time-drains in any business. From emails to reports to HR documents, AI can handle the drafting, summarising, and formatting — leaving you to review and approve rather than create from scratch.</p>
<h3>Most Valuable Admin Prompts</h3>
<div class="example-box">
  <div class="example-label">Meeting Notes to Action List</div>
  <div class="example-prompt">Here are my raw meeting notes: [paste notes]. Convert these into: 1) A professional meeting summary (3–5 bullet points), 2) A clear action list with owner and deadline for each item, 3) A brief follow-up email I can send to all attendees. Format clearly with headings.</div>
</div>
<div class="example-box">
  <div class="example-label">Job Description</div>
  <div class="example-prompt">Write a compelling job description for a [job title] at my [business type] based in [location]. We are a [brief company description]. Key responsibilities: [list]. Required skills: [list]. Salary: [range]. Include: engaging company intro, responsibilities, requirements, and why someone would want to work here. Tone: professional but welcoming.</div>
</div>
<div class="example-box">
  <div class="example-label">Standard Operating Procedure</div>
  <div class="example-prompt">Create a step-by-step Standard Operating Procedure (SOP) for [process name] in my [business type]. The process involves: [brief description]. Format it with: purpose, who is responsible, step-by-step instructions (numbered), what to do if something goes wrong, and any tools or resources needed. Make it clear enough for a new employee to follow.</div>
</div>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// MODULE 3 — AI Marketing
// ─────────────────────────────────────────────────────────────
{
  id: 3, icon: '📱', color: '#10B981',
  title: 'AI Marketing',
  description: 'Transform your marketing output. Create months of content in days, produce scroll-stopping ads, and build automated email campaigns that convert.',
  estimatedTime: '39 min',
  videoUrl: '', // Paste your Synthesia share URL here
  lessons: [
    {
      id: '3.1', title: 'Social Media Content at Scale', duration: '7 min',
      keyPoints: ['Batch-create 30 days of content in one focused session','Mix content types: 40% educational, 30% engaging, 30% promotional','Repurpose one idea into content for every platform','Use AI to identify trending topics in your industry'],
      voiceScript: 'Most business owners struggle with social media not because they lack ideas but because they lack time. This lesson shows you how to use AI to create an entire month of high-quality, on-brand social content in a single morning session.',
      content: `<h2>Social Media Content at Scale</h2>
<p>Consistent, quality social media presence is essential for modern businesses — but creating daily content is exhausting. AI changes this entirely. You can now create a month of posts in one focused session, freeing the rest of your time for other priorities.</p>
<h3>The Batch Content Creation System</h3>
<ul>
  <li><strong>Step 1 — Themes:</strong> Ask ChatGPT to generate 20 content ideas for your niche. Pick the 12 best.</li>
  <li><strong>Step 2 — Content:</strong> For each idea, create 2–3 posts in different formats (tip, story, question).</li>
  <li><strong>Step 3 — Repurpose:</strong> Adapt each piece for Instagram (visual caption), Facebook (longer form), LinkedIn (professional angle), and TikTok (hook + script).</li>
  <li><strong>Step 4 — Schedule:</strong> Load posts into a scheduling tool (Buffer, Later, Hootsuite) for automatic publishing.</li>
</ul>
<div class="example-box">
  <div class="example-label">Content Batch Prompt</div>
  <div class="example-prompt">I run a [business type] targeting [audience]. Generate 20 social media post ideas that would be valuable, shareable, or engaging for my audience. Mix of: quick tips (5), myth-busting (4), behind-the-scenes (4), questions to spark discussion (4), success stories (3). For each idea give me the concept and a first-line hook.</div>
</div>
<div class="info-box tip"><div class="info-box-title">💡 Consistency Hack</div><p>Create a "Brand Brief" document with your business description, audience, brand voice, key messages, and 5 example posts. Paste this at the start of every ChatGPT session. Your content will be remarkably consistent and on-brand every time.</p></div>`
    },
    {
      id: '3.2', title: 'Facebook & Instagram Marketing', duration: '7 min',
      keyPoints: ['AI generates high-converting ad copy in seconds','Always test 3–5 ad variations and let data decide the winner','AI can analyse your competitors and identify content gaps','Carousel posts have 3x higher engagement — AI can script all slides'],
      voiceScript: 'Facebook and Instagram remain the most powerful paid advertising platforms for most small businesses. This lesson shows you how to use AI to create ad copy, generate creative concepts, plan your content strategy, and maximise your return on ad spend.',
      content: `<h2>Facebook & Instagram Marketing with AI</h2>
<p>With over 50 million small businesses advertising on Facebook and Instagram, standing out requires consistently fresh creative — exactly what AI excels at producing.</p>
<h3>AI-Powered Ad Creation</h3>
<div class="example-box">
  <div class="example-label">High-Converting Ad Copy Formula</div>
  <div class="example-prompt">Write a Facebook/Instagram ad for [product/service] targeting [audience, age, interests]. Use this structure: Hook (pattern-interrupt first line), Problem (agitate their pain point in 1–2 sentences), Solution (introduce our product), Proof (one specific result or testimonial), Call to Action. Write 3 versions with different hooks. Keep each under 150 words.</div>
</div>
<h3>Instagram Content Strategy</h3>
<div class="example-box">
  <div class="example-label">Carousel Post Script</div>
  <div class="example-prompt">Write a 7-slide Instagram carousel on the topic "[topic]" for [business type] targeting [audience]. Slide 1 must be a bold hook that stops the scroll. Slides 2–6 provide valuable content (one point per slide, 15–20 words max). Slide 7 is a call to action. Include suggested visual descriptions for each slide.</div>
</div>
<div class="example-box">
  <div class="example-label">Instagram Bio Optimisation</div>
  <div class="example-prompt">Rewrite my Instagram bio to clearly communicate: who I help, what I do, and what they should do next. Current bio: [paste bio]. My business: [describe]. Target audience: [describe]. Include a clear value statement and a call to action. Emoji optional. Max 150 characters.</div>
</div>
<div class="info-box success"><div class="info-box-title">🎯 Key Insight</div><p>The best-performing Meta ads have three elements that AI does well: a specific audience call-out in the first line ("Attention [city] business owners..."), one clear benefit, and one clear action. Generate 10 variations with AI and split-test. The data will show you your winner within 48 hours.</p></div>`
    },
    {
      id: '3.3', title: 'TikTok & Video Content', duration: '7 min',
      keyPoints: ['TikTok favours educational and entertaining content — AI can script both','The first 2 seconds of a video determine whether people watch','AI tools can create talking-head videos without you being on camera','Video scripts should be conversational and broken into short sentences'],
      voiceScript: 'TikTok has become a genuine business growth channel for small businesses, and with AI, creating professional video content has never been easier. This lesson covers AI video scripting, talking-head video tools, and how to build a TikTok presence without spending hours creating content.',
      content: `<h2>TikTok & Video Content with AI</h2>
<p>TikTok is not just for teenagers — it is one of the most powerful discovery platforms for local and niche businesses. Short-form video content on TikTok, Instagram Reels, and YouTube Shorts drives enormous organic reach, and AI makes scripting and producing this content straightforward.</p>
<h3>AI Video Script Framework</h3>
<div class="example-box">
  <div class="example-label">TikTok/Reel Script Prompt</div>
  <div class="example-prompt">Write a 45-second TikTok script for [business type] on the topic "[topic]". Structure: Hook (bold statement or question, 5 seconds), Content (3–4 quick valuable points, 30 seconds), CTA (follow for more / book a free consultation / link in bio, 10 seconds). Write conversationally. Short punchy sentences. No corporate language. Include suggested B-roll or visual descriptions.</div>
</div>
<h3>AI Video Creation Tools</h3>
<ul>
  <li><strong>HeyGen:</strong> Create talking-head videos with an AI avatar — no camera needed. Upload your script and choose your avatar's appearance and voice.</li>
  <li><strong>Synthesia:</strong> Professional AI presenter videos, great for training and explainer content.</li>
  <li><strong>Runway:</strong> Turn text descriptions or images into short video clips.</li>
  <li><strong>Descript:</strong> Edit video by editing the transcript. Remove filler words automatically.</li>
</ul>
<div class="info-box tip"><div class="info-box-title">💡 Hook Formula</div><p>The top-performing TikTok hooks follow this pattern: "[Controversial/Surprising statement] about [your niche] that nobody talks about." Generate 10 hook options with AI and choose the most intriguing. A great hook is worth more than a great video.</p></div>`
    },
    {
      id: '3.4', title: 'Email Campaigns with AI', duration: '7 min',
      keyPoints: ['Email marketing still delivers the highest ROI of any digital channel (£36 for every £1 spent)','AI can write entire email sequences — not just individual emails','Subject lines are the most critical element — always generate 10 and test','Personalisation tokens in subject lines lift open rates by 26%'],
      voiceScript: 'Email marketing consistently outperforms every other digital marketing channel for return on investment. This lesson shows you how to use AI to plan, write, and optimise entire email campaigns — from welcome sequences to promotions to re-engagement campaigns.',
      content: `<h2>Email Campaigns with AI</h2>
<p>Email marketing generates £36 return for every £1 spent — the highest ROI in digital marketing. Yet most small businesses underuse it, often because writing compelling emails feels time-consuming. AI solves this entirely.</p>
<h3>The AI Email Workflow</h3>
<ol>
  <li>Define your campaign goal (promote a product, generate enquiries, re-engage lapsed customers)</li>
  <li>Ask AI to plan a full sequence (how many emails, what purpose each serves, suggested timing)</li>
  <li>Write each email using your CRAFT prompt framework</li>
  <li>Generate 5–10 subject line options for each email</li>
  <li>Load into your email platform and schedule</li>
</ol>
<div class="example-box">
  <div class="example-label">Welcome Email Sequence</div>
  <div class="example-prompt">Plan and write a 5-email welcome sequence for new subscribers to my [business type] email list. Subscriber joined because of [lead magnet or signup reason]. Goals: build trust, demonstrate expertise, move toward a first purchase. Email 1: immediate delivery and welcome (Day 0). Emails 2–4: value content. Email 5: soft pitch. Include subject lines (give me 3 options each) and full body copy for each email. Tone: [your brand tone].</div>
</div>
<div class="example-box">
  <div class="example-label">Promotional Email</div>
  <div class="example-prompt">Write a promotional email for [offer/product] with [discount or incentive], expiring [date]. Use urgency and scarcity authentically. Structure: Compelling subject line (3 options), opening hook, body copy highlighting the top 3 benefits, social proof or testimonial, clear CTA button text, and a P.S. that reinforces the deadline. Max 200 words in the body.</div>
</div>`
    },
    {
      id: '3.5', title: 'Content Calendars & Planning', duration: '5 min',
      keyPoints: ['A content calendar eliminates daily decision fatigue','Plan content themes monthly, produce weekly, schedule daily','AI can identify the best posting times for your audience and platform','Seasonal and event-based content consistently outperforms evergreen posts'],
      voiceScript: 'Consistent content is more powerful than occasional brilliant content. This lesson shows you how to use AI to build a complete content calendar that ensures you always have great material ready to publish, without spending hours every week planning and writing.',
      content: `<h2>Content Calendars & Planning with AI</h2>
<p>The businesses with the strongest social media presence are not posting better content — they are posting more consistently. A content calendar is the system that makes consistency possible, and AI makes building one fast and effortless.</p>
<div class="example-box">
  <div class="example-label">Full Month Content Calendar</div>
  <div class="example-prompt">Create a detailed 30-day content calendar for [month] for my [business type]. Include these channels: [Instagram / Facebook / Email]. Use this content mix: 35% educational, 25% promotional, 25% engagement/community, 15% behind-the-scenes. Include key dates and events for [month]. For each day: platform, content type, topic, caption idea, and hashtag suggestions (Instagram only). Format as a table.</div>
</div>
<h3>Seasonal Content Planning</h3>
<div class="example-box">
  <div class="example-label">Seasonal Campaign Planner</div>
  <div class="example-prompt">List all the key dates, events, seasons, and occasions in the next 3 months that are relevant to a [business type] targeting [audience]. For each date suggest: 2 content ideas, 1 promotional angle, and 1 email marketing opportunity. Include both obvious events (Christmas, Valentine's) and less obvious ones I might be missing.</div>
</div>
<div class="info-box success"><div class="info-box-title">⏱️ Time Saving</div><p>One 2-hour AI content planning session per month can produce: 30 social posts, 4 email newsletters, 2 blog posts, and a full promotional calendar. That replaces approximately 12–15 hours of traditional content creation.</p></div>`
    },
    {
      id: '3.6', title: 'AI Video Generation Tools', duration: '6 min',
      keyPoints: ['AI avatars can produce professional video without you being on camera','Text-to-video tools turn written content into engaging video automatically','AI voice cloning creates consistent narration across all your content','Video production costs have dropped 90% with AI tools'],
      voiceScript: 'Video is the most engaging format on every social platform, but production has traditionally been expensive and time-consuming. AI has completely changed this. This lesson shows you the tools that let any business create professional video content quickly and affordably.',
      content: `<h2>AI Video Generation Tools</h2>
<p>Professional video production used to cost thousands of pounds. AI tools have changed this completely. You can now produce polished, professional video content in a fraction of the time and cost — without a camera, studio, or video editing skills.</p>
<h3>The Essential AI Video Toolkit</h3>
<div class="tool-card">
  <div class="tool-card-icon">🎭</div>
  <div>
    <div class="tool-card-name">HeyGen</div>
    <div class="tool-card-cat">AI Avatar Video</div>
    <div class="tool-card-desc">Create professional talking-head videos with realistic AI avatars. Choose appearance, voice, and language. Paste your script and generate a polished video in minutes. Perfect for product demos, training, and explainer videos.</div>
    <div class="tool-card-price">From $24/month</div>
  </div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">✂️</div>
  <div>
    <div class="tool-card-name">Descript</div>
    <div class="tool-card-cat">Video Editing by Transcript</div>
    <div class="tool-card-desc">Edit video by editing text. Record yourself talking, and Descript transcribes it automatically. Delete words from the transcript and the video edits itself. Removes filler words ("um", "uh") with one click.</div>
    <div class="tool-card-price">Free tier available</div>
  </div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🎬</div>
  <div>
    <div class="tool-card-name">Runway ML</div>
    <div class="tool-card-cat">Text-to-Video & Video Editing</div>
    <div class="tool-card-desc">Generate short video clips from text prompts. Add motion to still images. Remove backgrounds. Ideal for creating B-roll, social media visuals, and branded content without stock footage costs.</div>
    <div class="tool-card-price">From $12/month</div>
  </div>
</div>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// MODULE 4 — Lead Generation
// ─────────────────────────────────────────────────────────────
{
  id: 4, icon: '🎯', color: '#F59E0B',
  title: 'Lead Generation with AI',
  description: 'Find better prospects faster, personalise outreach at scale, and build automated follow-up systems that turn cold contacts into paying customers.',
  estimatedTime: '36 min',
  videoUrl: '', // Paste your Synthesia share URL here
  lessons: [
    {
      id: '4.1', title: 'AI-Powered Prospect Research', duration: '7 min',
      keyPoints: ['AI can research a prospect in seconds vs 20 minutes manually','Use AI to identify your ideal customer profile with precision','Perplexity and ChatGPT can identify companies matching your criteria','Research personalisation increases reply rates by 50–70%'],
      voiceScript: 'Finding the right prospects and researching them thoroughly before reaching out is the foundation of effective sales. AI makes this process dramatically faster, allowing you to research and qualify prospects in seconds rather than minutes, and at a scale that was previously impossible for a small team.',
      content: `<h2>AI-Powered Prospect Research</h2>
<p>The best salespeople don't send more messages — they send better messages to better prospects. AI makes it possible to identify your ideal customers with precision and research them deeply before making contact, dramatically increasing your conversion rates.</p>
<h3>Defining Your Ideal Customer with AI</h3>
<div class="example-box">
  <div class="example-label">Ideal Customer Profile (ICP) Prompt</div>
  <div class="example-prompt">I run a [business type] offering [product/service] at [price point]. My best existing clients are [describe characteristics]. Based on this, create a detailed Ideal Customer Profile including: company size, industry, geographic location, key decision-makers, their main pain points, what triggers them to buy, where they spend time online, and what objections they typically raise. Use this to help me identify and prioritise new prospects.</div>
</div>
<h3>Rapid Prospect Research</h3>
<div class="example-box">
  <div class="example-label">Company Research Prompt</div>
  <div class="example-prompt">Research [Company Name] for me. I am planning to approach them about [your service]. Provide: their main business activity, approximate size, key products/services, recent news or developments, likely pain points that [your service] could address, who the relevant decision-maker would likely be (by job title), and 3 personalised conversation starters I could use in my outreach.</div>
</div>
<div class="info-box tip"><div class="info-box-title">💡 Perplexity for Research</div><p>Use Perplexity (perplexity.ai) rather than ChatGPT when you need current, cited information about a specific company or industry. Perplexity searches the web in real-time and provides sources — essential for prospect research accuracy.</p></div>`
    },
    {
      id: '4.2', title: 'Personalised Outreach at Scale', duration: '8 min',
      keyPoints: ['Personalisation at scale is AI\'s greatest sales superpower','Reference a specific detail about each prospect in every message','LinkedIn + ChatGPT is the highest-performing B2B outreach combination','Create outreach templates with [PERSONALISE HERE] placeholders'],
      voiceScript: 'Personalised outreach consistently outperforms generic messaging by 5 to 10 times — but personalising manually for hundreds of prospects is impractical. AI solves this by helping you create frameworks that feel genuinely personal at scale. This lesson shows you exactly how.',
      content: `<h2>Personalised Outreach at Scale</h2>
<p>Generic outreach is ignored. Personalised outreach gets responses. The problem has always been time — you cannot research and personalise 100 emails individually. AI changes this equation entirely.</p>
<h3>The AI Personalisation System</h3>
<ol>
  <li>Create a master outreach template with [PERSONALISE HERE] placeholders</li>
  <li>Paste the template + a prospect's LinkedIn profile or website into ChatGPT</li>
  <li>Ask ChatGPT to fill in the personalisation for each prospect</li>
  <li>Review and send — what took 20 minutes now takes 2</li>
</ol>
<div class="example-box">
  <div class="example-label">LinkedIn Outreach Message</div>
  <div class="example-prompt">I want to connect with [prospect name], [job title] at [company]. Here is their LinkedIn profile: [paste key details]. Write a LinkedIn connection request message (under 300 characters) that references something specific about them or their company, mentions what I do briefly, and feels genuinely human — not salesy. No pitch in the connection request.</div>
</div>
<div class="example-box">
  <div class="example-label">Follow-Up Email After No Reply</div>
  <div class="example-prompt">Write a follow-up email to [prospect name] at [company]. I sent an initial email [X days] ago about [subject]. They haven't replied. This follow-up should: acknowledge they are busy (not passive-aggressive), add new value or a different angle, be under 80 words, and end with a very easy question or CTA that has a low barrier to reply. Do not repeat the original pitch.</div>
</div>
<div class="info-box success"><div class="info-box-title">📊 The Numbers</div><p>Research shows it takes an average of 8 touchpoints to get a response from a cold prospect. With AI, you can create a personalised 8-email sequence for any prospect in under 15 minutes. Most businesses give up after 2 attempts.</p></div>`
    },
    {
      id: '4.3', title: 'CRM Workflows & Automation', duration: '7 min',
      keyPoints: ['AI can update your CRM by summarising calls and emails automatically','Integrate AI with your CRM using Zapier or Make — no coding required','Use AI to score and prioritise leads based on engagement data','Automated CRM workflows eliminate manual data entry almost entirely'],
      voiceScript: 'A CRM is only as good as the data in it — and manual data entry is the reason most CRM systems are poorly maintained. AI integration solves this by automating data capture, lead scoring, follow-up reminders, and pipeline reporting, so your CRM becomes a genuine asset rather than a chore.',
      content: `<h2>CRM Workflows & Automation with AI</h2>
<p>Customer Relationship Management systems are the backbone of any organised sales operation — but they only deliver value when the data is accurate and up-to-date. AI takes the manual work out of CRM management, making it a system your team actually uses.</p>
<h3>AI-Powered CRM Use Cases</h3>
<ul>
  <li><strong>Call Summaries:</strong> Tools like Otter.ai or Fireflies.ai transcribe sales calls and extract key notes, action items, and deal details — automatically pushed to your CRM.</li>
  <li><strong>Email Logging:</strong> Connect your email to your CRM so every conversation is automatically logged against the right contact.</li>
  <li><strong>Lead Scoring:</strong> Use AI to score leads based on company size, engagement behaviour, and fit against your ICP.</li>
  <li><strong>Follow-up Sequences:</strong> Trigger personalised follow-up emails automatically based on pipeline stage or time elapsed.</li>
</ul>
<div class="example-box">
  <div class="example-label">CRM Note Prompt</div>
  <div class="example-prompt">Here are my rough notes from a sales call with [prospect name] at [company]: [paste notes]. Convert these into a professional CRM note including: contact summary, key pain points identified, our proposed solution discussed, objections raised and how they were handled, agreed next steps with dates, and deal stage assessment (Awareness / Interest / Evaluation / Purchase). Keep it factual and actionable.</div>
</div>
<div class="info-box tip"><div class="info-box-title">💡 CRM Integration Tools</div><p>HubSpot CRM (free) + Zapier + ChatGPT is a powerful free combination for small businesses. Zapier can trigger AI analysis of new leads, automatically create follow-up tasks, and send personalised sequences without any coding.</p></div>`
    },
    {
      id: '4.4', title: 'AI Follow-Up Systems', duration: '6 min',
      keyPoints: ['80% of sales require 5+ follow-ups — most businesses stop at 2','Automated sequences ensure no lead ever falls through the cracks','Vary the channel: email, LinkedIn, phone, video message','AI can write an entire follow-up sequence personalised to each lead'],
      voiceScript: 'The fortune is in the follow-up — every sales trainer says it, but most businesses fail to do it consistently. AI-powered follow-up systems fix this completely by automating personalised, multi-touch sequences that run without you having to remember to chase anyone.',
      content: `<h2>AI Follow-Up Systems</h2>
<p>Studies show that 80% of sales require at least 5 follow-up contacts, yet 44% of salespeople give up after the first follow-up. AI-powered follow-up systems close this gap permanently by automating the sequence so no lead is ever forgotten.</p>
<h3>Building Your Follow-Up Sequence</h3>
<div class="example-box">
  <div class="example-label">7-Touch Follow-Up Sequence</div>
  <div class="example-prompt">Create a 7-touch follow-up sequence for a prospect who requested a quote for [product/service] but hasn't responded. Each touch should have a different angle and channel: Touch 1: Email (same day — quote confirmation + next step). Touch 2: Email (Day 3 — add value, not just chasing). Touch 3: LinkedIn message (Day 5). Touch 4: Email (Day 8 — case study or testimonial). Touch 5: Phone call script (Day 12). Touch 6: Email (Day 18 — different angle/offer). Touch 7: Email (Day 25 — break-up email with door left open). Write the actual content for each touch. Keep each under 100 words.</div>
</div>
<div class="info-box warning"><div class="info-box-title">⚠️ GDPR Reminder</div><p>UK businesses must comply with GDPR when sending marketing communications. Ensure you have a lawful basis for contact, honour opt-out requests immediately, and don't spam. AI-powered outreach should be used responsibly and in line with data protection law.</p></div>
<h3>Video Follow-Ups</h3>
<p>A 60-second personalised video message (using Loom or BombBomb) increases reply rates by up to 300%. Use ChatGPT to script a personalised opening for each video, then record it on your phone. It takes 3 minutes and stands out in any inbox.</p>`
    },
    {
      id: '4.5', title: 'Sales Funnel Automation', duration: '8 min',
      keyPoints: ['A sales funnel moves prospects from awareness to purchase automatically','Each funnel stage needs different content and messaging','AI can write every stage of your funnel — ads, landing pages, emails, and sales pages','Automated funnels generate revenue 24/7 without your active involvement'],
      voiceScript: 'A fully automated sales funnel is the closest thing in business to passive income. Prospects enter at the top through your marketing, move through automated educational and nurturing content, and emerge as buyers — all without you manually managing each relationship. AI makes building this system faster and more affordable than ever.',
      content: `<h2>Sales Funnel Automation with AI</h2>
<p>An automated sales funnel works around the clock — attracting prospects, nurturing them with value, and converting them into customers without you being actively involved at every step. AI can write and optimise every component of your funnel.</p>
<h3>The 5-Stage AI-Powered Funnel</h3>
<ul>
  <li><strong>Stage 1 — Attract:</strong> AI-written ads, blog posts, and social content drive traffic to your lead magnet.</li>
  <li><strong>Stage 2 — Capture:</strong> AI-designed landing page copy converts visitors into email subscribers (in exchange for a free guide, checklist, or video).</li>
  <li><strong>Stage 3 — Nurture:</strong> 5–7 email sequence (AI-written) builds trust and demonstrates expertise.</li>
  <li><strong>Stage 4 — Convert:</strong> Sales email or sales page (AI-optimised) presents your offer.</li>
  <li><strong>Stage 5 — Retain:</strong> Post-purchase emails, upsells, and referral requests — all automated.</li>
</ul>
<div class="example-box">
  <div class="example-label">Lead Magnet Idea Generator</div>
  <div class="example-prompt">My business is [describe]. My ideal customer struggles with [main problems]. Generate 10 high-value lead magnet ideas that would be so useful my ideal customer would happily give their email address to receive it. For each idea: title, format (checklist / guide / template / video / quiz), and why it would appeal to my target audience. Identify the top 3 with the highest perceived value.</div>
</div>
<div class="info-box success"><div class="info-box-title">🔧 Recommended Stack</div><p>For most small businesses: Facebook/Instagram Ads (AI-written) → MailerLite landing page (AI copy) → Welcome sequence (AI-written) → Sales email (AI-written). Total cost: under £50/month. This funnel can generate consistent enquiries for any service business.</p></div>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// MODULE 5 — Business Automation
// ─────────────────────────────────────────────────────────────
{
  id: 5, icon: '⚙️', color: '#EF4444',
  title: 'Business Automation',
  description: 'Eliminate repetitive tasks forever. Build intelligent workflows that handle email, customer support, reporting, and operations automatically.',
  estimatedTime: '35 min',
  videoUrl: '', // Paste your Synthesia share URL here
  lessons: [
    {
      id: '5.1', title: 'Email & Communication Automation', duration: '7 min',
      keyPoints: ['AI email tools can draft, sort, and respond to emails automatically','Gmail and Outlook both offer AI writing assistants built in','Automated responses handle 60–80% of routine enquiries','Create email templates with AI once, use them indefinitely'],
      voiceScript: 'Email is one of the biggest time drains in any business. The average professional spends 2.5 hours per day managing email. This lesson shows you how to use AI to cut that time dramatically — automating routine responses, drafting messages in seconds, and building systems that keep your inbox under control.',
      content: `<h2>Email & Communication Automation</h2>
<p>Email management consumes an average of 2.5 hours per day for business professionals. AI can reduce this to under 45 minutes by automating routine responses, intelligently drafting messages from brief notes, and prioritising what actually needs your attention.</p>
<h3>AI Email Tools</h3>
<ul>
  <li><strong>Google Gemini in Gmail:</strong> "Help me write" turns your bullet points into a polished email. Summarises long email threads. Available in Google Workspace.</li>
  <li><strong>Microsoft Copilot in Outlook:</strong> Drafts, summarises, and categorises emails. Part of Microsoft 365.</li>
  <li><strong>Superhuman:</strong> AI-powered email client that learns your communication patterns and automates triage.</li>
  <li><strong>SaneBox:</strong> Uses AI to sort your inbox — important emails in your inbox, the rest in separate folders for batch processing.</li>
</ul>
<div class="example-box">
  <div class="example-label">Email Auto-Responder Prompt</div>
  <div class="example-prompt">Write 8 email response templates for the most common enquiries I receive as a [business type]: 1) General pricing enquiry 2) Request for availability 3) Post-consultation follow-up 4) Complaint acknowledgement 5) Partnership / collaboration request 6) Job application 7) Press enquiry 8) Invoice / payment question. Each should be professional, friendly, and leave a positive impression. Include [PERSONALISE] placeholders where relevant.</div>
</div>
<div class="info-box tip"><div class="info-box-title">💡 Inbox Zero Strategy</div><p>Process email twice daily (9am and 4pm) rather than continuously. Use AI to draft all replies in one batch session. This prevents email from constantly interrupting your most productive work time.</p></div>`
    },
    {
      id: '5.2', title: 'Customer Support Automation', duration: '7 min',
      keyPoints: ['AI chatbots handle 60–80% of routine customer queries instantly','Modern chatbots learn from your existing content and FAQs','Escalation to a human should always be available and easy','Every customer interaction is an opportunity to collect valuable data'],
      voiceScript: 'Customer support is often one of the biggest operational costs and time drains for small businesses. AI-powered chatbots and support automation can handle the vast majority of routine enquiries instantly, at any time of day, at a fraction of the cost of human support — while actually improving customer satisfaction.',
      content: `<h2>Customer Support Automation with AI</h2>
<p>Customer expectations have changed — they want instant answers at any time of day. AI chatbots make this possible for businesses of any size, handling the majority of common queries instantly and freeing your team to focus on complex issues that genuinely need human involvement.</p>
<h3>Types of Customer Support AI</h3>
<ul>
  <li><strong>Website Chatbots:</strong> Tools like Tidio, Intercom, and Crisp offer AI-powered chat that answers questions from your website content and FAQs 24/7.</li>
  <li><strong>WhatsApp Business AI:</strong> Automated responses and workflows via WhatsApp — ideal for retail, hospitality, and service businesses.</li>
  <li><strong>AI Help Centre:</strong> Tools like Notion AI or Document360 can power a searchable knowledge base that customers self-serve from.</li>
</ul>
<div class="example-box">
  <div class="example-label">Chatbot FAQ Content Prompt</div>
  <div class="example-prompt">I need to create a comprehensive FAQ for my [business type] to power an AI chatbot. Based on these common questions my customers ask: [list 10–15 questions], write detailed, helpful, friendly answers for each. Then identify 20 additional questions customers might ask that I haven't listed. Write answers for those too. Keep all answers under 100 words. Use a warm, helpful tone that represents our brand.</div>
</div>
<div class="info-box success"><div class="info-box-title">📈 Real Results</div><p>A retail business using Tidio AI chatbot reported handling 73% of customer queries automatically, reducing support staff time by 18 hours per week. At UK minimum wage, that is a saving of over £8,500 per year — from a £25/month chatbot subscription.</p></div>`
    },
    {
      id: '5.3', title: 'Reporting & Analytics Automation', duration: '6 min',
      keyPoints: ['AI can generate weekly business reports from raw data in seconds','Turn complex spreadsheets into clear executive summaries with AI','Scheduled automated reports eliminate manual data compilation','AI identifies trends and anomalies in your data you might miss'],
      voiceScript: 'Business reporting is essential for making good decisions — but manually compiling data and writing reports is tedious and time-consuming. AI can now generate insightful business reports from your raw data in seconds, identifying trends you might miss and presenting information in clear, professional formats.',
      content: `<h2>Reporting & Analytics Automation</h2>
<p>Data is only valuable when it drives decisions — and that requires clear, timely reports. AI can transform raw data from your accounting software, CRM, and marketing platforms into insightful reports in seconds, without the hours of manual compilation.</p>
<h3>AI Reporting Use Cases</h3>
<ul>
  <li><strong>Sales Pipeline Reports:</strong> Paste your CRM data and ask for a weekly pipeline summary with conversion rates and recommended actions.</li>
  <li><strong>Financial Summaries:</strong> Export from Xero or QuickBooks and ask ChatGPT to summarise performance against targets.</li>
  <li><strong>Marketing Performance:</strong> Paste social media or ad platform metrics and get an analysis of what worked and what needs adjustment.</li>
  <li><strong>Google Analytics:</strong> Ask ChatGPT to explain your website data in plain English and identify opportunities.</li>
</ul>
<div class="example-box">
  <div class="example-label">Data Analysis Prompt</div>
  <div class="example-prompt">Here is my [weekly / monthly] sales data: [paste data]. Analyse this and provide: 1) A plain-English summary of performance, 2) Top 3 positive trends, 3) Top 3 areas of concern, 4) Comparison to previous period, 5) 3 specific recommendations to improve performance next period. Format as an executive summary I can share with my team.</div>
</div>
<div class="info-box tip"><div class="info-box-title">💡 Automate It</div><p>Connect Google Sheets to Make or Zapier, which auto-exports your data to ChatGPT API weekly and sends the generated report to your email. Full automation with no manual steps. Setup takes about 2 hours once — then it runs forever.</p></div>`
    },
    {
      id: '5.4', title: 'Workflow Automation with Make & Zapier', duration: '8 min',
      keyPoints: ['Zapier and Make connect 5,000+ apps without coding','Identify repetitive multi-step tasks first — they are best for automation','Start with one simple workflow and expand from there','AI + automation tools together create truly powerful business systems'],
      voiceScript: 'Zapier and Make are automation platforms that connect all your business apps together. Combined with AI, they allow you to build sophisticated workflows that run automatically — connecting your CRM to your email, your forms to your calendar, your website to your invoicing — without writing a single line of code.',
      content: `<h2>Workflow Automation with Make & Zapier</h2>
<p>Workflow automation is where AI and software integration combine to create business systems that run themselves. Zapier and Make connect over 5,000 applications and allow you to build multi-step automated workflows — called "Zaps" or "Scenarios" — that trigger actions across your entire business software stack.</p>
<h3>High-Value Automation Examples</h3>
<ul>
  <li>New contact form submission → Add to CRM → Send personalised email → Create follow-up task → Notify sales team on Slack</li>
  <li>New invoice paid → Update accounting software → Send thank-you email → Add loyalty points → Request Google review</li>
  <li>New negative review → Alert manager by SMS → Create support ticket → Draft empathetic response in Gmail</li>
  <li>New team member joins → Send welcome email sequence → Create accounts in all apps → Add to Slack channels → Schedule 30-day check-in</li>
</ul>
<div class="example-box">
  <div class="example-label">Automation Opportunity Finder</div>
  <div class="example-prompt">I want to identify automation opportunities in my [business type]. Here are the repetitive tasks my team does regularly: [list tasks]. For each task, suggest: whether it can be automated, which tools could automate it (Zapier/Make/other), the estimated time saving per week, and the difficulty level to implement (Easy/Medium/Hard). Prioritise by ROI (time saved vs implementation effort).</div>
</div>
<div class="info-box primary"><div class="info-box-title">🚀 Getting Started</div><p>Start with Zapier's free tier (5 Zaps, 100 tasks/month). Your first automation: "When a new enquiry form is submitted, automatically send a personalised acknowledgement email and add the contact to your CRM." This alone saves 10–15 minutes per enquiry.</p></div>`
    },
    {
      id: '5.5', title: 'Building Your Internal AI Systems', duration: '7 min',
      keyPoints: ['Document your AI workflows so your whole team can use them','A custom GPT can be trained on your business knowledge','Internal AI assistants answer staff questions using your policies and SOPs','Shared prompt libraries multiply AI productivity across your team'],
      voiceScript: 'The final step in business automation is building internal AI systems that your whole team can use — not just you. This lesson shows you how to create custom AI tools trained on your business knowledge, build shared prompt libraries, and deploy internal chatbots that answer staff questions using your own documentation.',
      content: `<h2>Building Your Internal AI Systems</h2>
<p>Individual AI use is valuable. But the real competitive advantage comes from building AI systems that your entire organisation can leverage — custom tools trained on your specific business, processes, and knowledge.</p>
<h3>Custom GPTs for Your Business</h3>
<p>ChatGPT Plus allows you to create "Custom GPTs" — personalised AI assistants pre-configured with your business context, communication style, and specialised knowledge. Examples:</p>
<ul>
  <li><strong>Sales Assistant GPT:</strong> Knows your products, pricing, USPs, and common objections. Staff can ask it anything during a sales call.</li>
  <li><strong>Customer Service GPT:</strong> Trained on your policies, FAQs, and service standards. Helps staff respond consistently and professionally.</li>
  <li><strong>Content Creator GPT:</strong> Knows your brand voice, target audience, and content style. Produces on-brand content without lengthy prompts.</li>
  <li><strong>HR Policy GPT:</strong> Answers staff questions about leave, expenses, and company policies instantly.</li>
</ul>
<div class="example-box">
  <div class="example-label">Business Knowledge Base Prompt</div>
  <div class="example-prompt">Help me create a comprehensive "Business Bible" document I can use to train an AI assistant on my company. Generate a template with sections for: Company overview and values, Products/services and pricing, Target customer profiles, Tone of voice guidelines, Common customer FAQs and answers, Sales objections and responses, Key processes and workflows, Policies (returns, complaints, etc.). I will fill in the details for each section.</div>
</div>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// MODULE 6 — AI Tools Every Business Should Know
// ─────────────────────────────────────────────────────────────
{
  id: 6, icon: '🛠️', color: '#8B5CF6',
  title: 'AI Tools Every Business Should Know',
  description: 'A practical guide to the 8 most powerful AI tools for business — what they do, when to use them, and how to get started today.',
  estimatedTime: '37 min',
  videoUrl: '', // Paste your Synthesia share URL here
  lessons: [
    {
      id: '6.1', title: 'ChatGPT — Your AI Business Partner', duration: '5 min',
      keyPoints: ['ChatGPT is the most versatile AI tool available today','GPT-4o is the current flagship — available free with limits','Custom GPTs let you create specialised tools for your business','Use Projects feature to maintain context across conversations'],
      voiceScript: 'ChatGPT needs no introduction — it is the tool that brought AI to mainstream business use. But most people only use a fraction of its capability. This lesson covers the features that matter most for business owners and the specific use cases where ChatGPT genuinely excels.',
      content: `<h2>ChatGPT — Your AI Business Partner</h2>
<div class="tool-card">
  <div class="tool-card-icon">💬</div>
  <div>
    <div class="tool-card-name">ChatGPT</div>
    <div class="tool-card-cat">General Purpose AI Assistant</div>
    <div class="tool-card-desc">The world's leading AI assistant. Excels at writing, analysis, brainstorming, coding, research, and conversation. The GPT-4o model has vision capabilities (upload images for analysis) and can browse the web.</div>
    <div class="tool-card-uses"><span class="tool-tag">Writing</span><span class="tool-tag">Analysis</span><span class="tool-tag">Brainstorming</span><span class="tool-tag">Research</span><span class="tool-tag">Code</span></div>
    <div class="tool-card-price">Free tier available · Plus: £20/month</div>
  </div>
</div>
<h3>Best Business Use Cases</h3>
<ul>
  <li>Marketing copy, ads, email sequences, and social content</li>
  <li>Business analysis, SWOT analysis, strategic planning</li>
  <li>Document drafting: proposals, reports, SOPs, job descriptions</li>
  <li>Customer service templates and response frameworks</li>
  <li>Data analysis — paste spreadsheet data and ask for insights</li>
</ul>
<h3>Power Features Most Users Miss</h3>
<ul>
  <li><strong>Custom GPTs:</strong> Build your own specialised AI assistant pre-loaded with your business context</li>
  <li><strong>Projects:</strong> Maintain context across multiple conversations for long-term projects</li>
  <li><strong>Voice Mode:</strong> Have real conversations with ChatGPT using your voice</li>
  <li><strong>Canvas:</strong> Collaborative editing mode for documents and code</li>
</ul>`
    },
    {
      id: '6.2', title: 'Claude — The Business Writer', duration: '5 min',
      keyPoints: ['Claude excels at nuanced, long-form business writing','200,000 token context window — can analyse entire documents','Known for following complex instructions precisely','Particularly strong at maintaining brand voice consistently'],
      voiceScript: "Claude, created by Anthropic, has become the preferred AI tool for writers, lawyers, and business communicators who need nuanced, precise language. This lesson explores what Claude does better than other AI tools and the specific business scenarios where it delivers superior results.",
      content: `<h2>Claude — The Business Writer's AI</h2>
<div class="tool-card">
  <div class="tool-card-icon">🤖</div>
  <div>
    <div class="tool-card-name">Claude</div>
    <div class="tool-card-cat">AI Writing & Analysis</div>
    <div class="tool-card-desc">Anthropic's Claude is widely regarded as the best AI for nuanced writing, long document analysis, and complex instruction following. Its enormous context window (200k tokens) means it can read and analyse entire reports, contracts, or books in one session.</div>
    <div class="tool-card-uses"><span class="tool-tag">Long-form Writing</span><span class="tool-tag">Document Analysis</span><span class="tool-tag">Legal/Contracts</span><span class="tool-tag">Research</span></div>
    <div class="tool-card-price">Free tier available · Pro: £18/month</div>
  </div>
</div>
<h3>Where Claude Outperforms Competitors</h3>
<ul>
  <li><strong>Document analysis:</strong> Paste an entire contract, annual report, or lengthy policy document and ask targeted questions about it</li>
  <li><strong>Long-form writing:</strong> Produces more naturally flowing, less robotic prose than most AI models</li>
  <li><strong>Complex instructions:</strong> Follows multi-step, nuanced instructions with greater precision</li>
  <li><strong>Sensitive topics:</strong> More thoughtful handling of complex business situations</li>
</ul>
<div class="example-box">
  <div class="example-label">Best Use Case: Contract Review</div>
  <div class="example-prompt">Review this contract and highlight: any clauses that may disadvantage me as the service provider, any unusual or non-standard terms, any missing protections I should request, and any ambiguous language that could cause disputes. Summarise your findings in a priority-ordered list. [Paste contract]</div>
</div>`
    },
    {
      id: '6.3', title: 'Gemini — Google\'s AI', duration: '5 min',
      keyPoints: ['Gemini integrates directly with Google Workspace — Docs, Gmail, Sheets','Use Gemini in Gmail to draft, reply, and summarise threads','Gemini in Sheets can create formulas and analyse data with prompts','Deep Search mode provides comprehensive researched answers'],
      voiceScript: "Google's Gemini is the AI of choice for businesses that run on Google Workspace. Its deep integration with Gmail, Google Docs, Google Sheets, and Google Drive makes it a natural choice if these tools are already central to your business. This lesson shows you exactly how to use Gemini within Google's ecosystem for maximum productivity.",
      content: `<h2>Gemini — Google's AI for Your Business</h2>
<div class="tool-card">
  <div class="tool-card-icon">♊</div>
  <div>
    <div class="tool-card-name">Gemini</div>
    <div class="tool-card-cat">Google AI — Workspace Integrated</div>
    <div class="tool-card-desc">Google's AI model, deeply integrated into the tools millions of businesses already use daily. Gemini in Google Workspace means AI assistance is available inside Gmail, Docs, Sheets, Slides, and Drive — without switching apps.</div>
    <div class="tool-card-uses"><span class="tool-tag">Gmail</span><span class="tool-tag">Google Docs</span><span class="tool-tag">Sheets</span><span class="tool-tag">Research</span></div>
    <div class="tool-card-price">Free tier available · Workspace: from £9.99/user/month</div>
  </div>
</div>
<h3>Key Gemini Business Features</h3>
<ul>
  <li><strong>Gemini in Gmail:</strong> "Help me write" drafts emails from a few bullet points. "Summarise this thread" condenses long email chains instantly.</li>
  <li><strong>Gemini in Docs:</strong> Drafts, rewrites, and improves documents without leaving Google Docs.</li>
  <li><strong>Gemini in Sheets:</strong> Generates formulas, analyses data, and creates charts from plain-English requests.</li>
  <li><strong>Gemini in Meet:</strong> Takes meeting notes, summarises discussions, and lists action items automatically.</li>
  <li><strong>Deep Research:</strong> Gemini's research mode produces comprehensive, cited reports on any topic — ideal for market research and competitive analysis.</li>
</ul>`
    },
    {
      id: '6.4', title: 'Perplexity — AI Research Tool', duration: '4 min',
      keyPoints: ['Perplexity searches the web in real-time and cites every source','Use it for competitor research, market analysis, and fact-checking','Deep Research mode produces full reports with citations','Free to use for most business research tasks'],
      voiceScript: "Perplexity has become the preferred research tool for business professionals who need accurate, current, and cited information. Unlike ChatGPT which uses training data with a cutoff date, Perplexity searches the web in real time. This lesson shows you how to use it for competitor research, market analysis, and business intelligence.",
      content: `<h2>Perplexity — AI-Powered Business Research</h2>
<div class="tool-card">
  <div class="tool-card-icon">🔍</div>
  <div>
    <div class="tool-card-name">Perplexity AI</div>
    <div class="tool-card-cat">AI Research & Search</div>
    <div class="tool-card-desc">An AI-powered search engine that answers complex questions with real-time web searches, provides cited sources, and offers deep research capabilities. Ideal when you need current, verifiable information rather than AI-generated content.</div>
    <div class="tool-card-uses"><span class="tool-tag">Research</span><span class="tool-tag">Competitor Analysis</span><span class="tool-tag">Market Data</span><span class="tool-tag">Fact-Checking</span></div>
    <div class="tool-card-price">Free · Pro: $20/month</div>
  </div>
</div>
<h3>Business Research Use Cases</h3>
<ul>
  <li><strong>Competitor analysis:</strong> "What are the main competitors to [company] in the UK, and what are their strengths and weaknesses?"</li>
  <li><strong>Market research:</strong> "What is the current market size and growth trend for [industry] in the UK?"</li>
  <li><strong>Prospect research:</strong> "Give me an overview of [Company Name] — their products, recent news, and key challenges."</li>
  <li><strong>Industry trends:</strong> "What are the 5 biggest trends affecting [industry] in 2024/2025?"</li>
</ul>
<div class="info-box tip"><div class="info-box-title">💡 Deep Research</div><p>Perplexity's "Deep Research" feature (Pro) spends several minutes conducting comprehensive research and produces a detailed, cited report. Equivalent to 2–3 hours of manual research from a professional researcher — at a fraction of the cost.</p></div>`
    },
    {
      id: '6.5', title: 'Canva AI — Design Automation', duration: '5 min',
      keyPoints: ['Canva AI generates professional design elements from text prompts','Magic Design creates complete branded templates from one image','Magic Write drafts copy directly inside your designs','Background removal, image expansion, and brand kit features save hours'],
      voiceScript: "Canva has long been the go-to design tool for non-designers, and its AI features have made it dramatically more powerful. From generating images to writing copy to creating entire branded presentations in seconds, Canva AI is a must-have for any business that needs to produce visual content regularly.",
      content: `<h2>Canva AI — Design Without a Designer</h2>
<div class="tool-card">
  <div class="tool-card-icon">🎨</div>
  <div>
    <div class="tool-card-name">Canva AI</div>
    <div class="tool-card-cat">AI-Powered Design</div>
    <div class="tool-card-desc">The world's most popular design platform has integrated powerful AI features that allow anyone to create professional-quality graphics, presentations, social media content, and marketing materials — no design experience required.</div>
    <div class="tool-card-uses"><span class="tool-tag">Social Media</span><span class="tool-tag">Presentations</span><span class="tool-tag">Marketing</span><span class="tool-tag">Brand Assets</span></div>
    <div class="tool-card-price">Free · Pro: £99/year</div>
  </div>
</div>
<h3>Key AI Features in Canva</h3>
<ul>
  <li><strong>Magic Design:</strong> Upload one brand image and generate a complete suite of branded templates instantly</li>
  <li><strong>Text to Image:</strong> Generate custom illustrations, product mockups, and background images from text descriptions</li>
  <li><strong>Magic Write:</strong> AI copywriting built into your designs — generate headlines, taglines, and body copy without leaving Canva</li>
  <li><strong>Background Remover:</strong> One-click professional background removal from any product photo</li>
  <li><strong>Magic Expand:</strong> Extend any image beyond its original borders — AI fills in the content</li>
  <li><strong>Brand Kit:</strong> Store your colours, fonts, and logos. All AI-generated designs automatically match your brand</li>
</ul>`
    },
    {
      id: '6.6', title: 'Midjourney — AI Image Creation', duration: '5 min',
      keyPoints: ['Midjourney creates photorealistic images from text descriptions','Use it for marketing visuals, product mockups, and concept art','Specific, detailed prompts produce dramatically better images','Consistent style requires a style reference image or style code'],
      voiceScript: "Midjourney has become the gold standard for AI image generation, producing photorealistic and artistically stunning visuals from text descriptions. For businesses, it opens up possibilities that were previously only available to companies with large photography and design budgets. This lesson shows you how to use it effectively for your business.",
      content: `<h2>Midjourney — Professional AI Imagery</h2>
<div class="tool-card">
  <div class="tool-card-icon">🖼️</div>
  <div>
    <div class="tool-card-name">Midjourney</div>
    <div class="tool-card-cat">AI Image Generation</div>
    <div class="tool-card-desc">The leading AI image generation tool, producing photorealistic and artistic visuals from text prompts. Used by leading brands, agencies, and creative professionals worldwide for marketing imagery, concept art, and product visualisation.</div>
    <div class="tool-card-uses"><span class="tool-tag">Marketing Images</span><span class="tool-tag">Product Mockups</span><span class="tool-tag">Social Content</span><span class="tool-tag">Concepts</span></div>
    <div class="tool-card-price">Basic: $10/month</div>
  </div>
</div>
<h3>Business Applications</h3>
<ul>
  <li>Hero images for your website without expensive photography</li>
  <li>Social media visuals that stand out without stock photo licensing</li>
  <li>Product concept visualisation before investing in production</li>
  <li>Seasonal marketing imagery for every campaign</li>
  <li>Interior design concepts, menu photography style images, branding mood boards</li>
</ul>
<div class="example-box">
  <div class="example-label">Effective Midjourney Prompt Structure</div>
  <div class="example-prompt">[Subject description], [environment/setting], [lighting style], [mood/atmosphere], [camera angle], [artistic style] --ar 16:9 --style raw

Example: Professional woman working on laptop in a bright modern coffee shop, warm morning light through large windows, productive and calm atmosphere, eye-level shot, photorealistic, natural colours --ar 16:9 --style raw</div>
</div>`
    },
    {
      id: '6.7', title: 'ElevenLabs — Voice & Audio AI', duration: '4 min',
      keyPoints: ['ElevenLabs creates ultra-realistic AI voices for any content','Clone your own voice for consistent brand audio','Text-to-speech for videos, podcasts, and audio content','Multilingual voice generation for international markets'],
      voiceScript: "ElevenLabs has revolutionised audio content creation with AI voices so realistic they are virtually indistinguishable from human voices. For businesses, this means professional-quality voiceovers, podcast-style content, and branded audio at a fraction of traditional recording costs.",
      content: `<h2>ElevenLabs — Professional AI Voice & Audio</h2>
<div class="tool-card">
  <div class="tool-card-icon">🎤</div>
  <div>
    <div class="tool-card-name">ElevenLabs</div>
    <div class="tool-card-cat">AI Voice Generation</div>
    <div class="tool-card-desc">The most advanced AI voice synthesis platform. Creates hyper-realistic voices from text, clones existing voices with just 3 minutes of audio, and supports 29 languages. Used by major media companies, content creators, and businesses worldwide.</div>
    <div class="tool-card-uses"><span class="tool-tag">Video Narration</span><span class="tool-tag">Podcasts</span><span class="tool-tag">Voice Cloning</span><span class="tool-tag">Multilingual</span></div>
    <div class="tool-card-price">Free tier · Starter: $5/month</div>
  </div>
</div>
<h3>Business Use Cases</h3>
<ul>
  <li><strong>Video narration:</strong> Add professional voiceovers to product videos, explainer videos, and training content without hiring a voice actor</li>
  <li><strong>Brand voice consistency:</strong> Clone your own voice and use it across all video content for consistent brand presence</li>
  <li><strong>Training materials:</strong> Convert written SOPs and training documents into audio learning content</li>
  <li><strong>Customer-facing content:</strong> Professional phone greetings, IVR systems, and audio guides</li>
  <li><strong>Multilingual content:</strong> Translate and voice your content in 29 languages to reach international markets</li>
</ul>`
    },
    {
      id: '6.8', title: 'Notion AI — Workspace Intelligence', duration: '4 min',
      keyPoints: ['Notion AI turns your notes and docs into an intelligent knowledge base','Ask Notion AI questions about your own documents and notes','Autofill database properties, generate meeting agendas, and summarise content','The AI Q&A feature makes your company wiki instantly searchable'],
      voiceScript: "Notion has become one of the most popular business productivity tools, and its AI integration makes it even more powerful. Notion AI can write, summarise, translate, and — most valuably — answer questions from across your entire Notion workspace, turning your business documentation into an always-accessible intelligent assistant.",
      content: `<h2>Notion AI — Your Intelligent Business Hub</h2>
<div class="tool-card">
  <div class="tool-card-icon">📝</div>
  <div>
    <div class="tool-card-name">Notion AI</div>
    <div class="tool-card-cat">AI Workspace & Knowledge Management</div>
    <div class="tool-card-desc">Notion is a powerful all-in-one workspace combining notes, databases, wikis, and project management. Notion AI adds intelligence across your entire workspace — writing assistance, content generation, and crucially, the ability to query your own business knowledge base using natural language.</div>
    <div class="tool-card-uses"><span class="tool-tag">Documentation</span><span class="tool-tag">Project Management</span><span class="tool-tag">Team Wiki</span><span class="tool-tag">Meeting Notes</span></div>
    <div class="tool-card-price">Free · Plus: £8/month · AI add-on: £8/month</div>
  </div>
</div>
<h3>Most Valuable Notion AI Features</h3>
<ul>
  <li><strong>AI Q&A:</strong> Ask any question and Notion searches your entire workspace to find the answer — turns your docs into a self-service knowledge base for staff</li>
  <li><strong>Autofill:</strong> Automatically fill in database properties like tags, summaries, and priority ratings based on your content</li>
  <li><strong>Meeting notes:</strong> AI-generated agendas, action item extraction, and meeting summaries</li>
  <li><strong>Content generation:</strong> Write, rewrite, summarise, and translate directly within your Notion pages</li>
</ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// MODULE 7 — Building Your AI Strategy
// ─────────────────────────────────────────────────────────────
{
  id: 7, icon: '🗺️', color: '#06B6D4',
  title: 'Building Your AI Strategy',
  description: 'Create a practical, low-cost AI implementation plan for your business. From your first tool to a fully AI-augmented operation — step by step.',
  estimatedTime: '34 min',
  videoUrl: '', // Paste your Synthesia share URL here
  lessons: [
    {
      id: '7.1', title: 'Starting Your AI Journey', duration: '7 min',
      keyPoints: ['Start with your biggest time drain — that is your first AI opportunity','One tool, mastered, beats five tools used poorly','Run a simple AI audit: list every repetitive task that takes over 30 minutes per week','Give yourself 30 days to build one solid AI habit before adding more'],
      voiceScript: 'The biggest mistake businesses make with AI is trying to adopt too many tools at once. This lesson gives you a clear, practical starting framework — the AI Audit — that identifies exactly where AI will have the biggest impact in your specific business and what to tackle first.',
      content: `<h2>Starting Your AI Journey</h2>
<p>The hardest part of adopting AI is knowing where to begin. With hundreds of tools and applications, the temptation to try everything is strong — but this leads to shallow results and abandoned subscriptions. The right approach is systematic.</p>
<h3>The AI Business Audit</h3>
<p>Before choosing any tools, spend 30 minutes doing this exercise:</p>
<ol>
  <li><strong>List your top 10 time drains</strong> — the tasks that consume the most time each week</li>
  <li><strong>Mark each as repetitive or creative</strong> — repetitive tasks are prime automation candidates; creative tasks can be AI-assisted</li>
  <li><strong>Estimate the weekly time cost</strong> — even a rough number helps prioritise</li>
  <li><strong>Identify the highest-impact opportunities</strong> — biggest time cost + most repetitive = start here</li>
</ol>
<div class="example-box">
  <div class="example-label">AI Audit Prompt</div>
  <div class="example-prompt">Help me conduct an AI opportunity audit for my [business type]. Here are my top 10 most time-consuming weekly tasks: [list tasks]. For each task, tell me: 1) Which AI tool or approach could automate or accelerate it, 2) Estimated time saving per week, 3) Estimated monthly cost (if any), 4) Difficulty to implement (Easy/Medium/Hard), 5) Recommended first step. Then rank all 10 by ROI (time saved per pound spent).</div>
</div>
<div class="info-box success"><div class="info-box-title">🎯 The 30-Day Rule</div><p>Commit to one AI tool for 30 days before adding another. Mastery of one tool delivers more value than superficial use of five. After 30 days, you will have built the habits and confidence to add the next tool effectively.</p></div>`
    },
    {
      id: '7.2', title: 'Low-Cost AI Implementation', duration: '7 min',
      keyPoints: ['You can build a powerful AI toolkit for under £100/month','Free tiers of ChatGPT, Claude, and Canva are enough to start','Prioritise tools that directly replace existing paid services','The free tools available today would have cost £5,000+/month five years ago'],
      voiceScript: 'Cost is one of the most common objections to AI adoption, and it is almost always based on a misunderstanding. This lesson lays out a complete AI toolkit for small businesses that delivers transformational results for under £100 per month — often starting with zero investment using free tiers.',
      content: `<h2>Low-Cost AI Implementation</h2>
<p>You do not need a large technology budget to build a powerful AI toolkit. The most impactful AI tools for small businesses start free, and even a full premium stack costs less than the salary of a part-time employee.</p>
<h3>The Starter Stack (Free)</h3>
<ul>
  <li><strong>ChatGPT Free:</strong> Writing, marketing, analysis, brainstorming — free, unlimited to start</li>
  <li><strong>Claude Free:</strong> Long-form writing and document analysis — free tier generous for most needs</li>
  <li><strong>Canva Free:</strong> Design for social media and marketing materials</li>
  <li><strong>Perplexity Free:</strong> Research and competitive intelligence</li>
  <li><strong>Google Gemini Free:</strong> Integrated into Google Workspace basics</li>
</ul>
<h3>The Growth Stack (Under £100/month)</h3>
<ul>
  <li>ChatGPT Plus — £20/month (access to GPT-4o, image generation, Custom GPTs)</li>
  <li>Canva Pro — £10/month (brand kit, background remover, premium assets)</li>
  <li>Zapier Starter — £17/month (automation, connects your apps)</li>
  <li>Tidio Chatbot — £15/month (website AI chatbot)</li>
  <li>ElevenLabs Starter — $5/month (voice content)</li>
</ul>
<div class="info-box success"><div class="info-box-title">💰 Total Cost: Under £70/month</div><p>This stack, properly used, replaces the equivalent of: a copywriter, graphic designer, researcher, customer support agent, and data analyst — delivering more output, faster, 24/7. The ROI calculation is straightforward.</p></div>`
    },
    {
      id: '7.3', title: 'Calculating Your AI ROI', duration: '7 min',
      keyPoints: ['Calculate AI ROI as: (Hours saved × hourly rate) − tool costs','Include indirect benefits: faster output, higher quality, 24/7 availability','Measure AI impact over 30, 60, and 90 days to see compound benefits','Most businesses achieve positive ROI within the first week of use'],
      voiceScript: 'Making the business case for AI — whether to yourself, your partners, or your board — requires being able to quantify the return on investment. This lesson gives you a practical framework for calculating exactly what AI is worth to your business, with real numbers and examples.',
      content: `<h2>Calculating Your AI ROI</h2>
<p>Every business investment should be measured. AI is no different — and the good news is that the ROI calculation for most small businesses is extremely favourable. Here is how to quantify it properly.</p>
<h3>The AI ROI Formula</h3>
<div class="info-box primary"><div class="info-box-title">📊 ROI Formula</div><p><strong>Monthly AI ROI = (Hours saved per month × Your hourly rate) + (Revenue increase) − (Monthly AI tool costs)</strong></p></div>
<h3>Worked Example — Retail Business Owner</h3>
<ul>
  <li>Marketing content creation: Saves 8 hours/month (£35/hr = £280 saved)</li>
  <li>Customer email responses: Saves 4 hours/month (£280 + £140 = £420 saved)</li>
  <li>Social media: Saves 5 hours/month (£420 + £175 = £595 saved)</li>
  <li>Report writing: Saves 3 hours/month (£595 + £105 = £700 saved)</li>
  <li>AI tool costs: £70/month</li>
  <li><strong>Net monthly ROI: £700 − £70 = £630 / 900% ROI</strong></li>
</ul>
<div class="example-box">
  <div class="example-label">AI ROI Calculator Prompt</div>
  <div class="example-prompt">Help me calculate the ROI of AI tools for my business. I estimate these time savings: [list your estimated savings per task]. My effective hourly rate is £[X]. Monthly AI tool costs are £[Y]. Also help me identify any indirect benefits I may not be quantifying (quality improvements, 24/7 availability, reduced errors, etc.) and how to assign value to them. Present as a simple monthly ROI summary.</div>
</div>`
    },
    {
      id: '7.4', title: 'Getting Your Team on Board', duration: '6 min',
      keyPoints: ['Start with enthusiastic early adopters — use their success as proof','Training should be hands-on, not theoretical — prompt practice sessions work best','Address fears about job security honestly and directly','Build shared prompt libraries so the whole team benefits from individual discovery'],
      voiceScript: 'Individual AI adoption is valuable, but team-wide adoption multiplies the benefit across your entire business. The challenge is that change meets resistance — and AI changes the way people work. This lesson gives you a practical approach to bringing your team on the AI journey successfully.',
      content: `<h2>Getting Your Team on Board with AI</h2>
<p>The businesses that get the most from AI are those where it is embedded across the team — not just used by one enthusiastic person. Getting buy-in requires addressing fears, demonstrating clear benefits, and making it easy for every team member to build AI habits.</p>
<h3>The Team Adoption Framework</h3>
<ol>
  <li><strong>Start with yourself.</strong> Master one tool personally. Your genuine enthusiasm and demonstrated results are your most powerful selling tool.</li>
  <li><strong>Identify your early adopters.</strong> Every team has 1–2 people who are curious about technology. Bring them in first, let them explore, and create success stories.</li>
  <li><strong>Address the elephant in the room.</strong> Be honest and direct about job security. Explain that AI is augmenting roles, not replacing people — and show examples.</li>
  <li><strong>Make training practical.</strong> Hands-on prompt writing sessions (30 minutes per week) beat any classroom training. Give people tasks to solve with AI.</li>
  <li><strong>Build shared systems.</strong> Create a team prompt library. Celebrate and share when someone finds a great new use case.</li>
</ol>
<div class="info-box warning"><div class="info-box-title">⚠️ Common Mistake</div><p>Mandating AI use without training and support creates resentment. The most effective approach is to make AI so obviously helpful that people want to use it — not feel they have to. Lead with the time it saves them personally.</p></div>`
    },
    {
      id: '7.5', title: 'Avoiding the Most Common Mistakes', duration: '7 min',
      keyPoints: ['Never publish AI content without reviewing it for accuracy','AI outputs need your business context — generic prompts give generic results','Data privacy: never enter sensitive customer data into public AI tools','Avoid AI dependency — maintain the skills and knowledge to operate without it'],
      voiceScript: 'Understanding the pitfalls of AI adoption is just as important as understanding the opportunities. This final lesson covers the most common and costly mistakes businesses make when implementing AI — so you can learn from others\' experience and avoid them entirely.',
      content: `<h2>Avoiding the Most Common AI Mistakes</h2>
<p>AI implementation mistakes fall into a small number of recurring patterns. Knowing them in advance puts you well ahead of most businesses on this journey.</p>
<h3>The Top Mistakes — and How to Avoid Them</h3>
<ul>
  <li><strong>Mistake 1: Publishing without reviewing.</strong> AI hallucinations are real. Always fact-check claims, statistics, and any content that will be public-facing. Establish a review step in your AI workflow.</li>
  <li><strong>Mistake 2: Using generic prompts.</strong> The context you provide is everything. Businesses that invest time in detailed, specific prompts get dramatically better results than those firing one-line questions.</li>
  <li><strong>Mistake 3: Ignoring data privacy.</strong> Never enter personal customer data, sensitive financial information, or confidential business data into public AI tools like ChatGPT. Use enterprise plans with data protection guarantees for sensitive tasks.</li>
  <li><strong>Mistake 4: Trying too many tools at once.</strong> Breadth without depth. Pick one tool, master it in 30 days, then expand.</li>
  <li><strong>Mistake 5: No governance or guidelines.</strong> As your team uses AI more, you need clear policies on what is acceptable use, how content is reviewed, and what data can and cannot be shared with AI tools.</li>
</ul>
<div class="example-box">
  <div class="example-label">Create Your AI Policy Prompt</div>
  <div class="example-prompt">Help me create a simple, practical AI usage policy for my team of [size] at a [business type]. Include guidelines on: acceptable and unacceptable AI uses, data privacy rules (what can and cannot be shared with AI tools), content review requirements before publishing, how to handle AI errors, and how to report new AI use cases to share with the team. Keep it practical, not overly legalistic — one A4 page.</div>
</div>
<div class="info-box success"><div class="info-box-title">🏆 Congratulations!</div><p>You have completed all seven learning modules of the AI For Business Growth Masterclass. You are now ready for the Final Assessment. Score 70% or above to receive your professional certificate.</p></div>`
    }
  ]
}

]; // end MODULES

// ── Assessment Module Config ──────────────────────────────────
const ASSESSMENT_CONFIG = {
  id: 8, icon: '📝', color: '#EC4899',
  title: 'Final Assessment',
  description: 'Test your knowledge across all 7 modules. Score 70% or above to earn your certificate.',
  estimatedTime: '30 min',
  questionCount: CONFIG.QUESTIONS_PER_EXAM,
  passmark: CONFIG.PASS_MARK,
};
