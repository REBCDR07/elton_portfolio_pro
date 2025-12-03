import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, Send, MessageSquare, Linkedin, Github, Facebook, Phone, MapPin, Clock, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useLanguage } from './LanguageContext';

const WEB3FORMS_ACCESS_KEY = '716447a3-0035-48a0-a42b-d160cc3949de';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/REBCDR07', gradient: 'from-slate-600 to-slate-700' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/elton27/', gradient: 'from-blue-600 to-blue-700' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/eltonhounnou/', gradient: 'from-blue-500 to-blue-600' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'eltonhounnou27@gmail.com', gradient: 'from-cyan-500 to-blue-500' },
  { icon: Phone, label: 'Téléphone', value: '+229 55 87 58 94', gradient: 'from-green-500 to-emerald-500' },
  { icon: MapPin, label: 'Localisation', value: 'Abomey-Calavi, Bénin', gradient: 'from-purple-500 to-pink-500' },
  { icon: Clock, label: 'Disponibilité', value: 'Lun - Sam, 9h - 18h', gradient: 'from-orange-500 to-yellow-500' },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const { t } = useLanguage();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: t('contact.form.fill_error') });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 3000);
      return;
    }
    setIsLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...formData, from_name: 'Portfolio Contact' }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: t('contact.form.sent') });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
      } else {
        throw new Error(data.message || t('contact.form.error'));
      }
    } catch (error) {
      setStatus({ type: 'error', message: t('contact.form.error') });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: -20 }} animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-full px-6 py-3 mb-6">
            <MessageSquare className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{t('contact.badge')}</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            {t('contact.title').split(' ')[0]} <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">{t('contact.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{t('contact.desc')}</p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Orbitron, monospace' }}>{t('contact.direct')}</h3>
            {contactInfo.map((info) => (
              <motion.div key={info.label} variants={itemVariants} className="flex items-center gap-4 group">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} flex-shrink-0`}><info.icon className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{info.label}</div>
                  <div className="text-base text-slate-700 dark:text-slate-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors break-words" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{info.value}</div>
                </div>
              </motion.div>
            ))}
            <div className="pt-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>{t('contact.follow')}</h3>
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-slate-600 dark:text-slate-300 transition-colors hover:text-cyan-600 dark:hover:text-white hover:border-cyan-400 dark:hover:border-cyan-500/50" whileHover={{ scale: 1.1, y: -5 }}>
                            <social.icon className="w-6 h-6" />
                        </motion.a>
                    ))}
                </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div><Label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{t('contact.form.name')}</Label><Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="mt-2 bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-cyan-500 text-slate-900 dark:text-slate-200" placeholder="" /></div>
                <div><Label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{t('contact.form.email')}</Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="mt-2 bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-cyan-500 text-slate-900 dark:text-slate-200" placeholder="votre@email.com" /></div>
              </div>
              <div><Label htmlFor="subject" className="text-sm font-medium text-slate-600 dark:text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{t('contact.form.subject')}</Label><Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="mt-2 bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-cyan-500 text-slate-900 dark:text-slate-200" placeholder="" /></div>
              <div><Label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{t('contact.form.message')}</Label><Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="mt-2 bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-cyan-500 resize-none text-slate-900 dark:text-slate-200" placeholder="" /></div>
              <div className="flex items-center gap-4">
                <Button type="submit" disabled={isLoading} className="group relative w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-base" style={{ fontFamily: 'Orbitron, monospace' }}>
                  <span className="relative flex items-center justify-center gap-2">
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div key="loading" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Loader2 className="w-5 h-5 animate-spin" /></motion.div>
                      ) : status.type === 'success' ? (
                        <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><CheckCircle className="w-5 h-5" /></motion.div>
                      ) : (
                        <motion.div key="send" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Send className="w-5 h-5" /></motion.div>
                      )}
                    </AnimatePresence>
                    <span>{isLoading ? t('contact.form.sending') : status.type === 'success' ? t('contact.form.sent') : t('contact.form.send')}</span>
                  </span>
                </Button>
                <AnimatePresence>
                {status.type === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 dark:text-red-400 text-sm flex items-center gap-2"><AlertTriangle size={16}/> {status.message}</motion.p>
                )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}