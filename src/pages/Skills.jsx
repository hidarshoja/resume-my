import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, useInView } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaBolt,
  FaGlobe,
  FaLayerGroup,
  FaChartLine,
  FaArrowLeft,
  FaArrowRight,
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
    { name: "React", icon: FaReact, color: "#61DAFB", level: 100 },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 95 },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 95 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 90 },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 100 },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 100 },
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
    { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 95 },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 85 },
    { name: "Vercel", icon: SiVercel, color: "#ffffff", level: 90 },
  ],
};

const CORE_IDS = ["React", "Next.js", "TypeScript", "TailwindCSS"];

const strengthIcons = [FaBolt, FaGlobe, FaLayerGroup, FaChartLine];

const categoryKeys = ["frontend", "frameworks", "styling", "tools"];

const categoryIcons = {
  frontend: FaReact,
  frameworks: SiRedux,
  styling: SiTailwindcss,
  tools: FaGitAlt,
};

export default function Skills() {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("frontend");

  const allSkills = Object.values(skillsData).flat();
  const coreStack = allSkills.filter((skill) => CORE_IDS.includes(skill.name));
  const activeSkills = skillsData[activeCategory];

  return (
    <div className="relative min-h-screen overflow-hidden animated-bg grid-pattern">
      <div className="pointer-events-none absolute top-24 start-[-8%] w-80 h-80 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-40 end-[-6%] w-96 h-96 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-accent text-sm mb-5">
            {t.skills.eyebrow}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="gradient-text">{t.skills.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl">
                {t.skills.subtitle}
              </p>
            </div>
            <div className="flex gap-3">
              <StatPill value="16+" label={t.skills.statTools} />
              <StatPill value="6+" label={t.skills.statYears} />
              <StatPill
                value={isRTL ? "فرانت" : "Frontend"}
                label={t.skills.statFocus}
              />
            </div>
          </div>
        </Motion.div>

        {/* Core stack */}
        <section className="mb-14">
          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-accent text-sm mb-4"
          >
            {t.skills.coreStack}
          </Motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {coreStack.map((skill, index) => (
              <CoreCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>

        {/* Category tabs + skills */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-2 mb-8">
            {categoryKeys.map((key) => {
              const Icon = categoryIcons[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                      : "glass text-white/55 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={14} />
                  {t.skills.categories[key]}
                  <span className="text-[11px] opacity-70">
                    {skillsData[key].length}
                  </span>
                </button>
              );
            })}
          </div>

          <Motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </Motion.div>
        </section>

        {/* Strengths */}
        <section className="mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-accent text-sm mb-2">{t.skills.strengthsEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.skills.strengthsTitle}
            </h2>
          </Motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.skills.strengths.map((item, index) => {
              const Icon = strengthIcons[index];
              return (
                <Motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl glass glow-border p-6"
                >
                  <Icon className="text-accent text-xl mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Motion.article>
              );
            })}
          </div>
        </section>

        {/* Other skills */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass glow-border p-7 md:p-10 mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">{t.skills.otherSkills}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {t.skills.otherList.map((skill, index) => (
              <Motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -3, scale: 1.04 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/65 text-sm hover:border-primary/40 hover:text-white transition-colors"
              >
                {skill}
              </Motion.span>
            ))}
          </div>
        </Motion.section>

        {/* CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass glow-border p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl">
            {t.skills.ctaTitle}
          </h2>
          <Link to="/projects">
            <Motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center gap-2"
            >
              {t.skills.ctaButton}
              {isRTL ? (
                <FaArrowLeft className="text-sm" />
              ) : (
                <FaArrowRight className="text-sm" />
              )}
            </Motion.button>
          </Link>
        </Motion.div>
      </div>
    </div>
  );
}

function StatPill({ value, label }) {
  return (
    <div className="rounded-2xl glass px-4 py-3 text-center min-w-[92px]">
      <div className="text-2xl font-bold gradient-text">{value}</div>
      <div className="text-white/40 text-xs leading-snug">{label}</div>
    </div>
  );
}

function CoreCard({ skill, index }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl glass glow-border p-5 md:p-6 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-8 -end-8 w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
        style={{ backgroundColor: skill.color }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${skill.color}18` }}
      >
        <skill.icon size={26} style={{ color: skill.color }} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
      <p className="text-2xl font-bold gradient-text mb-3">{skill.level}%</p>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <Motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: 0.4 + index * 0.1, duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </Motion.div>
  );
}

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimated(true), index * 80 + 120);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  return (
    <Motion.article
      ref={ref}
      whileHover={{ y: -4 }}
      className="group rounded-2xl glass glow-border p-5"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${skill.color}18` }}
        >
          <skill.icon size={22} style={{ color: skill.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white group-hover:text-accent transition-colors truncate">
            {skill.name}
          </h3>
          <p className="text-white/40 text-xs">
            {animated ? `${skill.level}%` : "—"}
          </p>
        </div>
        <span
          className="text-sm font-bold shrink-0"
          style={{ color: skill.color }}
        >
          {animated ? skill.level : 0}
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <Motion.div
          initial={{ width: 0 }}
          animate={animated ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
          }}
        />
      </div>
    </Motion.article>
  );
}
