import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, Users, Calendar, Briefcase, CheckCircle,
  Clock, Handshake, Terminal, X, ChevronLeft, ChevronRight, Loader, Check
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Imports originaux
import portfolio from '@/assets/portfolio.png';
import portfolio1 from '@/assets/portfolio1.png';
import portfolio2 from '@/assets/portfolio2.png';
import portfolio3 from '@/assets/portfolio3.png';

import azertype1 from '@/assets/azertype1.png';
import azertype2 from '@/assets/azertype2.png';
import azertype3 from '@/assets/azertype3.png';

import educonnect1 from '@/assets/educonnect1.png';
import educonnect2 from '@/assets/educonnect2.png';
import educonnect3 from '@/assets/educonnect3.png';

// Imports pour les nouveaux projets (à remplacer par vos images réelles)
import esmbenin1 from '@/assets/esmbenin1.jpeg';
import esmbenin2 from '@/assets/esmbenin2.jpeg';
import esmbenin3 from '@/assets/esmbenin3.jpeg';
import esmbenin4 from '@/assets/esmbenin4.jpeg';

import morse1 from '@/assets/morse1.png';
import morse2 from '@/assets/morse2.png';
import morse3 from '@/assets/morse3.png';

import securepass1 from '@/assets/securepass1.png';
import securepass2 from '@/assets/securepass2.png';
import securepass3 from '@/assets/securepass3.png';

import humour1 from '@/assets/humour1.png';
import humour2 from '@/assets/humour2.png';
import humour3 from '@/assets/humour3.png';

import biohub1 from '@/assets/biohub1.png';
import biohub2 from '@/assets/biohub2.png';
import biohub3 from '@/assets/biohub3.png';

import musicplayer1 from '@/assets/musicplayer1.png';
import musicplayer2 from '@/assets/musicplayer2.png';
import musicplayer3 from '@/assets/musicplayer3.png';

import electric1 from '@/assets/electric1.png';
import electric2 from '@/assets/electric2.png';
import electric3 from '@/assets/electric3.png';


// CONSTANTES: ICÔNES, STATUTS, ET DONNÉES DE PROJETS
const techIcons: { [key: string]: string } = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'React Router': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'JavaScript Plain': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
};

const statusConfig = {
  completed: { label: 'Terminé', color: 'bg-green-500', icon: CheckCircle },
  'in-progress': { label: 'En_cours', color: 'bg-yellow-500', icon: Clock },
  collaboration: { label: 'Recherche_de_collaboration', color: 'bg-orange-500', icon: Handshake }
};

