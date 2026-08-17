import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaPlay,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const projectImages = {
  1: "/img/atlas.png",
  2: "/img/asprin.png",
  3: "/img/adminASPRIN.png",
  4: "/img/adminCLUB.png",
  5: "/img/gold.png",
  6: "/img/nora.png",
  7: "/img/sorena.png",
  8: "/img/kh.png",
  9: "/img/fakor.png",
  10: "/img/byond.png",
  11: "/img/pars.png",
  12: "/img/userClub.png",
};

const projectUrls = {
  1: "https://doopsalta2.com/",
  2: "https://asprin-22xm.vercel.app/",
  3: "https://admin-asprin.vercel.app/",
  4: "https://api.clubmegacard.com/",
  5: "https://gold-pars.vercel.app/",
  6: "https://norapart.ir",
  7: "https://amlack-sorena2-jh98.vercel.app/",
  8: "https://khazairugs.com/",
  9: "https://fakoorins.ir/",
  10: "https://beyond-it.info/",
  11: "https://www.parshesabdar.com/",
  12: "https://user-dev.clubmegacard.com/",
};

const projectVideos = {
  1: "/video/atlas.mp4",
  2: "/video/asprin.mp4",
  3: "/video/adminAsprin.mp4",
  4: "/video/adminClub.mp4",
  5: "/video/gold.mp4",
  6: "/video/nora.mp4",
  7: "/video/sorena.mp4",
  8: "/video/kh.mp4",
  9: "/video/fakor.mp4",
  10: "/video/byond.mp4",
  11: "/video/pars.mp4",
  12: "/video/userClub2.mp4",
};

const FEATURED_ID = 1;

