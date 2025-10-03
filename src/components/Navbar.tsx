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
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex-shrink-0 mr-4 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON_HOUNNOU</span>
        </div>

        {navigationItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
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

      {/* Mobile Navigation */}
      <div className="md:hidden w-full max-w-md">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON</span>
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
            <div className="px-3 pb-3 space-y-1 animate-fade-in-up">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
    </nav>
  );
}