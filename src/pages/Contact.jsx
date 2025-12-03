import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGithub, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      label: t.contact.info.phone,
      value: '09376228320',
      href: 'tel:+989376228320',
      color: '#22d3ee',
    },
    {
      icon: FaEnvelope,
      label: t.contact.info.email,
      value: 'hidarshoja@gmail.com',
      href: 'mailto:hidarshoja@gmail.com',
      color: '#f472b6',
    },
    {
      icon: FaGithub,
      label: t.contact.info.github,
      value: 'hidarshoja',
      href: 'https://github.com/hidarshoja',
      color: '#ffffff',
    },
  ];

  return (
    <div className="min-h-screen py-32 animated-bg grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h1>
          <p className="text-xl text-white/60">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">
                {isRTL ? 'اطلاعات تماس' : 'Contact Information'}
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t.contact.description}
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: isRTL ? -5 : 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <div
                      className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon size={24} style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5"
              >
                <div className="flex items-center gap-3 text-white/60">
                  <FaMapMarkerAlt className="text-accent" />
                  <span>{isRTL ? 'ایران' : 'Iran'}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                {isRTL ? 'ارسال پیام' : 'Send Message'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    {t.contact.form.name}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:outline-none transition-all"
                    placeholder={isRTL ? 'نام شما...' : 'Your name...'}
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    {t.contact.form.email}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:outline-none transition-all"
                    placeholder={isRTL ? 'ایمیل شما...' : 'Your email...'}
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    {t.contact.form.message}
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:outline-none transition-all resize-none"
                    placeholder={isRTL ? 'پیام شما...' : 'Your message...'}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-primary to-primary-dark text-white glow'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : submitted ? (
                    <>
                      <span>✓</span>
                      <span>{isRTL ? 'ارسال شد!' : 'Sent!'}</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>{t.contact.form.send}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}

