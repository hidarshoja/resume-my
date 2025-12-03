import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, isRTL } = useLanguage();

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
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t.about.title}</span>
          </h1>
          <p className="text-xl text-white/60">{t.about.subtitle}</p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 mb-20 max-w-4xl mx-auto"
        >
          <p className="text-lg text-white/80 leading-relaxed text-center">
            {t.about.summary}
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <FaTrophy className="text-gold" />
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
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-white/60">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <FaBriefcase className="text-primary" />
            <span>{t.about.experience}</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute ${isRTL ? 'right-8' : 'left-8'} md:${isRTL ? 'right-1/2' : 'left-1/2'} top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-accent-2`} />

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
                  <div className={`absolute ${isRTL ? 'right-6' : 'left-6'} md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary glow z-10`} />

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isRTL ? 'mr-16 md:mr-0' : 'ml-16 md:ml-0'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-6 card-hover"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          {index === t.about.experienceList.length - 1 ? (
                            <FaGraduationCap className="text-primary" />
                          ) : (
                            <FaBriefcase className="text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-accent text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-white/40 text-sm mb-4">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-2 text-white/70 text-sm"
                          >
                            <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}

