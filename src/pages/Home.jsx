import { useEffect, useState } from "react";
import {
  motion as Motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
  FaGraduationCap,
  FaBolt,
  FaChartLine,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const techStack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
];

const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
  "FinTech",
  "RTL / LTR",
  "Performance",
  "UI Engineering",
  "Vite",
];

export default function Home() {
  const { t, isRTL } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.16), transparent 45%)`;

  const roles = isRTL
    ? [
        "توسعه‌دهنده ارشد فرانت‌اند",
        "سازنده محصولات فین‌تک",
        "متخصص بهینه‌سازی عملکرد",
        "مدرس برنامه‌نویسی وب",
      ]
    : [
        "Senior Frontend Developer",
        "FinTech Product Builder",
        "Performance Specialist",
        "Web Programming Instructor",
      ];

  const stats = [
    {
      value: 6,
      suffix: "+",
      label: isRTL ? "سال تجربه" : "Years experience",
      duration: 2.4,
    },
    {
      value: 12,
      suffix: "+",
      label: isRTL ? "پروژه تحویل‌شده" : "Shipped projects",
      duration: 2.8,
    },
    {
      value: 100,
      suffix: "%",
      label: isRTL ? "رضایت مشتری" : "Client satisfaction",
      duration: 3.2,
    },
  ];

  const highlights = [
    {
      key: "atlas",
      span: "md:col-span-7 md:row-span-2",
      image: "/img/atlas.png",
      tag: t.hero.featured,
      title: isRTL ? "سایت دوزبانه اطلس پود" : "Atlas Pood bilingual site",
      desc: isRTL
        ? "وب‌سایت سازمانی فارسی/انگلیسی با ادغام API طراحی پرده سه‌بعدی."
        : "Persian/English enterprise site with a 3D curtain design API.",
      href: "/projects",
    },
    {
      key: "fintech",
      span: "md:col-span-5",
      icon: FaChartLine,
      title: isRTL ? "محصولات فین‌تک" : "FinTech products",
      desc: isRTL
        ? "پلتفرم ارز دیجیتال، معاملات طلا و نرم‌افزار حسابداری."
        : "Crypto, gold trading, and accounting platforms — built for real users.",
    },
    {
      key: "teach",
      span: "md:col-span-5",
      icon: FaGraduationCap,
      title: isRTL ? "مدرس حرفه‌ای" : "Professional instructor",
      desc: isRTL
        ? "آموزش توسعه‌دهندگان در فکوران زیر نظر سازمان فنی و حرفه‌ای."
        : "Trained developers at Fakooran under the national vocational org.",
    },
    {
      key: "speed",
      span: "md:col-span-4",
      icon: FaBolt,
      title: isRTL ? "۱۰۰٪ سریع‌تر" : "100% faster",
      desc: isRTL
        ? "بهبود سرعت بارگذاری با بهینه‌سازی واقعی، نه شعار."
        : "Measured load-time wins through careful engineering.",
    },
    {
      key: "bilingual",
      span: "md:col-span-4",
      title: isRTL ? "سیستم دوزبانه" : "Bilingual systems",
      desc: isRTL
        ? "تجربه عمیق در RTL/LTR و مدیریت محتوای پویا."
        : "Deep RTL/LTR craft and dynamic content systems.",
    },
    {
      key: "lead",
      span: "md:col-span-4",
      title: isRTL ? "رهبری فنی" : "Technical leadership",
      desc: isRTL
        ? "استاندارد کدنویسی، منتورینگ و تحویل پروژه‌های مقیاس‌بالا."
        : "Standards, mentoring, and shipping large-scale web apps.",
    },
  ];

  const previewCards = [
    {
      img: "/img/atlas.png",
      label: isRTL ? "اطلس پود" : "Atlas Pood",
      className: "top-[-18px] end-[-28px] hidden lg:flex",
    },
    {
      img: "/img/nora.png",
      label: isRTL ? "نورا پارت" : "Nora Part",
      className: "bottom-[72px] start-[-40px] hidden xl:flex",
    },
    {
      img: "/img/gold.png",
      label: isRTL ? "معاملات طلا" : "Gold Trading",
      className: "bottom-[-20px] end-[12%] hidden lg:flex",
    },
  ];

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background layers */}
      <div className="fixed inset-0 animated-bg grid-pattern" />
      <Motion.div
        style={{ background: spotlight }}
        className="pointer-events-none fixed inset-0 z-[1]"
      />
      <Motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[-10%] start-[-8%] w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px] morphing-blob"
      />
      <Motion.div
        animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-[-10%] end-[-8%] w-[520px] h-[520px] rounded-full bg-accent/10 blur-[130px] morphing-blob"
      />

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-start">
            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-white/70 text-sm">{t.hero.available}</span>
              <span className="hidden sm:inline text-white/25">·</span>
              <span className="hidden sm:inline text-white/50 text-sm">
                {t.hero.openTo}
              </span>
            </Motion.div>

            <Motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-accent/90 text-sm md:text-base tracking-wide mb-3"
            >
              {t.hero.greeting}
            </Motion.p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-5">
              <Motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="gradient-text text-glow block"
              >
                {isRTL ? "حیدر شجاع" : "Haider Shoja"}
              </Motion.span>
            </h1>

            <div className="h-10 md:h-12 mb-6 flex items-center justify-center lg:justify-start">
              <RoleRotator key={isRTL ? "fa" : "en"} roles={roles} />
            </div>

            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-white/65 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4"
            >
              {t.hero.punchline}
            </Motion.p>

            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-white/40 text-sm mb-8"
            >
              {t.hero.currently}
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              {techStack.map((tech, index) => (
                <Motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + index * 0.06 }}
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl glass"
                  title={tech.name}
                >
                  <tech.icon size={18} style={{ color: tech.color }} />
                  <span className="text-white/70 text-xs hidden sm:inline">
                    {tech.name}
                  </span>
                </Motion.div>
              ))}
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <Link to="/projects">
                <Motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 40px rgba(99, 102, 241, 0.45)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.hero.cta}
                    {isRTL ? (
                      <FaArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Motion.button>
              </Link>
              <Link to="/contact">
                <Motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-7 py-3.5 rounded-full glass text-white font-medium border border-white/15 hover:border-accent/50 transition-all"
                >
                  {t.hero.contact}
                </Motion.button>
              </Link>
              <div className="flex items-center gap-2">
                <Motion.a
                  href="https://github.com/hidarshoja"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full glass text-white/60 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </Motion.a>
                <Motion.a
                  href="mailto:hidarshoja@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full glass text-white/60 hover:text-white transition-all lg:hidden"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} />
                </Motion.a>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <StatCounter
                  key={stat.label}
                  stat={stat}
                  delay={1 + index * 0.12}
                />
              ))}
            </Motion.div>
          </div>

          {/* Visual */}
          <Motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="relative"
          >
            {previewCards.map((card) => (
              <Motion.div
                key={card.label}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5 + card.label.length * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute z-20 ${card.className}`}
              >
                <ProjectChip img={card.img} label={card.label} />
              </Motion.div>
            ))}
            <TiltCard>
              <CodeWindow isRTL={isRTL} />
            </TiltCard>
          </Motion.div>
        </div>
      </section>

      {/* Tech marquee */}
      <div className="relative z-10 py-6 marquee-mask overflow-hidden border-y border-white/5">
        <div className="marquee-track flex items-center gap-8 px-4">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="text-white/35 text-sm tracking-[0.2em] uppercase whitespace-nowrap"
            >
              {item}
              <span className="text-accent/40 mx-8">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Proof bento */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
          >
            <div>
              <p className="text-accent text-sm mb-2">{t.hero.proofEyebrow}</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="gradient-text">{t.hero.proofTitle}</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors"
            >
              {t.hero.viewAll}
              {isRTL ? <FaArrowLeft /> : <FaArrowRight />}
            </Link>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {highlights.map((item, index) => (
              <HighlightCard key={item.key} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function RoleRotator({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <AnimatePresence mode="wait">
      <Motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
        transition={{ duration: 0.4 }}
        className="text-xl md:text-2xl font-medium text-white/90"
      >
        {roles[index]}
      </Motion.span>
    </AnimatePresence>
  );
}

function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateXRaw = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateYRaw = useTransform(x, [-0.5, 0.5], [-9, 9]);
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 20 });

  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className="relative"
    >
      {children}
    </Motion.div>
  );
}

