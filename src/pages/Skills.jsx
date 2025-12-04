import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNpm,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiVite,
  SiVercel,
  SiPostman,
  SiSass,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const skillsData = {
  frontend: [
    { name: "React", icon: FaReact, color: "#61DAFB", level: 95 },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 90 },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 95 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 98 },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 95 },
  ],
  frameworks: [
    { name: "Redux", icon: SiRedux, color: "#764ABC", level: 85 },
    { name: "Vite", icon: SiVite, color: "#646CFF", level: 90 },
  ],
  styling: [
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", level: 95 },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 90 },
    { name: "Sass", icon: SiSass, color: "#CC6699", level: 85 },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "#F05032", level: 90 },
    { name: "NPM", icon: FaNpm, color: "#CB3837", level: 90 },
    { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 75 },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 85 },
    { name: "Vercel", icon: SiVercel, color: "#ffffff", level: 90 },
  ],
};

export default function Skills() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen py-32 animated-bg grid-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block px-4 py-2 rounded-full glass text-accent text-sm mb-4"
          >
            {isRTL ? "🛠️ مهارت‌های من" : "🛠️ My Expertise"}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{t.skills.title}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
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
        <OtherSkillsSection isRTL={isRTL} />
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}

// Skill Section Component
function SkillSection({ title, skills, icon, delay = 0 }) {
  const { isRTL } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay, duration: 0.6 }}
      className="mb-20"
    >
      <motion.h2
        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 50 : -50 }
        }
        transition={{ delay: delay + 0.2 }}
        className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        <span className="gradient-text">{title}</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// Skill Card Component
function SkillCard({ skill, index, variants }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);
  const barRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, index * 100 + 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, index]);

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 rounded-2xl blur-xl"
        style={{ backgroundColor: skill.color }}
      />

      <div className="relative glass rounded-2xl p-6 border border-white/5 group-hover:border-white/20 transition-all duration-300 h-full backdrop-blur-xl">
        {/* Icon and Name */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.15 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="p-4 rounded-xl transition-all duration-300 relative overflow-hidden"
            style={{
              backgroundColor: `${skill.color}15`,
            }}
          >
            <motion.div
              animate={{
                boxShadow: isHovered
                  ? `0 0 30px ${skill.color}60`
                  : `0 0 0px ${skill.color}00`,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
              style={{ backgroundColor: skill.color, opacity: 0.1 }}
            />
            <skill.icon
              size={32}
              style={{ color: skill.color }}
              className="relative z-10"
            />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
              {skill.name}
            </h3>
            <motion.p
              key={hasAnimated ? skill.level : 0}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-white/40 text-sm font-medium"
            >
              {hasAnimated ? `${skill.level}%` : "0%"}
            </motion.p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-3 rounded-full bg-white/5 overflow-hidden relative">
            {/* Background Glow */}
            <motion.div
              animate={{
                opacity: isHovered ? 0.2 : 0,
              }}
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: skill.color }}
            />

            {/* Progress Fill */}
            <motion.div
              ref={barRef}
              initial={{ width: 0 }}
              animate={
                hasAnimated
                  ? {
                      width: `${skill.level}%`,
                    }
                  : { width: 0 }
              }
              transition={{
                duration: 1.5,
                delay: index * 0.1 + 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="h-full rounded-full relative overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC, ${skill.color})`,
                backgroundSize: "200% 100%",
              }}
            >
              {/* Animated Shimmer */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "200% 0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                  backgroundSize: "200% 100%",
                }}
              />

              {/* Glow Effect on Progress */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0.6,
                  boxShadow: isHovered
                    ? `0 0 20px ${skill.color}80`
                    : `0 0 10px ${skill.color}40`,
                }}
                className="absolute inset-0 rounded-full"
              />
            </motion.div>
          </div>

          {/* Percentage Indicator */}
          {hasAnimated && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 1.8 }}
              className="absolute -top-8 right-0 px-2 py-1 rounded-md text-xs font-bold"
              style={{
                backgroundColor: `${skill.color}20`,
                color: skill.color,
                border: `1px solid ${skill.color}40`,
              }}
            >
              {skill.level}%
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Other Skills Section
function OtherSkillsSection({ isRTL }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [animatedItems, setAnimatedItems] = useState(new Set());

  const otherSkills = [
    "REST API",
    "Responsive Design",
    "UI/UX",
    "Performance Optimization",
    "SEO",
    "PWA",
    "Web Accessibility",
    "Cross-Browser Compatibility",
    "Agile/Scrum",
    "Team Leadership",
    "Code Review",
    "Technical Writing",
  ];

  useEffect(() => {
    if (isInView) {
      const skills = [
        "REST API",
        "Responsive Design",
        "UI/UX",
        "Performance Optimization",
        "SEO",
        "PWA",
        "Web Accessibility",
        "Cross-Browser Compatibility",
        "Agile/Scrum",
        "Team Leadership",
        "Code Review",
        "Technical Writing",
      ];
      skills.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems((prev) => new Set([...prev, index]));
        }, index * 50);
      });
    }
  }, [isInView]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="relative mt-20"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          opacity: isInView ? 0.3 : 0,
        }}
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-accent-2/20 rounded-3xl blur-2xl"
      />

      <div className="relative glass rounded-3xl p-8 md:p-12 border border-white/10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
        >
          <span className="gradient-text">
            {isRTL ? "✨ مهارت‌های دیگر" : "✨ Other Skills"}
          </span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3">
          {otherSkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={
                animatedItems.has(index)
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0, rotate: -10 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{
                scale: 1.15,
                y: -5,
                rotate: 5,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
              }}
              className="px-5 py-2.5 rounded-full glass text-white/70 text-sm font-medium hover:text-white hover:bg-primary/20 transition-all cursor-default border border-white/10 hover:border-primary/50 relative overflow-hidden group"
            >
              {/* Hover Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm"
              />
              <span className="relative z-10">{skill}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
