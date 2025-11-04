import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navigationItems = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À propos', href: '#apropos' },
  { name: 'Services', href: '#services' },
  { name: 'Projets', href: '#projets' },
  { name: 'Skills', href: '#skills' },
  { name: 'Parcours', href: '#formation' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    let current = 'accueil';
    for (const item of navigationItems) {
      const section = document.getElementById(item.href.substring(1));
      if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
        current = item.href.substring(1);
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'pt-3' : 'pt-6'}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-full px-4 py-2 shadow-2xl">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON_HOUNNOU</span>
            </div>
            <div className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                    activeSection === item.href.substring(1) ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-4 py-3 shadow-2xl">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON</span>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X /> : <Menu />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full flex flex-col pt-24 px-6">
              <motion.div 
                className="flex flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { staggerChildren: 0.07 } }}
              >
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-5 py-4 rounded-xl text-lg font-semibold transition-colors ${
                      activeSection === item.href.substring(1) ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}