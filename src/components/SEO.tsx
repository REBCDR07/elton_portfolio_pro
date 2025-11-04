import { Helmet } from "react-helmet-async";

// Liste complète et mise à jour des projets pour le SEO
const projects = [
  {
    name: "Portfolio Professionnel",
    image: "/assets/projetImage3.jpg",
    description: "Portfolio personnel moderne avec design cyberpunk/tech et animations interactives.",
    url: "https://eltonhounnou.vercel.app",
    repo: "https://github.com/REBCDR07/elton_portfolio_pro",
  },
  {
    name: "ESM-BÉNIN University",
    image: "/assets/esmbenin1.jpeg", // Remplacez par le chemin de l'image correspondante
    description: "Site web institutionnel moderne de l'École Supérieure de Management du Bénin, avec assistant IA et effets 3D.",
    url: "https://esm-benin-university.vercel.app/",
    repo: "https://github.com/REBCDR07/esm-benin-university",
  },
  {
    name: "Humour Space",
    image: "/assets/humour1.png", // Remplacez par le chemin de l'image correspondante
    description: "Plateforme communautaire dédiée au partage de blagues, vidéos et humour, inspirée de TikTok et Facebook.",
    url: "https://rions.vercel.app/",
    repo: "https://github.com/REBCDR07/humour-space",
  },
  {
    name: "Secure Passwords",
    image: "/assets/securepass1.png", // Remplacez par le chemin de l'image correspondante
    description: "Application de gestion de mots de passe sécurisée avec générateur avancé et authentification utilisateur.",
    url: "https://secure-pass-generate.vercel.app/",
    repo: "https://github.com/REBCDR07/secure-passwords",
  },
  {
    name: "Morse Traduct",
    image: "/assets/morse1.png", // Remplacez par le chemin de l'image correspondante
    description: "Traducteur de code Morse avec fonctionnalités communautaires pour les passionnés.",
    url: "https://morse-traduct.vercel.app",
    repo: "https://github.com/REBCDR07/morse-traduct",
  },
  {
    name: "EduConnect",
    image: "/assets/projetImage2.jpg",
    description: "Plateforme web de digitalisation des inscriptions scolaires et universitaires.",
    url: "https://edu-connect-plateform.vercel.app/",
    repo: "https://github.com/REBCDR07/EduConnect-Plateform",
  },
  {
    name: "Gestion d'Électricité Locale",
    image: "/assets/projetImage5.jpg",
    description: "Application web avec design futuriste pour simplifier la facturation électrique locale.",
    url: "https://gestion-electricite-locale.netlify.app/",
    repo: "https://github.com/REBCDR07/gestion_d_electricite_locale",
  },
  {
    name: "Lecteur de Musique",
    image: "/assets/musicplayer1.png", // Remplacez par le chemin de l'image correspondante
    description: "Lecteur de musique web avec design glassmorphism, effets animés et raccourcis clavier.",
    url: "https://lecteur-de-musique.vercel.app/",
    repo: "https://github.com/REBCDR07/lecteur-de-musique",
  },
  {
    name: "Biocreative Hub",
    image: "/assets/biohub1.png", // Remplacez par le chemin de l'image correspondante
    description: "Projet HTML moderne utilisant Tailwind CSS pour des applications web responsives.",
    url: "https://rebcdr07.github.io/biocreatif_hub.github.io/",
    repo: "https://github.com/REBCDR07/biocreatif_hub",
  },
  {
    name: "AzerType",
    image: "/assets/projetImage1.jpg",
    description: "Application web de dactylographie ludique et interactive pour améliorer sa vitesse de frappe.",
    url: "https://azertypee.netlify.app",
    repo: "https://github.com/REBCDR07/AzerType",
  },
  {
    name: "FitClub",
    image: "/assets/projetImage4.jpg",
    description: "Site vitrine moderne pour une salle de gym locale.",
    url: "https://fitness-club-by-eltonhounnou.netlify.app/",
    repo: "https://github.com/REBCDR07/salle_de_fitness",
  },
  {
    name: "Jean Nicolas Food (JNFOOD)",
    image: "/assets/projetImage6.jpg",
    description: "Site vitrine + mini e-commerce pour une entreprise de pâtisserie.",
    url: "https://verojnf.vercel.app/",
    repo: "https://github.com/REBCDR07/vero_jnf",
  },
  {
    name: "Portfolio Littéraire JOFAMS",
    image: "/assets/projetImage7.jpg",
    description: "Portfolio élégant pour une écrivaine professionnelle.",
    url: "https://juanita-amoussou.vercel.app/",
    repo: "https://github.com/REBCDR07/Juanita_Amoussou",
  },
  {
    name: "Netflix Game Amator (NGA)",
    image: "/assets/projetImage10.jpg",
    description: "Jeu web quiz interactif sur l’univers Netflix.",
    url: "https://netflix-amator-game.vercel.app/",
    repo: "https://github.com/Elton27-Coder/NETFLIX-AMATOR-GAME",
  },
  {
    name: "My Secure Diary (MDS)",
    image: "/assets/projetImage9.jpg",
    description: "Application de journal personnel sécurisé et privé.",
    url: "https://eltonhounnou.vercel.app", // URL à mettre à jour si disponible
    repo: "", // Repo à ajouter si disponible
  },
];

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://eltonhounnou.vercel.app/#person",
        "name": "Elton Hounnou",
        "jobTitle": "Développeur Frontend React / TypeScript",
        "url": "https://eltonhounnou.vercel.app/",
        "image": "https://eltonhounnou.vercel.app/assets/profile.jpg",
        "sameAs": [
          "https://www.linkedin.com/in/elton27/",
          "https://github.com/REBCDR07"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abomey-Calavi",
          "addressRegion": "Atlantique",
          "addressCountry": "BJ"
        },
        "knowsAbout": ["React", "TypeScript", "Frontend", "Web Development", "TailwindCSS", "Supabase", "Vite", "SEO"],
        "description": "Développeur Frontend passionné, spécialisé dans la création d'expériences web modernes, performantes et optimisées pour le référencement naturel avec React et TypeScript."
      },
      {
        "@type": "WebSite",
        "@id": "https://eltonhounnou.vercel.app/#website",
        "name": "Portfolio Elton Hounnou",
        "url": "https://eltonhounnou.vercel.app/",
        "description": "Portfolio professionnel de Elton Hounnou, développeur frontend React. Découvrez mes projets, compétences et expérience.",
        "inLanguage": "fr-FR",
        "publisher": {
          "@id": "https://eltonhounnou.vercel.app/#person"
        }
      },
      {
        "@type": "ItemList",
        "name": "Projets de développement web par Elton Hounnou",
        "description": "Une sélection de projets web réalisés par Elton Hounnou, incluant des applications React, des sites institutionnels et des utilitaires.",
        "itemListElement": projects.map((p, i) => ({
          "@type": "CreativeWork",
          "position": i + 1,
          "name": p.name,
          "description": p.description,
          "image": `https://eltonhounnou.vercel.app${p.image}`,
          "url": p.url,
          "mainEntityOfPage": p.url,
          ...(p.repo && { "codeRepository": p.repo }), // Ajoute le repo seulement s'il existe
          "author": {
            "@id": "https://eltonhounnou.vercel.app/#person"
          }
        })),
      }
    ]
  };

  return (
    <Helmet>
      {/* Données structurées pour un SEO avancé */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}