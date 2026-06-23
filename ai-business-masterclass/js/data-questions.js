// ══════════════════════════════════════════════════════════════
// QUESTION BANK — 105 Questions across all 7 modules
// Types: "mc" (multiple choice), "tf" (true/false), "scenario"
// ══════════════════════════════════════════════════════════════

const QUESTIONS = [

// ── MODULE 1: Introduction to AI ─────────────────────────────
{ id:1, module:1, type:'mc', question:'What does "AI" stand for?',
  options:['Automated Intelligence','Artificial Intelligence','Advanced Integration','Automated Information'],
  correct:1, explanation:'AI stands for Artificial Intelligence — the simulation of human cognitive processes by computer systems, including learning, reasoning, and self-correction.' },

{ id:2, module:1, type:'mc', question:'Which technology powers ChatGPT, Claude, and Gemini?',
  options:['Machine Vision','Large Language Models (LLMs)','Robotic Process Automation','Blockchain AI'],
  correct:1, explanation:'ChatGPT, Claude, and Gemini are all powered by Large Language Models (LLMs) — AI systems trained on enormous amounts of text data that can understand and generate human language.' },

{ id:3, module:1, type:'tf', question:'AI systems like ChatGPT are conscious and self-aware.',
  options:['True','False'], correct:1,
  explanation:'False. AI systems have no consciousness or self-awareness. They generate outputs by identifying patterns in training data — there is no genuine understanding, feelings, or awareness involved.' },

{ id:4, module:1, type:'mc', question:'Which of the following is an example of AI you most likely use every day?',
  options:['Your car\'s speedometer','Email spam filter','A printed invoice','A CCTV camera'],
  correct:1, explanation:'Email spam filters use machine learning (a type of AI) to learn what spam looks like and automatically filter it from your inbox. This has been running for years without most people realising it.' },

{ id:5, module:1, type:'mc', question:'What is the most accurate way to think about AI as a business tool?',
  options:['A replacement for all human employees','A magic system that works perfectly without human input','A highly capable tool that needs supervision and clear direction','An experimental technology not yet ready for business use'],
  correct:2, explanation:'AI is best thought of as a powerful tool that needs clear direction and human oversight. It can make mistakes (hallucinations), lacks your business context unless you provide it, and produces dramatically better results with good prompts and human review.' },

{ id:6, module:1, type:'mc', question:'What does "machine learning" mean?',
  options:['Teaching robots to walk','AI systems that improve automatically by learning from data','Machines that can physically learn new skills','Programming every rule manually into a computer'],
  correct:1, explanation:'Machine learning refers to AI systems that improve their performance automatically by processing and learning from data, rather than being explicitly programmed with every rule.' },

{ id:7, module:1, type:'tf', question:'Most powerful AI tools for business are free or under £30 per month.',
  options:['True','False'], correct:0,
  explanation:'True. ChatGPT, Claude, Gemini, Canva AI, and Perplexity all have free tiers. Even premium plans typically cost £15–25/month. The cost barrier to AI adoption is now very low.' },

{ id:8, module:1, type:'scenario', question:'A competitor of yours has started using AI for their marketing and is now producing 5x more content. You have not started using AI yet. What is the most strategic response?',
  options:['Wait and see if AI is really effective before investing','Immediately start with one AI tool focused on marketing content','Buy every AI tool available to catch up quickly','Hire more staff to match their output'],
  correct:1, explanation:'The right response is to start immediately but focused — one tool, applied to your highest-priority need (in this case, matching their content output). Waiting compounds the competitive disadvantage; buying everything without focus leads to wasted resources.' },

{ id:9, module:1, type:'mc', question:'Which company created ChatGPT?',
  options:['Google','Microsoft','OpenAI','Anthropic'],
  correct:2, explanation:'ChatGPT was created by OpenAI, a company co-founded by Sam Altman and others. Google created Gemini, Anthropic created Claude, and Microsoft is a major investor in OpenAI and has integrated ChatGPT into its products.' },

{ id:10, module:1, type:'mc', question:'What is a "hallucination" in the context of AI?',
  options:['AI creating visual imagery','AI confidently generating false or made-up information','AI becoming confused during long conversations','AI experiencing errors due to overheating'],
  correct:1, explanation:'AI hallucination refers to the phenomenon where an AI model generates false or fabricated information with confidence. This is why AI outputs always need human review before being used, especially for facts, statistics, or professional advice.' },

{ id:11, module:1, type:'mc', question:'A small family-run restaurant wants to start using AI. Where should they start first?',
  options:['Building a custom AI model','Using ChatGPT to create social media content and menu descriptions','Implementing robot servers','Developing a proprietary AI system'],
  correct:1, explanation:'Starting with a free, accessible tool (ChatGPT) applied to an immediate business need (content and marketing) is the right first step. Complex custom solutions come much later, after mastering the basics.' },

{ id:12, module:1, type:'tf', question:'AI will eliminate the need for human creativity and strategic thinking in business.',
  options:['True','False'], correct:1,
  explanation:'False. AI excels at pattern recognition, generation, and repetitive tasks — but genuine human creativity, strategic judgment, relationship building, and ethical reasoning remain distinctly human capabilities that AI cannot replace.' },

{ id:13, module:1, type:'scenario', question:'You need accurate, up-to-date statistics about your industry for a business proposal. Which AI approach is most appropriate?',
  options:['Ask ChatGPT for the statistics and use them directly','Use Perplexity AI which searches the web and cites sources','Ask Claude to estimate the figures based on its training data','Avoid using AI for facts and statistics entirely'],
  correct:1, explanation:'Perplexity searches the web in real-time and provides cited sources — making it ideal for current statistics and facts. ChatGPT and Claude have knowledge cutoff dates and can hallucinate specific statistics. Always verify AI-provided facts, but Perplexity gives you the sources to do so.' },

// ── MODULE 2: ChatGPT ─────────────────────────────────────────
{ id:14, module:2, type:'mc', question:'In the CRAFT prompt framework, what does the "C" stand for?',
  options:['Clarity','Context','Command','Create'],
  correct:1, explanation:'In the CRAFT framework, C stands for Context — the background information about your business, audience, and situation that helps the AI understand your specific needs and produce relevant, tailored responses.' },

{ id:15, module:2, type:'mc', question:'Which of the following is a stronger prompt?',
  options:['Write a marketing email','Write a 180-word promotional email for my Manchester dog grooming salon targeting local dog owners aged 30-55, promoting our new Premium Pamper Package at £65, with a warm friendly tone and a CTA to book online','Write an email about dog grooming','Create something for my pet business'],
  correct:1, explanation:'The second option applies the CRAFT framework — it gives Context (Manchester salon, target audience), Action (promotional email), Format (180 words), and Tone (warm, friendly). Specificity is the single biggest factor in AI output quality.' },

{ id:16, module:2, type:'tf', question:'ChatGPT remembers information from previous conversations you have had on different days.',
  options:['True','False'], correct:1,
  explanation:'False. By default, ChatGPT does not retain memory between separate conversations. Each new conversation starts fresh. You must re-establish context at the beginning of each session, or use the Memory feature in ChatGPT Plus (where available).' },

{ id:17, module:2, type:'mc', question:'What is "few-shot prompting"?',
  options:['Using AI only for short tasks','Providing examples of what you want within your prompt','Limiting the number of words in your prompt','Using multiple AI tools simultaneously'],
  correct:1, explanation:'Few-shot prompting means including 2-5 examples of the output you want within your prompt. This dramatically improves output quality because the AI learns your style, format, and standard from the examples rather than guessing.' },

{ id:18, module:2, type:'scenario', question:'You have written a ChatGPT prompt and received a good but not perfect response. What is the best next step?',
  options:['Start a new conversation and try again','Close ChatGPT and do the task manually','Reply with specific feedback asking it to revise particular elements','Accept the response and move on regardless'],
  correct:0, explanation:'The power of ChatGPT is the conversational, iterative nature. Reply with specific refinement instructions: "Make it shorter", "More formal tone", "Focus on the cost saving benefit rather than the feature". Iteration within a conversation consistently produces better results than starting over.' },

{ id:19, module:2, type:'mc', question:'What is a "Prompt Library" and why is it valuable?',
  options:['A list of books about AI prompting','A collection of your best-performing prompts organised by category, shared across your team','A Chatbot that stores all your conversations','A paid subscription service for premium prompts'],
  correct:1, explanation:'A Prompt Library is a document (Google Doc, Notion page, or similar) containing your most effective prompts organised by business function. When shared with your team, every member can immediately access and use proven prompts — multiplying the value of each discovery.' },

{ id:20, module:2, type:'mc', question:'Which ChatGPT feature allows you to create a specialised AI assistant pre-loaded with your business knowledge?',
  options:['ChatGPT Teams','Custom GPTs','ChatGPT Enterprise','Prompt Memory'],
  correct:1, explanation:'Custom GPTs (available in ChatGPT Plus) allow you to create personalised AI assistants configured with your business context, communication style, and specialised knowledge. You can create separate Custom GPTs for different functions — sales, marketing, customer service, HR.' },

{ id:21, module:2, type:'tf', question:'AI-generated content should always be published immediately without review to maximise speed.',
  options:['True','False'], correct:1,
  explanation:'False. AI-generated content always requires human review before publishing. AI can hallucinate facts, misrepresent your brand voice, make grammatical errors in context, or miss nuances. The review step is non-negotiable for professional, accurate output.' },

{ id:22, module:2, type:'scenario', question:'A prospect has just raised the objection "Your price is too high." You have 5 minutes before your next call. How should you use AI?',
  options:['Ask ChatGPT to write 5 different objection-handling responses focusing on different angles (ROI, comparison, risk reduction, social proof, payment options) then choose the best one','Ask ChatGPT to lower your price','Use ChatGPT to research the prospect instead','Do not use AI for objection handling — it requires a human touch'],
  correct:0, explanation:'This is exactly the scenario where AI delivers immediate value. Five tailored objection-handling responses in 60 seconds gives you multiple proven approaches to choose from. You still make the human judgment call about which fits the situation best.' },

{ id:23, module:2, type:'mc', question:'What is the "chain of thought" prompting technique?',
  options:['Connecting multiple ChatGPT accounts together','Asking the AI to think through a problem step-by-step before giving the final answer','Writing very long prompts with many linked sentences','Using AI in a chain with other AI tools'],
  correct:1, explanation:'Chain of thought prompting asks the AI to work through reasoning step-by-step before delivering a conclusion. Adding "think through this step by step" to complex analysis requests significantly improves the quality and accuracy of the response.' },

{ id:24, module:2, type:'mc', question:'When creating a 30-day social media content calendar with AI, what is the recommended content mix?',
  options:['100% promotional posts to maximise sales','Only educational content to build authority','A balanced mix: approximately 35-40% educational, 25-30% promotional, 25% engagement, 15% behind-the-scenes','Only behind-the-scenes content for authenticity'],
  correct:2, explanation:'A balanced content mix prevents audience fatigue from excessive promotion while maintaining commercial objectives. The 35/25/25/15 rule is a widely used framework. Too much promotional content leads to followers disengaging or unfollowing.' },

{ id:25, module:2, type:'tf', question:'You can ask ChatGPT to help you write a better prompt for your task.',
  options:['True','False'], correct:0,
  explanation:'True. Meta-prompting — asking ChatGPT to help you write or improve your prompt — is a powerful technique. Simply describe what you are trying to achieve and ask "Help me write the best possible prompt to get this result." The AI understands its own capabilities and can write highly effective prompts.' },

{ id:26, module:2, type:'scenario', question:'You want to use AI to help write customer service responses, but you are worried they will sound generic. What is the best approach?',
  options:['Avoid AI for customer service entirely','Give ChatGPT your brand voice guidelines and 3-5 examples of ideal responses, then ask it to match that style','Just use the AI output directly — customers will not notice','Only use AI for internal communications, not customer-facing content'],
  correct:1, explanation:'Providing brand voice guidelines and example responses is the most effective way to get consistent, on-brand AI output. This is called "few-shot prompting" combined with a brand brief. The AI will replicate your voice remarkably well when given clear examples to follow.' },

{ id:27, module:2, type:'mc', question:'What is the main advantage of ChatGPT Plus over the free tier?',
  options:['It is completely private and not stored by OpenAI','Access to GPT-4o with higher usage limits, image generation, Custom GPTs, and newer features','It can connect to the internet to search current news','It guarantees zero hallucinations in responses'],
  correct:1, explanation:'ChatGPT Plus (£20/month) provides higher usage limits on GPT-4o, access to DALL-E image generation, the ability to create Custom GPTs, and early access to new features. None of the other options accurately describe what Plus provides.' },

{ id:28, module:2, type:'mc', question:'Which part of an email does AI typically have the most impact in improving?',
  options:['The sender name','The subject line and opening hook','The unsubscribe link','The email signature'],
  correct:1, explanation:'Subject lines and opening hooks have the highest leverage in email marketing — they determine whether the email gets opened and whether the reader continues. A 10% improvement in open rate through better subject lines has more impact than improving the body copy of an email nobody opens.' },

// ── MODULE 3: AI Marketing ────────────────────────────────────
{ id:29, module:3, type:'mc', question:'What is the approximate ROI (return on investment) of email marketing per pound spent?',
  options:['£2 return for every £1 spent','£10 return for every £1 spent','£36 return for every £1 spent','£5 return for every £1 spent'],
  correct:2, explanation:'Email marketing consistently delivers approximately £36 return for every £1 spent — the highest ROI of any digital marketing channel. This is why building and nurturing an email list is one of the most valuable marketing assets any business can have.' },

{ id:30, module:3, type:'mc', question:'Which content format generates the highest engagement on Instagram?',
  options:['Single image posts','Text-only posts','Carousel posts (multiple slides)','Story polls only'],
  correct:2, explanation:'Instagram carousel posts (multiple swipeable images/slides) consistently generate 3x higher engagement than single-image posts. AI can script all slides for a carousel in minutes, making this high-performing format much more accessible.' },

{ id:31, module:3, type:'tf', question:'Using AI for social media means you can publish content without any human review.',
  options:['True','False'], correct:1,
  explanation:'False. AI content always needs review for brand consistency, factual accuracy, tone, and context-appropriateness before publishing. The speed advantage of AI is in drafting — but the human review step remains essential.' },

{ id:32, module:3, type:'scenario', question:'A coffee shop owner wants to build their Instagram presence but has no time for daily content creation. What is the best AI-powered approach?',
  options:['Post only once a week when they have time','Use AI to create an entire month of content in one 2-hour session, then schedule it all in advance using a tool like Buffer or Later','Pay someone to create content manually every day','Only post user-generated content and never create original posts'],
  correct:1, explanation:'Batch content creation using AI, followed by scheduling, is the optimal approach. One 2-hour monthly session with ChatGPT can produce 30+ posts, captions, and hashtag sets. Scheduling tools then automate publishing — eliminating the daily content creation burden entirely.' },

{ id:33, module:3, type:'mc', question:'What should a great Facebook or Instagram ad always include?',
  options:['The company logo in large format','A hook (opening line), benefit-focused body copy, and a clear call to action','The company address and phone number','A list of all product features in detail'],
  correct:1, explanation:'High-performing social media ads follow a proven structure: a hook to capture attention (often addressing the audience or raising a question), body copy focused on benefits not features, and a single clear call to action. AI can generate multiple variations of this structure quickly for A/B testing.' },

{ id:34, module:3, type:'mc', question:'Which AI video tool is specifically designed to create talking-head videos with AI avatars — without needing to be on camera?',
  options:['Midjourney','ElevenLabs','HeyGen','Perplexity'],
  correct:2, explanation:'HeyGen specialises in AI avatar video creation. You choose an avatar, paste your script, and generate a professional-quality talking-head video without any filming. ElevenLabs focuses on voice synthesis, Midjourney on images, and Perplexity on research.' },

{ id:35, module:3, type:'mc', question:'What is the primary advantage of creating a "Brand Brief" document in ChatGPT?',
  options:['It prevents ChatGPT from hallucinating','It allows ChatGPT to remember your preferences between sessions','It provides consistent brand context so AI-generated content matches your voice and style in every session','It connects ChatGPT to your social media accounts automatically'],
  correct:2, explanation:'A Brand Brief (pasted at the start of each ChatGPT session) ensures all AI-generated content consistently matches your brand voice, audience, values, and style. This solves the biggest challenge of AI content — generic outputs that do not sound like your brand.' },

{ id:36, module:3, type:'tf', question:'TikTok is only relevant for businesses targeting customers under 25.',
  options:['True','False'], correct:1,
  explanation:'False. TikTok\'s user base has expanded significantly across all age groups, with strong representation of 25-44 year olds. Many small businesses — including tradespersons, retailers, restaurants, and service businesses — report significant customer acquisition from TikTok regardless of their target demographic.' },

{ id:37, module:3, type:'scenario', question:'You run a local estate agency and want to create TikTok content. You are uncomfortable being on camera. What is the best AI-powered solution?',
  options:['Avoid TikTok entirely if you will not appear on camera','Use HeyGen to create AI avatar videos with scripts written by ChatGPT','Only post text-based TikToks','Hire a professional actor to present your content'],
  correct:1, explanation:'AI avatar tools like HeyGen (combined with ChatGPT for scripting) allow professional video content without any filming. The avatar can present property tips, market updates, or local area guides — exactly the educational content that performs well on TikTok for service businesses.' },

{ id:38, module:3, type:'mc', question:'How many email variations should you typically generate with AI before choosing which to send?',
  options:['Just one — the first output is usually best','2 variations','5-10 variations so you can choose the strongest and A/B test options','As many as possible — quantity beats quality'],
  correct:2, explanation:'Generating 5-10 variations (subject lines, email structures, CTAs) gives you options to choose from and material to A/B test. The AI\'s first attempt is rarely its best. Multiple variations also expose you to approaches you might not have considered.' },

{ id:39, module:3, type:'mc', question:'What makes a great TikTok or Instagram Reel hook?',
  options:['Starting with a long introduction about your business','Beginning with a bold statement, surprising fact, or provocative question that stops the scroll','Opening with your company logo and name','Starting with a slow pan of your location or products'],
  correct:1, explanation:'The first 1-2 seconds determine whether a viewer continues watching or scrolls past. The most effective hooks are bold, unexpected, or address the viewer directly. AI can generate 10 different hook options quickly — let data from testing identify your winner.' },

{ id:40, module:3, type:'tf', question:'Personalisation in email subject lines (using the recipient\'s name) can increase open rates by up to 26%.',
  options:['True','False'], correct:0,
  explanation:'True. Research consistently shows that personalised subject lines using the recipient\'s name generate approximately 26% higher open rates than non-personalised subject lines. Most email marketing platforms (Mailchimp, MailerLite) support merge tags for personalisation tokens.' },

{ id:41, module:3, type:'mc', question:'What is the recommended posting frequency for most small businesses on Instagram?',
  options:['Once per month','10 times per day','3-5 times per week','Once per year for special occasions only'],
  correct:2, explanation:'3-5 times per week is the sweet spot for most small businesses — frequent enough to maintain algorithm visibility and audience engagement, but sustainable with AI assistance for content creation. Daily posting is possible with AI but quality should never be sacrificed for quantity.' },

// ── MODULE 4: Lead Generation ─────────────────────────────────
{ id:42, module:4, type:'mc', question:'How many follow-up contacts does research suggest are typically needed before a prospect responds to sales outreach?',
  options:['1-2 follow-ups','3-4 follow-ups','5 or more follow-ups','Follow-ups are counterproductive — one contact only'],
  correct:2, explanation:'Studies consistently show that 80% of sales require 5 or more follow-up contacts, yet 44% of salespeople give up after the first follow-up. This gap represents one of the biggest opportunities in sales — and AI makes maintaining a multi-touch follow-up sequence effortless.' },

{ id:43, module:4, type:'mc', question:'What is an Ideal Customer Profile (ICP)?',
  options:['A profile page on your website','A detailed description of your best-fit customer — their characteristics, needs, behaviours, and decision-making factors','A list of your current customers','A social media profile for your business'],
  correct:1, explanation:'An ICP is a detailed description of the type of customer who gets the most value from your product or service and is most likely to buy. It includes firmographics (company size, industry), pain points, buying triggers, and decision-making patterns. AI can help you build and refine your ICP from your existing customer data.' },

{ id:44, module:4, type:'tf', question:'Personalised outreach consistently outperforms generic mass outreach in B2B sales.',
  options:['True','False'], correct:0,
  explanation:'True. Research shows personalised B2B outreach generates 5-10x higher response rates than generic messaging. The challenge has always been the time required to personalise at scale. AI solves this by helping you create highly personalised messages quickly — referencing specific company details, recent news, or individual prospect characteristics.' },

{ id:45, module:4, type:'scenario', question:'A consultant wants to reach out to 50 potential clients on LinkedIn. Without AI, personalising each message would take 45 minutes. With AI assistance, what is the most efficient approach?',
  options:['Send identical generic messages to all 50 to save time','Personalise only the top 5 prospects and send generic messages to the rest','Create a personalised message template with AI, then use it as a base — pasting each prospect\'s LinkedIn profile into ChatGPT to generate a personalised version in 60-90 seconds each','Hire a VA to personalise all 50 messages manually'],
  correct:2, explanation:'The AI-powered approach allows personalisation at scale: create a master template, then paste each prospect\'s profile into ChatGPT and receive a personalised version in under 2 minutes. 50 messages now take 90 minutes instead of 37.5 hours. Quality and personalisation are maintained.' },

{ id:46, module:4, type:'mc', question:'Which tool is best for researching a specific company before a sales meeting?',
  options:['Midjourney','ElevenLabs','Perplexity AI','Canva'],
  correct:2, explanation:'Perplexity AI is ideal for company research — it searches the web in real-time, cites sources, and provides current information about the company\'s activities, news, products, and potential pain points. This research takes 2 minutes with Perplexity versus 20 minutes of manual Google searching.' },

{ id:47, module:4, type:'mc', question:'What is a "lead magnet" in digital marketing?',
  options:['Software that automatically attracts customers','A free, high-value resource offered in exchange for a prospect\'s email address','A type of paid advertising format','A special pricing offer for new customers'],
  correct:1, explanation:'A lead magnet is a valuable free resource (guide, checklist, template, tool, or training) offered to prospects in exchange for their email address. It is the cornerstone of most digital lead generation funnels. AI can generate lead magnet ideas, write the content, and create the landing page copy.' },

{ id:48, module:4, type:'tf', question:'GDPR regulations in the UK mean you cannot use AI for any form of sales outreach.',
  options:['True','False'], correct:1,
  explanation:'False. GDPR does not prohibit AI-assisted sales outreach. It requires you to have a lawful basis for contact, to be transparent about how you use data, to honour opt-out requests, and to handle data securely. AI-powered outreach can be fully GDPR-compliant when done responsibly.' },

{ id:49, module:4, type:'mc', question:'Which CRM feature is most commonly automated using AI and Zapier/Make?',
  options:['Changing the CRM\'s colour scheme','Automatically logging calls, emails, and interactions to the correct contact record','Sending physical mail to prospects','Creating paper-based reports'],
  correct:1, explanation:'Automatic logging of customer interactions (emails, call notes, form submissions) to the correct CRM record is the highest-value CRM automation for most businesses. Combined with AI-generated call summaries, this virtually eliminates manual CRM data entry — which is the main reason CRMs fail.' },

{ id:50, module:4, type:'scenario', question:'A prospect requested a quote 7 days ago and has not responded to your initial follow-up email. What is the AI-powered best practice?',
  options:['Give up and move on — they are clearly not interested','Call them immediately without any preparation','Use AI to write a follow-up that adds new value (a case study, a relevant insight) rather than just chasing — and continue the sequence for at least 5 more touches','Send the same email again three more times'],
  correct:2, explanation:'Research shows that the majority of deals are closed after the 5th+ follow-up. Each touchpoint should add value rather than just chase — a case study, a relevant article, a different angle. AI makes it trivial to create varied, value-adding follow-ups. Persistence combined with value wins.' },

{ id:51, module:4, type:'mc', question:'What does a complete automated sales funnel typically include?',
  options:['Only a website homepage','Ads, landing page, email sequence, sales page, and post-purchase automation','Just a social media profile','Only a contact form on your website'],
  correct:1, explanation:'A complete automated sales funnel has five stages: traffic generation (ads/content), lead capture (landing page), nurturing (email sequence), conversion (sales page/call), and retention (post-purchase emails). AI can write every piece of content at every stage, making professional funnel creation accessible to any business.' },

{ id:52, module:4, type:'mc', question:'A video follow-up message (using a tool like Loom) compared to a standard email can increase reply rates by approximately how much?',
  options:['5-10% increase','50-100% increase','Up to 300% increase','They perform identically'],
  correct:2, explanation:'Research from video messaging platforms shows that personalised video messages increase reply rates by up to 300% compared to standard text emails. The combination of visual personalisation and the extra effort the video represents makes them extremely effective — and ChatGPT can script your personalised video opening in seconds.' },

// ── MODULE 5: Business Automation ────────────────────────────
{ id:53, module:5, type:'mc', question:'How many hours per day does the average professional spend managing email?',
  options:['30 minutes','1 hour','2.5 hours','5 hours'],
  correct:2, explanation:'Research from McKinsey and Adobe consistently shows professionals spend an average of 2.5 hours per day on email. This makes email one of the highest-value areas for AI automation — reclaiming even 1.5 hours per day has enormous productivity implications.' },

{ id:54, module:5, type:'mc', question:'Which tool is best described as a "no-code automation platform that connects thousands of apps"?',
  options:['ChatGPT','Zapier or Make','Midjourney','Perplexity'],
  correct:1, explanation:'Zapier and Make (formerly Integromat) are automation platforms that connect 5,000+ applications and allow the creation of automated multi-step workflows (called Zaps or Scenarios) without any coding. They are the backbone of business process automation for most SMEs.' },

{ id:55, module:5, type:'tf', question:'AI chatbots can typically handle 60-80% of routine customer enquiries without human involvement.',
  options:['True','False'], correct:0,
  explanation:'True. Well-configured AI chatbots consistently resolve 60-80% of routine customer enquiries automatically — questions about opening hours, pricing, returns policies, booking processes, and FAQs. This dramatically reduces support staff workload while improving response times from hours to seconds.' },

{ id:56, module:5, type:'scenario', question:'A retail business receives 50 routine customer enquiries per week, each taking 5 minutes to handle. Which is the most cost-effective solution?',
  options:['Hire an additional customer service employee','Implement an AI chatbot (£15-25/month) that handles 70% of enquiries automatically, freeing staff for complex issues','Ignore the enquiries and focus on other tasks','Send a weekly FAQ newsletter to avoid answering questions'],
  correct:1, explanation:'AI chatbot at £15-25/month handles 35 of the 50 enquiries automatically (2.5 hours of staff time saved per week). The remaining 15 complex enquiries are handled by humans, who can now focus on high-quality service. The ROI vs a new employee hire is enormous.' },

{ id:57, module:5, type:'mc', question:'What is a Standard Operating Procedure (SOP) and how does AI help create them?',
  options:['A financial report — AI analyses accounting data to create them','A step-by-step documented process for completing a task — AI can draft comprehensive SOPs from a brief description, saving hours of documentation time','A type of employment contract — AI generates legal templates','A marketing plan — AI creates strategy documents'],
  correct:1, explanation:'SOPs are step-by-step process documents that ensure consistency and allow delegation. They are tedious to write manually. ChatGPT can produce a complete, detailed SOP for any business process from a brief description — typically in under 2 minutes.' },

{ id:58, module:5, type:'mc', question:'Which of the following is a good first automation project for a small business using Zapier?',
  options:['Building a custom AI model from scratch','When a new enquiry form is submitted → automatically send an acknowledgement email and create a CRM contact','Automating your entire accounting system on day one','Replacing your entire customer service team with bots'],
  correct:1, explanation:'Starting with a simple, high-value automation (form submission → email + CRM) is the right approach. This single automation saves 5-10 minutes per enquiry, demonstrates immediate ROI, and builds confidence to tackle more complex workflows. Start simple, learn fast, expand systematically.' },

{ id:59, module:5, type:'tf', question:'You should enter sensitive customer personal data into public AI tools like ChatGPT for analysis.',
  options:['True','False'], correct:1,
  explanation:'False. Personal customer data (names, emails, addresses, purchase history) should never be entered into public AI tools. This violates GDPR and data protection principles. For sensitive data analysis, use AI tools with enterprise data agreements, or anonymise data before analysis.' },

{ id:60, module:5, type:'mc', question:'What is a "Custom GPT" in ChatGPT and what makes it valuable for business teams?',
  options:['A faster version of ChatGPT available to premium users','A personalised AI assistant pre-configured with your business knowledge, communication standards, and processes — available to your whole team','A private AI model that only your business can access','An AI that can make phone calls on your behalf'],
  correct:1, explanation:'Custom GPTs are pre-configured AI assistants built within ChatGPT Plus that contain your business context, style guidelines, and knowledge. Share one with your team and every member immediately has access to an AI that knows your products, tone, and processes — without needing to write long context prompts each time.' },

{ id:61, module:5, type:'mc', question:'Which automation would save the most time for a service business that sends weekly performance reports to clients?',
  options:['Manually creating reports but using better templates','Connecting your data sources (CRM, Google Analytics, ad platforms) to Make or Zapier, which auto-exports data to ChatGPT to generate and email formatted reports automatically','Hiring a dedicated report writer','Sending clients raw data instead of formatted reports'],
  correct:1, explanation:'Fully automated reporting (data → AI analysis → formatted report → email delivery) eliminates manual compilation entirely. What previously took 3-4 hours per client per week becomes a zero-touch process that runs on a schedule — a significant operational improvement for any agency or consultancy.' },

{ id:62, module:5, type:'scenario', question:'Your staff spend 3 hours per week copy-pasting information between your website booking form, CRM, and accounting software. What is the best solution?',
  options:['Train staff to do it faster','Accept this as a necessary admin cost','Build a Zapier automation that automatically transfers data between all three systems when a new booking comes in','Replace all three systems with one integrated platform costing £500/month'],
  correct:2, explanation:'A Zapier multi-step automation is the ideal solution. New booking → update CRM → create invoice in accounting software. This automation runs in seconds per booking, eliminates human error, saves 3 hours per week, and costs a fraction of replacing the systems. This is exactly what automation platforms are designed for.' },

// ── MODULE 6: AI Tools ────────────────────────────────────────
{ id:63, module:6, type:'mc', question:'Which AI tool is best known for analysing long documents (up to 200,000 words) with high accuracy?',
  options:['Midjourney','ElevenLabs','Claude by Anthropic','Canva AI'],
  correct:2, explanation:'Claude by Anthropic has one of the largest context windows in the industry (200,000 tokens), allowing it to read and analyse entire books, lengthy contracts, detailed reports, and comprehensive research documents in a single session — asking targeted questions about content that most AI tools cannot even read in full.' },

{ id:64, module:6, type:'mc', question:'Which tool would you use to generate a photorealistic image of a product for your marketing materials?',
  options:['Perplexity','ChatGPT text mode','Midjourney','ElevenLabs'],
  correct:2, explanation:'Midjourney is the industry leader for high-quality AI image generation. It produces photorealistic and artistic images from text prompts, making it ideal for creating marketing visuals, product mockups, lifestyle imagery, and branded content without expensive photography.' },

{ id:65, module:6, type:'tf', question:'Canva AI can generate custom images from text descriptions within the Canva design platform.',
  options:['True','False'], correct:0,
  explanation:'True. Canva\'s "Text to Image" feature generates custom images from text descriptions directly within the design platform. Combined with Magic Design, Magic Write, Background Remover, and Brand Kit, Canva AI provides a comprehensive design solution for non-designers.' },

{ id:66, module:6, type:'mc', question:'What is ElevenLabs primarily used for?',
  options:['Business accounting automation','AI image generation','Ultra-realistic AI voice synthesis and voice cloning','Social media scheduling'],
  correct:2, explanation:'ElevenLabs specialises in AI voice synthesis — creating hyper-realistic voices from text and cloning existing voices from just 3 minutes of audio. It is used by businesses to create professional voiceovers, video narration, branded audio, and multilingual content.' },

{ id:67, module:6, type:'scenario', question:'You are a UK service business wanting to produce professional training videos for your staff. You have a tight budget, no video equipment, and limited time. What is the most practical solution?',
  options:['Hire a professional video production company','Record videos on your phone in your office','Use ChatGPT to write scripts, HeyGen to create AI avatar videos, and ElevenLabs for voiceovers — producing professional training videos for under £50/month total','Do not create training videos — stick to written documents'],
  correct:2, explanation:'The AI stack (ChatGPT for scripts, HeyGen for avatar video, ElevenLabs for voice) produces professional-quality training videos without filming, equipment, or a large budget. This combination replaces services that would have cost thousands per video just a few years ago.' },

{ id:68, module:6, type:'mc', question:'What is Perplexity AI\'s key advantage over standard ChatGPT for research tasks?',
  options:['It produces longer responses','It has a better user interface','It searches the web in real-time and provides cited sources for all information','It is available on more devices'],
  correct:2, explanation:'Perplexity\'s defining advantage is real-time web search with cited sources. Unlike ChatGPT which draws from training data with a cutoff date, Perplexity finds current information and tells you exactly where it came from — essential for research that requires accuracy and currency.' },

{ id:69, module:6, type:'mc', question:'Which Google Workspace tool has Gemini AI most deeply integrated to improve email productivity?',
  options:['Google Maps','Google Photos','Gmail','Google Forms'],
  correct:2, explanation:'Gemini is most impactful in Gmail, where it can draft emails from bullet points, summarise long email threads, suggest responses, and help compose professional messages — without leaving your inbox. This is where Gemini delivers the highest productivity gains for most business users.' },

{ id:70, module:6, type:'tf', question:'Notion AI can answer questions about content stored across your entire Notion workspace.',
  options:['True','False'], correct:0,
  explanation:'True. Notion AI\'s Q&A feature searches your entire workspace to answer questions from your own documents and databases. This effectively turns your Notion workspace into a self-service knowledge base — staff can ask "What is our returns policy?" and get an instant answer from your own documented content.' },

{ id:71, module:6, type:'mc', question:'What is the "Magic Design" feature in Canva AI?',
  options:['A feature that writes magic-themed marketing copy','A tool that automatically creates a complete suite of branded design templates from a single uploaded image','A plugin that connects Canva to social media for automatic posting','A feature that generates animated videos from your designs'],
  correct:1, explanation:'Canva\'s Magic Design analyses an uploaded image and generates a complete set of professional, on-brand design templates across multiple formats (social posts, presentations, marketing materials). It dramatically accelerates brand asset creation from days to minutes.' },

{ id:72, module:6, type:'scenario', question:'A law firm wants to review a 150-page contract for unusual clauses before signing. Which AI tool is most appropriate and why?',
  options:['Midjourney — to visualise the contract structure','Canva AI — to redesign the contract layout','Claude by Anthropic — because its 200k token context window can process the entire document and its nuanced language understanding excels at contract analysis','ChatGPT free tier — always use free tools first'],
  correct:2, explanation:'Claude\'s massive context window (200k tokens ≈ 150,000 words) means the entire contract can be pasted and analysed in one session. Claude also excels at nuanced legal language analysis. While not a substitute for a qualified lawyer, it can identify issues to discuss with counsel — saving significant legal fees in preliminary review.' },

{ id:73, module:6, type:'mc', question:'Approximately how much audio recording does ElevenLabs require to clone a person\'s voice?',
  options:['30 seconds of audio','3 minutes of audio','1 hour of audio','A full day of studio recording'],
  correct:1, explanation:'ElevenLabs Voice Cloning requires as little as 3 minutes of clear audio to create a highly convincing voice clone. This makes it practical for businesses to create a branded voice using their own voice or a team member\'s — without expensive recording sessions.' },

{ id:74, module:6, type:'mc', question:'Which of these tools would you use to automatically remove the background from a product photo?',
  options:['Perplexity AI','Canva AI (Magic Eraser/Background Remover)','ElevenLabs','Notion AI'],
  correct:1, explanation:'Canva AI includes a Background Remover that works with one click on any photo. This is one of its most practically useful features for businesses — it enables professional product photography-style images without a photography studio or expensive editing software.' },

{ id:75, module:6, type:'tf', question:'Descript allows you to edit video content by editing the text transcript rather than the video timeline.',
  options:['True','False'], correct:0,
  explanation:'True. Descript transcribes your video automatically and lets you edit the video by editing the text. Delete a word from the transcript and it disappears from the video. It also removes filler words (um, uh, pauses) with a single click — making video editing accessible to anyone regardless of technical skill.' },

// ── MODULE 7: AI Strategy ─────────────────────────────────────
{ id:76, module:7, type:'mc', question:'What is the recommended approach when first adopting AI in a business?',
  options:['Implement all possible AI tools simultaneously for maximum impact','Start with the highest-cost, most complex tool to get the best ROI','Choose one tool, master it over 30 days, then expand','Ask your IT department to build a custom AI solution first'],
  correct:2, explanation:'The 30-day focus rule consistently outperforms other approaches. One tool, mastered, delivers more value than five tools used superficially. It also builds the habits, confidence, and literacy needed to evaluate and adopt additional tools effectively.' },

{ id:77, module:7, type:'mc', question:'What is a simple ROI formula for calculating the value of AI tools?',
  options:['(Number of prompts written) × (monthly cost)','(Hours saved per month × hourly rate) + revenue increase − monthly tool cost','(Cost of tool) ÷ (number of employees)','(Features available) × (team size)'],
  correct:1, explanation:'This formula captures the two sides of AI value: time saved (quantified at your effective hourly rate) plus any direct revenue increase, minus the tool cost. Most businesses find their AI ROI is 500-2000% per month when they measure honestly. This formula is also useful for presenting the business case to partners or stakeholders.' },

{ id:78, module:7, type:'tf', question:'Businesses can build a powerful AI toolkit for under £100 per month.',
  options:['True','False'], correct:0,
  explanation:'True. ChatGPT Plus (£20) + Canva Pro (£10) + Zapier Starter (£17) + a chatbot like Tidio (£15) + ElevenLabs (£4) totals under £70/month. This stack replaces the equivalent output of several human roles and typically delivers 10-20x ROI for most small businesses.' },

{ id:79, module:7, type:'scenario', question:'You want to introduce AI to your team of 8, but 3 of them are resistant because they fear it will eliminate their jobs. What is the most effective approach?',
  options:['Mandate AI use immediately and discipline those who resist','Avoid mentioning AI to resistant staff and only train the enthusiastic ones','Address job security directly and honestly, demonstrate how AI makes their specific jobs easier (not redundant), start with one enthusiastic person as a visible success story, then bring others in gradually','Replace resistant staff with AI immediately to make the point'],
  correct:2, explanation:'Successful AI adoption in teams requires addressing fears directly. Research shows that employees who understand AI augments rather than replaces them, and who see it making their own work easier, become advocates quickly. One success story ("look how much time Sarah saved this week") is worth more than any presentation.' },

{ id:80, module:7, type:'mc', question:'What is the most important data privacy rule when using public AI tools like ChatGPT in a business context?',
  options:['Always use AI in private browsing mode','Never enter personal customer data, confidential financial information, or trade secrets into public AI tools','Only use AI for external communications, never internal','Change your AI tool every month for security'],
  correct:1, explanation:'Personal customer data is protected under GDPR. Entering it into public AI tools (where it may be used for training or accessed by the provider) creates compliance risk and is potentially illegal. For sensitive tasks, use enterprise AI plans with data processing agreements, or anonymise data before analysis.' },

{ id:81, module:7, type:'mc', question:'What is an "AI Usage Policy" for a business?',
  options:['A legal contract with your AI tool provider','A document specifying how employees can and cannot use AI tools — covering acceptable uses, data privacy rules, and content review requirements','A list of which AI tools are most expensive','A weekly report on AI usage statistics'],
  correct:1, explanation:'An AI Usage Policy is an internal document that governs how your team uses AI tools — what tasks are appropriate, what data cannot be entered into AI systems, what review processes are required before publishing AI content, and how to handle errors. It becomes increasingly important as team-wide AI adoption grows.' },

{ id:82, module:7, type:'tf', question:'Waiting 12 months to see if AI becomes "more mainstream" before adopting it is a safe business strategy.',
  options:['True','False'], correct:1,
  explanation:'False. Businesses that delay AI adoption are already falling behind AI-enabled competitors in productivity, content output, and customer experience. The tools available today are sufficiently mature and affordable to deliver real business value. Waiting compounds the disadvantage rather than reducing risk.' },

{ id:83, module:7, type:'mc', question:'Which type of tasks should be prioritised first in an AI audit?',
  options:['The most complex and creative tasks','Tasks that require the most human judgment and relationship skills','Repetitive tasks that consume significant time and could clearly be automated or accelerated','Tasks that require no input from any AI tool'],
  correct:2, explanation:'The highest AI ROI comes from automating or accelerating repetitive, time-consuming tasks with clear inputs and outputs. These deliver the fastest time savings with the least risk. Strategic, creative, and relationship-based tasks can still benefit from AI assistance but should not be the starting point.' },

{ id:84, module:7, type:'scenario', question:'Six months after adopting AI in your business, your team is using 7 different AI tools inconsistently. Some people get great results, others do not. What should you do?',
  options:['Add 3 more AI tools to give people more options','Remove all AI tools and start over','Audit which tools are delivering value and which are not, document the best-performing prompts and workflows in a shared library, and standardise on the 3-4 tools with the best ROI','Do nothing — usage will normalise over time'],
  correct:2, explanation:'This is an AI maturity challenge — moving from individual adoption to systematic value creation. Auditing tools, documenting best practices, and standardising on proven tools with a shared prompt library transforms inconsistent individual use into reliable team-wide capability. This is the governance step that separates advanced AI organisations from beginners.' },

{ id:85, module:7, type:'mc', question:'What does the term "AI literacy" mean in a business context?',
  options:['The ability to write code for AI systems','Understanding how to use AI tools effectively, critically evaluate AI outputs, and make good decisions about when to use AI and when not to','Reading academic papers about artificial intelligence','Having a computer science qualification'],
  correct:1, explanation:'AI literacy for business professionals means knowing how to use AI tools practically, understanding their limitations, evaluating outputs critically, and knowing which tasks benefit from AI versus which require purely human judgment. It is a foundational skill for the modern business environment.' },

// ── CROSS-MODULE SCENARIO QUESTIONS ──────────────────────────
{ id:86, module:1, type:'scenario', question:'A competitor launches an AI-powered chatbot on their website that answers customer queries instantly, 24/7. You have no AI tools currently. What is the most strategic immediate response for a small retail business?',
  options:['Wait to see if customers actually prefer chatbot responses','Implement a similar AI chatbot solution — tools like Tidio offer this from £15/month with minimal setup','Build a custom AI chatbot from scratch over the next 6 months','Accept that large competitors have an unfair advantage and do nothing'],
  correct:1, explanation:'Competitive pressure from AI adoption is a real business threat. Affordable, easy-to-deploy chatbot solutions (Tidio, Intercom) can be live on your website in a day and handle 60-80% of routine enquiries. A £15/month investment that matches a competitor\'s capability is the obvious response.' },

{ id:87, module:2, type:'scenario', question:'You need to write a 1,200-word blog post about industry trends for SEO purposes. You have 20 minutes. What is the most effective AI-assisted workflow?',
  options:['Write the post entirely manually — AI blogs are always low quality','Give ChatGPT a detailed prompt specifying the topic, keywords, target audience, desired structure, and tone. Review and personalise the output. Publish with your genuine expert perspective added.','Use ChatGPT to write the post and publish it immediately without review','Ask ChatGPT to research and write everything, then submit without reading it'],
  correct:1, explanation:'The AI-human collaboration workflow is optimal: detailed prompt for the draft, then your expert personalisation and review adds genuine value and ensures accuracy. This produces content that combines AI efficiency with your authentic expertise — better than either alone.' },

{ id:88, module:3, type:'scenario', question:'A restaurant owner wants to increase bookings using digital marketing but has a budget of only £200/month. What AI-powered approach delivers the best ROI?',
  options:['Spend all £200 on paid ads with no content strategy','Use free AI tools (ChatGPT, Canva) to create high-quality social content daily, spend £100 on targeted local Facebook ads with AI-written copy, and build an email list with an automated welcome sequence','Save the £200 and wait until you have a bigger budget','Pay a marketing agency the full £200/month to manage everything'],
  correct:1, explanation:'This approach combines organic reach (AI-powered content creation costs almost nothing), paid reach (£100 targeted Facebook ads with AI-written copy perform well), and owned media (email list). The AI tools free up the budget for ads rather than content creation costs.' },

{ id:89, module:4, type:'scenario', question:'A management consultant wants to improve their LinkedIn lead generation. They have 200 ideal prospects identified. What is the optimal AI-powered outreach strategy?',
  options:['Send all 200 the same generic connection request','Connect with all 200 without any message','Use ChatGPT to personalise each connection request using the prospect\'s LinkedIn profile (2 minutes per message), then follow up accepted connections with an AI-written value-adding first message, not a sales pitch','Send all 200 a direct pitch message immediately on connection'],
  correct:2, explanation:'Quality personalised outreach beats volume every time on LinkedIn. AI makes it possible to personalise 200 messages in a day rather than a week. The "connect then add value" approach (versus connect then pitch) consistently generates 3-5x higher conversion to conversations.' },

{ id:90, module:5, type:'scenario', question:'A business owner spends 3 hours every Monday morning creating and sending a weekly report to 5 clients. How should they automate this?',
  options:['Hire a virtual assistant to create the reports instead','Accept this as a necessary cost of client service','Build a Zapier workflow that pulls data from their tools weekly, uses ChatGPT API to generate the analysis, and emails formatted reports automatically on Monday morning — with zero manual intervention','Create a simpler, less useful report that takes 30 minutes instead'],
  correct:2, explanation:'This is a textbook automation opportunity. Scheduled data collection → AI analysis → formatted report → automatic email delivery. Setup takes 3-4 hours once; thereafter it runs automatically every week. 156 hours per year reclaimed at zero ongoing cost beyond the tool subscriptions.' },

{ id:91, module:6, type:'mc', question:'Which combination of AI tools would you recommend for a small e-commerce business wanting to improve their product photography, ad copy, and customer service?',
  options:['Midjourney (product images) + ChatGPT (ad copy) + Tidio AI chatbot (customer service) — total cost under £50/month','Build custom AI tools from scratch for each function','Only use one tool for everything','Use only free tools regardless of quality'],
  correct:0, explanation:'This stack specifically addresses three high-value needs: Midjourney produces professional product imagery without photography costs, ChatGPT writes converting ad copy at scale, and Tidio handles routine customer queries automatically. Each tool excels at its specific purpose and the combined cost is under £50/month.' },

{ id:92, module:7, type:'scenario', question:'You have been using ChatGPT for 6 weeks and are getting great results personally. Your team of 5 has not started using AI yet. What is the most effective next step?',
  options:['Keep AI use private to maintain your competitive advantage within the team','Force all team members to complete a 4-hour online AI training course immediately','Share 3 specific examples of where AI saved you time this week, invite the most curious team member to a 30-minute session where you show them live how to use it for their specific tasks, and create a shared folder with your best prompts','Tell the team AI will be mandatory from next month with no further guidance'],
  correct:2, explanation:'Organic adoption driven by genuine enthusiasm and visible results outperforms mandated training. Showing specific, relevant use cases (not general AI capabilities) and making it easy to start (shared prompts, a supportive colleague) creates willing adopters. The team member you bring in first becomes your internal advocate.' },

{ id:93, module:1, type:'mc', question:'Which statement most accurately describes the current pace of AI development?',
  options:['AI development has plateaued — the tools available today will not improve significantly','AI capabilities are improving every few months, with significant new features and models released regularly','AI development is slowing down due to hardware limitations','AI only advances in academic research, not practical business tools'],
  correct:1, explanation:'AI capabilities are improving at an extraordinary pace — major new models and features from the leading providers are released every few months. This means the skills and habits you build today will remain valuable, but staying curious and updating your knowledge regularly is important.' },

{ id:94, module:2, type:'mc', question:'When should you NOT use AI to generate content?',
  options:['Never — AI is always superior to human writing','For casual internal communications between team members','For legally binding documents, professional medical or financial advice, or any content where errors could cause serious harm — always use qualified professionals','For social media content, which should always be written entirely by humans'],
  correct:2, explanation:'AI should not be the final or sole source for content where accuracy is legally or professionally critical: contracts, medical advice, regulated financial guidance. AI can assist with drafting but qualified human professionals must review, validate, and take responsibility for such content.' },

{ id:95, module:3, type:'mc', question:'What is the recommended frequency for a "batch content creation" session using AI?',
  options:['Daily — create content the same day you need to post it','Once per week for the following week','Once per month — plan and create 30 days of content in one focused 2-3 hour session','Only when you run out of content ideas'],
  correct:2, explanation:'Monthly batch creation is the most efficient approach: 2-3 hours with AI produces a full month of content, which is then scheduled in advance. This eliminates daily content creation pressure, ensures consistent posting, and allows time for quality review of all content before it goes live.' },

{ id:96, module:4, type:'tf', question:'AI can automatically research a prospect, personalise an outreach email, and add them to a follow-up sequence with zero human involvement, using automation tools like Zapier.',
  options:['True','False'], correct:0,
  explanation:'True. This fully automated workflow is achievable: prospect data triggers a Zapier automation that sends to ChatGPT API for personalised message generation, then automatically sends the email and adds the prospect to a CRM sequence. While powerful, most businesses prefer to review AI-personalised messages before sending for quality control.' },

{ id:97, module:5, type:'mc', question:'What is the best way to maintain data security when using AI tools for business tasks involving customer information?',
  options:['Never use AI for any task involving customer data','Use enterprise AI plans with data processing agreements (DPAs), or anonymise/pseudonymise data before AI analysis','Simply hope AI providers handle data securely without checking','Use AI only for internal documents but share customer data freely with AI tools'],
  correct:1, explanation:'GDPR-compliant AI use for customer data requires either: (1) enterprise AI plans that include data processing agreements (Microsoft 365 Copilot, Google Workspace Enterprise, ChatGPT Enterprise), or (2) removing/replacing personal identifiers before analysis. Both approaches allow the benefits of AI while maintaining data protection compliance.' },

{ id:98, module:6, type:'mc', question:'If you only had budget for ONE AI tool for your business, which would typically deliver the broadest business value?',
  options:['ElevenLabs — for voice content','Midjourney — for image generation','ChatGPT Plus — for writing, analysis, research, brainstorming, and custom GPTs across all business functions','Perplexity — for research only'],
  correct:2, explanation:'ChatGPT Plus covers the widest range of business functions: writing, analysis, research, brainstorming, data interpretation, content creation, and custom GPTs for specialised tasks. For a business just starting with AI, this single subscription delivers the most diverse value across the most use cases.' },

{ id:99, module:7, type:'scenario', question:'A small business has been using AI for 3 months and wants to measure whether it is delivering value. What metrics should they track?',
  options:['Number of AI queries made per month','Hours saved per week on specific tasks, quality of output compared to pre-AI standard, and any measurable impact on leads, sales, or customer satisfaction','The total number of words generated by AI','How many different AI tools they are using'],
  correct:1, explanation:'The meaningful metrics are outcome-based: time saved (quantified in hours and at your hourly rate), quality improvement (compare AI-assisted output to previous standard), and business impact (did marketing performance improve? Did lead volume increase? Did customer satisfaction scores change?). Activity metrics (queries, words) measure input not value.' },

{ id:100, module:7, type:'mc', question:'What is the single most important habit for long-term AI success in business?',
  options:['Using the most expensive AI tools available','Staying curious and continuously learning as AI capabilities evolve, while building systematic processes that your whole team can benefit from','Using AI for every single task without exception','Keeping AI use a competitive secret from your team'],
  correct:1, explanation:'The AI landscape evolves rapidly. Staying curious, experimenting regularly, and building systematic team-wide processes (shared prompts, documented workflows, clear policies) creates compounding advantages over time. Individual heavy users who do not systematise their knowledge fail to scale the value across their organisation.' },

// ── ADDITIONAL QUESTIONS ──────────────────────────────────────
{ id:101, module:2, type:'mc', question:'What does "context window" mean in the context of AI language models?',
  options:['The physical screen size of your monitor when using AI','The maximum amount of text the AI can process and remember within a single conversation','The time period the AI was trained on','The geographic region where the AI servers are located'],
  correct:1, explanation:'The context window is the maximum amount of text (measured in tokens, roughly 3/4 of a word each) that an AI model can hold in its "working memory" during a conversation. Larger context windows allow analysis of longer documents and maintenance of more complex conversations. Claude\'s 200k token window is currently one of the largest.' },

{ id:102, module:3, type:'mc', question:'What is the primary function of a social media scheduling tool like Buffer or Later when combined with AI content creation?',
  options:['To generate content ideas automatically','To improve the quality of AI-written posts','To automatically publish pre-created content at optimal times — decoupling content creation from posting','To connect directly to ChatGPT for real-time content generation'],
  correct:2, explanation:'Scheduling tools decouple creation from publishing. You create a month of content with AI in one session, upload to the scheduler, and it publishes automatically at the optimal times throughout the month. This means consistent daily posting without daily effort — the foundation of effective social media presence.' },

{ id:103, module:4, type:'mc', question:'What is a "break-up email" in a sales follow-up sequence?',
  options:['An email ending a business partnership','The final email in a sequence that politely closes the conversation while leaving the door open for future contact — often generating replies due to its directness','An email informing a customer of their account termination','A newsletter sent to inactive email subscribers'],
  correct:1, explanation:'A break-up email is strategically the last email in a follow-up sequence. It signals that you will stop reaching out, which often prompts a response from prospects who were interested but distracted. Phrased correctly ("I\'ll assume the timing isn\'t right — feel free to reach out if that changes"), it maintains goodwill and generates surprisingly high reply rates.' },

{ id:104, module:5, type:'mc', question:'Which business function typically sees the fastest measurable ROI from AI adoption?',
  options:['Long-term strategic planning','Marketing content creation — where AI can produce in hours what previously took days, with immediately measurable output quantity and quality improvement','Supply chain management','Company annual reporting'],
  correct:1, explanation:'Marketing content creation delivers the fastest visible ROI from AI: before/after comparison is immediate (one AI session vs previous weekly content effort), output quality is comparable or better, and business impact (engagement, reach, leads) can be measured within days. This is why marketing is the recommended starting point for most businesses.' },

{ id:105, module:7, type:'scenario', question:'You are presenting to your business partner about investing in AI tools. They ask: "How do I know this will pay off?" What is the most compelling response?',
  options:['Tell them AI is the future and they should trust you','Show them a documented example from a similar business, calculate the time savings in your own operation using specific tasks and hourly rates, demonstrate a live prompt that solves one of their known pain points, and propose a 30-day trial with specific measurable goals','Say AI is free so there is no risk anyway','Suggest they read academic research about AI benefits'],
  correct:1, explanation:'The most compelling business case for AI combines: social proof (real example from a comparable business), personalised ROI calculation (your numbers, your tasks, your hourly rate), a live demonstration (seeing is believing), and a structured trial with success metrics. This approach addresses the "is it real?" and "will it work for us?" questions simultaneously.' }

]; // end QUESTIONS
