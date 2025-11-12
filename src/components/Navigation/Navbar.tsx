import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = ['about', 'experience', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'experience', label: 'Опыт' },
    { id: 'skills', label: 'Навыки' },
    { id: 'projects', label: 'Проекты' },
    { id: 'contact', label: 'Контакты' }
  ]

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800/50 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm font-medium text-gray-300">
              Fullstack Developer
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-gray-800/50">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-6 py-3 text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-r-2 border-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}