function CodeWindow({ isRTL }) {
  const lines = [
    { type: "comment", text: isRTL ? "// پروفایل حیدر شجاع" : "// haider.shoja" },
    { type: "code", parts: [
      { cls: "code-kw", text: "const " },
      { cls: "code-fn", text: "profile" },
      { cls: "", text: " = {" },
    ]},
    { type: "code", indent: 1, parts: [
      { cls: "code-key", text: "role" },
      { cls: "", text: ": " },
      { cls: "code-str", text: '"Senior Frontend"' },
      { cls: "", text: "," },
    ]},
    { type: "code", indent: 1, parts: [
      { cls: "code-key", text: "years" },
      { cls: "", text: ": " },
      { cls: "code-num", text: "6" },
      { cls: "", text: "," },
    ]},
    { type: "code", indent: 1, parts: [
      { cls: "code-key", text: "stack" },
      { cls: "", text: ": [" },
      { cls: "code-str", text: '"React"' },
      { cls: "", text: ", " },
      { cls: "code-str", text: '"Next.js"' },
      { cls: "", text: ", " },
      { cls: "code-str", text: '"TS"' },
      { cls: "", text: "]," },
    ]},
    { type: "code", indent: 1, parts: [
      { cls: "code-key", text: "focus" },
      { cls: "", text: ": [" },
      { cls: "code-str", text: '"FinTech"' },
      { cls: "", text: ", " },
      { cls: "code-str", text: '"UX"' },
      { cls: "", text: ", " },
      { cls: "code-str", text: '"Speed"' },
      { cls: "", text: "]," },
    ]},
    { type: "code", indent: 1, parts: [
      { cls: "code-key", text: "available" },
      { cls: "", text: ": " },
      { cls: "code-bool", text: "true" },
    ]},
    { type: "code", parts: [{ cls: "", text: "};" }] },
    { type: "blank" },
    { type: "code", parts: [
      { cls: "code-kw", text: "export default " },
      { cls: "code-fn", text: "profile" },
      { cls: "", text: ";" },
    ]},
  ];

  return (
    <div className="code-window rounded-2xl overflow-hidden glow-border">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ms-3 text-white/35 text-xs font-mono">
          profile.ts
        </span>
        <span className="ms-auto text-[10px] uppercase tracking-widest text-accent/70">
          live
        </span>
      </div>
      <div dir="ltr" className="p-5 md:p-6 font-mono text-[13px] md:text-sm leading-7 text-white/80">
        {lines.map((line, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + index * 0.08 }}
            className="flex gap-4"
          >
            <span className="w-5 shrink-0 text-white/20 text-right select-none">
              {index + 1}
            </span>
            {line.type === "blank" ? (
              <span>&nbsp;</span>
            ) : line.type === "comment" ? (
              <span className="code-comment">{line.text}</span>
            ) : (
              <span style={{ paddingLeft: `${(line.indent || 0) * 16}px` }}>
                {line.parts.map((part, partIndex) => (
                  <span key={partIndex} className={part.cls}>
                    {part.text}
                  </span>
                ))}
              </span>
            )}
          </Motion.div>
        ))}
        <Motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          className="inline-block w-[7px] h-4 bg-accent ms-9 mt-1 align-middle"
        />
      </div>
    </div>
  );
}

