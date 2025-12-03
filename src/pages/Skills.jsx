import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNpm, FaFigma, FaBootstrap
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiVite, 
  SiVercel, SiPostman, SiSass
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const skillsData = {
  frontend: [
    { name: 'React', icon: FaReact, color: '#61DAFB', level: 95 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 90 },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 95 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 80 },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 98 },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 95 },
  ],
  frameworks: [
    { name: 'Redux', icon: SiRedux, color: '#764ABC', level: 85 },
    { name: 'Vite', icon: SiVite, color: '#646CFF', level: 90 },
  ],
  styling: [
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', level: 90 },
    { name: 'Sass', icon: SiSass, color: '#CC6699', level: 85 },
  ],
  tools: [
    { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 90 },
    { name: 'NPM', icon: FaNpm, color: '#CB3837', level: 90 },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 75 },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff', level: 90 },
  ],
};

export default function Skills() {
  const { t, isRTL } = useLanguage();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -8 }}
      onHoverStart={() => setHoveredSkill(skill.name)}
      onHoverEnd={() => setHoveredSkill(null)}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredSkill === skill.name ? 0.5 : 0 }}
        className="absolute inset-0 rounded-2xl blur-xl"
        style={{ backgroundColor: skill.color }}
      />
      
      <div className="relative glass rounded-2xl p-6 border border-white/5 group-hover:border-white/20 transition-all duration-300 h-full">
        {/* Icon */}
        <div className="flex items-center gap-4 mb-5">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-xl transition-all duration-300"
            style={{ 
              backgroundColor: `${skill.color}15`,
              boxShadow: hoveredSkill === skill.name ? `0 0 30px ${skill.color}40` : 'none'
            }}
          >
            <skill.icon size={32} style={{ color: skill.color }} />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
              {skill.name}
            </h3>
            <p className="text-white/40 text-sm">{skill.level}%</p>
          </div>
        </div>

        {/* Skill Level Bar */}
        <div className="h-3 rounded-full bg-white/5 overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
            className="h-full rounded-full relative overflow-hidden"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 shimmer" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  const SkillSection = ({ title, skills, icon, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {icon}
        </motion.div>
        <span className="gradient-text">{title}</span>
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );

  const otherSkills = [
    'REST API',
    'Responsive Design',
    'UI/UX',
    'Performance Optimization',
    'SEO',
    'PWA',
    'Web Accessibility',
    'Cross-Browser Compatibility',
    'Agile/Scrum',
    'Team Leadership',
    'Code Review',
    'Technical Writing',
  ];

  return (
    <div className="min-h-screen py-32 animated-bg grid-pattern">
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
            {isRTL ? '🛠️ مهارت‌های من' : '🛠️ My Expertise'}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{t.skills.title}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </motion.div>

        {/* Skills Sections */}
        <SkillSection
          title={t.skills.categories.frontend}
          skills={skillsData.frontend}
          icon={<FaReact className="text-[#61DAFB] text-3xl" />}
          delay={0}
        />

        <SkillSection
          title={t.skills.categories.frameworks}
          skills={skillsData.frameworks}
          icon={<SiNextdotjs className="text-white text-3xl" />}
          delay={0.1}
        />

        <SkillSection
          title={t.skills.categories.styling}
          skills={skillsData.styling}
          icon={<SiTailwindcss className="text-[#06B6D4] text-3xl" />}
          delay={0.2}
        />

        <SkillSection
          title={t.skills.categories.tools}
          skills={skillsData.tools}
          icon={<FaGitAlt className="text-[#F05032] text-3xl" />}
          delay={0.3}
        />

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-accent-2/10 rounded-3xl blur-xl" />
          <div className="relative glass rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">
                {isRTL ? '✨ مهارت‌های دیگر' : '✨ Other Skills'}
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: 'spring' }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                  }}
                  className="px-5 py-2.5 rounded-full glass text-white/70 text-sm font-medium hover:text-white hover:bg-primary/20 transition-all cursor-default border border-white/10 hover:border-primary/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
