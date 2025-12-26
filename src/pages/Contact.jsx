import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTelegram,
  FaAt,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: FaPhone,
      label: t.contact.info.phone,
      value: "09376228320",
      subValue: "09232996418",
      href: "tel:+989376228320",
      color: "#22d3ee",
    },
    {
      icon: FaEnvelope,
      label: t.contact.info.email,
      value: "hidarshoja@gmail.com",
      href: "mailto:hidarshoja@gmail.com",
      color: "#f472b6",
    },
    {
      icon: FaGithub,
      label: t.contact.info.github,
      value: "github.com/hidarshoja",
      href: "https://github.com/hidarshoja",
      color: "#ffffff",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hidar-shoja-413aa4244",
      href: "https://www.linkedin.com/in/hidar-shoja-413aa4244/",
      color: "#0077b5",
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      value: "@H_programmer",
      href: "https://t.me/H_programmer",
      color: "#0088cc",
    },
    {
      icon: FaAt,
      label: "Rubika",
      value: "@hidar_shoja_programer",
      href: "https://rubika.ir/hidar_shoja_programer",
      color: "#ff6b6b",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
            {isRTL ? "📬 ارتباط با من" : "📬 Reach Out"}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="glass rounded-3xl p-8 md:p-10 h-full">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-4"
              >
                {isRTL ? "🤝 بیایید با هم کار کنیم" : "🤝 Let's Collaborate"}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-white/60 mb-8 leading-relaxed"
              >
                {t.contact.description}
              </motion.p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: isRTL ? -10 : 10 }}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/20"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: `${info.color}15`,
                        boxShadow: `0 0 20px ${info.color}20`,
                      }}
                    >
                      <info.icon size={24} style={{ color: info.color }} />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-white/40 text-sm mb-1">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                      {info.subValue && (
                        <p className="text-white/60 text-sm">{info.subValue}</p>
                      )}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-accent"
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Location Card */}
              <motion.div
                variants={itemVariants}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaMapMarkerAlt className="text-accent text-xl" />
                  </motion.div>
                  <div>
                    <p className="text-white/40 text-sm">
                      {isRTL ? "موقعیت" : "Location"}
                    </p>
                    <p className="text-white font-medium">
                      {isRTL ? "ایران 🇮🇷" : "Iran 🇮🇷"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
