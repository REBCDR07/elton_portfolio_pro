import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Eye, Sparkles, Code, Rocket, Terminal } from 'lucide-react';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const heroStats = [
  { number: '2+', label: 'Ans d\'expérience', icon: Sparkles },
  { number: '+10', label: 'Projets réalisés', icon: Code },
  { number: '100%', label: 'Satisfaction client', icon: Rocket },
  { number: '24H', label: 'Délai de réponse', icon: Mail },
];

const roles = [
  "FRONTEND_DEVELOPPEUR",
  "AI_FULLSTACK_JUNIOR",
  "UI/UX_DESIGNER", 
  "BUG_DESTROYER",
  "COFFEE_ADDICT"
];

const codeSnippets = [
  "npm install",
  "npm run dev",
  "npm install awesomeness",
  "const skills = ['React', 'Node', 'TS'];",
  "while (coding) { drink(coffee); }",
  ".gitignore",
  ".gitattributes",
  "nodes_modules",
  ".log",
  "git reset",
  "git reset --soft HEAD~1",
  "git revert"
];

const codeSnippet = [
  "git init -b main",
  "git add .",
  "git commit -m 'magic'",
  "git remote add origin + url",
  "git push -u origin main",
  "git status",
  "git log",
  "git branch",
  "git pull",
  "git clone",
  "git stash",
  "git stash pop"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentCode, setCurrentCode] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    
    const codeInterval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    
    return () => {
      clearInterval(roleInterval);
      clearInterval(codeInterval);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjets = () => {
    document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-slate-950 px-3 py-16 sm:py-20">
      <div className="absolute inset-0">
        <div className="absolute top-5 sm:top-10 md:top-20 left-5 sm:left-10 md:left-20 w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 sm:bottom-10 md:bottom-20 right-5 sm:right-10 md:right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.02)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto sm:px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <div className="h-6 sm:h-12 md:h-20"></div>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-4 sm:mb-6 md:mb-8 shadow-2xl">
              <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-400 animate-pulse" />
              <code className="text-xs sm:text-sm text-cyan-400 font-mono" style={{ fontFamily: 'Orbitron, monospace' }}>
                $ status : en_line
              </code>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="h-4 sm:h-8 md:h-16"></div>

            <h6 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-black mb-3 sm:mb-4 md:mb-6 relative px-2" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight block">
                Elton Ronald Bill Hounnou 
              </span>
            </h6>

            <div className="h-10 sm:h-12 md:h-16 lg:h-20 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center px-2">
              <div className="relative">
                <p className="text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-cyan-400 font-bold glitch-text break-words" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {roles[currentRole]}
                </p>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animation: `ping ${1 + i * 0.3}s infinite`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Je transforme vos idées en de vraies <span className="text-cyan-400 font-bold">solutions web responsive, performante, élégantes & intuitives</span> qui déchirent. 
              Stack moderne, code clean, résultats impressionnants et impécables.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-8 sm:mb-12 md:mb-20 px-3">
              <button
                onClick={scrollToContact}
                className="group relative px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  CONTACTER_MOI
                </span>
              </button>

              <button
                onClick={scrollToProjets}
                className="group px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 text-cyan-400 font-bold rounded-lg sm:rounded-xl hover:bg-slate-800/50 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg text-xs sm:text-sm md:text-base"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:text-cyan-300 transition-colors" />
                  VOIR_MES_PROJETS
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-20 px-2">
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400 mb-1.5 sm:mb-2 md:mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1 sm:mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs sm:text-sm text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <strong className="text-sm sm:text-base md:text-xl text-slate-400">mon _terminal_</strong>
              </span>
            </div>
            <code className="text-cyan-400 font-mono flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base overflow-x-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="text-green-400 flex-shrink-0">$</span>
              <span className="whitespace-nowrap">{codeSnippets[currentCode]}</span>
              <span className="inline-block w-1 sm:w-1.5 md:w-2 h-3.5 sm:h-4 md:h-5 bg-cyan-400 animate-pulse flex-shrink-0"></span>
            </code>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs sm:text-sm text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <strong className="text-sm sm:text-base md:text-xl text-slate-400">mon _terminal_</strong>
              </span>
            </div>
            <code className="text-cyan-400 font-mono flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base overflow-x-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="text-green-400 flex-shrink-0">$</span>
              <span className="whitespace-nowrap">{codeSnippet[currentCode]}</span>
              <span className="inline-block w-1 sm:w-1.5 md:w-2 h-3.5 sm:h-4 md:h-5 bg-cyan-400 animate-pulse flex-shrink-0"></span>
            </code>
          </div>

          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="group p-1.5 sm:p-2 md:p-3 rounded-full bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 hover:bg-slate-800/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['</>', '{...}', '( )', '[ ]', '==', '!='].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-sm sm:text-base md:text-xl lg:text-2xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              fontFamily: 'Orbitron, monospace'
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(15px) rotate(5deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .glitch-text {
          text-shadow: 
            2px 2px 0 rgba(6, 182, 212, 0.3),
            -2px -2px 0 rgba(168, 85, 247, 0.3);
        }
      `}</style>
    </section>
  );
}