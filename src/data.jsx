export const SERVICES = [
  {
    id: "01",
    title: "Full-Stack Development",
    tagline: "Scalable frontend and backend architecture",
    description: "Modern web applications using scalable frontend and backend architecture. We build high-throughput, cloud-ready platforms designed for speed, resilience, and security.",
    icon: "Layers",
    capabilities: [
      "Modern React & Next.js architectures",
      "High-throughput Node.js & Go backends",
      "RESTful & GraphQL API design",
      "Distributed database modeling"
    ]
  },
  {
    id: "02",
    title: "Mobile App Development",
    tagline: "High-performance native and cross-platform apps",
    description: "High-performance mobile applications designed for modern users. Intuitive interfaces with fluid 60 FPS transitions, offline-first sync, and native device capabilities.",
    icon: "Smartphone",
    capabilities: [
      "Cross-platform React Native & Flutter",
      "Native iOS & Android performance tuning",
      "Real-time push notifications & sync",
      "Biometric security & offline cache"
    ]
  },
  {
    id: "03",
    title: "AI & Automation",
    tagline: "Intelligent workflows and business intelligence",
    description: "AI-powered workflows, intelligent assistants, automation, and business intelligence. We embed intelligence directly into your everyday operations to eliminate human bottlenecks.",
    icon: "Cpu",
    capabilities: [
      "Custom LLM & agent orchestration",
      "Intelligent document parsing & OCR",
      "Predictive analytics & forecasting",
      "Autonomous RPA workflow pipelines"
    ]
  },
  {
    id: "04",
    title: "SaaS Product Development",
    tagline: "From MVP to enterprise recurring software",
    description: "Scalable SaaS platforms with authentication, dashboards, subscriptions, APIs, and analytics. Multi-tenant architectures engineered to handle zero-to-million scale.",
    icon: "Cloud",
    capabilities: [
      "Multi-tenant data isolation",
      "Stripe & recurring billing integration",
      "Granular RBAC permission hierarchies",
      "Self-serve customer onboarding"
    ]
  },
  {
    id: "05",
    title: "CRM & Business Management",
    tagline: "Custom operational software tailored to your workflows",
    description: "Custom CRM, invoicing, customer management, employee management, and business automation systems built to replace bloated, fragmented off-the-shelf software.",
    icon: "Briefcase",
    capabilities: [
      "Unified customer timeline & pipeline",
      "Automated quote-to-invoice generation",
      "Role-based employee portal",
      "Omnichannel communication hub"
    ]
  },
  {
    id: "06",
    title: "Custom Software",
    tagline: "Precision engineered for proprietary business needs",
    description: "Software designed around the specific requirements of your business. When existing commercial tools fall short, we build proprietary IP that becomes your competitive moat.",
    icon: "Code2",
    capabilities: [
      "Bespoke internal operations tooling",
      "Legacy system modernization",
      "High-volume data processing engines",
      "Custom hardware & IoT integrations"
    ]
  }
];

export const TECHNOLOGIES = [
  { name: "React.js", category: "Frontend", desc: "Component-driven interactive web interfaces with high performance" },
  { name: "Node.js", category: "Backend", desc: "Non-blocking, event-driven server runtime for fast APIs" },
  { name: "Express.js", category: "Backend", desc: "Minimalist, robust web framework for scalable REST services" },
  { name: "MongoDB", category: "Database", desc: "Flexible document database for modern cloud-native apps" },
  { name: "MySQL", category: "Database", desc: "ACID-compliant relational database for transactional integrity" },
  { name: "Java", category: "Enterprise", desc: "High-performance, secure backend architecture for enterprise scale" },
  { name: "Python", category: "AI / Data", desc: "Data processing, machine learning models, and automation scripts" },
  { name: "JavaScript", category: "Language", desc: "Universal web programming language for client and server" },
  { name: "React Native", category: "Mobile", desc: "Native iOS and Android apps powered by single codebase" },
  { name: "Electron", category: "Desktop", desc: "Cross-platform desktop applications with web technologies" },
  { name: "REST APIs", category: "Architecture", desc: "Standardized, secure communication protocols and microservices" },
  { name: "JWT", category: "Security", desc: "Stateless, cryptographic authentication tokens and session security" },
  { name: "Docker", category: "DevOps", desc: "Containerized environments ensuring identical dev and production runtimes" },
  { name: "Git", category: "Workflow", desc: "Distributed version control and streamlined CI/CD pipelines" },
  { name: "AI", category: "Intelligence", desc: "Generative AI, LLM agents, vector embeddings, and machine learning" }
];

