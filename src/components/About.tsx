import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, GraduationCap, Linkedin, Github, Facebook, Download } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import profileImage from '@/assets/profile.webp';
import cvFile from '@/assets/cv.pdf';

// VARIANTES D'ANIMATION POUR FRAMER MOTION
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

// SOUS-COMPOSANTS POUR LA CLARTÉ
const InfoItem: React.FC<{ icon: any, text: string }> = ({ icon: Icon, text }) => (
  <motion.div variants={itemVariants} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/30 transition-colors group">
    <div className="p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
      <Icon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
    </div>
    <span className="text-slate-700 dark:text-slate-300 text-sm break-all" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      {text}
    </span>
  </motion.div>
);

const SocialLink = ({ icon: Icon, name, url, color }: { icon: any, name: string, url: string, color: string }) => (
  <motion.a
    variants={itemVariants}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex flex-col items-center gap-2 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-xl transition-all duration-300 ${color}`}
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-6 h-6 text-slate-500 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors" />
    <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      {name}
    </span>
  </motion.a>
);

export default function About() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const fullText = language === 'fr'
    ? "Développeur passionné qui transforme le café en code..."
    : "Passionate developer turning coffee into code...";

  // Reset typewriter when language changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [language]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText.length, fullText]);

  const contactInfo = [
    { icon: Mail, text: 'eltonhounnou27@gmail.com' },
    { icon: MapPin, text: 'Abomey-Calavi, Bénin' },
    { icon: Phone, text: '+229 55 87 58 94' },
    { icon: GraduationCap, text: language === 'fr' ? 'Licence en Systèmes Informatiques et Logiciels (en cours)' : 'Bachelor in Computer Systems and Software (Ongoing)' },
  ];

  return (
    <section id="apropos" className="py-24 lg:py-32 relative bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-5 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-5 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t('about.title').split(' ')[0]} <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">{t('about.title').split(' ').slice(1).join(' ')}</span>
          </h2>

          <div className="text-xl md:text-3xl text-cyan-600 dark:text-cyan-400 min-h-[3rem] flex items-center justify-center" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span>{displayText}</span>
            <span className="inline-block w-1 h-8 bg-cyan-600 dark:bg-cyan-400 ml-2 animate-pulse"></span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {/* COLONNE GAUCHE : IMAGE & CONTACT */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="relative group">
              <div className="w-full aspect-square rounded-3xl overflow-hidden border-4 border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 shadow-2xl group-hover:border-cyan-400 dark:group-hover:border-cyan-500/50 transition-all duration-300">
                <img
                  src={profileImage}
                  alt="Elton HOUNNOU - Développeur Web"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl px-6 py-3 shadow-xl whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{t('about.status')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 space-y-3 shadow-lg dark:shadow-none">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>{t('about.info')}</h3>
              {contactInfo.map(info => <InfoItem key={info.text} icon={info.icon} text={info.text} />)}
            </motion.div>
          </motion.div>

          {/* COLONNE DROITE : BIO & LIENS */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 shadow-lg dark:shadow-none">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
                {t('about.bio')}
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <p className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono mt-1">$</span>
                  <span>{t('about.intro1')} <strong className="text-cyan-600 dark:text-cyan-400">N. E. Ronald Bill HOUNNOU</strong>, {t('about.intro2')}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono mt-1">$</span>
                  <span>{t('about.intro3')} <strong className="text-purple-600 dark:text-purple-400">{t('about.intro4')}</strong>{t('about.intro5')}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono mt-1">$</span>
                  <span>{t('about.intro6')}</span>
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 flex flex-col justify-center shadow-lg dark:shadow-none">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center" style={{ fontFamily: 'Orbitron, monospace' }}>{t('about.socials')}</h3>
                <div className="grid grid-cols-3 gap-3">
                  <SocialLink name="LinkedIn" icon={Linkedin} url="https://www.linkedin.com/in/elton27/" color="hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:border-blue-400 dark:hover:border-blue-500/50" />
                  <SocialLink name="GitHub" icon={Github} url="https://github.com/REBCDR07" color="hover:bg-slate-200 dark:hover:bg-slate-500/10 hover:border-slate-400 dark:hover:border-slate-500/50" />
                  <SocialLink name="Facebook" icon={Facebook} url="https://www.facebook.com/eltonhounnou/" color="hover:bg-blue-200 dark:hover:bg-blue-600/10 hover:border-blue-500 dark:hover:border-blue-600/50" />
                </div>
              </div>
              <div className="md:col-span-2">
                <a
                  href={cvFile}
                  download="CV_Elton_HOUNNOU.pdf"
                  className="w-full h-full group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Download className="w-10 h-10 mb-3" />
                    <span className="text-lg" style={{ fontFamily: 'Orbitron, monospace' }}>{t('about.download')}</span>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}