import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, Calendar, Briefcase, CheckCircle,
  Clock, Handshake, Terminal, X, ChevronLeft, ChevronRight, Loader, Check, Filter,
  Brain, Bug, ArrowRight
} from 'lucide-react';
import { Badge } from './ui/badge';
import ProjectCard from './ProjectCard';
import { useLanguage } from './LanguageContext';

// Import des images (
import portfolio1 from '@/assets/portfolio1.webp';
import portfolio2 from '@/assets/portfolio2.webp';
import portfolio3 from '@/assets/portfolio3.webp';
import azertype1 from '@/assets/azertype1.webp';
import azertype2 from '@/assets/azertype2.webp';
import azertype3 from '@/assets/azertype3.webp';
import educonnect1 from '@/assets/educonnect1.webp';
import educonnect2 from '@/assets/educonnect2.webp';
import educonnect3 from '@/assets/educonnect3.webp';
import esmbenin1 from '@/assets/esmbenin1.webp';
import esmbenin2 from '@/assets/esmbenin2.webp';
import esmbenin3 from '@/assets/esmbenin3.webp';
import esmbenin4 from '@/assets/esmbenin4.webp';
import morse1 from '@/assets/morse1.webp';
import morse2 from '@/assets/morse2.webp';
import morse3 from '@/assets/morse3.webp';
import securepass1 from '@/assets/securepass1.webp';
import securepass2 from '@/assets/securepass2.webp';
import securepass3 from '@/assets/securepass3.webp';
import humour1 from '@/assets/humour1.webp';
import humour2 from '@/assets/humour2.webp';
import humour3 from '@/assets/humour3.webp';
import biohub1 from '@/assets/biohub1.webp';
import biohub2 from '@/assets/biohub2.webp';
import biohub3 from '@/assets/biohub3.webp';
import musicplayer1 from '@/assets/musicplayer1.webp';
import musicplayer2 from '@/assets/musicplayer2.webp';
import musicplayer3 from '@/assets/musicplayer3.webp';
import electric1 from '@/assets/electric1.webp';
import electric2 from '@/assets/electric2.webp';
import electric3 from '@/assets/electric3.webp';
import beninvoice1 from '@/assets/bvoice1.webp';
import beninvoice2 from '@/assets/bvoice2.webp';
import beninvoice3 from '@/assets/bvoice3.webp';

// --- CONSTANTES ET CONFIGURATION ---

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
  'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Framer Motion': 'https://framerusercontent.com/images/3aQX5dnH5Yqgsn98QXKF2ZXxIE.png',
  'Three.js': 'https://threejs.org/files/favicon.ico',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React Three Fiber': 'https://github.com/pmndrs/xr/blob/main/docs/getting-started/logo.svg?raw=true',
  'Shadcn UI': 'https://shadcn.com/favicon.ico',
  'OpenAI API': 'https://1000logos.net/wp-content/uploads/2025/02/OpenAI-Logo.png',
  'Radix U': 'https://www.radix-ui.com/favicon.png',
};

const statusConfig = {
  completed: { color: 'bg-green-500', icon: CheckCircle },
  'in-progress': { color: 'bg-yellow-500', icon: Clock },
  collaboration: { color: 'bg-orange-500', icon: Handshake }
};

const workflowSteps = [
  {
    icon: Brain,
    title: { fr: 'Recherche & IA', en: 'Research & AI' },
    description: { fr: 'Exploration et conception assistées par des modèles IA avancés (ChatGPT, Gemini, DeepSeek).', en: 'Exploration and design assisted by advanced AI models (ChatGPT, Gemini, DeepSeek).' },
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-100 dark:bg-purple-500/10',
    border: 'group-hover:border-purple-500/50'
  },
  {
    icon: Terminal,
    title: { fr: 'Développement', en: 'Development' },
    description: { fr: 'Codage performant sous VS Code & Cursor avec une architecture moderne.', en: 'High-performance coding with VS Code & Cursor using modern architecture.' },
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-100 dark:bg-cyan-500/10',
    border: 'group-hover:border-cyan-500/50'
  },
  {
    icon: Bug,
    title: { fr: 'Debugging', en: 'Debugging' },
    description: { fr: 'Optimisation et correction de bugs assistées par l\'IA pour un code fiable.', en: 'Optimization and bug fixing assisted by AI for reliable code.' },
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-100 dark:bg-red-500/10',
    border: 'group-hover:border-red-500/50'
  },
  {
    icon: CheckCircle,
    title: { fr: 'Code Final', en: 'Final Code' },
    description: { fr: 'Livraison d\'une solution complète, testée et prête au déploiement.', en: 'Delivery of a complete, tested solution ready for deployment.' },
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-500/10',
    border: 'group-hover:border-green-500/50'
  }
];

