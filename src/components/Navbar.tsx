import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const navigationItems = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À propos', href: '#apropos' },
  { name: 'Services', href: '#services' },
  { name: 'Projets', href: '#projets' },
  { name: 'Skills', href: '#skills' },
  { name: 'Formation', href: '#formation' },
  { name: 'Équipe', href: '#equipe' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-4 xl:px-6 py-3 shadow-2xl max-w-7xl w-full">
        <div className="flex-shrink-0 mr-3 xl:mr-4 flex items-center gap-2">
          <Terminal className="w-4 h-4 xl:w-5 xl:h-5 text-cyan-400" />
          <span className="text-base xl:text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON_HOUNNOU</span>
        </div>

        <div className="flex items-center gap-0.5 xl:gap-1 overflow-x-auto scrollbar-hide">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`px-3 xl:px-6 py-2 text-xs xl:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                activeSection === item.href.substring(1)
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
              }`}
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tablet Navigation (md to lg) */}
      <div className="hidden md:flex lg:hidden w-full max-w-4xl">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full shadow-2xl w-full">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-base font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON_HOUNNOU</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-slate-800/50"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
          
          {isOpen && (
            <div className="px-3 pb-3 grid grid-cols-2 gap-2 animate-fade-in-up">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                  }`}
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation (below md) */}
      <div className="md:hidden w-full max-w-md">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-sm font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-slate-800/50 h-8 w-8 p-0"
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          {isOpen && (
            <div className="px-2 pb-2 space-y-1 animate-fade-in-up max-h-[70vh] overflow-y-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                  }`}
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}