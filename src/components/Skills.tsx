import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Database,
  Wrench,
  Palette,
  Brain,
  Users,
  Target,
  Terminal,
  Layers, // Icône pour le bouton "View Stack"
  X,      // Icône pour le bouton de fermeture
} from 'lucide-react';

// =====================================================================================
// CONSTANTES DES COMPÉTENCES ET OUTILS
// =====================================================================================

const technicalSkills = {
  'Langages': [
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
  ],
  'Frameworks & Librairies': [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
    { name: 'React Router', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg' },
    { name: 'TanStack Query', icon: 'https://raw.githubusercontent.com/TanStack/query/main/media/repo-dark.png' },
    { name: 'React Hook Form', icon: 'https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/logo.png' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' }
  ],
  'Bases de Données & BaaS': [
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ],
  'UI/UX Design & Outils': [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'shadcn/ui', icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
    { name: 'Radix UI', icon: 'https://radix-ui.com/favicon.ico' },
    { name: 'Zod', icon: 'https://zod.dev/logo.svg' },
    { name: 'Design Systems', icon: null },
    { name: 'Responsive Design', icon: null }
  ],
  'DevOps & Déploiement': [
    { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
    { name: 'AWS (S3/EC2)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  ]
};

const aiTools = [
  { name: 'ChatGPT & API OpenAI', icon: Brain, color: 'from-green-500 to-emerald-500' },
  { name: 'Gemini AI & Google AI Studio', icon: Brain, color: 'from-orange-500 to-amber-500' },
  { name: 'GitHub Copilot', icon: Code, color: 'from-purple-500 to-violet-500' },
  { name: 'Perplexity AI', icon: Brain, color: 'from-blue-400 to-cyan-400' },
  { name: 'Claude AI', icon: Brain, color: 'from-orange-500 to-amber-500' },
  { name: 'Hugging Face', icon: Database, color: 'from-yellow-400 to-amber-500' },
  { name: 'Lovable.dev', icon: Wrench, color: 'from-pink-500 to-rose-500' },
  { name: 'DeepSeek', icon: Brain, color: 'from-indigo-500 to-violet-500' },
];

const softSkills = [
  { name: 'Résolution de problèmes', icon: Target, color: 'from-purple-500 to-pink-500' },
  { name: 'Pensée critique & Innovation', icon: Brain, color: 'from-green-500 to-teal-500' },
  { name: 'Communication & Collaboration', icon: Users, color: 'from-blue-500 to-cyan-500' },
  { name: 'Créativité & Souci du détail', icon: Palette, color: 'from-yellow-500 to-orange-500' }
];


// =====================================================================================
// SOUS-COMPOSANT : MODALE ANIMÉE POUR LA STACK COMPLÈTE
// =====================================================================================
const StackModal = ({ onClose, skills, aiTools }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-4xl max-h-[90vh] bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 flex flex-col"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
              Stack Technologique Complète
            </h2>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/80 rounded-md transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-grow p-6 overflow-y-auto grid md:grid-cols-2 gap-8">
          <motion.div variants={listVariants} initial="hidden" animate="visible">
            <h3 className="text-lg font-bold text-cyan-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>// Tech Skills</h3>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{category}</h4>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants} className="flex items-center gap-3 bg-slate-800/50 p-2 rounded-lg">
                      {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 rounded-sm object-contain" />}
                      <span className="text-slate-300 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={listVariants} initial="hidden" animate="visible">
            <h3 className="text-lg font-bold text-cyan-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>// AI Tools</h3>
            <div className="space-y-2">
              {aiTools.map((tool) => (
                <motion.div key={tool.name} variants={itemVariants} className="flex items-center gap-3 bg-slate-800/50 p-2 rounded-lg">
                  <div className={`p-1 rounded bg-gradient-to-br ${tool.color}`}>
                    <tool.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};


// =====================================================================================
// COMPOSANT PRINCIPAL : SKILLS
// =====================================================================================
export default function Skills() {
  const [isStackModalOpen, setIsStackModalOpen] = useState(false);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 lg:py-32 relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-5 sm:right-10 md:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-5 sm:left-10 md:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-3 sm:mb-4 md:mb-6">
            <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
              $ skills --show-all
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            Ma <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Boîte à Outils</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Un arsenal complet d'outils, de compétences humaines et d'intelligences artificielles pour concevoir, développer et déployer des solutions web modernes.
          </p>
          
          <div className="mt-8">
              <button
                onClick={() => setIsStackModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <Layers className="w-5 h-5" />
                Voir ma stack technique
              </button>
          </div>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white" style={{ fontFamily: 'Orbitron, monospace' }}>AI_Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
            {aiTools.map((tool) => (
              <div key={tool.name} className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl hover:scale-105 hover:border-cyan-500/50 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${tool.color} mb-2 sm:mb-3 md:mb-4`}>
                    <tool.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white" style={{ fontFamily: 'Orbitron, monospace' }}>{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white" style={{ fontFamily: 'Orbitron, monospace' }}>Soft_Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {softSkills.map((skill) => (
              <div key={skill.name} className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${skill.color} mb-2.5 sm:mb-3 md:mb-4`}>
                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white" style={{ fontFamily: 'Orbitron, monospace' }}>{skill.name.toUpperCase()}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isStackModalOpen && (
          <StackModal 
            onClose={() => setIsStackModalOpen(false)} 
            skills={technicalSkills}
            aiTools={aiTools}
          />
        )}
      </AnimatePresence>
    </section>
  );
}