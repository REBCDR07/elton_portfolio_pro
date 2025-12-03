import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Code, Globe, RefreshCw, Wrench, Smartphone, Monitor, ArrowRight, ChevronDown, Terminal } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// DONNÉES DES SERVICES (CONTENU AMÉLIORÉ)
const servicesData = [
  {
    icon: Code,
    title: { fr: 'Développement Frontend', en: 'Frontend Development' },
    description: { fr: 'Création d\'applications web modernes avec les dernières technologies (React, TypeScript,...).', en: 'Creation of modern web applications with the latest technologies (React, TypeScript,...).' },
    features: { fr: ['Single Page Apps (SPA)', 'Performance & Vitesse', 'SEO Technique'], en: ['Single Page Apps (SPA)', 'Performance & Speed', 'Technical SEO'] },
    color: 'from-cyan-500 to-blue-500',
    detailedDescription: { fr: 'Je conçois des interfaces utilisateur et des applications web sur mesure en utilisant les frameworks les plus récents. Chaque projet bénéficie d\'une architecture solide, d\'un code propre et d\'une attention particulière portée à l\'expérience utilisateur pour garantir rapidité, sécurité et évolutivité.', en: 'I design custom user interfaces and web applications using the latest frameworks. Each project benefits from solid architecture, clean code, and special attention to user experience to ensure speed, security, and scalability.' }
  },
  {
    icon: Globe,
    title: { fr: 'Sites Vitrines & Institutionnels', en: 'Showcase & Institutional Sites' },
    description: { fr: 'Sites web élégants et optimisés pour présenter votre activité et captiver vos clients.', en: 'Elegant and optimized websites to showcase your business and captivate your customers.' },
    features: { fr: ['Design Sur Mesure', '100% Responsive', 'Gestion de Contenu (CMS)'], en: ['Custom Design', '100% Responsive', 'Content Management (CMS)'] },
    color: 'from-blue-500 to-purple-500',
    detailedDescription: { fr: 'Votre site web est votre vitrine numérique. Je crée des sites élégants qui reflètent votre identité de marque, optimisés pour la conversion et le référencement naturel. Chaque site est conçu pour être rapide, accessible et facile à gérer.', en: 'Your website is your digital showcase. I create elegant sites that reflect your brand identity, optimized for conversion and SEO. Each site is designed to be fast, accessible, and easy to manage.' }
  },
  {
    icon: RefreshCw,
    title: { fr: 'Migration & Refonte', en: 'Migration & Redesign' },
    description: { fr: 'Modernisation de vos plateformes existantes avec de nouvelles technologies performantes.', en: 'Modernization of your existing platforms with new high-performance technologies.' },
    features: { fr: ['Audit Technique', 'Migration de Données', 'Amélioration UX/UI'], en: ['Technical Audit', 'Data Migration', 'UX/UI Improvement'] },
    color: 'from-purple-500 to-pink-500',
    detailedDescription: { fr: 'Votre site actuel est dépassé ? J\'assure sa migration vers des technologies modernes sans interruption de service. Je préserve vos données, j\'améliore les performances et je modernise le design pour donner une seconde vie à votre présence en ligne.', en: 'Is your current site outdated? I ensure its migration to modern technologies without service interruption. I preserve your data, improve performance, and modernize the design to give a second life to your online presence.' }
  },
  {
    icon: Wrench,
    title: { fr: 'Solutions Sur Mesure', en: 'Custom Solutions' },
    description: { fr: 'Développement de fonctionnalités et d\'outils personnalisés pour vos besoins spécifiques.', en: 'Development of custom features and tools for your specific needs.' },
    features: { fr: ['Architecture Personnalisée', 'API & Intégrations', 'Scalabilité'], en: ['Custom Architecture', 'API & Integrations', 'Scalability'] },
    color: 'from-pink-500 to-red-500',
    detailedDescription: { fr: 'Chaque projet a des besoins uniques. Je développe des solutions web entièrement personnalisées qui s\'adaptent à vos processus métier, des outils de gestion interne aux plateformes complexes, en concevant des systèmes robustes et évolutifs.', en: 'Each project has unique needs. I develop fully custom web solutions that adapt to your business processes, from internal management tools to complex platforms, designing robust and scalable systems.' }
  },
  {
    icon: Smartphone,
    title: { fr: 'Approche Mobile-First', en: 'Mobile-First Approach' },
    description: { fr: 'Conception d\'interfaces garantissant une expérience parfaite sur tous les appareils.', en: 'Interface design ensuring a perfect experience on all devices.' },
    features: { fr: ['Responsive Design', 'Performances Mobiles', 'UX Tactile'], en: ['Responsive Design', 'Mobile Performance', 'Touch UX'] },
    color: 'from-orange-500 to-yellow-500',
    detailedDescription: { fr: 'Je conçois toutes mes applications avec une approche "Mobile-First", garantissant une expérience utilisateur impeccable sur smartphones et tablettes. Performances optimisées et ergonomie tactile sont au cœur de ma démarche pour atteindre tous vos utilisateurs.', en: 'I design all my applications with a "Mobile-First" approach, ensuring an impeccable user experience on smartphones and tablets. Optimized performance and touch ergonomics are at the heart of my approach to reach all your users.' }
  },
  {
    icon: Monitor,
    title: { fr: 'Applications Web Complexes', en: 'Complex Web Applications' },
    description: { fr: 'Applications web complètes avec interface utilisateur intuitive et backend robuste.', en: 'Complete web applications with intuitive user interface and robust backend.' },
    features: { fr: ['Tableaux de Bord', 'Gestion de Données', 'Authentification'], en: ['Dashboards', 'Data Management', 'Authentication'] },
    color: 'from-green-500 to-cyan-500',
    detailedDescription: { fr: 'Des tableaux de bord analytiques aux plateformes SaaS, je construis des applications web complètes. En m\'appuyant sur des services comme Supabase ou Firebase, je mets en place des backends robustes, des API performantes et des systèmes d\'authentification sécurisés.', en: 'From analytical dashboards to SaaS platforms, I build complete web applications. Leveraging services like Supabase or Firebase, I implement robust backends, high-performance APIs, and secure authentication systems.' }
  }
];