export const PROJECTS = [
  {
    id: "apex-ai",
    name: "ApexAnalytics AI",
    category: "SaaS / AI",
    tag: "AI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    shortDesc: "Automated business intelligence platform synthesizing data streams into predictive revenue models.",
    tech: "React • Node • Python • MongoDB",
    fullDesc: "ApexAnalytics is a next-generation SaaS platform that aggregates cross-departmental telemetry data, detects anomalies in real-time, and generates executive summaries using fine-tuned AI models.",
    metrics: ["42% reduction in report generation time", "99.98% processing reliability", "10M+ daily events analyzed"]
  },
  {
    id: "omniflow-crm",
    name: "OmniFlow Enterprise CRM",
    category: "CRM / Business",
    tag: "CRM",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    shortDesc: "Unified customer management, deal pipelines, and automated contract generation for B2B enterprises.",
    tech: "React • Express • MySQL • JWT",
    fullDesc: "OmniFlow replaces fragmented spreadsheets and legacy CRMs with a lightning-fast interface, automated follow-up sequences, and deep email/calendar synchronization.",
    metrics: ["3.4x faster lead turnaround", "450k active contact records", "Seamless multi-tier access control"]
  },
  {
    id: "cognibot-orchestrator",
    name: "CogniBot Automation Hub",
    category: "Automation / AI",
    tag: "Automation",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    shortDesc: "Low-latency autonomous agent workflow engine handling compliance, triage, and data extraction.",
    tech: "Python • Node • AI • Docker",
    fullDesc: "Built for financial and healthcare compliance, CogniBot processes incoming documents, verifies regulatory criteria, and synchronizes with legacy internal databases without human intervention.",
    metrics: ["88% faster document processing", "Zero security discrepancies", "24/7 automated operations"]
  },
  {
    id: "pulsefit-mobile",
    name: "PulseFit Companion",
    category: "Mobile Application / SaaS",
    tag: "Mobile Application",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    shortDesc: "Real-time biometric tracking, habit accountability, and personalized AI coaching on iOS and Android.",
    tech: "React Native • Node • MongoDB",
    fullDesc: "PulseFit connects seamlessly with wearable sensors to provide actionable biometric analytics, adaptive training regimens, and real-time community challenges.",
    metrics: ["4.9 Star App Store Rating", "120,000 active monthly users", "Offline-first sync capability"]
  },
  {
    id: "edustream-lxp",
    name: "EduStream Learning Cloud",
    category: "Web Application / Education",
    tag: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    shortDesc: "Interactive virtual classroom suite with real-time video, collaborative whiteboards, and student analytics.",
    tech: "React.js • Node • Express • REST APIs",
    fullDesc: "EduStream empowers educational academies and corporate training centers with ultra-low latency interactive lectures, automated assessments, and student progress telemetry.",
    metrics: ["Sub-100ms streaming latency", "45,000 concurrent students", "Integrated homework grading engine"]
  },
  {
    id: "paysphere-ledger",
    name: "PaySphere Invoicing & Ledger",
    category: "Business Management / SaaS",
    tag: "Business",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    shortDesc: "Multi-currency invoicing, recurring billing subscriptions, and tax compliance automation.",
    tech: "React • MySQL • REST APIs • JWT",
    fullDesc: "PaySphere simplifies treasury and billing for international service providers with automated multi-currency reconciliation, automated payment reminders, and instant tax compliance reports.",
    metrics: ["$24M+ monthly volume processed", "14 global currencies supported", "Automated bank reconciliation"]
  }
];

export const CORE_VALUES = [
  { name: "Innovation", desc: "Pushing boundaries with modern AI, cloud paradigms, and forward-looking system designs." },
  { name: "Quality", desc: "Architectural rigor, clean maintainable codebases, and relentless attention to UX detail." },
  { name: "Scalability", desc: "Foundations engineered to transition effortlessly from initial pilot to millions of users." },
  { name: "Simplicity", desc: "Translating sophisticated multi-layered technology into clean, intuitive experiences." },
  { name: "Reliability", desc: "Dependable uptime, high fault tolerance, and zero-compromise enterprise security." },
  { name: "Continuous Learning", desc: "Constantly evolving with cutting-edge tools, frameworks, and engineering standards." }
];

