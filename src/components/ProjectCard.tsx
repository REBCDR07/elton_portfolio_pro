import React, { useState } from 'react';
import { ExternalLink, CheckCircle, Clock, Handshake, Share2, Check } from 'lucide-react';
import { Badge } from './ui/badge';
import { useLanguage } from './LanguageContext';

interface ProjectCardProps {
  name: string;
  shortDescription: string;
  technologies: string[];
  imageUrl: string;
  status: string;
  category?: string;
  gradient?: string;
  isActive?: boolean;
  onClick: () => void;
  shareUrl?: string;
  className?: string;
}

const statusConfig: any = {
  completed: { color: 'bg-green-500', icon: CheckCircle },
  'in-progress': { color: 'bg-yellow-500', icon: Clock },
  collaboration: { color: 'bg-orange-500', icon: Handshake }
};

export default function ProjectCard({
  name,
  shortDescription,
  technologies,
  imageUrl,
  status,
  category,
  gradient = 'from-cyan-500 to-blue-500',
  isActive = true,
  onClick,
  shareUrl,
  className = ''
}: ProjectCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useLanguage();
  
  const StatusIcon = statusConfig[status]?.icon || Clock;
  const statusLabel = t(`status.${status}`);
  const statusColor = statusConfig[status]?.color || 'bg-gray-500';

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!shareUrl) return;

    // Utiliser l'API Web Share si disponible (mobile principalement)
    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          text: `Découvrez le projet ${name} : ${shortDescription}`,
          url: shareUrl,
        });
      } catch (error) {
        console.error('Erreur lors du partage:', error);
      }
    } else {
      // Fallback: Copier dans le presse-papier
      try {
        await navigator.clipboard.writeText(shareUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Échec de la copie:', err);
      }
    }
  };

  return (
    <div className={`group relative bg-white dark:bg-slate-900/50 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? 'border-cyan-400 dark:border-cyan-500/50 shadow-xl' : 'border-slate-200 dark:border-slate-700/30'} ${className}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'group-hover:scale-110' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <Badge className={`absolute top-3 right-3 ${statusColor} text-white border-0 flex items-center gap-1 font-bold text-xs`} style={{ fontFamily: 'Orbitron, monospace' }}>
          <StatusIcon className="w-2.5 h-2.5" />
          {statusLabel}
        </Badge>
        {category && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/30 font-bold text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
              {category}
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className={`font-bold text-slate-900 dark:text-white mb-2 transition-colors ${isActive ? 'text-xl group-hover:text-cyan-600 dark:group-hover:text-cyan-400' : 'text-lg'}`} style={{ fontFamily: 'Orbitron, monospace' }}>
          {name}
        </h3>
        
        {isActive && (
          <>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-1 mb-4 opacity-80">
                {technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[10px] px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                    {tech}
                  </span>
                ))}
                 {technologies.length > 3 && (
                  <span className="text-[10px] px-1.5 py-0.5 text-slate-400">+{technologies.length - 3}</span>
                )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClick}
                className={`flex-1 py-2 bg-gradient-to-r ${gradient} text-white font-bold rounded-lg flex items-center justify-center gap-1.5 group-hover:shadow-lg transition-all text-sm cursor-pointer`}
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <span>{t('projects.view_project')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleShare}
                className={`px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-all flex items-center justify-center ${
                  isCopied 
                    ? 'text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/30' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
                title={shareUrl ? t('projects.share') : "Lien non disponible"}
                disabled={!shareUrl}
              >
                {isCopied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}