const projects = [
  {
    id: 1,
    name: 'Portfolio',
    category: 'Vitrine',
    shortDescription: 'Portfolio Professionnel',
    images: [portfolio, portfolio1, portfolio2, portfolio3],
    status: 'completed',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    features: ['Design cyberpunk/tech avec effets de glassmorphisme', 'Effet typewriter qui s\'écrit en temps réel', 'Terminal interactif qui affiche du vrai code'],
    fullDescription: "Portfolio personnel moderne avec un design cyberpunk/tech, développé avec React, TypeScript et TailwindCSS. Interface interactive avec animations fluides, glassmorphisme et effets visuels avancés.",
    client: 'Projet Personnel',
    date: 'Août 2025',
    liveUrl: 'https://eltonhounnou.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/elton_portfolio_pro',
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 2,
    name: 'AzerType',
    category: 'Application Web',
    shortDescription: 'Application web pour améliorer la dactylographie.',
    images: [azertype1, azertype2, azertype3],
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Interface ludique et interactive', 'Suivi en temps réel des performances', 'Design simple et responsive'],
    fullDescription: 'AzerType est une application web que j\'ai développée pour aider les utilisateurs à améliorer leur vitesse et précision au clavier. Elle inclut un suivi en temps réel des performances, affichant la vitesse de frappe et le nombre d\'erreurs.',
    client: 'Moi-même',
    date: 'Juillet 2025',
    liveUrl: 'https://azertypee.netlify.app',
    codeUrl: 'https://github.com/REBCDR07/AzerType',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 3,
    name: 'EduConnect',
    category: 'Application Web',
    shortDescription: 'Plateforme de digitalisation des inscriptions scolaires.',
    images: [educonnect1, educonnect2, educonnect3],
    status: 'collaboration',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    features: ['Authentification sécurisée', 'Système de Rôles (Étudiant & Directeur)', 'Tableaux de bord personnalisés'],
    fullDescription: "EduConnect est une plateforme web moderne qui simplifie et centralise l'intégralité du processus d'inscription scolaire. Les étudiants peuvent découvrir des écoles, postuler et suivre leurs candidatures, tandis que les directeurs gèrent leurs établissements.",
    client: 'Projet Personnel',
    date: 'Août 2025',
    liveUrl: 'https://edu-connect-plateform.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/EduConnect-Plateform',
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 4,
    name: 'ESM-BÉNIN',
    category: 'Site Institutionnel',
    shortDescription: 'Site web moderne de l\'École Supérieure de Management du Bénin.',
    images: [esmbenin1, esmbenin2, esmbenin3, esmbenin4],
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: ['Présentation institutionnelle complète', 'Assistant virtuel IA intégré', 'Animations et effets 3D immersifs', 'Mode sombre/clair'],
    fullDescription: 'Site web institutionnel de l\'École Supérieure de Management du Bénin (ESM-BÉNIN), formant les leaders de demain. Le site présente les filières, programmes, et offre un assistant virtuel intelligent.',
    client: 'ESM-BÉNIN',
    date: 'Septembre 2025',
    liveUrl: 'https://esm-benin-university.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/esm-benin-university',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: 5,
    name: 'Morse Traduct',
    category: 'Utilitaire Web',
    shortDescription: 'Traducteur de code Morse avec fonctionnalités communautaires.',
    images: [morse1, morse2, morse3],
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: ['Traduction bidirectionnelle texte/morse', 'Profils utilisateurs et communauté', 'Interactions sociales (likes, commentaires)', 'Statistiques d\'utilisation'],
    fullDescription: 'Morse Traduct est une application web moderne pour traduire du texte en code Morse et inversement. C\'est aussi une communauté pour les passionnés du code Morse avec des profils et des interactions sociales.',
    client: 'Projet Communautaire',
    date: 'Octobre 2025',
    liveUrl: 'https://morse-traduct.vercel.app',
    codeUrl: 'https://github.com/REBCDR07/morse-traduct',
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    id: 6,
    name: 'Secure Passwords',
    category: 'Sécurité',
    shortDescription: 'Application de gestion de mots de passe avec générateur avancé.',
    images: [securepass1, securepass2, securepass3],
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: ['Authentification complète', 'Générateur de mots de passe avancé', 'Sauvegarde sécurisée des mots de passe', 'Mode sombre/clair'],
    fullDescription: 'Secure Passwords est une application web complète permettant de générer, stocker et gérer ses mots de passe de manière sécurisée, avec une interface moderne et une architecture full-stack robuste.',
    client: 'Projet Personnel',
    date: 'Novembre 2025',
    liveUrl: 'https://secure-pass-generate.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/secure-passwords',
    gradient: 'from-yellow-500 to-blue-800'
  },
  {
    id: 7,
    name: 'Humour Space',
    category: 'Réseau Social',
    shortDescription: 'Plateforme communautaire dédiée au partage de blagues et d’humour.',
    images: [humour1, humour2, humour3],
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: ['Publication de textes, vidéos et réels', 'Système d\'abonnements et de réactions', 'Tableaux de bord pour créateurs', 'Interface inspirée de TikTok et Facebook'],
    fullDescription: 'Humour Space est une application web communautaire pour le partage de blagues et de bonne humeur, réunissant créateurs et fans dans un espace interactif où le rire devient social et participatif.',
    client: 'Projet Personnel',
    date: 'Juin 2025',
    liveUrl: 'https://rions.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/humour-space.git',
    gradient: 'from-blue-400 to-indigo-600'
  },
  {
    id: 8,
    name: 'Biocreative Hub',
    category: 'Site Vitrine',
    shortDescription: 'Projet HTML moderne utilisant Tailwind CSS pour des applications web responsives.',
    images: [biohub1, biohub2, biohub3],
    status: 'completed',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    features: ['Structure HTML5 moderne', 'CSS Utility-first avec Tailwind', 'Composants pré-construits', 'Design mobile-first'],
    fullDescription: 'Biocreative Hub est un projet HTML moderne utilisant Tailwind CSS pour construire des applications web responsives avec une configuration minimale, mettant l\'accent sur une approche mobile-first.',
    client: 'Projet Personnel',
    date: 'Mai 2025',
    liveUrl: 'https://rebcdr07.github.io/biocreatif_hub.github.io/',
    codeUrl: 'https://github.com/REBCDR07/biocreatif_hub',
    gradient: 'from-green-400 to-teal-600'
  },
  {
    id: 9,
    name: 'Lecteur de Musique',
    category: 'Application Web',
    shortDescription: 'Lecteur de musique web élégant avec une interface glassmorphism.',
    images: [musicplayer1, musicplayer2, musicplayer3],
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Interface glassmorphism avec effets visuels', 'Contrôles audio complets', 'Mise en page responsive horizontale', 'Raccourcis clavier'],
    fullDescription: 'Un lecteur de musique web élégant et responsive avec une interface glassmorphism moderne et une mise en page optimisée pour garantir la visibilité de tous les contrôles sur tous les écrans.',
    client: 'Projet Personnel',
    date: 'Avril 2025',
    liveUrl: 'https://lecteur-de-musique.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/lecteur-de-musique',
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    id: 10,
    name: 'Gestion d\'Électricité Locale',
    category: 'Utilitaire',
    shortDescription: 'Application de facturation électrique avec une interface futuriste.',
    images: [electric1, electric2, electric3],
    status: 'completed',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    features: ['Design futuriste cyber-tech', 'Calcul automatique des factures', 'Sauvegarde dans l\'historique local', 'Intégration WhatsApp'],
    fullDescription: 'Application web intuitive pour simplifier la gestion de la facturation électrique locale, avec une interface futuriste, des calculs instantanés et une intégration pour le partage des factures.',
    client: 'Projet Personnel',
    date: 'Mars 2025',
    liveUrl: 'https://gestion-electricite-locale.netlify.app/',
    codeUrl: 'https://github.com/REBCDR07/gestion_d_electricite_locale.git',
    gradient: 'from-teal-400 to-blue-600'
  },
];


