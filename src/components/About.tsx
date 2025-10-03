import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, GraduationCap, Linkedin, Github, Facebook, Download, Briefcase, Code, Coffee, Zap } from 
'lucide-react';



import profileImage from '@/assets/profile.jpg';
import cvFile from '@/assets/cv.pdf';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const funFacts = [
  { icon: Code, text: 'Code la nuit' },
  { icon: Coffee, text: '∞ Cafés consommés' },
  { icon: Zap, text: 'Bug solver ' },
];

export default function About() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Développeur passionné qui transforme le café en code...";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/elton27/', color: 'hover:bg-blue-500/10 hover:border-blue-500/50' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/REBCDR07', color: 'hover:bg-slate-500/10 hover:border-slate-500/50' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/eltonhounnou/', color: 'hover:bg-blue-600/10 hover:border-blue-600/50' },
  ];

  return (
    <section id="apropos" className="py-32 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-300 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Qui suis-je ?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            À <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Propos</span>
          </h2>
          
          <div className="text-2xl md:text-3xl text-cyan-400 min-h-[3rem] flex items-center justify-center" style={{ fontFamily: 'Orbitron, monospace' }}>
            {displayText}
            <span className="inline-block w-1 h-8 bg-cyan-400 ml-1 animate-pulse"></span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-20">
          <div className="flex gap-4 mb-8">
            {funFacts.map((fact, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 px-4 py-2 rounded-full flex items-center gap-2 hover:scale-110 transition-transform"
              >
                <fact.icon className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {fact.text}
                </span>
              </div>
            ))}
          </div>

          <div className="relative group mb-8">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-slate-700/50 bg-slate-800/50 backdrop-blur-xl shadow-2xl group-hover:border-cyan-500/50 transition-all duration-300">
                <img 
                  src={profileImage} 
                  alt="Elton HOUNNOU - Développeur Web" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    DISPONIBLE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl px-6 py-4 max-w-2xl">
            <code className="text-cyan-400" style={{ fontFamily: 'Orbitron, monospace' }}>
              const elton = {'{'} skills: ['React', 'TypeScript', 'JavaScript'], status: '🚀 pull up' {'}'} ;
            </code>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, monospace' }}>
                    2+
                  </h3>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Années d'expérience 
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
                CONTACT_INFO
              </h3>
              
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700/30 transition-colors group">
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  eltonhounnou27@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700/30 transition-colors group">
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Abomey-Calavi, Bénin
                </span>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700/30 transition-colors group">
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  +229 01 40 66 33 49 / 01 55 87 58 94
                </span>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700/30 transition-colors group">
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Systèmes Informatiques et Logiciels : Licence en cours ...
                </span>
              </div>
            </div>

            <a 
              href={cvFile} 
              download="CV_Elton_HOUNNOU.pdf"
              className="w-full group relative px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                <Download className="w-5 h-5" />
                TÉLÉCHARGER_CV.pdf
              </span>
            </a>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
                // MON_HISTOIRE
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <p className="text-lg">
                  <span className="text-cyan-400 font-mono">{'>'}</span> Salut ! Je suis <span className="text-cyan-400 font-bold">N. E. Ronald Bill HOUNNOU</span>, 
                  un développeur qui transforme des idées folles en applications web qui déchirent. Je transforme des concepts créatifs en expériences numériques captivantes et fonctionnelles. Spécialisé dans les technologies front-end modernes, je crée des interfaces utilisateur intuitives et des sites web performants qui allient esthétique et efficacité technique.
                </p>
                <p className="text-lg">
                  <span className="text-cyan-400 font-mono">{'>'}</span> Depuis plus de <span className="text-purple-400 font-bold">2 ans</span>, chaque ligne de code que j'écris reflète ma volonté de créer des solutions élégantes et fonctionnelles. Je m'épanouis dans l'apprentissage continu des nouvelles technologies et dans la résolution de défis techniques complexes, toujours avec l'objectif de dépasser les attentes.. Mon secret ? 
                  Du code propre, des bugs squashés et beaucoup (BEAUCOUP) de café ☕
                </p>
                <p className="text-lg">
                  <span className="text-cyan-400 font-mono">{'>'}</span> J'adore créer des interfaces qui font dire "Wow !" 
                  et des solutions qui tiennent et qui épousent vos idées. Et ma maîtrise s'étend sur un éventail de technologies modernes du développement web.
                </p>
                <p className="text-lg">
                  <span className="text-cyan-400 font-mono">{'>'}</span> Quand je ne code pas ? 
                  Je debug... ou je pense à mon prochain projet. Ouais, je suis accro 🚀...
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
                // SOCIAL_LINKS
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                    <span className="text-xs text-slate-400 group-hover:text-slate-300 font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {'</>'}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </section>
  );
}