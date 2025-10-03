

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  Wrench,
  Palette,
  Brain,
  Zap,
  Users,
  Target,
  Lightbulb,
  Heart,
  Terminal,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Import Google Fonts
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
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' }
  ],
  //'Frameworks Backend': [
//    { name: 'Node.js/Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
//    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
//    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
//  ],
  'DevOps': [
    { name: 'Git/GitHub', level: 'advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'AWS/Vercel', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Netlify', level: 'intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  ],

  'UI/UX Design': [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
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
  advanced: {
    color: 'bg-emerald-500',
    dots: [true, true, true],
    label: 'Avancé'
  },
  intermediate: {
    color: 'bg-yellow-500',
    dots: [true, true, false],
    label: 'Intermédiaire'
  },
  beginner: {
    color: 'bg-orange-500',
    dots: [true, false, false],
    label: 'Débutant'
  }
};

const categoryIcons: { [key: string]: typeof Code } = {
  'Langages de programmation': Code,
  'Base de données': Database,
  'Frameworks Frontend': Wrench,
  'Frameworks Backend': Wrench,
  'DevOps': Wrench,
  'UI/UX Design': Palette
};

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    Object.keys(technicalSkills)
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const renderLevelDots = (level: keyof typeof levelConfig) => {
    const config = levelConfig[level];
    return (
      <div className="flex space-x-1">
        {config.dots.map((filled, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${filled ? config.color : 'bg-slate-700'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
              $ skills --show-all
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            MES <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">COMPÉTENCES</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Un panel diversifié de compétences techniques et humaines acquises
            au fil de mes expériences et projets professionnels.
          </p>
        </div>

        {/* AI Tools Section */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            AI_TOOLS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {aiTools.map((tool, index) => (
              <div
                key={tool.name}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-4 md:p-6 rounded-2xl hover:scale-105 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tool.color} mb-4`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {tool.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            TECH_SKILLS
          </h3>

          <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {Object.entries(technicalSkills).map(([category, skills]) => {
              const Icon = categoryIcons[category];
              const isExpanded = expandedCategories.includes(category);

              return (
                <div
                  key={category}
                  className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <Button
                    variant="ghost"
                    onClick={() => toggleCategory(category)}
                    className="w-full p-4 md:p-6 justify-between text-left hover:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-xl">
                        <Icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <span className="font-bold text-base md:text-lg text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
                        {category.toUpperCase().replace(/ /g, '_')}
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </Button>

                  {isExpanded && (
                    <div className="px-4 md:px-6 pb-6 space-y-3">
                      {skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex flex-wrap items-center justify-between p-3 md:p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-[120px]">
                            {skill.icon && (
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-6 h-6"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            )}
                            <span className="font-semibold text-slate-300 group-hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                              {skill.name}
                            </span>
                          </div>
                          {skill.level && (
                            <div className="flex items-center gap-3 mt-2 sm:mt-0">
                              {renderLevelDots(skill.level as keyof typeof levelConfig)}
                              <Badge className={`${levelConfig[skill.level as keyof typeof levelConfig].color} text-white border-0 text-xs font-bold`} style={{ fontFamily: 'Orbitron, monospace' }}>
                                {levelConfig[skill.level as keyof typeof levelConfig].label.toUpperCase()}
                              </Badge>
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

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            SOFT_SKILLS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}>
                    <skill.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="font-bold text-sm md:text-lg text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {skill.name.toUpperCase()}
                  </h4>
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
