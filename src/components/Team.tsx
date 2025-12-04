import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, ExternalLink, Linkedin, Github, Facebook, Terminal, Users, 
  Check, Loader, X, ChevronRight 
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import team1Image from '@/assets/team1.webp';
import team2Image from '@/assets/team2.webp';

const teamMembers = [
  { 
    id: 1, 
    name: 'Igor ADANDE', 
    role: 'Full_Stack_Dev & UI/UX', 
    bio: {
      fr: "Spécialiste des applications web robustes, il transforme des concepts complexes en interfaces fluides et performantes.",
      en: "Specialist in robust web applications, transforming complex concepts into fluid and high-performance interfaces."
    },
    image: team1Image, 
    cvUrl: '/assets/cv/cv-team1.pdf', 
    portfolioUrl: 'https://www.igoradande.tech/', 
    socials: { linkedin: 'https://www.linkedin.com/in/igor-adande-dev/', github: 'https://github.com/adandeigor', facebook: 'https://web.facebook.com/ThePirateDev' }, 
    gradient: 'from-cyan-500 to-blue-500' 
  },
  { 
    id: 2, 
    name: 'Ben Ephraïm AGBANNON', 
    role: 'Full_Stack_Dev & Mobile', 
    bio: {
      fr: "Architecte de solutions back-end et mobiles, passionné par la création d'expériences utilisateur exceptionnelles et intuitives.",
      en: "Architect of back-end and mobile solutions, passionate about creating exceptional and intuitive user experiences."
    },
    image: team2Image, 
    cvUrl: '/assets/cv/cv-team2.pdf', 
    portfolioUrl: 'https://portfolio-v2-alpha-virid.vercel.app/', 
    socials: { linkedin: 'https://www.linkedin.com/in/ben-ephraim-agbannon-948819311/', github: 'https://github.com/Tedel12', facebook: null }, 
    gradient: 'from-purple-500 to-pink-500' 
  }
];

const TERMINAL_STATES = {
  IDLE: 'idle', TYPING_INSTALL: 'typing_install', INSTALLING: 'installing', TYPING_DEV: 'typing_dev', COMPILING: 'compiling', TYPING_START: 'typing_start', SHOWING_MEMBER: 'showing_member',
};

