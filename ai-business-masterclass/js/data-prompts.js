// ══════════════════════════════════════════════════════════════
// PROMPT LIBRARY — 70+ Ready-to-Use Business AI Prompts
// ══════════════════════════════════════════════════════════════

const PROMPT_LIBRARY = [

  // ── Content & Copywriting ────────────────────────────────────
  {
    category: 'Content & Copywriting',
    icon: '✍️',
    color: '#1B6B8A',
    prompts: [
      {
        title: 'Blog Post Outline',
        prompt: 'Create a detailed blog post outline for the topic "[INSERT TOPIC]" aimed at [INSERT TARGET AUDIENCE, e.g. small business owners]. Include an attention-grabbing headline, 5–6 main sections with subheadings, key points for each section, and a strong call to action. The tone should be [professional / friendly / authoritative].',
      },
      {
        title: 'Product Description',
        prompt: 'Write a compelling product description for [INSERT PRODUCT NAME]. Key features: [LIST FEATURES]. Target customer: [DESCRIBE CUSTOMER]. The description should be 100–150 words, highlight the main benefit in the first sentence, use persuasive language, and end with a clear next step. Avoid jargon.',
      },
      {
        title: 'Website About Page',
        prompt: 'Write an engaging "About Us" page for [COMPANY NAME], a [TYPE OF BUSINESS] based in [LOCATION]. We were founded in [YEAR] and our mission is to [MISSION]. Our key differentiator is [WHAT MAKES YOU DIFFERENT]. Write in a warm, professional tone that builds trust and ends with an invitation to get in touch.',
      },
      {
        title: 'Headline Variations',
        prompt: 'Generate 10 headline variations for [PRODUCT/SERVICE/ARTICLE]. Mix styles: some benefit-led, some curiosity-driven, some using numbers, some asking a question. Target audience: [AUDIENCE]. Keep each headline under 12 words.',
      },
      {
        title: 'Rewrite for Clarity',
        prompt: 'Rewrite the following paragraph to make it clearer, more engaging, and easier to read for a non-expert audience. Keep the same meaning but improve the flow and remove any jargon. Use short sentences where possible.\n\n[PASTE YOUR TEXT HERE]',
      },
      {
        title: 'FAQ Section',
        prompt: 'Create a FAQ section for [PRODUCT/SERVICE]. Include 8 realistic questions a potential customer might ask, covering: price/value, how it works, who it is for, what results to expect, and any common concerns. Write clear, reassuring answers of 2–4 sentences each.',
      },
      {
        title: 'Case Study Write-Up',
        prompt: 'Write a short case study (300–400 words) based on this client outcome:\nClient: [DESCRIBE CLIENT]\nChallenge: [DESCRIBE THE PROBLEM]\nSolution: [WHAT YOU PROVIDED]\nResult: [MEASURABLE OUTCOME]\nUse a Before/Challenge/Solution/Results structure. End with a client quote (you can make a realistic one for me to review).',
      },
      {
        title: 'Landing Page Copy',
        prompt: 'Write landing page copy for [PRODUCT/SERVICE]. Include: a powerful headline, a 3-sentence subheadline, 3 key benefits (each with a short explanation), social proof section placeholder, and a strong call-to-action button text. Target audience: [DESCRIBE AUDIENCE]. Main outcome they want: [DESIRED OUTCOME].',
      },
    ]
  },

  // ── Social Media ─────────────────────────────────────────────
  {
    category: 'Social Media',
    icon: '📱',
    color: '#7C3AED',
    prompts: [
      {
        title: 'LinkedIn Post',
        prompt: 'Write a LinkedIn post for a [JOB TITLE / BUSINESS TYPE] about [TOPIC]. Make it personal and conversational. Start with a hook that stops the scroll (no "I\'m excited to announce"). Include a short story or insight, 2–3 practical takeaways, and end with a question to encourage comments. 150–200 words. No hashtag spam — max 3 relevant hashtags.',
      },
      {
        title: '7-Day Social Media Calendar',
        prompt: 'Create a 7-day social media content calendar for [BUSINESS TYPE] on [PLATFORM(S)]. Each day should have: the post type (tip, story, question, behind the scenes, testimonial, etc.), a draft caption (50–80 words), and 3 relevant hashtags. Theme for the week: [OPTIONAL THEME]. Keep the tone [PROFESSIONAL / FRIENDLY / INSPIRATIONAL].',
      },
      {
        title: 'Instagram Caption',
        prompt: 'Write 3 Instagram caption options for a post about [DESCRIBE THE IMAGE/VIDEO CONTENT]. Each caption should: start with a strong first line (visible before "more"), include a call to action, and use 5–8 relevant hashtags. Brand voice: [DESCRIBE YOUR TONE]. Target audience: [AUDIENCE].',
      },
      {
        title: 'Response to Negative Comment',
        prompt: 'Write a professional, calm, and empathetic public response to this negative comment on social media:\n\n"[PASTE THE COMMENT]"\n\nThe response should: acknowledge their experience, not be defensive, show we take it seriously, offer to resolve it privately, and protect our brand reputation. Keep it under 80 words.',
      },
      {
        title: 'Viral Thread (X/Twitter)',
        prompt: 'Write a 7-tweet thread on [TOPIC] for [TARGET AUDIENCE]. Tweet 1 should be a bold statement or surprising fact that hooks the reader. Tweets 2–6 should each deliver one clear insight or tip. Tweet 7 should summarise and include a call to action. Keep each tweet under 240 characters.',
      },
      {
        title: 'YouTube Video Script Intro',
        prompt: 'Write a 60-second YouTube video intro script for a video titled "[VIDEO TITLE]". It should: hook the viewer in the first 5 seconds with a bold statement or question, briefly state what they will learn, and tell them why it matters. End with a smooth transition into the main content. Energetic, direct tone — no filler words.',
      },
    ]
  },

  // ── Email Marketing ───────────────────────────────────────────
  {
    category: 'Email Marketing',
    icon: '📧',
    color: '#059669',
    prompts: [
      {
        title: 'Welcome Email',
        prompt: 'Write a welcome email for new subscribers who signed up for [DESCRIBE YOUR LEAD MAGNET / NEWSLETTER]. The email should: feel warm and personal, confirm what they will receive, briefly introduce who you are, set expectations for future emails, and include one immediate value (a tip, link, or next step). Subject line included. 200–250 words.',
      },
      {
        title: '3-Email Nurture Sequence',
        prompt: 'Write a 3-email nurture sequence for leads who downloaded [LEAD MAGNET] but have not yet purchased [PRODUCT/SERVICE].\n- Email 1 (Day 1): Deliver value, build trust\n- Email 2 (Day 3): Address the main objection ([OBJECTION])\n- Email 3 (Day 7): Soft sell with urgency\nInclude subject lines for each. Friendly, helpful tone — not pushy.',
      },
      {
        title: 'Promotional Email',
        prompt: 'Write a promotional email for [OFFER / PRODUCT / DISCOUNT]. Target audience: [DESCRIBE]. Key benefit: [MAIN BENEFIT]. Deadline or scarcity: [IF ANY]. Include: subject line, pre-header text, opening hook, body copy (150 words), clear CTA button text, and a P.S. line. Conversational tone.',
      },
      {
        title: 'Re-Engagement Email',
        prompt: 'Write a re-engagement email for subscribers who have not opened our emails in 90+ days. Subject line should be intriguing (not guilt-tripping). Email should: acknowledge the silence with humour or warmth, offer something valuable, and give them a clear choice: stay subscribed or unsubscribe. 150 words max. Honest and human.',
      },
      {
        title: 'Cold Outreach Email',
        prompt: 'Write a cold outreach email to [TYPE OF PROSPECT] about [PRODUCT/SERVICE]. Keep it under 120 words. It should: open with something specific about them (leave a [PERSONALISATION] placeholder), quickly state the one benefit relevant to them, include one social proof line, and end with one low-friction question (not "can we jump on a call?"). No attachments. No jargon.',
      },
      {
        title: 'Follow-Up Sequence (No Reply)',
        prompt: 'Write a 3-email follow-up sequence for prospects who did not reply to my initial outreach email about [PRODUCT/SERVICE].\n- Follow-up 1 (3 days later): Brief, adds value\n- Follow-up 2 (7 days later): Different angle, addresses objection\n- Follow-up 3 (14 days later): Polite break-up email\nAll under 80 words each. Include subject lines.',
      },
    ]
  },

  // ── Sales & Lead Generation ───────────────────────────────────
  {
    category: 'Sales & Lead Generation',
    icon: '💰',
    color: '#D97706',
    prompts: [
      {
        title: 'Handle Objection: "Too Expensive"',
        prompt: 'Write 3 different responses to the sales objection "Your price is too high / it\'s too expensive." Each response should: acknowledge the concern, reframe value (not defend price), ask a question to understand their position better. Responses for: (1) a service business, (2) a product business, (3) a B2B context. Keep each under 60 words.',
      },
      {
        title: 'Proposal / Quote Template',
        prompt: 'Create a professional proposal template for [TYPE OF SERVICE/PRODUCT]. Include sections for: Executive Summary, Understanding of Client Needs, Our Proposed Solution, Deliverables and Timeline, Investment (pricing table), Why Choose Us, Next Steps, and Terms. Write the section headers and placeholder guidance text. Professional and persuasive tone.',
      },
      {
        title: 'LinkedIn Connection Message',
        prompt: 'Write 3 LinkedIn connection request messages (under 300 characters each) to [TYPE OF PROSPECT]. Each should feel personal and specific — not a pitch. Version 1: reference a shared connection or group. Version 2: reference something they posted. Version 3: reference their company or role. No selling in the connection request.',
      },
      {
        title: 'Sales Page Framework',
        prompt: 'Write a complete sales page framework for [PRODUCT/SERVICE] priced at [PRICE]. Use the PAS structure (Problem, Agitation, Solution) followed by: benefits, social proof, FAQ, guarantee, and CTA. Target customer: [DESCRIBE]. Main transformation: [FROM STATE to TO STATE]. Include placeholder brackets where personalisation is needed.',
      },
      {
        title: 'Referral Programme Message',
        prompt: 'Write a short email to existing customers asking them to refer a friend to [BUSINESS]. Include: genuine appreciation for their loyalty, a simple explanation of the referral incentive ([INCENTIVE]), how it works (3 simple steps), and a clear call to action. Keep it under 150 words. Warm and personal — not corporate.',
      },
      {
        title: 'Discovery Call Questions',
        prompt: 'Write 12 discovery call questions for [TYPE OF BUSINESS] selling [PRODUCT/SERVICE] to [TARGET CLIENT]. Cover: understanding their current situation, the specific problem they want to solve, what they have already tried, their budget/timeline, decision-making process, and what success looks like. Include 2 open questions that build rapport.',
      },
    ]
  },

  // ── Customer Service ──────────────────────────────────────────
  {
    category: 'Customer Service',
    icon: '🤝',
    color: '#0891B2',
    prompts: [
      {
        title: 'Response to Negative Review',
        prompt: 'Write a professional response to this negative review:\n\n"[PASTE REVIEW TEXT]"\n\nThe response should: thank them for their feedback, acknowledge their experience without admitting fault where inappropriate, show empathy, explain briefly what you will do, and invite them to contact you directly to resolve it. Under 120 words. No excuses, no defensiveness.',
      },
      {
        title: 'Customer Complaint Template',
        prompt: 'Create a response template for handling complaints about [TYPE OF COMPLAINT, e.g. delayed delivery / billing error / product fault]. Include: acknowledgement of the issue, sincere apology, explanation of what happened (keep vague — leave [REASON] placeholder), what you are doing to fix it, and a goodwill gesture. Professional and empathetic.',
      },
      {
        title: 'Onboarding Email Sequence',
        prompt: 'Write a 4-email onboarding sequence for new customers of [PRODUCT/SERVICE]. Email 1 (Day 0): Welcome and next steps. Email 2 (Day 2): Quick win tip. Email 3 (Day 5): Key feature spotlight. Email 4 (Day 14): Check-in and offer support. Keep each under 150 words. Friendly, encouraging tone.',
      },
      {
        title: 'Customer Satisfaction Survey',
        prompt: 'Create a short customer satisfaction survey for [BUSINESS TYPE]. Include: 1 NPS question (How likely are you to recommend us?), 3 specific questions about [ASPECT 1], [ASPECT 2], and [ASPECT 3], 1 open text question about what we could improve, and 1 question about what we do best. Keep it to 5 questions total.',
      },
    ]
  },

  // ── Operations & Productivity ─────────────────────────────────
  {
    category: 'Operations & Productivity',
    icon: '⚙️',
    color: '#6D28D9',
    prompts: [
      {
        title: 'Meeting Agenda',
        prompt: 'Create a structured agenda for a [TYPE OF MEETING, e.g. monthly team review / client kick-off / strategy planning] meeting lasting [LENGTH]. Include: welcome/intro (5 min), agenda items with time allocations, any decision points, actions and owners section, and AOB. Attendees: [LIST ROLES]. Goal of the meeting: [GOAL].',
      },
      {
        title: 'Standard Operating Procedure',
        prompt: 'Write a Standard Operating Procedure (SOP) for [PROCESS NAME, e.g. handling a new client enquiry]. Include: purpose of the SOP, who it applies to, step-by-step instructions (numbered), what to do if something goes wrong, and any tools/templates needed. Write clearly enough for a new team member to follow without supervision.',
      },
      {
        title: 'Summarise Long Document',
        prompt: 'Please read the following document and provide: (1) A 3-sentence executive summary, (2) 5 key points, (3) Any action items or decisions required, (4) One potential risk or concern.\n\n[PASTE DOCUMENT TEXT HERE]',
      },
      {
        title: 'Job Description',
        prompt: 'Write a job description for a [JOB TITLE] at [COMPANY TYPE]. Include: role summary (3 sentences), key responsibilities (6–8 bullet points), required qualifications, desirable experience, what we offer (benefits/culture), and a brief company description. Tone: [PROFESSIONAL / MODERN / STARTUP]. Avoid gendered language.',
      },
      {
        title: 'Project Brief Template',
        prompt: 'Create a project brief template for [TYPE OF PROJECT, e.g. website redesign / marketing campaign / product launch]. Include sections for: Project Overview, Objectives (SMART goals), Target Audience, Scope of Work, Timeline & Milestones, Budget, Stakeholders & Approval Process, and Success Metrics. Include guidance notes for each section.',
      },
      {
        title: 'Performance Review Framework',
        prompt: 'Create a performance review framework for a [ROLE, e.g. sales executive / marketing manager]. Include: 5 key performance areas with 3 evaluation criteria each, a rating scale (1–5 with descriptions), self-assessment questions, manager assessment questions, and a development goals section. Constructive and growth-focused in tone.',
      },
    ]
  },

  // ── Marketing Strategy ────────────────────────────────────────
  {
    category: 'Marketing Strategy',
    icon: '📣',
    color: '#BE185D',
    prompts: [
      {
        title: 'Ideal Customer Profile',
        prompt: 'Help me create a detailed Ideal Customer Profile (ICP) for [BUSINESS TYPE]. Include: demographics (age, location, job title/role), psychographics (values, fears, aspirations), their biggest challenge related to [YOUR AREA], what they have tried before, where they spend time online, what they read/watch, and what language they use to describe their problem. Be specific — avoid generalisations.',
      },
      {
        title: '90-Day Marketing Plan',
        prompt: 'Create a 90-day marketing plan for [BUSINESS TYPE] with a monthly budget of [BUDGET]. Goals: [PRIMARY GOAL, e.g. generate 50 leads]. Include: Month 1 (foundations), Month 2 (amplification), Month 3 (optimisation). For each month list: 3 marketing activities, channels to use, content to create, and how to measure success. Be practical and specific.',
      },
      {
        title: 'Competitor Analysis Framework',
        prompt: 'Create a competitor analysis for [YOUR BUSINESS TYPE]. My top 3 competitors are [NAME THEM]. For each competitor analyse: their main value proposition, pricing, strengths, weaknesses, marketing channels, and customer reviews (themes). End with: 3 opportunities for differentiation and 1 thing I should not copy. Structure as a comparison table where possible.',
      },
      {
        title: 'Brand Voice & Tone Guide',
        prompt: 'Help me define a brand voice and tone guide for [BRAND NAME], a [TYPE OF BUSINESS]. Our target audience is [AUDIENCE]. We want to sound [3 ADJECTIVES]. We do NOT want to sound [3 ADJECTIVES TO AVOID]. Include: our brand personality, how our voice changes across contexts (social media vs email vs website), 5 dos, 5 don\'ts, and 3 example rewrites.',
      },
      {
        title: 'Google Ads Copy',
        prompt: 'Write 3 Google Search Ad variations for [PRODUCT/SERVICE]. Each ad needs: Headline 1 (30 chars), Headline 2 (30 chars), Headline 3 (30 chars), Description 1 (90 chars), Description 2 (90 chars). Target keyword: [KEYWORD]. USP: [UNIQUE SELLING POINT]. Include a clear CTA in each. Count characters carefully.',
      },
    ]
  },

  // ── AI Tools & Prompting ──────────────────────────────────────
  {
    category: 'AI Tools & Prompting',
    icon: '🤖',
    color: '#1B6B8A',
    prompts: [
      {
        title: 'Role + Context + Task Prompt',
        prompt: 'Act as an expert [ROLE, e.g. marketing strategist / financial advisor / HR consultant] with 15 years of experience working with [TYPE OF BUSINESS]. I run a [DESCRIBE YOUR BUSINESS] with [NUMBER] employees in [LOCATION/INDUSTRY]. My current challenge is [DESCRIBE PROBLEM]. Please [SPECIFIC TASK]. Focus on practical, actionable advice I can implement this week.',
      },
      {
        title: 'Analyse & Improve My Text',
        prompt: 'Please analyse the following text and score it out of 10 on: clarity, persuasiveness, tone, and readability. Then provide a revised version that improves each area. Explain the main changes you made and why.\n\n[PASTE YOUR TEXT HERE]',
      },
      {
        title: 'Create a GPT Persona',
        prompt: 'Help me create a custom AI persona for my business called "[PERSONA NAME]". It should act as [DESCRIBE THE ROLE, e.g. a helpful customer service assistant for a pet shop]. Write the full system prompt I can use in ChatGPT Custom GPT or Claude. Include: persona name, personality, tone, what it can help with, what topics it should avoid, and how it should handle queries it can\'t answer.',
      },
      {
        title: 'Data Analysis Prompt',
        prompt: 'I\'m going to share some business data with you. Please: (1) Identify the 3 most significant trends or patterns, (2) Flag any anomalies or concerns, (3) Suggest 3 practical actions based on the data, (4) Tell me what additional data would help me make better decisions.\n\n[PASTE YOUR DATA OR DESCRIBE IT HERE]',
      },
      {
        title: 'Build a Prompt Template',
        prompt: 'Help me create a reusable prompt template for [SPECIFIC TASK I DO REGULARLY, e.g. writing weekly client reports / creating social posts / drafting proposals]. The template should: have clear placeholders in [BRACKETS], guide the AI to produce consistent outputs, include the right tone and format requirements, and produce results I can use with minimal editing.',
      },
    ]
  },

];

