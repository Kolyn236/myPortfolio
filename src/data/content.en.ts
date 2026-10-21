import type { LocalizedContent } from './types'

export const contentEn: LocalizedContent = {
  seo: {
    title: 'Nikolay Dychkov — Senior Backend / Full Stack Engineer',
    description:
      'Nikolay Dychkov — Senior Backend / Full Stack Engineer with 9+ years building production systems, moving toward hands-on technical leadership. Healthcare, e-commerce, AI-assisted workflows.',
    ogTitle: 'Nikolay Dychkov — Senior Backend / Full Stack Engineer',
    ogDescription:
      'Production-minded engineer building reliable backend systems and AI-assisted product workflows. Moving toward hands-on Tech Lead roles. Open to remote international roles.',
  },
  a11y: {
    skipToMain: 'Skip to main content',
    logoLabel: 'Nikolay Dychkov — back to top',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    footerNav: 'Footer links',
    contactNav: 'Contact links',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    contactSetupHint: 'Replace placeholders in src/data/content.ts → contact',
    contactNotConfigured: ' — not configured; edit src/data/content.ts',
    languageSwitcher: 'Language',
  },
  site: {
    name: 'Nikolay Dychkov',
    role: 'Senior Backend / Full Stack Engineer',
    valueLine:
      'I build reliable backend systems, product workflows, and AI-assisted tools with a focus on quality, maintainability, and production behavior.',
    proofLine:
      '9+ years in PHP/Symfony, PostgreSQL, Docker, observability, healthcare, and e-commerce systems. E-commerce background: catalog/order workflows, integrations, CMS/platform customization, and legacy PHP modernization.',
    leadershipLine:
      'Growing into hands-on Tech Lead work — clarity, review gates, and helping teams ship without hero mode.',
    locationLine:
      'Based in Europe · UTC+2/UTC+3 · open to remote and relocation-friendly roles',
    availability:
      'Open to full-time roles, contractor/B2B work, and selected custom projects',
  },
  navItems: [
    { label: 'What I bring', href: '#what-i-bring' },
    { label: 'Experience', href: '#experience' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'AI direction', href: '#ai' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    portraitAlt: 'Nikolay Dychkov, senior backend and full stack engineer',
  },
  whatIBring: {
    label: 'What I bring',
    title: 'Production engineering, not slide decks',
    subtitle:
      'Senior backend / full stack — from architecture and databases to integrations and AI-assisted delivery.',
    items: [
      {
        title: 'Production backend engineering',
        description:
          'REST APIs, internal services, integrations, and Symfony applications designed to run reliably under real load — with tests, logging, and clear boundaries.',
        icon: 'server',
      },
      {
        title: 'Database performance & observability',
        description:
          'Query optimization, indexes, N+1 fixes, correlation IDs, structured logs, OpenSearch, Grafana, Graylog, and Sentry — so production issues become diagnosable, not mysterious.',
        icon: 'database',
      },
      {
        title: 'Legacy modernization',
        description:
          'Framework migrations, Dockerization, refactoring, and code quality gates — improving systems incrementally without stopping the business.',
        icon: 'refresh',
      },
      {
        title: 'Practical AI-assisted engineering',
        description:
          'AI tools for decomposition, review, documentation, routine automation, and faster delivery — with human review and production quality under engineering control.',
        icon: 'spark',
      },
    ],
  },
  experience: {
    label: 'Selected experience',
    title: "Domains where I've shipped real work",
    subtitle:
      'Healthcare, e-commerce, payment integrations, blockchain, legacy systems, and data-heavy products — always with production responsibility.',
    items: [
      {
        domain: 'Healthcare & internal services',
        highlights: [
          'Production troubleshooting on high-responsibility Symfony services',
          'Structured API error tracking, observability pipelines, correlation IDs, structured logs, OpenSearch, Grafana, Graylog, and Sentry',
          'Integration work across internal enterprise systems',
        ],
        tag: 'Healthcare',
      },
      {
        domain: 'E-commerce product systems',
        highlights: [
          'Worked with legacy PHP and e-commerce platforms including X-Cart, CS-Cart, OpenCart, WordPress, CodeIgniter, Yii/Yii2, Slim, and Magento — catalog/order workflows, integrations, legacy PHP modernization, and Magento 1 → Symfony migration.',
          'Large-scale e-commerce, including GlassesUSA.com',
          'Third-party API integrations and reporting pipelines',
        ],
        tag: 'E-commerce',
      },
      {
        domain: 'Payment integrations',
        highlights: [
          'Built dozens of e-commerce payment integrations, including Stripe, PayPal, Nochex, and custom payment providers.',
          'Worked with payment APIs, callback/webhook flows, encryption, and incomplete or outdated provider documentation.',
          'Troubleshot integration issues directly with clients and payment-provider support teams.',
        ],
        tag: 'Payments',
      },
      {
        domain: 'Blockchain & non-custodial wallets',
        highlights: [
          'I am building ChainCourier, a multi-currency non-custodial wallet where seed material and other secrets stay client-side while Symfony acts as an API gateway.',
          'Designed shared chain/network/asset abstractions and a capability registry so multiple blockchains can be integrated without coupling business logic to one network.',
          'Worked on wallet generation and validation, network integrations including TRON, and safe handling of key material in the browser.',
        ],
        tag: 'Blockchain',
      },
      {
        domain: 'Legacy modernization',
        highlights: [
          'Symfony framework migrations and Dockerization',
          'Investigated production performance issues, profiled existing applications, and fixed memory/performance bottlenecks without rewriting systems from scratch.',
          'Refactoring large codebases with PHPStan, Psalm, and test coverage',
          'Incremental improvements without big-bang rewrites',
        ],
        tag: 'Modernization',
      },
      {
        domain: 'Reporting & data-heavy systems',
        highlights: [
          'PhpSpreadsheet and PhpWord for XLSX and Word reports at scale',
          'Large data imports with SQL optimization',
          'Complex queries tuned with indexes, EXPLAIN, and indexing strategy',
        ],
        tag: 'Data',
      },
      {
        domain: 'Personal projects & delivery',
        highlights: [
          'I automate build and deployment pipelines with GitHub Actions: production builds, GitHub secrets, and delivery to hosting over SSH/rsync.',
        ],
        tag: 'Delivery',
      },
    ],
  },
  leadership: {
    label: 'Technical leadership',
    title: 'Hands-on technical leadership',
    text: "I'm growing toward hands-on Tech Lead work while staying close to code, architecture, and production behavior. For me, leadership is not hero mode — it is clarity, ownership, review gates, engineering standards, and helping people ship safely.",
    bullets: [
      'Set clear technical direction',
      'Keep review gates and quality standards',
      'Help developers grow without taking ownership away',
      'Break work into clear checkpoints with tight feedback loops',
      'Stay close to code and production behavior',
    ],
  },
  engineeringStyle: {
    label: 'Engineering style',
    quotePrefix: 'I optimize for',
    quoteAccent: 'systems that work in production',
    quoteSuffix: ', not demos that look good in a README.',
    points: [
      'I care about production behavior, not just clean code.',
      'I profile existing applications, investigate memory leaks, and work through performance bottlenecks in production and legacy systems.',
      'I prefer simple architecture that can be explained and debugged at 2 a.m.',
      'I like measurable improvements: faster queries, better logs, safer releases.',
      'I like small, reliable delivery pipelines: build, verify, deploy, and keep the process repeatable.',
      'I use AI tools deliberately, but keep architecture, review, and production quality under human control.',
      'I am comfortable with legacy code when there is a clear path to improve it.',
    ],
  },
  aiDirection: {
    label: 'AI direction',
    title: 'Practical AI engineering, not a marketing claim',
    intro:
      'Practical AI-assisted engineering — AI tools for decomposition, review, documentation, routine automation, and faster delivery. Human review and production quality stay under engineering control.',
    points: [
      {
        title: 'AI-assisted development workflows',
        text: 'Structured prompts, code review gates, and static analysis alongside Cursor and Claude — speed without skipping quality checks.',
      },
      {
        title: 'Human-in-the-loop automation',
        text: 'AI accelerates repetitive product and engineering work; engineers still own architecture, review, and what goes to production.',
      },
      {
        title: 'Job-search productivity agent',
        text: 'Personal project: an agent that aggregates vacancies, drafts replies, and automates repetitive job-search workflows.',
      },
    ],
  },
  techStack: {
    label: 'Tech stack',
    title: "Tools I know — and tools I'm growing into",
    subtitle:
      'Strong in backend and infrastructure. Expanding full stack surface with React, TypeScript, and Node.js.',
    categoryLabels: {
      backend: 'Backend',
      ai: 'AI / LLM Engineering',
      databases: 'Databases',
      infrastructure: 'Infrastructure',
      quality: 'Quality',
      expanding: 'Expanding',
    },
    categories: {
      backend: [
        'PHP',
        'Symfony',
        'REST APIs',
        'API integrations',
        'Laravel',
        'X-Cart',
        'CS-Cart',
        'OpenCart',
        'WordPress',
        'Magento',
        'CodeIgniter 3',
        'Yii/Yii2',
        'Slim',
      ],
      ai: [
        'OpenAI API',
        'Anthropic API',
        'Prompt engineering',
        'Structured outputs',
        'Function / tool calling',
        'RAG',
        'Embeddings',
        'Vector search / pgvector',
        'AI agents',
        'MCP',
        'LangChain / LangGraph',
        'LLM evals',
        'Guardrails',
        'Human-in-the-loop',
        'Context engineering',
        'AI observability',
        'AI harnesses',
        'Hermes',
      ],
      databases: [
        'PostgreSQL',
        'MySQL',
        'MongoDb',
        'Doctrine DBAL',
        'Eloquent',
        'ClickHouse'
      ],
      infrastructure: [
        'Docker',
        'Linux',
        'Nginx',
        'GitHub Actions',
        'GitLab CI/CD',
        'CI/CD',
        'Redis',
        'Memcached',
        'OpenSearch',
        'New Relic',
        'Sentry',
        'Graylog',
        'Kafka',
        'RabbitMQ'
      ],
      quality: [
        'PHPUnit',
        'Codeception',
        'PHPStan',
        'Psalm',
        'Xdebug',
        'XHProof',
        'Blackfire',
        'Profiling',
        'Code review',
        'Static analysis',
      ],
      expanding: [
        'React',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'AWS/GCP basics',
        'AI agents',
        'AI-assisted workflows',
      ],
    },
  },
  education: {
    label: 'Education',
    title: 'Education & technical foundation',
    text: 'I hold a Specialist degree from Ulyanovsk State University in Mathematical Support and Administration of Information Systems. This background gave me a strong foundation in programming, systems thinking, data models, and information systems — the kind of base I still use in backend architecture, databases, integrations, and production debugging.',
    bullets: [
      'Specialist degree',
      'Mathematical Support',
      'Information Systems Administration',
      'Backend architecture and data models',
      'Systems thinking for production debugging',
    ],
  },
  openTo: {
    label: 'Open to',
    title: 'Where I fit best',
    subtitle:
      'Remote-first, international teams. Open to full-time roles, contractor/B2B work, and selected custom development projects.',
    items: [
      'Senior Backend / Full Stack roles',
      'Tech Lead / Team Lead roles with a focus on code and quality',
      'AI-assisted development and internal tools',
      'Healthtech, fintech, e-commerce, data-heavy products',
      'Selected custom development projects',
      'Full-time, contractor/B2B, remote, relocation-friendly',
    ],
  },
  finalCta: {
    headline:
      'Senior Backend / Full Stack, Tech Lead with a focus on code and quality, or selected custom development project — open to a conversation.',
    button: "Let's talk",
  },
  contact: {
    navLabel: 'Contact',
    primaryLabel: 'Contact me',
    email: 'Email',
    viewGithub: 'View GitHub',
    downloadCv: 'Download CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'CV',
  },
}
