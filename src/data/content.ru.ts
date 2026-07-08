import type { LocalizedContent } from './types'

export const contentRu: LocalizedContent = {
  seo: {
    title: 'Николай Дычков — Senior Backend / Full Stack инженер',
    description:
      'Николай Дычков — Senior Backend / Full Stack инженер с 9+ годами опыта в продакшене. Расту в сторону Tech Lead с фокусом на код, архитектуру и качество. Healthcare, e-commerce, AI-assisted инструменты.',
    ogTitle: 'Николай Дычков — Senior Backend / Full Stack инженер',
    ogDescription:
      'Инженер, который делает надёжные backend-системы и продуктовые процессы с AI. Расту в Tech Lead / Team Lead. Открыт к удалённым ролям, контракту и отдельным проектам.',
  },
  a11y: {
    skipToMain: 'Перейти к основному содержимому',
    logoLabel: 'Николай Дычков — наверх',
    mainNav: 'Основная навигация',
    mobileNav: 'Мобильная навигация',
    footerNav: 'Ссылки в подвале',
    contactNav: 'Контактные ссылки',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    contactSetupHint: 'Замените плейсхолдеры в src/data/content.ts → contact',
    contactNotConfigured: ' — не настроено; отредактируйте src/data/content.ts',
    languageSwitcher: 'Язык',
  },
  site: {
    name: 'Николай Дычков',
    role: 'Senior Backend / Full Stack инженер',
    valueLine:
      'Делаю надёжные backend-системы, продуктовые процессы и AI-assisted инструменты с фокусом на качество, поддержку и продакшен.',
    proofLine:
      '9+ лет в PHP/Symfony, PostgreSQL, Docker, observability, healthcare и e-commerce проектах.',
    leadershipLine:
      'Расту в сторону Tech Lead с фокусом на код, архитектуру и качество: понятные ожидания, контрольные точки ревью и помощь команде без режима спасателя.',
    locationLine:
      'Европа · UTC+2/UTC+3 · удалённые роли, контрактная работа/B2B и отдельные проекты разработки на заказ',
    availability:
      'Открыт к full-time ролям, контракту/B2B и отдельным проектам разработки',
  },
  navItems: [
    { label: 'Что я приношу', href: '#what-i-bring' },
    { label: 'Опыт', href: '#experience' },
    { label: 'Лидерство', href: '#leadership' },
    { label: 'AI', href: '#ai' },
    { label: 'Стек', href: '#stack' },
    { label: 'Контакт', href: '#contact' },
  ],
  hero: {
    portraitAlt: 'Николай Дычков, Senior Backend / Full Stack инженер',
  },
  whatIBring: {
    label: 'Что я приношу',
    title: 'Инженерия для продакшена, а не для слайдов',
    subtitle:
      'Senior Backend / Full Stack — от архитектуры и баз данных до интеграций и разработки с AI.',
    items: [
      {
        title: 'Backend для продакшена',
        description:
          'REST API, внутренние сервисы, интеграции и Symfony-приложения, которые держат нагрузку — с тестами, логированием и понятными границами.',
        icon: 'server',
      },
      {
        title: 'Производительность БД и observability',
        description:
          'Оптимизация запросов, индексы, N+1, correlation ID, структурные логи и OpenSearch — чтобы проблемы в проде можно было диагностировать, а не гадать.',
        icon: 'database',
      },
      {
        title: 'Модернизация legacy',
        description:
          'Миграции фреймворков, контейнеризация Docker, рефакторинг и контроль качества — улучшаю системы постепенно, не останавливая бизнес.',
        icon: 'refresh',
      },
      {
        title: 'AI-assisted разработка',
        description:
          'Cursor, Claude и AI-агенты для скорости — с ревью человеком, архитектурной дисциплиной и контролем качества в проде.',
        icon: 'spark',
      },
    ],
  },
  experience: {
    label: 'Выбранный опыт',
    title: 'Домены, где я реально работал в проде',
    subtitle:
      'Healthcare, e-commerce, legacy-системы и продукты с большим объёмом данных — всегда с ответственностью за прод.',
    items: [
      {
        domain: 'Healthcare и внутренние сервисы',
        highlights: [
          'Разбор инцидентов на критичных Symfony-сервисах',
          'Структурированный трекинг ошибок API, observability-пайплайны, correlation ID',
          'Интеграции между внутренними корпоративными системами',
        ],
        tag: 'Healthcare',
      },
      {
        domain: 'E-commerce продуктовые системы',
        highlights: [
          'Каталог, интеграции и процессы заказов',
          'Крупный e-commerce, включая GlassesUSA.com',
          'Интеграции с внешними API и отчётные пайплайны',
        ],
        tag: 'E-commerce',
      },
      {
        domain: 'Модернизация legacy',
        highlights: [
          'Миграции Symfony и контейнеризация Docker',
          'Рефакторинг больших кодовых баз с PHPStan, Psalm и тестами',
          'Инкрементальные улучшения без резкого переписывания',
        ],
        tag: 'Modernization',
      },
      {
        domain: 'Отчётность и системы с большими данными',
        highlights: [
          'Генерация XLSX и Word отчётов в масштабе',
          'Большие импорты данных с SQL-оптимизацией',
          'Сложные запросы с EXPLAIN и продуманной индексацией',
        ],
        tag: 'Data',
      },
      {
        domain: 'Личные проекты и доставка',
        highlights: [
          'Автоматизирую сборку и деплой приложений через GitHub Actions: production build, секреты GitHub и доставка на хостинг по SSH/rsync.',
        ],
        tag: 'Delivery',
      },
    ],
  },
  leadership: {
    label: 'Техлидство',
    title: 'Техническое лидерство рядом с кодом',
    text: 'Я двигаюсь в сторону Tech Lead / Team Lead роли с фокусом на код, архитектуру и качество решений. Для меня лидерство — это не режим единственного спасателя, а понятная ответственность, контрольные точки ревью, инженерные стандарты и спокойная помощь команде.',
    bullets: [
      'Задавать понятное техническое направление',
      'Держать качество через ревью и инженерные стандарты',
      'Помогать разработчикам, не забирая у них ответственность',
      'Дробить работу на понятные этапы и короткие циклы обратной связи',
      'Оставаться близко к коду, архитектуре и продакшену',
    ],
  },
  engineeringStyle: {
    label: 'Инженерный подход',
    quotePrefix: 'Я оптимизирую под',
    quoteAccent: 'системы, которые работают в проде',
    quoteSuffix: ', а не под демо, которые красиво смотрятся в README.',
    points: [
      'Мне важно поведение в проде, а не только чистый код.',
      'Предпочитаю простую архитектуру, которую можно объяснить и отладить в 2 часа ночи.',
      'Люблю измеримые улучшения: быстрее запросы, лучше логи, безопаснее релизы.',
      'Люблю простые и надёжные пайплайны доставки: собрать, проверить, задеплоить и сделать процесс повторяемым.',
      'Использую AI-инструменты осознанно, но держу архитектуру, ревью и качество под инженерным контролем.',
      'Комфортно работаю с legacy, когда есть понятный путь улучшения.',
    ],
  },
  aiDirection: {
    label: 'AI направление',
    title: 'AI как практический инструмент, не громкое обещание',
    intro:
      'Двигаюсь в сторону AI-подхода в инженерии. AI — как практический инструмент разработки, а не громкое обещание: быстрее делать продукт, сохраняя архитектуру и качество в проде.',
    points: [
      {
        title: 'AI-assisted разработка',
        text: 'Структурированные промпты, контроль ревью и static analysis вместе с Cursor и Claude Code — скорость без пропуска проверок качества.',
      },
      {
        title: 'Автоматизация с участием инженера',
        text: 'AI ускоряет рутину в продукте и инженерии; архитектуру, ревью и то, что попадает в прод, по-прежнему контролируют инженеры.',
      },
      {
        title: 'Агент для поиска работы',
        text: 'Личный проект: агент, который собирает вакансии, помогает с откликами и автоматизирует рутину поиска работы.',
      },
    ],
  },
  techStack: {
    label: 'Технологии',
    title: 'Что знаю хорошо — и куда расту',
    subtitle:
      'Сильный backend и инфраструктура. Расширяю full stack: React, TypeScript, Node.js.',
    categoryLabels: {
      backend: 'Backend',
      databases: 'Базы данных',
      infrastructure: 'Инфраструктура',
      quality: 'Качество',
      expanding: 'Развиваюсь в',
    },
    categories: {
      backend: [
        'PHP',
        'Symfony',
        'Doctrine',
        'REST APIs',
        'Laravel basics',
        'интеграции API',
        'консольные команды',
      ],
      databases: [
        'PostgreSQL',
        'MySQL',
        'индексы',
        'EXPLAIN',
        'оптимизация запросов',
        'Doctrine DBAL',
        'импорт данных',
      ],
      infrastructure: [
        'Docker',
        'Linux',
        'Nginx',
        'GitHub Actions',
        'GitLab CI/CD',
        'CI/CD',
        'деплой по SSH',
        'rsync',
        'production build',
        'Redis',
        'RabbitMQ',
        'OpenSearch',
      ],
      quality: [
        'PHPUnit',
        'Codeception',
        'PHPStan',
        'Psalm',
        'Xdebug',
        'профилирование',
        'ревью кода',
        'статический анализ',
      ],
      expanding: [
        'React',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'основы AWS/GCP',
        'AI agents',
        'AI-assisted процессы',
      ],
    },
  },
  openTo: {
    label: 'Открыт к',
    title: 'Где я лучше всего подхожу',
    subtitle:
      'Удалённая работа с международными командами. Открыт к full-time ролям, контракту/B2B и отдельным проектам разработки на заказ.',
    items: [
      'Senior Backend / Full Stack роли',
      'Tech Lead / Team Lead роли с фокусом на код и качество',
      'AI-assisted разработка и внутренние инструменты',
      'Healthcare, fintech, e-commerce, продукты с большим объёмом данных',
      'Отдельные проекты разработки на заказ',
      'Удалённая работа, штатные роли, контрактная работа/B2B',
    ],
  },
  finalCta: {
    headline:
      'Backend, Full Stack, Tech Lead с фокусом на код и качество или разработка на заказ — давайте обсудим.',
    button: 'Написать',
  },
  contact: {
    navLabel: 'Контакт',
    primaryLabel: 'Связаться',
    email: 'Email',
    viewGithub: 'GitHub',
    downloadCv: 'Скачать CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'CV',
  },
}