// ── Worksheet Questions per Module ────────────────────────────────
const MODULE_WORKSHEETS = {

  1: {
    title: 'Module 1 Action Worksheet',
    subtitle: 'Introduction to AI in Business — Apply it to your world',
    questions: [
      { id: 'q1', label: 'List 3 repetitive tasks you or your team do every week that take too much time:', placeholder: 'e.g. Writing social media posts, replying to similar enquiries, creating reports...' },
      { id: 'q2', label: 'Which area of your business do you think could benefit MOST from AI right now?', placeholder: 'e.g. Marketing, customer service, admin, sales, HR...' },
      { id: 'q3', label: 'What is your biggest concern or hesitation about using AI in your business?', placeholder: 'Be honest — this helps us address it in upcoming modules...' },
      { id: 'q4', label: 'Which AI tools have you heard of or already tried? What was your experience?', placeholder: 'e.g. ChatGPT — tried it once but wasn\'t sure what to ask...' },
      { id: 'q5', label: 'Complete this sentence: "By the end of this course, I want AI to help me achieve..."', placeholder: 'Write your personal goal for this course...' },
    ]
  },

  2: {
    title: 'Module 2 Action Worksheet',
    subtitle: 'Using ChatGPT Effectively — Put prompt engineering to work',
    questions: [
      { id: 'q1', label: 'Write a basic prompt for one task you do regularly in your business:', placeholder: 'e.g. Write a social media post about our new product for small business owners...' },
      { id: 'q2', label: 'Now rewrite that prompt using the Role + Context + Task format from this module:', placeholder: 'Act as a [role] with [experience]. My business is [context]. Please [specific task]...' },
      { id: 'q3', label: 'What was the difference in the output when you added more context?', placeholder: 'Describe how the result improved (or paste both outputs here)...' },
      { id: 'q4', label: 'List 3 specific tasks in your business where you will start using AI prompts this week:', placeholder: '1.\n2.\n3.' },
      { id: 'q5', label: 'What is the one prompt you\'ll save as a template to reuse regularly?', placeholder: 'Write your master prompt template here...' },
    ]
  },

  3: {
    title: 'Module 3 Action Worksheet',
    subtitle: 'AI Marketing — Build your AI-powered marketing engine',
    questions: [
      { id: 'q1', label: 'Describe your ideal customer in as much detail as possible:', placeholder: 'Age, role, challenges, what keeps them up at night, where they hang out online...' },
      { id: 'q2', label: 'List 3 pieces of marketing content you need to create this month. How will AI help with each?', placeholder: '1. Blog post — AI will draft the outline and first draft\n2. ...' },
      { id: 'q3', label: 'What is your biggest marketing challenge right now? Write a prompt to ask AI to help solve it:', placeholder: 'Challenge: [describe it]\nMy prompt: Act as a marketing expert...' },
      { id: 'q4', label: 'Which social media platform will you focus your AI-powered content on, and why?', placeholder: 'e.g. LinkedIn, because my B2B clients are there and I can share expertise...' },
      { id: 'q5', label: 'What is your 30-day content plan? List at least 8 post ideas AI can help you create:', placeholder: 'Week 1: Tip post, testimonial, behind the scenes...' },
    ]
  },

  4: {
    title: 'Module 4 Action Worksheet',
    subtitle: 'Lead Generation with AI — Fill your pipeline',
    questions: [
      { id: 'q1', label: 'Describe your ideal lead in detail (not just demographics — their mindset and triggers):', placeholder: 'They are thinking about [problem] and have just [trigger event]...' },
      { id: 'q2', label: 'Write your AI-assisted cold outreach email for one target prospect type:', placeholder: 'Subject: ...\nHi [Name], I noticed...' },
      { id: 'q3', label: 'What lead magnet or free resource could you create with AI to attract your ideal clients?', placeholder: 'e.g. A PDF guide, checklist, mini-course, template, quiz...' },
      { id: 'q4', label: 'List 3 follow-up touchpoints in your current sales process. How could AI improve each one?', placeholder: '1. First email follow-up — AI can write 3 variations...' },
      { id: 'q5', label: 'Set a measurable lead generation goal for the next 30 days:', placeholder: 'e.g. Generate 20 new qualified leads by [date] using AI-powered outreach...' },
    ]
  },

  5: {
    title: 'Module 5 Action Worksheet',
    subtitle: 'Business Automation — Reclaim your time',
    questions: [
      { id: 'q1', label: 'Map your biggest time sink: describe one manual process that takes hours each week:', placeholder: 'e.g. Every Monday I manually compile sales figures from 3 spreadsheets into a report...' },
      { id: 'q2', label: 'Which automation tool from this module fits your tech stack and skill level?', placeholder: 'e.g. Zapier — I already use Gmail, Google Sheets, and Slack...' },
      { id: 'q3', label: 'Design one simple automation you will set up this week (describe the trigger and action):', placeholder: 'When [trigger]: a new enquiry arrives in my inbox\nDo [action]: AI drafts a response and notifies me on Slack...' },
      { id: 'q4', label: 'Estimate how many hours per month this automation will save you:', placeholder: 'Current time: X hours. Automated time: Y hours. Monthly saving: Z hours = £ value...' },
      { id: 'q5', label: 'List 3 more processes you want to automate over the next 90 days (priority order):', placeholder: '1. (Highest priority)\n2.\n3.' },
    ]
  },

  6: {
    title: 'Module 6 Action Worksheet',
    subtitle: 'AI Tools Every Business Should Know — Build your AI toolkit',
    questions: [
      { id: 'q1', label: 'Which 3 tools from this module will you try first and why?', placeholder: 'Tool 1: [Name] — because it will help me with [specific need]...' },
      { id: 'q2', label: 'Create your personal AI toolkit: list your chosen tools by business function:', placeholder: 'Writing: ChatGPT\nImages: Midjourney\nMeetings: Otter.ai\nVideo: ...' },
      { id: 'q3', label: 'Calculate the cost of your chosen AI toolkit vs the time it will save:', placeholder: 'Monthly cost: £X\nHours saved: Y hours × £Z per hour = £ value\nROI: ...' },
      { id: 'q4', label: 'Which tool will you introduce to your team first? How will you present it to them?', placeholder: 'Tool: ...\nHow I\'ll introduce it: Short demo on [date], starting with the [use case]...' },
      { id: 'q5', label: 'What is one way you can use AI to improve your customer experience this month?', placeholder: 'e.g. Use AI to respond to enquiries faster, personalise proposals, create better content...' },
    ]
  },

  7: {
    title: 'Module 7 Action Worksheet',
    subtitle: 'Building Your AI Strategy — Your 90-day action plan',
    questions: [
      { id: 'q1', label: 'Define your AI vision: what does your business look like in 12 months with AI fully integrated?', placeholder: 'Describe the ideal future state — what\'s automated, what\'s improved, what time do you have back...' },
      { id: 'q2', label: 'List your top 5 AI priorities in order of impact and ease of implementation:', placeholder: '1. [Highest impact, easiest] — e.g. AI-assisted content creation\n2.\n3.\n4.\n5.' },
      { id: 'q3', label: 'What does your 90-day AI implementation roadmap look like?', placeholder: 'Month 1: Set up tools, train team on prompting\nMonth 2: Automate [process]\nMonth 3: ...' },
      { id: 'q4', label: 'Who in your team will be your AI champion — the person who drives adoption?', placeholder: 'Name/role and why they\'re the right person...' },
      { id: 'q5', label: 'Write your personal commitment: what will you do differently starting tomorrow?', placeholder: 'Starting tomorrow, I commit to using AI for [specific task] every day. My first action is...' },
    ]
  },

};
