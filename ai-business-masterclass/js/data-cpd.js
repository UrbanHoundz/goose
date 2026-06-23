// ══════════════════════════════════════════════════════════════
// CPD & COMPLIANCE DATA — AI For Business Growth Masterclass
// ══════════════════════════════════════════════════════════════

// ── Course Metadata ───────────────────────────────────────────
const CPD_INFO = {
    provider:        'Penshaw View Training',
    courseTitle:     'AI For Business Growth Masterclass',
    cpdHours:        3.5,
    cpdCategory:     'Structured Learning',
    cpdLevel:        'Foundation / Intermediate',
    sector:          'Business, Management & Leadership',
    deliveryMethod:  'Online, self-paced',
    assessmentMethod:'Summative multiple-choice assessment (30 questions, 70% pass mark)',
    prerequisites:   'None — suitable for all business professionals regardless of technical background',
    targetAudience:  'Business owners, managers, directors, marketing professionals, sales teams, and SME leaders who wish to understand and apply AI tools within their organisation.',
    version:         '1.0',
    reviewDate:      'January 2027',
    contactEmail:    'training@penshawview.co.uk',
};

// ── CPD Learning Outcomes per Module ─────────────────────────
// Framed using Bloom's Taxonomy action verbs as required by CPD bodies
const MODULE_LEARNING_OUTCOMES = {

    1: {
        intro: 'By the end of this module, learners will be able to:',
        outcomes: [
            'Define artificial intelligence and distinguish between AI, machine learning, and large language models in a business context',
            'Identify at least five AI applications already embedded in everyday business and consumer technology',
            'Evaluate common misconceptions about AI and articulate a reasoned business case for adoption',
            'Assess the current AI tool landscape and classify tools by their primary business application',
        ]
    },

    2: {
        intro: 'By the end of this module, learners will be able to:',
        outcomes: [
            'Apply the Role–Context–Task framework to construct effective AI prompts that produce business-ready outputs',
            'Demonstrate iterative prompting techniques to progressively refine AI responses',
            'Compare different prompt structures and evaluate their relative impact on output quality and relevance',
            'Create and document reusable prompt templates for at least three recurring business tasks',
        ]
    },

    3: {
        intro: 'By the end of this module, learners will be able to:',
        outcomes: [
            'Apply AI tools to generate, plan, and schedule marketing content aligned with brand guidelines',
            'Develop an AI-assisted content calendar tailored to a defined business and audience',
            'Analyse target audience characteristics to improve the relevance of AI-generated marketing outputs',
            'Evaluate AI-generated content for factual accuracy, tone, and brand alignment before publication',
        ]
    },

    4: {
        intro: 'By the end of this module, learners will be able to:',
        outcomes: [
            'Design AI-assisted outreach sequences appropriate to identified prospect types and sales contexts',
            'Apply AI tools to qualify, score, and prioritise sales leads based on defined criteria',
            'Create a lead magnet concept and outline using AI content generation tools',
            'Construct a personalised multi-touchpoint follow-up communication sequence using AI',
        ]
    },

    5: {
        intro: 'By the end of this module, learners will be able to:',
        outcomes: [
            'Map and document business processes that are suitable candidates for AI-assisted automation',
            'Implement at least one functional automation workflow using a no-code or low-code AI platform',
            'Calculate the projected time and cost savings achievable through identified process automations',
            'Develop a prioritised 90-day automation roadmap appropriate to a given business context',
        ]
    },

    6: {
        intro: 'By the end of this module, learners will be able to:',
        outcomes: [
            'Evaluate a range of specialised AI tools against specific business function requirements',
            'Select appropriate AI tools for a minimum of four defined business functions or departments',
            'Assess the financial cost-benefit of AI tool adoption using a structured framework',
            'Develop a personal AI toolkit mapped to their key business activities and priorities',
        ]
    },

    7: {
        intro: 'By the end of this module, learners will be able to:',
        outcomes: [
            'Formulate a structured 90-day AI implementation strategy with defined milestones and success metrics',
            'Identify key stakeholders and apply change management principles to AI adoption planning',
            'Develop measurable key performance indicators (KPIs) to track and evaluate AI implementation progress',
            'Construct a risk assessment and mitigation plan for AI adoption within a business context',
        ]
    },

};

