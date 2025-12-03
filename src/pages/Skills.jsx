import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass rounded-2xl p-6 card-hover group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          <skill.icon size={28} style={{ color: skill.color }} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          <p className="text-white/40 text-sm">{skill.level}%</p>
        </div>
      </div>

      {/* Skill Level Bar */}
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
          }}
        />
      </div>
    </motion.div>
  );

  const SkillSection = ({ title, skills, icon }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        {icon}
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
            <span className="gradient-text">{t.skills.title}</span>
          </h1>
          <p className="text-xl text-white/60">{t.skills.subtitle}</p>
        </motion.div>

        {/* Skills Sections */}
        <SkillSection
          title={t.skills.categories.frontend}
          skills={skillsData.frontend}
          icon={<FaReact className="text-accent text-2xl" />}
        />

        <SkillSection
          title={t.skills.categories.frameworks}
          skills={skillsData.frameworks}
          icon={<SiNextdotjs className="text-white text-2xl" />}
        />

        <SkillSection
          title={t.skills.categories.styling}
          skills={skillsData.styling}
          icon={<SiTailwindcss className="text-[#06B6D4] text-2xl" />}
        />

        <SkillSection
          title={t.skills.categories.tools}
          skills={skillsData.tools}
          icon={<FaGitAlt className="text-[#F05032] text-2xl" />}
        />

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isRTL ? 'مهارت‌های دیگر' : 'Other Skills'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
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
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full glass text-white/70 text-sm hover:text-white hover:bg-primary/20 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}

