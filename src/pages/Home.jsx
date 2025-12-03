import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaArrowDown, FaCode, FaRocket, FaLaptopCode } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t, isRTL } = useLanguage();

  const floatingIcons = [
    { icon: '⚛️', delay: 0, x: '10%', y: '20%' },
    { icon: '🚀', delay: 0.5, x: '85%', y: '15%' },
    { icon: '💻', delay: 1, x: '75%', y: '70%' },
    { icon: '🎨', delay: 1.5, x: '15%', y: '75%' },
    { icon: '⚡', delay: 2, x: '50%', y: '85%' },
  ];

  const stats = [
    { value: '5+', label: isRTL ? 'سال تجربه' : 'Years Experience' },
    { value: '12+', label: isRTL ? 'پروژه موفق' : 'Projects Completed' },
    { value: '100%', label: isRTL ? 'رضایت مشتری' : 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg grid-pattern">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: item.delay, duration: 0.5 }}
          className="absolute text-4xl floating"
          style={{ left: item.x, top: item.y, animationDelay: `${item.delay}s` }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/60 text-lg mb-4"
          >
            {t.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text text-glow">{t.hero.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-2">
              {t.hero.title}
            </h2>
            <p className="text-lg text-accent">{t.hero.subtitle}</p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto text-white/60 text-lg mb-10 leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium btn-glow glow"
              >
                {t.hero.cta}
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full glass text-white font-medium border border-white/20 hover:border-primary/50 transition-colors"
              >
                {t.hero.contact}
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              href="https://github.com/hidarshoja"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-4 rounded-full glass text-white/60 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="mailto:hidarshoja@gmail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-4 rounded-full glass text-white/60 hover:text-white transition-colors"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white/40"
          >
            <FaArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-2/5 rounded-full blur-[150px]" />
    </div>
  );
}


