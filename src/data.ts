export const siteData = {
  hero: {
    title: "МИХАИЛ ОХТОВ",
    subtitle: "Fullstack Developer",
    description: "Превращаю сложные бизнес-задачи в элегантные технические решения. Специализация: высоконагруженные приложения и микросервисная архитектура.",
    stats: [
      { number: '40+', label: 'проектов' },
      { number: '8', label: 'лет опыта' },
      { number: '100%', label: 'результат' }
    ]
  },
  
  about: {
    title: "ОБО МНЕ",
    description: "Моя миссия: создавать инновационные решения для реальных проблем пользователей. С 2017 года занимаюсь программной инженерией, исследую новые технологии и подходы, чтобы приносить пользу пользователям и обществу."
  },

  experience: {
    title: "ПРОФЕССИОНАЛЬНЫЙ ПУТЬ",
    subtitle: "8 лет delivering exceptional results across diverse industries",
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
    title: "ТЕХНИЧЕСКОЕ МАСТЕРСТВО",
    subtitle: "Глубокий expertise across the full technology stack",
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
    ]
  },

  projects: {
    title: "КЛЮЧЕВЫЕ ПРОЕКТЫ",
    subtitle: "Реальные результаты для бизнеса через технологические решения",
    items: [
      {
        title: "Высоконагруженная SaaS платформа",
        description: "Разработка микросервисной архитектуры для платформы с 500k+ пользователей",
        results: ["Увеличена производительность на 40%", "Снижена нагрузка на серверы на 60%", "Автоматизировано масштабирование"],
        tech: ["Node.js", "Kubernetes", "Redis", "PostgreSQL", "React"],
        metrics: "500k+ пользователей"
      },
      {
        title: "Telegram бот для автоматизации бизнеса", 
        description: "Комплексное решение для автоматизации продаж и поддержки клиентов",
        results: ["Обработка 10k+ сообщений/день", "Интеграция с CRM и платежами", "Снижение нагрузки на поддержку на 80%"],
        tech: ["Node.js", "Python", "MongoDB", "Docker"],
        metrics: "10k+ сообщений/день"
      },
      {
        title: "Система мониторинга инфраструктуры",
        description: "Real-time мониторинг и алертинг для распределенной системы",
        results: ["Обнаружение инцидентов за 30 секунд", "Снижение downtime на 95%", "Автоматическое восстановление"],
        tech: ["Go", "Prometheus", "Grafana", "Kafka"],
        metrics: "30s обнаружение инцидентов"
      }
    ]
  },

  contacts: {
    title: "КОНТАКТЫ",
    items: [
      {
        platform: "Telegram",
        label: "@dev_okmic",
        url: "https://t.me/dev_okmic",
        icon: "Telegram"
      },
      {
        platform: "WhatsApp", 
        label: "+7 918 466 5096",
        url: "https://wa.me/79184665096",
        icon: "WhatsApp"
      },
      {
        platform: "Email",
        label: "okmic.dev@gmail.com", 
        url: "mailto:okmic.dev@gmail.com",
        icon: "Email"
      },
      {
        platform: "GitHub",
        label: "github.com/okmic",
        url: "https://github.com/okmic",
        icon: "GitHub"
      }
    ]
  }
}