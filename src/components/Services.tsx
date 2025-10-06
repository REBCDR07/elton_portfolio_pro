import { useState } from 'react';
import { Code, Globe, RefreshCw, Wrench, Smartphone, Monitor, ArrowRight, ChevronDown, ChevronUp, Terminal } from 'lucide-react';




const services = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Création d\'applications web modernes avec les dernières technologies (React, JavaScript, TypeScript,...).',
    features: ['SPA & PWA', 'Performance optimale', 'SEO optimisé'],
    color: 'from-cyan-500 to-blue-500',
    detailedDescription: 'Je conçois des applications web sur mesure en utilisant les frameworks JavaScript les plus récents. Chaque projet bénéficie d\'une architecture solide, d\'un code propre et maintenable, et d\'une attention particulière portée à l\'expérience utilisateur. De la conception à la mise en production, je m\'assure avec mon équipe que votre application soit rapide, sécurisée et évolutive.'
  },
  {
    icon: Globe,
    title: 'Sites Vitrines',
    description: 'Sites web élégants et optimisés pour présenter votre activité et attirer vos clients.',
    features: ['Design moderne', 'Responsive', 'CMS intégré'],
    color: 'from-blue-500 to-purple-500',
    detailedDescription: 'Votre site vitrine est votre carte de visite digitale. Je crée des sites web élégants qui reflètent l\'identité de votre marque, optimisés pour la conversion et le référencement. Chaque site est conçu pour être responsive, rapide à charger, et facile à gérer grâce à un système de gestion de contenu intuitif.'
  },
  {
    icon: RefreshCw,
    title: 'Migration & Refonte',
    description: 'Modernisation de vos sites existants avec de nouvelles technologies performantes.',
    features: ['Zéro downtime', 'Data migration', 'Amélioration UX'],
    color: 'from-purple-500 to-pink-500',
    detailedDescription: 'Votre site actuel est dépassé ? Je vous accompagne dans la migration vers des technologies modernes sans interruption de service. Préservation de vos données, amélioration des performances, refonte du design et de l\'expérience utilisateur. Donnez une seconde vie à votre présence en ligne avec une solution performante et pérenne.'
  },
  {
    icon: Wrench,
    title: 'Solutions Sur Mesure',
    description: 'Développement de solutions personnalisées adaptées à vos besoins spécifiques.',
    features: ['Architecture custom', 'Scalabilité', 'Support dédié'],
    color: 'from-pink-500 to-red-500',
    detailedDescription: 'Chaque entreprise a des besoins uniques. Je développe des solutions web entièrement personnalisées qui s\'adaptent parfaitement à vos processus métier. Des outils de gestion interne aux plateformes complexes, je conçois des systèmes robustes et évolutifs qui grandissent avec votre activité, en étroite collaboration avec mon équipe.'
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Applications mobiles natives et hybrides pour iOS et Android.',
    features: ['Cross-platform', 'UI native', 'Offline-first'],
    color: 'from-orange-500 to-yellow-500',
    detailedDescription: 'Atteignez vos utilisateurs sur mobile avec des applications performantes et intuitives. Que ce soit en natif ou en cross-platform avec React Native, je développe avec mon équipe des apps qui offrent une expérience fluide, fonctionnent hors ligne, et s\'intègrent parfaitement avec les fonctionnalités des smartphones modernes.'
  },
  {
    icon: Monitor,
    title: 'Applications Web',
    description: 'Applications web complètes avec interface utilisateur intuitive et backend robuste.',
    features: ['API REST', 'Real-time', 'Cloud ready'],
    color: 'from-green-500 to-cyan-500',
    detailedDescription: 'Des tableaux de bord complexes aux plateformes SaaS, je construis avec mon équipe de développeurs des applications web complètes avec une architecture full-stack moderne. Backend robuste, API performantes, websockets pour le temps réel, et déploiement cloud optimisé. Des solutions prêtes à scaler avec votre croissance.'
  }
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 lg:py-32 relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] md:bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-3 sm:mb-4 md:mb-6">
            <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
              $ services --list
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            Mes <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Une gamme complète de services pour transformer vos idées en solutions digitales performantes et sur mesure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{ animationDelay: `${index * 10}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl md:rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative mb-3 sm:mb-4 md:mb-6">
                <div className={`inline-flex p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              <div className="relative">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-slate-400 mb-3 sm:mb-4 md:mb-6 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-3 sm:mb-4 md:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => toggleService(index)}
                  className="flex items-center gap-1.5 sm:gap-2 text-cyan-400 font-bold group-hover:gap-2 sm:group-hover:gap-3 transition-all text-xs sm:text-sm md:text-base" 
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  {expandedService === index ? '[  Réduire  ]' : '[  En Savoir +  ]'}
                  {expandedService === index ? (
                    <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:-translate-y-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>

                {expandedService === index && (
                  <div className="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-cyan-500/20">
                    <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {service.detailedDescription}
                    </p>
                  </div>
                )}
              </div>

              <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 md:gap-6 bg-slate-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 max-w-2xl hover:border-cyan-400 transition-all mx-3">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
              Vous_avez_un_projet ?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-400 px-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Discutons ensemble de votre projet et trouvons la meilleure solution pour le concrétiser.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-1.5 sm:gap-2">
                Start_Conversation
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
}