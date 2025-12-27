import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';

interface NavLink {
  name: string;
  nameFr: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const navLinks: NavLink[] = [
    { name: 'Home', nameFr: 'Accueil', href: '#home' },
    { name: 'About', nameFr: 'À propos', href: '#about' },
    { name: 'Projects', nameFr: 'Projets', href: '#projects' },
    { name: 'Skills', nameFr: 'Compétences', href: '#skills' },
    { name: 'Contact', nameFr: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const nav = document.querySelector('nav');
      
      if (nav && !nav.contains(target)) {
        setIsOpen(false);
      }
    };

    // Add small delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  /**
   * Enhanced link click handler with proper smooth scrolling and menu closing
   */
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const sectionId = href.replace('#', '');
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  /**
   * Toggle mobile menu
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Toggle theme
   */
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add your theme switching logic here
    document.documentElement.classList.toggle('dark');
  };

  /**
   * Toggle language
   */
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode 
            ? 'bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg'
            : 'bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}
      style={{ fontFamily: 'Rajdhani, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              &gt;_ Elton
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                } transition-colors duration-200 font-medium`}
              >
                {language === 'fr' ? link.nameFr : link.name}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`p-2 rounded-lg ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-300'
              } transition-all duration-200 flex items-center gap-1`}
            >
              <Globe size={18} />
              <span className="text-sm font-semibold">{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-300'
              } transition-all duration-200`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                isDarkMode
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {language === 'fr' ? 'Me contacter' : 'Contact Me'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className={`md:hidden p-2 ${
              isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
            } transition-colors`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden ${
              isDarkMode 
                ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700' 
                : 'bg-gradient-to-b from-gray-100 to-gray-200 border-t border-gray-300'
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-300'
                  } transition-colors duration-200`}
                >
                  {language === 'fr' ? link.nameFr : link.name}
                </a>
              ))}

              {/* Mobile Controls */}
              <div className="flex items-center gap-2 px-3 py-2">
                {/* Language Toggle Mobile */}
                <button
                  onClick={toggleLanguage}
                  aria-label="Toggle language"
                  className={`flex-1 p-2 rounded-lg ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-300'
                  } transition-all duration-200 flex items-center justify-center gap-1`}
                >
                  <Globe size={18} />
                  <span className="text-sm font-semibold">{language.toUpperCase()}</span>
                </button>

                {/* Theme Toggle Mobile */}
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className={`flex-1 p-2 rounded-lg ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-300'
                  } transition-all duration-200 flex items-center justify-center`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile Contact Button */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className={`block mx-3 my-2 px-4 py-2 rounded-full font-semibold text-center transition-all duration-200 ${
                  isDarkMode
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {language === 'fr' ? 'Me contacter' : 'Contact Me'}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
