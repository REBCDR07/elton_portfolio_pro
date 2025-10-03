import { Heart, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react';

// Import Google Fonts
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, monospace' }}>
                ELTON
              </h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Développeur Frontend & AI Full-Stack Junior passionné par la création d'expériences digitales exceptionnelles et solutions web innovantes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center group"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              SERVICES
            </h4>
            <ul className="space-y-3 text-slate-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Développement Web</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Applications Mobile</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Consulting</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              CONTACT
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                    <info.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {info.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <span>CRÉÉ_AVEC</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>PAR_ELTON</span>
              <span className="mx-2">•</span>
              <span>© 2025 TOUS_DROITS_RÉSERVÉS</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
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