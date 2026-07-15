export const profile = {
  name: 'Mimisha Mittal',
  title: 'AI Product Manager | Enterprise SaaS | Product Strategy | AI Copilots',
  location: 'Sunnyvale, California',
  heroHeadline: 'Building AI products that help enterprises make smarter decisions.',
  heroSubtitle:
    'I’m an AI & Enterprise SaaS Product Manager with a software engineering background. I build AI copilots, enterprise analytics platforms, and customer-centric SaaS experiences that transform complex technical systems into products people love using.',
  ctas: ['View My Work', 'Download Resume', 'Connect with Me'],
  metrics: [
    { value: '90%', label: 'Reduction in outage-related support cases' },
    { value: '20%', label: 'Increase in SD-WAN to SASE conversion' },
    { value: '15%', label: 'Reduction in P0 issues through Early Access programs' },
    { value: '4+', label: 'Years building enterprise SaaS and AI products' }
  ]
}

export const about = {
  intro: "I'm an AI and Enterprise SaaS Product Manager with 4+ years of experience turning complex systems, customer signals, and business goals into products that deliver measurable outcomes.",
  story: [
    'Today I am a Product Manager 3 at HPE Aruba Networking, leading work across enterprise AI, analytics, SASE, pricing, governance, and customer experience. My products and programs have helped reduce outage-related support cases by 90%, convert 20% of an SD-WAN customer base to SASE, and reduce critical launch issues by 15%.',
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
    slug: 'ai-product-insights-copilot',
    title: 'AI Product Insights Copilot',
    category: 'Enterprise AI',
    description:
      'An AI Product Copilot that combines customer feedback, support cases, product analytics, and competitor research into one conversational interface for roadmap decisions.',
    tags: ['Enterprise AI', 'Generative AI', 'RAG', 'LangGraph'],
    techStack: ['LangGraph', 'RAG', 'Pinecone', 'Qwen', 'Fireworks AI', 'Python'],
    role: ['Product Strategy', 'AI Workflow Design', 'Product Requirements', 'UX', 'Evaluation Framework', 'Architecture Design'],
    features: ['Multi-source retrieval', 'Product analytics', 'Roadmap recommendations', 'Competitor analysis', 'Executive summaries', 'Citation-based responses'],
    outcome: 'Demonstrated how AI can dramatically reduce research time for product teams while improving confidence in roadmap decisions.',
    links: { caseStudy: '/case-studies/ai-product-insights-copilot', github: '#', demo: '#' }
  },
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
    slug: 'enterprise-product-analytics',
    title: 'Enterprise Product Analytics Initiative',
    category: 'Enterprise SaaS',
    description:
      'A cross-product analytics framework that standardized adoption, customer behavior, and revenue measurement across multiple enterprise products.',
    tags: ['Enterprise SaaS', 'Product Analytics'],
    techStack: ['Product Analytics', 'Enterprise SaaS', 'Strategy', 'Stakeholder Management'],
    role: ['Stakeholder Management', 'Product Analytics', 'Strategic Planning', 'Cross-functional Leadership', 'Requirements Gathering'],
    features: ['Adoption Metrics', 'Customer Insights', 'Product Usage', 'Revenue Metrics', 'Business KPIs', 'Product Telemetry', 'Executive Dashboards'],
    outcome: 'Helped leadership understand adoption and business performance across product lines with a more consistent measurement model.',
    links: { caseStudy: '/case-studies/enterprise-product-analytics' }
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
    description: 'Designed an automated reporting experience to identify appliances with expired licenses or missing check-ins before outages.',
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
    title: 'AI Product Management',
    items: ['RAG', 'Agentic AI', 'LangGraph', 'Prompt Engineering', 'AI Evaluation', 'LLM Applications', 'AI Product Strategy']
  },
  {
    title: 'Product Management',
    items: ['Product Discovery', 'Product Strategy', 'Roadmapping', 'Prioritization', 'Customer Research', 'Stakeholder Management']
  },
  {
    title: 'Enterprise SaaS',
    items: ['Product Analytics', 'Platform Products', 'Cloud Products', 'Enterprise Networking', 'Customer Insights']
  },
  {
    title: 'Technical',
    items: ['Python', 'SQL', 'GitHub', 'Pinecone', 'Neo4j', 'REST APIs', 'LLMs', 'Fireworks AI']
  }
]

