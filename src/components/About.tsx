"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const SKILLS = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "Python / FastAPI",
  "PostgreSQL / Redis",
  "Docker / Kubernetes",
  "AWS / GCP",
  "CI/CD / DevOps",
];

export default function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="personal"
      className="relative z-10 px-8 md:px-14 py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="font-mono text-[0.72rem] tracking-[0.2em] mb-3"
        style={{ color: "#00e87a" }}
      >
        {t("about.tag")}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.08, duration: 0.4 }}
        className="font-mono font-bold mb-12 tracking-tight"
        style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
      >
        {t("about.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          {["about.p1", "about.p2", "about.p3"].map((key, i) => (
            <p key={key} className="font-mono text-[0.85rem] leading-loose" style={{ color: "#6b7a96" }}>
              {t(key)}
            </p>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 gap-3"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: 10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.35 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-[0.75rem] font-mono tracking-wide transition-all duration-200 cursor-default"
              style={{
                border: "1px solid rgba(0,232,122,0.18)",
                background: "rgba(0,232,122,0.03)",
                color: "#f0f4ff",
              }}
              whileHover={{
                x: 4,
                borderColor: "rgba(0,232,122,0.45)",
                background: "rgba(0,232,122,0.07)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#00e87a" }}
              />
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
