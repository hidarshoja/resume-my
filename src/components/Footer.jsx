import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaCopy,
  FaCheck,
  FaTimes,
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

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hidarshoja",
      label: "GitHub",
      onClick: null, // GitHub stays as link
    },
    {
      icon: FaEnvelope,
      href: "mailto:hidarshoja@gmail.com",
      label: "Email",
      onClick: handleEmailClick,
    },
    {
      icon: FaPhone,
      href: "tel:+989376228320",
      label: "Phone",
      onClick: handlePhoneClick,
    },
  ];

  return (
    <footer className="relative py-12 glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold"
          >
            <span className="gradient-text">{isRTL ? "حیدر" : "Haider"}</span>
            <span className="text-white/80">{isRTL ? " شجاع" : " Shoja"}</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => {
              if (link.onClick) {
                // Email and Phone - show copy modal
                return (
                  <motion.button
                    key={link.label}
                    onClick={link.onClick}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full glass text-white/60 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </motion.button>
                );
              } else {
                // GitHub - regular link
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full glass text-white/60 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </motion.a>
                );
              }
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm flex items-center gap-2"
          >
            {t.footer.madeWith}
            <FaHeart className="text-red-500" />
            {isRTL ? "۲۰۲۴" : "2024"}
          </motion.p>
        </div>
      </div>

      {/* Copy Modal */}
      <AnimatePresence>
        {copyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setCopyModal(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glass rounded-2xl p-6 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setCopyModal(null)}
                className="absolute top-4 left-4 p-2 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaTimes size={14} />
              </button>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">
                  {copyModal.label}
                </h3>
                <div className="bg-dark/50 rounded-xl p-4 mb-4 border border-white/10">
                  <p className="text-white font-mono text-sm break-all">
                    {copyModal.text}
                  </p>
                </div>
                <motion.button
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
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
