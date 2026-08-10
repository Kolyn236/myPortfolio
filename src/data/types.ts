export type Locale = 'en' | 'ru'

export type NavItem = {
  label: string
  href: string
}

export type CardItem = {
  title: string
  description: string
  icon: 'server' | 'database' | 'refresh' | 'spark'
}

export type ExperienceItem = {
  domain: string
  highlights: readonly string[]
  tag: string
}

export type AiPoint = {
  title: string
  text: string
}

export type TechStackCategories = {
  backend: readonly string[]
  ai: readonly string[]
  databases: readonly string[]
  infrastructure: readonly string[]
  quality: readonly string[]
  expanding: readonly string[]
}

export type LocalizedContent = {
  seo: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
  a11y: {
    skipToMain: string
    logoLabel: string
    mainNav: string
    mobileNav: string
    footerNav: string
    contactNav: string
    openMenu: string
    closeMenu: string
    contactSetupHint: string
    contactNotConfigured: string
    languageSwitcher: string
  }
  site: {
    name: string
    role: string
    valueLine: string
    proofLine: string
    leadershipLine: string
    locationLine: string
    availability: string
  }
  navItems: readonly NavItem[]
  hero: {
    portraitAlt: string
  }
  whatIBring: {
    label: string
    title: string
    subtitle: string
    items: readonly CardItem[]
  }
  experience: {
    label: string
    title: string
    subtitle: string
    items: readonly ExperienceItem[]
  }
  leadership: {
    label: string
    title: string
    text: string
    bullets: readonly string[]
  }
  engineeringStyle: {
    label: string
    quotePrefix: string
    quoteAccent: string
    quoteSuffix: string
    points: readonly string[]
  }
  aiDirection: {
    label: string
    title: string
    intro: string
    points: readonly AiPoint[]
  }
  techStack: {
    label: string
    title: string
    subtitle: string
    categoryLabels: {
      backend: string
      ai: string
      databases: string
      infrastructure: string
      quality: string
      expanding: string
    }
    categories: TechStackCategories
  }
  education: {
    label: string
    title: string
    text: string
    bullets: readonly string[]
  }
  openTo: {
    label: string
    title: string
    subtitle: string
    items: readonly string[]
  }
  finalCta: {
    headline: string
    button: string
  }
  contact: {
    navLabel: string
    primaryLabel: string
    email: string
    viewGithub: string
    downloadCv: string
    linkedin: string
    github: string
    cv: string
  }
}
