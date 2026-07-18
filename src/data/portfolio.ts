export const profile = {
  name: 'Mimisha Mittal',
  title: 'AI & Enterprise SaaS Product Manager | Product Strategy | Analytics',
  location: 'Sunnyvale, California',
  heroHeadline: 'Building AI and enterprise products that turn complexity into clear decisions.',
  heroSubtitle:
    'I’m a Product Manager with 4+ years of experience across enterprise SaaS, AI, analytics, and networking. I lead products from customer discovery and strategy through requirements, launch, and adoption—bringing an engineering foundation and an MBA in Business Analytics to every decision.',
  ctas: ['View My Work', 'Download Resume', 'Connect with Me'],
  metrics: [
    { value: '500+', label: 'Enterprise customers covered by AI governance work' },
    { value: '20%', label: 'Increase in SD-WAN to SASE conversion' },
    { value: '15%', label: 'Reduction in P0 issues through Early Access programs' },
    { value: '4+', label: 'Years building enterprise SaaS and AI products' }
  ]
}

export const about = {
  intro: "I'm an AI and Enterprise SaaS Product Manager with 4+ years of experience turning complex systems, customer signals, and business goals into products that deliver measurable outcomes.",
  story: [
    'Today I am a Product Manager 3 at HPE Aruba Networking, leading work across enterprise AI, analytics, SASE, pricing, governance, and customer experience. I connect product telemetry, customer feedback, and commercial insights to shape product direction, adoption strategy, and roadmap decisions.',
    'My edge is that I think in systems and tradeoffs, not isolated features. I started as a software engineer working on Cisco enterprise products, so I can reason through dependencies, telemetry, failure modes, and implementation constraints with engineering, then connect those decisions to customer value, adoption, and business strategy.',
    'I prototype to learn, not only to present. I have designed AI copilots that unify customer feedback and operational data, built functional concepts for conversational enterprise experiences, and created RAG and agentic AI workflows through side projects and hackathons. An MBA in Business Analytics helps me pair that technical depth with evidence-based product strategy.'
  ],
  principles: [
    { title: 'Find the real problem', description: 'I separate symptoms from root causes, test assumptions, and define the customer and business decision that needs to improve before proposing a feature.' },
    { title: 'Reason with evidence', description: 'I connect customer feedback, telemetry, market context, and commercial data so priorities are explainable rather than driven by the loudest signal.' },
    { title: 'Make strategy buildable', description: 'I understand technical dependencies, ask precise questions, prototype when useful, and translate product intent into decisions engineering teams can execute.' }
  ],
  interests: [
    'Building AI prototypes and participating in hackathons',
    'Teaching, mentoring, and supporting early-stage founders',
    'Technology for social impact and community service',
    'Sketching, painting, poetry, and dance',
    'Running, wellness, and hot yoga'
  ],
  community: 'I have supported startup founders through the University of San Francisco Startup Club, led wellness workshops for underprivileged adolescent girls, taught children, and helped raise more than $10,000 for cancer patients.'
}