// ── Pre-Course Needs Assessment ───────────────────────────────
const PRE_ASSESSMENT_QUESTIONS = [
    {
        id: 'role',
        question: 'What best describes your current role?',
        type: 'radio',
        options: ['Business Owner / Director', 'Manager / Team Leader', 'Marketing / Sales Professional', 'Consultant / Freelancer', 'Other Professional'],
    },
    {
        id: 'experience',
        question: 'How would you describe your current experience with AI tools?',
        type: 'radio',
        options: ['Complete beginner — I have never used AI tools', 'Curious — I have tried ChatGPT once or twice', 'Some experience — I use AI occasionally for tasks', 'Regular user — I use AI tools most days'],
    },
    {
        id: 'goal',
        question: 'What is your primary goal for taking this course?',
        type: 'radio',
        options: ['Save time on repetitive tasks', 'Improve my marketing and content', 'Generate more leads and sales', 'Automate business processes', 'Build a formal AI strategy for my organisation'],
    },
    {
        id: 'challenge',
        question: 'What is your biggest challenge in adopting AI in your business? (optional)',
        type: 'text',
        placeholder: 'e.g. Not sure where to start, concerned about cost, team resistance...',
    },
];

// ── Tutor / Author Profile ────────────────────────────────────
const TUTOR_PROFILE = {
    name:        '[Trainer Name]',       // ← replace with your name
    title:       'Lead AI Business Trainer, Penshaw View Training',
    credentials: '[Your qualifications and relevant experience]', // ← replace
    bio:         'Penshaw View Training specialises in professional development programmes for business owners and managers. Our AI for Business curriculum has been developed by practitioners with hands-on experience implementing AI across a range of industries including retail, professional services, hospitality, and marketing. All content is reviewed annually to reflect the rapidly evolving AI landscape.',
    contact:     'training@penshawview.co.uk',
};

