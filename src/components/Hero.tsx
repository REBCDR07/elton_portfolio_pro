import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Eye } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { t } = useLanguage();

  const roles = [
    t('Frontend Developer'),
    t('Vibe Coding'),
    t('Problem Solver'),
    t('AI Enthusiast'),
    t('Music Lover'),
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 p-4 pt-32 transition-colors duration-300"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-50px] w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[140px] animate-pulse"></div>
        <div
          className="absolute bottom-[-150px] right-[-50px] w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
 
      {/* Decorative subtle grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-300 via-slate-50 to-slate-50 dark:from-slate-700 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />

      <div className="relative z-20 text-center max-w-4xl mx-auto">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 px-6 py-2 rounded-full mb-8 shadow-lg"
        >
          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
          <span className="font-mono text-sm">{t('hero.status')}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
          style={{ fontFamily: "Orbitron, monospace" }}
        >
          N. E. Ronald Bill Hounnou
        </motion.h1>

        {/* Dynamic Roles */}
        <div className="h-10 md:h-12 mb-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[currentRoleIndex]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="text-xl md:text-3xl font-semibold text-cyan-600 dark:text-cyan-400"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          {t('hero.desc')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            <Mail className="w-5 h-5" />
            {t('hero.contact')}
          </button>

          {/* Projects Button */}
          <button
            onClick={() => scrollToSection("projets")}
            className="px-8 py-4 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-cyan-500/20 backdrop-blur-xl text-cyan-700 dark:text-cyan-400 font-bold rounded-xl hover:bg-white dark:hover:bg-white/10 hover:border-cyan-400 dark:hover:border-cyan-300 transition-all duration-300 flex items-center gap-2 justify-center shadow-sm"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            <Eye className="w-5 h-5" />
            {t('hero.projects')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}