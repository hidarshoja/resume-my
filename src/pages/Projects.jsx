import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaPlay, FaCode, FaFilter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

// Placeholder images - you can replace these with actual project screenshots
const projectImages = {
  1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  2: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
  3: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  4: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80',
  5: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=80',
  6: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  7: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  8: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  9: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80',
  10: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  11: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
};

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <div className="min-h-screen py-32 animated-bg grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t.projects.title}</span>
          </h1>
          <p className="text-xl text-white/60">{t.projects.subtitle}</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <FaFilter className="text-white/40" />
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-primary text-white glow'
                  : 'glass text-white/60 hover:text-white'
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/80 text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-accent/80 backdrop-blur-sm text-white"
                    >
                      <FaPlay size={18} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-2 rounded-lg bg-primary/20 text-primary text-sm font-medium hover:bg-primary/30 transition-colors flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt size={12} />
                      {t.projects.viewLive}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-2 rounded-lg bg-accent/20 text-accent text-sm font-medium hover:bg-accent/30 transition-colors flex items-center justify-center gap-2"
                    >
                      <FaPlay size={12} />
                      {t.projects.viewVideo}
                    </motion.button>
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
            <FaCode className="mx-auto text-6xl text-white/20 mb-4" />
            <p className="text-white/40">
              {isRTL ? 'پروژه‌ای یافت نشد' : 'No projects found'}
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-3xl p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projectImages[selectedProject.id]}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h2 className="text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-white/60 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg bg-primary/20 text-primary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 rounded-xl bg-primary text-white font-medium"
                >
                  {t.projects.viewLive}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 rounded-xl bg-accent text-dark font-medium"
                >
                  {t.projects.viewVideo}
                </motion.button>
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