export const featuredProjects = [
  {
    slug: 'ai-canvas',
    title: 'AI Canvas',
    category: 'Enterprise AI',
    description:
      'An AI-powered experience that enables enterprise networking customers to interact with operational data using natural language instead of navigating multiple dashboards.',
    tags: ['Enterprise AI', 'Product Strategy'],
    techStack: ['AI Copilot', 'Enterprise SaaS', 'Product Strategy', 'Analytics'],
    role: ['Product Strategy', 'User Research', 'Prototype Design', 'Executive Presentations', 'Cross-functional Leadership'],
    outcome: 'Successfully demonstrated the concept internally and received strong leadership feedback for future AI-powered experiences.',
    links: { caseStudy: '/case-studies/ai-canvas' },
    ndaSafe: true
  },
  {
    slug: 'pantry-buddy',
    title: 'Pantry Buddy',
    category: 'DigitalOcean Hackathon',
    description:
      'A hackathon-built AI platform that helps food pantry volunteers manage inventory and helps community members find available food nearby.',
    tags: ['DigitalOcean Hackathon', 'AI for Social Good', 'Neo4j', 'Computer Vision'],
    techStack: ['DigitalOcean', 'Neo4j', 'Computer Vision', 'OCR', 'LLMs', 'Voice AI', 'Maps'],
    role: ['Product Strategy', 'User Research', 'Feature Prioritization', 'UX Design', 'Product Pitch', 'Demo Storytelling'],
    features: ['Product detection', 'Expiration-date reading', 'Inventory tracking', 'Shortage prediction', 'Stock-transfer suggestions', 'Nearby food availability'],
    outcome: 'Showcased how AI can drive operational efficiency while supporting social impact initiatives.',
    links: {
      caseStudy: '/case-studies/pantry-buddy',
      github: 'https://github.com/mimisha-blip/mimisha-blip.github.io',
      devpost: 'https://devpost.com/software/pantry-buddy-2zo5kn'
    }
  },
  {
    slug: 'ai-product-intelligence-copilot',
    title: 'AI Product Intelligence Copilot',
    category: 'Enterprise Product Analytics',
    description:
      'A RAG and LangGraph copilot that turns customer feedback, support cases, Jira, usage analytics, and competitor signals into evidence-backed roadmap recommendations.',
    tags: ['Product Analytics', 'RAG', 'LangGraph', 'Evidence-backed AI'],
    techStack: ['Python', 'LangGraph', 'Pinecone', 'Fireworks AI', 'Qwen', 'Sentence Transformers', 'Streamlit'],
    role: ['Product Strategy', 'AI Workflow Design', 'Architecture', 'Prioritization Logic', 'Prototype Development'],
    features: ['Pain Point Analysis', 'Feature Prioritization', 'Competitor Analysis', 'Roadmap Generation', 'Retrieved Evidence', 'Product-area Scoring'],
    outcome: 'Built a working product-strategy workflow that ranks product areas and explains recommendations using retrieved evidence rather than unsupported AI output.',
    cover: './product-intelligence/copilot-interface.png',
    links: {
      caseStudy: '/case-studies/ai-product-intelligence-copilot',
      github: 'https://github.com/mimisha-blip/Product-intelligence-copilot'
    }
  }
]

export const otherProjects = [
  {
    name: 'Cross Region AI Governance',
    description: 'Defined governance for data residency, de-identification, and cross-region inference across enterprise AI deployments.',
    category: 'AI and Product',
    tags: ['AI Governance', 'Legal', 'Enterprise AI']
  },
  {
    name: 'What’s New Product Experience',
    description: 'Designed an in-product release experience that surfaces new capabilities directly inside the application.',
    category: 'Enterprise Product Management',
    tags: ['Product Experience', 'UX', 'Release Management']
  },
  {
    name: 'Appliance Health Reporting',
    description: 'Designed an automated reporting experience that turns appliance health, license status, and check-in telemetry into proactive customer insights.',
    category: 'Strategy and Analytics',
    tags: ['Analytics', 'Automation', 'Customer Outcomes']
  },
  {
    name: 'Competitive Pricing Strategy',
    description: 'Led competitive pricing analysis across networking vendors to improve strategy and identify new opportunities.',
    category: 'Strategy and Analytics',
    tags: ['Pricing', 'Market Strategy', 'Enterprise SaaS']
  },
  {
    name: 'Early Access Program',
    description: 'Improved early access workflows to reduce critical issues before general availability.',
    category: 'Hackathons and Experiments',
    tags: ['Customer Beta', 'Product Launch', 'Experimentation']
  }
]

export const capabilities = [
  {
    title: 'Customer-first product thinking',
    description: 'I turn ambiguous customer problems into clear product strategy, focused requirements, and prioritized roadmaps.'
  },
  {
    title: 'AI product expertise',
    description: 'I build and prototype with LLMs, RAG, and agentic workflows so teams can validate value, quality, and risk before scaling development.'
  },
  {
    title: 'Technical depth',
    description: 'My software engineering background helps me partner deeply on architecture, dependencies, feasibility, and technical tradeoffs.'
  },
  {
    title: 'Data-driven decisions',
    description: 'I connect product analytics, customer feedback, telemetry, and experiments to guide priorities and define meaningful success measures.'
  },
  {
    title: 'Cross-functional leadership',
    description: 'I align Engineering, Design, Legal, Marketing, Sales, Support, and customers around product direction and execution.'
  },
  {
    title: 'Bias for action',
    description: 'I thrive in ambiguity, move quickly from insight to prototype, and focus teams on customer and business outcomes.'
  },
  {
    title: 'Ownership mindset',
    description: 'I take products from discovery through launch and adoption, balancing customer needs, business goals, and technical feasibility.'
  }
]

