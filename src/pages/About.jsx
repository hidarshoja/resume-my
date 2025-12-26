import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaTrophy, FaGraduationCap, FaCheckCircle, FaRocket, FaCode } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen py-32 animated-bg grid-pattern overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass text-accent text-sm mb-4"
          >
            {isRTL ? '👋 آشنایی با من' : '👋 Get to know me'}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{t.about.title}</span>
          </h1>
          <p className="text-xl text-white/60">{t.about.subtitle}</p>
        </motion.div>

        {/* Summary with Animated Border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mb-20 max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-accent-2 rounded-3xl blur-sm opacity-50" />
          <div className="relative glass rounded-3xl p-8 md:p-12 bg-dark/80">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6 mx-auto"
            />
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center">
              {t.about.summary}
            </p>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <FaTrophy className="text-gold text-3xl" />
            </motion.div>
            <span>{t.about.achievements}</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {t.about.achievementsList.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative glass rounded-2xl p-6 h-full border border-white/5 group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-5xl"
                    >
                      {achievement.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-4">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaBriefcase className="text-primary text-3xl" />
            </motion.div>
            <span>{t.about.experience}</span>
          </h2>

          <div className="relative max-w-4xl mx-auto overflow-x-hidden">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className={`absolute ${isRTL ? 'right-4 md:right-1/2' : 'left-4 md:left-1/2'} top-0 w-1 bg-gradient-to-b from-primary via-accent to-accent-2 rounded-full`}
              style={{ transform: isRTL ? 'translateX(50%)' : 'translateX(-50%)' }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {t.about.experienceList.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: 'spring' }}
                    className={`absolute ${isRTL ? 'right-0' : 'left-4'} md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent z-10 pulse-glow`}
                  />

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isRTL ? 'pr-8 md:pr-0' : 'pl-8 md:pl-0'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20"
                        >
                          {index === t.about.experienceList.length - 1 ? (
                            <FaGraduationCap className="text-accent text-xl" />
                          ) : (
                            <FaCode className="text-primary text-xl" />
                          )}
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-primary text-sm font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/40 text-sm mb-4">
                        <span>📅</span>
                        {exp.period}
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: respIndex * 0.1 }}
                            className="flex items-start gap-3 text-white/70 text-sm"
                          >
                            <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                            <span className="leading-relaxed">{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 -right-36 md:right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 -left-48 md:left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
