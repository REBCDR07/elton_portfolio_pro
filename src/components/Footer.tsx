import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Facebook, Terminal } from 'lucide-react';

const quickLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À propos', href: '#apropos' },
  { name: 'Services', href: '#services' },
  { name: 'Projets', href: '#projets' },
  { name: 'Skills', href: '#skills' },
  { name: 'Parcours', href: '#formation' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/REBCDR07' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/elton27/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/eltonhounnou/' },
];

const contactInfo = [
  { icon: Mail, text: 'eltonhounnou27@gmail.com', href: 'mailto:eltonhounnou27@gmail.com' },
  { icon: Phone, text: '+229 55 87 58 94', href: 'tel:+22955875894' },
  { icon: MapPin, text: 'Bénin, Abomey-Calavi', href: null },
];

const serviceLinks = ["Développement Frontend", "Applications Web", "Sites Vitrines", "UI/UX Design"];

// SOUS-COMPOSANTS POUR LA CLARTÉ
const FooterLink = ({ href, name }) => {
  const scrollToSection = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <li>
      <motion.button 
        onClick={() => scrollToSection(href)} 
        className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center group text-sm" 
        style={{ fontFamily: 'Rajdhani, sans-serif' }}
        whileHover={{ x: 5 }}
      >
        <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
        {name}
      </motion.button>
    </li>
  );
};

const ContactLink = ({ icon: Icon, text, href }) => (
    <li className="flex items-center gap-3 group">
      <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
      {href ? (
        <a href={href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm break-words" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{text}</a>
      ) : (
        <span className="text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{text}</span>
      )}
    </li>
);

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.footer 
      ref={ref}
      className="relative bg-slate-950 border-t border-slate-800/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          {/* Section principale (prend plus de place) */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
                <Terminal className="w-7 h-7 text-cyan-400"/>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, monospace' }}>ELTON</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Développeur passionné par la création d'expériences digitales exceptionnelles et de solutions web innovantes.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 transition-colors hover:text-white hover:border-cyan-500/50" aria-label={social.name} whileHover={{ scale: 1.1, y: -3 }}>
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 5).map((link) => <FooterLink key={link.name} {...link} />)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {serviceLinks.map(service => <li key={service} className="hover:text-cyan-400 transition-colors cursor-default">{service}</li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => <ContactLink key={index} {...info} />)}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <span>Créé avec</span>
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              <span>par Elton Hounnou</span>
              <span className="mx-1">•</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
            <motion.button onClick={scrollToTop} className="group p-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300" aria-label="Retour en haut" whileHover={{ scale: 1.1, y: -3 }}>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}