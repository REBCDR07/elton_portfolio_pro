import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Eye, Sparkles, Code, Rocket, Terminal } from 'lucide-react';

// Données pour les éléments dynamiques
const roles = ["Frontend Developer", "Full-Stack Developer", "UI/UX Designer", "Creative Coder", "Problem Solver"];
const commands1 = ["git commit -m 'feat: initial hero section'", "npm run build", "npx shadcn-ui@latest add button", "npm i framer-motion"];
const commands2 = ["git push origin main", "vercel --prod", "Hello World!", "console.log('Welcome');"];

// Variantes d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 p-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <motion.div 
        className="container mx-auto relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 mb-8 shadow-2xl">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <code className="text-sm text-cyan-400 font-mono" style={{ fontFamily: 'Orbitron, monospace' }}>
            STATUS: DISPONIBLE
          </code>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-4 relative px-2" style={{ fontFamily: 'Orbitron, monospace' }}>
          <span className="glitch bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent" data-text="N. E. Ronald Bill Hounnou">
            N. E. Ronald Bill Hounnou
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="h-16 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.p 
                  key={roles[currentRoleIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-2xl md:text-4xl text-cyan-400 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  {roles[currentRoleIndex]}
                </motion.p>
            </AnimatePresence>
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          Je transforme vos idées en <span className="text-cyan-400 font-bold">solutions web responsives, performantes et intuitives</span>. 
          Stack moderne, code propre, résultats impressionnants.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-base"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span className="relative flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Contactez-moi
            </span>
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projets')}
            className="group px-8 py-4 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 text-cyan-400 font-bold rounded-xl hover:bg-slate-800/50 hover:border-cyan-400 transition-all duration-300 shadow-lg text-base"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span className="flex items-center justify-center gap-2">
              <Eye className="w-5 h-5" /> Voir mes projets
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollToSection('apropos')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce p-3 rounded-full bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ChevronDown className="h-6 w-6 text-cyan-400" />
      </motion.button>
      
      <style>{`
        .glitch { position: relative; }
        .glitch:before, .glitch:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0f172a;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch:before {
          left: 2px;
          text-shadow: -1px 0 #e02424;
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch:after {
          left: -2px;
          text-shadow: -1px 0 #3b82f6;
          animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 { 0%, 100% { clip: rect(44px, 9999px, 56px, 0); } 5%, 95% { clip: rect(12px, 9999px, 89px, 0); } }
        @keyframes glitch-anim-2 { 0%, 100% { clip: rect(15px, 9999px, 99px, 0); } 3%, 97% { clip: rect(78px, 9999px, 23px, 0); } }
      `}</style>
    </section>
  );
}