export const experience = [
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Product Manager 3 · HPE Aruba Networking',
    date: 'May 2022 – Present',
    summary: 'Leading enterprise product work across AI copilots, product intelligence, analytics, SASE adoption, governance, pricing, and customer experience.',
    bullets: [
      'Created product-intelligence workflows connecting customer feedback, support, feature adoption, and operational telemetry to roadmap decisions',
      'Partnered with Legal and Engineering on AI governance and consent workflows supporting 500+ enterprise customers',
      'Designed a SASE adoption program that converted 20% of an SD-WAN customer base within two quarters',
      'Built an Early Adopters program that reduced critical issues by 15% across three releases',
      'Led competitive pricing, product analytics reviews, and cross-functional product strategy'
    ]
  },
  {
    company: 'Genesys · City of Berkeley',
    role: 'MBA Consulting Engagements',
    date: 'Spring – Fall 2022',
    summary: 'Applied business analytics and product strategy to customer growth and public-sector healthcare challenges.',
    bullets: [
      'Segmented Genesys Cloud CX customers by contract-value behavior to identify adoption and growth signals',
      'Used qualitative and quantitative analysis to identify investors supporting lower-cost emergency healthcare for the City of Berkeley'
    ]
  },
  {
    company: 'Wipro',
    role: 'Software Engineer',
    date: '2019 – 2021',
    summary: 'Worked on Cisco enterprise networking products, handling customer issues, code reviews, and delivery across multiple client projects.',
    bullets: [
      'Enhanced Cisco enterprise networking products across four client projects',
      'Handled customer issues, technical troubleshooting, code reviews, and delivery tracking',
      'Built the systems-thinking foundation I now bring to product architecture and technical tradeoffs'
    ]
  }
]

export const education = [
  'MBA in Business Analytics · University of San Francisco · 2023',
  'B.Tech in Computer Science and Engineering · GLA University · 2019'
]

export const writing = [
  'Building an AI Product Copilot with LangGraph',
  'Lessons from Building Enterprise AI Products',
  'How Product Managers Should Evaluate RAG Applications',
  'AI Governance for Enterprise Products',
  'Building AI for Social Good'
]

export const productThinking = [
  {
    title: 'Start with the customer problem',
    description: 'I separate the visible request from the underlying job, friction, and decision the customer is trying to make.'
  },
  {
    title: 'Understand the system',
    description: 'I map users, workflows, data, dependencies, incentives, and constraints before deciding where a product intervention belongs.'
  },
  {
    title: 'Choose the tradeoff deliberately',
    description: 'I make scope, speed, quality, cost, risk, and technical feasibility explicit so the team understands why a direction was chosen.'
  },
  {
    title: 'Use evidence to prioritize',
    description: 'Customer feedback, product analytics, telemetry, market context, and business goals work together to shape the roadmap.'
  },
  {
    title: 'Prototype before scaling',
    description: 'I use focused prototypes to test value, workflow, AI behavior, and usability before committing broader engineering investment.'
  },
  {
    title: 'Define success and learn',
    description: 'I connect each product bet to measurable customer and business outcomes, then use what we learn to improve the next decision.'
  }
]

export const contact = {
  headline: 'Let’s build products that make complex technology feel simple.',
  description: 'I’m always interested in connecting with people working in AI Product Management, Enterprise SaaS, AI startups, and technology for social impact.',
  location: 'Sunnyvale, California',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mimisha-mittal/' },
    { label: 'Resume', href: './Mimisha-Mittal-Resume.pdf' },
    { label: 'mimishamittal@gmail.com', href: 'mailto:mimishamittal@gmail.com' }
  ]
}

