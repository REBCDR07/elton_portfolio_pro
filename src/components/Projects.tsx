import { useState } from 'react';
import { ExternalLink, Github, Users, Calendar, Briefcase, CheckCircle, Clock, Handshake, Terminal, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import projetImage1 from '@/assets/azertype.jpg';
import projetImage2 from '@/assets/educonnect.jpg';
import projetImage3 from '@/assets/elton.jpg';
import projetImage4 from '@/assets/fitclub.jpg';
import projetImage5 from '@/assets/gestle.jpg';
import projetImage6 from '@/assets/jnfood1.jpg';
import projetImage7 from '@/assets/jofams.jpg';
import projetImage8 from '@/assets/kys.jpg';
import projetImage9 from '@/assets/mds.jpg';
import projetImage10 from '@/assets/nga.jpg';
import projetImage11 from '@/assets/tcs.jpg';
import projetImage12 from '@/assets/logo-esm.webp';
import projetImage13 from '@/assets/morse.jpg';
import { features } from 'process';



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
  'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
  'ThreeJs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  'OpenAI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg',
  'React Three Fiber': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'PostCSS' : 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg',
};

const statusConfig = {
  completed: { 
    label: 'Terminé', 
    color: 'bg-green-500',
    icon: CheckCircle,
    borderColor: 'border-green-500/30'
  },
  'in-progress': { 
    label: 'En_cours', 
    color: 'bg-yellow-500',
    icon: Clock,
    borderColor: 'border-yellow-500/30'
  },
  collaboration: { 
    label: 'Recherche_de_collaboration', 
    color: 'bg-orange-500',
    icon: Handshake,
    borderColor: 'border-orange-500/30'
  }
};