export const WHY_US_CARDS = [
  {
    title: "Modern Engineering",
    desc: "Clean architecture and scalable technologies designed for maintainability and high concurrency.",
    icon: "Code2"
  },
  {
    title: "Product Thinking",
    desc: "We focus on solving the actual business problem, not just writing code that looks good on paper.",
    icon: "Target"
  },
  {
    title: "AI-Ready Solutions",
    desc: "Automation and intelligence are built directly into modern workflows rather than tacked on as an afterthought.",
    icon: "Sparkles"
  },
  {
    title: "Scalable Architecture",
    desc: "Systems designed to grow with your business from day one, minimizing technical debt and refactors.",
    icon: "TrendingUp"
  },
  {
    title: "User-Centered Design",
    desc: "Technology should be powerful and easy to use. We prioritize clarity, rhythm, and intuitive user journeys.",
    icon: "Users"
  },
  {
    title: "Long-Term Support",
    desc: "The goal is to build technology that can evolve alongside your enterprise through continuous iterations.",
    icon: "ShieldCheck"
  }
];

export const PROCESS_STAGES = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understanding your vision and defining the strategic roadmap.",
    details: "Deep dive into business goals, technical feasibility, user personas, and product scope definition."
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Architectural blueprints and interactive UI/UX prototyping.",
    details: "System data models, API schemas, design tokens, responsive wireframes, and interactive clickable prototypes."
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "High-velocity, clean, component-based implementation.",
    details: "Modern frontend and backend development with CI/CD integration, modular code, and secure authentication."
  },
  {
    step: "04",
    title: "Test",
    subtitle: "Rigorous quality assurance, security, and load testing.",
    details: "Automated test suites, penetration testing, performance benchmarking, and edge-case validation."
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Production deployment, telemetry monitoring, and scaling.",
    details: "Zero-downtime containerized release, error tracking, infrastructure scaling, and ongoing support."
  }
];

export const CAREER_ROLES = [
  {
    title: "Frontend Development Intern",
    type: "Internship Provided (3-6 Months)",
    location: "Remote / Hybrid",
    stipend: "Performance Stipend + Certificate Provided",
    skills: "React.js • TypeScript • Tailwind CSS • Motion UI",
    desc: "Hands-on internship building real-world responsive web applications, animated interfaces, and clean component systems under senior mentorship."
  },
  {
    title: "Backend Development Intern",
    type: "Internship Provided (3-6 Months)",
    location: "Remote / Hybrid",
    stipend: "Performance Stipend + Certificate Provided",
    skills: "Node.js • Express • PostgreSQL • MongoDB • REST APIs",
    desc: "Internship focused on designing robust backend services, secure authentication flows, database architectures, and API endpoints."
  },
  {
    title: "Full-Stack Developer Intern",
    type: "Internship Provided (3-6 Months)",
    location: "Remote / Hybrid",
    stipend: "Performance Stipend + Certificate Provided",
    skills: "React • Node.js • Cloud Architecture • Git Workflows",
    desc: "Complete end-to-end web engineering internship covering database schemas, API integration, client interfaces, and real production deploys."
  },
  {
    title: "AI & Machine Learning Intern",
    type: "Internship Provided (3-6 Months)",
    location: "Remote",
    stipend: "Performance Stipend + Certificate Provided",
    skills: "Python • LLMs • Prompt Engineering • Vector DBs",
    desc: "Exciting internship exploring generative AI applications, intelligent agent workflows, document retrieval RAG pipelines, and automation tools."
  },
  {
    title: "UI/UX Design Intern",
    type: "Internship Provided (3-6 Months)",
    location: "Remote",
    stipend: "Performance Stipend + Certificate Provided",
    skills: "Figma • Design Systems • Wireframing • User Research",
    desc: "Design-centric internship creating intuitive wireframes, responsive design systems, high-fidelity UI kits, and clickable prototypes."
  },
  {
    title: "Mobile App Development Intern",
    type: "Internship Provided (3-6 Months)",
    location: "Remote / Hybrid",
    stipend: "Performance Stipend + Certificate Provided",
    skills: "React Native • Cross-Platform UI • Native Modules",
    desc: "Build cross-platform mobile apps for iOS and Android with smooth 60 FPS animations and production-ready architecture."
  }
];