// --- DONNÉES DES PROJETS ---
const projectsData = [
  {
    id: 1,
    name: 'Portfolio',
    category: 'personal',
    shortDescription: { fr: 'Portfolio Professionnel', en: 'Professional Portfolio' },
    images: [portfolio1, portfolio2, portfolio3],
    status: 'completed',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    features: { fr: ['Design cyberpunk/tech avec effets de glassmorphisme', 'Effet typewriter qui s\'écrit en temps réel', 'Terminal interactif qui affiche du vrai code'], en: ['Cyberpunk/tech design with glassmorphism effects', 'Real-time typewriter effect', 'Interactive terminal displaying real code'] },
    fullDescription: { fr: "Portfolio personnel moderne avec un design cyberpunk/tech, développé avec React, TypeScript et TailwindCSS. Interface interactive avec animations fluides, glassmorphisme et effets visuels avancés.", en: "Modern personal portfolio with a cyberpunk/tech design, developed with React, TypeScript and TailwindCSS. Interactive interface with smooth animations, glassmorphism and advanced visual effects." },
    client: { fr: 'Projet Personnel', en: 'Personal Project' },
    date: { fr: 'Août 2025', en: 'August 2025' },
    liveUrl: 'https://eltonhounnou.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/elton_portfolio_pro',
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 2,
    name: 'AzerType',
    category: 'personal',
    shortDescription: { fr: 'Application web pour améliorer la dactylographie.', en: 'Web app to improve typing skills.' },
    images: [azertype1, azertype2, azertype3],
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: { fr: ['Interface ludique et interactive', 'Suivi en temps réel des performances', 'Design simple et responsive'], en: ['Playful and interactive interface', 'Real-time performance tracking', 'Simple and responsive design'] },
    fullDescription: { fr: 'AzerType est une application web que j\'ai développée pour aider les utilisateurs à améliorer leur vitesse et précision au clavier. Elle inclut un suivi en temps réel des performances, affichant la vitesse de frappe et le nombre d\'erreurs.', en: 'AzerType is a web application I developed to help users improve their typing speed and accuracy. It includes real-time performance tracking, displaying typing speed and error count.' },
    client: { fr: 'Moi-même', en: 'Myself' },
    date: { fr: 'Juillet 2025', en: 'July 2025' },
    liveUrl: 'https://azertypee.netlify.app',
    codeUrl: 'https://github.com/REBCDR07/AzerType',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 3,
    name: 'EduConnect',
    category: 'academic',
    shortDescription: { fr: 'Plateforme de digitalisation des inscriptions scolaires.', en: 'Platform for digitizing school registrations.' },
    images: [educonnect1, educonnect2, educonnect3],
    status: 'in-progress',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    features: { fr: ['Authentification sécurisée', 'Système de Rôles (Étudiant & Directeur)', 'Tableaux de bord personnalisés'], en: ['Secure authentication', 'Role System (Student & Director)', 'Personalized dashboards'] },
    fullDescription: { fr: "EduConnect est une plateforme web moderne qui simplifie et centralise l'intégralité du processus d'inscription scolaire. Les étudiants peuvent découvrir des écoles, postuler et suivre leurs candidatures, tandis que les directeurs gèrent leurs établissements.", en: "EduConnect is a modern web platform that simplifies and centralizes the entire school registration process. Students can discover schools, apply, and track their applications, while directors manage their institutions." },
    client: { fr: 'Projet Personnel', en: 'Personal Project' },
    date: { fr: 'Août 2025', en: 'August 2025' },
    liveUrl: 'https://edu-connect-plateform.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/EduConnect-Plateform',
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 4,
    name: 'ESM-BÉNIN',
    category: 'client',
    shortDescription: { fr: 'Site web moderne de l\'École Supérieure de Management du Bénin.', en: 'Modern website for the Higher School of Management of Benin.' },
    images: [esmbenin1, esmbenin2, esmbenin3, esmbenin4],
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React Three Fiber', 'Vercel', 'Framer Motion', 'Shadcn UI', 'Radix UI', 'React Router', 'OpenAI API', 'Three.js'],
    features: { fr: ['Présentation institutionnelle complète', 'Assistant virtuel IA intégré', 'Animations et effets 3D immersifs', 'Mode sombre/clair'], en: ['Complete institutional presentation', 'Integrated AI virtual assistant', 'Immersive 3D animations and effects', 'Dark/Light mode'] },
    fullDescription: { fr: 'Site web institutionnel de l\'École Supérieure de Management du Bénin (ESM-BÉNIN), formant les leaders de demain. Le site présente les filières, programmes, et offre un assistant virtuel intelligent.', en: 'Institutional website of the Higher School of Management of Benin (ESM-BÉNIN), training tomorrow\'s leaders. The site presents courses, programs, and offers an intelligent virtual assistant.' },
    client: { fr: 'ESM-BÉNIN', en: 'ESM-BÉNIN' },
    date: { fr: 'Septembre 2025', en: 'September 2025' },
    liveUrl: 'https://esm-beninbj.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/esmbenin',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: 5,
    name: 'Morse Traduct',
    category: 'personal',
    shortDescription: { fr: 'Traducteur de code Morse avec fonctionnalités communautaires.', en: 'Morse code translator with community features.' },
    images: [morse1, morse2, morse3],
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: { fr: ['Traduction bidirectionnelle texte/morse', 'Profils utilisateurs et communauté', 'Interactions sociales (likes, commentaires)', 'Statistiques d\'utilisation'], en: ['Bidirectional text/morse translation', 'User profiles and community', 'Social interactions (likes, comments)', 'Usage statistics'] },
    fullDescription: { fr: 'Morse Traduct est une application web moderne pour traduire du texte en code Morse et inversement. C\'est aussi une communauté pour les passionnés du code Morse avec des profils et des interactions sociales.', en: 'Morse Traduct is a modern web application for translating text to Morse code and vice versa. It\'s also a community for Morse code enthusiasts with profiles and social interactions.' },
    client: { fr: 'Projet Communautaire', en: 'Community Project' },
    date: { fr: 'Octobre 2025', en: 'October 2025' },
    liveUrl: 'https://morse-traduct.vercel.app',
    codeUrl: 'https://github.com/REBCDR07/morse-traduct',
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    id: 6,
    name: 'Secure Passwords',
    category: 'personal',
    shortDescription: { fr: 'Application de gestion de mots de passe avec générateur avancé.', en: 'Password management app with advanced generator.' },
    images: [securepass1, securepass2, securepass3],
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: { fr: ['Authentification complète', 'Générateur de mots de passe avancé', 'Sauvegarde sécurisée des mots de passe', 'Mode sombre/clair'], en: ['Complete authentication', 'Advanced password generator', 'Secure password storage', 'Dark/Light mode'] },
    fullDescription: { fr: 'Secure Passwords est une application web complète permettant de générer, stocker et gérer ses mots de passe de manière sécurisée, avec une interface moderne et une architecture full-stack robuste.', en: 'Secure Passwords is a complete web application for generating, storing, and managing passwords securely, with a modern interface and robust full-stack architecture.' },
    client: { fr: 'Projet Personnel', en: 'Personal Project' },
    date: { fr: 'Novembre 2025', en: 'November 2025' },
    liveUrl: 'https://secure-passewords.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/secure-passwords',
    gradient: 'from-yellow-500 to-blue-800'
  },
  {
    id: 7,
    name: 'Humour Space',
    category: 'personal',
    shortDescription: { fr: "Plateforme communautaire dédiée au partage de blagues et d'humour.", en: 'Community platform dedicated to sharing jokes and humor.' },
    images: [humour1, humour2, humour3],
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: { fr: ['Publication de textes, vidéos et réels', 'Système d\'abonnements et de réactions', 'Tableaux de bord pour créateurs', 'Interface inspirée de TikTok et Facebook'], en: ['Posting of text, videos, and reels', 'Subscription and reaction system', 'Dashboards for creators', 'Interface inspired by TikTok and Facebook'] },
    fullDescription: { fr: 'Humour Space est une application web communautaire pour le partage de blagues et de bonne humeur, réunissant créateurs et fans dans un espace interactif où le rire devient social et participatif.', en: 'Humour Space is a community web application for sharing jokes and good vibes, bringing creators and fans together in an interactive space where laughter becomes social and participatory.' },
    client: { fr: 'Projet Personnel', en: 'Personal Project' },
    date: { fr: 'Juin 2025', en: 'June 2025' },
    liveUrl: 'https://rions.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/humour-space',
    gradient: 'from-blue-400 to-indigo-600'
  },
  {
    id: 8,
    name: 'Biocreative Hub',
    category: 'personal',
    shortDescription: { fr: 'Projet HTML moderne utilisant Tailwind CSS pour des applications web responsives.', en: 'Modern HTML project using Tailwind CSS for responsive web applications.' },
    images: [biohub1, biohub2, biohub3],
    status: 'completed',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    features: { fr: ['Structure HTML5 moderne', 'CSS Utility-first avec Tailwind', 'Composants pré-construits', 'Design mobile-first'], en: ['Modern HTML5 structure', 'Utility-first CSS with Tailwind', 'Pre-built components', 'Mobile-first design'] },
    fullDescription: { fr: 'Biocreative Hub est un projet HTML moderne utilisant Tailwind CSS pour construire des applications web responsives avec une configuration minimale, mettant l\'accent sur une approche mobile-first.', en: 'Biocreative Hub is a modern HTML project using Tailwind CSS to build responsive web applications with minimal configuration, focusing on a mobile-first approach.' },
    client: { fr: 'Projet Personnel', en: 'Personal Project' },
    date: { fr: 'Mai 2025', en: 'May 2025' },
    liveUrl: 'https://rebcdr07.github.io/biocreatif_hub.github.io/',
    codeUrl: 'https://github.com/REBCDR07/biocreatif_hub',
    gradient: 'from-green-400 to-teal-600'
  },
  {
    id: 9,
    name: 'Lecteur de Musique',
    category: 'personal',
    shortDescription: { fr: 'Lecteur de musique web élégant avec une interface glassmorphism.', en: 'Elegant web music player with a glassmorphism interface.' },
    images: [musicplayer1, musicplayer2, musicplayer3],
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: { fr: ['Interface glassmorphism avec effets visuels', 'Contrôles audio complets', 'Mise en page responsive horizontale', 'Raccourcis clavier'], en: ['Glassmorphism interface with visual effects', 'Complete audio controls', 'Horizontal responsive layout', 'Keyboard shortcuts'] },
    fullDescription: { fr: 'Un lecteur de musique web élégant et responsive avec une interface glassmorphism moderne et une mise en page optimisée pour garantir la visibilité de tous les contrôles sur tous les écrans.', en: 'An elegant and responsive web music player with a modern glassmorphism interface and optimized layout to ensure all controls are visible on all screens.' },
    client: { fr: 'Projet Personnel', en: 'Personal Project' },
    date: { fr: 'Avril 2025', en: 'April 2025' },
    liveUrl: 'https://qdl.netlify.app/',
    codeUrl: 'https://github.com/REBCDR07/kayson_qdl',
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    id: 10,
    name: 'Gestion d\'Électricité Locale',
    category: 'personal',
    shortDescription: { fr: 'Application de facturation électrique avec une interface futuriste.', en: 'Electric billing app with a futuristic interface.' },
    images: [electric1, electric2, electric3],
    status: 'completed',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    features: { fr: ['Design futuriste cyber-tech', 'Calcul automatique des factures', 'Sauvegarde dans l\'historique local', 'Intégration WhatsApp'], en: ['Futuristic cyber-tech design', 'Automatic invoice calculation', 'Local history backup', 'WhatsApp integration'] },
    fullDescription: { fr: 'Application web intuitive pour simplifier la gestion de la facturation électrique locale, avec une interface futuriste, des calculs instantanés et une intégration pour le partage des factures.', en: 'Intuitive web application to simplify local electric billing management, with a futuristic interface, instant calculations, and integration for invoice sharing.' },
    client: { fr: 'Projet Personnel', en: 'Personal Project' },
    date: { fr: 'Mars 2025', en: 'March 2025' },
    liveUrl: 'https://gestle.netlify.app/',
    codeUrl: 'https://github.com/REBCDR07/gestion_d_electricite_locale',
    gradient: 'from-teal-400 to-blue-600'
  },
  {
    id: 11,
    name: 'Benin Voice : Votre Voix Compte',
    category: 'academic',
    shortDescription: { fr: 'Application web et mobile pour soumettre des reclamations citoyennes, des signalements et des suggestions aux autorités locales.', en: 'Web and mobile app to submit citizen complaints, reports and suggestions to local authorities.' },
    images: [beninvoice1, beninvoice2, beninvoice3],
    status: 'in-progress',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Vercel', 'Framer Motion', 'Three.js', 'React Native'],
    features: { fr: ['Soumission de réclamations, signalements et suggestions', 'Suivi transparent des soumissions', 'Notifications en temps réel', 'Partage de projets et réformes par les autorités'], en: ['Submission of complaints, reports, and suggestions', 'Transparent tracking of submissions', 'Real-time notifications', 'Sharing of projects and reforms by authorities'] },
    fullDescription: { fr: 'Benin Voice est une application web et mobile visant à renforcer la communication entre les citoyens et les autorités locales au Bénin. Elle permet aux citoyens de soumettre des réclamations, signalements et suggestions, tout en offrant un suivi transparent et des notifications en temps réel. Les autorités peuvent également partager des projets ou réformes pour recueillir des avis.', en: 'Benin Voice is a web and mobile application aimed at strengthening communication between citizens and local authorities in Benin. It allows citizens to submit complaints, reports, and suggestions, while offering transparent tracking and real-time notifications. Authorities can also share projects or reforms to gather feedback.' },
    client: { fr: 'J\'ai travaillé sur ce projet côté frontend avec une équipe dédiée', en: 'I worked on this project on the frontend side with a dedicated team' },
    date: { fr: 'En cours de développement', en: 'Under development' },
    liveUrl: '',
    codeUrl: '',
    gradient: 'from-red-500 to-yellow-500'
  }
];

