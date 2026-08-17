import { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion as Motion,
  AnimatePresence,
} from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaCopy,
  FaCheck,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const [copyModal, setCopyModal] = useState(null);
  const [copied, setCopied] = useState(false);

  const email = "hidarshoja@gmail.com";
  const phone = "+989376228320";

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setCopyModal(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setCopyModal({
      type: "email",
      text: email,
      label: isRTL ? "ایمیل" : "Email",
    });
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setCopyModal({
      type: "phone",
      text: phone,
      label: isRTL ? "شماره تلفن" : "Phone",
    });
  };

  const navLinks = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/projects", label: t.nav.projects },
    { path: "/skills", label: t.nav.skills },
    { path: "/contact", label: t.nav.contact },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hidarshoja",
      label: isRTL ? "گیت‌هاب" : "GitHub",
      hover: "hover:text-white hover:border-white/40 hover:bg-white/10",
      onClick: null,
    },
    {
      icon: FaEnvelope,
      href: `mailto:${email}`,
      label: isRTL ? "ایمیل" : "Email",
      hover: "hover:text-accent hover:border-accent/40 hover:bg-accent/10",
      onClick: handleEmailClick,
    },
    {
      icon: FaPhone,
      href: "tel:+989376228320",
      label: isRTL ? "تلفن" : "Phone",
      hover: "hover:text-accent-2 hover:border-accent-2/40 hover:bg-accent-2/10",
      onClick: handlePhoneClick,
    },
  ];

  return (
    <footer className="relative mt-8 overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <div className="relative animated-bg">
        <div className="pointer-events-none absolute -top-24 start-1/4 w-72 h-72 rounded-full bg-primary/15 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 end-1/5 w-80 h-80 rounded-full bg-accent/10 blur-[110px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* CTA band */}
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 rounded-3xl glass glow-border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <p className="text-accent text-sm mb-2">
                {isRTL ? "آماده همکاری" : "Available for work"}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl leading-snug">
                {t.footer.ctaTitle}
              </h2>
            </div>
            <Link to="/contact">
              <Motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 36px rgba(99, 102, 241, 0.4)",
                }}
                whileTap={{ scale: 0.96 }}
                className="group px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center gap-2"
              >
                {t.footer.ctaButton}
                {isRTL ? (
                  <FaArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
                ) : (
                  <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                )}
              </Motion.button>
            </Link>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Brand */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <Link to="/" className="inline-block text-2xl font-bold mb-4">
                <span className="gradient-text">
                  {isRTL ? "حیدر" : "Haider"}
                </span>
                <span className="text-white/85">
                  {isRTL ? " شجاع" : " Shoja"}
                </span>
              </Link>
              <p className="text-white/50 leading-relaxed max-w-sm mb-5">
                {t.footer.tagline}
              </p>
              <p className="inline-flex items-center gap-2 text-sm text-white/45">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70" />
                  <span className="relative rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                {isRTL ? "آماده همکاری ریموت و هیبرید" : "Open to remote & hybrid roles"}
              </p>
            </Motion.div>

            {/* Nav */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="md:col-span-3"
            >
              <h3 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">
                {t.footer.explore}
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/65 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Motion.div>

            {/* Connect */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="md:col-span-4"
            >
              <h3 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">
                {t.footer.connect}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const className = `group flex items-center gap-2 px-4 py-2.5 rounded-full glass border border-white/10 text-white/60 transition-all ${link.hover}`;

                  if (link.onClick) {
                    return (
                      <Motion.button
                        key={link.label}
                        onClick={link.onClick}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.96 }}
                        className={className}
                        aria-label={link.label}
                      >
                        <link.icon size={16} />
                        <span className="text-sm">{link.label}</span>
                      </Motion.button>
                    );
                  }

                  return (
                    <Motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.96 }}
                      className={className}
                      aria-label={link.label}
                    >
                      <link.icon size={16} />
                      <span className="text-sm">{link.label}</span>
                    </Motion.a>
                  );
                })}
              </div>
            </Motion.div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/35">
            <p>{t.footer.copyright}</p>
            <p className="flex items-center gap-2">
              {t.footer.madeWith}
              <Motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex"
              >
                <FaHeart className="text-accent-2" />
              </Motion.span>
              {isRTL ? "۱۴۰۴" : "2025"}
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {copyModal && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setCopyModal(null)}
          >
            <Motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glass glow-border rounded-2xl p-6 max-w-sm w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setCopyModal(null)}
                className="absolute top-4 end-4 p-2 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaTimes size={14} />
              </button>

              <div className="text-center pt-2">
                <h3 className="text-lg font-bold text-white mb-2">
                  {copyModal.label}
                </h3>
                <div className="bg-dark/50 rounded-xl p-4 mb-4 border border-white/10">
                  <p className="text-white font-mono text-sm break-all">
                    {copyModal.text}
                  </p>
                </div>
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCopy(copyModal.text)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  {copied ? (
                    <>
                      <FaCheck size={16} />
                      {isRTL ? "کپی شد!" : "Copied!"}
                    </>
                  ) : (
                    <>
                      <FaCopy size={16} />
                      {isRTL ? "کپی کن" : "Copy"}
                    </>
                  )}
                </Motion.button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
