import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaPlay, FaTimes, FaImages, FaFilter, FaExpand } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

// Placeholder images - replace with actual project screenshots
const projectImages = {
  1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  2: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
  3: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  4: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80',
  5: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80',
  6: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  7: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  8: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  9: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
  10: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
  11: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
};

// Sample demo video (placeholder - replace with actual demo videos)
const demoVideoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const videoRef = useRef(null);

  const categories = [
    { id: 'all', label: isRTL ? 'همه' : 'All' },
    { id: 'fintech', label: isRTL ? 'فین‌تک' : 'FinTech' },
    { id: 'ecommerce', label: isRTL ? 'فروشگاهی' : 'E-commerce' },
    { id: 'corporate', label: isRTL ? 'شرکتی' : 'Corporate' },
    { id: 'healthcare', label: isRTL ? 'پزشکی' : 'Healthcare' },
  ];

  const categoryMap = {
    'FinTech': 'fintech',
    'فین‌تک': 'fintech',
    'E-commerce': 'ecommerce',
    'فروشگاهی': 'ecommerce',
    'Corporate': 'corporate',
    'شرکتی': 'corporate',
    'Healthcare': 'healthcare',
    'پزشکی': 'healthcare',
    'Dashboard': 'corporate',
    'داشبورد': 'corporate',
    'Education': 'corporate',
    'آموزشی': 'corporate',
    'Real Estate': 'corporate',
    'املاک': 'corporate',
  };

  const filteredProjects = t.projects.projectsList.filter((project) => {
    if (filter === 'all') return true;
    return categoryMap[project.category] === filter;
  });

  const openDemoModal = (project) => {
    setCurrentProject(project);
    setShowDemoModal(true);
  };

  const openGalleryModal = (project) => {
    setCurrentProject(project);
    setShowGalleryModal(true);
  };

  const closeDemoModal = () => {
    setShowDemoModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="min-h-screen py-32 animated-bg grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass text-accent text-sm mb-4"
          >
            {isRTL ? '💼 نمونه کارها' : '💼 Portfolio'}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{t.projects.title}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <FaFilter className="text-white/40" />
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                  : 'glass text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="group perspective-card"
              >
                <div className="glass rounded-3xl overflow-hidden card-hover tilt-card">
                  {/* Project Image with Play Overlay */}
                  <div 
                    className="relative h-56 overflow-hidden cursor-pointer"
                    onClick={() => openDemoModal(project)}
                  >
                    <img
                      src={projectImages[project.id]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60" />
                    
                    {/* Play Button Overlay */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30"
                      >
                        <FaPlay className="text-white text-2xl ml-1" />
                      </motion.div>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div 
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="absolute top-4 right-4"
                    >
                      <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-primary/80 to-accent/80 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.5 }}
                          className="px-3 py-1 rounded-lg text-xs bg-white/5 text-white/60 border border-white/10 hover:border-primary/50 hover:text-primary transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-sm font-medium hover:from-primary/30 hover:to-primary/20 transition-all flex items-center justify-center gap-2 border border-primary/20"
                      >
                        <FaExternalLinkAlt size={12} />
                        {t.projects.viewLive}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openDemoModal(project)}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-accent/20 to-accent/10 text-accent text-sm font-medium hover:from-accent/30 hover:to-accent/20 transition-all flex items-center justify-center gap-2 border border-accent/20"
                      >
                        <FaPlay size={12} />
                        {isRTL ? 'مشاهده دمو' : 'View Demo'}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-white/40 text-lg">
              {isRTL ? 'پروژه‌ای یافت نشد' : 'No projects found'}
            </p>
          </motion.div>
        )}
      </div>

      {/* Demo Video Modal */}
      <AnimatePresence>
        {showDemoModal && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 video-overlay"
            onClick={closeDemoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeDemoModal}
                className="absolute -top-12 right-0 p-3 rounded-full glass text-white/80 hover:text-white hover:bg-white/20 transition-all z-10"
              >
                <FaTimes size={20} />
              </motion.button>

              {/* Video Container */}
              <div className="glass rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white">
                    {currentProject.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {isRTL ? 'دمو پروژه' : 'Project Demo'}
                  </p>
                </div>

                {/* Video Player - No Download */}
                <div className="relative aspect-video bg-black">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    controls
                    controlsList="nodownload nofullscreen"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    autoPlay
                    playsInline
                  >
                    <source src={demoVideoUrl} type="video/mp4" />
                    {isRTL 
                      ? 'مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.'
                      : 'Your browser does not support the video tag.'
                    }
                  </video>
                  
                  {/* Watermark */}
                  <div className="absolute bottom-4 right-4 text-white/30 text-sm pointer-events-none">
                    haider.dev
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {currentProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={12} />
                    {t.projects.viewLive}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
