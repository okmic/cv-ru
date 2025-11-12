import { siteData } from '../../data'
import { MessageCircle, Mail, Github, Phone, ExternalLink, Zap, ArrowRight, Clock, Shield, Users } from 'lucide-react'

export default function Contact() {
  const { contacts } = siteData

  const contactItems = [
    {
      ...contacts.items.find(item => item.platform === 'Telegram'),
      icon: MessageCircle,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Мгновенная связь для быстрых вопросов',
      status: 'Онлайн'
    },
    {
      ...contacts.items.find(item => item.platform === 'WhatsApp'),
      icon: Phone,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Звонки и сообщения в любое время',
      status: 'Доступен'
    },
    {
      ...contacts.items.find(item => item.platform === 'Email'),
      icon: Mail,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Детальное обсуждение проектов',
      status: 'Быстрый ответ'
    },
    {
      ...contacts.items.find(item => item.platform === 'GitHub'),
      icon: Github,
      gradient: 'from-gray-600 to-gray-800',
      description: 'Исходный код и проекты',
      status: 'Active'
    }
  ]

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
        
        <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 mb-8">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-mono font-bold tracking-widest">
              ГОТОВ К СОТРУДНИЧЕСТВУ
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 block">
              Свяжитесь
            </span>
            <span className="text-white block">со мной</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Обсудим ваш проект и найдем лучшее решение
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {contactItems.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-900/80 rounded-3xl p-6 sm:p-8 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Контент */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-r ${contact.gradient} rounded-2xl backdrop-blur-sm transform group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {contact.platform}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-400 text-sm font-medium">{contact.status}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <p className="text-gray-400 text-base mb-6 leading-relaxed">
                    {contact.description}
                  </p>

                  <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-base font-semibold">
                        {contact.label}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-2">Быстрый ответ</div>
            <div className="text-gray-400 text-sm">В течение 15 минут</div>
          </div>
          
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-2">Конфиденциально</div>
            <div className="text-gray-400 text-sm">NDA при необходимости</div>
          </div>
          
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-2">Профессионально</div>
            <div className="text-gray-400 text-sm">Опыт 8+ лет</div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 rounded-2xl border border-gray-700/30 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold">Готов к новым вызовам</span>
          </div>
          
          <p className="text-purple-300/60 font-light tracking-wide">
            © Михаил Охтов 2025 • Fullstack Developer
          </p>
        </div>
      </div>
    </section>
  )
}