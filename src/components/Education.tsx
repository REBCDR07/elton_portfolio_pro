import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Award, MapPin, TrendingUp, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

type TimelineItemData = {
  type: string;
  title: string;
  institution: string;
  location: string;
  year: string;
  description: { fr: string; en: string };
  icon: any;
  gradient: string;
};

const timelineData: TimelineItemData[] = [
  {
    type: 'work',
    title: 'Développement de l\'Écosystème ESM-BÉNIN',
    institution: 'Projet Phare Personnel',
    location: 'À distance',
    year: 'Septembre 2024 - Présent',
    description: {
      fr: "Conception et développement d'une solution numérique complète pour une université, incluant un site institutionnel avec assistant IA, une plateforme d'inscription (EduConnect) et des outils back-office.",
      en: "Design and development of a complete digital solution for a university, including an institutional site with AI assistant, a registration platform (EduConnect), and back-office tools."
    },
    icon: Sparkles,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    type: 'work',
    title: 'Développeur Full-Stack (Freelance)',
    institution: 'Projets Clients & Personnels',
    location: 'Bénin, Abomey-Calavi',
    year: 'Juillet 2024 - Août 2024',
    description: {
      fr: "Création d'applications web full-stack de A à Z. Technologies : React, TypeScript, Tailwind CSS, Vite, et back-end avec Supabase & Firebase.",
      en: "Creation of full-stack web applications from A to Z. Technologies: React, TypeScript, Tailwind CSS, Vite, and back-end with Supabase & Firebase."
    },
    icon: Briefcase,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    type: 'work',
    title: 'Création d\'Applications Communautaires',
    institution: 'Projets Personnels',
    location: 'À distance',
    year: 'Juin 2024',
    description: {
      fr: "Développement d'une série d'applications web interactives comme Humour Space et Morse Traduct, en utilisant une stack moderne avec React et Supabase pour la gestion des utilisateurs et des données.",
      en: "Development of a series of interactive web applications like Humour Space and Morse Traduct, using a modern stack with React and Supabase for user and data management."
    },
    icon: Briefcase,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    type: 'education',
    title: 'Licence en Systèmes Informatiques et Logiciels',
    institution: 'Ecole Supérieure du Bénin (ESM BENIN)',
    location: 'Bénin, Abomey-Calavi',
    year: '2023 - En Cours',
    description: {
      fr: "Spécialisation en développement web et génie logiciel. Projet de fin d'études en cours sur l'optimisation des architectures SaaS.",
      en: "Specialization in web development and software engineering. Ongoing final project on optimizing SaaS architectures."
    },
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    type: 'work',
    title: 'Développeur Frontend (Stage d\'Autoformation)',
    institution: 'Espace Coworking de JOB BOOSTER BENIN',
    location: 'Bénin, Abomey-Calavi',
    year: 'Juillet 2023 - Août 2023',
    description: {
      fr: "Stage intensif en développement frontend. Création de multiples interfaces utilisateur responsives avec React et Tailwind CSS.",
      en: "Intensive frontend development internship. Creation of multiple responsive user interfaces with React and Tailwind CSS."
    },
    icon: Briefcase,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    type: 'certification',
    title: 'Certifications Algorithmiques',
    institution: 'HackerRank & CodinGame',
    location: 'En ligne',
    year: 'Juin 2023 - Juillet 2023',
    description: {
      fr: 'Validation des compétences en résolution de problèmes et structures de données avec Python (Basic), C++, et JavaScript.',
      en: 'Validation of problem-solving and data structure skills with Python (Basic), C++, and JavaScript.'
    },
    icon: Award,
    gradient: 'from-yellow-500 to-orange-500'
  },
   {
    type: 'certification',
    title: 'Certification en Stratégie Digitale',
    institution: 'Blémama',
    location: 'En ligne',
    year: 'Juin 2023',
    description: {
      fr: 'Acquisition de compétences en gestion des réseaux sociaux et en élaboration de stratégies de communication digitale.',
      en: 'Acquisition of skills in social media management and digital communication strategy development.'
    },
    icon: Award,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    type: 'education',
    title: 'Baccalauréat Scientifique (Série D)',
    institution: 'Collège d\'Enseignement Général de Houègbo',
    location: 'Bénin, Atlantique | Toffo',
    year: '2023',
    description: {
      fr: 'Spécialité Biologie & Géologie. Mention Assez-Bien.',
      en: 'Specialty Biology & Geology. Honors.'
    },
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500'
  },
];

// SOUS-COMPOSANT POUR UN ÉLÉMENT DE LA TIMELINE
const TimelineItem: React.FC<{item: TimelineItemData, isEven: boolean, lang: 'fr' | 'en'}> = ({ item, isEven, lang }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative flex items-center mb-12 last:mb-0">
      <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <motion.div 
          className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg flex items-center justify-center`}
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <item.icon className="w-2.5 h-2.5 text-white" />
        </motion.div>
      </div>

      <motion.div 
        className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} pl-10 md:pl-0`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (isEven ? -50 : 50) }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div 
          className="group relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-6 rounded-2xl transition-all duration-300 shadow-lg dark:shadow-none"
          whileHover={{ scale: 1.03, borderColor: 'rgba(107, 114, 128, 0.5)' }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
          <div className="relative">
            <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>{item.year}</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>{item.title}</h3>
            <p className="font-semibold text-sm text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <MapPin className="w-3.5 h-3.5" />
              {item.institution} - {item.location}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{item.description[lang]}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// SOUS-COMPOSANT POUR LES CARTES DE STATS
const StatCard = ({ value, label, gradient }: any) => (
    <motion.div 
      className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-6 rounded-2xl text-center transition-transform shadow-lg dark:shadow-none"
      whileHover={{ scale: 1.05 }}
    >
      <div className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`} style={{ fontFamily: 'Orbitron, monospace' }}>{value}</div>
      <div className="text-sm text-slate-600 dark:text-slate-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{label}</div>
    </motion.div>
);

export default function Education() {
  const timelineRef = useRef(null);
  const { t, language } = useLanguage();

  const stats = [
    { value: "2+", label: language === 'fr' ? "Années d'expérience" : "Years of Experience", gradient: "from-blue-400 to-cyan-500" },
    { value: "2", label: language === 'fr' ? "Diplômes Obtenus" : "Diplomas Earned", gradient: "from-green-400 to-emerald-500" },
    { value: "5+", label: language === 'fr' ? "Certifications & Jalons" : "Certifications & Milestones", gradient: "from-yellow-400 to-orange-500" }
  ];

  return (
    <section id="formation" className="py-24 lg:py-32 relative bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-full px-6 py-3 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{t('education.evolution')}</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
             {t('education.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500 bg-clip-text text-transparent">{t('education.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {t('education.desc')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative" ref={timelineRef}>
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700/50 transform md:-translate-x-px"></div>
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} isEven={index % 2 === 0} lang={language} />
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map(stat => <StatCard key={stat.label} {...stat} />)}
        </motion.div>
      </div>
    </section>
  );
}