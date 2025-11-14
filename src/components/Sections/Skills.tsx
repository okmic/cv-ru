import { siteData } from '../../data'
import { Code2, Server, Cpu, Database, Zap, GitBranch, Cloud, Settings } from 'lucide-react'

export default function Skills() {
  const { skills } = siteData
  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, React.ComponentType<any>> = {
      "Backend Engineering": Server,
      "Frontend Development": Code2,
      "DevOps & Infrastructure": Cpu,
      "Data & Databases": Database
    }
    return icons[categoryName] || Zap
  }
  const getSkillIcon = (skillName: string) => {
    const icons: Record<string, React.ComponentType<any>> = skills.skillIcons
    return icons[skillName] || Zap
  }
  const getCategoryGradient = (categoryName: string) => {
    const gradients: Record<string, string> = {
      "Backend Engineering": "from-purple-600 to-blue-600",
      "Frontend Development": "from-blue-600 to-cyan-600", 
      "DevOps & Infrastructure": "from-green-600 to-emerald-600",
      "Data & Databases": "from-orange-600 to-red-600"
    }
    return gradients[categoryName] || "from-gray-600 to-gray-700"
  }
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/80 rounded-xl border border-gray-700/50 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
                {skills.title}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {skills.title1.split(' ')[0]}
            </span>
            {' '}
            <span className="text-white">{skills.title.split(' ')[1]}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            {skills.subtitle1}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {skills.categories.map((category, index) => {
            const CategoryIcon = getCategoryIcon(category.category)
            const gradient = getCategoryGradient(category.category)
            return (
              <div key={index} className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-gradient-to-r ${gradient} rounded-lg`}>
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${gradient} rounded-full text-white text-xs font-medium`}>
                    {category.level}
                  </span>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = getSkillIcon(skill.name)
                    return (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <SkillIcon className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-300 text-sm font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-blue-400 text-sm font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full bg-gradient-to-r ${gradient}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
            <GitBranch className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-white font-medium text-sm mb-1">{skills.stats.title1}</div>
          </div>
          <div className="p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
            <Settings className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-white font-medium text-sm mb-1">{skills.stats.title2}</div>
            <div className="text-gray-400 text-xs">{skills.stats.subTitle2}</div>
          </div>
          <div className="p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
            <Cloud className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-white font-medium text-sm mb-1">{skills.stats.title3}</div>
            <div className="text-gray-400 text-xs">{skills.stats.subTitle3}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