const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
};

const TERMINAL_STATES = {
  IDLE: 'idle',
  TYPING_INSTALL: 'typing_install',
  INSTALLING: 'installing',
  TYPING_DEV: 'typing_dev',
  COMPILING: 'compiling',
  TYPING_START: 'typing_start',
  SHOWING_PROJECT: 'showing_project',
};

// COMPOSANT SÉPARÉ POUR L'AFFICHAGE DES DÉTAILS AVEC CARROUSEL D'IMAGES INTÉGRÉ
const ProjectDetailView = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [project.images.length]);

  if (!project) return null;
  const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid lg:grid-cols-3 gap-6 h-full"
    >
      <div className="lg:col-span-2 space-y-4 flex flex-col">
        <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-700/50">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.name} screenshot ${currentImageIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        <div className="bg-slate-950/50 border border-slate-700/50 rounded-lg p-6 flex-grow overflow-y-auto">
          <Badge className="mb-3 bg-slate-700/50 text-slate-300 border-slate-600/50 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
            {project.category}
          </Badge>
          <h1 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            {project.name}
          </h1>
          <p className="text-slate-300 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {project.fullDescription}
          </p>
          <div>
            <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
              // Features
            </h3>
            <div className="grid gap-2">
              {project.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-slate-300 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 flex-shrink-0`}></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 flex flex-col">
        <div className="bg-slate-950/50 border border-cyan-500/30 rounded-lg p-5">
          <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            Projet_Details
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Date</div>
                <div className="text-sm text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {project.date}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Client</div>
                <div className="text-sm text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {project.client}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <StatusIcon className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Status</div>
                <Badge className={`${statusConfig[project.status as keyof typeof statusConfig].color} text-white border-0 mt-1 font-bold`} style={{ fontFamily: 'Orbitron, monospace' }}>
                  {statusConfig[project.status as keyof typeof statusConfig].label}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-950/50 border border-slate-700/50 rounded-lg p-5">
          <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            Tech_stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, idx: number) => (
              <div key={idx} className="flex items-center gap-1.5 bg-slate-800/50 px-2 py-1.5 rounded-md border border-slate-700/50">
                <img src={techIcons[tech]} alt={tech} className="w-4 h-4" />
                <span className="text-xs text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-950/50 border border-slate-700/50 rounded-lg p-5 mt-auto">
          <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            Links
          </h3>
          <div className="space-y-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <button className={`w-full py-2.5 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-1.5`} style={{ fontFamily: 'Orbitron, monospace' }}>
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live_View
                </button>
              </a>
            )}
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <button className="w-full py-2.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 font-bold rounded-lg hover:bg-slate-700/50 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}>
                  <Github className="w-3.5 h-3.5" />
                  Source_Code
                </button>
              </a>
            )}
            {/* Le bouton de fermeture est maintenant géré dans le composant parent */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// COMPOSANT PRINCIPAL
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [terminalState, setTerminalState] = useState(TERMINAL_STATES.IDLE);
  const [terminalLines, setTerminalLines] = useState<React.ReactNode[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const typeCommand = useCallback((command: string, nextState: string) => {
    let i = 0;
    setCurrentLine('');
    const interval = setInterval(() => {
      setCurrentLine(command.substring(0, i + 1));
      i++;
      if (i >= command.length) {
        clearInterval(interval);
        setTerminalLines(prev => [...prev, `user@portfolio:~$ ${command}`]);
        setCurrentLine('');
        setTimeout(() => setTerminalState(nextState), 200);
      }
    }, 60);
  }, []);

  useEffect(() => {
    if (selectedProject !== null && terminalState === TERMINAL_STATES.IDLE) {
      setTerminalState(TERMINAL_STATES.TYPING_INSTALL);
    }
    let timeoutId: NodeJS.Timeout;
    switch (terminalState) {
      case TERMINAL_STATES.TYPING_INSTALL:
        typeCommand('npm install', TERMINAL_STATES.INSTALLING);
        break;
      case TERMINAL_STATES.INSTALLING:
        timeoutId = setTimeout(() => {
          setTerminalLines(prev => [...prev, <span className="text-green-400 flex items-center gap-2"><Check size={16} />Successfully installed packages.</span>]);
          setTerminalState(TERMINAL_STATES.TYPING_DEV);
        }, 1500);
        break;
      case TERMINAL_STATES.TYPING_DEV:
        typeCommand('npm run dev', TERMINAL_STATES.COMPILING);
        break;
      case TERMINAL_STATES.COMPILING:
        timeoutId = setTimeout(() => {
          setTerminalLines(prev => [...prev, <span className="text-green-400 flex items-center gap-2"><Check size={16} />Compiled successfully. Starting server...</span>]);
          setTerminalState(TERMINAL_STATES.TYPING_START);
        }, 1200);
        break;
      case TERMINAL_STATES.TYPING_START:
        typeCommand('start project', TERMINAL_STATES.SHOWING_PROJECT);
        break;
    }
    return () => clearTimeout(timeoutId);
  }, [terminalState, selectedProject, typeCommand]);

  const closeTerminal = () => {
    setSelectedProject(null);
    setTimeout(() => {
      setTerminalLines([]);
      setCurrentLine('');
      setTerminalState(TERMINAL_STATES.IDLE);
    }, 300);
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % projects.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleProjectNavigation = (offset: number) => {
    if (selectedProject === null) return;
    const currentIdx = projects.findIndex(p => p.id === selectedProject);
    const nextIdx = (currentIdx + offset + projects.length) % projects.length;
    const nextProjectId = projects[nextIdx].id;

    setTerminalLines([]);
    setCurrentLine('');
    setTerminalState(TERMINAL_STATES.IDLE); // Relance l'animation pour le nouveau projet
    setSelectedProject(nextProjectId);
  };

  const stopAutoScroll = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000); // Défilement toutes les 5 secondes
  }, [nextSlide]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll]);


  const getVisibleProjects = () => {
    const p = (currentIndex - 1 + projects.length) % projects.length;
    const n = (currentIndex + 1) % projects.length;
    return [projects[p], projects[currentIndex], projects[n]];
  };

  const visibleProjects = getVisibleProjects();
  const projectToDisplay = projects.find(p => p.id === selectedProject);

  return (
    <section id="projets" className="py-20 relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-5 py-2.5 mb-5">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
              $ git log --all
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            Mes <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Découvrez une sélection de projets que j'ai réalisés, alliant créativité, performance technique et expérience utilisateur optimale.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div
            className="relative h-[550px] flex items-center justify-center"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute w-full flex items-center justify-center gap-8"
              >
                {visibleProjects.map((project) => {
                  const isCenter = project.id === projects[currentIndex].id;
                  const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon;
                  return (
                    <div
                      key={project.id}
                      className={`transition-all duration-300 ${isCenter ? 'w-[450px] z-20' : 'w-[320px] scale-90 opacity-40 hover:opacity-70 z-10'}`}
                    >
                      <div className={`group relative bg-slate-900/50 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 ${isCenter ? 'border-cyan-500/50 hover:border-cyan-400' : 'border-slate-700/30'}`}>
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={project.images[0]}
                            alt={project.name}
                            className={`w-full h-full object-cover transition-transform duration-500 ${isCenter ? 'group-hover:scale-110' : ''}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                          <Badge className={`absolute top-3 right-3 ${statusConfig[project.status as keyof typeof statusConfig].color} text-white border-0 flex items-center gap-1 font-bold text-xs`} style={{ fontFamily: 'Orbitron, monospace' }}>
                            <StatusIcon className="w-2.5 h-2.5" />
                            {statusConfig[project.status as keyof typeof statusConfig].label}
                          </Badge>
                          <div className="absolute bottom-3 left-3">
                            <Badge className="bg-slate-900/80 backdrop-blur-xl text-cyan-400 border-cyan-500/30 font-bold text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className={`font-bold text-white mb-2 transition-colors ${isCenter ? 'text-xl group-hover:text-cyan-400' : 'text-lg'}`} style={{ fontFamily: 'Orbitron, monospace' }}>
                            {project.name}
                          </h3>
                          {isCenter && (
                            <>
                              <p className="text-slate-400 text-sm mb-3 line-clamp-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                {project.shortDescription}
                              </p>
                              <button
                                onClick={() => setSelectedProject(project.id)}
                                className={`w-full py-2 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-lg flex items-center justify-center gap-1.5 group-hover:shadow-lg transition-all text-sm cursor-pointer`}
                                style={{ fontFamily: 'Orbitron, monospace' }}
                              >
                                <span>View_project</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-30 p-3 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 hover:bg-slate-700/50 text-cyan-400 rounded-full transition-all hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-30 p-3 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 hover:bg-slate-700/50 text-cyan-400 rounded-full transition-all hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all rounded-full ${idx === currentIndex ? 'w-8 h-2 bg-cyan-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'}`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && projectToDisplay && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 pt-20 sm:pt-24 flex items-start justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="w-full max-w-7xl h-full bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/10 flex flex-col"
            >
              <div className="flex-shrink-0 bg-slate-800/80 rounded-t-lg py-2 px-4 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <p className="text-sm text-slate-400 hidden sm:block" style={{ fontFamily: 'monospace' }}>
                  /home/projects/{projectToDisplay.name.replace(/\s+/g, '-').toLowerCase()}
                </p>
                <button
                  onClick={closeTerminal}
                  className="p-1.5 -m-1.5 text-slate-400 hover:text-white hover:bg-slate-700/80 rounded-md transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-grow p-4 md:p-6 overflow-y-auto">
                {terminalState !== TERMINAL_STATES.SHOWING_PROJECT ? (
                  <>
                    <div className="font-mono text-sm space-y-2">
                      {terminalLines.map((line, index) => <div key={index}>{line}</div>)}
                    </div>
                    {currentLine && (
                      <div className="flex items-center gap-2 font-mono text-sm text-cyan-400">
                        <span>user@portfolio:~$</span>
                        <span>{currentLine}</span>
                        <span className="w-2 h-4 bg-cyan-400 animate-blink"></span>
                      </div>
                    )}
                    {terminalState === TERMINAL_STATES.INSTALLING && (
                      <div className="flex items-center gap-2 text-slate-300 font-mono text-sm mt-2">
                        <Loader className="animate-spin" size={16} />
                        <span>Installing dependencies...</span>
                      </div>
                    )}
                    {terminalState === TERMINAL_STATES.COMPILING && (
                      <div className="flex items-center gap-2 text-slate-300 font-mono text-sm mt-2">
                        <Loader className="animate-spin" size={16} />
                        <span>Compiling...</span>
                      </div>
                    )}
                  </>
                ) : (
                  <ProjectDetailView project={projectToDisplay} onClose={closeTerminal} />
                )}
              </div>
              
              {terminalState === TERMINAL_STATES.SHOWING_PROJECT && (
                <div className="flex-shrink-0 bg-slate-800/50 rounded-b-lg py-3 px-4 flex items-center justify-center gap-4 border-t border-slate-700/50">
                   <button 
                     onClick={() => handleProjectNavigation(-1)} 
                     className="w-full py-2.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 font-bold rounded-lg hover:bg-slate-700/50 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}
                   >
                     <ChevronLeft className="w-4 h-4" />
                     Projet Précédent
                   </button>
                   <button 
                     onClick={closeTerminal} 
                     className="w-full py-2.5 bg-red-500/20 border border-red-500/30 text-red-400 font-bold rounded-lg hover:bg-red-500/30 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}
                   >
                     <X className="w-4 h-4" />
                     Stop View
                   </button>
                   <button 
                     onClick={() => handleProjectNavigation(1)} 
                     className="w-full py-2.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 font-bold rounded-lg hover:bg-slate-700/50 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}
                   >
                     Projet Suivant
                     <ChevronRight className="w-4 h-4" />
                   </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style>{`.animate-blink { animation: blink 1s step-end infinite; } @keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}