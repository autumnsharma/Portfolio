"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BackgroundBeams } from "./ui/background-beams";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative z-10 px-8 md:px-14 py-24 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <BackgroundBeams className="opacity-30" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-[0.72rem] tracking-[0.2em] mb-3"
          style={{ color: "#00e87a" }}
        >
          {t("contact.tag")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.4 }}
          className="font-mono font-bold mb-12 tracking-tight"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
        >
          {t("contact.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <p className="font-mono text-[0.83rem] leading-loose mb-8" style={{ color: "#6b7a96" }}>
              {t("contact.intro")}
            </p>
            {[
              { icon: "fas fa-envelope", text: "you@email.com", href: "mailto:you@email.com" },
              { icon: "fab fa-github",   text: "github.com/yourusername", href: "#" },
              { icon: "fab fa-linkedin", text: "linkedin.com/in/yourprofile", href: "#" },
            ].map(({ icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="flex items-center gap-4 font-mono text-[0.8rem] mb-4 no-underline transition-colors duration-200"
                style={{ color: "#6b7a96" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00e87a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7a96")}
              >
                <i className={icon} style={{ color: "#00e87a", width: "18px", textAlign: "center" }} />
                {text}
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            {[
              { key: "contact.name",    type: "text",  phKey: "contact.name.placeholder" },
              { key: "contact.email",   type: "email", phKey: "contact.email.placeholder" },
            ].map(({ key, type, phKey }) => (
              <div key={key}>
                <label
                  className="block font-mono text-[0.72rem] tracking-[0.1em] mb-2"
                  style={{ color: "#6b7a96" }}
                >
                  {t(key)}
                </label>
                <input
                  type={type}
                  placeholder={t(phKey)}
                  className="w-full font-mono text-[0.82rem] px-4 py-3 rounded-lg outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#f0f4ff",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#00e87a";
                    e.currentTarget.style.background = "rgba(0,232,122,0.04)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                />
              </div>
            ))}

            <div>
              <label
                className="block font-mono text-[0.72rem] tracking-[0.1em] mb-2"
                style={{ color: "#6b7a96" }}
              >
                {t("contact.message")}
              </label>
              <textarea
                rows={5}
                placeholder={t("contact.message.placeholder")}
                className="w-full font-mono text-[0.82rem] px-4 py-3 rounded-lg outline-none resize-y transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f0f4ff",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#00e87a";
                  e.currentTarget.style.background = "rgba(0,232,122,0.04)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              />
            </div>

            <motion.button
              type="submit"
              className="inline-flex items-center gap-3 font-mono font-bold text-[0.75rem] tracking-[0.1em] px-8 py-4 rounded-full self-start"
              style={{ background: "#00e87a", color: "#080c18", border: "none", cursor: "pointer" }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,232,122,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              {t("contact.send")}
              <i className="fas fa-paper-plane" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