export const caseStudies = [
  {
    slug: 'ai-canvas',
    title: 'AI Canvas',
    eyebrow: 'Enterprise AI · Product Strategy',
    overview: 'A role-based AI experience that transforms enterprise monitoring into a conversational decision experience for networking leaders.',
    problem: 'Customers were navigating multiple dashboards to understand network health, risk, and performance, which made insights harder to surface quickly.',
    users: 'Executives, security leaders, and network administrators.',
    whyItMatters: 'Operational decision-making requires fast access to clear signals across health, usage, and risk.',
    role: 'Product strategy, user research, prototyping, executive presentations, cross-functional leadership.',
    research: 'Interviewed customers and internal stakeholders to map the most valuable questions for each role.',
    productDecisions: 'Focused on role-specific insights and simple natural-language interaction rather than a broad dashboard replacement.',
    tradeoffs: 'Balanced ambition with a narrow initial use case centered on decision support rather than full autonomous operations.',
    solution: 'A conversational insights experience that surfaces network health, risk, usage, and recommendations through role-based AI interactions.',
    architecture: 'A lightweight AI experience layered on top of product telemetry and structured operational data.',
    evaluation: 'Validated via internal demos and leadership feedback, with a strong signal for future investment.',
    metrics: ['Internal concept demo', 'High leadership interest', 'Strong foundation for future AI experiences'],
    outcome: 'Created an early concept that demonstrated clear strategic value and informed the next generation of AI product experiences.',
    learned: 'Enterprise AI products gain traction when the experience is aligned to a concrete decision workflow and role context.',
    nextSteps: 'Expand this into more product-specific workflows and deeper integrations.'
  },
  {
    slug: 'pantry-buddy',
    title: 'Pantry Buddy',
    eyebrow: 'DigitalOcean Hackathon · AI for Social Good · Neo4j',
    overview: 'A DigitalOcean hackathon project that helps food pantry volunteers manage donations, reduce waste, and connect community members with available food.',
    problem: 'Food pantries often manage inventory manually, contributing to expired inventory, food waste, and inefficient operations.',
    users: 'Food pantry volunteers, pantry operators, and community members looking for available food.',
    whyItMatters: 'Better inventory visibility helps community organizations direct limited resources where they can have the greatest impact.',
    role: 'Product strategy, user research, feature prioritization, UX design, product pitch, and demo storytelling.',
    research: 'Focused the hackathon discovery on manual inventory workflows, expiration tracking, and the difficulty community members face when trying to find available food.',
    productDecisions: 'Centered the experience on a simple photo-based intake flow, then used voice and maps to make information accessible in different contexts.',
    tradeoffs: 'Focused the concept on volunteer efficiency and actionable recommendations while keeping human review in the inventory workflow.',
    solution: 'Volunteers photograph donated food and the system detects products, reads expiration dates, tracks inventory, predicts shortages, and suggests transfers.',
    architecture: 'Computer vision, OCR, LLM, voice, map, and Neo4j capabilities were combined on DigitalOcean to support the end-to-end workflow.',
    evaluation: 'Evaluated the concept through workflow completeness, demo feedback, and its ability to turn a donation photo into useful inventory actions.',
    metrics: ['Faster donation intake', 'Earlier visibility into expiring inventory', 'More informed stock-transfer decisions'],
    outcome: 'Built and submitted a working multi-user AI platform for the DigitalOcean hackathon, covering volunteer intake, pantry operations, and community food discovery.',
    learned: 'AI has the most practical value in community settings when it reduces manual work and fits naturally into existing volunteer workflows.',
    nextSteps: 'Validate with pantry operators and test product recognition and expiration-date accuracy in real donation environments.',
    media: {
      hero: './pantrygraph/dashboard.png',
      video: './pantrygraph/demo.mp4',
      github: 'https://github.com/mimisha-blip/mimisha-blip.github.io',
      devpost: 'https://devpost.com/software/pantry-buddy-2zo5kn'
    },
    customSections: [
      {
        title: 'Inspiration',
        body: 'Food pantries often rely on spreadsheets and paper records, while community members struggle to know where needed items are available. We wanted to reduce that friction for both groups.'
      },
      {
        title: 'What it does',
        body: 'Volunteers photograph donations to update inventory. Pantry operators track stock, expiration dates, and locations, while community members use text or voice to find nearby food.'
      },
      {
        title: 'How we built it',
        body: 'DigitalOcean hosts the application, Neo4j connects pantries, inventory, and locations, and computer vision, OCR, an LLM, and interactive maps power the user workflows.'
      },
      {
        title: 'Challenges',
        body: 'The hardest part was choosing a meaningful problem that was practical within a hackathon, then making complex AI and map interactions intuitive for very different users.'
      },
      {
        title: 'Accomplishments',
        body: 'We built a working platform spanning photo-based inventory intake, expiration tracking, conversational pantry search, and a citywide view of food availability.'
      },
      {
        title: 'What we learned',
        body: 'The strongest AI products begin with a real human need. Small workflow improvements can save volunteer time, reduce food waste, and help someone find food faster.'
      },
      {
        title: 'What’s next',
        body: 'Next steps include demand prediction, expiration alerts, inventory redistribution, multilingual voice support, and integrations with food banks and donation partners.'
      }
    ]
  },
  {
    slug: 'ai-product-intelligence-copilot',
    title: 'AI Product Intelligence Copilot',
    eyebrow: 'Product Analytics · RAG · LangGraph · Enterprise AI',
    overview: 'A product intelligence copilot that synthesizes fragmented B2B SaaS signals into grounded feature priorities, competitor insights, and roadmap recommendations.',
    problem: 'Product managers spend significant time reconciling customer feedback, support cases, Jira tickets, usage data, and competitor research before they can make or defend a roadmap decision.',
    users: 'Product managers and product leaders who need faster, evidence-backed prioritization and roadmap decisions.',
    whyItMatters: 'When signals live across disconnected tools, recurring pain points are easy to miss and product bets become harder to explain to engineering and leadership.',
    role: 'Product strategy, workflow design, architecture, prioritization logic, prototype development, and recommendation design.',
    research: 'Modeled realistic SignalDesk B2B SaaS datasets across five sources and centered the workflow on questions PMs repeatedly ask about pain points, priorities, competitors, and quarterly roadmaps.',
    productDecisions: 'Used retrieval before generation, displayed supporting sources in the UI, and calculated product-area priority scores before asking the LLM to explain a recommendation.',
    tradeoffs: 'The prototype uses realistic mock data to demonstrate the complete workflow safely. It prioritizes grounded recommendations and transparent evidence over broad autonomous decision making.',
    solution: 'A Streamlit copilot that answers product-strategy questions, ranks priorities, generates roadmap recommendations, and shows the retrieved evidence behind each response.',
    architecture: 'CSV product signals are converted into documents, embedded with Sentence Transformers, stored and retrieved through Pinecone, routed with LangGraph, and synthesized by Qwen through Fireworks AI.',
    evaluation: 'The repository includes unit tests and a roadmap for formal retrieval-quality, grounding, and configurable scoring evaluations.',
    metrics: ['Five product-signal sources', 'Evidence displayed with recommendations', 'Product-area scoring before LLM explanation'],
    outcome: 'Built an end-to-end RAG application that demonstrates how PMs can move from fragmented signals to explainable roadmap decisions in one workflow.',
    learned: 'AI recommendations are more useful when retrieval, scoring, and explanation are separate, inspectable steps rather than one opaque prompt.',
    nextSteps: 'Connect real source systems, add authentication and saved workspaces, support configurable scoring weights, persist evidence snapshots, and expand evaluation coverage.',
    cover: {
      src: './product-intelligence/copilot-interface.png',
      alt: 'Concept interface for the AI Product Intelligence Copilot showing feature priorities and retrieved evidence',
      caption: 'Concept interface based on the implemented retrieval, scoring, and recommendation workflow.'
    },
    repository: 'https://github.com/mimisha-blip/Product-intelligence-copilot'
  }
]
