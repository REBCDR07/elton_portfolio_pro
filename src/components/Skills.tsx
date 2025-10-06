import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  Wrench,
  Palette,
  Brain,
  Users,
  Target,
  Lightbulb,
  Heart,
  Terminal,
} from 'lucide-react';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const technicalSkills = {
  'Langages de programmation': [
    { name: 'JavaScript', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', level: 'beginner', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C++', level: 'beginner', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg'},
    { name: 'PHP', level: 'beginner', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
  ],
  'Base de données': [
    { name: 'MongoDB', level: 'beginner', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Supabase', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'MySQL', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ],
  'Frameworks Frontend': [
    { name: 'React', level: 'intermediate',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TailwindCSS', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' }
  ],
  'DevOps': [
    { name: 'Git/GitHub', level: 'advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'AWS/Vercel', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Netlify', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  ],
  'UI/UX Design': [
    { name: 'Figma', level: 'beginner', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    
    { name: 'Design Systems', icon: null },
    { name: 'Responsive Design', icon: null }
  ]
};

const aiTools = [
  { name: 'ChatGPT', icon: Brain, color: 'from-green-500 to-emerald-500' },
  { name: 'DeepSeek', icon: Brain, color: 'from-green-500 to-emerald-500' },
  { name: 'Perplexity', icon: Brain, color: 'from-green-500 to-emerald-500' },
  { name: 'Google AI Studio', icon: Brain, color: 'from-green-500 to-emerald-500' },
  { name: 'Firebase Studio', icon: Brain, color: 'from-green-500 to-emerald-500' },
  { name: 'GitHub Copilot', icon: Code, color: 'from-purple-500 to-violet-500' },
  { name: 'Anthropique AI', icon: Code, color: 'from-purple-500 to-violet-500' },
  { name: 'Hugging Face', icon: Code, color: 'from-purple-500 to-violet-500' },
  { name: 'Gamma', icon: Code, color: 'from-purple-500 to-violet-500' },
  { name: 'Lovable.dev', icon: Code, color: 'from-purple-500 to-violet-500' },
  { name: 'Grok', icon: Brain, color: 'from-orange-500 to-amber-500' },
  { name: 'Claude AI', icon: Brain, color: 'from-orange-500 to-amber-500' },
  { name: 'Windsurf', icon: Brain, color: 'from-orange-500 to-amber-500' },
  { name: 'ZenCoder', icon: Brain, color: 'from-orange-500 to-amber-500' },
  { name: 'Gemini AI', icon: Brain, color: 'from-orange-500 to-amber-500' },
];

const softSkills = [
  { name: 'Communication', icon: Users, color: 'from-blue-500 to-cyan-500' },
  { name: 'Résolution de problèmes', icon: Target, color: 'from-purple-500 to-pink-500' },
  { name: 'Créativité', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
  { name: 'Travail d\'équipe', icon: Heart, color: 'from-red-500 to-pink-500' }
];

const levelConfig = {
  advanced: { color: 'bg-emerald-500', dots: [true, true, true], label: 'Avancé' },
  intermediate: { color: 'bg-yellow-500', dots: [true, true, false], label: 'Intermédiaire' },
  beginner: { color: 'bg-orange-500', dots: [true, false, false], label: 'Débutant' }
};

const categoryIcons: { [key: string]: typeof Code } = {
  'Langages de programmation': Code,
  'Base de données': Database,
  'Frameworks Frontend': Wrench,
  'DevOps': Wrench,
  'UI/UX Design': Palette
};

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(Object.keys(technicalSkills));

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const renderLevelDots = (level: keyof typeof levelConfig) => {
    const config = levelConfig[level];
    return (
      <div className="flex space-x-0.5 sm:space-x-1">
        {config.dots.map((filled, index) => (
          <div key={index} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${filled ? config.color : 'bg-slate-700'}`} />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 lg:py-32 relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-5 sm:right-10 md:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-5 sm:left-10 md:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-3 sm:mb-4 md:mb-6">
            <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
              $ skills --show-all
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            Mes <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Compétences</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Un panel diversifié de compétences techniques et humaines acquises au fil de mes expériences et projets professionnels.
          </p>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white" style={{ fontFamily: 'Orbitron, monospace' }}>AI_Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
            {aiTools.map((tool) => (
              <div key={tool.name} className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl hover:scale-105 hover:border-cyan-500/50 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${tool.color} mb-2 sm:mb-3 md:mb-4`}>
                    <tool.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white" style={{ fontFamily: 'Orbitron, monospace' }}>{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white" style={{ fontFamily: 'Orbitron, monospace' }}>Tech_Skills</h3>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
            {Object.entries(technicalSkills).map(([category, skills]) => {
              const Icon = categoryIcons[category];
              const isExpanded = expandedCategories.includes(category);
              return (
                <div key={category} className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <button onClick={() => toggleCategory(category)} className="w-full p-3 sm:p-4 md:p-6 flex justify-between text-left hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                      <div className="p-2 sm:p-2.5 md:p-3 bg-cyan-500/10 rounded-lg sm:rounded-xl">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
                        {category.toUpperCase().replace(/ /g, '_')}
                      </span>
                    </div>
                    {isExpanded ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />}
                  </button>
                  {isExpanded && (
                    <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 space-y-2 sm:space-y-2.5 md:space-y-3">
                      {skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-wrap items-center justify-between p-2.5 sm:p-3 md:p-4 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group">
                          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-1 min-w-[100px]">
                            {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />}
                            <span className="font-semibold text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{skill.name}</span>
                          </div>
                          {skill.level && (
                            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mt-1.5 sm:mt-0">
                              {renderLevelDots(skill.level as keyof typeof levelConfig)}
                              <span className={`${levelConfig[skill.level as keyof typeof levelConfig].color} text-white border-0 text-xs font-bold px-2 py-0.5 rounded`} style={{ fontFamily: 'Orbitron, monospace' }}>
                                {levelConfig[skill.level as keyof typeof levelConfig].label.toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white" style={{ fontFamily: 'Orbitron, monospace' }}>Soft_Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {softSkills.map((skill) => (
              <div key={skill.name} className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${skill.color} mb-2.5 sm:mb-3 md:mb-4`}>
                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white" style={{ fontFamily: 'Orbitron, monospace' }}>{skill.name.toUpperCase()}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </section>
  );
}