const TeamMemberDetailView = ({ member, onNext, isLastMember, onClose, lang }: { member: any, onNext: () => void, isLastMember: boolean, onClose: () => void, lang: 'fr' | 'en' }) => {
  const { t } = useLanguage();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col h-full">
      <div className="relative aspect-square p-2">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-md" />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-full px-2 py-0.5 flex items-center gap-1.5">
          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-[10px] text-slate-800 dark:text-white font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>Actif</span>
        </div>
      </div>
      <div className="p-3 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>{member.name}</h3>
        <p className="text-cyan-600 dark:text-cyan-400 font-bold mb-2 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{member.role}</p>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{member.bio[lang]}</p>
        
        <div className="flex gap-2 mb-4">
          <a href={member.portfolioUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all"><ExternalLink className="w-4 h-4" /></a>
          {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all"><Linkedin className="w-4 h-4" /></a>}
          {member.socials.github && <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500/50 transition-all"><Github className="w-4 h-4" /></a>}
          {member.socials.facebook && <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all"><Facebook className="w-4 h-4" /></a>}
        </div>
        
        <div className="space-y-2 mt-auto">
          <a href={member.cvUrl} download className="block w-full py-2.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700/50 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all text-center text-sm" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="flex items-center justify-center gap-2"><Download className="w-3.5 h-3.5" />{t('team.download_cv')}</span>
          </a>
          {!isLastMember ? (
            <button onClick={onNext} className={`w-full py-2.5 bg-gradient-to-r ${member.gradient} text-white font-bold rounded-lg hover:shadow-lg transition-all text-center text-sm`} style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="flex items-center justify-center gap-2">{t('team.next')}<ChevronRight className="w-4 h-4" /></span>
            </button>
          ) : (
            <button onClick={onClose} className="w-full py-2.5 bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 font-bold rounded-lg hover:bg-red-200 dark:hover:bg-red-500/30 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}>
              <X className="w-4 h-4" />{t('team.stop')}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};


export default function Team() {
  const [activeMemberIndex, setActiveMemberIndex] = useState<number | null>(null);
  const [terminalState, setTerminalState] = useState(TERMINAL_STATES.IDLE);
  const [terminalLines, setTerminalLines] = useState<React.ReactNode[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const { t, language } = useLanguage();

  const resetAndStartTerminal = useCallback(() => {
    setTerminalLines([]);
    setCurrentLine('');
    setTerminalState(TERMINAL_STATES.TYPING_INSTALL);
  }, []);
  
  const typeCommand = useCallback((command: string, nextState: string) => {
    let i = 0; setCurrentLine(''); const interval = setInterval(() => { setCurrentLine(command.substring(0, i + 1)); i++; if (i >= command.length) { clearInterval(interval); setTerminalLines(prev => [...prev, `user@portfolio:~$ ${command}`]); setCurrentLine(''); setTimeout(() => setTerminalState(nextState), 200); } }, 60);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    switch (terminalState) {
      case TERMINAL_STATES.TYPING_INSTALL: typeCommand('npm install dependencies', TERMINAL_STATES.INSTALLING); break;
      case TERMINAL_STATES.INSTALLING: timeoutId = setTimeout(() => { setTerminalLines(prev => [...prev, <span key="install" className="text-green-500 dark:text-green-400 flex items-center gap-2"><Check size={16}/>Successfully installed packages.</span>]); setTerminalState(TERMINAL_STATES.TYPING_DEV); }, 1500); break;
      case TERMINAL_STATES.TYPING_DEV: typeCommand('npm run dev', TERMINAL_STATES.COMPILING); break;
      case TERMINAL_STATES.COMPILING: timeoutId = setTimeout(() => { setTerminalLines(prev => [...prev, <span key="compile" className="text-green-500 dark:text-green-400 flex items-center gap-2"><Check size={16}/>Compiled successfully. Starting server...</span>]); setTerminalState(TERMINAL_STATES.TYPING_START); }, 1200); break;
      case TERMINAL_STATES.TYPING_START: typeCommand('start team', TERMINAL_STATES.SHOWING_MEMBER); break;
    }
    return () => clearTimeout(timeoutId);
  }, [terminalState, typeCommand]);
  
  const openTeamView = () => {
    setActiveMemberIndex(0);
    resetAndStartTerminal();
  };

  const goToNextMember = () => {
    if (activeMemberIndex !== null && activeMemberIndex < teamMembers.length - 1) {
      setActiveMemberIndex(activeMemberIndex + 1);
      resetAndStartTerminal();
    }
  };
  
  const closeTerminals = () => { setActiveMemberIndex(null); setTimeout(() => { setTerminalState(TERMINAL_STATES.IDLE); setTerminalLines([]); setCurrentLine('')}, 300); };
  
  const activeMember = activeMemberIndex !== null ? teamMembers[activeMemberIndex] : null;

  return (
    <section id="equipe" className="py-12 sm:py-20 relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 rounded-full px-5 py-2.5 mb-5">
            <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm text-cyan-600 dark:text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>{t('team.terminal')}</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t('team.title').split('\'')[0]}<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">{t('team.title').split('\'')[1] || t('team.title')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {t('team.desc')}
          </p>
        </div>

        <div className="text-center mt-8">
          <button onClick={openTeamView} aria-label="Voir l'équipe en action" className="group relative px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-base" style={{ fontFamily: 'Orbitron, monospace' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2"><Users className="w-5 h-5"/> {t('team.view')}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {activeMember && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 pt-20 sm:pt-24 flex items-center justify-center">
            <motion.div 
              key={activeMember.id} 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.8, opacity: 0, transition: {duration: 0.2} }} 
              transition={{ type: 'spring', stiffness: 260, damping: 25 }} 
              className="w-full max-w-md h-full max-h-[85vh] bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/10 flex flex-col"
            >
              <div className="flex-shrink-0 bg-slate-100 dark:bg-slate-800/80 rounded-t-lg py-2 px-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span><span className="w-3 h-3 bg-yellow-500 rounded-full"></span><span className="w-3 h-3 bg-green-500 rounded-full"></span></div>
                <p className="text-sm text-slate-500 dark:text-slate-400" style={{ fontFamily: 'monospace' }}>/home/team/{activeMember.name.split(' ')[0].toLowerCase()}</p>
                <button onClick={closeTerminals} className="p-1.5 -m-1.5 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-md transition-colors"><X size={18} /></button>
              </div>
              <div className="flex-grow p-4 overflow-y-auto">
                {terminalState !== TERMINAL_STATES.SHOWING_MEMBER ? (
                  <>
                    <div className="font-mono text-sm space-y-2 text-slate-700 dark:text-slate-300">{terminalLines.map((line, index) => <div key={index}>{line}</div>)}</div>
                    {currentLine && (<div className="flex items-center gap-2 font-mono text-sm text-cyan-600 dark:text-cyan-400"><span>user@portfolio:~$</span><span>{currentLine}</span><span className="w-2 h-4 bg-cyan-600 dark:bg-cyan-400 animate-blink"></span></div>)}
                    {terminalState === TERMINAL_STATES.INSTALLING && (<div className="flex items-center gap-2 text-slate-500 dark:text-slate-300 font-mono text-sm mt-2"><Loader className="animate-spin" size={16} /><span>Installing dependencies...</span></div>)}
                    {terminalState === TERMINAL_STATES.COMPILING && (<div className="flex items-center gap-2 text-slate-500 dark:text-slate-300 font-mono text-sm mt-2"><Loader className="animate-spin" size={16} /><span>Compiling...</span></div>)}
                  </>
                ) : (
                  <TeamMemberDetailView member={activeMember} onNext={goToNextMember} isLastMember={activeMemberIndex === teamMembers.length - 1} onClose={closeTerminals} lang={language} />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style>{`.animate-blink { animation: blink 1s step-end infinite; } @keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}