// VARIANTES D'ANIMATION POUR FRAMER MOTION
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

interface ServiceCardProps {
  service: any;
  isExpanded: boolean;
  onToggle: () => void;
  lang: 'fr' | 'en';
}

// SOUS-COMPOSANT POUR UNE CARTE DE SERVICE
const ServiceCard: React.FC<ServiceCardProps> = ({ service, isExpanded, onToggle, lang }) => {
    const { t } = useLanguage();
    return (
  <motion.div
    variants={itemVariants}
    className="group relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:border-slate-300 dark:hover:border-slate-600/50 hover:shadow-2xl"
    whileHover={{ y: -5, scale: 1.02 }}
    layout
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
    
    <div className="relative mb-6">
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-8 h-8 text-white" />
      </div>
    </div>

    <div className="relative">
      <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>{service.title[lang]}</h3>
      <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{service.description[lang]}</p>
      <ul className="space-y-2 mb-6">
        {service.features[lang].map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold group-hover:gap-3 transition-all text-base" 
        style={{ fontFamily: 'Orbitron, monospace' }}
      >
        {isExpanded ? t('services.reduce') : t('services.read_more')}
        {isExpanded ? 
          <ChevronDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> : 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '24px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1, duration: 0.4 }}
               className="pt-6 border-t border-slate-200 dark:border-cyan-500/20"
            >
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {service.detailedDescription[lang]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-1 blur-3xl rounded-full transition-opacity duration-500`}></div>
  </motion.div>
)};

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t, language } = useLanguage();

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm text-cyan-600 dark:text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>{t('services.terminal')}</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t('services.title').split(' ')[0]} <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">{t('services.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {t('services.desc')}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              isExpanded={expandedService === index}
              onToggle={() => toggleService(index)}
              lang={language}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex flex-col items-center gap-6 bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 rounded-3xl p-8 max-w-2xl hover:border-cyan-400 transition-all">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Orbitron, monospace' }}>{t('services.cta.title')}</h3>
            <p className="text-base text-slate-600 dark:text-slate-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {t('services.cta.desc')}
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-base"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <span className="relative flex items-center gap-2">
                {t('services.cta.btn')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}