// ── Policy Text ───────────────────────────────────────────────
const POLICY_TEXT = {

    accessibility: `
<h2>Accessibility Statement</h2>
<p class="policy-date">Last updated: June 2026</p>

<p>Penshaw View Training is committed to ensuring this course platform is accessible to all learners, including those with disabilities. We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.</p>

<h3>Measures we have taken</h3>
<ul>
  <li>All interactive elements are keyboard navigable</li>
  <li>Colour contrast ratios meet WCAG AA standards throughout</li>
  <li>All images include descriptive alt text</li>
  <li>The course includes AI voice narration to support auditory learners and those with reading difficulties</li>
  <li>Text size can be increased or decreased using the controls in the sidebar</li>
  <li>The platform supports both light and dark display modes</li>
  <li>Form fields include clear labels and placeholder guidance text</li>
  <li>ARIA roles and labels are used throughout to support screen readers</li>
</ul>

<h3>Known limitations</h3>
<ul>
  <li>The certificate canvas element may not be fully accessible to screen readers. A text-based alternative can be requested by emailing us.</li>
  <li>Some animated elements (waveform, loading bar) may cause issues for users with motion sensitivity. These can be disabled via your browser's "Reduce Motion" setting.</li>
</ul>

<h3>Requesting an accessible format</h3>
<p>If you require course content in an alternative format — large print, plain text, or audio — please contact us at <strong>training@penshawview.co.uk</strong> and we will respond within 5 working days.</p>

<h3>Feedback</h3>
<p>We welcome feedback on the accessibility of this platform. Please email <strong>training@penshawview.co.uk</strong> with the subject "Accessibility Feedback".</p>
`,

    complaints: `
<h2>Complaints & Feedback Procedure</h2>
<p class="policy-date">Last updated: June 2026</p>

<p>Penshaw View Training is committed to providing high-quality learning experiences. We take all complaints seriously and aim to resolve issues promptly and fairly.</p>

<h3>How to raise a complaint</h3>
<p>If you are dissatisfied with any aspect of this course — content quality, technical issues, assessment fairness, or customer service — please follow these steps:</p>

<ol>
  <li><strong>Step 1 — Informal resolution:</strong> Email us at <strong>training@penshawview.co.uk</strong> with "Complaint" in the subject line. Describe the issue clearly and include your name and the email address used for enrolment. We aim to acknowledge all complaints within 2 working days and resolve them within 10 working days.</li>
  <li><strong>Step 2 — Formal review:</strong> If you are not satisfied with our initial response, request a formal review by a senior manager. We will conduct a full review and respond in writing within 15 working days.</li>
  <li><strong>Step 3 — CPD body escalation:</strong> If your complaint relates to the CPD accreditation of this course and remains unresolved, you may escalate to the relevant CPD accreditation body.</li>
</ol>

<h3>Refund policy</h3>
<p>If you are unsatisfied with the course within 14 days of enrolment and have completed fewer than 20% of the lessons, you may request a full refund by emailing <strong>training@penshawview.co.uk</strong>.</p>

<h3>Assessment appeals</h3>
<p>If you believe your final assessment result is incorrect, you may request a review within 30 days of sitting the assessment. Email us with your name, enrolment email, and the specific questions you are disputing. All appeals are reviewed by a second assessor.</p>
`,

    privacy: `
<h2>Privacy Policy</h2>
<p class="policy-date">Last updated: June 2026</p>

<p>This privacy policy explains how Penshaw View Training collects, uses, and protects your personal data when you use this course platform.</p>

<h3>What data we collect</h3>
<ul>
  <li><strong>Account data:</strong> Name and email address when you register</li>
  <li><strong>Progress data:</strong> Lessons completed, assessment scores, time spent learning</li>
  <li><strong>Certificate data:</strong> Name as entered for your certificate, date of completion, certificate ID</li>
  <li><strong>Payment data:</strong> Processed securely by Stripe — we do not store card details</li>
  <li><strong>Feedback:</strong> Any responses to course feedback forms</li>
</ul>

<h3>How we use your data</h3>
<ul>
  <li>To provide access to the course and track your progress</li>
  <li>To generate and store your completion certificate</li>
  <li>To process your payment and provide receipts</li>
  <li>To send course-related communications (no marketing without consent)</li>
  <li>To improve the quality of our courses based on aggregated, anonymised usage data</li>
</ul>

<h3>Legal basis</h3>
<p>We process your data on the basis of contract performance (delivering the course you purchased) and legitimate interest (improving our services).</p>

<h3>Data retention</h3>
<p>Account and progress data is retained for 7 years to allow you to access your CPD record. You may request deletion at any time by emailing <strong>training@penshawview.co.uk</strong>.</p>

<h3>Your rights</h3>
<p>Under UK GDPR, you have the right to access, rectify, erase, and port your personal data. To exercise any of these rights, contact <strong>training@penshawview.co.uk</strong>.</p>

<h3>Third parties</h3>
<ul>
  <li><strong>Supabase:</strong> Database and authentication (EU data hosting)</li>
  <li><strong>Stripe:</strong> Payment processing (PCI-DSS compliant)</li>
  <li><strong>ElevenLabs:</strong> AI voice narration (text content only, no personal data)</li>
</ul>
`,

    about: `
<h2>About This Course</h2>

<div class="about-cpd-badge">
  <div class="cpd-badge-icon">🎓</div>
  <div>
    <div class="cpd-badge-title">CPD Accredited Course</div>
    <div class="cpd-badge-sub">3.5 CPD Hours · Structured Learning · Foundation/Intermediate</div>
  </div>
</div>

<h3>Course Overview</h3>
<p>The <strong>AI For Business Growth Masterclass</strong> is a professionally structured online learning programme designed to equip business owners, managers, and professionals with the practical skills and strategic knowledge to integrate artificial intelligence into their organisations effectively.</p>
<p>The course requires no prior technical knowledge and delivers immediate, actionable value from the first lesson.</p>

<h3>CPD Information</h3>
<table class="about-table">
  <tr><td>CPD Hours</td><td><strong>3.5 Hours</strong></td></tr>
  <tr><td>CPD Category</td><td>Structured Learning</td></tr>
  <tr><td>Level</td><td>Foundation / Intermediate</td></tr>
  <tr><td>Sector</td><td>Business, Management &amp; Leadership</td></tr>
  <tr><td>Delivery Method</td><td>Online, self-paced</td></tr>
  <tr><td>Assessment</td><td>Summative multiple-choice assessment (30 questions, 70% pass mark required)</td></tr>
  <tr><td>Prerequisites</td><td>None</td></tr>
  <tr><td>Provider</td><td>Penshaw View Training</td></tr>
  <tr><td>Course Version</td><td>1.0 (reviewed annually)</td></tr>
  <tr><td>Next Review Date</td><td>January 2027</td></tr>
</table>

<h3>Course Structure</h3>
<ul>
  <li><strong>Module 1:</strong> Introduction to AI in Business (30 min)</li>
  <li><strong>Module 2:</strong> Using ChatGPT Effectively (30 min)</li>
  <li><strong>Module 3:</strong> AI Marketing (25 min)</li>
  <li><strong>Module 4:</strong> Lead Generation with AI (25 min)</li>
  <li><strong>Module 5:</strong> Business Automation (25 min)</li>
  <li><strong>Module 6:</strong> AI Tools Every Business Should Know (30 min)</li>
  <li><strong>Module 7:</strong> Building Your AI Strategy (25 min)</li>
  <li><strong>Final Assessment:</strong> 30 multiple-choice questions (30 min)</li>
</ul>

<h3>Programme Resources</h3>
<ul>
  <li>AI Voice Narration for every lesson</li>
  <li>Key Takeaways summary for each lesson</li>
  <li>Action Worksheets for each module (printable)</li>
  <li>Business AI Prompt Library (70+ prompts, downloadable)</li>
  <li>Certificate of Completion with unique CPD reference number</li>
</ul>

<h3>About the Provider</h3>
<p>Penshaw View Training is a professional development organisation based in the North East of England, specialising in practical business skills training for SMEs and growing businesses. Our AI curriculum is developed by experienced business practitioners and reviewed annually to reflect the latest developments in AI technology and practice.</p>
<p><strong>Contact:</strong> training@penshawview.co.uk</p>
`,
};