function ProjectChip({ img, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl glass p-1.5 pe-3 shadow-2xl">
      <img
        src={img}
        alt={label}
        className="w-14 h-10 object-cover rounded-lg"
      />
      <span className="text-white/80 text-xs whitespace-nowrap">{label}</span>
    </div>
  );
}

function HighlightCard({ item, index }) {
  const Wrapper = item.href ? Link : "div";
  const wrapperProps = item.href ? { to: item.href } : {};

  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={item.span}
    >
      <Wrapper
        {...wrapperProps}
        className="group relative block h-full min-h-[170px] overflow-hidden rounded-2xl glass glow-border"
      >
        {item.image && (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/70 to-transparent" />
          </>
        )}
        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
          {item.tag && (
            <span className="self-start mb-3 px-2.5 py-1 rounded-full text-[11px] tracking-wide bg-white/10 text-accent">
              {item.tag}
            </span>
          )}
          {item.icon && (
            <item.icon className="text-accent mb-3 text-xl" />
          )}
          <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </Wrapper>
    </Motion.div>
  );
}

function StatCounter({ stat, delay }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endValue = stat.value;
    const duration = stat.duration * 1000;
    let animationFrame;

    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(easeOutQuart * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      } else {
        setDisplayValue(endValue);
      }
    };

    const timeout = setTimeout(updateValue, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [stat.value, stat.duration, delay]);

  return (
    <div className="rounded-2xl glass px-2 py-4 text-center">
      <div className="text-2xl md:text-3xl font-bold gradient-text">
        {displayValue}
        {stat.suffix}
      </div>
      <div className="text-white/45 text-[11px] md:text-xs mt-1 leading-snug">
        {stat.label}
      </div>
    </div>
  );
}
