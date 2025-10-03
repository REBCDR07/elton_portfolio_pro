import { GraduationCap, Briefcase, Award, Calendar, MapPin, TrendingUp } from 'lucide-react';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const timeline = [
  {
    type: 'work',
    title: 'Développeur Full-Stack',
    institution: 'Freelance ',
    location: 'Bénin , Abomey-Calavi',
    year: 'Juillet 2025 - Août 2025',
    description: 'Développement d\'applications web pour mon insertion en Développement FullStack. Technologies : React, Tailwind CSS, Vite, Firebase.',
    icon: Briefcase,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    type: 'education',
    title: 'Licence en Systèmes Informatiques et Logiciels',
    institution: 'Ecole Supérieure du Bénin (ESM BENIN)',
    location: 'Bénin , Abomey-Calavi',
    year: '2023 - En Cours',
    description: 'Spécialisation en développement web et logiciels. Projet de fin d\'études en cours... .',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    type: 'work',
    title: 'Développeur Frontend (Stage)',
    institution: 'AutoFormation | Espace Coworking de JOB BOOSTER BENIN',
    location: 'Bénin , Abomey-Calavi',
    year: 'Juillet 2025 - Août 2025',
    description: 'Stage d\'autoformation d\'un mois en développement frontend. Création d\'interfaces utilisateur responsives avec React et Tailwind CSS.',
    icon: Briefcase,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    type: 'certification',
    title: 'Certification Python (Basic)',
    institution: ' HackerRank',
    location: 'En ligne',
    year: 'Juin 2025',
    description: 'Compétences en Python Basic.',
    icon: Award,
    gradient: 'from-yellow-500 to-orange-500'
  },
    {
    type: 'certification',
    title: 'Certification C++',
    institution: 'CodinGame',
    location: 'En ligne',
    year: 'Juillet 2025',
    description: 'Compétences en résolution de problèmes avec C++.',
    icon: Award,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    type: 'certification',
    title: 'Certification JavaScript',
    institution: 'CodinGame',
    location: 'En ligne',
    year: 'Juillet 2025',
    description: 'Compétences en résolution de problèmes avec JavaScript.',
    icon: Award,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    type: 'certification',
    title: 'Certification Réseaux Sociaux et Stratégie Digitale',
    institution: 'Blémama',
    location: 'En ligne',
    year: 'Juin 2025',
    description: 'Compétences en Réseaux Sociaux et Stratégie Digitale.',
    icon: Award,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    type: 'education',
    title: 'Baccalauréat Scientifique : Série D - Biologie | Géologie ',
    institution: 'Collège d\'Enseignement Général de Houègbo : CEG Houègbo',
    location: 'Bénin , Atlantique | Toffo',
    year: '2023',
    description: 'Spécialité Biologie & Géologie. Mention Passable.',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500'
  },
];

const typeConfig = {
  education: {
    label: 'Formation',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400'
  },
  work: {
    label: 'Expérience',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400'
  },
  certification: {
    label: 'Certification',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-400'
  }
};

export default function Education() {
  return (
    <section id="formation" className="py-16 sm:py-24 md:py-32 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              MON_ÉVOLUTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            MON <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500 bg-clip-text text-transparent">PARCOURS</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Découvrez mon évolution professionnelle et académique, des premiers pas 
            dans l'informatique jusqu'à mon expertise actuelle en développement web.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-500 opacity-30 transform md:-translate-x-px"></div>

            {timeline.map((item, index) => {
              const config = typeConfig[item.type as keyof typeof typeConfig];
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className="relative flex items-center mb-10 sm:mb-12 md:mb-16 last:mb-0"
                >
                  <div className={`absolute left-3 md:left-1/2 transform md:-translate-x-1/2 z-10`}>
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg`}>
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-gradient-to-br from-white to-transparent"></div>
                    </div>
                  </div>

                  <div className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} pl-10 md:pl-0`}>
                    <div className={`group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] ${isEven ? 'md:text-right' : ''}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity`}></div>

                      <div className="relative">
                        <div className={`inline-flex items-center gap-2 ${config.bgColor} border ${config.borderColor} px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3`}>
                          <item.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${config.textColor}`} />
                          <span className={`text-xs font-medium ${config.textColor}`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                            {config.label}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                          {item.title}
                        </h3>

                        <div className={`flex items-start gap-2 mb-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <span className="font-semibold text-xs sm:text-sm text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                            {item.institution}
                          </span>
                        </div>

                        <div className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3 text-xs sm:text-sm ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <div className="flex items-center gap-1 text-slate-400">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span style={{ fontFamily: 'Rajdhani, sans-serif' }}>{item.year}</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-400">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span style={{ fontFamily: 'Rajdhani, sans-serif' }}>{item.location}</span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
              2+
            </div>
            <div className="text-xs sm:text-sm text-slate-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              ANNÉES_D'EXPÉRIENCE
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
              3
            </div>
            <div className="text-xs sm:text-sm text-slate-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              DIPLÔMES_OBTENUS
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
              4
            </div>
            <div className="text-xs sm:text-sm text-slate-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CERTIFICATION_AWS
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}