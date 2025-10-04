import { useState } from 'react';
import { Mail, Send, User, MessageSquare, Linkedin, Github, Facebook, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const WEB3FORMS_ACCESS_KEY = '716447a3-0035-48a0-a42b-d160cc3949de';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/REBCDR07', color: 'hover:bg-slate-600/20 hover:border-slate-500/50', gradient: 'from-slate-600 to-slate-700' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/elton27/', color: 'hover:bg-blue-600/20 hover:border-blue-500/50', gradient: 'from-blue-600 to-blue-700' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/eltonhounnou/', color: 'hover:bg-blue-500/20 hover:border-blue-400/50', gradient: 'from-blue-500 to-blue-600' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'eltonhounnou27@gmail.com', gradient: 'from-cyan-500 to-blue-500' },
  { icon: Phone, label: 'Téléphone', value: '+229 01 40 66 33 49 / 01 55 87 58 94', gradient: 'from-green-500 to-emerald-500' },
  { icon: MapPin, label: 'Localisation', value: 'Abomey-Calavi, Bénin', gradient: 'from-purple-500 to-pink-500' },
  { icon: Clock, label: 'Disponibilité', value: 'Lun - Ven, 9h - 18h & Sam - Dim, H24', gradient: 'from-orange-500 to-yellow-500' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_name', 'Portfolio Contact');
      formDataToSend.append('redirect', 'false');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.message || 'Erreur lors de l\'envoi');
      }

    } catch (error) {
      console.error('Erreur Web3Forms:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-5 sm:left-10 md:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-5 sm:right-10 md:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-3 sm:mb-4 md:mb-6">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              RESTONS_EN_CONTACT
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-3" style={{ fontFamily: 'Orbitron, monospace' }}>
            ME <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">CONTACTER</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Vous avez un projet en tête ou souhaitez collaborer ? 
            N'hésitez pas à me contacter, je serai ravi d'échanger avec vous !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              ENVOYEZ_MOI_UN_MESSAGE
            </h3>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    NOM_COMPLET *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-slate-500" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-8 sm:pl-9 md:pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-11"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    EMAIL *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-slate-500" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-8 sm:pl-9 md:pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-11"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="subject" className="text-xs sm:text-sm font-medium text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  SUJET *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-11"
                  placeholder="L'objet de votre message"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  MESSAGE *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none text-xs sm:text-sm md:text-base"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <Button 
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 lg:py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] text-xs sm:text-sm md:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-1.5 sm:gap-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {isLoading ? (
                    <>
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>ENVOI...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span>ENVOYÉ !</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span>ERREUR</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span>ENVOYER</span>
                    </>
                  )}
                </span>
              </Button>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
                INFORMATIONS_DE_CONTACT
              </h3>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-colors group"
                  >
                    <div className={`p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.gradient} flex-shrink-0`}>
                      <info.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-500 mb-0.5 sm:mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {info.label}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base text-slate-300 font-medium group-hover:text-white transition-colors break-words" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
                SUIVEZ_MOI
              </h3>
              
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-2 sm:p-3 md:p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-xl transition-all duration-300 ${social.color} group`}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                      <div className={`p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg bg-gradient-to-br ${social.gradient}`}>
                        <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <span className="font-medium text-xs sm:text-sm md:text-base text-slate-300 group-hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {social.name}
                      </span>
                    </div>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6">
              <p className="text-cyan-400 leading-relaxed text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <span className="font-bold">RÉPONSE_GARANTIE_SOUS_24H</span><br />
                Que ce soit pour un projet professionnel, une collaboration 
                ou simplement pour échanger, je suis toujours ouvert à de nouvelles opportunités.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}