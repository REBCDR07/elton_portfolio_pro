import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil', 'nav.about': 'À Propos', 'nav.education': 'Formation', 'nav.skills': 'Compétences', 'nav.services': 'Services', 'nav.projects': 'Projets', 'nav.team': 'Équipe', 'nav.contact': 'Contact',
    'hero.status': 'STATUS: DISPONIBLE', 'hero.contact': 'Contactez-moi', 'hero.projects': 'Voir mes projets', 'hero.desc': 'Je crée des interfaces modernes, rapides et orientées expérience. Mon objectif : transformer chaque idée en une solution web élégante et performante.',
    'about.title': 'À Propos de Moi', 'about.status': 'Disponible pour des opportunités', 'about.info': 'Informations', 'about.bio': '// Biographie_', 'about.download': 'Télécharger CV', 'about.socials': '// Réseaux Sociaux', 'about.greeting': 'Salut ! Je suis', 'about.role': 'développeur web', 'about.intro1': 'Salut ! Je suis', 'about.intro2': 'un développeur web qui transforme des idées innovantes en applications percutantes. Ma spécialité est de créer des expériences numériques captivantes, en alliant un design intuitif à une performance technique irréprochable.', 'about.intro3': 'Avec plus de', 'about.intro4': '2 ans d\'expérience', 'about.intro5': ', chaque projet est une quête de perfection. J\'aime résoudre des défis complexes et apprendre en continu pour livrer des solutions robustes et élégantes. Mon secret ? Un code propre, une approche centrée sur l\'utilisateur et une bonne dose de café ☕.', 'about.intro6': 'Mon objectif est simple : créer des interfaces qui impressionnent et des solutions fiables, parfaitement alignées sur vos objectifs. Quand je ne code pas, je suis probablement en train de debugger... ou de planifier mon prochain projet. C\'est une véritable passion 🚀.',
    'education.evolution': 'Mon Évolution', 'education.title': 'Mon Parcours', 'education.desc': 'De mes premières lignes de code à mon expertise actuelle, découvrez les étapes clés de mon parcours académique et professionnel.',
    'skills.terminal': '$ skills --show-all', 'skills.title': 'Ma Boîte à Outils', 'skills.desc': 'Un arsenal complet d\'outils, de compétences humaines et d\'intelligences artificielles pour concevoir, développer et déployer des solutions web modernes.', 'skills.view_stack': 'Voir ma stack technique', 'skills.ai_tools': 'AI_Tools', 'skills.soft_skills': 'Soft_Skills', 'skills.modal.title': 'Stack Technologique Complète',
    'services.terminal': '$ services --list', 'services.title': 'Mes Services', 'services.desc': 'Une gamme complète de prestations pour transformer vos idées en solutions digitales performantes et sur mesure.', 'services.cta.title': 'Prêt à lancer votre projet ?', 'services.cta.desc': 'Discutons ensemble de vos idées et trouvons la meilleure stratégie pour les concrétiser.', 'services.cta.btn': 'Démarrer la conversation', 'services.read_more': 'En Savoir Plus', 'services.reduce': 'Réduire',
    'projects.terminal': '$ git log --all', 'projects.title': 'Mes Projets', 'projects.desc': 'Découvrez une sélection de projets que j\'ai réalisés, alliant créativité, performance technique et expérience utilisateur optimale.', 'projects.workflow.title': 'Mon Workflow', 'projects.workflow.desc': 'Une approche méthodique augmentée par l\'intelligence artificielle pour garantir rapidité et qualité.', 'projects.view_project': 'Voir le projet', 'projects.share': 'Partager', 'projects.empty': 'Aucun projet trouvé', 'projects.retry': 'Essayez une autre catégorie.', 'projects.details': 'Détails', 'projects.features': '// Features', 'projects.tech_stack': 'Tech_stack', 'projects.links': 'Links', 'projects.live': 'Live_View', 'projects.code': 'Source_Code', 'projects.prev': 'Projet Précédent', 'projects.next': 'Projet Suivant', 'projects.stop': 'Fermer', 'projects.filter.all': 'Tout', 'projects.filter.personal': 'Projet Personnel', 'projects.filter.client': 'Projets Client', 'projects.filter.academic': 'Projet Académique', 'projects.filter.ia': 'IA',
    'team.terminal': '$ team --list-members', 'team.title': 'L\'Équipe', 'team.desc': 'Rencontrez les talents qui composent notre équipe de développement. Des passionnés qui transforment les idées en réalité digitale.', 'team.view': 'Voir l\'équipe', 'team.download_cv': 'Télécharger CV', 'team.next': 'Membre Suivant', 'team.stop': 'Fermer',
    'contact.badge': 'Restons en contact', 'contact.title': 'Me Contacter', 'contact.desc': 'Vous avez un projet ou une question ? N\'hésitez pas à m\'envoyer un message. Je serai ravi d\'échanger avec vous.', 'contact.direct': 'Informations Directes', 'contact.follow': 'Suivez-moi', 'contact.form.title': 'Envoyez-moi un message', 'contact.form.name': 'Nom complet *', 'contact.form.email': 'Email *', 'contact.form.subject': 'Sujet *', 'contact.form.message': 'Message *', 'contact.form.send': 'Send Message', 'contact.form.sending': 'Sending...', 'contact.form.sent': 'Sent!', 'contact.form.error': 'Error sending message.', 'contact.form.fill_error': 'Please fill in all required fields.',
    'footer.role': 'Full Stack Developer & Creative Coder', 'footer.rights': 'All rights reserved.', 'footer.made': 'Made with', 'footer.by': 'by NRBH',
    'status.completed': 'Completed', 'status.in-progress': 'In Progress', 'status.collaboration': 'Open for Collaboration'
  },
  en: {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.education': 'Education', 'nav.skills': 'Skills', 'nav.services': 'Services', 'nav.projects': 'Projects', 'nav.team': 'Team', 'nav.contact': 'Contact',
    'hero.status': 'STATUS: AVAILABLE', 'hero.contact': 'Contact Me', 'hero.projects': 'View Projects', 'hero.desc': 'I create modern, fast, and experience-oriented interfaces. My goal: transform every idea into an elegant and high-performance web solution.',
    'about.title': 'About Me', 'about.status': 'Available for opportunities', 'about.info': 'Information', 'about.bio': '// Biography_', 'about.download': 'Download CV', 'about.socials': '// Social Networks', 'about.greeting': 'Hi! I am', 'about.role': 'web developer', 'about.intro1': 'Hi! I am', 'about.intro2': 'a web developer who transforms innovative ideas into impactful applications. My specialty is creating captivating digital experiences, combining intuitive design with impeccable technical performance.', 'about.intro3': 'With over', 'about.intro4': '2 years of experience', 'about.intro5': ', every project is a quest for perfection. I love solving complex challenges and continuously learning to deliver robust and elegant solutions. My secret? Clean code, a user-centered approach, and a good dose of coffee ☕.', 'about.intro6': 'My goal is simple: to create interfaces that impress and reliable solutions, perfectly aligned with your objectives. When I\'m not coding, I\'m probably debugging... or planning my next project. It\'s a real passion 🚀.',
    'education.evolution': 'My Evolution', 'education.title': 'My Journey', 'education.desc': 'From my first lines of code to my current expertise, discover the key stages of my academic and professional journey.',
    'skills.terminal': '$ skills --show-all', 'skills.title': 'My Toolkit', 'skills.desc': 'A complete arsenal of tools, soft skills, and artificial intelligences to design, develop, and deploy modern web solutions.', 'skills.view_stack': 'View my tech stack', 'skills.ai_tools': 'AI_Tools', 'skills.soft_skills': 'Soft_Skills', 'skills.modal.title': 'Full Tech Stack',
    'services.terminal': '$ services --list', 'services.title': 'My Services', 'services.desc': 'A complete range of services to transform your ideas into high-performance, custom digital solutions.', 'services.cta.title': 'Ready to launch your project?', 'services.cta.desc': 'Let\'s discuss your ideas together and find the best strategy to make them happen.', 'services.cta.btn': 'Start the conversation', 'services.read_more': 'Read More', 'services.reduce': 'Show Less',
    'projects.terminal': '$ git log --all', 'projects.title': 'My Projects', 'projects.desc': 'Discover a selection of projects I have realized, combining creativity, technical performance, and optimal user experience.', 'projects.workflow.title': 'My Workflow', 'projects.workflow.desc': 'A methodical approach augmented by artificial intelligence to ensure speed and quality.', 'projects.view_project': 'View Project', 'projects.share': 'Share', 'projects.empty': 'No projects found', 'projects.retry': 'Try another category.', 'projects.details': 'Details', 'projects.features': '// Features', 'projects.tech_stack': 'Tech_stack', 'projects.links': 'Links', 'projects.live': 'Live_View', 'projects.code': 'Source_Code', 'projects.prev': 'Previous Project', 'projects.next': 'Next Project', 'projects.stop': 'Close', 'projects.filter.all': 'All', 'projects.filter.personal': 'Personal Project', 'projects.filter.client': 'Client Projects', 'projects.filter.academic': 'Academic Project', 'projects.filter.ia': 'AI',
    'team.terminal': '$ team --list-members', 'team.title': 'The Team', 'team.desc': 'Meet the talents who make up our development team. Enthusiasts who transform ideas into digital reality.', 'team.view': 'View Team', 'team.download_cv': 'Download CV', 'team.next': 'Next Member', 'team.stop': 'Close',
    'contact.badge': 'Let\'s keep in touch', 'contact.title': 'Contact Me', 'contact.desc': 'Have a project or a question? Feel free to send me a message. I would be delighted to chat with you.', 'contact.direct': 'Direct Information', 'contact.follow': 'Follow Me', 'contact.form.title': 'Send me a message', 'contact.form.name': 'Full Name *', 'contact.form.email': 'Email *', 'contact.form.subject': 'Sujet *', 'contact.form.message': 'Message *', 'contact.form.send': 'Send Message', 'contact.form.sending': 'Sending...', 'contact.form.sent': 'Sent!', 'contact.form.error': 'Error sending message.', 'contact.form.fill_error': 'Please fill in all required fields.',
    'footer.role': 'Full Stack Developer & Creative Coder', 'footer.rights': 'All rights reserved.', 'footer.made': 'Made with', 'footer.by': 'by NRBH',
    'status.completed': 'Completed', 'status.in-progress': 'In Progress', 'status.collaboration': 'Open for Collaboration'
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};