const categoryMap = {
  FinTech: "fintech",
  فین‌تک: "fintech",
  "E-commerce": "ecommerce",
  فروشگاهی: "ecommerce",
  Corporate: "corporate",
  شرکتی: "corporate",
  Healthcare: "healthcare",
  پزشکی: "healthcare",
  Dashboard: "dashboard",
  داشبورد: "dashboard",
  Education: "education",
  آموزشی: "education",
  "Real Estate": "realestate",
  املاک: "realestate",
};

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [currentProject, setCurrentProject] = useState(null);
  const videoRef = useRef(null);

  const categories = [
    { id: "all", label: isRTL ? "همه" : "All" },
    { id: "fintech", label: isRTL ? "فین‌تک" : "FinTech" },
    { id: "ecommerce", label: isRTL ? "فروشگاهی" : "E-commerce" },
    { id: "corporate", label: isRTL ? "شرکتی" : "Corporate" },
    { id: "healthcare", label: isRTL ? "پزشکی" : "Healthcare" },
    { id: "dashboard", label: isRTL ? "داشبورد" : "Dashboard" },
    { id: "education", label: isRTL ? "آموزشی" : "Education" },
    { id: "realestate", label: isRTL ? "املاک" : "Real Estate" },
  ];

  const allProjects = t.projects.projectsList;
  const filteredProjects = allProjects.filter((project) => {
    if (filter === "all") return true;
    return categoryMap[project.category] === filter;
  });

  const featured =
    filter === "all"
      ? allProjects.find((project) => project.id === FEATURED_ID)
      : null;
  const gridProjects = featured
    ? filteredProjects.filter((project) => project.id !== FEATURED_ID)
    : filteredProjects;

  const countFor = (id) => {
    if (id === "all") return allProjects.length;
    return allProjects.filter((project) => categoryMap[project.category] === id)
      .length;
  };

  const openDemo = (project) => setCurrentProject(project);

  const closeDemo = () => {
    if (videoRef.current) videoRef.current.pause();
    setCurrentProject(null);
  };

  useEffect(() => {
    document.body.style.overflow = currentProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [currentProject]);

  return (
    <div className="relative min-h-screen overflow-hidden animated-bg grid-pattern">
      <div className="pointer-events-none absolute top-24 start-[-8%] w-80 h-80 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-40 end-[-6%] w-96 h-96 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-accent text-sm mb-5">
            {t.projects.eyebrow}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="gradient-text">{t.projects.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl">
                {t.projects.subtitle}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-2xl glass px-4 py-3 text-center min-w-[92px]">
                <div className="text-2xl font-bold gradient-text">
                  {allProjects.length}
                </div>
                <div className="text-white/40 text-xs">
                  {isRTL ? "پروژه" : "Projects"}
                </div>
              </div>
              <div className="rounded-2xl glass px-4 py-3 text-center min-w-[92px]">
                <div className="text-2xl font-bold gradient-text">4</div>
                <div className="text-white/40 text-xs">
                  {isRTL ? "فین‌تک" : "FinTech"}
                </div>
              </div>
              <div className="rounded-2xl glass px-4 py-3 text-center min-w-[92px]">
                <div className="text-2xl font-bold gradient-text">
                  {isRTL ? "زنده" : "Live"}
                </div>
                <div className="text-white/40 text-xs">
                  {isRTL ? "نسخه آنلاین" : "Online demos"}
                </div>
              </div>
            </div>
          </div>
        </Motion.div>

        {featured && (
          <FeaturedProject
            project={featured}
            t={t}
            onDemo={() => openDemo(featured)}
          />
        )}

        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                  : "glass text-white/55 hover:text-white hover:bg-white/10"
              }`}
            >
              {category.label}
              <span className="ms-2 text-[11px] opacity-70">
                {countFor(category.id)}
              </span>
            </button>
          ))}
        </Motion.div>

        <Motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {gridProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                t={t}
                onDemo={() => openDemo(project)}
              />
            ))}
          </AnimatePresence>
        </Motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-white/40">
            {t.projects.empty}
          </div>
        )}

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl glass glow-border p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl">
            {t.projects.ctaTitle}
          </h2>
          <Link to="/contact">
            <Motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center gap-2"
            >
              {t.projects.ctaButton}
              {isRTL ? (
                <FaArrowLeft className="text-sm" />
              ) : (
                <FaArrowRight className="text-sm" />
              )}
            </Motion.button>
          </Link>
        </Motion.div>
      </div>

      <DemoModal
        project={currentProject}
        videoRef={videoRef}
        isRTL={isRTL}
        t={t}
        onClose={closeDemo}
      />
    </div>
  );
}

function FeaturedProject({ project, t, onDemo }) {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 }}
      className="relative mb-12 overflow-hidden rounded-3xl min-h-[360px] md:min-h-[440px] glow-border"
    >
      <img
        src={projectImages[project.id]}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/75 to-[#0a0a0f]/20" />
      <div className="relative z-10 h-full min-h-[360px] md:min-h-[440px] p-6 md:p-10 flex flex-col justify-end max-w-2xl">
        <span className="self-start mb-3 px-3 py-1 rounded-full text-xs bg-white/10 text-accent border border-white/10">
          {t.projects.featuredLabel}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          {project.title}
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg text-xs bg-white/10 text-white/70 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Motion.a
            href={projectUrls[project.id]}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium inline-flex items-center gap-2"
          >
            <FaExternalLinkAlt size={12} />
            {t.projects.viewLive}
          </Motion.a>
          <Motion.button
            onClick={onDemo}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2.5 rounded-full glass text-white text-sm font-medium border border-white/15 inline-flex items-center gap-2"
          >
            <FaPlay size={11} />
            {t.projects.viewDemo}
          </Motion.button>
        </div>
      </div>
    </Motion.article>
  );
}

function ProjectCard({ project, index, t, onDemo }) {
  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
      className="group rounded-2xl glass glow-border overflow-hidden flex flex-col"
    >
      <button
        type="button"
        onClick={onDemo}
        className="relative h-52 overflow-hidden text-start"
      >
        <img
          src={projectImages[project.id] || projectImages[1]}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
        <span className="absolute top-3 start-3 px-2.5 py-1 rounded-full text-[11px] bg-black/40 backdrop-blur-sm text-white/80 border border-white/10">
          {project.category}
        </span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
            <FaPlay className="text-white text-lg ms-0.5" />
          </span>
        </span>
      </button>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] bg-white/5 text-white/55 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={projectUrls[project.id]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl text-sm font-medium text-primary bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors inline-flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt size={11} />
            {t.projects.viewLive}
          </a>
          <button
            type="button"
            onClick={onDemo}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium text-accent bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors inline-flex items-center justify-center gap-2"
          >
            <FaPlay size={11} />
            {t.projects.viewDemo}
          </button>
        </div>
      </div>
    </Motion.article>
  );
}

function DemoModal({ project, videoRef, isRTL, t, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 video-overlay"
          onClick={onClose}
        >
          <Motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-12 end-0 p-3 rounded-full glass text-white/80 hover:text-white hover:bg-white/20 transition-all"
              aria-label={isRTL ? "بستن" : "Close"}
            >
              <FaTimes size={18} />
            </button>

            <div className="glass glow-border rounded-3xl overflow-hidden">
              <div className="p-4 md:p-5 border-b border-white/10 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/45 text-sm mt-0.5">
                    {project.category}
                  </p>
                </div>
                <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[11px] bg-accent/15 text-accent">
                  {t.projects.viewDemo}
                </span>
              </div>

              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  autoPlay
                  playsInline
                >
                  <source
                    src={projectVideos[project.id] || projectVideos[1]}
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="p-4 md:p-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={projectUrls[project.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-medium inline-flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt size={12} />
                  {t.projects.viewLive}
                </a>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