const categories = ['all', 'personal', 'academic', 'client'];

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

// --- COMPOSANT DE DÉTAIL DU PROJET (MODAL) ---
const ProjectDetailView = ({ project, onClose, lang }: { project: any, onClose: () => void, lang: 'fr' | 'en' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

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
        <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700/50">
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
        <div className="bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-6 flex-grow overflow-y-auto">
          <Badge className="mb-3 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600/50 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t(`projects.filter.${project.category}`)}
          </Badge>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            {project.name}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {project.fullDescription[lang]}
          </p>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
              {t('projects.features')}
            </h3>
            <div className="grid gap-2">
              {project.features[lang].map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 flex-shrink-0`}></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 flex flex-col">
        {/* Détails du projet (Date, Client, Status) */}
        <div className="bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-cyan-500/30 rounded-lg p-5">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t('projects.details')}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <div>
                <div className="text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Date</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {project.date[lang]}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <div>
                <div className="text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Client</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {project.client[lang]}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <StatusIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <div>
                <div className="text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Status</div>
                <Badge className={`${statusConfig[project.status as keyof typeof statusConfig].color} text-white border-0 mt-1 font-bold`} style={{ fontFamily: 'Orbitron, monospace' }}>
                  {t(`status.${project.status}`)}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-5">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t('projects.tech_stack')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, idx: number) => (
              <div key={idx} className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/50 px-2 py-1.5 rounded-md border border-slate-200 dark:border-slate-700/50">
                <img src={techIcons[tech]} alt={tech} className="w-4 h-4" />
                <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Liens */}
        <div className="bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-5 mt-auto">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t('projects.links')}
          </h3>
          <div className="space-y-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <button className={`w-full py-2.5 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-1.5`} style={{ fontFamily: 'Orbitron, monospace' }}>
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t('projects.live')}
                </button>
              </a>
            )}
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}>
                  <Github className="w-3.5 h-3.5" />
                  {t('projects.code')}
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPOSANT PRINCIPAL ---
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [filter, setFilter] = useState('all');
  const [terminalState, setTerminalState] = useState(TERMINAL_STATES.IDLE);
  const [terminalLines, setTerminalLines] = useState<React.ReactNode[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const slideInterval = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t, language } = useLanguage();

  const filteredProjects = projectsData.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

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
    let timeoutId: ReturnType<typeof setTimeout>;
    switch (terminalState) {
      case TERMINAL_STATES.TYPING_INSTALL:
        typeCommand('npm install', TERMINAL_STATES.INSTALLING);
        break;
      case TERMINAL_STATES.INSTALLING:
        timeoutId = setTimeout(() => {
          setTerminalLines(prev => [...prev, <span key="install" className="text-green-500 dark:text-green-400 flex items-center gap-2"><Check size={16} />Successfully installed packages.</span>]);
          setTerminalState(TERMINAL_STATES.TYPING_DEV);
        }, 1500);
        break;
      case TERMINAL_STATES.TYPING_DEV:
        typeCommand('npm run dev', TERMINAL_STATES.COMPILING);
        break;
      case TERMINAL_STATES.COMPILING:
        timeoutId = setTimeout(() => {
          setTerminalLines(prev => [...prev, <span key="compile" className="text-green-500 dark:text-green-400 flex items-center gap-2"><Check size={16} />Compiled successfully. Starting server...</span>]);
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
    if (filteredProjects.length === 0) return;
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevSlide = () => {
    if (filteredProjects.length === 0) return;
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setCurrentIndex(0);
    setDirection(0);
  };

  const handleProjectNavigation = (offset: number) => {
    if (selectedProject === null) return;
    const currentIdx = filteredProjects.findIndex(p => p.id === selectedProject);
    const nextIdx = (currentIdx + offset + filteredProjects.length) % filteredProjects.length;
    const nextProjectId = filteredProjects[nextIdx].id;

    setTerminalLines([]);
    setCurrentLine('');
    setTerminalState(TERMINAL_STATES.IDLE);
    setSelectedProject(nextProjectId);
  };

  const stopAutoScroll = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    if (filteredProjects.length > 1) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  }, [nextSlide, filteredProjects.length]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll]);

  // Use useMemo for visibility calculation to avoid re-renders
  const visibleProjects = useMemo(() => {
    if (filteredProjects.length === 0) return [];
    if (filteredProjects.length === 1) return [{ ...filteredProjects[0], key: 'center' }];

    const pIdx = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    const nIdx = (currentIndex + 1) % filteredProjects.length;

    return [
      { ...filteredProjects[pIdx], key: `prev-${filteredProjects[pIdx].id}` },
      { ...filteredProjects[currentIndex], key: `center-${filteredProjects[currentIndex].id}` },
      { ...filteredProjects[nIdx], key: `next-${filteredProjects[nIdx].id}` }
    ];
  }, [currentIndex, filteredProjects]);

  const projectToDisplay = projectsData.find(p => p.id === selectedProject);

  return (
    <section id="projets" className="py-20 relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 rounded-full px-5 py-2.5 mb-5">
            <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm text-cyan-600 dark:text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
              {t('projects.terminal')}
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-5 text-slate-900 dark:text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t('projects.title').split(' ')[0]} <span className="bg-gradient-to-r from-purple-500 via-pink-600 to-rose-500 dark:from-purple-400 dark:via-pink-500 dark:to-rose-500 bg-clip-text text-transparent">{t('projects.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {t('projects.desc')}
          </p>
        </div>

        {/* WORKFLOW SECTION */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              {t('projects.workflow.title').split(' ')[0]} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('projects.workflow.title').split(' ').slice(1).join(' ')}</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {t('projects.workflow.desc')}
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 relative max-w-6xl mx-auto px-4">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative group flex-1"
                >
                  <div className={`h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-6 rounded-2xl transition-all duration-300 ${step.border} hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center`}>
                    <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                      <step.icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>{step.title[language]}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{step.description[language]}</p>
                  </div>
                </motion.div>

                {index < workflowSteps.length - 1 && (
                  <div className="flex items-center justify-center text-slate-300 dark:text-slate-600">
                    <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-slate-200 dark:border-slate-700/50'
                }`}
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              {t(`projects.filter.${category}`)}
            </button>
          ))}
        </div>

        {/* --- CAROUSEL DU PROJET (UNIQUE) --- */}
        <div className="relative max-w-7xl mx-auto min-h-[550px]">
          {filteredProjects.length > 0 ? (
            <>
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
                      const isCenter = project.id === filteredProjects[currentIndex].id;
                      return (
                        <div
                          key={project.key}
                          className={`transition-all duration-300 ${isCenter ? 'w-[450px] z-20' : 'w-[320px] scale-90 opacity-40 hover:opacity-70 z-10'}`}
                        >
                          <ProjectCard
                            name={project.name}
                            shortDescription={project.shortDescription[language]}
                            technologies={project.technologies}
                            imageUrl={project.images[0]}
                            status={project.status}
                            category={t(`projects.filter.${project.category}`)}
                            gradient={project.gradient}
                            isActive={isCenter}
                            onClick={() => setSelectedProject(project.id)}
                            shareUrl={project.liveUrl || project.codeUrl || window.location.href}
                          />
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 hover:bg-white dark:hover:bg-slate-700/50 text-cyan-600 dark:text-cyan-400 rounded-full transition-all hover:scale-110 shadow-sm"
                aria-label={t('projects.prev')}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 hover:bg-white dark:hover:bg-slate-700/50 text-cyan-600 dark:text-cyan-400 rounded-full transition-all hover:scale-110 shadow-sm"
                aria-label={t('projects.next')}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex items-center justify-center gap-2 mt-8">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`transition-all rounded-full ${idx === currentIndex ? 'w-8 h-2 bg-cyan-600 dark:bg-cyan-400' : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'}`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800/50 mb-4">
                <Filter className="w-8 h-8 text-slate-500 dark:text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300" style={{ fontFamily: 'Orbitron, monospace' }}>{t('projects.empty')}</h3>
              <p className="text-slate-500">{t('projects.retry')}</p>
            </div>
          )}
        </div>
      </div>

      {/* --- MODAL (TERMINAL) --- */}
      <AnimatePresence>
        {selectedProject !== null && projectToDisplay && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-sm p-4 pt-20 sm:pt-24 flex items-start justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="w-full max-w-7xl h-full bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/10 flex flex-col"
            >
              <div className="flex-shrink-0 bg-slate-50 dark:bg-slate-800/80 rounded-t-lg py-2 px-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block" style={{ fontFamily: 'monospace' }}>
                  /home/projects/{projectToDisplay.name.replace(/\s+/g, '-').toLowerCase()}
                </p>
                <button
                  onClick={closeTerminal}
                  className="p-1.5 -m-1.5 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-md transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-grow p-4 md:p-6 overflow-y-auto">
                {terminalState !== TERMINAL_STATES.SHOWING_PROJECT ? (
                  <>
                    <div className="font-mono text-sm space-y-2 text-slate-700 dark:text-slate-300">
                      {terminalLines.map((line, index) => <div key={index}>{line}</div>)}
                    </div>
                    {currentLine && (
                      <div className="flex items-center gap-2 font-mono text-sm text-cyan-600 dark:text-cyan-400">
                        <span>user@portfolio:~$</span>
                        <span>{currentLine}</span>
                        <span className="w-2 h-4 bg-cyan-600 dark:bg-cyan-400 animate-blink"></span>
                      </div>
                    )}
                    {terminalState === TERMINAL_STATES.INSTALLING && (
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-mono text-sm mt-2">
                        <Loader className="animate-spin" size={16} />
                        <span>Installing dependencies...</span>
                      </div>
                    )}
                    {terminalState === TERMINAL_STATES.COMPILING && (
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-mono text-sm mt-2">
                        <Loader className="animate-spin" size={16} />
                        <span>Compiling...</span>
                      </div>
                    )}
                  </>
                ) : (
                  <ProjectDetailView project={projectToDisplay} onClose={closeTerminal} lang={language} />
                )}
              </div>

              {terminalState === TERMINAL_STATES.SHOWING_PROJECT && (
                <div className="flex-shrink-0 bg-slate-50 dark:bg-slate-800/50 rounded-b-lg py-3 px-4 flex items-center justify-center gap-4 border-t border-slate-200 dark:border-slate-700/50">
                  <button
                    onClick={() => handleProjectNavigation(-1)}
                    className="w-full py-2.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {t('projects.prev')}
                  </button>
                  <button
                    onClick={closeTerminal}
                    className="w-full py-2.5 bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 text-red-500 dark:text-red-400 font-bold rounded-lg hover:bg-red-500/20 dark:hover:bg-red-500/30 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    <X className="w-4 h-4" />
                    {t('projects.stop')}
                  </button>
                  <button
                    onClick={() => handleProjectNavigation(1)}
                    className="w-full py-2.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-1.5" style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {t('projects.next')}
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