import { siteData } from '../../data'
import { Calendar, Building2, Rocket, Target, Star, Zap, Award } from 'lucide-react'

export default function Experience() {
  const { experience } = siteData

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-4 sm:left-10 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl lg:max-w-6xl relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 mb-6 sm:mb-8">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-xs sm:text-sm font-mono font-bold tracking-wider">
              КАРЬЕРНЫЙ ПУТЬ
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">
              Профессиональный
            </span>
            <span className="text-white block mt-2 sm:mt-3">Опыт</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light px-2">
            {experience.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>
          <div className="space-y-8 lg:space-y-12">
            {experience.items.map((exp, index) => (
              <div key={index} className={`group relative ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-4' : 'lg:pl-1/2 lg:pr-4'}`}>
                <div className="absolute top-6 left-4 lg:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black transform lg:-translate-x-1/2 z-20 shadow-lg shadow-purple-500/30"></div>
                {index < experience.items.length - 1 && (
                  <div className="lg:hidden absolute top-10 left-6 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 -translate-x-1/2"></div>
                )}

                <div className="relative ml-10 lg:ml-0">
                  <div className="bg-gradient-to-br from-gray-900/90 to-gray-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700/30 group-hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm lg:backdrop-blur-xl group-hover:shadow-xl group-hover:shadow-purple-500/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/2 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-bl from-gray-800/10 to-transparent rounded-full"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 sm:gap-3 text-blue-400 text-sm sm:text-base font-mono mb-3 sm:mb-4">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                            {exp.period}
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 ml-1 sm:ml-2" />
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 leading-tight">
                            {exp.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-base sm:text-lg">
                            <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            {exp.company}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1.5 bg-gray-800/60 rounded-xl text-gray-300 text-xs border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
                            >
                              <span className="flex items-center gap-1.5">
                                <Zap className="w-3 h-3 text-blue-400" />
                                {tech}
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-center gap-2 sm:gap-3 text-white font-semibold text-base sm:text-lg">
                          <Target className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                          Ключевые достижения:
                        </div>
                        
                        <ul className="space-y-3 sm:space-y-4">
                          {exp.achievements.map((achievement, i) => (
                            <li 
                              key={i} 
                              className="flex items-start gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base leading-relaxed"
                            >
                              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mt-0.5">
                                <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                              </div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '8+', label: 'Лет опыта', icon: Award, gradient: 'from-blue-500 to-cyan-500' },
            { number: '40+', label: 'Проектов', icon: Target, gradient: 'from-purple-500 to-pink-500' },
            { number: '100%', label: 'Результат', icon: Star, gradient: 'from-green-500 to-emerald-500' },
            { number: '15+', label: 'Технологий', icon: Zap, gradient: 'from-orange-500 to-red-500' }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="group relative text-center p-4 sm:p-6 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-gray-900/60 border border-gray-700/30 rounded-2xl group-hover:border-gray-600/50 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}