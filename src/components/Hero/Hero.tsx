import { siteData } from '../../data'

export default function Hero() {
  const { hero } = siteData

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6 glow sm:mb-8">
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wider">
            {hero.subtitle}
          </span>
        </div>
        
        <div className="mb-8 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 leading-tight tracking-tighter">
            {hero.title.split(' ')[0]}
            <span className="block sm:inline-block mt-2 sm:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {' '}{hero.title.split(' ')[1]}
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            {hero.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8 sm:mb-12">
          {hero.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base"
          >
            Смотреть проекты
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Нанять меня
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-purple-400 rounded-full mt-1 sm:mt-2"></div>
        </div>
      </div>
    </section>
  )
}