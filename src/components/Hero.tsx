import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Eye, Sparkles, Code, Rocket, Terminal } from 'lucide-react';

// Import Google Fonts
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
  "FRONT_END_DEVELOPPEUR",
  "AI_FULL_STACK_DEVELOPPEUR",
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
    <section id="accueil" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-slate-950">

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 sm:w-96 h-56 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Main Hero Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 

            <div className="h-12 sm:h-20"></div>

            {/* Terminal Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-2xl">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
              <code className="text-xs sm:text-sm text-cyan-400 font-mono" style={{ fontFamily: 'Orbitron, monospace' }}>
                $ status : en_line
              </code>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="h-8 sm:h-16"></div>

            {/* Main Title */}
            <h6 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-4 sm:mb-6 relative px-2" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight block">
                Elton Ronald Bill Hounnou 
              </span>
            </h6>

            {/* Animated Role with Glitch Effect */}
            <div className="h-16 sm:h-20 mb-6 sm:mb-8 flex items-center justify-center px-2">
              <div className="relative">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-400 font-bold glitch-text break-words" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {roles[currentRole]}
                </p>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animation: `ping ${1 + i * 0.3}s infinite`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Je transforme vos idées en de vraies <span className="text-cyan-400 font-bold">solutions web responsive, performante, élégantes & intuitives</span> qui déchirent. 
              Stack moderne, code clean, résultats impressionnants et impécables.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-20 px-4">
              <button
                onClick={scrollToContact}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  CONTACTER_MOI
                </span>
              </button>

              <button
                onClick={scrollToProjets}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 text-cyan-400 font-bold rounded-xl hover:bg-slate-800/50 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-cyan-300 transition-colors" />
                  VOIR_MES_PROJETS
                </span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-12 sm:mb-20 px-2">
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-4 sm:p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mb-2 sm:mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1 sm:mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
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

          {/* Code Snippet */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs sm:text-sm text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <strong className="text-sm sm:text-lg md:text-xl text-slate-400">mon _terminal_</strong>
              </span>
            </div>
            <code className="text-cyan-400 font-mono flex items-center gap-2 text-xs sm:text-sm md:text-base overflow-x-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="text-green-400 flex-shrink-0">$</span>
              <span className="whitespace-nowrap">{codeSnippets[currentCode]}</span>
              <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-cyan-400 animate-pulse flex-shrink-0"></span>
            </code>
          </div>

          {/* Code Snippet 2 */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs sm:text-sm text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <strong className="text-sm sm:text-lg md:text-xl text-slate-400">mon _terminal_</strong>
              </span>
            </div>
            <code className="text-cyan-400 font-mono flex items-center gap-2 text-xs sm:text-sm md:text-base overflow-x-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="text-green-400 flex-shrink-0">$</span>
              <span className="whitespace-nowrap">{codeSnippet[currentCode]}</span>
              <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-cyan-400 animate-pulse flex-shrink-0"></span>
            </code>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="group p-2 sm:p-3 rounded-full bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 hover:bg-slate-800/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['</>', '{...}', '( )', '[ ]', '==', '!='].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-base sm:text-xl md:text-2xl font-bold"
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