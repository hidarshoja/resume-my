import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/hidarshoja', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:hidarshoja@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:+989376228320', label: 'Phone' },
  ];

  return (
    <footer className="relative py-12 glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold"
          >
            <span className="gradient-text">
              {isRTL ? 'حیدر' : 'Haider'}
            </span>
            <span className="text-white/80">
              {isRTL ? ' شجاع' : ' Shoja'}
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass text-white/60 hover:text-white transition-colors"
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm flex items-center gap-2"
          >
            {t.footer.madeWith}
            <FaHeart className="text-red-500" />
            {isRTL ? '۲۰۲۴' : '2024'}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

