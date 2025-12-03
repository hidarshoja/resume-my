import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
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
  const [focusedField, setFocusedField] = useState(null);

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
      value: '09372228320',
      subValue: '09232992218',
      href: 'tel:+989372228320',
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
      value: 'github.com/hidarshoja',
      href: 'https://github.com/hidarshoja',
      color: '#ffffff',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-32 animated-bg grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass text-accent text-sm mb-4"
          >
            {isRTL ? '📬 ارتباط با من' : '📬 Reach Out'}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <div className="glass rounded-3xl p-8 md:p-10 h-full">
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-4"
              >
                {isRTL ? '🤝 بیایید با هم کار کنیم' : "🤝 Let's Collaborate"}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-white/60 mb-8 leading-relaxed"
              >
                {t.contact.description}
              </motion.p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: isRTL ? -10 : 10 }}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/20"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-xl transition-all duration-300"
                      style={{ 
                        backgroundColor: `${info.color}15`,
                        boxShadow: `0 0 20px ${info.color}20`
                      }}
                    >
                      <info.icon size={24} style={{ color: info.color }} />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-white/40 text-sm mb-1">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                      {info.subValue && (
                        <p className="text-white/60 text-sm">{info.subValue}</p>
                      )}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-accent"
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Location Card */}
              <motion.div
                variants={itemVariants}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaMapMarkerAlt className="text-accent text-xl" />
                  </motion.div>
                  <div>
                    <p className="text-white/40 text-sm">{isRTL ? 'موقعیت' : 'Location'}</p>
                    <p className="text-white font-medium">{isRTL ? 'ایران 🇮🇷' : 'Iran 🇮🇷'}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-accent-2/20 rounded-3xl blur-xl" />
              <div className="relative glass rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>✉️</span>
                  {isRTL ? 'ارسال پیام' : 'Send Message'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <motion.label 
                      animate={{ 
                        y: focusedField === 'name' || formData.name ? -25 : 0,
                        scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                        color: focusedField === 'name' ? '#22d3ee' : 'rgba(255,255,255,0.4)'
                      }}
                      className="absolute right-5 top-4 text-sm transition-all origin-right pointer-events-none"
                    >
                      {t.contact.form.name}
                    </motion.label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-accent focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <motion.label 
                      animate={{ 
                        y: focusedField === 'email' || formData.email ? -25 : 0,
                        scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                        color: focusedField === 'email' ? '#22d3ee' : 'rgba(255,255,255,0.4)'
                      }}
                      className="absolute right-5 top-4 text-sm transition-all origin-right pointer-events-none"
                    >
                      {t.contact.form.email}
                    </motion.label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-accent focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <motion.label 
                      animate={{ 
                        y: focusedField === 'message' || formData.message ? -25 : 0,
                        scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                        color: focusedField === 'message' ? '#22d3ee' : 'rgba(255,255,255,0.4)'
                      }}
                      className="absolute right-5 top-4 text-sm transition-all origin-right pointer-events-none"
                    >
                      {t.contact.form.message}
                    </motion.label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-accent focus:bg-white/10 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: submitted ? 1 : 1.02, boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all relative overflow-hidden ${
                      submitted
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-primary to-accent text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : submitted ? (
                      <>
                        <FaCheckCircle />
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
