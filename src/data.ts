import { Award, Cloud, Code2, Container, Cpu, Database, GitBranch, Network, Settings, Shield, Star, Target, Terminal, Users, Zap } from "lucide-react"

export function getExperienceYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2017
}
export const siteData = {
  navItems: [
    { id: 'about', label: 'Обо мне' },
    { id: 'experience', label: 'Опыт' },
    { id: 'skills', label: 'Навыки' },
    { id: 'contact', label: 'Контакты' }
  ],
  hero: {
    title: "МИХАИЛ ОХТОВ",
    buttonValue: "Нанять меня",
    subtitle: "Fullstack Developer",
    description: "Превращаю сложные бизнес-задачи в элегантные технические решения. Специализация: кейсы с применением AI, высоконагруженные приложения и микросервисная архитектура.",
    stats: [
      { number: '40+', label: 'проектов' },
      { number: '8', label: 'лет опыта' },
      { number: '100%', label: 'результат' }
    ]
  },
  about: {
    title: "ПРЕИМУЩЕСТВА",
    title1: "Техническое",
    subTitle1: "экспертиза",
    subSubTitle1: "и командная",
    subSubSubTitle1: "синергия",
    title2: "Сочетание технической экспертиз с исключительными навыками командной работы —",
    subTitle2: "формула успеха для амбициозных проектов",
    items: [
      {
        title: "Надежность",
        description: "Системы с 99.9% uptime и автоматическим восстановлением. Реализую отказоустойчивые решения с продуманной архитектурой и круглосуточным мониторингом. Ваши приложения будут работать стабильно даже при пиковых нагрузках.",
        metric: "99.9% UPTIME",
        gradient: "from-emerald-500 to-cyan-500",
        icon: Shield,
        features: ["Автоматическое восстановление", "Круглосуточный мониторинг", "Отказоустойчивая архитектура"]
      },
      {
        title: "Скорость",
        description: "Оптимизированные решения с временем отклика менее 100ms. Использую современные технологии и лучшие практики для максимальной производительности. Быстрая загрузка и отзывчивый интерфейс — ключ к успеху вашего продукта.",
        metric: "<100MS RESPONSE",
        gradient: "from-purple-500 to-pink-500",
        icon: Zap,
        features: ["Оптимизированная загрузка", "Современные технологии", "Лучшие практики"]
      },
      {
        title: "Командная интеграция",
        description: "Я подружусь с вашей командой. Быстро вливаюсь в рабочие процессы, уважаю существующие практики и вношу свой вклад в общую динамику. Создаю позитивную среду для продуктивной collaboration и эффективного взаимодействия.",
        metric: "TEAM PLAYER",
        gradient: "from-blue-500 to-indigo-500",
        icon: Users,
        features: ["Быстрая адаптация", "Уважение к процессам", "Позитивная среда"]
      }
    ],
    stats: [
            { 
              number: "40+", 
              label: "Успешных проектов", 
              suffix: "",
              gradient: "from-purple-500 to-pink-500",
              delay: "0s"
            },
            { 
              number: "8", 
              label: "Лет коммерческого опыта", 
              suffix: "лет",
              gradient: "from-blue-500 to-cyan-500",
              delay: "0.1s"
            },
            { 
              number: "100", 
              label: "Гарантия результата", 
              suffix: "%",
              gradient: "from-green-500 to-emerald-500",
              delay: "0.2s"
            },
            { 
              number: "24/7", 
              label: "Техническая поддержка", 
              suffix: "",
              gradient: "from-orange-500 to-red-500",
              delay: "0.3s"
            }
          ],
  },
  experience: {
    title: "КАРЬЕРНЫЙ ПУТЬ",
    selectionTitle1: "Профессиональный",
    selectionSubTitle1: "Опыт",
    selectionTitle2: "Ключевые достижения:",
    subtitle: "8 лет delivering exceptional results across diverse industries",
    stats: [
      { number: `${getExperienceYears()}+`, label: 'Лет опыта', icon: Award, gradient: 'from-blue-500 to-cyan-500' },
      { number: '40+', label: 'Проектов', icon: Target, gradient: 'from-purple-500 to-pink-500' },
      { number: '100%', label: 'Результат', icon: Star, gradient: 'from-green-500 to-emerald-500' },
      { number: '15+', label: 'Технологий', icon: Zap, gradient: 'from-orange-500 to-red-500' }
    ],
    items: [
      {
        period: "2025 - Настоящее время",
        title: "Lead Fullstack Developer • Freelance",
        company: "Various Clients",
        achievements: [
          "Разработал 40+ аутсорс-проектов в различных доменах",
          "Достиг 99.9% удовлетворенности клиентов с своевременной delivery",
          "Менторил 5+ junior разработчиков в advanced архитектурных patterns"
        ],
        tech: ["Node.js", "React", "Kubernetes", "Microservices"]
      },
      {
        period: "2022 - 2025",
        title: "Fullstack Engineer • ConvertMe",
        company: "Digital Transformation Agency",
        achievements: [
          "Архитектура микросервисной платформы",
          "Снизил infrastructure costs на 40% через optimization",
        ],
        tech: ["TypeScript", "Fastify", "Docker", "MySql", "Redis"]
      },
      {
        period: "2021 - 2022",
        title: "Software Engineer • SKGA",
        company: "Education Technology",
        achievements: [
          "Автоматизировал internal processes saving 200+ hours monthly",
          "Обучил 50+ staff members в database management",
          "Реализовал secure network infrastructure"
        ],
        tech: ["Python", "Node.js", "Linux", "SQL", "Automation"]
      }
    ]
  },
  skills: {
    title: "НАВЫКИ И ТЕХНОЛОГИИ",
    title1: "ТЕХНИЧЕСКОЕ МАСТЕРСТВО",
    subtitle1: "Глубокий expertise across the full technology stack",
    skillIcons: {
      "Node.js": Terminal,
      "Microservices": Network,
      "API Design": GitBranch,
      "System Architecture": Settings,
      "React": Code2,
      "TypeScript": Zap,
      "Performance": Settings,
      "UX/UI": Settings,
      "Docker": Container,
      "Kubernetes": Cloud,
      "AWS/GCP": Cloud,
      "CI/CD": GitBranch,
      "PostgreSQL": Database,
      "Redis": Cpu,
      "Message Queues": Network,
      "MongoDB": Database
    },
    categories: [
      {
        category: "Backend Engineering",
        level: "Эксперт",
        skills: [
          { name: "Node.js", level: 95 },
          { name: "Microservices", level: 90 },
          { name: "API Design", level: 92 },
          { name: "System Architecture", level: 88 }
        ]
      },
      {
        category: "Frontend Development",
        level: "Продвинутый",
        skills: [
          { name: "React", level: 88 },
          { name: "TypeScript", level: 85 },
          { name: "Performance", level: 82 },
          { name: "UX/UI", level: 78 }
        ]
      },
      {
        category: "DevOps & Infrastructure",
        level: "Продвинутый",
        skills: [
          { name: "Docker", level: 90 },
          { name: "Kubernetes", level: 70 },
          { name: "AWS/GCP", level: 80 },
          { name: "CI/CD", level: 70 }
        ]
      },
      {
        category: "Data & Databases",
        level: "Продвинутый",
        skills: [
          { name: "MySql", level: 90 },
          { name: "PostgreSQL", level: 70 },
          { name: "MongoDB", level: 78 },
          { name: "Message Queues", level: 80 }
        ]
      }
    ],
    stats: {
      title1: "Современный стек",
      subTitle1: "Актуальные технологии",
      title2: "Постоянное развитие",
      subTitle2: "Изучаю новые инструменты",
      title3: "Полный цикл",
      subTitle3: "От идеи до продакшена",
    }
  },
  contacts: {
    title: "КОНТАКТЫ",
    title1: "ГОТОВ К СОТРУДНИЧЕСТВУ",
    title2: "Свяжитесь",
    title3: "со мной",
    title4: "Обсудим ваш проект и найдем лучшее решение",
    footerTitle1: "Быстрый ответ",
    footerSubTitle1: "В течение 15 минут",
    footerTitle2: "Конфиденциально",
    footerSubTitle2: "NDA при необходимости",
    footerTitle3: "Профессионально",
    footerSubTitle3: `Опыт ${getExperienceYears()} лет`,
    footerTitle: "Готов к новым вызовам",
    footer: `© Михаил Охтов ${new Date().getFullYear()} • Fullstack Developer`,
    items: [
      {
        platform: "Telegram",
        label: "@dev_okmic",
        url: "https://t.me/dev_okmic",
        icon: "Telegram",
        status: "Онлайн",
        description: 'Мгновенная связь для быстрых вопросов',
      },
      {
        platform: "WhatsApp",
        label: "+7 918 466 5096",
        url: "https://wa.me/79184665096",
        icon: "WhatsApp",
        status: "Доступен",
        description: 'Звонки и сообщения в любое время',
      },
      {
        platform: "Email",
        label: "okmic.dev@gmail.com",
        url: "mailto:okmic.dev@gmail.com",
        icon: "Email",
        description: 'Детальное обсуждение проектов',
        status: "Быстрый ответ"
      },
      {
        platform: "GitHub",
        label: "github.com/okmic",
        url: "https://github.com/okmic",
        icon: "GitHub",
        status: "Active",
        description: 'Исходный код и проекты',
      }
    ]
  }
}