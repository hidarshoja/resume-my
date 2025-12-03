import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRocket,
  FaStar,
  FaCog,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import TypewriterText from "../components/TypewriterText";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const dynamicTextsFA = [
    " متخصص در React، Next.js و فریم‌ورک‌های مدرن JavaScript.",
    " مدرس برنامه‌نویسی وب در آموزشگاه فکوران زیر نظر سازمان فنی و حرفه‌ای.",
    " متخصص در بهینه‌سازی عملکرد و تجربه کاربری.",
    " توسعه‌دهنده پروژه‌های فین‌تک و ارز دیجیتال.",
  ];

  const dynamicTextsEN = [
    " Expert in React, Next.js, and modern JavaScript frameworks.",
    " Web Programming Instructor at Fakooran Institute.",
    " Specialist in performance optimization and user experience.",
    " Developer of FinTech and cryptocurrency projects.",
  ];

  const baseTextFA =
    "توسعه‌دهنده ارشد فرانت‌اند با بیش از ۵ سال تجربه در ساخت برنامه‌های وب با عملکرد بالا.";
  const baseTextEN =
    "Senior Frontend Developer with 5+ years of experience building high-performance web applications.";

  const stats = [
    {
      value: 5,
      suffix: "+",
      label: isRTL ? "سال تجربه" : "Years Experience",
      icon: "🎯",
      duration: 4, // خیلی یواش‌تر - 8 ثانیه
    },
    {
      value: 12,
      suffix: "+",
      label: isRTL ? "پروژه موفق" : "Projects Done",
      icon: "🚀",
      duration: 5, // یواش‌تر - 6 ثانیه
    },
    {
      value: 100,
      suffix: "%",
      label: isRTL ? "رضایت مشتری" : "Client Satisfaction",
      icon: "⭐",
      duration: 6, // تندتر - 2.5 ثانیه
    },
  ];

  const techStack = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 animated-bg grid-pattern">
        {/* Morphing Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[100px] morphing-blob"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-accent/10 to-accent-2/10 rounded-full blur-[120px] morphing-blob"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-sm">
              {isRTL ? "آماده همکاری" : "Available for work"}
            </span>
          </motion.div>

          {/* Name with Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="gradient-text text-glow inline-block"
              >
                {isRTL ? "حیدر" : "Haider"}
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white/90 inline-block"
              >
                {isRTL ? "شجاع" : "Shoja"}
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-4 flex-wrap justify-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-accent text-2xl"
              >
                <FaCode />
              </motion.div>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                {t.hero.title}
              </h2>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-accent-2 text-2xl"
              >
                <FaLaptopCode />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-accent text-lg mt-2"
            >
              {t.hero.subtitle}
            </motion.p>
          </motion.div>

          {/* Typewriter Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-3xl mx-auto mb-12 min-h-[80px]"
          >
            <TypewriterText
              texts={isRTL ? dynamicTextsFA : dynamicTextsEN}
              baseText={isRTL ? baseTextFA : baseTextEN}
              isRTL={isRTL}
            />
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 rounded-xl glass cursor-pointer group"
                title={tech.name}
              >
                <tech.icon
                  size={28}
                  style={{ color: tech.color }}
                  className="transition-transform group-hover:rotate-12"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(99, 102, 241, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.cta}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full glass text-white font-medium border border-white/20 hover:border-accent/50 transition-all hover:bg-white/5"
              >
                {t.hero.contact}
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <StatCounter key={index} stat={stat} delay={1.8 + index * 0.1} />
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              href="https://github.com/hidarshoja"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="mailto:hidarshoja@gmail.com"
              whileHover={{ scale: 1.1, y: -3, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Icon - Center Bottom (replacing scroll indicator) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-5xl"
          >
            <FaRocket className="text-accent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Icons - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed left-20 md:left-32 top-1/3 z-0"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="text-7xl md:text-8xl"
        >
          <FaCode className="text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
        </motion.div>
      </motion.div>

      {/* Floating Icons - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="fixed right-20 md:right-32 top-1/2 z-0"
      >
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [360, 0],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="text-7xl md:text-8xl"
        >
          <FaLaptopCode className="text-accent-2 drop-shadow-[0_0_20px_rgba(244,114,182,0.5)]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Stat Counter Component with different speeds
function StatCounter({ stat, delay }) {
  const [displayValue, setDisplayValue] = useState(0);
  const { isRTL } = useLanguage();

  useEffect(() => {
    const startTime = Date.now();
    const endValue = stat.value;
    const duration = stat.duration * 1000; // Convert to milliseconds
    let animationFrame;

    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * endValue);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      } else {
        setDisplayValue(endValue);
      }
    };

    const timeout = setTimeout(() => {
      updateValue();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [stat.value, stat.duration, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass rounded-2xl p-6 text-center cursor-default"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay, type: "spring", stiffness: 200 }}
        className="text-3xl mb-2"
      >
        {stat.icon}
      </motion.div>
      <motion.div
        key={displayValue}
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="text-3xl md:text-4xl font-bold gradient-text min-h-[3rem] flex items-center justify-center"
      >
        {displayValue}
        {stat.suffix}
      </motion.div>
      <div className="text-white/50 text-sm mt-1">{stat.label}</div>
    </motion.div>
  );
}
