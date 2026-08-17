import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCheckCircle,
  FaBolt,
  FaUsers,
  FaLayerGroup,
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const achievementIcons = [FaBolt, FaUsers, FaLayerGroup, FaGraduationCap];
const achievementAccents = [
  "from-amber-400/20 to-orange-500/10 text-amber-300",
  "from-primary/20 to-indigo-500/10 text-primary-light",
  "from-accent/20 to-cyan-500/10 text-accent",
  "from-accent-2/20 to-fuchsia-500/10 text-accent-2",
];

const focusItems = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
];

export default function About() {
  const { t, isRTL } = useLanguage();

  const facts = [
    { value: "6+", label: isRTL ? "سال تجربه" : "Years shipping" },
    { value: "12+", label: isRTL ? "پروژه تحویل‌شده" : "Shipped products" },
    { value: "5", label: isRTL ? "همکاری سازمانی" : "Company roles" },
    { value: "RTL", label: isRTL ? "سیستم دوزبانه" : "Bilingual systems" },
  ];

  const focusChips = isRTL
    ? ["فین‌تک", "عملکرد", "RTL / LTR", "تجربه کاربری"]
    : ["FinTech", "Performance", "RTL / LTR", "Product UX"];

  return (
    <div className="relative min-h-screen overflow-hidden animated-bg grid-pattern">
      <div className="pointer-events-none absolute top-24 start-[-8%] w-80 h-80 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-40 end-[-6%] w-96 h-96 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
         
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="gradient-text">{t.about.title}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl">
            {t.about.subtitle}
          </p>
        </Motion.div>

        {/* Intro split */}
        <div className="grid lg:grid-cols-12 gap-6 mb-20">
          <Motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-4"
          >
            <div className="h-full rounded-3xl glass glow-border p-6 md:p-7">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] tracking-[0.22em] uppercase text-white/35">
                  {isRTL ? "پروفایل" : "Profile"}
                </span>
                <span className="inline-flex items-center gap-2 text-xs text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70" />
                    <span className="relative rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  {t.about.nowBadge}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">
                {isRTL ? "حیدر شجاع" : "Haider Shoja"}
              </h2>
              <p className="text-accent mb-5">{t.hero.title}</p>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 mb-5">
                <p className="text-white/40 text-xs mb-1">
                  {isRTL ? "نقش فعلی" : "Current role"}
                </p>
                <p className="text-white font-medium">
                  {t.about.experienceList[0].role}
                </p>
                <p className="text-primary text-sm mt-1">
                  {t.about.experienceList[0].company}
                </p>
                <p className="text-white/40 text-xs mt-2">
                  {t.about.experienceList[0].period}
                </p>
              </div>

              <p className="flex items-center gap-2 text-white/45 text-sm mb-6">
                <FaMapMarkerAlt className="text-accent" />
                {isRTL
                  ? "آماده همکاری ریموت، هیبرید و حضوری"
                  : "Remote, hybrid, or on-site"}
              </p>

              <p className="text-white/40 text-xs tracking-[0.18em] uppercase mb-3">
                {t.about.focusTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {focusItems.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                  >
                    <item.icon size={14} style={{ color: item.color }} />
                    {item.label}
                  </span>
                ))}
                {focusChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Motion.aside>

          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <div className="rounded-3xl glass glow-border p-7 md:p-10 flex-1">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6" />
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {t.about.summary}
              </p>
              <p className="text-white/45 mt-5">{t.about.currentRole}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {facts.map((fact, index) => (
                <Motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.08 }}
                  className="rounded-2xl glass px-4 py-5 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {fact.value}
                  </div>
                  <div className="text-white/45 text-xs leading-snug">
                    {fact.label}
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>

        {/* Achievements */}
        <section className="mb-24">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between gap-4 mb-8"
          >
            <div>
              <p className="text-accent text-sm mb-2">
                {isRTL ? "نتایج قابل اندازه‌گیری" : "Measurable outcomes"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.about.achievements}
              </h2>
            </div>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.about.achievementsList.map((achievement, index) => {
              const Icon = achievementIcons[index];
              return (
                <Motion.article
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl glass glow-border p-6"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievementAccents[index]} flex items-center justify-center text-xl mb-4`}
                  >
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-white/55 leading-relaxed">
                    {achievement.description}
                  </p>
                </Motion.article>
              );
            })}
          </div>
        </section>

        {/* Experience timeline */}
        <section className="mb-20">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-accent text-sm mb-2">{t.about.journey}</p>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <FaBriefcase className="text-primary text-2xl" />
              {t.about.experience}
            </h2>
          </Motion.div>

          <div className="relative max-w-4xl">
            <div className="absolute top-3 bottom-3 start-[15px] md:start-[19px] w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="space-y-6">
              {t.about.experienceList.map((exp, index) => {
                const isCurrent = index === 0;
                const isTeaching = index === t.about.experienceList.length - 1;

                return (
                  <Motion.article
                    key={`${exp.company}-${exp.period}`}
                    initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.06 }}
                    className="relative ps-12 md:ps-16"
                  >
                    <div
                      className={`absolute start-[8px] md:start-[11px] top-6 w-[16px] h-[16px] rounded-full border-2 z-10 ${
                        isCurrent
                          ? "bg-accent border-accent pulse-glow"
                          : "bg-dark border-primary/70"
                      }`}
                    />

                    <div
                      className={`rounded-2xl glass p-6 border transition-all duration-300 ${
                        isCurrent
                          ? "glow-border border-accent/20"
                          : "border-white/5 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                            {isTeaching ? (
                              <FaGraduationCap className="text-accent" />
                            ) : (
                              <FaBriefcase className="text-primary" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {exp.role}
                            </h3>
                            <p className="text-primary text-sm">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full text-[11px] bg-accent/15 text-accent">
                              {t.about.nowBadge}
                            </span>
                          )}
                          <span className="px-3 py-1 rounded-full bg-white/5 text-white/45 text-xs">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-white/65 text-sm leading-relaxed"
                          >
                            <FaCheckCircle className="text-accent mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass glow-border p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t.about.ctaTitle}
            </h2>
            <p className="text-white/50">{t.hero.punchline}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/projects">
              <Motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center gap-2"
              >
                {t.about.ctaProjects}
                {isRTL ? (
                  <FaArrowLeft className="text-sm" />
                ) : (
                  <FaArrowRight className="text-sm" />
                )}
              </Motion.button>
            </Link>
            <Link to="/contact">
           
            </Link>
          </div>
        </Motion.div>
      </div>
    </div>
  );
}
