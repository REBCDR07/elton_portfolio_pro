import { Download, ExternalLink, Linkedin, Github, Facebook, Terminal, Users } from 'lucide-react';
import team1Image from '@/assets/team1.jpg';
import team2Image from '@/assets/team2.jpg';

// Import Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const teamMembers = [
  {
    id: 1,
    name: 'Igor ADANDE',
    role: 'FULL_STACK_DEV & UI/UX',
    // MODIFICATION : Ajout de la biographie
    bio: "Spécialiste des applications web robustes, il transforme des concepts complexes en interfaces fluides et performantes.",
    image: team1Image,
    cvUrl: '/assets/cv/cv-team1.pdf',
    portfolioUrl: 'https://www.igoradande.tech/',
    socials: {
      linkedin: 'https://www.linkedin.com/in/igor-adande-dev/',
      github: 'https://github.com/adandeigor',
      facebook: 'https://web.facebook.com/ThePirateDev'
    },
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 2,
    name: 'Ben EphraÏm AGBANNON',
    role: 'FULL_STACK_DEV & MOBILE',
    
    bio: "Architecte de solutions back-end et mobiles, passionné par la création d'expériences utilisateur exceptionnelles et intuitives.",
    image: team2Image,
    cvUrl: '/assets/cv/cv-team2.pdf',
    portfolioUrl: 'https://portfolio-liart-psi-68.vercel.app/',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ben-ephraim-agbannon-948819311/',
      github: 'https://github.com/Tedel12',
      facebook: null
    },
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export default function Team() {
  return (
    <section id="equipe" className="py-32 relative bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
              $ team --list-members
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            NOTRE <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">ÉQUIPE</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Rencontrez les talents qui composent notre équipe de développement.
            Des passionnés qui transforment les idées en réalité digitale.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>

              {/* Profile Image */}
              <div className="relative">
                <div className="aspect-square p-6">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                      <span className="text-6xl font-bold text-white relative z-10" style={{ fontFamily: 'Orbitron, monospace' }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="absolute top-8 right-8">
                  <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-3 py-1 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 pt-0 relative">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {member.name}
                </h3>

                <p className="text-cyan-400 font-bold mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {member.role}
                </p>

                
                <p className="text-slate-300 text-base leading-relaxed mb-6 min-h-[84px]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-2 mb-4">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:border-slate-500/50 transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all">
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <a href={member.portfolioUrl} target="_blank" rel="noopener noreferrer" className={`block w-full px-4 py-3 bg-gradient-to-r ${member.gradient} text-white font-bold rounded-xl hover:shadow-lg transition-all text-center`} style={{ fontFamily: 'Orbitron, monospace' }}>
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      PORTFOLIO
                    </span>
                  </a>
                  <a href={member.cvUrl} download className="block w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 text-slate-300 font-bold rounded-xl hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all text-center" style={{ fontFamily: 'Orbitron, monospace' }}>
                    <span className="flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      DOWNLOAD CV
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6 bg-slate-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 max-w-2xl hover:border-cyan-400 transition-all">
            <Users className="w-12 h-12 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
              REJOIGNEZ L'ÉQUIPE
            </h3>
            <p className="text-slate-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Vous êtes développeur passionné ? Nous sommes toujours à la recherche de talents pour renforcer notre équipe.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">NOUS CONTACTER</span>
            </button>
          </div>
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