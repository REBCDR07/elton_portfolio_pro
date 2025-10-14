import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';



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
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-center pt-2 sm:pt-3 md:pt-4 lg:pt-6 px-2 sm:px-3 md:px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-3 xl:px-6 py-2.5 shadow-2xl max-w-7xl w-full">
          <div className="flex-shrink-0 mr-2 xl:mr-4 flex items-center gap-1.5 xl:gap-2">
            <Terminal className="w-3.5 h-3.5 xl:w-5 xl:h-5 text-cyan-400" />
            <span className="text-sm xl:text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON_HOUNNOU</span>
          </div>

          <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                aria-label="Naviguer vers la section"
                className={`px-2.5 xl:px-6 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
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
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-sm font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON_HOUNNOU</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Ouvrir le menu de navigation"
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
              <div className="px-2 pb-2 grid grid-cols-2 gap-1.5 animate-fade-in-up">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    aria-label="Naviguer vers la section"
                    className={`text-center px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
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

        {/* Mobile Navigation - Compact Header */}
        <div className="md:hidden w-full px-2">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Ouvrir le menu de navigation"
                className="text-white hover:bg-slate-800/50 h-8 w-8 p-0"
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl animate-fade-in">
          <div className="h-full flex flex-col pt-20 px-6">
            <div className="flex-1 flex flex-col justify-center space-y-2 max-h-[80vh] overflow-y-auto">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  aria-label="Naviguer vers la section"
                  className={`w-full text-left px-5 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-400 border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border-2 border-slate-700/30'
                  }`}
                  style={{ 
                    fontFamily: 'Rajdhani, sans-serif',
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      activeSection === item.href.substring(1) ? 'bg-cyan-400' : 'bg-slate-500'
                    }`}></span>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="py-6 text-center">
              <p className="text-slate-500 text-xs" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                © 2025 Elton
              </p>
            </div>
          </div>
        </div>
      )}

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
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}