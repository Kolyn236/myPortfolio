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
      '9+ years in PHP/Symfony, PostgreSQL, Docker, observability, healthcare, and e-commerce systems.',
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
          'Query optimization, indexes, N+1 fixes, correlation IDs, structured logging, and OpenSearch — so production issues become diagnosable, not mysterious.',
        icon: 'database',
      },
      {
        title: 'Legacy modernization',
        description:
          'Framework migrations, Dockerization, refactoring, and code quality gates — improving systems incrementally without stopping the business.',
        icon: 'refresh',
      },
      {
        title: 'AI-assisted product development',
        description:
          'Using Cursor, Claude, and agent workflows to move faster — with human review, architecture discipline, and production quality still in control.',
        icon: 'spark',
      },
    ],
  },
  experience: {
    label: 'Selected experience',
    title: "Domains where I've shipped real work",
    subtitle:
      'Healthcare, e-commerce, legacy systems, and data-heavy products — always with production responsibility.',
    items: [
      {
        domain: 'Healthcare & internal services',
        highlights: [
          'Production troubleshooting on high-responsibility Symfony services',
          'Structured API error tracking, observability pipelines, correlation IDs',
          'Integration work across internal enterprise systems',
        ],
        tag: 'Healthcare',
      },
      {
        domain: 'E-commerce product systems',
        highlights: [
          'Product catalog, integrations, and order-related workflows',
          'Large-scale e-commerce, including GlassesUSA.com',
          'Third-party API integrations and reporting pipelines',
        ],
        tag: 'E-commerce',
      },
      {
        domain: 'Legacy modernization',
        highlights: [
          'Symfony framework migrations and Dockerization',
          'Refactoring large codebases with PHPStan, Psalm, and test coverage',
          'Incremental improvements without big-bang rewrites',
        ],
        tag: 'Modernization',
      },
      {
        domain: 'Reporting & data-heavy systems',
        highlights: [
          'XLSX and Word report generation at scale',
          'Large data imports with SQL optimization',
          'Complex queries tuned with EXPLAIN and indexing strategy',
        ],
        tag: 'Data',
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
      'I prefer simple architecture that can be explained and debugged at 2 a.m.',
      'I like measurable improvements: faster queries, better logs, safer releases.',
      'I use AI tools aggressively, but with human review gates and quality checks.',
      'I am comfortable with legacy code when there is a clear path to improve it.',
    ],
  },
  aiDirection: {
    label: 'AI direction',
    title: 'Practical AI engineering, not a marketing claim',
    intro:
      'I am moving toward AI-first engineering. AI as a practical engineering tool, not a marketing claim — a way to ship product faster while keeping architecture and production quality intact.',
    points: [
      {
        title: 'AI-assisted development workflows',
        text: 'Structured prompts, code review gates, and static analysis alongside Cursor and Claude Code — speed without skipping quality checks.',
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
      databases: 'Databases',
      infrastructure: 'Infrastructure',
      quality: 'Quality',
      expanding: 'Expanding',
    },
    categories: {
      backend: ['PHP', 'Symfony', 'Doctrine', 'REST APIs', 'Laravel basics'],
      databases: ['PostgreSQL', 'MySQL', 'Indexes', 'EXPLAIN', 'Query optimization'],
      infrastructure: ['Docker', 'Linux', 'Nginx', 'CI/CD', 'Redis', 'RabbitMQ', 'OpenSearch'],
      quality: ['PHPUnit', 'Codeception', 'PHPStan', 'Psalm', 'Xdebug', 'Profiling'],
      expanding: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS/GCP', 'AI agents'],
    },
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
