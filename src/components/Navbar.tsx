import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Navbar({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '#accueil' },
    { name: t('nav.about'), href: '#apropos' },
    { name: t('nav.education'), href: '#formation' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projets' },
    { name: t('nav.team'), href: '#equipe' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleLinkClick(e, '#accueil')}>
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, monospace' }}>
              NRBH<span className="text-cyan-500 dark:text-cyan-400">.Dev</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative group"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Language Toggle */}
             <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
              aria-label="Toggle Language"
            >
              <Globe size={18} />
              <span className="text-xs font-bold font-mono">{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
             <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Globe size={18} />
              <span className="text-xs font-bold font-mono">{language.toUpperCase()}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
