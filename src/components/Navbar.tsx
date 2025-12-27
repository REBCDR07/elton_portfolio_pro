import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window. addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [isOpen]);

  /**
   * Enhanced link click handler with proper smooth scrolling and menu closing
   * Handles both click and touch events for mobile devices
   */
  const handleLinkClick = (e: React. MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>, href: string) => {
    // Prevent default navigation behavior
    e.preventDefault();
    
    // Close mobile menu immediately
    setIsOpen(false);

    // Extract the section ID from href
    const sectionId = href.replace('#', '');
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      // Use smooth scroll behavior with proper timing
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } else {
      // Fallback:  scroll to top if section not found
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  /**
   * Toggle mobile menu with proper state management
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-blue-400">
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link. href)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            onTouchEnd={toggleMenu}
            aria-label="Toggle mobile menu"
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2"
          >
            {isOpen ?  <X size={24} /> :  <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks. map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  onTouchEnd={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-slate-700 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
