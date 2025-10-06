import { Helmet } from "react-helmet-async";

const projects = [
  {
    name: "Portfolio Professionnel",
    image: "/assets/projetImage3.jpg",
    description: "Portfolio personnel moderne avec design cyberpunk/tech et animations interactives.",
    url: "https://eltonhounnou.vercel.app",
    repo: "https://github.com/REBCDR07/elton_portfolio_pro",
  },
  {
    name: "AzerType",
    image: "/assets/projetImage1.jpg",
    description: "Application web de dactylographie ludique et interactive.",
    url: "https://azertypee.netlify.app",
    repo: "https://github.com/REBCDR07/AzerType",
  },
  {
    name: "EduConnect",
    image: "/assets/projetImage2.jpg",
    description: "Plateforme web de digitalisation des inscriptions scolaires et universitaires.",
    url: "https://edu-connect-plateform.vercel.app/",
    repo: "https://github.com/REBCDR07/EduConnect-Plateform",
  },
  {
    name: "FitClub",
    image: "/assets/projetImage4.jpg",
    description: "Site vitrine moderne pour une salle de gym locale.",
    url: "https://fitness-club-by-eltonhounnou.netlify.app/",
    repo: "https://github.com/REBCDR07/salle_de_fitness",
  },
  {
    name: "GESTLE - Gestion d'Électricité Locale",
    image: "/assets/projetImage5.jpg",
    description: "Application web pour simplifier la facturation électrique locale.",
    url: "https://gestle.netlify.app/",
    repo: "https://github.com/REBCDR07/gestion_d_electricite_locale",
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
    name: "Kayson Musics (KYS)",
    image: "/assets/projetImage8.jpg",
    description: "Lecteur de musique web avec design glassmorphism et effets animés.",
    url: "https://qdl.netlify.app/",
    repo: "https://github.com/REBCDR07/kayson_qdl",
  },
  {
    name: "My Secure Diary (MDS)",
    image: "/assets/projetImage9.jpg",
    description: "Application de journal personnel sécurisé et privé.",
    url: "https://eltonhounnou.vercel.app",
    repo: "",
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
        "knowsAbout": ["React", "TypeScript", "Frontend", "Web Development", "TailwindCSS"],
        "description": "Développeur Frontend passionné créant des expériences web modernes et performantes."
      },
      {
        "@type": "WebSite",
        "@id": "https://eltonhounnou.vercel.app/#website",
        "name": "Portfolio Elton Hounnou",
        "url": "https://eltonhounnou.vercel.app/",
        "description": "Portfolio professionnel de Elton Hounnou, développeur frontend React.",
        "inLanguage": "fr-FR",
        "publisher": {
          "@id": "https://eltonhounnou.vercel.app/#person"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://eltonhounnou.vercel.app/#projects",
        "name": "Projets de portfolio d’Elton Hounnou",
        "itemListElement": projects.map((p, i) => ({
          "@type": "CreativeWork",
          "position": i + 1,
          "name": p.name,
          "description": p.description,
          "image": `https://eltonhounnou.vercel.app${p.image}`,
          "url": p.url,
          "codeRepository": p.repo,
        })),
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
