import { Heart, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const quickLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À propos', href: '#apropos' },
  { name: 'Services', href: '#services' },
  { name: 'Projets', href: '#projets' },
  { name: 'Skills', href: '#skills' },
  { name: 'Formation', href: '#formation' },
  { name: 'Équipe', href: '#equipe' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/REBCDR07', color: 'hover:text-slate-300' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/elton27/', color: 'hover:text-blue-400' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/eltonhounnou/', color: 'hover:text-blue-500' },
];

const contactInfo = [
  { icon: Mail, text: 'eltonhounnou27@gmail.com', href: 'mailto:eltonhounnou27@gmail.com' },
  { icon: Phone, text: '+229 01 40 66 33 49 | 01 55 87 58 94', href: 'tel:+2290140663349' },
  { icon: MapPin, text: 'Bénin, Abomey-Calavi', href: null },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="lg:col-span-1">
            <div className="mb-3 sm:mb-4 md:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, monospace' }}>
                ELTON
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Développeur Frontend & AI Full-Stack Junior passionné par la création d'expériences digitales exceptionnelles et solutions web innovantes.
            </p>
            <div className="flex gap-1.5 sm:gap-2 md:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 sm:p-2 md:p-3 bg-slate-800/50 border border-slate-700/50 rounded-md sm:rounded-lg md:rounded-xl text-slate-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center group text-xs sm:text-sm md:text-base"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    <span className="w-0 group-hover:w-1.5 sm:group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-1.5 sm:group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-slate-400 text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Développement Web</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Applications Mobile</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Consulting</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-1.5 sm:gap-2 md:gap-3 group">
                  <div className="p-1 sm:p-1.5 md:p-2 bg-slate-800/50 rounded-md sm:rounded-lg group-hover:bg-cyan-500/10 transition-colors flex-shrink-0">
                    <info.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm break-words"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-xs sm:text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {info.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 py-4 sm:py-5 md:py-6 lg:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 md:gap-2 text-slate-400 text-xs sm:text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <span>Créé_avec</span>
              <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-red-500 fill-current animate-pulse" />
              <span>Par_Elton</span>
              <span className="mx-1 sm:mx-1.5 md:mx-2">•</span>
              <span>© 2025 Tout droits réservés</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group p-1.5 sm:p-2 md:p-3 bg-slate-800/50 border border-slate-700/50 rounded-md sm:rounded-lg md:rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
}