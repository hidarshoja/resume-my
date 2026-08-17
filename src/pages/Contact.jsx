import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTelegram,
  FaAt,
  FaCopy,
  FaCheck,
  FaTimes,
  FaClock,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const EMAIL = "hidarshoja@gmail.com";
const PHONE = "+989376228320";
const PHONE_ALT = "09232996418";

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const [copyModal, setCopyModal] = useState(null);
  const [copied, setCopied] = useState(false);

  const contactChannels = [
    {
      key: "phone",
      icon: FaPhone,
      label: t.contact.info.phone,
      value: "09376228320",
      subValue: PHONE_ALT,
      href: `tel:${PHONE}`,
      color: "#22d3ee",
      copyable: true,
      copyText: PHONE,
    },
    {
      key: "email",
      icon: FaEnvelope,
      label: t.contact.info.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      color: "#f472b6",
      copyable: true,
      copyText: EMAIL,
      primary: true,
    },
    {
      key: "github",
      icon: FaGithub,
      label: t.contact.info.github,
      value: "github.com/hidarshoja",
      href: "https://github.com/hidarshoja",
      color: "#ffffff",
    },
    {
      key: "linkedin",
      icon: FaLinkedin,
      label: t.contact.info.linkedin,
      value: "linkedin.com/in/hidar-shoja",
      href: "https://www.linkedin.com/in/hidar-shoja-413aa4244/",
      color: "#0077b5",
    },
    {
      key: "telegram",
      icon: FaTelegram,
      label: t.contact.info.telegram,
      value: "@H_programmer",
      href: "https://t.me/H_programmer",
      color: "#0088cc",
    },
    {
      key: "rubika",
      icon: FaAt,
      label: t.contact.info.rubika,
      value: "@hidar_shoja_programer",
      href: "https://rubika.ir/hidar_shoja_programer",
      color: "#ff6b6b",
    },
  ];

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

  const openCopyModal = (channel) => {
    setCopyModal({
      label: channel.label,
      text: channel.copyText,
    });
  };

  const handleChannelClick = (channel, event) => {
    if (channel.copyable) {
      event.preventDefault();
      openCopyModal(channel);
    }
  };

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
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70" />
              <span className="relative rounded-full h-2 w-2 bg-green-400" />
            </span>
            {t.contact.eyebrow}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="gradient-text">{t.contact.title}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Intro panel */}
          <Motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-3xl glass glow-border p-6 md:p-8 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t.contact.collaborateTitle}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                {t.contact.description}
              </p>

              <div className="space-y-3 mb-6">
                <InfoRow
                  icon={FaMapMarkerAlt}
                  label={t.contact.location}
                  value={t.contact.locationValue}
                />
                <InfoRow
                  icon={FaClock}
                  label={t.contact.availability}
                  value={t.contact.responseTime}
                />
              </div>

              <p className="text-white/40 text-xs tracking-[0.18em] uppercase mb-3">
                {t.contact.helpWith}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {t.contact.helpList.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 border border-white/10 p-5">
                <p className="text-accent text-sm mb-1">
                  {t.contact.preferredContact}
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white font-semibold text-lg hover:text-accent transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </Motion.aside>

          {/* Contact channels */}
          <div className="lg:col-span-7">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl glass glow-border p-6 md:p-8"
            >
              <h2 className="text-accent text-sm mb-5">{t.contact.channels}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {contactChannels.map((channel, index) => (
                  <ContactCard
                    key={channel.key}
                    channel={channel}
                    index={index}
                    onClick={(event) => handleChannelClick(channel, event)}
                  />
                ))}
              </div>
            </Motion.div>
          </div>
        </div>
      </div>

      <CopyModal
        modal={copyModal}
        copied={copied}
        t={t}
        onClose={() => setCopyModal(null)}
        onCopy={handleCopy}
      />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
      <Icon className="text-accent mt-0.5 shrink-0" />
      <div>
        <p className="text-white/40 text-xs">{label}</p>
        <p className="text-white text-sm">{value}</p>
      </div>
    </div>
  );
}

function ContactCard({ channel, index, onClick }) {
  const Wrapper = channel.copyable ? "button" : "a";
  const linkProps = channel.copyable
    ? { type: "button", onClick }
    : {
        href: channel.href,
        target: "_blank",
        rel: "noopener noreferrer",
      };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 + index * 0.05 }}
    >
      <Wrapper
        {...linkProps}
        className={`group w-full text-start flex items-center gap-3 p-4 rounded-2xl glass glow-border transition-all hover:-translate-y-0.5 ${
          channel.primary ? "border-accent/20" : ""
        }`}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${channel.color}18` }}
        >
          <channel.icon size={20} style={{ color: channel.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white/40 text-xs">{channel.label}</p>
          <p className="text-white font-medium truncate group-hover:text-accent transition-colors">
            {channel.value}
          </p>
          {channel.subValue && (
            <p className="text-white/50 text-xs">{channel.subValue}</p>
          )}
        </div>
        {channel.copyable && (
          <FaCopy className="text-white/30 group-hover:text-accent shrink-0" />
        )}
      </Wrapper>
    </Motion.div>
  );
}

function CopyModal({ modal, copied, t, onClose, onCopy }) {
  return (
    <AnimatePresence>
      {modal && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <Motion.div
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            className="glass glow-border rounded-2xl p-6 max-w-sm w-full relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 end-4 p-2 rounded-full glass text-white/60 hover:text-white"
            >
              <FaTimes size={14} />
            </button>
            <h3 className="text-lg font-bold text-white mb-2 pt-1">
              {modal.label}
            </h3>
            <div className="bg-dark/50 rounded-xl p-4 mb-4 border border-white/10">
              <p className="text-white font-mono text-sm break-all">
                {modal.text}
              </p>
            </div>
            <Motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onCopy(modal.text)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <FaCheck size={14} />
                  {t.contact.copied}
                </>
              ) : (
                <>
                  <FaCopy size={14} />
                  {t.contact.copy}
                </>
              )}
            </Motion.button>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
