import { siteData } from '../../data'
import { GitBranch, Target, Zap, Users, TrendingUp, Code2, Server } from 'lucide-react'

export default function Projects() {
  const { projects } = siteData

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 mb-8">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm font-mono font-bold tracking-widest">
              ПОРТФОЛИО ПРОЕКТОВ
            </span>
            <Code2 className="w-4 h-4 text-blue-400" />
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Ключевые
            </span>
            <br />
            <span className="text-white">Проекты</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {projects.subtitle}
          </p>
        </div>
        
        <div className="space-y-8 lg:space-y-12">
          {projects.items.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:blur-lg scale-95 group-hover:scale-100"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-900/80 rounded-3xl p-6 sm:p-8 border border-gray-700/30 group-hover:border-transparent transition-all duration-500 backdrop-blur-xl overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/3 via-blue-500/2 to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-800/10 to-transparent rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-800/5 to-transparent rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl">
                          <Server className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl backdrop-blur-sm border border-white/20">
                        <TrendingUp className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-bold tracking-wide">
                          {project.metrics}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white font-semibold text-lg">
                        <Target className="w-5 h-5 text-green-400" />
                        Достигнутые результаты:
                      </div>
                      
                      <ul className="space-y-3">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mt-0.5">
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-base leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white font-semibold text-lg">
                        <GitBranch className="w-5 h-5 text-blue-400" />
                        Использованные технологии:
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 bg-gray-800/60 rounded-2xl text-gray-300 text-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white transition-all duration-300 backdrop-blur-sm group/tech"
                          >
                            <span className="flex items-center gap-2">
                              <Code2 className="w-3 h-3 text-blue-400 group-hover/tech:scale-110 transition-transform" />
                              {tech}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Дополнительная информация */}
                  <div className="mt-6 pt-6 border-t border-gray-700/30">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span>Командная разработка</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span>Высокая производительность</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/30">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-lg">Готов к новым вызовам</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Обсудим ваш проект?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}