const projects = [
  {
    id: 1,
    name: 'ESM-BÉNIN - École Supérieure de Management ,,,,,,,,,',
    category: 'Site Web',
    shortDescription: 'Site web institutionnel moderne de l\'École Supérieure de Management du Bénin',
    image: projetImage12,
    status: 'completed',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'React Router', 'Framer Motion', 'ThreeJs', 'OpenAI', 'React Three Fiber', 'PostCSS', 'Vite'],
    features: [
      'Présentation institutionnelle complète',
      'Design responsive et moderne',
      'Assistant virtuel IA intégré',
      'Animations et effets 3D immersifs',
      'Mode sombre/clair',
      'Performance optimisée',
    ],
    features1: [
      'Accueil : Hero animé, statistiques, actualités',
      'Université : Histoire, vision, campus',
      'Filières : Programmes BTS, Licence, Master',
      'Vie étudiante : Associations, événements, témoignages',
      'Recherche : Publications, projets académiques',
      'Contact : Formulaire, localisation, informations',
      'Card3D : Cartes avec effet de parallaxe 3D',
      'CounterStat : Compteurs animés pour les statistiques',
      'ExpandOnHoverGallery : Galerie avec expansion au survol',
      'ChatAssistant : Assistant IA conversationnel',
      'WavyHeroSection : Section hero avec animations fluides',
      'TypewriterText : Effet machine à écrire',
    ],
    fullDescription: 'Site web institutionnel de l\'École Supérieure de Management du Bénin (ESM-BÉNIN), une institution d\'enseignement supérieur de référence formant les leaders et managers de demain. Le site présente les filières, programmes, actualités et offre un assistant virtuel intelligent pour répondre aux questions des étudiants.',
    client: 'L\'Ecole Supérieure de Management du Bénin',
    date: '12 Octobre 2025 à 24 Octobre 2025',
    liveUrl: 'https://esm-benin.vercel.app/', 
    codeUrl: 'https://github.com/REBCDR07/esm-benin', 
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 2,
    name: 'Portfolio Professionnel',
    category: 'Vitrine',
    shortDescription: 'Portfolio Professionnel',
    image: projetImage3,
    status: 'completed',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    features: [
      'Design cyberpunk/tech avec effets de glassmorphisme',
      'Effet typewriter qui s\'écrit en temps réel',
      'Terminal interactif qui affiche du vrai code',
      'Timeline animée de mon parcours professionnel',
      'Section projets avec vue détaillée de chaque réalisation',
      'Formulaire de contact opérationnel',
      '100% responsive et optimisé mobile',
      'Palette Cyan/Blue/Purple',
      'Polices Orbitron (tech) + Rajdhani (moderne)',
      'Effets de glow et particules flottantes',
      'Bordures lumineuses qui réagissent au hover',
    ],
    fullDescription: "Portfolio personnel moderne avec un design cyberpunk/tech, développé avec React, TypeScript et TailwindCSS. Interface interactive avec animations fluides, glassmorphisme et effets visuels avancés. ",
    client: 'Projet Personnel',
    date: 'Août 2025',
    liveUrl: 'https://eltonhounnou.vercel.app/', 
    codeUrl: 'https://github.com/REBCDR07/elton_portfolio_pro', 
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 3,
    name: 'AzerType',
    category: 'Web Game App',
    shortDescription: 'Application web pour améliorer la dactylographie.',
    image: projetImage1,
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Interface ludique et interactive pour s\'entraîner à taper rapidement',
      'Exercices de dactylographie variés',
      'Suivi en temps réel des performances utilisateur (vitesse, erreurs)',
      'Design simple et responsive adapté à tous types d\'écrans',
    ],
    fullDescription: 'AzerType est une application web que j\'ai développée pour aider les utilisateurs à améliorer leur vitesse et précision au clavier. Ce projet personnel m\'a permis de mettre en pratique mes compétences en JavaScript, notamment l\'interaction avec le DOM, ainsi que l\'intégration HTML et CSS. L\'application offre une interface ludique et interactive où les utilisateurs peuvent s\'entraîner à taper rapidement à travers divers exercices de dactylographie. Elle inclut un suivi en temps réel des performances, affichant la vitesse de frappe et le nombre d\'erreurs, ce qui permet aux utilisateurs de mesurer leurs progrès au fil du temps. Le design est simple et responsive, assurant une expérience utilisateur optimale sur tous types d\'écrans. Une PWA (Progressive Web App) est également développée pour une accessibilité facile sur les appareils des utilisateurs. Installable en un clic, elle offre une expérience utilisateur fluide et rapide.',
    client: 'Moi-même',
    date: 'Juillet 2025',
    liveUrl: 'https://azertypee.netlify.app',
    codeUrl: 'https://github.com/REBCDR07/AzerType',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 4,
    name: 'EduConnect',
    category: 'Fullstack Web App',
    shortDescription: 'Plateforme web complète pour la digitalisation des inscriptions scolaires et universitaires.',
    image: projetImage2,
    status: 'collaboration',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript Plain', 'React Router', 'Firebase'],
    features: [
      'Authentification sécurisée avec gestion de mots de passe',
      'Système de Rôles distincts (Étudiant & Directeur) avec vues dédiées',
      'Tableaux de bord personnalisés pour chaque rôle',
      'Gestion complète des écoles (CRUD) par les directeurs',
      'Upload d\'images personnalisé pour les profils d\'écoles',
      'Système d\'approbation et de rejet des candidatures',
      'Export de données des inscrits au format JSON',
      'Interface 100% responsive avec menu mobile',
      'Mode sombre et clair pour le confort visuel'
    ],
    fullDescription: "EduConnect est une plateforme web moderne qui simplifie et centralise l'intégralité du processus d'inscription scolaire. Conçue avec une approche frontend-first, cette application propose deux parcours utilisateurs distincts. Les étudiants peuvent découvrir des écoles, postuler via un formulaire complet et suivre le statut de leurs candidatures. Les directeurs bénéficient d'un tableau de bord puissant pour créer et gérer le profil de leurs établissements (y compris le téléversement de photos), consulter les dossiers des candidats, et accepter ou rejeter les demandes. Le projet est entièrement fonctionnel avec un backend simulé via localStorage, démontrant une architecture de composants solide, une gestion d'état globale et une interface utilisateur réactive.",
    client: 'Projet Personnel / Portfolio',
    date: 'Août 2025',
    liveUrl: 'https://edu-connect-plateform.vercel.app/', 
    codeUrl: 'https://github.com/REBCDR07/EduConnect-Plateform', 
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 5,
    name: 'The Code Share',
    category: 'Full-Stack App',
    shortDescription: 'Application web conçue et développée pour permettre aux développeurs web de partager, collaborer et apprendre ensemble.',
    image: projetImage10,
    status: 'collaboration',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    features: [
      'Partage de code en temps réel avec mise en forme syntaxique',
      'Système de commentaires pour chaque snippet de code',
      'Fonctionnalité de recherche avancée pour trouver des snippets par langage, tags ou popularité',
      'Système de tags pour organiser et catégoriser les snippets',
      'Exploration avancée des projets avec système de recherche, filtres dynamiques, et pagination pour une navigation fluide',
      'Interface utilisateur intuitive et responsive',
      'Système de notation et de like pour les snippets',
      'Tableau de bord personnalisé pour chaque utilisateur',
      'Notifications en temps réel pour les interactions sur les snippets',
      'Authentification sécurisée avec gestion des sessions et cryptage bcrypt.',
      'Sécurité renforcée contre les attaques XSS, CSRF et injections SQL.',
      'Interface responsive et moderne réalisée avec Bootstrap 5.',
      'Déploiement sur un serveur web avec configuration SSL pour une connexion sécurisée (HTTPS).',
    ],
    fullDescription: 'Une application web pour partager et découvrir des snippets de code. Les utilisateurs peuvent créer des snippets, les partager avec la communauté, et les noter. Les snippets sont classés par langage, popularité et date de publication. L\'interface est intuitive et responsive, offrant une expérience utilisateur optimale sur tous les appareils. Le backend est développé en PHP avec une base de données MySQL pour stocker les utilisateurs, snippets et interactions. L\'application inclut des fonctionnalités avancées telles que la recherche, les tags, et un système de notifications en temps réel. La sécurité est une priorité, avec des mesures contre les attaques courantes et une authentification sécurisée. Utilisation des services d\'InfinityFree et de FileZilla pour l\'hébergement et la gestion de la base de données MySQL.',
    client: 'Projet Personnel',
    date: 'Avril 2025',
    liveUrl: null,
    codeUrl: 'https://github.com/REBCDR07/TheCodeShare',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 6,
    name: 'FitClub',
    category: 'Vitrine',
    shortDescription: 'Site vitrine pour salle de gym.',
    image: projetImage4,
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Design moderne et attractif',
      'Sections détaillées sur les services, horaires et tarifs',
      'Formulaire de contact intégré',
      'Galerie photo des installations',
      'Site 100% responsive'
    ],
    fullDescription: 'FitClub est un site vitrine que j\'ai créé pour une salle de gym locale. Le site présente les services offerts, les horaires d\'ouverture, les tarifs des abonnements, ainsi qu\'une galerie photo des installations. J\'ai utilisé HTML5 et CSS3 pour structurer et styliser le site, en intégrant Tailwind CSS pour accélérer le développement et assurer un design moderne. Le site inclut également un formulaire de contact fonctionnel permettant aux visiteurs d\'envoyer des messages directement à la salle de gym. L\'ensemble du site est entièrement responsive, garantissant une expérience utilisateur optimale sur tous les types d\'appareils, des smartphones aux ordinateurs de bureau. ',
    client: 'FitClub (Projet personnel)',
    date: 'Juin 2025',
    liveUrl: 'https://fitness-club-by-eltonhounnou.netlify.app/',
    codeUrl: 'https://github.com/REBCDR07/salle_de_fitness',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    id: 7,
    name: 'Gestion d\'Électricité Locale (GESTLE)',
    category: 'Application_Web',
    shortDescription: 'Application web moderne et intuitive conçue pour simplifier la gestion de la facturation électrique locale.',
    image: projetImage5,
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Design Futuriste - Interface cyber-tech avec effets glassmorphisme',
      'Calcul Automatique - Facturation instantanée basée sur la consommation',
      '100% Responsive - Parfaitement adapté à tous les appareils',
      'Sauvegarde Locale - Historique complet avec localStorage',
      ' Intégration WhatsApp - Envoi direct des factures via WhatsApp',
      'Animations Fluides - Transitions 3D et effets visuels avancés',
      'Sécurisé - Données stockées localement sur l\'appareil',
      'Calcul de Facturation - Saisie Intuitive : Formulaire moderne avec validation en temps réel; Calcul Automatique : Consommation = Nouvel Index - Ancien Index; Tarification Fixe : 300 F CFA par kW consommé; Génération Instantanée : Facture créée en moins de 2 secondes',
      'Historique Complet - Enregistrement local des factures avec localStorage; Consultation Facile : Accès rapide à l\'historique des factures passées; Gestion Simplifiée : Suppression individuelle ou totale des factures',
    ],
    fullDescription: 'GESTLE est une application web conçue pour simplifier la gestion de la facturation électrique locale. Elle offre une interface moderne et intuitive, avec un design futuriste et des animations fluides. Les utilisateurs peuvent calculer automatiquement leur facture en fonction de leur consommation, et les données sont sauvegardées localement sur l\'appareil pour un accès facile. L\'application est entièrement responsive, garantissant une expérience optimale sur tous les appareils. De plus, elle intègre une fonctionnalité d\'envoi direct des factures via WhatsApp, facilitant la communication avec les clients. GESTLE est une solution sécurisée et efficace pour la gestion de la facturation électrique. Un système de tarification fixe de 300 F CFA par kW consommé est appliqué, avec une génération instantanée des factures en moins de 2 secondes. Une PWA (Progressive Web App) est également développée pour une accessibilité facile sur les appareils des utilisateurs. Installable en un clic, elle offre une expérience utilisateur fluide et rapide.',
    client: 'Moi-même / Projet Personnel',
    date: 'Juin 2025',
    liveUrl: 'https://gestle.netlify.app/',
    codeUrl: 'https://github.com/REBCDR07/gestion_d_electricite_locale',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    id: 8,
    name: 'Jean Nicolas Food (JNFOOD)',
    category: 'Site_Vitrine',
    shortDescription: 'Application web pour entreprise locale de patisserie & de nourriture.',
    image: projetImage6,
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Catalogue de produits avec images et descriptions',
      'Panier d\'achat interactif',
      'Formulaire de commande simple',
      'Design attrayant et responsive',
      'Téléchargement de commande au format PDF',
    ],
    fullDescription: 'JNFOOD est une application web que j\'ai développée pour une entreprise locale de pâtisserie et de nourriture. Le site permet aux utilisateurs de parcourir un catalogue de produits, d\'ajouter des articles à un panier d\'achat interactif, et de passer des commandes via un formulaire simple. J\'ai utilisé HTML5, CSS3 et JavaScript pour créer une interface utilisateur attrayante et responsive, assurant une expérience optimale sur tous les types d\'appareils. De plus, l\'application inclut une fonctionnalité permettant aux utilisateurs de télécharger leur commande au format PDF, facilitant ainsi le processus de commande pour les clients et l\'entreprise.',
    client: 'Jean Nicolas Food',
    date: 'Juin 2025',
    liveUrl: 'https://verojnf.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/vero_jnf',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 9,
    name: 'Portfolio Littéraire JOFAMS',
    category: 'Vitrine',
    shortDescription: 'Portfolio élégant et responsive conçu pour mettre en valeur les compétences littéraires d\'une écrivaine professionnelle. ',
    image: projetImage7,
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Présentation des œuvres littéraires lues et écrites',
      'Biographie de l\'auteure',
      'Formulaire de contact',
      'Design élégant et épuré avec animations subtiles et navigation intuitive pour une expérience utilisateur optimale.',
      'Site 100% responsive',
    ],
    fullDescription: 'JOFAMS est un portfolio que j\'ai créé pour une écrivaine professionnelle afin de mettre en valeur ses compétences littéraires. Le site présente une sélection de ses œuvres, ainsi qu\'une biographie détaillée et un formulaire de contact pour les lecteurs intéressés. J\'ai utilisé HTML5, CSS3 et JavaScript pour concevoir une interface élégante et épurée, avec des animations subtiles et une navigation intuitive pour une expérience utilisateur optimale. Le site est entièrement responsive, garantissant une présentation parfaite sur tous les types d\'appareils, des smartphones aux ordinateurs de bureau.',
    date: 'Juin 2025',
    liveUrl: 'https://juanita-amoussou.vercel.app/',
    codeUrl: 'https://github.com/REBCDR07/Juanita_Amoussou',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 10,
    name: 'Netflix Game Amator (NGA)',
    category: 'Web_Game',
    shortDescription: 'Application interactive de quiz immersive dédiée aux passionnés de l\'univers Netflix.',
    image: projetImage10,
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Quiz thématique sur les séries et films Netflix',
      'Interface utilisateur immersive et engageante',
      'Système de score et de classement',
      'Design responsive pour une expérience optimale sur tous les appareils',
      'Timer de 30 secs pour chaque question',
    ],
    fullDescription: 'Netflix Game Amator (NGA) est une application web interactive que j\'ai développée pour les passionnés de l\'univers Netflix. Le jeu propose un quiz thématique où les utilisateurs peuvent tester leurs connaissances sur les séries et films disponibles sur la plateforme. J\'ai utilisé HTML5, CSS3 et JavaScript pour créer une interface utilisateur immersive et engageante, avec des animations et des effets sonores pour renforcer l\'expérience de jeu. Le système de score  permet aux joueurs de suivre leurs performances. Le design est entièrement responsive, garantissant une expérience optimale sur tous les types d\'appareils, des smartphones aux ordinateurs de bureau.', 
    client: 'Projet Personnel',
    date: 'Avril 2025',
    liveUrl: 'https://netflix-amator-game.vercel.app/',
    codeUrl: 'https://github.com/Elton27-Coder/NETFLIX-AMATOR-GAME',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 11,
    name: 'Kayson Musics (KYS)',
    category: 'Music Player',
    shortDescription: 'Lecteur de musique',
    image: projetImage8,
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Interface glassmorphism avec effets de transparence et de flou',
      'Dégradés colorés animés en arrière-plan',
      'Design responsive adapté à tous les écrans',
      'Lecture/Pause avec animations',
      'Navigation entre les pistes (précédent/suivant)',
      'Mode répétition et lecture aléatoire',
      'Contrôle du volume avec slider interactif',
      'Barre de progression cliquable',
      'Indicateur de chargement',
    ],
    fullDescription: "KAYSON MUSICS est un lecteur de musique web moderne et élégant, conçu avec une interface glassmorphism et une mise en page horizontale garantissant la visibilité optimale de tous les contrôles sur tous les écrans. Le design intègre des dégradés animés, des effets de transparence, des micro-interactions et des animations fluides pour une expérience immersive. Les utilisateurs peuvent lire, mettre en pause, naviguer entre les pistes, activer le mode répétition ou lecture aléatoire, et ajuster le volume grâce à des contrôles intuitifs et accessibles. Une barre de progression cliquable, un indicateur de chargement, ainsi que des raccourcis clavier (lecture/pause, navigation, volume, mute, shuffle, repeat) optimisent l\'interaction. Le projet est responsive et tactile-friendly : sur desktop, l\'interface est horizontale (informations à gauche, contrôles à droite), tandis que sur mobile elle s\'adapte verticalement avec des breakpoints précis. KAYSON MUSICS intègre également des fonctionnalités avancées telles que la gestion des erreurs avec notifications, le support du mode contraste élevé, et une meilleure accessibilité grâce aux états de focus et à la réduction d\'animations selon les préférences utilisateur. Ce projet démontre ma capacité à allier design moderne, réactivité multi-appareils et ergonomie musicale.",
    client: 'Projet Personnel',
    date: 'Août 2025',
    liveUrl: 'https://qdl.netlify.app/', 
    codeUrl: 'https://github.com/REBCDR07/kayson_qdl', 
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 12,
    name: 'My Secure Diary (MDS)',
    category: 'Application_Web',
    shortDescription: 'My Secure Diary - la réinvention du journal personnel sécurisé !',
    image: projetImage9,
    status: 'collaboration',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript Plain', 'Supabase'],
    features: [
      'Créez et éditez des notes organisées par dates, tags et typologies.',
      'Recherchez rapidement avec filtres avancés.',
      'Personnalisez votre expérience : choix de police et activation du mode sombre pour une ambiance apaisante.',
      'Design minimaliste et moderne, avec des tons chaleureux pour une interface sereine.',
      'et plus  ...',
    ],
    fullDescription: "My Secure Diary est une application web moderne qui réinvente le journal personnel en le rendant totalement privé et sécurisé. Conçue pour protéger les pensées les plus intimes, elle combine un chiffrement robuste, un stockage cloud sécurisé et une authentification biométrique ou par code pour garantir une confidentialité à 100%. Les utilisateurs peuvent créer et éditer des notes organisées par dates, tags et typologies, puis retrouver facilement leurs écrits grâce à un moteur de recherche avec filtres avancés.L\'expérience est hautement personnalisable, avec la possibilité de choisir la police d\'écriture et d\'activer un mode sombre apaisant. Inspirée de Standard Notes mais pensée pour les jeunes adultes et professionnels soucieux de leur vie privée, My Secure Diary offre un design minimaliste aux tons chaleureux, favorisant la sérénité et le bien-être quotidien. Le projet illustre une architecture frontend-first solide, une gestion d\'état optimale et une interface réactive, démontrant ma capacité à allier sécurité, ergonomie et esthétique moderne.",
    client: 'Projet Personnel',
    date: 'Août 2025',
    liveUrl: null, 
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 13,
    name: 'Morse Traduct',
    category: 'Application_Web',
    shortDescription: 'Morse Traduct : Traduction de code morse en texte brut permettant de déchiffrer et de décoder plus facilement un code morse, vice versa.',
    image: projetImage13,
    status: 'termine',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript Plain', 'Supabase'],
    features: [
      'Créez et éditez des notes organisées par dates, tags et typologies.',
      'Recherchez rapidement avec filtres avancés.',
      'Personnalisez votre expérience : choix de police et activation du mode sombre pour une ambiance apaisante.',
      'Design minimaliste et moderne, avec des tons chaleureux pour une interface sereine.',
      'et plus  ...',
    ],
    fullDescription: "My Secure Diary est une application web moderne qui réinvente le journal personnel en le rendant totalement privé et sécurisé. Conçue pour protéger les pensées les plus intimes, elle combine un chiffrement robuste, un stockage cloud sécurisé et une authentification biométrique ou par code pour garantir une confidentialité à 100%. Les utilisateurs peuvent créer et éditer des notes organisées par dates, tags et typologies, puis retrouver facilement leurs écrits grâce à un moteur de recherche avec filtres avancés.L\'expérience est hautement personnalisable, avec la possibilité de choisir la police d\'écriture et d\'activer un mode sombre apaisant. Inspirée de Standard Notes mais pensée pour les jeunes adultes et professionnels soucieux de leur vie privée, My Secure Diary offre un design minimaliste aux tons chaleureux, favorisant la sérénité et le bien-être quotidien. Le projet illustre une architecture frontend-first solide, une gestion d\'état optimale et une interface réactive, démontrant ma capacité à allier sécurité, ergonomie et esthétique moderne.",
    client: 'Projet Personnel',
    date: 'Août 2025',
    liveUrl: null, 
    gradient: 'from-blue-500 to-green-500'
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const contactForCollaboration = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (selectedProject !== null) {
    const project = projects.find(p => p.id === selectedProject);
    if (!project) return null;

    const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon;

    return (
      <div className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto">
        <button 
          onClick={() => setSelectedProject(null)}
          aria-label="Close Project Details"
          className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 bg-slate-800/80 backdrop-blur-xl border border-cyan-500/30 hover:bg-slate-700/80 text-cyan-400 rounded-lg transition-all hover:scale-110 group"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform" />
        </button>

        <div className="container mx-auto px-2 sm:px-4 py-12 sm:py-16 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-3 sm:gap-6">
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="relative aspect-video rounded-lg sm:rounded-2xl overflow-hidden border border-slate-700/50">
                <img 
                  src={project.image} 
                  alt={project.name}
                  loading="lazy"
                  width="384"
                  height="384"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg sm:rounded-2xl p-3 sm:p-6">
                <Badge className="mb-2 sm:mb-3 bg-slate-700/50 text-slate-300 border-slate-600/50 font-bold text-[10px] sm:text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {project.category}
                </Badge>
                <h1 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {project.name}
                </h1>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-base mb-4 sm:mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {project.fullDescription}
                </p>

                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                    // Fonctionnalités
                  </h3>
                  <div className="grid gap-1.5 sm:gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-slate-300 text-xs sm:text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 sm:mt-2 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div> 
                <br />

                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                    // Points Clés
                  </h3>
                  <div className="grid gap-1.5 sm:gap-2">
                    {project.features1.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-slate-300 text-xs sm:text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 sm:mt-2 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg sm:rounded-2xl p-3 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Projet_Details
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] sm:text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Date</div>
                      <div className="text-xs sm:text-sm text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{project.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] sm:text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Client</div>
                      <div className="text-xs sm:text-sm text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] sm:text-xs text-slate-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Status</div>
                      <Badge className={`${statusConfig[project.status as keyof typeof statusConfig].color} text-white border-0 mt-1 font-bold text-[10px]`} style={{ fontFamily: 'Orbitron, monospace' }}>
                        {statusConfig[project.status as keyof typeof statusConfig].label}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg sm:rounded-2xl p-3 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Tech_stack
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-1 sm:gap-1.5 bg-slate-800/50 px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-md border border-slate-700/50">
                      <img 
                        src={techIcons[tech]} 
                        alt={tech}
                        loading="lazy"
                        width="384"
                        height="384"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <span className="text-[10px] sm:text-xs text-slate-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg sm:rounded-2xl p-3 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Links
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <button className={`w-full px-3 py-2 sm:py-2.5 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-1.5 text-xs sm:text-sm`} style={{ fontFamily: 'Orbitron, monospace' }} aria-label="live view">
                        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        Live_View
                      </button>
                    </a>
                  )} <br />
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <button className="w-full px-3 py-2 sm:py-2.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 font-bold rounded-lg hover:bg-slate-700/50 transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm" style={{ fontFamily: 'Orbitron, monospace' }} aria-label="source code">
                      <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Source_Code
                    </button>
                  </a>
                  <button 
                    onClick={contactForCollaboration}
                    className="w-full px-3 py-2 sm:py-2.5 bg-slate-800/50 border border-cyan-500/30 text-cyan-400 font-bold rounded-lg hover:bg-slate-700/50 transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                    style={{ fontFamily: 'Orbitron, monospace' }} aria-label="Collaborate"
                  >
                    <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    Collaborate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="projets" className="py-12 sm:py-20 relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5 mb-3 sm:mb-5">
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-[10px] sm:text-sm text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
              $ git log --all
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-5xl font-bold mb-3 sm:mb-5 px-3 leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
            Mes <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">Projets</span>
          </h2>
          
          <p className="text-sm sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed px-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Découvrez une sélection de projets que j'ai réalisés, alliant créativité, 
            performance technique et expérience utilisateur optimale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 max-w-7xl mx-auto">
          {projects.map((project) => {
            const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon;
            
            return (
              <div
                key={project.id}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    width="384"
                    height="384"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  <Badge className={`absolute top-2 right-2 sm:top-3 sm:right-3 ${statusConfig[project.status as keyof typeof statusConfig].color} text-white border-0 flex items-center gap-0.5 sm:gap-1 font-bold text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1`} style={{ fontFamily: 'Orbitron, monospace' }}>
                    <StatusIcon className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                    {statusConfig[project.status as keyof typeof statusConfig].label}
                  </Badge>

                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                    <Badge className="bg-slate-900/80 backdrop-blur-xl text-cyan-400 border-cyan-500/30 font-bold text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-3 sm:p-5">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-cyan-400 transition-colors leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {project.name}
                  </h3>
                  
                  <p className="text-slate-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-0.5 sm:gap-1 bg-slate-800/50 px-1 sm:px-1.5 py-0.5 rounded-md border border-slate-700/50">
                        <img 
                          src={techIcons[tech]} 
                          alt={tech}
                          loading="lazy"
                          width="384"
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <span className="text-[9px] sm:text-xs text-slate-400 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{tech}</span>
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-[9px] sm:text-xs border-slate-700/50 text-slate-400 font-bold px-1 sm:px-1.5 py-0.5">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <button className={`w-full px-3 py-1.5 sm:py-2 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-lg flex items-center justify-center gap-1.5 group-hover:shadow-lg transition-all text-[10px] sm:text-sm`} style={{ fontFamily: 'Orbitron, monospace' }} aria-label="View project">
                    <span>View_project</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </section>
  );
}