export const experience = [
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Product Manager 3 · HPE Aruba Networking',
    date: 'May 2022 – Present',
    summary: 'Leading AI-powered enterprise networking initiatives across AI copilots, analytics, AI governance, pricing strategy, customer insights, and SaaS experiences.',
    bullets: ['AI copilots and analytics', 'Product strategy and pricing', 'AI governance and legal collaboration', 'Cross-functional product leadership', 'Customer beta and early access programs']
  },
  {
    company: 'Wipro',
    role: 'Software Engineer',
    date: '2019 – 2021',
    summary: 'Worked on Cisco enterprise networking products, handling customer issues, code reviews, and delivery across multiple client projects.',
    bullets: ['Cisco networking products', 'Customer issue resolution', 'Code reviews and delivery tracking', 'Software engineering foundation']
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

export const contact = {
  headline: 'Let’s build products that make complex technology feel simple.',
  description: 'I’m always interested in connecting with people working in AI Product Management, Enterprise SaaS, AI startups, and technology for social impact.',
  location: 'Sunnyvale, California',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mimisha-mittal' },
    { label: 'GitHub', href: 'https://github.com/mimisha-blip' },
    { label: 'Resume', href: './Mimisha-Mittal-Resume.pdf' },
    { label: 'Email', href: 'mailto:mimishamittal@gmail.com' }
  ]
}

export const caseStudies = [
  {
    slug: 'ai-product-insights-copilot',
    title: 'AI Product Insights Copilot',
    eyebrow: 'Enterprise AI · Product Strategy · RAG',
    overview: 'A conversational AI product copilot for enterprise product teams that turns fragmented data into grounded roadmap recommendations.',
    problem: 'Product teams were spending hours gathering information from support, analytics, Jira, and competitor research, which slowed prioritization and made evidence harder to trust.',
    users: 'Product managers, directors, and executives in enterprise product organizations.',
    whyItMatters: 'Roadmap decisions depend on connecting customer pain points with product usage and market signals; disconnected systems make that work slow and inconsistent.',
    role: 'Product strategy, workflow design, UX, architecture, evaluation framework.',
    research: 'Interviewed PMs and partnered with support, analytics, and engineering to map the information needs behind roadmap decisions.',
    productDecisions: 'Built a retrieval-first experience with evidence-backed responses, role-specific summaries, and human-in-the-loop review for recommendations.',
    tradeoffs: 'Prioritized grounded answers over broad automation, and limited scope to high-confidence evidence retrieval early on.',
    solution: 'A multi-source retrieval experience that answers natural-language questions and surfaces citations for product and roadmap decisions.',
    architecture: 'LangGraph orchestrated retrieval across product data sources, with Pinecone and Qwen/Fireworks AI powering retrieval and generation steps.',
    evaluation: 'Used citation checks, task accuracy, and PM review feedback to refine the experience and reduce hallucinated recommendations.',
    metrics: ['Reduced research time for roadmap planning', 'Improved confidence in recommendation quality', 'Created a repeatable AI workflow for PM teams'],
    outcome: 'Demonstrated a practical AI workflow that helps enterprise product teams make faster, better-informed decisions.',
    learned: 'The value of AI products is highest when the experience is grounded in trusted data and designed around a real decision workflow.',
    nextSteps: 'Expand to more source systems and stronger executive summaries for broader rollout.'
  },
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
    slug: 'enterprise-product-analytics',
    title: 'Enterprise Product Analytics Initiative',
    eyebrow: 'Enterprise SaaS · Product Analytics · Strategy',
    overview: 'A standardized measurement strategy that helps product teams and leaders understand adoption, behavior, and business performance across product lines.',
    problem: 'Different product teams measured success differently, making cross-product adoption and business performance difficult for leadership to understand.',
    users: 'Enterprise product managers, product leaders, and executive stakeholders.',
    whyItMatters: 'Shared definitions and consistent telemetry are essential for comparing performance and making sound portfolio decisions.',
    role: 'Stakeholder management, product analytics, strategic planning, cross-functional leadership, and requirements gathering.',
    research: 'Interviewed product managers across multiple enterprise products to identify their most important business and product questions.',
    productDecisions: 'Organized the framework around adoption, customer insight, usage, revenue, business KPIs, telemetry, and executive reporting.',
    tradeoffs: 'Balanced product-specific measurement needs with a core set of metrics that could remain consistent across the portfolio.',
    solution: 'A cross-product analytics framework and standardized measurement strategy for enterprise product teams.',
    architecture: 'The initiative defined common metric requirements, product telemetry inputs, and executive dashboard outputs across product lines.',
    evaluation: 'Reviewed metric definitions and reporting needs with product stakeholders to establish usefulness and cross-product consistency.',
    metrics: ['Shared adoption definitions', 'Consistent business KPI framework', 'Clearer executive reporting requirements'],
    outcome: 'Established a more consistent foundation for understanding product adoption, customer behavior, and business performance.',
    learned: 'Analytics programs succeed when teams align on the decisions a metric should inform before debating tools or dashboards.',
    nextSteps: 'Operationalize the shared definitions through telemetry standards and portfolio-level dashboards.'
  }
]
